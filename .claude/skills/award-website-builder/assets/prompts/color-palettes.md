# Color Palettes — 9 Award-Winning Systems

> Source references: DICH Fashion (warm + black + fluorescents) and Hermes Desktop (blue + acid yellow + brown haze). Both are validated production palettes; the 7 others here are derived from the same hue-spirit, designed to cover the 90% of brand categories you'll encounter.

---

## How to use this document

Each palette is a **complete system**: 5 brand colors, semantic aliases, light/dark inversion, and 3 accent options. Copy the `:root` block into your `tokens.css`. Each palette also tells you which **Mood** (from `image-prompts.md`) pairs with it.

---

## 1. Hermes Blue (default)

**Use for**: AI tools, dev-tools, fintech, B2B SaaS, "credibility" brands.
**Pairs with**: Mood B (brutalist editorial).

```css
:root {
  --color-brand:  #0000f2;   /* electric blue */
  --color-paper:  #ffffff;   /* white */
  --color-fg:     #f5f5f5;   /* off-white (on brand) */
  --color-accent: #edff45;   /* electric yellow */
  --color-ink:    #170d02;   /* deep warm-brown (near-black) */
  --color-haze:   #ffac02;   /* amber haze overlay */
}
```

**Inversion** (light mode):
```css
:root {
  --color-brand:  #f0f4ff;
  --color-paper:  #0000f2;
  --color-fg:     #0000f2;
  --color-accent: #b8a200;
  --color-ink:    #f0f4ff;
}
```

**Accent variants** (swap `--color-accent`):
- `#c8ff00` — sharper green
- `#ff3a3a` — error red
- `#66d9ff` — ice blue

---

## 2. DICH Pastel

**Use for**: fashion, beauty, art, music, lifestyle, hospitality.
**Pairs with**: Mood A (retro-futurist editorial).

```css
:root {
  --color-brand:  #ffdfc4;   /* pastel pink */
  --color-paper:  #ffffff;   /* white */
  --color-fg:     #070707;   /* ink */
  --color-accent: #5c2c45;   /* dark coral */
  --color-ink:    #070707;
  --color-warm:   #ffdfc4;
  --color-lemon:  #ffff82;
  --color-peach:  #ffebb0;
  --color-purple: #cfb8ff;
  --color-blue:   #c5c4ff;
  --color-violet: #e8a5f3;
  --color-brown:  #39322d;
  --color-yellow-soft: #ffffcc;
  --color-light-black: #141414;
  --color-dark-coral: #5c2c45;
  --color-dark-green: #444241;
}
```

**Why so many?** DICH's design system treats each color as a "tool," not a "wall." Each section uses a different accent. This is the recipe for "magazine-grade" sites.

---

## 3. Cinema

**Use for**: luxury, fragrance, automotive, watches, premium spirits.
**Pairs with**: Mood C (cinematic dark).

```css
:root {
  --color-brand:  #1a0000;   /* oxblood */
  --color-paper:  #efe8d8;   /* bone */
  --color-fg:     #efe8d8;   /* on oxblood */
  --color-accent: #ffb800;   /* cinema gold */
  --color-ink:    #0a0a0a;   /* near-black */
  --color-secondary: #8b1a1a;   /* wine */
  --color-muted:  #6b5e52;   /* tobacco */
}
```

---

## 4. Aurora

**Use for**: AI, dev, research, "frontier" brands, deep-tech.
**Pairs with**: Mood E (aurora cosmic).

```css
:root {
  --color-brand:  #050018;   /* near-black violet */
  --color-paper:  #faf7ff;   /* lavender white */
  --color-fg:     #e6e1ff;   /* on dark */
  --color-accent: #66ffda;   /* mint */
  --color-ink:    #1a0d33;   /* dark violet */
  --color-secondary: #ff5c8a; /* coral */
  --color-tertiary: #b794ff;  /* lavender */
}
```

---

## 5. Mint Pop

**Use for**: consumer, lifestyle, kids, food & beverage, retail.
**Pairs with**: Mood D (mint soft pop).

```css
:root {
  --color-brand:  #b9f5d8;   /* soft mint */
  --color-paper:  #0e2f25;   /* deep ink */
  --color-fg:     #0e2f25;   /* on mint */
  --color-accent: #ff4081;   /* hot pink */
  --color-ink:    #0e2f25;
  --color-secondary: #ffeb3b; /* sunshine */
  --color-tertiary: #ff7e2a;  /* tangerine */
}
```

