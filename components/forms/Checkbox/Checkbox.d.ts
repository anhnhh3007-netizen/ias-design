import * as React from 'react';

/** Checkbox control with indeterminate support. */
export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Checkbox: React.FC<CheckboxProps>;
export { Checkbox };
