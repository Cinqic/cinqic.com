# Design system

Cinqic.com is a dark-first static site. The visual language is intentionally
quiet: black and near-black surfaces, white primary text, gray supporting text,
lime/white accents, one-pixel borders, restrained rounded corners, and system
fonts. The text wordmark remains intentional until an approved Cinqic logo is
available; do not invent one.

## Layout

- .shell constrains content to a predictable reading width and keeps page
  margins consistent.
- .hero and .page-hero establish a strong first screen without requiring
  decorative imagery.
- .section provides consistent vertical rhythm and a subtle divider.
- .split-layout, .release-panel, and .research-detail create readable
  text-to-detail relationships.
- .app-featured gives Juniper more visual weight than the other app cards.
- .app-grid, .facts-grid, .feature-grid, and .phase-summary are used for
  short, scannable groups rather than walls of small cards.

## Type and components

Eyebrows and section indexes use uppercase tracking for wayfinding. Headings
use tight display sizing; body copy stays within comfortable line lengths.
Buttons are at least 46px high, have visible hover/focus states, and should
remain usable when stacked on narrow screens. Status pills communicate
released, in-development, flagship, or research-candidate state without
pretending those states are interchangeable.

## Accessibility and motion

Use semantic landmarks, one clear main, ordered headings, skip links, visible
keyboard focus rings, readable contrast, and touch-sized controls. The mobile
menu is vanilla JavaScript and must remain keyboard-operable. All reveal and
hover motion is short and disabled under prefers-reduced-motion.

Do not add external fonts, analytics, trackers, cookies, heavy animation
libraries, or a build system. Reuse existing approved assets when an image
materially helps; for an in-development product with no approved screenshot,
use the same typography, cards, separators, and layout instead of inventing
product imagery.
