import React from 'react';

export function Checkbox({ checked = false, indeterminate = false, disabled = false,
  label, onChange, className = '', style = {}, id, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      fontSize: 13, color: disabled ? '#A0A3BD' : '#4E4B66',
      userSelect: 'none', ...style,
    }}>
      <span style={{ position: 'relative', width: 18, height: 18, flexShrink: 0 }}>
        <input
          ref={ref} type="checkbox" id={id} checked={checked}
          disabled={disabled} onChange={onChange}
          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
          {...rest}
        />
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 18, height: 18, borderRadius: 4,
          border: `2px solid ${checked || indeterminate ? '#141ED2' : disabled ? '#D9DBE9' : '#A0A3BD'}`,
          background: checked || indeterminate ? '#141ED2' : '#fff',
          transition: 'all 0.15s',
        }}>
          {checked && !indeterminate && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {indeterminate && (
            <span style={{ width: 8, height: 2, background: '#fff', borderRadius: 1 }} />
          )}
        </span>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
