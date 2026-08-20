import * as React from 'react';
/** Inline confirmation popover triggered on click. */
export interface PopconfirmProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  placement?: 'top' | 'bottom';
  className?: string;
  style?: React.CSSProperties;
}
declare const Popconfirm: React.FC<PopconfirmProps>;
export { Popconfirm };
