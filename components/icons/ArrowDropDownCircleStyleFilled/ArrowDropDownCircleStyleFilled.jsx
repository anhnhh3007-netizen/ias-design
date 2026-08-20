import React from 'react';

/** Icon: ArrowDropDownCircleStyleFilled — Material Symbols Outlined.
 *  SVG override: add 'ArrowDropDownCircleStyleFilled' to assets/icons/icon-data.js.
 */
export function ArrowDropDownCircleStyleFilled({ size = 20, color = 'currentColor', className = '', style = {}, ...rest }) {
  const d = typeof window !== 'undefined' && window.iconData && window.iconData['ArrowDropDownCircleStyleFilled'];
  if (d) {
    return (
      <svg viewBox={d.viewBox} width={size} height={size} fill={color}
        className={className} style={style}
        dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />
    );
  }
  const ligature = 'ArrowDropDownCircle'
    .replace(/([A-Z])/g, s => '_' + s.toLowerCase())
    .replace(/^_/, '').replace(/_+/g, '_');
  return (
    <span className={className}
      style={{
        fontFamily: "'Material Symbols Outlined'",
        fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize: size, color, lineHeight: 1, display: 'inline-block', userSelect: 'none',
        ...style,
      }} {...rest}>
      {ligature}
    </span>
  );
}
