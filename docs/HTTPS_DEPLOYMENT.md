# HTTPS deployment

Hosting is GitHub Pages with custom domain `cinqic.com`. Repository files cannot issue the TLS certificate or enable HTTPS enforcement.

## Observed production state (August 2, 2026)

- GitHub Pages is built from `main` at the repository root, with custom domain `cinqic.com` and the project custom 404 page enabled.
- The apex resolves to GitHub Pages' four A records (`185.199.108.153` through `185.199.111.153`) and four AAAA records; `www` is a CNAME to `cinqic.github.io`.
- No CAA record was observed. The Pages API reported no pending domain-verification timestamp and no protected-domain state.
- Plain HTTP was serving the current site at the apex; `www` permanently redirected to the HTTP apex.
- The Pages API reported `https_enforced: false`. Direct HTTPS validation failed because the presented certificate did not yet cover `cinqic.com` or `www.cinqic.com`; the detailed certificate API endpoint was unavailable for this repository (HTTP 404).

On August 2, 2026, the same custom-domain and source configuration was re-saved through GitHub's Pages API to request another certificate-provisioning attempt. No DNS records were removed or replaced.

**Current status: PUBLISHED — CERTIFICATE PROVISIONING PENDING.** Wait for GitHub Pages to issue a valid certificate, then enable **Enforce HTTPS**. Do not enable HSTS before the checks below succeed.

After certificate issuance, verify:

```powershell
curl.exe -I http://cinqic.com/
curl.exe -I https://cinqic.com/
curl.exe -I http://www.cinqic.com/
curl.exe -I https://www.cinqic.com/
```

Every noncanonical request should permanently redirect to `https://cinqic.com/`, and the final request should return 200 with a valid certificate. GitHub Pages cannot set custom CSP, Referrer-Policy, Permissions-Policy, or HSTS headers; use an edge host if those headers become required.
