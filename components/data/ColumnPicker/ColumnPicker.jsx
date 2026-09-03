import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

const SEARCH_THRESHOLD = 10;
const PANEL_WIDTH = 260;
const GROUPED_PANEL_WIDTH = 460;
const GROUPED_ANCHOR_WIDTH = 130;

export function ColumnPicker({
  open, triggerRef, options, visibleKeys,
  onVisibleChange, onClose,
  onReorder,
  searchValue = '', onSearchChange,
  groups,
  onGroupsReorder,
  className = '', style = {}, ...rest
}) {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const sectionRefs = useRef({});
  const [pos, setPos] = useState(null);
  const [dragKey, setDragKey] = useState(null);
  const [dragOverKey, setDragOverKey] = useState(null);
  // Separate drag state for the anchor nav's own group-reorder (onGroupsReorder,
  // added 2026-08-27) — deliberately not reusing dragKey/dragOverKey: a column drag
  // and a group drag are different gestures on different elements, and keeping them
  // independent avoids one interaction's cleanup accidentally clearing the other's
  // in-progress state.
  const [groupDragKey, setGroupDragKey] = useState(null);
  const [groupDragOverKey, setGroupDragOverKey] = useState(null);
  const isGrouped = !!(groups && groups.length);
  const [activeGroup, setActiveGroup] = useState(isGrouped ? groups[0].key : null);
  const panelWidth = isGrouped ? GROUPED_PANEL_WIDTH : PANEL_WIDTH;

  // position: fixed, computed from the trigger's own rect — not `position: absolute`
  // anchored inside the trigger's parent. ToolbarSimple's trailing cluster needs
  // `overflow-x: auto` on narrow viewports (see toolbarsimple.md), which silently
  // clips an absolutely-positioned descendant instead of letting it overlay the
  // Table below — same reason Table's own row-action menu uses this technique.
  useLayoutEffect(() => {
    if (!open || !triggerRef || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 6, left: rect.right - panelWidth });
  }, [open, triggerRef, panelWidth]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target) && !(triggerRef && triggerRef.current && triggerRef.current.contains(e.target))) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose, triggerRef]);

  // reset scroll-spy to the first group every time the panel (re-)opens
  useEffect(() => {
    if (open && isGrouped) setActiveGroup(groups[0].key);
  }, [open, isGrouped]);

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

  // Reordering (onReorder prop, added 2026-08-26; cross-group moves added same day)
  // — drag a row's handle onto another row to move it there, including onto a row in
  // a *different* group in the grouped variant, which reassigns the moved column's
  // group to match. Disabled while a search filter is active: dragging within a
  // filtered subset has no unambiguous meaning for where the moved item lands in the
  // real full order, so require clearing the search first rather than guessing.
  const canReorder = !!onReorder && !(showSearch && searchValue);
  // Removes `fromKey`, reassigns its `group` to `forcedGroup` (flat variant passes
  // undefined — no group concept there), and reinserts it at `toKey`'s position.
  // Returns a full next `options` array (same item shape ColumnPickerOption already
  // uses) — the caller applies it directly as the next `options`/`Table` column order,
  // no separate merge-by-key step needed.
  const moveOption = (fromKey, toKey, forcedGroup) => {
    if (fromKey === toKey) return null;
    const fromIdx = options.findIndex((o) => o.key === fromKey);
    if (fromIdx === -1) return null;
    const list = options.slice();
    const [moved] = list.splice(fromIdx, 1);
    const movedNext = forcedGroup !== undefined ? { ...moved, group: forcedGroup } : moved;
    const toIdx = list.findIndex((o) => o.key === toKey);
    if (toIdx === -1) return null;
    list.splice(toIdx, 0, movedNext);
    return list;
  };
  // `toGroup` is the group the drop-target row currently belongs to — undefined for
  // the flat variant (no groups at all). Same function handles both "drop within the
  // same group" (forcedGroup equals the item's own current group, a no-op reassignment)
  // and "drop into a different group" (forcedGroup overwrites it) — one code path.
  const handleDrop = (toKey, toGroup) => {
    if (!canReorder || dragKey == null) return;
    const next = moveOption(dragKey, toKey, isGrouped ? toGroup : undefined);
    if (next) onReorder(next);
    setDragKey(null);
    setDragOverKey(null);
  };

  // Group reordering (onGroupsReorder prop, added 2026-08-27) — drag one anchor nav
  // entry onto another to swap the sections' display order (both the anchor nav's own
  // listing and the checklist's section order follow `groups`, so this reorders both
  // at once with no separate sync step). Simpler than moveOption: groups don't belong
  // to a further "group of groups", so this is a flat move-before-target, no forced-
  // group reassignment case to handle. Opt-in and independent of `onReorder` — a
  // caller can offer column reordering without group reordering, or vice versa.
  const canReorderGroups = isGrouped && !!onGroupsReorder;
  const moveGroup = (fromKey, toKey) => {
    if (fromKey === toKey) return null;
    const fromIdx = groups.findIndex((g) => g.key === fromKey);
    if (fromIdx === -1) return null;
    const list = groups.slice();
    const [moved] = list.splice(fromIdx, 1);
    const toIdx = list.findIndex((g) => g.key === toKey);
    if (toIdx === -1) return null;
    list.splice(toIdx, 0, moved);
    return list;
  };
  const handleGroupDrop = (toKey) => {
    if (!canReorderGroups || groupDragKey == null) return;
    const next = moveGroup(groupDragKey, toKey);
    if (next) onGroupsReorder(next);
    setGroupDragKey(null);
    setGroupDragOverKey(null);
  };

  const scrollToGroup = (key) => {
    const el = sectionRefs.current[key];
    if (el) el.scrollIntoView({ block: 'start' });
    setActiveGroup(key);
  };
  const handleListScroll = () => {
    if (!listRef.current || !isGrouped) return;
    const listTop = listRef.current.getBoundingClientRect().top;
    let gk = groups[0].key;
    groups.forEach((g) => {
      const el = sectionRefs.current[g.key];
      if (el && el.getBoundingClientRect().top - listTop <= 8) gk = g.key;
    });
    setActiveGroup(gk);
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

  const SearchRow = () => (
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
  );

  const SelectAllRow = () => (
    <div style={{ padding: 4, borderBottom: '1px solid var(--color-border-default)' }}>
      <CheckRow checked={allChecked} indeterminate={someChecked} label="Chọn tất cả" onChange={toggleAll} bold />
    </div>
  );

  // Drag handle + draggable wrapper around one checklist row — kept separate from
  // CheckRow itself (which stays focused on the checkbox+label) rather than teaching
  // CheckRow about drag state. "Chọn tất cả" never gets this wrapper — only the
  // per-column rows are reorderable, the select-all row's position is fixed.
  // `groupKey` is the group this row's own section belongs to — i.e. the group a drag
  // dropped ON this row moves the dragged column INTO (see handleDrop/moveOption).
  //
  // Drag/drop affordance modeled on Ant Design's own drag-list pattern (added 2026-08-26):
  // 1. Handle is always visible on the right (not hover-revealed) — see 2026-08-27 revision
  //    below the "Reordering columns" section in columnpicker.md: an always-visible handle
  //    was the explicit requirement, not a hover-only affordance.
  // 2. Row hover tints the row with --color-bg-hover, same as any other hoverable row.
  //    Only the handle itself switches to a grab cursor on its own hover; the row's own
  //    cursor stays default, since the handle (not the row) is what's draggable in intent.
  // 3. Drag-over — the hovered drop target keeps its hover tint, and gets a thin
  //    --color-border-focus line along its TOP edge via `boxShadow` (revised 2026-08-27
  //    twice — see columnpicker.md's "Drop-position indicator" rule for the full
  //    history: an in-flow slot block reflowed the list mid-drag and broke downward
  //    drags; an absolutely-positioned overlay box fixed that but then covered the
  //    next row's own text, since nothing made room for it anymore). `boxShadow` never
  //    affects layout at all — no element is inserted or moved — so it can neither
  //    cause the reflow-jitter bug nor visually obscure any row's content (it's
  //    `inset`, drawn just inside the row's own edge, well clear of the label's 9px
  //    padding). Top edge (not bottom) matches `moveOption`'s actual insert-BEFORE-
  //    target mechanics — the line marks where the dragged row lands, immediately
  //    above the hovered row. The row's own top corners square off while the line
  //    shows (revised 2026-08-27) — an inset boxShadow still follows the row's own
  //    border-radius, so a rounded top-left/top-right reads as a curved border
  //    segment at each end rather than a clean straight line spanning the full
  //    width; the bottom stays rounded so the row isn't fully squared off.
  const ReorderableRow = ({ opt, groupKey }) => (
      <div
        draggable={canReorder}
        onDragStart={() => canReorder && setDragKey(opt.key)}
        onDragOver={(e) => { if (canReorder) { e.preventDefault(); if (dragOverKey !== opt.key) setDragOverKey(opt.key); } }}
        onDrop={(e) => { e.preventDefault(); handleDrop(opt.key, groupKey); }}
        onDragEnd={() => { setDragKey(null); setDragOverKey(null); }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-bg-hover)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        style={(() => {
          const isDragOver = dragOverKey === opt.key && dragKey !== opt.key;
          return {
            display: 'flex', alignItems: 'center', gap: 2,
            // Square off the top corners while showing the line — an inset boxShadow
            // still conforms to the row's own border-radius, so a rounded top-left/
            // top-right reads as a curved border segment at each end instead of a
            // clean straight line spanning the full width. Bottom stays rounded (only
            // the top edge carries the line) so the row doesn't look broken otherwise.
            borderRadius: isDragOver ? '0 0 6px 6px' : 6,
            opacity: dragKey === opt.key ? 0.4 : 1,
            boxShadow: isDragOver ? 'inset 0 2px 0 0 var(--color-border-focus)' : 'none',
          };
        })()}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <CheckRow checked={visibleKeys.includes(opt.key)} label={opt.label} onChange={() => toggleOne(opt.key)} />
        </div>
        {canReorder && (
          <span
            className="cp-drag-handle"
            style={{
              cursor: 'grab', color: 'var(--color-icon-muted)', display: 'flex', flexShrink: 0,
              padding: '0 8px 0 2px',
            }}
            title="Kéo để đổi thứ tự"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="9" cy="6" r="1.4" /><circle cx="9" cy="12" r="1.4" /><circle cx="9" cy="18" r="1.4" />
              <circle cx="15" cy="6" r="1.4" /><circle cx="15" cy="12" r="1.4" /><circle cx="15" cy="18" r="1.4" />
            </svg>
          </span>
        )}
      </div>
  );

  // Anchor nav entry — same drag/drop-over visual language as ReorderableRow above
  // (always-visible handle, box-shadow line with squared top corners, opacity dim on
  // the dragged source) so the two reordering gestures in this panel — columns and
  // groups — read as one consistent interaction, not two different-looking ones.
  const AnchorItem = ({ g }) => {
    const isDragOver = groupDragOverKey === g.key && groupDragKey !== g.key;
    return (
      <div
        draggable={canReorderGroups}
        onDragStart={() => canReorderGroups && setGroupDragKey(g.key)}
        onDragOver={(e) => { if (canReorderGroups) { e.preventDefault(); if (groupDragOverKey !== g.key) setGroupDragOverKey(g.key); } }}
        onDrop={(e) => { e.preventDefault(); handleGroupDrop(g.key); }}
        onDragEnd={() => { setGroupDragKey(null); setGroupDragOverKey(null); }}
        onClick={() => scrollToGroup(g.key)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, minWidth: 0,
          padding: '8px 10px', borderRadius: isDragOver ? '0 0 6px 6px' : 6, cursor: 'pointer',
          fontSize: 12, fontWeight: activeGroup === g.key ? 700 : 600,
          color: activeGroup === g.key ? 'var(--color-text-brand)' : 'var(--color-text-secondary)',
          background: activeGroup === g.key ? 'var(--color-bg-hover)' : 'transparent',
          opacity: groupDragKey === g.key ? 0.4 : 1,
          boxShadow: isDragOver ? 'inset 0 2px 0 0 var(--color-border-focus)' : 'none',
        }}
      >
        {/* flex:1 + minWidth:0 + ellipsis — without this, a long label (e.g. "Căn cứ
            xử phạt") with nowrap grows this item wider than its siblings instead of
            truncating, which drags the handle on THIS row out of alignment with the
            handles on shorter-label rows (a real bug: the handles must line up in a
            straight column, not follow whatever width each label happens to need). */}
        <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{g.label}</span>
        {canReorderGroups && (
          <span
            className="cp-drag-handle"
            style={{ cursor: 'grab', color: 'var(--color-icon-muted)', display: 'flex', flexShrink: 0 }}
            title="Kéo để đổi vị trí nhóm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="9" cy="6" r="1.4" /><circle cx="9" cy="12" r="1.4" /><circle cx="9" cy="18" r="1.4" />
              <circle cx="15" cy="6" r="1.4" /><circle cx="15" cy="12" r="1.4" /><circle cx="15" cy="18" r="1.4" />
            </svg>
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        position: 'fixed', top: pos.top, left: pos.left, width: panelWidth,
        background: 'var(--color-bg-surface)', borderRadius: 8,
        boxShadow: '0 8px 24px rgba(75,99,226,.12)', border: '1px solid var(--color-border-default)',
        zIndex: 150, overflow: 'hidden', fontFamily: 'var(--font-family-body, "Plus Jakarta Sans", sans-serif)',
        ...style,
      }}
      {...rest}
    >
      {isGrouped ? (
        <div style={{ display: 'flex' }}>
          {/* Anchor nav — left column, own scroll-spy (see columnpicker.md's "Grouped variant"
              section): highlights whichever group's section is currently at the top of .cp-list,
              not just the one last clicked. */}
          <div style={{ width: GROUPED_ANCHOR_WIDTH, flexShrink: 0, padding: '10px 6px', borderRight: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {groups.map((g) => (
              <AnchorItem key={g.key} g={g} />
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            {showSearch && <SearchRow />}
            <SelectAllRow />
            <div ref={listRef} onScroll={handleListScroll} style={{ maxHeight: 300, overflowY: 'auto', padding: 4 }}>
              {groups.map((g) => {
                const items = filtered.filter((o) => o.group === g.key);
                if (!items.length) return null;
                return (
                  <div key={g.key} ref={(el) => { sectionRefs.current[g.key] = el; }}>
                    <div style={{ padding: '8px 10px 4px', fontSize: 11, fontWeight: 700, letterSpacing: '.3px', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{g.label}</div>
                    {items.map((opt) => (
                      <ReorderableRow key={opt.key} opt={opt} groupKey={g.key} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>
          {showSearch && <SearchRow />}
          <SelectAllRow />
          <div style={{ maxHeight: 300, overflowY: 'auto', padding: 4 }}>
            {filtered.map((opt) => (
              <ReorderableRow key={opt.key} opt={opt} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
