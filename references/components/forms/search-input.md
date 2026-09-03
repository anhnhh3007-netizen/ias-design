# SearchInput
- Icon is always present, absolutely positioned at `left: 10px`, and never removable — a search field without the icon is not this component.
- Default = border `--color-border-default` on `--color-bg-page`; focus = border `--color-border-focus` on `--color-bg-surface` (white) with the glow shadow, and the icon itself recolors to brand on focus (not just the border).
- **Sizes (`size` prop, added 2026-08-27)**: `small`/`medium`/`large` → 32/40/48px, same scale shared with `Input`/`InputNumber`/`Select`/`Button` — see `form-fields.md`'s "Sizes" section for the full table and rules. `medium` (default, 40px) replaces this component's previous bespoke 36px default.

---
