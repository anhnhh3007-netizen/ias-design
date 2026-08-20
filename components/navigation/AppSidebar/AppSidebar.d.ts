import * as React from 'react';

export interface SidebarItem {
  key: string;
  /** Material Symbols ligature, e.g. 'home' */
  icon?: string;
  label: string;
  children?: SidebarItem[];
}

/**
 * AppSidebar — dark navy HCM sidebar.
 * Mini (64 px) by default; expands to expandedWidth on hover.
 * Manages group open/close state internally.
 */
export interface AppSidebarProps {
  items?: SidebarItem[];
  activeKey?: string;
  onSelect?: (key: string) => void;
  /** Custom logo element; defaults to MB star SVG */
  logo?: React.ReactNode;
  /** Width in px when expanded (default 248) */
  expandedWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

export declare function AppSidebar(props: AppSidebarProps): React.ReactElement;
