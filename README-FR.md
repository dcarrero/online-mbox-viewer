# Online Mbox Viewer

**Lisez vos archives e-mail `.mbox` en ligne — gratuit, privé et 100 % dans votre navigateur. Votre fichier n'est jamais téléversé.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · [Deutsch](README-DE.md) · **Français** · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## Pourquoi ce projet existe

Un fichier `.mbox` est une boîte aux lettres entière compressée dans un seul fichier — le format que vous obtenez d'un export **Google Takeout**, d'**Apple Mail** ou de **Thunderbird**. L'ouvrir implique généralement d'installer un client de messagerie de bureau et de l'importer.

Online Mbox Viewer évite tout cela : déposez le fichier sur la page et lisez-le. Le piège de la plupart des outils « en ligne » est qu'ils téléversent vos e-mails sur un serveur. Celui-ci ne le fait pas — **toute la visionneuse s'exécute en JavaScript dans votre navigateur**, de sorte que vos messages ne quittent jamais votre appareil.

## Fonctionnalités

- **100 % côté client** — le fichier `.mbox` est analysé en mémoire sur votre ordinateur. Aucun téléversement, aucun backend, aucun compte.
- **Rendu sécurisé** — le HTML des messages est nettoyé avec [DOMPurify](https://github.com/cure53/DOMPurify) et affiché dans un `<iframe>` en bac à sable avec une Content Security Policy stricte.
- **Aucun pixel de suivi** — les images distantes sont bloquées par défaut ; vous pouvez les charger message par message. Les images en ligne sont intégrées localement.
- **Compatible Gmail** — lit les `X-Gmail-Labels` et vous permet de filtrer la liste des messages par libellé. Les pièces jointes sont téléchargeables.
- **Multilingue & prêt pour le SEO** — 10 langues avec des URL localisées, `hreflang`, sitemap et données structurées.
- **Rapide & statique** — construit avec Astro, déployé sur Cloudflare Pages.

## Également : Mbox Viewer pour Mac et Windows

La visionneuse en ligne est optimisée pour les fichiers jusqu'à **25 Mo**. Pour les exports complets de Gmail Takeout, la recherche en texte intégral, les dossiers et l'export, il existe une application de bureau native — **[Mbox Viewer](https://mboxviewerpro.com)** pour Mac et Windows.

## Projets connexes

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — l'outil en terminal (CLI/TUI) open source pour lire, rechercher et exporter des archives `.mbox`. C'est le projet frère et une source directe d'inspiration pour cette visionneuse.
- **[Mbox Viewer](https://mboxviewerpro.com)** — l'application de bureau native pour Mac et Windows, pour des archives de toute taille.

## Stack technique

- [Astro 5](https://astro.build) (sortie statique) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) pour l'analyse MIME, [DOMPurify](https://github.com/cure53/DOMPurify) pour le nettoyage
- Hébergé sur [Cloudflare Pages](https://pages.cloudflare.com)

## Développement

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Node 22+ est recommandé (voir `.node-version`).

## Déploiement (Cloudflare Pages)

- **Commande de build :** `pnpm build`
- **Répertoire de sortie du build :** `dist`

Le build génère également `dist/_redirects` (redirections 301 des slugs anglais sous un préfixe de langue vers le slug localisé) et `dist/sitemap-index.xml`.

## Structure du projet

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

## Licence

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Fait partie de la famille **mbox** d'outils ouverts, aux côtés de **[mboxShell](https://github.com/dcarrero/mboxshell)** (terminal) — le projet connexe et source d'inspiration — et de **[Mbox Viewer](https://mboxviewerpro.com)** (bureau). Créé par [David Carrero Fernández-Baillo](https://carrero.es).
