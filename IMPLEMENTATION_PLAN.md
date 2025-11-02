# RedactGuide Implementation Plan

## Overview
This document outlines the incremental implementation plan for building RedactGuide, a local-only PWA for automatic document redaction. The plan is divided into 10 phases, each building on the previous one to deliver working functionality at every step.

---

## Phase 1: Project Foundation & Basic UI
**Duration**: 3-4 days
**Goal**: Set up the development environment and create the basic application shell

### Tasks:
1. Initialize Vite + React + TypeScript project with Tailwind CSS
2. Configure PWA plugin (`vite-plugin-pwa`) with basic manifest
3. Set up project structure (folders: features, lib, store, components)
4. Create basic App.tsx with routing structure (using React Router)
5. Build landing page with privacy-first messaging
6. Create basic responsive layout with header and main content area
7. Set up Tailwind design tokens (colors, spacing, typography)
8. Add .gitignore and essential configuration files
9. Test build process and PWA installability

**Deliverable**: Installable PWA shell with landing page and navigation structure

---

## Phase 2: File Import & Upload UI
**Duration**: 2-3 days
**Goal**: Enable users to import PDF files into the application

### Tasks:
1. Install dependencies: `pdfjs-dist`
2. Create `UploadZone` component with drag-and-drop functionality
3. Add file input with PDF validation (type, size limits)
4. Implement visual feedback for drag events (hover states)
5. Create file preview card showing filename, size, and page count
6. Add error handling for invalid files
7. Store uploaded file ArrayBuffer in component state
8. Create empty state illustrations/messaging
9. Add "Clear" and "Choose Another File" actions
10. Test with various PDF sizes and validate memory handling

**Deliverable**: Working file upload interface that accepts and validates PDFs

---

## Phase 3: PDF Rendering & Viewer
**Duration**: 4-5 days
**Goal**: Display PDF pages in a scrollable viewer

### Tasks:
1. Create `lib/pdfjs.ts` with pdf.js initialization and helpers
2. Configure pdf.js worker from CDN or local bundle
3. Build `PdfViewer` component with canvas-based page rendering
4. Implement page-by-page rendering at appropriate scale
5. Add virtual scrolling/lazy loading for multi-page documents
6. Create page navigation controls (prev/next, jump to page)
7. Add zoom controls (fit-width, fit-page, custom zoom)
8. Implement loading states and progress indicators
9. Add error boundaries for PDF parsing failures
10. Optimize canvas rendering performance
11. Test with various PDF types (scanned, text, forms, mixed)

**Deliverable**: Functional PDF viewer with navigation and zoom controls

---

## Phase 4: Text Extraction & Analysis
**Duration**: 3-4 days
**Goal**: Extract text content and bounding boxes from PDF pages

### Tasks:
1. Create text extraction utility using `getTextContent()` from pdf.js
2. Build data structure for text items with position info (`{str, transform, bbox}`)
3. Create logical text string with character-to-item index mapping
4. Handle text transformations (rotation, scaling) correctly
5. Create utility to calculate accurate bounding boxes in page coordinates
6. Build page text cache to avoid re-extraction
7. Add visualization mode to show detected text boxes (debug feature)
8. Test with rotated text, multi-column layouts, and tables
9. Handle edge cases (empty pages, image-only pages, corrupted text)
10. Create unit tests for text extraction logic

**Deliverable**: Reliable text extraction with accurate positioning data

---

## Phase 5: PII Detection — Regex Patterns
**Duration**: 4-5 days
**Goal**: Detect sensitive information using pattern matching

### Tasks:
1. Create `lib/patterns.ts` with regex patterns for:
   - SSN: `\b\d{3}-\d{2}-\d{4}\b`
   - Phone numbers (multiple formats)
   - Email addresses
   - Credit cards (with Luhn validation)
   - Date of birth (US formats)
2. Implement Luhn checksum algorithm for credit card validation
3. Create `Detector.ts` class with category-based detection
4. Build match result structure: `{type, start, end, text, confidence}`
5. Map regex match positions to text item indices
6. Create detection configuration UI (checkboxes for categories)
7. Add real-time match highlighting in viewer
8. Display match count and statistics per category
9. Implement match filtering and false positive handling
10. Test against diverse documents with mixed PII types
11. Add unit tests for each pattern type

**Deliverable**: Working PII detection for 5 core categories with visual feedback

---

## Phase 6: Redaction Planning & Visualization
**Duration**: 3-4 days
**Goal**: Convert detected matches into visual redaction rectangles

### Tasks:
1. Create `Planner.ts` to map matches to bounding box rectangles
2. Implement bbox union algorithm for multi-item matches
3. Add rectangle merging for overlapping/adjacent matches
4. Apply padding (2-3px) to ensure full coverage
5. Build redaction overlay component to show rectangles on PDF
6. Add color coding by PII category
7. Implement hover/click interaction to show match details
8. Create "Review & Adjust" interface to approve/reject matches
9. Add manual redaction tool (click-and-drag to create rectangles)
10. Test bbox accuracy across different text sizes and rotations

**Deliverable**: Visual redaction preview with interactive review interface

---

## Phase 7: Burn-In Export — Rasterization
**Duration**: 4-5 days
**Goal**: Export redacted PDFs with text permanently removed

### Tasks:
1. Install `pdf-lib` for PDF assembly
2. Create `BurnExporter.ts` with rasterization pipeline
3. Implement `renderPageToCanvas()` at configurable scale (1.5-2.0x)
4. Draw filled rectangles on canvas for each redaction
5. Convert canvas to image data (JPEG with quality setting)
6. Create new PDF pages using pdf-lib
7. Embed rasterized images maintaining original page dimensions
8. Add progress tracking for multi-page exports
9. Implement download functionality with filename generation
10. Test that exported PDFs have no selectable text in redacted areas
11. Validate visual quality of exported pages

