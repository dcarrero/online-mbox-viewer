import type { CompareContent } from "./types";

export const es: CompareContent = {
  title: "Visor online vs app de escritorio",
  description:
    "Compara el visor de MBOX online gratuito con la app de escritorio Mbox Viewer para Mac y Windows — tamaño de fichero, búsqueda, privacidad y uso sin conexión.",
  intro:
    "Ambos leen tu correo de forma local y privada. El visor del navegador es la vía más rápida para echar un vistazo a un archivo pequeño; la app de escritorio está pensada para los grandes y para funciones avanzadas.",
  onlineLabel: "Visor online",
  desktopLabel: "App de escritorio (Mac y Windows)",
  rows: [
    { feature: "Precio", online: "Gratis", desktop: "Prueba gratis · compra única" },
    { feature: "Instalación", online: "Ninguna — funciona en el navegador", desktop: "Mac App Store · Microsoft Store" },
    { feature: "Tamaño máximo", online: "Hasta 25 MB", desktop: "Cualquier tamaño (procesa ficheros enormes)" },
    { feature: "Privacidad", online: "100% local, no se sube nada", desktop: "100% local, totalmente offline" },
    { feature: "Búsqueda de texto", online: "—", desktop: "Sí" },
    { feature: "Carpetas y etiquetas de Gmail", online: "Filtro por etiqueta", desktop: "Árbol de carpetas y etiquetas completo" },
    { feature: "Adjuntos", online: "Descarga", desktop: "Descarga y vista previa" },
    { feature: "Exportar / convertir", online: "—", desktop: "Exporta a EML, PDF y más" },
    { feature: "Plataformas", online: "Cualquier navegador moderno", desktop: "macOS · Windows" },
  ],
  closing:
    "Regla práctica: si tu fichero ocupa menos de 25 MB y solo necesitas leerlo, el visor online es todo lo que necesitas. Para un Gmail Takeout completo, archivar o buscar, descarga la app de escritorio.",
};

