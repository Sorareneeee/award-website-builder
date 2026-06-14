# Image Generation Prompts — Award-Winning Site Imagery

> Source references: DICH Fashion (dich-fashion.webflow.io) and Hermes Desktop (hermes-agent.nousresearch.com). Both sites are Awwwards-tier; their images follow a small set of "mood rules" that we abstract here as **parameter presets + full prompts** that any text-to-image model (Midjourney, SDXL, Flux, GPT-Image, etc.) can render.

---

## 0. The 5 Visual Moods (mood preset table)

Pick **one** mood per site. Mixing two moods in the same site produces a "design-by-committee" look. The two reference sites map to:

| Mood | Reference | When to use | Color anchor | Composition |
|------|-----------|-------------|--------------|-------------|
| **A — Retro-futurist editorial** | DICH | fashion, beauty, music, art | pastel warm + ink black | giant face, low-saturation, sharp rim light |
| **B — Brutalist editorial** | Hermes | tech, AI, fintech, dev-tools | brand-blue + acid-yellow | tiny figure + giant wordmark, half-glow |
| **C — Cinematic dark** | (cinematic preset) | luxury, automotive, fragrance | oxblood + bone + cinema-gold | low-key, single light source, hard shadow |
| **D — Mint soft pop** | (mint preset) | consumer, kids, lifestyle | mint + hot-pink + ink | product on flat color, hard shadow |
| **E — Aurora cosmic** | (aurora preset) | AI, dev, research | deep-violet + mint + ink | nebula gradients, faint grid, particle field |

**Default = B (Hermes) if unsure.** It's the most "tech-credible" mood and renders reliably across all 5 major models.

---

## 1. Universal parameters (apply to every prompt)

```yaml
aspect:        "16:9" for hero, "21:9" for full-bleed, "4:5" for portrait card, "1:1" for avatar/feature card
resolution:    2048×1152 (16:9) — sharp on retina, sub-2MB WebP
style_weight:  mid (--s 250 in MJ, or "stylize 250")
quality:       "2" in MJ
seed:          fixed per asset for re-runs
negative:      "ugly, deformed, noisy, blurry, low-contrast, oversaturated, cropped"
model:         Midjourney v6.1 / SDXL 1.0 / Flux 1.1 Pro / GPT-Image-1
```

**Critical rule for ALL assets:**
- **Render against the brand paper color** — never pure white or pure black background. White reads as "stock photo"; brand paper reads as "designed."
- **Add the brand color as ambient bounce light** — when a figure is shown, a faint 5–10% tint of the accent color should kiss the rim of the silhouette. This is the "secret sauce" of every Awwwards hero.
- **Keep the same color temperature across the set** — don't mix warm and cool in the same site. Pick one (warm = moods A, D / cool = B, E / neutral = C).
- **No text, no logos, no UI elements in the image.** Text goes in CSS. Adding text in image generation makes it unusable.

---

## 2. Mood A — Retro-futurist editorial (DICH reference)

### Parameters

```yaml
palette:
  bg:        "#ffdfc4"  (pastel pink)
  figure:    "#f3c8a4" / "#c79a78"  (warm skin tones, muted)
  accent:    "#5c2c45"  (dark coral — for masks, props)
  contrast:  "#070707"  (ink — for hair, deep shadow)
  prop:      "#cfb8ff" or "#e8a5f3"  (violet/lilac — small accents)
light:        "studio key 45° camera-left, softbox, warm gel"
shadow:       "hard, single source, slightly cool, falling back-right"
grain:        "medium 35mm film grain (Fuji 400H emulation)"
atmosphere:   "low-fog, particles in air, soft sunlight"
```

### Hero prompt (16:9, full-bleed)

> **Subject**: A single figure, centered, wearing a translucent diving helmet, a beaded mask, or a metallic face-plate — the figure is half-statue, half-saint. Clouds or soft smoke in the background, the figure rising through them. No eyes visible (face obscured by mask or behind clouds).

