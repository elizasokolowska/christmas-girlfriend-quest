# 🎄 GIRLFRIEND KNOWLEDGE TEST — CHRISTMAS EDITION

Gotowy quiz w języku polskim: 8 pytań, po 3 odpowiedzi, 1 poprawna. Styl świąteczno-gejmerski, pasek postępu, punkty XP, ekran wyników i przycisk odbioru prezentu.

## Pliki
- `index.html` — treść strony i ekrany quizu
- `style.css` — świąteczny wygląd, animacja śniegu i wersja mobilna
- `script.js` — 8 pytań, klucz odpowiedzi, punktacja i zakończenia
- `generuj_qr.py` — tworzenie kodu QR w PNG po publikacji

## Jak uruchomić próbnie na komputerze?
Otwórz `index.html` dwuklikiem w przeglądarce. Quiz działa bez serwera. Do wyświetlenia czcionek z Google Fonts może być potrzebny internet; bez niego strona nadal działa na czcionkach systemowych.

**Ważne:** testowanie niczego nie zapisuje w telefonie ani w repozytorium. Strona nie używa kont, serwera ani localStorage. Każde nowe otwarcie/odświeżenie rozpoczyna nową grę, więc Twój narzeczony zobaczy czysty quiz nawet wtedy, gdy Ty przejdziesz go wcześniej.

## Publikacja na GitHub Pages — krok po kroku
1. Zaloguj się do [github.com](https://github.com) i kliknij **New repository** (lub `+` → **New repository**).
2. Nazwij je np. `christmas-quiz` i ustaw **Public** (na darmowym koncie jest to najprostsza opcja dla GitHub Pages). Kliknij **Create repository**.
3. Na stronie nowego repozytorium wybierz **Add file → Upload files**. Prześlij **trzy pliki: `index.html`, `style.css`, `script.js`**. Możesz również dołączyć README oraz generator QR, ale do działania strony nie są potrzebne. Zapisz zmiany przyciskiem **Commit changes**.
4. Wejdź w zakładkę **Settings → Pages** (w menu po lewej).
5. W sekcji **Build and deployment** ustaw **Source: Deploy from a branch**, **Branch: main**, folder **/(root)** i kliknij **Save**.
6. Po udostępnieniu strony adres zwykle ma postać:
   `https://TWOJ-LOGIN.github.io/christmas-quiz/`
   **Nie kopiuj przykładowego adresu dosłownie.** W `Settings → Pages` pojawi się komunikat **Your site is live at ...** z Twoim prawdziwym adresem i przyciskiem **Visit site**. Czasem trzeba odświeżyć ustawienia po publikacji.
7. Otwórz adres w trybie prywatnym lub na telefonie, przejdź quiz testowo i sprawdź działanie przycisku nagrody.

**Uwaga o prywatności:** strona w publicznym repozytorium i plik `script.js` są dostępne dla każdej osoby mającej link. Poprawne odpowiedzi znajdują się w kodzie. To niespodzianka, a nie quiz odporny na podgląd kodu.

## Jak wygenerować kod QR do opublikowanej strony?
**Najprościej bez instalowania czegokolwiek:** otwórz rzeczywisty adres quizu w przeglądarce Chrome, wybierz menu udostępniania / „Utwórz kod QR” (nazwa może różnić się zależnie od wersji), zapisz obraz QR i wydrukuj. Przed drukiem przetestuj skanowanie aparatem telefonu.

**Lub skorzystaj z załączonego generatora `generuj_qr.py`:**
1. Zainstaluj Python (jeśli jeszcze nie masz).
2. Otwórz terminal w folderze z plikami.
3. Wpisz: `pip install "qrcode[pil]"`
4. Wpisz: `python generuj_qr.py https://TWOJ-LOGIN.github.io/christmas-quiz/`
5. W tym samym folderze pojawi się plik `KOD_QR_QUIZ.png` gotowy do wydrukowania.

**Nie można stworzyć właściwego kodu QR z wyprzedzeniem bez końcowego adresu strony.** Po opublikowaniu generujesz QR do rzeczywistego URL. Nie należy kodować lokalnej ścieżki `index.html` z własnego komputera.

## Punktacja
- **0–3 / 8** — NOOB FIANCÉ; nagroda odblokowuje się jako świąteczny wyjątek.
- **4–6 / 8** — PRO FIANCÉ; nagroda odblokowuje się jako bonus.
- **7–8 / 8** — LEGENDARY FIANCÉ; nagroda oficjalnie zasłużona.

Przycisk **🎁 ODBIERZ NAGRODĘ** działa dla **każdego wyniku** i wyświetla: „Odbierz swój świąteczny prezent u swojej narzeczonej! ❤️”. Poprawne odpowiedzi są pokazane **dopiero po ukończeniu quizu**, po kliknięciu osobnego przycisku.

## Klucz odpowiedzi (tylko dla organizatorki)
1. A — Wstawanie rano z łóżka
2. B — Niebieski
3. B — 14 czerwca
4. C — 3
5. B — Różowy
6. B — Friends
7. B — Pizza na cienkim cieście
8. C — Magdalena

## Edycja
Pytania i odpowiedzi są w `script.js`, w tablicy `QUESTIONS`. `correct: 0` oznacza A, `correct: 1` — B, `correct: 2` — C. Aby zmienić treść tekstów na stronie, edytuj `index.html` (początek quizu) i `script.js` (komunikaty wyników). Po zapisaniu zmian wyślij aktualne pliki do tego samego repozytorium. Kod QR pozostanie ten sam, jeśli **adres strony się nie zmieni**.
