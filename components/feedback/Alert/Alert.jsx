import React from 'react';

const configs = {
  success:       { bg: '#F2FFFB', border: '#00BA88', icon: '✓', iconBg: '#00BA88', titleColor: '#00966D' },
  warning:       { bg: '#FFF9EF', border: '#F4B740', icon: '⚠', iconBg: '#F4B740', titleColor: '#946200' },
  error:         { bg: '#FFF3F8', border: '#EB2D4B', icon: '✕', iconBg: '#EB2D4B', titleColor: '#C30052' },
  informational: { bg: '#E8EAF6', border: '#141ED2', icon: 'i', iconBg: '#141ED2', titleColor: '#141ED2' },
  info:          { bg: '#E8EAF6', border: '#141ED2', icon: 'i', iconBg: '#141ED2', titleColor: '#141ED2' },
};

export function Alert({ status = 'informational', title, description, onClose,
  className = '', style = {}, ...rest }) {
  const c = configs[status] || configs.informational;
  return (
    <div className={className} role="alert" style={{
      display: 'flex', gap: 12, padding: '12px 16px',
      borderRadius: 8, border: `1px solid ${c.border}`,
      background: c.bg,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <span style={{
        width: 22, height: 22, borderRadius: '50%',
        background: c.iconBg, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1,
      }}>{c.icon}</span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: 13, fontWeight: 700, color: c.titleColor, marginBottom: description ? 3 : 0 }}>{title}</div>}
        {description && <div style={{ fontSize: 12, color: '#6E7191', lineHeight: 1.5 }}>{description}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#A0A3BD', fontSize: 16, padding: 0, lineHeight: 1,
        }}>✕</button>
      )}
    </div>
  );
}
