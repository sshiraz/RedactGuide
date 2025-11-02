# Task Testing Specification

This document defines acceptance tests for each task in the implementation plan. Each task must pass its tests before being marked complete.

---

## Phase 1: Project Foundation & Basic UI

### Task 1: Initialize Vite + React + TypeScript project with Tailwind CSS

**Test Criteria**:
- [ ] `npm run build` completes without errors
- [ ] `dist/` folder is created with HTML, CSS, and JS files
- [ ] TypeScript compilation succeeds with strict mode
- [ ] Tailwind CSS classes are processed and included in output CSS
- [ ] React app renders without console errors
- [ ] File structure includes: `src/`, `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`

**Manual Verification**:
```bash
npm run build
# Should output: "✓ built in Xs"
# Should create: dist/index.html, dist/assets/*.css, dist/assets/*.js

npm run dev
# Visit http://localhost:5173
# Verify: Page loads, "RedactGuide" header visible, no console errors
```

**Pass Criteria**: All files present, builds successfully, dev server runs

---

### Task 2: Configure PWA plugin with basic manifest

**Test Criteria**:
- [ ] `vite-plugin-pwa` installed in package.json
- [ ] `manifest.json` generated in dist/ after build
- [ ] Service worker file generated (e.g., `sw.js` or `workbox-*.js`)
- [ ] Manifest includes: name, short_name, icons, theme_color, display
- [ ] App is installable in Chrome DevTools (Application > Manifest)
- [ ] No manifest errors in browser console

**Manual Verification**:
```bash
npm run build
npm run preview
# Open Chrome DevTools > Application > Manifest
# Verify: Manifest is valid, "Install" option available
```

**Pass Criteria**: PWA manifest valid, app shows "Install" prompt

---

### Task 3: Set up project structure

**Test Criteria**:
- [ ] Folders created: `src/features/`, `src/lib/`, `src/store/`, `src/components/`
- [ ] Each folder contains a README.md or index file explaining its purpose
- [ ] No empty folders without documentation
- [ ] Folder structure matches ARCHITECTURE.md

**Manual Verification**:
```bash
ls -la src/
# Should show: features/, lib/, store/, components/
```

**Pass Criteria**: All folders exist with clear organization

---

### Task 4: Create basic routing structure (using React Router)

**Test Criteria**:
- [ ] `react-router-dom` installed
- [ ] Route configuration created (e.g., `src/routes.tsx` or in `App.tsx`)
- [ ] At least 2 routes defined (e.g., "/" home, "/upload")
- [ ] Navigation between routes works without page reload
- [ ] URL changes reflect in browser address bar
- [ ] 404/Not Found route handles invalid paths

**Manual Verification**:
```bash
npm run dev
# Navigate to: /, /upload, /invalid-path
# Verify: Routes render different content, URL updates, no page refresh
```

**Pass Criteria**: Routing functional, navigation works

---

### Task 5: Build landing page with privacy-first messaging

**Test Criteria**:
- [ ] Hero section with main headline
- [ ] Privacy-focused value propositions (min 3 points)
- [ ] Clear explanation of "local-only" processing
- [ ] Call-to-action button (e.g., "Get Started", "Upload Document")
- [ ] Visual hierarchy: H1 > H2 > Body text clear
- [ ] Content mentions: no uploads, browser-only, HIPAA-friendly

**Manual Verification**:
```bash
npm run dev
# Visit: http://localhost:5173
# Verify: Compelling messaging, clear CTA, professional design
```

**Pass Criteria**: Landing page communicates value clearly

---

### Task 6: Create responsive layout with header and main content area

**Test Criteria**:
- [ ] Header component created (separate file or in App.tsx)
- [ ] Header contains: logo/branding, navigation links
- [ ] Layout is responsive: mobile (320px), tablet (768px), desktop (1024px+)
- [ ] No horizontal scroll on any viewport size
- [ ] Touch targets are min 44x44px on mobile
- [ ] Content is readable at all breakpoints

**Manual Verification**:
```bash
npm run dev
# Chrome DevTools > Toggle device toolbar
# Test viewports: iPhone SE (375px), iPad (768px), Desktop (1920px)
# Verify: Layout adapts, no overflow, readable text
```

