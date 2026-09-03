# ToolbarSimple
Single-line search toolbar, the default/collapsed state above a list or `Table` — not a form, no field grid.
- Fixed order, left → right: search input (`SearchInput`-style, ~320px) → the action table below → trailing utility actions pushed to the far right via `margin-left: auto`.

## Sizes (`size` prop, added 2026-08-27)
Same S/M/L scale as `Button`/`Input`/`SearchInput`/`Select` (`references/components/forms/form-fields.md`'s "Sizes" section): `small` = 32px, `medium` = 40px (default), `large` = 48px.

- **The search input and both buttons `ToolbarSimple` renders ("Tìm kiếm", "Tìm kiếm nâng cao") must always be the same size as each other — this is a hard rule, not a per-control choice.** A toolbar with a `small` search field next to `medium`-height buttons (or vice versa) reads as visually broken: the row looks like two mismatched pieces bolted together rather than one coherent control cluster. `ToolbarSimple`'s own implementation enforces this structurally — every height/font-size in the component is derived from the single `size` prop, there is no way to set the input and buttons to different sizes through the component's own props.
- **This does not automatically extend to `extraActions`/`selectionActions`.** Those props take already-rendered `React.ReactNode`s — `ToolbarSimple` has no way to reach into them and set a size. If a caller renders its own `Button`s inside `extraActions` (Export, settings, Xóa, Hủy, Gửi duyệt, Import — the trailing action cluster below) or `selectionActions`, **it must pass those buttons the same `size` value as the `ToolbarSimple` itself.** A toolbar that sets `size="small"` but leaves its `extraActions` buttons at the `Button` default (`medium`) reintroduces exactly the mismatch this rule exists to prevent — the rule covers the *whole row*, not just the two controls `ToolbarSimple` happens to render internally.
- Same rule applies when swapping in `FilterCard` for the advanced-search state (see below) — `FilterCard`'s own field/action sizing should match whatever size the collapsed `ToolbarSimple` was using, so the toggle doesn't visibly resize the row.

### Size by location (added 2026-08-27)
Which size to pick is not free choice per screen — it follows *where* the toolbar is rendered:

| Location | `size` |
|---|---|
| Drawer (side-panel quick view, including a list-style Drawer like a cross-reference table's own toolbar) | `small` (32px) |
| List page (the main screen's own `ToolbarSimple`/`FilterCard`, above the primary `Table`) | `medium` (40px) |
| Full-page detail screen ("Xem chi tiết") | `medium` (40px) |

- **Rationale**: a `Drawer` is a compact, secondary surface sliding in over the main content — its own internal toolbar (e.g. a cross-reference table's search bar inside the Drawer) should read as denser/lighter than the primary page furniture, matching the Drawer's own tighter spacing. The list page and the full-page detail screen are both primary, full-width surfaces — same size on both keeps the "promoted from Drawer to full page" transition (see `Drawer`'s own `open_in_full` expand action, `references/components/overlay/drawer.md`) from visibly resizing the toolbar underneath it.
- **The same toolbar-rendering logic can serve both a Drawer and the full-page screen** — don't duplicate the markup/component per destination. Derive `size` from context at the call site instead: Mapping NVTT's own `mapCrossRefTableOnly`/`mapCrossToolbarHTML` is the reference implementation — one shared function renders a cross-reference table's toolbar for three different callers (`mapOpenDrawer` with `backKind:'record'`, `mapOpenCrossRefListDrawer` with `backKind:'list'`, and `mapOpenDetailPage` with no `backKind`), and picks `size` as `small` whenever a `backKind` is present (i.e. it's being opened inside some Drawer) or `medium` when it isn't (the full-page case) — `const compact = !!backKind;`. One function, size follows where it's mounted.
- This is additive to the "button always matches input" rule above, not a replacement for it — whichever size a location calls for, the input and buttons still have to agree with each other.
- Pairs with `FilterCard`: clicking "Tìm kiếm nâng cao" swaps `ToolbarSimple` out for a `FilterCard` occupying the **same slot** — the two are mutually exclusive, never shown at once. `FilterCard`'s own "Ẩn tìm kiếm nâng cao" action swaps back. This toggle relationship is standard whenever a screen offers both a quick search and an advanced filter — don't build two permanently-visible blocks for this.
- `ToolbarSimple` itself never has a Reset button or field grid — once expanded, that's `FilterCard`'s job (see its Reset rule in `references/components/data/filtercard.md`). Don't add fields directly into `ToolbarSimple`.
- Reference implementation: `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html` (`#ias-toolbar-simple` / `#ias-toolbar-advanced`, toggled by `iasShowAdvancedSearch()` / `iasHideAdvancedSearch()`).

#### Trailing action cluster — fixed order, variable composition (updated 2026-08-14, supersedes the old strictly-closed 4-item table and the separately-toggled "bulk-selection bar" below it)
The trailing area (right of "Tìm kiếm nâng cao", pushed via `margin-left: auto`) is **one single cluster**, not two separate states. Whichever of the items below a screen needs, they always render **in this exact left→right order** — but **which ones appear depends on the screen's own requirements, not a fixed closed set**: a screen with no import flow simply omits "Import", a screen with no approval workflow omits "Hủy"/"Gửi duyệt", and so on.

| # | Label | `Button` variant | `iconLeft` | Notes |
|---|---|---|---|---|
| 1 | (selection label) "Đã chọn {n} bản ghi" | plain text, not a `Button` | — | 13px/600, `--color-text-primary`; relevant whenever the `Table` above has `rowSelection` and rows 2-4 are present — show it (even at `n=0`) alongside them rather than only after the first row is checked, so the cluster doesn't jump width as selection changes |
| 2 | Xóa | `outline` | `delete` | record-level bulk action; `disabled` when nothing is selected |
| 3 | Hủy | `outline` | `block` | workflow action (e.g. withdraw/cancel a submission); `disabled` when nothing is selected |
| 4 | Gửi duyệt | `outline` | `send` | workflow action (submit for approval); `disabled` when nothing is selected |
| 5 | Import | `outline` | `file_upload` | trailing utility action |
| 6 | Export | `outline` | `file_download` | trailing utility action |
| 7 | (icon-only, `settings`) | `outline` | — | trailing utility action, column/display config — always last; opens `ColumnPicker` (added 2026-08-17, revised same day — see `references/components/data/columnpicker.md`) — clicking it switches the icon itself to an active/pressed state while the panel is open; the panel live-applies on every toggle, no confirm step and nothing else added to the toolbar |

- **Order is closed, presence is open.** Never reorder these relative to each other, but a screen may show any subset — including just rows 6-7, the old minimal default (search + Export + settings only). This loosens the previous "only these four may appear" rule; that language is retired along with the separate bulk-selection-bar concept below it.
- Rows 2-4 share their `disabled` state, driven by the `Table`'s row-selection count — at `n=0` they render disabled, not hidden, so the cluster's width stays constant as the user selects/deselects rows. Row 1's label follows the same rule (always visible alongside 2-4, not just once `n>0`).
- No `danger` `Button` variant exists (see `Button`'s closed set) — "Xóa"/destructive emphasis is carried by position/icon, not color, same as everywhere else in the DS.
- **Gap handling** for an action not in this table: same three-step process as `PageHeader`/`FilterCard` — warn, suggest the nearest existing row/zone, and if genuinely nothing fits, ask the user whether to drop it or extend this table (name + variant + icon).
- Reference implementation: `components/data/ToolbarSimple/ToolbarSimple.jsx` (`selectedCount`/`selectedLabel`/`selectionActions` props feed rows 1-4, `extraActions` feeds rows 5-7 — same prop shape as before, only the documented composition rule changed) + `components/data/Table/Table.jsx` (`rowSelection` prop). Demoed in `toolbarsimple.card.html` (both a minimal and a fuller composition) and `table.card.html` (checkbox column).
- Propagated to `components/data/ToolbarSimple/toolbarsimple.card.html` and `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html` at the same time (per the Propagation rule in `references/component-rules.md`).
