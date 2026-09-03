/**
 * Visor de mbox 100% en el navegador. Nada se sube a ningún servidor.
 *
 * - Trocea el .mbox por las líneas separadoras "From " (formato mbox).
 * - Lista rápida: parseo ligero de cabeceras (De/Asunto/Fecha) por mensaje.
 * - Lectura: parseo MIME completo y perezoso con postal-mime solo al abrir.
 * - Seguridad: HTML saneado con DOMPurify + render en <iframe sandbox> con CSP
 *   interna; imágenes remotas bloqueadas por defecto; imágenes inline (cid:)
 *   embebidas como data:; adjuntos descargables como Blob.
 */
import PostalMime from "postal-mime";
import DOMPurify from "dompurify";

interface Strings {
  locale: string;
  maxMb: number;
  loading: string;
  reading: string; // {name}
  tooLarge: string; // {mb} y {max} se sustituyen
  empty: string;
  error: string;
  noSubject: string;
  noSender: string;
  messages: string; // {n}
  messagesOne: string; // {n} == 1
  dateUnknown: string;
  showImages: string;
  imagesBlocked: string;
  attachments: string;
  from: string;
  to: string;
  date: string;
  allLabels: string;
}

interface MsgIndex {
  start: number; // offset del cuerpo RFC822 (tras la línea "From ")
  end: number;
  sender: string;
  subject: string;
  date: string;
  labels: string[]; // X-Gmail-Labels (categorías/carpetas/tags)
}

const ascii = (b: Uint8Array, i: number, s: string) => {
  for (let k = 0; k < s.length; k++) if (b[i + k] !== s.charCodeAt(k)) return false;
  return true;
};

// ───────────────────────── decodificación de cabeceras ─────────────────────────

