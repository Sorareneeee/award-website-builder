# Free Google Fonts Mapping

The default font stack in `assets/css/tokens.css` lists commercial faces (Sigurd, T 012, Mondwest, NB Architekt) — those are *references* to what the original sites used, not free alternatives. For a real project, override the four `--font-*` variables with one of the free Google Fonts stacks below.

## The 4 ready-to-paste stacks

| Stack | Display | Sans | Mono | Serif | Mood | Pairs with palette |
|-------|---------|------|------|-------|------|---------------------|
| **Awwwards default** | Fraunces | Inter | JetBrains Mono | Spectral | Warm, editorial | Ink, Mint, DICH Pastel, Cinema |
| **Tech / Hermes** | DM Serif Display | Inter | JetBrains Mono | Spectral | Cold, precise | Hermes Blue, Aurora, Glacier |
| **Magazine** | Playfair Display | Manrope | IBM Plex Mono | Lora | Classic, balanced | DICH Pastel, Sunset, Clay |
| **Brutalist mono** | Space Grotesk | Space Grotesk | JetBrains Mono | — | Geometric, all-caps | Ink, Cinema, Mint |

The **Awwwards default** is the safe choice for most projects — Fraunces' optical-size axis gives you a true display serif at 6rem+ and a comfortable reading face at 1rem, so a single family covers both extremes.

## Minimal override

The only 4 lines you need to change in `tokens.css`:

```css
:root {
  --font-display: "Fraunces", "Times New Roman", serif;
  --font-sans:    "Inter", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;
  --font-serif:   "Spectral", "Times New Roman", serif;
}
```

And add this to your `<head>` (preconnect first for performance):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=Spectral:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
```

## Stack substitutions

For **Tech / Hermes** — replace Fraunces with DM Serif Display:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=Spectral:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
```

```css
--font-display: "DM Serif Display", "Times New Roman", serif;
```

For **Magazine** — swap each family:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Manrope:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&family=Lora:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
```

```css
--font-display: "Playfair Display", "Times New Roman", serif;
--font-sans:    "Manrope", system-ui, sans-serif;
--font-mono:    "IBM Plex Mono", ui-monospace, monospace;
--font-serif:   "Lora", "Times New Roman", serif;
```

For **Brutalist mono** — drop the serif and use Space Grotesk for both display and sans:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
--font-display: "Space Grotesk", system-ui, sans-serif;
--font-sans:    "Space Grotesk", system-ui, sans-serif;
--font-mono:    "JetBrains Mono", ui-monospace, monospace;
--font-serif:   "Space Grotesk", system-ui, sans-serif;  /* fallback to sans */
```

## How the 4 roles work

The skill uses a **role-based** system, not a font-based one. You don't say "use Fraunces"; you say "use the display role". This means:

- All `h1`, `h2`, `.wordmark`, hero headlines → `--font-display`
- All body copy, nav links, buttons → `--font-sans`
- All `.eyebrow`, `.body-mono`, code, data → `--font-mono`
- Pull-quotes, manifesto, decorative body → `--font-serif` (rarely used)

Swapping fonts never breaks the layout because the roles stay constant. The only thing that changes is the *character* of the type.

## When to use commercial fonts instead

The 6 font sets in `typography-prompts.md` (T 012, Sigurd, Mondwest, NB Architekt, etc.) are *paid commercial* faces. Use them only if:

- You have a license (most are studio-only, not for redistribution)
- The reference brand identity requires an exact match
- The project has a font budget

For everything else, the free Google Fonts stacks above will look 90% as good at 0% of the cost.
