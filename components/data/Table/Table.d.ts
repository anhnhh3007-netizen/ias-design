import * as React from 'react';
/** Data table with configurable columns and row interactions. */
export interface TableColumn<T = any> {
  key?: string;
  title: string;
  dataIndex?: keyof T;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: number | string;
}
export interface TableRowSelection<T = any> {
  /** Currently selected row keys (controlled) */
  selectedRowKeys: (string | number)[];
  /** Called with the new selected keys + their full rows whenever selection changes (select one, select all, clear) */
  onChange: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void;
  /** Per-row override, e.g. to disable selecting a specific row */
  getCheckboxProps?: (row: T) => { disabled?: boolean };
}
export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey?: keyof T;
  onRowClick?: (row: T) => void;
  /** Adds a leading checkbox column (header = select-all/indeterminate, one per row) — omit for a non-selectable table. Pair with ToolbarSimple's `selectedCount`/`selectionActions` to surface a bulk-action bar. */
  rowSelection?: TableRowSelection<T>;
  loading?: boolean;
  emptyText?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare function Table<T = any>(props: TableProps<T>): React.ReactElement;
export { Table };
