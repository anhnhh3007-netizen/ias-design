import React from 'react';
/** Icon: ArchiveStyleRound — Material Symbols Outlined variable font. */
export function ArchiveStyleRound({ size = 20, color = 'currentColor', className = '', style = {}, ...rest }) {
  const d = typeof window !== 'undefined' && window.iconData && window.iconData['ArchiveStyleRound'];
  if (d) return <svg viewBox={d.viewBox} width={size} height={size} fill={color} className={className} style={style} dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />;
  const ligature = 'Archive'.replace(/([A-Z])/g,s=>'_'+s.toLowerCase()).replace(/^_/,'').replace(/_+/g,'_');
  return <span className={className} style={{ fontFamily:"'Material Symbols Outlined'", fontVariationSettings:"'FILL' 0,'wght' 300,'GRAD' 0,'opsz' 24", fontSize:size, color, lineHeight:1, display:'inline-block', userSelect:'none', ...style }} {...rest}>{ligature}</span>;
}