```text
A solitary figure rising through a soft cumulus cloud, wearing a translucent
vintage diving helmet, half-obscured by fog, golden hour warm pastel sky
behind. Soft low-saturation color grade, Fuji 400H emulation, 35mm film
grain. Centered composition, 85mm portrait lens, shallow depth of field,
figure occupies lower 60% of frame, sky occupies upper 40%. Background
tinted #ffdfc4. Figure's silhouette kissed by a faint 5% violet rim
light. Studio single-light setup, hard shadow falling back-right. No
text, no UI, no logos, no extra figures. --ar 16:9 --s 250 --v 6.1
```

**Variation seeds**: change the helmet to (a) beaded ceremonial mask, (b) smooth chrome full-face shield, (c) flowing silk head wrap. Each produces a different "sub-mood" of A.

### Card prompt (4:5, vertical card, "collections" panel)

```text
Studio product photograph, single garment or accessory on a translucent
acrylic pedestal, suspended in soft pastel fog. Warm 5500K key light
from upper-left, cool blue fill from lower-right, hard rim light at 8%
opacity in #e8a5f3. Garment fabric is black, deep brown, or oxblood —
contrast with the pastel background. Light smoke wisps curl around the
pedestal base. Subtle film grain, no halation. Centered, vertical,
4:5 frame, 85mm lens. No text, no UI, no extra props. --ar 4:5 --s 250
```

### 3D orb / concept totem (1:1, floating object)

```text
A single abstract 3D object floating in a solid pastel pink void
(#ffdfc4). Object: rough molten obsidian rock, faceted, with thin
gold veins running through it. Object is lit from upper-left with a
warm key, a cool blue fill from below, and a faint violet rim. Object
is centered, 60% of frame, with a soft drop shadow beneath. Subtle
grain. No text, no UI, no environment. 1:1 aspect. --ar 1:1 --s 250
```

---

## 3. Mood B — Brutalist editorial (Hermes reference)

### Parameters

```yaml
palette:
  bg:        "#0000f2"  (electric blue)
  paper:     "#ffffff"  (cards / sections)
  fg:        "#f5f5f5"  (text on blue)
  ink:       "#170d02"  (deep warm-brown, near-black)
  accent:    "#edff45"  (electric yellow)
  haze:      "#ffac02"  (amber haze overlay)
light:        "studio + neon, cool dominant, warm 2% rim"
shadow:       "long, hard, black, falling right"
grain:        "fine TV-static, ~8% opacity"
atmosphere:   "faint amber haze from upper-left, 22% opacity"
```

### Hero prompt (16:9, large figure on brand-blue)

> **Subject**: A small (1/4 frame) human or mannequin figure, full-body, standing, slightly off-center, on a solid #0000f2 background. The figure wears black, brown, or bone-white clothing. To the right, ~50% of the frame is empty brand-blue void (this empty space is what makes the image work — copy will sit in it).

```text
Editorial full-body portrait of a single person standing in three-quarter
pose, on a solid #0000f2 electric blue background. Subject wears bone
white or deep brown layered clothing, 2-3 visible garments. 85mm lens,
waist-up crop, subject occupies right 40% of frame, left 60% is empty
blue void (intentional). Hard top-left key light, no fill, hard shadow
falling back-right at 30°. Faint amber haze in upper-left corner at
20% opacity, simulating sodium-vapor lighting. Subtle 35mm film grain.
Cool color grade. No text, no UI, no logos. --ar 16:9 --s 200 --v 6.1
```

### Wordmark hero (16:9, type-only — but we set "no text" rule; use a figure to flank the wordmark in CSS)

The wordmark itself is **always CSS-rendered text**. The image behind it is a "blank" environment — but we still want texture. Use this prompt for the hero background:

```text
Abstract studio setup, no human subject. Single sheet of brushed
aluminum or polished black acrylic floating horizontally, lit from
upper-left with a 5600K daylight, faint warm haze from upper-right.
Surface has subtle scratches and dust. Background is solid #0000f2
electric blue with a 25% opacity amber gradient in the upper-left
quadrant. 16:9 aspect, 35mm lens, sharp. Used as a background plate
for overlaid typography. --ar 16:9 --s 200 --v 6.1
```

