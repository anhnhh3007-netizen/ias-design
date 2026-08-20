# Badge vs. Tag — pick by intent, not by look
These are easy to confuse; they're not interchangeable.
- **`Badge`** = status indicator: pill shape (`border-radius: 9999px`), no border, small leading dot for state badges (`dot` prop), and no dot when it's a closable filter chip (`onClose` present) instead — used for "what state is this record in" (Đang làm việc / Chờ duyệt / Nghỉ việc / Hoàn thành / Thử việc).
- **`Tag`** = category/label chip: rectangular (`border-radius: 4px`), always has a 1px border in the same hue family as its text/background, no leading dot — used for "what category/filter does this belong to" (Kế toán / CNTT / Nhân sự).
- Never use `Tag` to show a record's status, and never use `Badge` for a filter/category chip.
