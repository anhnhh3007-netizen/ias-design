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
  /**
   * Optional status `Badge`, rendered immediately right of `title` in the same
   * header row (added 2026-08-24, mirrors `PageHeader`'s own `badge` prop — see
   * references/components/layout/pageheader.md). Same placement rule as that
   * prop: pairs with a single-record detail view, e.g. `mapOpenDrawer`'s
   * status badge next to the mapping code in `can-cu-xu-phat-ias-redesign.html`.
   * Use `Badge`'s default `size="large"` here, same as `PageHeader` — see
   * references/components/display/badge-tag.md's "Size by placement" section.
   */
  badge?: React.ReactNode;
  /**
   * A single-section body (just a 2-column `Field` grid of read-only record
   * fields) renders with no title, directly. The moment a second section is
   * added — a related/cross-reference table below the fields, or a second
   * field-group — every section needs its own title, the first field-grid
   * included (no title-less section next to a titled one). See the
   * "Multi-section title rule" in references/components/overlay/drawer.md:
   * one uniform title style for every section, table sections must use the
   * real `Table` component (never bespoke `<table>` markup), and title text
   * for a field-grid section follows `DCard`'s own inference rule
   * ("Thông tin " + entity name).
   */
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
