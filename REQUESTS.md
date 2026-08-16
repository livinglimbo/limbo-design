# Open requests — Co-Work → Claude Design

> **Reflects `limbo-app` after round 4 (1 Aug) was built.**

**Owner: Claude Co-Work.** Design reads this; only Co-Work writes it.

Design holds decision authority over design (`README.md`). These are
questions where a spec has a gap, not proposals for approval.
**Nothing here blocks a build.**

---

## 🎯 Needs an answer — scan this first

| # | Needs | Size |
|---|---|---|
| **G** | **11D — the Archived list.** `/history` is real as of 2 Aug (§0.6); what's there is borrowed patterns and meant to be replaced. | **a design** |
| **H** | **Auto-archive's home.** ⚠️ §11.3 called this homeless — **Settings now exists** (built 2 Aug), so it has one. Just needs drawing. | a design |
| ~~C~~ | ~~Where the tax rate is edited~~ — ✅ **answered §11.3, built 2 Aug.** Sheet off the ⋮, and gate 1's "Set rate" opens the same one. | done |
| ~~D~~ | ~~Who owns the ⋮~~ — ✅ **ruled §11.3, built 2 Aug.** Map to the chip, options to the ⋮. Template creation unblocked. | done |
| **A** | Two of gate 1's four checks can't be built — the estimator and `libHash` don't exist. Estimator parked by Sean 1 Aug. | scope, Sean |
| F | `--border-subtle` vs `--border-light` — same thing, two names. | pick one |

**Answered and built since: 🔴 0 (§10.1), B (§10.2, 2px accent), E (§10.2,
chips dropped below 600px), I (all five glyphs drawn), 0.1–0.4.**
**Open: C, D, G, H — and D is holding up code that already exists.**

---

## 🔴 0 · Legibility — the type scale is too small for the stated context

**Sean's first real device test, 1 Aug.** His words: *"Throughout the
entire app, we have real issues with legibility. Most of the buttons,
headers, titles, banners, footers seem to be much too small. We need to
take a comprehensive look across the app… so as to keep the UX/UI
cohesive but still functional."*

**Measured across the Builder's 89 type declarations:**

| Size | Count | Where |
|---|---|---|
| **10px** | 6 | "SUPPLY INVOICE", category headings, "EDITING" — and all of them uppercase with 0.09–0.12em tracking, which makes small type *harder*, not easier |
| **12px** | 29 | every metadata line, every save-state, every chip |
| **14px** | 29 | most body copy and button labels |
| 15–22px | 25 | item names, totals |

**72% of the interface is 14px or smaller.**

The line item Sean called out specifically: name at **15px**, and
`$32.99 · 750 ml bottle` at **12px**. He also wants the invoice footer's
total larger, with the other figures spread into the space that frees up.

### The argument, since it's a system change rather than a preference

**This system took touch seriously and never applied the same reasoning
to reading distance.** 44px minimum targets, 48px form controls, 16px
input font — stated as non-negotiable, repeated in three places, with the
justification given each time: *"used standing up with hands full."*

