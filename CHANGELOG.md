# Changelog

All notable changes to Online Mbox Viewer are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v0.6.6

- Change: opening a file no longer freezes the page. The message list is built in batches — the first 80 rows render immediately, the rest fill in across frames — and a single delegated listener replaces one per message. Measured on a 6,000-message archive: first rows on screen at 99 ms instead of 3.3 s, full list at 570 ms, and the main thread never blocks (984 frames during the load, previously none).
- Add: a "Reading <file>…" notice while the archive is indexed, in all 10 languages. It is a role="status" region, so screen readers announce it, and it appears before the parse starts rather than after.
- Fix: focus fell to the body when the intro was hidden, so keyboard users had to traverse the whole page again to reach the messages. Focus now moves to the first message.
- Fix: the message count is announced (aria-live), the label filter no longer stacked a fresh listener on every file opened, and rows rendered after a filter was chosen now respect it.

## v0.6.5

- Fix: the Terms of Service still called the desktop app "Mbox Viewer for Mac" in all 10 languages, and the 10 READMEs still said "Windows coming soon" in their heading and both mentions. The v0.6.0 sweep covered the UI strings, home, viewer, how-to, FAQ, compare and llms.txt, but not legal/ or the READMEs. Windows shipped in July; every remaining claim is corrected.
- Fix: the Polish, Japanese and Korean copy carried an untranslated English "for Mac" inside otherwise translated sentences, in the terms, the FAQ and the comparison page.

## v0.6.4

- Fix: attachment downloads used the MIME type declared by the email. An HTML or SVG attachment produced a blob: URL on the site's own origin that would run scripts if opened as a document instead of downloaded. Attachments are always served as application/octet-stream now; the download name is unchanged.
- Fix: the "From" header parser backtracked quadratically. A header padded with 80,000 spaces took 3.7 s, and it runs once per message, so a hostile .mbox could freeze the tab for minutes. It is a linear parse now: 400,000 spaces take under a millisecond.

## v0.6.3

- Fix: the error message lived inside the intro block, which is hidden once a file opens. Opening a second file that was too large or unreadable showed nothing at all, leaving the previous message on screen as if nothing had happened. The error now sits outside the intro and carries role="alert" so screen readers announce it.
- Fix: a file with no "From " lines was accepted as a single .eml, so a PDF or a ZIP dropped by mistake rendered as "1 message" of garbled bytes. The fallback now checks the block actually starts with an RFC 822 header, and an unreadable file says so.
- Fix: the filename in the app bar was set before parsing, so a failed load relabelled the bar with a file that had not opened.

## v0.6.2

- Change: the desktop app moved from mboxviewer.net to mboxviewerpro.com. Every link, the support address and the footer label now point at the new domain, across the site, the legal pages in all 10 languages, llms.txt and the READMEs.

## v0.6.1

- Fix: the "Desktop app" button in the top nav linked straight to the Mac App Store, which picked a platform for the reader now that Windows has shipped. It now goes to mboxviewerpro.com, where every available version is listed. The direct store buttons stay where the reader has already chosen to download.

## v0.6.0

- Add: Microsoft Store. The Windows desktop app has shipped, so the site now links it everywhere the Mac App Store is linked — home, how-to, compare and the footer.
- Fix: the site claimed "Windows — coming soon" in all 10 languages. That is no longer true. Every Mac-only / Windows-pending string was corrected across the UI strings, home, viewer, how-to, FAQ, compare and llms.txt.
- Change: navigation is now a content-sized floating pill instead of a full-width sticky bar.
- Change: the footer is a single inline line of links instead of Product / Resources / Legal columns.
- Change: the home page leads with the viewer itself — text and dropzone share the fold, and the tool takes the whole page once a file is open.
- Change: the two three-card grids became a numbered step sequence and a typographic index.
- Fix: "Inter" was declared in the font stack but never loaded, so the site always rendered in the system stack. The dead declaration and its Inter-only font-feature-settings are gone; the system stack is now the deliberate choice.
- Fix: the logo emitted a duplicate gradient id when rendered in both the nav and the footer.
- Fix: two contrast failures on small ink-400 text. The site is now axe-core WCAG 2.1 AA clean across every template, both themes.
- Remove: scroll-reveal animations, the dead .text-gradient / .bg-grid rules and the universal card hover lift.

## v0.5.2

- Add: own brand icons (favicon, 32/64/128/256/512 PNG, apple-touch-icon) replacing the desktop-app placeholders.

## v0.5.1

- **Change: site footer.** Reworked the footer credit line to: "© 2026 — Color Vivo Internet, S.L. All rights reserved. · MIT · Open source on GitHub · Based on mboxShell by David Carrero Fernández-Baillo", with links to colorvivo.com, the GitHub repo, mboxShell and carrero.es.

## v0.5.0

First public release.

- **Add: online MBOX viewer.** A free, 100% client-side viewer for `.mbox` and `.eml` email archives. Files are read entirely in the browser with `postal-mime`; nothing is uploaded to any server. Message HTML is sanitized with DOMPurify and rendered inside a sandboxed `<iframe>` with a strict Content Security Policy. Remote images are blocked by default to defeat tracking pixels, and inline `cid:` images are embedded as `data:` URLs.
- **Add: viewer features.** Message list with sender/subject/date, lazy MIME parsing on open, attachment downloads, and filtering by Gmail labels (`X-Gmail-Labels`). File size capped at 25 MB to stay fast in the browser.
- **Add: SEO pages in 10 languages.** Home (the viewer), How to open a `.mbox` file, Online vs desktop comparison, FAQ (with `FAQPage` structured data), Privacy Policy and Terms of Service. Localized URLs, `hreflang` alternates and `x-default`, sitemap and per-locale Open Graph.
- **Add: desktop app promotion.** Cross-promotion of the native Mbox Viewer app for Mac (Windows coming soon) as the path for archives larger than 25 MB.
- **Add: privacy-first analytics.** Google Analytics 4 in cookieless Consent Mode v2 by default; analytics cookies only after explicit opt-in.
