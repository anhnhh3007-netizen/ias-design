import React from 'react';

export function Breadcrumb({ items = [], separator = '›', className = '', style = {}, ...rest }) {
  return (
    <nav aria-label="breadcrumb" className={className} style={{
      display: 'flex', alignItems: 'center', gap: 6,
      fontSize: 12, flexWrap: 'wrap',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ color: '#D9DBE9', userSelect: 'none' }}>{separator}</span>}
            {isLast ? (
              <span style={{ color: '#6E7191', fontWeight: 500 }}>{item.label}</span>
            ) : (
              <a href={item.href || '#'} onClick={item.onClick}
                style={{ color: '#141ED2', textDecoration: 'none', fontWeight: 500,
                  cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
