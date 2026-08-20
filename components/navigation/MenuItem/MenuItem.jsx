import React from 'react';

const MSym = ({ name, size = 20, fill = 0, wght = 400, style = {} }) =>
  React.createElement('span', {
    style: {
      fontFamily: "'Material Symbols Outlined'", fontStyle: 'normal',
      userSelect: 'none', lineHeight: 1, display: 'inline-block',
      fontSize: size, flexShrink: 0,
      fontVariationSettings: `'FILL' ${fill},'wght' ${wght},'GRAD' 0,'opsz' ${size}`,
      ...style,
    }
  }, name);

/**
 * MenuItem — three variants:
 *  'nav'    — dark sidebar nav item (icon + label)
 *  'tree'   — collapsible tree node with +/−/• indicator
 *  'action' — light dropdown / context menu item
 */
export function MenuItem({
  variant = 'action',
  label = '',
  icon = '',
  active = false,
  expanded = false,
  leaf = false,
  depth = 0,
  disabled = false,
  danger = false,
  arrow = false,
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const base = { fontFamily: "var(--font-family-body,'Plus Jakarta Sans',sans-serif)", userSelect: 'none' };
  const hProps = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };

  // ── NAV ────────────────────────────────────────────────────────────────
  if (variant === 'nav') {
    return (
      <div role="button" tabIndex={0} onClick={onClick} className={className}
        {...hProps}
        style={{
          ...base, display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px', borderRadius: 8, cursor: 'pointer',
          color: active ? '#fff' : hovered ? '#fff' : '#CBD0E8',
          background: active ? 'rgba(255,255,255,0.10)'
            : hovered ? 'rgba(255,255,255,0.07)' : 'transparent',
          fontSize: 13, fontWeight: active ? 600 : 500,
          whiteSpace: 'nowrap', transition: 'background 150ms, color 150ms',
          ...style,
        }} {...rest}>
        {icon && <MSym name={icon} size={22} fill={active ? 1 : 0} wght={400} />}
        <span>{label}</span>
      </div>
    );
  }

  // ── TREE ───────────────────────────────────────────────────────────────
  if (variant === 'tree') {
    const iconName = leaf ? 'fiber_manual_record' : expanded ? 'remove' : 'add';
    const iconSz   = leaf ? 9 : depth > 0 ? 14 : 16;
    const color    = active ? '#fff' : leaf ? '#8B8FBD' : '#CBD0E8';
    return (
      <div role="button" tabIndex={0} onClick={onClick} className={className}
        {...hProps}
        style={{
          ...base, display: 'flex', alignItems: 'center', gap: 8,
          padding: `8px 8px 8px ${6 + depth * 14}px`, borderRadius: 6, cursor: 'pointer',
          color, background: hovered ? 'rgba(255,255,255,0.06)' : 'transparent',
          fontSize: depth > 0 ? 12 : 13, fontWeight: (active || expanded) && !leaf ? 600 : 500,
          whiteSpace: 'nowrap', transition: 'background 150ms, color 150ms',
          ...style,
        }} {...rest}>
        <MSym name={iconName} size={iconSz}
          fill={leaf ? 1 : 0} wght={leaf ? 400 : 600} />
        <span>{label}</span>
      </div>
    );
  }

  // ── ACTION ─────────────────────────────────────────────────────────────
  return (
    <button disabled={disabled} onClick={onClick} className={className}
      {...hProps}
      style={{
        ...base, display: 'flex', alignItems: 'center', gap: 8,
        width: '100%', padding: '9px 14px', border: 'none', textAlign: 'left',
        borderRadius: 6, position: 'relative',
        background: active ? 'rgba(20,30,210,0.08)' : hovered && !disabled ? '#F4F5FF' : 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: danger ? '#EB2D4B' : disabled ? '#A0A3BD' : active ? '#141ED2' : '#4E4B66',
        fontSize: 13, fontWeight: active ? 600 : 500,
        transition: 'background 150ms', ...style,
      }} {...rest}>
      {active && <span style={{
        position: 'absolute', left: 0, top: 4, bottom: 4,
        width: 3, background: '#141ED2', borderRadius: '0 3px 3px 0',
      }} />}
      {icon && <MSym name={icon} size={18} fill={0} wght={400} />}
      <span style={{ flex: 1 }}>{label}</span>
      {arrow && <span style={{ color: '#A0A3BD', fontSize: 14, lineHeight: 1 }}>›</span>}
    </button>
  );
}
