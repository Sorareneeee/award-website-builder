/* =============================================================
 * smooth-scroll.js — RAF-throttled smooth scroll + parallax
 * -------------------------------------------------------------
 * Source: Hermes Desktop (Nous Research)
 *   Lines 346–446 of hermes-desktop.html
 *
 * What this does (all in ONE rAF loop, not three)
 *   1. Panel parallax      — translates a panel by -py = vh*0.18 cap
 *   2. Badge parallax      — sticks a badge to the panel top edge
 *   3. Image parallax      — translates each .hw-parallax image by
 *                            a -py derived from the image's relative
 *                            scroll position
 *   4. Footer reveal       — fades the fixed footer in/out as the
 *                            bottom of the page approaches
 *   5. Haze parallax sink  — translates the .haze layer at
 *                            0.32 × scrollY, creating a "depth"
 *                            effect against the foreground
 *   6. Anchor smooth scroll — rewrites anchor clicks to smoothScroll
 *   7. Video play/pause    — IntersectionObserver toggles playback
 *
 * Why it matters
 *   The original is ~100 lines of plain ES5. We rewrote it as ESM
 *   + the same algorithm, so a 2019-era AI (or human) can drop it
 *   in without understanding GSAP / Lenis / R3F.
 *
 * Usage
 *   <script type="module" src="assets/js/smooth-scroll.js"></script>
 *
 *   Markup contract (all optional, missing IDs are skipped):
 *     <div id="scroll-root">           <!-- root container -->
 *     <div id="parallax-panel">        <!-- optional -->
 *       <img id="parallax-badge">      <!-- optional -->
 *       <div id="parallax-stop">       <!-- optional, anchor point -->
 *     </div>
 *     <img class="parallax"> ... </img>  <!-- 0..N parallax images -->
 *     <footer id="footer">             <!-- optional, gets fade -->
 *     <div class="haze"> ... </div>    <!-- optional, gets parallax sink -->
 *     <video id="autoplay-video">      <!-- optional, gets IO play -->
 * ============================================================= */

const SELECTORS = {
  panel:   "#parallax-panel",
  badge:   "#parallax-badge",
  stop:    "#parallax-stop",
  footer:  "#footer",
  parallax: ".parallax",
  video:   "#autoplay-video",
  haze:    ".haze",            // atmospheric blur layer (parallax sink)
};

const TUNING = {
  panelMaxOffset: 0.18,   // × vh, max upward panel translation
  panelFactor:    0.14,   // how fast the panel chases the scroll
  badgePadding:   16,     // px above panel-stop when badge reanchors
  imageMaxOffset: 0.10,   // × image height
  footerRevealVh: 0.38,   // over how many vh the footer fades in
  footerStartVh:  0.72,   // at what point the fade starts
  hazeParallax:   0.32,   // fraction of scrollY to translate haze layer
};

export function initSmoothScroll(opts = {}) {
  const S = { ...SELECTORS, ...opts.selectors };
  const T = { ...TUNING,    ...opts.tuning };

  const panel   = document.querySelector(S.panel);
  const badge   = document.querySelector(S.badge);
  const stop    = document.querySelector(S.stop);
  const footer  = document.querySelector(S.footer);
  const video   = document.querySelector(S.video);
  const haze    = document.querySelector(S.haze);
  const parallaxImgs = document.querySelectorAll(S.parallax);

  let py = 0, stopTop = 0, badgeOffset = 0;
  let imgs = [];
  let lastPy = "", lastBadge = "", lastHaze = "", footerOpacity = -1;

  function init() {
    if (panel) py = panel.getBoundingClientRect().top + scrollY;
    if (panel && stop) {
      stopTop =
        stop.getBoundingClientRect().top + scrollY
        - (panel.getBoundingClientRect().top + scrollY);
    }
    if (badge) {
      const cs = getComputedStyle(badge);
      badgeOffset = (parseFloat(cs.top) || 0) + badge.offsetHeight;
    }
    imgs = Array.from(parallaxImgs).map((el) => {
      const p = el.parentElement;
      return {
        el,
        top: p.getBoundingClientRect().top + scrollY,
        h: p.offsetHeight,
      };
    });
    // Reset damping state so the first update() always writes.
    lastPy = ""; lastBadge = ""; lastHaze = ""; footerOpacity = -1;
  }

  function update() {
    const s = scrollY;
    const vh = innerHeight;
    const lim = Math.max(1, document.documentElement.scrollHeight - vh);

    // (1) Panel parallax
    if (panel) {
      const panelTop = Math.max(0, py - s);
      const p = Math.min(vh * T.panelMaxOffset, panelTop * T.panelFactor);
      const npy = (-p).toFixed(1) + "px";
      if (npy !== lastPy) {
        panel.style.setProperty("--py", npy);
        lastPy = npy;
      }
    }

    // (2) Badge follows panel-stop edge
    if (badge && panel) {
      const badgeY = py + stopTop - s - T.badgePadding;
      const trans = badgeY > badgeOffset
        ? "translateY(" + (badgeY - badgeOffset).toFixed(1) + "px)"
        : "";
      if (trans !== lastBadge) {
        badge.style.transform = trans;
        lastBadge = trans;
      }
    }

    // (3) Per-image parallax
    imgs.forEach((img) => {
      const v = (img.top - s + img.h / 2 - vh / 2) / (vh / 2 + img.h / 2);
      const clamped = Math.max(-1, Math.min(1, v));
      const off = (-(clamped * img.h * T.imageMaxOffset)).toFixed(1) + "px";
      img.el.style.setProperty("--py-img", off);
    });

    // (4) Footer reveal
    if (footer) {
      const f = Math.min(
        1,
        Math.max(0, (vh * T.footerStartVh - (lim - s)) / (vh * T.footerRevealVh))
      );
      if (Math.abs(f - footerOpacity) > 0.01) {
        footerOpacity = f;
        footer.style.setProperty("--hw-footer-opacity", f.toString());
        footer.style.setProperty("--hw-footer-pe", f > 0.98 ? "auto" : "none");
      }
    }

    // (5) Haze parallax sink — translate the atmospheric blur
    //     layer downward as the user scrolls. The layer lags
    //     behind the foreground by `hazeParallax` × scrollY,
    //     which gives a "depth" feel: content moves at full
    //     speed, haze moves at ~1/3 speed. The haze CSS picks
    //     this up via `transform: translate3d(0, var(--py-haze), 0)`.
    if (haze) {
      const hazeY = (s * T.hazeParallax).toFixed(1) + "px";
      if (hazeY !== lastHaze) {
        haze.style.setProperty("--py-haze", hazeY);
        lastHaze = hazeY;
      }
    }
  }

  // rAF throttling — never more than one update per frame
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => { update(); ticking = false; });
      ticking = true;
    }
  }

  init();
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { init(); update(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { init(); update(); });
  }

  // (6) Anchor smooth scroll
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  });

  // (7) Video IO play/pause
  if (video) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      },
      { rootMargin: "-35% 0px -35% 0px" }
    );
    io.observe(video);
  }

  return {
    refresh: () => { init(); update(); },
    destroy: () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", init);
    },
  };
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initSmoothScroll());
  } else {
    initSmoothScroll();
  }
}
