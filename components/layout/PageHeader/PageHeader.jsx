import React from 'react';

export function PageHeader({ title, subtitle, breadcrumb = [], actions, onBack, badge, className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{ marginBottom: 20, fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)', ...style }} {...rest}>
      {breadcrumb.length > 0 && (
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#A0A3BD', marginBottom: 12, flexWrap: 'wrap' }}>
          {breadcrumb.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: '#D9DBE9' }}>›</span>}
              {i === breadcrumb.length - 1
                ? <span style={{ color: '#4E4B66', fontWeight: 500 }}>{item.label}</span>
                : <a href={item.href || '#'} onClick={item.onClick} style={{ color: '#141ED2', textDecoration: 'none', fontWeight: 500 }}>{item.label}</a>
              }
            </React.Fragment>
          ))}
        </nav>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          {onBack && (
            <button type="button" onClick={onBack} title="Quay lại" style={{
              width: 36, height: 36, flexShrink: 0, borderRadius: 8, border: 'none',
              background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-text-primary, #14142A)', cursor: 'pointer',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
            </button>
          )}
          <div style={{ minWidth: 0 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#14142A', margin: 0, lineHeight: 1.3 }}>{title}</h1>
            {subtitle && <p style={{ fontSize: 13, color: '#6E7191', margin: '4px 0 0', lineHeight: 1.5 }}>{subtitle}</p>}
          </div>
          {badge && <div style={{ flexShrink: 0 }}>{badge}</div>}
        </div>
        {actions && <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>{actions}</div>}
      </div>
    </div>
  );
}
