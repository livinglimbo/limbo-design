# Limbo Mixology — Design System

> **Reflects `limbo-app` @ `9f4edaf` — 29 Jul 2026.**
> If the app has moved past that commit, this file may be behind. Ask
> before treating anything here as current.

Hand-off document for design tooling. Everything here is live in the app,
not aspirational. Values are copied from `src/app/globals.css`, which is
the single source of truth.

**Product:** invoice builder and event planning tool for Limbo Mixology, a
mobile bartending and cocktail catering business.

**Stack:** Next.js 16 · TypeScript · Tailwind 4 · Supabase

**Primary platform: iPad.** Then iPhone, then desktop. Used standing up,
often one-handed, sometimes behind a bar mid-event.

---

## Brand

| | |
|---|---|
| Display face | **Eyesome** — script/display, purchased, self-hosted. Titles, the logo, section headings. |
| Body face | **Radley** — serif, Google Fonts, self-hosted at build time. All body copy, labels, UI text. |
| Primary green | `#3C6255` |
| Gold accent | `#DD9B26` |

Both faces are serif. There is no sans-serif in this product — that's
deliberate and central to how it feels. Do not substitute Inter, Geist,
or any system sans.

The name lockup is "Limbo" in Eyesome with "Mixology" beneath it in small
caps, tracked, at roughly a quarter the size. Treated as one unit.

---

## Colour Tokens

Named by **role**, never appearance. `--surface`, not `--white`, because
in dark mode it isn't white.

### Light

| Token | Value | Used for |
|---|---|---|
| `--bg` | `#F2F0EB` | Page background — warm paper, not white |
| `--surface` | `#FFFFFF` | Cards, panels, rows |
| `--surface-alt` | `#FAFAF8` | Hover states, subtle fills |
| `--surface-sunken` | `#EDEAE3` | Wells, inset areas |
| `--text` | `#1A1A1A` | Primary copy |
| `--text-secondary` | `#555555` | Supporting copy |
| `--text-muted` | `#888888` | Labels, metadata |
| `--text-faint` | `#AAAAAA` | Placeholders, disabled |
| `--border` | `#E0E0E0` | Standard dividers |
| `--border-subtle` | `#E8E5DE` | Warm, quieter dividers |
| `--accent` | `#3C6255` | Buttons, links, active states |
| `--accent-hover` | `#2A5A44` | |
| `--accent-fg` | `#FFFFFF` | Text on accent |
| `--accent-surface` | `#3C6255` | The solid green app header |
| `--accent-surface-fg` | `#FFFFFF` | |
| `--gold` | `#DD9B26` | Fills, borders, active underlines — **not text** |
| `--gold-text` | `#8A6519` | Gold **text**, incl. section labels. 4.66:1 on paper |
| `--danger` | `#C0392B` | |
| `--danger-bg` | `#FDF0EE` | |
| `--warning` | `#7A4800` | |
| `--warning-bg` | `#FFF8EC` | Draft and pending badges |
| `--warning-border` | `#F0D090` | |
| `--success` | `#4CAF50` | Sync indicator |

### Dark

| Token | Value | Note |
|---|---|---|
| `--bg` | `#141A17` | Warm charcoal with a green undertone, not neutral grey |
| `--surface` | `#1E2521` | |
| `--surface-alt` | `#232B27` | |
| `--surface-sunken` | `#101512` | |
| `--text` | `#ECE8E0` | Warm off-white, never pure white |
| `--text-secondary` | `#B5ADA2` | |
| `--text-muted` | `#8A8781` | |
| `--text-faint` | `#6A6E69` | |
| `--border` | `#2F3A34` | |
| `--border-subtle` | `#273029` | |
| `--accent` | `#6BA588` | **Green lifts** — `#3C6255` is unreadable on dark |
| `--accent-hover` | `#7FB99B` | |
| `--accent-fg` | `#101512` | Dark text on the lifted green |
| `--accent-surface` | `#24463A` | Header stays recognisably green, seated in the dark |
| `--accent-surface-fg` | `#F0EDE5` | |
| `--gold` | `#E8AC42` | |
| `--gold-text` | `#E8AC42` | 8.75:1 on the dark bg — no separate value needed |
| `--danger` | `#E8695A` | |
| `--danger-bg` | `#2A1614` | |
| `--warning` | `#E0B050` | |
| `--warning-bg` | `#2A1E00` | |
| `--warning-border` | `#5A4400` | |
| `--success` | `#5FBF64` | |

