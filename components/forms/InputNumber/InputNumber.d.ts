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
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const InputNumber: React.FC<InputNumberProps>;
export { InputNumber };
