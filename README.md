# Cinqic.com

The static company website for Cinqic, hosted by GitHub Pages at `cinqic.com`. It presents Cinqic and the planned Juniper product without implying public availability.

## Stack and requirements

Plain HTML, token-based CSS, and minimal vanilla JavaScript. There are no package dependencies or build dependencies. Python 3 is only used for local verification and preview commands.

## Commands

```powershell
python scripts/verify_site.py
python -m http.server 8000 --directory .
```

Open `http://localhost:8000`. GitHub Pages serves the repository root directly; there is no separate build artifact.

## Editing

- `assets/js/company.js` is the centralized source for the launch date, mission, vision, and product statuses.
- `assets/css/site.css` contains the design tokens and shared layout system.
- Route content lives in `index.html`, `juniper/`, `independent-ai/`, `about/`, `transparency/`, `privacy/`, and `terms/`.
- `assets/img/` contains the local social-preview asset. Replace it only with an approved brand asset.

## Deployment

GitHub Pages is configured to serve `main` from the repository root. `CNAME` must remain `cinqic.com`. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) and [docs/LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md) before publishing.

## Current status

The site is launch-preparation material. Juniper Baby 1 0.8B is in development and is not a public release.
