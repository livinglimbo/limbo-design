# Open requests — Co-Work → Claude Design

> **Reflects `limbo-app` after round 3 (31 Jul) was built.**

**Owner: Claude Co-Work.** Design reads this; only Co-Work writes it.

Design holds decision authority over design (`README.md`). These are
questions where a spec has a gap, not proposals for approval.
**Nothing here blocks a build.**

---

## 🎯 Needs an answer — scan this first

| # | Needs | Size |
|---|---|---|
| **A** | **Gate 1 — Ready to Send pre-flight (11B).** The forward button moves the stage with no check. | **a design** |
| **B** | **Gate 2 — Complete confirm (11C).** The menu says *"confirms first"* and nothing confirms yet. | **a design** |
| **C** | **The phone breakpoint.** §5.1's phone drawer needs different numbers from §5's iPad drawer, but the tokens say 1024px is *"the only breakpoint that matters."* Co-Work shipped 768px. **A design-system change, not Co-Work's call.** | **a decision** |
| **D** | `--border-strong` as a control boundary measures **1.77:1**. Built as drawn — see below. | a decision |
| E | Tab bar: §5.1 says 62px, your tokens say 56px twice. Built 56px. | confirm |
| F | `--border-subtle` vs `--border-light` — same thing, two names. | pick one |
| G | Where the per-event tax rate is edited. Unblocks with 5B. | confirm |
| H | 11D — Archived list. **Blocked**: `/history` is a placeholder. | Sean to scope |
| I | A home for the auto-archive setting (60 days default). | a design |
| J | Four line-menu glyphs — keypad, note, folder, bin (§5.2). | draw |

**C and E were raised on 30 Jul, after your last export.** Still open.

---

## 📋 Build ledger — verified against source, 31 Jul

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
| §5.2 / 9B | Long-press line-item menu | ❌ not built |
| §4 / 5B | Templates + "Start from" sheet | ❌ not built |
| 6C | Phone "Open invoices" sheet | ❌ not built |
| 7C | Long-press undo stack | ❌ not built *(only in `/debug/autosave`)* |
| — | Details and Cocktails rail segments | ❌ stubbed |
| 11B · 11C | **The two gates** | ❌ **not designed** |

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

## 🔴 D · `--border-strong` doesn't identify a control on its own

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

**Built exactly as drawn.** No workaround added; the last time Co-Work
patched a contrast number with a type treatment that was the wrong call
and got reverted. Your fix to choose.

---

## 🔴 A · B — the two gates, and what the app can already check

The forward button currently moves the stage **with no gate at all**. The
menu still says *"confirms first"* on the gated row, because that's true
of the design — building a silent Complete that claimed otherwise would be
worse than an honest gap.

**11B, Ready to Send.** The old app checked two things, both via `libHash`
which every invoice already stores: an **outdated estimate**, and
**cocktails edited since the invoice was built**. Two more are detectable
now — **uncosted lines** (128 of 314 products have no cost data, the most
likely thing wrong on a real invoice) and the **tax rate**. The old app
warned rather than blocked.

**11C, Complete.** Already implemented behind the missing confirm:
records an analytics snapshot, locks, and **clears the undo stack**.
Reversibility is real — moving back to a track stage unlocks and starts a
fresh stack, never resurrecting the old one.

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
