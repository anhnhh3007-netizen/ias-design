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
  /**
   * Optional (added 2026-08-27) — same S/M/L scale as `Button`/`Input`/
   * `SearchInput`/`Select`: `small` = 32px, `medium` = 40px (default,
   * unchanged), `large` = 48px. **Hard rule, not a convention**: the search
   * input and both buttons this component renders ("Tìm kiếm", "Tìm kiếm
   * nâng cao") are always the same size as each other — there is exactly one
   * `size` for the whole toolbar, not independent sizes per control. If
   * `extraActions`/`selectionActions` render their own `Button`s, pass them
   * the SAME `size` value; `ToolbarSimple` can't enforce this on your behalf
   * since those are already-rendered nodes, not props it can inject a size
   * into. See `references/components/data/toolbarsimple.md`'s "Sizes"
   * section.
   *
   * **Which size to pass follows *where* this toolbar is mounted, not free
   * choice (see that doc's "Size by location" section, added 2026-08-27)**:
   * `small` inside a `Drawer` (including a Drawer that itself hosts a list,
   * e.g. a cross-reference table's own toolbar); `medium` on the list page
   * itself or a full-page "Xem chi tiết" detail screen. When the same
   * toolbar-rendering logic serves both a Drawer and a full-page screen,
   * derive `size` from context at the call site rather than duplicating the
   * markup — see that doc's Mapping NVTT reference implementation.
   */
  size?: 'small' | 'medium' | 'large';
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
