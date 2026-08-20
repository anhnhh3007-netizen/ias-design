import * as React from 'react';
/** Multi-step progress indicator for forms and wizards. */
export interface StepItem { title: string; description?: string; }
export interface StepsProps {
  steps: StepItem[];
  /** Zero-based index of the active step */
  current?: number;
  className?: string;
  style?: React.CSSProperties;
}
declare const Steps: React.FC<StepsProps>;
export { Steps };
