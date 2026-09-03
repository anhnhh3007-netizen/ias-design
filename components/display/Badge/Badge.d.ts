import * as React from 'react';
/** Status badge / tag chip. */
export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'neutral' | 'purple';
  /** Default 'large' (updated 2026-08-24, was 'medium') */
  size?: 'small' | 'medium' | 'large';
  /** Show a colored dot before label */
  dot?: boolean;
  /** Show a close button */
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const Badge: React.FC<BadgeProps>;
export { Badge };
