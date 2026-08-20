import * as React from 'react';
/** Radio button for single-select groups. */
export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Radio: React.FC<RadioProps>;
export { Radio };
