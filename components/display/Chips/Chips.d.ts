import * as React from 'react';

export type ChipVariant = 'assist' | 'filter' | 'input' | 'suggestion';
export type ChipSize = 'small' | 'medium' | 'large';

/**
 * Chips — the DS's one interactive, toggleable pill (full-pill radius, same shape as
 * `Badge`; distinct from `Tag`'s static 4px rectangle). Modeled on Material Design 3's
 * 4 chip types. Always render inside a `ChipGroup` (chips appear in a set, never alone)
 * unless the screen genuinely has just one.
 * See references/components/display/chips.md for the full state/variant/size table.
 */
export interface ChipsProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  /** Same small/medium/large naming as `Badge`'s own `size` prop. Default `'medium'`. */
  size?: ChipSize;
  /** Leading icon/avatar node. Ignored on a selected filter chip (replaced by a check mark). */
  icon?: React.ReactNode;
  /** `filter` only — the toggled "on" state: solid `--color-bg-brand` background + check mark. */
  selected?: boolean;
  /** `filter` only — fires on click with the next selected value. */
  onSelectedChange?: (next: boolean) => void;
  /** `assist` / `suggestion` only — fires when the chip body is clicked. */
  onClick?: () => void;
  /** `input` only — shows a trailing "×"; fires on click. The chip body itself isn't clickable. */
  onRemove?: () => void;
  disabled?: boolean;
  /** `assist` / `filter` / `suggestion` only — shadow instead of a border, for placement over an image/dark surface. */
  elevated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
declare const Chips: React.FC<ChipsProps>;
export { Chips };

export interface ChipGroupProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
declare const ChipGroup: React.FC<ChipGroupProps>;
export { ChipGroup };
