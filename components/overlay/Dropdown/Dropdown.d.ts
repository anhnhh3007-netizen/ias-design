import * as React from 'react';
/** Click-triggered dropdown menu. */
export interface DropdownItem {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
  divider?: boolean;
}
export interface DropdownProps {
  trigger: React.ReactNode;
  items?: DropdownItem[];
  placement?: 'bottom-left' | 'bottom-right';
  className?: string;
  style?: React.CSSProperties;
}
declare const Dropdown: React.FC<DropdownProps>;
export { Dropdown };
