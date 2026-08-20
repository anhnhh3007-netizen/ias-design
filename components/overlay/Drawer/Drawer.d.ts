import * as React from 'react';

/**
 * Drawer — right-side sliding panel for viewing a single record's full
 * detail without leaving the list screen (opened from a `Table` row, see
 * the row-trigger convention in references/component-rules.md's Table
 * section: a `keyboard_double_arrow_right` icon button placed near the
 * front of the row, right after the primary mã/identity column — a third
 * row-action option alongside the text-link and `more_vert` overflow).
 *
 * Slides in from the right (`translateX`), backdrop fades in behind it —
 * same dim overlay treatment as `Modal`, but anchored to the right edge
 * and full-height instead of centered. Body is conventionally a 2-column
 * grid of `Field` (components/display/Field/) for read-only record fields —
 * see `drawer.card.html`.
 */
export interface DrawerProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer slot — typically a single "Đóng" button, or up to 2 following the secondary-left/primary-right order rule */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Shows a fullscreen/expand icon button next to close, for a "mở rộng" affordance */
  onExpand?: () => void;
  /** Default `'50vw'` (half the viewport width), floored at 480px via `minWidth` on narrow screens, capped at `95vw` */
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

declare const Drawer: React.FC<DrawerProps>;
export { Drawer };
