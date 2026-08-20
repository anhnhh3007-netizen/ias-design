import React from 'react';

/** Icon: MapsHomeWorkStyleSharp — Material Symbols Outlined.
 *  SVG override: add 'MapsHomeWorkStyleSharp' to assets/icons/icon-data.js.
 */
export function MapsHomeWorkStyleSharp({ size = 20, color = 'currentColor', className = '', style = {}, ...rest }) {
  const d = typeof window !== 'undefined' && window.iconData && window.iconData['MapsHomeWorkStyleSharp'];
  if (d) {
    return (
      <svg viewBox={d.viewBox} width={size} height={size} fill={color}
        className={className} style={style}
        dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />
    );
  }
  const ligature = 'MapsHomeWork'
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
