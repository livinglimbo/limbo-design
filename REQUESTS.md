# Open requests — Co-Work → Claude Design

> **Reflects `limbo-app` @ `57032c4` — 29 Jul 2026.**

**Owner: Claude Co-Work.** Design and Grok read this; only Co-Work writes it.

This file exists because Design had no way of knowing what implementation
was actually stuck on. A round used to start from a guess about what was
needed. Now it starts here.

Since **29 Jul 2026** Design holds decision authority over design
(`INSTRUCTIONS.md`). So these are genuine questions, not proposals for
approval — where a spec has a gap, Co-Work is asking rather than filling
it in. **Nothing here is blocking a build.** Everything listed has either
shipped with a stopgap or is deliberately unbuilt.

---

## 🔴 1 · Five dark tokens I invented — please replace them

**Co-Work overstepped here.** The Builder handoff's dark table omitted
these five, and rather than ask, I measured values in the same family and
shipped them. That is exactly what the new authority rule forbids. They
are live in the app now, so replacing them is a token change, not rework.

| Token | What I shipped | Measured |
|---|---|---|
| `--accent-hover` | `#93B8A5` | 7.19:1 worst case |
| `--border-subtle` | `#2C271F` | separator, AA-exempt |
| `--text-faint` | `#7D7466` | 3.40:1 — placeholders/disabled only |
| `--accent-surface-fg` | `#F3EEE2` | 10.53:1 on `--accent-surface` |
| `--glyph` | `#8A8274` | 4.12:1, clears 3:1 |

`--glyph` is also **a token I added that you never named** — light
`#7C7568`, for close glyphs and drag handles needing 3:1. Your handoff
§1 mentioned that colour in prose but not as a token. Keep it, rename it,
or fold it into something existing.

---

## 🔴 2 · Active tab state doesn't meet 3:1

Handoff §3.1 marks the active tab with fill (`--surface` vs `#E1DACA`)
plus a 2px `--gold` top edge. Measured:

- fill difference: **1.33:1** — effectively invisible
- `--gold` `#B4863F` on those fills: **2.6–3.1:1**

WCAG 1.4.11 wants 3:1 for a visual indicator identifying a control's
state. The fills do almost nothing, so the gold edge carries the signal
alone and is marginal. In daylight I'd expect it to fail in practice.

**Shipped as drawn**, plus bolder text on the active tab as a third
signal — a stopgap Co-Work added, not a fix. Your call: darker inactive
fill, thicker edge, or a different treatment entirely.

---

## 🔴 3 · I built from the prose and never opened the drawings

**Co-Work's error, corrected 29 Jul.** I built the whole Builder from
`HANDOFF.md` without opening `Invoice Builder - iPad.dc.html` or any of the
ten screenshots — despite the README saying to read the drawings second.
Sean's reaction on seeing it: *"Nothing like Design showed me. I'm
severely disappointed."* He was right.

Rebuilt against frames 5a, 5c and 6a. What the drawings carry that the
prose doesn't, and I had wrong:

| | Prose gave me | Drawings show |
|---|---|---|
| Invoice columns | "column header" | **Item · Price · Qty · Subtotal** — four, with a per-line subtotal |
| Category headings | name + count | name, **hairline rule**, and the **category subtotal** right-aligned |
| Quantity control | "44×44 steppers, 54px readout" | bare `−` `+` glyphs around a **boxed** field, not bordered buttons |
| Footer | "sticky totals" | line count · drinks estimated · **pre-tax figure with the rate** |
| Tabs | "name + a 44px ✕" | name only — I had added a running total |
| Invoice header | "right-aligned in the header" | **one line**: name, meta inline, controls right. I built three stacked rows with a stage chip and a warning banner. |
| Rail segments | "three segments" | a **segmented control** — one sunken track, active raised |
| Rail rows | "44px + rows" | name + **one dot-separated metadata line**: category · unit · price · *in invoice* |
| Rail `+` | §5: "the row's + becomes a live stepper in place" | **stays a `+`.** "in invoice" in the metadata is the feedback. §5's stepper-in-place is the *portrait drawer*; I applied it in landscape. |
| Sheet position | "centred, max-width 660px" | runs **flush to the right edge**. I had it floating with a gap both sides. |
| Chips | full `CAT_ORDER` names | **short labels** — Spirits · Mixers · Rentals — plus a **No cost data** chip |

**Two contradictions I need you to settle:**

1. **5a shows a brass dirty dot on tabs; 6a says it's gone.** I built no
   dot, since 6a is the later turn and the README lists it as the tab
   strip to build. Confirm that's right.
2. **5c draws a Save button in the drawer's top bar**, and §5 says "totals
   and Save live in the drawer's top bar" — but §3 removes Save entirely
   under autosave, and §3.5 says the phone's must come out. I built no
   Save button. Same question for the iPad.

**One thing in the drawings that can't be built as-is:** the chip row
includes **Garnish**, which is not a real category. The nine real ones are
`CATEGORY_ORDER` plus Prep Ingredients. 5a also shows "Dehydrated
grapefruit wheel — Garnish". I used real categories with the old app's
short labels. If Garnish should exist, it's a data migration, not a chip.

---

## 🔴 4 · Everything in the Builder skeleton I invented

Audited after the authority change. The skeleton follows the handoff on
everything §2 and §3 specify. These are the places I went past it — listed
so none of them can be mistaken for a decision Design made.

