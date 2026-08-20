// Components.d.ts — the complete catalog of the 2 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Elements) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Elements" (node 2136:52884)
export interface ElementsProps {
  className?: string;
  style?: React.CSSProperties;
  element?: "element 1" | "element 2" | "element 3" | "element 4";
}

// figma layer: "Margins -Spacing" (node 2340:89615)
export interface MarginsSpacingProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Elements: React.FC<ElementsProps>;
declare const MarginsSpacing: React.FC<MarginsSpacingProps>;
declare global {
  interface Window {
    Elements: React.FC<ElementsProps>;
    MarginsSpacing: React.FC<MarginsSpacingProps>;
  }
}
