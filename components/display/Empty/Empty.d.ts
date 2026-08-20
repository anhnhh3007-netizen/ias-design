import * as React from 'react';
/** Empty state placeholder for lists and tables with no data. */
export interface EmptyProps {
  title?: string;
  description?: string;
  /** Action button or link */
  action?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
declare const Empty: React.FC<EmptyProps>;
export { Empty };
