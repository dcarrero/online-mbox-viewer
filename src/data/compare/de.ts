import type { CompareContent } from "./types";

export const de: CompareContent = {
  title: "Online-Viewer vs. Desktop-App",
  description:
    "Vergleichen Sie den kostenlosen Online-MBOX-Viewer mit der Desktop-App Mbox Viewer für Mac und Windows — Dateigröße, Suche, Datenschutz und Offline-Nutzung.",
  intro:
    "Beide lesen Ihre E-Mails lokal und privat. Der Browser-Viewer ist der schnellste Weg, um einen Blick in ein kleines Archiv zu werfen; die Desktop-App ist für große Archive und leistungsstarke Funktionen gebaut.",
  onlineLabel: "Online-Viewer",
  desktopLabel: "Desktop-App (Mac & Windows)",
  rows: [
    { feature: "Preis", online: "Kostenlos", desktop: "Kostenlose Testversion · Einmalkauf" },
    { feature: "Installation", online: "Keine — läuft im Browser", desktop: "Mac App Store · Microsoft Store" },
    { feature: "Maximale Dateigröße", online: "Bis zu 25 MB", desktop: "Beliebige Größe (streamt riesige Dateien)" },
    { feature: "Datenschutz", online: "100 % lokal, nichts hochgeladen", desktop: "100 % lokal, vollständig offline" },
    { feature: "Volltextsuche", online: "—", desktop: "Ja" },
    { feature: "Ordner & Gmail-Labels", online: "Nach Label filtern", desktop: "Vollständiger Ordnerbaum & Labels" },
    { feature: "Anhänge", online: "Herunterladen", desktop: "Herunterladen & Vorschau" },
    { feature: "Export / Konvertierung", online: "—", desktop: "Export nach EML, PDF und mehr" },
    { feature: "Plattformen", online: "Jeder moderne Browser", desktop: "macOS · Windows" },
  ],
  closing:
    "Faustregel: Wenn Ihre Datei unter 25 MB liegt und Sie sie nur lesen möchten, reicht der Online-Viewer völlig aus. Für einen vollständigen Gmail Takeout, zum Archivieren oder Suchen holen Sie sich die Desktop-App.",
};
