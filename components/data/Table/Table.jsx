import React from 'react';

/*
 * Colors resolve to var(--color-*) from tokens/colors.css (color-rules.md,
 * "new/updated components must use tokens/colors.css" — 2026-07-23). The row
 * divider (`--color-neutral-200` / #EDF2F7) is a raw scale token, not a
 * Semantic Alias — it's Table's own subtler divider tone, distinct from
 * `--color-border-default` (#D9DBE9, used for the header's bottom border).
 */

function RowCheckbox({ checked, indeterminate, disabled, onToggle }) {
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);

  return (
    <span
      onClick={(e) => { e.stopPropagation(); if (!disabled) onToggle(); }}
      style={{ position: 'relative', width: 18, height: 18, display: 'inline-flex', cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <input
        ref={ref} type="checkbox" checked={checked} disabled={disabled} readOnly
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 18, height: 18, borderRadius: 4,
        border: `2px solid ${checked || indeterminate ? 'var(--color-bg-brand)' : disabled ? 'var(--color-border-default)' : 'var(--color-icon-muted)'}`,
        background: checked || indeterminate ? 'var(--color-bg-brand)' : 'var(--color-bg-surface)',
        transition: 'all 0.15s',
      }}>
        {checked && !indeterminate && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="var(--color-text-inverse)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {indeterminate && <span style={{ width: 8, height: 2, background: 'var(--color-text-inverse)', borderRadius: 1 }} />}
      </span>
    </span>
  );
}

export function Table({ columns = [], data = [], rowKey = 'id', onRowClick,
  rowSelection, loading = false, emptyText = 'Không có dữ liệu',
  className = '', style = {}, ...rest }) {
  const selectedKeys = rowSelection ? (rowSelection.selectedRowKeys || []) : [];
  const selectableRows = data.filter(row => !(rowSelection?.getCheckboxProps?.(row)?.disabled));
  const allSelected = selectableRows.length > 0 && selectableRows.every(row => selectedKeys.includes(row[rowKey]));
  const someSelected = !allSelected && selectableRows.some(row => selectedKeys.includes(row[rowKey]));
  const colSpan = columns.length + (rowSelection ? 1 : 0);

  const toggleAll = () => {
    if (!rowSelection) return;
    if (allSelected) rowSelection.onChange([], []);
    else rowSelection.onChange(selectableRows.map(row => row[rowKey]), selectableRows);
  };
  const toggleRow = (row) => {
    if (!rowSelection) return;
    const key = row[rowKey];
    const next = selectedKeys.includes(key) ? selectedKeys.filter(k => k !== key) : [...selectedKeys, key];
    rowSelection.onChange(next, data.filter(r => next.includes(r[rowKey])));
  };

  return (
    <div className={className} style={{
      background: 'var(--color-bg-surface)', borderRadius: 12, overflow: 'hidden',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--color-bg-page)' }}>
              {rowSelection && (
                <th style={{ padding: '12px 16px', width: 44, borderBottom: '1px solid var(--color-border-default)' }}>
                  <RowCheckbox checked={allSelected} indeterminate={someSelected} onToggle={toggleAll} />
                </th>
              )}
              {columns.map((col, i) => (
                <th key={col.key || i} style={{
                  padding: '12px 16px', textAlign: col.align || 'left',
                  fontSize: 11, fontWeight: 700, color: 'var(--color-text-secondary)',
                  letterSpacing: '0.4px', textTransform: 'uppercase',
                  borderBottom: '1px solid var(--color-border-default)',
                  whiteSpace: 'nowrap', width: col.width,
                }}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={colSpan} style={{ padding: 40, textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, color: 'var(--color-icon-muted)', fontSize: 13 }}>
                  <span style={{ width: 20, height: 20, border: '2px solid var(--color-primary-100)', borderTopColor: 'var(--color-bg-brand)', borderRadius: '50%', animation: 'hcm-spin 0.7s linear infinite', display: 'inline-block' }} />
                  Đang tải...
                </div>
              </td></tr>
            ) : data.length === 0 ? (
              <tr><td colSpan={colSpan} style={{ padding: 48, textAlign: 'center', color: 'var(--color-icon-muted)', fontSize: 13 }}>{emptyText}</td></tr>
            ) : data.map((row, ri) => {
              const key = row[rowKey] ?? ri;
              const rowDisabled = !!rowSelection?.getCheckboxProps?.(row)?.disabled;
              const border = ri < data.length - 1 ? '1px solid var(--color-neutral-200)' : 'none';
              return (
                <tr key={key}
                  onClick={() => onRowClick && onRowClick(row)}
                  style={{ cursor: onRowClick ? 'pointer' : 'default', transition: 'background 0.1s' }}
                  onMouseEnter={e => { if (onRowClick) e.currentTarget.style.background = 'var(--color-bg-hover)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; }}>
                  {rowSelection && (
                    <td style={{ padding: '13px 16px', borderBottom: border }}>
                      <RowCheckbox checked={selectedKeys.includes(key)} disabled={rowDisabled} onToggle={() => toggleRow(row)} />
                    </td>
                  )}
                  {columns.map((col, ci) => (
                    <td key={col.key || ci} style={{
                      padding: '13px 16px', fontSize: 13, color: 'var(--color-text-body)',
                      borderBottom: border,
                      textAlign: col.align || 'left',
                    }}>
                      {col.render ? col.render(row[col.dataIndex], row, ri) : row[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
