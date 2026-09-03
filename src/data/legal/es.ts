import type { LegalContent } from "./types";

const UPDATED = "Junio de 2026";

export const es: LegalContent = {
  privacy: {
    title: "Política de privacidad",
    updated: UPDATED,
    description:
      "Visor de MBOX online lee tu fichero .mbox íntegramente en tu navegador. No se sube, almacena ni comparte nada.",
    intro:
      "Visor de MBOX online es una herramienta gratuita basada en el navegador para leer archivos de correo .mbox. Esta política explica la (muy escasa) cantidad de datos que maneja el sitio web. En resumen: tus ficheros de correo nunca salen de tu dispositivo.",
    sections: [
      {
        heading: "Tus ficheros se procesan localmente",
        paragraphs: [
          "Cuando abres un fichero .mbox, se lee directamente desde tu dispositivo con tu navegador. El fichero se procesa en memoria en tu ordenador — nunca se sube a ningún servidor, y nunca vemos, almacenamos ni transmitimos su contenido.",
          "No hay cuenta, ni inicio de sesión, ni backend que toque tu correo. Cerrar o recargar la página descarta el fichero de la memoria.",
        ],
      },
      {
        heading: "Qué recopila el propio sitio web",
        paragraphs: [
          "El sitio usa Google Analytics 4 en modo sin cookies por defecto (Consent Mode v2). No se instala ninguna cookie de analítica salvo que la aceptes explícitamente en el banner de cookies. Las direcciones IP se anonimizan.",
          "Guardamos una pequeña preferencia en el localStorage de tu navegador para el tema de color (claro/oscuro) y para tu elección de cookies. Nunca salen de tu navegador.",
        ],
      },
      {
        heading: "Sin rastreo dentro de tu correo",
        paragraphs: [
          "Al leer un mensaje, las imágenes remotas se bloquean por defecto para que los píxeles de seguimiento de los correos publicitarios no puedan comunicarse. Puedes optar por cargar las imágenes remotas mensaje a mensaje. El HTML del mensaje se sanea y se muestra dentro de un iframe aislado (sandbox) con una política de seguridad de contenido estricta.",
        ],
      },
      {
        heading: "Alojamiento",
        paragraphs: [
          "El sitio es una web estática servida por Cloudflare Pages. El proveedor de alojamiento puede procesar registros de servidor estándar (como metadatos de las peticiones) para servir el sitio y protegerlo del abuso.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: ["¿Dudas sobre esta política? Escribe a support@mboxviewerpro.com."],
      },
    ],
  },
  terms: {
    title: "Términos del servicio",
    updated: UPDATED,
    description: "Los términos de uso del sitio web gratuito Visor de MBOX online.",
    intro:
      "Al usar Visor de MBOX online aceptas estos términos. El servicio es un visor gratuito de ficheros .mbox basado en el navegador, ofrecido tal cual.",
    sections: [
      {
        heading: "Uso del servicio",
        paragraphs: [
          "Visor de MBOX online es de uso gratuito para leer archivos de correo .mbox en tu navegador. Solo puedes abrir ficheros de tu propiedad o a los que estés autorizado a acceder.",
          "El visor es de solo lectura: no modifica, envía ni elimina tu correo. Está pensado para echar un vistazo rápido a archivos pequeños (hasta 25 MB). Para ficheros más grandes y funciones avanzadas, usa la app de escritorio, Mbox Viewer para Mac y Windows.",
        ],
      },
      {
        heading: "Sin garantía",
        paragraphs: [
          'El servicio se ofrece "tal cual", sin garantías de ningún tipo. No garantizamos que todos los mensajes de cualquier variante de .mbox se muestren perfectamente. Mantén siempre tus propias copias de seguridad de los archivos de correo importantes.',
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        paragraphs: [
          "En la máxima medida permitida por la ley, el autor y editor no se hacen responsables de los daños derivados del uso o la imposibilidad de uso de este sitio web.",
        ],
      },
      {
        heading: "Código abierto",
        paragraphs: [
          "El código fuente del sitio web se publica bajo la licencia MIT. Eres libre de leerlo, bifurcarlo (fork) y reutilizarlo conforme a dicha licencia.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: ["¿Dudas sobre estos términos? Escribe a support@mboxviewerpro.com."],
      },
    ],
  },
};

