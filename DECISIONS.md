# Decisions Log

Shared memory across all four participants. Every proposal — from Claude
Design or from Grok — gets logged here with what happened to it and why.

Two sections: **design decisions** (visual, from Claude Design) and
**process decisions** (workflow, tooling, architecture, mostly from Grok).

**Read this before proposing.** It's the record of what has already been
considered — including things that were rejected, and the reasons. Nothing
here is a criticism of a proposal; a good idea can still be wrong for now.

**Status meanings**

| Status | Means |
|---|---|
| ✅ Adopted | Live in the app. `globals.css` and `DESIGN.md` reflect it. |
| 🔨 Accepted, not built | Agreed. Waiting on the relevant screen. |
| 🕓 Open | Under consideration. Needs a decision. |
| ❌ Declined | Considered and rejected. Reason given. Don't re-propose without new information. |
| 🚫 Out of scope | Belongs to another tool or another product. |

---

## How this works

`limbo-design` describes **what is actually built**, never what's proposed.
That's deliberate — designs should be made against reality, not against a
wishlist.

The loop:

1. Design session proposes
2. Sean decides
3. Implementation lands in the private app repo, and `limbo-design` is
   updated to match
4. The next design session inherits the decision through this file

So if something here says ✅ Adopted, the tokens in this repo already
reflect it. If it says 🕓 Open, it hasn't been built and shouldn't be
assumed.

---

# Round 1 — Invoice Builder, iPad
*28 Jul 2026 · seven proposals: three palettes, three landscape layouts, one portrait*

Context supplied: `DESIGN.md`, `PROGRESS.md`, and the original single-file
app. The proposals correctly incorporated multi-invoice tabs, the sync
indicator, quantity steppers, swipe-with-undo, and the templates concept —
all of which were parked ideas rather than built features. That's the
intended use of this file working as designed.

---

## ✅ Gold is unreadable as text — fix it

**Proposed (1A):** rebuild the greys to carry the paper's warmth, and
darken gold to `#8F6A20` so it can be read as text rather than only used
as a fill.

**Verified independently.** `#DD9B26` on `#F2F0EB` measures **2.1:1**.
WCAG AA requires 4.5:1 for normal text. Every section label in the product
— "APPEARANCE", "TYPOGRAPHY", "BRAND" — is set at 12px in that gold and
fails badly. The proposed replacement measures roughly **4.3:1**.

This was a genuine defect, introduced by reusing a border/underline colour
as label text without checking contrast. Caught by the proposal, not by
implementation.

**Decision:** adopt the darker gold for **text**. Brand gold `#DD9B26`
stays for fills, borders, and active underlines, where contrast rules
don't apply the same way.

**Implemented 28 Jul 2026.** The token is split:

| Token | Light | Dark | For |
|---|---|---|---|
| `--gold` | `#DD9B26` | `#E8AC42` | Fills, borders, underlines |
| `--gold-text` | `#8A6519` | `#E8AC42` | Any gold **text** |

**One correction to the proposal.** `#8F6A20` as suggested measures
**4.34:1** against the paper background — short of the 4.5:1 AA
threshold. Section labels are 12px bold, which doesn't qualify as large
text, so they need the full 4.5. Shifted to `#8A6519`, which measures
**4.66:1** on paper and **5.31:1** on white cards.

Dark mode needed no change: `#E8AC42` was already at **8.75:1**.

Fourteen usages updated. `bg-gold` and `border-gold` were left alone.

**Status: ✅ adopted and live.** Tokens in this repo reflect it.

---

## 🕓 Palette direction — three options, undecided

| | Proposal | Note |
|---|---|---|
| **1A** | *Warm ink* — same green and gold, every grey rebuilt warmer, gold darkened for text | Marked "recommended". Closest to what exists; mostly a correction rather than a change |
| **1B** | *Brass & bottle* — deeper green, gold traded for antique brass `#B4863F` | More atmospheric, explicitly less legible in daylight. Product is used outdoors and in daylight |
| **1C** | *One green, both themes* — a single `#41695A` working on paper and charcoal, gold demoted to hairlines | Elegant. Would delete the per-theme accent override entirely |

**1C is the most interesting structurally** — it removes a whole class of
token, since `--accent` currently has separate light and dark values.
Fewer tokens is usually right.

**But this is a migration**, touching every screen. It needs deciding
once, deliberately, rather than drifting in. And it should be judged on a
real iPad in daylight, not on a desktop monitor.

**Status: 🕓 open.** No decision yet.

---

## 🕓 Builder layout — three structures, undecided

All drawn at 1194 × 834 (iPad landscape).

**1D · Split workbench** — the existing app, tightened. Left pane at 396px
rather than half the screen, on the reasoning that the invoice needs the
width more. Draggable divider, sticky totals, row actions moved to
swipe-with-undo. *Safest and most familiar.*

**1E · Invoice-first with a source rail** — the invoice is the document,
not a panel. A 360px search-first rail collapses to 60px. *Structurally
the strongest idea in the set: the collapsed state is the portrait layout,
so one mechanism serves both orientations instead of two designs.*

**1F · Command deck** — event details become permanent tappable chips, so
"Details" stops being a place you navigate to. Stage track along the
bottom with totals beside it.

**Status: 🕓 open.** Blocks nothing today — the Builder isn't being built
yet — but choosing a direction would give the parked multi-invoice tabs
decision a concrete shape.

