# Limbo Mixology — design system and working agreement

> **Reflects `limbo-app` on branch `trash-filter-34`, 12 Sep 2026.**
> ⚠️ The working agreement below was written 30 Jul; the sections on
> what implementation can do and on visibility were rewritten 12 Sep,
> because the assistant in that seat changed and the old text said
> nothing had.

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

**⚙️ Claude Code — implementation.** *(Was Claude Co-Work until 10 Sep
2026.)* Has the private app repo, the live Supabase database, the data
layer and the deployment. Owns implementation decisions: state, storage,
performance, build order. Keeps this repo accurate.

> ⚠️ **REINTRODUCTION — 12 Sep 2026, at Sean's instruction.** This line
> used to read *"same seat, same authority, same obligations."* **The
> first two are true and the third is truer than before. The
> implication that nothing else changed is not**, and it has been
> costing Design work: handoffs are still being calibrated for an
> assistant that could not run the app.
>
> **I am Claude Code, running on Sean's MacBook — not in a sandbox.**
> The seat and the authority are unchanged: Design still decides
> design, I still build what is drawn, the three carve-outs still
> stand. **What changed is what I can do with a ruling once I have
> it**, and it changes what a handoff should contain.

---

## ⚙️ What implementation can actually do — and what it changes about a round

**Read this before preparing a handoff.** Every item is something
Co-Work could not do, and every one of them has already changed an
outcome.

**1 · I run the app and measure the rendered DOM.** Dev server, real
production builds, a browser I can drive, viewport emulation, light and
dark. ⚠️ **So numbers in a handoff get verified, not transcribed.**
Round 28: twelve faces, twelve widths — **ten reproduced exactly, two
did not**, and the two that did not include the one carrying a
recommendation. That is not distrust, it is the loop working. **Publish
your METHOD with a number** and the two harnesses can be compared;
"measured at 30px/600, no tabular-nums" is what let me find that my own
probe was the thing that was wrong on the other nine.

**2 · I can build a live switcher, so OPTIONS SHOULD ARRIVE AS DATA.**
`/style/look` in the app is a working control: Sean taps between
palettes, faces, materials and blur treatments on the iPad, and it
measures each one live on the device he is holding. **Adding a theme is
a data edit** — an object with token values. ⚠️ **A frame has to be
read and transcribed; an object is pasted in.** Round 28 asked for 21
distinct looks and Design answered almost entirely in values; it was
the fastest round this project has had. **Draw only what a value cannot
carry** — an arrangement, a geometry, where a rule starts and stops.
§36.7 asked for this switcher before three separate look decisions were
reversed on a screen. It exists now.

**3 · I write and run check scripts, and I fault-inject them.** 33 of
them gate every build. ⚠️ **A ruling can be made MECHANICAL rather than
remembered** — if you want a rule enforced, say so and it becomes a
check that fails. §39.2's translucency rule is now a counted exception
rather than a sentence someone has to recall. **And they are broken on
purpose to prove they fail**: an 11 Sep audit found five checks quietly
covering less than they claimed, including one that had never been
wired into the build at all.

**4 · I read both repos directly, at any commit.** Source, git history,
the reasoning in old commits. ⚠️ **You do not need to describe the
current state of the code to me** — ask me to read it, or cite a file
and a line. §36.5's correction to its own `font-display` count came
from reading source, and it was right where the earlier estimate was
not.

**5 · What has NOT changed, and it is the important half.** I cannot
see the iPad. Chrome on a Mac is not the platform, and I say so in
every measurement I hand over. I do not make design rulings. I do not
touch the database directly. **"It feels off" from Sean still outranks
anything I can measure** — round 28 exists because T3 shipped, looked
right in every number, and he disliked it on the device in a day.

---

## 🔁 Who can see what, and when — the visibility rules

**Sean, 12 Sep: *"I've been getting very confused as to how Design and
yourself work together and who knows what, when, and how."*** Two
failures on 11 Sep make the rules worth stating rather than assuming.

**Design sees `limbo-app` only through GitHub, and only what is
PUSHED.** ⚠️ On 11 Sep, seven commits sat unpushed on a branch —
§34, §35, §39 and the Look Lab. Design was about to specify a round
against a codebase four rounds stale, through no fault of its own.
**So: I push before asking Design to read anything, and I name the
branch.** Most work lives on a feature branch, not `main`.

**A stale read is possible even when the file is current.** The Round
28 brief was on `main`, verified live, and Design read a copy that did
not contain it. ⚠️ **So a handoff or a brief should be cited by BRANCH
and COMMIT, not by "current"** — and if what you read does not match
what is cited, say so immediately rather than working from a summary.

