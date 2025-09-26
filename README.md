# Russisch Vokabel-App Deluxe

Ein schlanker, offline-fähiger, reines-HTML/CSS/JS-Vokabeltrainer für Russisch mit:
- Multiple Choice, Eintippen, Audio (TTS)
- Alphabet-Modus
- Spaced Repetition (Leitner-ähnlich)
- Statistiken, Achievements, Mini-Konfetti
- Dark Mode, Lesefreundliche Schrift
- Import/Export als JSON
- PWA: Installation + Offline

## Lokale Nutzung
1. Entpacken.
2. Mit einem simplen HTTP-Server starten (z. B. `python3 -m http.server`) und `http://localhost:8000` öffnen.
   Direktes Öffnen der `index.html` kann wegen CORS-Restriktionen beim `fetch` der JSON-Dateien scheitern.

## Eigene Vokabeln
- `data/vocab.ru.json` ersetzen. Format: Array von Objekten `{ id, ru, de, cat }`.
- Import/Export in den Einstellungen.

## Lizenz
MIT
