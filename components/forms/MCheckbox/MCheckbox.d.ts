import * as React from 'react';
/**
 * Material checkbox — maps to Figma `[M]Checkbox`.
 * Matches the Figma variant axes: Checked, Indeterminate, Disable, Hovering.
 */
export interface MCheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disable?: boolean;
  hovering?: boolean;
  text1?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
}
declare const MCheckbox: React.FC<MCheckboxProps>;
export { MCheckbox };
