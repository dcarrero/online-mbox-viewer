import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import type { LegalContent } from "./types";
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

export type { LegalContent, LegalDoc, LegalSection } from "./types";

const LEGAL: Partial<Record<Locale, LegalContent>> & { en: LegalContent } = {
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

export function getLegal(locale: Locale): LegalContent {
  return LEGAL[locale] ?? LEGAL[DEFAULT_LOCALE];
}
