/**
 * Cadenas de interfaz — INGLÉS (fuente de verdad).
 * Para traducir: copia este archivo a <locale>.ts, traduce los valores (no las
 * claves) y declara el objeto como `Partial<Record<UIKey, string>>`.
 */
export const en = {
  // Navegación
  "nav.viewer": "Online viewer",
  "nav.how_to": "How to open .mbox",
  "nav.faq": "FAQ",
  "nav.compare": "Compare",
  "nav.desktop": "Desktop app",

  // CTAs
  "cta.appstore_short": "Get it on the Mac App Store",
  "cta.windows_soon": "Windows — coming soon",
  "cta.get_desktop": "Get the desktop app",
  "cta.open_viewer": "Open the viewer",
  "cta.learn_more": "Learn more",

  // Genéricos
  "common.skip_to_content": "Skip to content",
  "common.toggle_theme": "Toggle dark mode",
  "common.change_language": "Change language",
  "common.menu": "Menu",
  "common.close": "Close",
  "common.on_this_page": "On this page",
  "common.updated": "Updated",

  // Footer
  "footer.tagline": "A free, private online viewer for .mbox email archives. Your file is read in your browser and never uploaded.",
  "footer.product": "Product",
  "footer.resources": "Resources",
  "footer.legal": "Legal",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.desktop_app": "Desktop app for Mac",
  "footer.rights": "All rights reserved.",
  "footer.open_source": "Open source on GitHub",
  "footer.based_on": "Based on",
  "footer.by": "by",
  "footer.made_with": "Made with ❤️ from Madrid and Herencia (Ciudad Real) — Spain.",

  // Cookies
  "cookie.text":
    "We use analytics cookies to improve this site. You can accept or reject them — the viewer works the same either way.",
  "cookie.accept": "Accept",
  "cookie.reject": "Reject",
  "cookie.more": "Privacy",

  // Meta por defecto
  "site.name": "Online Mbox Viewer",
  "site.tagline": "Read .mbox email files online — free, private, in your browser",
} as const;

export type UIKey = keyof typeof en;
