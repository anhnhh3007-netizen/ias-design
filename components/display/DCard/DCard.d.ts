import * as React from 'react';

/**
 * DCard — a header+body detail card. Formalizes the `.d-card` / `.d-card-header` /
 * `.d-card-body` pattern already used on "Xem chi tiết" pages (reference:
 * templates/ias-xem-chi-tiet/XemChiTiet.dc.html).
 *
 * Unlike `Card` — whose title/footer are optional — DCard's header is **mandatory**:
 * it always renders `title` inside `d-card-header`, and `children` always renders
 * inside `d-card-body`. There is no title-less or body-less variant.
 *
 * `d-card-body` is a flexible content slot, not a fixed layout — see
 * references/components/display/dcard.md for the two sanctioned content shapes:
 * a 3-column `Field` grid (the default for read-only record data), or a `Table`
 * (never bespoke `<table>` markup) for tabular content.
 */
export interface DCardProps {
  /**
   * Rendered in `d-card-header` — required, DCard has no title-less variant.
   * If the source content (wireframe/data model) doesn't spell out a caption,
   * infer one rather than leaving this blank — see the "title has no empty
   * state" rule in references/components/display/dcard.md ("Thông tin " +
   * entity name for a record's own fields, the entity name alone + a count
   * `Badge` for a related list, or a generic "Thông tin chi tiết" as last resort).
   */
  title: React.ReactNode;
  /** Optional element next to `title` in the header (e.g. a count `Badge`) */
  headerExtra?: React.ReactNode;
  /**
   * Initial open state. Every `DCard` is collapsible — the `d-card-header`
   * always renders the `expand_less`/`expand_more` chevron toggle button and
   * the whole header row is clickable; there is no non-collapsible variant
   * (see the "Chevron toggle is mandatory" rule in
   * references/components/display/dcard.md).
   */
  defaultOpen?: boolean;
  /**
   * `d-card-body` content. Default shape is a 3-column `Field` grid
   * (`grid-template-columns:repeat(3,1fr)`, `full` spans a field across all 3);
   * for tabular content, pass the real `Table` component instead — see
   * references/components/data/table.md.
   */
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
declare const DCard: React.FC<DCardProps>;
export { DCard };
