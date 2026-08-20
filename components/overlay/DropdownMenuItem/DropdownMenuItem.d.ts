import * as React from 'react';
/**
 * Dropdown menu item — maps to Figma `_components/dropdown/menu-item`.
 * Use inside Dropdown or any context menu.
 */
export interface DropdownMenuItemProps {
  label?: string;
  icon?: React.ReactNode;
  arrow?: boolean;
  hover?: boolean;
  selected?: boolean;
  danger?: boolean;
  disabled?: boolean;
  checkable?: boolean;
  checked?: boolean;
  multiSelect?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const DropdownMenuItem: React.FC<DropdownMenuItemProps>;
export { DropdownMenuItem };
