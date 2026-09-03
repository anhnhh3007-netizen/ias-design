import React from 'react';

const COLORS = [
  'var(--color-primary-500, #141ED2)',
  'var(--color-accent-500, #7B61FF)',
  'var(--color-success-500, #00BA88)',
  'var(--color-warning-500, #F4B740)',
  'var(--color-error-500, #EB2D4B)',
  'var(--color-success-700, #00966D)',
  'var(--color-primary-700, #0E15A8)',
  'var(--color-warning-700, #946200)',
];
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
      color: 'var(--color-text-inverse, #fff)', userSelect: 'none', ...style,
    }} {...rest}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           : initials(name)}
    </div>
  );
}
