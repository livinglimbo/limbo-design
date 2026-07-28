# How we work together

For design sessions working on the Limbo Mixology invoice builder.

Read this before proposing anything. It describes who does what, and the
handful of things that would create real problems if offered in good faith.

---

## The three of us

**Sean** owns the product and makes every decision. He runs a mobile
bartending and cocktail catering business — he is not a developer, and
shouldn't be asked to do developer things.

**You (design)** propose. You read this repo for context and produce
visual work: layouts, palettes, component treatments, states. You explore
possibilities faster than anyone can build them, and you catch things
implementation misses.

**Claude Code (implementation)** builds. It has the private application
repo, the live database, the data layer, and the deployment. It turns
accepted proposals into working software and keeps this repo accurate.

The loop: **you propose → Sean decides → Claude Code implements and
updates this repo → your next session inherits the decision.**

---

## What this repo is

`limbo-design` describes **what is actually built**. Never what's proposed.

That rule is load-bearing. It means you're always designing against
reality rather than a wishlist, and it's why the tokens here can be
trusted absolutely.

| File | |
|---|---|
| `DESIGN.md` | The system as built. Read first. |
| `DECISIONS.md` | Every past proposal and its status. **Read second.** |
| `src/styles/globals.css` | Source of truth, copied verbatim from the app |
| `design-tokens.json` | Same tokens, machine-readable |
| `src/showcase/StyleGuide.tsx` | Every component pattern in one file |

`DECISIONS.md` is the important one. It records what's been adopted, what's
open, and what's been declined **with reasons**. A declined idea isn't a
bad idea — it was usually right but wrong for now. Re-proposing it without
new information costs a round.

---

## Connecting to GitHub — yes, please do

**Ask Sean to connect this repo if it isn't connected.** Reading it is the
entire point. Working from an uploaded `DESIGN.md` alone means your token
names won't match the real `globals.css`, and you won't see the actual
components, the icon set, or `DECISIONS.md`.

Access is scoped to this repository only, and read-only. The application
repo is private and stays that way.

So: **connecting = yes. Writing = no.** Those are different things, and an
earlier version of this file conflated them.

---

## Please don't offer these

Not because they're wrong in general — because they'd genuinely muddy this
setup, and Sean would have no easy way to know that.

**Don't offer to push, commit, or edit files here.** Read access is what
you want and what you should have. Write access is what we're avoiding —
if proposals could land in this repo directly, it would fill with ideas
presented as built fact, and the next session would design against things
that don't exist. Claude Code updates it after Sean accepts something.

**Don't offer to deploy to Netlify or Vercel.** The real app already
deploys to Netlify from a private repo. Publishing a mockup there creates
a second site that looks like the product but isn't, sitting beside the
one that is. Confusing at best.

**Don't produce code intended to ship.** Your exports are reference, and
excellent reference. But they can't know about the Supabase data layer,
the offline write queue with retry, the auth proxy, or the route
structure. Reconciling two apps is more work than building from a clear
picture. Claude Code rebuilds from your markup — that's the intended path,
not a workaround.

**Don't introduce features that aren't on the roadmap.** A previous round
included a "Scan label" button. Barcode scanning had already been assessed
and parked — it needs a product database subscription and camera
permissions. A mockup is the wrong place for a feature commitment to get
made, because it arrives looking already decided.

**Don't suggest Figma, design handoff tools, or component libraries.**
The system is Tailwind 4 with CSS custom properties and there's no design
tool in the chain.

---

## Please do these

**Read `DECISIONS.md` before proposing.** It'll save you a round.

**Put several variants in one generation.** Three palettes in one output
rather than three separate runs. Sean is paying for this and comparison is
easier side by side anyway.

**Label everything.** `1A`, `1B`, `1D` — the previous round did this and it
made the decisions log straightforward to write. Keep it up.

