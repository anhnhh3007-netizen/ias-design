# Chips

`Chips` is the DS's one **interactive, toggleable** pill — distinct from `Tag` (static category label, never toggles, 4px rectangle) and `Badge` (status indicator, never clickable as a whole). Modeled on Material Design 3's 4 chip types. Source: `components/display/Chips/Chips.jsx`.

- **Shape**: `--radius-full` (9999px, `tokens/spacing.css`) at every state, on every variant — same radius token `Badge` already uses for its own pill shape. `Chips` and `Badge` are the DS's two full-pill elements; `Tag` is the one 4px-rectangle exception. Since shape no longer separates `Chips` from `Badge`, the line between them is purely **behavior**: `Chips` is clickable/toggleable/removable, `Badge` is a read-only status indicator.
- **Never interchange with `Tag`/`Badge`**: if the element needs to be clicked, toggled, or removed by the user, it's `Chips` — not a `Tag` with `onClose` (that stays a one-off convenience on already-shipped screens, not a general toggle mechanism going forward). If the element is read-only, it's `Tag` (category) or `Badge` (status), see `references/components/display/badge-tag.md`.

## Variants (`variant` prop)

| Variant | Purpose | Interaction | Structure |
|---|---|---|---|
| `assist` | Trigger a suggested/automated action (e.g. "Thêm vào lịch") | `onClick` | leading icon optional |
| `filter` | Multi/single-select filter tag (e.g. chọn nhiều Lĩnh vực/Trạng thái) | toggles via `selected` + `onSelectedChange` | leading icon optional, replaced by a check mark when `selected` |
| `input` | An already-chosen value/token (e.g. a selected attendee in a multi-select field) | `onRemove` (trailing "×" only) | leading icon/avatar optional, trailing "×" always present |
| `suggestion` | A dynamic suggested value to pick (e.g. quick-reply) | `onClick` | same structure as `assist` |

`assist` / `filter` / `suggestion` render as a real `<button>` — keyboard-reachable, the whole body is the hit target. `input` renders as a `<span>` with a nested `<button>` for the "×" only, mirroring `Tag`'s own `onClose` pattern — a `<button>` cannot contain another interactive element (invalid HTML/a11y), and an input chip's body isn't itself an action per Material's own spec.

## Size (`size` prop, added 2026-08-26)

Same `small` / `medium` / `large` naming as `Badge`'s own `size` prop, `medium` the default for both — but the numeric scale is `Chips`' own, not copied from `Badge`: `Badge` has no fixed height (a plain inline label riding on its padding+line-height), `Chips` is a real click target and needs enough height to stay tappable even at `small`.

| Size | Height | Font size | Leading icon/check box | Padding (no icon → with icon) |
|---|---|---|---|---|
| `small` | 24px | 11px | 14px | `0 10px` → `0 10px 0 6px` |
| `medium` (default) | 32px | 13px | 16px | `0 14px` → `0 14px 0 10px` |
| `large` | 40px | 14px | 18px | `0 16px` → `0 16px 0 12px` |

For comparison, `Badge`'s own scale (`references/components/display/badge-tag.md`) is padding-only (`2px 8px`/`3px 10px`/`4px 12px`, font `10`/`11`/`12px`) since it never needs a minimum tap-target height. Pick `Chips` size the same way `badge-tag.md` picks `Badge` size — by placement, not habit: `medium` for a chip set living next to a `Table`/`FilterCard` (the default, dense-but-tappable size), `small` only where `medium` still reads too heavy for the surrounding density, `large` when the chip set is the primary content of its own row (not sitting next to smaller controls).

## States

| State | Visual | Applies to |
|---|---|---|
| Enabled (default) | `--color-bg-hover` background, 1px `--color-border-default` border, `--color-text-primary` text | all |
| Hover | background escalates → `--color-primary-200` (raw scale, component-only fallback per color-rules.md's 2026-07-23 rule — no single alias reads as "one step up" from `--color-bg-hover`) | `assist` / `filter` / `suggestion` only — `input`'s body isn't a click target so it never hovers |
| Focused | border → `--color-border-focus` + `0 0 0 3px rgba(20,30,210,.08)` ring (same ring recipe as `FilterCard`'s own inputs) | `assist` / `filter` / `suggestion` |
| Selected | solid `--color-bg-brand` background, `--color-text-inverse` text, no border, leading icon replaced by a check mark | `filter` only — the toggle "on" state |
| Disabled | `opacity: 0.5`, `cursor: not-allowed`, no hover/focus/click | all |
| Elevated | `var(--shadow-sm)` instead of a border, background unchanged (`--color-bg-hover`) — for placement over an image/dark surface | `assist` / `filter` / `suggestion` (`elevated` prop); never combined with `selected` (a solid fill already reads as elevated) |

**Why `--color-bg-hover` as the *default* (not just hover) fill (revised 2026-08-26)**: a white (`--color-bg-surface`) chip on a white `FilterCard` surface reads as almost invisible until hovered. Using `--color-bg-hover` at rest has direct DS precedent — `Button`'s own `secondary` variant sits at this exact tint at rest and escalates further on its own hover, which is the same ladder `Chips` now follows.

## Composition

- **Chips always appear in a set** — wrap a group in `ChipGroup` (exported alongside `Chips`, flex-wrap + 8px gap). Don't render a single `Chips` in isolation unless the screen genuinely has just one filter/token to show.
- A `filter`-chip set backing a single `FilterCard` field is a reasonable alternative to `MCheckbox`/`Select` when the option list is short (roughly ≤ 8) and benefits from being scannable inline — this is a per-field judgment call, not a blanket replacement for every multi-select.
- Ships source-only (`.jsx` + `.d.ts` + `.card.html`) — not yet compiled into `display/`'s `Components.bundle.js` (that bundle predates this component, same situation as `Field`/`Drawer`/`DetailFooter`). Use `Chips.jsx` directly rather than assuming `window.HCMDesignSystem_66ca8f.Chips` exists.
