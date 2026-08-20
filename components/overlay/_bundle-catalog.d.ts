// Components.d.ts — the complete catalog of the 8 component(s) in
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

// figma layer: "Alert" (node 31219:103627)
export interface Alert3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Edit" (node 820:27974)
export interface Edit2Props {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "popconfirm" (node 1668:46071)
export interface PopconfirmProps {
  className?: string;
  style?: React.CSSProperties;
  placement?: "right bottom" | "top right" | "left" | "left top" | "top left" | "bottom" | "bottom left" | "bottom right" | "left bottom" | "right" | "right top" | "top";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "spinning" (node 1668:45950)
export interface SpinningProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  value?: "0" | "25%" | "50%" | "75%" | "100%";
}

// figma layer: "text/text" (node 820:27978)
export interface TextTextProps {
  className?: string;
  style?: React.CSSProperties;
  hierarchy?: "primary" | "secondary" | "link";
  bullet?: boolean;
  editable?: boolean;
  copyable?: boolean;
  /** Text content; defaults to "￮". */
  text1?: string;
  /** Text content; defaults to "Principles". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Warning" (node 1169:106899)
export interface Warning2Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const Alert: React.FC<AlertProps>;
declare const Alert3: React.FC<Alert3Props>;
declare const Edit2: React.FC<Edit2Props>;
declare const IconAlert: React.FC<IconAlertProps>;
declare const Popconfirm: React.FC<PopconfirmProps>;
declare const Spinning: React.FC<SpinningProps>;
declare const TextText: React.FC<TextTextProps>;
declare const Warning2: React.FC<Warning2Props>;
declare global {
  interface Window {
    Alert: React.FC<AlertProps>;
    Alert3: React.FC<Alert3Props>;
    Edit2: React.FC<Edit2Props>;
    IconAlert: React.FC<IconAlertProps>;
    Popconfirm: React.FC<PopconfirmProps>;
    Spinning: React.FC<SpinningProps>;
    TextText: React.FC<TextTextProps>;
    Warning2: React.FC<Warning2Props>;
  }
}
