# Features Directory

This directory contains feature-specific modules organized by domain functionality.

## Purpose

Each subdirectory represents a distinct feature or capability of the application, encapsulating all related components, logic, and types.

## Structure

### `/import`

Handles file upload, drag-and-drop, and PDF validation.

- Components: UploadZone, FilePreview
- Handles: File input, validation, ArrayBuffer storage

### `/viewer`

PDF rendering and display using pdf.js.

- Components: PdfViewer, PageRenderer, NavigationControls
- Handles: Canvas rendering, zoom, pagination, virtual scrolling

### `/detect`

PII detection using regex patterns and optional NER.

- Modules: Detector (main detection engine)
- Handles: Pattern matching for SSN, phone, email, credit cards, names

### `/redact`

Redaction planning and bounding box management.

- Modules: Planner (merges overlapping rectangles)
- Handles: Mapping text matches to page coordinates, box optimization

### `/export`

PDF export with burned-in redactions.

- Modules: BurnExporter (rasterize pages with redactions)
- Handles: Canvas manipulation, PDF assembly, download delivery

## Guidelines

- Each feature should be self-contained with minimal cross-dependencies
- Shared utilities belong in `/lib`
- Shared state belongs in `/store`
- Shared UI components belong in `/components`
