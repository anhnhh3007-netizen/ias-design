import * as React from 'react';

export interface ColumnPickerOption {
  /**
   * Matches the Table column's own data key. Every option listed here MUST correspond to
   * a column the Table actually renders with real content once checked — no decorative
   * catalog-only options with no data behind them. If a field has no data source wired up
   * yet, either synthesize plausible sample values for it or leave it out of `options`
   * entirely; never ship a checkbox that toggles with no visible effect on the Table.
   * See references/components/data/columnpicker.md's "no decorative/no-op checkboxes" rule.
   */
  key: string;
  label: string;
  /** Only used by the grouped variant — must match one of `groups[].key`. Ignored (and not required) in the default flat variant. */
  group?: string;
}

export interface ColumnPickerGroup {
  /** Matches `ColumnPickerOption.group` */
  key: string;
  /** Anchor label and in-list section header text (rendered as-is, no transform) */
  label: string;
}

/**
 * ColumnPicker — the panel behind the "Thiết lập hiển thị" / column-settings
 * `settings` icon-only trigger already declared as the last row in
 * `ToolbarSimple`'s and `FilterCard`'s trailing action clusters (see
 * `references/components/data/toolbarsimple.md` / `filtercard.md`).
 *
 * Live-apply: every checkbox toggle (including "Chọn tất cả") calls
 * `onVisibleChange` immediately with the full next set — there is no
 * pending/draft state and no confirm/cancel step (revised 2026-08-17,
 * dropped the original "Đồng ý"/"Từ chối" toolbar pair).
 *
 * Positioned `fixed` from `triggerRef`'s own rect, not `absolute` inside
 * the trigger's parent — `ToolbarSimple`'s trailing cluster needs
 * `overflow-x: auto` on narrow viewports, which would otherwise clip the
 * panel instead of letting it overlay the `Table` below.
 */
