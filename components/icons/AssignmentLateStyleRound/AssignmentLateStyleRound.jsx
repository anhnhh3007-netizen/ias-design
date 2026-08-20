import React from 'react';
/** Icon: AssignmentLateStyleRound — Material Symbols Outlined variable font. */
export function AssignmentLateStyleRound({ size = 20, color = 'currentColor', className = '', style = {}, ...rest }) {
  const d = typeof window !== 'undefined' && window.iconData && window.iconData['AssignmentLateStyleRound'];
  if (d) return <svg viewBox={d.viewBox} width={size} height={size} fill={color} className={className} style={style} dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />;
  const ligature = 'AssignmentLate'.replace(/([A-Z])/g,s=>'_'+s.toLowerCase()).replace(/^_/,'').replace(/_+/g,'_');
  return <span className={className} style={{ fontFamily:"'Material Symbols Outlined'", fontVariationSettings:"'FILL' 0,'wght' 300,'GRAD' 0,'opsz' 24", fontSize:size, color, lineHeight:1, display:'inline-block', userSelect:'none', ...style }} {...rest}>{ligature}</span>;
}
