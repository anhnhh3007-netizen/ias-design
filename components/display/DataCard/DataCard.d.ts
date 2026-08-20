import * as React from 'react';
/** Metric / KPI stat card with icon, value and change indicator. */
export interface DataCardProps {
  label: string;
  value: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral' | 'warning';
  icon?: React.ReactNode;
  iconBg?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  style?: React.CSSProperties;
}
declare const DataCard: React.FC<DataCardProps>;
export { DataCard };
