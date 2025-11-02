# RedactGuide — Local-Only PWA for Automatic Document Redaction

**One-line**: A privacy-first Progressive Web App that automatically finds and redacts sensitive info (SSNs, phone numbers, emails, credit cards, names) entirely **in the browser**. No uploads. HIPAA-friendly by design.

## Core Value
- **Zero-upload**: All processing happens in the browser (client-side).
- **Automatic detection**: Users select categories; app finds & redacts them.
- **Installable PWA**: Works offline; Add-to-Home-Screen on desktop/mobile.
- **Trust by design**: “Burn-in” redaction mode ensures irreversible removal.

## MVP Goals
1. Import PDF (and images as stretch).
2. Extract page text runs & bounding boxes (via `pdfjs-dist`).
3. Detect PII via curated regex + optional lightweight NER.
4. Generate redaction rectangles over matched spans.
5. **Burn-in export**: rasterize pages + draw redaction boxes → new PDF (no hidden text).
6. Local-only; no network calls for document content.

## Non-Goals (MVP)
- Word/Excel native editing.
- Server accounts/sync (optional later).
- Full enterprise policy engine (v2+).

## Tech Stack
- React + Vite + Tailwind
- PWA: `vite-plugin-pwa`
- PDF: `pdfjs-dist` (render/extract), `pdf-lib` (assemble output PDF)
- Storage: `Dexie` (IndexedDB)
- PII: curated regex library + optional `compromise`/`wink-nlp` for names

## Quick Start
```bash
# in Bolt.new terminal or local dev
npm i
npm run dev
