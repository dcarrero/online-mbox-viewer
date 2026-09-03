import type { HowToContent } from "./types";

export const en: HowToContent = {
  title: "How to open a .mbox file",
  description:
    "A short, plain guide to opening and reading .mbox email files online — no software to install, nothing uploaded.",
  intro:
    "A .mbox file is a single file that stores a whole mailbox: many email messages concatenated together. You don't need a mail client to read one — you can open it right here in your browser.",
  stepsHeading: "Open your file in 3 steps",
  steps: [
    { title: "Drag or choose the file", body: "On the home page, drag your .mbox file onto the drop area, or click it to browse for the file on your computer." },
    { title: "Browse the messages", body: "Every message is listed with its sender, subject and date. If the archive comes from Gmail, you can filter by label." },
    { title: "Read a message", body: "Click any message to read it. The email is shown safely, with remote images blocked by default and attachments available to download." },
  ],
  exportHeading: "How to get a .mbox file",
  exportIntro: "Most email apps can export to .mbox. The most common sources are:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Go to takeout.google.com, select Mail, and download. Gmail exports your messages as a single .mbox file." },
    { name: "Apple Mail", how: "Select a mailbox, then Mailbox ▸ Export Mailbox… Apple Mail writes an .mbox package to the folder you choose. That package is a folder: open it (right-click ▸ Show Package Contents) and use the mbox file inside." },
    { name: "Mozilla Thunderbird", how: "Install the ImportExportTools NG add-on, right-click a folder, and choose Export folder to export a .mbox file." },
  ],
  whatHeading: "What you can do here",
  what: [
    "Read every message with its full HTML formatting, safely sanitized.",
    "Download attachments straight from a message.",
    "Filter Gmail archives by their original labels.",
    "Keep everything private — your file never leaves your device.",
  ],
  desktopHeading: "Opening very large archives",
  desktopBody:
    "The online viewer is tuned for files up to 25 MB. A full Gmail Takeout can be several gigabytes — for those, use Mbox Viewer, the native desktop app for Mac and Windows, which streams archives of any size and adds search and export.",
};

