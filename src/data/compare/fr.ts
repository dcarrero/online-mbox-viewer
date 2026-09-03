import type { CompareContent } from "./types";

export const fr: CompareContent = {
  title: "Visualiseur en ligne vs application de bureau",
  description:
    "Comparez la visionneuse MoOX en ligne gratuite avec l'application de bureau Mbox Viewer pour Mac et Windows — taille de fichier, recherche, confidentialité et utilisation hors ligne.",
  intro:
    "Les deux lisent votre courrier de façon locale et privée. La visionneuse du navigateur est le moyen le plus rapide de jeter un œil à une petite archive ; l'application de bureau est conçue pour les grandes archives et les fonctions avancées.",
  onlineLabel: "Visualiseur en ligne",
  desktopLabel: "Application de bureau (Mac et Windows)",
  rows: [
    { feature: "Prix", online: "Gratuit", desktop: "Essai gratuit · achat unique" },
    { feature: "Installation", online: "Aucune — fonctionne dans le navigateur", desktop: "Mac App Store · Microsoft Store" },
    { feature: "Taille de fichier max.", online: "Jusqu'à 25 Mo", desktop: "Toute taille (traite en flux les fichiers énormes)" },
    { feature: "Confidentialité", online: "100 % local, rien n'est téléversé", desktop: "100 % local, entièrement hors ligne" },
    { feature: "Recherche en texte intégral", online: "—", desktop: "Oui" },
    { feature: "Dossiers et libellés Gmail", online: "Filtre par libellé", desktop: "Arborescence complète de dossiers et libellés" },
    { feature: "Pièces jointes", online: "Téléchargement", desktop: "Téléchargement et aperçu" },
    { feature: "Exporter / convertir", online: "—", desktop: "Export vers EML, PDF et plus" },
    { feature: "Plateformes", online: "Tout navigateur moderne", desktop: "macOS · Windows" },
  ],
  closing:
    "Règle pratique : si votre fichier fait moins de 25 Mo et que vous avez seulement besoin de le lire, la visionneuse en ligne suffit amplement. Pour un Google Takeout complet, de l'archivage ou de la recherche, procurez-vous l'application de bureau.",
};
