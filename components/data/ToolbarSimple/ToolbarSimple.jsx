import React from 'react';

/*
 * Colors + button sizing synced 2026-07-23 with components/forms/Button
 * (Figma IDS_WEB node 4901:33217) and tokens/colors.css — "Tìm kiếm" is
 * `primary`, "Tìm kiếm nâng cao" is `outline` (not the old `ghost`), both
 * at medium height (40px), matching the FilterCard action row and every
 * other synced template (see DanhSachChuongTrinh.dc.html).
 */

export function ToolbarSimple({
  searchValue = '', searchPlaceholder = 'Tìm kiếm', onSearchChange, onSearch,
  onAdvancedSearch, advancedSearchLabel = 'Tìm kiếm nâng cao',
  loading = false, extraActions,
  selectedCount = 0, selectedLabel = (n) => `Đã chọn ${n}`, selectionActions,
  className = '', style = {}, ...rest
}) {
  const selecting = selectedCount > 0;

  return (
    <div className={className} style={{
      display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: 320, flexShrink: 0 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-icon-muted)" style={{ position: 'absolute', left: 10, pointerEvents: 'none' }}>
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          value={searchValue}
          placeholder={searchPlaceholder}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          style={{
            width: '100%', height: 40, border: '1px solid var(--color-border-default)', borderRadius: 8, background: 'var(--color-bg-surface)',
            padding: '0 12px 0 34px', fontSize: 13, fontFamily: 'inherit', color: 'var(--color-text-body)', outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>
      <button
        type="button"
        disabled={loading}
        onClick={onSearch}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 40, padding: '0 16px',
          borderRadius: 8, fontSize: 14, fontWeight: 'var(--font-weight-semibold, 600)', fontFamily: 'inherit', border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          background: loading ? 'var(--color-primary-200)' : 'var(--color-bg-brand)',
          color: loading ? 'var(--color-text-primary)' : 'var(--color-text-inverse)',
          whiteSpace: 'nowrap',
        }}
      >
        {loading ? (
          <span style={{
            width: 14, height: 14, border: '2px solid rgba(255,255,255,.3)', borderTopColor: 'var(--color-text-inverse)',
            borderRadius: '50%', animation: 'hcm-spin 0.7s linear infinite', display: 'inline-block',
          }} />
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-text-inverse)"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
        )}
        Tìm kiếm
      </button>
      {onAdvancedSearch && (
        <button
          type="button"
          onClick={onAdvancedSearch}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 40, padding: '0 16px',
            borderRadius: 8, fontSize: 14, fontWeight: 'var(--font-weight-semibold, 600)', fontFamily: 'inherit',
            border: '1px solid var(--color-primary-200)', cursor: 'pointer', background: 'transparent', color: 'var(--color-text-primary)',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-text-primary)"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" /></svg>
          {advancedSearchLabel}
        </button>
      )}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        {selecting && (
          <>
            <span style={{ fontSize: 13, fontWeight: 'var(--font-weight-semibold, 600)', color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>
              {selectedLabel(selectedCount)}
            </span>
            {selectionActions}
          </>
        )}
        {extraActions}
      </div>
    </div>
  );
}
