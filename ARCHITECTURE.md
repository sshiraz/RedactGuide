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
- **Vector-remove (v2)**: parse content stream & remove text operators.

## Performance
- Use `requestIdleCallback` or batched page processing.
- Scale factor 1.5–2.0 usually enough for crisp text.
- Web Workers for OCR/NER if needed.

## Error Handling
- Malformed PDFs → show fallback guidance.
- Large files → chunk processing with progress bar.
