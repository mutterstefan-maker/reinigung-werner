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
5. Die veröffentlichte Website unter der GitHub-Pages-Adresse prüfen.

## Dateien ändern

| Datei | Inhalt |
| --- | --- |
| `dist/index.html` | Seitentexte und Struktur |
| `dist/styles.css` | Gestaltung und responsive Ansichten |
| `dist/app.js` | Menü, Planer und ergänzende Hinweise |
| `dist/assets/` | Lokale Bilder, Schrift und Favicon |
| `.github/workflows/pages.yml` | Automatische Veröffentlichung auf GitHub Pages |
| `.openai/hosting.json` | Konfiguration der früheren privaten Sites-Vorschau |
| `scripts/serve.mjs` | Lokaler Vorschau-Server |

## Git und Hosting

Der Quellcode liegt auf [GitHub unter mutterstefan-maker/reinigung-werner](https://github.com/mutterstefan-maker/reinigung-werner). Der Remote `github` verweist auf dieses Repository und ist das Push-Ziel für `main`. Der Remote `origin` verweist noch auf das Quellrepository der früheren privaten Sites-Vorschau.

Die Website wird mit **GitHub Pages** ausgeliefert. Nach erfolgreicher Veröffentlichung ist sie unter [mutterstefan-maker.github.io/reinigung-werner/](https://mutterstefan-maker.github.io/reinigung-werner/) erreichbar.

Jeder Push auf `main` startet den Workflow `.github/workflows/pages.yml`. Er prüft das JavaScript und veröffentlicht den Ordner `dist/`. Die relativen Bild-, Schrift-, CSS- und JavaScript-Pfade funktionieren auch unter dem Projektpfad `/reinigung-werner/`.

```powershell
git add .
git commit -m "Update website"
git push github main
```

In den Repository-Einstellungen muss unter **Pages → Build and deployment → Source** die Option **GitHub Actions** aktiviert sein. Workflow-Ausführungen sind im Tab **Actions** sichtbar. Zugangstoken gehören weder in Dateien noch in Remote-URLs.

## Medien

Die Fotos illustrieren das Thema; sie zeigen keine tatsächlichen Mitarbeitenden oder Referenzobjekte.

- `raeume.jpg`: [Büroflur auf Unsplash](https://unsplash.com/photos/yWwob8kwOCk), [Bilddatei](https://images.unsplash.com/photo-1497366754035-f200968a6e72).
- `fensterreinigung.jpg`: Matilda Wormwood, [Pexels](https://www.pexels.com/photo/a-person-cleaning-a-glass-window-4440540/).
- DM Sans: [Google Fonts](https://github.com/google/fonts/tree/main/ofl/dmsans), Lizenz in `dist/assets/DM-Sans-OFL.txt`.

Die Bildquellen und die Schriftlizenz bleiben für die weitere Bearbeitung dokumentiert.
