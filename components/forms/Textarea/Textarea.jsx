import React from 'react';

export function Textarea({ label, hint, placeholder = 'Nhập nội dung...', value, onChange,
  rows = 4, disabled = false, readOnly = false, feedback, feedbackType = 'error',
  state = 'default', className = '', style = {}, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = state === 'error' || (feedbackType === 'error' && feedback) ? 'var(--color-border-error, #EB2D4B)'
    : state === 'success' ? 'var(--color-border-success, #00BA88)' : focused ? 'var(--color-border-focus, #141ED2)' : 'var(--color-border-default, #D9DBE9)';
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-body, #4E4B66)', fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>{label}</label>}
      <textarea id={id} value={value} onChange={onChange} placeholder={placeholder}
        rows={rows} disabled={disabled} readOnly={readOnly}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          border: `1px solid ${borderColor}`, borderRadius: 8,
          padding: '10px 12px', fontSize: 13, lineHeight: 1.6,
          color: disabled ? 'var(--color-text-muted, #A0A3BD)' : 'var(--color-text-body, #4E4B66)',
          background: disabled || readOnly ? 'var(--color-neutral-100, #F4F6FA)' : 'var(--color-bg-surface, #fff)',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          outline: 'none', resize: 'vertical',
          boxShadow: focused ? '0 0 0 3px rgba(20,30,210,0.08)' : 'none',
          transition: 'border-color 0.15s, box-shadow 0.15s',
          width: '100%', boxSizing: 'border-box',
          cursor: disabled ? 'not-allowed' : 'text',
        }} {...rest} />
      {feedback && <span style={{ fontSize: 11, color: feedbackType === 'error' ? 'var(--color-error-500, #EB2D4B)' : 'var(--color-text-secondary, #6E7191)', fontFamily: 'var(--font-family-body, sans-serif)' }}>{feedback}</span>}
      {hint && !feedback && <span style={{ fontSize: 11, color: 'var(--color-text-muted, #A0A3BD)', fontFamily: 'var(--font-family-body, sans-serif)' }}>{hint}</span>}
    </div>
  );
}
