import * as React from 'react';
/** Inline alert banner for success, warning, error or info messages. */
export interface AlertProps {
  status?: 'success' | 'warning' | 'error' | 'informational' | 'info';
  title?: string;
  description?: string;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const Alert: React.FC<AlertProps>;
export { Alert };
