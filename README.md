# Reinigung Werner

Responsive Website für eine Reinigungsfirma. Vorläufiger Projektname: **Reinigung Werner**.

## Lokal starten

Node.js ab Version 20 genügt. Es müssen keine Pakete installiert werden.

```powershell
npm run dev
```

Die Website ist anschließend unter `http://127.0.0.1:4173` erreichbar. Mit `Ctrl+C` beenden. Die Dateien in `dist/` können auch direkt auf einem beliebigen statischen Webserver bereitgestellt werden.

```powershell
npm run check
```

## Inhalt und Verhalten

- Vier geplante Leistungsbereiche: Büro-, Glas-, Treppenhaus- und Grundreinigung.
- Mobiles Menü, FAQ und modale Hinweise.
- Reinigungsplaner mit Zusammenfassung, Bearbeitung und Download als UTF-8-Textdatei.
- Der Planer verschickt keine Anfragen. Angaben bleiben im Arbeitsspeicher des Browsers; es gibt keine dauerhafte Speicherung, Analyse oder externe Formularanbindung.
- Fotos und DM Sans werden lokal ausgeliefert. Kein Framework, keine Abhängigkeiten, kein Build erforderlich.
- Tastaturbedienung, native Dialoge, sichtbare Fokusmarkierungen, Sprunglink und reduzierte Animationen entsprechend der Systemeinstellung.

## Vor dem offiziellen Firmenstart ergänzen

Der Betreiber hat noch keine endgültigen Firmendaten. Deshalb ist die Website als Entwurf gekennzeichnet und enthält keine erfundenen Telefonnummern, Adressen, Zertifikate, Referenzen oder Bewertungen.

1. Firmenname, tatsächliches Leistungsangebot und Einsatzgebiet bestätigen.
2. Echte Kontaktdaten, vollständiges Impressum und passende Datenschutzerklärung ergänzen.
3. Falls gewünscht: einen echten Anfrageversand einrichten. Erst danach die entsprechenden Texte und Schaltflächen anpassen.
4. Die `noindex, nofollow`-Einstellung in `dist/index.html` erst zum offiziellen Start entfernen.
5. Private Vorschau prüfen und bei Bedarf ausdrücklich für die Öffentlichkeit freigeben.

## Dateien ändern

| Datei | Inhalt |
| --- | --- |
| `dist/index.html` | Seitentexte und Struktur |
| `dist/styles.css` | Gestaltung und responsive Ansichten |
| `dist/app.js` | Menü, Planer und ergänzende Hinweise |
| `dist/assets/` | Lokale Bilder, Schrift und Favicon |
| `.openai/hosting.json` | Site-ID und statisches Ausgabeverzeichnis |
| `scripts/serve.mjs` | Lokaler Vorschau-Server |

## Git und Hosting

Der Quellstand wird mit Git versioniert und mit dem zugehörigen Sites-Quellrepository synchronisiert. `origin` verweist auf dieses Repository. Der Hauptzweig heißt `main`. Das Sites-Quellrepository ist ein Git-Repository, kein GitHub-Repository.

Sites veröffentlicht den gespeicherten Stand zunächst privat. Für spätere Pushes benötigt das verwaltete Quellrepository gegebenenfalls eine frische, kurzlebige Sites-Zugangsberechtigung. Zugangstoken gehören weder in Dateien noch in Remote-URLs. Ein eigener GitHub-Remote kann später zusätzlich eingerichtet werden.

## Medien

Die Fotos illustrieren das Thema; sie zeigen keine tatsächlichen Mitarbeitenden oder Referenzobjekte.

- `raeume.jpg`: [Büroflur auf Unsplash](https://unsplash.com/photos/yWwob8kwOCk), [Bilddatei](https://images.unsplash.com/photo-1497366754035-f200968a6e72).
- `fensterreinigung.jpg`: Matilda Wormwood, [Pexels](https://www.pexels.com/photo/a-person-cleaning-a-glass-window-4440540/).
- DM Sans: [Google Fonts](https://github.com/google/fonts/tree/main/ofl/dmsans), Lizenz in `dist/assets/DM-Sans-OFL.txt`.

Die Bildquellen und die Schriftlizenz bleiben für die weitere Bearbeitung dokumentiert.
