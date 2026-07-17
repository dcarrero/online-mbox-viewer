import type { HowToContent } from "./types";

export const fr: HowToContent = {
  title: "Comment ouvrir un fichier .mbox",
  description:
    "Un guide court et clair pour ouvrir et lire les fichiers de courrier .mbox en ligne — aucun logiciel à installer, rien n'est téléversé.",
  intro:
    "Un fichier .mbox est un fichier unique qui stocke une boîte aux lettres entière : de nombreux messages de courrier concaténés. Vous n'avez pas besoin d'un client de messagerie pour le lire — vous pouvez l'ouvrir ici même, dans votre navigateur.",
  stepsHeading: "Ouvrez votre fichier en 3 étapes",
  steps: [
    { title: "Glissez ou choisissez le fichier", body: "Sur la page d'accueil, glissez votre fichier .mbox dans la zone de dépôt, ou cliquez dessus pour rechercher le fichier sur votre ordinateur." },
    { title: "Parcourez les messages", body: "Chaque message est listé avec son expéditeur, son objet et sa date. Si l'archive provient de Gmail, vous pouvez filtrer par libellé." },
    { title: "Lisez un message", body: "Cliquez sur n'importe quel message pour le lire. Le courrier s'affiche en toute sécurité, avec les images distantes bloquées par défaut et les pièces jointes disponibles au téléchargement." },
  ],
  exportHeading: "Comment obtenir un fichier .mbox",
  exportIntro: "La plupart des applications de messagerie peuvent exporter au format .mbox. Les sources les plus courantes sont :",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Rendez-vous sur takeout.google.com, sélectionnez Courrier et téléchargez. Gmail exporte vos messages sous la forme d'un seul fichier .mbox." },
    { name: "Apple Mail", how: "Sélectionnez une boîte aux lettres, puis Boîte aux lettres ▸ Exporter la boîte aux lettres… Apple Mail écrit un paquet .mbox dans le dossier que vous choisissez." },
    { name: "Mozilla Thunderbird", how: "Installez le module complémentaire ImportExportTools NG, faites un clic droit sur un dossier et choisissez Exporter le dossier pour exporter un fichier .mbox." },
  ],
  whatHeading: "Ce que vous pouvez faire ici",
  what: [
    "Lire chaque message avec sa mise en forme HTML complète, assainie en toute sécurité.",
    "Télécharger les pièces jointes directement depuis un message.",
    "Filtrer les archives Gmail par leurs libellés d'origine.",
    "Garder tout privé — votre fichier ne quitte jamais votre appareil.",
  ],
  desktopHeading: "Ouvrir de très grandes archives",
  desktopBody:
    "Le visualiseur en ligne est optimisé pour les fichiers jusqu'à 25 MB. Un Google Takeout complet peut peser plusieurs gigaoctets — pour ceux-là, utilisez Mbox Viewer, l'application de bureau native pour Mac et Windows, qui traite en flux les archives de n'importe quelle taille et ajoute la recherche et l'export.",
};
