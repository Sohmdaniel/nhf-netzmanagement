# NHF Netzmanagement

**GitHub Pages Version** – Vollständig statisch hostbar über GitHub.

Diese Version der App läuft **ausschließlich über GitHub** (GitHub Pages). Alle Daten werden im Browser (`localStorage`) gespeichert.

## Live Demo (nach Aktivierung von GitHub Pages)

https://<dein-username>.github.io/nhf-netzmanagement/

## Schnellstart

1. Repository klonen oder die Dateien herunterladen
2. `index.html` im Browser öffnen

**Demo-Login:**
- Benutzer: `Admin`
- Passwort: `0000`

## GitHub Pages aktivieren

1. Lade `index.html` und `manifest.json` in das Repository hoch
2. Gehe zu **Settings → Pages**
3. Source: `Deploy from a branch` → `main` / `/ (root)`
4. Speichern

Die App ist dann öffentlich unter deiner GitHub Pages URL erreichbar und als PWA installierbar.

## Features (GitHub Pages Version)
- Komplette PWA (iOS & Android installierbar)
- Monatsinspektion, Mängelmeldung, Aufgaben-Board
- QR-Code Scanner & Generator
- PDF Export & Teilen
- Admin-Bereich mit Backup/Import
- Funktioniert komplett offline nach erstem Laden

**Hinweis:** PocketBase-Backend ist in dieser Version deaktiviert (da kein Server). Für volles Backend mit Synchronisation nutze die Docker/Termux-Versionen.

## Weitere Setups
- Docker & Multi-Container: Siehe `docker-compose.yml`
- Termux (Android): Ordner `nhf-termux/`

---
Build 4.1.0 | Netzgesellschaft Heilbronn