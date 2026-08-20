import * as React from 'react';
/** Top application header with search, notifications and user avatar. */
export interface AppHeaderProps {
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  notificationCount?: number;
  onNotification?: () => void;
  /** User name string (initials extracted) or ReactNode */
  user?: React.ReactNode;
  logo?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
declare const AppHeader: React.FC<AppHeaderProps>;
export { AppHeader };
