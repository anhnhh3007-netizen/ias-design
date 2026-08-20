import * as React from 'react';
/** On/off toggle switch. */
export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
}
declare const Toggle: React.FC<ToggleProps>;
export { Toggle };
