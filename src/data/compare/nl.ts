import type { CompareContent } from "./types";

export const nl: CompareContent = {
  title: "Online viewer vs. desktop-app",
  description:
    "Vergelijk de gratis online MBOX-viewer met de Mbox Viewer desktop-app voor Mac — bestandsgrootte, zoeken, privacy en offline gebruik.",
  intro:
    "Beide lezen je e-mail lokaal en privé. De browserviewer is de snelste manier om een klein archief te bekijken; de desktop-app is gemaakt voor grote archieven en geavanceerde functies.",
  onlineLabel: "Online viewer",
  desktopLabel: "Desktop-app (Mac)",
  rows: [
    { feature: "Prijs", online: "Gratis", desktop: "Gratis proefversie · eenmalige aankoop" },
    { feature: "Installatie", online: "Niets — draait in de browser", desktop: "Mac App Store" },
    { feature: "Max. bestandsgrootte", online: "Tot 25 MB", desktop: "Elke grootte (streamt enorme bestanden)" },
    { feature: "Privacy", online: "100% lokaal, niets geüpload", desktop: "100% lokaal, volledig offline" },
    { feature: "Volledige tekst zoeken", online: "—", desktop: "Ja" },
    { feature: "Mappen & Gmail-labels", online: "Filteren op label", desktop: "Volledige mappenstructuur & labels" },
    { feature: "Bijlagen", online: "Downloaden", desktop: "Downloaden & voorbeeld bekijken" },
    { feature: "Exporteren / converteren", online: "—", desktop: "Exporteren naar EML, PDF en meer" },
    { feature: "Platformen", online: "Elke moderne browser", desktop: "macOS nu · Windows binnenkort" },
  ],
  closing:
    "Vuistregel: als je bestand kleiner is dan 25 MB en je het alleen wilt lezen, is de online viewer alles wat je nodig hebt. Voor een volledige Google Takeout, archivering of zoeken kies je de desktop-app.",
};
