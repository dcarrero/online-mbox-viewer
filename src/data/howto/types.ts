export interface HowToStep {
  title: string;
  body: string;
}
export interface HowToContent {
  title: string;
  description: string;
  intro: string;
  stepsHeading: string;
  steps: HowToStep[];
  exportHeading: string;
  exportIntro: string;
  exporters: { name: string; how: string }[];
  whatHeading: string;
  what: string[];
  desktopHeading: string;
  desktopBody: string;
}
