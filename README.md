# ROLLVERSE 0.4 — SKYFORGE

Desktop Idle-Game für Windows im Browser: https://seriax.github.io/Rollverse/

Öffne das Spiel in Edge, Chrome oder Firefox. Kein Download notwendig. Über den Browser kann es auch als eigenständige Web-App installiert werden. Auf breiten Displays: Upgrades/Rebirth links, Spielwelt in der Mitte, Kapseln/Team/Shop rechts. Keine Spiel-Tabs mehr. Die Seitenleisten scrollen unabhängig. Auf schmalen Fenstern werden Bereiche untereinander angeordnet.

## Neu in 0.4

- Dunkles Skyforge-Cockpit, große schwebende Würfelinsel, XP-Leiste, sichtbare Team-Slots und animierte Kapselstation.
- Spielerlevel durch manuelle Würfe (3 XP), Roboterwürfe (1 XP), Offline-Roboter und Expeditionen. Jede Stufe gibt +1 % Einkommen. Levelgrenze 200.
- Rebirth braucht **aktuelles Cash UND Level**: zuerst 500.000 Cash und Level 20; danach Cash ×1,8 pro Rebirth und fünf weitere Level (maximal Level 200).
- Rebirth setzt Geld, Run-XP und normale Upgrades zurück. Jeder Rebirth gibt dauerhaft ×1,35 Einnahmen sowie Sternenstaub für permanente Talente. Team/Kopien, Gems, Shop-Items, Tickets, Welten und aktive Expedition bleiben erhalten.
- Upgrade-Käufe ×1, bis zu ×10 oder MAX. Teilkäufe, Guthaben und Upgrade-Limits werden berücksichtigt.
- Ab Rebirth 1: optionaler Auto-Kauf sucht alle drei Sekunden ein effizientes bezahlbares Upgrade. Er verwendet höchstens die Hälfte des Wallets pro Kauf.
- Acht Gacha-Begleiter, drei gleichzeitig im Team, Cash-/Ticket-/Gem-Ziehungen und rabattierte Fünfer-Ziehungen. Zwei kostenlose Starter-Tickets.
- Basis-Chancen: Common 60 %, Rare 25 %, Epic 12 %, Legendary 2,5 %, Mythic 0,5 %. Nach 30 Ziehungen ohne Epic mindestens Epic; nach 80 ohne Legendary mindestens Legendary. Höhere Raritäten zählen für beide Garantien. Garantien beschränken die Ziehung auf passende Raritäten mit proportionalen Gewichten.
- Duplikate verbessern automatisch Sterne bei 2/4/8/16/32 Kopien, maximal sechs Sterne. Jeder zusätzliche Stern verstärkt den Bonus um 30 % des Basiswerts. Bestes Team per Knopfdruck oder manuelle Auswahl.
- Rift Expedition ab Level 8: 5 Minuten, läuft über Schließen und Rebirth weiter. Kosten an Rebirth gekoppelt; Belohnung: doppelter Einsatz in Cash, zwei Tickets, fünf Gems und 80 XP. Kein doppeltes Abholen.
- Tastatur: Leertaste würfelt, 1–7 kaufen Upgrades, G öffnet eine Kapsel, R öffnet Rebirth, Escape schließt Dialoge. Eingabefelder behalten ihre normale Tastaturbedienung; Leertaste betätigt fokussierte Buttons.

## Shop und Admin

Bestehender Gem-Shop mit VIP, Boosts, Begleitern und Skins in der rechten Seitenleiste. **Europreise sind Demo-Vorschauen, Paketkäufe simuliert. Keine Zahlungsintegration, kein Echtgeld-Einsatz und keine Auszahlung im Gacha.**

Admin: Sammlung → Admin-Menü, alternativ fünf Klicks auf das Würfellogo. Eigene Geräte-PIN setzen; das lokale Panel kann Cash, Gems, Sternenstaub und Tickets vergeben, Upgrades/Items freischalten und Gratiskäufe aktivieren. „Rebirth bereit“ setzt beide Voraussetzungen. Die PIN ist ein separat gespeicherter gesalzener Hash; nicht im Spielstand-Export. Admin-Sitzung und Gratiskäufe enden bei Sperren oder Neuladen. Keine sichere serverseitige Rechteverwaltung.

## Spielstand und Offline

0.2/0.3-Spielstände werden mit demselben Schlüssel `rollverse-v1` übernommen. Sicherung `rollverse-v1-before-0.4` vor Migration. Bestehender Run-Fortschritt gibt Start-XP. Cash, Talente und Premium-Items bleiben erhalten. Lokale Speicherung, keine Cloud-Synchronisierung. Export/Import in „Sammlung“; vor Browser- oder Gerätewechsel exportieren.

Roboter geben offline 70 % erwarteten Ertrag, maximal vier Stunden. Zeit-Booster zählen nur für die tatsächliche Überschneidung; Offline-XP basieren auf der begrenzten Roboterzeit. Expeditionen können nach Rückkehr abgeholt werden. Navigation wird online aus dem Netz geladen, offline gibt es einen Cache-Fallback.

## Dateien und Prüfung

`index.html` enthält das vollständige Spiel mit Styles/Logik, ohne externe Laufzeitbibliotheken. `manifest.webmanifest`, `sw.js` und drei Icons unterstützen Installation und Offline-Nutzung. GitHub Pages veröffentlicht `main`.

Geprüft mit tatsächlichem DOM: Klick-Cooldown, sichtbare Seitenleisten, alle 200 Levelgrenzen, beide Rebirth-Bedingungen, Reset/Skalierung/Beibehaltung, Mehrfachkäufe/Limit/Guthaben, Ziehungspreise/Garantien/Chancen/Team/Duplikate, Expeditionen und wiederholtes Abholen, Offline-XP/Boosterzeit, Auto-Kauf-Freischaltung, alte Spielstände, Import-Normalisierung und Admin. JavaScript-Syntax geprüft. Live-Browser-Prüfung nach Veröffentlichung.
