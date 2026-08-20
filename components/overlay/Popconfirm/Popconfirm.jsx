import React from 'react';

export function Popconfirm({ children, title = 'Bạn có chắc chắn không?',
  description, onConfirm, onCancel,
  confirmText = 'Xác nhận', cancelText = 'Hủy',
  placement = 'top', className = '', style = {}, ...rest }) {
  const [open, setOpen] = React.useState(false);

  const pos = placement === 'bottom'
    ? { top: '110%', left: '50%', transform: 'translateX(-50%)' }
    : { bottom: '110%', left: '50%', transform: 'translateX(-50%)' };

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} className={className} {...rest}>
      <span onClick={() => setOpen(v => !v)}>{children}</span>
      {open && (
        <div style={{
          position: 'absolute', ...pos,
          background: '#fff', borderRadius: 8, padding: 16, zIndex: 500,
          boxShadow: '0 8px 24px rgba(75,99,226,0.15)',
          border: '1px solid #EDF2F7', width: 260,
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          ...style,
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#14142A', marginBottom: description ? 6 : 12 }}>
            {title}
          </div>
          {description && (
            <div style={{ fontSize: 12, color: '#6E7191', marginBottom: 12, lineHeight: 1.5 }}>{description}</div>
          )}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button onClick={() => { setOpen(false); onCancel && onCancel(); }} style={{
              padding: '6px 14px', borderRadius: 6, border: '1px solid #D9DBE9',
              background: '#fff', color: '#6E7191', fontSize: 12, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>{cancelText}</button>
            <button onClick={() => { setOpen(false); onConfirm && onConfirm(); }} style={{
              padding: '6px 14px', borderRadius: 6, border: 'none',
              background: '#EB2D4B', color: '#fff', fontSize: 12, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>{confirmText}</button>
          </div>
        </div>
      )}
    </span>
  );
}
