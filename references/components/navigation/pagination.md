# Pagination
- Current page = filled brand square (not just bold text); prev/next are bare chevron glyphs, only bordered when not the disabled edge; the `…` ellipsis is always non-interactive (no border, no hover).
- The "N kết quả" result-count text is **not** part of `Pagination` itself (it has no such prop) — render it as a sibling element in the table/list footer, left of or beside the pagination control, not by trying to pass it into `Pagination`.

---
