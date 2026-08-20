import * as React from 'react';
/** Compact tag/label for categorization and filtering. */
export interface TagProps {
  children?: React.ReactNode;
  color?: 'default' | 'blue' | 'green' | 'orange' | 'red' | 'purple';
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const Tag: React.FC<TagProps>;
export { Tag };
