# FilterCard
Fixed layout, not a flexible/arbitrary form — this is a deliberate standardization decision, don't deviate per-screen.
- Surface is `1px solid --color-border-default` border, `12px` radius, **no shadow** (updated 2026-08-24, closing a gap from the 2026-07-31 Card border-only decision — `FilterCard` had kept the old brand-tinted `0 2px 8px rgba(75,99,226,.08)` shadow after every other card/surface dropped it; see `Card`'s own entry in `references/components/display/card.md`). `FilterCard.jsx` was also missing the border entirely (shadow was its only edge) — added to match.
- Grid is **always** `grid-template-columns: repeat(4, 1fr)` with `16px` gap — never 3, 5, or a variable column count. Pass more than 4 fields and they wrap onto additional rows of 4 (a partial last row, e.g. 3 fields, is fine and stays left-aligned in the grid — don't stretch it to fill the row).
- Each field follows the shared form-field rules already defined under **Forms** (12px/600 label above, 40px/8px-radius control, focus/error/success states, red `*` right after the label when `required`) — `FilterCard` doesn't redefine field styling, it only fixes the grid and the action row around it.
- The **action row is always present**, sits below the field grid, and is **right-aligned** (`justify-content: flex-end`, vertically centered) — never centered, never left-aligned, regardless of how many fields are above it. All actions sit in **one continuous button cluster, no divider splitting it into sub-groups.**

#### Action row — closed action table (updated 2026-08-14: dropped Export, narrower than `ToolbarSimple`'s own trailing cluster)
Not a flexible button row — exactly this table, in this order, and nothing else:

| # | Label | `Button` variant | `iconLeft` | Notes |
|---|---|---|---|---|
| 1 | Xóa bộ lọc | `outline` | `delete_sweep` | optional — omit only when the card has no reset-worthy state (e.g. nothing pre-filled) |
| 2 | Tìm kiếm | `primary` | `search` | the one CTA — always right after Reset, not required to be rightmost |
| 3 | Ẩn tìm kiếm nâng cao | `outline` | `expand_less` | panel-toggle back to `ToolbarSimple`; present whenever `FilterCard` was reached via that toggle |
| 4 | (icon-only, `settings`) | `outline` | — | trailing utility action, column/display config; no separate `iconLeft` since the button *is* the icon. Opens `ColumnPicker` (added 2026-08-17, revised same day — see `references/components/data/columnpicker.md`) — same active-state + live-apply behavior as its `ToolbarSimple` counterpart, no confirm step |

- **Only these four may appear**, in this exact order — a closed table, same restriction as `Button`'s variant set and `PageHeader`'s action table. Rows 1-3 always carry the `iconLeft` shown; row 4 is icon-only.
- **Export, Import, and any row-selection/workflow action (Xóa/Hủy/Gửi duyệt) do *not* appear here.** When the advanced filter is open, the trailing cluster narrows to just these four — the fuller set lives on `ToolbarSimple`'s own trailing action cluster (see `references/components/data/toolbarsimple.md`) and simply isn't shown while `FilterCard` is the active panel. This is a deliberate asymmetry between the two toggle states, not an oversight — don't mirror `ToolbarSimple`'s full cluster into `FilterCard` "for consistency."
- **Gap handling** for an action not in this table: same three-step process as `PageHeader` — warn it's not declared, suggest the nearest existing row/zone (most non-search/filter actions belong in `ToolbarSimple`'s trailing cluster instead, not here), and if genuinely nothing fits, stop and ask the user whether to drop it or extend this table (name + variant + icon).
- Propagated to every other `FilterCard` instance in the DS at the same time (per the Propagation rule in `references/component-rules.md`):
  - `components/data/FilterCard/filtercard.card.html` — removed the "Xuất Excel" trailing button from the sample's action row (Search stays `primary`, the rest `outline`).
  - `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html` — removed Export from its `FilterCard` action row to match.
  - 2026-08-24 shadow removal propagated the same way: `components/data/FilterCard/FilterCard.jsx` (shadow dropped, border added), `components/data/FilterCard/filtercard.card.html` (shadow dropped, border already present), `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html` (shadow dropped, border already present).
- `loading` swaps the Search button's icon for a spinner and disables it (same pattern as `Button`'s own `loading` prop) — don't disable the whole card or gray out the field grid while a search is in flight, only the action button.
