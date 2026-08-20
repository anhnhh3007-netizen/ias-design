import * as React from 'react';

/**
 * ToolbarSimple — single-line search toolbar above a list/table.
 * Fixed order, left → right: search input → primary "Tìm kiếm" →
 * outline "Tìm kiếm nâng cao" trigger → trailing utility actions
 * (Export, column/settings config, ...).
 *
 * Pairs with `FilterCard`: `onAdvancedSearch` is meant to swap this
 * toolbar out for a `FilterCard` occupying the same slot (only one of
 * the two is visible at a time) — `ToolbarSimple` itself has no field
 * grid or Reset button, that's `FilterCard`'s job once expanded.
 *
 * Pairs with `Table`'s `rowSelection`: when `selectedCount > 0`, a
 * selection summary + `selectionActions` is inserted to the **left**
 * of `extraActions` (e.g. Export/settings) — `extraActions` itself
 * always stays visible and unchanged, it never gets hidden or replaced.
 * The search input and "Tìm kiếm nâng cao" trigger also stay put; only
 * the trailing slot gains the extra summary+actions block.
 */
export interface ToolbarSimpleProps {
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  onSearch?: () => void;
  /** Shows the "Tìm kiếm nâng cao" trigger; call site swaps to FilterCard on click */
  onAdvancedSearch?: () => void;
  /** Overrides the default "Tìm kiếm nâng cao" label */
  advancedSearchLabel?: string;
  /** Shows a loading spinner on the Search button and disables it */
  loading?: boolean;
  /** Trailing utility buttons rendered after the advanced-search trigger (e.g. Export, settings) — always visible, regardless of `selectedCount` */
  extraActions?: React.ReactNode;
  /** Number of currently-selected Table rows. When > 0, inserts the selection summary + `selectionActions` to the left of `extraActions` (which stays visible). Omit (or 0) for a normal, non-selectable list. */
  selectedCount?: number;
  /** Formats the selection summary text; defaults to "Đã chọn {n}" — override to add a domain noun, e.g. `n => \`Đã chọn ${n} vai trò\`` */
  selectedLabel?: (count: number) => string;
  /** Bulk-action buttons shown next to the selection summary (e.g. an `outline` "Xóa") while `selectedCount > 0` */
  selectionActions?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

declare const ToolbarSimple: React.FC<ToolbarSimpleProps>;
export { ToolbarSimple };
