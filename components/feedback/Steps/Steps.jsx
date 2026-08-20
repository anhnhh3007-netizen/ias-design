import React from 'react';

export function Steps({ steps = [], current = 0, className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{
      display: 'flex', alignItems: 'center',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      {steps.map((step, i) => {
        const done   = i < current;
        const active = i === current;
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700,
                background: done ? '#00BA88' : active ? '#141ED2' : '#EDF2F7',
                color: done || active ? '#fff' : '#A0A3BD',
              }}>
                {done ? '✓' : i + 1}
              </span>
              <div>
                <div style={{ fontSize: 12, fontWeight: active ? 700 : 500,
                  color: active ? '#141ED2' : done ? '#14142A' : '#A0A3BD' }}>
                  {step.title}
                </div>
                {step.description && (
                  <div style={{ fontSize: 11, color: '#A0A3BD', marginTop: 1 }}>{step.description}</div>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: 2, margin: '0 12px',
                background: i < current ? '#00BA88' : '#EDF2F7',
                minWidth: 24,
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
