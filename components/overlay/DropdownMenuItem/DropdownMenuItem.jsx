import React from 'react';

/**
 * Dropdown menu item — maps to Figma _components/dropdown/menu-item.
 * Supports icon, arrow, hover, selected, danger, disabled, checkable, multiSelect states.
 */
export function DropdownMenuItem({
  label = 'menu item', icon, arrow = false, hover = false,
  selected = false, danger = false, disabled = false,
  checkable = false, checked = false, multiSelect = false,
  onClick, className = '', style = {}, ...rest
}) {
  const [hovered, setHovered] = React.useState(hover);
  const fg = danger ? 'var(--color-error-500, #EB2D4B)' : disabled ? 'var(--color-text-muted, #A0A3BD)' : selected ? 'var(--color-text-brand, #141ED2)' : 'var(--color-text-body, #4E4B66)';
  const bg = selected ? 'rgba(20,30,210,0.08)' : hovered && !disabled ? 'var(--color-bg-hover, #F4F5FF)' : 'transparent';
  return (
    <button
      disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        width: '100%', padding: '9px 14px', background: bg,
        border: 'none', textAlign: 'left', cursor: disabled ? 'not-allowed' : 'pointer',
        color: fg, fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        fontSize: 13, fontWeight: selected ? 600 : 500,
        transition: 'background 0.1s', ...style,
      }} {...rest}>
      {(checkable || multiSelect) && (
        <span style={{
          width: multiSelect ? 16 : 16, height: 16, borderRadius: multiSelect ? 3 : '50%',
          border: `2px solid ${checked ? 'var(--color-border-focus, #141ED2)' : 'var(--color-border-default, #D9DBE9)'}`,
          background: checked ? 'var(--color-bg-brand, #141ED2)' : 'var(--color-neutral-0, #fff)', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {checked && <span style={{ width: multiSelect ? 8 : 6, height: multiSelect ? 2 : 6, background: 'var(--color-neutral-0, #fff)', borderRadius: multiSelect ? 1 : '50%', display: 'block' }} />}
        </span>
      )}
      {icon && <span style={{ display: 'flex', color: 'currentColor', flexShrink: 0 }}>{icon}</span>}
      <span style={{ flex: 1 }}>{label}</span>
      {arrow && <span style={{ color: 'var(--color-text-muted, #A0A3BD)', fontSize: 12, flexShrink: 0 }}>›</span>}
    </button>
  );
}