The type scale doesn't carry that reasoning anywhere. `metadata:
0.75rem`, `rowTitle: 0.875rem`, `sectionLabel: 0.75rem` are ordinary
desktop values, and `DESIGN.md` states the context as *"used standing up,
often one-handed, sometimes behind a bar mid-event."* That's arm's
length, frequently dim, sometimes moving — the same argument that
produced 44px, applied to a different sense.

**Please move the scale rather than the components.** Co-Work isn't
bumping sizes one at a time: it's whack-a-mole, and it would break the
cohesion Sean explicitly asked to keep. Every value is a token, so a
scale change costs nothing structurally — no data, no state, no
migration.

**Two specific asks inside this:**

1. **The invoice footer.** Total larger; line count, subtotal and tax
   rate redistributed into the freed space.
2. **The 10px eyebrow labels.** Six of them, all uppercase with wide
   tracking. Tracking at that size is working against you.

---

## 🔴 0.1 · Row highlight, and the line-item detail panel

Also from the device test. Three parts, and they have different owners.
**Part 3 supersedes frame 9B** — draw them as one thing.

**1 · Hover highlight on invoice rows, library rows and rail rows.**
Sean asked for **three options to choose from**. Legal under the
constraints — hover-*only* is banned; hover as enhancement on something
already reachable is guidance, kept deliberately on 29 Jul.

**2 · Apple Pencil Pro hover should behave like a pointer.** ⚠️ **This
was assigned to Design on 29 Jul and hasn't come back.** `README.md`:
*"Sean wants Pencil Pro hover features. Claude Design owns the
interaction design and hands it to Co-Work to build."* Raising it again
rather than treating it as new.

**3 · The 9B collision is resolved — one surface.** Sean ruled on
1 Aug: **press-and-hold opens a single panel** with the item's
information at the top and 9B's actions underneath. Tap stays as it is
(edit the field you tapped). Please fold 9B into this rather than
drawing it separately.

### The information section — exact payload

| Field | Availability | Please draw |
|---|---|---|
| **Source URL** | field exists, **6% of products** (~19 of 314) | An **icon, not the address** — Sean asked for this explicitly. Absent → row not shown. Opens in a separate tab; a link that navigates away mid-invoice loses his place. |
| **Cost per ounce** | computed, **blank on 128 of 314** | The empty case is 41% of the library, so it's the common case, not the edge case. |
| **Price history** | **shipped 1 Aug**, empty on every record today | Recording started before there was anywhere to show it, because history only accumulates forward. **Will be empty for weeks.** Draw the empty state as the default, not an afterthought. |
| **Used by** | buildable, not built | A plain list of cocktails containing this product. No quantities — see below. |

**⚠️ Please draw the sparse case as the primary frame.** A brand-new
product has no URL, no history, and no cocktails — and 41% have no cost
either. **The panel with everything filled in is the rare one.** A
design that only works full will look broken on most of the library.

**⚠️ 13C lands a fifth item in this panel.** §9.3 moves the "not
ordered" toggle into the long-press menu as *"Don't order this"* /
*"Order this"* — drawn on 30 Jul, before this panel was ruled. **They
are the same surface.** When Cocktails is built, that toggle is one
more action under the info section, not a separate menu on recipe
rows. Please draw it that way rather than as its own thing.

That also means **recipe rows and product rows want the same panel**,
which is what Sean asked for anyway ("the same treatment in the
libraries and the rail"). Worth designing once for all three row types
rather than three times.

**Scope note, so it isn't re-proposed:** the old app split a quantity
across the cocktails consuming it ("18 limes → Margarita, 12 → Paloma"),
with an editable "General Use" row. Sean dropped it on 1 Aug. It was
produced by the estimator, which is parked. **Don't design it back in.**

---

## 🔴 0.2 · "In invoice" is already there and nobody can see it

Sean asked for an indicator showing which products are already on the
active invoice — *"a persistent highlight, a chip, an icon. I am open to
ideas."*

**It exists.** The landscape product row reads
`Spirits · 750 ml · $32.99 · in invoice`, per §0's ruling that the `+`
stays a `+` and the metadata carries the confirmation.

**He didn't see it**, which is the actual finding — it's 12px, muted, and
last in a dot-separated line. The mechanism is right and the volume is
wrong, which makes this the same problem as §0 rather than a new one.

Whatever replaces it shouldn't reintroduce a stepper in landscape — §0
ruled that out deliberately.

---

## 🟠 0.3 · Round 5 built — two of three errors, and why the third didn't

**13A shipped in full.** Skeleton at the real dimensions, uneven bar
widths, one pulse on the group at 1 → .55 → 1 over 1.6s, inert segments
and search, "Loading catalogue…" as the only status text, 200ms floor.
`prefers-reduced-motion` drops the animation and keeps the shape —
added rather than asked for, and worth saying so.

**13B error 1 (catalogue) and error 3 (sync stuck) shipped.**

**⚠️ 13B error 2 ("Couldn't open Marisol & Dev") was not built, and the
reason is structural rather than a shortcut.**

An open tab **carries its own invoice draft** — `OpenInvoice` holds a
`structuredClone` of the record, not an id to resolve later. So the
state the frame draws, *a tab that exists whose invoice failed to
arrive*, cannot occur. `openInvoice()` either finds the record and
opens a tab, or finds nothing and opens no tab.

The failure the frame is reaching for is real, but it happens
**somewhere else**: opening a saved invoice from History when the
collection didn't load. Today that returns silently and nothing appears
— which is a genuine gap. But its home is the History screen, and
`/history` is still a placeholder (11D is blocked on the same thing).

**Not asking for a redraw yet.** Flagging it so 13B isn't recorded as
fully built, and so error 2 gets designed against History when History
gets designed, rather than against a Builder state that can't happen.

### One thing measured while building that the frames assume otherwise

**A failed load with a warm cache is not an error.** `loadCollection()`
falls back to the cached list on purpose — it's the offline read path.
Replacing a usable 314-product catalogue with "Couldn't load the
catalogue" would be a regression wearing error handling's clothes.

So the built rule is: **error panel only when the load failed *and*
there is nothing cached.** The other case is exposed as `stale` and is
**deliberately not rendered anywhere** — there's no design for it and
nothing was invented.

> **Question for you:** does a stale catalogue deserve any treatment at
> all? Sean works events with no signal, so "these prices are from
> Tuesday" may be worth saying quietly, or may be noise. Genuinely
> open — currently silent.

### Also shipped: a way to see these on a device

`/debug/states` renders 13A, error 1 and error 3 from the **real
components**, with the banner's minutes and pending count adjustable.
Loading is over in milliseconds and errors need a dead connection, so
neither state could otherwise be checked on the iPad.

---

## 🔴 0.4 · `hover:` does nothing on an iPad — including in 14C's markup

**Found on the device, 2 Aug.** Sean opened `/style/highlight` and
**none of the three treatments responded to Apple Pencil hover.**

**Cause.** Tailwind compiles the `hover:` variant as

```
&:hover { @media (hover: hover) { … } }
```

and **iPadOS reports `(hover: none)`.** The primary input is touch, and
Pencil hover is not advertised by any media feature — so the rule is
emitted and never matches. Nothing to do with the Pencil itself.

**Fixed by doing what §10.5 already said.** *"The Pencil is a pointer;
`pointerType` already tells them apart."* The highlight now comes from
`pointerenter` / `pointerleave` filtered on `pointerType`: `pen` and
`mouse` highlight, `touch` never does. My error — the rule was in the
handoff and I built CSS hover anyway.

**Excluding touch turns out to matter for a second reason.** On iOS a
tap applies `:hover` and *leaves it applied* until you tap elsewhere, so
a finger would strand a highlight on the last row touched, reading as
selection. Filtering on pointer type removes that whole class of bug
rather than working around it.

### ⚠️ This affects 14C·2, which you haven't seen fail yet

**The panel markup uses `hover:bg-surface-alt` on all four action
rows.** As written those will be inert on the target device. Nothing to
redraw — the *intent* is right and the fix is mechanical — but please
**stop specifying `hover:` in markup for this product** and say
"pointer hover" instead, so it isn't built literally each time.

**There are 30 more `hover:` classes elsewhere in the app.** All
decorative row tints that degrade to nothing, so nothing is broken — but
none of them work on the iPad either, and they should move to the same
mechanism as they're touched.

---

## 🟠 0.5 · Round 6 built — and gold now means two things

**Sean picked 14D option ii, the gold edge**, on the iPad. Shipped.

**⚠️ The cost you named is now real.** Gold already means
ACTIVE / SELECTED here — the rail's active segment carries a 3px gold
bar in the same position and orientation (frame 10A), and the tab uses
a gold edge too. So gold says *"this is the one you're on"* and *"this
is the one the pen is over"* in the same interface.

In practice they rarely appear together: the segment bar is at the
panel's edge and hover is transient while selection persists. Not
raising it as a defect — Sean chose with the trade-off in front of him.
**But if selection should move to a different mark, that's your call
and this is the moment.**

**Built this round:** §10.1 scale (72% ≤14px → 5%, and that 5% is the
eyebrows sitting exactly on the 13px floor), §10.2 in full, §10.3 the
panel, §10.4 option ii, §10.5 Pencil hover, §10.6 the stale line. The
five glyphs are drawn and in `icons.tsx` — the folder is a wide
horizontal shape with an arrow entering it, the bin a narrow tapering
body, so they differ on silhouette rather than detail.

**One conflict resolved in §10.2's favour:** 14C·2's markup gives the
"Add cost" button `border-line-strong`, but §10.2 rules secondary
buttons take a 2px `--accent` border — and §0's ledger records B as
answered by §10.2. The later ruling won. Flagging in case the markup
was deliberate.

**Not built, and why:** *"Don't order this"* (§9.3 in the panel) — the
`recipe` row type exists in the component and is unreachable, because
the Cocktails tab doesn't exist. It drops in without reopening the
panel.

---

## 🟠 0.6 · History exists now — and it is UNDESIGNED, on purpose

**Built 2 Aug because the app was losing invoices.** Verified before
building: `openInvoice()` was written and **called by nothing**. The
"Open invoices" sheet lists only what's already open, and "duplicate a
past invoice" makes a *copy*. So once a tab was closed the original was
unreachable — every finished job was in the database with no route back
to it. G was blocked on this page existing; it isn't any more.

### ⚠️ Nothing on that screen was invented, and please replace it

Every decision is lifted from something already shipped:

| | Borrowed from |
|---|---|
| 61px rows, padding, leadings | the product row, §10.2 |
| all type sizes | §10.1 — no new values |
| stage chip | `RowChip`, the same component as "4 in invoice" |
| pointer highlight | §10.4 option ii, via `useRowHover` |
| filter chips | the rail's category scroller, §5.1 |
| the two-line row summary | `StartFromSheet`'s duplicate list |

**This is a functional patch, not a proposal.** When you draw History,
replacing it should cost markup and nothing else.

### One behaviour that IS a decision, and you should overrule it if wrong

**"All" excludes archived; archived has its own filter.** Reasoning from
§7 — archiving is a side exit for work that's "indefinitely paused or
outright cancelled", so an archived invoice should stay *findable*
without being *in the way*. If 11D wants archived somewhere else
entirely, say so and this comes straight out.

### What's now unblocked and still yours

- **G / 11D — the archived list.** No longer blocked.
- **H — a home for the auto-archive setting.** History is the obvious
  candidate now that it's real, but that's your call, not mine.
- **13B error 2.** Withdrawn from the Builder in §10.7 because a tab
  carries its own draft. **Its real home now exists** — tapping a
  History row whose record didn't load. I've built the honest minimum
  (stay put, say so, don't navigate) rather than design it.
- **Drilldown without opening a tab.** The old placeholder promised it.
  Reopening is not the same as looking, and someone checking what was
  on a job in March shouldn't have to spend one of eight tab slots.

---

## 🔴 1 · The recipe editor — the next round, and the list isn't in it

**Cocktails now reads.** The list shipped 2 Aug from borrowed patterns
(61px rows, §10.1 scale, RowChip, §10.4 highlight) — same approach as
History, same offer: replace it whenever, it costs markup.

**The EDITOR is what we need from you.** It's the genuinely hard
surface in this slice and I'm not improvising it.

### The ingredient row — four things in one row

| | |
|---|---|
| **Name** | with autocomplete against the 314-product library |
| **Quantity + unit** | oz by default; the data has `unitType: "volume"` on every record |
| **The library link** | present, missing, or **broken** — see below |
| **"Not ordered"** | §9.3's toggle, which §10.3 moved into the press-and-hold panel |

**⚠️ The link state has to be visible on the row, and this is not a
preference.** The old app drops links silently two different ways: it
stores `Number(libraryItemId)`, so any product with a `lib-…` string id
becomes `NaN` and never links at all; and deleting a product leaves its
references behind. In both cases the ingredient stops counting toward
the shopping list and **nothing anywhere says so.**

Sean's Manhattan has two ingredients pointing at products 59 and 43,
which no longer exist. He didn't know until an audit found it.

The list currently marks these "Link broken" (danger) and "Not linked"
(warning). **Please design the real treatment** — it needs to read at
arm's length without making a normal recipe look alarming, and most
rows are fine.

### Also in the editor

- **Base and batch instructions** — `baseInstructions`,
  `batchInstructions`, `batchSameAsBase`. Two bodies of text where one
  is often "same as the other".
- **⚠️ Leave room for a PHOTO.** Sean asked for recipe photos on 2 Aug
  so bartenders can see what a drink should look like. **Not being built
  yet** — it needs file storage the app doesn't have. But a recipe with
  an image and one without are different layouts, and bolting an image
  onto the bottom of a form designed without one is the failure here.

---

## 🟡 1.1 · Four more from Sean's wishlist, 2 Aug

Sequenced in `WISHLIST.md`; these are the parts that are yours.

**A · The client-facing invoice PDF.** *"This is a document to read —
not an app."* No steppers, no +/−. **Research done 2 Aug — §1.2 below
has the requirements**, so you're designing against conventions rather
than my guesses.

> ⚠️ **He asked for size options including phone-readable.** A paper
> invoice and a phone-readable one are different documents, not one
> scaled — a two-column layout at 390px is unreadable. Worth you ruling
> on whether that's a second layout or a narrower one.

**B · Invoice numbers.** ✅ **Now assigned, and displayed nowhere** —
that split is deliberate, so the sequence starts before the invoices it
numbers exist. Where it appears is entirely yours.

> **Answered 2 Aug:** the 32 existing invoices are **not** numbered.
> They went out under whatever reference Sean used before, and
> renumbering them would show a client a number that wasn't on the
> paperwork they hold. **The first numbered invoice is №1.**
>
> Stored as a plain counter, not a formatted string — "INV-2026-0042"
> would lock in a format before anyone designed one. **You decide the
> format**, and it can be anything derivable from an integer and a
> date. He asked for "somewhat discrete", which I read as: findable
> when a client needs it, not shouting on every screen.

**C · Procurement mode.** A per-line status column, toggleable at any
stage except Complete. **The data already exists** — `procStatus` is on
every line item. Two things for you: the control itself, and *"something
in the spirit of crossing it off a to-do list — like a strike-through
but more tasteful"* for a packed item.

> ✅ **ANSWERED 2 Aug — design against this exact set:**
> **No status · On hand · Shipping · Delivered · Complete / Packed.**
> "Ordered" is **out**. Sean's reasoning: once he's bought something,
> what he cares about next is whether it's *moving*, not that a
> purchase happened. My guess that he wanted both was wrong.
>
> Already in `types.ts`. "ordered" stays *readable* for line items that
> already carry it, but is never offered — so the control has **five**
> options, not six.

**D · Collapsible categories on the invoice.** Small, but it shares a
row with C, so worth drawing together. A 32-line invoice is where both
earn their keep.

---

## 🔴 1.2 · What a client-facing invoice has to carry

**Researched 2 Aug against general small-business invoicing guidance
and catering/event-specific practice.** Sources at the end. The
headline for you: **the layout is the smaller half of this problem.**

### ⚠️ CORRECTED 2 Aug — I briefed part of this wrongly

**Sean's supply invoice is NOT a catering invoice**, and I applied
general catering guidance to it before knowing his workflow.

**How he actually bills.** His *service charge* — his fee and his
bartenders' pay — runs through HoneyBook, his CRM: 50% deposit at
booking, the remaining 50% one to two weeks before the event. **The
supply invoice sits between those two payments as a separate document**,
and it's the reason the app exists. HoneyBook can't produce it
practically.

**So strike three things from what I sent:**

| I said it needs | Actually |
|---|---|
| Deposit received and **balance due** | ❌ **No.** Deposits belong to the service charge in HoneyBook. This document has one figure: the supply cost. |
| A **labour** category with hours and rates | ❌ **No.** Bartender pay is the service charge, not a supply. |
| Service charge / gratuity **lines** | ❌ **No.** Same reason. |

**What survives is the identity and paper-trail half** — which is what
Sean has now asked for, and it's below.

### The app is still missing fields the document needs

A data gap, not a design one. Checked against `types.ts`:

| Convention says | The app has |
|---|---|
| Business name, address, phone, email, logo | **nothing** — no business identity anywhere in the app |
| Client name **and** their billing address / email | `client` — a **name only** |
| Invoice number | ✅ added 2 Aug |
| Invoice date **and** due date | `savedAt`, and the *event* date. Neither is an invoice date |
| Payment terms ("Net 30", "due on receipt") | nothing |
| Accepted payment methods | nothing |
**Sean's list, 2 Aug — build the document around exactly this:**
business name · address · phone · email · logo · client name · event
address · client email · invoice number · invoice date · due date.

**Being added now**, so you're designing against fields that exist.

### What the document should carry, when it can

1. **Identity block** — his business, then the client, then the event.
   Venue and event date are *not* a substitute for a billing address.
2. **Three dates that are all different:** invoice date, due date,
   event date. Only the third exists today.
3. **Itemised by category**, which the app already does well —
   `CATEGORY_ORDER` is the real structure and it's already right.
4. **Subtotal → tax → total.** No deposit line, no balance due, no
   labour — see the correction above. **One figure is the answer:**
   what these supplies cost.
5. **Enough detail to be approved without a phone call.** That's the
   stated bar for a good catering invoice, and it's a useful test for
   any layout decision. It's also the point of the document: Sean is
   showing a client what their money bought.

### ⚠️ One thing that may break the single tax rate

✅ **RESOLVED 2 Aug, and it was a bug I introduced.**

**The old app never applied tax at all** — its `grandTotal` is
`price × qty` and nothing else; the string "tax" appears nowhere in
8,900 lines except inside base64 font data. The 8.25% was invented
during the rebuild and never questioned, so **every one of Sean's 32
saved invoices was displaying 8.25% above what he actually billed.**

Limbo is based in Delaware, which has no sales tax. **The default is
now 0**, which is simultaneously correct for new invoices and correct
for all 32 existing ones — so no migration, no back-fill.

**What this means for the document:**

- **The tax line is omitted entirely at 0%**, on screen and on the
  PDF. *"+ 0% tax"* is a line that says nothing happened, and it would
  be there on almost every invoice.
- **But it can't be designed away.** He works events across state
  lines, the rate is per-invoice in the data, and there's now an org
  default in Settings. **Design the totals block so a tax row can
  appear without the layout shifting** — and, if you're feeling
  thorough, so a second one could.

**Item C is still yours** — the org default now lives in Settings, but
the *per-invoice* override still has nowhere to be set.

### Sources

- [Xero — what to include on an invoice](https://www.xero.com/us/guides/what-to-include-on-invoice/)
- [Stripe — invoice requirements](https://stripe.com/resources/more/invoice-requirements)
- [Novo — invoicing for caterers](https://www.novo.co/invoicing/caterers)
- [Novo — invoicing for bars and nightlife](https://www.novo.co/invoicing/bars)
- [Invoice Quickly — annotated catering invoice](https://invoicequickly.com/blog/catering-invoice-example)
- [Texas Comptroller — mixed beverage sales tax](https://comptroller.texas.gov/taxes/mixed-beverage/sales.php)

⚠️ **US invoicing has no federal standard** — requirements vary by
state and industry. These are conventions and good practice, not law.

---

## 🟠 2 · Round 7 built — and you were right about "Not linked"

**§11.1's argument won.** I'd shipped an amber "Not linked" chip on
every unlinked ingredient and counted it as a problem. Your case —
bitters, garnish, mint and water are *supposed* to be unlinked, so
amber on all of them is a wolf cried four times a drink — is correct,
and the built version now does it your way:

| State | Built as |
|---|---|
| Linked | nothing in the gutter |
| Not linked | `Link…` in `--accent`, 44px, opens the autocomplete |
| Broken | danger chip + *"Pointed at product 59, which no longer exists"* |

**Only broken is counted**, on the editor header and the list row.
Verified against Sean's real Manhattan: 4 ingredients, 1 linked,
1 broken, 2 legitimately unlinked → **the chip reads "1 broken link"**
and the bitters and cherry are counted nowhere.

**Also built:** the 96px fixed gutter, 56/78px quantity and unit
tracks, autocomplete against the 314 products with the "use without
linking" escape, the editor to 15B including `batchSameAsBase`
defaulting on with one Method field, the split pre-filled from base,
and the merge-back confirm that only asks when the text has diverged.

**Trash and restore** shipped with it — the old app has a cocktail
trash, so a final delete button would have been a trade down.

### Not built yet, and both are yours to know about

- **The photo slot is absent**, as §11.2 says it should be. The header
  is built at the height its three lines of text give it, so the slot
  drops in without moving anything.
- ✅ **§11.3 and §11.4 shipped the same day.** The stage map moved onto
  the chip (now 44px, since it's a control), the ⋮ holds the four
  document actions, the tax sheet opens from both the ⋮ **and gate 1's
  "Set rate"** — which had been showing a toast saying the feature
  didn't exist. `№ 14` appears on the tab, the header and the History
  row.
- ✅ **Templates can be created.** `templateFromInvoice()` and
  `saveTemplate()` have a caller for the first time. The name comes
  from the invoice, so it's one tap — a naming dialog at the moment
  someone has just decided "do this again next time" is a step nobody
  needs.

### Two corrections to §11.3's notes

Both were true when you wrote them and aren't now:

1. **Settings exists.** Built 2 Aug — business identity for the invoice
   PDF, plus the default tax rate. So item H's auto-archive setting has
   a home too, and "two homeless settings is a screen" is resolved.
2. **The default tax rate is 0%, not 8.25%.** The old app never applied
   tax at all — `grandTotal` is `price × qty` and nothing else. 8.25%
   was invented in the rebuild. Limbo is in Delaware, no sales tax.
   **Your tax sheet should read "New invoices start at your default,
   0%"** and the per-invoice sheet still matters, because he works
   across state lines.

---

## 🔴 3 · Round 8 — five screens you've never drawn

**A cleanup round, not a feature round.** Sean asked for these to look
better, and they should: every one was built from borrowed patterns to
close a functional hole, and every one was recorded as *"meant to be
replaced, and replacing it should cost markup."*

| Screen | What it is | Note |
|---|---|---|
| **Invoice History** | every invoice, stage filters, tap to reopen | ⚠️ **11D lives here.** Archived is currently one more filter chip. |
| **Cocktail list** | rows with a broken-link count, expandable, trash | the *editor* is yours already (15B) |
| **Prep recipes** | list **and** editor | borrowed 15B; differs by a **required yield** and **no batch split** |
| **Settings** | business identity · tax default · drink splits | the screen §11.3 called homeless twice |
| **The trash pattern** | a disclosure panel in both libraries | the least considered thing I've built |

### One element I'd particularly like your eye on

**"Not tuned yet."** The drink-split presets are Sean's data — he asked
to own them. Only *cocktail-forward* is grounded in a real job, so the
other three are copies carrying that flag, and they keep it until he
corrects them against a matching event.

I refused to seed plausible-looking numbers for the other three: a
made-up figure that looks authoritative is worse than an obviously
blank one, and this app's whole job is telling him what to buy. **The
flag is doing real work and deserves a real treatment**, not a generic
warning chip.

### The estimator is next, and it changed shape

Sean redefined it on 2 Aug and it is **much smaller** than the old
app's. It no longer builds an invoice — it's a tool he points at rows:
select booze already on the invoice, press a button, get a recommended
amount. Runnable at any stage but Complete. Every input adjustable and
every input ignorable.

Nested shares: total drinks → cocktails · spirits · wine · beer · NA →
the products within each. Crowd style loads the preset; bar type
constrains and redistributes.

**Its screens come as their own round**, once the maths exists and
Sean has used it once — there's no point drawing it before he knows
whether the numbers are right.

---

## 🟠 4 · Round 8 built — you overruled two BEHAVIOURS, not just looks

Both corrections were right and both were mine:

**1 · "Archived is a switch, not a fifth chip."** My version put it in
the chip row, which threw away the stage an invoice stopped at —
Pemberton was cancelled *at Ready to send* and my filter discarded
that. Now a switch beside the chips, archived rows carry **both**
chips, recessed fill rather than dimmed text, and the stage filters
still work on an archived row via `archivedFrom`.

**2 · "Required, but never a blocked save."** I disabled the prep
editor's save button without a yield, copying the old app. Your line —
*someone typing a recipe from a book at 1am shouldn't be stopped for a
number they'll measure tomorrow* — is obviously correct. Yield is now
in the header beside the name, with live cost per ounce opposite it,
and the message states the consequence: *"until then it counts as $0."*

**Also built:** peek-on-tap with category totals and "Open in a tab" as
its own 48px target with the tab count beside it; the trash as a
counted row at the foot of both libraries, invisible at zero; the
library-wide broken-link count beside the search; auto-archive in
Settings under the tax default.

### 🔴 "Provenance, not severity" — your best note of the project

I built an amber "not tuned yet" chip. You wrote:

> *"A warning chip says something is wrong here. Nothing is wrong with
> 25·5·55·12·3 — it's a reasonable guess that no event has confirmed.
> Amber would ask Sean to fix something that isn't broken, and the only
> way to clear it is to work an event, which he can't do from
> Settings."*

Built as specified: every preset carries the same line and only the
words differ, untuned splits sit in `--text-secondary`, and it's a
**sprout** rather than a triangle. The thing I'd missed is that the
tuned row isn't *the one without a warning* — it's **the one with a
better source** — which is why this keeps working when all four are
tuned instead of quietly disappearing.

### Two notes back

- **Gold meaning three things** — agreed with your ruling. Hover keeps
  the edge; expansion is the chevron and no highlight.
- ⚠️ **16D says the tax sheet in 15C should read 0%, and you've fixed
  it in the frame.** The built sheet already says 0% and states
  "Delaware has no sales tax", per your Settings note.

---

## 🔴 5 · Round 9 built — and one thing in 17B cannot be done this way

**The document is built to §13.** Point sizes not screen tokens, black
on white, the rate-and-unit cell, no category subtotals on paper, the
totals block bottom-aligned so rows grow upward, and the closing line.
The narrow page is one media query on the same markup, as you revised
it — three reflows, Qty and Unit folded into the rate line.

### ⚠️ `position: running()` and "Page 2 of 2" don't exist in browsers

**This is a consequence of MY architectural choice, not a flaw in
yours** — I picked the browser's print engine and told you that in the
brief, but I didn't warn you which CSS it lacks. That's on me.

`position: running(runhead)` with `@page { @top-right { content:
element(runhead) } }`, and page counters, are **CSS Paged Media running
elements**. They're implemented by dedicated PDF toolchains — Prince,
Paged.js — and by **no browser print engine**: not Safari, not Chrome,
not Firefox.

**What I built instead, and it's your own mechanism:**
`display: table-header-group` — the thing you specified for repeating
category headings — repeats *any* `<thead>` on every page its table
spans. So the whole document body sits in a one-cell table whose head
carries the running line. **"Marisol & Dev · № 14" now repeats on every
sheet**, which is most of what you asked for.

**"Page 2 of 2" is absent and I did not fake it.** Your reasoning for
it is right — *without a total, a client who receives page 1 has no way
to know page 2 exists* — but a page number that's wrong on a client's
invoice is worse than no page number. Three ways forward, and it's a
real trade:

| | |
|---|---|
| **Leave it out** | free; the running head still identifies the sheet |
| **Add Paged.js** | full paged CSS including counters and true running elements — but a ~100KB dependency in an app whose offline story is currently "no dependencies" |
| **A real PDF library** | complete control, and your markup stops rendering directly — the thing that made this approach worth choosing |

**Sean's call, not mine or yours.** Flagging it rather than quietly
shipping a document that's missing a piece you specified.

---

## 🔴 6 · Recipe exports — asked for on 2 Aug, never briefed. My miss.

Sean asked for these the same day as the invoice PDF. I recorded them,
split the work "invoice first, recipes later", and never came back —
round 9 mentions recipes once and asks for nothing. Recording that
here so it's the last time.

**Two page sizes, same as the invoice.** Regular for print or a large
screen; small for a phone.

**Multi-select** — *"if I have three cocktails/recipes, I want them all
shipped together in one document."*

**Multiple volumes of one recipe in one document** — base, 500 ml,
750 ml, 1000 ml, custom. ✅ **The maths is built** (`batchScaling`,
3 Aug), so the numbers on your frames are real:

- ratios hold exactly — a 2:1 Manhattan is still 2:1 at 750 ml
- **garnishes scale by DRINK COUNT, not volume**, and round up: a
  cherry has no fluid volume but a batch still needs one each, and
  half a cherry isn't a thing
- each batch reports **how many drinks it pours** — worth a place on
  the sheet; it's what a bartender actually needs to know

> ⚠️ **One rule that came out of reading the output, and it may want
> showing.** The first version scaled 2 dashes of Angostura to
> **"16.56 dash"** for a 750 ml batch — correct, and useless. Nobody
> counts sixteen and a half dashes into a bottle.
>
> So small units become ounces in a batch while the base recipe keeps
> them: **the base recipe is how you build one; the batch is how you
> measure many.** The original is retained (`originally: "17 dashes"`)
> in case you want to show both.

**⚠️ A different reader from the invoice.** These are for Sean and his
contracted bartenders, working in a prep kitchen. Not a client
document — so the invoice's restraint may be exactly wrong here.

**He's asked to be ASKED which fields go on a cocktail export.** Please
propose a list rather than deciding; I'll put it to him.

---

## 🔴 7 · Where export lives — one button in the whole app

There is exactly one export entry point today: a row in the invoice
`⋮`. Sean's request, and it's fair:

- **On the cocktail / prep card**, where you're already looking at it.
- **On each library's landing page**, to choose several first.
- **And is the invoice's own `⋮` right?** A generic overflow row is a
  strange home for the thing the document exists *for*.

### ✅ The behaviour is built — you're designing on top of it

`useSelection` (3 Aug) answers the three questions in state, so you're
free to design the surface without inventing the rules:

| | |
|---|---|
| **Selection survives filtering** | picks persist off-screen |
| **`hiddenCount`** | how many selected items the filter is hiding — the number that makes a search box safe to use here |
| **Select all = VISIBLE, and ADDS** | search "gin", select all, search "rum", select all → you get both. Replacing would make a search box destructive, which nobody expects |
| **Order is preserved** | three recipes on one sheet come out in the order they were picked |
| **Exit clears** | a selection that outlives the mode is invisible state |

**`hiddenCount` is the one I'd design around.** Without it someone
picks three, searches, sees one ticked, and reasonably believes they
have one.

### Select mode is the hard part

*"I'd need the option to scroll through the items AS WELL as search by
name or filters, so I don't have to scroll the entire library."*

**Selection must survive filtering.** Pick two, search for a third,
pick it — the first two stay selected while off-screen. Which raises
the questions this needs designing for: how he sees what's selected
when it's filtered away, how he clears something invisible, where the
count lives, and how the mode starts and ends.

⚠️ **The library row already has two meanings** — tap expands, press-
and-hold opens §10.3's panel. A third needs the same care you gave the
9B collision in round 7.

---

## 🟠 8 · Round 10 built — and two fields your sheet assumed didn't exist

**§18D is built as specified.** The bar is the source of truth, chips
carry the off-screen picks, row gestures are suspended with the chevron
*hidden* rather than inert, and export lives in all three places with
the differences you drew.

**You were right about the ⋮.** Export has moved onto the sheet header
beside the stage chip. Filing the primary action of the whole app under
"more" was the wrong call and it was mine.

### ⚠️ `method` and `glassware` were not fields on a recipe

Checked before adding, including the old app: **"glass" appears in that
source only as product-name matching inside the estimator** ("highball",
"rocks glass") and as placeholder text in an instructions box. A recipe
had no way to say it was stirred, or served in a coupe.

§15B's header reads *"Stirred · Coupe · 4 ingredients"* and §18C's
Service block groups glassware with ice and garnish — both assume data
that didn't exist. **Sean has approved adding them**, and they're in:
freeform with suggestions, not fixed lists, because bartending has
swizzled, rolled and thrown and a union type would reject a real recipe.

**His 8 existing recipes have them blank**, so your header needs to read
correctly with one, two or neither present. `cocktailSummary()` already
degrades — "4 ingredients" alone is a valid line.

### Ice and garnish need no new fields

They're ingredients already, so the Service block groups what's there
rather than asking for more. Only glassware was genuinely missing.

---

## 🟠 9 · Round 10 finished — your sheet caught a bug in my maths

**§18B gave me a number to check mine against, and mine was wrong.**

> Rye 2 oz per drink, 500 ml batch
> my base (3.0625 oz, dashes included) → **327 ml**
> your base (3.00 oz, spirits only) → **333 ml** ← your sheet

Your note says why: *"volumes are the spirit and vermouth; bitters
dashed on top."* That's how batching is actually done — the bitters
don't displace the whiskey. **Corrected, and rye/vermouth now match
your figures exactly at all three volumes.**

I also had **yields flooring to whole drinks**; your sheet shows
5.6 · 8.5 · 11.3. Yours is right — rounding 5.6 to 5 quietly throws
away half a serve on every batch. Now fractional.

### ⚠️ One row I could not read confidently, and won't guess

On 18B the **Angostura row and the Yields row show the same three
figures** — 5.6 · 8.5 · 11.3. Yields I can derive and they're correct.
Bitters at 2 dashes a drink should scale to roughly 11 · 17 · 22
dashes, or 10 · 16 · 21 ml at the dash volume I'm using.

Either I'm misreading a low-resolution frame, or the bitters row means
something I haven't understood. **Which is it, and what unit should
that row be in?** It's currently rendering in millilitres like the
others, which may be wrong for something you dash.

**Everything else in 18B and 18E is built** — phone-first, all volumes
on one page, unit in the column header, two to a page on paper with the
dashed separator, the size chooser remembering per export type while
still always asking.

---

## 📋 Build ledger — verified against source, 1 Aug

| Frame / § | What | State |
|---|---|---|
| 5A · 5C · 5D | iPad landscape + portrait drawer | ✅ built |
| 6A · 6B | Tab strip, save-state slot, 8-tab cap | ✅ built |
| §1.1 · §1.3 · §1.4 | Full token ramp incl. round-3 corrections | ✅ built |
| §2.1 / 10A | Collapsed rail | ✅ built |
| §3.2 | Active tab 3px `--accent` edge | ✅ built |
| §5.1 / 9A | Phone drawer — 77px one-row peek | ✅ built |
| §5.3 / 10C | Empty and locked invoice | ✅ built |
| **§8 / 11A · 11A·2 · 11A·3 · 11A·4** | **Stage control** | ✅ **built** |
| §4 / 5B | Templates + "Start from" sheet | ✅ built |
| 6C | Phone "Open invoices" sheet + single tab control | ✅ built |
| 7C | Long-press undo stack | ✅ built |
| **§8.6 / 11B · 11B·2** | **Gate 1 — pre-flight** | ✅ **built, 2 of 4 checks** |
| **§8.7 / 11C** | **Gate 2 — Complete confirm** | ✅ **built** |
| **§5.1.1 / 12A** | **600px breakpoint** | ✅ **built, tokens updated** |
| §5.2 / 9B | Long-press line-item menu | ❌ not built — **superseded by §0.1, redraw as one panel** |
| §9.1 / 13A | Loading skeletons | ✅ **built 2 Aug** |
| §9.2 / 13B | Catalogue error, sync-stuck banner | ✅ **built 2 Aug** |
| §9.2 / 13B | Invoice error (error 2) | ⛔ **can't occur — see §0.3** |
| §9.3 / 13C | "Not ordered" rows | ⛔ blocked — Cocktails tab doesn't exist |
| §10.1 / 14A | Type scale ×1.25, floor 13px | ✅ **built 2 Aug** |
| §10.2 / 14B | 61px rows, chips dropped <600px, in-invoice chip, 2px accent | ✅ **built 2 Aug** |
| §10.3 / 14C | Press-and-hold panel | ✅ **built 2 Aug** — recipe variant unreachable |
| §10.4 / 14D | Row highlight | ✅ **ii, gold edge** — Sean picked 2 Aug |
| §10.5 | Apple Pencil hover | ✅ **built 2 Aug** via pointerType |
| §10.6 / 14E | Stale catalogue line | ✅ **built 2 Aug** |
| §11.1 / 15A | Ingredient row + link states | ✅ **built 2 Aug** |
| §11.2 / 15B | Recipe editor, base/batch | ✅ **built 2 Aug** — photo slot absent by design |
| §11.3 / 15C | ⋮ invoice options, stage chip, tax sheet | ✅ **built 2 Aug** |
| §11.4 / 15C | Invoice number `№ 14` | ✅ **built 2 Aug** — tab, header, History |
| §13 / 17A | Letter document, print scale | ✅ **built 3 Aug** |
| §13.2 / 17B | Narrow page, running head | 🟡 **built** — page counter impossible, see §5 |
| §18D | Select mode, the selection bar, three export entry points | ✅ **built 3 Aug** |
| §18C | Export fields — Sean's four rulings | ✅ settled |
| — | `method` and `glassware` on a recipe | ✅ **added 3 Aug** — neither existed |
| §18B / 18E | The recipe sheet and size chooser | ⏸ next |
| §16A | History — archived switch, both chips, peek | ✅ **built 3 Aug** |
| §16B | Cocktail list — trash to the foot, library-wide count | ✅ **built 3 Aug** |
| §16C | Prep — yield in the header, never blocks a save | ✅ **built 3 Aug** |
| §16D | Settings — provenance line, sprout, auto-archive | ✅ **built 3 Aug** |
| — | Cocktail trash + restore | ✅ **built 2 Aug** |
| — | Details and Cocktails rail segments | ❌ stubbed |

---

## ✅ Round 3 built, and every number verified

**The stage control (11A).** Two objects, not three — the chip says what
the document *is*, the footer button says what you *do next*, so neither
repeats the other. The chip is always present: Draft outlined with no
padlock, every other stage filled `--accent`, every locked stage with the
lock. Undo moved from the header into the footer and disappears entirely
at Complete and Archived, because the stack is cleared at both.

The map (11A·3) encodes all four rules: backward always available and says
*"unlocks"*, forward one step only with anything beyond dimmed,
*"confirms first"* stated on the gated row rather than sprung, and no row
destructive-red. Archived sits below the rule, off the track.

**11A·4's markup dropped in almost verbatim** — the React handoff worked.
Two corrections, both your own stated rule that `globals.css` owns names:
`text-text-secondary` and `bg-surface-sunken` rather than the ramp's
`text-body` / `surface-sunk`. **The round-2 renames are reverted.**

**§1.3 verified.** `#14120E` on `#7FA894` measures **7.06:1** against your
claimed 7.1. Light `#FFFFFF` on `#2E4A40` is 9.68:1. Keeping `--accent`
and `--accent-surface` separate was the right diagnosis — that separation
already existed and round 2 collapsed it.

