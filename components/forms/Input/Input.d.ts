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
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Input: React.FC<InputProps>;
export { Input };
