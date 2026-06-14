# Typography Recipes — Pairing for Award-Winning Sites

> Source references: DICH Fashion (6 fonts) and Hermes Desktop (4 fonts). Both sites use the same 4-role architecture; what differs is the *specific family in each role*. This document lets you swap families without breaking the visual logic.

---

## 0. The 4 roles (universal)

Every premium site needs exactly 4 typographic roles. Re-using a font for 2+ roles is the #1 reason sites look "amateur."

| Role | Purpose | Common weight | Common style | Casing | Tracking |
|------|---------|---------------|--------------|--------|----------|
| **DISPLAY** | h1, h2, wordmarks, hero text | 300–500 (light/regular) | Serif, Display, or Geometric | UPPERCASE (premium look) | 0.02–0.05em |
| **SANS** | body, links, nav, buttons | 400 / 700 | Grotesque or Geometric | sentence case | 0 |
| **MONO** | eyebrows, micro-copy, code, data | 400 / 700 | Mono | UPPERCASE | 0.08–0.18em |
| **SECONDARY** (rare) | quotes, captions, decorative body | 400 | Serif or Display | mixed | 0–0.02em |

**Rule**: NEVER use a font in 2+ roles. Each role gets its own family.

---

## 1. The 6 free "Hero" sets (DICH's recipe + 5 alternatives)

### 1.1 DICH set (retro-futurist editorial)
Best for: fashion, art, music, beauty, lifestyle.

```css
--font-display:   "T 012", "Bodoni Moda", "Playfair Display", serif;
--font-sans:      "Space Grotesk", "Inter", sans-serif;
--font-mono:      "JetBrains Mono", "Courier Prime", monospace;
--font-serif:     "NB Architekt Std", "Spectral", "EB Garamond", serif;
```
* `T 012` is a paid foundry font. Free alternatives: **Bodoni Moda** (Google Fonts), **Playfair Display**.

### 1.2 Hermes set (brutalist editorial)
Best for: tech, AI, fintech, dev-tools, "credibility" brands.

```css
--font-display:   "Sigurd Variable", "DM Serif Display", "Cormorant Garamond", serif;
--font-sans:      "Inter", "Geist", "Söhne", sans-serif;
--font-mono:      "Courier Prime", "JetBrains Mono", monospace;
--font-serif:     "EB Garamond", "Lora", serif;
```
* Sigurd is paid. Free: **DM Serif Display** (Google Fonts), **Cormorant** (Google Fonts).
* Hermes uses Sigurd as light/regular variable — any serif with weight 300–500 works.

### 1.3 The "Awwwards default" set
Best for: agency portfolios, design studios, art.

```css
--font-display:   "Fraunces", "Söhne Breit", "Migra", serif;
--font-sans:      "Söhne", "Inter", "GT Walsheim", sans-serif;
--font-mono:      "Söhne Mono", "JetBrains Mono", monospace;
--font-serif:     "Fraunces", "EB Garamond", serif;
```
* **Fraunces** is free on Google Fonts and ships with optical size + soft + wonky variants.

### 1.4 The "Helvetica post-digital" set
Best for: 2026-era SaaS, productivity tools.

```css
--font-display:   "Neue Haas Grotesk", "Inter Display", sans-serif;
--font-sans:      "Neue Haas Grotesk", "Inter", sans-serif;
--font-mono:      "JetBrains Mono", monospace;
--font-serif:     (drop the serif role entirely)
```
* 3 fonts only. Drop the 4th role. Modern Apple-style restraint.

### 1.5 The "indie magazine" set
Best for: editorial, journalism, newsletter brands.

```css
--font-display:   "GT Sectra", "Lora", "Newsreader", serif;
--font-sans:      "GT America", "Söhne", "Inter", sans-serif;
--font-mono:      "GT America Mono", "JetBrains Mono", monospace;
--font-serif:     "GT Sectra", "Newsreader", serif;
```
* **Newsreader** is a free Google Fonts serif designed for body text — pairs beautifully with Inter for sans.

