# SVG Arsenal — 30+ Decorative Elements for Award-Winning Sites

> Every SVG here is a self-contained inline asset — copy-paste the `<svg>` block directly into your markup. No external dependencies, no JS, no fonts. Color is inherited from `currentColor` (set via CSS `color` on the parent) so each piece is themable.

---

## How to use

```html
<!-- Color follows parent CSS color -->
<svg class="deco" viewBox="0 0 24 24" fill="currentColor"> ... </svg>
```

```css
.deco { width: 1em; height: 1em; flex-shrink: 0; }
```

For 1em-sized glyphs (icons), set width/height via font-size.
For full-bleed decorations, set `width: 100%; height: auto;` and use a class.

---

## I. Iconic glyphs (1em)

These are 24×24, designed to render at body font-size.

### 01. Arrow Right (the universal "next" / CTA arrow)

```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14m0 0-6-6m6 6-6 6"/>
</svg>
```

### 02. Square Frame (the "frame overlay" reference; also used as a button icon)

```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="4" y="4" width="16" height="16"/>
</svg>
```

### 03. Apple Logo (for Mac download buttons; replace `fill` with currentColor for theme)

```html
<svg viewBox="0 0 27.6822 34" fill="currentColor">
  <path d="M26.7981 11.5918C26.6009 11.7448 23.1189 13.7068 23.1189 18.0694C23.1189 23.1155 27.5496 24.9007 27.6822 24.9449C27.6618 25.0537 26.9783 27.3897 25.3461 29.77C23.8908 31.8646 22.3708 33.9558 20.0586 33.9558C17.7464 33.9558 17.1513 32.6127 14.482 32.6127C11.8808 32.6127 10.9559 34 8.84088 34C6.72587 34 5.25013 32.0618 3.55336 29.6816C1.58796 26.8865 0 22.5443 0 18.423C0 11.8128 4.29803 8.30703 8.52805 8.30703C10.7757 8.30703 12.6493 9.78278 14.0604 9.78278C15.4035 9.78278 17.4982 8.21862 20.0552 8.21862C21.0243 8.21862 24.5063 8.30703 26.7981 11.5918ZM18.8413 5.42014C19.8988 4.16542 20.6469 2.42444 20.6469 0.683468C20.6469 0.442044 20.6265 0.19722 20.5823 0C18.8617 0.0646065 16.8147 1.14591 15.5804 2.57746C14.6113 3.67917 13.7068 5.42014 13.7068 7.18492C13.7068 7.45014 13.751 7.71537 13.7714 7.80038C13.8802 7.82078 14.057 7.84458 14.2338 7.84458C15.7776 7.84458 17.7192 6.81088 18.8413 5.42014Z"/>
</svg>
```

### 04. Windows Logo

```html
<svg viewBox="0 0 31.68 31.68" fill="currentColor">
  <path d="M0.000234413 4.46471L12.8476 2.71511L12.8533 15.1074L0.0121144 15.1805L0.000234413 4.46471ZM12.8414 16.5352L12.8515 28.9382L0.0103144 27.1728L0.00959441 16.452L12.8414 16.5352ZM14.3988 2.48615L31.4333 -9.72748e-06V14.9497L14.3988 15.0851V2.48615ZM31.4372 16.6518L31.4333 31.5342L14.3988 29.1301L14.375 16.6241L31.4372 16.6518Z"/>
</svg>
```

### 05. Linux / Tux (full mascot — use as decorative, not UI)

