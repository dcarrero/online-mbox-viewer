# Online Mbox Viewer

**Lesen Sie `.mbox`-E-Mail-Archive online — kostenlos, privat und zu 100 % in Ihrem Browser. Ihre Datei wird niemals hochgeladen.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · **Deutsch** · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## Warum es dieses Projekt gibt

Eine `.mbox`-Datei ist ein komplettes Postfach, zusammengepresst in eine einzige Datei — das Format, das Sie aus einem **Google Takeout**-Export, von **Apple Mail** oder von **Mozilla Thunderbird** erhalten. Eine solche Datei zu öffnen bedeutet normalerweise, dass Sie einen Desktop-E-Mail-Client installieren und sie importieren müssen.

Online Mbox Viewer überspringt all das: Ziehen Sie die Datei auf die Seite und lesen Sie sie. Der Haken, den die meisten „Online"-Tools haben, ist, dass sie Ihre E-Mails auf einen Server hochladen. Dieses Tool tut das nicht — **der gesamte Viewer läuft als JavaScript in Ihrem Browser**, sodass Ihre Nachrichten Ihr Gerät niemals verlassen.

## Funktionen

- **100 % clientseitig** — die `.mbox`-Datei wird im Arbeitsspeicher auf Ihrem Computer verarbeitet. Kein Upload, kein Backend, kein Konto.
- **Sichere Darstellung** — das HTML der Nachrichten wird mit [DOMPurify](https://github.com/cure53/DOMPurify) bereinigt und innerhalb eines abgeschotteten `<iframe>` mit einer strengen Content Security Policy angezeigt.
- **Keine Tracking-Pixel** — entfernte Bilder werden standardmäßig blockiert; Sie können sie pro Nachricht laden. Eingebettete Bilder werden lokal eingebunden.
- **Gmail-fähig** — liest `X-Gmail-Labels` und ermöglicht es Ihnen, die Nachrichtenliste nach Label zu filtern. Anhänge können heruntergeladen werden.
- **Mehrsprachig & SEO-fertig** — 10 Sprachen mit lokalisierten URLs, `hreflang`, Sitemap und strukturierten Daten.
- **Schnell & statisch** — erstellt mit Astro, bereitgestellt auf Cloudflare Pages.

## Außerdem: Mbox Viewer für Mac

Der Online-Viewer ist auf Dateien bis **25 MB** ausgelegt. Für vollständige Gmail-Takeout-Exporte, Volltextsuche, Ordner und Export gibt es eine native Desktop-App — **[Mbox Viewer](https://mboxviewerpro.com)** für Mac (Windows folgt in Kürze).

## Verwandte Projekte

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — das quelloffene Terminal-Tool (CLI/TUI) zum Lesen, Durchsuchen und Exportieren von `.mbox`-Archiven. Es ist das Schwesterprojekt und eine direkte Inspirationsquelle für diesen Viewer.
- **[Mbox Viewer](https://mboxviewerpro.com)** — die native Desktop-App für Mac (Windows folgt in Kürze), für Archive jeder Größe.

## Tech-Stack

- [Astro 5](https://astro.build) (statische Ausgabe) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) für das MIME-Parsing, [DOMPurify](https://github.com/cure53/DOMPurify) für die Bereinigung
- Gehostet auf [Cloudflare Pages](https://pages.cloudflare.com)

## Entwicklung

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Node 22+ wird empfohlen (siehe `.node-version`).

## Bereitstellung (Cloudflare Pages)

- **Build-Befehl:** `pnpm build`
- **Build-Ausgabeverzeichnis:** `dist`

Der Build erzeugt außerdem `dist/_redirects` (301-Weiterleitungen von englischen Slugs unter einem Sprachpräfix zum lokalisierten Slug) und `dist/sitemap-index.xml`.

## Projektstruktur

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

## Lizenz

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Teil der **mbox**-Familie quelloffener Tools, zusammen mit **[mboxShell](https://github.com/dcarrero/mboxshell)** (Terminal) — dem verwandten Projekt und der Inspirationsquelle — und **[Mbox Viewer](https://mboxviewerpro.com)** (Desktop). Erstellt von [David Carrero Fernández-Baillo](https://carrero.es).
