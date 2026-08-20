import React, { useRef } from 'react';

const badgeStyle = {
  width: 22, height: 22, borderRadius: '50%', background: 'var(--color-bg-brand)', color: 'var(--color-text-inverse)',
  fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
};

export function ImportPanel({
  open, onClose,
  templateFileName, onDownloadTemplate,
  onFileSelected, maxSizeMB = 50, accept = '.xlsx',
  selectedFileName, onConfirm, importing = false,
  className = '', style = {}, ...rest
}) {
  const fileInputRef = useRef(null);

  if (!open) return null;

  const handlePick = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) onFileSelected(file);
    e.target.value = '';
  };

  return (
    <div className={className} style={{
      position: 'relative', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)',
      borderRadius: 12, padding: '20px 24px', fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <button
        type="button"
        onClick={onClose}
        title="Đóng"
        style={{
          position: 'absolute', top: 14, right: 14, width: 28, height: 28, border: 'none', background: 'transparent',
          color: 'var(--color-text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
      </button>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>

        {/* Step 1 — download template */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={badgeStyle}>1</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Tải xuống hồ sơ mẫu</span>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, background: 'var(--color-bg-page)',
            border: '1px solid var(--color-border-default)', borderRadius: 8, padding: '8px 10px 8px 12px',
            width: '100%', boxSizing: 'border-box',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-icon-success)" style={{ flexShrink: 0 }}>
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
            <span style={{ fontSize: 13, color: 'var(--color-text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{templateFileName}</span>
            <button
              type="button"
              onClick={onDownloadTemplate}
              title="Tải xuống"
              style={{
                width: 26, height: 26, flexShrink: 0, border: '1px solid var(--color-primary-200)', borderRadius: 6,
                background: 'transparent', color: 'var(--color-icon-brand)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
            </button>
          </div>
        </div>

        {/* Connector — decorative, indicates step 1 → step 2 flow (both steps are simultaneously
            actionable, so this is a plain neutral dashed line, not a Steps-style progress line) */}
        <div style={{ flex: '0 1 56px', alignSelf: 'center', marginTop: 27, borderTop: '1px dashed var(--color-border-strong)', minWidth: 24 }} />

        {/* Step 2 — upload filled file */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={badgeStyle}>2</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Tải lên hồ sơ đã bổ sung thông tin</span>
          </div>

          {!selectedFileName ? (
            <button
              type="button"
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none',
                cursor: 'pointer', padding: 0, color: 'var(--color-text-link)', fontSize: 13, fontWeight: 600,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" transform="rotate(180 12 12)" /></svg>
              Tải file
              <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(Dung lượng tối đa {maxSizeMB}MB)</span>
              <input ref={fileInputRef} type="file" accept={accept} onChange={handlePick} style={{ display: 'none' }} />
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, background: 'var(--color-bg-page)',
                border: '1px solid var(--color-border-default)', borderRadius: 8, padding: '8px 12px',
                flex: 1, minWidth: 0, boxSizing: 'border-box',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-icon-success)" style={{ flexShrink: 0 }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
                <span style={{ fontSize: 13, color: 'var(--color-text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{selectedFileName}</span>
              </div>
              <button
                type="button"
                disabled={importing}
                onClick={onConfirm}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, height: 36, padding: '0 16px', borderRadius: 8,
                  fontSize: 13, fontWeight: 600, fontFamily: 'inherit', border: 'none', whiteSpace: 'nowrap',
                  cursor: importing ? 'not-allowed' : 'pointer',
                  background: importing ? 'var(--color-primary-200)' : 'var(--color-bg-brand)',
                  color: importing ? 'var(--color-text-primary)' : 'var(--color-text-inverse)',
                }}
              >
                {importing ? 'Đang nhập...' : 'Nhập dữ liệu'}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
