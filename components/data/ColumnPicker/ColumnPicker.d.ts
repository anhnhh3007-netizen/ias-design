import * as React from 'react';

export interface ColumnPickerOption {
  /** Matches the Table column's own data key */
  key: string;
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
  /** Every column the Table can show, in display order */
  options: ColumnPickerOption[];
  /** Keys currently visible on the Table */
  visibleKeys: string[];
  /** Fires with the full next set of visible keys on every toggle (a single column, or all via "Chọn tất cả") — applies straight to the Table, no confirm step */
  onVisibleChange: (keys: string[]) => void;
  /** Closes the panel — wired to clicking the trigger again or an outside click; never discards anything since nothing is pending */
  onClose: () => void;
  /** Free-text filter applied to `options` by label, case/diacritic-insensitive. Only rendered by the panel when `options.length > 10` — omit/ignore below that threshold */
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

declare const ColumnPicker: React.FC<ColumnPickerProps>;
export { ColumnPicker };
