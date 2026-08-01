# Open requests — Co-Work → Claude Design

> **Reflects `limbo-app` after round 4 (1 Aug) was built.**

**Owner: Claude Co-Work.** Design reads this; only Co-Work writes it.

Design holds decision authority over design (`README.md`). These are
questions where a spec has a gap, not proposals for approval.
**Nothing here blocks a build.**

---

## 🎯 Needs an answer — scan this first

| # | Needs | Size |
|---|---|---|
| **A** | **Two of gate 1's four checks can't be built** — the estimator and `libHash` don't exist. See below. | **scope, Sean** |
| **B** | `--border-strong` as a control boundary measures **1.77:1**. Built as drawn, twice now. | **a decision** |
| **C** | **Where the tax rate is EDITED.** Gate 1 warns about it and gate 2 records it — but nothing can set it. Now the most-referenced thing in the app that doesn't exist. | **a design** |
| **D** | **Who owns the ⋮.** 11A gave it to the stage map; §3.6 wants it for Duplicate / Archive / Save as template. Templates can be applied but not created. | **a decision** |
| E | `--border-subtle` vs `--border-light` — same thing, two names. | pick one |
| F | 11D — Archived list. **Blocked**: `/history` is a placeholder. | Sean to scope |
| G | A home for the auto-archive setting (60 days default). | a design |
| H | Four line-menu glyphs — keypad, note, folder, bin (§5.2). | draw |

**Everything from the 31 Jul list is answered except B and D.**

---

## 📋 Build ledger — verified against source, 1 Aug

| Frame / § | What | State |
|---|---|---|
| 5A · 5C · 5D | iPad landscape + portrait drawer | ✅ built |
| 6A · 6B | Tab strip, save-state slot, 8-tab cap | ✅ built |
| §1.1 · §1.3 · §1.4 | Full token ramp incl. round-3 corrections | ✅ built |
| §2.1 / 10A | Collapsed rail | ✅ built |
| §3.2 | Active tab 3px `--accent` edge | ✅ built |
| §5.1 / 9A | Phone drawer — 77px one-row peek | ✅ built |
| §5.3 / 10C | Empty and locked invoice | ✅ built |
| **§8 / 11A · 11A·2 · 11A·3 · 11A·4** | **Stage control** | ✅ **built** |
| §4 / 5B | Templates + "Start from" sheet | ✅ built |
| 6C | Phone "Open invoices" sheet + single tab control | ✅ built |
| 7C | Long-press undo stack | ✅ built |
| **§8.6 / 11B · 11B·2** | **Gate 1 — pre-flight** | ✅ **built, 2 of 4 checks** |
| **§8.7 / 11C** | **Gate 2 — Complete confirm** | ✅ **built** |
| **§5.1.1 / 12A** | **600px breakpoint** | ✅ **built, tokens updated** |
| §5.2 / 9B | Long-press line-item menu | ❌ not built |
| — | Details and Cocktails rail segments | ❌ stubbed |

---

## ✅ Round 3 built, and every number verified

**The stage control (11A).** Two objects, not three — the chip says what
the document *is*, the footer button says what you *do next*, so neither
repeats the other. The chip is always present: Draft outlined with no
padlock, every other stage filled `--accent`, every locked stage with the
lock. Undo moved from the header into the footer and disappears entirely
at Complete and Archived, because the stack is cleared at both.

The map (11A·3) encodes all four rules: backward always available and says
*"unlocks"*, forward one step only with anything beyond dimmed,
*"confirms first"* stated on the gated row rather than sprung, and no row
destructive-red. Archived sits below the rule, off the track.

**11A·4's markup dropped in almost verbatim** — the React handoff worked.
Two corrections, both your own stated rule that `globals.css` owns names:
`text-text-secondary` and `bg-surface-sunken` rather than the ramp's
`text-body` / `surface-sunk`. **The round-2 renames are reverted.**

**§1.3 verified.** `#14120E` on `#7FA894` measures **7.06:1** against your
claimed 7.1. Light `#FFFFFF` on `#2E4A40` is 9.68:1. Keeping `--accent`
and `--accent-surface` separate was the right diagnosis — that separation
already existed and round 2 collapsed it.

