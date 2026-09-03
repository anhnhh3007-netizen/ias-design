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
  /**
   * Optional (added 2026-08-27) — field height, same S/M/L scale as `Button`/
   * `Input`/`InputNumber`/`SearchInput`: `small` = 32px, `medium` = 40px
   * (default, unchanged), `large` = 48px. See `Input.d.ts`'s own `size` doc
   * and form-fields.md's "Sizes" section — this scale is shared across the
   * whole form-field family.
   */
  size?: 'small' | 'medium' | 'large';
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Select: React.FC<SelectProps>;
export { Select };
