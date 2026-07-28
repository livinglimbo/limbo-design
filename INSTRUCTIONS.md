# How we work

The Limbo Mixology invoice builder is built by four participants with
different jobs. This file explains who does what, who writes which files,
and exactly how a design becomes running software.

**Read this first.** Then `DESIGN.md` for the system, `DECISIONS.md` for
what's already settled.

---

## The four of us

### Sean — owner
Runs a mobile bartending and cocktail catering business. Owns the product
and makes every decision. **Not a developer** — shouldn't be asked to do
developer things, and any instruction given to him should be a command he
can paste or a button he can find.

He is also the only one who can move things between the other three. They
never talk to each other directly.

### Claude Design — visual proposals
Reads this repo. Produces layouts, palettes, component treatments, and
states. Explores faster than anything can be built, and catches things
implementation misses — it found a WCAG failure in the brand gold that had
already shipped.

**Read-only on this repo.** Proposes; doesn't decide, doesn't build.

### Grok — independent advisor
Product, process, tooling, architecture, and risk. Runs a pressure test
after meaningful changes land and records it in `ADVISOR.md`.

Advisory only. **Owns `ADVISOR.md`** and writes there directly.

### Claude Co-Work — implementation
Has the private application repo, the live Supabase database, the data
layer, and the deployment. Turns accepted proposals into working software.

Holds final decision rights on implementation, and is responsible for
keeping this repo accurate. Every proposal from Design or Grok gets
evaluated on its merits and can be declined with reasons.

> **One name, please.** Earlier files said "Claude Code", "Claude
> Co-Work", and "Claude" for the same participant. It's **Claude
> Co-Work**. Claude Design is the other one.

---

## Who writes what

The rule that keeps this repo trustworthy: **`limbo-design` describes what
is actually built, never what's proposed.** Ideas under consideration live
in `DECISIONS.md` with a status until they ship.

| File | Owner | Contains |
|---|---|---|
| `DESIGN.md` | Co-Work | The system as built. Real values, real class strings. |
| `DECISIONS.md` | Co-Work | Every proposal and its status, with reasoning. Design *and* process. |
| `design-tokens.json` | Co-Work | Machine-readable mirror of the CSS |
| `src/styles/globals.css` | Co-Work | **Copied verbatim from the app.** Never hand-edited here. |
| `src/` components | Co-Work | Real presentational components, incl. the icon set |
| `ADVISOR.md` | **Grok** | Pressure tests and recommendations |
| `INSTRUCTIONS.md` | Co-Work + Sean | This file |

**Before editing a file you share, read it fresh.** Co-Work does this now
as standing practice — assuming a cached copy is current is what caused a
merge conflict on 28 Jul.

---

## The pipeline

**`WORKFLOW.md` has the full step-by-step**, including which steps need
Sean. Not repeated here — one description in one place.

The short version, for orientation:

**Design proposes → Sean decides → Sean exports a Project archive into
`limbo-app/design-imports/` → Co-Work reads the real markup and rebuilds it
against the live data layer → Sean tests on a device → Co-Work updates this
repo → the next session inherits it.**

Grok's loop runs alongside: pressure test lands in `ADVISOR.md`, Co-Work
evaluates, **and the outcome is recorded in `DECISIONS.md` under Process
Decisions** — so a rejection keeps its reasoning instead of evaporating in
conversation and returning next month.

Two things worth knowing about the shape of this:

**Mockups are reference, not source.** Implementation is written from
scratch against Supabase, the offline write queue, auth, and routing. That
isn't a workaround — it's why a proposal doesn't need to worry about any
of it.

**Nothing here can judge how something feels in the hand.** Tap targets,
scroll behaviour, whether a pane is wide enough for a long product name.
There's a real iPad at the other end, and that's the only place those
questions get answered.

---

## For Claude Design specifically

### Please do

**Read `DECISIONS.md` first.** It'll save you a round.

**Several variants in one generation.** Three palettes in one output, not
three runs. Sean pays per generation and comparison is easier side by side.

**Label everything** — `2A`, `2B`. The decisions log is written from these.

