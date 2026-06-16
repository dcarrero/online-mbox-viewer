import type { FaqContent } from "./types";

export const it: FaqContent = {
  title: "Domande frequenti",
  description:
    "Risposte sulla lettura dei file .mbox online: privacy, limiti di dimensione dei file, client di posta supportati e come funziona.",
  intro: "Tutto ciò che potresti voler sapere prima di aprire il tuo file .mbox nel browser.",
  items: [
    {
      q: "Il visualizzatore MBOX online è sicuro da usare?",
      a: "Sì. Il tuo file viene letto interamente all'interno del browser — non viene mai caricato su un server. L'HTML del messaggio viene sanificato con DOMPurify e visualizzato in un iframe in sandbox, e le immagini remote vengono bloccate per impostazione predefinita per fermare i pixel di tracciamento.",
    },
    {
      q: "La mia posta viene caricata da qualche parte?",
      a: "No. Non c'è alcun caricamento né alcun backend. L'intero visualizzatore funziona come JavaScript nel tuo browser, quindi il contenuto del tuo file .mbox non lascia mai il tuo dispositivo.",
    },
    {
      q: "Qual è la dimensione massima del file?",
      a: "Il visualizzatore online gestisce file fino a 25 MB per rimanere veloce nel browser. Per archivi più grandi — ad esempio le esportazioni complete di Gmail con Google Takeout — usa l'app desktop, Mbox Viewer per Mac, che gestisce in streaming file di qualsiasi dimensione.",
    },
    {
      q: "Quali app di posta esportano file .mbox?",
      a: "Apple Mail (Casella ▸ Esporta casella), Mozilla Thunderbird (con il componente aggiuntivo ImportExportTools NG) e Google Takeout (che esporta la tua Gmail come un singolo file .mbox) producono tutti file .mbox. Anche molti altri client possono importare o esportare il formato.",
    },
    {
      q: "Può aprire anche i file .eml?",
      a: "Sì. Un singolo messaggio .eml viene aperto come un archivio di un solo messaggio. Il visualizzatore legge anche le etichette di Gmail memorizzate nell'intestazione X-Gmail-Labels e ti consente di filtrare l'elenco dei messaggi per etichetta.",
    },
    {
      q: "Funziona offline?",
      a: "Una volta caricata la pagina, l'analisi avviene localmente, quindi la lettura del tuo file non richiede una connessione. Il primo caricamento della pagina richiede invece Internet per scaricare il sito.",
    },
    {
      q: "Perché alcune immagini non vengono mostrate?",
      a: "Le immagini remote vengono bloccate per impostazione predefinita per la tua privacy, perché le email di marketing le usano spesso come pixel di tracciamento. Una barra nella parte superiore di un messaggio ti permette di caricare le immagini di quel messaggio se ti fidi del mittente.",
    },
    {
      q: "È davvero gratuito?",
      a: "Sì, il visualizzatore online è completamente gratuito e open source (licenza MIT). L'app desktop opzionale per Mac è un prodotto separato per gli utenti esperti che hanno bisogno di aprire archivi molto grandi.",
    },
  ],
};
