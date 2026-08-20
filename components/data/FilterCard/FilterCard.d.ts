import * as React from 'react';

export interface FilterFieldOption {
  value: string;
  label: string;
}

/** One field rendered inside the fixed 4-column filter grid. */
export interface FilterFieldConfig {
  key: string;
  label: string;
  type?: 'text' | 'select' | 'date' | 'number';
  placeholder?: string;
  /** Shows a red `*` immediately after the label */
  required?: boolean;
  /** Only used when type === 'select' */
  options?: (FilterFieldOption | string)[];
}

/**
 * FilterCard — fixed-layout filter bar for list/table screens.
 * Grid is always `repeat(4, 1fr)`; passing more than 4 fields wraps
 * onto additional rows of 4, it never changes column count.
 * The action row is always present, right-aligned, one continuous
 * button cluster (no divider): optional Reset ("Xóa bộ lọc") → primary
 * "Tìm kiếm" (Search always comes right after Reset, or leads the
 * cluster if there's no Reset — it is NOT required to be rightmost)
 * → any trailing utility actions (Export, column/settings config, etc.).
 */
export interface FilterCardProps {
  fields: FilterFieldConfig[];
  values?: Record<string, string | number | undefined>;
  onFieldChange?: (key: string, value: string) => void;
  onSearch?: () => void;
  /** Shows a loading spinner on the Search button and disables it */
  loading?: boolean;
  /** Overrides the default "Tìm kiếm" label */
  searchLabel?: string;
  /** Shows a "Xóa bộ lọc" reset button leading the action cluster, before Search */
  onReset?: () => void;
  /** Overrides the default "Xóa bộ lọc" label */
  resetLabel?: string;
  /** Trailing utility buttons rendered after Search (e.g. Export, settings) */
  extraActions?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

declare const FilterCard: React.FC<FilterCardProps>;
export { FilterCard };
