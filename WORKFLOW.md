# How the team works

Written for Sean. Plain language, no jargon. Who does what, where
everything lives, and exactly what needs you.

Kept up to date by Claude Co-Work whenever the process changes.

*Last updated: 28 Jul 2026*

---

## Where everything lives

This is the part that's easy to lose track of, because four things have
similar names.

| Name | Where | What it is | Status |
|---|---|---|---|
| **The old app** | `~/Documents/GitHub/limbo-invoice-builder` → Netlify | The single HTML file. **This is what you use for real work today.** | 🟢 Live, untouched, still working |
| Old app's working copy | `~/CLAUDE/Projects/Limbo Invoice Builder/` | Where the old file was edited before deploying | 🟡 Kept for reference |
| **The new app** | `~/CLAUDE/Projects/limbo-app/` | The rebuild. Next.js. Runs on your Mac only. | 🔵 In progress, **not on GitHub yet** |
| **The design system** | `~/CLAUDE/Projects/limbo-design/` → GitHub *(public)* | Colours, fonts, rules, decisions. What Claude Design reads. | 🟢 Live |

**The short version:** the app you actually invoice with is the old one,
and nothing we've done has touched it. The new app runs only on your Mac
right now. Putting it on GitHub is the next step, because Netlify deploys
from GitHub — that's the only reason it needs to go there.

Nothing you've done has broken anything. There are just a lot of moving
parts, and this table is the map.

---

## Who does what

### 🧑 Sean — Owner
**Decides everything.** Owns the product, the business, and the judgment
calls. Not a developer, and shouldn't have to be.

Also the only one who can move things between the other three — they never
speak to each other directly.

**Only you can:** judge how something feels on a real device · decide what
gets built · push to GitHub · click things in web interfaces.

### 🎨 Claude Design — Visual proposals
Reads the design system repo. Produces layouts, palettes, component
treatments, states.

Explores far faster than anything can be built, and catches things
implementation misses — it found an accessibility failure in the brand gold
that had already shipped.

**Proposes. Doesn't decide, doesn't build.** Read-only on the repo.

### 🔍 Grok — Independent advisor
Product, process, tooling, architecture, risk. Runs a structured pressure
test after meaningful changes land.

**Advises. Doesn't decide, doesn't build.** Writes to `ADVISOR.md`.

### ⚙️ Claude Co-Work — Implementation
Has the app code, the database, the data layer, the deployment. Turns
accepted proposals into working software.

Evaluates every proposal on its merits and can decline with reasons. Keeps
the design system repo accurate.

**Can't:** test on your iPad · push to GitHub · click things in web
interfaces · see your folders change.

---

## Getting a design built

Steps marked **[you]** need you. The rest happen on their own.

| # | Step | Who |
|---|---|---|
| 1 | Open Claude Design, say what to work on | **[you]** |
| 2 | It proposes labelled options | Design |
| 3 | Pick one, or ask for another round | **[you]** |
| 4 | Export → Project HTML → **Project archive** *(free)* | **[you]** |
| 5 | Drop the zip in `limbo-app/design-imports/` | **[you]** |
| 6 | Say *"new design in design-imports"* | **[you]** |
| 7 | Read the markup, check it against what's settled | Co-Work |
| 8 | Raise anything needing your decision — **before building** | Co-Work |
| 9 | Build it against the real database and data layer | Co-Work |
| 10 | Typecheck and lint | Co-Work |
| 11 | Test on the device Co-Work names | **[you]** |
| 12 | Update the design system repo to match | Co-Work |
| 13 | Push | **[you]** |

Step 6 is the whole handoff — one sentence. Co-Work can't see your folder
change on its own.

Step 11 is the one nobody can do for you.

---

## Getting advice acted on

| # | Step | Who |
|---|---|---|
| 1 | Something meaningful lands | — |
| 2 | Pressure test written to `ADVISOR.md` | Grok |
| 3 | Push it | **[you]** or Grok |
| 4 | Read and evaluate | Co-Work |
| 5 | Record the outcome in `DECISIONS.md` → Process Decisions | Co-Work |

Step 5 matters. Without it, a recommendation gets rejected in conversation,
the reasoning disappears, and the same idea returns next month.

---

## The one command you'll use

Pushing the design system after Co-Work updates it:

```
cd ~/CLAUDE/Projects/limbo-design && git add -A && git commit -m "message" && git pull --rebase && git push
```

Commit, pull in anything that arrived, push. Co-Work will tell you when
it's needed — usually after an accepted change.

---

## What "device verdict" means

Co-Work writes the code but has never seen it on a screen. It runs in a
sandbox with no display, no browser, no iPad. Everything it knows about how
the app looks comes from reading code and from you.

So there's a whole category of question only you can answer:

- Does that button feel right under a thumb, or is it a stretch?
- Does the sidebar leave enough room, or is it cramped?
- Does the header sliding away feel smooth or laggy?
- Does a long product name wrap badly?
- Does rotating the iPad do something jarring?
- Does the whole thing feel like *Limbo*, or generic?

None of that can be inferred from source code. When Co-Work asks you to
check something on a device, that's the gap it's trying to close — and
"it feels off" is genuinely useful information, even without knowing why.

---

## Which file is which

| File | For | Contains |
|---|---|---|
| `WORKFLOW.md` | **You** | This. The map. |
| `INSTRUCTIONS.md` | Design + Grok | What to do and not do when proposing |
| `DESIGN.md` | Everyone | The design system as built |
| `DECISIONS.md` | Everyone | Every proposal and what happened to it |
| `ADVISOR.md` | Everyone | Grok's pressure tests |
| `limbo-app/PROGRESS.md` | **You** + Co-Work | Where the build is up to |
| `limbo-app/GLOSSARY.md` | **You** | Plain-language definitions |

---

## If you're ever unsure

Two questions cover most confusion:

**"Which app am I looking at?"** — the old one is at your Netlify URL and
works. The new one only runs when `npm run dev` is going on your Mac.

**"Has anything broken?"** — the old app hasn't been touched since the
rebuild started. It can't break from anything we do here.
