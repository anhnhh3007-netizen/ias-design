import React from 'react';

export function Modal({ open = false, title, children, footer, onClose,
  width = 520, className = '', style = {}, ...rest }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(20,20,42,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 400, padding: 16,
    }} onClick={e => e.target === e.currentTarget && onClose && onClose()}>
      <div className={className} role="dialog" aria-modal="true"
        style={{
          background: '#fff', borderRadius: 12,
          boxShadow: '0 16px 40px rgba(20,20,42,0.18)',
          width, maxWidth: '95vw', maxHeight: '90vh',
          display: 'flex', flexDirection: 'column',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          ...style,
        }} {...rest}>
        <div style={{
          padding: '20px 24px', borderBottom: '1px solid #EDF2F7',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
        }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#14142A' }}>{title}</span>
          {onClose && (
            <button onClick={onClose} style={{
              width: 32, height: 32, borderRadius: 6, border: 'none',
              background: 'transparent', cursor: 'pointer',
              color: '#6E7191', fontSize: 18, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>✕</button>
          )}
        </div>
        <div style={{ padding: 24, overflowY: 'auto', flex: 1 }}>{children}</div>
        {footer && (
          <div style={{
            padding: '16px 24px', borderTop: '1px solid #EDF2F7',
            display: 'flex', gap: 8, justifyContent: 'flex-end', flexShrink: 0,
          }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
