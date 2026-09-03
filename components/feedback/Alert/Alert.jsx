import React from 'react';

const configs = {
  success:       { bg: 'var(--color-bg-success, #F2FFFB)', border: 'var(--color-border-success, #00BA88)', icon: '✓', iconBg: 'var(--color-bg-success-solid, #00BA88)', titleColor: 'var(--color-text-success, #00966D)' },
  warning:       { bg: 'var(--color-bg-warning, #FFF9EF)', border: 'var(--color-border-warning, #F4B740)', icon: '⚠', iconBg: 'var(--color-bg-warning-solid, #F4B740)', titleColor: 'var(--color-text-warning, #946200)' },
  error:         { bg: 'var(--color-bg-error, #FFF3F8)', border: 'var(--color-border-error, #EB2D4B)', icon: '✕', iconBg: 'var(--color-bg-error-solid, #EB2D4B)', titleColor: 'var(--color-text-error, #C30052)' },
  informational: { bg: 'var(--color-primary-100, #E8EAF6)', border: 'var(--color-border-focus, #141ED2)', icon: 'i', iconBg: 'var(--color-bg-brand, #141ED2)', titleColor: 'var(--color-text-brand, #141ED2)' },
  info:          { bg: 'var(--color-primary-100, #E8EAF6)', border: 'var(--color-border-focus, #141ED2)', icon: 'i', iconBg: 'var(--color-bg-brand, #141ED2)', titleColor: 'var(--color-text-brand, #141ED2)' },
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
        background: c.iconBg, color: 'var(--color-text-inverse, #fff)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1,
      }}>{c.icon}</span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: 13, fontWeight: 700, color: c.titleColor, marginBottom: description ? 3 : 0 }}>{title}</div>}
        {description && <div style={{ fontSize: 12, color: 'var(--color-text-secondary, #6E7191)', lineHeight: 1.5 }}>{description}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--color-text-muted, #A0A3BD)', fontSize: 16, padding: 0, lineHeight: 1,
        }}>✕</button>
      )}
    </div>
  );
}
