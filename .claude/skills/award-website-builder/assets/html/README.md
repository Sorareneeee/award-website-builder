# assets/html/ — Hero + Section templates

12 self-contained, copy-paste-ready patterns. Each pattern is a full HTML section you can lift into your project.

## Files

| File | Contents |
|------|----------|
| `hero-patterns.html` | 6 hero patterns (`<section data-pattern="1..6">`) |
| `section-patterns.html` | 6 section patterns (`<section data-pattern="1..6">`) |

## How to use

1. **Pick a pattern** by reading the `data-pattern` description in the table below.
2. **Open the file** in a browser to see it rendered (or `python -m http.server 8000` from this directory).
3. **Copy the `<section data-pattern="N">...</section>` block** into your project.
4. **Replace the text/images** with your content.
5. **Keep the same `theme-*` class** on the parent if you want the same color treatment.

## The 6 hero patterns

| # | Name | Best for | Reference site |
|---|------|----------|----------------|
| 1 | **Editorial Display** | Tech, AI, B2B, "credibility" brands | Hermes |
| 2 | **Pastel Magazine** | Fashion, beauty, art, lifestyle | DICH |
| 3 | **Video Frame** | Product demos, app launches | Hermes |
| 4 | **3D Cosmic** | Frontier AI, dev tools, research | Mood E (aurora) |
| 5 | **Type-Only Marquee** | News, events, "always-on" brands | — |
| 6 | **Split-Screen Reveal** | Before/after, transitions, dual-narrative | — |

## The 6 section patterns

| # | Name | Best for | Reference site |
|---|------|----------|----------------|
| 1 | **Wide Photo + Caption** | Brand statements, mission pages | DICH |
| 2 | **Three-Column Feature Grid** | Capability lists, product features | Hermes |
| 3 | **Big Number Wall** | Stats, social proof, "by the numbers" | DICH |
| 4 | **Char-Reveal Manifesto** | Brand statements, mission quotes | — |
| 5 | **Carousel / Swipe Row** | Collections, products, projects | DICH |
| 6 | **Closing Wordmark + Footer** | Always use as the page's last block | Hermes |

## Pattern anatomy

Each pattern uses the same skeleton:

```html
<section class="pattern" data-pattern="N">
  <p class="pattern__label">Pattern N — ... (Reference site)</p>
  <!-- The actual reusable block starts here -->
  <div class="theme-X" style="background: var(--bg); color: var(--fg);
       padding: var(--section-pad-y) var(--gutter);">
    ...
  </div>
</section>
```

The `.pattern` + `.pattern__label` are **only for the demo file** (so you can see which is which). When you copy a pattern into your project, **delete the `<p class="pattern__label">` line**.

## Combining patterns

A complete single-page site uses **1 hero + 3–5 sections + 1 closing**. Example:

```html
<main>
  <!-- Hero (pick 1) -->
  <section data-pattern="1">  ...  </section>  <!-- Editorial Display -->

  <!-- Body (pick 3–5) -->
  <section data-pattern="2">  ...  </section>  <!-- Three-Column Feature Grid -->
  <section data-pattern="3">  ...  </section>  <!-- Big Number Wall -->
  <section data-pattern="4">  ...  </section>  <!-- Char-Reveal Manifesto -->
  <section data-pattern="1">  ...  </section>  <!-- Wide Photo + Caption -->

  <!-- Closing (always) -->
  <section data-pattern="6">  ...  </section>  <!-- Closing Wordmark + Footer -->
</main>
```

For a 1-page marketing site, this is the canonical structure.

## Smoke test

To render all 12 patterns in one go:

```bash
cd assets/html
python -m http.server 8000
# Open http://127.0.0.1:8000/hero-patterns.html
# and http://127.0.0.1:8000/section-patterns.html
```

You'll see a vertical stack of 6 different heroes, each themed differently. All 5 JS modules run automatically.

## Style conventions inside the patterns

- All inline styles use **CSS variables** (`var(--bg)`, `var(--gutter)`, `var(--text-h1)`, etc.)
- All colors come from **theme classes** (`theme-blue`, `theme-warm`, etc.)
- All animations are driven by **CSS classes** (`data-reveal`, `data-split`, `data-parallax-speed`)
- All text is wrapped in **semantic roles** (`eyebrow`, `display`, `body-mono`)

This makes every pattern re-themable in 1 line (just change the `theme-*` class).

## What to copy vs. what to rewrite

When you copy a pattern into your project:

**Copy verbatim**:
- The structure (`<section>`, `<div>`, `<article>`)
- The CSS variable usage (`var(--*)`)
- The animation attributes (`data-reveal`, `data-split`)
- The grid/flex layout

**Rewrite**:
- The text (headlines, body, captions)
- The image URLs (replace with your generated images)
- The CTA links (`href="#"` → your real URLs)
- The accent color if you don't like the theme's default

**Delete**:
- The `class="pattern"` and `<p class="pattern__label">` (demo-only)
- Any `<canvas data-noise>` (only needed once at the page level)
- Any `<script type="module">` block (only needed once at the page level)
