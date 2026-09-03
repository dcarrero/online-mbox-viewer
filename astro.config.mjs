// @ts-check
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { LOCALES, DEFAULT_LOCALE } from "./src/i18n/config.ts";
import { SECTION_ROUTES, ROUTE_SLUGS, getSlug } from "./src/i18n/routes.ts";

/**
 * Integración: genera `dist/_redirects` (Cloudflare Pages) en cada build a
 * partir del manifest de slugs de `src/i18n/routes.ts`. Redirige el slug en
 * inglés bajo un prefijo de idioma al slug localizado canónico
 * (p. ej. /es/faq/ → /es/preguntas/), evitando 404 y contenido duplicado.
 * Al derivarse de la misma fuente que las rutas, nunca se desincroniza.
 */
function localizedSlugRedirects() {
  return {
    name: "localized-slug-redirects",
    hooks: {
      "astro:build:done": (
        /** @type {{ dir: URL, logger: { info: (msg: string) => void } }} */ { dir, logger },
      ) => {
        const lines = [];
        for (const locale of LOCALES) {
          if (locale === DEFAULT_LOCALE) continue;
          for (const key of SECTION_ROUTES) {
            const enSlug = ROUTE_SLUGS[key].en;
            const locSlug = getSlug(key, locale);
            if (locSlug === enSlug) continue; // ja/ko y locales sin traducción
            lines.push(`/${locale}/${enSlug}/* /${locale}/${locSlug}/:splat 301`);
          }
        }
        const out =
          [
            "# Auto-generado en build desde src/i18n/routes.ts — NO editar a mano.",
            "# Slug en inglés bajo prefijo de idioma → slug localizado canónico.",
            "",
          ].join("\n") +
          lines.join("\n") +
          "\n";
        writeFileSync(fileURLToPath(new URL("_redirects", dir)), out);
        logger.info(`_redirects generado (${lines.length} reglas)`);
      },
    },
  };
}

/**
 * Integración: escribe la Content-Security-Policy en `dist/_headers` con los
 * hashes SHA-256 de los scripts inline ejecutables que Astro deja en el HTML
 * (el anti-flash de tema y el arranque de GA, ambos `is:inline`, que
 * `experimental.csp` NO cubre). Se calculan del HTML ya construido, así que
 * no se pueden desincronizar del que se sirve.
 *
 * Cuidado al tocarla: el iframe del visor usa `srcdoc`, y un documento srcdoc
 * HEREDA la CSP del padre además de la suya propia. Si `img-src` deja de
 * permitir `data:`, las imágenes `cid:` incrustadas en los correos dejan de
 * verse; si `style-src` pierde `'unsafe-inline'`, el correo se queda sin
 * estilos. Ambos están comprobados en dist antes de escribir la cabecera.
 */
function contentSecurityPolicy() {
  return {
    name: "content-security-policy",
    hooks: {
      "astro:build:done": (
        /** @type {{ dir: URL, logger: { info: (msg: string) => void } }} */ { dir, logger },
      ) => {
        const root = fileURLToPath(dir);

        const htmlFiles = [];
        (function walk(d) {
          for (const e of readdirSync(d)) {
            const full = `${d}/${e}`;
            if (statSync(full).isDirectory()) walk(full);
            else if (e.endsWith(".html")) htmlFiles.push(full);
          }
        })(root);

        // Solo scripts inline EJECUTABLES: sin src, y sin un type de datos
        // (application/json, ld+json) que el navegador no ejecuta.
        const hashes = new Set();
        for (const f of htmlFiles) {
          const html = readFileSync(f, "utf8");
          for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
            const attrs = m[1];
            if (/\ssrc=/.test(attrs)) continue;
            if (/type=["'](application|text)\/(ld\+)?json["']/.test(attrs)) continue;
            hashes.add(`'sha256-${createHash("sha256").update(m[2], "utf8").digest("base64")}'`);
          }
        }

        const csp = [
          "default-src 'self'",
          "base-uri 'self'",
          "form-action 'none'",
          "frame-ancestors 'none'",
          "object-src 'none'",
          // Cloudflare Pages inyecta el beacon de Web Analytics EN EL EDGE, así
          // que no aparece en dist/ y no se ve al probar en local: la primera
          // CSP lo bloqueó en producción sin que nada lo delatara aquí.
          `script-src 'self' https://www.googletagmanager.com https://static.cloudflareinsights.com ${[...hashes].sort().join(" ")}`,
          // Las hojas van inlinadas (build.inlineStylesheets), y el srcdoc del
          // visor lleva su propio <style>.
          "style-src 'self' 'unsafe-inline'",
          // data: hace visibles las imágenes cid: de los correos, y https:
          // es imprescindible para el botón "mostrar imágenes": el srcdoc
          // hereda ESTA política además de la suya, así que sin https: aquí
          // las imágenes remotas se bloquean aunque el lector las permita.
          // Quien las bloquea por defecto es el visor, no esta cabecera.
          "img-src 'self' data: https:",
          "font-src 'self' data:",
          "media-src 'self' data:",
          "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://cloudflareinsights.com",
          "frame-src 'self'",
        ].join("; ");

        const headersPath = fileURLToPath(new URL("_headers", dir));
        const current = readFileSync(headersPath, "utf8");
        const out = current.replace(
          /^\/\*\n((?:  [A-Za-z-]+: .*\n)*)/m,
          (_m, block) => `/*\n${block}  Content-Security-Policy: ${csp}\n`,
        );
        writeFileSync(headersPath, out);
        logger.info(`CSP escrita (${hashes.size} hashes de scripts inline)`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://onlinemboxviewer.com",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    // "auto" inlina solo lo pequeño. Con "always", las 60 páginas repetían
    // ~7,6 KB gz de CSS en cada HTML y el prefetch de cada enlace volvía a
    // arrastrarlos, en vez de reutilizar /_astro/*.css, que _headers ya sirve
    // con immutable a un año.
    inlineStylesheets: "auto",
  },
  integrations: [sitemap(), localizedSlugRedirects(), contentSecurityPolicy()],
  vite: {
    plugins: [tailwindcss()],
  },
});
