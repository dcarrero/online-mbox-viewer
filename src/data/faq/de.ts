import type { FaqContent } from "./types";

export const de: FaqContent = {
  title: "Häufig gestellte Fragen",
  description:
    "Antworten zum Lesen von .mbox-Dateien online: Datenschutz, Dateigrößenbeschränkung, unterstützte E-Mail-Clients und wie es funktioniert.",
  intro: "Alles, was Sie wissen möchten, bevor Sie Ihre .mbox-Datei im Browser öffnen.",
  items: [
    {
      q: "Ist der Online-MBOX-Viewer sicher in der Anwendung?",
      a: "Ja. Ihre Datei wird vollständig in Ihrem Browser gelesen — sie wird niemals auf einen Server hochgeladen. Das HTML der Nachrichten wird mit DOMPurify bereinigt und in einem abgeschotteten (sandboxed) iframe dargestellt, und externe Bilder werden standardmäßig blockiert, um Tracking-Pixel zu stoppen.",
    },
    {
      q: "Werden meine E-Mails irgendwohin hochgeladen?",
      a: "Nein. Es gibt keinen Upload und kein Backend. Der gesamte Viewer läuft als JavaScript in Ihrem Browser, sodass der Inhalt Ihrer .mbox-Datei niemals Ihr Gerät verlässt.",
    },
    {
      q: "Wie groß darf die Datei maximal sein?",
      a: "Der Online-Viewer verarbeitet Dateien bis zu 25 MB, damit er im Browser schnell bleibt. Für größere Archive — zum Beispiel vollständige Gmail-Takeout-Exporte — nutzen Sie die Desktop-App, Mbox Viewer für Mac, die Dateien beliebiger Größe per Streaming verarbeitet.",
    },
    {
      q: "Welche E-Mail-Apps exportieren .mbox-Dateien?",
      a: "Apple Mail (Postfach ▸ Postfach exportieren), Mozilla Thunderbird (mit dem Add-on ImportExportTools NG) und Google Takeout (das Ihr Gmail als eine einzige .mbox exportiert) erzeugen alle .mbox-Dateien. Viele andere Clients können das Format ebenfalls importieren oder exportieren.",
    },
    {
      q: "Kann er auch .eml-Dateien öffnen?",
      a: "Ja. Eine einzelne .eml-Nachricht wird als Archiv mit einer Nachricht geöffnet. Der Viewer liest außerdem Gmail-Labels, die im Header X-Gmail-Labels gespeichert sind, und lässt Sie die Nachrichtenliste nach Label filtern.",
    },
    {
      q: "Funktioniert er offline?",
      a: "Sobald die Seite geladen ist, erfolgt die Verarbeitung lokal, sodass das Lesen Ihrer Datei keine Verbindung benötigt. Das erste Laden der Seite erfordert das Internet, um die Website abzurufen.",
    },
    {
      q: "Warum werden einige Bilder nicht angezeigt?",
      a: "Externe Bilder werden zu Ihrem Schutz standardmäßig blockiert, weil Werbe-E-Mails sie oft als Tracking-Pixel verwenden. Eine Leiste am oberen Rand einer Nachricht ermöglicht es Ihnen, die Bilder für diese Nachricht zu laden, wenn Sie dem Absender vertrauen.",
    },
    {
      q: "Ist er wirklich kostenlos?",
      a: "Ja, der Online-Viewer ist völlig kostenlos und quelloffen (MIT-lizenziert). Die optionale Desktop-App für Mac ist ein separates Produkt für fortgeschrittene Nutzer, die sehr große Archive öffnen müssen.",
    },
  ],
};
