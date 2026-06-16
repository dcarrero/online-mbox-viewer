import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  isLocale,
  type Locale,
} from "./config";
import { ui, type UIKey } from "./ui";
import { routePath, switchLocaleUrl, type RouteKey } from "./routes";

/**
 * Extrae el locale del primer segmento de la URL.
 * `/` → en, `/es/...` → es.
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, seg] = url.pathname.split("/");
  if (seg && isLocale(seg)) return seg;
  return DEFAULT_LOCALE;
}

/**
 * Devuelve la función de traducción para un locale.
 * Cae a inglés si la cadena no existe en el idioma pedido.
 */
export function useTranslations(locale: Locale) {
  const dict = ui[locale] ?? {};
  const fallback = ui[DEFAULT_LOCALE];
  return function t(key: UIKey): string {
    return (dict as Record<string, string>)[key] ?? fallback[key] ?? key;
  };
}

/**
 * Construye una ruta con el prefijo de locale correcto.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = "/" + path.replace(/^\/+/, "");
  if (locale === DEFAULT_LOCALE) return ensureTrailing(clean);
  return ensureTrailing(`/${locale}${clean === "/" ? "" : clean}`);
}

/**
 * Dada una URL actual, devuelve la ruta equivalente en otro locale,
 * localizando el slug (p. ej. /es/preguntas/ ↔ /de/faq/).
 */
export function switchLocalePath(url: URL, target: Locale): string {
  return switchLocaleUrl(url, target);
}

function ensureTrailing(p: string): string {
  if (p === "/") return "/";
  return p.endsWith("/") ? p : p + "/";
}

export { LOCALES, LOCALE_META, DEFAULT_LOCALE, isLocale, routePath };
export type { Locale, RouteKey };
