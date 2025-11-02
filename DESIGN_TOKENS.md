# Design System Tokens

This document defines the design tokens used throughout RedactGuide for consistent styling.

## Color Palette

### Primary (Blue)
Main brand color for CTAs, links, and interactive elements.
- `primary-50` to `primary-950`: Full blue scale from lightest to darkest
- Primary action buttons: `bg-primary-600 hover:bg-primary-500`
- Active states: `text-primary-600`
- Backgrounds: `bg-primary-50`

### Neutral (Gray)
Used for text, backgrounds, borders, and neutral UI elements.
- `neutral-50` to `neutral-950`: Full gray scale
- Body text: `text-neutral-700` (light) / `text-neutral-300` (dark)
- Borders: `border-neutral-200` / `border-neutral-300`
- Backgrounds: `bg-neutral-50` / `bg-neutral-100`

### Success (Green)
Used for positive feedback, confirmations, and success states.
- `success-50` to `success-900`: Green scale
- Success messages: `bg-success-50 text-success-700`
- Success icons: `text-success-500`

### Warning (Amber/Orange)
Used for warnings, cautions, and important notices.
- `warning-50` to `warning-900`: Amber scale
- Warning messages: `bg-warning-50 text-warning-700`
- Warning icons: `text-warning-500`

### Error (Red)
Used for errors, validation failures, and destructive actions.
- `error-50` to `error-900`: Red scale
- Error messages: `bg-error-50 text-error-700`
- Error icons: `text-error-500`

## Typography

### Font Family
- Primary: Inter (system fallback to -apple-system, Segoe UI, Roboto)
- Applied as: `font-sans` (default)

### Font Sizes with Line Heights
- `text-xs`: 12px / 16px
- `text-sm`: 14px / 20px
- `text-base`: 16px / 24px (body text default)
- `text-lg`: 18px / 28px
- `text-xl`: 20px / 28px
- `text-2xl`: 24px / 32px (section headings)
- `text-3xl`: 30px / 36px (page headings)
- `text-4xl`: 36px / 40px
- `text-5xl`: 48px / 48px (hero text)
- `text-6xl`: 60px / 60px

### Font Weights
- `font-normal`: 400 (body text)
- `font-medium`: 500 (emphasized text)
- `font-semibold`: 600 (buttons, labels)
- `font-bold`: 700 (headings)

## Spacing

Using 8px base grid system (Tailwind's default + custom values).

### Custom Spacing
- `18`: 4.5rem (72px)
- `22`: 5.5rem (88px)
- `26`: 6.5rem (104px)
- `30`: 7.5rem (120px)

### Common Patterns
- Component padding: `p-4` (16px) / `p-6` (24px) / `p-8` (32px)
- Section spacing: `py-12` (48px) / `py-16` (64px) / `py-24` (96px)
- Element gaps: `gap-4` (16px) / `gap-6` (24px) / `gap-8` (32px)

## Shadows

### Soft Shadow
`shadow-soft`: Subtle elevation for cards and containers
- `0 2px 8px 0 rgba(0, 0, 0, 0.05)`

### Medium Shadow
`shadow-medium`: Standard elevation for interactive elements
- `0 4px 16px 0 rgba(0, 0, 0, 0.08)`

### Large Shadow
`shadow-large`: High elevation for modals and dropdowns
- `0 8px 24px 0 rgba(0, 0, 0, 0.12)`

## Component Patterns

### Buttons
```
Primary: bg-primary-600 text-white hover:bg-primary-500
Secondary: bg-neutral-200 text-neutral-900 hover:bg-neutral-300
Destructive: bg-error-600 text-white hover:bg-error-500
```

### Cards
```
Container: bg-white border border-neutral-200 rounded-lg p-6 shadow-soft
Hover: hover:shadow-medium transition-shadow
```

### Form Inputs
```
Base: border border-neutral-300 rounded-md px-4 py-2
Focus: focus:border-primary-500 focus:ring-2 focus:ring-primary-200
Error: border-error-500 focus:border-error-500 focus:ring-error-200
```

### Links
```
Primary: text-primary-600 hover:text-primary-700
Underlined: underline decoration-primary-200 hover:decoration-primary-400
```

## Responsive Breakpoints

Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Usage Guidelines

1. **Always use design tokens** instead of arbitrary values
2. **Prefer semantic naming**: Use `primary` instead of `blue`
3. **Maintain contrast ratios**: Minimum 4.5:1 for text
4. **Use spacing consistently**: Stick to 8px grid
5. **Limit color usage**: 2-3 colors per component maximum

## Migration Notes

Current components use Tailwind's default blue/gray colors. These are compatible with our custom tokens as they use the same scale structure.