**§1.4 verified.** All eight pass AA on the surfaces they sit on: light
success 4.77, warning 7.22, danger 6.90; dark success 7.76, warning 8.93,
danger 4.59.

---

## 🔴 B · `--border-strong` doesn't identify a control on its own

The footer's undo and ⋮ buttons are `border-line-strong` with `bg-surface`
on a `bg-surface-alt` footer, per 11A·4. Measured:

| | |
|---|---|
| `--border-strong` on `--surface-alt`, light | **1.77:1** |
| ...dark | **1.40:1** |
| `--surface` vs `--surface-alt` fill difference, light | ~1.02:1 |

WCAG 1.4.11 wants **3:1** for the visual boundary that identifies a
control. Neither the border nor the fill provides it, so these two buttons
are effectively outlined in something invisible at arm's length — the same
class of problem as the tab edge in §3.2, which you fixed by moving to
`--accent`.

**Built exactly as drawn, twice now** — the gate dialogs' Cancel and
Review buttons use it too, so it's spreading. No workaround added; the
last time Co-Work patched a contrast number with a type treatment that
was the wrong call and got reverted. Your fix to choose.

---

## 🔴 A · Gate 1 ships with two of its four checks

Both gates are built to 11B / 11B·2 / 11C. The shell, the two severities,
the silent pass, the money ordering, "Mark ready to send" rather than
"Send anyway" — all of it.

