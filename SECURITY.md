# Security Policy

> **TL;DR**: This skill is a static asset collection (CSS / JS / HTML / SVG). It has **no server-side code, no network calls, no telemetry, and no authentication**. The attack surface is limited to the JS modules, which are all client-side and pure-functional.

## Supported versions

| Version | Supported          |
|---------|--------------------|
| 1.0.0+  | ✅ Active          |
| < 1.0   | ❌ Not supported   |

## Reporting a vulnerability

**Please do NOT open a public issue for security vulnerabilities.**

Instead, use one of these private channels:

1. **GitHub Security Advisories** — https://github.com/Sorareneeee/award-website-builder/security/advisories/new
2. **Email** — open a Discussion marked "security" and we'll route it.

We aim to respond within **72 hours**.

## What is in scope

- **XSS in the JS modules** — if you find a way to inject HTML through `textContent` misuse, etc.
- **CSS injection in the token system** — if `var(--*)` can be abused to leak user data.
- **Dependency confusion** — even though we have zero npm deps, report if a path can be hijacked.
- **Prototype pollution** — if any of the 5 JS modules can be exploited via crafted input.

## What is NOT in scope

- Issues in the **reference sites** (DICH Fashion, Hermes Desktop) — file them with their respective owners.
- Issues with **paid foundry fonts** (T 012, Sigurd, Druk Wide, NB Architekt) — file with the foundries.
- Generic web performance / accessibility feedback — open a Discussion instead.

## Disclosure policy

We follow **coordinated disclosure**:

1. You report privately.
2. We acknowledge within 72h.
3. We develop a fix.
4. We agree on a public disclosure date.
5. We release the fix and publish a CVE if applicable.

We credit reporters in the fix commit unless you prefer anonymity.

## Security best practices for users

If you're using this skill to build a production site:

- **CSP** — add a Content-Security-Policy that disallows inline scripts. The 5 JS modules all use `<script type="module">` and can be loaded from external files, so they don't require `unsafe-inline`.
- **Subresource Integrity** — when loading the JS modules from a CDN, add `integrity` hashes.
- **Audit before deploy** — `npm audit` doesn't apply here (zero deps), but `pnpm dlx snyk code test` will scan the JS modules for static issues.
- **No telemetry** — none of the 5 modules make network calls. If you fork and add analytics, document it.

## Known limitations

- The 19-year browser fallbacks in `base.css` use raw hex values, not `color-mix()`. This is fine for browsers that don't support `color-mix()` but is less flexible.
- The `data-noise` canvases use `Math.random()` for grain. If your threat model includes side-channel attacks on canvas rendering, replace with a CSPRNG.
- The `scroll-parallax.js` module reads `getBoundingClientRect()` on every scroll event. If the page contains content from third-party iframes, the timing might be observable.

These are not vulnerabilities — they're trade-offs. We're open to PRs that improve them.
