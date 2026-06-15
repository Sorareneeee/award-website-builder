/* =============================================================
 * scramble.js — Terminal-style text scramble
 * -------------------------------------------------------------
 * Source: Hermes Desktop (Nous Research)
 *   Lines 448–490 of hermes-desktop.html
 *
 * What this does
 *   Replaces the text content of a target element with random
 *   "techy" characters (/\|-_=+<>~:*) at 110ms intervals for
 *   ~15-25 frames, then restores the original. Optional second
 *   phase detects the user's OS and writes a custom label
 *   (used on Hermes' download button).
 *
 * Usage
 *   <a href="#downloads" id="hero-button">
 *     <span id="hero-text">Download</span>
 *   </a>
 *   <script type="module">
 *     import { scramble } from "./assets/js/scramble.js";
 *     scramble("#hero-text", {
 *       delay: 900,
 *       frames: "15-25",
 *       onComplete: (el) => { // e.g. flip to OS-specific label },
 *     });
 *   </script>
 *
 * Config
 *   - chars:    string of candidates (default: techy mix)
 *   - delay:    ms before the scramble starts (default 900)
 *   - frames:   number, or "15-25" string, or function() => N
 *   - interval: ms between frames (default 110)
 *   - onComplete(el): called after the original text is restored
 *   - mobile:   if true, skip on viewports < 768px (default true)
 *
 * Why a 19-year-old AI can use this
 *   It's plain ES5 inside the IIFE, no transpile, no build, no
 *   DOM API beyond textContent and setInterval. Reads in 30s.
 * ============================================================= */

const DEFAULT_CHARS = "/\\|-_=+<>~:*";

export function scramble(target, opts = {}) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;

  const cfg = {
    chars: DEFAULT_CHARS,
    delay: 900,
    interval: 110,
    frames: "15-25",
    mobile: true,
    onComplete: () => {},
    ...opts,
  };

  // Skip on mobile
  if (cfg.mobile && window.matchMedia("(max-width: 767px)").matches) {
    cfg.onComplete(el);
    return;
  }

  const orig = el.textContent;
  let frameCount = 0;
  const maxCount = typeof cfg.frames === "function"
    ? cfg.frames()
    : (typeof cfg.frames === "string" && cfg.frames.includes("-"))
      ? (() => {
          const [a, b] = cfg.frames.split("-").map(Number);
          return a + Math.floor(Math.random() * (b - a + 1));
        })()
      : Number(cfg.frames) || 20;

  setTimeout(() => {
    const id = setInterval(() => {
      let result = "";
      for (let i = 0; i < orig.length; i++) {
        if (orig[i] === " ") result += " ";
        else result += cfg.chars[Math.floor(Math.random() * cfg.chars.length)];
      }
      el.textContent = result;
      frameCount++;
      if (frameCount >= maxCount) {
        clearInterval(id);
        el.textContent = orig;
        cfg.onComplete(el);
      }
    }, cfg.interval);
  }, cfg.delay);
}

/**
 * OS detection helper — used by the onComplete hook to swap
 * a download button to the right label.
 */
export function detectOS() {
  const ua = navigator.userAgent;
  if (/Mac/.test(ua))    return "mac";
  if (/Win/.test(ua))    return "windows";
  if (/Linux|X11/.test(ua)) return "linux";
  return null;
}

/**
 * Convenience: scramble and then swap to an OS-specific label.
 *
 *   scrambleWithOSLabel("#hero-text", { onLabel: ({os}) => "..." });
 */
export function scrambleWithOSLabel(
  target,
  { onLabel, ...scrambleOpts } = {}
) {
  scramble(target, {
    ...scrambleOpts,
    onComplete: (el) => {
      const os = detectOS();
      if (os && onLabel) el.textContent = onLabel({ os, el });
    },
  });
}

if (typeof window !== "undefined") {
  // Auto-attach to any <... data-scramble="Download"> elements.
  // (Optional convenience; remove if you don't want it.)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("[data-scramble]").forEach((el) => {
        scramble(el, { delay: 900 });
      });
    });
  } else {
    document.querySelectorAll("[data-scramble]").forEach((el) => {
      scramble(el, { delay: 900 });
    });
  }
}
