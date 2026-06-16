import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import type { FaqContent } from "./types";
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

export type { FaqContent, FaqItem } from "./types";

const FAQ: Partial<Record<Locale, FaqContent>> & { en: FaqContent } = {
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

export function getFaq(locale: Locale): FaqContent {
  return FAQ[locale] ?? FAQ[DEFAULT_LOCALE];
}
