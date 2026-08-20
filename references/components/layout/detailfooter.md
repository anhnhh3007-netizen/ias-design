# DetailFooter (added 2026-07-31)
Closing action bar below a full-page detail screen's content cards (e.g. "Xem chi tiết") — source at `components/layout/DetailFooter/`.
- Thin top divider (`1px solid --color-neutral-200`) separating it from the content above; not sticky/fixed by default, sits in normal document flow.
- `align="center"` (default): a single `outline` "Đóng" button, centered — used when the page is read-only with nothing to save. `align="right"`: once there's a real save/submit action, switches to right-aligned and follows the cross-cutting secondary-left/primary-right button-order rule (`Hủy` outline, `Lưu` primary) — never centered once there's more than one button.
- Reference implementation: `templates/ias-xem-chi-tiet/XemChiTiet.dc.html`'s `.detail-footer`.

---