### 1.6 The "Web3 / Web4" set
Best for: crypto, AI agents, autonomous-tool brands.

```css
--font-display:   "PP Editorial New", "Fraunces", serif;
--font-sans:      "Satoshi", "Inter", sans-serif;
--font-mono:      "Geist Mono", "JetBrains Mono", monospace;
--font-serif:     "PP Editorial New", serif;
```
* Pair grotesque sans with high-contrast display serif for "tech + craft" feel.

---

## 2. How to pick the set

```
Q1: Is the brand a tool, a content site, or a product?
    TOOL    → 1.2 (Hermes) or 1.4 (Helvetica)
    CONTENT → 1.3 (Awwwards default) or 1.5 (indie magazine)
    PRODUCT → 1.1 (DICH) or 1.6 (Web3)

Q2: Does the brand have a "voice" or a "look"?
    VOICE-led (writing is the product) → 1.5 (indie magazine)
    LOOK-led (image is the product)    → 1.1 (DICH) or 1.3 (Awwwards)

Q3: Is the user 35+ or under 30?
    35+     → serif display (1.1, 1.2, 1.3, 1.5)
    Under 30 → sans display or unusual (1.4, 1.6)
```

If you can answer "Hermes / DICH / Awwwards / Stripe" — pick 1.2.
If you can answer "Vogue / i-D / Acne" — pick 1.1.
If you can answer "The Verge / Substack / Are.na" — pick 1.5.

---

## 3. Type scale (the 4-5-6 rule)

Pick **one** of these scales. Don't mix.

### Scale 1 — Hermes (giant)
For: hero-driven single-page sites
```css
--text-eyebrow:  0.875rem;   /* 14px */
--text-body:     1.0625rem;  /* 17px */
--text-h3:       2.5rem;     /* 40px */
--text-h2:       4rem;       /* 64px */
--text-h1:       8.25rem;    /* 132px */
--text-display:  7rem;       /* 112px (capped) */
```

### Scale 2 — DICH (modular, 1.333 ratio)
For: multi-section fashion / editorial
```css
--text-eyebrow:  0.875rem;   /* 14px */
--text-body:     1rem;       /* 16px */
--text-h3:       1.75rem;    /* 28px */
--text-h2:       2.5rem;     /* 40px */
--text-h1:       4.5rem;     /* 72px */
--text-display:  8rem;       /* 128px (clamp) */
```

### Scale 3 — Awwwards (fluid, clamp-based)
For: any modern site
```css
--text-eyebrow:  clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
--text-body:     clamp(0.95rem, 0.9rem + 0.3vw, 1.0625rem);
--text-h3:       clamp(1.5rem, 1.3rem + 1vw, 2.25rem);
--text-h2:       clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
--text-h1:       clamp(2.5rem, 1.5rem + 5vw, 6.5rem);
--text-display:  clamp(4rem, 2rem + 12vw, 11rem);
```

---

## 4. Weight pairing matrix

The weight *contrast* between roles is what creates the editorial feel.

| Site type | DISPLAY | SANS | MONO | Contrast |
|-----------|---------|------|------|----------|
| Editorial fashion | 300 (light) | 400 | 400 | high |
| Brutalist tech | 300 (light) | 800 (extrabold) | 400 | extreme |
| Indie magazine | 400 (regular) | 400 | 400 | low |
| Apple / SaaS | 500 (medium) | 400 | 400 | low |

**Rule**: at least one role MUST be at 800+ or 300-. The contrast makes the system.

---

## 5. Tracking (letter-spacing) recipes

| Element | Tracking | Notes |
|---------|----------|-------|
| UPPERCASE h1 (display) | 0.02–0.05em | Tight, premium |
| UPPERCASE h2 (display) | 0.03em | Hermes' value |
| UPPERCASE mono eyebrow | 0.10–0.20em | Loosest; reads as "label" |
| sentence body | 0 | Default |
| Button label | 0.02–0.05em | Slight open-up |
| Nav link | 0.01em | Almost imperceptible |

