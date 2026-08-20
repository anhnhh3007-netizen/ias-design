// Components.d.ts — the complete catalog of the 4 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Avatar) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Avatar" (node 24598:411852)
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "avatar";
  state?: "thank you 3000" | "cam on nhiu" | "thich gi tui bao" | "tha tim chiu chiu" | "on gioi" | "trieu like" | "dang. cap" | "xuất sắc";
  /** Text content; defaults to "Thank you 3000!". */
  text1?: string;
}

// figma layer: "badge" (node 2384:65763)
export interface Badge5Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "badge" | "close" | "more";
  /** Text content; defaults to "Phó phòng". */
  text1?: string;
}

// figma layer: "Tab" (node 3417:90790)
export interface Tab2Props {
  className?: string;
  style?: React.CSSProperties;
  choose?: boolean;
  placement?: "left" | "right" | "center";
  /** Text content; defaults to "Chi nhánh". */
  text1?: string;
}

// figma layer: "Toogle" (node 7086:154662)
export interface ToogleProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bật" | "tắt";
  /** Text content; defaults to "Text". */
  text1?: string;
}

declare const Avatar: React.FC<AvatarProps>;
declare const Badge5: React.FC<Badge5Props>;
declare const Tab2: React.FC<Tab2Props>;
declare const Toogle: React.FC<ToogleProps>;
declare global {
  interface Window {
    Avatar: React.FC<AvatarProps>;
    Badge5: React.FC<Badge5Props>;
    Tab2: React.FC<Tab2Props>;
    Toogle: React.FC<ToogleProps>;
  }
}
