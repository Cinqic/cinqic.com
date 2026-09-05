# HTTPS deployment

Hosting is GitHub Pages with the custom domain cinqic.com. Repository files
cannot issue the TLS certificate or enable HTTPS enforcement.

## Observed production state

The production checks below were last run on September 5, 2026:

- https://cinqic.com/ returned 200 OK with a certificate accepted for the
  custom domain.
- http://cinqic.com/ permanently redirected to https://cinqic.com/.
- https://www.cinqic.com/ permanently redirected to
  https://cinqic.com/.
- GitHub Pages serves main from the repository root with CNAME set to
  cinqic.com.

Re-run the checks after a Pages or DNS change:

```powershell
curl.exe -I http://cinqic.com/
curl.exe -I https://cinqic.com/
curl.exe -I http://www.cinqic.com/
curl.exe -I https://www.cinqic.com/
```

Every noncanonical request should permanently redirect to
https://cinqic.com/, and the final request should return 200 with a valid
certificate. GitHub Pages cannot set custom CSP, Referrer-Policy,
Permissions-Policy, or HSTS headers; use an edge host if those headers become
required.
