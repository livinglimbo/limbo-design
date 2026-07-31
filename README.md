# Limbo Mixology — design system and working agreement

> **Reflects `limbo-app` after the 30 Jul 2026 round.**

Design reference for the **Limbo Invoice Builder** — a supply-invoice and
event-planning tool for a mobile bartending and cocktail catering business.

**This file replaced `INSTRUCTIONS.md` and `WORKFLOW.md` on 30 Jul 2026.**
Three files described the same workflow across 581 lines; when the
authority rule changed, all three needed editing and one was left stale
with a note admitting it. One file that stays true beats three that don't.

---

## Read these, in this order

| File | What it's for |
|---|---|
| **`REQUESTS.md`** | **Start here.** What implementation is stuck on right now — the agenda for the next round. |
| `DESIGN.md` | The system as built. Real values, real class names. |
| `DECISIONS.md` | Every decision and its reasoning, including rejected ones. Read before re-proposing anything. |
| `design-tokens.json` | Machine-readable mirror of the app's `globals.css`. |
| `src/` | Real presentational components, including the icon set. |

---

## Who does what

**The team is GILD — Go In Limbo Development.** Named by Sean, 30 Jul
2026. Use it for the three of us collectively, in commits, docs and
conversation. *(To gild is to cover in gold, and `--gold` is the brand
accent — the pun is intended.)*

**🧑 Sean — owner.** Decides scope, priority, and anything with a cost he'd
feel. Tests on real hardware — the only place tap targets, scroll feel and
rotation can actually be judged.

**🎨 Claude Design — decides the design.** Layouts, palettes, component
treatments, states.

> **Design holds decision authority over design** *(29 Jul 2026)*. A spec
> is an instruction, not a proposal. Co-Work builds what's drawn —
> including things it would argue with — and raises concerns afterwards in
> `REQUESTS.md` rather than holding a build open.
>
> **Three carve-outs, and Co-Work builds first in all three:**
> 1. **Measured facts get reported, not vetoed.** A contrast failure lands
>    in `REQUESTS.md` with the number; it doesn't block the build.
> 2. **A real impossibility ships the closest workable thing**, with the
>    difference named. Not "I'd do it differently" — something that cannot
>    work, like 4MB of undo history in a 5MB storage budget.
> 3. **Nothing invented in a gap.** An omission is a question for Design,
>    not a blank for Co-Work to fill.

**⚙️ Claude Co-Work — implementation.** Has the private app repo, the live
Supabase database, the data layer and the deployment. Owns implementation
decisions: state, storage, performance, build order. Keeps this repo
accurate.

*Grok was a fourth participant until 30 Jul 2026. Removed — it hadn't been
used in weeks, and an unused protocol step becomes a stale document.
`ADVISOR.md` is gone; paste an outside opinion into `DECISIONS.md` if you
want one on the record.*

---

## The loop

**Design reads `REQUESTS.md` → decides and specifies → Sean exports a
Project archive into `limbo-app/design-imports/` → Co-Work builds it as
drawn → Sean tests on a device → Co-Work updates this repo and rewrites
`REQUESTS.md`.**

Two things that went wrong, both now rules:

**Re-export on every design turn.** A bundle exported before the turn that
answered something contains the question and not the answer. That happened
once and cost a full round.

**The drawings are the spec, not the prose.** `HANDOFF.md` describes; only
the frames show. Co-Work builds from the screenshots and the design file,
and reads captions — captions resolve contradictions between turns.
Building from prose alone cost an entire rebuild on 29 Jul.

---

## What Design should hand over

**Please do:**

- Badge every frame (`5a`, `10c`) and say in the bundle's README which are
  **build** and which are **superseded**. Later turns win.
- State numbers: sizes, weights, spacing, the exact token name.
- Say *why* when a decision is load-bearing — the reasoning survives into
  code comments and stops it being quietly undone later.
- Name gaps explicitly. "Not designed" is more useful than silence,
  because silence gets filled.
- **🔑 Hand over React with real Tailwind class names, not prototype
  HTML.** *(New, 30 Jul 2026 — the biggest change to this workflow.)*

  Translation is where every error has happened. "Three segments" became a
  segmented control when the drawing showed underlined tabs. "Column
  header" lost the per-line subtotal. If the markup arrives in the app's
  own idiom there is nothing to translate, and the visual layer is Design's
  verbatim.

  So instead of inline-styled HTML:

  ```tsx
  <button
    className="relative min-h-[44px] flex-1 px-2 text-sm font-semibold text-text"
  >
    Products
    <span className="absolute inset-x-2 bottom-0 h-[3px] rounded-t bg-gold" />
  </button>
  ```

  Real token names (`text-text-body`, `bg-surface-recessed`, `border-line`,
  `rounded-control`), real 44px targets, real `--gold` / `--accent`
  distinction. It doesn't need to compile or have working state — Co-Work
  wires behaviour. It needs to be the *appearance*, unambiguously.

  Keep the drawings too. The frames still resolve questions the markup
  can't, and captions still settle contradictions between turns.

