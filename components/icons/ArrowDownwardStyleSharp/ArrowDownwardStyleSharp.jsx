import React from 'react';

/** Icon: ArrowDownwardStyleSharp — Material Symbols Outlined.
 *  SVG override: add 'ArrowDownwardStyleSharp' to assets/icons/icon-data.js.
 */
export function ArrowDownwardStyleSharp({ size = 20, color = 'currentColor', className = '', style = {}, ...rest }) {
  const d = typeof window !== 'undefined' && window.iconData && window.iconData['ArrowDownwardStyleSharp'];
  if (d) {
    return (
      <svg viewBox={d.viewBox} width={size} height={size} fill={color}
        className={className} style={style}
        dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />
    );
  }
  const ligature = 'ArrowDownward'
    .replace(/([A-Z])/g, s => '_' + s.toLowerCase())
    .replace(/^_/, '').replace(/_+/g, '_');
  return (
    <span className={className}
      style={{
        fontFamily: "'Material Symbols Outlined'",
        fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 24",
        fontSize: size, color, lineHeight: 1, display: 'inline-block', userSelect: 'none',
        ...style,
      }} {...rest}>
      {ligature}
    </span>
  );
}
