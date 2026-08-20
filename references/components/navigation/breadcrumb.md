# Breadcrumb / PageHeader breadcrumb row
Standardized on the `PageHeader` component's text-link version — the first crumb is **text** (`"Trang chủ"`), not a home icon glyph. `HcmScreenLayout` and `BaoCaoQuanTri` were updated to match (their `showAsHomeLink`/`showAsHomeSpan` icon-only special case for the first crumb was removed; the first crumb now flows through the same `showAsLink`/`showAsText` logic as every other crumb).
- Every crumb (including "Trang chủ") = brand-colored text link (`--color-text-link` / `--color-text-brand`) when not the last item.
- Last crumb (current page) = plain `--color-text-body`/secondary text, not a link.
- Separator is a light `›` glyph with small (2–3px) margin on both sides, never a `/` or `>`.
- Don't reintroduce a home icon for the first crumb — that was the old, now-superseded pattern.
