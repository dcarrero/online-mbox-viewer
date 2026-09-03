# Online Mbox Viewer

**Przeglądaj archiwa e-mail `.mbox` online — za darmo, prywatnie i w 100% w przeglądarce. Twój plik nigdy nie jest przesyłany na serwer.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · [Deutsch](README-DE.md) · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · [한국어](README-KO.md) · **Polski**

---

## Dlaczego powstał ten projekt

Plik `.mbox` to cała skrzynka pocztowa upchnięta w jednym pliku — to format, jaki otrzymujesz z eksportu **Google Takeout**, z **Apple Mail** lub z **Thunderbird**. Otwarcie takiego pliku zwykle oznacza konieczność zainstalowania klasycznego klienta poczty i zaimportowania go.

Online Mbox Viewer pomija to wszystko: upuść plik na stronie i czytaj. Większość „internetowych” narzędzi ma jedną wadę — przesyłają Twoją pocztę na serwer. To narzędzie tego nie robi — **cała przeglądarka działa jako JavaScript w Twojej przeglądarce**, więc Twoje wiadomości nigdy nie opuszczają Twojego urządzenia.

## Funkcje

- **W 100% po stronie klienta** — plik `.mbox` jest przetwarzany w pamięci na Twoim komputerze. Bez przesyłania na serwer, bez zaplecza, bez konta.
- **Bezpieczne renderowanie** — kod HTML wiadomości jest oczyszczany za pomocą [DOMPurify](https://github.com/cure53/DOMPurify) i wyświetlany wewnątrz izolowanego `<iframe>` z rygorystyczną polityką Content Security Policy.
- **Bez pikseli śledzących** — zdalne obrazy są domyślnie blokowane; możesz je wczytać dla poszczególnych wiadomości. Obrazy osadzone (inline) są wbudowane lokalnie.
- **Świadomość Gmaila** — odczytuje `X-Gmail-Labels` i pozwala filtrować listę wiadomości według etykiet. Załączniki można pobierać.
- **Wielojęzyczność i gotowość pod SEO** — 10 języków ze zlokalizowanymi adresami URL, `hreflang`, mapą witryny i danymi strukturalnymi.
- **Szybki i statyczny** — zbudowany w Astro, wdrożony na Cloudflare Pages.

## A także: Mbox Viewer dla Maca

Przeglądarka online jest zoptymalizowana pod pliki do **25 MB**. Dla pełnych eksportów Gmail Takeout, wyszukiwania pełnotekstowego, folderów i eksportu istnieje natywna aplikacja desktopowa — **[Mbox Viewer](https://mboxviewerpro.com)** dla Maca (wersja dla Windows wkrótce).

## Powiązane projekty

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — narzędzie terminalowe (CLI/TUI) o otwartym kodzie źródłowym do odczytu, przeszukiwania i eksportu archiwów `.mbox`. To projekt siostrzany i bezpośrednie źródło inspiracji dla tej przeglądarki.
- **[Mbox Viewer](https://mboxviewerpro.com)** — natywna aplikacja desktopowa dla Maca (wersja dla Windows wkrótce), dla archiwów dowolnej wielkości.

## Stos technologiczny

- [Astro 5](https://astro.build) (wyjście statyczne) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) do parsowania MIME, [DOMPurify](https://github.com/cure53/DOMPurify) do oczyszczania
- Hostowany na [Cloudflare Pages](https://pages.cloudflare.com)

## Rozwój

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Zalecany jest Node 22+ (zobacz `.node-version`).

## Wdrożenie (Cloudflare Pages)

- **Polecenie budowania:** `pnpm build`
- **Katalog wyjściowy budowania:** `dist`

Budowanie generuje też `dist/_redirects` (przekierowania 301 z angielskich slugów pod prefiksem językowym do zlokalizowanego sluga) oraz `dist/sitemap-index.xml`.

## Struktura projektu

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

## Licencja

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Część rodziny otwartych narzędzi **mbox**, obok **[mboxShell](https://github.com/dcarrero/mboxshell)** (terminal) — powiązanego projektu i źródła inspiracji — oraz **[Mbox Viewer](https://mboxviewerpro.com)** (desktop). Stworzone przez [David Carrero Fernández-Baillo](https://carrero.es).
