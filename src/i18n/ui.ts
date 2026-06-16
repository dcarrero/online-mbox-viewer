import type { Locale } from "./config";
import { en, type UIKey } from "./ui/en";
import { es } from "./ui/es";
import { de } from "./ui/de";
import { fr } from "./ui/fr";
import { ptbr } from "./ui/pt-br";
import { ja } from "./ui/ja";
import { it } from "./ui/it";
import { nl } from "./ui/nl";
import { ko } from "./ui/ko";
import { pl } from "./ui/pl";

export type { UIKey };

/**
 * Mapa de idioma → cadenas. `en` es la fuente completa; el resto son parciales
 * y caen a `en` mediante useTranslations() para las claves que falten.
 */
export const ui: Partial<Record<Locale, Partial<Record<UIKey, string>>>> & {
  en: Record<UIKey, string>;
} = {
  en,
  es,
  de,
  fr,
  "pt-br": ptbr,
  ja,
  it,
  nl,
  ko,
  pl,
};
