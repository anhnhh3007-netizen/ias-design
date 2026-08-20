import * as React from 'react';
/** Animated loading spinner. */
export interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Spinner: React.FC<SpinnerProps>;
export { Spinner };
