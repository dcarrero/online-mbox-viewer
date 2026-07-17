import type { HowToContent } from "./types";

export const pl: HowToContent = {
  title: "Jak otworzyć plik .mbox",
  description:
    "Krótki, prosty przewodnik po otwieraniu i odczytywaniu plików e-mail .mbox online — bez instalowania oprogramowania, bez przesyłania danych.",
  intro:
    "Plik .mbox to pojedynczy plik przechowujący całą skrzynkę pocztową: wiele wiadomości e-mail połączonych razem. Nie potrzebujesz programu pocztowego, aby go odczytać — możesz otworzyć go bezpośrednio tutaj, w swojej przeglądarce.",
  stepsHeading: "Otwórz swój plik w 3 krokach",
  steps: [
    { title: "Przeciągnij lub wybierz plik", body: "Na stronie głównej przeciągnij plik .mbox na obszar upuszczania lub kliknij go, aby wyszukać plik na swoim komputerze." },
    { title: "Przeglądaj wiadomości", body: "Każda wiadomość jest wymieniona wraz z nadawcą, tematem i datą. Jeśli archiwum pochodzi z Gmaila, możesz filtrować według etykiety." },
    { title: "Przeczytaj wiadomość", body: "Kliknij dowolną wiadomość, aby ją przeczytać. E-mail jest wyświetlany bezpiecznie, ze zdalnymi obrazami domyślnie zablokowanymi i załącznikami dostępnymi do pobrania." },
  ],
  exportHeading: "Jak uzyskać plik .mbox",
  exportIntro: "Większość programów pocztowych potrafi eksportować do formatu .mbox. Najczęstsze źródła to:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "Przejdź na takeout.google.com, wybierz Poczta i pobierz. Gmail eksportuje Twoje wiadomości jako pojedynczy plik .mbox." },
    { name: "Apple Mail", how: "Wybierz skrzynkę pocztową, następnie Skrzynka ▸ Eksportuj skrzynkę… Apple Mail zapisuje pakiet .mbox w wybranym przez Ciebie folderze." },
    { name: "Mozilla Thunderbird", how: "Zainstaluj dodatek ImportExportTools NG, kliknij folder prawym przyciskiem myszy i wybierz Eksportuj folder, aby wyeksportować plik .mbox." },
  ],
  whatHeading: "Co możesz tutaj zrobić",
  what: [
    "Czytać każdą wiadomość z pełnym formatowaniem HTML, bezpiecznie oczyszczonym.",
    "Pobierać załączniki bezpośrednio z wiadomości.",
    "Filtrować archiwa Gmaila według ich oryginalnych etykiet.",
    "Zachować pełną prywatność — Twój plik nigdy nie opuszcza Twojego urządzenia.",
  ],
  desktopHeading: "Otwieranie bardzo dużych archiwów",
  desktopBody:
    "Przeglądarka online jest zoptymalizowana dla plików do 25 MB. Pełny eksport z Google Takeout może mieć kilka gigabajtów — w takich przypadkach skorzystaj z Mbox Viewer, natywnej aplikacji desktopowej na Maca i Windows, która strumieniuje archiwa dowolnej wielkości oraz dodaje wyszukiwanie i eksport.",
};
