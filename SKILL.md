---
name: ias-design
description: Use this skill to generate well-branded interfaces and assets for HCM–HRIS (MB Bank's internal HR management system). Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

---

## Workflow: Screen from Upload (HTML wireframe or image)

Whenever the user uploads an **HTML wireframe, a screenshot, or an image** of a screen:

### Step 1 — Analyse the upload
- Read the HTML or view the image to list every **UI element** visible: headers, inputs, buttons, tables, badges, tabs, modals, dropdowns, etc.
- Also identify the **screen level**: is it a top-level module (L1), a sub-section (L2), a detail/form page (L3), etc.
- **If the screen level or nav position is ambiguous → ask the user before proceeding.**

### Step 2 — Map to design-system components
For every element found, find the **nearest matching component** from the table below.
Rules:
- Exact match → use that component directly.
- Similar intent (e.g. "status chip" ≈ `Tag`, "alert bar" ≈ `Alert`, "avatar circle" ≈ `Avatar`) → **replace with the DS component**.
- No equivalent (truly bespoke element) → build with DS tokens (colors, spacing, radii from `styles.css`) only — no arbitrary colors.
- **Never invent a component that already exists in the DS.**
- **`Badge` and `Tag` are not interchangeable** — `Badge` is for record status (e.g. Đang làm việc / Chờ duyệt), `Tag` is for category/filter chips (e.g. Kế toán / CNTT). Never use `Tag` to show status or `Badge` for a category chip — see `references/component-rules.md`'s "Badge vs. Tag" section.

| Upload element | DS component |
|---|---|
| Top app bar / header | *dropped by default* — see Step 3; only use `AppHeader` if the user explicitly asks to keep a top bar |
| Left navigation / sidebar | `AppSidebar` |
| Page title + breadcrumb bar | `PageHeader` |
| Text input, search box | `Input` / `SearchInput` |
| Number input | `InputNumber` |
| Multi-line text | `Textarea` |
| Dropdown / select | `Select` |
| Checkbox | `Checkbox` / `MCheckbox` |
| Radio button | `Radio` |
| Toggle / switch | `Toggle` |
| Primary / secondary button | `Button` |
| Data table / grid | `Table` |
| Row-level `more_vert` overflow action menu | `RowMenu` (text-only, canonical order — see its own rule file, not a generic `Dropdown`) |
| Filter bar / search form above a list or table | `FilterCard` |
| Simple single-line search bar above a list or table | `ToolbarSimple` |
| Import flow (download-template + upload-file steps above a list) | `ImportPanel` |
| Column-visibility / "display settings" dropdown above a list | `ColumnPicker` |
| Card / stat tile | `Card` / `DataCard` |
| Avatar / profile image | `Avatar` |
| Status label / chip (record state, e.g. Đang làm việc / Chờ duyệt) | `Badge` |
| Category / filter chip (e.g. Kế toán / CNTT) | `Tag` |
| Tab bar | `Tabs` |
| Horizontal rule | `Divider` |
| Empty-state illustration | `Empty` |
| Inline alert / banner | `Alert` |
| Loading spinner | `Spinner` |
| Tooltip | `Tooltip` |
| Step indicator / wizard bar | `Steps` |
| Progress bar | `Progress` |
| Toast / notification | `Notification` |
| Confirmation popup | `Popconfirm` |
| Dialog / modal | `Modal` |
| Slide-in side panel / record detail drawer | `Drawer` |
| Context menu | `Dropdown` / `DropdownMenuItem` |
| Nav item | `MenuItem` |
| Pagination bar | `Pagination` |
| Icon | `Icon` / Material Symbols Outlined |
| Breadcrumb trail | `Breadcrumb` |

### Step 2a — Map colors to declared Semantic Alias tokens (mandatory)
**Before assigning any text/border/icon/background color on a bespoke element, read `references/color-rules.md`.** It has the full Semantic Alias token table (grouped by property, with resolved hex), the fixed-color rules for `.hcm-h1`–`.hcm-h5` and `.hcm-subtitle1`/`.hcm-subtitle2`, the 70%-similarity severe-gap threshold and escalation process, and the "never create a new token yourself" rule.

### Step 2b — Map typography to the declared type scale (mandatory)
**Before styling any text element, read `references/typography-rules.md`.** It has the full type scale table (12 scales, 11 with a `.hcm-*` utility class), the size-first/weight-tiebreak matching rule, and the portability notes for standalone artifacts.

### Step 2c — Apply per-component usage rules (mandatory)
**Before placing any DS component (or a bespoke lookalike), read `references/component-rules.md`.** As of 2026-08-14 this is a common file + index, not one monolithic doc — it holds the cross-cutting rules (button order, one-primary-per-row, propagation, list-screen layout convention) plus a **Component Index** linking out to `references/components/<group>/<component>.md` for each component's own structure/behavior rules (variant choice, state styling, composition limits, ordering) — derived from each component's `.card.html` sample and `.d.ts` contract. Read the common file first, then open only the per-component file(s) for what's actually on your screen. A few known inconsistencies between the component library and the shipped templates are flagged with ⚠️ in their component's own file — treat those as open questions, not settled rules.

**Whenever you change a component's rule or reference markup, propagation to every template is part of that same task — not optional follow-up.** Read the "Propagation rule" section at the top of `references/component-rules.md` before considering the change done: grep `templates/*.dc.html` for the old pattern, update every match in the same turn, then verify with a second grep that nothing was missed.

**Converting a list/table ("danh sách") screen specifically**: read the "List-screen layout convention" in `references/component-rules.md` (the common file, above the Component Index) before placing filter fields or deciding the default visible state — the uploaded wireframe's own placement is frequently wrong (filter fields split across two blocks, or a screen defaulting to showing the FilterCard) and needs repositioning, not preserving as-is.

### Step 3 — Build with IAS Layout (mandatory)
**Every screen must use the `IAS Layout` template as its shell.**
- Base: `templates/ias-layout/IasLayout.dc.html`
- The layout provides: **Sidebar Navigation ("MB \| IAS" brand) + PageHeader** — always present, never removed.
- **`AppHeader` (the top search/notifications/avatar bar) is excluded from every screen by default** — this is a standing design decision, not a per-screen choice. It has been removed from all shipped screen templates (`IasLayout`). Do not add it back to a new screen, and do not add it when converting an uploaded wireframe that happens to have one — drop it, the same way that template now does.
  - The `AppHeader` component itself still exists in the DS library (`components/navigation/AppHeader/`) purely for the rare case the user explicitly asks for a top bar on a specific screen — only then place it, and only on that screen.
- Set `activeNav` to the correct nav key for this screen (from `IasLayout`'s own nav tree) → sidebar tree auto-expands and breadcrumb auto-generates.
- Only the **Swap Zone** (main content area) changes per screen.
- If `activeNav` is ambiguous, ask the user for the nav path before generating.
- **Never invent a separate/bespoke header block (added 2026-07-31)** — every screen's header is `PageHeader`, full stop. Don't build a parallel "detail-header"/"page-title-bar"/etc. class next to it because a screen needs something PageHeader doesn't currently declare (a back-arrow, a status badge, an extra action, ...). If `PageHeader`'s current props don't cover what the screen needs, **stop and ask the user to extend `PageHeader` itself** (new prop, same pattern as `onBack`/`badge` added this way) — then use the extended component. This is exactly how `templates/ias-xem-chi-tiet/XemChiTiet.dc.html`'s header went from an ad-hoc `.detail-header` block to being `PageHeader`'s own reference implementation.

Shell zone checklist (every screen must pass) — full rule with component/rule-file links: `references/component-rules.md`'s "IAS Layout shell — mandatory component set" section:

| Zone | Component | Required |
|---|---|---|
| Sidebar Navigation | `AppSidebar` | ✅ always |
| Page Header (breadcrumb + title) | `PageHeader` | ✅ always |
| App Header | `AppHeader` | ❌ excluded by default — only add if the user explicitly asks for a top header bar on that screen |
| Main content / swap zone | DS components | ✅ varies |

### Step 3a — List/table screens: MUST use the `DanhSachChuongTrinh` template (mandatory)
Whenever the screen being built — from an uploaded wireframe, a screenshot, or a plain-text request — is primarily a **list/table view** ("màn hình danh sách" — a table/grid as the main content, backed by search/filter controls and pagination, with or without tabs splitting multiple lists), you **must use** `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html` as the literal base for the Swap Zone. This is not optional and not just a structural resemblance to aim for — open that file first, and adapt its actual markup/class structure directly (`list-panel`, `toolbar`, `filter-card`/`frow`/`filter-actions-row`, `table-wrap`/`table-inner`, `pagination-bar`/`pg-pages`/`pg-size`/`pg-jump`) rather than authoring an independent layout that merely looks similar. Never build a list screen's Swap Zone from scratch or from a different template.

**Base**: `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html`

- **Applies identically to standalone/portable artifacts** built outside the skill folder (e.g. a throwaway prototype in Downloads) — reproduce the template's exact class names and markup shape (not just the general idea), the same as the font/token portability rules elsewhere in this file. A portable artifact is not an excuse to hand-roll a lookalike structure.
- If you are updating/regenerating a list screen that was already delivered, re-open both the delivered file and this template and diff them before editing — don't assume an earlier pass already matched it.

Required Swap Zone composition, in this order:
1. **`.list-panel`** wrapper (flex column, `gap:16px`) holding everything below — one per list, and "holding" means every one of steps 2-4 is an actual DOM child of this element, never a sibling placed loose inside `.content`. Give it an id following `ias-{domain}-list-panel` (e.g. the reference template's own `id="ias-program-list-panel"` for the "Chương trình" list). If the screen has multiple lists via tabs (like a "danh sách" screen with several sub-tabs, each backed by its own table), each tab panel gets its **own** `list-panel` with its own id, independently toggled.
2. **`ToolbarSimple` ⇄ `FilterCard`**, mutually exclusive, occupying the same slot at the top of the list-panel — `ToolbarSimple` visible by default (collapsed: one search box + "Tìm kiếm" + "Tìm kiếm nâng cao" trigger), `FilterCard` swapped in only after "Tìm kiếm nâng cao" is clicked, never both at once. See the `ToolbarSimple`/`FilterCard` rules in `references/component-rules.md` for the exact field grid, trailing actions (Export, column/settings config), and action-row order, and the "List-screen layout convention" (same file) for where filter fields belong — not scattered outside the FilterCard or duplicated into both toggle states.
3. **`Table`** directly below, in its own `.table-wrap` card — sticky header, dot+pill status cells, row actions as either a text link or `more_vert` overflow (never both).
4. **`.pagination-bar`** directly below the table: result count (left) + page-number buttons (`.pg-pages`, pushed right via `margin-left:auto`) + rows-per-page select (`.pg-size`) + **page-jump input** (`.pg-jump`, "Chuyển đến") — all four pieces, not a subset.

This is a structural requirement, not a suggestion. If the uploaded wireframe's own layout differs (fields always visible with no toggle, no FilterCard at all, missing the page-jump input, filter fields scattered outside a dedicated block), **restructure it to match** rather than preserving the upload's original composition — this is exactly the correction the "List-screen layout convention" rule already calls for.

If it's genuinely ambiguous whether a screen counts as a "list screen" (e.g. a dashboard with one small embedded table among several unrelated cards, not the main content) — ask the user rather than forcing this structure onto something that isn't really a list screen.

### Step 3b — Full-page record detail ("Xem chi tiết") screens: use the `XemChiTiet` template
When a screen's job is to show one record's full detail on its own page (not inside a `Drawer`/`Modal`) — typically reached via a `Drawer`'s `open_in_full` expand action, see `Drawer`'s section in `references/component-rules.md` — use `templates/ias-xem-chi-tiet/XemChiTiet.dc.html` as the base. It has: a detail header (back-arrow + title + status `Badge` left, `Ý kiến`/`Lịch sử`/`more_vert` actions right), a section-switcher (radio + label segments, one panel visible at a time), collapsible `Thông tin chung` (3-column read-only field grid) and content cards, and a centered "Đóng" footer that navigates back. Only one example exists so far (unlike `DanhSachChuongTrinh`, this isn't yet marked strictly mandatory) — but prefer adapting it over building a detail page from scratch.

**This template is a structure/pattern reference, not fixed content.** Its field labels (Mã kế hoạch năm, Tên kế hoạch, ...), table columns, and section-switcher tab names all belong to its own "Kế hoạch kiểm toán" example — when applying it to a different screen, replace every field/column/tab with whatever the actual input (uploaded wireframe, business description, or real data model) for that screen calls for. Keep the **structure**, not the sample field names:

```
page-header (back + title + badge + actions)
  → section-switcher
      → card field-grid (Thông tin chung, ...)
      → card bảng (Nội dung kế hoạch, ...)
  → detail-footer (Đóng, ...)
```

### Step 4 — Auto-adjust Breadcrumb & Sidebar
- Breadcrumb is derived from the nav tree path to `activeNav` + any extra segments (`extraBreadcrumb` prop).
- Sidebar auto-highlights the active item and opens ancestor groups.
- If extra breadcrumb segments are needed (e.g. detail record name), pass them via `extraBreadcrumb` (e.g. `"Nguyễn Văn A"`).

### Step 5 — Component usage report (after generation)
After every generated screen, append **three** coverage report comments at the end of the file and print all three summaries in chat: the Component Coverage Report, the Color Token Coverage report (Step 2a), and the Typography Scale Coverage report (Step 2b).

**Read `references/coverage-reports.md` for the exact format, worked examples, and scoring rules for all three reports** — including the 🚫 Severe gap status for colors that must be escalated to the user rather than auto-resolved (see `references/color-rules.md`).

---

## Key facts to apply immediately

- **Brand**: MB Bank / HCM–HRIS internal HR management system
- **Language**: Vietnamese (vi-VN) — all UI labels in Vietnamese; English only for technical terms
- **Primary color**: `#141ED2` (deep brand blue) — use for buttons, links, active states, focus rings
- **Font**: Averta Std CY — self-hosted OTF files already exist in `fonts/` (16 weights) with `@font-face` + the `--font-family-body` CSS variable defined in `tokens/typography.css`. This is the real brand font, not a nice-to-have — **always prioritize it over Plus Jakarta Sans**, which is a Google Fonts fallback only for when the OTF files are unavailable.
  - **Working inside the skill folder / via `ds-base.js` / linking `styles.css`**: already wired — nothing extra to do.
  - **Producing a standalone/portable HTML artifact outside this skill folder** (e.g. a throwaway prototype in Downloads or elsewhere): you MUST (1) copy `fonts/*.otf` next to the artifact, (2) inline `@font-face` rules pointing at the copied files, and (3) define `--font-family-body: "Averta Std CY", "Plus Jakarta Sans", ...` on `:root` — the DS bundle components read `var(--font-family-body, "Plus Jakarta Sans", sans-serif)`, so if that variable is never defined, they silently render in the literal fallback even though nothing "failed". Do not stop at adding a Google Fonts `<link>` for Plus Jakarta Sans — that alone guarantees the fallback, not the brand font.
- **Page background**: `#F4F6FA` (cool light gray, not white)
- **Cards/surfaces**: white `#FFFFFF` with a `1px solid --color-border-default` border, `12px` radius — no shadow (dropped 2026-07-31 in favor of border-only; see `Card`'s section in `references/component-rules.md`)
- **No emoji in UI** — Material Symbols icons only
- **Sidebar**: 248px expanded / 64px mini, dark navy `#0D0D2B` bg, hover-expand, collapsible tree nav, active item `rgba(255,255,255,0.10)`

---

## Components (45 non-icon + 2588 icon wrappers)

All components are exposed via `window.HCMDesignSystem_66ca8f` from `_ds_bundle.js`.

| Group | Components |
|-------|------------|
| **forms** | Button, Input, InputNumber, Textarea, Select, Checkbox, MCheckbox, Radio, Toggle, SearchInput |
| **display** | Avatar, Badge, Tag, Tabs, DataCard, Card, Empty, Field |
| **feedback** | Alert, Spinner, Tooltip, Steps, Progress, Notification |
| **navigation** | AppSidebar, AppHeader, Breadcrumb, Pagination, MenuItem |
| **overlay** | Modal, Popconfirm, Dropdown, DropdownMenuItem, Drawer |
| **data** | Table, FilterCard, ToolbarSimple, ListPanel, ImportPanel, ColumnPicker, RowMenu |
| **layout** | Divider, PageHeader, DetailFooter |
| **assets** | Icon |
| **icons** | 2588 Material Symbols style wrappers |

Load: `<script src="_ds_bundle.js"></script>` then `const { Button } = window.HCMDesignSystem_66ca8f`.

`FilterCard`, `ToolbarSimple` (added 2026-07-21), `ListPanel` (added 2026-07-31, `components/data/ListPanel/`), `ImportPanel` (added 2026-08-14, `components/data/ImportPanel/`), `ColumnPicker` (added 2026-08-17, `components/data/ColumnPicker/`), and `RowMenu` (added 2026-08-18, `components/data/RowMenu/`) ship as source only (`.card.html` sample + `.d.ts` contract + `.jsx` reference implementation) — **not yet compiled into `_ds_bundle.js`**, same as how `data/` has no per-group `Components.bundle.js` the way `forms/`, `display/`, etc. do. Until included in a future bundle rebuild, use the `.jsx` files directly (copy the implementation) rather than assuming `window.HCMDesignSystem_66ca8f.FilterCard` / `.ToolbarSimple` / `.ListPanel` / `.ImportPanel` / `.ColumnPicker` / `.RowMenu` exist.

`Drawer` (added 2026-07-31, `components/overlay/Drawer/`), `DetailFooter` (added 2026-07-31, `components/layout/DetailFooter/`), and `Field` (added 2026-07-31, `components/display/Field/`) are source-only for the same reason, but note `overlay/`, `layout/`, and `display/` **do** each have a compiled `Components.bundle.js` (unlike `data/`) — they just predate these three components and haven't been rebuilt since. Use `Drawer.jsx`/`DetailFooter.jsx`/`Field.jsx` directly rather than assuming `window.HCMDesignSystem_66ca8f.Drawer` / `.DetailFooter` / `.Field` exist.

Always `read Components.d.ts` in a bundle directory before using it to get exact prop names.

---

## Token files

- `styles.css` — root entry, imports everything
- `tokens/colors.css` — full color token system with semantic aliases
- `tokens/typography.css` — type scale + **self-hosted Averta Std CY `@font-face`** (16 weights, files in `fonts/`) which sets `--font-family-body`; Plus Jakarta Sans/Lato/JetBrains Mono are Google Fonts fallbacks only, imported in the same file
- `tokens/spacing.css` — spacing, radii, shadows, z-index
- `tokens/fig-tokens.css` — Figma Variables export (53 tokens)

**Portable HTML artifacts** (built outside this skill folder) won't pick up `tokens/typography.css` automatically — see the Font bullet above under "Key facts" for the copy/inline steps required to actually get Averta Std CY instead of the Plus Jakarta Sans fallback, and see Step 2b for the `--type-*`/`--font-weight-*` variables the typography-scale mapping depends on.

---

## UI Kit

`ui_kits/hcm/index.html` — full interactive HR management prototype with employee table, sidebar nav, modal, stats cards, tabs, pagination, filters.

---

## Icon set

`assets/icons/icon-data.js` — 313 Figma-extracted SVG icons as `{ viewBox, body }` (63 unique icon families × 5 styles).
Usage:
```html
<script src="assets/icons/icon-data.js"></script>
<script>
const { viewBox, body } = iconData["search"];
// render: <svg viewBox={viewBox} dangerouslySetInnerHTML={{ __html: body }} />
</script>
```

---

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
