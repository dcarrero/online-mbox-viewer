export interface FaqItem {
  q: string;
  a: string;
}
export interface FaqContent {
  title: string;
  description: string;
  intro: string;
  items: FaqItem[];
}