**Please don't:**

- Invent categories or data that don't exist. "Garnish" cost a round.
- Rely on hover alone. A finger has no hover.
- Assume a value can stand in for a token that means roughly the same
  thing — name the token, or say a new one is needed.

---

## Connecting this repo — read, don't write

**Connect it.** Reading it is the whole point: working from an uploaded
`DESIGN.md` alone means token names won't match the real `globals.css`,
and you won't see the components, the icons, or `DECISIONS.md`.

Access is scoped to this repository. The application repo is private and
stays that way.

**Connecting = yes. Writing = no.** Different things, and not a trust
question. Design knows what it *proposed*; only Co-Work knows what got
*built*, and those diverge. The gold fix is the example — the proposal was
`#8F6A20`, what shipped was `#8A6519`, because the proposed value measured
4.34:1 and needed 4.5. Had the proposal written itself into the tokens,
this repo would now be wrong and nobody would have noticed.

---

## The one thing only Sean can answer

Co-Work writes the code but **has never seen it on a screen**. It runs in
a sandbox with no display, no browser and no iPad. Everything it knows
about how the app looks comes from reading code, from Design's frames, and
from Sean.

So there's a category of question that exists nowhere else:

- Does that button feel right under a thumb, or is it a stretch?
- Does a long product name wrap badly at 360px?
- Does rotating the iPad do something jarring?
- Is the gold readable outdoors, in daylight, on a patio?
- Does the whole thing feel like *Limbo*, or generic?

**"It feels off" is useful information even without knowing why.** When
Co-Work asks for a device check, that's the gap it's closing.

**The fastest way to answer it: screenshot the iPad and drop the image
anywhere in the project.** Co-Work reads images. One real screenshot at
the real size beats any amount of describing — and it shows touch,
rotation and daylight, which a desktop browser can't.

*Adopted 30 Jul 2026 in preference to giving Co-Work its own browser: same
cost, more honest, nothing to install.*

---

## Which app am I looking at?

Both are on Netlify, at different addresses.

| | |
|---|---|
| **New app** | https://limbo-app.netlify.app |
| **Old app — still what Sean invoices with** | https://effulgent-semolina-c2d5ff.netlify.app |

**The old app hasn't been touched since the rebuild started and cannot
break from anything done here.**

---

## Hard constraints

Testable, and not up for re-proposal. Full list with reasoning in
`DECISIONS.md`.

- **Never pure white or pure black as a background.** `#FFFFFF` is still
  correct as a *foreground* on a coloured surface.
- **No `#FFFFFF` as any `--surface*` token value.**
- **Text meets 4.5:1** against whatever it sits on.
- **`--gold` is fills, borders and underlines only** — never type, in
  either theme. `--gold-text` exists for that.
- **Safe-area insets** on anything at a screen edge.
- **Pinch-zoom stays enabled** — `maximumScale: 5`, never 1.
- **Pointer Events**, not touch or mouse events — the one API covering
  finger, cursor *and* Apple Pencil hover.
- **This repo describes what is built**, never what's proposed.

Everything else is guidance — strong defaults, open to a good argument.
That includes the 44px target minimum, which Sean is still validating on
real hardware.

---

## Stack, platform, fonts

Next.js 16 · TypeScript · Tailwind 4 · Supabase. **Primary platform is
iPad**, then iPhone, then desktop. Used standing up, often one-handed,
sometimes behind a bar mid-event.

Two typefaces, both serif, deliberately — there is no sans-serif in this
product. **Eyesome** for display: purchased, and its files are **not** in
this public repo, so anything rendered here falls back to a system serif
and will look wrong. That's expected; see `fonts/FONTS.md`. **Radley** for
body, free from Google Fonts.

`src/styles/globals.css` is **copied verbatim from the app**. Never
hand-edit it here — the app is the source of truth, and
`npm run check:tokens` warns when the two disagree.

**For design tools reading this repo cold:** `DESIGN.md` is the best
single input. It carries real Tailwind class strings copied from the
components rather than descriptions of them, plus an anti-patterns
section — the common failure is being handed back something in Inter on a
white background with 32px tap targets, and that list exists to stop it.
