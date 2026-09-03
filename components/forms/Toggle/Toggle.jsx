import React from 'react';

export function Toggle({ checked = false, disabled = false, label, onChange,
  className = '', style = {}, ...rest }) {
  return (
    <label className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      fontSize: 13, color: disabled ? 'var(--color-text-muted, #A0A3BD)' : 'var(--color-text-body, #4E4B66)',
      userSelect: 'none', ...style,
    }}>
      <span style={{ position: 'relative', width: 36, height: 20, flexShrink: 0 }}>
        <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
        <span style={{
          display: 'block', width: 36, height: 20, borderRadius: 10,
          background: checked ? 'var(--color-bg-brand, #141ED2)' : 'var(--color-neutral-300, #D9DBE9)',
          opacity: disabled ? 0.5 : 1,
          transition: 'background 0.2s',
        }} />
        <span style={{
          position: 'absolute', top: 2,
          left: checked ? 18 : 2,
          width: 16, height: 16, borderRadius: '50%',
          background: 'var(--color-bg-surface, #fff)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          transition: 'left 0.2s',
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
