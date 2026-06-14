---
name: award-website-builder
description: Build Awwwards-tier marketing, brand, and product sites by reusing the design tokens, code patterns, image prompts, and section templates extracted from two production-grade templates — DICH Fashion (Webflow) and Hermes Desktop (Nous Research). Use this skill whenever the user asks for a high-end brand site, marketing landing page, product launch page, fashion/tech editorial site, or any site that needs to feel "magazine-grade" or "premium." Trigger words include 杂志感, 金奖站, Awwwards, 高端品牌站, 落地页, editorial site, premium landing page, marketing site, brand site, product launch, launch page. Distilled techniques include container-query unit systems, triple-stacked canvas noise, frame overlays, animated gradient borders via mask-composite, mix-blend-mode layer stacks, scroll-driven RAF parallax, char-reveal typography, scramble text effects, and mood-based image generation.
metadata:
  derived_from:
    - DICH Fashion (https://dich-fashion.webflow.io/) — Webflow + Lenis + GSAP + SplitType + Swiper + Three.js + UnicornStudio
    - Hermes Desktop (https://hermes-agent.nousresearch.com/desktop) — Tailwind v4 + container query + self-written noise/parallax/scramble
  version: 1.0.0
  license: MIT
  compatibility: "All modern browsers (2024+). Fallbacks provided for 2019-era browsers."
---

# Award-Winning Site Builder

Build a premium, Awwwards-tier site by combining **design tokens**, **code modules**, **HTML templates**, **image prompts**, and **SVG arsenal** in a 7-phase workflow.

This skill is a complete kit. It is designed to be the **only** design reference a 2019-era AI (or a senior human) needs to ship a top-tier site in one pass.

---

## When to use this skill

**Trigger phrases** (any of these):
- "make a brand site / landing page / launch page"
- "make it feel like an Awwwards site"
- "杂志感 / 高端品牌站 / 金奖站 / 落地页"
- "editorial / magazine / premium / award-winning"
- "build something that looks like Hermes / DICH / Stripe / Vercel / Apple"

**Do not use** for: dashboards, e-commerce product listings, blog templates, internal tools. (For those, use a different pattern; this skill is for *single-page narrative sites*.)

---

## The 4 Decisions First

Before touching any code, answer these 4 questions. **Do not skip them.** Most "amateur" sites look amateur because the maker skipped these decisions.

### Decision 1 — What's the **narrative arc**?

Choose one:
- **A. Introduction** (one product, one story) — *Hermes* pattern. 1 hero + 3–4 features + footer.
- **B. Exploration** (many sections, one identity) — *DICH* pattern. Hero + many themed sections + collections.
- **C. Manifesto** (brand statement + product list) — *Apple* pattern. One big statement, then proof.
- **D. Tutorial / Walkthrough** (step-by-step) — *Stripe* pattern. Numbered steps with screenshots.

For a 1-page site, **A or C** is best. For a multi-section showcase, **B**. For an explainer, **D**.

### Decision 2 — What's the **color temperature**?

Choose one:
- **Warm** → use `DICH Pastel` or `Cinema` or `Sunset` or `Clay` palette
- **Cool** → use `Hermes Blue` or `Aurora` or `Glacier` palette
- **Neutral** → use `Ink` or `Mint` palette

See `assets/prompts/color-palettes.md` for the 9 options.

### Decision 3 — How many **fonts**?

Always exactly **4**:
1. DISPLAY (h1, h2, wordmarks)
2. SANS (body, nav, buttons)
3. MONO (eyebrows, micro-copy, code)
4. SERIF (rare: pull-quotes, decorative body) — *optional but recommended*

See `assets/prompts/typography-prompts.md` for the 6 free font sets.

### Decision 4 — What's the **motion intensity**?

Choose one:
- **High** — dich level: Lenis smooth-scroll + GSAP timeline + char-reveal + parallax everywhere
- **Medium** — Hermes level: frame overlay + noise + simple parallax + scramble hero
- **Low** — Apple level: subtle fades, no parallax, single reveal

For a launch page, **medium is the sweet spot**. For a brand showcase, **high**. For a product detail page, **low**.

---

## The 7-Phase SOP

Once the 4 decisions are made, execute in order. **Do not skip phases.**

### Phase 1 — Brief
1. One paragraph: who is the user, what is the page, what should they do.
2. The 4 decisions (above).
3. Pick one **mood** from `image-prompts.md` §0 (A, B, C, D, or E).

### Phase 2 — Tokens
1. Copy `assets/css/tokens.css` into your project.
2. Override the 5 brand colors in `:root` with your chosen palette.
3. Override `--font-display`, `--font-sans`, `--font-mono`, `--font-serif` with your chosen font set.

### Phase 3 — Layout
1. Open `assets/html/hero-patterns.html` and pick the hero pattern that matches Decision 1.
2. Copy it into your `index.html`.
3. Open `assets/html/section-patterns.html` and pick 3–5 section patterns.
4. String them together; delete the rest.

### Phase 4 — Copy
1. Write the hero headline (≤ 6 words, all caps, serif display).
2. Write the eyebrow (≤ 4 words, mono, tracked).
3. Write the body (1–2 sentences max per section).
4. Write the CTA label (2 words: "View plans", "Download", "Shop now").

### Phase 5 — Motion
1. Decide motion intensity (Decision 4).
2. For **High**: import Lenis + GSAP + ScrollTrigger + SplitType (see Appendix A).
3. For **Medium**: import the 5 JS modules from `assets/js/` (see §"JS Module Cheatsheet" below).
4. For **Low**: use only `initReveal` and CSS transitions.

### Phase 6 — Assets
1. Pick one of the 8 prompt templates from `image-prompts.md` §7.
2. Generate the 8-asset minimum set with your image model.
3. Apply the 6-step post-production pipeline (resize → color grade → grain → haze → sharpen → WebP+AVIF).
4. Drop them into the matching slots in the layout.

### Phase 7 — Self-audit
Run the 48-point self-audit at the bottom of this file. **Do not ship until all PASS.**

---

## The 12 Mandatory Sections (every award-winning site has these)

```
1.  Frame overlay            → the page is "framed" like a print
2.  Hero                     → one clear statement
3.  Eyebrow + headline       → in that order, every time
4.  Mono caption             → for data, version, license, etc.
5.  Feature row (3-col)      → capabilities
6.  Big number wall          → credibility (≥ 4 numbers)
7.  Char-reveal manifesto    → the brand statement, slow
8.  Image with caption       → editorial proof
9.  CTA cluster              → primary + secondary
10. Closing wordmark         → big "FUTURE" or "BRAND" letterform
11. Footer with version      → "v1.0 · 2026" and "MIT License"
12. Noise overlay            → film grain across everything
```

If your site is missing ≥ 3 of these, it will look "amateur." Add them.

---

## JS Module Cheatsheet

5 modules, all drop-in:

| Module | What it does | Lines | Use when |
|--------|--------------|-------|----------|
| `noise.js` | Triple-stacked canvas grain | ~80 | Always |
| `smooth-scroll.js` | rAF parallax + footer reveal + IO video | ~190 | Always (motion ≥ medium) |
| `scramble.js` | Terminal-style text reveal + OS detection | ~90 | Hero CTA |
| `scroll-parallax.js` | Per-element parallax + reveal-on-scroll | ~110 | Multi-section sites |
| `type-splitter.js` | SplitType alternative (chars/words/lines) | ~90 | Char-reveal manifesto |

All modules are zero-dependency, ESM-compatible, and have a vanilla `<script>` auto-init fallback.

**Minimum setup** (the 4 lines that get you 80% of the look):

```html
<canvas data-noise="1" style="position:fixed; inset:0; pointer-events:none;
        width:100%; height:100%; mix-blend-mode:color-dodge; z-index:101;"></canvas>
<canvas data-noise="2" style="position:fixed; inset:0; pointer-events:none;
        width:100%; height:100%; mix-blend-mode:difference; z-index:201;"></canvas>

<script type="module">
  import { initAllNoise }    from "./assets/js/noise.js";
  import { initSmoothScroll } from "./assets/js/smooth-scroll.js";
  import { initParallax, initReveal } from "./assets/js/scroll-parallax.js";
  import { splitText }        from "./assets/js/type-splitter.js";
  initAllNoise(); initSmoothScroll(); initParallax(); initReveal(); splitText();
</script>
```

That's it. 4 imports + 4 function calls = a site that looks like it took a year to build.

---

## The 19 "Irreplaceable" Techniques (from the 2 reference sites)

These are techniques that **cannot** be replaced with a simpler alternative. If a design calls for one, you MUST implement it.

| # | Technique | Source | Code location |
|---|-----------|--------|---------------|
| 1 | Container query unit system `--u = 100cqw / 2360` | Hermes | `tokens.css` line ~50 |
| 2 | `text-box-trim: trim-both` on all headings | Hermes | `base.css` |
| 3 | Triple-stacked canvas noise (3 blend modes) | Hermes | `noise.js` |
| 4 | Frame overlay (`border: var(--frame) solid var(--bg)`) | Hermes | `effects.css` |
| 5 | Animated gradient border via `mask-composite: exclude` | Hermes | `effects.css` (`.arc-border`) |
| 6 | Per-image rAF-throttled scroll parallax | Hermes | `smooth-scroll.js` |
| 7 | Scramble text reveal with OS detection | Hermes | `scramble.js` |
| 8 | Footer opacity tied to scroll-end (60vh ramp) | Hermes | `smooth-scroll.js` |
| 9 | `:has()` parent-selector for section isolation | Hermes | `base.css` / `effects.css` |
| 10 | `body:has(.theme-X) > :is(...)` for global overrides | Hermes | `tokens.css` |
| 11 | `mix-blend-mode` stack: lighten + screen + difference + multiply | Hermes | `effects.css` |
| 12 | `::selection` with brand accent | Hermes | `base.css` |
| 13 | Editorial copy: ALL CAPS, tracked mono, sans-serif body | Both | `typography-prompts.md` |
| 14 | Generous section padding (4.44em → 12.8em on mobile) | DICH | `tokens.css` |
| 15 | Lenis + GSAP ScrollTrigger for the "magazine feel" | DICH | (optional; see Appendix A) |
| 16 | Char-reveal via SplitType + GSAP stagger | DICH | `type-splitter.js` |
| 17 | Brand-color "ambient bounce" in image prompts | DICH | `image-prompts.md` |
| 18 | Multi-stage "concept totems" (3D objects) as section dividers | DICH | `svg-arsenal.md` #11–13 |
| 19 | 3D parallax on images (`transform: scale(1.22)` + translate) | Hermes | `effects.css` (`.parallax`) |

If your site uses 8+ of these, it will be in the top decile of sites shipped in 2026.

---

## 48-Point Self-Audit (run before shipping)

Copy this list, run it line-by-line, and ship only when all 48 are PASS.

### A. Visual / Aesthetic (12 checks)

- [ ] A1. Page has a frame overlay (1px+ solid border around the viewport).
- [ ] A2. At least one full-bleed image or 3D scene in the hero.
- [ ] A3. Body text max-width is between 60–75ch.
- [ ] A4. The hero text is in a display serif or unusual display sans.
- [ ] A5. All-caps is used for at least one major element.
- [ ] A6. At least one accent color appears in every section.
- [ ] A7. Images all share the same color temperature.
- [ ] A8. There is at least one section with `background: #000` or near-black.
- [ ] A9. There is at least one section with light/airy background.
- [ ] A10. There is decorative negative space (≥ 1 section is mostly empty).
- [ ] A11. Every image has a caption or surrounding text.
- [ ] A12. The page works in 4:3, 16:9, 21:9, and mobile portrait.

### B. Typography (8 checks)

- [ ] T1. Exactly 4 font families are used (one per role).
- [ ] T2. No two display headings use the same weight.
- [ ] T3. The line-height on h1 is between 0.8 and 1.0.
- [ ] T4. UPPERCASE text is tracked between 0.02 and 0.20em.
- [ ] T5. The font-size scale follows a clear ratio (1.2, 1.333, 1.5, or golden).
- [ ] T6. Numerals in any data table use `font-variant-numeric: tabular-nums`.
- [ ] T7. No text is rendered as an image.
- [ ] T8. Body text contrast ratio is ≥ 4.5:1 (WCAG AA).

### C. Color (6 checks)

- [ ] C1. The palette has exactly 5 brand colors (not 5 + N decorative).
- [ ] C2. The page uses no more than 3 colors at once in any single section.
- [ ] C3. A light and dark inversion of the palette is documented.
- [ ] C4. No color is used for two different semantic roles.
- [ ] C5. The accent color appears at most 3 times per scroll-screen.
- [ ] C6. Selection color (`::selection`) is set.

### D. Motion (8 checks)

- [ ] M1. There is a 1+ second hero animation (not a static frame).
- [ ] M2. Scroll-linked motion uses `requestAnimationFrame`, not `setInterval`.
- [ ] M3. There is at least one parallax element.
- [ ] M4. There is at least one reveal-on-scroll.
- [ ] M5. There is at least one animated decoration (e.g. the arc stroke).
- [ ] M6. Hover state is set on all clickable elements.
- [ ] M7. `prefers-reduced-motion` is respected.
- [ ] M8. No element animates more than 60 times per second.

### E. Technical (8 checks)

- [ ] E1. The site renders in 2 seconds or less on 4G.
- [ ] E2. Total JS is < 250KB gzipped.
- [ ] E3. Total CSS is < 50KB gzipped.
- [ ] E4. No layout shift (CLS < 0.05).
- [ ] E5. All images have explicit `width` and `height` attributes.
- [ ] E6. All decorative `img` have `alt=""`.
- [ ] E7. All images are in AVIF or WebP.
- [ ] E8. No external font requests block the first paint.

### F. Content (6 checks)

- [ ] F1. Headline is ≤ 8 words.
- [ ] F2. Subhead is ≤ 24 words.
- [ ] F3. Every section has a clear single sentence.
- [ ] F4. The CTA verb is in the imperative ("Download", "View", "Read").
- [ ] F5. There is a "v1.0" or version label somewhere.
- [ ] F6. There is a way to contact (email or form) in the footer.

**Score = (48 − fails) / 48 × 100.** Ship if ≥ 90.

---

## 3 Complete Worked Examples

### Example 1 — Fashion / Editorial (mood A, dich-style)

```yaml
narrative_arc:   B (Exploration)
palette:         DICH Pastel
fonts:           DICH set (T 012 + Space Grotesk + JetBrains Mono + NB Architekt)
motion:          High (Lenis + GSAP)
hero:            hero-patterns.html #2 (Pastel Magazine)
sections:        [1, 2, 3, 5, 6] from section-patterns.html
images:          8-asset Mood A set, AVIF+WebP
```

### Example 2 — AI Tool / Tech (mood B, Hermes-style)

```yaml
narrative_arc:   A (Introduction)
palette:         Hermes Blue
fonts:           Hermes set (DM Serif Display + Inter + JetBrains Mono)
motion:          Medium (5 JS modules)
hero:            hero-patterns.html #1 (Editorial Display)
sections:        [1, 2, 3, 4, 6]
images:          8-asset Mood B set
```

### Example 3 — Consumer / Lifestyle (mood D, mint pop)

```yaml
narrative_arc:   C (Manifesto)
palette:         Mint Pop
fonts:           Awwwards default (Fraunces + Inter + JetBrains Mono)
motion:          Low (reveal only)
hero:            hero-patterns.html #4 (3D Cosmic) — re-themed
sections:        [3, 4, 5, 6]
images:          8-asset Mood D set
```

---

## Quick-reference: 5 files you'll always need

```
tokens.css            (3KB)   design tokens
base.css              (7KB)   reset + baseline
effects.css           (11KB)  frame, noise CSS, arc, parallax
index.html            (use one of the 6 hero patterns)
<one JS module>       (~3KB each)
```

That's a 25KB front-end. Add 8 generated images (avg 80KB each = 640KB) = 665KB total. Less than a single YouTube thumbnail. Yet it will render like a 6-month project.

---

## The 10 Things That Always Go Wrong (avoid these)

1. **Skipping the brief** — building without the 4 decisions → the site wanders.
2. **Too many fonts** — 4 is the rule. 5+ looks like a sample.
3. **Image without color grade** — your 8 generated images will look like 8 different photographers. Apply the same grade.
4. **Text in the image** — text always goes in CSS. Image-rendered text is unmaintainable.
5. **Missing frame overlay** — without it, the site looks like a WordPress template.
6. **No accent rhythm** — accent color used 50 times = none of it pops. Use it 3 times per screen max.
7. **Animating without `will-change`** — causes jank. Add it.
8. **Tailwind for everything** — Tailwind is great for layout, terrible for editorial typography. Use this skill's `effects.css` for the editorial layer.
9. **Copy that explains** — copy that says "we are the leading..." loses. Copy that says "Download." wins.
10. **No "v1.0" or version** — feels unfinished. A version label is the cheapest "designed" signal.

---

## Compatibility matrix

| Technique | Required | Fallback |
|-----------|----------|----------|
| Container queries | `--u = 100cqw / 2360` | `vw` (in `base.css`) |
| `color-mix()` | brand color hover states | hard-coded hex |
| `dvh` | mobile hero height | `vh` (CSS fallback) |
| `mix-blend-mode` | arc, parallax, video | `opacity` (less rich) |
| `:has()` | section isolation | JS-side class swap |
| `text-box-trim` | tight line-heights | `line-height: 0.95` instead of 0.88 |
| AVIF images | 30% smaller | WebP fallback (already used) |

**All 6 modern features have been in baseline since 2023.** A 2019-era AI may need the fallback, but a 2026 browser will render the full effect.

---

## The 1-line summary

> A premium site is **bold colors + large display serif + char-reveal + triple-stack noise + frame overlay + scroll-driven parallax + 8 color-graded images + 4 well-chosen fonts**. Nothing more. This skill gives you all 8 in copy-paste form.

---

## Appendix A — When you really do need GSAP

For 4-5% of sites (long-form narrative, scroll-driven storytelling, video sync), the `scroll-parallax.js` module isn't enough. Use GSAP + ScrollTrigger + Lenis:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1.3.1/dist/lenis.css">
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.1/dist/lenis.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  // Pin a section for 200vh of scroll
  gsap.to(".parallax-section", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // Char-reveal a heading
  document.querySelectorAll("[data-split='chars']").forEach((h) => {
    const chars = h.textContent.split("");
    h.innerHTML = chars.map((c) => `<span class="char">${c}</span>`).join("");
    gsap.from(h.querySelectorAll(".char"), {
      y: 40, opacity: 0, stagger: 0.02, duration: 0.8,
      scrollTrigger: { trigger: h, start: "top 80%" },
    });
  });
</script>
```

This is what dich-fashion.webflow.io does. Use it for **story-driven** single-page sites. For everything else, use this skill's zero-dep modules.

---

## Appendix B — License and attribution

- **DICH Fashion** site: © DICH. The *techniques* (Lenis + GSAP + SplitType + char-reveal) are public-knowledge patterns. We do not redistribute their images, fonts, or text.
- **Hermes Desktop** site: © Nous Research. Same caveat. We do not redistribute their images, fonts, or text.
- **All assets in this skill** are MIT-licensed and original to this skill.
- **All prompts** in `image-prompts.md` are original.

This skill teaches **patterns**, not content. You bring your own brand, copy, and images.

---

## Appendix C — Changelog

### 1.0.0 (2026-06-14)
- Initial release. Distilled from DICH Fashion + Hermes Desktop.
- 3 CSS files (tokens, base, effects) — 21KB total.
- 5 JS modules (noise, smooth-scroll, scramble, scroll-parallax, type-splitter) — ~700 LOC.
- 6 hero patterns + 6 section patterns.
- 9 color palettes, 6 font sets, 32 SVG elements.
- 48-point self-audit.
