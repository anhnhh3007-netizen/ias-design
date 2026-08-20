import React from 'react';

export function Select({ label, value, onChange, options = [], placeholder = 'Chọn...', disabled = false,
  feedback, feedbackType = 'error', hint, className = '', style = {}, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = feedbackType === 'error' && feedback ? '#EB2D4B'
    : focused ? '#141ED2' : '#D9DBE9';

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: '#4E4B66',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select id={id} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: '100%', height: 40, borderRadius: 8,
            border: `1px solid ${borderColor}`,
            boxShadow: focused ? '0 0 0 3px rgba(20,30,210,0.08)' : 'none',
            padding: '0 32px 0 12px', fontSize: 13,
            color: value ? '#4E4B66' : '#A0A3BD',
            background: disabled ? '#F4F6FA' : '#fff',
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
          color: '#A0A3BD', pointerEvents: 'none', fontSize: 12 }}>▾</span>
      </div>
      {feedback && <span style={{ fontSize: 11, color: feedbackType === 'error' ? '#EB2D4B' : '#6E7191',
        fontFamily: 'var(--font-family-body, sans-serif)' }}>{feedback}</span>}
      {hint && !feedback && <span style={{ fontSize: 11, color: '#A0A3BD',
        fontFamily: 'var(--font-family-body, sans-serif)' }}>{hint}</span>}
    </div>
  );
}
