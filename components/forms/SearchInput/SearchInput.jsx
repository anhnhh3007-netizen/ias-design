import React from 'react';

export function SearchInput({ value, onChange, onSubmit, placeholder = 'Tìm kiếm...',
  width = '100%', className = '', style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div className={className} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', width, ...style }}>
      <svg style={{ position: 'absolute', left: 10, color: '#A0A3BD', pointerEvents: 'none', flexShrink: 0 }}
        width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
      <input type="search" value={value} onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={e => e.key === 'Enter' && onSubmit && onSubmit(value)}
        style={{
          width: '100%', height: 36, borderRadius: 8,
          border: `1px solid ${focused ? '#141ED2' : '#D9DBE9'}`,
          background: focused ? '#fff' : '#F4F6FA',
          padding: '0 12px 0 34px', fontSize: 13,
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          color: '#4E4B66', outline: 'none',
          boxShadow: focused ? '0 0 0 3px rgba(20,30,210,0.08)' : 'none',
          transition: 'border-color 0.15s, background 0.15s',
        }} {...rest} />
    </div>
  );
}
