# Changelog

All notable changes to **award-website-builder** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-06-14

> First stable release. Distilled from two Awwwards-tier production sites.

### ✨ Added

- **Design tokens** — 3 CSS files (`tokens.css` / `base.css` / `effects.css`) covering 9 theme palettes, 6 font sets, container-query unit system, frame overlay, animated gradient borders, parallax, reveal, and marquee.
- **5 zero-dependency JS modules** — `noise.js` (triple-stacked canvas grain), `smooth-scroll.js` (rAF-throttled scroll + parallax + footer reveal), `scramble.js` (text scramble with OS detection), `scroll-parallax.js` (per-element parallax + reveal-on-scroll), `type-splitter.js` (chars/words/lines splitting).
- **6 hero patterns** — Editorial Display, Pastel Magazine, Video Frame, 3D Cosmic, Type-Only Marquee, Split-Screen Reveal.
- **6 section patterns** — Wide Photo + Caption, Three-Column Feature Grid, Big Number Wall, Char-Reveal Manifesto, Carousel / Swipe Row, Closing Wordmark + Footer.
- **9 color palettes** — Hermes Blue (default), DICH Pastel, Cinema, Aurora, Mint Pop, Glacier, Sunset, Ink, Clay.
- **6 font sets** — DICH, Hermes, Awwwards default, Helvetica post-digital, Indie magazine, Web3 / Web4.
- **30+ inline SVGs** — icons, decorative shapes, loaders, atmospheric elements.
- **3 prompt libraries** — `image-prompts.md` (5 visual moods + 8-asset minimum set), `typography-prompts.md` (font recipes), `color-palettes.md` (palette pairing).
- **2 worked examples** — `01-fashion-launch.md` (60 min, DICH-style), `02-ai-tool-landing.md` (45 min, Hermes-style).
- **48-point self-audit** — Visual (12) + Typography (8) + Color (6) + Motion (8) + Technical (8) + Content (6).
- **10万字+ deep analysis** — `docs/analysis/MASTER-ANALYSIS.md` with line-numbered references to the 2 source sites.
- **Bilingual docs** — English / 中文 / 日本語 (UI strings in tokens.css, all prose in English with Chinese code comments).

### 🎨 Design Distillations

- 19 "irreplaceable" techniques from DICH + Hermes, with full code references.
- 12 transferable design rules with before/after examples.
- Frame overlay, container query `--u` unit system, mask-composite gradient borders.

### 🔧 Engineering

- **Browser support** — all modern (2024+); full `@supports not` fallbacks for 2019-era browsers.
- **Total payload** — 380KB across 24 files. CSS 22KB / JS 25KB / HTML 25KB / Prompts 30KB.
- **Zero npm dependencies** — every line of code in this repo is original or CC0/MIT.
- **Claude Code Skill format** — frontmatter + 4 decisions + 7-phase SOP + 12 hero/section patterns + 5 JS modules + 48-point audit.

### 📚 Reference

- DICH Fashion — `dich-fashion.webflow.io` — Webflow + Lenis + GSAP + SplitType + Swiper + Three.js + UnicornStudio (6-library pattern).
- Hermes Desktop — `hermes-agent.nousresearch.com/desktop` — Tailwind v4 + container query + self-written (0-library pattern).

### ⚖️ License

- Skill source code (CSS / JS / HTML / SVG / prompt text): **MIT** — commercial use, modification, redistribution OK.
- Reference sites (DICH Fashion, Hermes Desktop): © their respective owners. Cited for educational analysis; not redistributed.
- Paid foundry fonts (T 012, Sigurd, Druk Wide, NB Architekt): not included. Free Google Fonts alternatives are documented.

---

## [Unreleased]

Future versions will add:

- More hero patterns (3D-scroll hero, parallax-mountain hero, etc.)
- Vue 3 / Svelte / React wrappers for the JS modules.
- Figma plugin that exports the token system.
- CMS templates (Sanity / Contentful) for multi-page sites.
