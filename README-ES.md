# Online Mbox Viewer

**Lee archivos de correo `.mbox` en línea — gratis, privado y 100 % en tu navegador. Tu archivo nunca se sube.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · **Español** · [Deutsch](README-DE.md) · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## Por qué existe este proyecto

Un archivo `.mbox` es un buzón de correo entero comprimido en un único archivo — el formato que obtienes de una exportación de **Google Takeout**, de **Apple Mail** o de **Thunderbird**. Abrir uno suele implicar instalar un cliente de correo de escritorio e importarlo.

Online Mbox Viewer se salta todo eso: suelta el archivo en la página y léelo. El problema que tienen la mayoría de las herramientas «en línea» es que suben tu correo a un servidor. Esta no — **todo el visor se ejecuta como JavaScript en tu navegador**, por lo que tus mensajes nunca salen de tu dispositivo.

## Características

- **100 % en el lado del cliente** — el archivo `.mbox` se analiza en memoria en tu ordenador. Sin subidas, sin backend, sin cuenta.
- **Renderizado seguro** — el HTML de los mensajes se sanea con [DOMPurify](https://github.com/cure53/DOMPurify) y se muestra dentro de un `<iframe>` en sandbox con una Content Security Policy estricta.
- **Sin píxeles de seguimiento** — las imágenes remotas se bloquean por defecto; puedes cargarlas mensaje a mensaje. Las imágenes en línea se incrustan localmente.
- **Compatible con Gmail** — lee `X-Gmail-Labels` y te permite filtrar la lista de mensajes por etiqueta. Los adjuntos se pueden descargar.
- **Multilingüe y listo para SEO** — 10 idiomas con URLs localizadas, `hreflang`, sitemap y datos estructurados.
- **Rápido y estático** — construido con Astro, desplegado en Cloudflare Pages.

## Además: Mbox Viewer para Mac

El visor en línea está optimizado para archivos de hasta **25 MB**. Para exportaciones completas de Gmail Takeout, búsqueda de texto completo, carpetas y exportación, existe una aplicación de escritorio nativa — **[Mbox Viewer](https://mboxviewer.net)** para Mac (Windows próximamente).

## Proyectos relacionados

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — la herramienta de terminal (CLI/TUI) de código abierto para leer, buscar y exportar archivos `.mbox`. Es el proyecto hermano y una fuente directa de inspiración para este visor.
- **[Mbox Viewer](https://mboxviewer.net)** — la aplicación de escritorio nativa para Mac (Windows próximamente), para archivos de cualquier tamaño.

## Stack tecnológico

- [Astro 5](https://astro.build) (salida estática) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) para el análisis MIME, [DOMPurify](https://github.com/cure53/DOMPurify) para el saneamiento
- Alojado en [Cloudflare Pages](https://pages.cloudflare.com)

## Desarrollo

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Se recomienda Node 22+ (consulta `.node-version`).

## Despliegue (Cloudflare Pages)

- **Comando de build:** `pnpm build`
- **Directorio de salida del build:** `dist`

El build también genera `dist/_redirects` (301 desde los slugs en inglés bajo un prefijo de idioma hacia el slug localizado) y `dist/sitemap-index.xml`.

## Estructura del proyecto

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

## Licencia

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Parte de la familia **mbox** de herramientas abiertas, junto a **[mboxShell](https://github.com/dcarrero/mboxshell)** (terminal) — el proyecto relacionado y fuente de inspiración — y **[Mbox Viewer](https://mboxviewer.net)** (escritorio). Creado por [David Carrero Fernández-Baillo](https://carrero.es).
