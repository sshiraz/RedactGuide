# PWA Installation Guide

This document provides instructions for testing and installing RedactGuide as a Progressive Web App.

## Prerequisites

- A modern web browser (Chrome, Edge, Safari, or Firefox)
- Local development server running

## Testing the PWA

### 1. Build the Production Version

```bash
npm run build
```

Expected output:
- Build completes in ~7-8 seconds
- Gzip sizes displayed for all assets
- Service worker and manifest generated
- Total bundle size: ~247 KB

### 2. Start the Preview Server

```bash
npm run preview
```

The app will be available at `http://localhost:4173`

### 3. Verify PWA Manifest

Open Chrome DevTools:
1. Navigate to `http://localhost:4173`
2. Open DevTools (F12 or Cmd+Option+I)
3. Go to **Application** tab
4. Select **Manifest** in the left sidebar

Verify:
- ✅ Name: "RedactGuide"
- ✅ Short name: "RedactGuide"
- ✅ Start URL: "/"
- ✅ Display: "standalone"
- ✅ Icons: 192x192 and 512x512 present
- ✅ No manifest errors shown

### 4. Verify Service Worker

In the same DevTools **Application** tab:
1. Select **Service Workers** in the left sidebar

Verify:
- ✅ Service worker registered
- ✅ Status: "activated and is running"
- ✅ Source: sw.js

### 5. Test Offline Functionality

1. In DevTools, check **Offline** checkbox under Service Workers
2. Refresh the page
3. Verify: App still loads and functions

## Installing the PWA

### Chrome / Edge (Desktop)

1. Navigate to `http://localhost:4173`
2. Look for the install icon in the address bar (⊕ or install icon)
3. Click the install icon
4. Click **Install** in the dialog
5. The app opens in a standalone window

**Alternative method:**
- Click the three-dot menu
- Select "Install RedactGuide..."

### Chrome (Android)

1. Open the app in Chrome
2. Tap the three-dot menu
3. Tap "Add to Home screen"
4. Tap "Add"
5. The app icon appears on your home screen

### Safari (iOS)

1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. The app icon appears on your home screen

### Edge (Desktop)

1. Navigate to `http://localhost:4173`
2. Click the ⊕ icon in the address bar
3. Click "Install"
4. The app installs and opens

## Verifying Installed App

After installation:

1. **Launch the app** from:
   - Desktop: Applications folder / Start menu
   - Mobile: Home screen icon

2. **Verify standalone mode:**
   - No browser address bar visible
   - No browser navigation controls
   - App runs in its own window

3. **Test functionality:**
   - Navigate between Home and Upload pages
   - All links and buttons work
   - Responsive design adapts to window size

4. **Check icon display:**
   - Desktop: App icon in taskbar/dock
   - Mobile: App icon on home screen
   - Icon should be the RedactGuide logo

## Uninstalling the PWA

### Chrome / Edge (Desktop)

1. Open the installed app
2. Click the three-dot menu (top-right)
3. Select "Uninstall RedactGuide..."
4. Click "Remove"

### Mobile

- Long-press the app icon
- Select "Remove" or "Uninstall"

## Troubleshooting

### Install button doesn't appear

- Ensure you're using HTTPS or localhost
- Check that manifest.webmanifest is loading (Network tab)
- Verify icons exist in public/ folder
- Clear browser cache and reload

### Service worker not registering

- Check browser console for errors
- Verify sw.js is being served
- Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Check that build output includes sw.js

### App doesn't work offline

- Ensure service worker is "activated"
- Check cache storage in DevTools
- Verify precache list includes all assets
- Try installing fresh after clearing cache

### Icons not displaying correctly

- Verify icons are 192x192 and 512x512 PNG files
- Check icon paths in manifest.webmanifest
- Ensure icons are in public/ folder
- Clear cache and reinstall

## Build Output Reference

Successful build should produce:

```
dist/
├── index.html (0.77 KB)
├── manifest.webmanifest (0.50 KB)
├── registerSW.js (0.13 KB)
├── sw.js (1.7 KB)
├── workbox-b833909e.js (22 KB)
├── favicon.ico
├── pwa-192x192.png
├── pwa-512x512.png
└── assets/
    ├── index-[hash].css (6.50 KB)
    └── index-[hash].js (240.41 KB)
```

## Performance Benchmarks

- Build time: <10 seconds ✅
- First load: <1 second
- Subsequent loads (with cache): <100ms
- Bundle size (gzipped): 75.73 KB
- Lighthouse PWA score: Should be 90+

## Next Steps

After verifying PWA installation works:

1. Test on multiple browsers (Chrome, Edge, Safari, Firefox)
2. Test on mobile devices (iOS and Android)
3. Verify all features work in installed app
4. Test offline functionality thoroughly
5. Check performance with Lighthouse audit
