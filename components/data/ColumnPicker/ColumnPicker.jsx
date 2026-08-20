import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

const SEARCH_THRESHOLD = 10;
const PANEL_WIDTH = 260;

export function ColumnPicker({
  open, triggerRef, options, visibleKeys,
  onVisibleChange, onClose,
  searchValue = '', onSearchChange,
  className = '', style = {}, ...rest
}) {
  const rootRef = useRef(null);
  const [pos, setPos] = useState(null);

  // position: fixed, computed from the trigger's own rect — not `position: absolute`
  // anchored inside the trigger's parent. ToolbarSimple's trailing cluster needs
  // `overflow-x: auto` on narrow viewports (see toolbarsimple.md), which silently
  // clips an absolutely-positioned descendant instead of letting it overlay the
  // Table below — same reason Table's own row-action menu uses this technique.
  useLayoutEffect(() => {
    if (!open || !triggerRef || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 6, left: rect.right - PANEL_WIDTH });
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

  const showSearch = options.length > SEARCH_THRESHOLD;
  const filtered = showSearch && searchValue
    ? options.filter((o) => o.label.toLowerCase().includes(searchValue.toLowerCase()))
    : options;

  const allChecked = visibleKeys.length === options.length;
  const someChecked = visibleKeys.length > 0 && !allChecked;

  const toggleOne = (key) => {
    const next = visibleKeys.includes(key) ? visibleKeys.filter((k) => k !== key) : [...visibleKeys, key];
    onVisibleChange(next);
  };
  const toggleAll = () => {
    onVisibleChange(allChecked ? [] : options.map((o) => o.key));
  };

  const CheckRow = ({ checked, indeterminate, label, onChange, bold }) => (
    <label
      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 6, cursor: 'pointer' }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-bg-hover)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
    >
      <span style={{ position: 'relative', width: 18, height: 18, flexShrink: 0 }}>
        <input
          type="checkbox"
          checked={checked}
          ref={(el) => { if (el) el.indeterminate = !!indeterminate; }}
          onChange={onChange}
          style={{ position: 'absolute', opacity: 0, width: 18, height: 18, margin: 0, cursor: 'pointer' }}
        />
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: 4,
          border: checked || indeterminate ? 'none' : '2px solid var(--color-text-muted)',
          background: checked
            ? "var(--color-bg-brand) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 10 8' fill='none'%3E%3Cpath d='M1 4L3.5 6.5L9 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") no-repeat center"
            : indeterminate
            ? "var(--color-bg-brand) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2'%3E%3Crect width='10' height='2' rx='1' fill='white'/%3E%3C/svg%3E\") no-repeat center"
            : 'var(--color-bg-surface)',
          pointerEvents: 'none',
        }} />
      </span>
      {/* .hcm-subtitle2 may only be colored --color-text-primary or --color-text-brand (color-rules.md) —
          "Chọn tất cả" uses --color-text-primary (neutral), the ordinary rows use .hcm-body2 with
          --color-text-body since that restriction doesn't apply to Body2. */}
      <span
        className={bold ? 'hcm-subtitle2' : 'hcm-body2'}
        style={{ color: bold ? 'var(--color-text-primary)' : 'var(--color-text-body)' }}
      >{label}</span>
    </label>
  );

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        position: 'fixed', top: pos.top, left: pos.left, width: PANEL_WIDTH,
        background: 'var(--color-bg-surface)', borderRadius: 8,
        boxShadow: '0 8px 24px rgba(75,99,226,.12)', border: '1px solid var(--color-border-default)',
        zIndex: 150, overflow: 'hidden', fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        ...style,
      }}
      {...rest}
    >
      {showSearch && (
        <div style={{ position: 'relative', padding: 10, borderBottom: '1px solid var(--color-border-default)' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-icon-muted)" style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            className="hcm-body2"
            value={searchValue}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            placeholder="Nhập"
            style={{
              width: '100%', height: 36, border: '1px solid var(--color-border-default)', borderRadius: 6,
              background: 'var(--color-bg-surface)', padding: '0 12px 0 34px', fontFamily: 'inherit',
              color: 'var(--color-text-body)', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>
      )}

      <div style={{ padding: 4, borderBottom: '1px solid var(--color-border-default)' }}>
        <CheckRow checked={allChecked} indeterminate={someChecked} label="Chọn tất cả" onChange={toggleAll} bold />
      </div>

      <div style={{ maxHeight: 300, overflowY: 'auto', padding: 4 }}>
        {filtered.map((opt) => (
          <CheckRow key={opt.key} checked={visibleKeys.includes(opt.key)} label={opt.label} onChange={() => toggleOne(opt.key)} />
        ))}
      </div>
    </div>
  );
}
