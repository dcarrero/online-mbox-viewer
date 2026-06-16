# Online Mbox Viewer

**`.mbox` 이메일 아카이브를 온라인에서 읽으세요 — 무료이며, 비공개이고, 100% 브라우저에서 동작합니다. 파일은 절대 업로드되지 않습니다.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Built%20with-Astro%205-ff5d01.svg)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com)

🌐 **[onlinemboxviewer.com](https://onlinemboxviewer.com)**

[English](README.md) · [Español](README-ES.md) · [Deutsch](README-DE.md) · [Français](README-FR.md) · [Português (BR)](README-PT-BR.md) · [日本語](README-JA.md) · [Italiano](README-IT.md) · [Nederlands](README-NL.md) · **한국어** · [Polski](README-PL.md)

---

## 이 프로젝트가 존재하는 이유

`.mbox` 파일은 메일함 전체를 하나의 파일에 압축해 담은 것으로, **Google Takeout** 내보내기, **Apple Mail**, 또는 **Mozilla Thunderbird**에서 얻게 되는 형식입니다. 이런 파일을 열려면 보통 데스크톱 이메일 클라이언트를 설치하고 가져오기를 해야 합니다.

Online Mbox Viewer는 이 모든 과정을 건너뜁니다. 파일을 페이지에 끌어다 놓기만 하면 바로 읽을 수 있습니다. 대부분의 "온라인" 도구가 가진 함정은 당신의 이메일을 서버에 업로드한다는 점입니다. 하지만 이 도구는 그렇지 않습니다 — **뷰어 전체가 브라우저에서 JavaScript로 실행되므로**, 당신의 메시지는 절대 기기를 떠나지 않습니다.

## 기능

- **100% 클라이언트 측 처리** — `.mbox` 파일은 당신의 컴퓨터 메모리에서 파싱됩니다. 업로드도, 백엔드도, 계정도 없습니다.
- **안전한 렌더링** — 메시지 HTML은 [DOMPurify](https://github.com/cure53/DOMPurify)로 정화되며, 엄격한 콘텐츠 보안 정책(CSP)이 적용된 샌드박스 `<iframe>` 안에서 표시됩니다.
- **추적 픽셀 없음** — 원격 이미지는 기본적으로 차단되며, 메시지별로 직접 불러올 수 있습니다. 인라인 이미지는 로컬에 임베드됩니다.
- **Gmail 인식** — `X-Gmail-Labels`를 읽어 라벨별로 메시지 목록을 필터링할 수 있습니다. 첨부 파일은 다운로드할 수 있습니다.
- **다국어 및 SEO 지원** — 현지화된 URL, `hreflang`, 사이트맵, 구조화된 데이터를 갖춘 10개 언어를 지원합니다.
- **빠르고 정적** — Astro로 빌드되어 Cloudflare Pages에 배포됩니다.

## 그리고: Mac용 Mbox Viewer

온라인 뷰어는 **25 MB**까지의 파일에 최적화되어 있습니다. 전체 Gmail Takeout 내보내기, 전문 검색, 폴더 및 내보내기 기능이 필요하다면, 네이티브 데스크톱 앱인 **[Mbox Viewer](https://mboxviewer.net)** for Mac이 있습니다 (Windows 버전은 곧 출시 예정).

## 관련 프로젝트

- **[mboxShell](https://github.com/dcarrero/mboxshell)** — `.mbox` 아카이브를 읽고, 검색하고, 내보내는 오픈 소스 터미널(CLI/TUI) 도구입니다. 자매 프로젝트이자 이 뷰어의 직접적인 영감의 원천입니다.
- **[Mbox Viewer](https://mboxviewer.net)** — 크기에 제한 없는 아카이브를 위한 Mac용 네이티브 데스크톱 앱입니다 (Windows 버전은 곧 출시 예정).

## 기술 스택

- [Astro 5](https://astro.build) (정적 출력) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- MIME 파싱을 위한 [postal-mime](https://github.com/postalsys/postal-mime), 정화를 위한 [DOMPurify](https://github.com/cure53/DOMPurify)
- [Cloudflare Pages](https://pages.cloudflare.com)에서 호스팅

## 개발

```bash
pnpm install      # or npm install
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # preview the production build
```

Node 22+ 사용을 권장합니다 (`.node-version` 참조).

## 배포 (Cloudflare Pages)

- **빌드 명령어:** `pnpm build`
- **빌드 출력 디렉터리:** `dist`

빌드는 `dist/_redirects`(언어 접두사 아래의 영어 슬러그에서 현지화된 슬러그로의 301 리디렉션)와 `dist/sitemap-index.xml`도 함께 생성합니다.

## 프로젝트 구조

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

## 라이선스

[MIT](LICENSE) — Copyright (c) 2026 David Carrero Fernández-Baillo — https://carrero.es

---

오픈 도구 **mbox** 제품군의 일부로, **[mboxShell](https://github.com/dcarrero/mboxshell)**(터미널) — 관련 프로젝트이자 영감의 원천 — 및 **[Mbox Viewer](https://mboxviewer.net)**(데스크톱)와 함께합니다. [David Carrero Fernández-Baillo](https://carrero.es)가 제작했습니다.
