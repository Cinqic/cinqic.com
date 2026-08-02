# Cinqic website instructions

Keep the site static, lightweight, accessible, and privacy-respecting. Use the dark black/white/gray system with lime (`#76b900`) only as a restrained accent. Do not add external fonts, tracking, ads, cookies, fake contact details, social links, testimonials, users, metrics, or product availability claims.

Juniper Baby 1 0.8B is **in development**, not released. LAG means Localized AI Generation and is Cinqic’s local-AI research and software foundation; do not call it an independently trained model without evidence. Cinqic Accounts and Cinqic Cloud are planned concepts.

Update company facts and the launch wording in `assets/js/company.js`; preserve the required Juniper transparency statement on `/transparency/`. Use semantic HTML, visible focus styles, keyboard-accessible interactions, and reduced-motion support. Do not add a fake chat backend or fake Juniper routes.

Run `python scripts/verify_site.py` after changes. Keep `CNAME` as `cinqic.com`; never commit credentials. Read `docs/CONTENT_GUIDE.md` and `docs/DEPLOYMENT.md` before editing copy or deployment files.