**Pass Criteria**: Responsive across all major breakpoints

---

### Task 7: Set up Tailwind design tokens

**Test Criteria**:
- [ ] Custom colors defined in `tailwind.config.js` (theme.extend.colors)
- [ ] Typography scale customized if needed
- [ ] Custom spacing values added if needed
- [ ] Design tokens documented (colors, spacing, typography)
- [ ] Tokens are used consistently across components
- [ ] No hardcoded hex colors in components (use Tailwind classes)

**Manual Verification**:
```bash
# Check tailwind.config.js for custom theme
# Grep for hardcoded colors in components:
grep -r "#[0-9a-fA-F]\{6\}" src/ --include="*.tsx"
# Should return minimal results (prefer Tailwind classes)
```

**Pass Criteria**: Design system defined, consistently applied

---

### Task 8: Add .gitignore and essential configuration files

**Test Criteria**:
- [ ] `.gitignore` includes: node_modules/, dist/, .env, *.log
- [ ] ESLint configuration present (`.eslintrc` or in package.json)
- [ ] Prettier configuration present (`.prettierrc` or in package.json)
- [ ] EditorConfig present (optional but recommended)
- [ ] `npm run lint` command works (if ESLint configured)

**Manual Verification**:
```bash
cat .gitignore
# Should include: node_modules, dist, .env, *.log

npm run lint
# Should run ESLint on src/ files
```

**Pass Criteria**: Essential configs present, linting works

---

### Task 9: Test build process and PWA installability

**Test Criteria**:
- [ ] `npm run build` completes in <10 seconds
- [ ] Build output is optimized (gzip sizes shown)
- [ ] `npm run preview` serves the production build
- [ ] PWA installs successfully in Chrome
- [ ] PWA installs successfully in Edge
- [ ] PWA icon appears correctly in installed app
- [ ] App works after installation (launches, functions)

**Manual Verification**:
```bash
npm run build
npm run preview
# Open http://localhost:4173
# Chrome: Click install icon in address bar
# Verify: App installs, opens in separate window, functions correctly
```

**Pass Criteria**: Builds optimize, PWA installs on 2+ browsers

---

## Phase 2: File Import & Upload UI

### Task 1: Install dependencies: `pdfjs-dist`

**Test Criteria**:
- [ ] `pdfjs-dist` in package.json dependencies
- [ ] `npm run build` succeeds after installation
- [ ] Can import from 'pdfjs-dist' without errors
- [ ] Worker file accessible (verify in browser network tab)

**Manual Verification**:
```bash
npm list pdfjs-dist
# Should show: pdfjs-dist@X.X.X

npm run build
# Should succeed without errors
```

**Pass Criteria**: Library installed, imports work

---

### Task 2: Create `UploadZone` component with drag-and-drop functionality

**Test Criteria**:
- [ ] Component file created: `src/features/import/UploadZone.tsx`
- [ ] Accepts file via drag-and-drop
- [ ] Accepts file via click to browse
- [ ] Visual feedback on drag over (border/background change)
- [ ] Visual feedback on drag leave (returns to normal)
- [ ] Only accepts PDF files (other types rejected)
- [ ] Emits file data to parent component

**Manual Verification**:
```bash
npm run dev
# Test: Drag PDF file over zone (should highlight)
# Test: Drag non-PDF over zone (should reject or show error)
# Test: Click to browse, select PDF (should accept)
```

**Pass Criteria**: Both upload methods work, visual feedback present

---

### Task 3: Add file input with PDF validation

**Test Criteria**:
- [ ] File input accepts only `.pdf` mime type
- [ ] File size limit enforced (e.g., max 50MB)
- [ ] Validation error messages shown for:
  - [ ] Wrong file type
  - [ ] File too large
  - [ ] Corrupted/invalid PDF
- [ ] Error messages are user-friendly (not technical)

**Manual Verification**:
```bash
npm run dev
# Test: Upload .docx file (should reject with message)
# Test: Upload 100MB PDF (should reject with size error)
# Test: Upload valid 5MB PDF (should accept)
```

