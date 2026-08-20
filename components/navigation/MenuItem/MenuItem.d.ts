import * as React from 'react';

/**
 * MenuItem — three variants for the HCM navigation system.
 */
export interface MenuItemProps {
  /** Rendering variant */
  variant?: 'nav' | 'tree' | 'action';
  /** Text label */
  label?: string;
  /** Material Symbols Outlined ligature name, e.g. 'home', 'search' */
  icon?: string;
  /** Active / selected state */
  active?: boolean;
  /** tree: whether node is currently expanded */
  expanded?: boolean;
  /** tree: leaf node — shows bullet, no toggle */
  leaf?: boolean;
  /** tree: indentation depth (0 = top level) */
  depth?: number;
  /** action: disabled state */
  disabled?: boolean;
  /** action: danger / destructive styling */
  danger?: boolean;
  /** action: show chevron arrow on right */
  arrow?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export declare function MenuItem(props: MenuItemProps): React.ReactElement;
