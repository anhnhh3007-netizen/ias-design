import React from 'react';

export function Divider({ orientation = 'horizontal', label, color = '#EDF2F7',
  spacing = 16, className = '', style = {}, ...rest }) {
  if (orientation === 'vertical') {
    return <div className={className} style={{ width: 1, alignSelf: 'stretch', background: color, margin: `0 ${spacing}px`, flexShrink: 0, ...style }} {...rest} />;
  }
  if (label) {
    return (
      <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 12, margin: `${spacing}px 0`, ...style }} {...rest}>
        <div style={{ flex: 1, height: 1, background: color }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: '#A0A3BD', whiteSpace: 'nowrap',
          fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)' }}>{label}</span>
        <div style={{ flex: 1, height: 1, background: color }} />
      </div>
    );
  }
  return <div className={className} style={{ height: 1, background: color, margin: `${spacing}px 0`, ...style }} {...rest} />;
}
