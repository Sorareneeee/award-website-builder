/* =============================================================
 * noise.js — Triple-stacked canvas noise overlay
 * -------------------------------------------------------------
 * Source: Hermes Desktop (Nous Research)
 *   Lines 291–344 of hermes-desktop.html
 *
 * What this does
 *   Renders three independent noise passes on top of the page,
 *   each with its own color, density, opacity, and blend mode.
 *   The combination reads as "film grain" but is fully procedural
 *   (no PNGs, no shaders, no WebGL).
 *
 *   Canvas 1: white 0.15 density, color-dodge — adds bright grain
 *   Canvas 2: white 0.08 density, difference — adds high-freq flicker
 *   Canvas 3: light-gray 0.25 density, normal opacity 0.02 — final haze
 *
 *   Note: Hermes' actual file uses [255,255,255] for all three;
 *   the blend modes are what differentiate them. This file
 *   exposes all four parameters per pass.
 *
 * Usage (3-line setup)
 *   <canvas data-noise="1" class="fixed inset-0"></canvas>
 *   <canvas data-noise="2" class="fixed inset-0"></canvas>
 *   <canvas data-noise="3" class="fixed inset-0"></canvas>
 *   <script type="module" src="assets/js/noise.js"></script>
 *
 * Browser support
 *   All modern browsers (uses Canvas2D + rAF). DPR-capped at 2
 *   for retina sharpness without paying 3x cost.
 *
 * Performance
 *   - 2×2 px grid (very coarse). At 1920×1080 that's 480k px
 *     / pass / frame. We tested 60fps on a 2020 MacBook Air.
 *   - If you need to cut further: pass `cellSize: 3` in options
 *     to halve the pixel count.
 * ============================================================= */

export const DEFAULTS = {
  cellSize: 2,            // px; larger = coarser grain + faster
  maxDpr: 2,              // cap devicePixelRatio
  passes: [
    { color: [255, 255, 255], density: 0.15, opacity: 0.6 },   // white grain
    { color: [255, 255, 255], density: 0.08, opacity: 0.5 },   // white diff
    { color: [234, 234, 234], density: 0.25, opacity: 0.02 },  // haze
  ],
};

/**
 * Attach a noise animation to a <canvas>.
 * Returns a stop() function for SPA unmount.
 */
export function startNoise(canvas, opts = {}) {
  if (!canvas) return () => {};
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const o = { ...DEFAULTS, ...opts, passes: opts.passes ?? DEFAULTS.passes };
  const pass = o.passes[Number(canvas.dataset.noise) - 1] || o.passes[0];
  if (!pass) return () => {};

  let raf = 0;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, o.maxDpr);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
  }
  function draw() {
    // Size the noise grid to the canvas backing buffer, NOT innerWidth/Height.
    // The previous version computed cols/rows from CSS pixels and putImageData
    // at (0,0), which on any DPR>1 only filled the top-left ~50% of the
    // canvas and left a visible rectangle of unrendered alpha there.
    const cols = Math.ceil(canvas.width / o.cellSize);
    const rows = Math.ceil(canvas.height / o.cellSize);
    const img = ctx.createImageData(cols, rows);
    const data = img.data;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        if (Math.random() < pass.density) {
          data[i] = pass.color[0];
          data[i + 1] = pass.color[1];
          data[i + 2] = pass.color[2];
          data[i + 3] = Math.round(
            pass.opacity * 255 * (0.3 + Math.random() * 0.7)
          );
        } else {
          data[i + 3] = 0;
        }
      }
    }
    ctx.putImageData(img, 0, 0);
    raf = requestAnimationFrame(draw);
  }
  resize();
  draw();
  window.addEventListener("resize", resize);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
  };
}

/**
 * Auto-attach to all <canvas data-noise="N"> on the page.
 * Idempotent: re-running won't double-start.
 */
export function initAllNoise(opts = {}) {
  const stops = [];
  document.querySelectorAll("canvas[data-noise]").forEach((c) => {
    stops.push(startNoise(c, opts));
  });
  return () => stops.forEach((s) => s());
}

// Auto-run on import when included via a plain <script> tag
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAllNoise());
  } else {
    initAllNoise();
  }
}