**Pass Criteria**: Validation works, errors are clear

---

### Task 4: Implement visual feedback for drag events

**Test Criteria**:
- [ ] Drag over: Border color changes or background highlights
- [ ] Drag leave: Visual state returns to normal
- [ ] Drop: Visual feedback shows processing
- [ ] Hover states for clickable areas
- [ ] Cursor changes to indicate interactivity

**Manual Verification**:
```bash
npm run dev
# Drag file over zone (should see visual change)
# Drag file away (should return to normal)
# Drop file (should show feedback)
```

**Pass Criteria**: Clear visual feedback at each stage

---

### Task 5: Create file preview card showing filename, size, and page count

**Test Criteria**:
- [ ] Preview card component created
- [ ] Shows filename (truncated if too long)
- [ ] Shows file size in human-readable format (MB, KB)
- [ ] Shows page count after PDF is parsed
- [ ] Preview includes thumbnail or icon
- [ ] Card is visually distinct and well-styled

**Manual Verification**:
```bash
npm run dev
# Upload PDF
# Verify: Card shows "document.pdf", "2.5 MB", "15 pages"
```

**Pass Criteria**: All metadata displayed correctly

---

### Task 6: Add error handling for invalid files

**Test Criteria**:
- [ ] Corrupted PDF shows error message
- [ ] Password-protected PDF shows specific error
- [ ] Empty file shows error
- [ ] Network errors (if any) handled gracefully
- [ ] Error messages include recovery instructions
- [ ] Errors don't crash the app (error boundary catches)

**Manual Verification**:
```bash
npm run dev
# Test with: corrupted.pdf, encrypted.pdf, empty.pdf
# Verify: Appropriate error message for each case
```

**Pass Criteria**: All error cases handled, app remains stable

---

### Task 7: Store uploaded file ArrayBuffer in component state

**Test Criteria**:
- [ ] File is read as ArrayBuffer
- [ ] ArrayBuffer stored in React state or context
- [ ] State updates trigger re-render
- [ ] Memory usage is reasonable (check DevTools Performance)
- [ ] Large files (20MB+) don't freeze UI

**Manual Verification**:
```bash
npm run dev
# Upload 20MB PDF
# Chrome DevTools > Performance > Memory
# Verify: File loads, no UI freeze, memory usage acceptable
```

**Pass Criteria**: File stored efficiently, UI remains responsive

---

### Task 8: Create empty state illustrations/messaging

**Test Criteria**:
- [ ] Empty state shown when no file uploaded
- [ ] Includes icon or illustration
- [ ] Includes helpful text (e.g., "Drag PDF here or click to browse")
- [ ] Visually appealing and on-brand
- [ ] Call-to-action is clear

**Manual Verification**:
```bash
npm run dev
# Initial load (no file)
# Verify: Empty state is visible, clear, inviting
```

**Pass Criteria**: Empty state is helpful and attractive

---

### Task 9: Add "Clear" and "Choose Another File" actions

**Test Criteria**:
- [ ] "Clear" button removes current file
- [ ] "Choose Another File" button triggers file picker
- [ ] Actions are clearly labeled
- [ ] Confirmation dialog for destructive actions (optional)
- [ ] State resets properly after clear

**Manual Verification**:
```bash
npm run dev
# Upload file > Click "Clear" > Verify: File removed, empty state shown
# Upload file > Click "Choose Another" > Verify: File picker opens
```

**Pass Criteria**: Actions work as expected, state managed correctly

---

### Task 10: Test with various PDF sizes and validate memory handling

**Test Criteria**:
- [ ] Small PDF (1MB, 5 pages): Loads instantly
- [ ] Medium PDF (10MB, 50 pages): Loads in <3 seconds
- [ ] Large PDF (50MB, 200 pages): Loads with progress indicator
- [ ] Memory doesn't spike > 500MB for typical PDFs
- [ ] No memory leaks (test by uploading 10 files sequentially)
- [ ] Browser doesn't crash or hang

