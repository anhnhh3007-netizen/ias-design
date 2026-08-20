# Input / InputNumber / Textarea / Select (form-field family)
- Shared anatomy: `label` (12px / weight 600 / `--color-text-body`) above the field; field height 40px, radius 8px, default border `--color-border-default`.
- Focus state is **always** border `2px solid --color-border-focus` + `box-shadow: 0 0 0 3px rgba(20,30,210,.08)` — this exact glow, not a generic browser outline.
- `error` state = `2px solid --color-border-error` border + a red hint line below the field; `success` state = `2px solid --color-border-success` + green hint below. The hint always sits *below* the field, never inline/beside it.
- `disabled` = bg `--color-bg-page` (`#F4F6FA`), text `--color-text-muted`, border stays the thin default (not 2px), `cursor: not-allowed`.
- A required field's asterisk goes **immediately after the label text**, colored `--color-text-error` (e.g. `Loại kỳ báo cáo *`) — not before the label, not in the placeholder.
- `Select` always shows a chevron affordance on the right of the field (`expand_more` or the caret SVG) — never a select with no visible open-affordance.
