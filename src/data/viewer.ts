import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";

/**
 * Copy del visor de mbox en los 10 idiomas. Incluye el texto de la interfaz y
 * las cadenas que el script consume en runtime. `{max}` se interpola con el
 * límite de tamaño (SITE.webViewerMaxMB). Cae a inglés para idiomas sin entrada.
 */
export interface ViewerCopy {
  title: string;
  subtitle: string;
  privacy: string;
  dropTitle: string;
  dropHint: string;
  dropNote: string;
  openAnother: string;
  desktopTitle: string;
  desktopBody: string;
  metaTitle: string;
  metaDescription: string;
  // runtime
  loading: string;
  reading: string; // {name}
  tooLarge: string;
  empty: string;
  error: string;
  noSubject: string;
  noSender: string;
  messages: string;
  messagesOne: string;
  dateUnknown: string;
  showImages: string;
  imagesBlocked: string;
  attachments: string;
  from: string;
  to: string;
  date: string;
  allLabels: string;
  mobileNote: string;
}

function build(max: number): Record<string, ViewerCopy> {
  return {
    en: {
      title: "Free online MBOX viewer",
      subtitle: `Open and read MBOX email archives right in your browser. Nothing is uploaded — your file never leaves your device. Up to ${max} MB.`,
      privacy: "100% private — runs entirely in your browser, nothing is uploaded.",
      dropTitle: "Drop your .mbox file here",
      dropHint: "or click to choose a file",
      dropNote: `Processed locally · max ${max} MB`,
      openAnother: "Open another file",
      desktopTitle: "Bigger files or more features?",
      desktopBody:
        "This web viewer is for a quick look at small archives. For files of any size, full-text search, folders and export, get the native desktop app for Mac or Windows.",
      metaTitle: "Free Online MBOX Viewer — open MBOX files in your browser",
      metaDescription: `Open and read MBOX files online, free and private. Everything runs in your browser — nothing is uploaded. Up to ${max} MB. For larger files, get Mbox Viewer for Mac or Windows.`,
      loading: "Loading message…",
      reading: "Reading {name}…",
      tooLarge: `This file is {mb} MB. The online viewer is limited to {max} MB — get the desktop app for larger archives.`,
      empty: "No email messages were found in this file.",
      error: "This file could not be read as an MBOX archive.",
      noSubject: "(no subject)",
      noSender: "(unknown sender)",
      messages: "{n} messages",
      messagesOne: "{n} message",
      dateUnknown: "Unknown date",
      showImages: "Show images",
      imagesBlocked: "Remote images blocked for your privacy",
      attachments: "Attachments",
      from: "From",
      to: "To",
      date: "Date",
      allLabels: "All labels",
      mobileNote:
        "The online viewer is built for desktop and iPad. On a phone the screen is too small to read comfortably — open it on a bigger device, or use the desktop app.",
    },
    es: {
      title: "Visor de MBOX online gratis",
      subtitle: `Abre y lee archivos MBOX directamente en tu navegador. No se sube nada — tu fichero nunca sale de tu dispositivo. Hasta ${max} MB.`,
      privacy: "100% privado — todo se procesa en tu navegador, nada se sube.",
      dropTitle: "Suelta aquí tu fichero .mbox",
      dropHint: "o haz clic para elegir un fichero",
      dropNote: `Procesado localmente · máx. ${max} MB`,
      openAnother: "Abrir otro fichero",
      desktopTitle: "¿Ficheros grandes o más funciones?",
      desktopBody:
        "Este visor web es para echar un vistazo rápido a archivos pequeños. Para ficheros de cualquier tamaño, búsqueda de texto completo, carpetas y exportación, descarga la app nativa de escritorio para Mac o Windows.",
      metaTitle: "Visor de MBOX online gratis — abre ficheros MBOX en tu navegador",
      metaDescription: `Abre y lee ficheros MBOX online, gratis y privado. Todo se procesa en tu navegador — no se sube nada. Hasta ${max} MB. Para ficheros más grandes, descarga Mbox Viewer para Mac o Windows.`,
      loading: "Cargando mensaje…",
      reading: "Leyendo {name}…",
      tooLarge: `Este fichero ocupa {mb} MB. El visor online está limitado a {max} MB — descarga la app de escritorio para archivos más grandes.`,
      empty: "No se encontró ningún correo en este fichero.",
      error: "No se pudo leer este fichero como archivo MBOX.",
      noSubject: "(sin asunto)",
      noSender: "(remitente desconocido)",
      messages: "{n} mensajes",
      messagesOne: "{n} mensaje",
      dateUnknown: "Fecha desconocida",
      showImages: "Mostrar imágenes",
      imagesBlocked: "Imágenes remotas bloqueadas por privacidad",
      attachments: "Adjuntos",
      from: "De",
      to: "Para",
      date: "Fecha",
      allLabels: "Todas las etiquetas",
      mobileNote:
        "El visor online está pensado para escritorio y iPad. En el móvil la pantalla es demasiado pequeña para leer con comodidad — ábrelo en un dispositivo más grande o usa la app de escritorio.",
    },
    de: {
      title: "Kostenloser Online-MBOX-Viewer",
      subtitle: `MBOX-E-Mail-Archive direkt im Browser öffnen und lesen. Nichts wird hochgeladen — deine Datei verlässt dein Gerät nie. Bis zu ${max} MB.`,
      privacy: "100% privat — läuft komplett in deinem Browser, nichts wird hochgeladen.",
      dropTitle: "Lege deine .mbox-Datei hier ab",
      dropHint: "oder klicke, um eine Datei auszuwählen",
      dropNote: `Lokal verarbeitet · max. ${max} MB`,
      openAnother: "Andere Datei öffnen",
      desktopTitle: "Größere Dateien oder mehr Funktionen?",
      desktopBody:
        "Dieser Web-Viewer ist für einen schnellen Blick auf kleine Archive gedacht. Für Dateien beliebiger Größe, Volltextsuche, Ordner und Export hol dir die native Desktop-App für Mac oder Windows.",
      metaTitle: "Kostenloser Online-MBOX-Viewer — MBOX-Dateien im Browser öffnen",
      metaDescription: `Öffne und lies MBOX-Dateien online, kostenlos und privat. Alles läuft in deinem Browser — nichts wird hochgeladen. Bis zu ${max} MB. Für größere Dateien hol dir Mbox Viewer für Mac oder Windows.`,
      loading: "Nachricht wird geladen…",
      reading: "{name} wird gelesen…",
      tooLarge: `Diese Datei ist {mb} MB groß. Der Online-Viewer ist auf {max} MB begrenzt — hol dir die Desktop-App für größere Archive.`,
      empty: "In dieser Datei wurden keine E-Mails gefunden.",
      error: "Diese Datei konnte nicht als MBOX-Archiv gelesen werden.",
      noSubject: "(kein Betreff)",
      noSender: "(unbekannter Absender)",
      messages: "{n} Nachrichten",
      messagesOne: "{n} Nachricht",
      dateUnknown: "Unbekanntes Datum",
      showImages: "Bilder anzeigen",
      imagesBlocked: "Externe Bilder zu deinem Schutz blockiert",
      attachments: "Anhänge",
      from: "Von",
      to: "An",
      date: "Datum",
      allLabels: "Alle Labels",
      mobileNote:
        "Der Online-Viewer ist für Desktop und iPad gemacht. Auf dem Smartphone ist der Bildschirm zu klein zum bequemen Lesen — öffne ihn auf einem größeren Gerät oder nutze die Desktop-App.",
    },
    fr: {
      title: "Visionneuse MBOX en ligne gratuite",
      subtitle: `Ouvrez et lisez vos archives e-mail MBOX directement dans votre navigateur. Rien n'est téléversé — votre fichier ne quitte jamais votre appareil. Jusqu'à ${max} Mo.`,
      privacy: "100% privé — tout s'exécute dans votre navigateur, rien n'est téléversé.",
      dropTitle: "Déposez votre fichier .mbox ici",
      dropHint: "ou cliquez pour choisir un fichier",
      dropNote: `Traité localement · max. ${max} Mo`,
      openAnother: "Ouvrir un autre fichier",
      desktopTitle: "Fichiers plus volumineux ou plus de fonctionnalités ?",
      desktopBody:
        "Cette visionneuse web sert à consulter rapidement de petites archives. Pour des fichiers de toute taille, la recherche en texte intégral, les dossiers et l'export, téléchargez l'application de bureau native pour Mac ou Windows.",
      metaTitle: "Visionneuse MBOX en ligne gratuite — ouvrez vos fichiers MBOX dans le navigateur",
      metaDescription: `Ouvrez et lisez vos fichiers MBOX en ligne, gratuitement et en privé. Tout s'exécute dans votre navigateur — rien n'est téléversé. Jusqu'à ${max} Mo. Pour les fichiers plus volumineux, téléchargez Mbox Viewer pour Mac ou Windows.`,
      loading: "Chargement du message…",
      reading: "Lecture de {name}…",
      tooLarge: `Ce fichier fait {mb} Mo. La visionneuse en ligne est limitée à {max} Mo — téléchargez l'application de bureau pour les archives plus volumineuses.`,
      empty: "Aucun e-mail n'a été trouvé dans ce fichier.",
      error: "Ce fichier n'a pas pu être lu comme une archive MBOX.",
      noSubject: "(sans objet)",
      noSender: "(expéditeur inconnu)",
      messages: "{n} messages",
      messagesOne: "{n} message",
      dateUnknown: "Date inconnue",
      showImages: "Afficher les images",
      imagesBlocked: "Images distantes bloquées pour votre confidentialité",
      attachments: "Pièces jointes",
      from: "De",
      to: "À",
      date: "Date",
      allLabels: "Tous les libellés",
      mobileNote:
        "La visionneuse en ligne est conçue pour ordinateur et iPad. Sur téléphone, l'écran est trop petit pour une lecture confortable — ouvrez-la sur un appareil plus grand ou utilisez l'application de bureau.",
    },
    "pt-br": {
      title: "Visualizador de MBOX online grátis",
      subtitle: `Abra e leia arquivos de e-mail MBOX direto no navegador. Nada é enviado — seu arquivo nunca sai do seu dispositivo. Até ${max} MB.`,
      privacy: "100% privado — roda inteiramente no seu navegador, nada é enviado.",
      dropTitle: "Solte seu arquivo .mbox aqui",
      dropHint: "ou clique para escolher um arquivo",
      dropNote: `Processado localmente · máx. ${max} MB`,
      openAnother: "Abrir outro arquivo",
      desktopTitle: "Arquivos maiores ou mais recursos?",
      desktopBody:
        "Este visualizador web é para dar uma olhada rápida em arquivos pequenos. Para arquivos de qualquer tamanho, busca em texto completo, pastas e exportação, baixe o app nativo de desktop para Mac ou Windows.",
      metaTitle: "Visualizador de MBOX online grátis — abra arquivos MBOX no navegador",
      metaDescription: `Abra e leia arquivos MBOX online, grátis e com privacidade. Tudo roda no seu navegador — nada é enviado. Até ${max} MB. Para arquivos maiores, baixe o Mbox Viewer para Mac ou Windows.`,
      loading: "Carregando mensagem…",
      reading: "Lendo {name}…",
      tooLarge: `Este arquivo tem {mb} MB. O visualizador online é limitado a {max} MB — baixe o app de desktop para arquivos maiores.`,
      empty: "Nenhum e-mail foi encontrado neste arquivo.",
      error: "Não foi possível ler este arquivo como um arquivo MBOX.",
      noSubject: "(sem assunto)",
      noSender: "(remetente desconhecido)",
      messages: "{n} mensagens",
      messagesOne: "{n} mensagem",
      dateUnknown: "Data desconhecida",
      showImages: "Mostrar imagens",
      imagesBlocked: "Imagens remotas bloqueadas para sua privacidade",
      attachments: "Anexos",
      from: "De",
      to: "Para",
      date: "Data",
      allLabels: "Todos os marcadores",
      mobileNote:
        "O visualizador online foi feito para desktop e iPad. No celular a tela é pequena demais para ler com conforto — abra em um dispositivo maior ou use o app de desktop.",
    },
    ja: {
      title: "無料オンラインMBOXビューア",
      subtitle: `MBOXメールアーカイブをブラウザで直接開いて読めます。何もアップロードされず、ファイルがデバイスから出ることはありません。最大${max}MBまで。`,
      privacy: "100%プライベート — すべてブラウザ内で動作し、何もアップロードされません。",
      dropTitle: ".mboxファイルをここにドロップ",
      dropHint: "またはクリックしてファイルを選択",
      dropNote: `ローカルで処理 · 最大${max}MB`,
      openAnother: "別のファイルを開く",
      desktopTitle: "大きなファイルやより多くの機能が必要ですか？",
      desktopBody:
        "このウェブビューアは小さなアーカイブをすばやく確認するためのものです。あらゆるサイズのファイル、全文検索、フォルダ、エクスポートには、Mac・Windows 向けネイティブのデスクトップアプリをご利用ください。",
      metaTitle: "無料オンラインMBOXビューア — ブラウザでMBOXファイルを開く",
      metaDescription: `MBOXファイルをオンラインで無料かつプライベートに開いて読めます。すべてブラウザ内で動作し、何もアップロードされません。最大${max}MBまで。大きなファイルにはMac・Windows 版Mbox Viewerをご利用ください。`,
      loading: "メッセージを読み込み中…",
      reading: "{name} を読み込んでいます…",
      tooLarge: `このファイルは{mb}MBです。オンラインビューアは{max}MBまでです — 大きなアーカイブにはデスクトップアプリをご利用ください。`,
      empty: "このファイルにメールが見つかりませんでした。",
      error: "このファイルをMBOXアーカイブとして読み込めませんでした。",
      noSubject: "(件名なし)",
      noSender: "(送信者不明)",
      messages: "{n}件のメッセージ",
      messagesOne: "{n}件のメッセージ",
      dateUnknown: "日付不明",
      showImages: "画像を表示",
      imagesBlocked: "プライバシー保護のためリモート画像をブロックしました",
      attachments: "添付ファイル",
      from: "差出人",
      to: "宛先",
      date: "日付",
      allLabels: "すべてのラベル",
      mobileNote:
        "オンラインビューアはデスクトップとiPad向けに設計されています。スマートフォンでは画面が小さく読みづらいため、大きなデバイスで開くかデスクトップアプリをご利用ください。",
    },
    it: {
      title: "Visualizzatore MBOX online gratuito",
      subtitle: `Apri e leggi gli archivi e-mail MBOX direttamente nel browser. Niente viene caricato — il tuo file non lascia mai il tuo dispositivo. Fino a ${max} MB.`,
      privacy: "100% privato — funziona interamente nel tuo browser, niente viene caricato.",
      dropTitle: "Trascina qui il tuo file .mbox",
      dropHint: "o clicca per scegliere un file",
      dropNote: `Elaborato localmente · max ${max} MB`,
      openAnother: "Apri un altro file",
      desktopTitle: "File più grandi o più funzioni?",
      desktopBody:
        "Questo visualizzatore web serve a dare un'occhiata veloce a piccoli archivi. Per file di qualsiasi dimensione, ricerca full-text, cartelle ed esportazione, scarica l'app desktop nativa per Mac o Windows.",
      metaTitle: "Visualizzatore MBOX online gratuito — apri i file MBOX nel browser",
      metaDescription: `Apri e leggi i file MBOX online, gratis e in privato. Tutto funziona nel tuo browser — niente viene caricato. Fino a ${max} MB. Per file più grandi, scarica Mbox Viewer per Mac o Windows.`,
      loading: "Caricamento del messaggio…",
      reading: "Lettura di {name}…",
      tooLarge: `Questo file è di {mb} MB. Il visualizzatore online è limitato a {max} MB — scarica l'app desktop per archivi più grandi.`,
      empty: "Nessuna e-mail trovata in questo file.",
      error: "Impossibile leggere questo file come archivio MBOX.",
      noSubject: "(nessun oggetto)",
      noSender: "(mittente sconosciuto)",
      messages: "{n} messaggi",
      messagesOne: "{n} messaggio",
      dateUnknown: "Data sconosciuta",
      showImages: "Mostra immagini",
      imagesBlocked: "Immagini remote bloccate per la tua privacy",
      attachments: "Allegati",
      from: "Da",
      to: "A",
      date: "Data",
      allLabels: "Tutte le etichette",
      mobileNote:
        "Il visualizzatore online è pensato per desktop e iPad. Sullo smartphone lo schermo è troppo piccolo per leggere comodamente — aprilo su un dispositivo più grande o usa l'app desktop.",
    },
    nl: {
      title: "Gratis online MBOX-viewer",
      subtitle: `Open en lees MBOX-e-mailarchieven direct in je browser. Er wordt niets geüpload — je bestand verlaat nooit je apparaat. Tot ${max} MB.`,
      privacy: "100% privé — draait volledig in je browser, er wordt niets geüpload.",
      dropTitle: "Sleep je .mbox-bestand hierheen",
      dropHint: "of klik om een bestand te kiezen",
      dropNote: `Lokaal verwerkt · max. ${max} MB`,
      openAnother: "Ander bestand openen",
      desktopTitle: "Grotere bestanden of meer functies?",
      desktopBody:
        "Deze webviewer is bedoeld om snel kleine archieven te bekijken. Voor bestanden van elke grootte, zoeken op volledige tekst, mappen en exporteren download je de native desktop-app voor Mac of Windows.",
      metaTitle: "Gratis online MBOX-viewer — open MBOX-bestanden in je browser",
      metaDescription: `Open en lees MBOX-bestanden online, gratis en privé. Alles draait in je browser — er wordt niets geüpload. Tot ${max} MB. Voor grotere bestanden download je Mbox Viewer voor Mac of Windows.`,
      loading: "Bericht laden…",
      reading: "{name} wordt gelezen…",
      tooLarge: `Dit bestand is {mb} MB. De online viewer is beperkt tot {max} MB — download de desktop-app voor grotere archieven.`,
      empty: "Er zijn geen e-mails gevonden in dit bestand.",
      error: "Dit bestand kon niet als MBOX-archief worden gelezen.",
      noSubject: "(geen onderwerp)",
      noSender: "(onbekende afzender)",
      messages: "{n} berichten",
      messagesOne: "{n} bericht",
      dateUnknown: "Onbekende datum",
      showImages: "Afbeeldingen tonen",
      imagesBlocked: "Externe afbeeldingen geblokkeerd voor je privacy",
      attachments: "Bijlagen",
      from: "Van",
      to: "Aan",
      date: "Datum",
      allLabels: "Alle labels",
      mobileNote:
        "De online viewer is gemaakt voor desktop en iPad. Op een telefoon is het scherm te klein om comfortabel te lezen — open hem op een groter apparaat of gebruik de desktop-app.",
    },
    ko: {
      title: "무료 온라인 MBOX 뷰어",
      subtitle: `MBOX 이메일 아카이브를 브라우저에서 바로 열고 읽으세요. 아무것도 업로드되지 않으며 파일이 기기를 벗어나지 않습니다. 최대 ${max}MB.`,
      privacy: "100% 비공개 — 모든 작업이 브라우저에서 실행되며 아무것도 업로드되지 않습니다.",
      dropTitle: ".mbox 파일을 여기에 놓으세요",
      dropHint: "또는 클릭하여 파일 선택",
      dropNote: `로컬에서 처리 · 최대 ${max}MB`,
      openAnother: "다른 파일 열기",
      desktopTitle: "더 큰 파일이나 더 많은 기능이 필요하세요?",
      desktopBody:
        "이 웹 뷰어는 작은 아카이브를 빠르게 살펴보기 위한 것입니다. 모든 크기의 파일, 전문 검색, 폴더, 내보내기가 필요하면 Mac·Windows용 네이티브 데스크톱 앱을 받으세요.",
      metaTitle: "무료 온라인 MBOX 뷰어 — 브라우저에서 MBOX 파일 열기",
      metaDescription: `MBOX 파일을 온라인에서 무료로 비공개로 열고 읽으세요. 모든 작업이 브라우저에서 실행되며 아무것도 업로드되지 않습니다. 최대 ${max}MB. 더 큰 파일은 Mac·Windows용 Mbox Viewer를 받으세요.`,
      loading: "메시지 불러오는 중…",
      reading: "{name} 읽는 중…",
      tooLarge: `이 파일은 {mb}MB입니다. 온라인 뷰어는 {max}MB로 제한됩니다 — 더 큰 아카이브는 데스크톱 앱을 받으세요.`,
      empty: "이 파일에서 이메일을 찾을 수 없습니다.",
      error: "이 파일을 MBOX 아카이브로 읽을 수 없습니다.",
      noSubject: "(제목 없음)",
      noSender: "(보낸 사람 불명)",
      messages: "메시지 {n}개",
      messagesOne: "메시지 {n}개",
      dateUnknown: "날짜 알 수 없음",
      showImages: "이미지 표시",
      imagesBlocked: "개인정보 보호를 위해 원격 이미지를 차단했습니다",
      attachments: "첨부파일",
      from: "보낸 사람",
      to: "받는 사람",
      date: "날짜",
      allLabels: "모든 라벨",
      mobileNote:
        "온라인 뷰어는 데스크톱과 iPad에 맞게 설계되었습니다. 휴대폰에서는 화면이 너무 작아 편하게 읽기 어렵습니다 — 더 큰 기기에서 열거나 데스크톱 앱을 사용하세요.",
    },
    pl: {
      title: "Darmowa przeglądarka MBOX online",
      subtitle: `Otwieraj i czytaj archiwa e-mail MBOX bezpośrednio w przeglądarce. Nic nie jest wysyłane — Twój plik nigdy nie opuszcza urządzenia. Do ${max} MB.`,
      privacy: "100% prywatnie — wszystko działa w Twojej przeglądarce, nic nie jest wysyłane.",
      dropTitle: "Upuść tutaj plik .mbox",
      dropHint: "lub kliknij, aby wybrać plik",
      dropNote: `Przetwarzane lokalnie · maks. ${max} MB`,
      openAnother: "Otwórz inny plik",
      desktopTitle: "Większe pliki lub więcej funkcji?",
      desktopBody:
        "Ta przeglądarka internetowa służy do szybkiego podglądu małych archiwów. Aby obsłużyć pliki dowolnego rozmiaru, wyszukiwanie pełnotekstowe, foldery i eksport, pobierz natywną aplikację desktopową na Maca lub Windows.",
      metaTitle: "Darmowa przeglądarka MBOX online — otwórz pliki MBOX w przeglądarce",
      metaDescription: `Otwieraj i czytaj pliki MBOX online, za darmo i prywatnie. Wszystko działa w Twojej przeglądarce — nic nie jest wysyłane. Do ${max} MB. W przypadku większych plików pobierz Mbox Viewer na Maca lub Windows.`,
      loading: "Wczytywanie wiadomości…",
      reading: "Wczytywanie {name}…",
      tooLarge: `Ten plik ma {mb} MB. Przeglądarka online jest ograniczona do {max} MB — pobierz aplikację desktopową dla większych archiwów.`,
      empty: "W tym pliku nie znaleziono żadnych wiadomości.",
      error: "Nie udało się odczytać tego pliku jako archiwum MBOX.",
      noSubject: "(brak tematu)",
      noSender: "(nieznany nadawca)",
      messages: "Wiadomości: {n}",
      messagesOne: "Wiadomości: {n}",
      dateUnknown: "Nieznana data",
      showImages: "Pokaż obrazy",
      imagesBlocked: "Zdalne obrazy zablokowane dla Twojej prywatności",
      attachments: "Załączniki",
      from: "Od",
      to: "Do",
      date: "Data",
      allLabels: "Wszystkie etykiety",
      mobileNote:
        "Przeglądarka online jest przeznaczona na komputer i iPada. Na telefonie ekran jest zbyt mały, aby wygodnie czytać — otwórz ją na większym urządzeniu lub użyj aplikacji desktopowej.",
    },
  };
}

export function viewerCopy(locale: Locale, max: number): ViewerCopy {
  const all = build(max);
  return all[locale] ?? all[DEFAULT_LOCALE];
}
