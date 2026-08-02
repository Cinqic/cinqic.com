# Juniper Baby 1 launch procedure

## Pre-launch (current)

Keep `release.launchState` set to `pre-launch` in `assets/js/company.js`. The site intentionally shows no download, documentation, source, model-card, or release-note actions.

## Release readiness

Before setting launch mode, verify a real version, release date, HTTPS URLs for download, documentation, model card, source, license, checksums, and release notes; supported platforms; hardware requirements; attribution; evaluation results; known limitations; and installation instructions. Test every URL and checksum from a clean device.

## Enable or roll back

Populate all release fields, set `release.launchState` to `launched`, and run `node scripts/test_launch_state.js` plus `python scripts/verify_site.py`. Update all page metadata and social card only with verified release facts. To roll back, set `launchState` back to `pre-launch` and clear invalid release data, then publish the revert.

## Future release pages

Add `/juniper/download`, `/juniper/docs`, `/juniper/releases`, and `/juniper/models` only when they contain working content. Keep the marketing site and future chat application separate.