**Manual Verification**:
```bash
npm run dev
# Chrome DevTools > Performance > Memory
# Test with: 1MB, 10MB, 50MB PDFs
# Verify: All load successfully, memory usage acceptable
```

**Pass Criteria**: Handles files up to 50MB without issues

---

## Phase 3: PDF Rendering & Viewer

### Task 1: Create `lib/pdfjs.ts` with pdf.js initialization

**Test Criteria**:
- [ ] File created: `src/lib/pdfjs.ts`
- [ ] Exports helper functions: `loadPDF()`, `getPage()`, etc.
- [ ] Properly initializes pdf.js library
- [ ] Worker configured correctly
- [ ] TypeScript types defined for return values

**Manual Verification**:
```typescript
// Can import and use:
import { loadPDF } from '@/lib/pdfjs';
const doc = await loadPDF(arrayBuffer);
```

**Pass Criteria**: Helper functions work, typed correctly

---

### Task 2: Configure pdf.js worker from CDN or local bundle

**Test Criteria**:
- [ ] Worker script URL configured
- [ ] Worker loads without CORS errors
- [ ] Network tab shows worker loaded successfully
- [ ] Worker is cached for offline use (if PWA caching enabled)
- [ ] No console warnings about worker

**Manual Verification**:
```bash
npm run dev
# Chrome DevTools > Network
# Upload PDF > Verify: Worker script loaded (e.g., pdf.worker.js)
```

**Pass Criteria**: Worker loads and functions correctly

---

### Task 3: Build `PdfViewer` component with canvas rendering

**Test Criteria**:
- [ ] Component file: `src/features/viewer/PdfViewer.tsx`
- [ ] Renders PDF page to `<canvas>` element
- [ ] Canvas dimensions match page aspect ratio
- [ ] Text is crisp and readable
- [ ] Images render correctly
- [ ] Colors match original PDF

**Manual Verification**:
```bash
npm run dev
# Upload PDF > Verify: Page renders in canvas, looks correct
```

**Pass Criteria**: PDF renders accurately in canvas

---

### Task 4: Implement page-by-page rendering at appropriate scale

**Test Criteria**:
- [ ] Each page renders independently
- [ ] Scale factor is configurable (default ~1.5x)
- [ ] High-DPI displays handled (devicePixelRatio)
- [ ] Text remains sharp at all scales
- [ ] Performance acceptable (<100ms per page)

**Manual Verification**:
```bash
npm run dev
# Upload multi-page PDF
# Verify: Each page renders clearly, no blurriness
```

**Pass Criteria**: Pages render sharply at correct scale

---

### Task 5: Add virtual scrolling/lazy loading for multi-page documents