function b64ToBytes(s: string): Uint8Array {
  const bin = atob(s.replace(/\s+/g, ""));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function decodeWord(charset: string, enc: string, text: string): string {
  try {
    let bytes: Uint8Array;
    if (enc.toUpperCase() === "B") {
      bytes = b64ToBytes(text);
    } else {
      const s = text
        .replace(/_/g, " ")
        .replace(/=([0-9A-Fa-f]{2})/g, (_m, h) => String.fromCharCode(parseInt(h, 16)));
      bytes = Uint8Array.from(s, (c) => c.charCodeAt(0) & 0xff);
    }
    return new TextDecoder(charset.toLowerCase()).decode(bytes);
  } catch {
    return text;
  }
}

/** Decodifica encoded-words RFC 2047 (=?utf-8?B?…?=). */
function decodeRFC2047(input: string): string {
  if (!input.includes("=?")) return input;
  return input
    .replace(/(\?=)\s+(=\?)/g, "$1$2") // colapsa espacio entre palabras codificadas
    .replace(/=\?([^?]+)\?([BbQq])\?([^?]*)\?=/g, (_m, cs, enc, txt) =>
      decodeWord(cs, enc, txt),
    );
}

/**
 * Nombre visible y dirección real, juntos. formatSender() se queda con el
 * display name y tira la dirección, así que un correo de evil@example.com que
 * se llame "PayPal" se veía solo como "PayPal" — justo el dato por el que se
 * abre un archivo de correo viejo. En la lista no cabe; en la cabecera sí.
 */
function addressHtml(p: any, fallback: string): string {
  const name = decodeRFC2047(String(p?.name || "")).trim();
  const addr = String(p?.address || "").trim();
  if (!name && !addr) return escapeHtml(fallback);
  if (!addr) return escapeHtml(name);
  if (!name) return `<span class="mbox-addr">${escapeHtml(addr)}</span>`;
  return `${escapeHtml(name)} <span class="mbox-addr">&lt;${escapeHtml(addr)}&gt;</span>`;
}

function formatSender(raw: string, fallback: string): string {
  const v = decodeRFC2047(raw).trim();
  if (!v) return fallback;
  // Parseo lineal a propósito. La regex /^\s*"?(.*?)"?\s*<([^>]+)>\s*$/ que
  // había aquí backtrackea de forma cuadrática con espacios interiores: una
  // cabecera "From:" de 80.000 espacios tardaba 3,7 s, y corre por cada
  // mensaje del archivo, así que un .mbox hostil congelaba la pestaña.
  if (v.endsWith(">")) {
    const lt = v.lastIndexOf("<");
    if (lt !== -1) {
      const addr = v.slice(lt + 1, -1).trim();
      let name = v.slice(0, lt).trim();
      if (name.length > 1 && name.startsWith('"') && name.endsWith('"')) {
        name = name.slice(1, -1).trim();
      }
      if (name || addr) return name || addr;
    }
  }
  return v;
}

const utf8 = new TextDecoder("utf-8");

/** Etiquetas a ocultar en el filtro (ruido de estado de Gmail). */
const NOISE_LABELS = new Set(["unread", "opened", "important"]);

function parseLabels(raw: string): string[] {
  if (!raw) return [];
  return decodeRFC2047(raw)
    .split(",")
    .map((l) => l.trim().replace(/^Category\s+/i, ""))
    .filter((l) => l && !NOISE_LABELS.has(l.toLowerCase()));
}

/** Extrae De/Asunto/Fecha/Etiquetas del bloque de cabeceras (bytes). */
function parseHeaders(
  bytes: Uint8Array,
  S: Strings,
): { sender: string; subject: string; date: string; labels: string[] } {
  const text = utf8.decode(bytes).replace(/\r?\n[ \t]+/g, " ");
  const get = (name: string): string => {
    const re = new RegExp(`^${name}:[ \\t]*(.*)$`, "im");
    const m = text.match(re);
    return m ? m[1].trim() : "";
  };
  return {
    sender: formatSender(get("from"), S.noSender),
    subject: decodeRFC2047(get("subject")) || S.noSubject,
    date: get("date"),
    labels: parseLabels(get("x-gmail-labels")),
  };
}

// ───────────────────────── troceado del mbox ─────────────────────────

function endOfHeaders(bytes: Uint8Array, start: number, end: number): number {
  for (let i = start; i < end - 1; i++) {
    if (bytes[i] === 0x0a && bytes[i + 1] === 0x0a) return i; // \n\n
    if (bytes[i] === 0x0a && bytes[i + 1] === 0x0d && bytes[i + 2] === 0x0a) return i; // \n\r\n
  }
  return end;
}

/**
 * ¿El bloque parece un mensaje RFC 822? Un fichero sin ninguna línea "From " se
 * trata como un único .eml; sin esta comprobación, un PDF o un ZIP soltado por
 * error se mostraba como "1 mensaje" de bytes basura en lugar de dar error.
 */
function looksLikeRfc822(bytes: Uint8Array, start: number, end: number): boolean {
  // Basta con que la primera línea no vacía tenga forma "Nombre-Cabecera:".
  let i = start;
  while (i < end && (bytes[i] === 0x0a || bytes[i] === 0x0d)) i++;
  const limit = Math.min(end, i + 998); // línea máxima de RFC 5322
  let name = 0;
  for (; i < limit; i++) {
    const b = bytes[i];
    if (b === 0x3a /* : */) return name > 0;
    if (b < 0x21 || b > 0x7e) return false; // field-name: US-ASCII imprimible
    name++;
  }
  return false;
}

function splitMbox(bytes: Uint8Array, S: Strings): MsgIndex[] {
  const n = bytes.length;
  // Offsets de cada línea "From " al inicio de línea.
  const starts: number[] = [];
  if (ascii(bytes, 0, "From ")) starts.push(0);
  for (let i = 0; i < n - 5; i++) {
    if (bytes[i] === 0x0a && ascii(bytes, i + 1, "From ")) starts.push(i + 1);
  }

  const bounds: { from: number; to: number }[] = [];
  if (starts.length === 0) {
    if (!looksLikeRfc822(bytes, 0, n)) return []; // no es un .mbox ni un .eml
    bounds.push({ from: 0, to: n }); // probablemente un único .eml
  } else {
    for (let i = 0; i < starts.length; i++) {
      bounds.push({ from: starts[i], to: i + 1 < starts.length ? starts[i + 1] : n });
    }
  }

  const msgs: MsgIndex[] = [];
  for (const b of bounds) {
    // Salta la línea de sobre "From …" si está presente.
    let bodyStart = b.from;
    if (ascii(bytes, b.from, "From ")) {
      const nl = bytes.indexOf(0x0a, b.from);
      bodyStart = nl === -1 || nl >= b.to ? b.from : nl + 1;
    }
    if (bodyStart >= b.to) continue;
    const hEnd = endOfHeaders(bytes, bodyStart, b.to);
    const { sender, subject, date, labels } = parseHeaders(bytes.subarray(bodyStart, hEnd), S);
    msgs.push({ start: bodyStart, end: b.to, sender, subject, date, labels });
  }
  return msgs;
}

/** Reconstruye un mensaje RFC822 des-escapando ">From " → "From " (mboxrd). */
function messageBytes(bytes: Uint8Array, m: MsgIndex): Uint8Array {
  const slice = bytes.subarray(m.start, m.end);
  // Comprueba rápido si hay algo que des-escapar.
  let hasEscape = false;
  for (let i = 0; i < slice.length - 1; i++) {
    if ((i === 0 || slice[i - 1] === 0x0a) && slice[i] === 0x3e /* > */) {
      let j = i;
      while (slice[j] === 0x3e) j++;
      if (ascii(slice, j, "From ")) {
        hasEscape = true;
        break;
      }
    }
  }
  if (!hasEscape) return slice;
  const out = new Uint8Array(slice.length);
  let w = 0;
  for (let i = 0; i < slice.length; i++) {
    if ((i === 0 || slice[i - 1] === 0x0a) && slice[i] === 0x3e) {
      let j = i;
      while (slice[j] === 0x3e) j++;
      if (ascii(slice, j, "From ")) {
        i++; // descarta un '>'
      }
    }
    out[w++] = slice[i];
  }
  return out.subarray(0, w);
}

// ───────────────────────── render ─────────────────────────

function bytesToDataUrl(content: ArrayBuffer | Uint8Array, mime: string): string {
  const u8 = content instanceof Uint8Array ? content : new Uint8Array(content);
  let bin = "";
  const chunk = 0x8000;
  for (let i = 0; i < u8.length; i += chunk) {
    bin += String.fromCharCode.apply(null, Array.from(u8.subarray(i, i + chunk)));
  }
  return `data:${mime || "application/octet-stream"};base64,${btoa(bin)}`;
}

function labelHue(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % 360;
}

function tagPills(labels: string[]): string {
  return labels
    .map((l) => `<span class="mbox-tag" style="--h:${labelHue(l)}">${escapeHtml(l)}</span>`)
    .join("");
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function isRemote(url: string): boolean {
  return /^(https?:)?\/\//i.test(url) || /^\/\//.test(url);
}

interface BuiltBody {
  srcdoc: string;
  blockedImages: number;
}

/** Sanea el HTML del email y construye el documento del iframe. */
/**
 * cid → data: para las imágenes incrustadas. Se calcula una vez por mensaje y
 * se le pasa a buildHtmlDoc: pulsar "mostrar imágenes" vuelve a sanear (hay
 * que hacerlo) pero antes re-codificaba en base64 todos los adjuntos inline
 * otra vez, que en un boletín con imágenes pesa.
 */
function buildCidMap(
  attachments: { contentId?: string; mimeType: string; content: ArrayBuffer | Uint8Array }[],
): Map<string, string> {
  const cidMap = new Map<string, string>();
  for (const a of attachments) {
    if (a.contentId) {
      cidMap.set(a.contentId.replace(/^<|>$/g, ""), bytesToDataUrl(a.content, a.mimeType));
    }
  }
  return cidMap;
}

function buildHtmlDoc(
  html: string,
  cidMap: Map<string, string>,
  showRemote: boolean,
): BuiltBody {
  const root = DOMPurify.sanitize(html, {
    RETURN_DOM: true,
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "link", "meta", "base", "form"],
    FORBID_ATTR: ["srcset", "background", "style"],
    ALLOW_DATA_ATTR: false,
  }) as HTMLElement;

  let blocked = 0;
  root.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src") || "";
    if (src.startsWith("cid:")) {
      const url = cidMap.get(src.slice(4).replace(/^<|>$/g, ""));
      if (url) img.setAttribute("src", url);
      else img.removeAttribute("src");
    } else if (isRemote(src)) {
      if (showRemote) {
        img.setAttribute("src", src);
      } else {
        img.setAttribute("data-blocked", src);
        img.removeAttribute("src");
        blocked++;
      }
    }
  });

  // Enlaces: abrir fuera del iframe, sin filtrar referer.
  root.querySelectorAll("a[href]").forEach((a) => {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer nofollow");
  });

  const imgSrc = showRemote ? "data: https:" : "data:";
  const csp =
    `default-src 'none'; img-src ${imgSrc}; style-src 'unsafe-inline'; ` +
    `font-src data:; media-src data:;`;
  const css =
    "html{color-scheme:light}body{margin:0;padding:16px;font:14px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1c2024;word-break:break-word}" +
    "img{max-width:100%;height:auto}a{color:#2563eb}table{max-width:100%}";
  const srcdoc =
    `<!doctype html><html><head><meta charset="utf-8">` +
    `<meta http-equiv="Content-Security-Policy" content="${csp}">` +
    `<base target="_blank"><style>${css}</style></head><body>${root.innerHTML}</body></html>`;
  return { srcdoc, blockedImages: blocked };
}

