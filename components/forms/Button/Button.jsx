import React from 'react';

/*
 * Every color below resolves to a declared var(--color-*) from tokens/colors.css
 * (color-rules.md, "new/updated components must use tokens/colors.css" — 2026-07-23),
 * matched against the Figma "IDS_WEB Internal Design System" hex (node 4901:33217).
 * Semantic Alias used where it fits; raw palette scale used where it matches closer
 * (allowed for components, unlike bespoke Swap Zone elements) — see the Color Token
 * Coverage report for the exact hex → token similarity% of every non-exact row.
 */
const variants = {
  primary: {
    radius: 8,
    background: 'var(--color-bg-brand)', color: 'var(--color-text-inverse)', border: 'none',
    hoverBackground: 'var(--color-primary-700)', hoverColor: 'var(--color-text-inverse)',
    disabledBackground: 'var(--color-neutral-200)', disabledColor: 'var(--color-text-secondary)', disabledBorder: 'none',
    loadingBackground: 'var(--color-primary-200)', loadingColor: 'var(--color-text-primary)', loadingBorder: 'none',
  },
  secondary: {
    radius: 8,
    background: 'var(--color-bg-hover)', color: 'var(--color-text-primary)', border: 'none',
    hoverBackground: 'var(--color-primary-200)', hoverColor: 'var(--color-text-primary)',
    disabledBackground: 'var(--color-neutral-200)', disabledColor: 'var(--color-text-secondary)', disabledBorder: 'none',
    loadingBackground: 'var(--color-primary-100)', loadingColor: 'var(--color-primary-300)', loadingBorder: 'none',
  },
  outline: {
    radius: 8,
    background: 'transparent', color: 'var(--color-text-primary)', border: '1px solid var(--color-primary-200)',
    hoverBackground: 'transparent', hoverColor: 'var(--color-text-primary)', hoverBorder: '1px solid var(--color-border-focus)',
    disabledBackground: 'transparent', disabledColor: 'var(--color-text-secondary)', disabledBorder: '1px solid var(--color-neutral-500)',
    loadingBackground: 'var(--color-primary-100)', loadingColor: 'var(--color-primary-300)', loadingBorder: '1px solid var(--color-primary-200)',
  },
  pill: {
    radius: 9999,
    background: 'transparent', color: 'var(--color-text-primary)', border: '1px solid var(--color-primary-200)',
    hoverBackground: 'transparent', hoverColor: 'var(--color-text-primary)', hoverBorder: '1px solid var(--color-border-focus)',
    disabledBackground: 'transparent', disabledColor: 'var(--color-text-secondary)', disabledBorder: '1px solid var(--color-neutral-500)',
    loadingBackground: 'var(--color-primary-100)', loadingColor: 'var(--color-primary-300)', loadingBorder: '1px solid var(--color-primary-200)',
  },
  ghost: {
    radius: 9999,
    background: 'transparent', color: 'var(--color-text-primary)', border: 'none',
    hoverBackground: 'var(--color-bg-hover)', hoverColor: 'var(--color-text-primary)', iconHoverColor: 'var(--color-icon-brand)',
    disabledBackground: 'transparent', disabledColor: 'var(--color-text-secondary)', disabledBorder: 'none',
    loadingBackground: 'var(--color-primary-100)', loadingColor: 'var(--color-primary-300)', loadingBorder: 'none',
  },
  textLink: {
    radius: 9999, weight: 'regular', gap: 2,
    background: 'transparent', color: 'var(--color-text-primary)', border: 'none',
    hoverBackground: 'transparent', hoverColor: 'var(--color-text-primary)', hoverUnderline: true,
    disabledBackground: 'transparent', disabledColor: 'var(--color-text-secondary)', disabledBorder: 'none',
    loadingBackground: 'transparent', loadingColor: 'var(--color-primary-300)', loadingBorder: 'none',
  },
};
// Closed set — do not add a 7th variant (e.g. danger/success) on your own.
// component-rules.md: map anything outside this set onto the nearest of these six.