Theme switches on `[data-theme="dark"]` on `<html>`, with
`prefers-color-scheme` handling a "System" option. Three states:
Light / Dark / System.

---

## Corner Radius

Semantic, by component role — so "make cards less rounded" is one edit
and can't accidentally reshape badges.

| Token | Value | Used for |
|---|---|---|
| `--radius-chip` | `0.375rem` | Tags, badges, small pills |
| `--radius-control` | `0.5rem` | Buttons, inputs, selects |
| `--radius-card` | `0.75rem` | Cards, panels, list containers |
| `--radius-modal` | `1rem` | Dialogs, bottom sheets |

Tailwind classes: `rounded-chip`, `rounded-control`, `rounded-card`,
`rounded-modal`.

---

## Elevation

Carried over from the original app, where they were tuned by eye. Theme
variables, because light-mode shadows are invisible on a dark background.

| Token | Light | Dark |
|---|---|---|
| `--shadow-card` | `0 1px 5px rgba(0,0,0,.06)` | `0 1px 3px rgba(0,0,0,.4)` |
| `--shadow-panel` | `0 2px 8px rgba(0,0,0,.08)` | `0 2px 10px rgba(0,0,0,.45)` |
| `--shadow-popover` | `0 4px 16px rgba(0,0,0,.12)` | `0 4px 18px rgba(0,0,0,.5)` |
| `--shadow-modal` | `0 8px 40px rgba(0,0,0,.22)` | `0 12px 44px rgba(0,0,0,.6)` |

Restrained. This is not a shadow-heavy product — borders do most of the
separation work.

---

## Spacing

Tailwind 4 default scale, `--spacing: 0.25rem`. Every padding and gap is
a multiple, so the whole layout can be tightened from one value.

Common rhythm: `gap-2` / `gap-3` inside components, `mb-4` between
elements, `mb-10` between sections.

---

## Typography Scale

| Use | Size | Weight | Notes |
|---|---|---|---|
| Display / logo | `2.2–3rem` | normal | Eyesome, `leading-none` |
| Page title | `1.25rem` | 600 | Radley |
| Section label | `0.75rem` | 700 | Uppercase, `tracking-[0.09em]`, `text-gold-text` |
| Body | `1rem` | 400 | |
| Row title | `0.875rem` | 600 | |
| Metadata | `0.75rem` | 400 | `--text-muted` |
| Field label | `0.75rem` | 700 | Uppercase, tracked, `--text-muted` |

Section labels being gold and uppercase is a signature of this product.

---

## Layout & Navigation

**Breakpoint that matters: 1024px (`lg`).**

| Width | Navigation |
|---|---|
| `< 1024px` | Bottom tab bar, 4 sections. Top bar with brand + search + settings, slides away on scroll down. |
| `≥ 1024px` | Left sidebar, collapsible to a 64px icon rail. Top bar stays fixed. |

An iPad crosses that line when rotated — portrait ≈ 820px gets the bottom
bar, landscape ≈ 1180px gets the sidebar.

**Four primary sections:** Builder · History · Library · Reports.
Library contains three sub-sections (Products, Cocktails, Prep Recipes)
reached via a tab strip inside the page, so they work on a phone where
the bottom bar stops at Library.

Content max width: `max-w-3xl` for forms and reading, `max-w-5xl` for
lists and data.

---

## Component Patterns

Real Tailwind class strings from the app.

**Card / panel**
```
rounded-card border border-line bg-surface p-4 shadow-card
```

