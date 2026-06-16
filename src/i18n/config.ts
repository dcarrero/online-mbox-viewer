/**
 * Configuración central de internacionalización.
 *
 * El idioma por defecto (en) se sirve sin prefijo (/), el resto con prefijo
 * (/es/, /de/, ...). Para añadir un idioma nuevo: agrégalo a LOCALES, define su
 * metadato en LOCALE_META y crea su archivo de cadenas en ./ui/<locale>.ts.
 */

export const DEFAULT_LOCALE = "en" as const;

export const LOCALES = [
  "en",
  "es",
  "de",
  "fr",
  "pt-br",
  "ja",
  "it",
  "nl",
  "ko",
  "pl",
] as const;

export type Locale = (typeof LOCALES)[number];

export interface LocaleMeta {
  /** Etiqueta nativa del idioma para el selector. */
  label: string;
  /** Código BCP-47 para el atributo lang / hreflang. */
  htmlLang: string;
  /** Dirección de escritura. */
  dir: "ltr" | "rtl";
  /** Código de país para Open Graph locale (ej. en_US). */
  ogLocale: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "English", htmlLang: "en", dir: "ltr", ogLocale: "en_US" },
  es: { label: "Español", htmlLang: "es", dir: "ltr", ogLocale: "es_ES" },
  de: { label: "Deutsch", htmlLang: "de", dir: "ltr", ogLocale: "de_DE" },
  fr: { label: "Français", htmlLang: "fr", dir: "ltr", ogLocale: "fr_FR" },
  "pt-br": { label: "Português (BR)", htmlLang: "pt-BR", dir: "ltr", ogLocale: "pt_BR" },
  ja: { label: "日本語", htmlLang: "ja", dir: "ltr", ogLocale: "ja_JP" },
  it: { label: "Italiano", htmlLang: "it", dir: "ltr", ogLocale: "it_IT" },
  nl: { label: "Nederlands", htmlLang: "nl", dir: "ltr", ogLocale: "nl_NL" },
  ko: { label: "한국어", htmlLang: "ko", dir: "ltr", ogLocale: "ko_KR" },
  pl: { label: "Polski", htmlLang: "pl", dir: "ltr", ogLocale: "pl_PL" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
