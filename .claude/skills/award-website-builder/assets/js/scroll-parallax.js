/* =============================================================
 * scroll-parallax.js — GSAP-free per-element parallax
 * -------------------------------------------------------------
 * Source: distilled from DICH Fashion's use of GSAP ScrollTrigger
 *
 * What this does
 *   For each element with [data-parallax-speed="N"], translates
 *   the element vertically as the user scrolls. No GSAP required.
 *   Drop-in replacement for the most common ScrollTrigger usage.
 *
 *   speed > 0  → element moves DOWNWARD slower than scroll (floats)
 *   speed < 0  → element moves UPWARD slower than scroll
 *   speed = 0  → no parallax (default, no work done)
 *
 *   Speed is expressed as "fraction of scroll distance the
 *   element lags behind". 0.2 = element moves 80% as fast as
 *   the page (i.e. appears to lag 20%).
 *
 * Usage
 *   <img src="..." data-parallax-speed="0.2" data-parallax-axis="y">
 *   <div  data-parallax-speed="-0.3">floats upward</div>
 *
 *   <script type="module" src="assets/js/scroll-parallax.js"></script>
 *
 * Pair with CSS:
 *   [data-parallax-speed] { will-change: transform; }
 *
 * Browser support
 *   All modern browsers. Uses rAF + IntersectionObserver to
 *   avoid paying for off-screen elements.
 *
 * When to use ScrollTrigger instead
 *   - You need scrub-based timelines (animate A while B plays)
 *   - You need pin / snap behavior
 *   - You need scroll-triggered timeline control (pause/resume/seek)
 *   For everything else, this module is enough.
 * ============================================================= */

const SPEED_ATTR = "data-parallax-speed";
const AXIS_ATTR  = "data-parallax-axis";  // "y" (default) or "x"

export function initParallax(opts = {}) {
  const els = document.querySelectorAll(`[${SPEED_ATTR}]`);
  if (!els.length) return () => {};

  const items = [];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const item = items.find((i) => i.el === e.target);
        if (!item) return;
        item.active = e.isIntersecting;
      });
    },
    { rootMargin: "100px 0px 100px 0px" }
  );

  els.forEach((el) => {
    const speed = parseFloat(el.getAttribute(SPEED_ATTR));
    if (!speed || Number.isNaN(speed)) return;
    items.push({
      el,
      speed,
      axis: el.getAttribute(AXIS_ATTR) || "y",
      active: true,
    });
    el.style.willChange = "transform";
    io.observe(el);
  });

  function update() {
    const sy = window.scrollY;
    const vh = window.innerHeight;
    items.forEach((item) => {
      if (!item.active) return;
      const rect = item.el.getBoundingClientRect();
      // Distance from element center to viewport center
      const elCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const delta = elCenter - viewportCenter;
      // Translate by -(speed × delta)
      const offset = -item.speed * delta;
      if (item.axis === "x") {
        item.el.style.transform = `translate3d(${offset}px, 0, 0)`;
      } else {
        item.el.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    });
  }

  let raf = 0;
  function onScroll() {
    if (raf) return;
    raf = requestAnimationFrame(() => { update(); raf = 0; });
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", update);
    io.disconnect();
  };
}

/* =============================================================
 * scroll-reveal.js (paired with scroll-parallax.js)
 * -------------------------------------------------------------
 * Sets .is-in on elements as they enter the viewport. Pair with
 * .reveal / .reveal-stagger from effects.css.
 * ============================================================= */

const REVEAL_ATTR = "data-reveal";
const STAGGER_ATTR = "data-reveal-stagger";

export function initReveal() {
  const candidates = [
    ...document.querySelectorAll(`[${REVEAL_ATTR}]`),
    ...document.querySelectorAll(`[${STAGGER_ATTR}]`),
  ];
  if (!candidates.length) return () => {};

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );
  candidates.forEach((el) => io.observe(el));

  return () => io.disconnect();
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initParallax();
      initReveal();
    });
  } else {
    initParallax();
    initReveal();
  }
}
