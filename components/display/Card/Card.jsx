import React from 'react';

export function Card({ children, title, subtitle, extra, footer,
  padding = 24, className = '', style = {}, onClick, ...rest }) {
  return (
    <div className={className} onClick={onClick} style={{
      background: 'var(--color-bg-surface, #fff)', borderRadius: 12,
      border: '1px solid var(--color-border-default, #D9DBE9)',
      overflow: 'hidden', cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      transition: onClick ? 'border-color 0.15s' : 'none',
      ...style,
    }}
    onMouseEnter={onClick ? e => { e.currentTarget.style.borderColor = 'var(--color-border-focus, #141ED2)'; } : undefined}
    onMouseLeave={onClick ? e => { e.currentTarget.style.borderColor = 'var(--color-border-default, #D9DBE9)'; } : undefined}
    {...rest}>
      {(title || subtitle || extra) && (
        <div style={{ padding: `${padding}px ${padding}px ${padding / 2}px`, borderBottom: '1px solid #EDF2F7',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            {title && <div style={{ fontSize: 15, fontWeight: 700, color: '#14142A' }}>{title}</div>}
            {subtitle && <div style={{ fontSize: 12, color: '#A0A3BD', marginTop: 2 }}>{subtitle}</div>}
          </div>
          {extra && <div>{extra}</div>}
        </div>
      )}
      <div style={{ padding }}>{children}</div>
      {footer && (
        <div style={{ padding: `${padding / 2}px ${padding}px`, borderTop: '1px solid #EDF2F7', background: '#F4F6FA' }}>
          {footer}
        </div>
      )}
    </div>
  );
}
