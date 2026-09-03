import type { HowToContent } from "./types";

export const ptbr: HowToContent = {
  title: "Como abrir um arquivo .mbox",
  description:
    "Um guia curto e claro para abrir e ler arquivos de e-mail .mbox online — sem instalar nada, sem enviar nada.",
  intro:
    "Um arquivo .mbox é um único arquivo que armazena uma caixa de correio inteira: muitas mensagens de e-mail concatenadas. Você não precisa de um cliente de e-mail para ler — pode abri-lo aqui mesmo, no seu navegador.",
  stepsHeading: "Abra seu arquivo em 3 passos",
  steps: [
    { title: "Arraste ou escolha o arquivo", body: "Na página inicial, arraste seu arquivo .mbox para a área de soltar, ou clique nela para procurar o arquivo no seu computador." },
    { title: "Navegue pelas mensagens", body: "Cada mensagem é listada com seu remetente, assunto e data. Se o arquivo vier do Gmail, você pode filtrar por marcador." },
    { title: "Leia uma mensagem", body: "Clique em qualquer mensagem para lê-la. O e-mail é exibido de forma segura, com as imagens remotas bloqueadas por padrão e os anexos disponíveis para download." },
  ],
  exportHeading: "Como obter um arquivo .mbox",
  exportIntro: "A maioria dos apps de e-mail pode exportar para .mbox. As fontes mais comuns são:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Acesse takeout.google.com, selecione E-mail e baixe. O Gmail exporta suas mensagens como um único arquivo .mbox." },
    { name: "Apple Mail", how: "Selecione uma caixa de correio e depois Caixa de correio ▸ Exportar caixa de correio… O Apple Mail cria um pacote .mbox na pasta que você escolher. Esse pacote é uma pasta: abra-o (clique com o botão direito ▸ Mostrar Conteúdo do Pacote) e use o arquivo mbox que está dentro." },
    { name: "Mozilla Thunderbird", how: "Instale o complemento ImportExportTools NG, clique com o botão direito em uma pasta e escolha Exportar pasta para exportar um arquivo .mbox." },
  ],
  whatHeading: "O que você pode fazer aqui",
  what: [
    "Ler cada mensagem com toda a sua formatação HTML, higienizada de forma segura.",
    "Baixar anexos diretamente de uma mensagem.",
    "Filtrar arquivos do Gmail pelos seus marcadores originais.",
    "Manter tudo privado — seu arquivo nunca sai do seu dispositivo.",
  ],
  desktopHeading: "Abrir arquivos muito grandes",
  desktopBody:
    "O visualizador online é ajustado para arquivos de até 25 MB. Um Google Takeout completo pode ocupar vários gigabytes — para esses casos, use o Mbox Viewer, o app nativo de desktop para Mac e Windows, que processa arquivos de qualquer tamanho e adiciona busca e exportação.",
};
