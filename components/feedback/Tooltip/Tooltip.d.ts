import * as React from 'react';
/** Hover tooltip wrapping any trigger element. */
export interface TooltipProps {
  children: React.ReactNode;
  content?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}
declare const Tooltip: React.FC<TooltipProps>;
export { Tooltip };
