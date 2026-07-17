import type { CompareContent } from "./types";

export const pl: CompareContent = {
  title: "Przeglądarka online a aplikacja desktopowa",
  description:
    "Porównaj darmową przeglądarkę plików MBOX online z aplikacją desktopową Mbox Viewer for Mac i Windows — rozmiar plików, wyszukiwanie, prywatność i praca offline.",
  intro:
    "Obie odczytują Twoją pocztę lokalnie i prywatnie. Przeglądarka działająca w przeglądarce to najszybszy sposób na podejrzenie niewielkiego archiwum; aplikacja desktopowa jest stworzona do dużych plików i zaawansowanych funkcji.",
  onlineLabel: "Przeglądarka online",
  desktopLabel: "Aplikacja desktopowa (Mac i Windows)",
  rows: [
    { feature: "Cena", online: "Darmowa", desktop: "Darmowy okres próbny · jednorazowy zakup" },
    { feature: "Instalacja", online: "Brak — działa w przeglądarce", desktop: "Mac App Store · Microsoft Store" },
    { feature: "Maksymalny rozmiar pliku", online: "Do 25 MB", desktop: "Dowolny rozmiar (strumieniuje ogromne pliki)" },
    { feature: "Prywatność", online: "100% lokalnie, nic nie jest przesyłane", desktop: "100% lokalnie, w pełni offline" },
    { feature: "Wyszukiwanie pełnotekstowe", online: "—", desktop: "Tak" },
    { feature: "Foldery i etykiety Gmaila", online: "Filtrowanie według etykiety", desktop: "Pełne drzewo folderów i etykiety" },
    { feature: "Załączniki", online: "Pobieranie", desktop: "Pobieranie i podgląd" },
    { feature: "Eksport / konwersja", online: "—", desktop: "Eksport do EML, PDF i innych" },
    { feature: "Platformy", online: "Dowolna nowoczesna przeglądarka", desktop: "macOS · Windows" },
  ],
  closing:
    "Praktyczna zasada: jeśli Twój plik ma mniej niż 25 MB i chcesz go tylko przeczytać, przeglądarka online to wszystko, czego potrzebujesz. W przypadku pełnego eksportu z Google Takeout, archiwizacji lub wyszukiwania wybierz aplikację desktopową.",
};
