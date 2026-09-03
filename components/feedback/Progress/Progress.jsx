import React from 'react';

export function Progress({ value = 0, max = 100, color = 'var(--color-bg-brand, #141ED2)',
  showLabel = false, size = 'medium', className = '', style = {}, ...rest }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const heights = { small: 4, medium: 8, large: 12 };
  const h = heights[size] || heights.medium;

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }} {...rest}>
      <div style={{
        flex: 1, height: h, borderRadius: h, background: 'var(--color-neutral-200, #EDF2F7)', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${pct}%`, borderRadius: h,
          background: color, transition: 'width 0.3s ease',
        }} />
      </div>
      {showLabel && (
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary, #6E7191)', minWidth: 36, textAlign: 'right',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>
          {Math.round(pct)}%
        </span>
      )}
    </div>
  );
}
