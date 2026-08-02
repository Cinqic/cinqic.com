# HTTPS deployment

Hosting is GitHub Pages with custom domain `cinqic.com`. Repository files cannot issue the TLS certificate or enable HTTPS enforcement.

In GitHub → `Cinqic/cinqic.com` → Settings → Pages, retain `cinqic.com` as the custom domain. Wait for GitHub Pages to issue a valid certificate, then enable **Enforce HTTPS**. DNS must retain the GitHub Pages apex A/AAAA records and `www` CNAME `cinqic.github.io`.

After certificate issuance, verify:

```powershell
curl.exe -I http://cinqic.com/
curl.exe -I https://cinqic.com/
curl.exe -I http://www.cinqic.com/
curl.exe -I https://www.cinqic.com/
```

Every noncanonical request should permanently redirect to `https://cinqic.com/`, and the final request should return 200 with a valid certificate. Do not enable HSTS before this succeeds. GitHub Pages cannot set custom CSP, Referrer-Policy, Permissions-Policy, or HSTS headers; use an edge host if those headers become required.
