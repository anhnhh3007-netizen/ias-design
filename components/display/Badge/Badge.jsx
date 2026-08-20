import React from 'react';

const variantStyles = {
  default:  { background: '#E8EAF6', color: '#141ED2' },
  success:  { background: '#F2FFFB', color: '#00966D' },
  warning:  { background: '#FFF9EF', color: '#946200' },
  error:    { background: '#FFF3F8', color: '#C30052' },
  neutral:  { background: '#F4F6FA', color: '#6E7191' },
  purple:   { background: '#EEDFFF', color: '#5500CC' },
};

export function Badge({ children, variant = 'default', dot = false, onClose,
  className = '', style = {}, ...rest }) {
  const v = variantStyles[variant] || variantStyles.default;
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: dot ? 5 : 4,
      padding: '3px 10px', borderRadius: 9999,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      fontSize: 11, fontWeight: 600, lineHeight: 1.4,
      whiteSpace: 'nowrap', ...v, ...style,
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />}
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
