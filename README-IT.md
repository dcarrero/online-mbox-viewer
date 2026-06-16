# Online Mbox Viewer

**Leggi gli archivi di posta `.mbox` online — gratis, privato e al 100% nel tuo browser. Il tuo file non viene mai caricato.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · [Deutsch](README-DE.md) · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · **Italiano** · [Nederlands](README-NL.md) · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## Perché esiste questo progetto

Un file `.mbox` è un'intera casella di posta compressa in un unico file — il formato che ottieni da un'esportazione di **Google Takeout**, **Apple Mail** o **Thunderbird**. Aprirne uno di solito significa installare un client di posta desktop e importarlo.

Online Mbox Viewer salta tutto questo: trascina il file sulla pagina e leggilo. Il problema che ha la maggior parte degli strumenti "online" è che carica la tua posta su un server. Questo no — **l'intero visualizzatore funziona come JavaScript nel tuo browser**, quindi i tuoi messaggi non lasciano mai il tuo dispositivo.

## Funzionalità

- **100% lato client** — il file `.mbox` viene analizzato in memoria sul tuo computer. Nessun caricamento, nessun backend, nessun account.
- **Rendering sicuro** — l'HTML dei messaggi viene sanificato con [DOMPurify](https://github.com/cure53/DOMPurify) e mostrato all'interno di un `<iframe>` in sandbox con una rigorosa Content Security Policy.
- **Nessun pixel di tracciamento** — le immagini remote sono bloccate per impostazione predefinita; puoi caricarle per ogni singolo messaggio. Le immagini inline sono incorporate localmente.
- **Compatibile con Gmail** — legge `X-Gmail-Labels` e ti consente di filtrare l'elenco dei messaggi per etichetta. Gli allegati sono scaricabili.
- **Multilingua e pronto per la SEO** — 10 lingue con URL localizzati, `hreflang`, sitemap e dati strutturati.
- **Veloce e statico** — realizzato con Astro, distribuito su Cloudflare Pages.

## Inoltre: Mbox Viewer per Mac

Il visualizzatore online è ottimizzato per file fino a **25 MB**. Per le esportazioni complete di Gmail Takeout, la ricerca full-text, le cartelle e l'esportazione, esiste un'app desktop nativa — **[Mbox Viewer](https://mboxviewer.net)** per Mac (Windows in arrivo).

## Progetti correlati

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — lo strumento open-source da terminale (CLI/TUI) per leggere, cercare ed esportare archivi `.mbox`. È il progetto gemello e una fonte diretta di ispirazione per questo visualizzatore.
- **[Mbox Viewer](https://mboxviewer.net)** — l'app desktop nativa per Mac (Windows in arrivo), per archivi di qualsiasi dimensione.

## Stack tecnologico

- [Astro 5](https://astro.build) (output statico) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) per l'analisi MIME, [DOMPurify](https://github.com/cure53/DOMPurify) per la sanificazione
- Ospitato su [Cloudflare Pages](https://pages.cloudflare.com)

## Sviluppo

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

È consigliato Node 22+ (vedi `.node-version`).

## Deploy (Cloudflare Pages)

- **Comando di build:** `pnpm build`
- **Directory di output della build:** `dist`

La build genera anche `dist/_redirects` (301 dagli slug in inglese sotto un prefisso di lingua allo slug localizzato) e `dist/sitemap-index.xml`.

## Struttura del progetto

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

## Licenza

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Parte della famiglia di strumenti aperti **mbox**, insieme a **[mboxShell](https://github.com/dcarrero/mboxshell)** (terminale) — il progetto correlato e fonte di ispirazione — e **[Mbox Viewer](https://mboxviewer.net)** (desktop). Realizzato da [David Carrero Fernández-Baillo](https://carrero.es).
