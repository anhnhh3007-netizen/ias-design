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
 * AppSidebar — dark navy HCM sidebar.
 * Mini (64px) by default; expands to `expandedWidth` on hover.
 * Supports a nested `items` tree with collapsible groups.
 *
 * items[]:  { key, icon, label, children?: items[] }
 */
export function AppSidebar({
  items = [],
  activeKey,
  onSelect,
  logo,
  expandedWidth = 248,
  className = '',
  style = {},
  ...rest
}) {
  const [hovered, setHovered]   = React.useState(false);
  const [openGroups, setOpenGroups] = React.useState({});
  const [openNodes,  setOpenNodes]  = React.useState({});

  const expanded = hovered;

  const toggleGroup = (key) =>
    setOpenGroups(s => ({ ...s, [key]: !s[key] }));

  const toggleNode = (key) =>
    setOpenNodes(s => ({ ...s, [key]: !s[key] }));

  // ── Recursive tree renderer ─────────────────────────────────────────────
  const renderTree = (nodes, depth = 0) =>
    nodes.map(node => {
      const hasChildren = node.children && node.children.length > 0;
      const nodeOpen    = !!openNodes[node.key];
      const isActive    = node.key === activeKey;
      const iconName    = !hasChildren ? 'fiber_manual_record' : nodeOpen ? 'remove' : 'add';
      const iconSz      = !hasChildren ? 9 : depth > 0 ? 14 : 16;
      const color       = isActive ? '#fff' : !hasChildren ? '#8B8FBD' : '#CBD0E8';
      const [rowHov, setRowHov] = React.useState ? [false, () => {}] : [false, () => {}];

      return React.createElement('div', { key: node.key },
        React.createElement('div', {
          onClick: hasChildren ? () => toggleNode(node.key) : () => onSelect && onSelect(node.key),
          style: {
            display: 'flex', alignItems: 'center', gap: 8,
            padding: `8px 8px 8px ${6 + depth * 14}px`, borderRadius: 6, cursor: 'pointer',
            color, fontSize: depth > 0 ? 12 : 13,
            fontWeight: (isActive || nodeOpen) && hasChildren ? 600 : 500,
            transition: 'background 150ms, color 150ms',
            fontFamily: "var(--font-family-body,'Plus Jakarta Sans',sans-serif)",
            whiteSpace: 'nowrap', userSelect: 'none', marginBottom: 1,
          },
          onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)',
          onMouseLeave: e => e.currentTarget.style.background = 'transparent',
        },
          React.createElement(MSym, { name: iconName, size: iconSz, fill: !hasChildren ? 1 : 0, wght: !hasChildren ? 400 : 600 }),
          React.createElement('span', null, node.label)
        ),
        hasChildren && nodeOpen && React.createElement('div', {
          style: { paddingLeft: 8, overflow: 'hidden' }
        }, renderTree(node.children, depth + 1))
      );
    });

  // ── Top-level nav item ──────────────────────────────────────────────────
  const NavItem = ({ item }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isGroupOpen = !!openGroups[item.key];
    const isActive    = item.key === activeKey || (hasChildren && item.children.some(c => c.key === activeKey));
    const [nh, setNh] = React.useState(false);

    return React.createElement('div', { style: { marginBottom: 2 } },
      React.createElement('div', {
        role: 'button', tabIndex: 0,
        onClick: hasChildren ? () => toggleGroup(item.key) : () => onSelect && onSelect(item.key),
        onMouseEnter: () => setNh(true),
        onMouseLeave: () => setNh(false),
        style: {
          display: 'flex', alignItems: 'center', gap: 10, padding: '10px',
          borderRadius: 8, cursor: 'pointer',
          color: isActive ? '#fff' : nh ? '#fff' : '#CBD0E8',
          background: isActive ? 'rgba(255,255,255,0.10)' : nh ? 'rgba(255,255,255,0.07)' : 'transparent',
          fontFamily: "var(--font-family-body,'Plus Jakarta Sans',sans-serif)",
          fontSize: 13, fontWeight: isActive ? 600 : 500,
          whiteSpace: 'nowrap', transition: 'background 150ms, color 150ms', userSelect: 'none',
        }
      },
        item.icon && React.createElement(MSym, { name: item.icon, size: 22, fill: isActive ? 1 : 0, wght: 400 }),
        expanded && React.createElement('span', { style: { flex: 1, fontSize: 13 } }, item.label),
        expanded && hasChildren && React.createElement(MSym, {
          name: 'arrow_drop_down', size: 18, fill: 0, wght: 400,
          style: { transform: isGroupOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }
        })
      ),
      hasChildren && isGroupOpen && expanded && React.createElement('div', {
        style: { paddingLeft: 8 }
      }, renderTree(item.children, 0))
    );
  };

  return React.createElement('nav', {
    className,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      width: expanded ? expandedWidth : 64, minHeight: '100vh',
      background: '#0D0D2B', display: 'flex', flexDirection: 'column',
      transition: 'width 280ms cubic-bezier(.4,0,.2,1)',
      overflow: 'hidden', flexShrink: 0,
      fontFamily: "var(--font-family-body,'Plus Jakarta Sans',sans-serif)",
      ...style,
    },
    ...rest
  },
    // Brand header
    React.createElement('div', {
      style: {
        display: 'flex', alignItems: 'center', gap: 8, padding: '18px 17px',
        minHeight: 64, flexShrink: 0, whiteSpace: 'nowrap',
      }
    },
      logo || React.createElement('svg', { width: 30, height: 30, viewBox: '0 0 30 30', fill: 'none', style: { flexShrink: 0, minWidth: 30 } },
        React.createElement('path', { d: 'M15 1.5l2.9 7.4L25.9 7l-3.8 7.2 6.4 4.3-6.4 4.3 3.8 7.2-8-1.9L15 28.5l-2.9-7.4L4.1 23l3.8-7.2L1.5 15l6.4-4.3L4.1 7l8 1.9L15 1.5z', fill: '#E5052A' })
      ),
      expanded && React.createElement('span', {
        style: { color: '#fff', fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap' }
      }, 'MB ', React.createElement('span', { style: { color: '#8B8FBD', fontWeight: 400 } }, '| HCM'))
    ),
    // Search
    React.createElement('div', { style: { padding: '0 10px 10px', flexShrink: 0 } },
      React.createElement('div', {
        style: {
          display: 'flex', alignItems: 'center', gap: 8, background: '#1C1C42',
          borderRadius: 8, padding: '8px 10px', cursor: 'text',
        }
      },
        React.createElement(MSym, { name: 'search', size: 18, fill: 0, wght: 400, style: { color: '#8B8FBD' } }),
        expanded && React.createElement('span', { style: { color: '#8B8FBD', fontSize: 13 } }, 'Tìm kiếm....')
      )
    ),
    // Nav items
    React.createElement('div', {
      style: { flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '0 6px 16px' }
    },
      items.map(item => React.createElement(NavItem, { key: item.key, item }))
    )
  );
}
