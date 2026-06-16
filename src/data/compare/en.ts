import type { CompareContent } from "./types";

export const en: CompareContent = {
  title: "Online viewer vs desktop app",
  description:
    "Compare the free online MBOX viewer with the Mbox Viewer desktop app for Mac — file size, search, privacy and offline use.",
  intro:
    "Both read your email locally and privately. The browser viewer is the fastest way to peek at a small archive; the desktop app is built for big ones and power features.",
  onlineLabel: "Online viewer",
  desktopLabel: "Desktop app (Mac)",
  rows: [
    { feature: "Price", online: "Free", desktop: "Free trial · one-time purchase" },
    { feature: "Install", online: "Nothing — runs in the browser", desktop: "Mac App Store" },
    { feature: "Max file size", online: "Up to 25 MB", desktop: "Any size (streams huge files)" },
    { feature: "Privacy", online: "100% local, nothing uploaded", desktop: "100% local, fully offline" },
    { feature: "Full-text search", online: "—", desktop: "Yes" },
    { feature: "Folders & Gmail labels", online: "Filter by label", desktop: "Full folder tree & labels" },
    { feature: "Attachments", online: "Download", desktop: "Download & preview" },
    { feature: "Export / convert", online: "—", desktop: "Export to EML, PDF and more" },
    { feature: "Platforms", online: "Any modern browser", desktop: "macOS now · Windows coming soon" },
  ],
  closing:
    "Rule of thumb: if your file is under 25 MB and you just need to read it, the online viewer is all you need. For a full Gmail Takeout, archiving or search, get the desktop app.",
};

