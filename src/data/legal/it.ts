import type { LegalContent } from "./types";

const UPDATED = "Giugno 2026";

export const it: LegalContent = {
  privacy: {
    title: "Informativa sulla privacy",
    updated: UPDATED,
    description:
      "Online Mbox Viewer legge il tuo file .mbox interamente nel browser. Nulla viene caricato, archiviato o condiviso.",
    intro:
      "Online Mbox Viewer è uno strumento gratuito, basato sul browser, per leggere gli archivi di posta .mbox. Questa informativa spiega la (piccolissima) quantità di dati che il sito web gestisce. In breve: i tuoi file di posta non lasciano mai il tuo dispositivo.",
    sections: [
      {
        heading: "I tuoi file vengono elaborati localmente",
        paragraphs: [
          "Quando apri un file .mbox, viene letto direttamente dal tuo dispositivo tramite il browser. Il file viene analizzato in memoria sul tuo computer — non viene mai caricato su alcun server e non vediamo, archiviamo né trasmettiamo mai il suo contenuto.",
          "Non esiste alcun account, alcun accesso e alcun backend che tocchi la tua posta. Chiudendo o aggiornando la pagina, il file viene rimosso dalla memoria.",
        ],
      },
      {
        heading: "Cosa raccoglie il sito web stesso",
        paragraphs: [
          "Il sito web utilizza Google Analytics 4 in modalità senza cookie per impostazione predefinita (Consent Mode v2). Non viene impostato alcun cookie di analisi a meno che tu non lo accetti esplicitamente nel banner dei cookie. Gli indirizzi IP vengono anonimizzati.",
          "Memorizziamo una piccola preferenza nel localStorage del tuo browser per il tema cromatico (chiaro/scuro) e per la tua scelta sui cookie. Queste informazioni non lasciano mai il tuo browser.",
        ],
      },
      {
        heading: "Nessun tracciamento all'interno della tua posta",
        paragraphs: [
          "Quando leggi un messaggio, le immagini remote vengono bloccate per impostazione predefinita, in modo che i pixel di tracciamento nelle email di marketing non possano comunicare con l'esterno. Puoi scegliere di caricare le immagini remote per ogni singolo messaggio. L'HTML del messaggio viene sanificato e visualizzato all'interno di un iframe in sandbox con una rigorosa content security policy.",
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "Il sito è un sito web statico servito da Cloudflare Pages. I normali log del server (come i metadati delle richieste) possono essere elaborati dal provider di hosting per erogare il sito e proteggerlo da abusi.",
        ],
      },
      {
        heading: "Contatti",
        paragraphs: [
          "Domande su questa informativa? Scrivi a support@mboxviewerpro.com.",
        ],
      },
    ],
  },
  terms: {
    title: "Termini di servizio",
    updated: UPDATED,
    description: "I termini per l'utilizzo del sito web gratuito Online Mbox Viewer.",
    intro:
      "Utilizzando Online Mbox Viewer accetti questi termini. Il servizio è un visualizzatore gratuito di file .mbox basato sul browser, fornito così com'è.",
    sections: [
      {
        heading: "Utilizzo del servizio",
        paragraphs: [
          "Online Mbox Viewer è gratuito e serve a leggere gli archivi di posta .mbox nel tuo browser. Puoi aprire solo file di tua proprietà o a cui sei autorizzato ad accedere.",
          "Il visualizzatore è di sola lettura: non modifica, invia né elimina la tua posta. È pensato per dare un'occhiata rapida a piccoli archivi (fino a 25 MB). Per file più grandi e funzionalità avanzate, usa l'app desktop, Mbox Viewer per Mac.",
        ],
      },
      {
        heading: "Nessuna garanzia",
        paragraphs: [
          'Il servizio è fornito "così com\'è", senza garanzie di alcun tipo. Non garantiamo che ogni messaggio in ogni variante di .mbox venga visualizzato perfettamente. Conserva sempre copie di backup dei tuoi archivi di posta importanti.',
        ],
      },
      {
        heading: "Limitazione di responsabilità",
        paragraphs: [
          "Nella misura massima consentita dalla legge, l'autore e l'editore non sono responsabili per eventuali danni derivanti dall'uso, o dall'impossibilità di usare, questo sito web.",
        ],
      },
      {
        heading: "Open source",
        paragraphs: [
          "Il codice sorgente del sito web è rilasciato sotto licenza MIT. Sei libero di leggerlo, fare un fork e riutilizzarlo secondo quella licenza.",
        ],
      },
      {
        heading: "Contatti",
        paragraphs: ["Domande su questi termini? Scrivi a support@mboxviewerpro.com."],
      },
    ],
  },
};