// ───────────────────────── controlador ─────────────────────────

class Viewer {
  private S: Strings;
  private bytes: Uint8Array | null = null;
  private msgs: MsgIndex[] = [];
  private el: Record<string, HTMLElement>;
  private objectUrls: string[] = [];
  private showRemote = false;
  private current = -1;
  private activeLabel = "";
  private renderSeq = 0;

  constructor(S: Strings) {
    this.S = S;
    const id = (x: string) => document.getElementById(x) as HTMLElement;
    this.el = {
      intro: id("mbox-intro"),
      app: id("mbox-app"),
      list: id("mbox-list"),
      count: id("mbox-count"),
      filter: id("mbox-filter"),
      reader: id("mbox-reader"),
      filename: id("mbox-filename"),
      error: id("mbox-error"),
      loadingEl: id("mbox-loading"),
    };

    // Delegación: un listener para toda la lista. Antes se añadía uno por
    // mensaje, 7.557 en un archivo de 24 MB.
    this.el.list.addEventListener("click", (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>(".mbox-item");
      if (btn?.dataset.idx) this.open(Number(btn.dataset.idx), true);
    });

    // Se registra una vez, no en cada buildFilter(): abrir un segundo fichero
    // acumulaba listeners sobre el mismo <select>.
    this.el.filter?.addEventListener("change", () => {
      this.activeLabel = (this.el.filter as HTMLSelectElement).value;
      this.applyFilter();
    });
  }

