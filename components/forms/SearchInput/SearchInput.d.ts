import * as React from 'react';
/** Search input with icon, submit on Enter, and focus styles. */
export interface SearchInputProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}
declare const SearchInput: React.FC<SearchInputProps>;
export { SearchInput };
