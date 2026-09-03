import React from 'react';

/*
 * Right-side sliding detail panel. Always mounted (not conditionally
 * rendered on `open`) so the transform transition can animate in/out,
 * same technique as the sidebar's hover-expand — the backdrop's pointer
 * events and opacity gate interaction while closed instead.
 */

export function Drawer({ open = false, title, badge, children, footer, onClose, onExpand,
  width = '50vw', className = '', style = {}, ...rest }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 400,
        background: 'rgba(20,20,42,0.45)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.25s',
      }}
      onClick={e => e.target === e.currentTarget && onClose && onClose()}
    >
      <div className={className} role="dialog" aria-modal="true"
        style={{
          position: 'absolute', top: 0, right: 0, height: '100%',
          width, minWidth: 480, maxWidth: '95vw', background: 'var(--color-bg-surface, #fff)',
          boxShadow: '-8px 0 32px rgba(20,20,42,0.16)',
          display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.28s cubic-bezier(.4,0,.2,1)',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          ...style,
        }} {...rest}>
        <div style={{
          padding: '20px 24px', borderBottom: '1px solid var(--color-neutral-200, #EDF2F7)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary, #14142A)' }}>{title}</span>
            {badge && <div style={{ flexShrink: 0 }}>{badge}</div>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
            {onExpand && (
              <button type="button" onClick={onExpand} title="Mở rộng" style={{
                width: 32, height: 32, borderRadius: 6, border: 'none',
                background: 'transparent', cursor: 'pointer',
                color: 'var(--color-icon-default, #6E7191)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h8v2H5v6H3V3zm18 0v8h-2V5h-6V3h8zM3 13h2v6h6v2H3v-8zm18 0v8h-8v-2h6v-6h2z" />
                </svg>
              </button>
            )}
            {onClose && (
              <button type="button" onClick={onClose} style={{
                width: 32, height: 32, borderRadius: 6, border: 'none',
                background: 'transparent', cursor: 'pointer',
                color: 'var(--color-icon-default, #6E7191)', fontSize: 18, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>✕</button>
            )}
          </div>
        </div>
        <div style={{ padding: 24, overflowY: 'auto', flex: 1 }}>{children}</div>
        {footer && (
          <div style={{
            padding: '16px 24px', borderTop: '1px solid var(--color-neutral-200, #EDF2F7)',
            display: 'flex', gap: 8, justifyContent: 'flex-end', flexShrink: 0,
          }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
