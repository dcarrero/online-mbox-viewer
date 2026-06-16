import type { FaqContent } from "./types";

export const en: FaqContent = {
  title: "Frequently asked questions",
  description:
    "Answers about reading .mbox files online: privacy, file size limits, supported email clients and how it works.",
  intro: "Everything you might want to know before opening your .mbox file in the browser.",
  items: [
    {
      q: "Is the online MBOX viewer safe to use?",
      a: "Yes. Your file is read entirely inside your browser — it is never uploaded to a server. Message HTML is sanitized with DOMPurify and rendered in a sandboxed iframe, and remote images are blocked by default to stop tracking pixels.",
    },
    {
      q: "Is my email uploaded anywhere?",
      a: "No. There is no upload and no backend. The whole viewer runs as JavaScript in your browser, so the contents of your .mbox file never leave your device.",
    },
    {
      q: "What is the maximum file size?",
      a: "The online viewer handles files up to 25 MB so it stays fast in the browser. For larger archives — full Gmail Takeout exports, for example — use the desktop app, Mbox Viewer for Mac, which streams files of any size.",
    },
    {
      q: "Which email apps export .mbox files?",
      a: "Apple Mail (Mailbox ▸ Export Mailbox), Mozilla Thunderbird (with the ImportExportTools NG add-on) and Google Takeout (which exports your Gmail as a single .mbox) all produce .mbox files. Many other clients can import or export the format too.",
    },
    {
      q: "Can it open .eml files too?",
      a: "Yes. A single .eml message is opened as a one-message archive. The viewer also reads Gmail labels stored in the X-Gmail-Labels header and lets you filter the message list by label.",
    },
    {
      q: "Does it work offline?",
      a: "Once the page has loaded, parsing happens locally, so reading your file does not need a connection. The first page load does require the internet to fetch the site.",
    },
    {
      q: "Why are some images not shown?",
      a: "Remote images are blocked by default for your privacy, because marketing emails often use them as tracking pixels. A bar at the top of a message lets you load the images for that message if you trust the sender.",
    },
    {
      q: "Is it really free?",
      a: "Yes, the online viewer is completely free and open source (MIT licensed). The optional desktop app for Mac is a separate product for power users who need to open very large archives.",
    },
  ],
};

