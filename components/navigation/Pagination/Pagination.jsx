import React from 'react';

export function Pagination({ total = 0, page = 1, pageSize = 10, onChange,
  className = '', style = {}, ...rest }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) pages.push(i);
    else if (pages[pages.length - 1] !== '…') pages.push('…');
  }
  const btn = (label, target, disabled = false) => (
    <button key={label + target} disabled={disabled || typeof target !== 'number'}
      onClick={() => onChange && typeof target === 'number' && onChange(target)}
      style={{
        width: 32, height: 32, borderRadius: 6,
        border: `1px solid ${target === page ? '#141ED2' : '#D9DBE9'}`,
        background: target === page ? '#141ED2' : '#fff',
        color: target === page ? '#fff' : disabled ? '#D9DBE9' : '#4E4B66',
        fontSize: 13, cursor: disabled || typeof target !== 'number' ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        fontWeight: target === page ? 700 : 400,
      }}>{label}</button>
  );

  return (
    <div className={className} style={{
      display: 'flex', alignItems: 'center', gap: 4, ...style,
    }} {...rest}>
      {btn('‹', page - 1, page <= 1)}
      {pages.map((p, i) => p === '…'
        ? <span key={`e${i}`} style={{ width: 32, textAlign: 'center', color: '#A0A3BD', fontSize: 13 }}>…</span>
        : btn(p, p)
      )}
      {btn('›', page + 1, page >= totalPages)}
    </div>
  );
}
