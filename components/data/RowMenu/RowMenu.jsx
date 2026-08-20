import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

// Suggested order when several canonical actions apply to the same row — not a
// required set. A row only supplies whichever of these (or screen-specific keys)
// actually apply to its current status; RowMenu drops the rest and sorts what's left.
const CANONICAL_ORDER = ['view', 'edit', 'submit', 'history', 'delete'];
const CANONICAL_LABELS = {
  view: 'Xem chi tiết',
  edit: 'Chỉnh sửa',
  submit: 'Gửi duyệt',
  history: 'Lịch sử thay đổi',
  delete: 'Xóa',
};
const PANEL_WIDTH = 190;

function sortActions(actions) {
  const rank = (a) => {
    const i = CANONICAL_ORDER.indexOf(a.key);
    return i === -1 ? CANONICAL_ORDER.length : i;
  };
  const normal = actions.filter((a) => !a.danger).sort((a, b) => rank(a) - rank(b));
  const danger = actions.filter((a) => a.danger);
  return [...normal, ...danger];
}

export function RowMenu({ open, triggerRef, actions, onClose, className = '', style = {}, ...rest }) {
  const rootRef = useRef(null);
  const [pos, setPos] = useState(null);

  // position: fixed, computed from the trigger's own rect — not `position: absolute`
  // anchored inside the trigger's parent. Same reasoning as ColumnPicker: a table's
  // trailing action column frequently sits inside an `overflow-x: auto` wrapper,
  // which would silently clip an absolutely-positioned descendant.
  useLayoutEffect(() => {
    if (!open || !triggerRef || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 6, left: Math.max(8, rect.right - PANEL_WIDTH) });
  }, [open, triggerRef]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target) && !(triggerRef && triggerRef.current && triggerRef.current.contains(e.target))) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose, triggerRef]);

  if (!open || !pos) return null;

  const sorted = sortActions(actions);

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        position: 'fixed', top: pos.top, left: pos.left, minWidth: PANEL_WIDTH,
        background: 'var(--color-bg-surface, #fff)', borderRadius: 8,
        border: '1px solid var(--color-border-default, #D9DBE9)',
        boxShadow: '0 8px 24px rgba(75,99,226,.12)', padding: 4, zIndex: 200,
        fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        ...style,
      }}
      {...rest}
    >
      {sorted.map((a) => (
        <button
          key={a.key}
          disabled={a.disabled}
          onClick={() => { if (!a.disabled) { onClose(); a.onClick(); } }}
          onMouseEnter={(e) => { if (!a.disabled) e.currentTarget.style.background = 'var(--color-bg-hover, #F4F5FF)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          style={{
            display: 'flex', alignItems: 'center', width: '100%',
            padding: '9px 10px', borderRadius: 6, border: 'none', background: 'transparent',
            textAlign: 'left', cursor: a.disabled ? 'not-allowed' : 'pointer',
            fontSize: 13, fontWeight: 500,
            color: a.disabled ? 'var(--color-text-muted, #A0A3BD)'
              : a.danger ? 'var(--color-text-error, #C30052)' : 'var(--color-text-body, #4E4B66)',
          }}
        >
          {a.label || CANONICAL_LABELS[a.key] || a.key}
        </button>
      ))}
    </div>
  );
}
