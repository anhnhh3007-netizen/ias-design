import React from 'react';

// Same S/M/L scale as Button (components/forms/Button/Button.jsx's `sizes`) —
// small and medium share fontSize, only large steps up, matching that precedent.
// Horizontal padding stays constant across sizes (only height/fontSize scale),
// also matching Button's own convention of a fixed --space-button-px regardless
// of size. See form-fields.md's "Sizes (size prop, added 2026-08-27)" section.
const SIZES = {
  small: { height: 32, fontSize: 13 },
  medium: { height: 40, fontSize: 13 },
  large: { height: 48, fontSize: 14 },
};

export function Input({
  label, hint, placeholder = 'Nhập văn bản...', value, onChange,
  type = 'text', state = 'default', feedback, feedbackType = 'error',
  disabled = false, readOnly = false, iconRight, iconLeft, size = 'medium',
  className = '', style = {}, id, ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const borderColor = state === 'error' || feedbackType === 'error' && feedback ? 'var(--color-border-error, #EB2D4B)'
    : state === 'success' ? 'var(--color-border-success, #00BA88)'
    : state === 'warning' ? 'var(--color-border-warning, #F4B740)'
    : focused ? 'var(--color-border-focus, #141ED2)' : 'var(--color-border-default, #D9DBE9)';
  const shadow = focused ? `0 0 0 3px rgba(20,30,210,0.08)` : 'none';
  const feedbackColor = feedbackType === 'error' ? 'var(--color-error-500, #EB2D4B)'
    : feedbackType === 'success' ? 'var(--color-success-500, #00BA88)'
    : feedbackType === 'warning' ? 'var(--color-text-warning, #946200)' : 'var(--color-text-secondary, #6E7191)';

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={id} style={{
          fontSize: 12, fontWeight: 600, color: 'var(--color-text-body, #4E4B66)',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && (
          <span style={{ position: 'absolute', left: 10, color: 'var(--color-icon-muted, #A0A3BD)', display: 'flex', pointerEvents: 'none' }}>{iconLeft}</span>
        )}
        <input
          id={id} type={type} value={value} onChange={onChange}
          placeholder={placeholder} disabled={disabled} readOnly={readOnly}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', height: s.height, borderRadius: 8,
            border: `1px solid ${borderColor}`,
            boxShadow: shadow,
            padding: iconLeft ? '0 12px 0 34px' : iconRight ? '0 34px 0 12px' : '0 12px',
            fontSize: s.fontSize, color: disabled ? 'var(--color-text-muted, #A0A3BD)' : 'var(--color-text-body, #4E4B66)',
            background: disabled || readOnly ? 'var(--color-bg-page, #F4F6FA)' : 'var(--color-bg-surface, #fff)',
            fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
            outline: 'none', transition: 'border-color 0.15s, box-shadow 0.15s',
            cursor: disabled ? 'not-allowed' : 'text',
            boxSizing: 'border-box',
          }}
          {...rest}
        />
        {iconRight && (
          <span style={{ position: 'absolute', right: 10, color: 'var(--color-icon-muted, #A0A3BD)', display: 'flex', pointerEvents: 'none' }}>{iconRight}</span>
        )}
      </div>
      {feedback && (
        <span style={{ fontSize: 11, color: feedbackColor, fontFamily: 'var(--font-family-body, sans-serif)' }}>
          {feedback}
        </span>
      )}
      {hint && !feedback && (
        <span style={{ fontSize: 11, color: 'var(--color-text-muted, #A0A3BD)', fontFamily: 'var(--font-family-body, sans-serif)' }}>
          {hint}
        </span>
      )}
    </div>
  );
}
