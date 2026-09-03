import React from 'react';

const fieldStyle = {
  height: 40, borderRadius: 8, border: '1px solid #D9DBE9', padding: '0 12px',
  fontSize: 13, fontFamily: 'inherit', color: '#4E4B66', outline: 'none',
  boxSizing: 'border-box', width: '100%',
};

function Field({ field, value, onChange }) {
  const common = {
    value: value ?? '',
    placeholder: field.placeholder,
    onChange: (e) => onChange && onChange(field.key, e.target.value),
    style: fieldStyle,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: '#4E4B66' }}>
        {field.label}
        {field.required && <span style={{ color: '#EB2D4B' }}> *</span>}
      </label>
      {field.type === 'select' ? (
        <select {...common} style={{
          ...fieldStyle, appearance: 'none', paddingRight: 30, cursor: 'pointer',
          background: "#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%23A0A3BD'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat right 10px center",
        }}>
          <option value="">{field.placeholder || '-- Chọn --'}</option>
          {(field.options || []).map((opt) => {
            const o = typeof opt === 'string' ? { value: opt, label: opt } : opt;
            return <option key={o.value} value={o.value}>{o.label}</option>;
          })}
        </select>
      ) : (
        <input type={field.type === 'date' ? 'date' : field.type === 'number' ? 'number' : 'text'} {...common} />
      )}
    </div>
  );
}

export function FilterCard({
  fields = [], values = {}, onFieldChange, onSearch,
  loading = false, searchLabel = 'Tìm kiếm',
  onReset, resetLabel = 'Xóa bộ lọc', extraActions,
  className = '', style = {}, ...rest
}) {
  return (
    <div className={className} style={{
      background: '#fff', border: '1px solid var(--color-border-default, #D9DBE9)',
      borderRadius: 12, padding: '16px 20px',
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16,
      }}>
        {fields.map((f) => (
          <Field key={f.key} field={f} value={values[f.key]} onChange={onFieldChange} />
        ))}
      </div>
      {/* Action row — one continuous right-aligned cluster, no divider:
          Reset (if provided) → Search → trailing extraActions. Search
          is not required to be rightmost, only to follow Reset. */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, height: 36, padding: '0 16px',
              borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
              border: '1px solid #D9DBE9', cursor: 'pointer', background: '#fff', color: '#6E7191',
              whiteSpace: 'nowrap',
            }}
          >
            {resetLabel}
          </button>
        )}
        <button
          type="button"
          disabled={loading}
          onClick={onSearch}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, height: 36, padding: '0 24px',
            borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: 'inherit', border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer', background: '#141ED2', color: '#fff',
            opacity: loading ? 0.6 : 1, whiteSpace: 'nowrap',
          }}
        >
          {loading ? (
            <span style={{
              width: 14, height: 14, border: '2px solid rgba(255,255,255,.3)', borderTopColor: '#fff',
              borderRadius: '50%', animation: 'hcm-spin 0.7s linear infinite', display: 'inline-block',
            }} />
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
          )}
          {searchLabel}
        </button>
        {extraActions}
      </div>
    </div>
  );
}