// Height / font scale — source: Figma Size=Large/Medium/Small (node 4901:33217)
const sizes = {
  small:  { height: 32, fontSize: 14, lineHeight: '21px', letterSpacing: '0.28px', iconBox: 32 },
  medium: { height: 40, fontSize: 14, lineHeight: '21px', letterSpacing: '0.28px', iconBox: 40 },
  large:  { height: 48, fontSize: 16, lineHeight: '24px', letterSpacing: '0.32px', iconBox: 48 },
};

function Spinner({ size, color }) {
  // Two layered rings (base at 25% opacity + spinning top segment) instead of
  // string-concatenating an alpha suffix onto `color` — color is now a
  // var(--color-*) reference, not a hex literal, so `${color}33` would break.
  return (
    <span style={{ position: 'relative', width: size, height: size, display: 'inline-block', flexShrink: 0 }}>
      <span style={{ position: 'absolute', inset: 0, border: `2px solid ${color}`, borderRadius: '50%', opacity: 0.25 }} />
      <span style={{ position: 'absolute', inset: 0, border: '2px solid transparent', borderTopColor: color, borderRadius: '50%', animation: 'hcm-spin 0.7s linear infinite' }} />
    </span>
  );
}

export function Button({
  children, variant = 'primary', size = 'medium',
  disabled = false, loading = false,
  iconLeft, iconRight, tooltip,
  onClick, type = 'button',
  className = '', style = {}, ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.medium;
  const iconOnly = !children && !!(iconLeft || iconRight) && !(iconLeft && iconRight);
  const gap = v.gap || 8;
  const fontWeight = v.weight === 'regular' ? 'var(--font-weight-regular, 400)' : 'var(--font-weight-semibold, 600)';

  const isDisabled = disabled || loading;
  const bg = loading ? v.loadingBackground : isDisabled ? v.disabledBackground : (hovered ? v.hoverBackground : v.background);
  const color = loading ? v.loadingColor : isDisabled ? v.disabledColor : (hovered ? (v.hoverColor || v.color) : v.color);
  const border = loading ? (v.loadingBorder || v.border) : isDisabled ? (v.disabledBorder || v.border) : (hovered ? (v.hoverBorder || v.border) : v.border);
  const iconColor = !isDisabled && hovered && v.iconHoverColor ? v.iconHoverColor : color;
  const underline = !isDisabled && hovered && v.hoverUnderline;

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      <button
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={className}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          gap, borderRadius: v.radius,
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          fontWeight, cursor: isDisabled ? 'not-allowed' : 'pointer',
          transition: 'background 0.15s, border-color 0.15s, color 0.15s',
          whiteSpace: 'nowrap',
          fontSize: s.fontSize, lineHeight: s.lineHeight, letterSpacing: s.letterSpacing,
          boxSizing: 'border-box',
          background: bg, color, border,
          textDecoration: underline ? 'underline' : 'none',
          ...(iconOnly
            ? { width: s.iconBox, height: s.iconBox, padding: 0 }
            : { height: s.height, padding: '0 var(--space-button-px, 16px)' }),
          ...style,
        }}
        {...rest}
      >
        {loading && <Spinner size={16} color={color} />}
        {!loading && iconLeft && <span style={{ color: iconColor, display: 'inline-flex', width: 20, height: 20 }}>{iconLeft}</span>}
        {children}
        {!loading && iconRight && <span style={{ color: iconColor, display: 'inline-flex', width: 20, height: 20 }}>{iconRight}</span>}
      </button>
      {iconOnly && tooltip && hovered && !isDisabled && (
        <span style={{
          position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)',
          marginBottom: 6, padding: '6px 8px', borderRadius: 4,
          // rgba(255,255,255,0.9) kept literal — a translucency effect, not a solid
          // color choice, same precedent as --color-bg-overlay's own literal rgba.
          background: 'rgba(255,255,255,0.9)', color: 'var(--color-text-primary)',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          fontWeight: 'var(--font-weight-regular, 400)', fontSize: 14, lineHeight: '20px',
          whiteSpace: 'nowrap', boxShadow: 'var(--shadow-sm, 0px 2px 4px rgba(75,99,226,0.08))', zIndex: 10,
          pointerEvents: 'none',
        }}>
          {tooltip}
        </span>
      )}
    </span>
  );
}
