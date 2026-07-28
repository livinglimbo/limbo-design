# Limbo Mixology — Design System

Public, read-only extract of the design system behind the Limbo Mixology
invoice builder. It exists so design tooling can read the real tokens,
conventions, and component patterns without the application repo being
public.

**The application itself is private.** Nothing here contains business
logic, customer data, credentials, or database access.

---

## Start here

| File | What it is |
|---|---|
| **`DESIGN.md`** | The written system — brand, tokens, layout rules, touch constraints, voice, anti-patterns. Read this first. |
| **`DECISIONS.md`** | **Read this second.** What has already been proposed, adopted, or declined — and why. Prevents re-proposing settled questions. |
| **`src/styles/globals.css`** | The single source of truth. Every colour, radius, and shadow in the product is defined here and nowhere else. Copied verbatim from the app. |
| **`design-tokens.json`** | The same tokens, machine-readable. |
| **`src/showcase/StyleGuide.tsx`** | Every component pattern in one file. The fastest way to see the system whole. |

This repo describes **what is actually built**, never what's proposed —
so designs are made against reality rather than a wishlist. Anything
under consideration lives in `DECISIONS.md` with its status.

---

## What this is for

The product is an invoice builder and event planning tool for a mobile
bartending and cocktail catering business. It's used **on an iPad, standing
up, sometimes one-handed, sometimes behind a bar mid-event.** That single
fact drives most of the decisions in `DESIGN.md` — the 44px floor, the
absence of hover-dependent controls, the bottom sheets.

Two things distinguish it visually:

**Everything is serif.** Eyesome for display, Radley for body. There is no
sans-serif anywhere, and substituting one would be wrong.

**Nothing is pure white or pure black.** The page is warm paper
(`#F2F0EB`); dark mode is warm charcoal with a green undertone
(`#141A17`).

---

## Stack

Next.js 16 · TypeScript · Tailwind 4 · CSS custom properties for theming

Tailwind 4 is built on CSS variables, which is what makes the light/dark
system a set of token overrides rather than a parallel stylesheet. The
`@theme inline` block in `globals.css` is what exposes the tokens as
utilities — `bg-surface`, `text-muted`, `rounded-card`, `shadow-panel`.

---

## What's here, and what isn't

**Included** — design tokens, theme switching, and presentational
components with no data dependencies: the sheet/dialog, the theme toggle,
icons, and decoupled versions of the list and row patterns.

**Not included** — the Supabase data layer, sync and offline handling,
authentication, routing, costing logic, and every screen that depends on
real data. Those live in the private repo and aren't design concerns.

`patterns/ProductRow.tsx` is a decoupled copy of a real component: the
app version computes cost from product data, while this one takes the
formatted label as a prop. Same markup, no data layer.

---

## Fonts

**Eyesome** is a purchased typeface and its files are deliberately **not**
included here — this repo is public. See `fonts/FONTS.md` for what the
app expects. Anything rendered from this repo will fall back to a system
serif for display type, which will look wrong; that's expected.

**Radley** is free from Google Fonts.

---

## A note for design tools

`DESIGN.md` is written to be read directly and is the best single input.
It includes real Tailwind class strings copied from the components rather
than descriptions of them, plus an explicit anti-patterns section — the
most common failure is being handed back something in Inter on a white
background with 32px tap targets, and that list exists to prevent it.