```html
<svg viewBox="0 0 40 40" fill="currentColor">
  <path d="M33.2171 27.904C33.5951 28.0554 33.921 28.3135 34.155 28.6468C34.3651 28.9595 34.5127 29.3372 34.6053 29.7799C34.6553 30.04 34.7153 30.2801 34.7803 30.5053C34.9029 30.9271 35.0875 31.3283 35.3281 31.6958C35.4457 31.8784 35.6033 32.0785 35.7984 32.3012C35.9659 32.4837 36.116 32.7189 36.2486 33.004C36.3708 33.2605 36.4365 33.5403 36.4412 33.8244C36.4509 34.0975 36.369 34.366 36.2086 34.5873C36.0454 34.8021 35.8466 34.9874 35.6208 35.1351C35.3206 35.3427 35.008 35.5253 34.6828 35.6828C34.3576 35.8379 34.0325 36.0005 33.7073 36.1706C33.2211 36.4023 32.7566 36.6768 32.3191 36.991C31.9289 37.2786 31.5362 37.6413 31.146 38.0865C30.6911 38.5961 30.1645 39.0368 29.5827 39.3947C29.2856 39.5832 28.963 39.7281 28.6248 39.8249C28.2996 39.915 27.9744 39.975 27.6493 40C26.8939 40 26.2686 39.8699 25.7733 39.6098C25.2781 39.3497 24.8479 38.8744 24.4827 38.1841C24.3776 37.9865 24.2751 37.8639 24.17 37.8114C24.0078 37.7427 23.837 37.6964 23.6623 37.6738L21.6838 37.5188C21.0335 37.4687 20.3706 37.4412 19.6928 37.4412C19.1298 37.442 18.5678 37.4871 18.012 37.5763C17.4392 37.6688 16.8714 37.7789 16.3111 37.909C16.1961 37.934 16.0785 38.034 15.9609 38.2016C15.8146 38.4049 15.6505 38.5949 15.4707 38.7694C15.227 39.0014 14.9431 39.187 14.6328 39.3172C14.1906 39.4899 13.7193 39.5757 13.2446 39.5698C12.8144 39.5698 12.3516 39.5248 11.8564 39.4347C11.3931 39.3541 10.945 39.2023 10.5282 38.9845C9.77635 38.5999 8.97382 38.3237 8.14453 38.1641C7.36164 38.0215 6.53623 37.8889 5.66329 37.7739C5.37396 37.7362 5.08677 37.6836 4.80286 37.6163C4.54059 37.557 4.29356 37.4437 4.0775 37.2836C3.87923 37.137 3.71392 36.9504 3.59226 36.7359C3.45887 36.4626 3.39121 36.162 3.39466 35.8579C3.39466 35.4527 3.44718 35.0625 3.55224 34.6848C3.65729 34.3097 3.71482 33.9095 3.72732 33.4942C3.72732 33.2066 3.70731 32.9265 3.66979 32.6538C3.62843 32.3619 3.60172 32.068 3.58975 31.7734C3.58975 31.1106 3.74733 30.6228 4.05999 30.3077C4.37265 29.995 4.82787 29.7474 5.42817 29.5648C5.69486 29.4841 5.94601 29.3589 6.17104 29.1946C6.37748 29.0389 6.57303 28.8692 6.75634 28.6868C6.94245 28.4998 7.11231 28.2973 7.26409 28.0815C7.42167 27.8589 7.59676 27.6363 7.79185 27.4162C7.83078 27.3661 7.8519 27.3045 7.85189 27.2411C7.85189 27.0835 7.84438 26.9335 7.83188 26.7909L7.79185 26.3207C7.79185 25.4352 7.92942 24.5448 8.20206 23.6443C8.4772 22.7439 8.83488 21.8684 9.2776 21.0055C9.71963 20.1477 10.2159 19.3189 10.7633 18.5243C11.3086 17.7314 11.8514 16.9935 12.3842 16.3157C13.1078 15.4097 13.682 14.3939 14.085 13.3067C14.4602 12.2661 14.6578 11.1306 14.6703 9.90495C14.6703 9.38719 14.6453 8.87194 14.5928 8.36418C14.5403 7.84475 14.5144 7.32298 14.5152 6.8009C14.5152 5.75788 14.6328 4.81991 14.8654 3.98699C15.1005 3.15158 15.4657 2.43622 15.9609 1.83592C16.4562 1.23562 17.1015 0.787894 17.8944 0.487744C18.6923 0.187594 19.6428 0.0250125 20.7483 0C22.0665 0 23.1145 0.26013 23.8974 0.782891C24.6778 1.30315 25.2781 1.98599 25.6933 2.83392C26.111 3.67934 26.3786 4.62481 26.4937 5.66783C26.6138 6.70835 26.6788 7.76388 26.6913 8.83192V9.16458C26.6913 9.69985 26.6963 10.1751 26.7113 10.5903C26.7346 11.4345 26.9268 12.2654 27.2766 13.034C27.4592 13.4367 27.7318 13.8744 28.097 14.3422C28.7223 15.1651 29.3626 15.993 30.013 16.8259C30.6633 17.6588 31.2561 18.5193 31.7889 19.4022C32.3241 20.2901 32.7618 21.2156 33.0995 22.1786C33.4397 23.1441 33.6148 24.1846 33.6273 25.3052C33.6306 26.1886 33.4921 27.0644 33.2171 27.904Z"/>
</svg>
```