### Avatar/face card (1:1, "agent" or "creator")

```text
Extreme close-up portrait, head and shoulders only, single face
half-lit from left by hard 5000K key. Background is solid #0000f2 with
faint warm haze in the upper-left corner. Subject wears a black or
bone-white top. Slight film grain. Strong rim light in #edff45
electric yellow at 8% opacity outlining the right side of the face.
Tight crop, 1:1 aspect, 85mm lens, shallow depth. Skin tones slightly
desaturated. --ar 1:1 --s 200 --v 6.1
```

### Feature card (3:2, "section artwork")

```text
Photograph of a single desktop computer monitor on a wooden desk,
displaying a complex data visualization. Soft ambient room lighting
from a window to the left, warm sodium-vapor desk lamp from upper-right.
Monitor shows a black background with bright #edff45 electric yellow
data lines. Background is otherwise dark, deep navy. Slight bloom on
the monitor's bright pixels. Subtle film grain. 3:2 aspect, 35mm lens,
sharp on the monitor. Mood: working late at night. --ar 3:2 --s 200
```

---

## 4. Mood C — Cinematic dark

### Parameters

```yaml
palette:
  bg:        "#1a0000"  (oxblood)
  paper:     "#efe8d8"  (bone)
  fg:        "#efe8d8"  (on oxblood)
  ink:       "#0a0a0a"  (near-black)
  accent:    "#ffb800"  (cinema gold)
light:        "single hard light, low-key, Rembrandt"
shadow:       "deep, dominant, falls left"
grain:        "heavy 35mm, Kodak Vision3 500T emulation"
atmosphere:   "smoke/haze, ~15% opacity"
```

### Hero prompt (16:9, low-key single subject)

```text
Cinematic low-key portrait of a single person or object, half-lost in
shadow. Single hard tungsten key from upper-right, ~30° elevation. Skin
or material catches a 5% rim of cinema gold (#ffb800). Background is
solid oxblood (#1a0000) with a faint warm haze gradient upper-right.
Slight bloom on highlight. Heavy film grain. 85mm lens, 16:9 aspect,
shallow depth of field. Mood: Antonioni / Wong Kar-wai. --ar 16:9 --s 250
```

---

## 5. Mood D — Mint soft pop

### Parameters

```yaml
palette:
  bg:        "#b9f5d8"  (soft mint)
  paper:     "#0e2f25"  (deep ink)
  fg:        "#0e2f25"
  accent:    "#ff4081"  (hot pink)
light:        "noon studio, hard 5400K key, no fill"
shadow:       "graphic, hard, single direction (NW), saturated"
grain:        "minimal, clean digital"
atmosphere:   "no haze, clean studio"
```

### Hero prompt (16:9, graphic product on flat color)

```text
Single graphic object (sneaker / bottle / tool) photographed straight
on against a flat mint (#b9f5d8) background. Hard 5400K noon key from
upper-left, no fill light. Long hard saturated mint-tinted shadow falls
to lower-right. Object is centered, 60% of frame, with a single
hot-pink (#ff4081) accent element. Clean digital, no grain. 16:9
aspect, 50mm lens, sharp. No text, no UI. --ar 16:9 --s 200
```

---

## 6. Mood E — Aurora cosmic

### Parameters

```yaml
palette:
  bg:        "#050018"  (near-black violet)
  paper:     "#faf7ff"  (lavender white)
  fg:        "#e6e1ff"  (on dark)
  accent:    "#66ffda"  (mint)
  secondary: "#ff5c8a"  (coral)
light:        "self-illuminated, ambient nebula glow"
shadow:       "none, only soft falloff"
grain:        "fine star-field speckle, ~5% opacity"
atmosphere:   "volumetric, 30% opacity, swirling"
```

### Hero prompt (16:9, cosmic scene)