  /** Muestra u oculta el aviso de "leyendo…" (role="status", se anuncia). */
  private setBusy(msg: string | null) {
    this.el.loadingEl.textContent = msg ?? "";
    this.el.loadingEl.hidden = msg === null;
  }

  private showError(msg: string) {
    this.el.error.textContent = msg;
    this.el.error.hidden = false;
  }

  private clearObjectUrls() {
    for (const u of this.objectUrls) URL.revokeObjectURL(u);
    this.objectUrls = [];
  }

  async load(file: Blob, name: string) {
    this.el.error.hidden = true;
    const mb = file.size / (1024 * 1024);
    if (mb > this.S.maxMb) {
      this.showError(
        this.S.tooLarge.replace("{mb}", mb.toFixed(1)).replace("{max}", String(this.S.maxMb)),
      );
      return;
    }
    // El indexado bloquea el hilo (≈440 ms con 24 MB), así que primero se
    // pinta el aviso: dos rAF garantizan que el frame ha salido a pantalla.
    this.setBusy(this.S.reading.replace("{name}", name));
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    try {
      const buf = await file.arrayBuffer();
      this.bytes = new Uint8Array(buf);
      this.msgs = splitMbox(this.bytes, this.S);
    } catch {
      this.showError(this.S.error);
      this.setBusy(null);
      return;
    }
    if (this.msgs.length === 0) {
      // Vacío de verdad y no parseable son errores distintos para quien lo abre.
      this.showError(this.bytes.length === 0 ? this.S.empty : this.S.error);
      this.setBusy(null);
      return;
    }
    this.el.filename.textContent = name;
    this.el.intro.hidden = true;
    this.el.app.hidden = false;
    this.renderList();
    this.open(0);
    this.setBusy(null);
    // El dropzone que tenía el foco acaba de desaparecer con el intro; sin
    // esto el foco cae a <body> y hay que recorrer la página entera de nuevo.
    this.el.list.querySelector<HTMLElement>(".mbox-item")?.focus();
  }

