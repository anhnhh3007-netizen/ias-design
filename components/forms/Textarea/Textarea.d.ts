import * as React from 'react';
/** Multi-line text area with label and validation states. */
export interface TextareaProps {
  label?: string;
  hint?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  feedback?: string;
  feedbackType?: 'error' | 'success' | 'warning' | 'info';
  state?: 'default' | 'error' | 'success' | 'warning';
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Textarea: React.FC<TextareaProps>;
export { Textarea };
