import type { FaqContent } from "./types";

export const fr: FaqContent = {
  title: "Questions fréquentes",
  description:
    "Réponses sur la lecture des fichiers .mbox en ligne : confidentialité, limite de taille, clients de messagerie compatibles et fonctionnement.",
  intro: "Tout ce que vous pourriez vouloir savoir avant d'ouvrir votre fichier .mbox dans le navigateur.",
  items: [
    {
      q: "Le visualiseur MBOX en ligne est-il sûr ?",
      a: "Oui. Votre fichier est lu intégralement dans votre navigateur — il n'est jamais téléversé vers un serveur. Le HTML des messages est assaini avec DOMPurify et affiché dans un iframe isolé (sandbox), et les images distantes sont bloquées par défaut pour stopper les pixels de pistage.",
    },
    {
      q: "Mon courrier est-il téléversé quelque part ?",
      a: "Non. Il n'y a aucun téléversement et aucun backend. L'ensemble du visualiseur s'exécute en JavaScript dans votre navigateur, de sorte que le contenu de votre fichier .mbox ne quitte jamais votre appareil.",
    },
    {
      q: "Quelle est la taille maximale du fichier ?",
      a: "Le visualiseur en ligne gère les fichiers jusqu'à 25 MB afin de rester rapide dans le navigateur. Pour les archives plus volumineuses — les exports complets de Google Takeout, par exemple — utilisez l'application de bureau, Mbox Viewer pour Mac, qui traite en flux les fichiers de n'importe quelle taille.",
    },
    {
      q: "Quelles applications de messagerie exportent des fichiers .mbox ?",
      a: "Apple Mail (Boîte aux lettres ▸ Exporter la boîte aux lettres), Mozilla Thunderbird (avec le module complémentaire ImportExportTools NG) et Google Takeout (qui exporte votre Gmail sous la forme d'un seul .mbox) produisent tous des fichiers .mbox. De nombreux autres clients peuvent également importer ou exporter ce format.",
    },
    {
      q: "Peut-il aussi ouvrir des fichiers .eml ?",
      a: "Oui. Un message .eml unique est ouvert comme une archive d'un seul message. Le visualiseur lit aussi les libellés Gmail stockés dans l'en-tête X-Gmail-Labels et vous permet de filtrer la liste des messages par libellé.",
    },
    {
      q: "Fonctionne-t-il hors ligne ?",
      a: "Une fois la page chargée, l'analyse se fait localement, de sorte que la lecture de votre fichier ne nécessite pas de connexion. Le premier chargement de la page nécessite bien Internet pour récupérer le site.",
    },
    {
      q: "Pourquoi certaines images ne s'affichent-elles pas ?",
      a: "Les images distantes sont bloquées par défaut pour votre confidentialité, car les courriers publicitaires les utilisent souvent comme pixels de pistage. Une barre en haut du message vous permet de charger les images de ce message si vous faites confiance à l'expéditeur.",
    },
    {
      q: "Est-ce vraiment gratuit ?",
      a: "Oui, le visualiseur en ligne est entièrement gratuit et open source (sous licence MIT). L'application de bureau optionnelle pour Mac est un produit distinct destiné aux utilisateurs avancés qui ont besoin d'ouvrir de très grandes archives.",
    },
  ],
};
