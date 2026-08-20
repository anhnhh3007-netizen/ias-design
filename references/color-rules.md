# Step 2a — Map colors to declared Semantic Alias tokens (mandatory)

For every **visual property you author yourself** — text color, border color, icon color, background color — inside the Swap Zone, assign the matching **Semantic Alias token** below. Raw palette scale tokens (`--color-primary-500`, `--color-success-100`, `--color-neutral-300`, etc.) exist only to *build* the aliases in `tokens/colors.css` — they are never applied directly to a bespoke element, and neither is any hand-typed hex.

**Declared Semantic Alias tokens (source: `tokens/colors.css`), grouped by the property they belong to:**

| Property | Token | Resolved value |
|---|---|---|
| Background | `--color-bg-page` | `#F4F6FA` |
| Background | `--color-bg-surface` | `#FFFFFF` |
| Background | `--color-bg-overlay` | `rgba(20,20,42,0.5)` |
| Background | `--color-bg-hover` | `#F4F5FF` |
| Background | `--color-bg-error` | `#FFF3F8` |
| Background | `--color-bg-success` | `#F2FFFB` |
| Background | `--color-bg-warning` | `#FFF9EF` |
| Background | `--color-bg-brand` (solid — active/selected pills) | `#141ED2` |
| Background | `--color-bg-success-solid` (solid — status dots/chart) | `#00BA88` |
| Background | `--color-bg-warning-solid` (solid — status dots/chart) | `#F4B740` |
| Background | `--color-bg-error-solid` (solid — status dots/chart) | `#EB2D4B` |
| Text | `--color-text-primary` | `#14142A` |
| Text | `--color-text-body` | `#4E4B66` |
| Text | `--color-text-secondary` | `#6E7191` |
| Text | `--color-text-muted` | `#A0A3BD` |
| Text | `--color-text-inverse` | `#FFFFFF` |
| Text | `--color-text-brand` | `#141ED2` |
| Text | `--color-text-link` | `#141ED2` |
| Text | `--color-text-accent` | `#7B61FF` |
| Text | `--color-text-error` | `#C30052` |
| Text | `--color-text-success` | `#00966D` |
| Text | `--color-text-warning` | `#946200` |
| Border | `--color-border-default` | `#D9DBE9` |
| Border | `--color-border-strong` | `#C4C4D4` |
| Border | `--color-border-focus` | `#141ED2` |
| Border | `--color-border-error` | `#EB2D4B` |
| Border | `--color-border-success` | `#00BA88` |
| Border | `--color-border-warning` | `#F4B740` |
| Icon | `--color-icon-default` | `#6E7191` |
| Icon | `--color-icon-brand` | `#141ED2` |
| Icon | `--color-icon-accent` | `#7B61FF` |
| Icon | `--color-icon-muted` | `#A0A3BD` |
| Icon | `--color-icon-error` | `#EB2D4B` |
| Icon | `--color-icon-success` | `#00BA88` |
| Icon | `--color-icon-warning` | `#F4B740` |
| Icon | `--color-icon-inverse` (icon glyph on a solid/vivid background) | `#FFFFFF` |

> Added 2026-07-02: `-warning` rows across all four categories, `-accent` for text/icon, and the four solid-background tokens (`bg-brand`, `bg-success-solid`, `bg-warning-solid`, `bg-error-solid`) — closing gaps found when a strict Semantic-Alias-only pass on a real screen produced very low similarity% matches (e.g. a solid active-state background matching `--color-bg-hover` at ~29%). The pale tint aliases (`bg-error`, `bg-success`, `bg-warning`) are for banner/card surfaces; the `-solid` ones are for small vivid swatches (status dots, chart segments) — don't conflate the two.
>
> Added 2026-07-22: `--color-icon-inverse` — a white icon glyph drawn on top of `--color-bg-brand` or any `-solid` status background (e.g. an icon swatch/tile) had no Icon-category alias within the 70% severe-gap threshold (`--color-icon-muted` was the nearest at only ~66.5%). Pairs with the already-declared `--color-text-inverse` used for text on the same solid backgrounds.