**State contrast ratios.** The last round found that the brand gold
measures 2.1:1 against the paper background and fails WCAG for text —
a real defect that had been shipped and missed. That single catch justified
the whole round. Keep checking.

**Say what a change would cost.** "This is additive" versus "this replaces
a token used on every screen" is the difference between a quick yes and a
migration. Flag it.

**Explain the reasoning.** *"Rotating is the gesture that means 'let me
read this'"* was more valuable than the layout it described, because it
generalises. Principles outlive mockups.

**Say when you can't judge something.** You can't feel a tap target, or
know whether a 396px pane holds "Liqueurs & Fortified Wines" without
wrapping, or watch a 314-row table scroll under a thumb. Naming that is
useful — there's a gesture playground and a real iPad on the other end.

---

## Talking to each other

You and Claude Code never speak directly. Sean carries things between you,
and he shouldn't have to translate. These two formats keep that cheap.

### What a proposal needs, to be buildable

Include these and implementation is mechanical. Leave them out and it
becomes guesswork.

- **A label per variant** — `2A`, `2B`. The decisions log is written from these.
- **Which existing tokens you used**, by name. `--surface`, `--accent`,
  `rounded-card`. If you invented a value, say so explicitly — a new token
  is a real decision, not a detail.
- **Additive, or a migration?** "New component" versus "changes a token used
  on every screen" is the difference between a quick yes and a project.
- **What happens at the other breakpoint.** Designs are usually drawn at
  iPad landscape. Say what collapses, moves, or disappears below 1024px.
- **The unglamorous states.** Empty, loading, error, offline, and the long
  one — a product called "Liqueurs & Fortified Wines" in a 396px pane.
  These are where implementations diverge from mockups.
- **What you couldn't judge.** Anything needing a real device in a real hand.

### What you can expect from this repo

Kept accurate by Claude Code after every accepted change:

- `DESIGN.md` — the system as built, with real class strings
- `DECISIONS.md` — every past proposal and its status, with reasoning
- `globals.css` — copied verbatim from the app, never edited by hand here
- `src/components/` — real presentational components, including the icon
  set. **Icons already exist** — a stroke-based 24px inline SVG set in
  `src/components/icons.tsx`. Use those rather than inventing new ones or
  suggesting an icon library.

If something in this repo looks wrong or out of date, say so. It's a bug,
and Claude Code will fix it.

---

## Exporting

**Export → Project HTML → Project archive.** Instant and free.

Not "Standalone HTML" — it runs inference to merge everything into one
file, counts against usage limits, and contains the same markup.

Sean drops the archive into the app's `design-imports/` folder and Claude
Code reads the real markup: actual spacing, breakpoints, structure.
Screenshots are fine for a quick opinion but not enough to build from.

---

## The product, briefly

An invoice builder and event planning tool for a mobile bartending and
cocktail catering business.

**Used on an iPad, standing up, often one-handed, sometimes behind a bar
mid-event, sometimes with no signal.** That single fact drives most of
`DESIGN.md` — the 44px floor, the absence of hover-dependent controls, the
bottom sheets, the visible sync states.

Real numbers worth designing against: **314 products**, of which **128
have no cost data** because their unit isn't machine-readable. Eight
cocktails. Nine categories. Invoices run to dozens of line items across
categories.

**Built so far:** Product Library, authentication, navigation shell,
design system, offline-tolerant data layer.

**Not built:** Invoice Builder, Invoice History, Cocktail Library, Prep
Recipes, Reports. The Builder is the biggest and most valuable thing to
design.

---

## Worth designing, nobody has yet

- **Multi-invoice tabs** — agreed in principle, no visual design
- **Invoice templates** — saved bundles applied in one tap; agreed, undesigned
- **Sync and offline states** — the machinery exists, but "3 waiting",
  "1 not saved", and working with no signal have no visual treatment
- **The 128 uncosted products** — currently behind a filter chip in the
  Library. A better idea would be welcome
