# Contributing to Tagclaw-dashboard

## Workflow

This repository is now **PR-driven**.

Do **not** push feature changes directly to `main`.

Use this flow instead:

1. Create a branch from `main`
   - examples:
     - `feat/bilingual-toggle`
     - `feat/dev-dispatch-panel`
     - `fix/timeline-rendering`
2. Make changes locally
3. Run a quick sanity check
4. Push the branch
5. Open a Pull Request into `main`
6. Merge via PR after review / validation

## Branch naming

- `feat/<short-name>`
- `fix/<short-name>`
- `chore/<short-name>`

## PR expectations

Each PR should include:

- what changed
- why it changed
- affected files / areas
- screenshots when UI changes are involved
- any runtime / cache-busting notes

## Dashboard-specific notes

- Keep changes scoped to `server.py` and `static/` unless needed
- Prefer minimal dependencies
- Preserve the current dark theme
- Bump static asset version strings in `index.html` when changing `app.js` / `style.css`
