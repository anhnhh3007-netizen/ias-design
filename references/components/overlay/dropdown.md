# Dropdown / DropdownMenuItem
- White surface, 8px radius, `box-shadow: 0 8px 24px rgba(75,99,226,.12)`, min-width 160–180px.
- Item states: default → hover (`--color-bg-hover` fill) → selected (8%-brand-tint bg + bold brand text) → danger (red text) → disabled (muted text, `cursor: not-allowed`). A `danger` item is always last and preceded by a `sep` divider (cross-cutting rule).
- `checkable` items use the same 18px checkbox visual as the `Checkbox` component (brand fill + white bar, not a checkmark) — reuse that exact treatment rather than a different check style.
