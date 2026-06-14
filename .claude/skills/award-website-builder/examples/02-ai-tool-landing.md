# Worked Example 02 — AI Tool Landing Page (Hermes-style)

> **Goal**: Build an AI tool product landing page in 45 minutes using Hermes Desktop's design language.
>
> **Style target**: Hermes Desktop (电蓝 + 荧光黄 + 巨字 + frame overlay + scramble)
>
> This is the OPPOSITE of Example 01. The site is cool-toned, minimal sections, single-file philosophy, zero libraries.

---

## Step 0 — Brief (3 min)

**The product**: A new AI research tool called "FRACTAL" (fictional). Open-source. MIT license. The page is a single-page product landing that shows the hero, 3 key features, and a "View on GitHub" CTA.

**The 4 decisions**:

| Decision | Choice |
|----------|--------|
| **Narrative arc** | A (Introduction) |
| **Color temperature** | Cool (electric blue + acid yellow) |
| **Font count** | 4 (Display + Sans + Mono) |
| **Motion intensity** | Medium (Hermes style) |

**The mood**: B (brutalist editorial)
**The palette**: Hermes Blue (palette #1, the default)
**The font set**: Hermes set (#2)
**The hero pattern**: Editorial Display (hero-patterns.html #1)

---

## Step 1 — Single-file HTML (2 min)

Hermes philosophy = one file, zero build step. Just create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>FRACTAL — The Agent That Thinks For You</title>
<meta name="description" content="Open-source AI agent. MIT license. By FRACTAL Labs.">
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/effects.css">
<style>
  /* Inlined for single-file philosophy; can be moved to a separate file */
  .fractal-web {
    --hw-bg: var(--color-brand);
    --hw-fg: var(--color-fg);
    --hw-accent: var(--color-accent);
    --hw-paper: var(--color-paper);
    --u: calc(100cqw / 2360);
    --hw-gutter: calc(210 * var(--u));
    --hw-gap: calc(30 * var(--u));
    --hw-edge: calc(93 * var(--u));
    --hw-text-eyebrow: calc(18 * var(--u));
    --hw-text-body: calc(21 * var(--u));
    --hw-frame: calc(2.5 * var(--vsq));
    z-index: 110;
    isolation: isolate;
    background: var(--hw-bg);
    color: var(--hw-fg);
    font-family: var(--font-display), "Times New Roman", serif;
    text-transform: uppercase;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    position: relative;
    container-type: inline-size;
  }
  .fractal-scroll { z-index: 2; padding: var(--hw-frame) var(--hw-frame) 0;
    position: relative; pointer-events: none; }
  .fractal-scroll > * { pointer-events: auto; }
  .fractal-frame { z-index: 100; border: var(--hw-frame) solid var(--hw-bg);
    pointer-events: none; position: fixed; inset: 0; }
  .fractal-vignette { position: relative; }
  .fractal-vignette:before { content: ""; background: radial-gradient(120% 90% at 50% 42%,
      transparent 50%, var(--hw-bg) 100%); pointer-events: none;
      z-index: 1; opacity: .2; position: absolute; inset: 0; }
  .fractal-noise { position: relative; }
  .fractal-noise:after { content: ""; mix-blend-mode: color-burn; opacity: .2;
    pointer-events: none; background: url(https://placehold.co/205x205/0000f2/0000f2) 0 0 / 12.8rem;
    position: absolute; inset: 0; }
  .fractal-mono { font-family: var(--font-mono), "Courier New", monospace;
    text-transform: uppercase; letter-spacing: .1em; }
  .fractal-arc { z-index: 1; opacity: 0; pointer-events: none;
    background: linear-gradient(160deg, transparent 0%, var(--hw-fg) 15%,
      var(--hw-accent) 20%, var(--hw-bg) 25%, transparent 35%, transparent 40%,
      var(--hw-fg) 55%, var(--hw-accent) 60%, var(--hw-bg) 65%,
      transparent 75%, transparent 80%, var(--hw-fg) 95%, var(--hw-accent) 100%);
    background-size: 300% 300%; padding: 1.25px;
    transition: opacity .2s;
    animation: arc-stroke 2.23s linear infinite paused;
    position: absolute; inset: 0;
    mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    -webkit-mask-clip: content-box, border-box; mask-clip: content-box, border-box;
    -webkit-mask-origin: content-box, border-box; mask-origin: content-box, border-box; }
  .group:hover > .fractal-arc, .group:focus-visible > .fractal-arc {
    opacity: 1; animation-play-state: running; }
  @keyframes arc-stroke { 0% { background-position: 15% 15%; } to { background-position: 75% 75%; } }
  .fractal-wordmark { font-family: var(--font-display), "Times New Roman", serif;
    font-size: var(--hw-wordmark-size, clamp(4rem, 18vw, 14rem));
    letter-spacing: .03em; text-transform: uppercase; white-space: nowrap;
    color: var(--hw-bg); pointer-events: none; user-select: none;
    font-weight: 300; line-height: .8; }
  .fractal-ghost { font-family: var(--font-display), "Times New Roman", serif;
    letter-spacing: .03em; text-transform: uppercase; white-space: nowrap;
    mix-blend-mode: exclusion; color: var(--hw-accent); opacity: .2;
    pointer-events: none; user-select: none; font-weight: 300; line-height: .8; }
  @media (max-width: 767px) {
    .fractal-web { --u: calc(100cqw / 760);
      --hw-gutter: calc(48 * var(--u));
      --hw-edge: calc(24 * var(--u));
      --hw-text-eyebrow: max(calc(18 * var(--u)), .72rem);
      --hw-text-body: max(calc(21 * var(--u)), .92rem); }
  }
  small{font-size:1.0625rem} code{font-size:0.875rem}
</style>
</head>
<body>
<!-- content goes here -->
</body>
</html>
```

This is the Hermes "single-file philosophy" — all the design system in one HTML's `<style>`. The CSS variables are scoped under `.fractal-web` so they don't conflict with other sites' variables.

---

## Step 2 — Body markup (15 min)

```html
<canvas data-noise="1" class="fixed inset-0" style="mix-blend-mode:color-dodge;z-index:101"></canvas>
<canvas data-noise="2" class="fixed inset-0" style="mix-blend-mode:difference;z-index:201"></canvas>

<main class="relative z-2 mx-auto max-w-[1600px] p-8">
<div class="fractal-web [margin-inline:calc(50%-50dvw)] -my-8 w-dvw">
<div class="fractal-scroll" id="fractal-scroll">

<!-- Nav -->
<nav class="absolute inset-x-0 top-[var(--hw-frame)] z-20 flex items-start
            justify-between px-[var(--hw-gutter)] pt-[calc(50*var(--u))]">
  <a class="text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)]
             font-extrabold tracking-[0.03em] hover:underline max-md:hidden"
     href="https://fractal-labs.com">FRACTAL</a>
  <a class="text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)]
             font-extrabold tracking-[0.03em] hover:underline max-md:order-last"
     href="/docs">Docs</a>
  <div class="flex flex-col items-center gap-[calc(16*var(--u))] leading-none">
    <a class="text-center text-[length:clamp(1.1rem,calc(40*var(--u)),2.5rem)]
               font-extrabold tracking-[0.03em]" href="/">FRACTAL<br>Agent</a>
  </div>
  <a class="text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)]
             font-extrabold tracking-[0.03em] hover:underline max-md:order-first"
     href="https://portal.fractal-labs.com">Portal</a>
  <a class="inline-flex items-center gap-[calc(10*var(--u))] hover:underline max-md:hidden
             text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)]
             font-extrabold tracking-[0.03em]" href="#downloads">Install
     <svg fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
          class="size-[0.7em]"><path d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>
  </a>
</nav>

<!-- Hero -->
<header class="fractal-vignette relative flex min-h-[calc(1360*var(--u))]
               items-center overflow-hidden max-md:min-h-[88dvh]
               max-md:items-end max-md:pb-[8dvh]">
  <div class="relative z-3 mx-[var(--hw-gutter)] flex
              w-[calc(980*var(--u))] flex-col gap-[calc(30*var(--u))]
              max-md:w-auto md:ms-[calc(var(--hw-gutter)-var(--hw-frame))]">
    <p class="fractal-mono text-[length:var(--hw-text-eyebrow)]
              tracking-[0.18em]">Open Source · MIT License</p>
    <h1 class="flex flex-col text-[calc(132*var(--u))] leading-[0.88]
               font-light tracking-[0.03em] max-md:text-[15.5vw]">
      <span>The Agent</span>
      <span>That Thinks</span>
      <span>For You</span>
    </h1>
    <div class="flex flex-col items-start gap-[calc(24*var(--u))]
                mt-[calc(20*var(--u))] self-start" id="hero-button">
      <a class="group bg-hermes-fg text-hermes relative inline-flex items-center
                px-[calc(30*var(--u))] py-[calc(20*var(--u))]
                shadow-[0_4px_14px_rgba(0,0,0,0.25)]
                transition-colors hover:bg-white
                pl-[calc(68*var(--u))] whitespace-nowrap
                text-hermes-fg pointer-events-none bg-transparent
                shadow-none ring-1 ring-inset"
         aria-disabled="true" href="#downloads">
        <svg fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" class="absolute top-1/2 left-[calc(30*var(--u))]
             size-[calc(26*var(--u))] -translate-y-1/2">
          <path d="M4 4h16v16H4Z"></path>
        </svg>
        <span class="fractal-mono text-[length:var(--hw-text-body)]
                   leading-none" id="hero-text">/\-_=+&lt; -/= ~:*-/</span>
      </a>
    </div>
  </div>
</header>

<!-- Preview section -->
<section class="relative z-50 px-[var(--hw-edge)]" id="preview">
  <div class="relative aspect-[2174/1273] w-full overflow-hidden">
    <video class="absolute inset-0 size-full object-cover object-center"
           id="preview-video" loop muted playsinline
           poster="img/showcase.webp" preload="metadata">
      <source src="https://fractal-assets.com/showcase.mp4" type="video/mp4">
    </video>
    <div class="pointer-events-none absolute inset-0
                border-[calc(55*var(--u))] border-[color:var(--hw-bg)]
                mix-blend-lighten max-md:border-[16px]"></div>
  </div>
</section>

<!-- Downloads (3 platform cards) -->
<section class="relative z-1 grid grid-cols-1 gap-[var(--hw-gap)]
                px-[var(--hw-gutter)] pt-[calc(60*var(--u))]
                pb-[calc(120*var(--u))] md:grid-cols-3" id="downloads">
  <div class="group fractal-noise fractal-vignette bg-hermes relative
              flex aspect-[627/547] flex-col items-center justify-center
              overflow-hidden text-center max-md:aspect-[2/1]">
    <img alt="" aria-hidden="true" class="pointer-events-none absolute
         inset-0 size-full object-cover opacity-45" src="img/platform-mac.webp">
    <span aria-hidden="true" class="fractal-arc"></span>
    <div class="relative z-2 flex flex-col items-center gap-[calc(30*var(--u))]">
      <p class="fractal-mono text-[length:var(--hw-text-eyebrow)]
                tracking-[0.18em] text-[calc(23*var(--u))]
                tracking-[0.1em] opacity-70">macOS 12+</p>
      <h3 class="text-[calc(64*var(--u))] leading-none font-normal normal-case">Mac OS</h3>
      <a class="group bg-hermes-fg text-hermes relative inline-flex items-center
                px-[calc(30*var(--u))] py-[calc(20*var(--u))]
                shadow-[0_4px_14px_rgba(0,0,0,0.25)]
                transition-colors hover:bg-white pl-[calc(68*var(--u))]"
         download href="https://fractal-assets.com/FRACTAL-Setup.dmg">
        <svg fill="currentColor" viewBox="0 0 27.6822 34"
             class="absolute top-1/2 left-[calc(30*var(--u))]
             size-[calc(26*var(--u))] -translate-y-1/2">
          <path d="M26.7981 11.5918C26.6009 11.7448 23.1189 13.7068 23.1189 18.0694
                   C23.1189 23.1155 27.5496 24.9007 27.6822 24.9449
                   C27.6618 25.0537 26.9783 27.3897 25.3461 29.77 ..."/>
        </svg>
        <span class="fractal-mono text-[length:var(--hw-text-body)] leading-none">Download</span>
      </a>
    </div>
  </div>
  <!-- repeat for Windows and Linux, swap icons and "Download" labels -->
</section>

<!-- Feature grid (6 articles) -->
<div class="fractal-feature-parallax" id="feature-parallax">
  <img alt="FRACTAL" id="feature-badge"
       class="sticky top-[calc(var(--hw-frame)+30*var(--u))] z-10
              mb-[calc(-120*var(--u))] ml-[calc(30*var(--u))]
              block h-[calc(120*var(--u))] w-[calc(84*var(--u))] max-md:hidden"
       src="img/badge.webp">
  <section class="fractal-feature-panel bg-hermes-paper text-hermes relative
                 pt-[calc(30*var(--u))]" id="feature-panel">
    <div class="flex absolute top-[calc(30*var(--u))] right-[calc(30*var(--u))] z-2">
      <span class="fractal-mono border border-current px-[calc(15*var(--u))]
                   py-[calc(10*var(--u))] text-[0.75rem] opacity-90
                   not-first:border-l-0">Feature</span>
      <span class="fractal-mono border border-current px-[calc(15*var(--u))]
                   py-[calc(10*var(--u))] text-[0.75rem] opacity-90
                   not-first:border-l-0">Preview</span>
    </div>
    <div class="relative z-1 grid grid-cols-1 gap-x-[calc(30*var(--u))]
                gap-y-[calc(150*var(--u))] pt-[calc(60*var(--u))]
                pr-[calc(30*var(--u))] pl-[calc(150*var(--u))]
                max-md:gap-y-[calc(90*var(--u))]
                max-md:px-[var(--hw-gutter)] md:grid-cols-3">
      <article class="flex flex-col gap-[calc(60*var(--u))] text-left">
        <div class="flex flex-col gap-[calc(50*var(--u))] pr-[calc(180*var(--u))] max-md:pr-0">
          <p class="fractal-mono text-[length:var(--hw-text-eyebrow)]
                    tracking-[0.18em] opacity-80">#1 Connect</p>
          <h2 class="w-[calc(486*var(--u))] max-w-full
                   text-[calc(64*var(--u))] leading-none font-light">Lives Everywhere</h2>
        </div>
        <div class="fractal-noise bg-hermes relative aspect-[666/574] overflow-hidden">
          <img alt="" aria-hidden="true"
               class="fractal-parallax pointer-events-none absolute inset-0
                      size-full object-cover mix-blend-screen"
               src="img/feature-connect.webp">
        </div>
        <p class="fractal-mono pr-[calc(180*var(--u))]
                  text-[length:var(--hw-text-body)] leading-[1.4] opacity-90 max-md:pr-0">
          Slack, Discord, CLI, API — and a growing list of surfaces.
          One agent, one memory, every channel.
        </p>
      </article>
      <!-- repeat for #2 Remember, #3 Schedule, #4 Delegate, #5 Search, #6 Sandbox -->
    </div>
    <div class="fractal-wordmark relative z-1 mt-[12rem] w-full
                -translate-x-[0.7%] translate-y-[8px] text-center max-md:mt-[4rem]"
         id="feature-stop">FRACTAL</div>
  </section>
</div>
</div>

<!-- Closing footer (with footer reveal on scroll) -->
<footer class="fractal-footer" id="fractal-footer" style="z-index:1;
  background:var(--hw-bg); height:100dvh; opacity:0; pointer-events:none;
  position:fixed; inset:0; overflow:hidden;">
  <div class="absolute inset-x-0 top-[7dvh] z-10 mx-auto flex
              w-[calc(980*var(--u))] max-w-full flex-col items-center
              gap-[min(calc(36*var(--u)),3dvh)] text-center
              max-md:px-[var(--hw-gutter)]">
    <p class="fractal-mono text-[length:var(--hw-text-eyebrow)]
              tracking-[0.18em]">Free · Plus · Pro · Enterprise</p>
    <h2 class="text-[min(calc(112*var(--u)),8dvh)] leading-none font-light
               tracking-[0.03em] max-md:text-[2.6rem]">FRACTAL Portal</h2>
    <p class="fractal-mono w-[calc(800*var(--u))] max-w-full
              text-[length:var(--hw-text-body)] leading-[1.4] opacity-90">
      All paid tiers include monthly credits, access to 200+ models,
      and priority compute.
    </p>
    <a class="group bg-hermes-fg text-hermes relative inline-flex items-center
              px-[calc(30*var(--u))] py-[calc(20*var(--u))]
              shadow-[0_4px_14px_rgba(0,0,0,0.25)]
              transition-colors hover:bg-white"
       href="https://portal.fractal-labs.com/manage-subscription">
      <span class="fractal-mono text-[length:var(--hw-text-body)] leading-none">View All Plans</span>
    </a>
  </div>
  <div aria-hidden="true" class="fractal-ghost fractal-footer-wordmark max-md:hidden"
       style="top:31dvh; font-size:min(calc(698 * var(--u)), 32dvh);
       text-align:center; transform:translate(0, 3.3rem);
       position:absolute; inset-inline:0;">
    <span>FRACTAL</span>
    <span data-portal-word="true" style="margin-top:.15em; font-size:.7275em;">PORTAL</span>
  </div>
  <div class="fractal-mono absolute bottom-[7dvh] left-[var(--hw-gutter)] z-20
              text-[length:var(--hw-text-eyebrow)] leading-none
              max-md:bottom-[3dvh] max-md:text-[0.62rem]">
    <p>FRACTAL Agent v1.0.0</p>
  </div>
  <div class="fractal-mono absolute right-[var(--hw-gutter)] bottom-[7dvh] z-20
              flex flex-col items-end gap-[calc(8*var(--u))] text-right
              text-[length:var(--hw-text-eyebrow)] leading-none
              max-md:right-auto max-md:bottom-[calc(3dvh+2.2rem)]
              max-md:left-[var(--hw-gutter)] max-md:items-start
              max-md:text-left max-md:text-[0.62rem]">
    <p>FRACTAL Labs</p>
    <p>MIT License · 2026</p>
  </div>
</footer>

<!-- Frame overlay -->
<div aria-hidden="true" class="fractal-frame"></div>
</div>
</main>

<script type="module">
  import { initAllNoise } from "./js/noise.js";
  import { scramble, scrambleWithOSLabel, detectOS } from "./js/scramble.js";
  import { initParallax, initReveal } from "./js/scroll-parallax.js";
  import { splitText } from "./js/type-splitter.js";

  initAllNoise();
  initParallax();
  initReveal();
  splitText();

  // Hero button: scramble then swap to OS label
  scrambleWithOSLabel("#hero-text", {
    delay: 900,
    onLabel: ({ os }) => {
      if (os === "linux") return "Install via terminal";
      if (os === "mac")   return "Download for Mac OS";
      if (os === "windows") return "Download for Windows";
      return "Download";
    },
  });

  // Footer reveal on scroll
  const footer = document.getElementById("fractal-footer");
  const featureStop = document.getElementById("feature-stop");
  if (footer && featureStop) {
    const update = () => {
      const stopTop = featureStop.getBoundingClientRect().top;
      const vh = innerHeight;
      const f = Math.min(1, Math.max(0, (vh * 0.72 - stopTop) / (vh * 0.38)));
      footer.style.opacity = f.toString();
      footer.style.pointerEvents = f > 0.98 ? "auto" : "none";
    };
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    update();
  }
</script>
</body>
</html>
```

---

## Step 3 — Override the palette (1 min)

In `css/tokens.css`, the defaults are already the Hermes Blue palette. No changes needed. The site just works.

If you want to re-skin to a different palette, just override the 5 brand colors in `:root` and pick a different `.theme-*` class for the body (none here, since we use `.fractal-web` as a custom wrapper).

---

## Step 4 — Test (5 min)

```bash
cd fractal
python -m http.server 8000
# Open http://127.0.0.1:8000
```

You should see:
- Electric blue background
- 132px "The Agent / That Thinks / For You" in 3 lines
- A frame border around the viewport
- Film grain from the 3 noise canvases
- "Open Source · MIT License" eyebrow in mono
- A download button showing scrambled text (wait 900ms, then it'll settle into the OS-specific label)
- 3 platform cards (mac/Windows/Linux) with a faint noise overlay
- 6 feature articles in a 3-column grid
- A massive "FRACTAL PORTAL" wordmark that fades in as you scroll to the bottom

---

## Step 5 — The 48-point audit (10 min)

This is a Hermes-style site, so most audit items will pass by default. The most likely fails:

1. **F1. Headline is ≤ 8 words** — "The Agent That Thinks For You" = 6 words ✅
2. **F2. Subhead is ≤ 24 words** — "Open Source · MIT License" = 4 words ✅
3. **F5. There is a "v1.0" or version label** — "FRACTAL Agent v1.0.0" ✅
4. **F6. There is a way to contact** — "View All Plans" CTA + "Portal" link ✅
5. **D1. There is a 1+ second hero animation** — scramble + parallax ✅
6. **D7. prefers-reduced-motion is respected** — the 5 JS modules already handle this in `base.css` ✅

Likely score: 95+.

---

## Step 6 — Ship (1 min)

```bash
# If you have surge.sh or netlify-cli:
npx surge . fractal.surge.sh

# Or just deploy the index.html and the css/ and js/ folders anywhere.
```

Total time: ~45 minutes.
Total files: 1 HTML + 3 CSS + 5 JS = 9 files.
Total size: ~80KB (excluding images).

---

## Why this works

This example demonstrates the **Hermes philosophy**:
- One HTML file, no build step
- All design tokens in CSS variables
- 5 zero-dep JS modules (no GSAP, no Lenis, no jQuery)
- Frame overlay + 3 noise canvases = instant "premium" feel
- Scramble text + parallax + reveal = 60fps smooth without a library

For a 1-page product landing, this is the **highest ROI** approach. A team could ship 4-5 of these per week.

---

## What's different from Example 01 (Fashion)

| Aspect | Fashion (Example 01) | AI Tool (Example 02) |
|--------|---------------------|---------------------|
| **Color temperature** | Warm (pastel + ink) | Cool (electric blue + acid yellow) |
| **Sections** | 6 (hero + 5 + closing) | 4 (hero + preview + downloads + features + closing) |
| **JS modules** | 5 (no smooth-scroll) | 5 (no smooth-scroll) |
| **Special effects** | char-reveal, parallax, marquee | frame overlay, noise, scramble, footer reveal |
| **Image count** | 8 (full editorial) | 3-4 (single hero + 3 platforms + 6 features) |
| **CTA** | Email signup | View on GitHub + Download |
| **Build time** | 60 min | 45 min |
| **Best for** | Brand showcase, fashion | Product launch, AI tools |

Both examples use the **same Skill** — just different palettes, fonts, and patterns. The Skill's design system is the constant.
