# Tooltip
- Trigger text gets a brand-colored dashed underline as the hover affordance — a tooltip trigger with no visual cue that it's hoverable is a violation.
- Bubble = dark navy (`#14142A`) background, white text, single line only (no multi-paragraph tooltip content) — for longer explanations use an inline hint/`Alert` instead.
- **Exception: `Table`'s truncated-cell tooltip** (`references/components/data/table.md`) reuses this same dark-navy bubble but deliberately skips the dashed-underline trigger (the ellipsis is its own affordance) and lets long content wrap instead of forcing one nowrap line. That's the one sanctioned bend of these two rules — don't generalize it to other `Tooltip` triggers.

---
