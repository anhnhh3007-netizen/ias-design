import * as React from 'react';

/**
 * Action button for the HCM design system.
 * Source: Figma "IDS_WEB — Internal Design System", node 4901:33217.
 * Use for form submissions, confirmations, and key actions.
 */
export interface ButtonProps {
  /** Button label. Omit together with iconLeft/iconRight (but not both) to render icon-only mode. */
  children?: React.ReactNode;
  /** Visual style — closed set of 6, matching Figma exactly; never add a 7th */
  variant?: 'primary' | 'secondary' | 'outline' | 'pill' | 'ghost' | 'textLink';
  /** Size preset — controls height (32/40/48) and type scale */
  size?: 'small' | 'medium' | 'large';
  /** Disables interaction */
  disabled?: boolean;
  /** Shows a spinner (tinted per variant) and disables; label stays visible */
  loading?: boolean;
  /** Icon node placed before label. With no children and exactly one of iconLeft/iconRight, renders icon-only */
  iconLeft?: React.ReactNode;
  /** Icon node placed after label. Not supported by the `textLink` variant per Figma spec */
  iconRight?: React.ReactNode;
  /** Hover hint shown above the button — only rendered in icon-only mode */
  tooltip?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}
declare const Button: React.FC<ButtonProps>;
export { Button };
