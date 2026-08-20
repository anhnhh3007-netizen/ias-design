import React from 'react';

export function Dropdown({ trigger, items = [], placement = 'bottom-left',
  className = '', style = {}, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const pos = placement === 'bottom-right'
    ? { top: '100%', right: 0 }
    : { top: '100%', left: 0 };

  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-flex' }}
      className={className} {...rest}>
      <span onClick={() => setOpen(v => !v)}>{trigger}</span>
      {open && (
        <div style={{
          position: 'absolute', ...pos, marginTop: 4,
          background: '#fff', borderRadius: 8, zIndex: 100,
          boxShadow: '0 8px 24px rgba(75,99,226,0.15)',
          border: '1px solid #EDF2F7', minWidth: 160, overflow: 'hidden',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
          ...style,
        }}>
          {items.map((item, i) => item.divider
            ? <div key={i} style={{ height: 1, background: '#EDF2F7', margin: '4px 0' }} />
            : (
              <button key={i} disabled={item.disabled}
                onClick={() => { setOpen(false); item.onClick && item.onClick(); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', padding: '9px 14px', background: 'none',
                  border: 'none', textAlign: 'left', fontSize: 13, cursor: item.disabled ? 'not-allowed' : 'pointer',
                  color: item.danger ? '#EB2D4B' : item.disabled ? '#A0A3BD' : '#4E4B66',
                  fontFamily: 'inherit', fontWeight: 500,
                }}
                onMouseEnter={e => { if (!item.disabled) e.currentTarget.style.background = '#F4F5FF'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}>
                {item.icon && <span style={{ color: 'currentColor', display: 'flex' }}>{item.icon}</span>}
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </span>
  );
}
