import type { FaqContent } from "./types";

export const pl: FaqContent = {
  title: "Najczęściej zadawane pytania",
  description:
    "Odpowiedzi na pytania o odczytywanie plików .mbox online: prywatność, limity rozmiaru plików, obsługiwane programy pocztowe i jak to działa.",
  intro: "Wszystko, co warto wiedzieć, zanim otworzysz swój plik .mbox w przeglądarce.",
  items: [
    {
      q: "Czy korzystanie z przeglądarki plików MBOX online jest bezpieczne?",
      a: "Tak. Twój plik jest odczytywany w całości w Twojej przeglądarce — nigdy nie jest przesyłany na serwer. Kod HTML wiadomości jest oczyszczany za pomocą DOMPurify i renderowany w izolowanej ramce iframe, a zdalne obrazy są domyślnie blokowane, aby zatrzymać piksele śledzące.",
    },
    {
      q: "Czy moja poczta jest gdziekolwiek przesyłana?",
      a: "Nie. Nie ma przesyłania ani zaplecza serwerowego. Cała przeglądarka działa jako JavaScript w Twojej przeglądarce, więc zawartość Twojego pliku .mbox nigdy nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku?",
      a: "Przeglądarka online obsługuje pliki do 25 MB, dzięki czemu pozostaje szybka w przeglądarce. W przypadku większych archiwów — na przykład pełnych eksportów z Google Takeout — skorzystaj z aplikacji desktopowej Mbox Viewer for Mac i Windows, która strumieniuje pliki dowolnej wielkości.",
    },
    {
      q: "Które programy pocztowe eksportują pliki .mbox?",
      a: "Apple Mail (Skrzynka ▸ Eksportuj skrzynkę), Mozilla Thunderbird (z dodatkiem ImportExportTools NG) oraz Google Takeout (który eksportuje Twoją pocztę Gmail jako pojedynczy plik .mbox) — wszystkie tworzą pliki .mbox. Wiele innych programów również potrafi importować lub eksportować ten format.",
    },
    {
      q: "Czy może też otwierać pliki .eml?",
      a: "Tak. Pojedyncza wiadomość .eml jest otwierana jako archiwum z jedną wiadomością. Przeglądarka odczytuje również etykiety Gmaila przechowywane w nagłówku X-Gmail-Labels i umożliwia filtrowanie listy wiadomości według etykiety.",
    },
    {
      q: "Czy działa offline?",
      a: "Po wczytaniu strony analiza odbywa się lokalnie, więc odczytywanie pliku nie wymaga połączenia. Pierwsze wczytanie strony wymaga połączenia z internetem, aby pobrać witrynę.",
    },
    {
      q: "Dlaczego niektóre obrazy nie są wyświetlane?",
      a: "Zdalne obrazy są domyślnie blokowane dla Twojej prywatności, ponieważ wiadomości marketingowe często wykorzystują je jako piksele śledzące. Pasek u góry wiadomości umożliwia wczytanie obrazów dla tej wiadomości, jeśli ufasz nadawcy.",
    },
    {
      q: "Czy to naprawdę darmowe?",
      a: "Tak, przeglądarka online jest całkowicie darmowa i ma otwarty kod źródłowy (na licencji MIT). Opcjonalna aplikacja desktopowa na Maca i Windows to osobny produkt dla zaawansowanych użytkowników, którzy potrzebują otwierać bardzo duże archiwa.",
    },
  ],
};