```text
Abstract 3D scene: a single geometric object (icosahedron, torus, or
crystal cluster) floating in a deep violet (#050018) void, illuminated
from within by soft mint (#66ffda) and coral (#ff5c8a) nebula gradients
at 30% opacity. Object has a polished obsidian surface that reflects the
ambient colors. Volumetric haze around the object. Subtle star-field
speckle in background. 16:9 aspect, cinematic, 35mm lens equivalent.
--ar 16:9 --s 300 --v 6.1
```

---

## 7. Asset set per project (the 8-asset minimum)

For any Awwwards-tier site, generate **at least** these 8 images before launching:

| # | Slot | Aspect | Mood A | Mood B | Mood C | Mood D | Mood E |
|---|------|--------|--------|--------|--------|--------|--------|
| 1 | Hero plate | 16:9 | figure+clouds | small figure on blue | low-key portrait | object on mint | object in void |
| 2 | Section A wide | 21:9 | landscape detail | empty plate | single prop | flat-lay | wide nebula |
| 3 | Section B portrait | 4:5 | model portrait | avatar face | product closeup | bottle/can | object closeup |
| 4 | Section C landscape | 3:2 | atmospheric | monitor on desk | interior scene | sneaker side | ship in space |
| 5 | Card 1 (square) | 1:1 | face closeup | face closeup | object | object | object |
| 6 | Card 2 (square) | 1:1 | accessory | accessory | accessory | accessory | accessory |
| 7 | Card 3 (square) | 1:1 | environment | object | environment | environment | environment |
| 8 | Footer figure | 4:5 or 1:1 | figure full-body | figure full-body | figure in shadow | figure with prop | figure in void |

**Rule**: every asset has the same color temperature. Re-render any asset that drifts.

---

## 8. 5 patterns to use as background plate (no text, no logo)

When the design calls for a "tactile" panel background, pick one of:

1. **Brushed metal** — single direction of fine scratches, low contrast
2. **Marble** — cool grey, single vein, no pattern
3. **Translucent fabric** — silk or organza, single fold visible
4. **Lenticular gradient** — soft 2-stop gradient, slight banding
5. **Paper texture** — soft warm white, 2% fiber speckle

Prompt template:

```text
Single square panel, 2048×2048, of [TEXTURE]. Lighting from upper-left.
Centered, isolated, no environment, no shadows, no text. Used as a
background tile. --ar 1:1 --s 50 --v 6.1
```

---

## 9. Negative prompts (universal)

Append to **every** prompt:

```text
no text, no UI, no logos, no watermarks, no extra people, no hands
visible (unless specifically requested), no extra fingers, no
deformed anatomy, no oversaturation, no halation, no bloom beyond
natural, no frames, no borders
```

For SDXL/Flux, use as the `negative_prompt` field; for Midjourney, append as `--no`.

---

## 10. Post-production rules

After generation, every asset must pass through the same 6-step processing:

1. **Resize to exact target dimensions** (no 4096×4096 hero for a 2048-wide slot)
2. **Color grade to brand palette** — adjust the master wheel so the asset's dominant tint matches the brand paper
3. **Add 8–15% noise / film grain** as a uniform overlay (matches site-wide grain)
4. **Add 2–5% brand color haze** in the upper-left (matches all assets)
5. **Sharpen the eye-region** (for portraits) or the "hero" subject area (for products)
6. **Convert to AVIF + WebP** (use Squoosh / sharp), generate `<picture>` element with both `<source>` types

The 6 steps are what unify 8 separately-generated assets into a single "designed" set. Skipping them produces the "AI-generated" look.

---

## 11. One canonical prompt (the "if all else fails" prompt)

```text
Editorial photograph of a single human figure in three-quarter pose,
centered, against a solid pastel pink background (#ffdfc4). Subject
wears flowing cream and brown garments. Soft golden hour key light
from upper-left, single hard shadow falling back-right. Subtle
35mm film grain. No text, no UI, no logos, no extra figures.
--ar 16:9 --s 250 --v 6.1
```

Render this. Look at it. Adjust the bg color and lighting to your mood. Re-render. Most Awwwards-style hero images are 2-3 iterations of one canonical prompt away from the reference site.
