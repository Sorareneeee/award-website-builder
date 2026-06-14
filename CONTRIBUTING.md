# Contributing to award-website-builder

> First: **thank you** for considering a contribution. This skill lives or dies on the quality of its design patterns. Every PR is reviewed against the 48-point self-audit.

## Code of conduct

Be kind. Be precise. Cite your sources. This is a design-tool project — opinions about "what looks good" are welcome as long as they're backed by reasoning or by a reference site.

## What we accept

✅ **Accepted**:
- New hero patterns, section patterns, and decoration SVGs
- New theme palettes (must include light + dark inversion)
- New font sets (must include a free Google Fonts alternative)
- Bug fixes in the JS modules
- Docs / examples improvements
- Translations of the README / SKILL.md

❌ **Not accepted**:
- Heavy npm dependencies (the whole point of this skill is zero-dep)
- Visual styles that copy another brand verbatim (we cite, not steal)
- Webflow-export files (we don't redistribute those)
- Paid fonts or proprietary assets

## How to submit

1. **Fork** the repo
2. **Create a feature branch** (`git checkout -b feat/new-hero-pattern`)
3. **Make your change**
4. **Run the 48-point self-audit** (see [SKILL.md](SKILL.md) §"48-Point Self-Audit")
5. **Commit** with a clear message (`feat(hero): add magazine-spread pattern`)
6. **Push** to your fork
7. **Open a PR** — fill out the template

## Commit message format

```
<type>(<scope>): <short description>

<optional longer description>

Refs: <issue number, link, or "none">
```

**Types**: `feat` / `fix` / `docs` / `refactor` / `style` / `test` / `chore`
**Scopes**: `tokens` / `base` / `effects` / `noise` / `scroll` / `scramble` / `parallax` / `type-splitter` / `hero` / `section` / `palette` / `font` / `image` / `svg` / `example` / `docs`

## Style guides

### CSS

- Follow the existing structure: `:root` tokens → `@layer utilities` rules.
- Use `var(--*)` for every color / spacing / font value. No raw hex or px.
- New utility classes: kebab-case (`.frame-overlay`, not `.frameOverlay`).
- Mobile-first; use `clamp()` for responsive sizes.

### JavaScript

- ESM modules (`export` / `import`).
- Pure functions where possible; class-based only when state is unavoidable.
- Auto-init on `<script>` tag load via `document.readyState === 'loading'` check.
- Always export an `init*()` function for explicit control.
- Document with a header comment block explaining what the module does.

### Markdown

- Use `#`, `##`, `###` for hierarchy. Don't skip levels.
- Code blocks: specify language (` ```css `, ` ```js `, etc.)
- Tables: align pipes.
- Internal links: relative paths.

## Release process

1. Maintainer bumps version in `package.json`-equivalent (currently only in CHANGELOG + SKILL.md frontmatter).
2. Maintainer updates CHANGELOG `[Unreleased]` → `[X.Y.Z]`.
3. Maintainer creates a GitHub Release with notes from CHANGELOG.
4. Maintainer announces in Discussions → Announcements.

## Questions?

Open a Discussion at https://github.com/Sorareneeee/award-website-builder/discussions

Or file an issue with the `question` label.
