import React from 'react';

export function Input({
  label, hint, placeholder = 'Nhập văn bản...', value, onChange,
  type = 'text', state = 'default', feedback, feedbackType = 'error',
  disabled = false, readOnly = false, iconRight, iconLeft,
  className = '', style = {}, id, ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = state === 'error' || feedbackType === 'error' && feedback ? '#EB2D4B'
    : state === 'success' ? '#00BA88'
    : state === 'warning' ? '#F4B740'
    : focused ? '#141ED2' : '#D9DBE9';
  const shadow = focused ? `0 0 0 3px rgba(20,30,210,0.08)` : 'none';
  const feedbackColor = feedbackType === 'error' ? '#EB2D4B'
    : feedbackType === 'success' ? '#00BA88'
    : feedbackType === 'warning' ? '#946200' : '#6E7191';

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={id} style={{
          fontSize: 12, fontWeight: 600, color: '#4E4B66',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && (
          <span style={{ position: 'absolute', left: 10, color: '#A0A3BD', display: 'flex', pointerEvents: 'none' }}>{iconLeft}</span>
        )}
        <input
          id={id} type={type} value={value} onChange={onChange}
          placeholder={placeholder} disabled={disabled} readOnly={readOnly}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', height: 40, borderRadius: 8,
            border: `1px solid ${borderColor}`,
            boxShadow: shadow,
            padding: iconLeft ? '0 12px 0 34px' : iconRight ? '0 34px 0 12px' : '0 12px',
            fontSize: 13, color: disabled ? '#A0A3BD' : '#4E4B66',
            background: disabled || readOnly ? '#F4F6FA' : '#fff',
            fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
            outline: 'none', transition: 'border-color 0.15s, box-shadow 0.15s',
            cursor: disabled ? 'not-allowed' : 'text',
            boxSizing: 'border-box',
          }}
          {...rest}
        />
        {iconRight && (
          <span style={{ position: 'absolute', right: 10, color: '#A0A3BD', display: 'flex', pointerEvents: 'none' }}>{iconRight}</span>
        )}
      </div>
      {feedback && (
        <span style={{ fontSize: 11, color: feedbackColor, fontFamily: 'var(--font-family-body, sans-serif)' }}>
          {feedback}
        </span>
      )}
      {hint && !feedback && (
        <span style={{ fontSize: 11, color: '#A0A3BD', fontFamily: 'var(--font-family-body, sans-serif)' }}>
          {hint}
        </span>
      )}
    </div>
  );
}
