import * as React from 'react';
/** Circular avatar with image or initials fallback. */
export interface AvatarProps {
  /** Full name — initials are extracted from last 2 words */
  name?: string;
  /** Image URL — takes priority over initials */
  src?: string;
  /** Diameter in px */
  size?: number;
  /** Override background color */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare const Avatar: React.FC<AvatarProps>;
export { Avatar };
