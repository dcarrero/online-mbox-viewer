import { LOCALES, DEFAULT_LOCALE, isLocale, type Locale } from "./config";

/**
 * Slugs de URL localizados por ruta e idioma.
 *
 * - El inglés se sirve sin prefijo: /faq/, /compare/.
 * - El resto con prefijo y slug traducido: /es/preguntas/, /de/vergleich/.
 * - **Japonés y coreano usan el slug en inglés** (para evitar URLs con
 *   caracteres percent-encoded).
 * - Los slugs son ASCII sin acentos a propósito (URLs limpias).
 * - `home` es el visor: vive en la raíz (/) o en /<locale>/.
 */

export type RouteKey =
  | "home"
  | "how-to"
  | "faq"
  | "compare"
  | "privacy"
  | "terms";

/** Rutas que solo existen en la raíz en inglés (sin prefijo de idioma). */
export const ROOT_ONLY: Exclude<RouteKey, "home">[] = [];

/** Rutas de sección con índice de un solo segmento (router [locale]/[section]/). */
export const SECTION_ROUTES: Exclude<RouteKey, "home">[] = [
  "how-to",
  "faq",
  "compare",
  "privacy",
  "terms",
];

/** Rutas de sección que además tienen sub-páginas. Ninguna por ahora. */
export const SUBPAGE_ROUTES: RouteKey[] = [];

type SlugMap = Partial<Record<Locale, string>> & { en: string };

const S = (base: string, over: Partial<Record<Locale, string>> = {}): SlugMap => ({
  en: base,
  // ja y ko heredan el inglés salvo override explícito
  ...over,
});

export const ROUTE_SLUGS: Record<Exclude<RouteKey, "home">, SlugMap> = {
  "how-to": S("how-to-open-mbox", {
    es: "como-abrir-mbox",
    de: "mbox-datei-oeffnen",
    fr: "ouvrir-un-fichier-mbox",
    "pt-br": "como-abrir-mbox",
    it: "come-aprire-mbox",
    nl: "mbox-bestand-openen",
    pl: "jak-otworzyc-mbox",
  }),
  faq: S("faq", {
    es: "preguntas",
    "pt-br": "perguntas",
    it: "domande",
  }),
  compare: S("compare", {
    es: "comparar",
    de: "vergleich",
    fr: "comparer",
    "pt-br": "comparar",
    it: "confronto",
    nl: "vergelijken",
    pl: "porownanie",
  }),
  privacy: S("privacy", {
    es: "privacidad",
    de: "datenschutz",
    fr: "confidentialite",
    "pt-br": "privacidade",
    pl: "prywatnosc",
  }),
  terms: S("terms", {
    es: "terminos",
    de: "nutzungsbedingungen",
    fr: "conditions",
    "pt-br": "termos",
    it: "termini",
    nl: "voorwaarden",
    pl: "warunki",
  }),
};

/** Slug localizado de una ruta (ja/ko → inglés vía fallback). */
export function getSlug(key: Exclude<RouteKey, "home">, locale: Locale): string {
  const map = ROUTE_SLUGS[key];
  return map[locale] ?? map[DEFAULT_LOCALE];
}

function withTrailing(p: string): string {
  if (p === "/") return "/";
  return p.endsWith("/") ? p : p + "/";
}

/**
 * Construye la URL de una ruta en un idioma.
 * routePath("faq", "es")   → "/es/preguntas/"
 * routePath("compare", "en") → "/compare/"
 * routePath("home", "de")  → "/de/"
 */
export function routePath(key: RouteKey, locale: Locale, sub?: string): string {
  const subPart = sub ? `${sub}/` : "";

  if (key === "home") {
    return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
  }

  if (ROOT_ONLY.includes(key)) {
    return withTrailing(`/${getSlug(key, locale)}/${subPart}`);
  }

  const slug = getSlug(key, locale);
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return withTrailing(`${prefix}/${slug}/${subPart}`);
}

export interface ResolvedRoute {
  locale: Locale;
  key: RouteKey | null;
  sub?: string;
}

/** Identifica (locale, routeKey, sub) a partir de una URL. */
export function resolveUrl(url: URL): ResolvedRoute {
  const segments = url.pathname.split("/").filter(Boolean);
  let locale: Locale = DEFAULT_LOCALE;
  if (segments.length && isLocale(segments[0])) {
    locale = segments.shift() as Locale;
  }
  if (segments.length === 0) return { locale, key: "home" };

  const first = segments[0];
  const sub = segments.slice(1).join("/") || undefined;

  for (const key of ROOT_ONLY) {
    if (getSlug(key, DEFAULT_LOCALE) === first) return { locale, key, sub };
  }
  for (const key of SECTION_ROUTES) {
    if (getSlug(key, locale) === first) return { locale, key, sub };
  }
  return { locale, key: null, sub };
}

/** Equivalente de la URL actual en otro idioma (con slug localizado). */
export function switchLocaleUrl(url: URL, target: Locale): string {
  const { key, sub } = resolveUrl(url);
  if (!key) {
    const segs = url.pathname.split("/").filter(Boolean);
    if (segs.length && isLocale(segs[0])) segs.shift();
    const rest = segs.join("/");
    const prefix = target === DEFAULT_LOCALE ? "" : `/${target}`;
    return withTrailing(`${prefix}/${rest}`);
  }
  return routePath(key, target, sub);
}

export { LOCALES, DEFAULT_LOCALE };
