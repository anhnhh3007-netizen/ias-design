// Components.d.ts — the complete catalog of the 5 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Button) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button" (node 4589:101303)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "excel";
  property2?: "only icon";
}

// figma layer: "Checkbox" (node 1495:46363)
export interface Checkbox3Props {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  status?: "active" | "inactive" | "indeterminate";
  state?: "default" | "hover" | "focused" | "disabled";
  /** Text content; defaults to "Checkbox". */
  text1?: string;
}

// figma layer: "Close" (node 1169:106917)
export interface Close5Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Input Field" (node 30478:542578)
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Radios_1" (node 1629:45873)
export interface Radios1Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "checkbox" | "default radio" | "group 1";
  property2?: "radio button";
  property3?: "enabled selected" | "enabled unselected" | "disabled unselected" | "disabled selected";
  /** Text content; defaults to "Default checked radio". */
  text1?: string;
}

declare const Button: React.FC<ButtonProps>;
declare const Checkbox3: React.FC<Checkbox3Props>;
declare const Close5: React.FC<Close5Props>;
declare const InputField: React.FC<InputFieldProps>;
declare const Radios1: React.FC<Radios1Props>;
declare global {
  interface Window {
    Button: React.FC<ButtonProps>;
    Checkbox3: React.FC<Checkbox3Props>;
    Close5: React.FC<Close5Props>;
    InputField: React.FC<InputFieldProps>;
    Radios1: React.FC<Radios1Props>;
  }
}