  private renderList() {
    const n = this.msgs.length;
    this.el.count.textContent = (n === 1 ? this.S.messagesOne : this.S.messages).replace(
      "{n}",
      String(n),
    );
    this.el.list.replaceChildren();
    const seq = ++this.renderSeq;
    // Primero lo que cabe en pantalla; el resto en trozos, cediendo el hilo.
    // De una tacada, 7.557 mensajes tardaban 1,78 s con la UI congelada.
    const append = (start: number) => {
      if (seq !== this.renderSeq) return; // llegó otro fichero por el camino
      const end = Math.min(start + (start === 0 ? 80 : 500), this.msgs.length);
      const frag = document.createDocumentFragment();
      for (let i = start; i < end; i++) frag.appendChild(this.itemFor(i));
      this.el.list.appendChild(frag);
      if (end < this.msgs.length) requestAnimationFrame(() => append(end));
    };
    append(0);
    this.buildFilter();
  }

  private itemFor(i: number): HTMLLIElement {
    const m = this.msgs[i];
    const li = document.createElement("li");
    li.dataset.idx = String(i);
    // El filtro se aplica al crear: los lotes que aún faltan por pintar deben
    // respetar la etiqueta ya seleccionada.
    if (this.activeLabel && !m.labels.includes(this.activeLabel)) li.hidden = true;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mbox-item";
    btn.dataset.idx = String(i);
    btn.setAttribute("aria-current", this.current === i ? "true" : "false");
    btn.innerHTML =
      `<span class="mbox-item-sender">${escapeHtml(m.sender)}</span>` +
      `<span class="mbox-item-subject">${escapeHtml(m.subject)}</span>` +
      (m.labels.length ? `<span class="mbox-item-tags">${tagPills(m.labels)}</span>` : "") +
      `<span class="mbox-item-date">${escapeHtml(this.shortDate(m.date))}</span>`;
    li.appendChild(btn);
    return li;
  }

  private applyFilter() {
    const val = this.activeLabel;
    this.el.list.querySelectorAll<HTMLElement>("li[data-idx]").forEach((li) => {
      const idx = Number(li.dataset.idx);
      li.hidden = !!val && !this.msgs[idx].labels.includes(val);
    });
  }

  private buildFilter() {
    const sel = this.el.filter as HTMLSelectElement | undefined;
    if (!sel) return;
    const labels = Array.from(new Set(this.msgs.flatMap((m) => m.labels))).sort((a, b) =>
      a.localeCompare(b),
    );
    if (labels.length === 0) {
      (sel.parentElement || sel).hidden = true;
      return;
    }
    (sel.parentElement || sel).hidden = false;
    sel.innerHTML =
      `<option value="">${escapeHtml(this.S.allLabels)}</option>` +
      labels.map((l) => `<option value="${escapeHtml(l)}">${escapeHtml(l)}</option>`).join("");
    this.activeLabel = "";
  }

  private shortDate(raw: string): string {
    if (!raw) return "";
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    try {
      return new Intl.DateTimeFormat(this.S.locale, { dateStyle: "medium" }).format(d);
    } catch {
      return d.toDateString();
    }
  }

  private longDate(raw: string): string {
    if (!raw) return this.S.dateUnknown;
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    try {
      return new Intl.DateTimeFormat(this.S.locale, { dateStyle: "long", timeStyle: "short" }).format(d);
    } catch {
      return d.toString();
    }
  }

  private async open(i: number, fromUser = false) {
    if (!this.bytes || i < 0 || i >= this.msgs.length) return;
    this.showRemote = false;
    this.el.list
      .querySelector('.mbox-item[aria-current="true"]')
      ?.setAttribute("aria-current", "false");
    this.el.list
      .querySelector(`.mbox-item[data-idx="${i}"]`)
      ?.setAttribute("aria-current", "true");
    this.current = i;
    this.el.reader.innerHTML = `<p class="mbox-status">${escapeHtml(this.S.loading)}</p>`;
    // Por debajo de lg la lista y el lector se apilan: sin esto, tocar un
    // mensaje en móvil o en iPad vertical no produce ningún cambio visible.
    if (fromUser && window.matchMedia("(max-width: 1023px)").matches) {
      const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      this.el.reader.scrollIntoView({ block: "start", behavior: still ? "auto" : "smooth" });
    }
    try {
      const raw = messageBytes(this.bytes, this.msgs[i]);
      const email = await PostalMime.parse(raw);
      this.renderMessage(email, this.msgs[i].labels);
    } catch {
      this.el.reader.innerHTML = `<p class="mbox-status">${escapeHtml(this.S.error)}</p>`;
    }
  }

