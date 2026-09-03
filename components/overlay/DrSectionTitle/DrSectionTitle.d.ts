import * as React from 'react';

/**
 * DrSectionTitle — the section heading used inside `Drawer`'s body once it
 * has 2+ sections (see the "Multi-section title rule" in
 * references/components/overlay/drawer.md). Bold title text over a short
 * brand-colored accent bar, with an optional dot-less count `Badge`.
 */
export interface DrSectionTitleProps {
  /** Title text, e.g. "Nội dung tiêu chí" — Subtitle 1 scale (16px/600) */
  children: React.ReactNode;
  /**
   * Optional count/label `Badge` shown inline after the title (e.g. "3 đơn vị").
   * Never required — omit for a section that doesn't need a count. When present,
   * it must be the dot-less `Badge` shape (`dot` false/omitted, Badge's own
   * default) — this is a count chip, not a status indicator.
   */
  badge?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
declare const DrSectionTitle: React.FC<DrSectionTitleProps>;
export { DrSectionTitle };
