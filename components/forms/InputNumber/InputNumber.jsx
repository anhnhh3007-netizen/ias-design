import React from 'react';

// Same S/M/L scale as Button/Input — see Input.jsx's own SIZES comment and
// form-fields.md's "Sizes (size prop, added 2026-08-27)" section.
const SIZES = {
  small: { height: 32, fontSize: 13 },
  medium: { height: 40, fontSize: 13 },
  large: { height: 48, fontSize: 14 },
};

export function InputNumber({ label, value, onChange, min, max, step = 1,
  disabled = false, feedback, feedbackType = 'error', hint, size = 'medium',
  className = '', style = {}, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const borderColor = (feedbackType === 'error' && feedback) ? 'var(--color-border-error, #EB2D4B)'
    : focused ? 'var(--color-border-focus, #141ED2)' : 'var(--color-border-default, #D9DBE9)';
  const handleChange = e => {
    const v = e.target.value === '' ? '' : Number(e.target.value);
    onChange && onChange(v, e);
  };
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-body, #4E4B66)', fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>{label}</label>}
      <input id={id} type="number" value={value} onChange={handleChange}
        min={min} max={max} step={step} disabled={disabled}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          height: s.height, borderRadius: 8, border: `1px solid ${borderColor}`,
          boxShadow: focused ? '0 0 0 3px rgba(20,30,210,0.08)' : 'none',
          padding: '0 12px', fontSize: s.fontSize,
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          color: disabled ? 'var(--color-text-muted, #A0A3BD)' : 'var(--color-text-body, #4E4B66)',
          background: disabled ? 'var(--color-bg-page, #F4F6FA)' : 'var(--color-bg-surface, #fff)',
          outline: 'none', width: '100%', boxSizing: 'border-box',
          transition: 'border-color 0.15s',
        }} {...rest} />
      {feedback && <span style={{ fontSize: 11, color: 'var(--color-error-500, #EB2D4B)', fontFamily: 'inherit' }}>{feedback}</span>}
      {hint && !feedback && <span style={{ fontSize: 11, color: 'var(--color-text-muted, #A0A3BD)', fontFamily: 'inherit' }}>{hint}</span>}
    </div>
  );
}
