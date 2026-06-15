/* =============================================================
 * noise.js — DISABLED
 * -------------------------------------------------------------
 * The triple-stacked canvas noise overlay was removed per design
 * direction. The previous version rendered per-pixel film grain
 * on top of every page that included it; that effect is no
 * longer wanted (no aesthetic value, no functional purpose).
 *
 * The exported API is preserved as no-ops so existing
 * `import { initAllNoise } from "../js/noise.js"` calls in HTML
 * keep working — they just do nothing now.
 * ============================================================= */

export const DEFAULTS = {
  cellSize: 2,
  maxDpr: 2,
  passes: [],
};

export function startNoise(canvas, opts = {}) {
  // No-op: noise overlay removed.
  // If a stray <canvas data-noise> exists, hide it so it can't
  // accidentally flash anything on screen during page load.
  if (canvas) {
    canvas.style.display = "none";
  }
  return () => {};
}

export function initAllNoise(opts = {}) {
  // No-op: nothing to attach to.
  // Also hide any pre-rendered <canvas data-noise> elements.
  if (typeof document !== "undefined") {
    document.querySelectorAll("canvas[data-noise]").forEach((c) => {
      c.style.display = "none";
    });
  }
  return () => {};
}

// Auto-run preserved for compatibility; does nothing.
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAllNoise());
  } else {
    initAllNoise();
  }
}
