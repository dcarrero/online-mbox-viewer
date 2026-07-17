import type { CompareContent } from "./types";

export const ptbr: CompareContent = {
  title: "Visualizador online vs app de desktop",
  description:
    "Compare o visualizador de MBOX online gratuito com o app de desktop Mbox Viewer para Mac e Windows — tamanho de arquivo, busca, privacidade e uso sem conexão.",
  intro:
    "Ambos leem seu e-mail de forma local e privada. O visualizador do navegador é o jeito mais rápido de dar uma espiada em um arquivo pequeno; o app de desktop foi feito para os grandes e para recursos avançados.",
  onlineLabel: "Visualizador online",
  desktopLabel: "App de desktop (Mac e Windows)",
  rows: [
    { feature: "Preço", online: "Grátis", desktop: "Teste grátis · compra única" },
    { feature: "Instalação", online: "Nenhuma — funciona no navegador", desktop: "Mac App Store · Microsoft Store" },
    { feature: "Tamanho máximo", online: "Até 25 MB", desktop: "Qualquer tamanho (processa arquivos enormes)" },
    { feature: "Privacidade", online: "100% local, nada é enviado", desktop: "100% local, totalmente offline" },
    { feature: "Busca de texto completo", online: "—", desktop: "Sim" },
    { feature: "Pastas e marcadores do Gmail", online: "Filtro por marcador", desktop: "Árvore de pastas e marcadores completa" },
    { feature: "Anexos", online: "Download", desktop: "Download e pré-visualização" },
    { feature: "Exportar / converter", online: "—", desktop: "Exporta para EML, PDF e mais" },
    { feature: "Plataformas", online: "Qualquer navegador moderno", desktop: "macOS · Windows" },
  ],
  closing:
    "Regra prática: se seu arquivo tem menos de 25 MB e você só precisa lê-lo, o visualizador online é tudo o que você precisa. Para um Google Takeout completo, arquivamento ou busca, baixe o app de desktop.",
};
