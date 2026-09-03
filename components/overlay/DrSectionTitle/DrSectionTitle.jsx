import React from 'react';

export function DrSectionTitle({ children, badge, className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontSize: 16, fontWeight: 600, lineHeight: '20px', letterSpacing: '0.15px',
          color: 'var(--color-text-primary, #14142A)',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        }}>{children}</span>
        {badge}
      </div>
      <span style={{ width: 32, height: 3, borderRadius: 2, background: 'var(--color-bg-brand, #141ED2)', flexShrink: 0 }} />
    </div>
  );
}
