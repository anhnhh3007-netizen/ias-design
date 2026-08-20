import React from 'react';

export function DataCard({ label, value, change, changeType = 'neutral', icon,
  iconBg = '#E8EAF6', color = '#141ED2', className = '', style = {}, onClick, ...rest }) {
  const changeColors = { positive: '#00966D', negative: '#EB2D4B', neutral: '#6E7191', warning: '#946200' };
  return (
    <div className={className} onClick={onClick} style={{
      background: '#fff', borderRadius: 12, padding: 20,
      boxShadow: '0 2px 8px rgba(75,99,226,0.08)',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      cursor: onClick ? 'pointer' : 'default',
      transition: onClick ? 'box-shadow 0.15s' : 'none',
      ...style,
    }} {...rest}>
      {icon && (
        <div style={{ width: 40, height: 40, borderRadius: 10, background: iconBg, color,
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
          {icon}
        </div>
      )}
      <div style={{ fontSize: 12, fontWeight: 500, color: '#6E7191', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color, lineHeight: 1, marginBottom: change ? 6 : 0 }}>{value}</div>
      {change && <div style={{ fontSize: 12, color: changeColors[changeType] || changeColors.neutral }}>{change}</div>}
    </div>
  );
}
