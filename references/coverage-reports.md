# Step 5 — Component usage report (after generation)

After every generated screen, append **three** coverage report comments at the end of the file and print all three summaries in chat: the Component Coverage Report, the Color Token Coverage report (Step 2a, see `references/color-rules.md`), and the Typography Scale Coverage report (Step 2b, see `references/typography-rules.md`).

```
## 📊 Component Coverage Report — [Screen Name]

| # | Element | DS Component used | Status |
|---|---------|------------------|--------|
| 1 | App header bar | AppHeader | ✅ DS |
| 2 | Left sidebar | AppSidebar | ✅ DS |
| 3 | Page title + breadcrumb | PageHeader | ✅ DS |
| 4 | Search box | SearchInput | ✅ DS |
| 5 | Data table | Table | ✅ DS |
| 6 | Status chip | Tag | ✅ DS (replaced "chip") |
| 7 | Custom chart | — | ⚠️ Bespoke (no DS equivalent) |

**DS component coverage: 6 / 7 = 86%**
Shell zones: ✅ Sidebar · ✅ AppHeader · ✅ PageHeader
```

Scoring:
- Count only **UI elements** (not layout wrappers or `<div>` containers).
- Each element that maps to a DS component = 1 point.
- Custom/bespoke elements that have no DS equivalent = note with ⚠️, not penalised.
- Elements that *could* have used a DS component but didn't = ❌, counted as missed.
- Target: **≥ 80% DS coverage** on all screens.

```
## 🎨 Color Token Coverage — [Screen Name]

| # | Element (property) | Location | Original hex | Category | Matched Semantic Alias | Match |
|---|---|---|---|---|---|---|
| 1 | Card border | `.stat-card` border, Swap Zone row 2 | `#BFE7CD` | border | `--color-border-success` `#00BA88` | ⚠️ Nearest (≈61%) — converted, no exact alias |
| 2 | Body text | `.employee-name` span | `#3D455F` | text | `--color-text-body` `#4E4B66` | ⚠️ Nearest (≈91%) — converted, no exact alias |
| 3 | Page background | `<main>` wrapper | `#F4F6FA` | background | `--color-bg-page` | ✅ Exact |
| 4 | Muted icon | `.icon-filter` in filter bar | `#A0A3BD` | icon | `--color-icon-muted` | ✅ Exact |
| 5 | Active-state pill background | `.status-pill--active`, Swap Zone row 5 | `#12C48B` | background | `--color-bg-hover` `#F4F5FF` (closest available) | 🚫 Severe gap (≈29%) — **awaiting your decision**, see options below |

**Color token coverage: 4 / 5 confidently matched = 80% · 1 severe gap blocked on user decision**

**🚫 Severe gap — row 5:** no `--color-bg-*` alias is close to `#12C48B` (best available match is only ≈29%). Options: (a) use `--color-bg-hover` anyway despite the low match, (b) tell me an existing token to use instead, (c) ask me to add a new Semantic Alias token for this color (e.g. `--color-bg-success-solid: #12C48B`) — I will not add it without your go-ahead.
```

Scoring:
- Count only text/border/icon/background colors **you set yourself** on custom/bespoke elements in the Swap Zone — exclude colors rendered inside a stock `_ds_bundle.js` component's own internals (its background/variant/border), since those hardcode their own literal hex and don't read `--color-*` (Step 2a).
- Every counted color must resolve to a **Semantic Alias token only** (never a raw scale token) — ✅ Exact if the hex matches a Semantic Alias's resolved value exactly, ⚠️ Nearest (similarity% ≥ 70%, from Step 2a's RGB-distance formula computed only against aliases in the same category) if not exact, 🚫 Severe gap (similarity% < 70%) if the best available alias is a poor match, ❌ if a custom hex or a raw scale token slipped through unmapped without going through this process at all.
- **Always fill the `Location` column** with the exact selector, component name, or line reference for every row — mandatory for ⚠️ Nearest, 🚫 Severe gap, and ❌ rows so the user can find the element, and good practice for ✅ Exact rows too.
- **A 🚫 Severe gap row is never silently resolved.** Do not pick a token yourself and move on — list it separately below the table with the location, original color, closest available alias + similarity%, and the options from Step 2a's rule, then wait for the user's answer before finalizing that element. Do not add a new token to `colors.css` on your own to make the row disappear.
- Target: **100% of custom colors mapped to a declared Semantic Alias with no unresolved 🚫 rows** — but a 🚫 row blocked on a pending user decision is the correct, honest state; do not force it to ✅/⚠️ just to hit the number.

```
## 🔤 Typography Scale Coverage — [Screen Name]

| # | Text element | Rendered size / weight | Matched scale | Match | Class used? |
|---|---|---|---|---|---|
| 1 | Page/section title | 20px / 700 | H4 (22px/500) | ⚠️ Nearest (no exact 20px/700 scale) | ✅ `className="hcm-h4"` |
| 2 | Card heading | 16px / 700 | Subtitle 1 (16px/600) | ⚠️ Nearest | ✅ `className="hcm-subtitle1"` |
| 3 | Body copy | 13px / 400 | Body 2 (14px/400) | ⚠️ Nearest | ✅ `className="hcm-body2"` |
| 4 | Caption / meta text | 12px / 500 | Caption (12px/500) | ✅ Exact | ✅ `className="hcm-caption"` |

**Typography scale coverage: 4 / 4 matched to a declared scale = 100% · Utility-class adoption: 4 / 4 = 100%**
```

Scoring:
- Count only text styles **you authored yourself** in the Swap Zone (custom cards, list rows, detail panels, stat labels, etc.) — exclude text rendered inside a stock `_ds_bundle.js` component's own internals (its label/title props), since those hardcode their own sizing and aren't affected by Step 2b.
- Every counted text style must resolve to one of the 12 declared scales (Step 2b) — ✅ Exact if size+weight both match a row, ⚠️ Nearest if only size matches (or closest row was chosen), ❌ if a custom `font-size`/`font-weight` slipped through unmapped.
- Every counted text style must also use `className="hcm-x"` (not just a matching `var(--type-x-size)` value picked ad hoc) — add a `Class used?` column (✅/❌) alongside the scale-match column; a row can be scale-matched but still ❌ on class usage if it only sets the CSS var inline without the class.
- Target: **100% of custom text styles mapped to a declared scale, applied via its `.hcm-*` utility class** — unlike component coverage, there is no "bespoke, no equivalent" exemption for typography, since every screen's text always resolves to *some* size that has a nearest scale.
