import React from 'react';

/* Colors reference tokens/colors.css per color-rules.md's 2026-07-23 rule ("new or updated
   components must reference tokens/colors.css, never a hardcoded hex") — Semantic Alias where
   one exists for the category, else the nearest raw palette scale token (still declared in
   colors.css, just not one of the ~40 alias rows). Fallback literals after the comma keep this
   usable in a portable artifact that hasn't copied the token block into its own :root. */
const variantStyles = {
  default:  { background: 'var(--color-primary-100, #E8EAF6)', color: 'var(--color-text-brand, #141ED2)' },
  success:  { background: 'var(--color-bg-success, #F2FFFB)', color: 'var(--color-text-success, #00966D)' },
  warning:  { background: 'var(--color-bg-warning, #FFF9EF)', color: 'var(--color-text-warning, #946200)' },
  error:    { background: 'var(--color-bg-error, #FFF3F8)', color: 'var(--color-text-error, #C30052)' },
  neutral:  { background: 'var(--color-neutral-100, #F4F6FA)', color: 'var(--color-text-secondary, #6E7191)' },
  purple:   { background: 'var(--color-accent-100, #EEDFFF)', color: 'var(--color-accent-700, #5500CC)' },
};

const sizes = {
  small:  { padding: '2px 8px', fontSize: 10, dotSize: 5, gap: 4 },
  medium: { padding: '3px 10px', fontSize: 11, dotSize: 6, gap: 5 },
  large:  { padding: '4px 12px', fontSize: 12, dotSize: 7, gap: 6 },
};

export function Badge({ children, variant = 'default', size = 'large', dot = false, onClose,
  className = '', style = {}, ...rest }) {
  const v = variantStyles[variant] || variantStyles.default;
  const s = sizes[size] || sizes.large;
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: dot ? s.gap : s.gap - 1,
      padding: s.padding, borderRadius: 9999,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      fontSize: s.fontSize, fontWeight: 600, lineHeight: 1.4,
      whiteSpace: 'nowrap', ...v, ...style,
    }} {...rest}>
      {dot && <span style={{ width: s.dotSize, height: s.dotSize, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />}
      {children}
      {onClose && (
        <button onClick={onClose} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, color: 'currentColor', display: 'flex',
          alignItems: 'center', marginLeft: 2, opacity: 0.7,
        }}>✕</button>
      )}
    </span>
  );
}
