# Deployment

Current host: GitHub Pages, serving the `main` branch from the repository root. The deployed output is the checked-in static files; no Node.js or build artifact is required. Before a merge, run `python scripts/verify_site.py` and preview with `python -m http.server 8000 --directory .`.

`CNAME` must contain exactly `cinqic.com`. The established GitHub Pages DNS configuration uses the GitHub Pages apex A/AAAA records and `www` CNAME. Do not change DNS from this repository. In GitHub repository Settings → Pages, retain the custom domain `cinqic.com`, enable Enforce HTTPS only after the certificate is issued, and set the canonical redirect behavior so `www` resolves to the apex.

Rollback: revert the problematic commit on `main` and wait for the Pages deployment to complete. If a domain issue occurs, first confirm `CNAME`, Pages settings, and current DNS records before changing any registrar record. GitHub Pages cannot set CSP, HSTS, Referrer-Policy, or Permissions-Policy headers for this project; add a compatible edge host before requiring custom response headers.
