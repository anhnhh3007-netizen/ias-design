import * as React from 'react';
/** Centered dialog modal with header, body and optional footer. */
export interface ModalProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer slot — typically action buttons */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Modal: React.FC<ModalProps>;
export { Modal };
