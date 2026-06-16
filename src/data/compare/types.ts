export interface CompareRow {
  feature: string;
  online: string;
  desktop: string;
}
export interface CompareContent {
  title: string;
  description: string;
  intro: string;
  onlineLabel: string;
  desktopLabel: string;
  rows: CompareRow[];
  closing: string;
}
