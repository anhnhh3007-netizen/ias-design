# Checkbox / MCheckbox / Radio
- Control size is fixed at 18×18px; `Checkbox`/`MCheckbox` are 4px-radius squares, `Radio` is a circle — don't mix radii.
- Checked = solid brand fill + a **checkmark glyph** (svg path), not the letter/text "✓". Indeterminate = solid brand fill + a short horizontal white bar (not the checkmark) — the two states must be visually distinguishable at a glance.
- `disabled` = `opacity: 0.4`, border/bg fall back to neutral even if previously checked-colored.
- `MCheckbox` exists to pixel-match the Figma `[M]Checkbox` component (it separately exposes a `hovering` prop) — prefer plain `Checkbox` for normal screen-building; only reach for `MCheckbox` when a Figma handoff explicitly calls out that component.
