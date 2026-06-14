---
name: 🎨 New pattern submission
about: Submit a new hero, section, palette, or font set
title: "[pattern] "
labels: ["pattern", "needs-review"]
assignees: []
---

## Type of pattern

- [ ] Hero (`assets/html/hero-patterns.html`)
- [ ] Section (`assets/html/section-patterns.html`)
- [ ] Color palette (`assets/prompts/color-palettes.md`)
- [ ] Font set (`assets/prompts/typography-prompts.md`)
- [ ] SVG element (`assets/icons/svg-arsenal.md`)

## Mood / category

<!-- Which mood does this fit? A (retro-futurist editorial) / B (brutalist editorial) / C (cinematic dark) / D (mint soft pop) / E (aurora cosmic) -->

## Reference site (optional)

<!-- If you saw this pattern in the wild, link to it. -->

## Sketch / mockup

```
┌────────────────────────┐
│                        │
│   [   image / art   ]   │
│                        │
│   HEADLINE             │
│   body text            │
│                        │
└────────────────────────┘
```

## Color palette

<!-- Hex values for the 5 brand colors -->

- `--color-brand`: `#______`
- `--color-paper`: `#______`
- `--color-fg`:    `#______`
- `--color-accent`:`#______`
- `--color-ink`:   `#______`

## Fonts (if applicable)

- Display: `____`
- Sans: `____`
- Mono: `____`
- Serif: `____`

## Code snippet

<!-- Paste the relevant HTML / CSS / JS here. -->

```html
<!-- ... -->
```

## Self-audit

<!-- Run the 48-point self-audit and confirm ≥ 90 score. -->

- [ ] Visual (12): ______/12
- [ ] Typography (8): ______/8
- [ ] Color (6): ______/6
- [ ] Motion (8): ______/8
- [ ] Technical (8): ______/8
- [ ] Content (6): ______/6
- **Total: ______/48**

## Checklist

- [ ] I tested the pattern in Chrome, Firefox, and Safari
- [ ] I included both `<picture>` (AVIF + WebP) for any images
- [ ] All colors use `var(--*)`, not raw hex
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px, 1920px
