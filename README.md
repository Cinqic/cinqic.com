# Cinqic.com

The official static website for Cinqic: open-source software and local-first artificial intelligence. It introduces Juniper, Cinqic’s future flagship assistant, honestly as in development.

## Stack and commands

Plain HTML, CSS, and minimal vanilla JavaScript. There are no package dependencies or build step.

```powershell
python scripts/verify_site.py
python -m http.server 8000 --directory .
```

## Maintenance

Company copy and the planned founding-date state live in `assets/js/company.js`. The single-page public content is `index.html`; `privacy/index.html` describes the actual informational site. Shared design tokens and responsive styling are in `assets/css/site.css`.

## Deployment and HTTPS

GitHub Pages serves `main` from the repository root. `CNAME` must remain exactly `cinqic.com`. DNS and GitHub Pages settings—not repository files—control the TLS certificate and HTTP-to-HTTPS redirect; see [docs/HTTPS_DEPLOYMENT.md](docs/HTTPS_DEPLOYMENT.md).
