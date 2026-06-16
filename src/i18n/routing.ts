import { LOCALES, DEFAULT_LOCALE, type Locale } from "./config";

/**
 * getStaticPaths para los archivos `[locale]/...` que cubren todos los idiomas
 * EXCEPTO el predeterminado (que se sirve sin prefijo desde la raíz).
 */
export function nonDefaultLocalePaths() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({
    params: { locale },
    props: { locale: locale as Locale },
  }));
}
