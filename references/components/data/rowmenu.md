# RowMenu
`components/data/RowMenu/` — the reference implementation for `Table`'s row-level `more_vert` overflow menu (see the "Row-level actions" bullet in `references/components/data/table.md`). A thin, opinionated wrapper over the generic `Dropdown`/`DropdownMenuItem` pattern, not a replacement for it — use `Dropdown`/`DropdownMenuItem` for any other context menu.

- **No icons (added 2026-08-18).** RowMenu items are text-only — no icon slot at all, unlike `DropdownMenuItem`'s optional `icon` prop. Don't add one back for a single screen "because it looks empty"; if a screen currently shows icons on its row menu (built before this rule existed), strip them on next touch.
- **Auto-sorted canonical order, not a required set.** When you're deciding which actions to show for a given row/status, place whichever ones apply in this order — skip any that don't apply, never pad the menu to force the full set:

  ```
  Xem chi tiết → Chỉnh sửa → Gửi duyệt → Lịch sử thay đổi → Xóa
  ```

  - This is a **suggested relative order for these 5 canonical actions specifically** — a screen's actual business flow can (and often does) have more actions than these 5 (e.g. "Gửi duyệt lại", "Hủy gửi duyệt", "Gửi yêu cầu hủy", a domain-specific "Cập nhật"). Those screen-specific actions aren't part of the canonical ordering; place them where the business flow calls for, generally keeping any canonical actions present in their relative canonical order around them.
  - "Xem chi tiết" is listed first here because it's first in the canonical set — but per `table.md`'s own "closed pair" exception, if the row already has a `keyboard_double_arrow_right` trigger for viewing detail (in its own column, not the trailing action column), don't duplicate "Xem chi tiết" inside RowMenu too. Only add it to RowMenu when there's no separate view-detail trigger elsewhere in the row.
  - `danger` items (typically "Xóa") are always sorted last regardless of canonical position — **no `sep` divider before it** (updated 2026-08-18: RowMenu deliberately drops the divider the generic cross-cutting rule uses for `Dropdown`/`DropdownMenuItem`; the red text color alone is enough to mark it as destructive). Don't add a separator back for a single screen — this is RowMenu's own standing exception, not an oversight.
  - The reference `RowMenu.jsx` implements this sort automatically (`CANONICAL_ORDER` + a `danger`-last pass) — a caller just passes whichever `actions` apply; it never needs to pre-sort or supply the full canonical set.
- **Positioning**: `fixed` from the trigger's own `getBoundingClientRect()`, the same technique `ColumnPicker` uses (see that component's doc) — not `position: absolute` inside the trigger's parent, since a table's trailing action column often sits inside an `overflow-x: auto` wrapper that would otherwise clip the panel.
- **Visual shell** matches `Dropdown`: white surface, `1px solid --color-border-default` border, 8px radius, `box-shadow: 0 8px 24px rgba(75,99,226,.12)`, min-width ~190px.
- Trigger is the row's `more_vert` icon button in the trailing action column — see `table.md` for when to use `more_vert` vs. a text-link vs. `keyboard_double_arrow_right`.

---
