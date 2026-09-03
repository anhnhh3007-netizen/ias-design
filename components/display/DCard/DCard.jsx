import React, { useState } from 'react';

export function DCard({
  title, headerExtra, defaultOpen = true,
  children, className = '', style = {}, ...rest
}) {
  const [isOpen, setOpen] = useState(defaultOpen);

  return (
    <div className={className} style={{
      background: 'var(--color-bg-surface, #fff)', borderRadius: 12,
      border: '1px solid var(--color-border-default, #D9DBE9)',
      overflow: 'hidden', flexShrink: 0,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px', cursor: 'pointer',
        }}
        onClick={() => setOpen(o => !o)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary, #14142A)' }}>{title}</span>
          {headerExtra}
        </div>
        <button
          type="button"
          style={{
            width: 28, height: 28, borderRadius: 6, border: 'none', background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--color-icon-default, #6E7191)', cursor: 'pointer',
          }}
          aria-label={isOpen ? 'Thu gọn' : 'Mở rộng'}
        >
          <span className="msym" style={{ fontSize: 20 }}>{isOpen ? 'expand_less' : 'expand_more'}</span>
        </button>
      </div>
      {isOpen && <div style={{ padding: '0 20px 20px' }}>{children}</div>}
    </div>
  );
}
