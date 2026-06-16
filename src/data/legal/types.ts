export interface LegalSection {
  heading: string;
  paragraphs: string[];
}
export interface LegalDoc {
  title: string;
  updated: string;
  description: string;
  intro: string;
  sections: LegalSection[];
}
export interface LegalContent {
  privacy: LegalDoc;
  terms: LegalDoc;
}
