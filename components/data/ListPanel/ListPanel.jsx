import React from 'react';

/*
 * Formalizes the `.list-panel` wrapper used by every "danh sách" screen —
 * reference implementation is templates/ias-danh-sach-chuong-trinh/
 * DanhSachChuongTrinh.dc.html (see also references/component-rules.md's
 * "List-screen layout convention"). Flex column, 16px gap, AND its own card
 * surface (white bg + border + 12px radius + 16px padding) — `Table` still
 * renders its own shadowed surface inside, so this is a deliberate
 * card-in-card look, matching the shipped template exactly.
 */

export function ListPanel({ id, toolbar, table, pagination, className = '', style = {}, ...rest }) {
  return (
    <div
      id={id}
      className={className}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16,
        background: 'var(--color-bg-surface, #fff)',
        border: '1px solid var(--color-border-default, #D9DBE9)',
        borderRadius: 12, padding: 16,
        fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        ...style,
      }}
      {...rest}
    >
      {toolbar}
      {table}
      {pagination}
    </div>
  );
}
