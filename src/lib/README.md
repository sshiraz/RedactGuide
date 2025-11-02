# Library Directory

This directory contains shared utilities, helpers, and third-party library integrations.

## Purpose

Pure functions, helpers, and wrappers that can be used across multiple features without side effects.

## Contents

### `/pdfjs.ts`

pdf.js initialization and helper functions.

- `loadPDF()` - Load PDF from ArrayBuffer
- `getPage()` - Get specific page
- `getTextContent()` - Extract text with positions
- `renderPageToCanvas()` - Render page to canvas element

### `/patterns.ts`

Regex patterns and validation functions for PII detection.

- SSN patterns and validators
- Phone number patterns (multiple formats)
- Email validation
- Credit card patterns with Luhn algorithm
- Date of birth patterns

## Guidelines

- Functions should be pure (no side effects)
- Export individual functions, not default exports
- Include TypeScript types for all exports
- Keep functions small and focused
- Add JSDoc comments for complex logic
