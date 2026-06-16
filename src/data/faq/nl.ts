import type { FaqContent } from "./types";

export const nl: FaqContent = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden over het online lezen van .mbox-bestanden: privacy, limieten voor bestandsgrootte, ondersteunde e-mailclients en hoe het werkt.",
  intro: "Alles wat je wilt weten voordat je je .mbox-bestand in de browser opent.",
  items: [
    {
      q: "Is de online MBOX-viewer veilig in gebruik?",
      a: "Ja. Je bestand wordt volledig binnen je browser gelezen — het wordt nooit naar een server geüpload. De HTML van berichten wordt opgeschoond met DOMPurify en weergegeven in een sandboxed iframe, en externe afbeeldingen worden standaard geblokkeerd om trackingpixels tegen te houden.",
    },
    {
      q: "Wordt mijn e-mail ergens geüpload?",
      a: "Nee. Er is geen upload en geen backend. De hele viewer draait als JavaScript in je browser, dus de inhoud van je .mbox-bestand verlaat je apparaat nooit.",
    },
    {
      q: "Wat is de maximale bestandsgrootte?",
      a: "De online viewer verwerkt bestanden tot 25 MB zodat hij snel blijft in de browser. Voor grotere archieven — volledige Google Takeout-exports bijvoorbeeld — gebruik je de desktop-app, Mbox Viewer voor Mac, die bestanden van elke grootte streamt.",
    },
    {
      q: "Welke e-mailapps exporteren .mbox-bestanden?",
      a: "Apple Mail (Mailbox ▸ Exporteer mailbox), Mozilla Thunderbird (met de ImportExportTools NG-add-on) en Google Takeout (die je Gmail als één .mbox exporteert) produceren allemaal .mbox-bestanden. Veel andere clients kunnen het formaat ook importeren of exporteren.",
    },
    {
      q: "Kan het ook .eml-bestanden openen?",
      a: "Ja. Een enkel .eml-bericht wordt geopend als een archief met één bericht. De viewer leest ook Gmail-labels die zijn opgeslagen in de X-Gmail-Labels-header en laat je de berichtenlijst op label filteren.",
    },
    {
      q: "Werkt het offline?",
      a: "Zodra de pagina is geladen, gebeurt het verwerken lokaal, dus voor het lezen van je bestand is geen verbinding nodig. Voor het eerste laden van de pagina is wel internet nodig om de site op te halen.",
    },
    {
      q: "Waarom worden sommige afbeeldingen niet getoond?",
      a: "Externe afbeeldingen worden standaard geblokkeerd voor je privacy, omdat marketinge-mails ze vaak als trackingpixels gebruiken. Een balk bovenaan een bericht laat je de afbeeldingen voor dat bericht laden als je de afzender vertrouwt.",
    },
    {
      q: "Is het echt gratis?",
      a: "Ja, de online viewer is volledig gratis en open source (MIT-licentie). De optionele desktop-app voor Mac is een apart product voor gevorderde gebruikers die zeer grote archieven moeten openen.",
    },
  ],
};