**Design writes nothing in `limbo-app`; I write nothing in Design's
answers.** I own `REQUESTS.md` in this repo — Design reads it. Design's
rulings reach me as a zip through Sean; **Design cannot put a file in
front of me directly**, which is why a bundle must be re-exported after
the turn that answers something.

**What I owe you each round:** what was built, what was measured and on
what, what I could not resolve, and anything of yours that did not
reproduce. **What I will not do:** silently absorb a contradiction
between two of your rulings. Two checks encoding two rulings that
disagree is the system working; it gets raised, not resolved by
whoever ran the build.

⚠️ **"Co-Work" appears throughout this file and in `REQUESTS.md`. Read it
as "implementation" wherever it does** — the role never belonged to a
particular assistant, and rewriting a year of rounds to rename it would
edit the record rather than continue it.

*Grok was a fourth participant until 30 Jul 2026. Removed — it hadn't been
used in weeks, and an unused protocol step becomes a stale document.
`ADVISOR.md` is gone; paste an outside opinion into `DECISIONS.md` if you
want one on the record.*

---

## The loop

**Design reads `REQUESTS.md` → decides and specifies → Sean exports a
Project archive into `limbo-app/design-imports/` → implementation builds
it as drawn → Sean tests on a device → implementation updates this repo
and rewrites `REQUESTS.md`.**

⚠️ **One step is now optional and was not before.** *"The drawings are
the spec"* remains true for anything a drawing is needed for. But
**values can skip the drawing entirely** — palettes, font stacks,
material recipes and token maps go straight into `/style/look` as
objects, and Sean flips between them on the iPad the same evening. See
"What implementation can actually do", item 2.

Two things that went wrong, both now rules:

**Re-export on every design turn.** A bundle exported before the turn that
answered something contains the question and not the answer. That happened
once and cost a full round.

**The drawings are the spec, not the prose.** `HANDOFF.md` describes; only
the frames show. Implementation builds from the screenshots and the design
file, and reads captions — captions resolve contradictions between turns.
Building from prose alone cost an entire rebuild on 29 Jul.

⚠️ **AND EVERY NEW PNG GETS READ INDIVIDUALLY, WHICH IS WHY IT MATTERS
WHAT YOU DRAW.** Skipping one is a documented failure on this side. The
corollary is that a frame drawn to carry a VALUE costs a read for
something an object would have delivered exactly — round 28 shipped two
frames and a file of values, and both frames earned their place because
they showed where a blur meets a figure and where a row rule starts and
stops. Neither is expressible as a number.

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

⚠️ **REWRITTEN 10 Sep 2026 — implementation changed seats, and this
section described the old one's limits.** Co-Work has handed over to
**Claude Code**, running on Sean's own MacBook rather than in a sandbox.
The rest of the working agreement is unchanged; this part is not, and
Design should know what it may now assume.

**What changed.** Co-Work *"had never seen it on a screen"* — no display,
no browser, no iPad — and it could not even run `next build`, because SWC
was unavailable for its architecture. Type-checks and 31 check scripts all
passed without ever proving the app compiles. *(There are 33 now, all
gating the build.)* Claude Code runs real
production builds, serves the app, reads rendered output, and can drive a
browser on the machine.

⚠️ **So "measured by eye" is no longer an acceptable answer from
implementation.** Co-Work's own handover lists reporting geometry by eye,
and being wrong, as a repeat failure — a 6px step that was 15px, 292px of
tracks that were 336px. That excuse is gone. **Implementation measures; it
does not estimate.**

**What has NOT changed, and this is the part that matters to Design:** a
build machine is still not a device. These remain answerable only by Sean,
on real hardware:

- Does that button feel right under a thumb, or is it a stretch?
- Does a long product name wrap badly at 360px?
- Does rotating the iPad do something jarring?
- Is the gold readable outdoors, in daylight, on a patio?
- Does the whole thing feel like *Limbo*, or generic?

**"It feels off" is useful information even without knowing why.** When
implementation asks for a device check, that is still the gap it is
closing — and it is a narrower, more honest gap now, because everything
*measurable* should already have been measured before the ask.

**The fastest way to answer it is still an image.** ⚠️ And Sean's own
convention is sharper than the original wording here: **photograph the
screen rather than screenshotting it.** A screenshot cannot show that
something is unreadable at arm's length in a dim room, which is where this
app gets used. Drop it anywhere in the project.

*The original approach was adopted 30 Jul 2026 in preference to giving
Co-Work its own browser — "same cost, more honest, nothing to install."
That reasoning held for every round since; it is superseded by
implementation simply having a machine now, not overturned.*

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