### 06. Discord Logo (24×24)

```html
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.8a.07.07 0 0 0-.08.04c-.21.38-.45.88-.62 1.27a18.3 18.3 0 0 0-5.4 0 12.5 12.5 0 0 0-.63-1.27.08.08 0 0 0-.08-.04A19.7 19.7 0 0 0 3.68 4.37a.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .09-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1 0-.13l.37-.29a.07.07 0 0 1 .08-.01 14.2 14.2 0 0 0 12.06 0 .07.07 0 0 1 .08.01l.37.29a.08.08 0 0 1 0 .13c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.11c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .09.03 19.8 19.8 0 0 0 6-3.03.08.08 0 0 0 .04-.06c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42Z"/>
</svg>
```

### 07. GitHub Logo (24×24)

```html
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/>
</svg>
```

### 08. Plus / Close (the "+" or "×" used for open/close)

```html
<!-- Plus -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round">
  <path d="M12 5v14M5 12h14"/>
</svg>

<!-- Close -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round">
  <path d="M6 6l12 12M18 6L6 18"/>
</svg>
```

### 09. Play / Pause / Arrow Down (the always-useful trio)

```html
<!-- Play (triangle, sharp) -->
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M5 3l14 9-14 9V3z"/>
</svg>

<!-- Pause -->
<svg viewBox="0 0 24 24" fill="currentColor">
  <rect x="5" y="3" width="4" height="18"/>
  <rect x="15" y="3" width="4" height="18"/>
</svg>

<!-- Chevron down (used in accordions, "scroll for more") -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 9l6 6 6-6"/>
</svg>
```

---

## II. Decorative shapes (large)

For section backgrounds, side ornaments, "X" markers, etc. These render at 40-200px and add the "editorial layer" without becoming UI.

### 10. Big X (the dich "shape-x")

```html
<svg viewBox="0 0 200 200" fill="none" stroke="currentColor"
     stroke-width="22" stroke-linecap="round" opacity="0.85">
  <path d="M40 40 L160 160 M160 40 L40 160"/>
</svg>
```

### 11. Big Circle (used for "highlighted" callouts; pair with mix-blend-mode: lighten)

```html
<svg viewBox="0 0 200 200" fill="currentColor" opacity="0.85">
  <circle cx="100" cy="100" r="80"/>
</svg>
```

### 12. Dashed Circle Outline (the dich "circle-line" decoration)

```html
<svg viewBox="0 0 200 200" fill="none" stroke="currentColor"
     stroke-width="2" stroke-dasharray="6 8" opacity="0.6">
  <circle cx="100" cy="100" r="96"/>
</svg>
```

### 13. Concentric Circles (a "we are 1 of N" indicator; also a god's-eye camera view)

```html
<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5">
  <circle cx="100" cy="100" r="20"/>
  <circle cx="100" cy="100" r="40"/>
  <circle cx="100" cy="100" r="60"/>
  <circle cx="100" cy="100" r="80"/>
  <circle cx="100" cy="100" r="98"/>
</svg>
```

### 14. Corner Bracket (the "frame-in-frame" effect; classic editorial)

```html
<svg viewBox="0 0 100 100" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="square">
  <path d="M0 20 L0 0 L20 0 M80 0 L100 0 L100 20
           M100 80 L100 100 L80 100 M20 100 L0 100 L0 80"/>
</svg>
```

### 15. Crosshair (the "focus here" indicator)

```html
<svg viewBox="0 0 100 100" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round">
  <circle cx="50" cy="50" r="20"/>
  <line x1="50" y1="0"  x2="50" y2="20"/>
  <line x1="50" y1="80" x2="50" y2="100"/>
  <line x1="0"  y1="50" x2="20" y2="50"/>
  <line x1="80" y1="50" x2="100" y2="50"/>
</svg>
```

