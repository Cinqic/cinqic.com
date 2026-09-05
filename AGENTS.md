# Cinqic website instructions

Keep this site static, fast, accessible, and honest. Juniper is the flagship
software experience. `/apps/` groups consumer applications, `/research/`
groups research, and `/privacy/` explains the website and product-documentation
boundaries. Keep `/juniper/`, `/juniper-auto/`, `/calculator/`, and `/privacy/`
working as public routes.

GitHub is canonical for product facts. Before publishing copy, distinguish
current implementation, development candidates, published releases, research
targets, and retired work. Never claim a release, performance result,
availability, privacy guarantee, certification, partner, social account, or
download without current repository or release evidence. Do not advertise
uncommitted work from another repository.

Juniper Auto is research, not a normal consumer app. Its current phase status
must come from `Cinqic/Juniper-Auto`; future autonomy, tools, memory, trained
checkpoints, or expert specialization must not be presented as implemented
without evidence. Juniper Math 1 is completed historical research and must not
be presented as an active model project.

Use semantic HTML, keyboard-accessible interactions, visible focus states,
responsive layouts, and reduced-motion support. Do not add trackers, ads,
external fonts, cookies, secret material, fake contact details, or
dependency-heavy frameworks. Preserve `CNAME` exactly as `cinqic.com` and keep
GitHub Pages deployment files intact.

Run `python scripts/verify_site.py` after changes and
`python scripts/verify_release_links.py --include-android` when release links
or product copy change. Review all internal links and metadata before commit.