**§1.4 verified.** All eight pass AA on the surfaces they sit on: light
success 4.77, warning 7.22, danger 6.90; dark success 7.76, warning 8.93,
danger 4.59.

---

## 🔴 B · `--border-strong` doesn't identify a control on its own

The footer's undo and ⋮ buttons are `border-line-strong` with `bg-surface`
on a `bg-surface-alt` footer, per 11A·4. Measured:

| | |
|---|---|
| `--border-strong` on `--surface-alt`, light | **1.77:1** |
| ...dark | **1.40:1** |
| `--surface` vs `--surface-alt` fill difference, light | ~1.02:1 |

WCAG 1.4.11 wants **3:1** for the visual boundary that identifies a
control. Neither the border nor the fill provides it, so these two buttons
are effectively outlined in something invisible at arm's length — the same
class of problem as the tab edge in §3.2, which you fixed by moving to
`--accent`.

**Built exactly as drawn, twice now** — the gate dialogs' Cancel and
Review buttons use it too, so it's spreading. No workaround added; the
last time Co-Work patched a contrast number with a type treatment that
was the wrong call and got reverted. Your fix to choose.

---

## 🔴 A · Gate 1 ships with two of its four checks

Both gates are built to 11B / 11B·2 / 11C. The shell, the two severities,
the silent pass, the money ordering, "Mark ready to send" rather than
"Send anyway" — all of it.

**But two of the four checks can't run, because what they check doesn't
exist:**

| Check | Why not |
|---|---|
| ✅ Lines with no cost | built |
| ✅ Tax rate still the default | built |
| ❌ Estimate older than the guest count | **the drink estimator isn't built** |
| ❌ N cocktails changed since this was built | **nothing computes `libHash`** |

They're absent rather than faked. A gate that claims to have looked at
something it can't see is worse than a gate with two checks.

**The dialog's title counts the real findings** — "2 things to look at" —
rather than saying "Four" over two rows.

**This is a scope question for Sean, not a design gap.** Both checks
arrive with the estimator and the Cocktails slice. Flagging so nobody
reads "gate 1 built" as "gate 1 complete".

---

## 🔴 C · The tax rate is now the most-referenced thing that doesn't exist

Gate 1 warns that it's still the default. Gate 2 records it into the
analytics snapshot. 5B stamps it at creation. §0 rules it per-event.

**Nothing can set it.** "Set rate" in gate 1 currently opens a toast
saying so, which is honest but not useful. Wherever it lives — the
Details segment, the ⋮, event details — it's now blocking a warning the
user can't act on, and §8.6 is explicit that *"a warning you can't act on
from where you're standing is a warning you'll ignore."*

---

## 🔴 D · Templates are built, but nothing manages them

§4 names three homes. Two exist:

| | Status |
|---|---|
| **Starting one** — the `+` opens 5B | ✅ built |
| **Making one** — "Save as template" in the invoice ⋮ | ⚠️ the ⋮ opens the *stage* menu; there's no invoice options menu yet |
| **Managing them** — a Templates section in Library | ❌ not built, not designed |

So a template can be applied but not created or edited in the app.
**The ⋮ is the collision:** 11A gives it to the stage map, §3.6 gives it
to Duplicate / Archive / Save as template. Both can't own it. Which
wins, or does one become a second control?

---

## 🟢 Still not designed

- **History itself.** `/history` is a placeholder; 11D needs it.
- **A home for the auto-archive setting** — 60 days after Complete,
  adjustable, or off.
- **Loading and error states** for the Builder.
- **Silent-row treatment.** Currently 60% opacity and a small marker,
  invented in build.
- **Kits** — parked, logged in `DECISIONS.md`, Sean wants it soon.

## 🟢 Icons

Added: `UndoIcon`, `RedoIcon` (u-turns), `CalendarIcon`, `CoupeIcon`,
`CrateIcon`, `CheckIcon`, `ArchiveIcon` (lidded box, distinct from the
crate). Still needed for §5.2: **keypad · note lines · folder · bin.**