**Two were corrections, already applied:**

- **Bolder text on the active tab.** I added it as a third signal to
  compensate for the 1.33:1 contrast problem in item 2. That was overriding
  a treatment you specified. **Removed** — the tab now shows exactly what
  §3.1 draws, and the contrast number stands as a report.
- **Inactive tab fill.** §3.1 names the literal `#E1DACA`. I had
  substituted `--surface-sunken` (`#EAE4D6`) because no token exists for
  it. **Now the literal value**, as drawn. It's a raw hex inside a
  component, which the token system exists to prevent — **please name it**,
  or fold it into an existing token.

**Still invented, because §7 says these aren't designed yet.** Each is a
placeholder I'd rather you replaced than inherited:

| Where | What I made up |
|---|---|
| Collapsed rail contents | §2 gives the 60px width but not what's *in* it. I put a search button that expands, the three segments as 44px targets with two-letter labels, and a line count. **Two-letter labels are a stopgap** — the real answer is icons, and only five exist in `icons.tsx`. |
| Rail toggle control | A text button above the invoice sheet reading "Hide products" / "Show products". Not drawn anywhere. |
| Drawer chevron glyph | `▴` / `▾` characters. §5 asks for a 44px chevron; it doesn't say what it looks like. |
| No invoice open | Centred "No invoice open" with a New invoice button |
| Empty invoice | "Nothing on this invoice yet. Add products from the source panel." |
| Locked invoice | The stage name appended to the header's meta line. The warning banner I'd built is **gone** — 6a's point is one status line, and a banner made two. |
| Details / Cocktails | Stub copy describing what will go there |
| Silent rows | 60% opacity plus a small "silent" marker. Not specified anywhere. |
| Tax rate | **8.25%**, taken from 5c's footer (`$440.80 + 8.25% tax`). Hardcoded as a default. It almost certainly belongs in event details or settings — where? |
| Drinks estimated | 5c's footer shows "383 drinks estimated". **Not shown** — that number comes from the estimator, which isn't built. The line will look short until it is. |
| Column widths | Price 64px, Qty 124px, Subtotal 84px. Chosen to fit, not measured off the drawing. |

Two of these matter more than the rest. **The tax rate is a real number on
a real invoice** and I've hardcoded it. And the **drinks estimate** is a
visible gap in the footer until the estimator exists.

---

## 🟡 5 · Undo depth on restart — a real storage limit

Handoff §3.3 asks for depth 50 surviving close and reopen. Depth 50 holds
in memory. **Persisting all of it does not fit:** a 40-line invoice
serialises to ~10KB, so 50 steps × 8 open invoices is ~4MB against a
browser budget of roughly 5MB — and overflowing takes the tab list down
with it.

Shipped: a byte budget of 300KB per invoice, newest steps first. Small
invoices persist their full history; large ones keep fewer. Undo always
works within a session.

This is carve-out 2 — a genuine limit, not a preference. Flagging so you
know the guarantee is weaker than specified, in case it changes anything
about how undo is presented after a restart.

---

## 🟡 6 · Sean's read on palette 3A

Sean's words on seeing it: *"The color changes are so minor from my
perspective."* All 48 values are live and measured, and the pure-white
`--surface` violation is fixed — but the change isn't registering as one
for him. Worth knowing before the next visual round.

---

## 🟢 7 · Not designed yet — Co-Work will not improvise these

From your own §7, restated so it's tracked in one place:

- **Stage control** — 4 track stages, 2 gated (Ready to Send, Complete),
  2 reversibly locked, Archived as a side exit from *any* stage. The
  logic is built and has no interface. This is the biggest gap.
- **iPhone procurement mode** — where the five `ps-*` states live.
- **Sync / offline states** — beyond the save-state slot, which is built.
- **The 128 uncosted products** — better than a filter chip.
- **Empty, loading and error states** for the Builder.
- **Kits** — logged open in `DECISIONS.md`. Sean wants it sooner than later.

---

## 🟢 8 · Line-menu glyphs, when the menu is built

§5.2 needs four that don't exist in `icons.tsx`: keypad, note lines,
folder, bin — with the folder deliberately unlike the bin, since two
adjacent rows both reading as delete is the failure mode.

**Already added by Co-Work:** `UndoIcon` and `RedoIcon`, drawn as
**u-turns** per your §3.7 warning — a straight stem with the arrowhead
reversing over it, so neither resembles `HistoryIcon`'s arc. Please check
them against the set.

---

## What's built and testable now

`/builder` — working skeleton, iPad landscape. Tab strip, source rail
against the real 314-product library, invoice as a centred document, 52px
rows, 44×44 steppers with a 54px readout, `CAT_ORDER` grouping, sticky
totals, autosave, undo.

**Rail collapse + iPad portrait drawer are now built**, as one mechanism:
a single "how much source is showing" level that reads as a rail width at
1024px and above and a drawer height below it. Rotating keeps the level.
Both §5 rules hold — no scrim anywhere, and the total sits in the drawer's
top bar at all three heights. The 44px chevron duplicates the drag.

**Not built:** phone screens (§5.1 — the one-row 77px peek with the
`1fr 160px 1fr` grid, 440px half, four add rows), long-press line menu
(§5.2), templates sheet (§4), Details and Cocktails segments, stage
control.

`/debug/autosave` — exercises autosave, the four save states, the 8-tab
least-recently-used cap and the undo stack.
