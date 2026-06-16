import type { HowToContent } from "./types";

export const de: HowToContent = {
  title: "Wie man eine .mbox-Datei öffnet",
  description:
    "Eine kurze, einfache Anleitung zum Öffnen und Lesen von .mbox-E-Mail-Dateien online — keine Software zu installieren, nichts wird hochgeladen.",
  intro:
    "Eine .mbox-Datei ist eine einzelne Datei, die ein ganzes Postfach speichert: viele E-Mail-Nachrichten aneinandergereiht. Sie brauchen kein E-Mail-Programm, um sie zu lesen — Sie können sie direkt hier in Ihrem Browser öffnen.",
  stepsHeading: "Öffnen Sie Ihre Datei in 3 Schritten",
  steps: [
    { title: "Datei ziehen oder auswählen", body: "Ziehen Sie auf der Startseite Ihre .mbox-Datei in den Ablagebereich oder klicken Sie darauf, um die Datei auf Ihrem Computer zu suchen." },
    { title: "Durch die Nachrichten blättern", body: "Jede Nachricht wird mit Absender, Betreff und Datum aufgelistet. Stammt das Archiv von Gmail, können Sie nach Label filtern." },
    { title: "Eine Nachricht lesen", body: "Klicken Sie auf eine beliebige Nachricht, um sie zu lesen. Die E-Mail wird sicher dargestellt, mit standardmäßig blockierten externen Bildern und herunterladbaren Anhängen." },
  ],
  exportHeading: "Wie man eine .mbox-Datei erhält",
  exportIntro: "Die meisten E-Mail-Apps können nach .mbox exportieren. Die häufigsten Quellen sind:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Gehen Sie zu takeout.google.com, wählen Sie Mail und laden Sie herunter. Gmail exportiert Ihre Nachrichten als eine einzige .mbox-Datei." },
    { name: "Apple Mail", how: "Wählen Sie ein Postfach und dann Postfach ▸ Postfach exportieren… Apple Mail schreibt ein .mbox-Paket in den von Ihnen gewählten Ordner." },
    { name: "Mozilla Thunderbird", how: "Installieren Sie das Add-on ImportExportTools NG, klicken Sie mit der rechten Maustaste auf einen Ordner und wählen Sie Ordner exportieren, um eine .mbox-Datei zu exportieren." },
  ],
  whatHeading: "Was Sie hier tun können",
  what: [
    "Jede Nachricht mit ihrer vollständigen HTML-Formatierung lesen, sicher bereinigt.",
    "Anhänge direkt aus einer Nachricht herunterladen.",
    "Gmail-Archive nach ihren ursprünglichen Labels filtern.",
    "Alles privat halten — Ihre Datei verlässt niemals Ihr Gerät.",
  ],
  desktopHeading: "Sehr große Archive öffnen",
  desktopBody:
    "Der Online-Viewer ist auf Dateien bis zu 25 MB ausgelegt. Ein vollständiger Gmail Takeout kann mehrere Gigabyte groß sein — nutzen Sie dafür Mbox Viewer, die native Desktop-App für Mac (Windows demnächst), die Archive beliebiger Größe per Streaming verarbeitet und Suche sowie Export hinzufügt.",
};
