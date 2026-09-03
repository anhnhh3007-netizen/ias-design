import * as React from 'react';
/** Search input with icon, submit on Enter, and focus styles. */
export interface SearchInputProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  width?: number | string;
  /**
   * Optional (added 2026-08-27) — field height, same S/M/L scale as `Button`/
   * `Input`/`InputNumber`/`Select`: `small` = 32px, `medium` = 40px (default),
   * `large` = 48px. Revises the field's own previous fixed 36px height, which
   * didn't match any other form field's size — `medium` now aligns with the
   * rest of the form-field family. See `Input.d.ts`'s own `size` doc and
   * form-fields.md's "Sizes" section.
   */
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
}
declare const SearchInput: React.FC<SearchInputProps>;
export { SearchInput };
