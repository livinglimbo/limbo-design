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

## 🟡 3 · Undo depth on restart — a real storage limit

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

## 🟡 4 · Sean's read on palette 3A

Sean's words on seeing it: *"The color changes are so minor from my
perspective."* All 48 values are live and measured, and the pure-white
`--surface` violation is fixed — but the change isn't registering as one
for him. Worth knowing before the next visual round.

---

## 🟢 5 · Not designed yet — Co-Work will not improvise these

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

## 🟢 6 · Line-menu glyphs, when the menu is built

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

**Not built:** the rail's 360→60 collapse *(everything portrait waits on
it — the collapsed state is meant to BE the portrait layout)*, the
portrait drawer, phone screens, long-press line menu, templates sheet,
Details and Cocktails segments.

`/debug/autosave` — exercises autosave, the four save states, the 8-tab
least-recently-used cap and the undo stack.
