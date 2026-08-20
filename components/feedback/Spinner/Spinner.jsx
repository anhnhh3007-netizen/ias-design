import React from 'react';

export function Spinner({ size = 24, color = '#141ED2', className = '', style = {}, ...rest }) {
  const id = React.useId ? React.useId() : 'hcm-spinner';
  return (
    <>
      <style>{`@keyframes hcm-spin-${id.replace(/:/g,'')} { to { transform: rotate(360deg); } }`}</style>
      <span className={className} role="status" aria-label="Đang tải..." style={{
        display: 'inline-block', width: size, height: size,
        border: `${Math.max(2, size / 10)}px solid ${color}22`,
        borderTopColor: color,
        borderRadius: '50%',
        animation: `hcm-spin-${id.replace(/:/g,'')} 0.7s linear infinite`,
        flexShrink: 0, ...style,
      }} {...rest} />
    </>
  );
}
