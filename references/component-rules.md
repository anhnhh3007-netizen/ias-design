# Step 2c — Component usage rules (mandatory)

For every component placed from the DS (`_ds_bundle.js`) or built as a bespoke lookalike inside the Swap Zone, follow the usage rule for that component **in addition to** the color rule (`color-rules.md`) and typography rule (`typography-rules.md`) — those two cover *tokens*, this file (and the per-component files it indexes) covers *structure and behavior* (variant choice, ordering, states, composition limits).

Every rule is derived from the actual markup in each component's `.card.html` sample and its `.d.ts` prop contract (source of truth: `components/<group>/<Name>/`), plus the shipped templates in `templates/`. Where the evidence was ambiguous or the templates disagree with the component library sample, it's flagged with ⚠️ instead of silently picked — treat those as open questions, not settled rules.

**Never invent a new visual variant of a component** (a new Button color, a new Badge shape, etc.) to solve a one-off screen need — that's a design-system decision, same restriction as the "never create a new token" rule in `color-rules.md`. If nothing here fits, ask before improvising.

**This file is the common entry point** — read it first for the rules that apply across components, then open the specific file(s) under `references/components/<group>/<component>.md` for the component(s) actually on your screen. Don't open every per-component file up front; the Component Index below tells you exactly where each one lives.

## Propagation rule — a component change is not done until every template matches it (mandatory)

Templates are self-contained `.dc.html` files (no shared include/extends mechanism), so a component's markup is **duplicated** into every template that uses it. That means updating a component's rule or reference markup and stopping there leaves the templates silently stale — the DS and the shipped screens drift apart. Treat propagation as part of the same task, not a follow-up — **auto-propagate immediately, no asking first** (reverted 2026-07-31; the 2026-07-23 "ask before touching any template" gate is no longer the default, per explicit instruction):

