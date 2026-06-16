import type { LegalContent } from "./types";

const UPDATED = "Juni 2026";

export const de: LegalContent = {
  privacy: {
    title: "Datenschutzerklärung",
    updated: UPDATED,
    description:
      "Online Mbox Viewer liest Ihre .mbox-Datei vollständig in Ihrem Browser. Es wird nichts hochgeladen, gespeichert oder weitergegeben.",
    intro:
      "Online Mbox Viewer ist ein kostenloses, browserbasiertes Werkzeug zum Lesen von .mbox-E-Mail-Archiven. Diese Erklärung beschreibt die (sehr geringe) Menge an Daten, die die Website verarbeitet. Kurz gesagt: Ihre E-Mail-Dateien verlassen niemals Ihr Gerät.",
    sections: [
      {
        heading: "Ihre Dateien werden lokal verarbeitet",
        paragraphs: [
          "Wenn Sie eine .mbox-Datei öffnen, wird sie direkt von Ihrem Gerät über Ihren Browser gelesen. Die Datei wird im Arbeitsspeicher Ihres Computers verarbeitet — sie wird niemals auf einen Server hochgeladen, und wir sehen, speichern oder übertragen ihren Inhalt nie.",
          "Es gibt kein Konto, keine Anmeldung und kein Backend, das Ihre E-Mails berührt. Beim Schließen oder Neuladen der Seite wird die Datei aus dem Arbeitsspeicher entfernt.",
        ],
      },
      {
        heading: "Was die Website selbst erhebt",
        paragraphs: [
          "Die Website nutzt standardmäßig Google Analytics 4 im cookielosen Modus (Consent Mode v2). Es werden keine Analyse-Cookies gesetzt, sofern Sie sie nicht ausdrücklich im Cookie-Banner akzeptieren. IP-Adressen werden anonymisiert.",
          "Wir speichern eine kleine Einstellung im localStorage Ihres Browsers für das Farbthema (hell/dunkel) und für Ihre Cookie-Auswahl. Diese verlassen niemals Ihren Browser.",
        ],
      },
      {
        heading: "Kein Tracking in Ihren E-Mails",
        paragraphs: [
          "Beim Lesen einer Nachricht werden externe Bilder standardmäßig blockiert, damit Tracking-Pixel in Werbe-E-Mails keine Verbindung nach außen aufbauen können. Sie können externe Bilder pro Nachricht laden lassen. Das HTML der Nachricht wird bereinigt und innerhalb eines abgeschotteten (sandboxed) iframes mit einer strengen Content-Security-Policy dargestellt.",
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "Die Website ist eine statische Website, die von Cloudflare Pages bereitgestellt wird. Standard-Serverprotokolle (etwa Anfrage-Metadaten) können vom Hosting-Anbieter verarbeitet werden, um die Website auszuliefern und vor Missbrauch zu schützen.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Fragen zu dieser Erklärung? Schreiben Sie an support@mboxviewer.net.",
        ],
      },
    ],
  },
  terms: {
    title: "Nutzungsbedingungen",
    updated: UPDATED,
    description: "Die Bedingungen für die Nutzung der kostenlosen Website Online Mbox Viewer.",
    intro:
      "Mit der Nutzung von Online Mbox Viewer stimmen Sie diesen Bedingungen zu. Der Dienst ist ein kostenloser, browserbasierter Viewer für .mbox-Dateien und wird wie besehen bereitgestellt.",
    sections: [
      {
        heading: "Nutzung des Dienstes",
        paragraphs: [
          "Online Mbox Viewer ist kostenlos nutzbar, um .mbox-E-Mail-Archive in Ihrem Browser zu lesen. Sie dürfen nur Dateien öffnen, die Ihnen gehören oder zu deren Zugriff Sie berechtigt sind.",
          "Der Viewer ist schreibgeschützt: Er ändert, sendet oder löscht Ihre E-Mails nicht. Er ist für einen schnellen Blick auf kleine Archive (bis zu 25 MB) gedacht. Für größere Dateien und erweiterte Funktionen nutzen Sie die Desktop-App, Mbox Viewer für Mac.",
        ],
      },
      {
        heading: "Keine Gewährleistung",
        paragraphs: [
          'Der Dienst wird "wie besehen" bereitgestellt, ohne jegliche Gewährleistung. Wir garantieren nicht, dass jede Nachricht in jeder .mbox-Variante perfekt dargestellt wird. Bewahren Sie stets eigene Sicherungskopien wichtiger E-Mail-Archive auf.',
        ],
      },
      {
        heading: "Haftungsbeschränkung",
        paragraphs: [
          "Soweit gesetzlich zulässig, haften der Autor und der Herausgeber nicht für Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung dieser Website entstehen.",
        ],
      },
      {
        heading: "Open Source",
        paragraphs: [
          "Der Quellcode der Website wird unter der MIT-Lizenz veröffentlicht. Sie können ihn gemäß dieser Lizenz frei lesen, forken und weiterverwenden.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: ["Fragen zu diesen Bedingungen? Schreiben Sie an support@mboxviewer.net."],
      },
    ],
  },
};
