import type { LegalContent } from "./types";

const UPDATED = "Junho de 2026";

export const ptbr: LegalContent = {
  privacy: {
    title: "Política de privacidade",
    updated: UPDATED,
    description:
      "O Visualizador de MBOX online lê seu arquivo .mbox inteiramente no seu navegador. Nada é enviado, armazenado ou compartilhado.",
    intro:
      "O Visualizador de MBOX online é uma ferramenta gratuita baseada no navegador para ler arquivos de e-mail .mbox. Esta política explica a (pequeníssima) quantidade de dados que o site manipula. Em resumo: seus arquivos de e-mail nunca saem do seu dispositivo.",
    sections: [
      {
        heading: "Seus arquivos são processados localmente",
        paragraphs: [
          "Quando você abre um arquivo .mbox, ele é lido diretamente do seu dispositivo pelo seu navegador. O arquivo é processado na memória do seu computador — ele nunca é enviado a nenhum servidor, e nós nunca vemos, armazenamos ou transmitimos seu conteúdo.",
          "Não há conta, nem login, nem backend que toque no seu e-mail. Fechar ou recarregar a página descarta o arquivo da memória.",
        ],
      },
      {
        heading: "O que o próprio site coleta",
        paragraphs: [
          "O site usa o Google Analytics 4 no modo sem cookies por padrão (Consent Mode v2). Nenhum cookie de análise é definido a menos que você o aceite explicitamente no banner de cookies. Os endereços IP são anonimizados.",
          "Guardamos uma pequena preferência no localStorage do seu navegador para o tema de cor (claro/escuro) e para sua escolha de cookies. Elas nunca saem do seu navegador.",
        ],
      },
      {
        heading: "Sem rastreamento dentro do seu e-mail",
        paragraphs: [
          "Ao ler uma mensagem, as imagens remotas são bloqueadas por padrão para que os pixels de rastreamento dos e-mails de marketing não possam se comunicar. Você pode optar por carregar as imagens remotas mensagem por mensagem. O HTML da mensagem é higienizado e exibido dentro de um iframe isolado (sandbox) com uma política de segurança de conteúdo rigorosa.",
        ],
      },
      {
        heading: "Hospedagem",
        paragraphs: [
          "O site é uma página estática servida pela Cloudflare Pages. O provedor de hospedagem pode processar registros de servidor padrão (como metadados das requisições) para servir o site e protegê-lo contra abusos.",
        ],
      },
      {
        heading: "Contato",
        paragraphs: [
          "Dúvidas sobre esta política? Escreva para support@mboxviewerpro.com.",
        ],
      },
    ],
  },
  terms: {
    title: "Termos de serviço",
    updated: UPDATED,
    description: "Os termos de uso do site gratuito Visualizador de MBOX online.",
    intro:
      "Ao usar o Visualizador de MBOX online, você concorda com estes termos. O serviço é um visualizador gratuito de arquivos .mbox baseado no navegador, fornecido no estado em que se encontra.",
    sections: [
      {
        heading: "Uso do serviço",
        paragraphs: [
          "O Visualizador de MBOX online é de uso gratuito para ler arquivos de e-mail .mbox no seu navegador. Você só pode abrir arquivos de sua propriedade ou aos quais esteja autorizado a acessar.",
          "O visualizador é somente leitura: ele não modifica, envia nem exclui seu e-mail. Foi pensado para dar uma olhada rápida em arquivos pequenos (até 25 MB). Para arquivos maiores e recursos avançados, use o app de desktop, Mbox Viewer para Mac e Windows.",
        ],
      },
      {
        heading: "Sem garantia",
        paragraphs: [
          'O serviço é fornecido "no estado em que se encontra", sem garantias de qualquer tipo. Não garantimos que toda mensagem de qualquer variante de .mbox seja exibida perfeitamente. Mantenha sempre seus próprios backups dos arquivos de e-mail importantes.',
        ],
      },
      {
        heading: "Limitação de responsabilidade",
        paragraphs: [
          "Na máxima extensão permitida por lei, o autor e o editor não se responsabilizam por quaisquer danos decorrentes do uso ou da impossibilidade de uso deste site.",
        ],
      },
      {
        heading: "Código aberto",
        paragraphs: [
          "O código-fonte do site é publicado sob a licença MIT. Você é livre para lê-lo, fazer fork e reutilizá-lo de acordo com essa licença.",
        ],
      },
      {
        heading: "Contato",
        paragraphs: ["Dúvidas sobre estes termos? Escreva para support@mboxviewerpro.com."],
      },
    ],
  },
};
