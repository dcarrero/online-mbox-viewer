import type { LegalContent } from "./types";

const UPDATED = "Czerwiec 2026";

export const pl: LegalContent = {
  privacy: {
    title: "Polityka prywatności",
    updated: UPDATED,
    description:
      "Online Mbox Viewer odczytuje Twój plik .mbox w całości w przeglądarce. Nic nie jest przesyłane, przechowywane ani udostępniane.",
    intro:
      "Online Mbox Viewer to darmowe narzędzie działające w przeglądarce, służące do odczytywania archiwów e-mail w formacie .mbox. Niniejsza polityka wyjaśnia (bardzo niewielką) ilość danych, które przetwarza witryna. W skrócie: Twoje pliki e-mail nigdy nie opuszczają Twojego urządzenia.",
    sections: [
      {
        heading: "Twoje pliki są przetwarzane lokalnie",
        paragraphs: [
          "Gdy otwierasz plik .mbox, jest on odczytywany bezpośrednio z Twojego urządzenia za pomocą przeglądarki. Plik jest analizowany w pamięci Twojego komputera — nigdy nie jest przesyłany na żaden serwer, a my nigdy nie widzimy, nie przechowujemy ani nie przekazujemy jego zawartości.",
          "Nie ma konta, logowania ani zaplecza serwerowego, które miałoby kontakt z Twoją pocztą. Zamknięcie lub odświeżenie strony usuwa plik z pamięci.",
        ],
      },
      {
        heading: "Co zbiera sama witryna",
        paragraphs: [
          "Witryna domyślnie korzysta z Google Analytics 4 w trybie bez plików cookie (Consent Mode v2). Żadne pliki cookie do celów analitycznych nie są ustawiane, dopóki nie zaakceptujesz ich wyraźnie w banerze cookie. Adresy IP są anonimizowane.",
          "Przechowujemy niewielką preferencję w pamięci localStorage Twojej przeglądarki dla motywu kolorystycznego (jasny/ciemny) oraz dla Twojego wyboru dotyczącego plików cookie. Te dane nigdy nie opuszczają Twojej przeglądarki.",
        ],
      },
      {
        heading: "Brak śledzenia w Twojej poczcie",
        paragraphs: [
          "Gdy czytasz wiadomość, zdalne obrazy są domyślnie blokowane, aby piksele śledzące w wiadomościach marketingowych nie mogły nawiązywać połączenia. Możesz zdecydować się na wczytanie zdalnych obrazów dla poszczególnych wiadomości. Kod HTML wiadomości jest oczyszczany i renderowany wewnątrz izolowanej ramki iframe z rygorystyczną polityką bezpieczeństwa treści.",
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "Witryna jest statyczną stroną obsługiwaną przez Cloudflare Pages. Standardowe logi serwera (takie jak metadane żądań) mogą być przetwarzane przez dostawcę hostingu w celu dostarczenia witryny i ochrony jej przed nadużyciami.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Masz pytania dotyczące tej polityki? Napisz na support@mboxviewerpro.com.",
        ],
      },
    ],
  },
  terms: {
    title: "Warunki korzystania z usługi",
    updated: UPDATED,
    description: "Warunki korzystania z darmowej witryny Online Mbox Viewer.",
    intro:
      "Korzystając z Online Mbox Viewer, akceptujesz niniejsze warunki. Usługa to darmowa przeglądarka plików .mbox działająca w przeglądarce, udostępniana w stanie, w jakim jest.",
    sections: [
      {
        heading: "Korzystanie z usługi",
        paragraphs: [
          "Online Mbox Viewer można bezpłatnie używać do odczytywania archiwów e-mail w formacie .mbox w przeglądarce. Możesz otwierać wyłącznie pliki, które są Twoją własnością lub do których masz upoważniony dostęp.",
          "Przeglądarka działa tylko do odczytu: nie modyfikuje, nie wysyła ani nie usuwa Twojej poczty. Jest przeznaczona do szybkiego podglądu niewielkich archiwów (do 25 MB). W przypadku większych plików i zaawansowanych funkcji skorzystaj z aplikacji desktopowej Mbox Viewer na Maca i Windows.",
        ],
      },
      {
        heading: "Brak gwarancji",
        paragraphs: [
          'Usługa jest udostępniana "w stanie, w jakim jest", bez jakichkolwiek gwarancji. Nie gwarantujemy, że każda wiadomość w każdej odmianie formatu .mbox zostanie wyrenderowana idealnie. Zawsze przechowuj własne kopie zapasowe ważnych archiwów e-mail.',
        ],
      },
      {
        heading: "Ograniczenie odpowiedzialności",
        paragraphs: [
          "W maksymalnym zakresie dozwolonym przez prawo autor i wydawca nie ponoszą odpowiedzialności za jakiekolwiek szkody wynikające z korzystania z tej witryny lub niemożności korzystania z niej.",
        ],
      },
      {
        heading: "Otwarte oprogramowanie",
        paragraphs: [
          "Kod źródłowy witryny jest udostępniany na licencji MIT. Możesz go swobodnie czytać, forkować i ponownie wykorzystywać zgodnie z tą licencją.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: ["Masz pytania dotyczące tych warunków? Napisz na support@mboxviewerpro.com."],
      },
    ],
  },
};
