import React from 'react';

export function Tooltip({ children, content, placement = 'top', className = '', style = {}, ...rest }) {
  const [visible, setVisible] = React.useState(false);
  const pos = {
    top:    { bottom: '110%', left: '50%', transform: 'translateX(-50%)' },
    bottom: { top: '110%',   left: '50%', transform: 'translateX(-50%)' },
    left:   { right: '110%', top: '50%',  transform: 'translateY(-50%)' },
    right:  { left: '110%',  top: '50%',  transform: 'translateY(-50%)' },
  }[placement] || { bottom: '110%', left: '50%', transform: 'translateX(-50%)' };

  return (
    <span className={className} style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} {...rest}>
      {children}
      {visible && content && (
        <span style={{
          position: 'absolute', ...pos,
          background: '#14142A', color: '#fff',
          fontSize: 11, fontWeight: 500,
          padding: '5px 10px', borderRadius: 6,
          whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 600,
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}>{content}</span>
      )}
    </span>
  );
}
