import * as React from 'react';

/**
 * Canonical action keys — determine both the default Vietnamese label and the sort
 * position (see the `CANONICAL_ORDER` in RowMenu.jsx / references/components/data/rowmenu.md).
 * Any other string is treated as a screen-specific action: sorted after every canonical
 * key (in the order given) and before `danger` items, using `label` for its text.
 */
export type RowMenuActionKey = 'view' | 'edit' | 'submit' | 'history' | 'delete' | string;

export interface RowMenuAction {
  /** Canonical key for auto-ordering + default label, or a free-form key for a screen-specific action (must set `label` in that case) */
  key: RowMenuActionKey;
  /** Overrides the canonical label — optional for the 5 canonical keys, required for any other key */
  label?: string;
  /** Destructive/red item — always sorted last, regardless of `key`'s canonical position. No `sep` divider before it (updated 2026-08-18: RowMenu never renders a separator, unlike the generic `Dropdown`/`DropdownMenuItem` cross-cutting rule) — the red text color alone marks it as destructive */
  danger?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

/**
 * RowMenu — Table's row-level `more_vert` overflow menu
 * (references/components/data/table.md, "Row-level actions").
 *
 * A thin, opinionated wrapper over the generic Dropdown/DropdownMenuItem pattern for
 * exactly this one job:
 * - **Never shows icons.** Text-only labels — unlike `DropdownMenuItem`'s optional
 *   `icon` prop, RowMenu has no icon slot at all.
 * - **Auto-sorts** whatever subset of `actions` the screen passes into the canonical
 *   order (Xem chi tiết → Chỉnh sửa → Gửi duyệt → Lịch sử thay đổi → Xóa) — the caller
 *   never has to pre-sort, and never has to supply the full canonical set. A status
 *   that only allows 2 of the 5 actions just passes those 2.
 *
 * Positioned `fixed` from `triggerRef`'s own rect, the same technique `ColumnPicker`
 * uses (see that component's own doc) — needed because a table's trailing action
 * column often sits inside a horizontally-scrolling wrapper that would otherwise clip
 * an absolutely-positioned panel instead of letting it overlay the table below.
 */
export interface RowMenuProps {
  /** Controls panel visibility */
  open: boolean;
  /** Ref to the row's `more_vert` icon-button — its `getBoundingClientRect()` positions the panel */
  triggerRef: React.RefObject<HTMLElement>;
  /** Whichever actions apply to this row/status right now — RowMenu sorts them itself */
  actions: RowMenuAction[];
  /** Closes the panel — wired to selecting any item or an outside click */
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
}

declare const RowMenu: React.FC<RowMenuProps>;
export { RowMenu };
