import React from 'react';

/**
 * HCM Icon — renders via Material Symbols Outlined variable font (online).
 * SVG override: add an entry to assets/icons/icon-data.js with the same key.
 *
 * @param {string}  name   — CamelCase icon name, optionally ending with
 *                           StyleFilled|StyleOutlined|StyleRound|StyleSharp|StyleTwoTone
 * @param {number}  size   — pixel size (default 20)
 * @param {string}  color  — CSS color (default 'currentColor')
 */
export function Icon({ name = '', size = 20, color = 'currentColor', className = '', style = {}, ...rest }) {
  // ── SVG override (Figma-extracted icon-data.js) ──────────────────────────
  const d = typeof window !== 'undefined' && window.iconData && window.iconData[name];
  if (d) {
    return (
      <svg
        viewBox={d.viewBox}
        width={size}
        height={size}
        fill={color}
        className={className}
        style={style}
        dangerouslySetInnerHTML={{ __html: d.body }}
        {...rest}
      />
    );
  }

  // ── Material Symbols Outlined (online) ───────────────────────────────────
  // Strip "Style*" suffix to get the base name, then convert to snake_case
  const base = name.replace(/Style(Filled|Outlined|Round|Sharp|TwoTone)$/, '');
  const ligature = base
    .replace(/([A-Z])/g, s => '_' + s.toLowerCase())
    .replace(/^_/, '')
    .replace(/_+/g, '_');

  // Map style suffix → FILL + wght variation axes
  const fill   = name.endsWith('StyleFilled')  ? 1 : 0;
  const wght   = name.endsWith('StyleRound')   ? 300
               : name.endsWith('StyleSharp')   ? 600
               : name.endsWith('StyleTwoTone') ? 200
               : 400;

  return (
    <span
      className={className}
      style={{
        fontFamily: "'Material Symbols Outlined'",
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${wght}, 'GRAD' 0, 'opsz' ${Math.min(48, Math.max(20, size))}`,
        fontSize: size,
        color,
        lineHeight: 1,
        display: 'inline-block',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      {ligature}
    </span>
  );
}

export default Icon;