**List container** — rows, not a grid of cards. With 314 products, rows
scan better and fit more.
```
overflow-hidden rounded-card border border-line bg-surface shadow-card
```

**List row** — entire row tappable, no hover-only controls
```
flex w-full items-center gap-3 border-b border-line-subtle px-4 py-3
text-left last:border-0 hover:bg-surface-alt active:bg-surface-alt
```

**Primary button**
```
min-h-[44px] rounded-control bg-accent px-5 font-semibold text-accent-fg
hover:bg-accent-hover
```

**Secondary button**
```
min-h-[44px] rounded-control border border-line bg-surface px-5
font-semibold text-text hover:bg-surface-alt
```

**Input**
```
min-h-[48px] w-full rounded-control border border-line bg-surface px-3
text-text placeholder:text-text-faint focus:border-accent focus:outline-none
```

**Filter chip** (inactive / active)
```
min-h-[36px] rounded-chip border border-line bg-surface px-3 text-xs
font-semibold text-text-secondary
min-h-[36px] rounded-chip border-accent bg-accent px-3 text-xs
font-semibold text-accent-fg
```

**Tag chip** — tinted, low contrast
```
rounded-chip bg-accent/12 px-2 py-1 text-xs font-semibold text-accent
```

**Section heading**
```
text-xs font-bold uppercase tracking-[0.09em] text-gold-text
```

---

## Touch Rules

This is used standing up with hands full. Some of these are mechanical
and some are still being validated on real hardware — the difference is
marked, because treating them all as absolute is what let ten sub-44px
controls ship unnoticed.

**Hard**

- **16px minimum font size on inputs.** Anything smaller makes iOS Safari
  zoom the page on focus. Not a preference — a browser behaviour.
- **Safe area insets** on anything at a screen edge — `pb-safe`,
  `pt-safe`. iPhone has a notch and a home indicator, and
  `viewportFit: "cover"` is what makes `env(safe-area-inset-*)` report
  real values.
- **Pinch-zoom stays enabled.** `maximumScale: 5`, never 1. Never
  `userScalable: false`.
- **Pointer Events**, not touch or mouse events. One code path covers
  finger, cursor and Apple Pencil, and `pointerType` tells them apart.
  This is what keeps Pencil Pro hover available.

**Targets — still the goal, under validation**

- **44px minimum** on every interactive target. 56px for the bottom bar.
- **48px** on form inputs and primary buttons.

*Sean is testing on real iPad and iPhone before these harden. Ten controls
in shipped code are currently between 32px and 40px — mostly filter chips
and sidebar links. Run `npm run check:targets` in `limbo-app` for the
current list. Don't treat 44px as settled, and don't treat it as optional
either.*

**Guidance**

- **No hover-only interactions.** A finger has no hover, so hover-only
  content is absent rather than degraded. Hover as enhancement on
  something already reachable is fine — and Apple Pencil Pro hover is
  wanted, which is a case of exactly that.

### Gesture decisions already made

| Pattern | Verdict |
|---|---|
| Drag to reorder **via an explicit handle** | Yes. Dragging anywhere fights page scroll and loses. |
| Quantity: stepper **and** typed entry together | Yes. Steppers alone are miserable at 120 guests. |
| Bottom sheet on phones, dialog on desktop | Yes. Thumb reach, flick to dismiss, page stays visible. |
| Swipe to reveal row actions | Sparingly — delete/edit only, and only with an undo. Invisible until discovered. |
| Long press | Mostly avoid. Costs half a second, nothing advertises it, a sheet does the same job visibly. |

### Two platform limits

- **No haptics.** Safari can't produce them. Every gesture must confirm
  itself visually.
- **Apple Pencil hover** works on newer iPads and can preview things.
  **Sean wants Pencil Pro hover features built.** Claude Design owns the
  interaction design and hands it to Co-Work to implement. The one
  condition is the hover guidance above: whatever hover reveals must also
  be reachable by finger and by cursor.

---

## Voice

