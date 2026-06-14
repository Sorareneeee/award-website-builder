# assets/css/ — Design tokens, reset, and effects

3 files. Total ~22KB. All in plain CSS, zero dependencies, works in every modern browser (2017+).

## Files

| File | Size | Purpose |
|------|------|---------|
| `tokens.css` | 4.5 KB | Design tokens (colors, fonts, spacing, motion) + 9 theme presets |
| `base.css` | 7 KB | Modern reset + typographic baseline + 2019 fallbacks |
| `effects.css` | 11 KB | Frame overlay, vignette, noise CSS, arc border, parallax, reveal |

## Load order (mandatory)

```html
<link rel="stylesheet" href="assets/css/tokens.css">   <!-- must be first -->
<link rel="stylesheet" href="assets/css/base.css">     <!-- depends on tokens -->
<link rel="stylesheet" href="assets/css/effects.css">  <!-- depends on base -->
```

## Override the brand palette

In `tokens.css`, the `:root` block defines 5 brand colors. To re-skin your site, change these 5 values:

```css
:root {
  --color-brand:  #0000f2;   /* main background */
  --color-paper:  #ffffff;   /* card / section surfaces */
  --color-fg:     #f5f5f5;   /* text on brand */
  --color-accent: #edff45;   /* highlights, links, CTAs */
  --color-ink:    #170d02;   /* near-black for contrast */
}
```

For a complete re-theme, also pick one of the **9 theme presets** at the bottom of `tokens.css` and apply the wrapper class:

```html
<body class="theme-aurora">     <!-- blue/purple cosmic look -->
<body class="theme-warm">       <!-- dich-style pastel pink -->
<body class="theme-cinema">     <!-- oxblood + cinema gold -->
<body class="theme-mint">       <!-- mint + hot pink -->
<!-- ... 6 more ... -->
```

## The container query unit `--u`

Hermes' signature trick. All spacing/sizing is a multiple of one base unit derived from the element's own width.

```css
.my-section {
  container-type: inline-size;   /* turn the element into a container */
  --u: calc(100cqw / 2360);      /* 1 unit = 1px at 2360px width */
  padding: calc(30 * var(--u));  /* 30u ≈ 30px at 2360px */
}
```

At any smaller width, `--u` shrinks proportionally and `padding` follows. No `@media` queries needed.

## The 5 "irreplaceable" effects

| Effect | CSS class | Source |
|--------|-----------|--------|
| Frame overlay | `.frame-overlay` | Hermes |
| Vignette | `.vignette` | Hermes |
| Tiled noise (PNG fallback) | `.noise-tiled` | Hermes |
| Animated gradient border | `.arc-border` | Hermes |
| Parallax image | `.parallax` | Both |
| Parallax panel | `.parallax-panel` | Hermes |
| Decorative ghost text | `.ghost-text` | Hermes |
| Char/word reveal helpers | `.reveal` `.reveal-stagger` | — |
| Section rhythm | `.section` | DICH |
| Card glass | `.card-glass` | — |
| Marquee row | `.marquee` | DICH |
| Eyebrow label | `.eyebrow` | Both |
| Mono CAPS body | `.body-mono` | Hermes |

## Browser support

- All 3 files use modern CSS (container queries, color-mix, :has, dvh) with `@supports not (...)` fallbacks for 2019-era browsers.
- 19-year browsers will render the design correctly but lose the smoothest details (parallax, container queries).
- See `base.css` §8 for the full fallback block.

## The "minimum viable" pattern

For a 30-second start, paste this into your `<head>`:

```html
<link rel="stylesheet" href="assets/css/tokens.css">
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/effects.css">
```

Then any HTML using `var(--color-*)` / `var(--u)` / `var(--space-*)` / `.frame-overlay` / `.parallax` / `.arc-border` will work.
