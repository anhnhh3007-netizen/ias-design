# Modal
- Header = title (bold 14px) left, a bare `✕` close affordance right — no other header controls.
- Footer (when present) follows the cross-cutting button-order rule: `outline`/cancel left, `primary` right.
- Reserve `Modal` for flows that need a body with real content (forms, longer confirmations); a yes/no question with one line of context belongs in `Popconfirm` instead, not a full `Modal`.
