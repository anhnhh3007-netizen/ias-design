import * as React from 'react';
/** Numeric input field with min/max/step constraints. */
export interface InputNumberProps {
  label?: string;
  value?: number | '';
  onChange?: (value: number | '', event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  feedback?: string;
  feedbackType?: 'error' | 'success';
  hint?: string;
  /**
   * Optional (added 2026-08-27) — field height, same S/M/L scale as `Button`/
   * `Input`: `small` = 32px, `medium` = 40px (default, unchanged), `large` =
   * 48px. See `Input.d.ts`'s own `size` doc and form-fields.md's "Sizes"
   * section — this scale is shared across the whole form-field family.
   */
  size?: 'small' | 'medium' | 'large';
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const InputNumber: React.FC<InputNumberProps>;
export { InputNumber };
