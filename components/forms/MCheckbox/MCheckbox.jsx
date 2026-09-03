import React from 'react';

/**
 * Material checkbox — maps to Figma [M]Checkbox.
 * Enhanced variant with explicit checked/indeterminate/hovering states.
 */
export function MCheckbox({
  checked = false, indeterminate = false, disable = false, hovering = false,
  text1 = 'Label', onChange, className = '', style = {}, ...rest
}) {
  const ref = React.useRef(null);
  const [hovered, setHovered] = React.useState(hovering);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
  const active = checked || indeterminate;
  const borderColor = active ? 'var(--color-border-focus, #141ED2)' : hovered ? 'var(--color-border-focus, #141ED2)' : disable ? 'var(--color-border-default, #D9DBE9)' : 'var(--color-neutral-500, #A0A3BD)';
  const bg = active ? 'var(--color-bg-brand, #141ED2)' : 'var(--color-bg-surface, #fff)';
  return (
    <label className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        cursor: disable ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        fontSize: 13, color: disable ? 'var(--color-text-muted, #A0A3BD)' : 'var(--color-text-body, #4E4B66)',
        userSelect: 'none', opacity: disable ? 0.5 : 1, ...style,
      }}>
      <span style={{ position: 'relative', width: 18, height: 18, flexShrink: 0 }}>
        <input ref={ref} type="checkbox" checked={checked} disabled={disable} onChange={onChange}
          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 18, height: 18, borderRadius: 4,
          border: `2px solid ${borderColor}`, background: bg,
          transition: 'all 0.15s',
          boxShadow: hovered && !disable ? '0 0 0 3px rgba(20,30,210,0.1)' : 'none',
        }}>
          {checked && !indeterminate && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="var(--color-icon-inverse, #fff)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {indeterminate && <span style={{ width: 8, height: 2, background: 'var(--color-icon-inverse, #fff)', borderRadius: 1 }} />}
        </span>
      </span>
      {text1}
    </label>
  );
}