export interface ColumnPickerProps {
  /** Controls panel visibility */
  open: boolean;
  /** Ref to the settings icon-button that opens this panel — its `getBoundingClientRect()` positions the panel */
  triggerRef: React.RefObject<HTMLElement>;
  /** Every column the Table can show, in display order — the source of truth for order is the caller's own state; when `onReorder` is passed, the caller must apply its next-key-order back onto `options` (and the Table's own column order) for a drag to actually take effect. */
  options: ColumnPickerOption[];
  /** Keys currently visible on the Table */
  visibleKeys: string[];
  /**
   * Fires with the full next set of visible keys on every toggle (a single column, or all
   * via "Chọn tất cả") — applies straight to the Table, no confirm step. Hiding a key must
   * hide BOTH that column's header cell and every body cell in the same update — never one
   * without the other. See columnpicker.md's "hides its header cell AND every body cell" rule.
   */
  onVisibleChange: (keys: string[]) => void;
  /**
   * Optional (added 2026-08-26) — enables drag-to-reorder on every checklist row (a
   * `drag_indicator`-style handle appears to the right of each row, after the label).
   * Fires with the full next `options` array — same shape as `options` itself, already
   * resequenced and with the dragged item's `group` updated if it moved into a
   * different group's section — the moment a drag drops onto another row. Live-apply,
   * same as `onVisibleChange`, no separate confirm step: apply the array straight back
   * as the next `options` (and the `Table`'s own column order). Omit to leave the
   * picker show/hide-only (no reordering) — this was the only mode before 2026-08-26
   * and stays the default when `onReorder` isn't passed.
   * - **Flat variant**: the dragged item can move anywhere in the one list; `group`
   *   is irrelevant here and left untouched.
   * - **Grouped variant**: dropping onto a row in a *different* group's section moves
   *   the dragged column into that group — its `options[i].group` is reassigned to
   *   match, and it lands at the drop target's position within that group's section.
   *   Dropping onto a row in its own group just reorders within that section, same as
   *   the flat case. There is no restriction to same-group-only reordering.
   * - **Disabled while a search filter is active** (`searchValue` non-empty and the
   *   search row is shown) — dragging within a filtered subset has no unambiguous
   *   destination in the real full order, so the handle simply doesn't render; clear
   *   the search to reorder.
   * - **Drag/drop affordance, modeled on Ant Design's own drag-list pattern (added
   *   2026-08-26; a same-day hover-reveal draft of the handle was tried and reverted
   *   the same day — the handle stays always-visible, that part is a hard requirement,
   *   not a hover affordance)**: (1) the handle is always visible on the right, after
   *   the label; (2) row hover tints the row `--color-bg-hover`, and only the handle
   *   itself shows a grab cursor on its own hover — the row's own cursor stays default,
   *   signaling the handle (not the row) is the drag affordance, even though the whole
   *   row remains the native-drag source for simplicity; (3) while dragging, the row
   *   currently under the pointer keeps its hover tint and gets a thin
   *   `--color-border-focus` line along its top edge via an `inset` `boxShadow` on the
   *   row's own style (settled 2026-08-27 after two failed drafts — an in-flow sibling
   *   element reflowed the list mid-drag and broke dragging downward; a
   *   position-absolute overlay fixed that but then visually covered the next row's
   *   text, since nothing made room for it — `boxShadow` avoids both, since it never
   *   affects layout and is drawn inside the row's own box), marking exactly where the
   *   dragged item lands if dropped now (insertion is always immediately above that row
   *   — matches `moveOption`'s actual insert-before-target behavior). The row being
   *   dragged never shows the line on itself. The row's own top corners square off
   *   (`border-radius: 0 0 6px 6px`) while the line shows, revised 2026-08-27 — an
   *   inset `boxShadow` still conforms to the row's rounded corners, so left in place
   *   it curves into an arc at each end and reads as a border segment, not a clean
   *   straight line spanning the full width. This is internal visual feedback, not a
   *   prop — nothing to wire up.
   * - **Applying the array this fires with: only rebuild the column list — never reset
   *   visibility, never re-derive group assignment (added 2026-08-27, from a real
   *   regression in Mapping NVTT's own picker).** The array is already fully correct —
   *   right order, dragged item's `group` already updated if it moved sections. Don't
   *   let the handler also, as a side effect, reset which columns are checked/visible
   *   (a drag reorders/regroups, it never changes visibility) or re-derive any option's
   *   `group` from some other/stale source (which can silently revert a cross-group
   *   move) — apply the array as-is.
   * See `references/components/data/columnpicker.md`'s "Reordering columns" section.
   */
  onReorder?: (nextOptions: ColumnPickerOption[]) => void;
  /** Closes the panel — wired to clicking the trigger again or an outside click; never discards anything since nothing is pending */
  onClose: () => void;
  /** Free-text filter applied to `options` by label, case/diacritic-insensitive. Only rendered by the panel when `options.length > 10` — omit/ignore below that threshold */
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  /**
   * Optional — presence (a non-empty array) switches the panel from the default flat
   * layout to the **grouped variant**: a left anchor nav (one entry per group, jump-
   * scrolls + scroll-spy highlights whichever group is at the top of the list) next to
   * a wider list with a section header per group. Every `options[i].group` must match
   * one of `groups[].key`; an option with no matching group silently doesn't render.
   * See `references/components/data/columnpicker.md`'s "Variant selection" section for
   * when to reach for this vs. the flat default — short version: default to flat, only
   * use `groups` when the user has explicitly indicated the columns should be grouped,
   * and this choice only matters once there are more than ~20 options.
   */
  groups?: ColumnPickerGroup[];
  /**
   * Optional (added 2026-08-27) — grouped variant only; ignored when `groups` isn't
   * passed. Enables drag-to-reorder on the anchor nav itself: each group entry gets
   * the same always-visible `drag_indicator`-style handle as a checklist row, and
   * dragging one onto another swaps their position in `groups`. Fires with the full
   * next `groups` array — apply it straight back as the next `groups` (both the
   * anchor nav's own listing and the checklist's section order read from `groups`,
   * so one update moves both). Live-apply, no confirm step, same as `onReorder`.
   * Independent of `onReorder` — a caller can offer either, both, or neither; this
   * reorders which *group* comes first/second/third, `onReorder` reorders columns
   * within (or across) those groups.
   * - **Same drag/drop-over visual language as `onReorder`'s rows**: always-visible
   *   handle, `--color-border-focus` line via `boxShadow` (not a separate element —
   *   same reflow/text-covering pitfalls apply here as to rows, see `onReorder`'s own
   *   doc above), squared top corners while the line shows, dragged entry dimmed to
   *   `opacity: .4`. The two reordering gestures in this panel should read as one
   *   consistent interaction, not two different-looking ones.
   * - **No same-group-only restriction and no locked/anchor entry** — every group in
   *   `groups` is freely reorderable relative to every other; `ColumnPicker` itself
   *   has no concept of one group being "current" or pinned first. A caller that
   *   wants one entry locked (e.g. tied to an active tab elsewhere on the screen)
   *   implements that itself — e.g. by omitting the handle for that one group's
   *   entry in its own next `groups` array, or simply not passing `onGroupsReorder`
   *   at all if no group should ever move. See columnpicker.md's "Reordering groups"
   *   section for the full rule and the Mapping NVTT screen this generalizes.
   */
  onGroupsReorder?: (nextGroups: ColumnPickerGroup[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

declare const ColumnPicker: React.FC<ColumnPickerProps>;
export { ColumnPicker };
