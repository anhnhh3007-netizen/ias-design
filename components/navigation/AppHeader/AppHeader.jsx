import React from 'react';

export function AppHeader({ searchPlaceholder = 'Tìm kiếm', onSearch,
  notificationCount, onNotification, user, logo,
  className = '', style = {}, ...rest }) {
  const [search, setSearch] = React.useState('');
  return (
    <header className={className} style={{
      height: 64, background: 'var(--color-bg-surface, #fff)', borderBottom: '1px solid var(--color-border-default, #D9DBE9)',
      display: 'flex', alignItems: 'center', padding: '0 24px', gap: 12, flexShrink: 0,
      fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
      ...style,
    }} {...rest}>
      <div style={{ flex: 1, maxWidth: 420, position: 'relative', display: 'flex', alignItems: 'center' }}>
        <svg style={{ position: 'absolute', left: 10, color: 'var(--color-icon-muted, #A0A3BD)', pointerEvents: 'none' }}
          width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input value={search} onChange={e => { setSearch(e.target.value); onSearch && onSearch(e.target.value); }}
          placeholder={searchPlaceholder}
          style={{ width: '100%', height: 36, borderRadius: 8, border: '1px solid var(--color-border-default, #D9DBE9)',
            background: 'var(--color-neutral-100, #F4F6FA)', padding: '0 12px 0 34px', fontSize: 13,
            fontFamily: 'inherit', color: 'var(--color-text-body, #4E4B66)', outline: 'none' }} />
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button onClick={onNotification} style={{
          width: 36, height: 36, borderRadius: 8, border: 'none', background: 'transparent',
          cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-icon-default, #6E7191)',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
          {notificationCount > 0 && (
            <span style={{ position: 'absolute', top: 4, right: 4, minWidth: 16, height: 16,
              background: 'var(--color-bg-error-solid, #EB2D4B)', borderRadius: 8, border: '2px solid var(--color-neutral-0, #fff)',
              fontSize: 9, fontWeight: 700, color: 'var(--color-text-inverse, #fff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 3px' }}>
              {notificationCount}
            </span>
          )}
        </button>
        {user && (
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-bg-brand, #141ED2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: 'var(--color-text-inverse, #fff)', cursor: 'pointer' }}>
            {typeof user === 'string' ? user.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase() : user}
          </div>
        )}
      </div>
    </header>
  );
}
