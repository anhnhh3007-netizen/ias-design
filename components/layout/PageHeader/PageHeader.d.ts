import * as React from 'react';
/** Page-level header with breadcrumb, title and action slot. */
export interface BreadcrumbItem { label: string; href?: string; onClick?: () => void; }
export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  actions?: React.ReactNode;
  /** Shows a back-arrow button immediately left of the title — for detail/drill-in pages reached from a list or a Drawer's expand action (e.g. "Xem chi tiết"). Omit for top-level list/module screens, which have no "back" to go to. */
  onBack?: () => void;
  /** Status indicator rendered immediately right of the title, same row (e.g. a `Badge` — "Đã phê duyệt"). Pairs with `onBack` on detail/drill-in pages that show one record's workflow status; omit on list/module screens with no single-record status to show. */
  badge?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
declare const PageHeader: React.FC<PageHeaderProps>;
export { PageHeader };
