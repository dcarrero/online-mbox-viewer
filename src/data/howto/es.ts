import type { HowToContent } from "./types";

export const es: HowToContent = {
  title: "Cómo abrir un fichero .mbox",
  description:
    "Una guía breve y clara para abrir y leer ficheros de correo .mbox online — sin instalar nada, sin subir nada.",
  intro:
    "Un fichero .mbox es un único fichero que almacena un buzón entero: muchos mensajes de correo concatenados. No necesitas un cliente de correo para leerlo — puedes abrirlo aquí mismo, en tu navegador.",
  stepsHeading: "Abre tu fichero en 3 pasos",
  steps: [
    { title: "Arrastra o elige el fichero", body: "En la página de inicio, arrastra tu fichero .mbox a la zona de soltar, o haz clic en ella para buscar el fichero en tu ordenador." },
    { title: "Navega por los mensajes", body: "Cada mensaje se lista con su remitente, asunto y fecha. Si el archivo viene de Gmail, puedes filtrar por etiqueta." },
    { title: "Lee un mensaje", body: "Haz clic en cualquier mensaje para leerlo. El correo se muestra de forma segura, con las imágenes remotas bloqueadas por defecto y los adjuntos disponibles para descargar." },
  ],
  exportHeading: "Cómo conseguir un fichero .mbox",
  exportIntro: "La mayoría de apps de correo pueden exportar a .mbox. Las fuentes más habituales son:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Entra en takeout.google.com, selecciona Correo y descarga. Gmail exporta tus mensajes como un único fichero .mbox." },
    { name: "Apple Mail", how: "Selecciona un buzón y luego Buzón ▸ Exportar buzón… Apple Mail crea un paquete .mbox en la carpeta que elijas." },
    { name: "Mozilla Thunderbird", how: "Instala el complemento ImportExportTools NG, haz clic derecho en una carpeta y elige Exportar carpeta para exportar un fichero .mbox." },
  ],
  whatHeading: "Qué puedes hacer aquí",
  what: [
    "Leer cada mensaje con todo su formato HTML, saneado de forma segura.",
    "Descargar adjuntos directamente desde un mensaje.",
    "Filtrar archivos de Gmail por sus etiquetas originales.",
    "Mantener todo privado — tu fichero nunca sale de tu dispositivo.",
  ],
  desktopHeading: "Abrir archivos muy grandes",
  desktopBody:
    "El visor online está ajustado para ficheros de hasta 25 MB. Un Gmail Takeout completo puede ocupar varios gigabytes — para esos casos, usa Mbox Viewer, la app nativa de escritorio para Mac y Windows, que procesa archivos de cualquier tamaño y añade búsqueda y exportación.",
};

