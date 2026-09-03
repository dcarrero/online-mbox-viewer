/**
 * Arranque del visor. Solo registra los gestos que abren un fichero; el visor
 * en sí (postal-mime + DOMPurify, ~36 KB gz) se trae con import() dinámico la
 * primera vez que hace falta, para que quien entra a leer la página y no abre
 * nada no llegue a evaluarlo.
 */
const intro = document.getElementById("mbox-intro");

if (intro) {
  const input = document.getElementById("mbox-file") as HTMLInputElement | null;
  const dropzone = document.getElementById("mbox-dropzone");

  let mod: Promise<typeof import("./mbox-viewer")> | null = null;
  const viewerModule = () => (mod ??= import("./mbox-viewer"));

  // Precarga en cuanto se ve la intención — puntero encima, arrastre iniciado
  // o foco de teclado — para que al soltar el fichero ya esté descargado.
  ["pointerenter", "dragenter", "focusin"].forEach((ev) =>
    dropzone?.addEventListener(ev, () => void viewerModule(), { once: true }),
  );

  const strings = () =>
    JSON.parse(document.getElementById("mbox-i18n")?.textContent || "{}");

  const onFile = async (file: File | Blob, name: string, dropped = 1) => {
    try {
      const m = await viewerModule();
      await m.openFile(file, name);
      // Soltar varios ficheros abría el primero en silencio.
      if (dropped > 1) {
        const note = document.getElementById("mbox-loading");
        if (note) {
          note.textContent = (strings().multiple || "").replace("{name}", name);
          note.hidden = false;
        }
      }
    } catch {
      // Si el módulo no llega (red caída), hay que decirlo: sin esto, soltar
      // un fichero no haría absolutamente nada.
      const err = document.getElementById("mbox-error");
      const txt = document.getElementById("mbox-error-text");
      if (!err || !txt) return;
      txt.textContent = strings().error || "";
      err.hidden = false;
    }
  };

  input?.addEventListener("change", () => {
    const f = input.files?.[0];
    if (f) onFile(f, f.name);
  });
  dropzone?.addEventListener("click", () => input?.click());
  document.querySelectorAll("[data-mbox-open]").forEach((b) =>
    b.addEventListener("click", () => input?.click()),
  );
  dropzone?.addEventListener("keydown", (e) => {
    if ((e as KeyboardEvent).key === "Enter" || (e as KeyboardEvent).key === " ") {
      e.preventDefault();
      input?.click();
    }
  });

  // Sin esto, soltar el fichero un poco fuera del recuadro dispara el
  // comportamiento por defecto del navegador: abre o descarga el .mbox y
  // abandona la página.
  ["dragover", "drop"].forEach((ev) =>
    document.addEventListener(ev, (e) => {
      if (!dropzone?.contains(e.target as Node)) e.preventDefault();
    }),
  );

  const stop = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };
  ["dragenter", "dragover"].forEach((ev) =>
    dropzone?.addEventListener(ev, (e) => {
      stop(e);
      dropzone.classList.add("is-drag");
    }),
  );
  ["dragleave", "drop"].forEach((ev) =>
    dropzone?.addEventListener(ev, (e) => {
      stop(e);
      dropzone.classList.remove("is-drag");
    }),
  );
  dropzone?.addEventListener("drop", (e) => {
    const files = (e as DragEvent).dataTransfer?.files;
    const f = files?.[0];
    if (f) onFile(f, f.name, files?.length ?? 1);
  });
}
