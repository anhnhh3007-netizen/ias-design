import * as React from 'react';
/** Surface card with optional header, body and footer. */
export interface CardProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: string;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  style?: React.CSSProperties;
}
declare const Card: React.FC<CardProps>;
export { Card };
