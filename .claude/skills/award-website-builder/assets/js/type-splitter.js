/* =============================================================
 * type-splitter.js — SplitType alternative (zero-dep)
 * -------------------------------------------------------------
 * Source: distilled from DICH Fashion's use of SplitType
 *
 * What this does
 *   Splits a text node into spans of words / chars / lines so
 *   you can animate each part individually. The result looks
 *   identical to SplitType 0.3.4 but is 100 LOC, has no
 *   dependencies, and uses simple Range APIs.
 *
 * Usage
 *   <h1 data-split="chars">Future Mode of DICH</h1>
 *   <h2 data-split="words">The Agent That Grows</h2>
 *   <p  data-split="lines">Long paragraph...</p>
 *
 *   <script type="module" src="assets/js/type-splitter.js"></script>
 *
 * Result DOM (for `chars`)
 *   <h1 data-split="chars">
 *     <span class="char" style="--i:0">F</span>
 *     <span class="char" style="--i:1">u</span>
 *     ...
 *   </h1>
 *
 * CSS hook
 *   [data-split="chars"] .char { animation: ... var(--i) × 30ms ... }
 *   See effects.css for sample .split-reveal / .split-up.
 *
 * When to use SplitType instead
 *   - You need to support ancient browsers (IE11, etc.)
 *   - You need very precise kerning preservation
 *   - You need to integrate with GSAP's SplitText plugin
 *   Otherwise this is enough.
 * ============================================================= */

const SPLIT_ATTR = "data-split";

function splitChars(el) {
  const text = el.textContent;
  el.textContent = "";
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.className = "char";
    span.style.setProperty("--i", String(i));
    span.textContent = text[i] === " " ? " " : text[i];
    el.appendChild(span);
  }
}

function splitWords(el) {
  const text = el.textContent;
  el.textContent = "";
  const words = text.split(/(\s+)/);   // keep whitespace
  words.forEach((w, i) => {
    if (/^\s+$/.test(w)) {
      el.appendChild(document.createTextNode(w));
    } else {
      const span = document.createElement("span");
      span.className = "word";
      span.style.setProperty("--i", String(i));
      span.textContent = w;
      el.appendChild(span);
    }
  });
}

function splitLines(el) {
  // Approximate lines by wrapping each word and re-flowing with
  // a hidden inline-block probe. Good enough for headlines; for
  // paragraphs prefer SplitType (line-breaks need full layout).
  const text = el.textContent;
  el.textContent = "";
  const words = text.split(/\s+/);
  const probe = document.createElement("span");
  probe.style.cssText =
    "visibility:hidden;display:inline-block;white-space:nowrap;";
  el.appendChild(probe);
  const wordsPerLine = [];
  let line = [];
  for (const w of words) {
    line.push(w);
    probe.textContent = line.join(" ");
    if (probe.offsetWidth > el.clientWidth) {
      line.pop();
      wordsPerLine.push(line);
      line = [w];
    }
  }
  if (line.length) wordsPerLine.push(line);
  el.textContent = "";
  wordsPerLine.forEach((ws, i) => {
    const span = document.createElement("span");
    span.className = "line";
    span.style.setProperty("--i", String(i));
    span.textContent = ws.join(" ");
    el.appendChild(span);
    el.appendChild(document.createTextNode(" "));
  });
}

export function splitText(root = document) {
  root.querySelectorAll(`[${SPLIT_ATTR}]`).forEach((el) => {
    if (el.dataset.splitDone) return;
    const mode = el.getAttribute(SPLIT_ATTR);
    if (mode === "chars")  splitChars(el);
    else if (mode === "words") splitWords(el);
    else if (mode === "lines") splitLines(el);
    el.dataset.splitDone = "1";
  });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => splitText());
  } else {
    splitText();
  }
}
