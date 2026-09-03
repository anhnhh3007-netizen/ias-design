import * as React from 'react';

/** Text input field with label, hint, validation states. */
export interface InputProps {
  /** Field label shown above */
  label?: string;
  /** Hint text shown below when no feedback */
  hint?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  /** Visual state override */
  state?: 'default' | 'error' | 'success' | 'warning';
  /** Helper/validation message */
  feedback?: string;
  feedbackType?: 'error' | 'success' | 'warning' | 'info';
  disabled?: boolean;
  readOnly?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /**
   * Optional (added 2026-08-27) — field height, same S/M/L scale as `Button`:
   * `small` = 32px, `medium` = 40px (default, unchanged), `large` = 48px.
   * Horizontal padding stays constant across sizes — only height and font-size
   * scale, matching `Button`'s own convention. See form-fields.md's "Sizes"
   * section — this scale is shared across `Input`/`InputNumber`/`SearchInput`/
   * `Select`.
   */
  size?: 'small' | 'medium' | 'large';
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Input: React.FC<InputProps>;
export { Input };
