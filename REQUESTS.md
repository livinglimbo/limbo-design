# Open requests — Co-Work → Claude Design

> **Reflects `limbo-app` after the 30 Jul handoff was built.**

**Owner: Claude Co-Work.** Design reads this; only Co-Work writes it.

Design holds decision authority over design (`README.md`). These are
questions where a spec has a gap, not proposals for approval.
**Nothing here blocks a build.**

---

## 📋 Build ledger — what is actually in the app

*Verified against the source on 30 Jul 2026, not from memory. This is the
row to trust; Design can't see the app repo, and a stale answer here has
already nearly cost a round.*

| Frame / § | What | State |
|---|---|---|
| 5A | iPad landscape — tabs, rail, sheet | ✅ built |
| 5C / 5D | iPad portrait drawer, three heights | ✅ built |
| 6A | Tab strip on autosave, save-state slot | ✅ built |
| 6B | 8-tab cap + naming toast | ✅ built |
| §1.1 | Full 13-token dark ramp | ✅ built |
| §1.2 | `--glyph` deleted | ✅ built |
| §2.1 / 10A | Collapsed rail — chevron, search, 3 icons, gold left bar | ✅ built |
| §3.2 | Active tab 3px `--accent` edge | ✅ built |
| §5.3 / 10C | Empty and locked invoice | ✅ built |
| — | Calendar · coupe · crate icons | ✅ built |
| §5.1 / 9A | Phone drawer — 77px one-row peek, 440px half | ✅ built |
| §5.2 / 9B | Long-press line-item menu | ❌ not built |
| §4 / 5B | Templates + "Start from" sheet | ❌ not built |
| 6C | Phone "Open invoices" sheet | ❌ not built |
| 7C | Long-press undo stack | ❌ not built *(exists only in `/debug/autosave`)* |
| — | Details and Cocktails rail segments | ❌ stubbed |
| §7 / 11A–D | **Stage control** | ❌ **not designed** |

### ✅ Phone drawer fixed — and it exposed a second bug

The drawer had been rendering below 1024px using the **iPad's** numbers,
so a phone got a 150px peek on an 844px screen. Now built to §5.1: a
77px one-row peek on a `1fr 160px 1fr` grid, 440px half, "Add item" as
a button rather than a field at peek, undo icon-only at 44×44, no
chevron — the whole bar taps.

**The second bug was worse and affected iPad portrait too.** The drawer
was pinned to `bottom: 0` at `z-30` while the app's bottom nav sits at
`bottom: 0`, `z-40`. So the nav covered the bottom 56px of the drawer at
*every* size below 1024px. The drawer now bottoms out above it —
`calc(56px + env(safe-area-inset-bottom))`.

**One number differs from the spec.** §5.1 gives the tab bar as 62px; the
app's is **56px** plus the safe-area inset. Using the real one. If 62px
was deliberate rather than an estimate, say so and the nav changes
instead.

### ⚠️ Co-Work picked the phone breakpoint

§5.1 says "phone" without giving one. Using **768px** (Tailwind's `md`):
an iPhone 14 Pro Max is 430px and an iPad mini in portrait is 744px, so
the split falls between the largest phone and the smallest tablet.
Below 768px gets §5.1, 768–1023px gets §5's iPad drawer. Say if that
boundary should sit elsewhere.

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

## 🔴 5 · The stage control — everything the built logic already fixes

Design's own plan for this is **11A–11D**, and it's the right shape. This
section is only the behaviour that already exists in code, so no frame
contradicts it.

**All of this is built and working. None of it has an interface.**

### The five stages, exactly

`STAGE_LABELS` in `src/lib/types.ts`:

| Key | Label |
|---|---|
| `draft` | Draft |
| `send` | Ready to Send |
| `ready` | Ready to Order |
| `complete` | Complete |
| `archived` | Archived |

**The track is four, not five.** `STAGE_TRACK` is
`draft → send → ready → complete`. **Archived is deliberately not in it** —
an invoice can be cancelled or paused before it's ever finished, so
Archived is a side exit from *any* stage. A straight left-to-right
progression on its own is the wrong shape; Archived has to sit off it.

### For 11B · Gate 1, Ready to Send

The old app's pre-flight checked two things: an **outdated estimate**, and
**cocktails edited since the invoice was built**. Both detected via
`libHash`, which is already stored on every invoice.

Two more the app can now detect, if you want them checked:

- **Uncosted lines.** 128 of 314 products have no cost data — this is the
  single most likely thing to be wrong on a real invoice.
- **Tax rate.** Now per-event and currently a hardcoded 8.25% (item 3).

**It warns, it doesn't block, in the old app.** Your call whether that
holds.

### For 11C · Gate 2, Complete

Complete already does three things beyond changing a label:

1. Records an analytics snapshot with tags
2. Locks the invoice
3. **Clears the undo history** — the snapshot is a commitment, and undoing
   across it would make the recorded numbers false

**The reversibility promise is real and already implemented.** Moving back
to any track stage unlocks and starts a fresh undo stack. It does not
resurrect the old one. The 10C banner's wording — *"reopen to make
changes, and the invoice returns to Draft"* — is accurate.

**Stage changes are not undoable** (§3.3), and the code enforces it:
`applyStageToDraft` bypasses the undo stack entirely.

### For 11D · Archived in History

⚠️ **Scope warning: `/history` is still a placeholder page.** There is no
History screen to add an Archived view *to*. 11D is either the first
History design, or it waits.

What archiving already does:

- **Manual, from any stage.**
- **Automatic** once an invoice has been Complete for **N days — default
  60, adjustable, or off entirely.** ⚠️ **That setting has no home.**
  Settings? History? It's undesigned and needs one.
- Auto-archive **only ever touches Complete invoices.** A draft untouched
  for months is dormant, not finished.
- Restoring **remembers where it came from** (`archivedFrom`) and offers
  that as the default rather than always dumping to Draft — but any stage
  can be chosen.
- The sweep **skips invoices that are currently open** in a tab.

### Reconciling with 10C

The **chip** is specified: filled `--accent`, white type, padlock, right
side of the sheet header. Built. 11A's control must sit beside it without
duplicating it — 10C is explicit that the chip is a badge, not the
control.

---

## 🟢 6 · Still not designed

- **History itself.** `/history` is a placeholder. 11D needs it.
- **A home for the auto-archive setting** (default 60 days, adjustable,
  or off).
- **Loading and error states** for the Builder.
- **Silent-row treatment.** Currently 60% opacity and a small marker,
  invented in build.
- **Portrait fallback** — now moot: the drawer is built and the fallback
  is gone.
- **Kits** — parked, logged in `DECISIONS.md`, Sean wants it soon.

---

## 🟢 7 · Icons — four still needed

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
