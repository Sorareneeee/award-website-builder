# assets/icons/ — SVG Arsenal

30+ inline SVG elements, all `currentColor`-themed. Copy-paste the `<svg>` block directly into your markup — no external dependencies.

## Files

| File | Contents |
|------|----------|
| `svg-arsenal.md` | 30+ SVGs across 5 categories: glyphs, decorative shapes, loading, atmospheric, decorative text |

## The 5 categories

### I. Iconic glyphs (1em, 24×24)

For buttons, nav, status indicators. Sized via font-size.

- Arrow right, Square frame, Apple, Windows, Linux
- Discord, GitHub
- Plus / Close
- Play / Pause / Chevron down

### II. Decorative shapes (large, 40–200px)

For section backgrounds, side ornaments, "X" markers.

- Big X, Big Circle, Dashed Circle, Concentric Circles
- Corner Bracket, Crosshair
- Half-Circle, Inverted Half-Circle, Stripe

### III. Loading + state (24×24)

For spinners, "done" / "warning" UI.

- 3-dot spinner, Arc spinner
- Checkmark, Exclamation

### IV. Big atmospheric (full-bleed)

For section backgrounds, hero plates.

- Soft cloud blob, Noise-textured rectangle
- Speed lines, Faux barcode
- Crosshatch, Dot grid, Polar grid
- Sound-wave bars

### V. Decorative pseudo-text

For section dividers, background texture.

- Ghost bar
- Decorative arrow path

## How to color

All SVGs use `currentColor`. Set color via CSS:

```css
.deco-blue    { color: var(--color-brand); }
.deco-accent  { color: var(--color-accent); }
.deco-paper   { color: var(--color-paper); }
```

For two-tone:

```html
<svg viewBox="0 0 24 24" style="color: var(--color-brand);">
  <path fill="currentColor" d="..."/>            <!-- main color -->
  <path fill="var(--color-accent)" d="..."/>      <!-- accent override -->
</svg>
```

## Sizing

For 1em glyphs (icons):
```css
.icon { width: 1em; height: 1em; flex-shrink: 0; }
```

For full-bleed decorations:
```css
.bleed { width: 100%; height: auto; }
```

## When to use a raster image instead

- **Photos** (realistic) → AVIF + WebP, never SVG
- **Screenshots** → PNG, never SVG
- **Long text rendered as graphic** → PNG, never SVG
- **Decorative blurs / blobbies** → SVG is fine

## Free SVG icon sources (in order of preference)

1. **Lucide** (https://lucide.dev) — MIT, 1,500+ icons, 24×24 stroke
2. **Phosphor Icons** (https://phosphoricons.com) — MIT, 7,000+ icons, 6 weights
3. **Heroicons** (https://heroicons.com) — MIT, 300+ icons
4. **SVGRepo** (https://svgrepo.com) — CC0, 500K+ decorative SVGs

When you need an icon not in the arsenal, check Lucide first.
