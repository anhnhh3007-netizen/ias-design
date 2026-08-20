import React from 'react';

/*
 * Canonical spec taken from templates/ias-xem-chi-tiet/XemChiTiet.dc.html's
 * field-grid (12px caption label + 14px regular value + bottom divider) —
 * Drawer's own dr-field used to be a slightly different ad-hoc version
 * (13px bold value, no divider); both now converge on this one.
 */

export function Field({ label, value, full = false, className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{
      gridColumn: full ? '1 / -1' : undefined,
      display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <label style={{ fontSize: 12, fontWeight: 'var(--font-weight-medium, 500)', color: 'var(--color-text-secondary, #6E7191)' }}>{label}</label>
      <div style={{
        fontSize: 14, fontWeight: 'var(--font-weight-regular, 400)', color: 'var(--color-text-primary, #14142A)',
        paddingBottom: 10, borderBottom: '1px solid var(--color-neutral-200, #EDF2F7)', minHeight: 20,
      }}>{value}</div>
    </div>
  );
}
