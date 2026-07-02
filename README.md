# NHF Netzmanagement

Professionelle mobile Service-App für die Netzgesellschaft Heilbronn.

**Features:**
- Vollständige PWA (installierbar auf iPhone/Android)
- Monatsinspektionen, Mängelmeldungen, Auftragsmanagement
- QR-Code Scanner & Generator
- PDF-Export & Teilen
- Admin-Bereich mit Backup/Restore
- Docker & Multi-Container Support
- Termux (Android) + Termux:API Automatisierung

## Schnellstart (lokal)

1. Lade die Datei `index.html` herunter.
2. Öffne sie im Browser.

**Demo-Login:**
- Benutzer: `Admin`
- Passwort: `0000`

## Docker (empfohlen für Server)

```bash
git clone https://github.com/Sohmdaniel/nhf-netzmanagement.git
cd nhf-netzmanagement

# Einfaches Docker
cd nhf-app
docker compose up --build -d

# Multi-Container mit PocketBase
cd nhf-multi
docker compose up --build -d
```

App dann unter http://localhost:8080

## Termux (Android)

Siehe `nhf-termux/README.md` im Repo.

## GitHub Pages (kostenlos hosting)

Die App kann direkt über GitHub Pages gehostet werden.

## Technologie
- Reines HTML/JS + Tailwind (CDN)
- jsPDF, QRCode.js, Html5-QRCode
- Docker (Nginx)
- PocketBase (optional Backend)

Entwickelt als vollständig offline-fähige Progressive Web App.

---

**Build 4.1.0** | Netzgesellschaft Heilbronn