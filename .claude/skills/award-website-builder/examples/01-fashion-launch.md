# Worked Example 01 — Fashion Launch Page (DICH-style)

> **Goal**: Build a complete fashion brand launch page from scratch in 60 minutes using only the assets in this Skill.
>
> **Style target**: DICH Fashion (复古未来主义 + 时装片 + 6 套字体 + 多段叙事)
>
> **No code from the original DICH site is used.** This is a fresh implementation following the patterns.

---

## Step 0 — Brief (5 min)

**The product**: A new fashion brand called "ATELIER VRAI" (fictional) launching a SS26 collection. The page is a single-page narrative that introduces the brand, shows the mood, lists 6 pieces, and ends with a "Join the list" CTA.

**The 4 decisions**:

| Decision | Choice | Why |
|----------|--------|-----|
| **Narrative arc** | B (Exploration) | Multi-section showcase of a new brand |
| **Color temperature** | Warm | Fashion editorial |
| **Font count** | 6 (full editorial) | This is a fashion site — justify the cost |
| **Motion intensity** | Medium | Marketing site, not a long-form story |

**The mood**: A (retro-futurist editorial)

**The palette**: DICH Pastel (palette #2)
**The font set**: DICH set (#1)
**The hero pattern**: Pastel Magazine (hero-patterns.html #2)
**The section patterns**: 1 + 2 + 3 + 4 + 5 + 6 = all 6

---

## Step 1 — Project setup (3 min)

```bash
mkdir atelier-vrai
cd atelier-vrai
mkdir css js img
cp ../.claude/skills/award-website-builder/assets/css/{tokens,base,effects}.css css/
cp ../.claude/skills/award-website-builder/assets/js/*.js js/
```

Create `index.html` with the basic skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ATELIER VRAI — SS26 Collection</title>
<meta name="description" content="A new era of futuristic fashion. ATELIER VRAI SS26 launches soon.">
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/effects.css">
</head>
<body>
<!-- content goes here -->
</body>
</html>
```

---

## Step 2 — Override the brand palette (2 min)

Open `css/tokens.css`. In `:root`, override the 5 brand colors with the DICH Pastel palette (already pre-defined in the same file as `.theme-warm` — but we'll override at root for simplicity):

```css
:root {
  --color-brand:  #ffdfc4;   /* pastel pink — main background */
  --color-paper:  #ffffff;   /* white */
  --color-fg:     #070707;   /* ink */
  --color-accent: #5c2c45;   /* dark coral */
  --color-ink:    #070707;

  /* Optional: keep DICH's auxiliary colors */
  --color-warm:   #ffdfc4;
  --color-lemon:  #ffff82;
  --color-peach:  #ffebb0;
  --color-purple: #cfb8ff;
  --color-blue:   #c5c4ff;
  --color-violet: #e8a5f3;
  --color-brown:  #39322d;
  --color-dark-coral: #5c2c45;
}
```

(If you want to keep it simple, just override the 5 brand colors and remove the 8 auxiliaries. The site will still look "DICH-style" because the pastels are the visual signature.)

---

## Step 3 — Override the font stack (2 min)

In the same `:root` block:

```css
:root {
  --font-display:   "T 012", "Bodoni Moda", "Playfair Display", serif;
  --font-sans:      "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono:      "JetBrains Mono", "Courier Prime", monospace;
  --font-serif:     "NB Architekt Std", "Spectral", "EB Garamond", serif;
}
```

If you can't license T 012, use **Bodoni Moda** (Google Fonts) — it gives the same "modern serif with high contrast" feel. Same for NB Architekt → Spectral.

Download the woff2 files for the 4 free fonts from Google Fonts and place them in `css/fonts/`. Then add to the top of `tokens.css`:

```css
@font-face {
  font-family: "Bodoni Moda";
  src: url("fonts/BodoniModa-Variable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-display: swap;
}
/* ... repeat for Space Grotesk, JetBrains Mono, Spectral ... */
```

(Or just use `<link rel="stylesheet" href="https://fonts.googleapis.com/...">` in the head.)

---

## Step 4 — Pick the hero (10 min)

Open `../.claude/skills/award-website-builder/assets/html/hero-patterns.html` in a browser. Find pattern #2 (Pastel Magazine). Copy that section into `index.html`.

Customize the copy:

```html
<header class="theme-warm" style="background: var(--bg); color: var(--fg);
        position: relative; padding: var(--section-pad-y) var(--gutter);
        min-height: clamp(700px, 90vh, 1100px);
        display: flex; flex-direction: column; justify-content: center;
        align-items: center; text-align: center; overflow: hidden;">

  <p class="eyebrow" data-reveal>A New Era of Futuristic Fashion</p>

  <h1 class="display" data-split="chars" data-reveal
      style="font-size: clamp(4rem, 12vw, 11rem);
      line-height: 0.85; font-weight: 400; text-transform: uppercase;
      letter-spacing: 0.01em; margin-block: 2rem; max-width: 18ch;">
    Future Mode of ATELIER VRAI
  </h1>

  <p class="body-mono" data-reveal style="max-width: 50ch; opacity: 0.7;">
    Innovative designs that blend perfection and elegance,
    setting new trends in luxury apparel.
  </p>

  <a class="btn" href="#collection" data-reveal
     style="margin-top: var(--space-6);
            padding: var(--space-3) var(--space-5);
            background: var(--color-ink); color: var(--color-warm);
            font-family: var(--font-mono); text-transform: uppercase;
            letter-spacing: var(--ls-mono);">
    Discover the Collection
  </a>
</header>
```

The `theme-warm` class flips the palette to pastel-pink + ink. The `data-split="chars"` + `data-reveal` attributes will be picked up by the JS modules.

**The "Future Mode of ATELIER VRAI" h1** is the typographic statement of the page. It's 14 chars at 12vw — on a 1920px viewport, that's 230px per char × 14 = 3220px wide. The text wraps to 2 lines on smaller screens via `max-width: 18ch`.

---

## Step 5 — Add 4-5 section patterns (15 min)

In `index.html`, after the hero, paste the 5 section patterns from `section-patterns.html`:

### Pattern 1: Wide Photo + Caption (the mission)

```html
<section id="mission" class="section theme-warm">
  <div class="container" style="display: grid; grid-template-columns: 1fr 1fr;
       gap: var(--space-7); align-items: end;">
    <h2 data-reveal class="display"
        style="grid-column: 1 / -1; font-size: clamp(3rem, 8vw, 7rem);
        line-height: 0.88; font-weight: 400; text-transform: uppercase;
        letter-spacing: 0.01em; max-width: 14ch;">
      Our Mission
    </h2>
    <figure data-reveal class="parallax" style="grid-column: 1 / span 1;">
      <img src="img/mission-figure.webp" alt="ATELIER VRAI model in ceremonial dress"
           style="width:100%; height: 60vh; object-fit: cover;">
    </figure>
    <div data-reveal style="grid-column: 2 / span 1;">
      <p class="eyebrow">Brand Statement</p>
      <p style="font-family: var(--font-serif); font-size: 1.25rem;
                line-height: 1.5; margin-top: 1.5rem; max-width: 38ch;">
        ATELIER VRAI stands at the intersection of craft and future.
        We design for the next century of dressing — pieces that hold
        meaning beyond a season, shapes that hold power beyond a moment.
      </p>
    </div>
  </div>
</section>
```

### Pattern 2: Three-Column Feature Grid (the 3 pillars)

```html
<section id="collection" class="section theme-purple" style="background: #cfb8ff;">
  <p class="eyebrow" style="text-align: center; margin-bottom: var(--space-7);">
    Three Pillars · SS26
  </p>
  <div class="container" style="display: grid; grid-template-columns: repeat(3, 1fr);
       gap: var(--space-7);">
    <article data-reveal>
      <p class="body-mono" style="opacity: 0.6;">#1 Craft</p>
      <h3 class="display" style="font-size: clamp(1.75rem, 2.5vw, 2.5rem);
         font-weight: 300; line-height: 1; margin-block: 1rem;
         text-transform: uppercase;">Made by Hand</h3>
      <p class="body-mono" style="opacity: 0.85;">
        Every piece is cut, sewn, and finished in our Parisian atelier
        by a team of 12 master craftspeople.
      </p>
    </article>
    <article data-reveal>
      <p class="body-mono" style="opacity: 0.6;">#2 Material</p>
      <h3 class="display" style="font-size: clamp(1.75rem, 2.5vw, 2.5rem);
         font-weight: 300; line-height: 1; margin-block: 1rem;
         text-transform: uppercase;">From the Source</h3>
      <p class="body-mono" style="opacity: 0.85;">
        Silk from Lyon, leather from Marrakech, linen from Bruges.
        We buy direct from the people who grow it.
      </p>
    </article>
    <article data-reveal>
      <p class="body-mono" style="opacity: 0.6;">#3 Future</p>
      <h3 class="display" style="font-size: clamp(1.75rem, 2.5vw, 2.5rem);
         font-weight: 300; line-height: 1; margin-block: 1rem;
         text-transform: uppercase;">Beyond the Season</h3>
      <p class="body-mono" style="opacity: 0.85;">
        Designed to last 30 years, not 3. Repair, not replace.
        The next era of luxury is quiet.
      </p>
    </article>
  </div>
</section>
```

### Pattern 3: Big Number Wall (the credibility)

```html
<section class="section theme-ink" style="background: #070707; color: #ffdfc4;">
  <p class="eyebrow" data-reveal style="text-align: center;
     margin-bottom: var(--space-7);">By the numbers</p>
  <div class="container tabular" style="display: grid; grid-template-columns: repeat(4, 1fr);
       gap: var(--space-5); border-block: 1px solid currentColor;">
    <div data-reveal style="padding: var(--space-7) 0;
         border-right: 1px solid currentColor;">
      <p class="display" style="font-size: clamp(3rem, 8vw, 7rem);
         font-weight: 300; line-height: 0.9;">12</p>
      <p class="body-mono" style="opacity: 0.6; margin-top: 0.5rem;">
        Master Craftspeople
      </p>
    </div>
    <div data-reveal style="padding: var(--space-7) 0;
         border-right: 1px solid currentColor;">
      <p class="display" style="font-size: clamp(3rem, 8vw, 7rem);
         font-weight: 300; line-height: 0.9;">06</p>
      <p class="body-mono" style="opacity: 0.6; margin-top: 0.5rem;">
        Pieces in SS26
      </p>
    </div>
    <div data-reveal style="padding: var(--space-7) 0;
         border-right: 1px solid currentColor;">
      <p class="display" style="font-size: clamp(3rem, 8vw, 7rem);
         font-weight: 300; line-height: 0.9;">∞</p>
      <p class="body-mono" style="opacity: 0.6; margin-top: 0.5rem;">
        Lifetime Repairs
      </p>
    </div>
    <div data-reveal style="padding: var(--space-7) 0;">
      <p class="display" style="font-size: clamp(3rem, 8vw, 7rem);
         font-weight: 300; line-height: 0.9;">26</p>
      <p class="body-mono" style="opacity: 0.6; margin-top: 0.5rem;">
        Years Designing
      </p>
    </div>
  </div>
</section>
```

### Pattern 4: Char-Reveal Manifesto (the brand statement)

```html
<section class="section theme-warm" style="text-align: center;">
  <p class="eyebrow" data-reveal style="margin-bottom: var(--space-7);">
    A Brand Statement
  </p>
  <h2 data-split="chars" data-reveal class="display"
      style="font-size: clamp(2.5rem, 6vw, 5.5rem);
      line-height: 1.15; font-weight: 300; text-transform: none;
      letter-spacing: -0.01em; max-width: 22ch; margin-inline: auto;
      font-family: var(--font-serif);">
    We make clothes that hold meaning beyond a season.
  </h2>
  <p class="body-mono" data-reveal style="margin-top: var(--space-7); opacity: 0.7;">
    — The Atelier, SS26
  </p>
</section>
```

### Pattern 5: Carousel / Swipe Row (the collection)

```html
<section class="section theme-warm" style="padding: 0;">
  <header style="display: flex; justify-content: space-between;
                 align-items: baseline; padding: var(--section-pad-y) var(--gutter) 0;">
    <p class="eyebrow">Collection · SS26</p>
    <a class="body-mono" href="#all">View all →</a>
  </header>
  <div class="marquee" style="padding-block: var(--space-6);">
    <div class="marquee__track">
      <article style="flex: 0 0 360px; aspect-ratio: 3/4; background: #070707;
                margin-inline: var(--space-3); position: relative; overflow: hidden;">
        <img src="img/piece-01.webp" alt="" aria-hidden="true"
             style="position:absolute; inset:0; width:100%; height:100%;
                    object-fit: cover; opacity: 0.85;">
        <div style="position: absolute; inset: auto 1rem 1rem 1rem;
                    display: flex; justify-content: space-between; align-items: end;
                    color: #ffdfc4;">
          <p class="body-mono">01 — The Veil Coat</p>
          <p class="body-mono" style="opacity: 0.6;">SS26</p>
        </div>
      </article>
      <!-- repeat for 02, 03, 04 ... -->
    </div>
  </div>
</section>
```

### Pattern 6: Closing Wordmark + Footer

```html
<section class="section theme-ink" style="background: #070707; color: #ffdfc4;
         min-height: 80vh; display: flex; flex-direction: column;
         align-items: center; justify-content: center; text-align: center;
         position: relative; overflow: hidden;">
  <div aria-hidden="true" class="ghost-text" style="position: absolute;
       top: 15%; left: 0; right: 0; text-align: center;
       font-size: clamp(5rem, 14vw, 14rem); font-weight: 300;
       line-height: 0.8; opacity: 0.15;">ATELIER</div>
  <h2 class="display" style="font-size: clamp(3rem, 8vw, 6rem);
     line-height: 0.9; font-weight: 300; text-transform: uppercase;
     letter-spacing: 0.03em; position: relative; z-index: 2;">Join the List</h2>
  <p class="body-mono" style="opacity: 0.85; max-width: 50ch;
     position: relative; z-index: 2; margin-block: 1.5rem;">
    Early access to SS26, atelier visits, and 10% off your first piece.
  </p>
  <form class="body-mono" style="display: flex; gap: 0.5rem; position: relative; z-index: 2;">
    <input type="email" placeholder="your@email.com" required
           style="padding: 0.75rem 1rem; background: transparent;
                  border: 1px solid currentColor; color: inherit;
                  font-family: inherit; min-width: 280px;">
    <button type="submit"
            style="padding: 0.75rem 1.5rem; background: var(--color-warm);
                   color: var(--color-ink); font-family: inherit;
                   text-transform: uppercase; letter-spacing: var(--ls-mono);
                   border: 0; cursor: pointer;">
      Join
    </button>
  </form>
  <footer style="position: absolute; bottom: 3dvh; left: 0; right: 0;
                 padding-inline: var(--gutter);
                 display: flex; justify-content: space-between; align-items: end;
                 color: #ffdfc4;">
    <p class="body-mono" style="opacity: 0.6;">v1.0 · 2026</p>
    <p class="body-mono" style="opacity: 0.6; text-align: right;">
      © ATELIER VRAI · Paris
    </p>
  </footer>
</section>
```

---

## Step 6 — Add the noise overlay + frame (5 min)

Just before `</body>`, add:

```html
<!-- Frame overlay (visible on the edges of the page) -->
<div class="frame-overlay"></div>

<!-- Noise canvas × 3 (film grain) -->
<canvas data-noise="1" style="position:fixed; inset:0; pointer-events:none;
        width:100%; height:100%; mix-blend-mode:color-dodge; z-index:101;"></canvas>
<canvas data-noise="2" style="position:fixed; inset:0; pointer-events:none;
        width:100%; height:100%; mix-blend-mode:difference; z-index:201;"></canvas>

<!-- JS modules -->
<script type="module">
  import { initAllNoise, initSmoothScroll, scramble, initParallax, initReveal, splitText } from "./js/index.js";
  initAllNoise();
  initSmoothScroll();
  initParallax();
  initReveal();
  splitText();
</script>
```

But wait — `initSmoothScroll` expects specific IDs (`#parallax-panel`, etc.) that this site doesn't have. Since this is a "Medium" motion site, we don't need panel parallax — just init noise + reveal + parallax + type-splitter. Skip smooth-scroll.

Also: `initParallax()` reads `data-parallax-speed` from elements. We have `class="parallax"` on the mission figure, but no `data-parallax-speed`. The `class="parallax"` in `effects.css` uses `--py-img: 0px` from smooth-scroll.js. If we skip smooth-scroll, the parallax image won't move. **Either** add `data-parallax-speed="0.2"` to the figure, **or** skip the parallax class on the figure.

Let me use the `data-parallax-speed` approach:

```html
<figure data-reveal data-parallax-speed="0.15" style="...">
  <img src="img/mission-figure.webp" alt="...">
</figure>
```

Now the figure gets a gentle upward float as the user scrolls.

---

## Step 7 — Create the index.js aggregator (1 min)

Create `js/index.js`:

```js
export { initAllNoise }                    from "./noise.js";
export { scramble, scrambleWithOSLabel, detectOS } from "./scramble.js";
export { initParallax, initReveal }        from "./scroll-parallax.js";
export { splitText }                       from "./type-splitter.js";
```

Now your `<script type="module">` can import everything from one file.

---

## Step 8 — Generate the 8 images (15 min, parallel with step 6)

Open `assets/prompts/image-prompts.md` and find the **canonical Mood A prompt**:

> Editorial photograph of a single human figure in three-quarter pose, centered, against a solid pastel pink background (#ffdfc4). Subject wears flowing cream and brown garments. Soft golden hour key light from upper-left, single hard shadow falling back-right. Subtle 35mm film grain. No text, no UI, no logos, no extra figures. --ar 16:9 --s 250 --v 6.1

Generate this in Midjourney / SDXL / GPT-Image-1. Save the result as `img/hero-figure.webp`.

For the other 7 images, use the prompt templates from §7 of image-prompts.md:

| # | Slot | File | Prompt section |
|---|------|------|----------------|
| 1 | Hero figure | `hero-figure.webp` | §2 Hero (16:9) |
| 2 | Section A wide | `mission-figure.webp` | §2 Wide photo, but the figure should be center-right |
| 3 | Brand statement | `manifesto-figure.webp` | §2 Single object (1:1) |
| 4 | Section 4 product | `piece-01.webp` ... `piece-04.webp` | §2 Card (4:5) |
| 5 | Closing figure | `closing-figure.webp` | §2 Big figure, but use "silhouette" instead of "figure" |

Apply the 6-step post-production pipeline (from image-prompts.md §10) to each:
1. Resize to exact target (e.g. 1920×1080 for hero, 1080×1350 for card)
2. Color grade to brand palette (shift master wheel so the dominant tint is #ffdfc4)
3. Add 8–15% film grain
4. Add 2–5% brand color haze in upper-left
5. Sharpen the subject
6. Convert to WebP (squoosh.app)

Save to `img/`. Total budget: ~3MB for 8 images.

---

## Step 9 — Run the 48-point self-audit (10 min)

Open `SKILL.md` and go through the audit. Run the local server and check each item:

```bash
cd atelier-vrai
python -m http.server 8000
# Open http://127.0.0.1:8000
```

**Likely issues** (and fixes):

1. **Body text contrast fails on dark sections** → Add `color: var(--color-warm)` to all dark-section `body-mono` paragraphs
2. **Char reveal animation feels janky** → Add `animation-fill-mode: backwards` so chars start at 0 opacity, not visible-then-jump-to-0
3. **Mobile section padding too tight** → Override `--section-pad-y-m: 8em` in your tokens
4. **Frame overlay covers content** → Reduce frame thickness with `--frame: calc(1.5 * (0.5vw + 0.5vh))`
5. **Noise too strong** → Reduce noise-1 opacity from 0.6 to 0.4

**Score goal**: ≥ 90. If you hit 90+ on first try, ship. If not, iterate.

---

## Step 10 — Final touches (5 min)

Add the `<noscript>` fallback:

```html
<noscript>
  <style>
    [data-reveal] { opacity: 1 !important; transform: none !important; }
    [data-split] { /* don't split if no JS */ }
  </style>
</noscript>
```

Add the Open Graph / Twitter card metadata:

```html
<meta property="og:title" content="ATELIER VRAI — SS26 Collection">
<meta property="og:description" content="A new era of futuristic fashion.">
<meta property="og:image" content="img/hero-figure.webp">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

Add a favicon (use a small SVG of the brand letter):

```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-family='serif'>A</text></svg>">
```

---

## Final result

You now have a complete single-page brand site:

- 1 hero + 5 sections + 1 closing
- Pastel pink + ink black palette
- 4-font editorial system
- Char-reveal + parallax + noise + frame overlay
- Email signup with brand-styled form
- Total size: ~3 MB (mostly images)
- Total time: ~60 minutes
- Self-audit score: ~92

**This is the same level of polish as a site that takes an agency 6 weeks.** The Skill's tokens / base / effects + 5 JS modules + 12 HTML patterns is all you needed.

---

## The 10-minute version

If you only have 10 minutes, skip everything above and just:

1. Copy `assets/html/hero-patterns.html` pattern #2 into your `index.html`
2. Add the 3 lines of CSS imports
3. Add the 5-line `<script type="module">` block
4. Change the `theme-warm` class to `theme-blue` for an instant re-skin
5. Replace the placeholder text with your brand's text
6. Add 1 image

That's 6 steps. Even a 19-year AI can do it.

The full 60-minute version above is for when you want a site that can win an Awwwards SOTD.
