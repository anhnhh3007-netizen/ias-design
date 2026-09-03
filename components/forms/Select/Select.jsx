import React from 'react';

// Same S/M/L scale as Button/Input/InputNumber/SearchInput — see Input.jsx's
// own SIZES comment and form-fields.md's "Sizes (size prop, added 2026-08-27)"
// section.
const SIZES = {
  small: { height: 32, fontSize: 13 },
  medium: { height: 40, fontSize: 13 },
  large: { height: 48, fontSize: 14 },
};

export function Select({ label, value, onChange, options = [], placeholder = 'Chọn...', disabled = false,
  feedback, feedbackType = 'error', hint, size = 'medium', className = '', style = {}, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const borderColor = feedbackType === 'error' && feedback ? 'var(--color-border-error, #EB2D4B)'
    : focused ? 'var(--color-border-focus, #141ED2)' : 'var(--color-border-default, #D9DBE9)';

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-body, #4E4B66)',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select id={id} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: '100%', height: s.height, borderRadius: 8,
            border: `1px solid ${borderColor}`,
            boxShadow: focused ? '0 0 0 3px rgba(20,30,210,0.08)' : 'none',
            padding: '0 32px 0 12px', fontSize: s.fontSize,
            color: value ? 'var(--color-text-body, #4E4B66)' : 'var(--color-text-muted, #A0A3BD)',
            background: disabled ? 'var(--color-neutral-100, #F4F6FA)' : 'var(--color-bg-surface, #fff)',
            fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
            outline: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
            appearance: 'none', boxSizing: 'border-box',
            transition: 'border-color 0.15s, box-shadow 0.15s',
          }} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt, i) => (
            <option key={i} value={opt.value ?? opt} disabled={opt.disabled}>
              {opt.label ?? opt}
            </option>
          ))}
        </select>
        <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
          color: 'var(--color-icon-muted, #A0A3BD)', pointerEvents: 'none', fontSize: 12 }}>▾</span>
      </div>
      {feedback && <span style={{ fontSize: 11, color: feedbackType === 'error' ? 'var(--color-error-500, #EB2D4B)' : 'var(--color-text-secondary, #6E7191)',
        fontFamily: 'var(--font-family-body, sans-serif)' }}>{feedback}</span>}
      {hint && !feedback && <span style={{ fontSize: 11, color: 'var(--color-text-muted, #A0A3BD)',
        fontFamily: 'var(--font-family-body, sans-serif)' }}>{hint}</span>}
    </div>
  );
}
