import type { LegalContent } from "./types";

const UPDATED = "Juni 2026";

export const nl: LegalContent = {
  privacy: {
    title: "Privacybeleid",
    updated: UPDATED,
    description:
      "Online Mbox Viewer leest je .mbox-bestand volledig in je browser. Er wordt niets geüpload, opgeslagen of gedeeld.",
    intro:
      "Online Mbox Viewer is een gratis, browsergebaseerde tool om .mbox-e-mailarchieven te lezen. Dit beleid legt uit hoeveel (heel weinig) gegevens de website verwerkt. Kort gezegd: je e-mailbestanden verlaten je apparaat nooit.",
    sections: [
      {
        heading: "Je bestanden worden lokaal verwerkt",
        paragraphs: [
          "Wanneer je een .mbox-bestand opent, wordt het rechtstreeks vanaf je apparaat met je browser gelezen. Het bestand wordt in het geheugen van je computer verwerkt — het wordt nooit naar een server geüpload, en wij zien, bewaren of verzenden de inhoud ervan nooit.",
          "Er is geen account, geen aanmelding en geen backend die je e-mail aanraakt. Wanneer je de pagina sluit of vernieuwt, wordt het bestand uit het geheugen verwijderd.",
        ],
      },
      {
        heading: "Wat de website zelf verzamelt",
        paragraphs: [
          "De website gebruikt standaard Google Analytics 4 in cookieloze modus (Consent Mode v2). Er worden geen analytische cookies geplaatst tenzij je ze uitdrukkelijk accepteert in de cookiebanner. IP-adressen worden geanonimiseerd.",
          "We bewaren een kleine voorkeur in de localStorage van je browser voor het kleurthema (licht/donker) en voor je cookiekeuze. Deze verlaten je browser nooit.",
        ],
      },
      {
        heading: "Geen tracking in je e-mail",
        paragraphs: [
          "Wanneer je een bericht leest, worden externe afbeeldingen standaard geblokkeerd zodat trackingpixels in marketinge-mails niet naar huis kunnen bellen. Je kunt ervoor kiezen om externe afbeeldingen per bericht te laden. De HTML van berichten wordt opgeschoond en weergegeven in een sandboxed iframe met een strikt content security policy.",
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "De site is een statische website die wordt geserveerd door Cloudflare Pages. Standaard serverlogboeken (zoals verzoekmetadata) kunnen door de hostingprovider worden verwerkt om de site te leveren en te beschermen tegen misbruik.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Vragen over dit beleid? Stuur een e-mail naar support@mboxviewerpro.com.",
        ],
      },
    ],
  },
  terms: {
    title: "Servicevoorwaarden",
    updated: UPDATED,
    description: "De voorwaarden voor het gebruik van de gratis Online Mbox Viewer-website.",
    intro:
      "Door Online Mbox Viewer te gebruiken ga je akkoord met deze voorwaarden. De service is een gratis, browsergebaseerde viewer voor .mbox-bestanden, geleverd zoals deze is.",
    sections: [
      {
        heading: "Gebruik van de service",
        paragraphs: [
          "Online Mbox Viewer is gratis te gebruiken om .mbox-e-mailarchieven in je browser te lezen. Je mag alleen bestanden openen die je bezit of waartoe je gemachtigd bent toegang te krijgen.",
          "De viewer is alleen-lezen: hij wijzigt, verzendt of verwijdert je e-mail niet. Hij is bedoeld om snel kleine archieven (tot 25 MB) te bekijken. Voor grotere bestanden en geavanceerde functies gebruik je de desktop-app, Mbox Viewer voor Mac en Windows.",
        ],
      },
      {
        heading: "Geen garantie",
        paragraphs: [
          'De service wordt geleverd "zoals deze is", zonder enige vorm van garantie. We garanderen niet dat elk bericht in elke .mbox-variant perfect wordt weergegeven. Bewaar altijd je eigen back-ups van belangrijke e-mailarchieven.',
        ],
      },
      {
        heading: "Beperking van aansprakelijkheid",
        paragraphs: [
          "Voor zover wettelijk toegestaan zijn de auteur en uitgever niet aansprakelijk voor enige schade die voortvloeit uit het gebruik van, of het onvermogen om gebruik te maken van, deze website.",
        ],
      },
      {
        heading: "Open source",
        paragraphs: [
          "De broncode van de website wordt vrijgegeven onder de MIT-licentie. Je bent vrij om deze te lezen, te forken en te hergebruiken volgens die licentie.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Vragen over deze voorwaarden? Stuur een e-mail naar support@mboxviewerpro.com."],
      },
    ],
  },
};
