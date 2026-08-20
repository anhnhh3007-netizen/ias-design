import React from 'react';

export function Empty({ title = 'Không có dữ liệu', description, action,
  icon, className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '48px 24px', textAlign: 'center',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      {icon ? icon : (
        <div style={{ width: 64, height: 64, borderRadius: 16, background: '#F4F6FA',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 32, marginBottom: 16, color: '#A0A3BD' }}>📋</div>
      )}
      <div style={{ fontSize: 15, fontWeight: 700, color: '#14142A', marginBottom: 6 }}>{title}</div>
      {description && <div style={{ fontSize: 13, color: '#A0A3BD', lineHeight: 1.6, maxWidth: 280, marginBottom: action ? 20 : 0 }}>{description}</div>}
      {action}
    </div>
  );
}
