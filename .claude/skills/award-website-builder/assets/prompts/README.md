# assets/prompts/ — Image, typography, and color recipes

3 docs that together define the "design system" of a premium site.

## Files

| File | What's inside |
|------|---------------|
| `image-prompts.md` | 5 visual moods (A–E) + 8-asset minimum set + complete Midjourney/SD prompt library |
| `typography-prompts.md` | 6 free font "hero sets" (Display + Sans + Mono + Serif) + 3 type scales + pairing matrix |
| `color-palettes.md` | 9 award-winning palettes (each with 5 brand colors + 3 accent variants) |

## When to read which

- **You need to choose a color palette** → `color-palettes.md`
- **You need to choose fonts** → `typography-prompts.md`
- **You need to generate images** → `image-prompts.md`
- **All three are tied together** — pick a palette, then pick fonts that match its mood, then generate images with prompts that match the mood.

## The 5 visual moods (from image-prompts.md)

| Mood | Reference | When to use |
|------|-----------|-------------|
| **A — Retro-futurist editorial** | DICH | fashion, beauty, art, music |
| **B — Brutalist editorial** | Hermes | tech, AI, fintech, dev-tools |
| **C — Cinematic dark** | — | luxury, automotive, fragrance |
| **D — Mint soft pop** | — | consumer, kids, lifestyle |
| **E — Aurora cosmic** | — | AI, dev, research, "frontier" |

**Default to B** if unsure. Most versatile, renders reliably across all 5 major image models.

## The 9 color palettes (from color-palettes.md)

| # | Name | Pair with mood |
|---|------|----------------|
| 1 | Hermes Blue (default) | B |
| 2 | DICH Pastel | A |
| 3 | Cinema | C |
| 4 | Aurora | E |
| 5 | Mint Pop | D |
| 6 | Glacier | A, C, E |
| 7 | Sunset | A, C |
| 8 | Ink | B, C |
| 9 | Clay | A, D |

## The 6 font sets (from typography-prompts.md)

| # | Name | Best for |
|---|------|----------|
| 1 | DICH set (T 012 / Space Grotesk / JetBrains Mono / NB Architekt) | Fashion editorial |
| 2 | Hermes set (Sigurd / Inter / Courier Prime / EB Garamond) | Tech / AI |
| 3 | Awwwards default (Fraunces / Inter / JetBrains Mono) | Design studios, art |
| 4 | Helvetica post-digital (Inter / Inter / JetBrains Mono) | Modern SaaS |
| 5 | Indie magazine (Newsreader / Inter / JetBrains Mono) | Editorial, journalism |
| 6 | Web3 / Web4 (PP Editorial / Satoshi / Geist Mono) | AI agents, crypto |

## How the 3 docs work together

Example: a "tech AI tool" site

1. **Pick a mood** → B (brutalist editorial)
2. **Pick a palette** → Hermes Blue (palette #1, pairs with mood B)
3. **Pick a font set** → Hermes set (set #2, matches mood B)
4. **Generate images** → use the Mood B prompts from `image-prompts.md` §3

For a "fashion editorial" site:

1. **Pick a mood** → A (retro-futurist editorial)
2. **Pick a palette** → DICH Pastel (palette #2, pairs with mood A)
3. **Pick a font set** → DICH set (set #1, matches mood A)
4. **Generate images** → use the Mood A prompts from `image-prompts.md` §2

## The "5-second" pick

If you can answer "Hermes / Stripe / Vercel" — pick **Mood B / Hermes Blue / Hermes set**.

If you can answer "Vogue / i-D / Acne" — pick **Mood A / DICH Pastel / DICH set**.

If you can answer "Substack / The Verge / Are.na" — pick **Mood E / Aurora / Indie magazine set**.

That's it. 3 decisions, 30 seconds, complete design system.

## Important note on fonts

The "hero" font in each set (T 012, Sigurd, Fraunces, Newsreader, PP Editorial, Mondwest) is often a paid foundry font. The docs always list a **free Google Fonts alternative** alongside. For production sites, you have 3 options:

1. **Use the free alternative** (Inter + DM Serif Display + EB Garamond + JetBrains Mono is a complete 4-font system from Google Fonts).
2. **License the paid font** (T 012, Sigurd are typically $100–$500 per style for web use).
3. **Use both** — paid font for hero, free font as a fallback in your `font-family` stack.

The CSS already handles all three cases via standard `font-family: "Paid Font", "Free Fallback", serif;` syntax.
