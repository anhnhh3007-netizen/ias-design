import * as React from 'react';
/** Toast-style notification banner with auto-dismiss support. */
export interface NotificationProps {
  title?: string;
  description?: string;
  status?: 'success' | 'warning' | 'error' | 'info';
  onClose?: () => void;
  /** Auto-dismiss after N ms */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}
declare const Notification: React.FC<NotificationProps>;
export { Notification };
