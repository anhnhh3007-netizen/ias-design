import React from 'react';

export function Tabs({ items = [], activeIndex = 0, onChange, className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{
      display: 'flex', borderBottom: '2px solid var(--color-neutral-200, #EDF2F7)',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      {items.map((item, i) => (
        <button key={i} onClick={() => onChange && onChange(i)} style={{
          padding: '10px 20px', fontSize: 13, fontWeight: activeIndex === i ? 700 : 500,
          color: activeIndex === i ? 'var(--color-text-brand, #141ED2)' : 'var(--color-text-secondary, #6E7191)',
          background: 'none', border: 'none',
          borderBottom: `2px solid ${activeIndex === i ? 'var(--color-primary-500, #141ED2)' : 'transparent'}`,
          marginBottom: -2, cursor: 'pointer',
          transition: 'color 0.15s', whiteSpace: 'nowrap',
          fontFamily: 'inherit',
        }}>
          {item.label}
          {item.badge != null && (
            <span style={{
              marginLeft: 6, background: activeIndex === i ? 'var(--color-bg-brand, #141ED2)' : 'var(--color-bg-warning-solid, #F4B740)',
              color: 'var(--color-text-inverse, #fff)', borderRadius: 9999, fontSize: 10, fontWeight: 700,
              padding: '1px 6px',
            }}>{item.badge}</span>
          )}
        </button>
      ))}
    </div>
  );
}
