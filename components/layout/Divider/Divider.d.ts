import * as React from 'react';
/** Horizontal or vertical visual separator, optionally with a label. */
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  color?: string;
  spacing?: number;
  className?: string;
  style?: React.CSSProperties;
}
declare const Divider: React.FC<DividerProps>;
export { Divider };
