import React from 'react';

export function Textarea({ label, hint, placeholder = 'Nhập nội dung...', value, onChange,
  rows = 4, disabled = false, readOnly = false, feedback, feedbackType = 'error',
  state = 'default', className = '', style = {}, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = state === 'error' || (feedbackType === 'error' && feedback) ? '#EB2D4B'
    : state === 'success' ? '#00BA88' : focused ? '#141ED2' : '#D9DBE9';
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: '#4E4B66', fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>{label}</label>}
      <textarea id={id} value={value} onChange={onChange} placeholder={placeholder}
        rows={rows} disabled={disabled} readOnly={readOnly}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          border: `1px solid ${borderColor}`, borderRadius: 8,
          padding: '10px 12px', fontSize: 13, lineHeight: 1.6,
          color: disabled ? '#A0A3BD' : '#4E4B66',
          background: disabled || readOnly ? '#F4F6FA' : '#fff',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          outline: 'none', resize: 'vertical',
          boxShadow: focused ? '0 0 0 3px rgba(20,30,210,0.08)' : 'none',
          transition: 'border-color 0.15s, box-shadow 0.15s',
          width: '100%', boxSizing: 'border-box',
          cursor: disabled ? 'not-allowed' : 'text',
        }} {...rest} />
      {feedback && <span style={{ fontSize: 11, color: feedbackType === 'error' ? '#EB2D4B' : '#6E7191', fontFamily: 'var(--font-family-body, sans-serif)' }}>{feedback}</span>}
      {hint && !feedback && <span style={{ fontSize: 11, color: '#A0A3BD', fontFamily: 'var(--font-family-body, sans-serif)' }}>{hint}</span>}
    </div>
  );
}
