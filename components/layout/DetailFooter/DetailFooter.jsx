import React from 'react';

export function DetailFooter({ children, align = 'center', className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{
      display: 'flex', alignItems: 'center', gap: 8,
      justifyContent: align === 'right' ? 'flex-end' : 'center',
      borderTop: '1px solid var(--color-neutral-200, #EDF2F7)',
      padding: '16px 0 4px',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      {children}
    </div>
  );
}
