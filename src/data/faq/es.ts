import type { FaqContent } from "./types";

export const es: FaqContent = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre leer ficheros .mbox online: privacidad, límite de tamaño, clientes de correo compatibles y cómo funciona.",
  intro: "Todo lo que quieras saber antes de abrir tu fichero .mbox en el navegador.",
  items: [
    {
      q: "¿Es seguro el visor de MBOX online?",
      a: "Sí. Tu fichero se lee íntegramente dentro de tu navegador — nunca se sube a un servidor. El HTML de los mensajes se sanea con DOMPurify y se muestra en un iframe aislado (sandbox), y las imágenes remotas se bloquean por defecto para frenar los píxeles de seguimiento.",
    },
    {
      q: "¿Se sube mi correo a algún sitio?",
      a: "No. No hay subida ni backend. Todo el visor funciona como JavaScript en tu navegador, así que el contenido de tu fichero .mbox nunca sale de tu dispositivo.",
    },
    {
      q: "¿Cuál es el tamaño máximo de fichero?",
      a: "El visor online admite ficheros de hasta 25 MB para mantenerse rápido en el navegador. Para archivos más grandes —por ejemplo, exportaciones completas de Gmail Takeout— usa la app de escritorio, Mbox Viewer para Mac y Windows, que procesa ficheros de cualquier tamaño.",
    },
    {
      q: "¿Qué aplicaciones de correo exportan ficheros .mbox?",
      a: "Apple Mail (Buzón ▸ Exportar buzón), Mozilla Thunderbird (con el complemento ImportExportTools NG) y Google Takeout (que exporta tu Gmail como un único .mbox) generan ficheros .mbox. Muchos otros clientes también pueden importar o exportar el formato.",
    },
    {
      q: "¿También abre ficheros .eml?",
      a: "Sí. Un único mensaje .eml se abre como un archivo de un solo mensaje. El visor también lee las etiquetas de Gmail guardadas en la cabecera X-Gmail-Labels y te deja filtrar la lista de mensajes por etiqueta.",
    },
    {
      q: "¿Funciona sin conexión?",
      a: "Una vez cargada la página, el procesamiento ocurre localmente, así que leer tu fichero no necesita conexión. La primera carga de la página sí requiere internet para descargar el sitio.",
    },
    {
      q: "¿Por qué no se muestran algunas imágenes?",
      a: "Las imágenes remotas se bloquean por defecto por tu privacidad, porque los correos publicitarios suelen usarlas como píxeles de seguimiento. Una barra en la parte superior del mensaje te permite cargar las imágenes de ese mensaje si confías en el remitente.",
    },
    {
      q: "¿Es realmente gratis?",
      a: "Sí, el visor online es completamente gratuito y de código abierto (licencia MIT). La app de escritorio opcional para Mac y Windows es un producto aparte para usuarios avanzados que necesitan abrir archivos muy grandes.",
    },
  ],
};

