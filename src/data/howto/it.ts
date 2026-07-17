import type { HowToContent } from "./types";

export const it: HowToContent = {
  title: "Come aprire un file .mbox",
  description:
    "Una guida breve e chiara per aprire e leggere i file di posta .mbox online — nessun software da installare, niente da caricare.",
  intro:
    "Un file .mbox è un singolo file che contiene un'intera casella di posta: molti messaggi email concatenati tra loro. Non hai bisogno di un client di posta per leggerne uno — puoi aprirlo proprio qui nel tuo browser.",
  stepsHeading: "Apri il tuo file in 3 passaggi",
  steps: [
    { title: "Trascina o scegli il file", body: "Nella pagina principale, trascina il tuo file .mbox nell'area di rilascio, oppure cliccala per cercare il file sul tuo computer." },
    { title: "Sfoglia i messaggi", body: "Ogni messaggio è elencato con mittente, oggetto e data. Se l'archivio proviene da Gmail, puoi filtrare per etichetta." },
    { title: "Leggi un messaggio", body: "Clicca su un messaggio qualsiasi per leggerlo. L'email viene mostrata in modo sicuro, con le immagini remote bloccate per impostazione predefinita e gli allegati disponibili per il download." },
  ],
  exportHeading: "Come ottenere un file .mbox",
  exportIntro: "La maggior parte delle app di posta può esportare in .mbox. Le fonti più comuni sono:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Vai su takeout.google.com, seleziona Posta e scarica. Gmail esporta i tuoi messaggi come un singolo file .mbox." },
    { name: "Apple Mail", how: "Seleziona una casella, poi Casella ▸ Esporta casella… Apple Mail scrive un pacchetto .mbox nella cartella che scegli." },
    { name: "Mozilla Thunderbird", how: "Installa il componente aggiuntivo ImportExportTools NG, fai clic con il tasto destro su una cartella e scegli Esporta cartella per esportare un file .mbox." },
  ],
  whatHeading: "Cosa puoi fare qui",
  what: [
    "Leggere ogni messaggio con la sua formattazione HTML completa, sanificata in modo sicuro.",
    "Scaricare gli allegati direttamente da un messaggio.",
    "Filtrare gli archivi di Gmail in base alle loro etichette originali.",
    "Mantenere tutto privato — il tuo file non lascia mai il tuo dispositivo.",
  ],
  desktopHeading: "Aprire archivi molto grandi",
  desktopBody:
    "Il visualizzatore online è ottimizzato per file fino a 25 MB. Un Google Takeout completo di Gmail può essere di diversi gigabyte — per quei casi, usa Mbox Viewer, l'app desktop nativa per Mac e Windows, che gestisce in streaming archivi di qualsiasi dimensione e aggiunge ricerca ed esportazione.",
};
