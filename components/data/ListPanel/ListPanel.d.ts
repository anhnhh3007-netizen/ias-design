import * as React from 'react';

/**
 * ListPanel — the structural container for one "danh sách" (list/table) view.
 * Fixed vertical order, flex column with a 16px gap, inside its own card
 * surface (white bg + 1px border + 12px radius + 16px padding, matching
 * `templates/ias-danh-sach-chuong-trinh/DanhSachChuongTrinh.dc.html`):
 * `toolbar` slot (a `ToolbarSimple` ⇄ `FilterCard` pair — caller renders
 * exactly one at a time, ListPanel does not manage that toggle) → `table`
 * slot (a `Table`, which renders its own shadowed card *inside* this one —
 * a deliberate card-in-card look) → `pagination` slot (the full
 * `.pagination-bar` row: result count + `Pagination` + rows-per-page select +
 * page-jump input — `Pagination` itself has no count/jump props, so the
 * caller composes that row and passes it in whole).
 *
 * A screen with multiple lists (e.g. tabs, each backed by its own table)
 * renders one `ListPanel` per list, each with its own `id`.
 */
export interface ListPanelProps {
  /** DOM id, required — follow `ias-{domain}-list-panel` (e.g. `ias-nvttpl-list-panel`) */
  id: string;
  /** The ToolbarSimple ⇄ FilterCard swap slot — render exactly one at a time */
  toolbar: React.ReactNode;
  /** The Table for this list (renders its own card surface) */
  table: React.ReactNode;
  /** The full pagination-bar row: count + Pagination + page-size + page-jump */
  pagination: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

declare const ListPanel: React.FC<ListPanelProps>;
export { ListPanel };