### 16. Half-Circle (the "loading bar" / progress indicator, also a great section divider)

```html
<svg viewBox="0 0 200 100" fill="currentColor">
  <path d="M0 100 A100 100 0 0 1 200 100 Z"/>
</svg>
```

### 17. Inverted Half-Circle (above a section as an "arrow pointing down")

```html
<svg viewBox="0 0 200 100" fill="currentColor">
  <path d="M0 0 A100 100 0 0 0 200 0 Z"/>
</svg>
```

### 18. Stripe (a horizontal line for dividing rows; add `stroke-dasharray` for dotted)

```html
<!-- Solid -->
<svg viewBox="0 0 200 2" fill="currentColor" preserveAspectRatio="none">
  <rect width="200" height="2"/>
</svg>

<!-- Dotted (use as CSS background instead for full-row width) -->
<!-- See .divider-dotted in effects.css -->
```

---

## III. Loading + state indicators (24×24)

### 19. Spinner (3-dot)

```html
<svg viewBox="0 0 24 24" fill="currentColor">
  <circle cx="6"  cy="12" r="2"><animate attributeName="opacity"
       values="0.2;1;0.2" dur="1.2s" begin="0s" repeatCount="indefinite"/></circle>
  <circle cx="12" cy="12" r="2"><animate attributeName="opacity"
       values="0.2;1;0.2" dur="1.2s" begin="0.2s" repeatCount="indefinite"/></circle>
  <circle cx="18" cy="12" r="2"><animate attributeName="opacity"
       values="0.2;1;0.2" dur="1.2s" begin="0.4s" repeatCount="indefinite"/></circle>
</svg>
```

### 20. Spinner (arc)

```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round">
  <path d="M12 4a8 8 0 0 1 8 8" stroke-dasharray="0 50">
    <animate attributeName="stroke-dasharray"
       values="0 50; 50 0; 0 50" dur="1.4s" repeatCount="indefinite"/>
  </path>
</svg>
```

### 21. Checkmark (for "done" / success)

```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 12l5 5L20 6"/>
</svg>
```

### 22. Exclamation (for warnings)

```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="3" x2="12" y2="13"/>
  <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
</svg>
```

---

## IV. Big atmospheric shapes (full-bleed)

### 23. Soft cloud blob (the dich "Cloud-Center-Bottom")

```html
<svg viewBox="0 0 1200 400" fill="currentColor" opacity="0.5"
     preserveAspectRatio="xMidYMax meet" style="width: 100%; height: auto;">
  <path d="M0,400
           C150,200 350,200 500,300
           C650,400 800,150 1000,250
           C1100,300 1150,350 1200,400
           L1200,400 L0,400 Z"/>
</svg>
```

### 24. Noise-textured rectangle (decorative, no actual noise — it's solid)

```html
<svg viewBox="0 0 200 200" fill="currentColor" opacity="0.06">
  <rect width="200" height="200"/>
</svg>
```

### 25. Speed lines (5 horizontal lines, varying width, for "movement" / loading bars)

```html
<svg viewBox="0 0 200 60" fill="currentColor" opacity="0.8">
  <rect x="0"   y="0"  width="200" height="6"/>
  <rect x="0"   y="18" width="160" height="6"/>
  <rect x="0"   y="36" width="120" height="6"/>
  <rect x="0"   y="54" width="80"  height="6"/>
</svg>
```

### 26. Faux barcode (the dich "bar-code" pattern, used as decorative)