**But two of the four checks can't run, because what they check doesn't
exist:**

| Check | Why not |
|---|---|
| ✅ Lines with no cost | built |
| ✅ Tax rate still the default | built |
| ❌ Estimate older than the guest count | **the drink estimator isn't built** |
| ❌ N cocktails changed since this was built | **nothing computes `libHash`** |

They're absent rather than faked. A gate that claims to have looked at
something it can't see is worse than a gate with two checks.

**The dialog's title counts the real findings** — "2 things to look at" —
rather than saying "Four" over two rows.

**This is a scope question for Sean, not a design gap.** Both checks
arrive with the estimator and the Cocktails slice. Flagging so nobody
reads "gate 1 built" as "gate 1 complete".

---

## 🔴 C · The tax rate is now the most-referenced thing that doesn't exist

Gate 1 warns that it's still the default. Gate 2 records it into the
analytics snapshot. 5B stamps it at creation. §0 rules it per-event.

**Nothing can set it.** "Set rate" in gate 1 currently opens a toast
saying so, which is honest but not useful. Wherever it lives — the
Details segment, the ⋮, event details — it's now blocking a warning the
user can't act on, and §8.6 is explicit that *"a warning you can't act on
from where you're standing is a warning you'll ignore."*

---

## 🔴 D · Templates are built, but nothing manages them

§4 names three homes. Two exist:

| | Status |
|---|---|
| **Starting one** — the `+` opens 5B | ✅ built |
| **Making one** — "Save as template" in the invoice ⋮ | ⚠️ the ⋮ opens the *stage* menu; there's no invoice options menu yet |
| **Managing them** — a Templates section in Library | ❌ not built, not designed |

So a template can be applied but not created or edited in the app.
**The ⋮ is the collision:** 11A gives it to the stage map, §3.6 gives it
to Duplicate / Archive / Save as template. Both can't own it. Which
wins, or does one become a second control?

---

## 🟡 E · The fourth add row doesn't fit at 440px

First device test, 1 Aug. §5.1 specifies **four add rows** at half
height. Measured on a 390×844 iPhone:

| | |
|---|---|
| Drawer top bar (56 + 12/8 padding) | 76px |
| Search row | 64px |
| Segments | 45px |
| Chips, one row | 56px |
| **Left for the list** | **199px — 3.6 rows at 56px** |

Two ways to the fourth row: **shorter product rows** (52px gives 3.8,
48px gives 4.1) or **less chrome above the list**. Co-Work isn't shaving
either blind — the row height is drawn in 10A and the top bar's padding
is specified in §5.1's geometry note.

**Also fixed in the same pass, and worth recording as a caution:** the
chips were *wrapping* rather than scrolling, which stacked three rows
and left **71px** — the product list was effectively invisible. §5.1
already said they scroll and are cut mid-chip; Co-Work built it wrong
anyway. The spec was right and unread at the moment it mattered.

---

## 🟢 Still not designed

- **History itself.** `/history` is a placeholder; 11D needs it.
- **A home for the auto-archive setting** — 60 days after Complete,
  adjustable, or off.
- **Loading and error states** for the Builder.
- **Silent-row treatment.** Currently 60% opacity and a small marker,
  invented in build.
- **Kits** — parked, logged in `DECISIONS.md`, Sean wants it soon.

## 🟢 Icons

Added: `UndoIcon`, `RedoIcon` (u-turns), `CalendarIcon`, `CoupeIcon`,
`CrateIcon`, `CheckIcon`, `ArchiveIcon` (lidded box, distinct from the
crate). Still needed for §5.2: **keypad · note lines · folder · bin.**

---

## Build → Design · 7 Aug · Two labels, one word

Shipped without a handoff because all four were faults in what I'd
already built, not new surface. Flagging the one that changes what
the recipe sheet prints.

### 1. "Method" meant two different things

The editor had a **Method** box holding *Stirred / Shaken* and a
**Method** section holding *how you build the drink*. Same word, two
fields, no way to tell them apart once you'd typed. Sean hit it the
first time he exported.

- The technique field is now **Technique**.
- The prose is now **Instructions**.
- The sheet's `METHOD` block is now `INSTRUCTIONS`; the technique
  rides in the header line beside the title (`Cocktail · stirred`),
  where it already was.

### 2. Batch instructions were printed nowhere

`batchInstructions` existed in the editor and on no sheet. Export a
750 ml column and you got single-drink instructions next to batch
quantities.

The sheet now prints both, each named, **but only when the sheet has a
batch column and the recipe's batch text actually differs.** A
per-drink-only sheet still shows one block labelled `INSTRUCTIONS`.

⚠️ **This adds height to a page you designed as two-to-a-Letter-page.**
A recipe with both blocks filled is roughly 4 lines taller. It still
fits at the volumes I've tested, but if you want the batch block
somewhere else — under the batch columns rather than under the
single ones, say — that's a real option and I haven't taken it.

### 3. Cards open locked — and I got this wrong once, publicly

Library rows used to expand to ingredients only; technique, glass,
instructions and notes were all behind **Edit**. So reading a recipe
meant opening the thing that can change it.

**My first fix made it worse.** I read "card" as a region and built a
bigger inline drawer — tapping a row unfolded the whole recipe between
its neighbours. Sean: *"One shows the recipe opening in-line with the
entire list. I hate that."*

⚠️ **A card comes forward.** It is the same sheet the editor uses, in
a locked state, over the library — not a region that pushes the list
apart. Pressing **Edit recipe** unlocks it in place: same sheet, same
sections, same order, text becomes fields and nothing moves. Cocktails
and prep both.

Locked is **not disabled**. No greyed inputs, no unit rollers, no
remove ×, no "Add ingredient" — Sean said "no boxes or rollers" twice
and a greyed box still reads as a box. The locked ingredient row is a
separate, simpler component from the editor's.

Empty fields print `—` under their label rather than vanishing, so "no
glassware recorded" is distinguishable from "this card has no
glassware line".

**Open for you:** the locked card is borrowed, not drawn — it reuses
15B's header proportions and section labels. If the reading state
wants different type or spacing from the editing state, that's yours
to call.

### 4. Library headers

`Products` went text-xl → text-2xl. **Cocktails and Prep Recipes had
no `<h1>` at all** — you landed on a bare search box with nothing
naming the page. Both now match Products.

---

## Build → Design · 7 Aug · Vocabulary, and two rail segments

### The word "estimate" was doing two jobs

Settled with Sean today. Please use these consistently in handoffs:

- **Quote** — the price-range PDF sent to a *lead who inquires*. Client
  facing. Never built. This is what Sean has been asking for.
- **Estimator** — the internal calculator that tells *Sean* how many
  bottles to buy. Built and scrapped today (see below). Sean never sees
  this word.
- **Event Details** — the rail panel recording facts about the job.
- **Event log** — details + invoice + leftovers, accumulated per event.

I built the estimator when Sean had also been asking for the Quote.
Different audiences, different documents.

### The estimator is parked, and why it matters to you

It was verified against the one real job and ran 30–70% high, because
Sean's stated drinks-per-guest and his stated category split imply 4.2
spirit drinks per guest while his own measured counts say 2.6. That's a
data problem, not a design one. **Don't draw estimator surfaces yet.**

### Two stubs are now real

`details` and `cocktails` in the rail were both "Not built yet."

**Event Details** — client, date, type, venue, event address, guests,
service window, cocktail hour + duration, bar type, crowd style, notes.
Undesigned; borrows the settings-form field patterns. Writes through
`updateDraft`, so one keystroke is one undo step even though client name
lives in two places on an invoice.

**Cocktail selector** — tick a cocktail, its linked products land on the
invoice. ⚠️ **It does NOT scale to guest count**, which is what the stub
text promised. Scaling is the estimator. Un-ticking removes it from the
menu but leaves the products, since the rye is probably in something
else.

**Open for you, and it's the interesting one:** the selector's rows have
to say what they *couldn't* add — bitters, mint and water have no
product behind them by design (§11.1). Right now that's a third line of
small text per row, which makes a 61px row into something taller and
noisier. There's a better answer and I don't have it.

---

# Round 11 request · Three rail surfaces, one of them never drawn

**From Build, 7 Aug 2026.** Two of these I shipped badly and Sean rejected
on sight. The third has never existed anywhere.

> Sean: *"The details panel and the cocktail selector look horrible."*

He's right. What follows is what I built, why it fails, and what I don't
know how to solve.

---

## Constraints that apply to all three

- **Rail is 360px wide** when expanded, and collapses. On phone the same
  components render inside `SourceDrawer` instead — so whatever you draw
  has to survive both.
- **iPad first.** ≥44px targets. ⚠️ `hover:` is inert — iPadOS reports
  `(hover: none)`, so Tailwind wraps every hover class in a media query
  that never matches. Pointer state comes from `pointerType`.
- Existing vocabulary: 61px rows, the §10.1 type scale, `RowChip`, gold
  underline on active segments, the gold-edge pointer highlight.
- The invoice is visible beside the rail the whole time. The rail is a
  **side** surface, not the main event.

---

## 1 · Event Details — I put a form in a column

### What I built

Eleven fields stacked vertically in the 360px rail: client, event date,
guests, event type, venue, event address, bar opens, bar closes, cocktail
hour, cocktail hour length, bar type, crowd style, notes. Each with an
uppercase 13px label above a 48px input. Roughly **900px of scrolling** in
a column that's already narrow, beside an invoice that's the actual work.

### Why it fails

- It's a settings page wearing a rail's clothes. Nothing groups, nothing
  leads, everything is equally loud.
- Two date/time pairs (bar opens/closes, cocktail hour yes + length) are
  side-by-side flex rows that leave the column ragged.
- Uppercase labels on eleven consecutive fields is a wall of small caps.

### The question I actually have

**Does this belong in the rail at all?** These are facts you set once when
the job is booked and then rarely touch — unlike Products, which you use
continuously while building. It might want to be a full-screen sheet like
the recipe editor, with the rail segment being a *summary* that opens it.

I don't know. That's a decision about how Sean works, and you've been
right about that twice this month (the archived switch, the yield block).

### Field notes

- Client, date, venue and guests exist **twice** on an invoice — top level
  and inside `form`. Not a choice; the old app's doing. I write both.
- **Bar type** and **crowd style** currently calculate nothing. They're
  recorded for a future estimator (see below). Sean should be able to tell
  they're being banked rather than used — I did this with a paragraph of
  small text, which is the laziest possible answer.
- Event address ≠ billing address. It's where the job happens, and it
  prints on the supply invoice.

---

## 2 · Cocktail selector — three lines in a 61px row

### What it does

Tick a cocktail → its linked products land on the invoice. Un-tick →
removed from the menu, **products stay** (the rye is probably in something
else). It does **not** scale to guest count; that's the estimator, which
is parked.

### Why it fails

Each row carries: name, summary line (`Stirred · Coupe · 3 ingredients`),
and — this is the problem — **a third line naming what it couldn't add.**

> Buy separately: Aromatic Bitters, Mint, Water

That line exists for a real reason. Per §11.1, bitters, mint, garnish and
water are *supposed* to be unlinked. So ticking a cocktail adds four of
its six ingredients, and saying nothing means Sean finds the gap at the
shop. But three lines of text in a 61px row is either a taller row or a
truncated sentence, and I chose truncation, which is the worst of both.

**This is the interesting problem in this round.** A row has to say what
it will do AND what it can't, without becoming a paragraph.

---

## 3 · Leftovers — never designed, and the hardest of the three

### Why it exists

The estimator was built on 7 Aug and scrapped the same day. It ran 30–70%
high because two of Sean's own numbers contradict each other — his stated
drinks-per-guest implies 4.2 spirit drinks per person, his measured counts
say 2.6. No amount of code fixes that.

The fix is real data. **Every event that passes without this recorded is a
row that can never be recovered.**

### ⚠️ The moment this happens in

Not at a desk. **Breakdown, roughly 1am**, Sean is packing up, iPad in one
hand, bar in front of him. He is tired and wants to leave.

⚠️ **Nothing comes back to him.** He doesn't stock liquor — the client
buys it and keeps what's left. So the number is *what's sitting on the bar
when he packs*, observed once, never again.

### What Sean committed to

His words, choosing between options: **"Count when I can, tap when I
can't."**

So there are two modes and he picks per event:

- **Count** — walk the invoice, put a number on anything with product
  left. "3 unopened cab, half a Tito's." Only lines with leftovers need
  touching; most rows stay untouched.
- **Tag** — one pass, no numbers: *too much · about right · ran short*,
  per category. Five taps.

Events where he counted should weigh more when the estimator is
eventually rebuilt.

### What I can't figure out

1. **"Half a Tito's."** Partial bottles are the norm and a number field is
   wrong — he's eyeballing a bottle, not measuring. Fractions? A four-stop
   control (full / half / splash / empty)? Something else?
2. **Making "most rows are untouched" the easy path.** A 40-line invoice
   where 6 lines have leftovers should not be 40 interactions.
3. **Where it lives.** An invoice that's been through an event is
   `archived` or `complete`. Does this attach to History? Become a stage?
   A prompt that appears the day after the event date?
4. **How he chooses count-vs-tag** without it feeling like a quiz before
   he's allowed to start.

---

## What I'm asking for

Drawings for all three, in whatever order you think is right. If Event
Details wants to leave the rail, say so — I'll rebuild the segment as
whatever you draw instead.

⚠️ **Don't draw estimator surfaces.** It's parked until the log has real
events in it. Vocabulary, now settled with Sean and in
`limbo-app/GLOSSARY.md`:

| term | what | who sees it |
|---|---|---|
| **Quote** | price-range PDF for a lead who inquires | the client |
| **Estimator** | calculator saying "buy 10 bottles" | Sean — parked |
| **Event Details** | facts about the job | Sean |
| **Event log** | details + invoice + leftovers | Sean, later |

