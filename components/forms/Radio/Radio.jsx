import React from 'react';

export function Radio({ checked = false, disabled = false, label, onChange,
  name, value, className = '', style = {}, id, ...rest }) {
  return (
    <label className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      fontSize: 13, color: disabled ? 'var(--color-text-muted, #A0A3BD)' : 'var(--color-text-body, #4E4B66)',
      userSelect: 'none', ...style,
    }}>
      <span style={{ position: 'relative', width: 18, height: 18, flexShrink: 0 }}>
        <input type="radio" id={id} name={name} value={value} checked={checked}
          disabled={disabled} onChange={onChange}
          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 18, height: 18, borderRadius: '50%',
          border: `2px solid ${checked ? 'var(--color-border-focus, #141ED2)' : disabled ? 'var(--color-border-default, #D9DBE9)' : 'var(--color-neutral-500, #A0A3BD)'}`,
          background: 'var(--color-bg-surface, #fff)', transition: 'all 0.15s',
        }}>
          {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-bg-brand, #141ED2)' }} />}
        </span>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
