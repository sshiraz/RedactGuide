
---

### `ARCHITECTURE.md`
```md
# Architecture

## Component Map
- `/src`
  - `App.tsx`: routing + global providers
  - `features/import/UploadZone.tsx`: file input/drag/drop
  - `features/viewer/PdfViewer.tsx`: canvas viewer using pdf.js
  - `features/detect/Detector.ts`: regex + optional NER pipeline
  - `features/redact/Planner.ts`: map matches → merged bounding boxes
  - `features/export/BurnExporter.ts`: rasterize + draw + assemble PDF
  - `store/db.ts`: Dexie schema (sessions, files, plans)
  - `lib/pdfjs.ts`: pdf.js helpers (getTextItems, renderPageToCanvas)
  - `lib/patterns.ts`: regex & validators
  - `workers/*`: web workers for CPU heavy tasks (optional, v2)

## Data Flow
1. **Upload** → `ArrayBuffer`
2. **Parse** (`pdfjs-dist`)
   - `getTextContent()` → items: `{ str, transform, width, height }`
   - Derive per-glyph bboxes (approx) or use item bbox if available.
3. **Detect**
   - Concatenate page items → logical string with index map.
   - Regex/NER find ranges (e.g., `[start,end)`).
   - Map ranges back to item indices → raw rectangles.
4. **Plan**
   - Expand to glyph/item bbox union.
   - Merge overlapping/adjacent rects with small tolerance.
5. **Export**
   - Render each page to `<canvas>` at scale X.
   - Draw filled rects on canvas (RGBA opaque).
   - Convert canvas → image; embed via `pdf-lib` per page.
6. **Deliver**
   - Save to Blob → download.

## Modes
- **Burn-in (default)**: strongest privacy; loses text layer → images only.
- **Vector-remove (v2)**: parse content stream & remove text operators for matched spans (more complex; keep for later).

## Performance
- Use `requestIdleCallback` or batched page processing.
- Scale factor 1.5–2.0 usually enough for crisp text.
- Web Workers for OCR/NER if needed.
- Memory: process N pages at a time (e.g., windowed).

## Error Handling
- Malformed PDFs → show fallback guidance.
- Very large files → chunk/range process; progress bar with cancel.

## Telemetry
- Only anonymized feature pings (count of pages, categories selected).
- **Never** log content or counts of matches that could reveal PII.
