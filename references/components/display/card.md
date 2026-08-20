# Card
- Optional header = title (14px bold) + subtitle (12px muted) on the left, at most **one** text-link style action on the right (e.g. "Chỉnh sửa") — not a button, just colored brand text.
- Optional footer = right-aligned button row only, following the cross-cutting footer order rule (secondary left, primary right), capped at 2 buttons.
- Radius is always 12px with a `1px solid --color-border-default` border — updated 2026-07-31, was a brand-tinted shadow (`0 2px 8px rgba(75,99,226,.08)`) with no border; the shadow is dropped, not layered on top of the border. A clickable `Card` (with `onClick`) darkens the border to `--color-border-focus` on hover instead of animating a shadow.
