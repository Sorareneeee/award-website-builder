---
name: award-website-builder
description: Build Awwwards-tier marketing, brand, and product sites by reusing the design tokens, code patterns, image prompts, and section templates extracted from two production-grade templates — DICH Fashion (Webflow) and Hermes Desktop (Nous Research). Use this skill whenever the user asks for a high-end brand site, marketing landing page, product launch page, fashion/tech editorial site, or any site that needs to feel "magazine-grade" or "premium." Trigger words include 杂志感, 金奖站, Awwwards, 高端品牌站, 落地页, editorial site, premium landing page, marketing site, brand site, product launch, launch page. Distilled techniques include container-query unit systems, atmospheric haze layers, frame overlays, animated gradient borders via mask-composite, mix-blend-mode layer stacks, scroll-driven RAF parallax, char-reveal typography, scramble text effects, and mood-based image generation.
metadata:
  derived_from:
    - DICH Fashion (https://dich-fashion.webflow.io/) — Webflow + Lenis + GSAP + SplitType + Swiper + Three.js + UnicornStudio
    - Hermes Desktop (https://hermes-agent.nousresearch.com/desktop) — Tailwind v4 + container query + self-written noise/parallax/scramble
  version: 1.1.0
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

**Do not use** for: dashboards, e-commerce product listings, blog templates, internal tools. (For those, use a different pattern; this skill is for *single-page narrative sites*).

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

The default font stack in `tokens.css` uses commercial faces (Sigurd, T 012, Mondwest, NB Architekt) — those are placeholders. For real projects, swap to the **free Google Fonts** mapped in `assets/prompts/free-fonts.md`. That file gives you 4 ready-to-paste stacks that match each palette's mood.

See `assets/prompts/typography-prompts.md` for the 6 commercial font sets (if you have licenses).

### Decision 4 — What's the **motion intensity**?

Choose one:
- **High** — dich level: Lenis smooth-scroll + GSAP timeline + char-reveal + parallax everywhere
- **Medium** — Hermes level: frame overlay + haze + simple parallax + scramble hero
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
3. Override `--font-display`, `--font-sans`, `--font-mono`, `--font-serif` with your chosen font set. **Default to the free Google Fonts stacks** in `assets/prompts/free-fonts.md` unless you have licenses for the commercial ones.

### Phase 3 — Layout
1. Open `assets/html/hero-patterns.html` and pick the hero pattern that matches Decision 1.
2. Copy it into your `index.html`.
3. Open `assets/html/section-patterns.html` and pick 3–5 section patterns.
4. String them together; delete the rest.

### Phase 4 — Copy
1. Write the hero headline (≤ 8 words; prefer 2–6 for impact). The display role is set to `text-wrap: balance` in `base.css`, so the browser picks line breaks based on the h1's `max-width` and the viewport. **Never use `<br>` to force a break** — see "Headline wrap policy" below.
2. Write the eyebrow (≤ 4 words, mono, tracked).
3. Write the body (1–2 sentences max per section).
4. Write the CTA label (2 words: "View plans", "Download", "Shop now").

#### Headline wrap policy (since 1.1.0)

**Don't write `<br>` inside an h1.** The hero templates in `hero-patterns.html` use a plain string + `max-width: 14ch` + `text-wrap: balance` (from `base.css`). The browser picks the breaks itself, so a single template works for both short slogans ("Fast. Cheap. Done.") and longer value props ("The coding agent that lives in your terminal.") without re-laying out the page or overflowing the viewport.

Concretely:

```html
<!-- WRONG (1.0.0 pattern, hard-coded line count) -->
<h1>The Agent<br>That Grows<br>With You</h1>

<!-- RIGHT (1.1.0 pattern, soft wraps) -->
<h1 class="display hero-title" style="font-size:var(--text-h1);">The agent that grows with you</h1>
```

With `text-wrap: balance` and a `max-width` of 12–16ch, the browser will wrap to 2 or 3 lines depending on viewport width. On 1440px desktop it might be 2 lines, on a phone it might be 4 — both look intentional, neither overflows.

If you absolutely need a forced break (e.g. for a deliberate typographic flourish like a one-word-on-its-own-line cliffhanger), use `<br>` *and* a comment explaining why. Otherwise: leave it to the browser.

### Phase 5 — Motion
1. Decide motion intensity (Decision 4).
2. For **High**: import Lenis + GSAP + ScrollTrigger + SplitType (see Appendix A).
3. For **Medium**: import the 4 working JS modules from `assets/js/` (see §"JS Module Cheatsheet" below).
4. For **Low**: use only `initReveal` and CSS transitions.

### Phase 6 — Atmosphere
1. **Haze (recommended)**: copy the `.haze` block from `assets/css/effects.css` §15 and the four `<span class="haze__blob">` from this repo's worked examples. 4 large blurred radial gradients, drifting on CSS keyframes, parallaxing on scroll. Looks like the page is being viewed through frosted glass.
2. *Or* pick one of the 8 prompt templates from `image-prompts.md` §7 and generate the 8-asset image set. Apply the 6-step post-production pipeline (resize → color grade → grain → haze → sharpen → WebP+AVIF).

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
12. Atmospheric haze         → large blurred gradient blobs that drift
```

If your site is missing ≥ 3 of these, it will look "amateur." Add them.

**§12 update:** the original skill shipped with a triple-stacked canvas noise overlay. That has been replaced by the **haze mode** (CSS-only blurred radial gradients) because:
- noise.js shipped as a no-op in 1.0.0 and looked like TV static when re-enabled
- haze is GPU-composited (no per-frame JS work)
- haze gives the same "atmospheric texture" the reference sites achieve, with a calmer result
- `<canvas data-noise>` markup still works as a no-op (initAllNoise hides the canvases), so older projects don't break

If you specifically want film grain instead of haze, see Appendix E.

---

## JS Module Cheatsheet

**4 working modules** + 1 no-op (kept for API compatibility):

| Module | What it does | Lines | Use when |
|--------|--------------|-------|----------|
| `noise.js` | **No-op in 1.1.0.** See Appendix E if you want grain. | ~50 | (deprecated) |
| `smooth-scroll.js` | rAF parallax + footer reveal + IO video + **haze parallax sink** | ~210 | Always (motion ≥ medium) |
| `scramble.js` | Terminal-style text reveal + OS detection | ~90 | Hero CTA |
| `scroll-parallax.js` | Per-element parallax + reveal-on-scroll | ~110 | Multi-section sites |
| `type-splitter.js` | SplitType alternative (chars/words/lines) | ~90 | Char-reveal manifesto |

All modules are zero-dependency, ESM-compatible, and have a vanilla `<script>` auto-init fallback.

**Minimum setup** (the 3 imports that actually do work in 1.1.0):

```html
<div class="haze" aria-hidden="true">
  <span class="haze__blob haze__blob--a"></span>
  <span class="haze__blob haze__blob--b"></span>
  <span class="haze__blob haze__blob--c"></span>
  <span class="haze__blob haze__blob--d"></span>
</div>

<script type="module">
  import { initSmoothScroll }    from "./assets/js/smooth-scroll.js";
  import { initParallax, initReveal } from "./assets/js/scroll-parallax.js";
  import { splitText }           from "./assets/js/type-splitter.js";
  initSmoothScroll(); initParallax(); initReveal(); splitText();
</script>
```

That's it. 3 imports + 4 function calls + 4 blob spans = a site that looks like it took a year to build. Add `import { scramble }` if you want the hero CTA scramble.

---

## The 19 "Irreplaceable" Techniques (from the 2 reference sites)

These are techniques that **cannot** be replaced with a simpler alternative. If a design calls for one, you MUST implement it.

| # | Technique | Source | Code location |
|---|-----------|--------|---------------|
| 1 | Container query unit system `--u = 100cqw / 2360` | Hermes | `tokens.css` line ~50 |
| 2 | `text-box-trim: trim-both` on all headings | Hermes | `base.css` |
| 3 | **Atmospheric haze** (4 blurred radial-gradient blobs, drifting on keyframes, parallaxing on scroll) | Both | `effects.css` §15 + `smooth-scroll.js` |
| 4 | Frame overlay (`border: var(--frame) solid var(--bg)`) | Hermes | `effects.css` |
| 5 | Animated gradient border via `mask-composite: exclude` | Hermes | `effects.css` (`.arc-border`) |
| 6 | Per-image rAF-throttled scroll parallax | Hermes | `smooth-scroll.js` |
| 7 | Scramble text reveal with OS detection | Hermes | `scramble.js` |
| 8 | Footer opacity tied to scroll-end (60vh ramp) | Hermes | `smooth-scroll.js` |
| 9 | `:has()` parent-selector for section isolation | Hermes | `base.css` / `effects.css` |
| 10 | `body:has(.theme-X) > :is(...)` for global overrides | Hermes | `tokens.css` |
| 11 | `mix-blend-mode` stack: lighten + screen + difference + multiply | Hermes | `effects.css` |
| 12 | `::selection` with brand accent | Hermes | `base.css` |
| 13 | Editorial copy: ALL CAPS, tracked mono, sans-serif body | Both | `typography-prompts.md` + `free-fonts.md` |
| 14 | Generous section padding (4.44em → 12.8em on mobile) | DICH | `tokens.css` |
| 15 | Lenis + GSAP ScrollTrigger for the "magazine feel" | DICH | (optional; see Appendix A) |
| 16 | Char-reveal via SplitType + GSAP stagger | DICH | `type-splitter.js` |
| 17 | Brand-color "ambient bounce" in image prompts | DICH | `image-prompts.md` |
| 18 | Multi-stage "concept totems" (3D objects) as section dividers | DICH | `svg-arsenal.md` #11–13 |
| 19 | 3D parallax on images (`transform: scale(1.22)` + translate) | Hermes | `effects.css` (`.parallax`) |
| 20 | `text-wrap: balance` on h1/h2 + `max-width` in ch (lets the browser pick line breaks) | Both | `base.css` + this SKILL.md §"Headline wrap policy" |

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
- [ ] T9. Hero h1 uses `text-wrap: balance` (or `pretty`) so line breaks adapt to copy length and viewport.

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
- [ ] M5. There is at least one animated decoration (e.g. the arc stroke, or a drifting haze blob).
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

**Score = (48 − fails) / 48 × 100.** Ship if ≥ 90. (T9 added in 1.1.0 makes the bar 49 checks.)

---

## 3 Complete Worked Examples

### Example 1 — Fashion / Editorial (mood A, dich-style)

```yaml
narrative_arc:   B (Exploration)
palette:         DICH Pastel
fonts:           DICH set (T 012 + Space Grotesk + JetBrains Mono + NB Architekt)
                — or — the free equivalent: Fraunces + Inter + JetBrains Mono + Spectral
motion:          High (Lenis + GSAP)
hero:            hero-patterns.html #2 (Pastel Magazine)
sections:        [1, 2, 3, 5, 6] from section-patterns.html
atmosphere:      haze (4 blobs, warm pastel)
images:          8-asset Mood A set, AVIF+WebP
```

### Example 2 — AI Tool / Tech (mood B, Hermes-style)

```yaml
narrative_arc:   A (Introduction)
palette:         Hermes Blue
fonts:           Hermes set (DM Serif Display + Inter + JetBrains Mono)
                — or — the free equivalent: Fraunces + Inter + JetBrains Mono + Spectral
motion:          Medium (4 working JS modules)
hero:            hero-patterns.html #1 (Editorial Display)
sections:        [1, 2, 3, 4, 6]
atmosphere:      haze (4 blobs, blue + cyan)
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
atmosphere:      haze (4 blobs, mint + hot pink)
images:          8-asset Mood D set
```

---

## Quick-reference: 5 files you'll always need

```
tokens.css            (3KB)   design tokens
base.css              (7KB)   reset + baseline
effects.css           (13KB)  frame, haze, arc, parallax
index.html            (use one of the 6 hero patterns)
<one JS module>       (~3KB each)
```

That's a 27KB front-end. Add 8 generated images (avg 80KB each = 640KB) = 667KB total. Less than a single YouTube thumbnail. Yet it will render like a 6-month project.

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
11. **Long hero headlines** — anything over 8 words in the display heading is hard to scan. Combine with `text-wrap: balance` + a `max-width` in `ch` so the line breaks adapt to the viewport.
12. **Hard-coded `<br>` in headings** — `<br>` locks the line count to whatever the original copy was. If you change "Fast. Cheap. Done." to "The coding agent that lives in your terminal.", the layout will overflow or look broken. Use `text-wrap: balance` (already on `h1, h2` in `base.css`) + a `max-width` in `ch` and let the browser pick the breaks.
13. **Film grain done wrong** — scattering random white pixels per frame reads as TV static, not grain. Use haze (or a pre-baked tile if you really want grain — see Appendix E).

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
| `text-wrap: balance` | adaptive h1 line breaks | longer max-width + manual wraps |
| `backdrop-filter` | glass cards, haze | solid color + opacity |
| AVIF images | 30% smaller | WebP fallback (already used) |

**All 8 modern features have been in baseline since 2023.** A 2019-era AI may need the fallback, but a 2026 browser will render the full effect.

---

## The 1-line summary

> A premium site is **bold colors + large display serif + char-reveal + atmospheric haze + frame overlay + scroll-driven parallax + 8 color-graded images + 4 well-chosen fonts**. Nothing more. This skill gives you all 8 in copy-paste form.

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

### 1.1.0 (2026-06-16)
- **Atmospheric haze** replaces the deprecated canvas-noise effect. 4 CSS-only blurred radial-gradient blobs that drift on keyframes and parallax on scroll. GPU-composited, no per-frame JS.
- `noise.js` is now a documented no-op (kept for API compat). See Appendix E if you want grain.
- `smooth-scroll.js` gains a haze parallax sink — translates the `.haze` layer at 0.32 × scrollY on every rAF tick.
- New `assets/prompts/free-fonts.md` with 4 ready-to-paste Google Fonts stacks that replace the commercial placeholders in `tokens.css`.
- Decision 3 now defaults to free Google Fonts; commercial font sets moved to "if you have licenses".
- Phase 4 copy guidelines now warn about long hero headlines (≤ 2-3 lines).
- "Things that always go wrong" grew two new entries (#11 long headlines, #12 bad grain).
- "Compatibility matrix" adds `backdrop-filter`.
- **Hero patterns now use `text-wrap: balance` + `max-width` instead of `<br>`** — the h1 in each pattern is a plain string. The browser picks the line breaks based on viewport width, so a single template works for 3-word slogans and 9-word value props without re-laying out.
- The `<h1>` in every hero pattern gained a `max-width: 14ch` (or `12ch` for narrow variants). Combined with the `text-wrap: balance` already on `h1, h2` in `base.css`, this gives the "magazine feel" of equal line lengths without manual `<br>`.
- "19 Irreplaceable Techniques" grew a #20 entry for adaptive heading wraps.
- "48-Point Self-Audit" gained T9 (headline uses `text-wrap: balance`). Bar is now 49.
- "Things that always go wrong" grew a #12 entry for hard-coded `<br>` in headings.
- "Compatibility matrix" adds `text-wrap: balance`.

### 1.0.0 (2026-06-14)
- Initial release. Distilled from DICH Fashion + Hermes Desktop.
- 3 CSS files (tokens, base, effects) — 21KB total.
- 5 JS modules (noise, smooth-scroll, scramble, scroll-parallax, type-splitter) — ~700 LOC.
- 6 hero patterns + 6 section patterns.
- 9 color palettes, 6 font sets, 32 SVG elements.
- 48-point self-audit.

---

## Appendix D — Free Google Fonts mapping

The `tokens.css` defaults list commercial faces (Sigurd, T 012, Mondwest, NB Architekt) — those are *references* to what the original sites used, not free alternatives. For a real project, override the four `--font-*` variables with one of these free Google Fonts stacks:

| Stack | Display | Sans | Mono | Serif | Mood | Pairs with palette |
|-------|---------|------|------|-------|------|---------------------|
| **Awwwards default** | Fraunces | Inter | JetBrains Mono | Spectral | Warm, editorial | Ink, Mint, DICH Pastel, Cinema |
| **Tech / Hermes** | DM Serif Display | Inter | JetBrains Mono | Spectral | Cold, precise | Hermes Blue, Aurora, Glacier |
| **Magazine** | Playfair Display | Manrope | IBM Plex Mono | Lora | Classic, balanced | DICH Pastel, Sunset, Clay |
| **Brutalist mono** | Space Grotesk | Space Grotesk | JetBrains Mono | — | Geometric, all-caps | Ink, Cinema, Mint |

**Minimal override** (the only 4 lines you need to change in `tokens.css`):

```css
:root {
  --font-display: "Fraunces", "Times New Roman", serif;
  --font-sans:    "Inter", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;
  --font-serif:   "Spectral", "Times New Roman", serif;
}
```

And add this to your `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=Spectral:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
```

For the **Tech / Hermes** stack, swap `Fraunces` → `DM Serif Display`. For the **Magazine** stack, swap `Fraunces` → `Playfair Display`, `Inter` → `Manrope`, `JetBrains Mono` → `IBM Plex Mono`, `Spectral` → `Lora`.

---

## Appendix E — If you really want film grain

The original canvas-noise approach (3 stacked `<canvas>` with different blend modes) works *if* you do it the right way. The mistake is scattering random white pixels per frame — that reads as TV static. The right approach is a **pre-baked noise tile** that drifts slowly.

```js
// assets/js/noise.js — restore this if you want film grain instead of haze
const TILE = 256;

function bakeTile(density, r, g, b, dpr) {
  const off = document.createElement("canvas");
  off.width  = TILE * dpr;
  off.height = TILE * dpr;
  const c = off.getContext("2d");
  c.fillStyle = `rgba(${r},${g},${b},1)`;
  const total = TILE * TILE * dpr * dpr;
  for (let i = 0; i < total * density; i++) {
    const x = (Math.random() * TILE * dpr) | 0;
    const y = (Math.random() * TILE * dpr) | 0;
    c.fillRect(x, y, dpr, dpr);
  }
  return off;
}

export function startNoise(canvas, opts = {}) {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const { density = 0.6, alpha = 0.05 } = opts;
  const tile = bakeTile(density, 255, 255, 255, dpr);
  let ox = 0, oy = 0, raf = 0;
  const ctx = canvas.getContext("2d");
  const tick = () => {
    if (Math.random() < 0.06) ox = (ox + 1) % TILE;
    if (Math.random() < 0.06) oy = (oy + 1) % TILE;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = alpha;
    for (let y = -oy; y < canvas.height; y += TILE) {
      for (let x = -ox; x < canvas.width; x += TILE) {
        ctx.drawImage(tile, x, y);
      }
    }
    ctx.globalAlpha = 1;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(tick);
    }
  };
  tick();
  return () => cancelAnimationFrame(raf);
}
```

Differences from the broken 1.0.0 version:
- Tile is **baked once** instead of re-scattering per frame
- Offset advances by 1px only ~6% of frames (slow drift, not strobing)
- `cellSize = 1` (smooth) instead of 2 (chunky)
- `globalAlpha = 0.05` per draw (low single-frame intensity) instead of per-pixel `rgba(...,32)` (high per-pixel intensity)

The net effect: a paper-like tooth that doesn't strobe. Combine with a frame overlay for the full "editorial print" look.
