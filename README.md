# Cinqic.com

The official static website for Cinqic: open-source software and research projects. It introduces Juniper Math 1, Cinqic’s approximately 5M-parameter mathematical reasoning and tool-use research model, honestly as in development.

## Stack and commands

Plain HTML, CSS, and minimal vanilla JavaScript. There are no package dependencies or build step.

```powershell
python scripts/verify_site.py
python -m http.server 8000 --directory .
```

`verify_site.py` checks local site structure only and always runs offline.
Cinqic Calculator's release links are checked separately, since they depend
on GitHub being reachable:

```powershell
python scripts/verify_release_links.py
```

## Maintenance

Company copy and the planned founding-date state live in `assets/js/company.js`. The single-page public content is `index.html`; `privacy/index.html` describes the actual informational site; `calculator/index.html` is the Cinqic Calculator product page. Shared design tokens and responsive styling are in `assets/css/site.css`.

## Deployment and HTTPS

GitHub Pages serves `main` from the repository root. `CNAME` must remain exactly `cinqic.com`. DNS and GitHub Pages settings—not repository files—control the TLS certificate and HTTP-to-HTTPS redirect; see [docs/HTTPS_DEPLOYMENT.md](docs/HTTPS_DEPLOYMENT.md).

As of August 2, 2026, the rebuilt site is published and GitHub Pages certificate provisioning is pending. The deployment record includes the observed DNS, redirect, and HTTPS checks.
