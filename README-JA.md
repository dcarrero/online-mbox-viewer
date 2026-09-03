# Online Mbox Viewer

**`.mbox` メールアーカイブをオンラインで読む — 無料、プライベート、そして100%ブラウザ内で完結。ファイルがアップロードされることは決してありません。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · [Deutsch](README-DE.md) · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · **日本語** · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## このプロジェクトが存在する理由

`.mbox` ファイルとは、メールボックス全体を1つのファイルに圧縮したものです。**Google Takeout** のエクスポート、**Apple Mail**、または **Mozilla Thunderbird** から得られる形式です。通常、これを開くにはデスクトップのメールクライアントをインストールしてインポートする必要があります。

Online Mbox Viewer はそのすべてを省きます。ファイルをページにドロップするだけで読めます。多くの「オンライン」ツールが抱える落とし穴は、あなたのメールをサーバーにアップロードしてしまうことです。本ツールはそうしません。**ビューア全体がブラウザ内のJavaScriptとして動作する**ため、メッセージがデバイスから出ていくことは決してありません。

## 機能

- **100%クライアントサイド** — `.mbox` ファイルはお使いのコンピュータのメモリ内で解析されます。アップロードも、バックエンドも、アカウントも不要です。
- **安全なレンダリング** — メッセージのHTMLは [DOMPurify](https://github.com/cure53/DOMPurify) でサニタイズされ、厳格なContent Security Policyを備えたサンドボックス化された `<iframe>` 内に表示されます。
- **トラッキングピクセルなし** — リモート画像はデフォルトでブロックされます。メッセージごとに読み込むことができます。インライン画像はローカルに埋め込まれます。
- **Gmail対応** — `X-Gmail-Labels` を読み取り、ラベルでメッセージリストをフィルタリングできます。添付ファイルはダウンロード可能です。
- **多言語＆SEO対応** — ローカライズされたURL、`hreflang`、サイトマップ、構造化データを備えた10言語に対応。
- **高速＆静的** — Astro で構築され、Cloudflare Pages にデプロイされています。

## さらに：Mbox Viewer for Mac

オンラインビューアは **25 MB** までのファイル向けに最適化されています。Gmail Takeout エクスポート全体、全文検索、フォルダ、エクスポートには、ネイティブのデスクトップアプリ **[Mbox Viewer](https://mboxviewerpro.com)** for Mac（Windows版は近日公開）があります。

## 関連プロジェクト

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — `.mbox` アーカイブを読み、検索し、エクスポートするためのオープンソースのターミナル（CLI/TUI）ツールです。姉妹プロジェクトであり、このビューアの直接のインスピレーション源です。
- **[Mbox Viewer](https://mboxviewerpro.com)** — あらゆるサイズのアーカイブに対応する、Mac向けのネイティブデスクトップアプリ（Windows版は近日公開）。

## 技術スタック

- [Astro 5](https://astro.build)（静的出力）+ TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- MIME解析用の [postal-mime](https://github.com/postalsys/postal-mime)、サニタイズ用の [DOMPurify](https://github.com/cure53/DOMPurify)
- [Cloudflare Pages](https://pages.cloudflare.com) でホスティング

## 開発

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Node 22+ を推奨します（`.node-version` を参照）。

## デプロイ（Cloudflare Pages）

- **ビルドコマンド:** `pnpm build`
- **ビルド出力ディレクトリ:** `dist`

ビルドでは `dist/_redirects`（言語プレフィックス配下の英語スラッグからローカライズされたスラッグへの301リダイレクト）と `dist/sitemap-index.xml` も生成されます。

## プロジェクト構成

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

## ライセンス

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

オープンツールの **mbox** ファミリーの一員であり、**[mboxShell](https://github.com/dcarrero/mboxshell)**（ターミナル）— 関連プロジェクトでありインスピレーション源 — および **[Mbox Viewer](https://mboxviewerpro.com)**（デスクトップ）と並びます。[David Carrero Fernández-Baillo](https://carrero.es) によって構築されました。