  private renderMessage(email: any, labels: string[] = []) {
    this.clearObjectUrls();
    const S = this.S;
    const fromHtml = addressHtml(email.from, S.noSender);
    const toHtml = (email.to || [])
      .map((t: any) => addressHtml(t, ""))
      .filter(Boolean)
      .join(", ");
    const subject = decodeRFC2047(email.subject || "") || S.noSubject;

    const wrap = document.createElement("div");
    wrap.className = "mbox-message";

    const head = document.createElement("div");
    head.className = "mbox-msg-head";
    head.innerHTML =
      `<h2 class="mbox-msg-subject">${escapeHtml(subject)}</h2>` +
      `<dl class="mbox-msg-meta">` +
      `<div><dt>${escapeHtml(S.from)}</dt><dd>${fromHtml}</dd></div>` +
      (toHtml ? `<div><dt>${escapeHtml(S.to)}</dt><dd>${toHtml}</dd></div>` : "") +
      `<div><dt>${escapeHtml(S.date)}</dt><dd>${escapeHtml(this.longDate(email.date || ""))}</dd></div>` +
      `</dl>` +
      (labels.length ? `<div class="mbox-msg-tags">${tagPills(labels)}</div>` : "");
    wrap.appendChild(head);

    // Cuerpo
    const attachments = email.attachments || [];
    if (email.html) {
      const cidMap = buildCidMap(attachments);
      const built = buildHtmlDoc(email.html, cidMap, this.showRemote);
      if (built.blockedImages > 0) {
        const bar = document.createElement("button");
        bar.type = "button";
        bar.className = "mbox-imgbar";
        bar.textContent = `${S.imagesBlocked} · ${S.showImages}`;
        bar.addEventListener("click", () => {
          this.showRemote = true;
          const re = buildHtmlDoc(email.html, cidMap, true);
          frame.srcdoc = re.srcdoc;
          bar.remove();
        });
        wrap.appendChild(bar);
      }
      const frame = document.createElement("iframe");
      frame.className = "mbox-frame";
      frame.setAttribute("sandbox", "allow-popups allow-popups-to-escape-sandbox");
      frame.setAttribute("referrerpolicy", "no-referrer");
      frame.title = email.subject || S.noSubject;
      frame.srcdoc = built.srcdoc;
      wrap.appendChild(frame);
    } else {
      const pre = document.createElement("pre");
      pre.className = "mbox-text";
      pre.textContent = email.text || "";
      wrap.appendChild(pre);
    }

    // Adjuntos (excluye inline ya embebidos)
    const files = attachments.filter((a: any) => a.disposition === "attachment" || !a.contentId);
    if (files.length) {
      const sec = document.createElement("div");
      sec.className = "mbox-attach";
      const h = document.createElement("h3");
      h.textContent = `${S.attachments} (${files.length})`;
      sec.appendChild(h);
      const ul = document.createElement("ul");
      files.forEach((a: any) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        // Siempre octet-stream: el mimeType lo declara el correo, y un adjunto
        // text/html o image/svg+xml abierto como documento (en vez de
        // descargado) ejecutaría scripts en una blob: de nuestro propio origen.
        // El atributo download conserva el nombre igual.
        const blob = new Blob([a.content], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        this.objectUrls.push(url);
        link.href = url;
        link.download = a.filename || "attachment";
        link.textContent = `${a.filename || "attachment"} · ${this.fmtSize(blob.size)}`;
        link.className = "mbox-attach-link";
        li.appendChild(link);
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      wrap.appendChild(sec);
    }

    this.el.reader.replaceChildren(wrap);
  }

  private fmtSize(n: number): string {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
  }
}

// ───────────────────────── arranque ─────────────────────────

function getStrings(): Strings {
  const node = document.getElementById("mbox-i18n");
  return JSON.parse(node?.textContent || "{}") as Strings;
}

function init() {
  const intro = document.getElementById("mbox-intro");
  if (!intro) return; // no estamos en la página del visor
  const S = getStrings();
  const viewer = new Viewer(S);

  const input = document.getElementById("mbox-file") as HTMLInputElement | null;
  const dropzone = document.getElementById("mbox-dropzone");

  const onFile = (file: File | Blob, name: string) => viewer.load(file, name);

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
    const f = (e as DragEvent).dataTransfer?.files?.[0];
    if (f) onFile(f, f.name);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
