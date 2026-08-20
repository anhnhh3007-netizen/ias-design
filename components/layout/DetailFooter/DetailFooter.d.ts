import * as React from 'react';

/**
 * DetailFooter — the closing action bar at the bottom of a full-page detail
 * screen (e.g. "Xem chi tiết"), below the content cards. A thin top divider
 * separates it from the content above; it is not sticky/fixed by default.
 *
 * Reference implementation: `templates/ias-xem-chi-tiet/XemChiTiet.dc.html`.
 */
export interface DetailFooterProps {
  /** Button(s) — a single `outline` "Đóng" for a read-only detail page, or a full button set following the cross-cutting secondary-left/primary-right order rule when a real save/submit action exists */
  children: React.ReactNode;
  /** 'center' (default) — a lone "Đóng" button, nothing else to balance against. 'right' — once there's a real action set, following the standard footer button-order rule instead of centering it. */
  align?: 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

declare const DetailFooter: React.FC<DetailFooterProps>;
export { DetailFooter };
