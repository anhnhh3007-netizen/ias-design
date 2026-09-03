import React from 'react';

export function Notification({ title, description, status = 'info', onClose,
  duration, className = '', style = {}, ...rest }) {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    if (duration) { const t = setTimeout(() => { setVisible(false); onClose && onClose(); }, duration); return () => clearTimeout(t); }
  }, [duration]);
  if (!visible) return null;
  const cfg = {
    success: { bg: 'var(--color-bg-success, #F2FFFB)', border: 'var(--color-border-success, #00BA88)', icon: '✓', iconBg: 'var(--color-bg-success-solid, #00BA88)', titleColor: 'var(--color-text-success, #00966D)' },
    warning: { bg: 'var(--color-bg-warning, #FFF9EF)', border: 'var(--color-border-warning, #F4B740)', icon: '⚠', iconBg: 'var(--color-bg-warning-solid, #F4B740)', titleColor: 'var(--color-text-warning, #946200)' },
    error:   { bg: 'var(--color-bg-error, #FFF3F8)', border: 'var(--color-border-error, #EB2D4B)', icon: '✕', iconBg: 'var(--color-bg-error-solid, #EB2D4B)', titleColor: 'var(--color-text-error, #C30052)' },
    info:    { bg: 'var(--color-primary-100, #E8EAF6)', border: 'var(--color-border-focus, #141ED2)', icon: 'i', iconBg: 'var(--color-bg-brand, #141ED2)', titleColor: 'var(--color-text-brand, #141ED2)' },
  }[status] || { bg: 'var(--color-primary-100, #E8EAF6)', border: 'var(--color-border-focus, #141ED2)', icon: 'i', iconBg: 'var(--color-bg-brand, #141ED2)', titleColor: 'var(--color-text-brand, #141ED2)' };
  return (
    <div className={className} role="alert" style={{
      display: 'flex', gap: 12, padding: '14px 16px',
      borderRadius: 10, border: `1px solid ${cfg.border}`, background: cfg.bg,
      boxShadow: '0 8px 24px rgba(75,99,226,0.12)', minWidth: 280, maxWidth: 380,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <span style={{ width: 24, height: 24, borderRadius: '50%', background: cfg.iconBg,
        color: 'var(--color-text-inverse, #fff)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{cfg.icon}</span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: 13, fontWeight: 700, color: cfg.titleColor, marginBottom: description ? 4 : 0 }}>{title}</div>}
        {description && <div style={{ fontSize: 12, color: 'var(--color-text-secondary, #6E7191)', lineHeight: 1.5 }}>{description}</div>}
      </div>
      {onClose && <button onClick={() => { setVisible(false); onClose(); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted, #A0A3BD)', fontSize: 16, padding: 0, lineHeight: 1 }}>✕</button>}
    </div>
  );
}
