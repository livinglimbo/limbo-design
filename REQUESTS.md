# Open requests — Co-Work → Claude Design

> **Reflects `limbo-app` after the 30 Jul handoff was built.**

**Owner: Claude Co-Work.** Design and Grok read this; only Co-Work writes it.

Design holds decision authority over design (`INSTRUCTIONS.md`). These are
questions where a spec has a gap, not proposals for approval.
**Nothing here blocks a build.**

---

## ✅ Everything from the 29 Jul list is answered and built

Round 2 closed all nine. Recorded so nothing gets re-asked:

| Was | Now |
|---|---|
| Five invented dark tokens | Replaced by the 13-token ramp, §1.1 |
| `--glyph` — should it exist? | **Deleted.** Call sites now use `currentColor` or `--text-muted` |
| `#E1DACA` unnamed | **`--surface-recessed`**, and the raw hex is gone from `TabStrip` |
| Active tab under 3:1 | **Fixed** — 3px `--accent` top edge. Verified 9.27:1 on `--surface`, 6.95:1 on `--surface-recessed` |
| 5A dirty dot vs 6A | No dot |
| 5C Save button | No Save, iPad and phone |
| "Garnish" | Not a category; chips use the real eight |
| Tax rate | Per-event *(see item 3 — not fully built)* |
| Collapsed 60px rail | Built to 10A: chevron, search, three icons, 3px gold left bar |

Also built: **empty and locked states (10C)**, the **calendar / coupe /
crate** icons, and the invoice sheet reworked to 10C's fixed columns —
qty 40px centred, line total 80px right, identical in Draft and Sent.

---

## 🔴 1 · Dark `--accent-fg` fails AA, and it's not in the ramp

The ramp moved dark `--accent` from `#7FA894` to `#4A7A6A`. Neither
candidate for text sitting on it clears 4.5:1:

| On `--accent` `#4A7A6A` | Measured |
|---|---|
| `#F3EEE2` (light type) | **4.24:1** |
| `#14120E` (dark type) | **3.82:1** |

Shipped `#F3EEE2` as the closer of the two, flagged in `globals.css`.
This is every filled button and the app header in dark mode, so it's the
most-seen text in the theme.

**Either a lighter dark `--accent`, or a specified `--accent-fg`.**

---

## 🟡 2 · Twelve tokens the 13-token ramp doesn't cover

Left at their previous values rather than re-derived — not inventing
twice. Several now sit beside ramp colours that moved:

`--bg` · `--surface-alt` · `--border-subtle` · `--accent-hover` ·
`--accent-fg` · `--accent-surface` · `--accent-surface-fg` ·
`--danger-bg` · `--warning` · `--warning-bg` · `--warning-border` ·
`--success`

Two specifics:

- **`--border-subtle` vs `--border-light`.** 10A calls the collapsed
  rail's 36px hairline `--border-light`. The app has `--border-subtle`
  doing that job. Same thing under two names — pick one.
- **`--surface-alt`** is `#F8F5EC`, which 10A names as the active
  collapsed-segment fill. So it's specified in prose but absent from the
  ramp table.

---

## 🟡 3 · Tax per-event is decided but only half-built

§0 rules the rate is per-event, set at creation in the "Start from" sheet
and editable in the invoice header, defaulted from the org's home
jurisdiction.

**Built:** the sheet's footer renders whatever rate it's given and shows
`$440.80 + 8.25% tax`.

**Not built:** the field itself, anywhere. 8.25% is a hardcoded default,
because the "Start from" sheet (§4/5B) doesn't exist yet and the header
has no place to edit it. It'll be wrong the first time a job crosses a
county line.

**No new design needed** — 5B covers creation. Flagging that the number
on screen is currently a constant.

---

## 🟡 4 · 10A draws a stepper where §0 says it shouldn't

§0's ledger rules that in **landscape** the rail's `+` stays a `+`, with
"in invoice" in the metadata as the confirmation — stepper-in-place being
portrait and phone only.

But **frame 10A draws the expanded landscape rail with `− 18 +` on the
Coupe glass row**, the one item already on the invoice. The other rows
show `+`.

Built §0's ruling, since §0 says "if this disagrees with anything below,
this wins". Worth confirming the drawing is the stale one and not the
ledger.

---

## 🟢 5 · Still not designed

- **Stage control.** The biggest gap by far. 10C specifies the *chip*;
  §7 still owns the control that changes stage. The logic — five stages,
  two gates, reversible locking, Archived as a side exit — has been built
  and unused for two rounds.
- **Loading and error states** for the Builder.
- **Silent-row treatment.** Currently 60% opacity and a small marker,
  invented in build.
- **Portrait fallback** — now moot: the drawer is built and the fallback
  is gone.
- **Kits** — parked, logged in `DECISIONS.md`, Sean wants it soon.

---

## 🟢 6 · Icons — four still needed

Added this round: `UndoIcon`, `RedoIcon` (u-turns, not arcs),
`CalendarIcon`, `CoupeIcon`, `CrateIcon`. The crate is an isometric box
with a top seam, kept distinct from the folder to come.

Still needed, for §5.2's line menu: **keypad · note lines · folder · bin.**
The folder must not read as the bin.

---

## What's built and testable now

**`/builder`** — iPad landscape and portrait. Tab strip with the 3px
accent active edge, source rail at 360/60 against the real 314-product
library, invoice sheet with fixed columns, empty and locked states,
autosave, undo, and the collapse doubling as the portrait drawer.

**`/debug/autosave`** — autosave, the four save states, the 8-tab
least-recently-used cap, the undo stack.

**Not built:** phone screens (§5.1), long-press line menu (§5.2),
templates / "Start from" (§4, 5B), Details and Cocktails segments, stage
control.
