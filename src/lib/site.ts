/**
 * Configuración del sitio y enlaces — única fuente de verdad.
 *
 * Este sitio es SOLO el visor web de mbox (100% en el navegador, nada se sube).
 * La app de escritorio (Mac, y pronto Windows) se promociona como vía para
 * abrir ficheros más grandes y vive en mboxviewer.net.
 */

export const SITE = {
  name: "Online Mbox Viewer",
  domain: "onlinemboxviewer.com",
  url: "https://onlinemboxviewer.com",

  /** Versión del sitio web. Se muestra en el pie. */
  version: "0.1.0",
  repoUrl: "https://github.com/dcarrero/online-mbox-viewer",

  // Visor web (100% en el navegador, nada se sube): límite de tamaño por fichero.
  webViewerMaxMB: 25,

  // App de escritorio (publicidad / ficheros grandes)
  desktopName: "Mbox Viewer",
  desktopUrl: "https://mboxviewer.net",
  appStoreUrl: "https://apps.apple.com/app/mbox-viewer-pro/id6759237715",
  windowsAvailable: false, // futura tienda de apps de Windows
  minMacOS: "macOS 14 Sonoma",

  // Empresa / autor
  author: "David Carrero Fernández-Baillo",
  authorUrl: "https://carrero.es",
  company: "Color Vivo Internet, S.L.",
  companyUrl: "https://colorvivo.com",
  supportEmail: "support@mboxviewer.net",

  // Origen open source (herramienta de terminal hermana)
  mboxshellUrl: "https://github.com/dcarrero/mboxshell",

  // Social / OG
  ogImage: "/og/default.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitter: "",

  // Analytics — Google Analytics 4 con Consent Mode v2 (cookieless por defecto;
  // cookies de analítica solo tras aceptar en el banner).
  ga4Id: "G-LLRMPM1J24",
} as const;

export type Site = typeof SITE;
