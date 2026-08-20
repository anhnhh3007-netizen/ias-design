import React from 'react';

export function InputNumber({ label, value, onChange, min, max, step = 1,
  disabled = false, feedback, feedbackType = 'error', hint,
  className = '', style = {}, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = (feedbackType === 'error' && feedback) ? '#EB2D4B'
    : focused ? '#141ED2' : '#D9DBE9';
  const handleChange = e => {
    const v = e.target.value === '' ? '' : Number(e.target.value);
    onChange && onChange(v, e);
  };
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: '#4E4B66', fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>{label}</label>}
      <input id={id} type="number" value={value} onChange={handleChange}
        min={min} max={max} step={step} disabled={disabled}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          height: 40, borderRadius: 8, border: `1px solid ${borderColor}`,
          boxShadow: focused ? '0 0 0 3px rgba(20,30,210,0.08)' : 'none',
          padding: '0 12px', fontSize: 13,
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          color: disabled ? '#A0A3BD' : '#4E4B66',
          background: disabled ? '#F4F6FA' : '#fff',
          outline: 'none', width: '100%', boxSizing: 'border-box',
          transition: 'border-color 0.15s',
        }} {...rest} />
      {feedback && <span style={{ fontSize: 11, color: '#EB2D4B', fontFamily: 'inherit' }}>{feedback}</span>}
      {hint && !feedback && <span style={{ fontSize: 11, color: '#A0A3BD', fontFamily: 'inherit' }}>{hint}</span>}
    </div>
  );
}
