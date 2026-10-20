import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";

export interface HomeCopy {
  stepsTitle: string;
  steps: { title: string; body: string }[];
  desktopPoints: string[];
  linkHowTo: string;
  linkHowToDesc: string;
  linkCompare: string;
  linkCompareDesc: string;
  linkFaq: string;
  linkFaqDesc: string;
  /** Arca Mail Backup: app hermana de copia de seguridad (arcamailbackup.com). */
  arcaTitle: string;
  arcaBody: string;
  arcaPoints: string[];
}

const DATA: Partial<Record<Locale, HomeCopy>> & { en: HomeCopy } = {
  en: {
    stepsTitle: "How it works — and why it's private",
    steps: [
      { title: "Choose your file", body: "Drag a .mbox file onto the box above, or click to pick one. It is opened straight from your disk." },
      { title: "Read it in place", body: "Messages are listed instantly. Click one to read it — HTML is sanitized and remote images are blocked by default." },
      { title: "Nothing leaves your device", body: "There is no upload and no server. The whole viewer runs in your browser, so your email stays private." },
    ],
    desktopPoints: [
      "Open MBOX and EML archives of any size — no 50 MB limit.",
      "Full-text search, folders and Gmail labels.",
      "Works fully offline on your Mac and on Windows.",
    ],
    linkHowTo: "How to open a .mbox file",
    linkHowToDesc: "A short guide and the apps that export .mbox.",
    linkCompare: "Online vs desktop app",
    linkCompareDesc: "When the browser is enough — and when it isn't.",
    linkFaq: "Frequently asked questions",
    linkFaqDesc: "Is it safe? Is anything uploaded? Size limits?",
    arcaTitle: "Back up your mail as mbox, automatically",
    arcaBody: "Arca Mail Backup, from the team behind Mbox Viewer, copies your mail accounts to storage you own as plain mbox files. No server of ours in between.",
    arcaPoints: [
      "IMAP, Gmail and Outlook accounts, saved to your disk, NAS or S3 bucket.",
      "Standard mbox files you can open right here, or in any mail app.",
      "Free for one account, on your Mac and on Windows.",
    ],
  },
  es: {
    stepsTitle: "Cómo funciona — y por qué es privado",
    steps: [
      { title: "Elige tu fichero", body: "Arrastra un fichero .mbox a la zona de arriba o haz clic para elegirlo. Se abre directamente desde tu disco." },
      { title: "Léelo ahí mismo", body: "Los mensajes se listan al instante. Haz clic en uno para leerlo — el HTML se sanea y las imágenes remotas se bloquean por defecto." },
      { title: "Nada sale de tu dispositivo", body: "No hay subida ni servidor. Todo el visor funciona en tu navegador, así que tu correo sigue siendo privado." },
    ],
    desktopPoints: [
      "Abre archivos MBOX y EML de cualquier tamaño — sin límite de 50 MB.",
      "Búsqueda de texto completo, carpetas y etiquetas de Gmail.",
      "Funciona totalmente sin conexión en Mac y en Windows.",
    ],
    linkHowTo: "Cómo abrir un fichero .mbox",
    linkHowToDesc: "Una guía breve y las apps que exportan .mbox.",
    linkCompare: "Online vs app de escritorio",
    linkCompareDesc: "Cuándo basta el navegador — y cuándo no.",
    linkFaq: "Preguntas frecuentes",
    linkFaqDesc: "¿Es seguro? ¿Se sube algo? ¿Límite de tamaño?",
    arcaTitle: "Haz copia de tu correo en mbox, sin pensar en ello",
    arcaBody: "Arca Mail Backup, del mismo equipo que Mbox Viewer, copia tus cuentas de correo a un almacenamiento tuyo como ficheros mbox estándar. Sin servidores nuestros por medio.",
    arcaPoints: [
      "Cuentas IMAP, Gmail y Outlook, guardadas en tu disco, NAS o bucket S3.",
      "Ficheros mbox estándar que puedes abrir aquí mismo o en cualquier app de correo.",
      "Gratis para una cuenta, en Mac y en Windows.",
    ],
  },
  de: {
    stepsTitle: "So funktioniert's — und warum es privat ist",
    steps: [
      { title: "Datei auswählen", body: "Zieh eine .mbox-Datei auf das Feld oben oder klicke, um eine auszuwählen. Sie wird direkt von deiner Festplatte geöffnet." },
      { title: "Direkt lesen", body: "Nachrichten werden sofort aufgelistet. Klicke eine an, um sie zu lesen — HTML wird bereinigt und externe Bilder werden standardmäßig blockiert." },
      { title: "Nichts verlässt dein Gerät", body: "Kein Upload, kein Server. Der gesamte Viewer läuft in deinem Browser, deine E-Mails bleiben privat." },
    ],
    desktopPoints: [
      "Öffne MBOX- und EML-Archive jeder Größe — kein 25-MB-Limit.",
      "Volltextsuche, Ordner und Gmail-Labels.",
      "Läuft komplett offline auf dem Mac und unter Windows.",
    ],
    linkHowTo: "Eine .mbox-Datei öffnen",
    linkHowToDesc: "Eine kurze Anleitung und die Apps, die .mbox exportieren.",
    linkCompare: "Online vs. Desktop-App",
    linkCompareDesc: "Wann der Browser reicht — und wann nicht.",
    linkFaq: "Häufige Fragen",
    linkFaqDesc: "Ist es sicher? Wird etwas hochgeladen? Größenlimit?",
    arcaTitle: "Sichern Sie Ihre E-Mails automatisch als mbox",
    arcaBody: "Arca Mail Backup vom Team hinter Mbox Viewer kopiert Ihre E-Mail-Konten als normale mbox-Dateien auf Speicher, der Ihnen gehört. Kein Server von uns dazwischen.",
    arcaPoints: [
      "IMAP-, Gmail- und Outlook-Konten, gespeichert auf Ihrer Festplatte, Ihrem NAS oder S3-Bucket.",
      "Standard-mbox-Dateien, die Sie direkt hier oder in jedem Mailprogramm öffnen können.",
      "Kostenlos für ein Konto, auf dem Mac und unter Windows.",
    ],
  },
  fr: {
    stepsTitle: "Comment ça marche — et pourquoi c'est privé",
    steps: [
      { title: "Choisissez votre fichier", body: "Glissez un fichier .mbox sur la zone ci-dessus, ou cliquez pour en choisir un. Il est ouvert directement depuis votre disque." },
      { title: "Lisez sur place", body: "Les messages sont listés instantanément. Cliquez sur l'un d'eux pour le lire — le HTML est nettoyé et les images distantes sont bloquées par défaut." },
      { title: "Rien ne quitte votre appareil", body: "Aucun téléversement, aucun serveur. Toute la visionneuse s'exécute dans votre navigateur, vos e-mails restent privés." },
    ],
    desktopPoints: [
      "Ouvrez des archives MBOX et EML de toute taille — sans limite de 50 Mo.",
      "Recherche en texte intégral, dossiers et libellés Gmail.",
      "Fonctionne entièrement hors ligne sur Mac et sur Windows.",
    ],
    linkHowTo: "Ouvrir un fichier .mbox",
    linkHowToDesc: "Un guide court et les apps qui exportent du .mbox.",
    linkCompare: "En ligne vs application de bureau",
    linkCompareDesc: "Quand le navigateur suffit — et quand non.",
    linkFaq: "Questions fréquentes",
    linkFaqDesc: "Est-ce sûr ? Quelque chose est-il téléversé ? Limite de taille ?",
    arcaTitle: "Sauvegardez vos e-mails en mbox, automatiquement",
    arcaBody: "Arca Mail Backup, de l’équipe de Mbox Viewer, copie vos comptes de messagerie sur un stockage qui vous appartient, sous forme de fichiers mbox standard. Aucun serveur à nous entre les deux.",
    arcaPoints: [
      "Comptes IMAP, Gmail et Outlook, enregistrés sur votre disque, votre NAS ou un bucket S3.",
      "Des fichiers mbox standard à ouvrir ici même ou dans n’importe quelle messagerie.",
      "Gratuit pour un compte, sur Mac et sur Windows.",
    ],
  },
  "pt-br": {
    stepsTitle: "Como funciona — e por que é privado",
    steps: [
      { title: "Escolha seu arquivo", body: "Arraste um arquivo .mbox para a área acima, ou clique para escolher um. Ele é aberto direto do seu disco." },
      { title: "Leia no lugar", body: "As mensagens são listadas na hora. Clique em uma para ler — o HTML é higienizado e as imagens remotas são bloqueadas por padrão." },
      { title: "Nada sai do seu dispositivo", body: "Não há envio nem servidor. Todo o visualizador roda no seu navegador, então seu e-mail continua privado." },
    ],
    desktopPoints: [
      "Abra arquivos MBOX e EML de qualquer tamanho — sem limite de 50 MB.",
      "Busca em texto completo, pastas e marcadores do Gmail.",
      "Funciona totalmente offline no Mac e no Windows.",
    ],
    linkHowTo: "Como abrir um arquivo .mbox",
    linkHowToDesc: "Um guia rápido e os apps que exportam .mbox.",
    linkCompare: "Online vs app de desktop",
    linkCompareDesc: "Quando o navegador basta — e quando não.",
    linkFaq: "Perguntas frequentes",
    linkFaqDesc: "É seguro? Algo é enviado? Limite de tamanho?",
    arcaTitle: "Faça backup do seu e-mail em mbox, automaticamente",
    arcaBody: "O Arca Mail Backup, da mesma equipe do Mbox Viewer, copia suas contas de e-mail para um armazenamento seu, como arquivos mbox padrão. Nenhum servidor nosso no meio.",
    arcaPoints: [
      "Contas IMAP, Gmail e Outlook, salvas no seu disco, NAS ou bucket S3.",
      "Arquivos mbox padrão que você abre aqui mesmo ou em qualquer app de e-mail.",
      "Grátis para uma conta, no Mac e no Windows.",
    ],
  },
  ja: {
    stepsTitle: "使い方 — そしてなぜプライベートなのか",
    steps: [
      { title: "ファイルを選ぶ", body: "上のボックスに .mbox ファイルをドラッグするか、クリックして選びます。ディスクから直接開かれます。" },
      { title: "その場で読む", body: "メッセージは即座に一覧表示されます。クリックして読むと、HTML はサニタイズされ、リモート画像は既定でブロックされます。" },
      { title: "デバイスから何も出ません", body: "アップロードもサーバーもありません。ビューア全体がブラウザ内で動作するため、メールはプライベートに保たれます。" },
    ],
    desktopPoints: [
      "あらゆるサイズの MBOX・EML アーカイブを開けます — 50MB の制限なし。",
      "全文検索、フォルダ、Gmail ラベルに対応。",
      "Mac と Windows で完全オフライン動作。",
    ],
    linkHowTo: ".mbox ファイルの開き方",
    linkHowToDesc: "簡単なガイドと .mbox をエクスポートできるアプリ。",
    linkCompare: "オンライン版 vs デスクトップアプリ",
    linkCompareDesc: "ブラウザで十分なとき — そうでないとき。",
    linkFaq: "よくある質問",
    linkFaqDesc: "安全？ 何かアップロードされる？ サイズ制限は？",
    arcaTitle: "メールを mbox で自動バックアップ",
    arcaBody: "Mbox Viewer と同じチームが作る Arca Mail Backup は、メールアカウントを標準的な mbox ファイルとして、あなた自身のストレージにコピーします。間に当社のサーバーは入りません。",
    arcaPoints: [
      "IMAP・Gmail・Outlook アカウントを、ディスク・NAS・S3 バケットに保存。",
      "標準の mbox ファイルなので、ここでも、どのメールアプリでも開けます。",
      "1 アカウントまで無料。Mac と Windows に対応。",
    ],
  },
  it: {
    stepsTitle: "Come funziona — e perché è privato",
    steps: [
      { title: "Scegli il tuo file", body: "Trascina un file .mbox sull'area qui sopra, o clicca per sceglierne uno. Viene aperto direttamente dal tuo disco." },
      { title: "Leggilo sul posto", body: "I messaggi vengono elencati all'istante. Clicca su uno per leggerlo — l'HTML viene ripulito e le immagini remote sono bloccate per impostazione predefinita." },
      { title: "Niente lascia il tuo dispositivo", body: "Nessun caricamento, nessun server. L'intero visualizzatore funziona nel tuo browser, quindi le tue e-mail restano private." },
    ],
    desktopPoints: [
      "Apri archivi MBOX ed EML di qualsiasi dimensione — nessun limite di 50 MB.",
      "Ricerca full-text, cartelle ed etichette di Gmail.",
      "Funziona completamente offline su Mac e su Windows.",
    ],
    linkHowTo: "Come aprire un file .mbox",
    linkHowToDesc: "Una breve guida e le app che esportano .mbox.",
    linkCompare: "Online vs app desktop",
    linkCompareDesc: "Quando il browser basta — e quando no.",
    linkFaq: "Domande frequenti",
    linkFaqDesc: "È sicuro? Viene caricato qualcosa? Limite di dimensione?",
    arcaTitle: "Fai il backup della tua posta in mbox, in automatico",
    arcaBody: "Arca Mail Backup, dello stesso team di Mbox Viewer, copia i tuoi account di posta su uno spazio di archiviazione tuo, come file mbox standard. Nessun nostro server in mezzo.",
    arcaPoints: [
      "Account IMAP, Gmail e Outlook, salvati sul tuo disco, NAS o bucket S3.",
      "File mbox standard da aprire proprio qui o in qualsiasi app di posta.",
      "Gratis per un account, su Mac e su Windows.",
    ],
  },
  nl: {
    stepsTitle: "Hoe het werkt — en waarom het privé is",
    steps: [
      { title: "Kies je bestand", body: "Sleep een .mbox-bestand naar het vak hierboven, of klik om er een te kiezen. Het wordt rechtstreeks van je schijf geopend." },
      { title: "Lees het ter plekke", body: "Berichten worden direct weergegeven. Klik op een bericht om het te lezen — HTML wordt opgeschoond en externe afbeeldingen worden standaard geblokkeerd." },
      { title: "Niets verlaat je apparaat", body: "Geen upload, geen server. De hele viewer draait in je browser, dus je e-mail blijft privé." },
    ],
    desktopPoints: [
      "Open MBOX- en EML-archieven van elke grootte — geen limiet van 50 MB.",
      "Volledige tekstzoek, mappen en Gmail-labels.",
      "Werkt volledig offline op je Mac en op Windows.",
    ],
    linkHowTo: "Een .mbox-bestand openen",
    linkHowToDesc: "Een korte handleiding en de apps die .mbox exporteren.",
    linkCompare: "Online vs desktop-app",
    linkCompareDesc: "Wanneer de browser volstaat — en wanneer niet.",
    linkFaq: "Veelgestelde vragen",
    linkFaqDesc: "Is het veilig? Wordt er iets geüpload? Groottelimiet?",
    arcaTitle: "Maak automatisch een back-up van je mail als mbox",
    arcaBody: "Arca Mail Backup, van het team achter Mbox Viewer, kopieert je mailaccounts als gewone mbox-bestanden naar opslag die van jou is. Geen server van ons ertussen.",
    arcaPoints: [
      "IMAP-, Gmail- en Outlook-accounts, opgeslagen op je schijf, NAS of S3-bucket.",
      "Standaard mbox-bestanden die je hier of in elke mailapp opent.",
      "Gratis voor één account, op Mac en Windows.",
    ],
  },
  ko: {
    stepsTitle: "작동 방식 — 그리고 왜 비공개인지",
    steps: [
      { title: "파일 선택", body: "위 영역에 .mbox 파일을 끌어다 놓거나 클릭하여 선택하세요. 디스크에서 바로 열립니다." },
      { title: "그 자리에서 읽기", body: "메시지가 즉시 나열됩니다. 클릭하면 읽을 수 있고, HTML은 정제되며 원격 이미지는 기본적으로 차단됩니다." },
      { title: "기기를 벗어나지 않습니다", body: "업로드도 서버도 없습니다. 뷰어 전체가 브라우저에서 실행되므로 이메일은 비공개로 유지됩니다." },
    ],
    desktopPoints: [
      "어떤 크기의 MBOX 및 EML 아카이브도 열기 — 50MB 제한 없음.",
      "전문 검색, 폴더, Gmail 라벨.",
      "Mac과 Windows에서 완전 오프라인으로 작동합니다.",
    ],
    linkHowTo: ".mbox 파일 여는 법",
    linkHowToDesc: "간단한 가이드와 .mbox를 내보내는 앱들.",
    linkCompare: "온라인 vs 데스크톱 앱",
    linkCompareDesc: "브라우저로 충분할 때 — 그렇지 않을 때.",
    linkFaq: "자주 묻는 질문",
    linkFaqDesc: "안전한가요? 업로드되나요? 크기 제한은?",
    arcaTitle: "메일을 mbox로 자동 백업하세요",
    arcaBody: "Mbox Viewer 팀이 만든 Arca Mail Backup은 메일 계정을 표준 mbox 파일로 내 저장소에 복사합니다. 중간에 저희 서버를 거치지 않습니다.",
    arcaPoints: [
      "IMAP, Gmail, Outlook 계정을 디스크, NAS 또는 S3 버킷에 저장합니다.",
      "표준 mbox 파일이라 여기서 바로, 또는 어떤 메일 앱에서도 열 수 있습니다.",
      "계정 1개는 무료이며 Mac과 Windows에서 사용할 수 있습니다.",
    ],
  },
  pl: {
    stepsTitle: "Jak to działa — i dlaczego jest prywatne",
    steps: [
      { title: "Wybierz plik", body: "Przeciągnij plik .mbox na pole powyżej lub kliknij, aby go wybrać. Jest otwierany bezpośrednio z dysku." },
      { title: "Czytaj na miejscu", body: "Wiadomości są wyświetlane natychmiast. Kliknij jedną, aby ją przeczytać — HTML jest oczyszczany, a zdalne obrazy domyślnie blokowane." },
      { title: "Nic nie opuszcza urządzenia", body: "Brak wysyłania i serwera. Cała przeglądarka działa w Twojej przeglądarce, więc e-maile pozostają prywatne." },
    ],
    desktopPoints: [
      "Otwieraj archiwa MBOX i EML dowolnej wielkości — bez limitu 50 MB.",
      "Wyszukiwanie pełnotekstowe, foldery i etykiety Gmaila.",
      "Działa całkowicie offline na Macu i w systemie Windows.",
    ],
    linkHowTo: "Jak otworzyć plik .mbox",
    linkHowToDesc: "Krótki poradnik i aplikacje eksportujące .mbox.",
    linkCompare: "Online vs aplikacja desktopowa",
    linkCompareDesc: "Kiedy przeglądarka wystarczy — a kiedy nie.",
    linkFaq: "Najczęstsze pytania",
    linkFaqDesc: "Czy to bezpieczne? Czy coś jest wysyłane? Limit rozmiaru?",
    arcaTitle: "Automatyczna kopia poczty w formacie mbox",
    arcaBody: "Arca Mail Backup, od zespołu Mbox Viewer, kopiuje Twoje konta pocztowe jako standardowe pliki mbox do magazynu, który należy do Ciebie. Bez naszych serwerów po drodze.",
    arcaPoints: [
      "Konta IMAP, Gmail i Outlook zapisywane na dysku, NAS lub w zasobniku S3.",
      "Standardowe pliki mbox, które otworzysz tutaj lub w dowolnym programie pocztowym.",
      "Bezpłatnie dla jednego konta, na Macu i w Windows.",
    ],
  },
};

export function homeCopy(locale: Locale): HomeCopy {
  return DATA[locale] ?? DATA[DEFAULT_LOCALE];
}
