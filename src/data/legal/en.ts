import type { LegalContent } from "./types";

const UPDATED = "June 2026";

export const en: LegalContent = {
  privacy: {
    title: "Privacy Policy",
    updated: UPDATED,
    description:
      "Online Mbox Viewer reads your .mbox file entirely in your browser. Nothing is uploaded, stored or shared.",
    intro:
      "Online Mbox Viewer is a free, browser-based tool to read .mbox email archives. This policy explains the (very small) amount of data the website handles. The short version: your email files never leave your device.",
    sections: [
      {
        heading: "Your files are processed locally",
        paragraphs: [
          "When you open a .mbox file, it is read directly from your device using your browser. The file is parsed in memory on your computer — it is never uploaded to any server, and we never see, store or transmit its contents.",
          "There is no account, no sign-in and no backend that touches your email. Closing or refreshing the page discards the file from memory.",
        ],
      },
      {
        heading: "What the website itself collects",
        paragraphs: [
          "The website uses Google Analytics 4 in cookieless mode by default (Consent Mode v2). No analytics cookies are set unless you explicitly accept them in the cookie banner. IP addresses are anonymized.",
          "We store a small preference in your browser's localStorage for the colour theme (light/dark) and for your cookie choice. These never leave your browser.",
        ],
      },
      {
        heading: "No tracking inside your email",
        paragraphs: [
          "When you read a message, remote images are blocked by default so that tracking pixels in marketing emails cannot phone home. You can choose to load remote images per message. Message HTML is sanitized and rendered inside a sandboxed iframe with a strict content security policy.",
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "The site is a static website served by Cloudflare Pages. Standard server logs (such as request metadata) may be processed by the hosting provider to deliver the site and protect it from abuse.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about this policy? Email support@mboxviewer.net.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: UPDATED,
    description: "The terms for using the free Online Mbox Viewer website.",
    intro:
      "By using Online Mbox Viewer you agree to these terms. The service is a free, browser-based viewer for .mbox files, provided as-is.",
    sections: [
      {
        heading: "Use of the service",
        paragraphs: [
          "Online Mbox Viewer is free to use for reading .mbox email archives in your browser. You may only open files you own or are authorized to access.",
          "The viewer is read-only: it does not modify, send or delete your email. It is intended for a quick look at small archives (up to 25 MB). For larger files and advanced features, use the desktop app, Mbox Viewer for Mac.",
        ],
      },
      {
        heading: "No warranty",
        paragraphs: [
          'The service is provided "as is", without warranties of any kind. We do not guarantee that every message in every .mbox variant will render perfectly. Always keep your own backups of important email archives.',
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by law, the author and publisher are not liable for any damages arising from the use of, or inability to use, this website.",
        ],
      },
      {
        heading: "Open source",
        paragraphs: [
          "The website source code is released under the MIT License. You are free to read, fork and reuse it according to that license.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Questions about these terms? Email support@mboxviewer.net."],
      },
    ],
  },
};

