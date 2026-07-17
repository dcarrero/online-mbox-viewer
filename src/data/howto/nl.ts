import type { HowToContent } from "./types";

export const nl: HowToContent = {
  title: "Een .mbox-bestand openen",
  description:
    "Een korte, duidelijke handleiding voor het online openen en lezen van .mbox-e-mailbestanden — geen software te installeren, niets geüpload.",
  intro:
    "Een .mbox-bestand is één enkel bestand dat een hele mailbox opslaat: veel e-mailberichten die aan elkaar zijn gekoppeld. Je hebt geen e-mailclient nodig om er een te lezen — je kunt het hier meteen in je browser openen.",
  stepsHeading: "Open je bestand in 3 stappen",
  steps: [
    { title: "Sleep of kies het bestand", body: "Sleep op de startpagina je .mbox-bestand naar het neerzetgebied, of klik erop om het bestand op je computer te zoeken." },
    { title: "Blader door de berichten", body: "Elk bericht wordt weergegeven met de afzender, het onderwerp en de datum. Als het archief van Gmail komt, kun je op label filteren." },
    { title: "Lees een bericht", body: "Klik op een bericht om het te lezen. De e-mail wordt veilig weergegeven, met externe afbeeldingen standaard geblokkeerd en bijlagen beschikbaar om te downloaden." },
  ],
  exportHeading: "Hoe je aan een .mbox-bestand komt",
  exportIntro: "De meeste e-mailapps kunnen naar .mbox exporteren. De meest voorkomende bronnen zijn:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Ga naar takeout.google.com, selecteer Mail en download. Gmail exporteert je berichten als één .mbox-bestand." },
    { name: "Apple Mail", how: "Selecteer een mailbox en kies dan Mailbox ▸ Exporteer mailbox… Apple Mail schrijft een .mbox-pakket naar de map die je kiest." },
    { name: "Mozilla Thunderbird", how: "Installeer de ImportExportTools NG-add-on, klik met de rechtermuisknop op een map en kies Map exporteren om een .mbox-bestand te exporteren." },
  ],
  whatHeading: "Wat je hier kunt doen",
  what: [
    "Lees elk bericht met de volledige HTML-opmaak, veilig opgeschoond.",
    "Download bijlagen rechtstreeks vanuit een bericht.",
    "Filter Gmail-archieven op hun oorspronkelijke labels.",
    "Houd alles privé — je bestand verlaat je apparaat nooit.",
  ],
  desktopHeading: "Zeer grote archieven openen",
  desktopBody:
    "De online viewer is afgestemd op bestanden tot 25 MB. Een volledige Google Takeout kan meerdere gigabytes groot zijn — gebruik daarvoor Mbox Viewer, de native desktop-app voor Mac en Windows, die archieven van elke grootte streamt en zoeken en exporteren toevoegt.",
};
