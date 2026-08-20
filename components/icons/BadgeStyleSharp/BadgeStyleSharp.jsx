import React from 'react';
/** Icon: BadgeStyleSharp — Material Symbols Outlined variable font. */
export function BadgeStyleSharp({ size = 20, color = 'currentColor', className = '', style = {}, ...rest }) {
  const d = typeof window !== 'undefined' && window.iconData && window.iconData['BadgeStyleSharp'];
  if (d) return <svg viewBox={d.viewBox} width={size} height={size} fill={color} className={className} style={style} dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />;
  const ligature = 'Badge'.replace(/([A-Z])/g,s=>'_'+s.toLowerCase()).replace(/^_/,'').replace(/_+/g,'_');
  return <span className={className} style={{ fontFamily:"'Material Symbols Outlined'", fontVariationSettings:"'FILL' 0,'wght' 600,'GRAD' 0,'opsz' 24", fontSize:size, color, lineHeight:1, display:'inline-block', userSelect:'none', ...style }} {...rest}>{ligature}</span>;
}
