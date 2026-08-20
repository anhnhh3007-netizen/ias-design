import * as React from 'react';
/** Horizontal tab bar with optional badge counts. */
export interface TabItem { label: string; badge?: number | string; }
export interface TabsProps {
  items: TabItem[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const Tabs: React.FC<TabsProps>;
export { Tabs };
