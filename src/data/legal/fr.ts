import type { LegalContent } from "./types";

const UPDATED = "juin 2026";

export const fr: LegalContent = {
  privacy: {
    title: "Politique de confidentialité",
    updated: UPDATED,
    description:
      "Online Mbox Viewer lit votre fichier .mbox intégralement dans votre navigateur. Rien n'est téléversé, stocké ni partagé.",
    intro:
      "Online Mbox Viewer est un outil gratuit, basé sur le navigateur, pour lire les archives de courrier .mbox. Cette politique explique la (très faible) quantité de données que le site web traite. En résumé : vos fichiers de courrier ne quittent jamais votre appareil.",
    sections: [
      {
        heading: "Vos fichiers sont traités localement",
        paragraphs: [
          "Lorsque vous ouvrez un fichier .mbox, il est lu directement depuis votre appareil à l'aide de votre navigateur. Le fichier est analysé en mémoire sur votre ordinateur — il n'est jamais téléversé vers un serveur, et nous ne voyons, ne stockons ni ne transmettons jamais son contenu.",
          "Il n'y a aucun compte, aucune connexion et aucun backend qui touche à votre courrier. Fermer ou recharger la page efface le fichier de la mémoire.",
        ],
      },
      {
        heading: "Ce que le site web lui-même collecte",
        paragraphs: [
          "Le site utilise Google Analytics 4 en mode sans cookies par défaut (Consent Mode v2). Aucun cookie d'analyse n'est installé sauf si vous l'acceptez explicitement dans la bannière de cookies. Les adresses IP sont anonymisées.",
          "Nous enregistrons une petite préférence dans le localStorage de votre navigateur pour le thème de couleur (clair/sombre) et pour votre choix de cookies. Elles ne quittent jamais votre navigateur.",
        ],
      },
      {
        heading: "Aucun pistage à l'intérieur de votre courrier",
        paragraphs: [
          "Lorsque vous lisez un message, les images distantes sont bloquées par défaut afin que les pixels de pistage des courriers publicitaires ne puissent pas communiquer vers l'extérieur. Vous pouvez choisir de charger les images distantes message par message. Le HTML du message est assaini et affiché dans un iframe isolé (sandbox) doté d'une politique de sécurité du contenu stricte.",
        ],
      },
      {
        heading: "Hébergement",
        paragraphs: [
          "Le site est un site web statique servi par Cloudflare Pages. L'hébergeur peut traiter des journaux de serveur standard (comme les métadonnées des requêtes) pour servir le site et le protéger contre les abus.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Des questions sur cette politique ? Écrivez à support@mboxviewerpro.com.",
        ],
      },
    ],
  },
  terms: {
    title: "Conditions d'utilisation",
    updated: UPDATED,
    description: "Les conditions d'utilisation du site web gratuit Online Mbox Viewer.",
    intro:
      "En utilisant Online Mbox Viewer, vous acceptez ces conditions. Le service est une visionneuse gratuite de fichiers .mbox, basée sur le navigateur et fournie en l'état.",
    sections: [
      {
        heading: "Utilisation du service",
        paragraphs: [
          "Online Mbox Viewer est gratuit pour lire les archives de courrier .mbox dans votre navigateur. Vous ne pouvez ouvrir que des fichiers dont vous êtes propriétaire ou auxquels vous êtes autorisé à accéder.",
          "La visionneuse est en lecture seule : elle ne modifie, n'envoie ni ne supprime votre courrier. Elle est conçue pour jeter un coup d'œil rapide à de petites archives (jusqu'à 25 Mo). Pour les fichiers plus volumineux et les fonctionnalités avancées, utilisez l'application de bureau, Mbox Viewer pour Mac et Windows.",
        ],
      },
      {
        heading: "Aucune garantie",
        paragraphs: [
          "Le service est fourni « en l'état », sans garantie d'aucune sorte. Nous ne garantissons pas que chaque message de chaque variante de .mbox s'affichera parfaitement. Conservez toujours vos propres sauvegardes des archives de courrier importantes.",
        ],
      },
      {
        heading: "Limitation de responsabilité",
        paragraphs: [
          "Dans toute la mesure permise par la loi, l'auteur et l'éditeur ne sauraient être tenus responsables des dommages découlant de l'utilisation ou de l'impossibilité d'utiliser ce site web.",
        ],
      },
      {
        heading: "Open source",
        paragraphs: [
          "Le code source du site web est publié sous la licence MIT. Vous êtes libre de le lire, de le forker et de le réutiliser conformément à cette licence.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Des questions sur ces conditions ? Écrivez à support@mboxviewerpro.com."],
      },
    ],
  },
};
