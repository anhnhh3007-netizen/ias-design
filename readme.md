# HCM Design System

**HCM – HRIS** — MB Bank's internal HR management platform. 2624 components, 238 tokens, 2 templates, 16 Averta Std CY weights. Revised 2026-07-22 (HCM-specific shell templates and `bao-cao-quan-tri` removed; every remaining template built on **IAS Layout**).

> **Layout rule:** Every screen uses **IAS Layout** as its shell (Sidebar + PageHeader always present; only the Swap Zone changes). See SKILL.md Step 3.

---

## Quick reference

| | |
|---|---|
| Namespace | `HCMDesignSystem_66ca8f` |
| Components | 2624 (36 UI + 2588 icon wrappers) |
| Cards | 2640 — Brand 3, Colors 4, Components 40, HCM System 1, Icons 2588, Spacing 2, Type 2 |
| Tokens | 238 |
| Templates | **IAS Layout** · IAS Danh sách chương trình |
| Brand font | Averta Std CY — self-hosted, 16 weights/styles (tokens/typography.css) |
| Page bg | `#F4F6FA` |
| Primary | `#141ED2` |
| Sidebar | `#0D0D2B` 248 px expanded / 64 px mini |

---

## Load

```html
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Table, AppHeader, AppSidebar, PageHeader } = window.HCMDesignSystem_66ca8f;
</script>
```

In Design Components use `<helmet><script src="./ds-base.js"></script></helmet>`.

---

## Layout rule — all screens

Every HCM–HRIS screen must include all three shell zones:

| Zone | Component | Notes |
|------|-----------|-------|
| Sidebar Navigation | `AppSidebar` | 64 px mini / 248 px expanded, dark `#0D0D2B`, hover-expand tree |
| App Header | `AppHeader` | 64 px white bar: search, messenger, notifications, avatar |
| Page Header | `PageHeader` | Breadcrumb + h1 title + subtitle + actions slot |

Only the **Swap Zone** (main content area) changes per screen.

**Auto-behaviour:** setting `activeNav` auto-opens ancestor groups in the sidebar tree and auto-generates the breadcrumb path. Ask the user for `activeNav` if the screen level is ambiguous.

---

## Screen from upload — workflow

When an HTML wireframe or image is uploaded:

1. **Analyse** — list every UI element; identify screen level (L1/L2/L3). Ask if nav position is unclear.
2. **Map to DS** — replace every element that has a DS equivalent (see SKILL.md mapping table).
3. **Build** — always use HCM Screen Layout template as the shell.
4. **Report** — append a Component Coverage Report (target ≥ 80% DS coverage).

---

## Components

| Group | Components |
|-------|-----------|
| forms | Button, Input, InputNumber, Textarea, Select, Checkbox, MCheckbox, Radio, Toggle, SearchInput |
| display | Avatar, Badge, Tag, Tabs, DataCard, Card, Empty |
| feedback | Alert, Spinner, Tooltip, Steps, Progress, Notification |
| navigation | AppSidebar, AppHeader, Breadcrumb, Pagination, MenuItem |
| overlay | Modal, Popconfirm, Dropdown, DropdownMenuItem |
| data | Table |
| layout | Divider, PageHeader |
| assets | Icon |
| icons | 2588 Material Symbols style wrappers |

---

## Tokens

| File | Contents |
|------|---------|
| `styles.css` | Root entry |
| `tokens/colors.css` | Full color scales (primary/accent/success/error/warning/alert/info/neutral) + semantic aliases (`--color-text-*`, `--color-border-*`, `--color-bg-*`, `--color-icon-*`) — **not read by `_ds_bundle.js` itself** (its 2624 components hardcode literal hex internally); only consumed by hand-authored screen code per SKILL.md Step 2a |
| `tokens/typography.css` | Type scale + self-hosted Averta Std CY `@font-face` (sets `--font-family-body`); Plus Jakarta Sans/Lato/JetBrains Mono are Google Fonts fallbacks only |
| `tokens/spacing.css` | Spacing, radii, shadows, z-index |

> **Standalone/portable artifacts** (built outside this skill folder, e.g. a one-off prototype elsewhere on disk) don't inherit `tokens/typography.css` automatically. Copy `fonts/*.otf` next to the artifact, inline the `@font-face` rules, and define `--font-family-body` on `:root` — otherwise the DS bundle's components silently render in the Plus Jakarta Sans fallback (they read `var(--font-family-body, "Plus Jakarta Sans", sans-serif)`, which resolves to the literal fallback whenever the variable itself isn't defined). Also carry over the `--type-*`/`--font-weight-*` variables (see SKILL.md Step 2b) if the screen uses type-scale mapping, and the full `--color-*` block (see SKILL.md Step 2a) if it uses color-token mapping — otherwise `var(--type-h4-size)`/`var(--color-text-body)` etc. resolve to nothing.

---

## Templates

| Slug | Entry | Description |
|------|-------|-------------|
| ias-danh-sach-chuong-trinh | `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html` | **Mandatory structural reference for every list/table ("danh sách") screen** — `list-panel` + `ToolbarSimple ⇄ FilterCard` swap + `Table` + pagination bar with page-jump. See SKILL.md Step 3a. |
| ias-layout | `templates/ias-layout/IasLayout.dc.html` | **Mandatory shell for every screen** — Sidebar ("MB \| IAS" brand, 10-item nav) + PageHeader + Swap Zone. See SKILL.md Step 3. |

---

## Icons

- **Font:** Material Symbols Outlined variable font (Google Fonts)
- **SVG overrides:** `assets/icons/icon-data.js` — 313 icons, 63 families × 5 styles
- **Component:** `<Icon name="SearchStyleFilled" size={20} />`
- Axes: FILL 0/1, wght 200/300/400/600

---

## Visual language

- **Colors:** Primary `#141ED2`, Accent `#7B61FF`, Error `#EB2D4B`, Warning `#F4B740`, Success `#00BA88`
- **Type:** Averta Std CY (self-hosted, 16 weights) / Plus Jakarta Sans fallback; Lato for UI; JetBrains Mono for code
- **Radii:** Cards 8–12 px, inputs/buttons 8 px, badges 4 px, avatars 50%
- **Language:** Vietnamese (vi-VN); English for technical terms only; no emoji

---

## Sources

- Figma: `HCM System Web.fig`
- Fonts: https://drive.google.com/drive/folders/15AsjVkPotcMXOK7HCDKeyEtKbjSHHPIC
- UI Kit: `ui_kits/hcm/index.html`