Rules:
- **Only Semantic Alias tokens may be used.** No raw palette scale token, no rgba/hex typed by eye — every custom text/border/icon/background color must resolve to one of the rows above. There is no "raw scale as fallback" step anymore.
- **Match strictly by property category**: text color → a `--color-text-*` row, border color → a `--color-border-*` row, background color → a `--color-bg-*` row, icon color → a `--color-icon-*` row. Never cross categories (e.g. never put `--color-text-error` on a `border-color` property just because the hue looks close).
- **Heading elements using `.hcm-h1` through `.hcm-h5` (Step 2b) are always colored `--color-text-primary`** (`var(--color-neutral-900)`) — no other `--color-text-*` alias (`-body`, `-secondary`, `-brand`, `-error`, `-success`, etc.) may be applied to these five classes, regardless of context or nearest-match results. This is a fixed rule, not a default that nearest-match can override.
- **`.hcm-subtitle1` and `.hcm-subtitle2` (Step 2b) may only be colored `--color-text-primary`** (`var(--color-neutral-900)`, default/neutral) **or `--color-text-brand`** (`var(--color-primary-500)`, for a brand-colored subtitle) — no other `--color-text-*` alias may be applied to these two classes, regardless of context or nearest-match results.
- **Never create a new Semantic Alias token on your own initiative.** Adding a token to `tokens/colors.css` is a design-system decision, not a per-screen fix — you may never edit `colors.css` to add/rename a token without the user explicitly asking for it in that turn. This holds even when a real gap exists in the declared set.
- **If no Semantic Alias in that category fits the exact need**, compute the **nearest Semantic Alias in the same category** (see the distance formula below) and classify the gap by similarity%:
  - **similarity% ≥ 70% → acceptable substitution.** Use the nearest alias, mark it ⚠️ Nearest with the similarity% and the exact location (selector, component name, or line number) in the Color Token Coverage report.
  - **similarity% < 70% → severe gap. Stop and ask, do not substitute silently.** Report to the user: the exact location of the element, the original/intended color, its category, the closest available alias and its (low) similarity%, and present options for how to proceed — e.g. (a) accept the nearest alias despite the low match, (b) the user names an existing token to use instead, (c) the user asks you to add a new token (only then may `colors.css` be edited). Do not pick an option yourself; wait for the user's decision before finishing that element.
- **Nearest-match is computed only among Semantic Alias tokens in the same property category** — never against the raw palette. Use Euclidean RGB distance: `distance = sqrt((R1-R2)² + (G1-G2)² + (B1-B2)²)`, `similarity% = 100 − (distance / 441.67 × 100)` (441.67 = max possible distance, pure black vs pure white). Pick the token with the **highest similarity%** within that category; never split the difference or invent something in between. Record the similarity% **and** the exact location in the coverage report.
- **New or updated components (`components/<group>/<Name>/*.jsx`) must reference `tokens/colors.css` — never a hardcoded hex.** Added 2026-07-23: this closes the old "stock component internals are exempt" loophole for anything actively created or modified going forward. Concretely:
  - Prefer a **Semantic Alias** token, matched by property category exactly as above.
  - If no alias is close enough, a component (unlike a bespoke Swap Zone element) **may fall back to a raw palette scale token** (`--color-primary-300`, `--color-neutral-200`, etc.) when it resolves closer than every declared alias — raw scale vars are still declared in `tokens/colors.css`, so this still satisfies "must use the tokens file," it just isn't restricted to the ~40 alias rows the way bespoke screen elements are. Record which tier (alias vs. raw scale) was used in the Color Token Coverage report same as any other row.
  - This rule is **not retroactive** — components already shipped before 2026-07-23 that still hardcode hex (found via the `_ds_bundle.js`/`.jsx` pattern) are legacy and don't need an unprompted retrofit; it applies the moment a component is next touched.
  - The severe-gap escalation (< 70% similarity → stop and ask, never silently substitute) still applies in full, now checked against alias **and** raw-scale candidates combined.
- **Old exemption, narrowed**: colors rendered *inside* a component that has **not** been touched since 2026-07-23 may still hardcode literal hex (unchanged legacy behavior) — this no longer covers `Button`, which was updated on 2026-07-23 and now must follow the rule above.
- For `ReactNode`-typed props (see Step 2b's Group A note), a wrapped child's own explicit `color` can still override an inherited text color the same way font-size does — but background/border colors of the component's own container (e.g. `Tag`'s pill background) are controlled by that component's own `color`/`variant` prop, not overridable by wrapping.
- **Standalone/portable artifacts outside the skill folder**: copy the full `--color-*` variable block from `tokens/colors.css` into the artifact's own `:root` (same portability pattern as the `--type-*`/`--font-family-body` blocks) — otherwise `var(--color-text-body)` resolves to nothing. The raw scale variables must still be copied too, since the Semantic Alias variables reference them via `var(...)`.