I built the estimator while Sean had been asking for the **Quote** for
weeks. Different audiences, different documents. Please keep them apart in
handoffs.

---

## Build → Design · Round 11 built

All four drawings built. Three notes back.

### 19C — built as drawn

Rail is a summary (client + date heading, four facts, notes in full,
one 48px button); the eleven fields are on a full-screen sheet with
four sentence-case sections. You were right that widening the rail
would have produced a tidier cramped form — I'd have done exactly that.

⚠️ **One thing your drawing changed that the spec didn't mention:** 19C
draws **Cocktail hour** as a *time* (`6:00pm`) with a separate **For**
field (`1 hour`). The stored data has `ch` holding `"yes"`/`"no"` from
the old app's wizard. I render whatever's in the field rather than
assuming, so an old `"yes"` still reads — but new events will store a
time and old ones hold a word. Flagging rather than silently migrating.

### 19D — built as drawn

The foot list is derived from the selection every render, never stored.
Broken links get their own line and stay out of the buy list. I built
"Add these as a note on the invoice" — the lines go on as `silent`
rows, which are already excluded from totals and exports (§9.3), so the
note travels with the document without pretending bitters cost nothing.

### 19A / 19B — built, and the logic is under test

Naming the default was the answer; thank you. The pass is six taps.

`finishedAt` is stored separately from the values, so an abandoned pass
keeps its real lines and reads as *Counted, unfinished* rather than as
confident zeroes. History rows carry the provenance chip.

⚠️ **One thing I had to decide, and you should know about it.** The
gauge appears based on the line's **display unit**, and those units are
a mess — 83 distinct values across the real library, including
`"750ml"` and `"16oz"` with no space and `"Bag, 4 oz"` which contains
"oz" but is a bag of ice. My first version offered a Full · ½ · Splash
gauge on bags. It now tests countable words FIRST and the order is
load-bearing. Nineteen real unit strings are covered by a test.

**Where this can still be wrong:** a product whose unit is blank or
something the test doesn't recognise gets the stepper alone — so Sean
can record "2 left" but not "half left". Silent, and it fails toward
the simpler control rather than the wrong one. If you'd rather it fail
the other way, say so.

---

## Build → Design · Round 12 built (20A, 20B)

Both corrections in. Two flags, one of which is a deliberate deviation.

### 20A — one table

Rebuilt as a single `table-layout: fixed` table with a colgroup;
category names are `colspan=4` rows inside it. The alignment is
structural now, exactly as you said — I can't knock a column out of
line by adding a row.

**Checked the grid closes rather than eyeballing it:** 60 + 168 + 104 =
332, leaving Item 340px at Letter with 0.75in margins — enough for
"Pierre Ferrand Orange Curacao". Totals block is 272px and matches
Unit + Amount.

⚠️ **One thing your spec didn't cover, and I had to decide.** On the
4in narrow page, Qty and Unit are hidden — but under `table-layout:
fixed` a hidden column **still holds its declared width**, so the
narrow page would have reserved 228px for two columns it doesn't draw.
I release the table to `auto` layout inside the narrow media query and
reset the col widths. Narrow Item lands at 213px.

⚠️ **The per-category "(continued)" heading is gone**, and I want you
to confirm that's intended. With five tables, a long category repeated
its own name on page 2. With one table, the `thead` repeats **column
headings** — Item · Qty · Unit · Amount — but a category that splits
does *not* reprint its name. Your §16.1 text says the column headings
were the load-bearing part, so I built it that way. If the category
name should also repeat, that needs a different mechanism and I'd
rather hear it from you than invent one.

### 20B — prep card

Built, including the parts that didn't exist yet: **prep export is now
a real path** (`/prep/print`, `PrepSheet`, `withVolumes={false}` per
§14.5), so the Export button in your drawing does something.

Water shows an em-dash and carries no chip. Ingredient cost sums only
what's costed.

⚠️ **I deviated from the drawing on one word and you should overrule me
if you disagree.** 20B labels the prose **METHOD**. I built
**Instructions**.

The reason: on 7 Aug Sean hit a collision where "Method" meant both the
technique (*Stirred*) and the build prose on the cocktail card, and had
me rename the prose to Instructions. Using METHOD on the prep card and
Instructions on the cocktail card puts two words on one concept across
two libraries — which is the thing he'd just complained about. Prep has
no technique field so there's no collision *here*, but there is one
between the two cards.

⚠️ **"Used in" is matched by NAME, not by id, and that is a real
limitation.** Nothing in the data links a cocktail ingredient to a prep
recipe — `libraryItemId` points at the product library. So "Demerara
syrup" is found because the words match. **Rename a prep recipe and its
chips empty out** while six cocktails still call for it. Fixing it
needs a data change, not a cleverer match; a fuzzy one would produce
chips that are wrong without saying so. Flagging it rather than
shipping it silently.

---

## Build → Design · 8 Aug · Prep recipes are linkable now

Sean asked for the "Used in" list to be rock solid. It couldn't be —
the problem was structural rather than a weak matcher.

**A cocktail ingredient had one link field, pointing only at the
product library.** Prep recipes live in their own collection with their
own ids and nothing could reference them, so "Used in" compared typed
names — missing "Lime juice, fresh squeezed" against "Fresh lime
juice", breaking on every rename, and failing silently.

Ingredients now carry `prepRecipeId` as a second, mutually-exclusive
target. Links survive renaming.

### What this changes on screens you've drawn

**The ingredient picker (15A)** now lists two labelled groups — *"Prep
recipes — you make these"* then *"Products — you buy these"*. Prep
sorts first: when "Simple syrup" matches both, the thing he makes is
nearly always what he means, and putting it second makes the wrong
answer the easy tap. Undesigned; borrows the existing suggestion rows.

**The prep card's "Used in" (20B)** now shows **two things, and they
must not merge.** Chips are confirmed links. Below them, a quiet line:
*"3 recipes name this but aren't linked to it — Gimlet, Daiquiri,
Paloma."*

⚠️ **The second list exists because Sean chose to link as he goes
rather than run a migration.** Every ingredient in the library
currently has no link, so an id-only list would show "used in nothing"
on a syrup six recipes obviously use — a worse lie than the one being
fixed. It's a prompt, not a fact, and it empties as he works.

**Open for you:** that unconfirmed line is mine, not drawn, and it's
the weakest part. It's a sentence where the rest of the card is chips.
It also has no affordance — it names the recipes but you can't tap
through to fix them.

**The selector (19D)** gains a third foot section: **"To make"**, with
the sprout glyph, holding prep recipes. They're deliberately out of
"Buy separately" — sending Sean to a shop for syrup he makes from sugar
he owns is exactly the confusion the buy list exists to prevent.

### ⚠️ The gap this opens, and I'd rather flag it than quietly leave it

**Ticking a cocktail whose lime juice is a prep recipe adds nothing to
the invoice for it.** What *should* go on is the syrup's own sources —
limes, sugar. That's the prep expansion the old app did, and it's the
origin of the odd "Prep Ingredients" category in the real data.

Right now the foot says *"Their ingredients aren't on the invoice yet —
check each recipe for what to buy"*, which is honest but is work left
to Sean. **This is the next real feature in this area** and it needs a
ruling: does expanding put the sources on the invoice at the quantity
the batch needs, and if so, what happens when two cocktails share a
syrup?

---

## Build → Design · 8 Aug · One unit registry

Sean asked for grams in the product editor, then asked whether units
shouldn't be app-wide. They should have been: **there were ten separate
unit lists**, and the one named "official" was read by none of the four
pickers. 314 products hold 83 distinct spellings between them.

`src/lib/units.ts` is now the only definition. Each unit carries a
dimension and a conversion factor.

⚠️ **It fixed a costing bug, not just duplication.** A 4 lb bag of sugar
produced no cost at all — the only converter was volume-based, so
weights fell off the end and prep recipes reported "by weight" as
though it were impossible. Weight ÷ weight needs no density: $6.80 ÷
1814 g, so a 500 g syrup costs $1.87. That works now.

### One new shared component, undesigned

`UnitSelect` — a grouped `<select>` (Volume · Bar · Weight · Count)
replacing four hand-typed lists. It's a plain select at the existing
control sizes.

**Open for you, and I'd rather you decided it:** the registry has 28
units. A `<select>` of 28 is fine on a desktop and tedious on an iPad,
and the cocktail row's picker sits in a 61px row where it's now 96px
wide. There may be a better shape — the four or five Sean actually uses
promoted, everything else behind "more" — but any such shortlist is a
guess about his habits, so I've built the honest long one and left the
judgement to you.

⚠️ **One unavoidable ambiguity, worth knowing before you draw
anything:** `oz` resolves to FLUID ounce, per bar convention and the
old app. Weight ounces are a separate `oz wt`. So a product whose
packaging genuinely means weight ounces — a 4 oz bag of cherries —
costs as 4 fluid ounces. The string itself is ambiguous; no picker can
resolve it retroactively.

---

## Build → Design · 8 Aug · Disabled buttons that don't say why

Sean couldn't save a new prep recipe. The Save button was greyed out
and the only thing blocking it was an **empty name** — which nothing on
screen mentioned. He'd filled in yield, sources and method first,
because in that editor the name isn't the field you naturally start
with.

⚠️ **This is §16C and gate 1 again**, and I'd applied that ruling to
the yield field in the very same header while leaving the name silent.
The yield says *"Add a yield and this starts costing itself into
drinks. Until then it counts as $0."* The name said nothing at all.

**Save is no longer disabled in any of the three editors** (prep,
cocktail, product). Pressing it with no name focuses the name field and
shows one line under it. Same pattern as TaxRateSheet, which already
did this correctly.

**Open for you:** the inline message is `--warning` text plus a
`ring-2` on the field, which I borrowed from nothing in particular —
it's the first "you must fix this before continuing" state in the app,
and every other message we have is advisory. If a required-field state
should look different from a warning, that's yours to set.

**Worth a sweep at some point:** I checked the other disabled controls
and the rest are honest — undo when the stack is empty, an unreachable
stage, export with nothing selected. But "disabled with no reason" is a
class of bug rather than one instance, and the app has no rule about it
yet.

---

# Round 13 request · The three library cards, as one system

**From Build, 8 Aug 2026.** Sean's ask, verbatim:

> *"We need to clean up the cards that I select and open for viewing AND
> for editing. Look at all the libraries, and present layouts that are
> cohesive (each still needs their corresponding info/fields) but I'd
> like it to 'feel' and 'look' somewhat more cohesive in terms of table
> layout and rows and columns and spacing and such. Headers and dividers
> need to be more pronounced so as to show the different aspects of the
> info/fields in each open card. Give options."*

## The bug that prompted it, because it's the best evidence

Sean reported he couldn't edit a prep recipe's name. He was **tapping
the sheet's title bar** — which says *"New prep recipe"* — instead of
the editable name field directly below it.

⚠️ **Two things called "the name", and the one you can't type in is the
more prominent.** `Sheet` renders `title` in a bordered header at
16px semibold; the card then renders the name AGAIN as a 24px input
with no border, no label and only a placeholder. That is a layout
fault, not user error, and it's the clearest single symptom of the
problem he's describing.

## What's actually inconsistent — measured, not impressions

**1 · Two libraries open read-only; one doesn't.**
Cocktails and prep open a locked card with Edit at the foot (§16.2).
**Products opens straight into the editor.** Three libraries, two
behaviours, and the odd one out is the one Sean opens most.

**2 · Two different heading systems.**

| | cocktails / prep | products |
|---|---|---|
| size | `13px` | `12px` (`text-xs`) |
| colour | `--gold-text` | `--text-muted` |
| tracking | `0.05em` | `wider` |
| rule | full-bleed `border-b` | none |
| grouping | flat sections | one boxed `rounded-card` panel |

**3 · Field labels contradict your own 19C ruling.** You ruled for Event
Details that field labels are **sentence case in `--text-secondary`**
and that CAPS belong to section headings — *"eleven consecutive
uppercase labels is a texture, not a hierarchy."* That ruling never got
applied back to the libraries: `RecipeEditor`'s Technique and Glass are
still 13px bold uppercase, sitting directly under section headings in
the same 13px bold uppercase.

**4 · The dividers don't reach the edges, and this is probably most of
why it looks untidy.** `Sheet` pads its children `px-5`. The cards then
add `px-4` and hang `border-b` off that inner box — so every section
rule floats **20px short of the sheet on both sides**, and section text
sits 36px in. Nothing looks full-bleed; everything looks slightly
adrift.

**5 · Row geometry differs.** Cocktail/prep cards are 61px list rows.
The product editor is stacked `Field`s with 48px inputs in a 2- and
3-column grid.

## What each card must still carry

- **Product** — name · category · price · package (qty, unit,
  packaging) · "displays as" preview · live cost · product link ·
  advanced (rental company, type, cost-per-oz override, not-costed)
- **Cocktail** — name · technique · glass · ingredient rows (name,
  link state, qty, unit) · instructions, single and batch when they
  differ · notes
- **Prep** — name · yield + cost-per-unit subtitle · source rows with
  a per-row cost column · ingredient cost total · instructions ·
  "used in" chips

## What we'd like back

**Options, as Sean asked — not one answer.** The interesting axis is
probably how hard the sections are separated: full-bleed tinted header
bands, hairline rules with more air, or boxed groups like the product
editor's package panel promoted to a general pattern. Seeing two or
three of those against the same content would settle it.

⚠️ **Please rule on the read-only state for products too.** If every
library should open locked, products needs a card designed; if products
is genuinely different because you edit it more than you read it, we'd
rather hear that than guess.

⚠️ **And the duplicated title.** Either the sheet header owns the name
and the field goes away, or the field owns it and the header says the
kind of thing ("Prep recipe"). Right now both claim it.

**Constraints unchanged:** iPad first, ≥44px targets, `hover:` inert on
iPadOS, 13px type floor, sheets are `max-w-lg` on desktop and full
width below `lg`.

---

## Build → Design · 8 Aug · Round 13 built — Sean chose 21D

**He picked boxed groups over your 21B recommendation.** Your objection
is recorded in the code where it'll be read: boxed groups are inset by
definition, content lands 36px from the card edge, and that's the
figure §17 opens by deleting. It is still true. What changed is that
the inset is now a *choice* with an edge that agrees with itself.

Everything else built as ruled: padding ownership moved, header says
the kind, name is a labelled 48px field, 19C global, products opens
read-only with **Add to invoice** as its primary action.

### ⚠️ One thing I did NOT build as drawn, and you should overrule me if I'm wrong

**21D draws the group panels as `background: #FFFFFF`.** DECISIONS.md:

> *"Never pure white or pure black as a background… The rule governs
> what you sit on, not what you write."*

— and your own log shows that constraint was argued and settled on
29 Jul. Building it literally would have knowingly broken a hard rule,
so the panels use `--surface` and the card behind them `--surface-alt`.
**Same figure/ground the drawing wanted — the group reads lighter than
the card — with a legal palette.** If the white was deliberate and the
rule needs an exception for panel fills, say so and I'll change it.

Two smaller resolutions to the nearest token, both within a shade: the
label bar draws `#F4F0E6`, which is `--bg` rather than the
`--surface-alt` your prose names; the row divider draws `#EFEADD`,
closest to `--border-subtle`.

### The PNGs still never arrived

Round 13's zip was byte-identical to round 12's — 58 files, no
`21*.png`. I built from the canvas markup, which was actually better
for geometry. But Sean couldn't see the options he was choosing
between; I rebuilt them in chat at reduced scale and he correctly
called that out as not representing the real density.

**Worth fixing in your export before the next round**, since the
handoff is only half a handoff without it.

### Open, and genuinely uncertain

**Four groups in a card is a lot of boxes**, and your busy-ness warning
about 21B applies harder to 21D — every group now carries two borders
and a label bar. On the prep card that's Ingredients · Instructions ·
Used in, plus the title block. It reads fine to me in markup and I have
no device. If it's heavy, the fix is probably merging rather than
softening, same as your 21B note.

---

## Build → Design · 8 Aug · Wishlist triage — two questions for you

Triaged Sean's inbox. Four items were bugs and are fixed; two of the
remaining three need a design ruling before I build them.

### 1 · Multi-select — the mode control, and bulk delete

Cocktails has select mode (§18D). Products and prep don't, and Sean
wants them — plus **multi-delete**, plus this:

> *"I don't like just seeing the word 'select'. Why not some type of
> icon that indicates multi-select? Cleaner."*

⚠️ **I'd rather you ruled than have me guess.** An icon-only control
for a **mode** is a different risk from an icon-only *action*: there's
no widely-read glyph for multi-select, and a wrong guess stays
invisible until he's mis-tapped. §18D also put the mode in the header
deliberately, away from the rows, so whatever replaces the word has to
still read as "this changes what tapping does".

**Bulk delete needs its own confirm shape.** Single deletion now says
*"Move Empress 1908 Gin to the trash? You can restore it from the foot
of the library."* — it names the thing. Six things can't be named in a
sentence, and a count alone (*"Move 6 products to the trash?"*) is the
kind of confirm people click through. Open.

### 2 · Settings needs sections — and one of them is dead

> *"Settings need sections. I need to know where to find relevant
> settings… I plan on adding more functionality as I build."*

It already has five headed blocks on one page, so the fault isn't
missing headings — it's that they're all one level with no way to
navigate. Cheapest to fix at five.

⚠️ **The drink-split presets (16D) compute nothing now.** They fed the
estimator, which was scrapped 7 Aug. They're a genuine record of how
Sean's crowds drink and the estimator will want them back — but they
currently sit in Settings doing nothing. Keep, move, or hide until the
estimator returns? Your call; §16D was yours.

### For information — one bug worth knowing about

**Deleting a product was a hard delete.** One tap, permanent, no trash,
while cocktails and prep have had a restorable trash since they were
built. Every invoice line pointing at the deleted product became a
broken link with no way back. Products now trash like the other two,
with a Restore row at the foot of the library.

No design needed — it's the pattern you already set in §16B, applied to
the library that was missed.

---

# Round 14 request · Multi-select across the three libraries

**From Build, 8 Aug 2026. First round with source access — so this
brief points rather than transcribes.** Everything below is a
`file:line` you can open. If I've asserted a number, check it.

## What Sean asked for

> *"The 'select' button in the cocktail library: we are missing that
> multi-select option in the product and prep recipe libraries. We
> should [be] given the option to not only export, but delete multiple
> entries. I don't like just seeing the word 'select'. Why not some
> type of icon that indicates multi-select? Cleaner."*

## What already exists — read these first

| | |
|---|---|
| `src/lib/useSelection.ts` | The model. Already library-agnostic — takes `all`, `visible`, `idOf`. |
| `src/components/library/SelectionBar.tsx` | The bar. Currently exports only. |
| `src/components/library/CocktailLibrary.tsx:137–143` | The Select/Done button, the only one that exists. |
| `src/components/library/ProductLibrary.tsx` · `PrepLibrary.tsx` | No selection at all. |

⚠️ **The model is not the problem and does not need designing.**
`useSelection` already survives filtering, reports `hiddenCount` for
selected items a filter conceals, and `selectAllVisible` **adds rather
than replaces**. Those were §18D rulings and they hold. Wiring two more
lists to it is small.

## The two things that need you

### 1 · The mode control — an icon instead of "Select"

⚠️ **An icon for a MODE is a different risk from an icon for an
ACTION.** An action's icon is wrong for one tap; a mode's icon is wrong
until you notice the rows have started behaving differently. There's no
widely-read glyph for multi-select, and §18D deliberately put the
control in the header, away from the rows, so whatever replaces the
word still has to read as *"this changes what tapping does."*

Sean's reason was *"cleaner"*, which is worth taking seriously — the
header currently carries a 48px bordered button saying **Select** next
to another saying **New recipe**, and they compete.

### 2 · Bulk delete — the confirm shape

Single deletion now names the thing:

> *"Move **Empress 1908 Gin** to the trash? You can restore it from the
> foot of the library."*

⚠️ **Six things can't be named in a sentence, and a bare count —
*"Move 6 products to the trash?"* — is the confirm people learn to
click through.** That's §16C's own objection to confirms that don't
carry information.

Everything goes to a restorable trash now, including products
(`src/lib/data/library.ts`, new 8 Aug — deleting a product used to be
permanent). So the stakes are lower than they look, and the honest
question is whether a bulk confirm should exist at all or whether the
trash IS the confirm.

## ⚠️ What changed under you since round 13 — check before drawing

- **The libraries now open a read-only card** (§17.3), products
  included. `src/components/library/CardKit.tsx` is the shared kit at
  21D geometry.
- **`Sheet` no longer contributes horizontal padding** (§17). Content
  owns 20px.
- **Products has a trash and a Restore row** at the foot of the list,
  which is new furniture in the same place a selection bar would sit.
  Worth checking they don't collide.

## Not asking for

The selection model, the export path, or the `+N of M` chip. All
shipped and all fine.

---

## Build → Design · 9 Aug · Round 14 built

All three §18 rulings in, across all three libraries. Two notes back,
one of which is a correction.

### ⚠️ The `text-xs` defect was wrong, and it's worth knowing why

> *"`SelectionBar.tsx` sets the count, Clear and Export at `text-xs` —
> 12px, under the 13px floor. Three instances (lines 63, 70, 79)."*

**`text-xs` is 15px in this app.** `src/app/globals.css:250` remaps
`--text-xs` in `@theme`, deliberately, with the reason stated inline:

> *"REMAPPED HERE RATHER THAN IN 278 COMPONENTS. `text-sm` and
> `text-xs` account for 278 of the app's uses… Change these seven lines
> and the whole app moves together."*

The type scale you set in §10.1 was implemented by moving the scale
itself, not by rewriting every call site. So `text-xs` reads 12px only
if you take Tailwind's default rather than this project's theme. The
line numbers didn't match either — the actual uses are 51, 58 and 68;
63 is a `flex-1` spacer.

**I made the change anyway.** Your *reasoning* held even though the
premise didn't: the count is the number the surface exists to report
and deserves 15px, and the rest reading at an explicit 13px is clearer
than inheriting. So the outcome is what you specified — arrived at for
a different reason.

**No process complaint.** This is the loop working: you read source and
found `hiddenCount` dead, which nobody using the app would ever have
noticed. One wrong out of two, caught in minutes, is a good trade
against a round-trip per fact. **Worth adding to your own checks: read
`globals.css`'s `@theme` block before asserting what any Tailwind size
class resolves to in this repo.**

### The precondition is now enforced, not remembered

§18.1 made the icon conditional on `SelectionBar` rendering at count 0.
That condition is checked on every build — `scripts/check-select.mjs`
reads all three libraries and fails if the bar ever becomes
count-gated, and asserts `aria-label="Select"` survives.

⚠️ **A ruling that depends on a condition needs the condition tested,
or it decays into a comment nobody reads.** Same script also checks
undo iterates the whole batch and that the strip never says "deleted".

### One gap your drawing assumes and the app doesn't have — parked

**Products has no export path.** 22B's bar has Export in it, and the
cocktail and prep libraries both route to a print page — products never
had one. Its Export currently closes the mode rather than pretending.

**Parked by Sean, 9 Aug — not sure yet.** Whether a product export (a
shopping list? a price list?) is a real thing he wants is still open,
but it isn't a ruling either of us should make for him. No design work
needed until he decides. Products' Export stays a no-op in the
meantime, and **this doesn't hold up Round 15.**

---

# Round 15 request · Full offline mode — the shell, not the writes

**From Build, 9 Aug 2026.**

## Why now

Flagged in `WISHLIST.md` on 31 Jul as 🔴, with its own trigger: *"after
the Builder ships, before you rely on it at a live event."* The
Builder, all three libraries, and both export paths have now shipped
(round 14, today). The condition Sean set for raising this has been
met, so raising it now rather than waiting to be asked.

## What already exists — read these first, don't re-derive them

| | |
|---|---|
| `src/lib/data/sync.ts` | The write queue. Every write applies locally at once, is queued, retried with backoff, and replayed against fresh server data on reconnect. Its own comment, lines 29–32, names the scope split verbatim: *"NOT IN SCOPE (parked as full offline mode): service worker shell caching, IndexedDB, surviving days offline. localStorage is enough for the current goal."* |
| `src/lib/data/saveState.ts` | The four-state save slot — resting / writing / queued / failed — already live in the invoice header (`InvoiceHeader.tsx`, `Builder.tsx`). Rule stated inline: *"never say 'not saved' when the local write succeeded."* **This is already designed and built. Don't re-draw it.** |
| `src/components/SyncIndicator.tsx` | A second, differently-shaped sync readout — dot + label + Retry/Dismiss. **Only mounted on `/debug/sync`.** Never shipped to real UI. |
| `src/lib/useStoredValue.ts` | `useOnline()` — live online/offline via browser events. Works today. |

⚠️ **Two patterns already exist for what may be the same fact** — the
header's inline save-state text, and `SyncIndicator`'s dot-and-chip.
Whether full offline mode reuses one, both, or needs a third for a
different context is a real question, not a given.

## What's actually missing

**The app cannot open with zero signal.** Everything above assumes the
shell already loaded — JS, CSS, the page itself — over a live
connection. There is no service worker and no cache manifest anywhere
in `src` or the Next config. Checked.

The write queue already handles "online, then the network drops
mid-session." It does not handle "opened the app at a venue with no
bars at all" — which is the case Sean actually flagged.

## The two things that need you

### 1 · What does "offline" look like on first load, before anything's cached?

