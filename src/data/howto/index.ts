import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import type { HowToContent } from "./types";
import { en } from "./en";
import { es } from "./es";
import { de } from "./de";
import { fr } from "./fr";
import { ptbr } from "./pt-br";
import { ja } from "./ja";
import { it } from "./it";
import { nl } from "./nl";
import { ko } from "./ko";
import { pl } from "./pl";

export type { HowToContent, HowToStep } from "./types";

const HOWTO: Partial<Record<Locale, HowToContent>> & { en: HowToContent } = {
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

export function getHowTo(locale: Locale): HowToContent {
  return HOWTO[locale] ?? HOWTO[DEFAULT_LOCALE];
}
