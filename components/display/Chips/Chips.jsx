import React from 'react';

/* Chips — components/display/Chips (added 2026-08-26, background ladder + full-pill shape
   revised 2026-08-26). The DS's one INTERACTIVE, toggleable pill — distinct from Tag (static
   rectangular label, 4px radius, never toggles) and Badge (status pill, not clickable as a
   whole): both Chips and Badge use --radius-full (9999px, tokens/spacing.css), so the line
   between them is BEHAVIOR (clickable/toggleable/removable vs. a read-only status indicator),
   not shape — see references/components/display/chips.md and badge-tag.md.
   Modeled on Material Design 3's 4 chip types (m3.material.io/components/chips) and its state
   model (enabled/hover/focus/selected/disabled) — mapped onto this DS's own tokens per
   color-rules.md ("new/updated components must reference tokens/colors.css").
   Default (unselected) fill is --color-bg-hover, not --color-bg-surface/white — a plain white
   chip on a white FilterCard surface read as almost invisible until hovered (user-reported gap:
   "Chips có nền đậm hơn không?"). --color-bg-hover as a RESTING fill (not just a :hover state)
   already has DS precedent: Button's own `secondary` variant sits at this same tint at rest and
   escalates further on hover — Chips' hover mirrors that exact ladder, escalating to the raw
   scale --color-primary-200 (component-only fallback per color-rules.md's 2026-07-23 rule, since
   no single declared alias reads as a clear "one step up" from --color-bg-hover). Selected still
   uses --color-bg-brand (documented in color-rules.md as "solid — active/selected pills"); focus
   still uses --color-border-focus + the same 3px ring recipe as FilterCard's own inputs.
   Size (`size` prop, added 2026-08-26) follows Badge's own small/medium/large naming —
   `medium` is the default for both, matching the "size by placement" convention in
   badge-tag.md (medium = dense/inline contexts, e.g. next to a Table or FilterCard field,
   which is exactly where a Chips set lives). Values themselves are Chips' own scale, not
   Badge's literal numbers — Badge has no fixed height (a plain inline label), Chips is a
   real click target and needs enough height to stay tappable even at `small`.
   See references/components/display/chips.md for the full state table and variant rules. */
const RADIUS = 'var(--radius-full, 9999px)';

const SIZES = {
  small:  { height: 24, padding: '0 10px', paddingIcon: '0 10px 0 6px', fontSize: 11, iconBox: 14, checkSize: 12 },
  medium: { height: 32, padding: '0 14px', paddingIcon: '0 14px 0 10px', fontSize: 13, iconBox: 16, checkSize: 14 },
  large:  { height: 40, padding: '0 16px', paddingIcon: '0 16px 0 12px', fontSize: 14, iconBox: 18, checkSize: 15 },
};

function ChipCheckIcon({ fontSize }) {
  return <span style={{ fontSize, lineHeight: 1, fontWeight: 700 }}>✓</span>;
}

export function Chips({
  children, variant = 'assist', size = 'medium', icon,
  selected = false, onSelectedChange,
  onClick, onRemove,
  disabled = false, elevated = false,
  className = '', style = {}, ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const isFilter = variant === 'filter';
  const isInput = variant === 'input';
  const isSelected = isFilter && selected;
  const active = !disabled;
  const s = SIZES[size] || SIZES.medium;

  const background = isSelected
    ? 'var(--color-bg-brand, #141ED2)'
    : (active && hovered) ? 'var(--color-primary-200, #C4C6F7)' : 'var(--color-bg-hover, #F4F5FF)';
  const color = isSelected ? 'var(--color-text-inverse, #fff)' : 'var(--color-text-primary, #14142A)';
  const border = isSelected
    ? 'none'
    : `1px solid ${(active && focused) ? 'var(--color-border-focus, #141ED2)' : 'var(--color-border-default, #D9DBE9)'}`;
  const focusRing = (active && focused) ? '0 0 0 3px rgba(20,30,210,.08)' : null;
  const elevation = (elevated && !isSelected) ? 'var(--shadow-sm, 0px 2px 4px rgba(75,99,226,0.08))' : null;
  const leading = isSelected ? <ChipCheckIcon fontSize={s.checkSize} /> : icon;

  const bodyStyle = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    height: s.height, padding: leading ? s.paddingIcon : s.padding,
    borderRadius: RADIUS, border, background, color,
    fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
    fontSize: s.fontSize, fontWeight: 500, lineHeight: 1,
    boxShadow: [focusRing, elevation].filter(Boolean).join(', ') || 'none',
    transition: 'background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s',
    whiteSpace: 'nowrap', boxSizing: 'border-box',
  };

  if (isInput) {
    // Input chips represent an already-chosen value — the body itself isn't a click
    // target (Material's own spec), so it's a <span> (like Tag's own onClose pattern),
    // not a <button>: nesting a <button> for "×" inside an outer <button> would be
    // invalid HTML/a11y, hence the split between this branch and the one below.
    return (
      <span className={className} style={{ ...bodyStyle, opacity: disabled ? 0.5 : 1, cursor: 'default', ...style }} {...rest}>
        {icon && <span style={{ display: 'inline-flex', width: s.iconBox, height: s.iconBox, flexShrink: 0 }}>{icon}</span>}
        {children}
        <button type="button" disabled={disabled} onClick={() => onRemove && onRemove()} style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: s.iconBox, height: s.iconBox, marginLeft: 2, borderRadius: '50%', flexShrink: 0,
          background: 'none', border: 'none', padding: 0, color: 'currentColor',
          opacity: 0.7, fontSize: s.fontSize - 2, cursor: disabled ? 'not-allowed' : 'pointer',
        }}>✕</button>
      </span>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        if (isFilter) onSelectedChange && onSelectedChange(!selected);
        else onClick && onClick();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={className}
      style={{ ...bodyStyle, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}
      {...rest}
    >
      {leading && <span style={{ display: 'inline-flex', width: s.iconBox, height: s.iconBox, flexShrink: 0 }}>{leading}</span>}
      {children}
    </button>
  );
}

// Chips always appear in a set (Material's own guidance) — this is the shared
// flex-wrap/gap container, not a per-screen ad-hoc flex row.
export function ChipGroup({ children, className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, ...style }} {...rest}>
      {children}
    </div>
  );
}
