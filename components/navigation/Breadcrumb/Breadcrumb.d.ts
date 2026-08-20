import * as React from 'react';
/** Navigation breadcrumb trail. */
export interface BreadcrumbItem { label: string; href?: string; onClick?: () => void; }
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export { Breadcrumb };
