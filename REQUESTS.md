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
| **🔴 0** | **LEGIBILITY — 72% of the app is 14px or smaller.** Sean's first device test: *"Throughout the entire app we have real issues with legibility."* This is a type-scale change, not a component fix. **Should be the whole next round.** | **a design round** |
| **A** | **Two of gate 1's four checks can't be built** — the estimator and `libHash` don't exist. See below. | **scope, Sean** |
| **B** | `--border-strong` as a control boundary measures **1.77:1**. Built as drawn, twice now. | **a decision** |
| **C** | **Where the tax rate is EDITED.** Gate 1 warns about it and gate 2 records it — but nothing can set it. Now the most-referenced thing in the app that doesn't exist. | **a design** |
| **D** | **Who owns the ⋮.** 11A gave it to the stage map; §3.6 wants it for Duplicate / Archive / Save as template. Templates can be applied but not created. | **a decision** |
| **E** | **§5.1's fourth add row doesn't fit.** At 440px half, the chrome above the list uses 241px, leaving 199px — **3.6 rows, not 4**. Shorter rows or less chrome; not shaving blind. | **a decision** |
| F | `--border-subtle` vs `--border-light` — same thing, two names. | pick one |
| G | 11D — Archived list. **Blocked**: `/history` is a placeholder. | Sean to scope |
| H | A home for the auto-archive setting (60 days default). | a design |
| I | Four line-menu glyphs — keypad, note, folder, bin (§5.2). | draw |

**Everything from the 31 Jul list is answered except B and D.**

---

## 🔴 0 · Legibility — the type scale is too small for the stated context

**Sean's first real device test, 1 Aug.** His words: *"Throughout the
entire app, we have real issues with legibility. Most of the buttons,
headers, titles, banners, footers seem to be much too small. We need to
take a comprehensive look across the app… so as to keep the UX/UI
cohesive but still functional."*

**Measured across the Builder's 89 type declarations:**

| Size | Count | Where |
|---|---|---|
| **10px** | 6 | "SUPPLY INVOICE", category headings, "EDITING" — and all of them uppercase with 0.09–0.12em tracking, which makes small type *harder*, not easier |
| **12px** | 29 | every metadata line, every save-state, every chip |
| **14px** | 29 | most body copy and button labels |
| 15–22px | 25 | item names, totals |

**72% of the interface is 14px or smaller.**

The line item Sean called out specifically: name at **15px**, and
`$32.99 · 750 ml bottle` at **12px**. He also wants the invoice footer's
total larger, with the other figures spread into the space that frees up.

### The argument, since it's a system change rather than a preference

**This system took touch seriously and never applied the same reasoning
to reading distance.** 44px minimum targets, 48px form controls, 16px
input font — stated as non-negotiable, repeated in three places, with the
justification given each time: *"used standing up with hands full."*

