import * as React from 'react';
/** Horizontal progress bar. */
export interface ProgressProps {
  value?: number;
  max?: number;
  color?: string;
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
}
declare const Progress: React.FC<ProgressProps>;
export { Progress };