**Test Criteria**:
- [ ] Only visible pages are rendered
- [ ] Scrolling triggers render of new pages
- [ ] Rendered pages are cached (don't re-render on scroll)
- [ ] 100-page PDF scrolls smoothly (60fps)
- [ ] Memory usage stays constant during scrolling

**Manual Verification**:
```bash
npm run dev
# Upload 100-page PDF
# Chrome DevTools > Performance
# Scroll through document > Verify: Smooth scrolling, constant memory
```

**Pass Criteria**: Virtual scrolling works, performance good

---

### Task 6: Create page navigation controls

**Test Criteria**:
- [ ] Previous page button (disabled on first page)
- [ ] Next page button (disabled on last page)
- [ ] Current page indicator (e.g., "Page 5 of 20")
- [ ] Jump to page input (validates page number)
- [ ] Keyboard shortcuts (arrow keys, page up/down)

**Manual Verification**:
```bash
npm run dev
# Upload PDF
# Test: Click prev/next, type page number, use arrow keys
# Verify: All navigation methods work
```

**Pass Criteria**: All navigation methods functional

---

### Task 7: Add zoom controls

**Test Criteria**:
- [ ] Zoom in button (+)
- [ ] Zoom out button (-)
- [ ] Fit width button
- [ ] Fit page button
- [ ] Custom zoom percentage input
- [ ] Zoom level persists across pages
- [ ] Min zoom (e.g., 25%) and max zoom (e.g., 400%) enforced

**Manual Verification**:
```bash
npm run dev
# Upload PDF
# Test: Zoom in/out, fit width, fit page, custom percentage
# Verify: All zoom modes work correctly
```

**Pass Criteria**: Zoom functionality complete and smooth

---

### Task 8: Implement loading states and progress indicators

**Test Criteria**:
- [ ] Loading spinner while PDF parses
- [ ] Progress bar for large files
- [ ] Percentage indicator (e.g., "Loading 65%")
- [ ] Skeleton loader for pages being rendered
- [ ] Loading states don't block UI completely

**Manual Verification**:
```bash
npm run dev
# Upload large PDF
# Verify: Progress indicator shows, updates smoothly
```

**Pass Criteria**: Loading feedback is clear and smooth

---

### Task 9: Add error boundaries for PDF parsing failures

**Test Criteria**:
- [ ] Error boundary component wraps PdfViewer
- [ ] Corrupted PDFs show friendly error message
- [ ] Error doesn't crash entire app
- [ ] User can recover (e.g., "Try another file" button)
- [ ] Errors logged to console for debugging

**Manual Verification**:
```bash
npm run dev
# Upload corrupted PDF
# Verify: Error message shown, app doesn't crash
```

**Pass Criteria**: Errors handled gracefully, app remains stable

---

### Task 10: Optimize canvas rendering performance

**Test Criteria**:
- [ ] First page renders in <500ms
- [ ] Subsequent pages render in <200ms
- [ ] 60fps maintained during zoom/pan
- [ ] No jank or stuttering
- [ ] Memory usage optimized (old canvases cleaned up)

**Manual Verification**:
```bash
npm run dev
# Chrome DevTools > Performance
# Record: Load PDF, scroll, zoom
# Verify: 60fps maintained, no long tasks (>50ms)
```

**Pass Criteria**: Performance meets targets, smooth experience

---

### Task 11: Test with various PDF types

**Test Criteria**:
- [ ] Text-based PDF renders correctly
- [ ] Scanned/image PDF renders correctly
- [ ] PDF with forms renders correctly
- [ ] PDF with mixed content (text + images) works
- [ ] Rotated pages display correctly
- [ ] Multi-column layouts render properly

**Manual Verification**:
```bash
# Create test suite with various PDF types
npm run dev
# Test each PDF type
# Verify: All render correctly, no errors
```

**Pass Criteria**: All PDF types supported

---

## Test Fixture Requirements

Each phase should include test PDFs:

### Phase 2-3 Fixtures:
- `test-simple.pdf` - 3 pages, text only, 500KB
- `test-large.pdf` - 50 pages, mixed content, 20MB
- `test-scanned.pdf` - Scanned document, 5 pages, 10MB
- `test-forms.pdf` - PDF with form fields
- `test-rotated.pdf` - Contains rotated pages
- `test-corrupted.pdf` - Intentionally broken PDF
- `test-encrypted.pdf` - Password-protected

### Phase 5 Fixtures (PII Detection):
- `fixture-ssn.pdf` - Contains 5+ SSNs in various formats
- `fixture-phone.pdf` - Contains 10+ phone numbers (US formats)
- `fixture-email.pdf` - Contains 8+ email addresses
- `fixture-creditcard.pdf` - Contains 6+ credit card numbers
- `fixture-dob.pdf` - Contains 10+ dates of birth
- `fixture-mixed.pdf` - Contains all PII types mixed

---

## Automated Test Commands

Once test framework is set up (Vitest recommended):

```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests (Playwright)
npm run test:e2e
```

---

## Definition of Done (DoD)

A task is complete when:

1. ✅ All test criteria pass
2. ✅ Manual verification succeeds
3. ✅ `npm run build` succeeds
4. ✅ No console errors in dev mode
5. ✅ No TypeScript errors
6. ✅ Code follows project conventions
7. ✅ INVENTORY.md updated
8. ✅ Performance requirements met

---

## Notes

- Tests should be added incrementally as features are built
- Automate tests where possible (unit, integration)
- Manual tests documented for UX/visual validation
- Performance tests use Chrome DevTools profiling
- Security tests validate privacy claims (no network calls)