Before a service worker has ever cached the shell (first visit, or
after it's cleared), there's nothing to fall back to. Is a plain
"you're offline, try again" acceptable for that one-time case, or does
it need real treatment?

### 2 · Reconcile the two sync indicators, or justify keeping both

If `SyncIndicator` is meant to ship, it needs a home that doesn't
duplicate the header's save-state slot. If it isn't, it should say so
rather than sit live in the code as an unshipped second answer to the
same question.

## Not asking for

The write-queue mechanics, retry/backoff, or the save-state copy —
all built, all correct, out of scope for this round.

---

# Build → Design · 9 Aug · Round 15 built — procurement (23A, 23B)

**Sean chose procurement and left kits for a later round.** 23A and 23B
are built, verified and shipping. 23C is not, for a reason in §4 below
that's worth your attention before you draw any more of it.

**First, the bundle crossed in the post.** I sent a Round 15 request for
**full offline mode** this morning; this handoff answers 23A–23C. Your
own ledger note predicted exactly this — *"re-export on every design
turn, or this recurs."* The offline request is still open above; nothing
about it has changed.

## What got built as drawn

The tick as the only one-tap control, toggling and never cycling. The
strike scoped to the description with quantity and amount at full
contrast. No row tint. The five chip treatments including nothing for
`""`. Legacy `ordered` still rendering. Counts on the mode bar and on
each category heading, derived. The radio list above the item actions
with *No status* choosable. The mode remembered per invoice and
defaulting to on at Complete. The padlock on the bar.

⚠️ **Your ruling that procurement works at Complete is the whole reason
this round is worth shipping**, and I want to say so plainly, because
the brief you overruled would have produced a feature that switched
itself off at the moment it was needed. It also survived contact with
the code: the lock is enforced in `updateDraft()`, which refuses every
edit on a locked invoice, so procurement needed its own write path
rather than a flag. That path takes a **status string**, not a mutator,
and recomputes nothing — it is incapable of moving a number. A build
check reads the source and fails if that ever stops being true.

## 1 · I removed four rows at Complete, where your prose named two

Your text says `Edit quantity` and `Delete line` are removed. **23B's
frame leaves only *Open in library*.** I built the frame.

`Add a note` and `Move to category` both write through `updateDraft()`,
which a locked invoice rejects — so leaving them would have left two
buttons that do nothing at all, which is worse than the greying you
ruled against. **The frame and the prose disagreed and the frame was
right;** flagging it rather than assuming.

*(Our panel has no "Open in library" row — the product URL is an icon in
the panel header, which is how §10.3 was built. So at Complete the panel
is the procurement block plus the one lock line.)*

## 2 · §19 never said where the mode is turned on — I picked, you rule

Every frame shows the bar already up. **There is no entry point drawn.**

I put it in the ⋮ as `Procurement mode · On / Off`, because §11.3 made
that menu "the things you do TO a document" and a per-invoice view mode
is one. It stays available at every stage, including Complete.

**This is my decision, not yours, and it's the weakest part of the
round.** A mode Sean uses on event day sitting three taps deep in an
overflow menu may well be wrong — a control in the invoice header, or
something that appears at Complete, could both be better. Yours to
overrule.

## 3 · One question the drawings leave open, parked rather than guessed

**Nothing surfaces packing progress outside the Builder.** History rows
show stage and total; a Complete invoice that's 14 of 41 packed looks
identical to one that's fully packed and loaded. On event morning the
question *"which of these three jobs is ready to go?"* has no answer
without opening each one.

Not built, not designed, and I'd rather it were drawn than invented.

## 4 · ⚠️ Kits (23C) has a dependency that doesn't exist

*"Made from a selection, not typed from scratch. Select mode exists now
(§18); the same gesture on the invoice gives Save as kit."*

**Select mode exists in the three LIBRARIES. It does not exist on the
invoice.** `useSelection` has exactly four callers — `CocktailLibrary`,
`PrepLibrary`, `ProductLibrary` and `SelectionBar`. The Builder is not
one of them; invoice rows have a press-and-hold panel and a stepper, and
no selection model at all.

So "the same gesture" is a gesture the invoice has never had. That
doesn't make 23C wrong — it makes it **two features**, and the first one
is undrawn:

- **Select mode on the invoice**, which needs its own ruling. The libraries'
  bar assumes rows you can only select; invoice rows carry a live stepper
  and a long-press panel, so a third meaning on the row is exactly the
  collision you resolved for 9B and again for select mode. It is also the
  one surface where §18's "the bar is the source of truth" may not hold,
  because an invoice is grouped into categories and a selection could
  span them.
- **Then kits**, which as drawn I'd build without further questions — the
  *Will be added* / *Already on the invoice* split, `qty unchanged`, and
  the button counting only the additions are all unambiguous.

⚠️ **The overlap line has a subtlety worth confirming while you're
there.** It says *"3 already on this invoice"* — matched how? Only 9% of
our line items carry `libraryItemId`; the rest are matched by
description, which is what `addToInvoice()` already does. So a
hand-typed "Cocktail napkins" and a kit's "Cocktail napkin" will read as
two different things and the sheet will offer to add a duplicate. Same
class of problem as the leftovers matching, and I don't think it has a
clean answer in the interface — but the sheet is where it becomes
visible.

## Not asking for

The kits sheet itself, the Products-tab chip, or the sort order — all
settled and all fine. Only the invoice-side selection needs you.

---

# Build → Design · 9 Aug · Round 16 built — the tidy-up (24A, 24B)

**§20.1 is the best finding of the project so far, and I want to say why
before the corrections.** Sean asked for *cleaner*. You came back with
1.84:1 and a sentence that connects the two — *"a row whose control is
1.84:1 looks like a row with nothing in it, so a list of nine selectable
products reads as nine paragraphs."* That is a bug he has been looking
at for six rounds, could feel, and had no words for. Nobody was going to
find it by squinting at a desk.

**I recomputed all six of your figures from `globals.css` before
touching anything. Every one was exact** — 1.84, 1.77, 1.50, 3.77, 3.61,
3.62. `--control-line` is in, both themes, mirrored into
`design-tokens.json`, with a build check that recomputes the ratios on
every build and fails if an unselected control drifts back onto
`--border-strong`.

**And thank you for §20.0.** Retracting the `text-xs` call without being
pushed is worth more to this collaboration than the finding it withdrew.

## 1 · Eight call sites, not five

Your five are right. The sweep found three more of **the same control**,
on surfaces your audit didn't open:

| Site | What |
|---|---|
| `CocktailPicker.tsx:253` | the picker's checkbox — `rounded-[6px]`, so a `rounded-full` search misses it |
| `ProcurementBar.tsx:87` | **the pack tick — built this morning, hours after you read the repo** |
| `ExportSizeSheet.tsx:258` | the unselected batch-volume chip, **two lines from a site you cited for its radius** |

I applied your rule rather than asking, since applying your rule to sites
you didn't list isn't inventing one. But the enumeration has now been
short twice in two rounds — §20.2 caught its own third site, and this is
another three. **The pack tick is the interesting one:** the audit is a
snapshot, and the app moved under it the same day. Worth assuming a
sweep rather than a list from here on.

## 2 · ⚠️ §20.3's premise is wrong, and the real finding is better

> *"An arbitrary type value is a decision to leave the system. There are
> two, so it is cheap to fix now and gets more expensive every month."*

**There are 117.** Sixty-two of them are `text-[13px]`.

`CardKit.tsx:193`'s `text-[14px]` is a genuine one-off — **fixed**,
along with `px-[11px]`, the radius and the tint. But `SelectionBar`'s
`text-[13px]` is one of sixty-two identical values, and converting it
alone is exactly the single-outlier problem you argued against in §20.2.

**The reason there are sixty-two is structural, and it's yours to
rule on:** the scale starts at `--text-xs: 15px`. **There is no token
below it.** So §10.1's own 13px floor — your ruling — cannot be written
in this system except as a hardcoded pixel value. Every one of those
sixty-two is a developer obeying you in the only way available.

**Proposal: `--text-2xs: 13px`**, with its own line-height, and the
sixty-two sites converted in one pass. That makes the floor a knob
rather than a convention — which is the actual point of §20.3, and it
closes sixty-two openings instead of one. Not built, because naming a
scale step is yours.

## 3 · ⚠️ §20.4 — there are 34, not three

> *"Harmless — but they are the last three."*

`hover:` appears **34 times across 17 shipping files** (excluding
`/style` and `/debug`): `Sheet.tsx`, `StageMenu.tsx`, `ThemeToggle.tsx`,
`ProductLibrary.tsx`, `SubNav.tsx`, `GateDialog.tsx`, `TopBar.tsx`,
`GlobalSearch.tsx`, `StartFromSheet.tsx`, `UndoStack.tsx`,
`ProductEditor.tsx`, `LoginForm.tsx`, `settings/page.tsx`, `DevPage.tsx`
and three more.

**So I built none of it**, and the reason is your own argument from
§20.2: removing three of thirty-four leaves thirty-one, and *"converting
only two would leave a single remaining outlier — harder to notice than
the current split."*

There's also a prior question underneath it. **Desktop is a supported
platform and `hover:` fires there**, so these aren't dead in general —
they're inert on iPad. §10.4 ruled hover-as-enhancement legal and the row
highlight reads `pointerType` precisely so it can work on both. So the
ruling I need isn't *"delete these three"*, it's:

**Is `hover:` legal as a desktop-only enhancement, or is `pointerType`
the only sanctioned route?** If the former, all 34 stay and §20.4 is
withdrawn. If the latter, it's a 34-site pass and worth doing properly in
one round.

## 4 · One thing I changed that you may want to look at

`ExportSizeSheet.tsx:209` — the dashed custom-volume input — took
`--control-line` **and** moved from `rounded-full` to `rounded-chip`.
You explicitly excluded it from §20.2 as an input rather than a chip, and
you were right about what it is. But it now sits beside two
`rounded-chip` volume chips in the same row, and a `rounded-full` input
next to them read as a third shape. **Overrule me if the input's
roundness was carrying a distinction I've flattened.**

## Not asking for

The values themselves — measured, correct, adopted. Only the two counts
above need a ruling.

---

# Build → Design · 9 Aug · Round 17 built — the builder's spacing (25A, 25B)

**§21.1 is the find of the round and it wasn't a spacing issue at all.**
The header had no `border-b`; the only rule beneath it was the locked
banner's. **The divider appeared exactly when the invoice could no longer
be edited** — which is why it survived sixteen rounds: the state anybody
screenshots for a handoff is a finished invoice, where the banner
supplies the line. Sean could see something was wrong and reported it as
"no clear dividing point", which is precisely what it was.

All three findings verified against source before building — the two
`mt-0.5`s, the `pt-3 pb-3`, the doubled hairline at `SourceRail.tsx:291`
and `Builder.tsx:583`, and `shadow-panel` / `lg:rounded-tl-card` sitting
there unseen. Everything built as ruled.

## 1 · You pre-empted a question I owed you, and half-answered it

> *"The Draft stage chip keeps `border-line-strong` — it is NOT a §20.1
> site… its state is carried by the word inside it, not by the
> perceptibility of its boundary."*

**Agreed, and it was untouched.** But last round I applied
`--control-line` to a **sixth** site you hadn't listed:
`ExportSizeSheet.tsx:258`, the unselected batch-volume chip. Your §21
sentence reads as though it might cover that too, so here is the test
applied honestly:

| | Stage chip | Volume chip |
|---|---|---|
| Word when unselected | *Draft* | **750 ml** |
| Word when selected | *Sent*, *Complete*… | **750 ml** |
| So the state is carried by | **the word** | **the boundary and the fill** |

**By your own test the volume chip is a `--control-line` site and the
stage chip isn't**, so I've left both as they are. Say if you read it
differently — it's one class either way.

## 2 · One thing your ruling doesn't reach: the collapsed rail

> *"The collapsed rail keeps its 3px gold bar and its own border. No room
> for a gutter and no ambiguity to resolve."*

The gutter lives on the `Builder` layout — as you specified, so that
padding doesn't move the sheet's content — which means **it applies
whether the rail is expanded or collapsed.** At 60px the seam is now:
the rail's own `border-r`, 16px of `--surface-sunken`, then the sheet's
`border-l`.

I kept it, because the alternative is suppressing the gutter when
collapsed, and that puts the two hairlines back against each other —
recreating the exact 2px rule §21.3 exists to remove. **But "no room for
a gutter" may have meant something more specific**, and if the collapsed
state should lose its own border instead, that's the one-line version.

## 3 · One deviation, and it's about the save status's colour

You describe it as *"a quiet fact in `--text-muted`"*, and at rest it is.
But `SAVE_TONE_CLASSES` has four tones, and two of them aren't muted:
`queued` is `--gold-text` and `failed` is `--danger`. **I kept the tone
classes** rather than flattening everything to muted — *"3 waiting to
sync"* rendered identically to *23 Aug 2026* would read as an event fact
rather than a warning, and §9.2's sync states depend on that colour.

So the line reads *`23 Aug 2026 · 120 guests · Wedding · ● Saved`* in
muted at rest, and the same line goes gold or red when the tail does.
**Overrule me if the meta line should be tonally uniform** — I think the
tail is the one place it shouldn't be, but it is a deviation from what
you wrote.

## 4 · Still open from earlier rounds

Nothing new, just so they don't drop: **full offline mode** (raised
before 23A–23C, still unanswered), **select mode on the invoice** (blocks
kits), **where procurement mode is turned on** (my ⋮ decision, yours to
overrule), **`--text-2xs`** for the 13px floor, and the **34 hover
states** ruling.

## Not asking for

Any of the four spacing values — measured, adopted, and they read right.

---

# Build → Design · 9 Aug · Three of Sean's, and a bug he found by looking

Not a round — direct requests, built and shipping. Flagged here because
two of them change screens you own.

## 1 · The product editor grew a row, and it needs your eye

Sean opened a 12-pack of 7up and got **"A each package can't be priced
per ounce without a density"** — on a pack of cans.

⚠️ **The cause was ours, not his.** `getCost()` predates the unit
registry and asked `unit === "ea" || unit === "each"` — two literal
strings, against a registry with **nine** count units. His record stored
`ct`, an alias of `each`, so **the picker showed "each" and the maths
didn't recognise it.** Everything countable that wasn't spelled those two
ways fell into the volume path and reported a density error.

That's fixed. But his second point needed a data change:

> *"A 12 pack of 12oz sodas. How do I indicate that there are 12 cans,
> and then that each individual can is 12oz? I buy it by the pack, not
> the can."*

The record could hold **one** level — "12 cans" OR "144 oz", never both.
So there are now two optional fields, and a second row in the Package
Contents block that **only appears when the unit is countable**:

    Qty 12 · Unit can · Packaging Pack
      └ Each can contains:  Size 12 · Unit oz

**What I'd like you to look at:** that row is my layout, not yours. It's
a bordered sub-row inside the existing block with the label *"Each can
contains"* — the noun changes with the unit. It may want to be something
else entirely; the block is now three rows deep and I can't tell whether
it reads as one idea or two.

⚠️ **A pack has TWO true costs and the card shows both** — `$0.080/oz ·
$0.96 each`. That's the answer to Sean's *"this app should be able to
measure cost in multiple units"*, and it means the Cost fact's label had
to stop saying "Per ounce". It says **Cost** when both are present.
Worth a look: two numbers in one fact may want a different shape.

## 2 · A brand field, and the sparse rule you set

> *"A new field to indicate the Brand and/or Company that the item is
> sourced from — Dole bananas, coupes from Party Rental LTD. Account for
> the sparse case, where the card only displays the information if the
> field has information."*

**One field, not two.** Brand and supplier differ in general but not in
the question he's asking — *where does this come from* — and two boxes
would mean deciding per product which one Dole goes in.

⚠️ **`rentalCompany` already held this fact** for Rental Supply items.
I did **not** merge them: it carries real data, and folding two fields
into one is a migration that can lose one. The card shows whichever is
present under a single **Source** group, so on screen they're one idea.
**If you'd rather they were one field in the data, say so and I'll do it
as a proper migration** — it shouldn't happen as a side effect.

Sparse as asked: neither present → no group at all.

## 3 · Wine & Beer became Wine + Beer & Seltzers

His call. The two sit adjacent in `CATEGORY_ORDER`, in the old one's
slot, so **no invoice he has already sent reorders**. Existing records
migrate to Wine and he re-files the beers by hand — nothing guesses,
because `type` is empty on most records.

⚠️ **The leftovers pass now has six slices, not five** (§15.2 / 19B).
That screen is yours and the verdict rows are drawn for five. Six still
fits, but you may want to look.

## 4 · Your §20.4 hover ruling has been answered by Sean

He reported the symptom without knowing the cause:

> *"If my mouse or pen is over a row I can click, it should be
> highlighting just like the cocktail library."*

⚠️ **The rows he means all HAVE a hover state — `hover:bg-surface-alt`.**
It's inert on iPadOS, exactly as §0.4 says. So the answer to your "delete
these three dead hover states" is **neither delete nor keep**: on a
clickable ROW the mechanism was wrong, and those are converted to a
pointerType-driven `HoverRow`. What remains on buttons and chips is a
desktop nicety and stays.

**Still open from before:** offline mode, invoice select mode (blocks
kits), where procurement mode is turned on, and `--text-2xs`.

---

# Round 16 request · A rich-text toolbar, in five places

⚠️ **This one is a request BEFORE building, not a relay after.** Sean
asked for rich text and I have not written a line of it — the toolbar
appears in five fields across three surfaces and I would rather you drew
it than corrected it.

## What Sean asked for

Six controls, no more: **numbered list · bulleted list · bold · italic ·
underline · link**.

He named them himself after I offered a smaller set, so treat the list
as settled. What isn't settled is how six controls sit on a touch
surface without turning every long field into a word processor.

## Where it appears — read this before drawing

| Surface | Fields |
|---|---|
| `EventDetailsSheet` | Notes |
| `RecipeEditor` | Instructions · single · **Instructions · batch** · Notes |
| `PrepEditor` | Instructions |

