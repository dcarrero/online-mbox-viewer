import type { CompareContent } from "./types";

export const it: CompareContent = {
  title: "Visualizzatore online vs app desktop",
  description:
    "Confronta il visualizzatore MBOX online gratuito con l'app desktop Mbox Viewer per Mac e Windows — dimensione dei file, ricerca, privacy e uso offline.",
  intro:
    "Entrambi leggono la tua posta in modo locale e privato. Il visualizzatore nel browser è il modo più rapido per dare un'occhiata a un piccolo archivio; l'app desktop è pensata per quelli grandi e per le funzionalità avanzate.",
  onlineLabel: "Visualizzatore online",
  desktopLabel: "App desktop (Mac e Windows)",
  rows: [
    { feature: "Prezzo", online: "Gratuito", desktop: "Prova gratuita · acquisto una tantum" },
    { feature: "Installazione", online: "Nessuna — funziona nel browser", desktop: "Mac App Store · Microsoft Store" },
    { feature: "Dimensione massima file", online: "Fino a 25 MB", desktop: "Qualsiasi dimensione (streaming di file enormi)" },
    { feature: "Privacy", online: "100% locale, nulla caricato", desktop: "100% locale, completamente offline" },
    { feature: "Ricerca full-text", online: "—", desktop: "Sì" },
    { feature: "Cartelle ed etichette Gmail", online: "Filtra per etichetta", desktop: "Albero completo delle cartelle ed etichette" },
    { feature: "Allegati", online: "Download", desktop: "Download e anteprima" },
    { feature: "Esporta / converti", online: "—", desktop: "Esporta in EML, PDF e altro" },
    { feature: "Piattaforme", online: "Qualsiasi browser moderno", desktop: "macOS · Windows" },
  ],
  closing:
    "Regola pratica: se il tuo file è inferiore a 25 MB e devi solo leggerlo, il visualizzatore online è tutto ciò di cui hai bisogno. Per un Google Takeout completo di Gmail, per l'archiviazione o la ricerca, scegli l'app desktop.",
};
