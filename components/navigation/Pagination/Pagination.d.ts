import * as React from 'react';
/** Page-number pagination control. */
export interface PaginationProps {
  /** Total record count */
  total: number;
  /** Current page (1-based) */
  page?: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const Pagination: React.FC<PaginationProps>;
export { Pagination };
