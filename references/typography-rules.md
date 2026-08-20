# Step 2b — Map typography to the declared type scale (mandatory)

For every **text element** you author yourself (headings, section titles, labels, body copy, captions, meta text) inside the Swap Zone, match its size/weight to the **declared type scale** below instead of picking an arbitrary `font-size`/`font-weight`.

**The declared type scale (source: `tokens/typography.css`) — 12 scales exist as CSS variables, but only 11 have a matching `.hcm-*` utility class:**

| Scale | Size | Weight | Line-height | Letter-spacing | CSS var prefix | Utility class |
|---|---|---|---|---|---|---|
| H1 | 88px | 300 (light) | 100px | -1.25px | `--type-h1-*` | `.hcm-h1` |
| H2 | 44px | 500 (medium) | 52px | 0.25px | `--type-h2-*` | `.hcm-h2` |
| H3 | 32px | 500 | 36px | 0.25px | `--type-h3-*` | `.hcm-h3` |
| H4 | 22px | 500 | 24px | 0.25px | `--type-h4-*` | `.hcm-h4` |
| H5 | 18px | 500 | 20px | 0.15px | `--type-h5-*` | `.hcm-h5` |
| Subtitle 1 | 16px | 600 (semibold) | 20px | 0.15px | `--type-subtitle1-*` | `.hcm-subtitle1` |
| Subtitle 2 | 14px | 600 | 20px | 0.15px | `--type-subtitle2-*` | `.hcm-subtitle2` |
| Body 1 | 16px | 500 | 20px | 0.5px | `--type-body1-*` | `.hcm-body1` |
| Body 2 | 14px | 400 (regular) | 20px | 0.25px | `--type-body2-*` | `.hcm-body2` |
| Button | 14px | 600 | 20px | 1.25px, uppercase | `--type-button-*` | `.hcm-button` |
| Caption | 12px | 500 | 16px | 0.4px | `--type-caption-*` | `.hcm-caption` |
| Overline | 10px | 600 | 16px | 1.5px | `--type-overline-*` | **none — no `.hcm-overline` class exists** |

Each `*` expands to `-size`, `-weight`, `-line-height`, `-letter-spacing` (e.g. `var(--type-h4-size)`, `var(--type-h4-weight)`). Named weight tokens also exist: `--font-weight-light/regular/medium/semibold/bold/extrabold` (300/400/500/600/700/800).

Rules:
- **Never invent a new scale — and never invent a new utility class either.** No ad-hoc `font-size: 21px`/`font-weight: 700`, and no hand-rolled `.hcm-overline` or similar just because a size seems to need it. Only the utility classes that already exist (the 11 in the table above) may be used.
- **Apply via the `.hcm-h1`…`.hcm-caption` utility class (`className="hcm-h5"`, etc.) — this is the required method.** Use `className` for the text style; keep a separate (smaller) `style` object only for non-typography properties on that element (color, margin, etc.) — the class and inline `style` don't conflict since they touch different CSS properties.
- **Match against the 11 class-backed scales only — Overline is excluded from matching entirely**, precisely because it has no declared utility class. A text element that would naturally land on Overline by size (e.g. ~10px) must instead resolve to the next-nearest **class-backed** scale (in practice this is almost always Caption, 12px) — treat Overline as if it weren't in the table for matching purposes. Do not use the raw `var(--type-overline-*)` as a workaround either; that's just inventing a class-less exception by another name.
- Match by **size first** (smallest absolute px difference among the 11 eligible scales), then by **weight** as the tie-breaker.
- If nothing matches exactly (common — most real screens have a size the scale doesn't cover), pick the **closest eligible scale by size** and use it as-is (its weight/line-height/letter-spacing included) rather than mixing a scale's size with a custom weight. Note it in the coverage report (Step 5) as "nearest match", not as a failure.
- The classes only exist if the file actually loads them: either link `styles.css`/`tokens/typography.css` (in-skill / via `ds-base.js`), or, for a portable artifact outside the skill folder, copy the 11 `.hcm-*` rules verbatim into the artifact's own `<style>` block (see the portability bullet below).
- **This step does not apply to text rendered *inside* stock `_ds_bundle.js` components** (`Card` title, `Button` label, `PageHeader` h1, `Tag` text, etc.) — those components hardcode their own internal font sizes and do not read `--type-*` vars or `.hcm-*` classes, so there is nothing to map there by default. It applies to text you author yourself in the Swap Zone (custom cards, list rows, detail panels, stat labels, etc.).
  - If a prop happens to be typed `React.ReactNode` (e.g. `Button.children`, `Tag.children`, `Modal.title`, `PageHeader.title`/`actions`), you *can* additionally wrap the passed content in your own `className="hcm-x"` span to override that component's internal default via normal CSS specificity — this is optional polish, not required by this step, and never applies to props typed as plain `string` (`Notification.title`, `Select`/`Input`/`Textarea`.label, `SearchInput`.placeholder, `Tabs`.items[].label, `PageHeader.subtitle`/`breadcrumb`, etc.), which have no override surface short of hand-editing `_ds_bundle.js`.
- **Standalone/portable artifacts outside the skill folder**: also copy the `--type-*` and `--font-weight-*` variable block (not just `--font-family-body` — see the Font portability note under "Key facts") into the artifact's `:root`, AND the 11 `.hcm-*` utility class rules (plus `.hcm-overline` if needed) into its `<style>` block — otherwise `className="hcm-h4"` resolves to nothing since the class was never defined in that file.
