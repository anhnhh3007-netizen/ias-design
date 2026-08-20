# Avatar
- Circle only. Initials are extracted from the **last two words** of the full name (per the component's own doc comment) — not the first letters of the first word, and not more than 2 characters.
- Sizes seen in use: 32 / 40 / 48px — 40px is the default for list rows and headers; use 32px only in dense contexts (table cells) and 48px only for a "large identity" moment (profile header).
- If `src` (image) is provided it fully replaces the initials fallback — never render both.
- Vary the background color per-person across the available brand/accent/status hues (blue, purple, green, orange, red) rather than defaulting every avatar to the same brand blue — the shipped sample deliberately uses 5 different colors to stay scannable in a list.