```html
<svg viewBox="0 0 200 60" fill="currentColor">
  <rect x="0"   y="0" width="2"  height="60"/>
  <rect x="6"   y="0" width="1"  height="60"/>
  <rect x="10"  y="0" width="3"  height="60"/>
  <rect x="16"  y="0" width="1"  height="60"/>
  <rect x="20"  y="0" width="2"  height="60"/>
  <rect x="26"  y="0" width="1"  height="60"/>
  <rect x="30"  y="0" width="4"  height="60"/>
  <rect x="38"  y="0" width="1"  height="60"/>
  <rect x="42"  y="0" width="2"  height="60"/>
  <rect x="48"  y="0" width="3"  height="60"/>
  <rect x="55"  y="0" width="1"  height="60"/>
  <rect x="60"  y="0" width="2"  height="60"/>
  <rect x="66"  y="0" width="1"  height="60"/>
  <rect x="70"  y="0" width="4"  height="60"/>
  <rect x="78"  y="0" width="1"  height="60"/>
  <rect x="82"  y="0" width="2"  height="60"/>
  <rect x="88"  y="0" width="3"  height="60"/>
  <rect x="95"  y="0" width="1"  height="60"/>
  <rect x="100" y="0" width="2"  height="60"/>
  <rect x="106" y="0" width="1"  height="60"/>
  <rect x="110" y="0" width="3"  height="60"/>
  <rect x="118" y="0" width="1"  height="60"/>
  <rect x="122" y="0" width="2"  height="60"/>
  <rect x="128" y="0" width="4"  height="60"/>
  <rect x="136" y="0" width="1"  height="60"/>
  <rect x="140" y="0" width="2"  height="60"/>
  <rect x="146" y="0" width="3"  height="60"/>
  <rect x="154" y="0" width="1"  height="60"/>
  <rect x="160" y="0" width="2"  height="60"/>
  <rect x="166" y="0" width="1"  height="60"/>
  <rect x="170" y="0" width="4"  height="60"/>
  <rect x="178" y="0" width="1"  height="60"/>
  <rect x="184" y="0" width="2"  height="60"/>
  <rect x="190" y="0" width="3"  height="60"/>
  <rect x="196" y="0" width="2"  height="60"/>
</svg>
```

### 27. Crosshatch (decorative texture)

```html
<svg viewBox="0 0 100 100" stroke="currentColor" stroke-width="0.5"
     opacity="0.3">
  <defs>
    <pattern id="cross" x="0" y="0" width="10" height="10"
             patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="10" y2="10"/>
      <line x1="10" y1="0" x2="0" y2="10"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#cross)"/>
</svg>
```

### 28. Dot grid (the dich "dot grid" decoration)

```html
<svg viewBox="0 0 100 100" fill="currentColor" opacity="0.4">
  <defs>
    <pattern id="dotgrid" x="0" y="0" width="8" height="8"
             patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.8"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#dotgrid)"/>
</svg>
```

### 29. Polar grid (the dich "polar circle" — radial lines + concentric circles)

```html
<svg viewBox="0 0 200 200" fill="none" stroke="currentColor"
     stroke-width="0.5" opacity="0.4">
  <circle cx="100" cy="100" r="20"/>
  <circle cx="100" cy="100" r="40"/>
  <circle cx="100" cy="100" r="60"/>
  <circle cx="100" cy="100" r="80"/>
  <line x1="100" y1="0"   x2="100" y2="200"/>
  <line x1="0"   y1="100" x2="200" y2="100"/>
  <line x1="29"  y1="29"  x2="171" y2="171"/>
  <line x1="29"  y1="171" x2="171" y2="29"/>
</svg>
```

### 30. Sound-wave bars (the dich "wave-sound" decorative, used for podcast/voice UI)

```html
<svg viewBox="0 0 200 100" fill="currentColor" preserveAspectRatio="none">
  <rect x="0"   y="40" width="3" height="20"/>
  <rect x="6"   y="30" width="3" height="40"/>
  <rect x="12"  y="20" width="3" height="60"/>
  <rect x="18"  y="10" width="3" height="80"/>
  <rect x="24"  y="20" width="3" height="60"/>
  <rect x="30"  y="30" width="3" height="40"/>
  <rect x="36"  y="40" width="3" height="20"/>
  <rect x="42"  y="35" width="3" height="30"/>
  <rect x="48"  y="25" width="3" height="50"/>
  <rect x="54"  y="15" width="3" height="70"/>
  <rect x="60"  y="25" width="3" height="50"/>
  <rect x="66"  y="35" width="3" height="30"/>
  <rect x="72"  y="40" width="3" height="20"/>
  <rect x="78"  y="30" width="3" height="40"/>
  <rect x="84"  y="20" width="3" height="60"/>
  <rect x="90"  y="10" width="3" height="80"/>
  <rect x="96"  y="20" width="3" height="60"/>
  <rect x="102" y="30" width="3" height="40"/>
  <rect x="108" y="40" width="3" height="20"/>
  <rect x="114" y="35" width="3" height="30"/>
  <rect x="120" y="25" width="3" height="50"/>
  <rect x="126" y="15" width="3" height="70"/>
  <rect x="132" y="25" width="3" height="50"/>
  <rect x="138" y="35" width="3" height="30"/>
  <rect x="144" y="40" width="3" height="20"/>
  <rect x="150" y="30" width="3" height="40"/>
  <rect x="156" y="20" width="3" height="60"/>
  <rect x="162" y="10" width="3" height="80"/>
  <rect x="168" y="20" width="3" height="60"/>
  <rect x="174" y="30" width="3" height="40"/>
  <rect x="180" y="40" width="3" height="20"/>
  <rect x="186" y="35" width="3" height="30"/>
  <rect x="192" y="25" width="3" height="50"/>
  <rect x="198" y="40" width="3" height="20"/>
</svg>
```

