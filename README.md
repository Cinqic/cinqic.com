# Cinqic.com — Juniper Baby 1

The official pre-launch website for Juniper Baby 1 by Cinqic: a lightweight, local-first AI assistant in development. GitHub Pages serves the static repository at `cinqic.com`.

## Stack and commands

The site uses plain HTML, token-based CSS, and minimal vanilla JavaScript. No dependency install or build step is required.

```powershell
python scripts/verify_site.py
node scripts/test_launch_state.js
python -m http.server 8000 --directory .
```

## Editing and release state

`assets/js/company.js` is the central configuration for company launch wording and Juniper release data. It defaults to explicit `pre-launch`; complete, valid HTTPS release URLs are required before launch state can activate. Content routes are root, `juniper/`, `independent-ai/`, `about/`, `transparency/`, `privacy/`, and `terms/`. The design system is in `assets/css/site.css` and the social preview asset is local under `assets/img/`.

## Deployment

GitHub Pages serves `main` from the repository root. Keep `CNAME` exactly `cinqic.com`. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md), [docs/JUNIPER_LAUNCH.md](docs/JUNIPER_LAUNCH.md), and [docs/LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md) before publishing.
