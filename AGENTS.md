# Cinqic website instructions

Keep the site static, lightweight, accessible, private by default, and focused on **Juniper Baby 1**. LAG and every expansion of that abandoned name are prohibited: do not reintroduce them in content, code, assets, metadata, tests, documentation, or routes.

`assets/js/company.js` is the single source for company launch state and Juniper release data. The owner must set `release.launchState` to `launched` only when every release field and HTTPS URL is verified. Release actions require valid data; never create fake downloads, metrics, version numbers, users, testimonials, or benchmarks. Company launch date and Juniper release date are separate facts.

Use semantic HTML, visible focus styles, keyboard-accessible interactions, and reduced-motion support. Do not add trackers, ads, external fonts, fake contact/social links, cookies, or secrets. Preserve foundation-model attribution in any future release material. Run `python scripts/verify_site.py` and `node scripts/test_launch_state.js` after changes.