The type scale doesn't carry that reasoning anywhere. `metadata:
0.75rem`, `rowTitle: 0.875rem`, `sectionLabel: 0.75rem` are ordinary
desktop values, and `DESIGN.md` states the context as *"used standing up,
often one-handed, sometimes behind a bar mid-event."* That's arm's
length, frequently dim, sometimes moving — the same argument that
produced 44px, applied to a different sense.

**Please move the scale rather than the components.** Co-Work isn't
bumping sizes one at a time: it's whack-a-mole, and it would break the
cohesion Sean explicitly asked to keep. Every value is a token, so a
scale change costs nothing structurally — no data, no state, no
migration.

**Two specific asks inside this:**

1. **The invoice footer.** Total larger; line count, subtotal and tax
   rate redistributed into the freed space.
2. **The 10px eyebrow labels.** Six of them, all uppercase with wide
   tracking. Tracking at that size is working against you.

---

## 🔴 0.1 · Row highlight, and the line-item detail panel

Also from the device test. Three parts, and they have different owners.
**Part 3 supersedes frame 9B** — draw them as one thing.

**1 · Hover highlight on invoice rows, library rows and rail rows.**
Sean asked for **three options to choose from**. Legal under the
constraints — hover-*only* is banned; hover as enhancement on something
already reachable is guidance, kept deliberately on 29 Jul.

**2 · Apple Pencil Pro hover should behave like a pointer.** ⚠️ **This
was assigned to Design on 29 Jul and hasn't come back.** `README.md`:
*"Sean wants Pencil Pro hover features. Claude Design owns the
interaction design and hands it to Co-Work to build."* Raising it again
rather than treating it as new.

**3 · The 9B collision is resolved — one surface.** Sean ruled on
1 Aug: **press-and-hold opens a single panel** with the item's
information at the top and 9B's actions underneath. Tap stays as it is
(edit the field you tapped). Please fold 9B into this rather than
drawing it separately.

### The information section — exact payload

| Field | Availability | Please draw |
|---|---|---|
| **Source URL** | field exists, **6% of products** (~19 of 314) | An **icon, not the address** — Sean asked for this explicitly. Absent → row not shown. Opens in a separate tab; a link that navigates away mid-invoice loses his place. |
| **Cost per ounce** | computed, **blank on 128 of 314** | The empty case is 41% of the library, so it's the common case, not the edge case. |
| **Price history** | **shipped 1 Aug**, empty on every record today | Recording started before there was anywhere to show it, because history only accumulates forward. **Will be empty for weeks.** Draw the empty state as the default, not an afterthought. |
| **Used by** | buildable, not built | A plain list of cocktails containing this product. No quantities — see below. |

**⚠️ Please draw the sparse case as the primary frame.** A brand-new
product has no URL, no history, and no cocktails — and 41% have no cost
either. **The panel with everything filled in is the rare one.** A
design that only works full will look broken on most of the library.

**⚠️ 13C lands a fifth item in this panel.** §9.3 moves the "not
ordered" toggle into the long-press menu as *"Don't order this"* /
*"Order this"* — drawn on 30 Jul, before this panel was ruled. **They
are the same surface.** When Cocktails is built, that toggle is one
more action under the info section, not a separate menu on recipe
rows. Please draw it that way rather than as its own thing.

That also means **recipe rows and product rows want the same panel**,
which is what Sean asked for anyway ("the same treatment in the
libraries and the rail"). Worth designing once for all three row types
rather than three times.

**Scope note, so it isn't re-proposed:** the old app split a quantity
across the cocktails consuming it ("18 limes → Margarita, 12 → Paloma"),
with an editable "General Use" row. Sean dropped it on 1 Aug. It was
produced by the estimator, which is parked. **Don't design it back in.**

---

## 🔴 0.2 · "In invoice" is already there and nobody can see it

Sean asked for an indicator showing which products are already on the
active invoice — *"a persistent highlight, a chip, an icon. I am open to
ideas."*

**It exists.** The landscape product row reads
`Spirits · 750 ml · $32.99 · in invoice`, per §0's ruling that the `+`
stays a `+` and the metadata carries the confirmation.

**He didn't see it**, which is the actual finding — it's 12px, muted, and
last in a dot-separated line. The mechanism is right and the volume is
wrong, which makes this the same problem as §0 rather than a new one.

Whatever replaces it shouldn't reintroduce a stepper in landscape — §0
ruled that out deliberately.

---

## 🟠 0.3 · Round 5 built — two of three errors, and why the third didn't

**13A shipped in full.** Skeleton at the real dimensions, uneven bar
widths, one pulse on the group at 1 → .55 → 1 over 1.6s, inert segments
and search, "Loading catalogue…" as the only status text, 200ms floor.
`prefers-reduced-motion` drops the animation and keeps the shape —
added rather than asked for, and worth saying so.

**13B error 1 (catalogue) and error 3 (sync stuck) shipped.**

**⚠️ 13B error 2 ("Couldn't open Marisol & Dev") was not built, and the
reason is structural rather than a shortcut.**

An open tab **carries its own invoice draft** — `OpenInvoice` holds a
`structuredClone` of the record, not an id to resolve later. So the
state the frame draws, *a tab that exists whose invoice failed to
arrive*, cannot occur. `openInvoice()` either finds the record and
opens a tab, or finds nothing and opens no tab.

The failure the frame is reaching for is real, but it happens
**somewhere else**: opening a saved invoice from History when the
collection didn't load. Today that returns silently and nothing appears
— which is a genuine gap. But its home is the History screen, and
`/history` is still a placeholder (11D is blocked on the same thing).

**Not asking for a redraw yet.** Flagging it so 13B isn't recorded as
fully built, and so error 2 gets designed against History when History
gets designed, rather than against a Builder state that can't happen.

### One thing measured while building that the frames assume otherwise

**A failed load with a warm cache is not an error.** `loadCollection()`
falls back to the cached list on purpose — it's the offline read path.
Replacing a usable 314-product catalogue with "Couldn't load the
catalogue" would be a regression wearing error handling's clothes.

So the built rule is: **error panel only when the load failed *and*
there is nothing cached.** The other case is exposed as `stale` and is
**deliberately not rendered anywhere** — there's no design for it and
nothing was invented.

> **Question for you:** does a stale catalogue deserve any treatment at
> all? Sean works events with no signal, so "these prices are from
> Tuesday" may be worth saying quietly, or may be noise. Genuinely
> open — currently silent.

### Also shipped: a way to see these on a device

`/debug/states` renders 13A, error 1 and error 3 from the **real
components**, with the banner's minutes and pending count adjustable.
Loading is over in milliseconds and errors need a dead connection, so
neither state could otherwise be checked on the iPad.

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
| §5.2 / 9B | Long-press line-item menu | ❌ not built — **superseded by §0.1, redraw as one panel** |
| §9.1 / 13A | Loading skeletons | ✅ **built 2 Aug** |
| §9.2 / 13B | Catalogue error, sync-stuck banner | ✅ **built 2 Aug** |
| §9.2 / 13B | Invoice error (error 2) | ⛔ **can't occur — see §0.3** |
| §9.3 / 13C | "Not ordered" rows | ⛔ blocked — Cocktails tab doesn't exist |
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

## 🟡 E · The fourth add row doesn't fit at 440px

First device test, 1 Aug. §5.1 specifies **four add rows** at half
height. Measured on a 390×844 iPhone:

| | |
|---|---|
| Drawer top bar (56 + 12/8 padding) | 76px |
| Search row | 64px |
| Segments | 45px |
| Chips, one row | 56px |
| **Left for the list** | **199px — 3.6 rows at 56px** |

Two ways to the fourth row: **shorter product rows** (52px gives 3.8,
48px gives 4.1) or **less chrome above the list**. Co-Work isn't shaving
either blind — the row height is drawn in 10A and the top bar's padding
is specified in §5.1's geometry note.

**Also fixed in the same pass, and worth recording as a caution:** the
chips were *wrapping* rather than scrolling, which stacked three rows
and left **71px** — the product list was effectively invisible. §5.1
already said they scroll and are cut mid-chip; Co-Work built it wrong
anyway. The spec was right and unread at the moment it mattered.

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
