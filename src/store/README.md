# Store Directory

This directory contains state management and client-side data persistence.

## Purpose

Centralized state management and IndexedDB storage for offline-first functionality.

## Contents

### `/db.ts`

Dexie.js database schema and configuration.

- `sessions` table - User sessions and settings
- `files` table - Uploaded PDF metadata and ArrayBuffers
- `plans` table - Saved redaction plans and annotations

## Storage Strategy

### What Gets Stored

- PDF file data (ArrayBuffer) for offline access
- Redaction plans (bounding boxes, page mappings)
- User preferences and session state
- Processing history and statistics

### What Doesn't Get Stored

- Never store unredacted sensitive information
- Never persist extracted PII matches
- Detection results are ephemeral (computed on demand)

## Privacy Guidelines

- All data stored locally in IndexedDB (never sent to server)
- User can clear all data at any time
- No analytics or tracking data persisted
- Sensitive information only exists in memory during processing
