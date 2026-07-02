# NHF Netzmanagement

**GitHub Pages Version** – Vollständig statisch hostbar über GitHub mit Service Worker Caching.

Diese Version der App läuft **ausschließlich über GitHub** (GitHub Pages). Alle Daten werden im Browser (`localStorage`) gespeichert.

## Live Demo

https://sohmdaniel.github.io/nhf-netzmanagement/

## GitHub Pages + Service Worker Caching

Die App nutzt einen **Service Worker** für:
- Schnelles Laden (Cache First für App Shell)
- Bessere Offline-Fähigkeit
- Zuverlässiges PWA-Verhalten

Der Service Worker cached automatisch:
- `index.html`
- `manifest.json`
- App Shell

Externe Skripte (Tailwind, jsPDF etc.) werden Network-First mit Cache-Fallback behandelt.

## Schnellstart

1. Repository klonen oder Dateien herunterladen
2. `index.html` im Browser öffnen

**Demo-Login:**
- Benutzer: `Admin`
- Passwort: `0000`

## GitHub Pages aktivieren

1. Lade `index.html`, `manifest.json` und `sw.js` hoch
2. Settings → Pages → Source: `main` / root
3. Speichern

## Features
- Komplette PWA (iOS & Android)
- Service Worker Caching
- Monatsinspektion, Mängelmeldung, Aufgaben
- QR-Code Scanner & Generator
- PDF Export & Teilen
- Admin-Bereich mit Backup

**Hinweis:** PocketBase ist deaktiviert (statische Version). Für Backend nutze Docker/Termux-Version.

---
Build 4.1.0 | Netzgesellschaft Heilbronn