Plain, direct, unfussy. Sentence case everywhere. No exclamation marks.
Errors say what happened and what to do. Empty states invite rather than
apologise.

Domain language is a working bartender's: cocktails, prep recipes,
batching, pour cost, silent ingredients, rentals, consumables.

---

## Anti-Patterns

*Reviewed with Sean 29 Jul 2026. `DECISIONS.md` holds the full record with
dates and reasons; this section mirrors the outcome.*

### Hard — testable, don't propose past these

- **Pure white or pure black as a background.** Page and surfaces are
  warm: paper `#F2F0EB` in light, `#141A17` in dark. `#FFFFFF` is still
  correct as a *foreground* on a coloured surface — `--accent-fg` is
  white text on green. The rule governs what you sit on, not what you
  write. No `--surface*` token may be `#FFFFFF`.
- **Text below 4.5:1 contrast** against its background (WCAG AA).
  Measure before proposing a colour for type.
- **Brand gold `#DD9B26` as text.** It measures 2.10:1 on paper. Use
  `--gold-text`; `--gold` is fills, borders and underlines only.
- **Anything at a screen edge without safe-area insets.**
- **Disabling pinch-zoom.** `maximumScale: 5`, never 1.
- **Touch or mouse events in place of Pointer Events.** Pointer Events is
  what keeps finger, mouse *and* Apple Pencil Pro hover all working from
  one code path.

### Strong defaults — argue with them if you have a reason

- Sans-serif type. Both faces are serif — a firmly held taste, not a law.
- Pure black or neutral grey in dark mode. Warm charcoal with a green
  undertone is the intent, **loosened deliberately so Design can explore.**
- Grids of large cards for long lists. 314 products; rows win on density.
- Hover-only affordances — hover effects are welcome, hover as the *only*
  route to something is not, because a finger has no hover.
- Controls under 44px. Still the target; **being validated on real
  devices before it hardens.**
- Client portals, e-signatures, payment collection. HoneyBook handles
  these today. A scope boundary rather than a design rule, and Sean's to
  revisit.

### ✅ No longer an anti-pattern

**Shadows, texture and visual richness.** "Heavy shadows or
glassmorphism" was listed here and was **removed 29 Jul 2026 at Sean's
direction** — he wants richness and doesn't want Design constrained on
it. Borders are still doing most of the separation work today, so this is
open territory rather than a solved question.

---

## Screens

**Built:** Product Library (searchable, sortable, filterable, editable,
314 real products) · login · settings · living style guide at `/style` ·
gesture playground at `/style/touch` · data inspectors at `/debug`

**Built but undesigned — logic exists, no interface yet:**

- **Multi-invoice tabs.** Up to 8 open, **least-recently-used** eviction,
  drag to reorder, survives quitting. **No dirty state** — see autosave.
- **Autosave.** Drafts write themselves 700ms after the last edit. No Save
  button, no dirty dot, no close-confirm. Flushed on close, on app switch
  and before unload, so the delay can't cost a change.
- **Undo / redo.** Per-invoice stacks, depth 50, survives close and
  reopen, cleared when an invoice locks at Complete. Batch edits collapse
  to one step. Stage changes are not undoable.
- **The save-state slot.** Four states derived from the sync layer:
  `Saved · just now` · `Saving…` · `Saved · N waiting to sync` ·
  `Couldn't save — retrying`. Never says "not saved" when the local write
  succeeded.
- **Invoice stages and archiving.** Five stages, two gated, two reversibly
  locked. Needs a stage control, a locked state, and an Archived view.

All are described in full in `DECISIONS.md` — the behaviour is fixed, so
a proposal that contradicts it can't be built.

**Testable now:** `/debug/autosave` exercises autosave, the save-state
slot, the 8-tab cap and the undo stack. Not a design — instrumentation,
built so the behaviour could be verified before the real Builder screens
land.

**Planned:** Invoice Builder · Invoice History · Cocktail Library ·
Prep Recipes · Reports

The living style guide at `/style` renders every token and component in
whichever theme is active — the fastest way to see the system whole.
