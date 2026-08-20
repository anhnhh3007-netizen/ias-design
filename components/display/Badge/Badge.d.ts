import * as React from 'react';
/** Status badge / tag chip. */
export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'neutral' | 'purple';
  /** Show a colored dot before label */
  dot?: boolean;
  /** Show a close button */
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const Badge: React.FC<BadgeProps>;
export { Badge };
