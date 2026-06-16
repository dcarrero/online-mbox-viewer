# Online Mbox Viewer

**Lees `.mbox` e-mailarchieven online — gratis, privé en 100% in je browser. Je bestand wordt nooit geüpload.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · [Deutsch](README-DE.md) · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · [Italiano](README-IT.md) · **Nederlands** · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## Waarom dit project bestaat

Een `.mbox`-bestand is een volledige mailbox samengeperst in één enkel bestand — het formaat dat je krijgt van een **Google Takeout**-export, **Apple Mail** of **Thunderbird**. Er een openen betekent meestal dat je een desktop-e-mailclient moet installeren en het bestand moet importeren.

Online Mbox Viewer slaat dat allemaal over: sleep het bestand op de pagina en lees het. De valkuil van de meeste "online" tools is dat ze je e-mail naar een server uploaden. Deze niet — **de volledige viewer draait als JavaScript in je browser**, dus je berichten verlaten nooit je apparaat.

## Functies

- **100% client-side** — het `.mbox`-bestand wordt in het geheugen op je computer ontleed. Geen upload, geen backend, geen account.
- **Veilige weergave** — de HTML van berichten wordt opgeschoond met [DOMPurify](https://github.com/cure53/DOMPurify) en getoond in een sandboxed `<iframe>` met een strikt Content Security Policy.
- **Geen trackingpixels** — externe afbeeldingen worden standaard geblokkeerd; je kunt ze per bericht laden. Inline afbeeldingen worden lokaal ingesloten.
- **Gmail-bewust** — leest `X-Gmail-Labels` en laat je de berichtenlijst op label filteren. Bijlagen zijn downloadbaar.
- **Meertalig & SEO-klaar** — 10 talen met gelokaliseerde URL's, `hreflang`, sitemap en gestructureerde data.
- **Snel & statisch** — gebouwd met Astro, uitgerold op Cloudflare Pages.

## Ook: Mbox Viewer voor Mac

De online viewer is afgestemd op bestanden tot **25 MB**. Voor volledige Gmail Takeout-exports, zoeken op volledige tekst, mappen en exporteren is er een native desktop-app — **[Mbox Viewer](https://mboxviewer.net)** voor Mac (Windows komt binnenkort).

## Gerelateerde projecten

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — de open-source terminaltool (CLI/TUI) om `.mbox`-archieven te lezen, doorzoeken en exporteren. Het is het zusterproject en een directe bron van inspiratie voor deze viewer.
- **[Mbox Viewer](https://mboxviewer.net)** — de native desktop-app voor Mac (Windows komt binnenkort), voor archieven van elke omvang.

## Tech-stack

- [Astro 5](https://astro.build) (statische output) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) voor MIME-parsing, [DOMPurify](https://github.com/cure53/DOMPurify) voor opschoning
- Gehost op [Cloudflare Pages](https://pages.cloudflare.com)

## Ontwikkeling

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Node 22+ wordt aanbevolen (zie `.node-version`).

## Uitrollen (Cloudflare Pages)

- **Build-commando:** `pnpm build`
- **Build-uitvoermap:** `dist`

De build genereert ook `dist/_redirects` (301's van Engelse slugs onder een taalprefix naar de gelokaliseerde slug) en `dist/sitemap-index.xml`.

## Projectstructuur

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

## Licentie

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Onderdeel van de **mbox**-familie van open tools, naast **[mboxShell](https://github.com/dcarrero/mboxshell)** (terminal) — het gerelateerde project en bron van inspiratie — en **[Mbox Viewer](https://mboxviewer.net)** (desktop). Gebouwd door [David Carrero Fernández-Baillo](https://carrero.es).
