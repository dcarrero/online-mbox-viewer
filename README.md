# Online Mbox Viewer

**Read `.mbox` email archives online — free, private, and 100% in your browser. Your file is never uploaded.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

**English** · [Español](README-ES.md) · [Deutsch](README-DE.md) · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## Why this project exists

A `.mbox` file is a whole mailbox squeezed into a single file — the format you get from a **Google Takeout** export, **Apple Mail**, or **Thunderbird**. Opening one usually means installing a desktop email client and importing it.

Online Mbox Viewer skips all of that: drop the file on the page and read it. The catch most "online" tools have is that they upload your email to a server. This one doesn't — **the entire viewer runs as JavaScript in your browser**, so your messages never leave your device.

## Features

- **100% client-side** — the `.mbox` file is parsed in memory on your computer. No upload, no backend, no account.
- **Safe rendering** — message HTML is sanitized with [DOMPurify](https://github.com/cure53/DOMPurify) and shown inside a sandboxed `<iframe>` with a strict Content Security Policy.
- **No tracking pixels** — remote images are blocked by default; you can load them per message. Inline images are embedded locally.
- **Gmail-aware** — reads `X-Gmail-Labels` and lets you filter the message list by label. Attachments are downloadable.
- **Multilingual & SEO-ready** — 10 languages with localized URLs, `hreflang`, sitemap and structured data.
- **Fast & static** — built with Astro, deployed on Cloudflare Pages.

## Also: Mbox Viewer for Mac and Windows

The online viewer is tuned for files up to **25 MB**. For full Gmail Takeout exports, full-text search, folders and export, there is a native desktop app — **[Mbox Viewer](https://mboxviewerpro.com)** for Mac and Windows.

## Related projects

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — the open-source terminal (CLI/TUI) tool to read, search and export `.mbox` archives. It's the sibling project and a direct source of inspiration for this viewer.
- **[Mbox Viewer](https://mboxviewerpro.com)** — the native desktop app for Mac and Windows, for archives of any size.

## Tech stack

- [Astro 5](https://astro.build) (static output) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) for MIME parsing, [DOMPurify](https://github.com/cure53/DOMPurify) for sanitization
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com)

## Development

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Node 22+ is recommended (see `.node-version`).

## Deploy (Cloudflare Pages)

- **Build command:** `pnpm build`
- **Build output directory:** `dist`

The build also generates `dist/_redirects` (301s from English slugs under a language prefix to the localized slug) and `dist/sitemap-index.xml`.

## Project structure

```
src/
├── components/        UI + page components (Header, Footer, viewer, etc.)
├── data/              content in data files (viewer copy, FAQ, compare, legal…)
├── i18n/              locales, localized routes, UI strings
├── layouts/           BaseLayout (SEO, hreflang, Open Graph, analytics)
├── pages/             routes (English at root, /[locale]/ for the rest)
├── scripts/           mbox-viewer.ts — the client-side viewer engine
└── styles/            global.css (design tokens)
```

## License

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Part of the **mbox** family of open tools, alongside **[mboxShell](https://github.com/dcarrero/mboxshell)** (terminal) — the related project and source of inspiration — and **[Mbox Viewer](https://mboxviewerpro.com)** (desktop). Built by [David Carrero Fernández-Baillo](https://carrero.es).