**Critical**: tracking is a multiplier. -1% is invisible. +5% is dramatic. Don't be timid.

---

## 6. The `text-box-trim` trick (Hermes' subtle win)

```css
h1, h2, h3, h4, h5, h6 {
  text-box-edge: cap alphabetic;
  text-box-trim: trim-both;
}
```

This trims the line-box to fit the cap height + baseline, removing extra leading that web fonts add. **Result**: `line-height: 0.8` works as expected on actual glyphs, not on white space. (Safari TP, Chrome 2024+. Fallback: just use a slightly larger `line-height` in the same effect.)

---

## 7. Number formatting (the hidden win)

Premium sites always format numbers the same way:
- Use **`font-variant-numeric: tabular-nums`** for all data tables and big counter numbers
- Use **`text-align: right`** with `font-variant-numeric: tabular-nums` for the right column of any table
- Use **`font-feature-settings: "ss01", "cv01"`** to enable contextual alternates (the `g` with a closed tail, the `l` with a hooked foot — most modern fonts ship 2–4 of these)

```css
.tabular { font-variant-numeric: tabular-nums; }
.contextual { font-feature-settings: "ss01", "cv01", "cv11"; }
```

---

## 8. Loading strategy (no FOIT, no FOUT)

```html
<!-- Preconnect to the font CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load the CSS, async -->
<link rel="preload" as="style"
      href="https://fonts.googleapis.com/css2?family=...&display=swap">
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=...&display=swap"
      media="print" onload="this.media='all'">
```

`display=swap` lets the browser use the fallback font immediately, then swap in the webfont when ready. For maximum reliability, host the woff2 yourself (Hermes' strategy):

```html
<!-- Self-host, optional for hero font -->
@font-face {
  font-family: "Display";
  src: url("/fonts/display.woff2") format("woff2");
  font-display: optional;   /* show fallback if not cached */
  font-weight: 300 800;
  unicode-range: U+0000-00FF;
}
```

`font-display: optional` for the display font (no FOUT, but no FOIT either — show nothing if not cached within 100ms); `font-display: swap` for sans and mono (fallback is usually fine, swap is safe).

---

## 9. Sub-role: the "quote" font (rare but powerful)

One additional role, only for sites that publish long-form copy:
**QUOTE**: a contrasting serif used for pull-quotes only. Different family from `font-serif`. Example:

```css
--font-quote: "GT Super", "Newsreader", serif;
/* Used only for <blockquote> and <q>; never for body or headings */
```

This is the editorial trick: the pull-quote is the ONE place on the site that uses a third serif, making it stand out.

---

## 10. The 4 anti-patterns (don't do these)

1. **Two sans serifs in the same family weight** — looks like a mistake. Always pair sans + serif.
2. **Same font in display + body** — looks like a Word document. Always 2 distinct families.
3. **Italic body text in 2026** — opt for a serif fallback or a different weight.
4. **Long-line body text (60+ chars)** — line-length cap at 65ch for legibility. Hermes hits 70ch; DICH hits 80ch. Premium sites average 60ch.

---

## 11. Decision tree (one-page cheat)

```
Need a "tech credibility" site?      → 1.2 (Hermes) + Scale 1
Need a "fashion editorial" site?     → 1.1 (DICH) + Scale 2
Need a "design studio" site?          → 1.3 (Awwwards) + Scale 3
Need a "modern SaaS" site?            → 1.4 (Helvetica) + Scale 3
Need a "long-form writing" site?      → 1.5 (indie magazine) + Scale 2
Need a "Web3 / AI agent" site?       → 1.6 (Web3) + Scale 1
```

Once you've picked, **do not** tweak the scale or the family. The whole point of the recipes is that they're complete systems.
