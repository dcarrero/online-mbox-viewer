import type { FaqContent } from "./types";

export const ptbr: FaqContent = {
  title: "Perguntas frequentes",
  description:
    "Respostas sobre ler arquivos .mbox online: privacidade, limite de tamanho, clientes de e-mail compatíveis e como funciona.",
  intro: "Tudo o que você queira saber antes de abrir seu arquivo .mbox no navegador.",
  items: [
    {
      q: "O visualizador de MBOX online é seguro de usar?",
      a: "Sim. Seu arquivo é lido inteiramente dentro do seu navegador — ele nunca é enviado a um servidor. O HTML das mensagens é higienizado com DOMPurify e exibido em um iframe isolado (sandbox), e as imagens remotas são bloqueadas por padrão para conter os pixels de rastreamento.",
    },
    {
      q: "Meu e-mail é enviado para algum lugar?",
      a: "Não. Não há envio nem backend. Todo o visualizador funciona como JavaScript no seu navegador, então o conteúdo do seu arquivo .mbox nunca sai do seu dispositivo.",
    },
    {
      q: "Qual é o tamanho máximo de arquivo?",
      a: "O visualizador online lida com arquivos de até 25 MB para manter a velocidade no navegador. Para arquivos maiores — exportações completas do Google Takeout, por exemplo — use o app de desktop, Mbox Viewer para Mac e Windows, que processa arquivos de qualquer tamanho.",
    },
    {
      q: "Quais aplicativos de e-mail exportam arquivos .mbox?",
      a: "Apple Mail (Caixa de correio ▸ Exportar caixa de correio), Mozilla Thunderbird (com o complemento ImportExportTools NG) e Google Takeout (que exporta seu Gmail como um único .mbox) geram arquivos .mbox. Muitos outros clientes também podem importar ou exportar o formato.",
    },
    {
      q: "Ele também abre arquivos .eml?",
      a: "Sim. Uma única mensagem .eml é aberta como um arquivo de uma só mensagem. O visualizador também lê os marcadores do Gmail armazenados no cabeçalho X-Gmail-Labels e permite filtrar a lista de mensagens por marcador.",
    },
    {
      q: "Funciona sem conexão?",
      a: "Depois que a página é carregada, o processamento acontece localmente, então ler seu arquivo não precisa de conexão. O primeiro carregamento da página exige internet para baixar o site.",
    },
    {
      q: "Por que algumas imagens não são exibidas?",
      a: "As imagens remotas são bloqueadas por padrão para sua privacidade, porque os e-mails de marketing costumam usá-las como pixels de rastreamento. Uma barra na parte superior da mensagem permite carregar as imagens dessa mensagem, caso você confie no remetente.",
    },
    {
      q: "É realmente gratuito?",
      a: "Sim, o visualizador online é totalmente gratuito e de código aberto (licença MIT). O app de desktop opcional para Mac e Windows é um produto à parte, para usuários avançados que precisam abrir arquivos muito grandes.",
    },
  ],
};
