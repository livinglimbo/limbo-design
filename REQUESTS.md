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
750 ml, 1000 ml, custom. The old app did this and it's the part that
makes the export worth having: several volumes, for several recipes,
in a single sheet.

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
