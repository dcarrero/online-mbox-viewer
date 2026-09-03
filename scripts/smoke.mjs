/**
 * Comprobaciones de humo sobre `dist/`. Sin dependencias: `node scripts/smoke.mjs`
 * después de `pnpm build`.
 *
 * Cada assert de aquí corresponde a algo que se rompió de verdad el 2026-09-03
 * y que ninguna revisión de código detectó. No añadas comprobaciones "por si
 * acaso": si una falla, tiene que significar que algo está roto.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
let failed = 0;
const ok = (name) => console.log(`  ok    ${name}`);
const bad = (name, detail) => {
  failed++;
  console.log(`  FALLA ${name}\n        ${detail}`);
};
const check = (name, cond, detail) => (cond ? ok(name) : bad(name, detail));

const html = (p) => readFileSync(join(DIST, p), "utf8");
const walk = (d, out = []) => {
  for (const e of readdirSync(d)) {
    const f = join(d, e);
    statSync(f).isDirectory() ? walk(f, out) : e.endsWith(".html") && out.push(f);
  }
  return out;
};

console.log("\nCabeceras y CSP");
const headers = readFileSync(join(DIST, "_headers"), "utf8");
const csp = (headers.match(/Content-Security-Policy: (.*)/) || [])[1] || "";
check("la CSP se genera", csp.length > 0, "no hay Content-Security-Policy en _headers");
// El iframe srcdoc hereda esta política: sin data: mueren las imágenes cid:,
// y sin https: "mostrar imágenes" no funciona nunca (v0.7.3).
check("img-src permite data:", /img-src[^;]*\bdata:/.test(csp), csp);
check("img-src permite https:", /img-src[^;]*\shttps:/.test(csp), csp);
// Hosts que solo se descubren en un navegador, no leyendo dist/ (v0.6.9, v0.7.7).
check(
  "connect-src cubre los hosts regionales de GA",
  /connect-src[^;]*\*\.google-analytics\.com/.test(csp),
  csp,
);
check(
  "script-src permite el beacon de Cloudflare",
  /script-src[^;]*static\.cloudflareinsights\.com/.test(csp),
  csp,
);
check("hay hashes de los scripts inline", (csp.match(/'sha256-/g) || []).length >= 2, csp);

console.log("\nScripts inline: todos hasheados");
// Si un script inline nuevo no entra en la CSP, la página se rompe en
// producción y en local no, porque local no aplica las cabeceras.
const hashes = new Set([...csp.matchAll(/'(sha256-[^']+)'/g)].map((m) => m[1]));
const { createHash } = await import("node:crypto");
let inlineTotal = 0;
let inlineSinHash = [];
for (const f of walk(DIST)) {
  for (const m of readFileSync(f, "utf8").matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\ssrc=/.test(m[1])) continue;
    if (/type=["'](application|text)\/(ld\+)?json["']/.test(m[1])) continue;
    inlineTotal++;
    const h = "sha256-" + createHash("sha256").update(m[2], "utf8").digest("base64");
    if (!hashes.has(h)) inlineSinHash.push(`${f}: ${m[2].slice(0, 60).trim()}…`);
  }
}
check(
  `los ${inlineTotal} scripts inline están en la CSP`,
  inlineSinHash.length === 0,
  inlineSinHash.join("\n        "),
);

console.log("\nCarga del visor");
const home = html("index.html");
check(
  "la home no trae el visor en el arranque",
  !/mbox-viewer[.\w-]*\.js/.test(home),
  "el chunk del visor se referencia desde el HTML: la carga perezosa se ha perdido",
);
check(
  "el visor existe como chunk aparte",
  readdirSync(join(DIST, "_astro")).some((f) => f.startsWith("mbox-viewer")),
  "no hay chunk mbox-viewer-*.js",
);
check(
  "el CSS no va inlinado en cada página",
  readdirSync(join(DIST, "_astro")).some((f) => f.endsWith(".css")),
  "no hay CSS externo: inlineStylesheets volvió a 'always'",
);

console.log("\nContenido");
const pages = walk(DIST);
const conDominioViejo = pages.filter((f) => readFileSync(f, "utf8").includes("mboxviewer.net"));
check("no queda el dominio antiguo", conDominioViejo.length === 0, conDominioViejo.join(", "));
const conWindowsPendiente = pages.filter((f) =>
  /Windows coming soon|Windows próximamente|Windows en breve/.test(readFileSync(f, "utf8")),
);
check(
  "no se anuncia Windows como pendiente",
  conWindowsPendiente.length === 0,
  conWindowsPendiente.join(", "),
);

console.log("\ni18n");
// Añadir una clave y olvidarla en un idioma deja ese idioma en blanco sin que
// nada falle: el build no lo mira y en pantalla solo se ve un hueco.
const uiDir = "src/i18n/ui";
const claves = {};
for (const f of readdirSync(uiDir).filter((f) => f.endsWith(".ts") && f !== "index.ts")) {
  claves[f] = new Set([...readFileSync(join(uiDir, f), "utf8").matchAll(/^\s*"([\w.]+)":/gm)].map((m) => m[1]));
}
const locales = Object.keys(claves);
const base = claves["en.ts"];
check("hay 10 locales de interfaz", locales.length === 10, locales.join(", "));
for (const f of locales) {
  if (f === "en.ts") continue;
  const faltan = [...base].filter((k) => !claves[f].has(k));
  const sobran = [...claves[f]].filter((k) => !base.has(k));
  check(
    `${f} tiene las mismas claves que en.ts`,
    faltan.length === 0 && sobran.length === 0,
    `faltan: ${faltan.join(", ") || "-"} | sobran: ${sobran.join(", ") || "-"}`,
  );
}

// Lo mismo para las cadenas del visor, que viven en un fichero aparte.
const viewer = readFileSync("src/data/viewer.ts", "utf8");
const bloques = [...viewer.matchAll(/^ {4}("?[\w-]+"?): \{$/gm)];
check("hay 10 locales en viewer.ts", bloques.length === 10, String(bloques.length));
const clavesDe = (i) => {
  const ini = bloques[i].index;
  const fin = i + 1 < bloques.length ? bloques[i + 1].index : viewer.length;
  return new Set([...viewer.slice(ini, fin).matchAll(/^ {6}(\w+):/gm)].map((m) => m[1]));
};
const baseViewer = clavesDe(0);
for (let i = 1; i < bloques.length; i++) {
  const nombre = bloques[i][1].replace(/"/g, "");
  const faltan = [...baseViewer].filter((k) => !clavesDe(i).has(k));
  check(`viewer.ts: ${nombre} está completo`, faltan.length === 0, `faltan: ${faltan.join(", ")}`);
}

console.log(`\n${failed === 0 ? "TODO OK" : failed + " COMPROBACIONES FALLAN"}\n`);
process.exit(failed === 0 ? 0 : 1);