0. **Propagate proactively, same turn, no confirmation needed (updated 2026-07-31).** The moment a component is created or updated, identify which `templates/*.dc.html` (and `ui_kits/*/index.html`) embed it (step 2 below) and apply the same change to all of them immediately, in the same turn as the component edit — do not stop to ask permission first. Still report which templates were touched (step 5) so the change is visible, but don't gate the edit on a yes/no first.
1. **Identify what actually changed** — a structural/behavioral change (layout, states, variant choice, button order, markup) needs propagating; a wording-only clarification of an already-true rule does not.
2. **Grep `templates/*.dc.html` for that component's markers** (its class names, distinctive structure, or an `@template`/section comment naming it) to find every template that embeds it — don't rely on memory of "which templates use this," search for it.
3. **Once approved, apply the same structural change to every match, in the same turn** — not just the file the user happened to point at. This is exactly what happened for the `AppHeader` removal (3 templates), the breadcrumb text-link standardization (2 templates), and the `FilterCard` action-row convention (retrofitted into `HcmDashboard`'s ad-hoc filter card) earlier in this project — codify that as the default behavior once confirmed, not a one-off cleanup.
4. **Verify with a search, not by memory** — grep again afterward for the old pattern (old class name, old markup shape) across `templates/` and confirm zero remaining matches before calling the change done.
5. **Report which templates were touched** (and which were checked but didn't need changes) so the user can see the propagation happened, not just the primary edit.
6. `ui_kits/*/index.html` (the full interactive kitchen-sink demo) is lower priority — it showcases components in isolation rather than serving as a screen base — but still gets auto-propagated in the same turn along with `templates/`, same as step 0.
7. **This file split (added 2026-08-14): the component-rules content now lives across this common file + `references/components/<group>/<component>.md`.** A rule change touching one component only needs editing that component's own file (and this common file only if the change is cross-cutting, e.g. the List-screen layout convention below). Keep propagation to `templates/`/`ui_kits/` exactly as before — the split only changes where the *rule text* lives, not the propagation obligation itself.

---

## Cross-cutting rules (apply to more than one component)

- **Sentence case, never uppercase**, on all interactive labels — button text, tab labels, menu items, badge/tag text, form labels, **and, as of 2026-08-21, `Table` column headers too**. Vietnamese doesn't use letter-casing for emphasis; every shipped example capitalizes only the first letter of the first word (`"Xác nhận"`, `"Hủy bỏ"`, `"Tìm kiếm"`, `"Nội dung chi tiết"`). `Table` headers were previously this rule's one documented exception (uppercase + `letter-spacing`) — that exception is retired; see `references/components/data/table.md` for the corrected header spec (no `text-transform`, no `letter-spacing`, label text used as-authored).
- **Footer / action-row button order is fixed: secondary (cancel/dismiss) on the left, the dominant/destructive action on the right.** Confirmed identical in `Card` footer, `Modal` footer, and `Popconfirm` — e.g. `Hủy` (`outline`) then `Lưu`/`Xóa` (`primary` — `Button` has no separate `danger` variant, see its own file below) reading left→right. Don't reverse it for a single screen even if it "reads better" locally.
- **One primary (solid brand) button per view/toolbar/footer.** Every shipped example (`PageHeader`, `Card` footer, dashboard filter bar) has exactly one solid-brand CTA; everything else supporting is `secondary`/`ghost`/icon-only. Two solid-brand buttons competing in the same row is a violation, not a style choice.
- **Destructive actions are visually isolated**: in `Dropdown`/`DropdownMenuItem`, a `danger` item is always last, separated from normal items by a `sep` divider — never interleaved with normal actions.
- **Status is always dot + pill + label**, never color-only text. `Badge` (status) and the inline status cell in `Table` both render a small colored dot inside a rounded-pill background — a bare colored word (e.g. red text alone) is not an accepted way to convey status anywhere in the DS.
- **No emoji in production UI** — the emoji glyphs visible in some `.card.html` samples (📋 🔍 ✅ etc.) are placeholders standing in for a real icon; always swap them for a Material Symbols Outlined ligature (`components/icons/`) before shipping a screen. This restates the "No emoji" key fact in `SKILL.md`.

---

## List-screen layout convention — page-header vs. toolbar vs. filter-card (mandatory)

When converting an uploaded "danh sách" (list) screen, filter-related elements are frequently scattered across the wrong shell zone in the source wireframe (fields split between a toolbar and a separate block). **Reposition them into this fixed zone assignment — don't preserve the uploaded file's original placement if it violates this:**

- **All search/filter criteria** — every input, select, or date-range field meant for narrowing the list — belong inside one consolidated **`FilterCard`**. Don't leave some fields sitting in `ToolbarSimple` or scattered elsewhere on the page; if the uploaded wireframe has filter fields living outside a dedicated advanced-search block, move all of them into the FilterCard grid.
- **Default visible state is `ToolbarSimple`** (collapsed: one search box + "Tìm kiếm" + "Tìm kiếm nâng cao" trigger) — never default a converted screen to showing the `FilterCard`; it only appears after the user clicks "Tìm kiếm nâng cao" (the swap mechanism documented in `references/components/data/toolbarsimple.md`).
- Column/settings config is a **trailing utility action** present in both `ToolbarSimple`'s and `FilterCard`'s action rows; Export, Import, and any row-selection/workflow action (Xóa/Hủy/Gửi duyệt) are `ToolbarSimple`-only trailing items — `FilterCard`'s own action row is deliberately narrower (updated 2026-08-14, see `references/components/data/filtercard.md`). None of these belong in `PageHeader`. A "Tạo mới" (create-new) action, by contrast, is **always** promoted to `PageHeader`'s `actions` slot per that component's own closed action table (`references/components/layout/pageheader.md`) — not a per-screen judgment call anymore.
- **Every list-screen component nests inside a single `.list-panel` container** — `ToolbarSimple`/`FilterCard`, the `Table`'s `.table-wrap`, and the `.pagination-bar` are all DOM children of that one element, never siblings dropped loose in `.content`. Give the panel an id following `ias-{domain}-list-panel` (the reference template uses `id="ias-program-list-panel"` for its "Chương trình" list). A screen with multiple lists (tabs) gets one `.list-panel` per list, each with its own id — not one shared panel for all tabs.
- If the screen has an import flow, **`ImportPanel`** (added 2026-08-14, `references/components/data/importpanel.md`) is also a DOM child of `.list-panel`, toggled open from `ToolbarSimple`'s "Import" trailing action — position it directly below the toolbar/filter-card slot and above the `Table`, same containment rule as everything else in this list.

---

## IAS Layout shell — mandatory component set (Step 3, mandatory)

`templates/ias-layout/IasLayout.dc.html` is the required shell for every IAS screen (`SKILL.md` Step 3). Every zone below maps to one DS component whose own rule file governs the shell's markup — treat these as fixed, not per-screen choices. The Swap Zone isn't one component; it's the fixed sub-set from whichever of `DanhSachChuongTrinh.dc.html` (list screens) or `XemChiTiet.dc.html` (detail screens) applies, per `SKILL.md` Steps 3a/3b — each of *its* pieces gets its own row too, so nothing required is left buried in prose:

| Zone | Component bắt buộc | Rule file |
|---|---|---|
| Sidebar Navigation | `AppSidebar` | `components/navigation/appsidebar.md` |
| Page Header (breadcrumb + title, optional back/badge/actions) | `PageHeader` | `components/layout/pageheader.md` |
| App Header (top search/notifications/avatar bar) | `AppHeader` — **excluded by default**, only add when the user explicitly asks for a top bar on that one screen | `components/navigation/appheader.md` |
| Swap Zone — list-panel container | `ListPanel` | `components/data/listpanel.md` |
| Swap Zone — search bar ⇄ advanced filters | `ToolbarSimple` / `FilterCard` | `components/data/toolbarsimple.md`, `components/data/filtercard.md` |
| Swap Zone — data grid | `Table` (row overflow menu: `RowMenu`) | `components/data/table.md`, `components/data/rowmenu.md` |
| Swap Zone — pagination bar | `Pagination` (page-number buttons only — result count, rows-per-page select, and the "Chuyển đến" jump input are sibling pieces in the same `.pagination-bar`, not props on `Pagination` itself) | `components/navigation/pagination.md` |
| Swap Zone — detail field-grid | `Field` (inside `Card`) | `components/display/field.md`, `components/display/card.md` |
| Swap Zone — detail footer | `DetailFooter` | `components/layout/detailfooter.md` |

`AppSidebar`'s canonical real menu tree (`Trang chủ` … `Danh mục NVTT`) is documented in `appsidebar.md` and mirrored in `components/navigation/AppSidebar/appsidebar.card.html`.

**These are structural contracts, not live imports.** `IasLayout.dc.html` (and every other `templates/*.dc.html`) hand-authors its own markup for each zone rather than calling `window.HCMDesignSystem_66ca8f.AppSidebar(...)` etc. — confirmed by grep, zero templates instantiate any of `AppSidebar`/`AppHeader`/`Breadcrumb`/`Pagination`/`MenuItem` as a literal JS call. "Mandatory" means the template's markup must stay structurally identical to that component's own `.card.html` sample and `.d.ts` contract (classes, states, behavior), not that the template imports a runtime module. When a component's rule changes, propagate the markup change into `IasLayout.dc.html` (and `DanhSachChuongTrinh.dc.html`/`XemChiTiet.dc.html`, which duplicate the same sidebar) per the Propagation rule above — don't assume updating the component file alone keeps the shell in sync.

---

## Component Index

Read the file(s) for whatever's actually on your screen — don't read the whole group.

### Forms
- [Button](components/forms/button.md)
- [Input / InputNumber / Textarea / Select (form-field family)](components/forms/form-fields.md)
- [Checkbox / MCheckbox / Radio](components/forms/checkbox-radio.md)
- [Toggle](components/forms/toggle.md)
- [SearchInput](components/forms/search-input.md)

### Display
- [Avatar](components/display/avatar.md)
- [Badge vs. Tag](components/display/badge-tag.md)
- [Chips](components/display/chips.md)
- [Card](components/display/card.md)
- [DCard](components/display/dcard.md)
- [DataCard](components/display/datacard.md)
- [Empty](components/display/empty.md)
- [Field](components/display/field.md)
- [Tabs](components/display/tabs.md)

### Feedback
- [Alert vs. Notification](components/feedback/alert-notification.md)
- [Progress](components/feedback/progress.md)
- [Spinner](components/feedback/spinner.md)
- [Steps](components/feedback/steps.md)
- [Tooltip](components/feedback/tooltip.md)

### Navigation
- [AppSidebar](components/navigation/appsidebar.md)
- [AppHeader](components/navigation/appheader.md)
- [Breadcrumb / PageHeader breadcrumb row](components/navigation/breadcrumb.md)
- [MenuItem](components/navigation/menuitem.md)
- [Pagination](components/navigation/pagination.md)

### Overlay
- [Dropdown / DropdownMenuItem](components/overlay/dropdown.md)
- [Modal](components/overlay/modal.md)
- [Drawer](components/overlay/drawer.md)
- [DrSectionTitle](components/overlay/dr-section-title.md)
- [Popconfirm](components/overlay/popconfirm.md)

### Layout
- [PageHeader](components/layout/pageheader.md)
- [Divider](components/layout/divider.md)
- [DetailFooter](components/layout/detailfooter.md)

### Data
- [ListPanel](components/data/listpanel.md)
- [ToolbarSimple](components/data/toolbarsimple.md)
- [FilterCard](components/data/filtercard.md)
- [ImportPanel](components/data/importpanel.md)
- [ColumnPicker](components/data/columnpicker.md)
- [Table](components/data/table.md)
- [RowMenu](components/data/rowmenu.md)

### Assets
- [Icon](components/assets/icon.md)
