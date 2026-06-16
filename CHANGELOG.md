# Changelog

All notable changes to Online Mbox Viewer are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v0.1.0

- **Add: online MBOX viewer.** A free, 100% client-side viewer for `.mbox` and `.eml` email archives. Files are read entirely in the browser with `postal-mime`; nothing is uploaded to any server. Message HTML is sanitized with DOMPurify and rendered inside a sandboxed `<iframe>` with a strict Content Security Policy. Remote images are blocked by default to defeat tracking pixels, and inline `cid:` images are embedded as `data:` URLs.
- **Add: viewer features.** Message list with sender/subject/date, lazy MIME parsing on open, attachment downloads, and filtering by Gmail labels (`X-Gmail-Labels`). File size capped at 25 MB to stay fast in the browser.
- **Add: SEO pages in 10 languages.** Home (the viewer), How to open a `.mbox` file, Online vs desktop comparison, FAQ (with `FAQPage` structured data), Privacy Policy and Terms of Service. Localized URLs, `hreflang` alternates and `x-default`, sitemap and per-locale Open Graph.
- **Add: desktop app promotion.** Cross-promotion of the native Mbox Viewer app for Mac (Windows coming soon) as the path for archives larger than 25 MB.
- **Add: privacy-first analytics.** Google Analytics 4 in cookieless Consent Mode v2 by default; analytics cookies only after explicit opt-in.