---

## 6. Glacier

**Use for**: health, wellness, climate, science, "clean" brands.
**Pairs with**: any (mostly used as a soft cool base).

```css
:root {
  --color-brand:  #0a1a2f;   /* deep navy */
  --color-paper:  #e0f4ff;   /* ice white */
  --color-fg:     #cce7ff;   /* on dark */
  --color-accent: #66d9ff;   /* ice blue */
  --color-ink:    #0a1a2f;
  --color-secondary: #b3e5a7; /* sage */
  --color-tertiary: #ffd966;  /* honey */
}
```

---

## 7. Sunset

**Use for**: music, nightlife, food (especially cocktails), travel, "experiences".
**Pairs with**: Mood A or C.

```css
:root {
  --color-brand:  #2a0a1e;   /* mulberry */
  --color-paper:  #ffe4b3;   /* peach */
  --color-fg:     #ffe4b3;   /* on mulberry */
  --color-accent: #ff5c8a;   /* coral pink */
  --color-ink:    #1a0512;   /* deep mulberry */
  --color-secondary: #ff8c42; /* tangerine */
  --color-tertiary: #c8a2ff; /* lilac */
}
```

---

## 8. Ink (Brutalist Mono)

**Use for**: journalism, art, design studios, "no-nonsense" tools.
**Pairs with**: Mood B or C.

```css
:root {
  --color-brand:  #0a0a0a;   /* ink black */
  --color-paper:  #f0eee5;   /* warm cream */
  --color-fg:     #f0eee5;   /* on ink */
  --color-accent: #ff5722;   /* safety orange */
  --color-ink:    #0a0a0a;
  --color-secondary: #d4a574; /* tan */
  --color-tertiary: #3a3a3a;  /* gray ink */
}
```

---

## 9. Clay

**Use for**: ceramics, food, hospitality, wellness, "earthy" brands.
**Pairs with**: Mood A or D.

```css
:root {
  --color-brand:  #e9e0d0;   /* terracotta light */
  --color-paper:  #1c1a17;   /* deep ink */
  --color-fg:     #1c1a17;   /* on clay */
  --color-accent: #ff5722;   /* burnt orange */
  --color-ink:    #1c1a17;
  --color-secondary: #b56a3d; /* rust */
  --color-tertiary: #6b8e7f;  /* sage */
}
```

---

## Choosing the right palette

```
Q1: Does the brand have a "warmth" or "coolness"?
    WARM  → DICH / Cinema / Sunset / Clay
    COOL  → Hermes / Aurora / Glacier / Mint

Q2: What's the energy level?
    HIGH (playful, energetic)  → Mint / Sunset / Aurora
    MID  (balanced, credible)  → Hermes / DICH / Glacier
    LOW  (calm, premium)       → Cinema / Ink / Clay

Q3: Will the brand ever need a "dark mode"?
    YES → pick a palette with a clear light/dark inversion (all 9 have one)
    NO  → any palette
```

**Default pick**: if unsure, **Hermes Blue**. It's the most versatile and most aligned with the Awwwards 2024–2026 trend.

---

## Applying a palette (the 4 steps)

1. **Copy the `:root` block** into your `tokens.css` (overwriting the default)
2. **Set the body background**: `body { background: var(--color-brand); }`
3. **Update 3 image prompts** to use the new palette's bg color (see `image-prompts.md` section 1)
4. **Render 1 test asset** — if the asset's color temperature doesn't match the bg, re-grade

---

## The 3 color rules (universal)

1. **Never use more than 5 colors in the system.** Even DICH's "many colors" are 5 functional (brand / paper / fg / accent / ink) + 8 decorative (only ever used 1-2 at a time, on a single section).

2. **Never use a color in two different roles.** `--color-accent` is for highlights/links/CTAs. If you need a "secondary accent," name it `--color-secondary`, don't reuse accent.

3. **Always provide a light & dark inversion.** Even if your site only ships in one mode, the inverse tells you whether the palette is "complete" — if the inversion looks ugly, the palette is wrong.

---

## The 5-color subset rule

When in doubt, **use only 5 colors per page**:

1. `--color-brand` — the page background
2. `--color-paper` — cards, sections, pop-out surfaces
3. `--color-fg` — body text
4. `--color-accent` — links, CTAs, highlights (1 per page)
5. `--color-ink` — headlines, contrast

If you need more, that means the page is doing too much. Split it into two pages.
