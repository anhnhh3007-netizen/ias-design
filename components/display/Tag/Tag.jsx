import React from 'react';

export function Tag({ children, color = 'default', icon, onClose,
  className = '', style = {}, ...rest }) {
  const colorMap = {
    default:  { bg: 'var(--color-neutral-100, #F4F6FA)',  text: 'var(--color-text-secondary, #6E7191)',  border: 'var(--color-border-default, #D9DBE9)' },
    blue:     { bg: 'var(--color-primary-100, #E8EAF6)',  text: 'var(--color-text-brand, #141ED2)',  border: 'var(--color-primary-200, #C4C6F7)' },
    green:    { bg: 'var(--color-bg-success, #F2FFFB)',  text: 'var(--color-text-success, #00966D)',  border: 'var(--color-border-success, #00BA88)' },
    orange:   { bg: 'var(--color-bg-warning, #FFF9EF)',  text: 'var(--color-text-warning, #946200)',  border: 'var(--color-border-warning, #F4B740)' },
    red:      { bg: 'var(--color-bg-error, #FFF3F8)',  text: 'var(--color-text-error, #C30052)',  border: 'var(--color-border-error, #EB2D4B)' },
    purple:   { bg: 'var(--color-accent-100, #EEDFFF)',  text: 'var(--color-accent-700, #5500CC)',  border: 'var(--color-accent-200, #BC80FF)' },
  };
  const c = colorMap[color] || colorMap.default;
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px', borderRadius: 4,
      border: `1px solid ${c.border}`,
      background: c.bg, color: c.text,
      fontSize: 12, fontWeight: 500,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {icon && <span style={{ display: 'flex', fontSize: 12 }}>{icon}</span>}
      {children}
      {onClose && (
        <button onClick={onClose} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'currentColor', padding: 0, fontSize: 11,
          display: 'flex', alignItems: 'center', marginLeft: 2, opacity: 0.7,
        }}>✕</button>
      )}
    </span>
  );
}
