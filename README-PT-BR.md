# Online Mbox Viewer

**Leia arquivos de e-mail `.mbox` online — grátis, privado e 100% no seu navegador. Seu arquivo nunca é enviado para nenhum servidor.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · [Deutsch](README-DE.md) · [Français](README-FR.md) · **Português (BR)** · [日本語](README-JA.md) · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · [한국어](README-KO.md) · [Polski](README-PL.md)

---

## Por que este projeto existe

Um arquivo `.mbox` é uma caixa de correio inteira comprimida em um único arquivo — o formato que você obtém de uma exportação do **Google Takeout**, do **Apple Mail** ou do **Mozilla Thunderbird**. Abrir um deles normalmente significa instalar um cliente de e-mail no computador e importá-lo.

O Online Mbox Viewer dispensa tudo isso: arraste o arquivo para a página e leia. O problema da maioria das ferramentas "online" é que elas enviam seus e-mails para um servidor. Esta não — **o visualizador inteiro roda como JavaScript no seu navegador**, então suas mensagens nunca saem do seu dispositivo.

## Recursos

- **100% no lado do cliente** — o arquivo `.mbox` é processado na memória do seu computador. Sem upload, sem backend, sem conta.
- **Renderização segura** — o HTML das mensagens é higienizado com o [DOMPurify](https://github.com/cure53/DOMPurify) e exibido dentro de um `<iframe>` em sandbox, com uma Content Security Policy rigorosa.
- **Sem pixels de rastreamento** — imagens remotas são bloqueadas por padrão; você pode carregá-las mensagem por mensagem. Imagens incorporadas são embutidas localmente.
- **Compatível com Gmail** — lê os `X-Gmail-Labels` e permite filtrar a lista de mensagens por rótulo. Os anexos podem ser baixados.
- **Multilíngue e pronto para SEO** — 10 idiomas com URLs localizadas, `hreflang`, sitemap e dados estruturados.
- **Rápido e estático** — construído com Astro, implantado no Cloudflare Pages.

## Além disso: Mbox Viewer para Mac e Windows

O visualizador online é otimizado para arquivos de até **25 MB**. Para exportações completas do Gmail Takeout, busca em texto completo, pastas e exportação, existe um aplicativo de desktop nativo — o **[Mbox Viewer](https://mboxviewerpro.com)** para Mac e Windows.

## Projetos relacionados

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — a ferramenta de terminal (CLI/TUI) de código aberto para ler, pesquisar e exportar arquivos `.mbox`. É o projeto irmão e uma fonte direta de inspiração para este visualizador.
- **[Mbox Viewer](https://mboxviewerpro.com)** — o aplicativo de desktop nativo para Mac e Windows, para arquivos de qualquer tamanho.

## Tecnologias utilizadas

- [Astro 5](https://astro.build) (saída estática) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [postal-mime](https://github.com/postalsys/postal-mime) para análise MIME, [DOMPurify](https://github.com/cure53/DOMPurify) para higienização
- Hospedado no [Cloudflare Pages](https://pages.cloudflare.com)

## Desenvolvimento

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Recomenda-se Node 22+ (veja `.node-version`).

## Implantação (Cloudflare Pages)

- **Comando de build:** `pnpm build`
- **Diretório de saída do build:** `dist`

O build também gera `dist/_redirects` (301s dos slugs em inglês sob um prefixo de idioma para o slug localizado) e `dist/sitemap-index.xml`.

## Estrutura do projeto

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

## Licença

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

Parte da família **mbox** de ferramentas abertas, ao lado do **[mboxShell](https://github.com/dcarrero/mboxshell)** (terminal) — o projeto relacionado e fonte de inspiração — e do **[Mbox Viewer](https://mboxviewerpro.com)** (desktop). Desenvolvido por [David Carrero Fernández-Baillo](https://carrero.es).
