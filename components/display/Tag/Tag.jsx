import React from 'react';

export function Tag({ children, color = 'default', icon, onClose,
  className = '', style = {}, ...rest }) {
  const colorMap = {
    default:  { bg: '#F4F6FA',  text: '#6E7191',  border: '#D9DBE9' },
    blue:     { bg: '#E8EAF6',  text: '#141ED2',  border: '#C4C6F7' },
    green:    { bg: '#F2FFFB',  text: '#00966D',  border: '#00BA88' },
    orange:   { bg: '#FFF9EF',  text: '#946200',  border: '#F4B740' },
    red:      { bg: '#FFF3F8',  text: '#C30052',  border: '#EB2D4B' },
    purple:   { bg: '#EEDFFF',  text: '#5500CC',  border: '#BC80FF' },
  };
  const c = colorMap[color] || colorMap.default;
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px', borderRadius: 4,
      border: `1px solid ${c.border}`,
      background: c.bg, color: c.text,
      fontSize: 12, fontWeight: 500,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {icon && <span style={{ display: 'flex', fontSize: 12 }}>{icon}</span>}
      {children}
      {onClose && (
        <button onClick={onClose} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'currentColor', padding: 0, fontSize: 11,
          display: 'flex', alignItems: 'center', marginLeft: 2, opacity: 0.7,
        }}>✕</button>
      )}
    </span>
  );
}
