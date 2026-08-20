import * as React from 'react';
/** Dropdown select field with label and validation. */
export interface SelectOption { value: string; label: string; disabled?: boolean; }
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options?: (SelectOption | string)[];
  placeholder?: string;
  disabled?: boolean;
  feedback?: string;
  feedbackType?: 'error' | 'success' | 'warning' | 'info';
  hint?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Select: React.FC<SelectProps>;
export { Select };
