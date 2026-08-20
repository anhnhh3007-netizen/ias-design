// Components.d.ts — the complete catalog of the 9 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Alert) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Alert" (node 4530:106321)
export interface AlertProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "success" | "warning" | "informational" | "error" | "infomation";
  info?: boolean;
  /** Text content; defaults to "Phê duyệt thành công". */
  text1?: string;
  /** Text content; defaults to "Detailed description and advice about successful copywriting.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Check" (node 820:30334)
export interface Check3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "checkbox" (node 842:30226)
export interface Checkbox2Props {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  disable?: boolean;
  hovering?: boolean;
  label?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
}

// figma layer: "_components/dropdown/menu-item" (node 842:30288)
export interface ComponentsDropdownMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: boolean;
  arrow?: boolean;
  hover?: boolean;
  selected?: boolean;
  danger?: boolean;
  disabled?: boolean;
  checkable?: boolean;
  checked?: boolean;
  multiSelect?: boolean;
  /** Text content; defaults to "menu item". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "icon alert" (node 1630:45833)
export interface IconAlertProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "checkbox" | "success_icon" | "informational_icon" | "error_icon" | "warning_icon" | "warning_small" | "error_small" | "success_small" | "informational_small";
  property2?: "radio button";
  property3?: "enabled selected" | "error" | "warning" | "informational";
  /** Text content; defaults to "Default success". */
  text1?: string;
  /** Text content; defaults to "Informational Notes". */
  text2?: string;
}

// figma layer: "[M]Checkbox" (node 37144:1925)
export interface MCheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  disable?: boolean;
  hovering?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
}

// figma layer: "Right" (node 842:30153)
export interface Right2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "User" (node 842:30285)
export interface User2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Warning" (node 1169:106899)
export interface Warning2Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const Alert: React.FC<AlertProps>;
declare const Check3: React.FC<Check3Props>;
declare const Checkbox2: React.FC<Checkbox2Props>;
declare const ComponentsDropdownMenuItem: React.FC<ComponentsDropdownMenuItemProps>;
declare const IconAlert: React.FC<IconAlertProps>;
declare const MCheckbox: React.FC<MCheckboxProps>;
declare const Right2: React.FC<Right2Props>;
declare const User2: React.FC<User2Props>;
declare const Warning2: React.FC<Warning2Props>;
declare global {
  interface Window {
    Alert: React.FC<AlertProps>;
    Check3: React.FC<Check3Props>;
    Checkbox2: React.FC<Checkbox2Props>;
    ComponentsDropdownMenuItem: React.FC<ComponentsDropdownMenuItemProps>;
    IconAlert: React.FC<IconAlertProps>;
    MCheckbox: React.FC<MCheckboxProps>;
    Right2: React.FC<Right2Props>;
    User2: React.FC<User2Props>;
    Warning2: React.FC<Warning2Props>;
  }
}