**Deliverable**: Working "Export Redacted PDF" feature with burn-in mode

---

## Phase 8: Local Storage & Session Management
**Duration**: 3-4 days
**Goal**: Persist work sessions and enable resume functionality

### Tasks:
1. Install and configure Dexie (IndexedDB wrapper)
2. Create `store/db.ts` with schema:
   - `sessions`: id, filename, uploadDate, pageCount
   - `files`: id, sessionId, arrayBuffer
   - `redactionPlans`: id, sessionId, matches, rectangles
3. Implement save/load session functionality
4. Add "Recent Documents" list on landing page
5. Create session detail view with metadata
6. Add "Resume Session" capability
7. Implement delete session with confirmation
8. Add storage quota monitoring and warnings
9. Test with large files and multiple sessions
10. Handle IndexedDB errors gracefully

**Deliverable**: Persistent storage allowing users to resume work

---

## Phase 9: PWA Enhancement & Offline Support
**Duration**: 2-3 days
**Goal**: Optimize PWA experience and ensure full offline functionality

### Tasks:
1. Configure service worker caching strategies
2. Add offline page and connection status indicator
3. Implement app update notification system
4. Create install prompt for desktop/mobile
5. Add app icons for various platforms (PWA manifest)
6. Configure caching for pdf.js worker and assets
7. Test offline functionality thoroughly
8. Add "Add to Home Screen" guidance
9. Test on iOS Safari, Chrome Android, desktop browsers
10. Optimize bundle size and lazy loading

**Deliverable**: Fully functional offline PWA with install capabilities

---

## Phase 10: Polish, Testing & Documentation
**Duration**: 4-5 days
**Goal**: Ensure quality, reliability, and user trust

### Tasks:
1. Create comprehensive privacy policy page
2. Add in-app explainers for how local processing works
3. Build visual proof of no network calls (dev tools guidance)
4. Create user onboarding tour/tutorial
5. Add keyboard shortcuts for common actions
6. Implement error boundaries and fallback UIs
7. Add telemetry-free analytics (local-only usage stats)
8. Create acceptance test suite:
   - Copy-paste test (no text should be selectable)
   - OCR validation (run Tesseract and verify zero PII)
   - Cross-browser compatibility tests
9. Write user documentation and FAQ
10. Optimize performance (bundle size, render speed)
11. Add accessibility improvements (ARIA labels, keyboard nav)
12. Create demo video/screenshots
13. Final QA pass on all features

**Deliverable**: Production-ready MVP with quality assurance

---

## Phase 11 (Optional): Advanced Name Detection
**Duration**: 3-4 days
**Goal**: Add intelligent name detection using NLP

### Tasks:
1. Evaluate and choose NLP library (`compromise` or `wink-nlp`)
2. Integrate library with offline/local-only constraint
3. Build name detection pipeline with PERSON entity tagging
4. Add heuristics to filter false positives (ALL CAPS, headers)
5. Create confidence scoring for name matches
6. Add name detection toggle in UI
7. Test against documents with various name formats
8. Optimize performance with Web Workers if needed

**Deliverable**: Optional name detection feature

---

## Phase 12 (Optional): Payment Integration
**Duration**: 2-3 days
**Goal**: Add Stripe integration for usage limits

### Tasks:
1. Set up Stripe account and get API keys
2. Create usage tracking in local storage (files processed today)
3. Implement free tier limit (1 file/day)
4. Build paywall UI with pricing options
5. Integrate Stripe Checkout for one-time purchases
6. Add usage dashboard showing current limits
7. Test payment flow end-to-end

**Deliverable**: Optional payment system for premium usage

---

## Success Metrics

### Technical Validation:
- ✅ Copy-paste test: Zero text extractable from redacted areas
- ✅ OCR test: Tesseract finds zero PII in exported PDFs
- ✅ Offline test: Full functionality without network
- ✅ Cross-browser test: Works on Chrome, Firefox, Safari, Edge
- ✅ Performance: Processes 50-page document in under 30 seconds

### User Experience:
- ✅ Installation: PWA installs successfully on desktop and mobile
- ✅ Privacy: Clear messaging about local-only processing
- ✅ Usability: Complete redaction workflow in under 2 minutes
- ✅ Accuracy: 95%+ detection rate for core PII categories

---

## Dependencies & Libraries

### Core:
- React 18+ with TypeScript
- Vite 5+
- Tailwind CSS 3+
- vite-plugin-pwa
- React Router 6+

### PDF Processing:
- pdfjs-dist (Mozilla PDF.js)
- pdf-lib

### Storage:
- Dexie (IndexedDB)

### Optional:
- compromise or wink-nlp (name detection)
- Stripe SDK (payments)

---

## Risk Mitigation

### Performance Risks:
- **Large files (100+ pages)**: Implement chunked processing with progress bars
- **Memory constraints**: Use streaming where possible, clear canvas contexts

### Accuracy Risks:
- **False positives**: Allow manual review and adjustment
- **False negatives**: Provide manual redaction tool as backup

### Browser Compatibility:
- **Safari IndexedDB quirks**: Test thoroughly and add fallbacks
- **Service worker cache limits**: Monitor and warn users

### Privacy Concerns:
- **Perception of data upload**: Add visual proof and education
- **Accidental network calls**: Audit all dependencies and add CSP headers

---

## Timeline Summary

**Minimum Viable Product (Phases 1-10)**: 8-10 weeks
**With Advanced Features (Phases 11-12)**: 10-12 weeks

Each phase delivers working functionality that can be tested and validated independently.
