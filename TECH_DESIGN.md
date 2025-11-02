# Technical Design — Detection & Redaction

## Pattern Strategy (MVP)
Use curated regex with conservative boundaries:
- SSN: `\b\d{3}-\d{2}-\d{4}\b`
- Phone: `(\+?\d{1,2}[\s.-]?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}`
- Email: `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`
- Credit card (Luhn-check): find 13–19 digits patterns then validate.
- DOB (US): `\b(0?[1-9]|1[0-2])[\/\-](0?[1-9]|[12]\d|3[01])[\/\-](19|20)\d{2}\b`

### Luhn Validation
Applies checksum to confirm valid credit card pattern.

## Name Detection (optional, v2)
- `compromise` or `wink-nlp` to tag PERSON entities offline.
- Combine with page heuristics: ignore ALL CAPS headers, table headings.

## Mapping Matches → Rectangles
- Build logical string for page, join items with soft spaces; keep array mapping `[charIndex] -> itemIndex`.
- For each match `(start,end)`:
  - Find covering item indices.
  - For each item, compute bbox in page space via `transform`.
  - Union/merge bboxes across item range.
- Pad rectangles by ~2–3 px to fully cover glyph antialias.

## Burn-In Export (reliable)
1. `renderPageToCanvas(page, scale)`.
2. `ctx.fillRect` for each redaction rect.
3. `canvas.toDataURL('image/jpeg', quality)`.
4. `pdf-lib`: create page matching original size, embed image, draw.

> Test: copying text from resulting PDF should yield nothing (image only).

## Quality Gates
- Run Tesseract OCR on exported page images and re-scan with regex.
- Expect 0 matches for redacted categories.
- Visual manual QA on rotated text and tables.
