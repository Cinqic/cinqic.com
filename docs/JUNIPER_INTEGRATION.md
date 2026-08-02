# Future Juniper integration

The marketing route `/juniper/` is deliberately separate from any future product application. Introduce a real application only when ready under `/juniper/chat`, with separate routes for downloads, documentation, models, and releases. Do not create those routes until they work.

The app boundary should represent local and cloud providers explicitly, keep authentication optional where product requirements permit, and show streaming state only for actual streaming responses. Any future model metadata (model name, local/remote state, tokens, generation time), downloadable models, model cards, licenses, and cloud disclosures should be sourced from real release data and link to `/transparency/`. A real API must not be simulated on the marketing site.
