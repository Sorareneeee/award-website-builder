# GitHub workflows for award-website-builder

This directory is reserved for future GitHub Actions workflows. None are required for the current release — the project is pure static assets with no build step.

## Planned workflows (for v1.1+)

- **`validate.yml`** — runs on PR: parses all CSS / JS for syntax errors, checks the 48-point self-audit checklist.
- **`size.yml`** — runs on PR: warns if any single file exceeds 50KB.
- **`link-check.yml`** — runs daily: checks that all links in the docs are still alive.
- **`release.yml`** — runs on tag push: auto-generates release notes from CHANGELOG.md.

## Adding a workflow

1. Create `your-workflow.yml` in this directory.
2. Use the standard GitHub Actions schema.
3. Pin all actions to a SHA, not a tag, for security.

Example skeleton:

```yaml
name: validate
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11
      - name: Check CSS syntax
        run: |
          for f in $(find assets/css -name "*.css"); do
            node -e "require('css')" 2>/dev/null || true
            # Add your CSS parser here
          done
```

If you add a workflow, please also update this file with a short description.
