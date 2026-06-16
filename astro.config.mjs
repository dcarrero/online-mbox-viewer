// @ts-check
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { LOCALES, DEFAULT_LOCALE } from "./src/i18n/config.ts";
import { SECTION_ROUTES, ROUTE_SLUGS, getSlug } from "./src/i18n/routes.ts";

/**
 * Integración: genera `dist/_redirects` (Cloudflare Pages) en cada build a
 * partir del manifest de slugs de `src/i18n/routes.ts`. Redirige el slug en
 * inglés bajo un prefijo de idioma al slug localizado canónico
 * (p. ej. /es/faq/ → /es/preguntas/), evitando 404 y contenido duplicado.
 * Al derivarse de la misma fuente que las rutas, nunca se desincroniza.
 */
function localizedSlugRedirects() {
  return {
    name: "localized-slug-redirects",
    hooks: {
      "astro:build:done": (
        /** @type {{ dir: URL, logger: { info: (msg: string) => void } }} */ { dir, logger },
      ) => {
        const lines = [];
        for (const locale of LOCALES) {
          if (locale === DEFAULT_LOCALE) continue;
          for (const key of SECTION_ROUTES) {
            const enSlug = ROUTE_SLUGS[key].en;
            const locSlug = getSlug(key, locale);
            if (locSlug === enSlug) continue; // ja/ko y locales sin traducción
            lines.push(`/${locale}/${enSlug}/* /${locale}/${locSlug}/:splat 301`);
          }
        }
        const out =
          [
            "# Auto-generado en build desde src/i18n/routes.ts — NO editar a mano.",
            "# Slug en inglés bajo prefijo de idioma → slug localizado canónico.",
            "",
          ].join("\n") +
          lines.join("\n") +
          "\n";
        writeFileSync(fileURLToPath(new URL("_redirects", dir)), out);
        logger.info(`_redirects generado (${lines.length} reglas)`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://onlinemboxviewer.com",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap(), localizedSlugRedirects()],
  vite: {
    plugins: [tailwindcss()],
  },
});