**State contrast ratios.** Round 1 caught the brand gold at 2.1:1 against
the paper background, failing WCAG for text — a defect that had shipped and
been missed. That single catch justified the round. *(Note: the fix shipped
at `#8A6519`, not the proposed `#8F6A20`, which measured 4.34:1 — just
under the 4.5 threshold. Worth checking your own numbers against a
calculator.)*

**Say whether it's additive or a migration.** Quick yes versus a project.

**Explain the reasoning.** *"Rotating is the gesture that means 'let me
read this'"* outlived the layout it described. Principles generalise;
mockups don't.

**Say what you can't judge.** You can't feel a tap target or watch 314 rows
scroll under a thumb. Naming that is useful — there's a real iPad at the
other end, and a gesture playground built for exactly this.

### Please don't

**Don't produce code intended to ship.** Exports are reference, and good
reference. But they can't know about the Supabase layer, the offline write
queue, the auth proxy, or the routing. Reconciling two apps costs more than
building from a clear picture.

**Don't offer to deploy to Netlify or Vercel.** The real app already
deploys to Netlify from a private repo. A published mockup becomes a second
site that looks like the product and isn't.

**Don't introduce features that aren't on the roadmap.** A round-1 mockup
included a "Scan label" button. Barcode scanning had already been assessed
and parked — it needs a product database subscription and camera
permissions. A mockup is the wrong place for a feature commitment, because
it arrives looking decided.

**Don't suggest Figma, handoff tools, or component libraries.** The system
is Tailwind 4 with CSS custom properties. There's no design tool in the
chain, and **the icons already exist** — a stroke-based 24px inline SVG set
in `src/components/icons.tsx`.

### On GitHub access

**Connect this repo.** Reading it is the whole point — working from an
uploaded `DESIGN.md` alone means token names won't match the real
`globals.css`, and you won't see the components, the icons, or
`DECISIONS.md`.

Access is scoped to this repository only. The application repo is private
and stays that way.

**Connecting = yes. Writing = no.** Different things, and an earlier
version of this file conflated them. Not a trust question — Design knows
what it *proposed*, not what got *built*, and those diverge. The gold fix
is the example: the proposal was `#8F6A20`, what shipped was `#8A6519`.
Had the proposal written itself into the tokens, this repo would now be
wrong and nobody would have noticed.

---

## For Grok specifically

**Ground recommendations in the actual repo state.** The round-1 CI
proposal suggested `npm ci` and `tsc --noEmit` for this repo. Both would
have failed on the first run: there's no `package-lock.json` here, and the
`.tsx` files import React types that were never installed. `package.json`
exists as documentation of the stack, not as a build.

**Check which repo a recommendation belongs to.** That CI proposal was
right in principle and aimed at the wrong target — `limbo-design` is
reference material that never builds or deploys, so a type error there
costs nothing. `limbo-app` is where one ships a broken screen to an iPad.

**Read the Process Decisions section of `DECISIONS.md`** before
recommending. It records what's already been evaluated and why.

---

## What Co-Work needs to work well

Being explicit, since these are the things that silently slow it down:

- **Tell it when this repo changes.** It reads files fresh, but doesn't
  know to look. One sentence is enough.
- **The archive, not just screenshots.** Screenshots are fine for "what do
  you think"; the markup is what's buildable.
- **Device verdicts.** It can't test on an iPad. If something feels wrong
  in the hand, that information exists nowhere else.
- **Decisions on open items when they start blocking.** The palette
  direction and Builder layout are both open and will block the Builder.

---

## The product

See `DESIGN.md` for the full system — brand, tokens, layout, touch rules,
voice, anti-patterns. Deliberately not repeated here; one description in
one place.

The single fact that drives most of it: **this is used on an iPad,
standing up, often one-handed, sometimes behind a bar mid-event, sometimes
with no signal.**

**Built:** Product Library · authentication · navigation shell · design
system · offline-tolerant data layer

**Not built:** Invoice Builder · Invoice History · Cocktail Library · Prep
Recipes · Reports

The Builder is the biggest and most valuable thing left to design.
