import React from 'react';

const COLORS = ['#141ED2','#7B61FF','#00BA88','#F4B740','#EB2D4B','#00966D','#0E15A8','#946200'];
function initials(name = '') {
  return name.split(' ').map(w => w[0]).filter(Boolean).slice(-2).join('').toUpperCase();
}

export function Avatar({ name, src, size = 40, color, className = '', style = {}, ...rest }) {
  const bg = color || COLORS[Math.abs((name || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % COLORS.length];
  return (
    <div className={className} style={{
      width: size, height: size, borderRadius: '50%',
      background: src ? 'transparent' : bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, overflow: 'hidden',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      fontWeight: 700, fontSize: Math.round(size * 0.35),
      color: '#fff', userSelect: 'none', ...style,
    }} {...rest}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           : initials(name)}
    </div>
  );
}
