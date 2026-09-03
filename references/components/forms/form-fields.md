# Input / InputNumber / Textarea / Select (form-field family)
- Shared anatomy: `label` (12px / weight 600 / `--color-text-body`) above the field; radius 8px, default border `--color-border-default`. Field height is per the `size` scale below (`medium` = 40px is the default/baseline unless a screen calls for a different size).

## Sizes (`size` prop, added 2026-08-27)
`Input`, `InputNumber`, `SearchInput`, and `Select` all share one S/M/L scale, matching `Button`'s own (`components/forms/Button/button.md`):

| `size` | height | fontSize |
|---|---|---|
| `small` | 32px | 13px |
| `medium` (default) | 40px | 13px |
| `large` | 48px | 14px |

- **Small and medium share the same font-size, only large steps up** — mirrors `Button`'s own precedent (its `small`/`medium` both use 14px, only `large` goes to 16px). Don't shrink text at `small`; the field just gets shorter, not harder to read.
- **Horizontal padding stays constant across sizes** — only height and font-size scale. Same convention as `Button`'s fixed `--space-button-px` regardless of size; don't tighten padding at `small` or loosen it at `large`.
- **Icon positioning (`Input`'s `iconLeft`/`iconRight`, `SearchInput`'s search icon, `Select`'s chevron) needs no size-specific adjustment** — every icon is centered via `top: 50%` / `transform: translateY(-50%)` (or, for `Input`'s absolutely-positioned icons inside a flex row, the flex container's own `align-items: center`), both of which re-center automatically at any field height. Never hardcode a pixel `top` offset tuned for one specific size.
- **`SearchInput`'s default height changed from a bespoke 36px to 40px** to join this shared scale — it previously didn't match any other form field's height. If a screen was relying on the old 36px specifically (unlikely, since it never matched anything else), pass `size="small"` isn't a substitute (32px, not 36px) — there is no exact replacement for the old value, which is the point: 36px was never a real design-system size to begin with.
- Pick the size the same way you'd pick a `Button` size on the same row/toolbar — a `FilterCard`'s inline fields next to a `small` `Button` should themselves be `small`, not left at the `medium` default while the button around them is compact.
- Focus state is **always** border `2px solid --color-border-focus` + `box-shadow: 0 0 0 3px rgba(20,30,210,.08)` — this exact glow, not a generic browser outline.
- `error` state = `2px solid --color-border-error` border + a red hint line below the field; `success` state = `2px solid --color-border-success` + green hint below. The hint always sits *below* the field, never inline/beside it.
- `disabled` = bg `--color-bg-page` (`#F4F6FA`), text `--color-text-muted`, border stays the thin default (not 2px), `cursor: not-allowed`.
- A required field's asterisk goes **immediately after the label text**, colored `--color-text-error` (e.g. `Loại kỳ báo cáo *`) — not before the label, not in the placeholder.
- `Select` always shows a chevron affordance on the right of the field (`expand_more` or the caret SVG) — never a select with no visible open-affordance.
