# ROLLVERSE 0.3 — BLOCKWORLD

Mobile Idle-Dice-Spiel: https://seriax.github.io/Rollverse/?v=0.3.0

## Version 0.3

- Helle blockige Spielwelt mit Bäumen, Wolken, Häusern, kräftigen Konturen und Spielzeug-Buttons.
- Premiumwährung Gems und ein auffälliger Shop mit drei Gem-Paketen und elf Produkten.
- Dauerhafte Gamepasses: VIP (×2 alle Einnahmen), Power Hands (+75 % manuell), Lucky Charm (+3 % Krit-Chance).
- Double-Coins-Booster, Time Warp, drei Begleiter und drei kosmetische Würfel-Skins.
- Gems ohne Kauf: zehn alle 24 Stunden, zwanzig pro 500 manuellen Würfen und zehn pro neuem Erfolg.
- Sämtliche Europreise sind Vorschauen. Gem-Pakete werden ausdrücklich als Demo aktiviert, ohne Geld abzubuchen. Es gibt keine Zahlungsintegration.
- Lokales Admin-Lab: eigene PIN setzen, Gems/Münzen/Sternenstaub vergeben, alles freischalten, Welten/Upgrades maximieren und Shops kostenlos verwenden.
- Admin öffnen: Sammlung → Admin-Menü oder fünfmal auf das Würfel-Logo tippen. Die PIN ist nur auf diesem Gerät gültig und wird separat vom Spielstand als gesalzener Hash gespeichert. Die statische App bietet keine sichere serverseitige Rechteverwaltung. Kostenlos-Modus erfordert eine entsperrte Admin-Sitzung und wird beim Sperren oder Neuladen deaktiviert.
- Gems, Gamepasses, Begleiter und Skins bleiben nach Prestige erhalten. Bestehende Version-0.2-Spielstände werden übernommen.
- Geprüft: Käufe, doppelte Käufe, fehlendes Guthaben, Haustiermultiplikatoren, Booster-Offline-Zeit, tägliche Belohnungen, Meilensteine, PIN-Anlage/Prüfung, Sperren, Admin-Aktionen und Prestige-Erhalt.

## Basis aus Version 0.2

- Perspektivisches Würfelbrett mit Holzrahmen, Kristallen und vier freischaltbaren Farbwelten.
- Gestaffelte Würfelsprünge, Krit- und Komboeffekte, Partikel und Fokus-Boost nach 30 manuellen Würfen.
- Langsame Progression: zweiter Würfel 150 Münzen, erster Wurfroboter 2.800 Münzen, erstes Prestige 2 Millionen. Das Prestige-Ziel steigt pro Neustart um 32 %.
- Sieben normale Upgrades, vier permanente Talente, zehn Missionen und anschließende Handwerksaufträge.
- 650 ms Mindestabstand zwischen manuellen Würfen. Automatische Würfe starten alle sieben Sekunden.
- Offline-Ertrag: 70 % des exakten erwarteten Ertrags, maximal vier Stunden.
- Spielstand-Export und -Import, ruhige Animationen und Sounds abschaltbar.
- Bestehende lokale Spielstände werden mit demselben Speicherschlüssel übernommen; eine Sicherung vor der Migration wird angelegt.
- Neue Service-Worker-Version mit aktueller Navigation aus dem Netz und Offline-Fallback.

## Auf dem iPhone

Den Spiellink in Safari öffnen und über „Teilen → Zum Home-Bildschirm“ installieren. Eine bereits installierte Web-App nach einem Update schließen und erneut öffnen. Die Versionsnummer steht unter dem Spielnamen und in der Sammlung. Die Dateien nicht neu hochladen: GitHub Pages veröffentlicht Änderungen auf `main`.

## Spielstand

Spielstände werden auf diesem Gerät im Browser gespeichert. Es gibt keine Cloud-Synchronisierung. Vor dem Wechsel zwischen Browser, Geräten oder einer Installation einen Export in der Sammlung erstellen und anschließend importieren. Der Import benötigt eine Bestätigung; er ersetzt den aktuellen Spielstand. Das Update setzt den Spielstand nicht zurück.

## Dateien

`index.html` enthält das gesamte Spiel einschließlich Grafik, Styles und Logik. `manifest.webmanifest`, `sw.js` und die drei vorhandenen PNG-Icons ermöglichen die Installation und Offline-Nutzung. Keine externen Schriftarten oder Laufzeitbibliotheken.

## Prüfung

JavaScript-Syntax und tatsächliche DOM-Interaktionen für manuelle Würfe, Cooldown, Käufe, Navigation, Prestige, permanente Talente, Fokus, Missionen, Migration und zwölf Würfel wurden geprüft. Offline-Erträge werden beim Fortsetzen nicht doppelt vergeben. Kombowerte werden über die vollständige Verteilung der sechs Würfelzahlen berechnet. Eine Simulation mit einem manuellen Wurf pro Sekunde und optimalen Käufen erreicht das erste Prestige in rund einer Stunde; echte Spielzeiten hängen von Spielweise und Zufall ab.