---

## V. Decorative pseudo-text

These are aesthetic-only "fake text" elements — they look like text but contain no readable content. Use them as section dividers or background texture.

### 31. Ghost bar (a single horizontal rule)

```html
<svg viewBox="0 0 200 2" preserveAspectRatio="none"
     fill="currentColor" style="width: 100%; height: 2px;">
  <rect width="200" height="2"/>
</svg>
```

### 32. Decorative arrow path (used in lieu of "scroll for more")

```html
<svg viewBox="0 0 40 100" fill="none" stroke="currentColor"
     stroke-width="1" stroke-linecap="round" opacity="0.6">
  <line x1="20" y1="0" x2="20" y2="80"/>
  <path d="M10 70 L20 82 L30 70"/>
  <!-- A 1px diamond on the line for the "loading" feel -->
  <rect x="18" y="40" width="4" height="4" fill="currentColor"
        transform="rotate(45 20 42)"/>
</svg>
```

---

## VI. How to color any of these

All SVGs above use `currentColor`. Set color via CSS:

```css
.deco-blue    { color: var(--color-brand); }
.deco-accent  { color: var(--color-accent); }
.deco-paper   { color: var(--color-paper); }
```

For **two-tone** (e.g. logo + accent on a button):

```html
<svg viewBox="0 0 24 24" style="color: var(--color-brand);">
  <path fill="currentColor" d="..."/>           <!-- main color -->
  <path fill="var(--color-accent)" d="..."/>     <!-- accent override -->
</svg>
```

---

## VII. The 5 SVG anti-patterns

1. **Don't use a 12KB icon for a 16px button.** Inline SVG is for 1em glyphs (≤300 bytes) and big decorative shapes (≥ 1KB). Anything in between should be a PNG.
2. **Don't recolor via filters** (brightness, hue-rotate). Use `currentColor` + parent `color`.
3. **Don't use `width="100%"` for icons.** They become 100% of their container. Use `width: 1em`.
4. **Don't forget `viewBox`.** Without it, the SVG doesn't scale.
5. **Don't animate with JS for static elements.** Use SMIL (`<animate>`) for simple loops; CSS for hover; GSAP/Lottie only for complex sequences.

---

## VIII. When to use a raster image instead

- **Photos** (anything realistic) → AVIF + WebP, never SVG.
- **Screenshots** → PNG, never SVG.
- **Long text rendered as graphic** → PNG, never SVG. (Text in SVG renders inconsistently across platforms.)
- **Decorative blurs / blobbies** → SVG is fine. (See #23 above.)
- **Gradients with stops** → SVG `<linearGradient>` or CSS `linear-gradient`, both work.

---

## IX. Sourcing more SVGs

Three legal, free SVG icon sources (in order of preference):

1. **Lucide** (https://lucide.dev) — MIT licensed, 1,500+ icons, all 24×24 stroke-based.
2. **Phosphor Icons** (https://phosphoricons.com) — MIT, 7,000+ icons, 6 weights.
3. **Heroicons** (https://heroicons.com) — MIT, 300+ icons, 24px outline + solid.

For decorative shapes, **SVGRepo** (https://svgrepo.com) has 500K+ CC0 SVGs.