---

## 🔨 Portrait = reading mode

**Proposed (1G):** *"Rotating is the gesture that means 'let me read
this'."* Portrait drops the picker into a bottom sheet and gives the full
width to the invoice at document proportions.

This is a principle rather than a layout, and a good one. The navigation
shell already switches between a bottom bar and a sidebar at 1024px,
meaning an iPad changes navigation when rotated. This gives that switch a
reason beyond available pixels.

**Status: 🔨 accepted, not built.** Applies when the Builder is built.

---

## ❌ Not adopted from this round

**"Scan label" button (1G).** Implies barcode scanning. Competitive
research placed that in the *later, possibly never* pile — it needs a
product database subscription and camera permissions, and is best
revisited only if the app is ever wrapped for the App Store.

Not a bad idea, but a mockup shouldn't be where a feature commitment gets
made. Leave it out until it's chosen on purpose.

---

## Standing constraints for future rounds

Things that are settled and shouldn't be re-proposed:

- **Everything is serif.** Eyesome for display, Radley for body. No sans.
- **Never pure white or pure black.** Paper `#F2F0EB`, dark `#141A17`.
- **44px minimum targets**, 48px for form controls, 16px minimum input
  font size.
- **No hover-only interactions.** Ever.
- **No client portal, e-signature, deposits, or payment collection.**
  HoneyBook already does all of it. Out of scope permanently.
- **Long lists are rows, not card grids.** 314 products; density wins.

---

# Process Decisions

Workflow, tooling, and architecture. Mostly evaluating Grok's
recommendations from `ADVISOR.md`.

---

## ❌ Minimal CI on `limbo-design` — declined
*Proposed by Grok, 28 Jul 2026 · decided by Co-Work, same day*

**Proposed:** a GitHub Actions workflow running `npm ci` and
`npx tsc --noEmit` on pull requests to `main` in this repo.

**The instinct is right — every repo that builds should have a green/red
check. But this specific workflow would have failed on its first run,
twice over:**

1. **`npm ci` needs a `package-lock.json`.** There isn't one here.
   `package.json` was written by hand as documentation of the stack; no
   install has ever been run. `npm ci` exits immediately with "can only
   install packages when your package.json and package-lock.json are in
   sync."
2. **`tsc --noEmit` would fail even if install succeeded.** The `.tsx`
   files import React types that aren't installed. Type-checking a repo
   whose components are never compiled checks something that was never
   true.

**And it's aimed at the wrong repo.** `limbo-design` is documentation and
reference components — nothing here builds, deploys, or runs, so a type
error costs nothing. `limbo-app` is where a type error ships a broken
screen to an iPad.

**Decision: no CI here. Add exactly this workflow to `limbo-app`** when
that repo is pushed to GitHub — which is imminent, since it's needed for
Netlify deployment. There `npm ci` and `tsc --noEmit` both work, because
the lockfile and dependencies are real.

**Status: ❌ declined for this repo · 🔨 accepted for `limbo-app`.**

---

## ✅ Grok as independent advisor — adopted
*Established by Sean, 28 Jul 2026*

Grok reviews product, process, tooling, architecture, and risk, and runs a
structured pressure test after meaningful changes land. Notes go in
`ADVISOR.md`, which Grok owns and writes directly.

Advisory only; Co-Work evaluates and decides. That framing is right — a
second opinion that can be disagreed with is worth more than one that has
to be obeyed.

**One addition made to close the loop:** outcomes get recorded here. Before
this, a recommendation was rejected in chat and the reasoning evaporated,
so the same idea would return next month. Now Grok can read what was
decided and why.

---

## ❌ Branch protection on `limbo-design` — tried, removed
*28 Jul 2026*

Briefly enabled a ruleset requiring pull requests on `main`, to stop
integrations writing directly.

Removed the same day. It blocked Sean's own pushes, and the threat it
guarded against turned out not to exist — four unexplained `patch-*`
branches were Sean and Grok working through the GitHub web interface, not
an integration acting alone.

**What actually keeps this repo honest isn't a permission setting.** It's
that proposals live in this file with a status, and only implemented things
reach `DESIGN.md` and the tokens. That discipline survived round 1 intact:
Design proposed `#8F6A20`, Co-Work measured it at 4.34:1, shipped
`#8A6519` instead, and this repo says what's true.

---

# Design Decisions *(continued)*

## Icons — already exist, don't invent

`src/components/icons.tsx` holds the real set: `BuilderIcon`,
`HistoryIcon`, `LibraryIcon`, `ReportsIcon`, `SettingsIcon`. Stroke-based,
24px viewBox, `stroke-width: 1.75`, inheriting `currentColor`. No icon
library — inline SVG, deliberately, so there's no dependency to maintain.

A round-1 note said icons were left undrawn because "those should come
from a real icon set." Reasonable, but the set already exists and is in
this repo. Use it, and propose additions in the same style when something
new is needed.

---

## Known-open questions worth designing against

- Multi-invoice tabs — agreed in principle, no visual design chosen
- Invoice templates — agreed in principle, no visual design chosen
- Offline and sync states — the reliable-write layer exists, but there's
  no designed treatment for "3 waiting" or "1 not saved"
- 128 of 314 products have no cost data. The Library surfaces them behind
  a filter chip; a better idea is welcome
