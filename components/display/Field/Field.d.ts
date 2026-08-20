import * as React from 'react';

/**
 * Field — a single read-only label/value pair for a record-detail display grid
 * (e.g. "Xem chi tiết" pages, Drawer bodies). Not an input — for editable
 * fields use the Forms family (`Input`/`Select`/...) and `FilterCard`'s own
 * field styling instead.
 *
 * Field itself doesn't own the grid — place several inside any
 * `display:grid` container (2-column in `Drawer`, 3-column in
 * `templates/ias-xem-chi-tiet/XemChiTiet.dc.html`'s field-grid); `full`
 * spans the field across every column for a long value (e.g. "Mô tả").
 */
export interface FieldProps {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Spans the full grid width (`grid-column: 1 / -1`) — for a long value like a description */
  full?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare const Field: React.FC<FieldProps>;
export { Field };