⚠️ **THE RECIPE EDITOR CAN SHOW THREE OF THEM AT ONCE.** When a cocktail
has a separate batch method, that sheet holds *Instructions · single*,
*Instructions · batch* and *Notes* in one scroll. **Three always-visible
toolbars in a 512px-wide sheet is the thing most likely to make this
feel like a mistake**, and it's the first question below.

## Measurements, so you're not guessing

- The sheet is **512px** wide at `lg` (`max-w-lg`), less `px-5` → **472px**
  of usable width.
- Six controls at the **44px** touch minimum = **264px**. It fits. It
  fits *comfortably*. Space is not the constraint — attention is.
- Type scale reminder: **`text-xs` is 15px in this app**, floor is 13px.
- ⚠️ `hover:` is inert on iPadOS. Any hover affordance must come from
  `pointerType` — see `HoverRow`.
- Unselected control boundaries use **`--control-line`** (§20.1), not
  `--border-strong`.

## The four things that need you

### 1 · Always visible, or on focus?

Three fields in one sheet is the case that decides it. An always-present
toolbar per field is three rows of chrome before Sean has typed
anything; a toolbar that appears on focus is quieter but hides the
affordance, and *"there's formatting here"* is not discoverable if
nothing says so.

**A floating bubble over the selection is the usual third answer and I
suspect it's wrong here** — it depends on a text selection, and
selecting text precisely with a finger at 1am is the part of iPadOS
everyone hates. Your call, but please say why.

### 2 · ⚠️ Underline and links are the same mark

This is the real conflict and I'd rather hand it to you than solve it
badly:

- **Underline** is one of Sean's six.
- **A link** is conventionally underlined.
- **On the printed sheet a link does nothing** — paper has no click.

So on the recipe export, an underlined phrase and a link are
indistinguishable, and one of them is a promise the medium can't keep.
Options as I see them: links get a different treatment on paper (colour?
the URL in brackets after?), or underline gets a different one on
screen, or links simply don't print as links. **Not my ruling to make.**

### 3 · Entering a URL on a touch device

The link control is the only one that needs a second step — a text field
for the address. In a sheet that is already a sheet. Popover, inline
row, or a small nested sheet? Whatever it is, it needs a way to **remove**
a link too, and that control has to be reachable without precise
selection.

### 4 · What it looks like when it is NOT being edited

⚠️ **Easy to forget and it's half the work.** These fields are read in
eight places, including two PRINTED documents (`RecipeSheet.tsx`,
`PrepSheet.tsx`). A numbered list needs to look right on a recipe card,
on the locked prep card, and on paper — where the print stylesheet
currently has **no list styling at all**, so bullets would come out
unmarked.

Please draw the read-only state as well as the editor.

## Not asking for

Headings, colour, tables, images, alignment, or a "clear formatting"
button. Sean named six things; the answer to a seventh is no unless you
argue for it.

## What I'll do with it

Build it on Tiptap (`@tiptap/react` 3.29.2, MIT, React 19 — checked).
Stored as HTML in the existing fields, sanitised on render, with plain
strings still treated as plain text so nothing existing has to migrate.

---

## Round 17 report · §22.4 is built — two things need you

**Shipped:** the read-only half of the rich-text work, per your correction that
it has to land first. `src/lib/richText.ts` parses; `src/components/RichText.tsx`
renders; `RecipeSheet.tsx` (×3) and `PrepSheet.tsx` (×1) now go through it. The
editor is not built yet — see the note at the end.

It builds React nodes from a strict allowlist rather than sanitising a string
and injecting it, so there is no `dangerouslySetInnerHTML` anywhere on the path
and a tag outside the list cannot be constructed at all. `list-disc pl-5` /
`list-decimal pl-5` adopted as you ruled, plus `tabular-nums` on `ol` and
`break-inside-avoid` on `li`. The plain-string / HTML branch for
`whitespace-pre-line` is in `RichText`, not in the sheets.

### ⚠️ 1 · §22.2 and frame 26C disagree, and I built the drawing

Your rule: *"if it is longer than the phrase it annotates, print the host
alone."*

26C draws the phrase **Difford's entry** — 15 characters — followed by the full
**diffordsguide.com/manhattan**, which is 27. **Read against the linked words,
your own drawn example fails your own rule** and would print `diffordsguide.com`.

So "the phrase it annotates" cannot mean the linked words. I read it as the
sentence the link sits in, which makes 26C correct and still matches your stated
motive. **This is a reading, not a ruling — overrule it freely.**

**But it leaves a gap you should see:** measured against a sentence, a
90-character tracking URL inside a long paragraph *still prints in full* — which
is the exact case your motive named. **Do you want an absolute cap as well?** I
have not invented one. The gap is asserted in
`scripts/check-richtext.mjs` so it is visible rather than latent.

### 2 · One case §22.4 does not cover: the heading above an empty field

`RecipeSheet` prints a **Notes** heading only when notes are non-empty, and the
old test was `.trim()`. `<p></p>` is a non-empty string that displays nothing —
so the heading would have printed over a silent gap, which is the stray-mark
case one level up from the one you ruled on. I extended the rule to the heading.
Flagging in case you want it stated in §22.4 rather than inferred.

### Not built yet, and why

**The editor half needs `@tiptap/*`, which I cannot install** — no registry
access from my environment. Sean runs one `npm install` and the toolbar
(§22.1, §22.3, frames 26A–26B) is the next round: the keyboard-docked bar, the
`Aa` markers, the URL row, and the caret-not-selection link rules.

**Update, same day:** the bar itself is now built — `FormatToolbar.tsx`, the
`Aa` marker, the address row, and `useKeyboardInset` for the visual-viewport
docking. Everything in §22.1 and §22.3 that does not require the editor library
is in and checked (`scripts/check-toolbar.mjs`, six rulings fault-tested).
What remains is binding it to Tiptap: the active-mark reporting and the three
caret cases in §22.3's table.

**Update 2:** the binding is in — §22.1 and §22.3 are complete. Five fields
across three sheets, one bar each. Two notes:

- **StarterKit's input rules were the real risk in §22.5.** Typing `# ` makes a
  heading with no button involved, and §22.4 strips headings — so he would have
  typed one, seen one, and printed nothing. Headings, blockquotes, code, code
  blocks, rules and strikethrough are all disabled, so what the toolbar shows
  and what the field can hold are now the same list. Checked.
- **`textareaClass` in Event Details is gone.** Notes was the exception that
  needed its own height because it was the one `<textarea>` on the sheet; it is
  a RichField now and owns its box. The rule stands, the class does not.

---

## Round 17 report · two faults on the device, both mine

Shipped and then found by Sean on the iPad within a minute. Recording them
because the second one is a gap in §22.1 that you may want to state.

### 1 · The renderer reached the printed sheets and nothing else

§22.4 is written about the print path, and I built exactly that. But the same
five fields are also READ on four screens — the cocktail card, the prep card,
the builder's Details rail, and the recipe card's batch block. The moment the
editor shipped, Sean's notes read `<p>Bring Extra Litter</p><p>Hello.</p>` on
his own invoice.

⚠️ **`CardProse` was the second half of it.** It sets `whitespace-pre-wrap` —
correct for a plain string, and precisely what §22.4 says must not apply to
HTML. Added `CardRich` beside it: same type, different whitespace rule. A check
now asserts that no file reading one of the five field names interpolates it as
a bare string.

### 2 · ⚠️ §22.1's docking assumes a SOFTWARE keyboard

> **With a hardware keyboard attached, iPadOS draws its own shortcut bar across
> the bottom of the viewport — and `visualViewport` does not report it.**

Sean reported "no bullets on iPad". The bar was rendering correctly; Apple's bar
was sitting on top of it. His screenshot shows a stray `B` on the left and the
tail of `Done` on the right, poking out either side of Apple's pill — which also
carries B, I and U, so it reads convincingly as *my* bar with the list buttons
missing.

The fix takes the higher of two floors: above the keyboard, or above the sheet's
own lower edge. Measured, not a constant — the height of Apple's bar is Apple's
to change. On the iPad the sheet is centred with room beneath it, which is why
his Saved/Done row was visible in the same screenshot.

**Worth a line in §22.1**, since "rides the keyboard" is a ruling that quietly
assumes there is one. The hardware-keyboard case is the one Sean actually works
in.

---

## Round 18 report · the library footers, and one ruling I need you to confirm

Sean, on the three libraries: *"the action buttons at the bottom are off. The
trash button is missing a border. The spacing is weird. The order of the buttons
is inconsistent."*

**The third complaint caused the other two.** Five sheets hand-wrote five
footers, so they drifted:

| | |
|---|---|
| Cocktail card | Edit · Export ······ Close |
| Prep card | Export · Close ······ Edit |
| Cocktail editor | Save · Cancel ······ Move to trash |
| Product editor | Save ··············· Move to trash |

⚠️ **`PrepEditor`'s own comment claimed it matched the cocktail card "exactly"
so the two libraries behave the same way.** It was the mirror image of it. The
intent was written down and the code disagreed — which is what happens when the
intent lives in a comment instead of a component. There is now one
`SheetFooter`, and a check asserts every `footer={` opens directly with it.

### The order I settled on, and why it is not invented

**Destructive · safe actions · primary last on the right.** `PrepEditor` already
stated "Edit bottom-right filled" as the intended rule; Event Details ends
`Saved · [Done]`; `InvoiceCard` ends `[Open in a tab]`. The primary was on the
right everywhere except the two sheets that had drifted, so this is the existing
convention enforced rather than a new one chosen.

### ⚠️ Your §16 trash ruling versus Sean's "evenly filled"

Sean asked for the footer evenly stretched. Your rule says the destructive
control is *"icon-only, 2px `--danger` border, on the LEFT — separated from
Export by the full width of the bar. Adjacency is the mis-tap risk."*

Four equal buttons puts the trash shoulder-to-shoulder with Export. **I put the
conflict to Sean and he chose the reconciliation:** the safe actions stretch and
fill; the trash stays a fixed 48px icon button pinned left with a gap. Even
spacing everywhere it is safe to have it, no equal-width delete beside Export.

**The border he called "missing" was `border-danger/30` at 1px** — your spec is
2px at full strength. It was not absent, it was 30% of one pixel of it. Now owned
by the shared component so it cannot be softened per-sheet again.

### Two smaller things

- **The ✕ in edit mode sat beside the title, not at the top right.** `Sheet` has
  two title branches; the `heading` one claims the row with `flex-1` and the
  plain-`title` one did not, so the button came to rest against the word
  "Cocktail". Both branches lay out now.
- **The price field shows `$` and rests at two decimals** — `9.9` → `$9.90`. The
  `$` is drawn beside the number rather than put in the value, and the snap
  happens on blur, never mid-keystroke. It is also *committed*, not just
  displayed, so a price cannot read `$12.35` while costing uses `12.345`.

**Correction, same day — I put a Cancel button where Save used to be.**

Sean: *"When I edit the price for uncosted items, it doesn't take."* It took, and
then Cancel discarded it.

The product editor's footer had been **one wide Save filling the row from the
left edge**. Making the three editors match, I produced `[🗑] [Cancel] [Save]` —
three even cells — so the region his thumb had learned as Save was now Cancel,
while he worked down a filtered list of 42 uncosted products repeating the same
motion. ⚠️ **And Cancel had never existed on that sheet.** I added it for
symmetry; nobody asked for it.

**Cancel is now gone from all three editors**, and not only because of the
mis-tap: an equal-width discard button directly beside an equal-width Save makes
losing the work exactly as easy as keeping it, and even spacing makes that worse
rather than better. The ✕ at the top right has always discarded on all three
sheets, so Cancel duplicated existing chrome that happened to sit somewhere
dangerous. Save is now the whole remaining row.

**Worth a line in §16 or §17:** *even spacing applies to actions that are safe to
confuse with each other.* That is the rule I violated, and it is not stated
anywhere — the trash was protected by your adjacency rule and Cancel was not,
though it destroys the same work with less ceremony.

### The second half of the same report

⚠️ **A price on its own is not a cost.** `getCost()` needs a price AND a package
size, so pricing a sizeless product saves correctly and the product *stays in the
"no cost" filter* — indistinguishable from the save failing.

The editor already flagged "No package quantity", but the paragraph underneath
explained **density**, which is a different problem. The one case where the next
step mattered most was answered with a paragraph about something else. It now
names the missing fields and says the price saved either way.

---

## Round 18b · one control height, and the confirm is a dialog

### ⚠️ The Unit box was thinner, and it was wearing the right class

Sean: *"For the love of god, please make sure the boxes for fields are the same
height. Units boxes in two places is thinner and it looks bad. Cohesive — that's
how we build this app."*

Qty, Unit and Packaging all carried the same `inputClass` — `min-h-[48px]` — and
the Unit box still came out shorter. **Safari draws a native `<select>` sized to
its own text and ignores `min-height` entirely.**

That is the same bug you already ruled on for `input[type=date]` and `[type=time]`
in §19C, and the fix already existed — in a *different file*. `EventDetailsSheet`
carried `h-12 appearance-none`; `ProductEditor` carried `min-h-[48px]` and had
never met the bug. **`inputClass` was declared three times** (ProductEditor,
EventDetailsSheet, BusinessForm) — the same drift that produced five footers.

One owner now (`FormField.tsx`), `h-12 appearance-none`, and every `<select>`
goes through a `SelectField` that draws the disclosure chevron back, since
`appearance-none` takes it with it.

**A rule worth stating in §20:** *a height is a promise; a min-height is a
request a native control may decline.* Every native widget in this app has now
broken min-height at least once.

### The confirm is a dialog

*"When I hit trash, I want a pop-up. Currently, the prompt appears at the top of
the card… And use border around 'Move to trash'. It needs to look like a button
— because it is a button."*

He is right twice. The banner unfurled at the TOP of the sheet while the button
he pressed was at the BOTTOM — a scroll away on a long product form — and it
pushed every field down as it appeared, which is the layout-shift fault §22.1
rejected for the toolbar. And the destructive answer was bare red text, which
reads as a label.

`ConfirmDialog` now: comes forward, `role="alertdialog"`, destructive answer as
an outlined `--danger` button (never filled, per your selection-bar rule), safe
answer as the primary on the right and autofocused so Return cannot delete.

⚠️ **I also converted the "discard batch instructions" confirm** in the recipe
editor, which was inline and adjacent to its trigger. That is a genuine trade —
adjacency was an advantage there — but two confirm styles in one editor is the
drift Sean keeps catching, and it destroys typed work. Say if you want it back
inline.
