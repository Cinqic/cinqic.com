# Deployment

GitHub Pages serves `main` from the repository root. No build output or Node.js runtime is required. Verify locally with `python scripts/verify_site.py` and `python -m http.server 8000 --directory .`, then merge a reviewed commit into `main`.

The custom-domain file must contain only `cinqic.com`. Keep the existing GitHub Pages apex A/AAAA records and `www` CNAME to `cinqic.github.io`; do not edit DNS merely to publish content. See [HTTPS deployment](HTTPS_DEPLOYMENT.md) for certificate and redirect verification.
