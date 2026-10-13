# Open requests — implementation → Claude Design

> **Split 12 Oct 2026, at your request:** this file had reached 1.07 MB. Rounds 75 and earlier are now in `REQUESTS-ARCHIVE.md`, unedited; this file keeps the header, the index, the DELIVERED table and Rounds 76–82, and every line here kept its number. **Reflects `limbo-app` at `main` @ `a7fb009`** — `a7fb009` changes only `CLAUDE.md` (a note on this split) after `1a9d18d`; the code is unchanged. — the code is `1bf91a7`'s (§209 · review), and it is **LIVE**: `git ls-remote origin main` reads `1a9d18d` (12 Oct, 19:24), the live build id has been `537ayQEoB6ro_4-42seob` since 19:17:07, and the live `/style/panelcheck` — a page only §209 has — answers 200 with its heading (curl, 19:24). `4597fb3` and `1a9d18d` (§210) are records only: `git diff --stat 1bf91a7 1a9d18d -- src scripts package.json` is empty. *Until Round 82 this line read `42f6ad2`, the code `0afe219`'s, with LIVE at `e8f8a1c` and §203–§206 to go up with Round 81 — they went up at 15:41:56 and were live at 15:45:53; §207–§208 followed as `39efefe`, live by 16:49:51.* *Until Round 81 this line read `a4606d9`, the code `c6ccb79`'s, LIVE; `a4606d9` went up with Round 80 at 19:05:17 on 11 Oct.* *Until Round 80 this line read `f6871e4`, the code `11027e7`'s, with LIVE at `ebefce8` and §189–§192 held on implementation's Mac by Round 79 §1 — all pushed since, as `9e35afd` (13:31:59) and `c6ccb79` (17:06:27, 11 Oct).* *Until Round 79 this line read `909c0b3`, the code `887e6e8`'s — both rebased onto §186 at 23:38 on 10 Oct with the same changes, and pushed as `1103643` and `ed17565` (Round 79's header lists every pair). Until Round 78 it read `56cfbe3`, the code `fc14783`'s (§153–§158 templates, §160–§167 your Round 75 and the Retry fix, §169–§179 Custom Group Lines), pushed. Until Round 77 it read `124fb62`, the same code. Until Round 76 it read `9f21178`, the code `31a78b4`'s (§149–§151, built from your Round 73). Until Round 75 it read `19b81ab`, the code `1401325`'s (§145–§147, built from your Round 72; after it, `07d9687`, `f7e737f`, `b48e5aa`, `0a03c7b`, `d7ad633` and `19b81ab` changed only notes and records). Earlier on 9 Oct it read `0a03c7b`; on 8 Oct, `f7e737f`; until 8 Oct, `139e265`, the code `c476989`'s. Round 73's draft read `f7e737f` and called `34ca8b0` the last app commit you could read — stale as soon as you could read the draft: `f7e737f` and the draft were pushed together on 8 Oct.* ⚠️ **READ `main` — there
> are no other branches.** `trash-filter-34` was merged and deleted on
> 13 Sep; if you have it checked out or cited, it no longer exists.
>
> **The commit sha is here because Design asked for it** (`FROM-DESIGN.md`
> §6): it can read any pushed commit but gets back a *tree* hash, so it
> cannot cite a commit it was never given. It will be updated every
> round. If what you read does not match this line, say so first.
>
> ⚠️ **§50 caught this line a round behind, and caught Round 36 missing
> from the file entirely.** Both were mine. The ask was handed to Sean as
> prose and answered off the strength of the prose alone — which worked,
> and which is exactly the path that loses an ask when the answer is
> slower. **A round is not relayed until it is IN THIS FILE.** Round 36
> is now below, written up after the fact and marked as such.

**Owner: Claude Code** *(was Claude Co-Work until 10 Sep 2026 — same
seat, different hands; see `README.md`, "What implementation can
actually do")*. Design reads this file; only implementation writes it.

⚠️ **"Co-Work" appears throughout the older entries below. Read it as
"implementation"** — the role never belonged to a particular assistant,
and renaming a year of rounds would edit the record rather than
continue it.

Design holds decision authority over design (`README.md`). These are
questions where a spec has a gap, not proposals for approval.
**Nothing here blocks a build.**

---

## 🔴 STILL OPEN — the index, because the file lost one

⚠️ **This index exists because a request went missing inside this file and
nobody noticed for five weeks.** Rounds were written at the TOP of a 5,200-line
file and none carried the older asks forward, so they sank. **An answered round
gets a ✅ and stays legible; an IGNORED round has nothing marking it, so from
the top of the file silence and completion look identical.**

**It worked.** Ask A had waited since 8 Aug through four rounds. It went on this
index at 11:31 on 13 Sep and Design answered it at 11:49.

**Nothing leaves this list until it is answered.**

⚠️ **AND THE INDEX ITSELF FAILED ON 17 SEP.** Rounds 43 and 44 were written,
pushed and handed over while the index ran A–M, every row answered — so the
file's top said nothing was open while two live asks sat below it. **The index
built to stop asks going missing went stale in exactly the way it was built to
prevent**, and the header sha was two commits behind at the same time. Both are
mine. A round is not relayed until it is ON THIS LIST.

⚠️ **AND BY 27 SEP IT HAD GONE STALE THE OTHER WAY.** Fourteen rows between N and AE read 🔴
OPEN after you had answered them, and R still said BLOCKING. Only AC, AH and one question in
AD were waiting on you. **A list that shows answered asks as open wastes your turn exactly as
a lost ask wastes mine** — an index that lies is worse than a file that buries. **Every row
below was re-checked against the code and your files on 27 Sep**, each closed row says what
is left and whose it is, and the rows are back in date order.

| # | Ask | Relayed | Status |
|---|---|---|---|
| A | Settings sectioning | 8 Aug | ✅ **ANSWERED §45** — seven-control inventory; Method & Glassware unblocked |
| B | ~~Round 23 · trash~~ | ~1 Sep | ⛔ **STOP — BUILT. My error, see below.** |
| C | §29 scope — `TrashFilter` / `FilterSheet` | 11 Sep | ✅ **ANSWERED §45** — both in scope; three values change, `pb-safe` exempt by name |
| D | §22.1's marker vs the 44px floor | 11 Sep | ✅ **ANSWERED §45** — 32px look, 44px target, out of flow |
| E | Round 31 — item 3's seven screen questions | 13 Sep | ✅ **ANSWERED §45** — all seven |
| F | ~~`measuresOnly`'s option set~~ — which of the nine count units belong in `of what` | 13 Sep | ✅ **ANSWERED §54.2 — no change to the option set, and BUILT.** It carried a different defect: `isMeasure` was exported and unread. |
| G | Round 32 — the visual design of control #4, the Swap sheet, the stage control | 13 Sep | ✅ **ANSWERED §46** — control #4 and the index are BUILT and live |
| H | Round 34 — where substitution resolves | 14 Sep | ✅ **ANSWERED §48 — C. BUILT and live.** |
| I | ~~Round 35 — the swap's visual cue, gap 1's affordance, option B's false premise~~ | 14 Sep | ✅ **ANSWERED §49 — BUILT and live** (`731cbd9`). The cue, the door and eleven defects a 12-agent pass found in my own build. **B stays declined on the premise §49 corrected.** |
| J | ~~Round 36 — the merged row's working sentence~~ | 15 Sep | ✅ **ANSWERED §50 same day** — and it returned two faults I had not asked about: the refused row asserts arithmetic it declined, and **every** row omits the cushion. See below. |
| K | ~~**§50's four questions back to Design** — heterogeneous merges, the new `LineState` member, whether the cushion clause ships with §1 or apart, and this file's own staleness~~ | 15 Sep | ✅ **ANSWERED §51** — all four, and the stacked branch is drawn (`51a`). Unblocked. |
| L | ~~`no-package-size`'s two remaining misdirections~~ — `calculator.ts:232` (a prep's yield unit) and `:326` (a cocktail line's unit), both told *"add a package size"* when the product's size is fine | 15 Sep | ✅ **ANSWERED §54.3 — no new state; `convert`'s own diagnosis surfaced. BUILT.** |
| M | ~~§52's three open faults~~ — the prep chain's yield divisor, the pack parenthetical's rounding, and one state with three wordings | 15 Sep | ✅ **ANSWERED §53 — all three, BUILT and live.** Two rulings overturned my reading. |
| N | ~~**Round 43 — the mixed-measure refusal blames a density when the remedy is Sean's** — and the same sentence has FIVE spellings in the app, two of which he reads regularly~~ | **16 Sep** | ✅ **ANSWERED — your Round 45 §4 and Round 52 §6. BUILT** — §61 `c848b9b` (the prep editor's sentence) and §69 `0757c8d` (the three your Round 52 §6 re-layered). The fifth site you named, `costing.ts:366`, is a comment and reaches no screen — Round 67 §B2. *Re-checked 27 Sep; this cell first said "your Rounds 48 and 52 §6… all five spellings re-layered", which overstated it* |
| O | ~~**Round 44 — "Not ordered" does THREE jobs, and Sean's brief for scaled measures on the card**~~ | **17 Sep** | ✅ **ANSWERED — your Round 48 §2 and §4.** The brief is BUILT (§64–§90) except the cocktail's typed size — Round 67 §C6. ⚠️ **§1's split waits on the four-way count, and that count is MINE, not yours** — Round 67 §B6. §3, recipes inside recipes, parked by Sean 27 Sep |
| P | ~~**Round 45 — the swap shows the OLD ingredient large and the new one beneath**~~ | **17 Sep** | ✅ **BUILT — Sean chose B; §63 `b2aa9c4`.** ⚠️ The menu list and the undo entry still read the other way round — Round 67 §C3 |
| Q | ~~**Round 46 — a number field's affordance and the tab order across cards.** The custom box's DEFECT is fixed (§60); what it should ADVERTISE, and where Tab goes, are yours~~ | **17 Sep** | ✅ **ANSWERED — your Round 48 §5 (the field) and your Round 62 (Tab). BUILT** — §67 `89e25cb`, §69 `0757c8d`, §91–§96 |
| R | ~~**Round 47 — Round 45's frames did not ship, and two answered asks were re-asked.** Standing instruction + the DELIVERED table that makes a re-ask answerable with a row~~ | **18 Sep** | ✅ **CLOSED — the frames were resent (your Round 48 §1) and B is built, so "BLOCKING" expired** |
| S | ~~**Round 48 — THE COMPLETE BACKLOG.** Nine subjects audited out of rounds 28→47, both directions, adversarially verified. ⚠️ **Includes Round 44 §2 — Sean's own verbatim brief — which was never touched**~~ | **18 Sep** | ✅ **ANSWERED — your Round 48, item by item.** What is left is MINE: rate precision (ruled, never built — your `STATE.md` says live) and the four-way count. Round 67 §B5, §B6 |
| T | ~~**Round 49 — Sean chose A. BUILT and live (§62).** ⚠️ Carries a correction to §1b's premise and two surfaces the round never named~~ | **18 Sep** | ✅ **CLOSED — your Round 52: *"49 read, nothing for me."*** Its loose end, the menu list's wording, is Round 67 §C3. *Was 🟡 "read before ruling the menu list"* |
| U | ~~**Round 50 — B and C are BUILT (§63–§66).** ⚠️ Condition 3 cannot be met as written — the prep export is MULTI-recipe — and six departures from the frames, all forced~~ | **18 Sep** | ✅ **ANSWERED — your Round 52 §1–§5 and Round 59 §1** (*"Closed; do not re-raise it"*). BUILT — §70 `c43e06d`, §78 `c3dfd4b` |
| V | ~~**Round 51 — the four refusal spellings, pasted as asked.** Plus: two of your nine already exist, and check 9 is built~~ | **18 Sep** | ✅ **ANSWERED — your Round 52 §6. BUILT** — §69 `0757c8d` |
| W | ~~**Round 53 — FIRST DEVICE PASS. Sean: *"everything looks jumbled… make it neat, make it clean, make it informative."*** Four defects fixed; the block's look is yours~~ | **19 Sep** | ✅ **ANSWERED — your Round 53. `r53a` approved by Sean (Round 59 §3), BUILT §73 `a9ebff8`.** Not yet seen on the iPad (device check 6.2). Your standing device pass: Sean said yes 27 Sep — Round 67 §D6 |
| X | ~~**Round 55 — Sean overruled §54's scope, and your Advanced-fields ruling could not have worked as written**~~ | **19 Sep** | ✅ **ANSWERED — your Round 55. BUILT except `r55a`** — ⚠️ my Round 56 said "taken in full and built", and the strength sentence never moved. Mine — Round 67 §B8 |
| Y | ~~**Round 56 — the buy list rounds for whole batches (§78), check 11 exists (§77), and three questions back**~~ | **20 Sep** | ✅ **ANSWERED — your Round 56–57 reply, §6–§8. BUILT** — §81 `7cd929f`. Left over, mine: `1 whole batches` is always plural |
| Z | ⛔ **Round 57 — hiding a line. SUPERSEDED by Round 64.** The control shipped 20 Sep (§79); Sean has since replaced the whole feature with a comp. ⚠️ **This row said "almost built, only the control is missing" for three days after the control shipped** | **20 Sep** | ⛔ **CLOSED — see AF** |
| AA | ~~**Round 59 — §81 is BUILT and your check 12 passes.** Your six asks answered, the three tab surfaces named. ⚠️ **AND ROUND 48's CUSTOM PREP SIZE WAS NEVER BUILT — my miss, found because Sean went looking for it**~~ | **21 Sep** | ✅ **ANSWERED — your Round 59. BUILT** — §84 `6d31f1f`, §86 `1a5cece`, §87–§89 `f4526ed`. ⚠️ The naming check was written and never reported until Round 67 §B5 |
| AB | ~~**Round 60 — Round 48's custom batch size is BUILT.** ⚠️ **Your §2 contradicts itself for a prep that yields a weight**, I resolved it with your own general rule, and **one new sentence needs your word**~~ | **21 Sep** | ✅ **ANSWERED — your Round 60. BUILT** — §90 `2a9f621`. ⚠️ Two faults found since, both mine: the size is saved on the device, and a preset tap erases it — Round 67 §B8 |
| AC | ~~**Round 61 — two products may share a name, and for weeks that decided which invoice line a control acted on.** §83 closed seven of those; **two questions are yours**. ⚠️ **Was mis-numbered 60 and mis-lettered AB — Design caught the collision**~~ | **21 Sep** | ✅ **ANSWERED — your `ROUND-75.md` §4 (10 Oct): B** — two products may share a name, and the editor says so; Leftovers counts them together; §3 a nod. **BUILT §160 `9212a1e`** (review §161 `b7036dd`), pushed (checked 10 Oct). Deferred as *"their own round"* in your Rounds 59, 60, 62 and 63, and listed as still open in 64 and 65. Its readings: Round 76 §2 #1–#8 |
| AD | ~~**Round 62 — tab order, all four questions across three surfaces**, plus the remedy-list count you asked for: ⚠️ **15 of 21, not `qt` alone** — *⚠️ corrected: 13, all on the volume sentence (Round 67 §B4)*~~ | **22 Sep** | ✅ **ANSWERED — §1, the volume sentence, in your `ROUND-75.md` §5 (10 Oct):** amendment 2 extends to it — the recipe's own unit first, then the first two of `ml`, `L` and `fl oz` that aren't it. **BUILT §164 `57818bc`** (review §165 `e789c03`), pushed (checked 10 Oct); its readings, Round 76 §2 #16–#17. ✅ Tab order ruled in your Round 62 and BUILT (§91 `6054e76`, §93–§96 `4cc1b6e`). Arrow keys through the suggestions are ruled, not built — the look is Round 67 §C7 |
| AE | ~~**Round 63 — §1a and §4 BUILT.** ⚠️ **Three of your premises are wrong and two of them change the build**: `inert` is not reachable, and Escape does not stop propagating~~ | **22 Sep** | ✅ **ANSWERED — your Round 63, all four. BUILT the same day** — §93–§96 `4cc1b6e`. ⚠️ Never reported until Round 67 §B1. Shift+F10 is Sean's measurement (device check 3.5) |
| AF | ~~**Round 64 — the hide control is being REPLACED by a comp, and this one is money**~~ | **23 Sep** | ✅ **ANSWERED — `r64a`–`r64e`.** Sean took ⭐ on all four money calls. Shape A. ✅ **The tag IS drawn in `r64a` — an earlier line here said otherwise and was wrong (see the Round 66 correction)** |
| AG | ~~**Round 65 — §98 built, and ⚠️ A CLAIM I MADE IN ROUND 64 WAS FALSE**~~ | **24 Sep** | ✅ **ANSWERED — `r65a`–`r65b`.** No un-comp at Complete; reopen, change, complete again. §1 and §2 taken |
| AH | ~~**Round 66 — seven rulings on the comp.** ⚠️ **Its §1 said the tag was never drawn. WRONG — it is drawn in `r64a`; corrected 27 Sep.** The two countable corrections stand (40 glyphs; the crossed eye cannot leave), plus your twice-asked question ANSWERED~~ | **24 Sep** | ✅ **ANSWERED — your `ROUND-66.md` and frame `r66a`–`r66b`, in the design bundle (not this repo).** The tag redrawn, §3–§9 ruled, 41 glyphs taken. BUILT §99–§105 on `main`, pushed (checked 30 Sep) |
| AI | ~~**Round 67 — the comp's unasked details, a money warning false today, and the record put straight.** §A the comp; §B report-backs; §C eight other items; §D Sean's asks of 27 Sep~~ | **27 Sep** | ✅ **ANSWERED — your `ROUND-67.md` and frame `r67a`–`r67e`, in the design bundle.** §A BUILT §99–§105, pushed (checked 30 Sep); C1, C2, C3a, C4, C7 and D1–D3 ruled, not built; C3b waits for its own round; C5, C6 and D4 are Round 68's |
| AJ | ~~**Round 68 — check 6.5: his iPad is 1200 × 1468 upright and 1600 × 1143 sideways, and the portrait you drew is not his.** ⚠️ **Rewritten 29 Sep after a verified pass** — the first version said your frames were drawn at 1024; your full-screen frames are an 11-inch (834 × 1194 / 1194 × 834), and at 1200 his portrait gets the landscape layout. ❓ what size a frame is judged at; ❓ the invoice sheet's 660 cap, gone since 29 Jul; re-check §6; ❓ dark mode~~ | **28 Sep**, rewritten **29 Sep** | ✅ **ANSWERED — your `ROUND-68.md` and frame `r68a`–`r68e`, in the design bundle. BUILT §109–§116 on `main`, pushed (checked 30 Sep), except the tab strip's cap** — Round 69 §5, §6. Your 🔧 asks #2 and #3 answered in Round 69 §1; #1, the device check, in Round 69 §7 |
| AK | ~~**Round 69 — your Round 68 is built except the tab strip; the 660 name column (422 — the note does not fit) and `/style/workingcheck` at 672 (466.79); Sean's answers; sixteen stops; and check 9.1, the Builder on his iPad** — 660 with 170 of desk each side, as `r68a` draws it; keyboards 566 sideways and 456 upright, so the picker never takes over at full screen; the Home Screen app loses 54 to a browser bar on the Builder (mine). ⚠️ **Rewritten 29 Sep after your Round 68 reply** — the 04:15 draft (`50ef8f3`) predated it. ❓ which height a frame is judged at (1068 at rest / 1143 / 1168 sideways, 1468 / 1568 upright — he uses Safari and the Home Screen app about equally and prefers the taller); ❓ a frame of the Builder's top at 1600 with tabs; confirm the layouts below 1024 stand for a window; ✅ your Round 68 §8's four layout rulings can go ahead ⚠️ **And Sean wants the sideways invoice a bit wider than 660 — What I need back #1.**~~ | **29 Sep** | ✅ **ANSWERED — your `ROUND-69.md` and frame `r69a`–`r69c`, in the design bundle. BUILT §118–§124 on `main`, pushed (checked 30 Sep)** — each reviewed, and §125 fixed the invoice numbers' start. Your two asks, what stopped and what the building found are Round 70 |
| AL | ~~**Round 70 — your Round 69 is built, in seven batches (§118–§125); Sean: *"720 looks fine for now"*; the photo, retaken on the fix; two faults he found on his iPad, fixed (§127, §128); ❓ where Redo goes; twenty-four things back** — the search field's 2px border (#1) and the locked invoice's disabled Trash row (#2) are the two builds that wait on you; Redo (#24) is Sean's own ask; the sheets' feet and the 62-vs-56 bottom bar below 1024; four on the formatting bar; Return on his Magic Keyboard; three on the Undo list (#21–#23).~~ | **29 Sep** (drafted), **30 Sep** (his word, §4, §5, the photo; sent) | ✅ **ANSWERED — your `ROUND-70.md` and frame `r70a`–`r70d`, in the design bundle's `ROUND-71/`. BUILT §130–§135 on `main`, pushed (checked 30 Sep)** — each reviewed. Your §6 is Sean's answer too (*"nothing"*, 30 Sep). Three stops, what the building found, and Sean's word on `r70a` are Round 71 |
| AM | ~~**Round 71 — your Round 70 is built, in six batches (§130–§135); Sean on Return: *"Let's go with Design's recommendation: nothing."*; Sean on `r70a` and `r70b`: *"All 1-6 are good to go."*; ❓ he wants a toast for Undo and Redo; three stops and twenty things back** — ❓ **the toast first (§0): he wants it *"easier to see (to catch attention)"* than the footer's line, and it reverses your Round 66 §5 and Round 70 #22 — please draw it**; ⛔ #19's Restore on a trash row below 640 (hiding the amount is not enough), #14's one search per segment (the picker's reaches recipes off the menu), #22's line on a phone; Redo's greyed edge (frame `#D8D2C8` vs prose `--control-line`) and Undo's own empty look; `r70a`'s one-line rows; our label words; dark at 4.03:1; the bar's Tab inside a sheet; `r70b`'s totals run the wrong way.~~ | **30 Sep** (drafted; his word on 12.1 and the toast; sent) | ✅ **ANSWERED — your `ROUND-71.md` and frame `r71a`–`r71b`, in the design bundle's `ROUND-72/`. BUILT §138–§141 on `main`, pushed (checked 1 Oct)** — each reviewed. Your two asks of Sean (the box on his iPad; the rates over his catalogue), three stops and what the building found are Round 72 |
| AN | ~~**Round 72 — your Round 71 is built, in four batches (§138–§141); Sean on the box: *"not life or death"*; his catalogue: 9 package rates and 2 recipe-row rates would drop; twenty things back, five of them stops** — ⛔ the field's words (your Round 70 #14 *`Search 314 products`* vs Round 71 #2 *`Add a product or cocktail`*), the field over Details (its row never drawn without it), the swap's fit below 1024 (a bottom sheet lifted off the edge), ⛔ a card with no rate and the states with no one unit; the box in dark at 1.71:1, the frame's 54 against 49.25, the keyboard at every width, the bars from 600 up, the phone's drawer at full; rates — `Cost per L`, `about` on `each`, a free product's `$0.00`, the narrow card, and where a rate beside a total shows.~~ | **1 Oct** (drafted; his word on the box and his catalogue's counts; sent) | ✅ **ANSWERED — your `ROUND-72.md` and frame `r72a`–`r72c`, in the design bundle's `ROUND-73/` (7 Oct). BUILT §145–§147 on `main`, pushed (checked 9 Oct)** — each reviewed. Your two asks (the box in dark on his iPad; the dark contrast reading), what stopped and what the building found are Round 73 |
| AO | ~~**Round 73 — your Round 72 is built, in three batches (§145–§147); Sean's call: the box's words at normal weight — his decision, reversing `r71a`'s semibold; the box in dark 6.75:1 on the sheet, its words 7.06:1; Sean on the box in dark, his 14.1: *"good"*; twenty-one things back, two of them stops; and the three you named next** — ⛔ the cut name *"shows it whole when tapped"* (the row takes no tap), ⛔ whether an editor's header is a card's heading; 7C's colour and the pressed row; the drawer at half; `about` on a per-item price the app works out (your `$0.40 each` was 12 limes for $4.80), an exact division, the override, preps' units; the breaks at 390; the comp's small holds a–l; what *Start from a template* does on an empty invoice; Custom Group Lines — the whole path, drawn, before any code. Sean asks for several mock-ups of Start from a template and of Custom Group Lines, look and mechanics (9 Oct).~~ | **8 Oct** (drafted), **9 Oct** (his word on 14.1 and 1.2; sent) | ✅ **ANSWERED — your `ROUND-73.md` and frame `r73a`–`r73h`, in the design bundle's `ROUND-74/` (9 Oct). BUILT §149–§151 on `main`, pushed (checked 9 Oct)** — your §0–§4 and §5's hide, each reviewed; measured in Round 75 §2, what stopped and what the building found in Round 75 §3. Sean picked templates B (`r73b`), groups C (`r73g`) and yes to #9 — Round 74 §0; B, C and his ask to name a template were answered in your Round 74 (row AP) |
| AP | ~~**Round 74 — Sean's picks, *"Okay. B, C, and yes."*: templates B (`r73b`), groups C (`r73g`), a comp stays out of a group; and his own ask: save any invoice as a template under a name, from the invoice list or an open invoice** — ❓ draw it, from both doors (a part never drawn), and rename and delete now or with kits; ⛔ B's five: the template's own guest count, rounding (`r73b` rounds to the nearest, the app up), which lines scale (close to the parked estimator), a hidden line on the preview, the empty invoice's sentence and `Browse products`; ⛔ C's nine: door 2's footer the panel doesn't have, door 1's row 3 against `r73d`'s row 11, a member's panel, the chooser from the ⋮, select mode with groups, the group's bar, the last member, packing, the words; and the rest. Sean, before it went: scaling a template by guests is an explicit option, held for his Calculator rework — so B is built without scaling and §2 #1–#3 wait.~~ | **9 Oct** | ✅ **ANSWERED — your `ROUND-74.md` and frame `r74a`–`r74h`, in the design bundle's `ROUND-75/` (10 Oct).** Templates are built next, as ruled — naming from both doors, Replace, rename and delete, B without scaling, the empty invoice's sentence (§2 #5a) — then C alone (Round 75 §0); §1 #8, carrying groups, with C. Your ask of Sean, the `+` sheet's order: he wants it reordered — Round 75 §1, and the drawing is yours (row AQ). Your measured results: Round 75 §2 |
| AQ | ~~**Round 75 — your Round 74 received: templates built next (naming from both doors, Replace, rename and delete, B without scaling, the empty invoice's sentence), then C as its own build; Sean on the `+` sheet: *"Yes, the order bothers me. Reorder. Build."*; your Round 73's smaller rulings built and measured (§149–§151); eighteen things back, two of them stops** — ❓ draw the `+` sheet's order (reorder, not remove — he chose it); ⛔ a typed 0 in Price (#20: the app saves an emptied Price as 0), ⛔ a comp at a quantity of 0 on its two panels (k); the prep card's second rate (`Makes 1 L · $4.92 per L`), an override past the cent, `under $0.01 each`, the stack's 4, the pack row at 320, the footer's break before `·`; Event details' Client field; `Add item` from 600 to 1023; the loading rule in both segments, the library fields while loading, `Search 1 invoices`, `Search 1 recipe`; the box with no invoice open; the stated line counting a zero; b's two sentences and a charged line's second dash; out of the archive — `Complete unlocks`, the dimmed rows, the old app's archives.~~ | **9 Oct**, night (drafted; sent) | ✅ **ANSWERED — your `ROUND-75.md` and frame `r75a`, in the design bundle's `ROUND-76/` (10 Oct). BUILT §160–§165 on `main`, pushed (checked 10 Oct)** — each reviewed (§161, §163, §165); *"Nothing is left open with me."* Your §4 and §5 close AC and AD. What the building found is Round 76 §2 |
| AR | ~~**Round 76 — your Round 75 built (§160–§165), rows AC and AD closed; templates (§153–§159) and Custom Group Lines, option C (§169–§180), each walked end to end, no total moved; a Retry bug fixed (§166–§167); ninety-five things back, four of them stops** — ⛔ History's card at 390 (`r74b`'s 358 is 350 built); ⛔ `Add lines`' tick, both ticked and greyed, never drawn (`r74g`); ⛔ a long group name on B's preview below 1024 (`r74d` draws no member); ⛔ one `Name & category` Save that renames and moves (no label, no frame); ❓ what he hears when Retry sets a change aside, and five more Retry calls; ❓ which rounding is right past the cent ($0.38 in his footer, $0.39 on the paper); and 84 readings — §1 #2–#26, §2 #1–#17, §4 #4–#44 and #46~~ | **10 Oct** | ✅ **ANSWERED — your `ROUND-76.md` and frame `r76a`–`r76d`, in the design bundle's `ROUND-77/` (10 Oct).** The four stops drawn (`r76a`–`r76c`, and one step per Save); §2 your recommendation, and Sean said yes — *"Yes for the matching paper. Build."* (Round 77 §0); §3 ruled, with `r76d`. **Being built next, all but `r76d`** — Round 77 §0; its results and the drafts count you asked for in Round 78. Your §3 question — where the pill shows — Round 77 §1, and `r76d` waits on your answer (row AS) |
| AS | ~~**Round 77 — your Round 76 received; Sean on §2: *"Yes for the matching paper. Build."*; everything in it but `r76d` being built, results and the drafts count in Round 78; your §3 question answered: the pill renders only on Library › Products, Cocktails and Prep Recipes (`LibraryHeader.tsx:136`), and in the Builder a given-up save is only the red end of the detail line, `Saved · 3 not synced`, with no Retry — gone when locked or with no invoice open; the Builder banner's `Retry now` does nothing for it** — ❓ place the pill on his iPad, and anything `r76d` needs because of it~~ | **10 Oct** | ✅ **ANSWERED — your `ROUND-77.md` and frame `r77a`–`r77c`, in the design bundle's `ROUND-78/` (10 Oct). BUILT §181–§183 on `main`, each reviewed (§182, §183 · review), with your Round 76's rest and the cent rule (§184) — ⚠️ NOT PUSHED** (`origin/main` `56cfbe3`, checked 10 Oct, 21:18), held on the *waiting* pill's colour on the green bar. Its results, the measured widths, the reload check (in Node, not on the real app) and what stopped are Round 78 (row AT); the drafts count waits for the push |
| AT | ~~**Round 78 — your Round 77 built (§181–§183), with Round 76's rest and the cent rule (§184); ⚠️ not pushed, so not on GitHub — the grey *waiting* pill reads 1.02:1 on the green top bar; four stops, one money question, twenty readings, and the client estimate** — ⛔ the *waiting* pill on the bar (`r77a` draws the bar cream, the app's is `#2C4A3E`) — **the push and the drafts count wait on it**; ⛔ the pill slides away with the bar below 1024 (Sean: *"You pick"* — ours: red and gold stay, grey may go) — how?; ⛔ a row's part (`r77c`) — a change records the whole record and a fingerprint, not its fields, and a row is one save; ⛔ a product row can't open (cocktail and prep rows can — ours to wire; our earlier word to Sean was half wrong); ❓ the half cent — the paper, and now the footer, round some exact half cents down ($1,395.75 at 6%: $83.74 of tax, $83.75 by hand); ❓ readings 1–13; ❓ **draw the client estimate** — Sean: *"let's try combining them"*, the quote and the lead estimate as one document; ours: from an invoice's lines first; how the low and high are made is Sean's, not yours~~ | **10 Oct** | ✅ **ANSWERED — your `ROUND-78.md` and frame `r78a`–`r78e`, in the design bundle's `ROUND-79/` (11 Oct).** Your §1, §2 #2 and §4 #1–#2 BUILT §188 and LIVE (`ebefce8`, pushed 11 Oct, 00:41, with the held §181–§187); your §2 #3–#4, §3, the rest of your §4 and §5 BUILT §189–§191, each reviewed — ⚠️ **NOT PUSHED**, held by Round 79 §1 (row AU): your §4 #11 stopped on its premise, and your §3 meets *"Invoices you've already completed won't change."* Sean on your two questions: *"1. Yes."*, *"2. Nearest $50"*; your #3 is Round 79 §4. The contrast you asked for: 9.34:1 light, 8.92:1 dark |
| AU | ~~**Round 79 — your Round 78 built: §188 (`r78a`, `r78b`) LIVE at `ebefce8` with §181–§187; §189 (`r78c`), §190 (the half cent) and §191 (the Estimate's paper, `r78d`–`r78e`, no door) built and HELD — on implementation's Mac, not on GitHub** — ⛔ **§1, holding the push:** under §190 a completed invoice whose tax is exactly half a cent reads a cent more in History, its footer and its paper printed again (your §3 example, $1,479.49 → $1,479.50), and Sean was told *"Invoices you've already completed won't change"*; your §4 #11 rests on a premise the code contradicts (at Complete, History reads the live lines), and nothing stores a completed invoice's tax or total — show what it was completed with everywhere, and what the paper prints, or another rule?; ⛔ §2, the Estimate at his $50 — one figure (`$246` → `$200 to $250`), tax to $50 or to the dollar, a `$0` low, the narrow printed page, his details at 390, `$-50`; ❓ §3, 32 readings; ❓ §4, Sean's answers on how the figures are made — an invoice he built and a template he adjusts; a guest-count range and his descriptors, typing as an edge case; descriptor values set once, with a learned figure as a reference; rentals typed — and his cost per head: please draw the doors, their controls and where cost per head sits~~ | **11 Oct** | ✅ **ANSWERED — your `ROUND-79.md` and frame `r79a`–`r79e`, in the design bundle's `ROUND-80/` (11 Oct). BUILT §193–§197 on `main`, each reviewed, and LIVE** — §189–§194 pushed 13:31:59 (`9e35afd`, your §1's condition met first), §195–§198 at 17:06:27 (`c6ccb79`); `git ls-remote origin main` reads `c6ccb79` (11 Oct, 18:58). Your §1 unblocked the push; Sean on your §4 arithmetic: *"Build. Yes."* Six stops, 58 readings and Sean's half-cent rule are Round 80 (row AV) |
| AV | ~~**Round 80 — your Round 79 built and LIVE (§193–§197, each reviewed); ⛔ six stops — the word-pair editor first (adding, changing and removing a pair: `r79c` draws pairs at rest only, and puts `Add a word pair` in the band), then line two's short words (`r79b`'s `drinkers`, `premium`), the price word's line, which categories start chosen, ⛔ money: invoices last completed before 28 Sep have no record (your §3 example, completed before then, would read $1,479.50 where its paper printed $1,479.49 — make a record, read `legacyPaperCent`, or accept?), and `page 2 of 2` (your `HANDOFF.md` §14.1 end rule is not in the app); ❓ Sean's rule — *"Let's round up every half cent across the app. I don't want to see them anywhere."* — how a qty × price line reads when its whole-cent price doesn't multiply out, the rate beside a total, `under $0.01`, the override box, the Price box's save, `money()` half up; ❓ 58 readings**~~ | **11 Oct** | ✅ **ANSWERED — your `ROUND-80.md` and frame `r80a`–`r80d`, in the design bundle's `ROUND-81/` (12 Oct). BUILT §199–§205 on `main`, each reviewed** — §199 (the comma, first, as you asked) LIVE at 00:48 (`16c76b0`), §200–§202 LIVE at 11:40 (`e8f8a1c`), §203–§205 go up with Round 81. Sean: *"Build."* and, on your §1 #5 sentence, *"The sentence looks fine."* Your §1 #1–#3 drawn (`r80a`–`r80c`) and built, with #4; #5 (b) and #6 built; §3 #1–#6 built; §2's calls built but #48. Five stops and 66 readings are Round 81 (row AW) |
| AW | 🔴 **Round 81 — your Round 80 built (§199–§205, each reviewed), in your order; §199–§202 LIVE, §203–§205 go up with it; ⛔ five stops — Event details' guest box (it stores his words as text, and three places read them: reading them in the device's marks could change counts already saved — how?); the trash guard (Round 76 §3 #4: no frame draws the row, its `Delete for good` or its confirm); Prep's `Needs a cost` (it already follows its card under your Round 76 §5 #12 — leave it, or define a new flag?); #48 (10 categories fit with the totals, not 11 — our Round 80 reading was wrong, and your `✅ 11.` rests on it); `18a`'s end rule, which Chrome still leaves on a sheet of its own with the closing line where the line table breaks across the last sheet (№ 14: 24 of 241 Letter positions) — and the alternative opens a sheet with the totals alone; ❓ 13 of 66 readings are calls** | **12 Oct** | 🔴 **OPEN** |
| AX | 🔴 **Round 82 — Sean's switch, split: three marks in the press-and-hold panel — keep out of the bottle, don't buy, strained or otherwise separated — all new parts: ❓ please draw them (names, glyphs, the row and the card), with a topper's per-glass line on the card and the printout, and what each does to the bottle, the shopping list and the cost; the four-way count you asked for in Round 48 §4, read on his iPad at 17:50: 5 marked, all 5 your group 1 (4 a weight against a volume), your number 0 of 5, Round 52's 4 — four filtered waters ("don't buy", ours, by his 20 Sep words) and the Orange Crush's Sprite (*"Yes, sprite is a topper"*); ❓ how the five move, and whether `don't cost this` is its own mark (his 17 Sep words on the label with it); the recipe editors' press-and-hold panel, never placed since §28, now centred on the window (§209, LIVE, our reading — no frame draws it): ❓ centred or anchored to the row (centred, it covers the held row at 1600 × 1115), and ❓ Safari's ring on a focused panel, sheet or confirm** | **12 Oct** | 🔴 **OPEN** |

---

## ✅ DELIVERED — what Design has already been given

⚠️ **THIS TABLE EXISTS BECAUSE THE INDEX ABOVE SOLVED ONE HALF OF THE PROBLEM
AND CREATED THE OTHER.** The index tracks **asks**, so a round whose whole job
is to ANSWER something gets no row — and Rounds 38, 40 and 42 are exactly that.
Round 42 measured the density count Design had asked for and put the specimens
in `/style/workingcheck`; **neither appears anywhere above, and Design re-asked
for both in Round 45.** That is not Design failing to read. That is an answer
filed where the index does not look.

**A re-ask is answered from this table, not by re-measuring.** Every row carries
the commit it was true at, so a stale row is visible rather than assumed —
which is the failure mode of every "true when written" sentence this project
has been bitten by.

| Supplied | In | True at | Still true? |
|---|---|---|---|
| **The `needsDensity` count** — 242 convert / 120 need a density / 38 count-against-measure, across all 400 pour-and-yield pairs | **Round 42 §1** | `c15feb7` | ✅ **Yes.** Nothing since §54 has changed the unit table or `convert`. Re-served verbatim in Round 47 §4. |
| **`/style/workingcheck` specimens** — weight yield, density refusal, `2 each` against an ml recipe | **Round 42 §2** | `c15feb7` | ✅ **Yes — re-read in the source 18 Sep**, all three in the fixtures and rendering. No login. |
| **Sean's answer on weight-in / volume-out** — he writes recipes metric at the bench and pours with an oz jigger, so the crossing shape is his normal workflow | **Round 44** | `a7c7698` | ✅ Yes |
| **Sean's ruling: the mixed-dimension refusal STAYS** — measured on his real `Test` recipe; every volume pour quantifies | **Round 44** | `a7c7698` | ✅ Yes |
| **The Demerara diagnosis** — 615 g sugar + 615 g water → 1 L; the water row is grams against a volume-sold product; his workaround was "not ordered" | **Round 43, widened** | `a7c7698` | ✅ Yes — and Round 45 §3 confirms it landed |
| **F and L closed** — `measuresOnly`'s option set, and `no-package-size`'s two misdirections | **Round 42 §4, Round 38** | `c15feb7` | ✅ Yes |
| **§51 taken in full; §53, §54 built and live** | **Rounds 38, 40, 42** | `8cba142` / `816faae` / `c15feb7` | ✅ Yes |
| **Sean's answer on the swap row** — *"Just unmistakable"*, then **B**, picked from the frames | **Rounds 49, 50** | `b2aa9c4` | ✅ Yes — ⚠️ the menu list did not match it until §115 (`7e6a3f3`, 29 Sep); it and the undo entry read `Bacardi → Diplomatico` now (Round 69 §5) |
| **Sean on `r53a`** — approved, *"r53a looks good"* — **and on `r52a`**, whose answer was *"Where are the sizes?"* and became §84 | **Round 59 §3, §4** | `a9ebff8` / `6d31f1f` | ✅ Yes — `r53a` not yet seen on the iPad (device check 6.2) |
| **The type scale in pixels** — the nine steps pinned in `DESIGN.md` | **Round 56** | `6f7f8e0` | ✅ Yes |
| **Round 46's four tab-order questions, re-pasted**, and **the three surfaces named** | **Round 56 §4, Round 59 §5, Round 62 §2** | `2a9f621` | ✅ Yes — you ruled all four in your Round 62 |
| **Does anything sum invoice lines outside the document?** — thirteen call sites, one function | **Round 59 §3** | `dab8709` | ⚠️ **Half.** The totals share one function; the exclusion rule was hand-written in four files until §98 made it one. Corrected in Round 65 §1, true at `defd514` |
| **Summary mode — Sean: BUILD IT** | **Round 59 §3** | `dab8709` | ❌ **No — Sean put it on hold 23 Sep.** Round 67 §B3 |
| **The yield-unit remedy count — 15 of 21** | **Round 62 §1** | `2a9f621` | ⚠️ **Corrected: 13, all on the volume sentence.** Round 67 §B4 |
| **`inert` is unreachable; Escape does not stop propagating; the printed sheet indents 20px a level; no keyboard route to reorder** | **Round 63 §3–§5** | `6054e76` | ✅ Yes |
| **The locked-Notes fix** — a `setEditable` effect, and one lock, not three | **Round 63 §2** | `6054e76` | ✅ Yes — your `STATE.md` still lists it open |
| **§98 — five money messages that quoted money the total would not move by**, and the exclusion rule as one rule (`isBilled` / `printsToClient`) | **Round 65 §1–§2** | `defd514` | ⚠️ **Mostly.** §98 left the calculator's undo entry with no money — Round 67 §B8. ✅ Fixed §111 (`edc1e92`, 29 Sep) |
| **The old `comped` sense reaches no screen string** — with the method — **and `no cost` is unsafe as its replacement** | **Round 66 §2** | `948817a` | ✅ Yes — no app code has changed since `defd514`. ⚠️ The six comments are not reworded yet (the correction) |
| **The glyph set is 40, not 35, and the crossed eye cannot leave** — so 41 with the tag | **Round 66 §1**, kept by the correction | `948817a` | ✅ The count, yes — recounted 27 Sep. ⚠️ The eye staying goes against your `r64a` sentence and was never asked — Round 67 §A6h. ⚠️ **42 since §111** (29 Sep) — the padlock joined the set, so `r67e`'s pair would make 44 (Round 69 §6) |
| **The client's paper still bills a comped line** — $139.96 against his screen's $99.96 — so `r64b` lands first | **Round 66 §10** | `948817a` | ❌ **No longer — §101 (`3ae7791`, 28 Sep) prints the comped line `Complimentary` and leaves it out of the total** |
| **The `/debug/hidden` count page** | **Round 66 §11** | `defd514` | ⚠️ **Built, not safe to read** — four defects still in the code. Round 67 §B7 |
| **The tag IS drawn in `r64a`** — body, hole and slash, 19px at 1.75 | **Round 66 correction** | `limbo-design` `85e0cc9` | ✅ Yes |
| **`costing.ts:366`'s caller: none** — a comment since 10 Aug, with the method | **Round 67 §B2** | `ae3a1fe` | ✅ Yes |
| **Your Round 63, built in full** — §93–§96 | **Round 67 §B1** | `4cc1b6e` | ✅ Yes — checks 3.2 and 4.2 not yet on the iPad |
| **The naming check exists; the two-reader case is guarded where you found it** | **Round 67 §B5** | `f4526ed` / `6d31f1f` | ✅ Yes |
| **Sean's 27 Sep answers** — comp, then group lines; summary on hold; the quarter waits with Reports; the tax sentence and recipes-inside-recipes parked; the iPad check yes; his real data through the Claude app's browser, look only | **Round 67 §B3, §B9, §D** | `ae3a1fe` | ✅ Yes |
| **The 660 row's name column: 422** — `Buy separately — Pierre Ferrand Orange Curacao` (372.14) does not fit beside `Reminder` (30.30 over) or `Silent` (6.73 over); 330 upright | **Round 69 §1** | `b1a55bd` | ✅ Yes |
| **`/style/workingcheck` at the 672 sheet: 466.79** — against 612.36 at 512 and 448.60 at 768; the real row's column is 470.38, not the lab's 478 | **Round 69 §1** | `b1a55bd` | ✅ Yes |
| **His heights** — sideways 1068 (Safari, bars showing — read at rest in §7), 1143 (collapsed), 1168 (Home Screen app; 1114 on the Builder until its browser bar goes, §7); upright 1468 and 1568 (1514). **How he works** — Safari and the Home Screen app about 50/50, preferring the Home Screen app; Safari on the Mac; More Space; iPadOS 26.6; a Magic Keyboard; windows he drags narrower | **Round 69 §2–§4** | `b1a55bd` | ✅ Yes |
| **Sean on your Round 68 §4 — Light the default: yes**, with his choice remembered by his account (§107) | **Round 69 §2** | `b1a55bd` | ✅ Yes — built §109 |
| **Check 9.1 — the Builder on his iPad**, six full-frame photos: 660 at x 770–1430 with 170 of desk each side; the on-screen keyboard 566 sideways, 456 upright | **Round 69 §7** | `b1a55bd` | ✅ Yes |
| **Sean on 720 — *"720 looks fine for now"*; check 10.1's photo, the Undo list open at 720, clean; Session 11 passed** | **Round 70 §1, §4** | `7eea775` | ✅ Yes |
| **Check 12.1 — Sean on `r70a` and `r70b`: *"All 1-6 are good to go."*** The six steps he was given for 12.1; your question not answered in its own words. **And his ask: a toast for Undo and Redo, instead of the footer's line alone** | **Round 71 §0, §1** | `5a6aac7` | ✅ Yes |
| **Your Round 71 §5 table, worked by hand against its own rule — no row contradicts it**; and `r70b`'s corrected totals read in the frame ($2,451.02, $2,411.03) | **Round 72 §1**, and its opening for `r70b` | `c476989` | ✅ Yes |
| **Check 13.1 — Sean on the box: *"In dark mode, the box is a bit dark, but it's not life or death for me."*** His whole answer. It speaks to dark only; your question was not answered in its own words | **Round 72 §0** | `139e265` | ✅ Yes |
| **Check 13.2 — his catalogue through your Round 71 §5, by `/debug/rates`:** 298 products; 0 cards under $0.01; 1 card at $0.00 (a free water); 9 whole-package rates and 2 of 31 recipe-row rates that would drop; 22 with no rate. Counts only — his products' names and prices stay with implementation | **Round 72 §1** | `c476989`'s code, his catalogue on 1 Oct | ✅ Yes |
| **Sean's call on the box as built from `r71a` — its words at normal weight:** *"Bold looks clunky. Let’s keep it normal."* Built §145; his decision, not a question | **Round 73 §0** | `07d9687` | ✅ Yes |
| **The box in dark, as built:** its words 7.06:1 on the fill, the fill 6.75:1 on the sheet (light 9.34 / 9.50); the light shadow in both themes, the app having no dark one | **Round 73 §2** | `07d9687` | ✅ Yes |
| **Check 14.1 — Sean on the box in dark, on his iPad: *"1 and 2 are good."*** His whole answer; "1" is 14.1, put to him on the live site, sideways, in Dark, after two adds and one Undo, as *"Does the light green box catch your eye without covering anything? Does the writing read right now that it isn't bold?"* — your question, with *"anything"* for *"anything he needs"*, and §0's | **Round 73 §1** | `0a03c7b` | ✅ Yes |
| **Check 1.2 again, after §143 — the top bar off his PDF:** the "2" of the same answer, put to him as *"redo the PDF check (1.2) to confirm the green bar is gone from the paper"* — the bar only | **Round 73 §5** | `0a03c7b` | ✅ Yes |
| **Sean on your Round 80 §1 #5 sentence: *"The sentence looks fine."*** — his whole answer, 12 Oct, with *"Build."*; 21.2's count not read yet | **Round 81 §0 h** | `42f6ad2` | ✅ Yes |
| **Your Round 80 §2 🔧, the comma count: can't be had** — no record keeps what was typed (price history keeps the old price, the new and the time; the queues keep values; Undo whole invoices), so `1,700` and `1.7` typed leave identical records | **Round 81 §0 a** | `16c76b0` | ✅ Yes |
| **The four-way count of `silent` rows** (your Round 48 §4, with your number and Round 52's) — 5 marked (1 on cocktails, 4 on prep recipes); 1 → 5 (4 a weight against a volume, 1 another unit); 2 → 0; 3 → his reading, no name suggesting it; 4 → 0; a topper, by name → 0; your number 0 of 5; Round 52's 4. The five rows named — four filtered waters, and the Orange Crush's Sprite | **Round 82 §1 e** | `1a9d18d` (the page's code is `9dde1b8`'s); his library, read by him on 12 Oct — the top at 17:50, the rows at 18:40–18:41 | ✅ Yes |
| **Sean on the switch, 12 Oct** — *"Yes to both of questions. And Build the count."* (the champagne bought, kept out of the bottle, shown per glass with the bottles — our recommendations, his yes); one switch → two (17:08); the third mark, all three in the press-and-hold panel (17:5x); *"Yes, sprite is a topper"* (18:53) | **Round 82 §1 a, d, f** | `1a9d18d` | ✅ Yes |

⚠️ **Rounds 38, 40 and 42 are status reports and were never on the open index,
by my own choice, because they ask almost nothing.** That choice is what made
§1b and §1c possible. They are on this table now instead.

⚠️ **AND THE TABLE THEN STOPPED AT ROUND 44 FOR TEN DAYS.** Nothing supplied after 17 Sep
had a row, so the remedy count, the §98 report and the `comped` answer were findable only by
reading rounds — the exact failure this table was built to end — and Round 63's build was not
written down anywhere in this file. **The rows
from *Sean's answer on the swap row* down were added on 27 Sep**, each re-checked against the
code or your files that day. Rows marked ⚠️ or ❌ are deliveries that turned out partly wrong
or were superseded; they stay, marked, so a re-ask gets the correction and not the old answer.


---

## 🔴 ROUND 82 — Sean's switch, split: three marks in the press-and-hold panel — keep out of the bottle, don't buy, strained or otherwise separated — all new parts, so please draw them, with a topper's per-glass line on the card and the printout; the four-way count you asked for in Round 48 §4, read on his iPad: 5 marked, all 5 your group 1 — four filtered waters, and a Sprite that is a topper by his word; and the recipe editors' press-and-hold panel, never placed, now centred on the window (§209, LIVE) — two calls


**implementation → Design, 12 Oct 2026. Branch `main`, app at `1a9d18d`** — the code is `1bf91a7`'s (§209 · review), the
last commit to touch it. `4597fb3` and `1a9d18d` (§210) are records only: `git diff --stat 1bf91a7 1a9d18d -- src scripts
package.json` is empty. **Every `file:line` below is at `1a9d18d`, which is on GitHub.**

**All of it is LIVE, read back by curl, no browser.** `git ls-remote origin main` reads `1a9d18d` (19:24).
- **§203–§206**, Round 81's, which it said go up with it: pushed 15:41:56 as `42f6ad2`; live 15:45:53, the build id
  `SdXUUu3PG75r1sCdwhVi9` → `AehLtda6VfD7pO8LxtFK9`.
- **§207–§208, the count:** pushed 16:45:28 as `39efefe`; by 16:49:51 the live `/style/dontordercheck` answered 200 and
  the build id was `rCVmGkYT3httaH1vd8yuF`. Sean read the count on his iPad at 17:50.
- **§209–§210, the panel:** pushed 19:12:42 as `4597fb3`; live 19:17:07 — the build id went to `537ayQEoB6ro_4-42seob`
  and `/style/panelcheck`, a page only §209 has, went from 404 to 200. `1a9d18d` is notes only, which the host doesn't
  build for (`netlify.toml:32`). At 19:24 the live `/style/panelcheck` answers 200 with its heading, *The press-and-hold
  panel in the editors*, on build `537ayQEoB6ro_4-42seob`.

**Round 81, just below, is still open (row AW).** Whether it has reached you yet isn't known here. Read the two
together; nothing in this round changes it.

**How it was measured.** Headless Chrome on the verify build, light and dark; Node ran the real code against stand-ins.
No sign-in, Chrome not Safari, no iPad. **The count is the exception:** Sean read it signed in, on his own iPad and
iPhone, and sent screenshots. They stay with implementation; the numbers and rows below are what `WISHLIST.md`
transcribes from them.

### 1 · ❓ Sean's switch, split — three marks, all new parts. Please draw them

**a · His words, in order.** *(Each 12 Oct time is when `WISHLIST.md` recorded his words — commits `99eeaa1` 14:02,
`5b765d2` 17:08, `2ac9565` 17:52, `0a8cee5` 18:53; "17:5x" is `WISHLIST.md`'s own — not when he sent them.)*

1. **7 Oct:** *"I need to reestablish the original purpose for “silent” ingredients (think champagne). The goal is that
   when I have a cocktail recipe that I’m batching, I should be able to “silence” a topper like champagne (we don’t want
   that sealed in a bottle under pressure). This means that the remaining unsilenced ingredients should be the only ones
   who’s measures show up in any batched recipe volumes. So a french 75 batch would show the following: Gin, Lemon,
   Simple – and these ingredients would be scaled together to whichever batch volumes that I’m looking for (e.g. 500ml,
   750ml, 1000ml, 4L, etc.). But the “silent” ingredient should still show up but at the amount that I would use in a
   single cocktail as a topper."*
2. **12 Oct, 14:02**, to our two questions (d, below): *"Yes to both of questions. And Build the count."*
3. **12 Oct, 17:08:** *"I think that it would make sense for the one switch to become two. When I initially came up
   with the “silent” ingredient idea, it was simply to omit chosen ingredients in a batch bottle recipe. I can’t even
   remember where the don’t buy. This button came from, but all indications tell me that those are two different things
   and it wouldn’t hurt to separate them and their switch. What do you think?"* — `(ours)` We agreed: "keep out of the
   bottle" and "don't buy" are two questions, and only two switches cover both the champagne (out of the bottle, bought)
   and the Demerara water (in the bottle, not bought). We told him, as `WISHLIST.md` records it, that *"Design had
   already proposed splitting it and raised a third case (bought, strained out)"*, and that the split is yours to draw.
   ⚠️ **That overstated you:** splitting it was our Round 44 §1's question, and the strained case, *"this leaves before
   the end"*, was ours there; your Round 45 §3 counted it among the flag's three jobs, the third being `don't cost
   this`. His "third option", in 4, is the strained case as we put it to him.
4. **12 Oct, 17:5x, with the count's screenshot:** *"Okay. Well, I also like the idea of the third option (for strained
   or otherwise separated ingredients. Let’s do that too. We can add them in the same popup box where “don’t order this”
   appears when you press and hold an ingredient."*
5. **12 Oct, 18:53:** *"Yes, sprite is a topper"* — to our question in f, below.

So: **three marks, all in the press-and-hold panel** — keep out of the bottle; don't buy; strained or otherwise
separated. `(ours)` Against your split:

| Sean, 12 Oct | Your Round 45 §3, from our Round 44 §1 |
|---|---|
| keep out of the bottle — the champagne, the Sprite | — none: it's the old app's job, b below |
| don't buy — the filtered water | *I have this already* |
| strained or otherwise separated | *this leaves before the end* |
| — | **`don't cost this`** |

**b · What the switch does today.** One field, `silent`, on cocktail and prep ingredients (`types.ts:410`, `:694`). One
row in the press-and-hold panel: `Don't order this` ↔ `Order this`, with `Not ordered` as its value when on and a basket
with a slash (`RowPanel.tsx:1028`–`:1030`; `NotOrderedIcon`, `icons.tsx:792` — your §28.4), flipped by
`RecipeEditor.tsx:699` and `PrepEditor.tsx:1356`.

- **On a cocktail:** off the shopping list (`calculator.ts:669`), and nothing added to a whole-batch total (`:640`). The
  amount struck through on the card (`RecipeCard.tsx:446`, `:455`) and on the editor's row (`IngredientRow.tsx:351`,
  `:362`). An unlinked marked row reads `In the recipe, but you don’t buy it — so it stays off the invoice.`
  (`RecipeCard.tsx:388`).
- **Still in the bottle, and on the printout.** Batching and the printouts never read it: grep
  `\.silent\b|\bsilent\s*[:?]|\{\s*silent\b` over `batchScaling.ts`, `scaleTo.ts`, `RecipeSheet.tsx` and
  `PrepSheet.tsx` finds nothing. A marked champagne takes its share of every bottle.
- **On a prep:** off the list when a cocktail pours the prep (`calculator.ts:453`); out of the prep's cost
  (`prepCost.ts:133`; its own row cost none, `:228`); any marked row stops a by-weight pour being worked out
  (`calculator.ts:568`, §56); the amount struck on the prep card (`PrepEditor.tsx:683`, `:692`).
- **The old app's button** was titled `Exclude from batch calculations` (`invoice-builder.html:6663` — the old app, in
  neither repo). By `WISHLIST.md`'s reading of it, the champagne stayed in the list at one drink's amount and was still
  bought; and its cost per serving leaves a silenced row out (`_getCocktailCostPerServing`, `:7051`–`:7052`). Your §9.3
  renamed it `Not ordered` — *"The user's concept is we don't buy this for the job"* — and your §28.4 kept one word:
  *"The buying is the fact; the cost is a consequence."*

**c · His French 75 — on SAMPLE amounts, not his saved recipe.** 1 oz gin, ½ oz lemon, ½ oz simple, 3 oz champagne,
batched to 750 ml by the app's own arithmetic (every amount × the batch ÷ one drink's total):

| 750 ml | Gin | Lemon | Simple | Champagne | Drinks |
|---|---|---|---|---|---|
| Today | 150 ml | 75 ml | 75 ml | 450 ml, in the bottle | about 5 |
| What he asks | 375 ml | 187.5 ml | 187.5 ml | 3 oz a glass — about 1½ bottles | about 12.7 |

**d · His two answers.** Our questions, word for word. **The recommendations in them are ours; his "yes" adopted them.**

1. *"Do you still buy the champagne through the invoice? I'd say yes: it stays on the shopping list, it's just kept out
   of the bottle."*
2. *"On a batch printout, how should the champagne show? I'd show "3 oz a glass" plus how many bottles the batch needs,
   e.g. "about 1½ bottles for 12–13 drinks"."*

Sean: *"Yes to both of questions. And Build the count."* So the topper is **bought** — on the shopping list, and so on the
invoice — **kept out of the bottle**, and the card and the printout show it **per glass, with the bottles the batch
needs**. ⚠️ **Not asked:** whether it counts in the drink's cost.

**e · The count you asked for.** Your Round 48 §4: *"Count the rows currently marked `silent`, split four ways … And one
number on top: how many marked rows would change a buy-list figure if the flag stopped removing cost."* Your Round 52:
*"Round 50 raised its stakes: the flag now also stands between a partial-cost recipe and a stated rate."* Ours to build
(our Round 67 §B6); your Round 67 C8: *"Held for the count, as you said."*

- **Built** §207 (`ac612e5`), reviewed (`9dde1b8`), live by 16:49:51: `/debug/dont-order`, listed in Settings › General ›
  Developer tools as `Don't order this — how you use the switch`. It reads his cocktails, prep recipes and products once
  and writes nothing — proved through the real `sync.ts` against a fake server, the device's own storage unchanged,
  every key. Its words are ours, and it says so.
- **How each number is made — the app's own code, nothing copied:**
  - **1 · Unit and product disagree:** the app's costing (`lineCost`) can't turn the amount into its product's money. A
    product with no price is tried on a copy as if it had one, so the units are judged, never the missing price. A
    cocktail's pour of a prep: the real calculator decides. Split by the review: a weight against a volume (the
    Demerara-water shape, and the only case the app itself calls *"its unit and its product disagree"*:
    `prepCost.ts:409` says it only for a `by-weight` row, set at `:184` when weight and volume cross), and some other
    unit the app can't use.
  - **2 · In a prep poured by weight:** a cocktail pours the prep by weight while it makes a volume, or the reverse —
    §56's population, on the calculator's own path.
  - **3 · Strained out:** never a number — only he knows what he strains. The cell reads `Needs your reading`; a guess
    from names (33 whole words: ice, husk, peel, tea…) is said as a guess.
  - **4 · The rest:** none of the above.
  - **5 · A topper in a cocktail — a guess:** a cocktail row whose name or product's name holds champagne, prosecco,
    cava, crémant, brut, sparkling, spumante, lambrusco, soda, seltzer, tonic, ginger beer, ginger ale or cola, or whose
    unit is written `top` (`report.ts:153`–`:156`, `:164`). **It missed the Sprite:** it looked for "soda", not brands.
  - **Your number:** the real shopping-list calculator, run twice for each mark — as saved, and with only that mark off,
    on a copy — at 100 guests for 4 hours, whole packages off so rounding hides nothing. A line the list can't work out
    and a prep no cocktail pours are counted apart.
  - **Round 52's:** the real `prepCost`, with and without each mark; stated → partial counts.
  - **The review fixed three miscounts before he read it**, two in group 1: a topper saved with no amount fell in 1 (now
    counted apart, untested); a by-weight pour of a prep fell in 1 when the list can work it out (the calculator decides
    now); 1's note called every row the Demerara shape (now split).
- **Read on his iPad at 17:50** (the top, one screenshot) **and his iPhone at 18:40–18:41** (the rows). As transcribed:

| | |
|---|---|
| Marked `Don't order this` | **5** — 1 on cocktails, 4 on prep recipes, in 5 recipes, of 14 cocktails and 9 prep recipes |
| 1 · Its unit and its product disagree | **5** — 4 a weight against a volume, or the reverse (the Demerara-water shape); 1 some other unit the app can't use |
| 2 · In a prep poured by weight | **0** |
| 3 · Strained out | **Needs your reading** — no marked row has a name that suggests it |
| 4 · The rest | **0** |
| 5 · A topper in a cocktail — a guess | **0** |
| Your number: would change the shopping list without the mark | **0 of 5** — 2 more would only add a line with no quantity; 3 are in a prep no cocktail pours |
| Round 52's: keeps a prep's cost stated | **4** |

- **The five rows:**
  1. **Cocktail · Orange Crush — Sprite, 1.5 oz** (product: Sprite · 10/pk) — group 1, *"a volume against a product
     priced each"*; without the mark the shopping list *"only adds a line with no quantity"*.
  2. **Prep · Cane Simple Syrup — Water, Filtered, 615 g** (product: Water, Filtered · 1 L · Bottle) — group 1, the
     Demerara-water shape; no cocktail pours this prep; without the mark the prep's cost turns partial.
  3. **Prep · Demerara Syrup 1:1 — Water, Filtered, 615 g** — the same.
  4. **Prep · Simple Syrup 1:1 — Water, Filtered, 615 g** — the same, but a cocktail pours it: without the mark the list
     only adds a line with no quantity.
  5. **Prep · Simple Syrup 2:1 — Water, Filtered, 410 g** — the same as 2.

**Your rule, for this result** (Round 48 §4): *"If (1) is more than a handful, the split is three ways and `don't cost
this` ships first, because it is the meaning he is actually using. If (1) is near zero, the workaround is not yet a
habit and the split is the two ideas Round 44 §1 named. Either way every existing marked row needs a reading, and the
count decides whether that is a migration or a conversation."*

**f · Reading the five.**

- **The four waters: "don't buy"** — ours, from his own words, 20 Sep: *"Filtered water is a good example because it's
  something that I virtually never need to buy."* He hasn't been asked row by row. They are Round 52's 4: today the mark
  keeps those four preps' costs stated.
- **The Sprite: "keep out of the bottle"**, by his word. Our question, word for word: *"is the Sprite in the Orange Crush
  a topper, meaning it goes in the glass and not in the batch bottle? I'd say yes, since it's fizzy, just like the
  champagne."* Sean: *"Yes, sprite is a topper"*. It's the new mark's first row; nothing marked today is a champagne.
- **Strained:** none, so it starts empty.
- `(ours)` **(1) is 5 — every mark he has; read narrowly, a weight against a volume, 4.** The workaround is his habit.
  Five rows, each now read, is a conversation, not a migration.

**g · ❓ Please draw.** New parts: two marks never drawn — keep out of the bottle, and strained — and today's one row
becoming three (`14C` draws that row, `Don't order this`; §28.4 its glyph); and a topper's per-glass line on the card
and the printout, never drawn. **Checked:** `Invoice Builder - iPad.dc.html` and every `Round NN - *.dc.html` in the
handoff, searched for *topper*, *strained*, *per glass*, *out of the bottle*, *champagne* — none draws either mark or
the line. **Nothing is built for §1 until they are**; the switch works as it did.

1. ❓ **Their names, glyphs and the panel.** Today it's one row (b). Sean: *"We can add them in the same popup box"*.
   Three rows, each on and off by itself? What words, what glyphs? The basket with a slash says "won't buy" (your
   §28.4, against 19D's plain basket for *buy separately*); a topper and a strained row have none.
2. ❓ **Two on one row?** `(ours)` A soda water he already has, topped per glass, is out of the bottle and not bought. Can a
   row carry two marks? Is any pair impossible — out of the bottle and strained?
3. ❓ **The row and the card.** Today the amount is struck — §28.4: *"strike the QUANTITY and the UNIT … What is excluded
   is the purchase, and the purchase IS the quantity."* A topper is bought, so a struck amount would say it isn't. How
   does each mark read on the editor's row and on the card — and the unlinked row's sentence (`RecipeCard.tsx:388`),
   which says *"you don’t buy it"*?
4. ❓ **The topper's per-glass line**, on the card beside the batch sizes and on the printout (`RecipeSheet.tsx`): *"3 oz
   a glass"* plus the bottles the batch needs — *"about 1½ bottles for 12–13 drinks"* — our words, his yes. Where, and
   in what words?
5. ❓ **What each does.** Please fill or correct:

   | Mark | The bottle | The shopping list | The cost |
   |---|---|---|---|
   | Keep out of the bottle | out — the rest scale to fill it | in — his yes | ❓ not decided |
   | Don't buy | in — the Demerara water is in the syrup | out | ❓ out today |
   | Strained or otherwise separated | ❓ in the making, out of the yield? | ❓ in | ❓ in? |

   - **A topper in the drink's cost isn't decided: Sean wasn't asked.** The old app left a silenced row out of a
     cocktail's cost per serving (b).
   - **Strained** `(ours)`, from our Round 44 §1 and your Round 45 §3: bought and costed, out of the bottle's yield?
     Today any marked row stops a prep's by-weight pour (`calculator.ts:568`), because a strained row's weight would
     count toward the yield (our Round 44 §1: a third less sugar bought). With its own mark, does a strained row's
     weight leave the yield, so the pour can be worked out again?
   - **Cocktails only?** Is "keep out of the bottle" a cocktail's mark, or can a prep have one?
6. ❓ **How today's five move.** The four waters → don't buy; the Sprite → keep out of the bottle. **Does the Sprite stay
   bought, as the champagne does by his answer?** `(ours)` Yes — but he was asked only about the champagne. Bought, the
   Sprite joins the shopping list as a line with no quantity: the count says so, since 1.5 oz can't be worked out
   against a 10-pack priced each. `(ours)` That holds until the product says how much a can holds. Moved by the app, or
   shown to him first?
7. ❓ **The label, and `don't cost this`.** His words, 17 Sep (our Round 67 §C8): *"In the ingredients section, when I
   right click or tap & hold, the “don’t order this” option is not the best wording. We need something that also
   indicates that it’s not costed as well."* From the same list, never in this file before (grep `regardless of what I
   price`): *"I’m aware that we have a “don’t order this” button, but that is for specific cases at my discretion. The
   app should still be able to do the costing calculations regardless of what I price an item."* Your §28.4 dropped
   *"excluded from the cost"* because *"saying both invites the question of whether one could be true without the
   other"* — and with three marks it can: a topper is bought and its cost isn't decided.
   - **Is `don't cost this` its own mark, or does it ride with "don't buy"?** Your rule names it and ships it first;
     Sean's three don't name it.
   - **The stake:** today the four waters' marks keep four preps' costs stated. Counted, each water's 615 g or 410 g
     against a bottle sold by the litre turns its prep's cost partial (the count's Round 52 number; Round 43's
     diagnosis) until the row and its product agree — your Round 45 §3: *"the row it silences is one he could fix in
     ten seconds if the sentence said so."*

### 2 · The press-and-hold panel in the recipe editors (§209, LIVE) — ❓ two calls

**a · What was wrong.** Sean, 12 Oct: *"Also, check my screenshot of the edit menu. When I press and hold, the popup
appears in a wonky place (too low). I almost didn’t find it a few times I looked."* His photo stays with implementation.

- **It was never placed.** From §28 (`ec39691`, 28 Aug) both editors drew `RowPanel` bare, inside the sheet's scrolling
  body after the Ingredients card; every Builder mount wraps it in `RowPanelOverlay`. So it fell 20 under the
  Ingredients card whichever row was held, at the sheet's left edge, and pushed Instructions down 282. His photo, as
  `WISHLIST.md` transcribes it: *"the Daiquiri's Lime Juice row; the menu opens well below the row, over
  Instructions"*. Chrome at 1600 × 1115, 3 rows, scrolled, row 2 held: its top 168.0 under the held row. On a long
  recipe it was off the screen altogether. The prep editor had the same fault.
- ⚠️ **Ours, and old.** He wrote by 17 Sep: *"We also need to fix the card that pops up. It doesn’t seem to operate by
  the same rules as the others we’ve worked on with Design."* (`WISHLIST.md`, in git since `b4bc09f`). Our device check
  3.4 described the fault on 22 Sep and was marked *"Not needed any more — skip it."* on 27 Sep, when `WISHLIST.md`
  called the placement yours to confirm. It never reached you, and our Round 70 §2 described `RowPanelOverlay` as *"for the
  Builder's two mounts only"* without saying where the editors' panel went.

**b · What §209 did** (`d976762`; review `1bf91a7`) — **our reading; no frame draws it.** Both editors now put the panel
in `RowPanelOverlay over="window"` (`RecipeEditor.tsx:683`, `PrepEditor.tsx:1339`): the template panel's placement
(§157), which you confirmed — our Round 76 §1 #23, *"The template panel is centred on the window"*; your Round 76 §4
#23, *"✅ Right."* Nothing new is drawn: the same overlay, no scrim, the template's classes.

- **Checked:** `14C` (`Invoice Builder - iPad.dc.html` line 8643) draws the panel on its own, two specimens, nothing
  behind them; `14C·2` (line 8753) is its markup. §10.3 sets content and order and *"Supersedes §5.2 / 9B"*, whose *"a
  contextual menu anchored to it"* (`HANDOFF.md:897`) are `HANDOFF.md`'s only words on placement. Round 69 §4.2: *"The
  row panel centres on the sheet's column, not the screen. Horizontal centre = the centre of the column between the rail
  and the window's right edge; vertical is unchanged."* `(ours)` That is the Builder's column: the editors open from the
  Library (`CocktailLibrary.tsx:476`, `PrepLibrary.tsx:452`), which has no rail (grep `SourceRail|data-sheet-column`
  finds neither in `src/components/library` or the Library's pages). The editor is a 672 sheet centred on the window
  (left edge 464 at 1600), so the window's middle is the sheet's too. Round 69 #16 (*"A row panel inside an editor goes
  on the focus stack"*) is behaviour only.

**c · Measured** — headless Chrome, `/style/panelcheck`, the real editors, a touch hold. The panel is 420 × 262.3.

| Cocktail editor | Before | After |
|---|---|---|
| 1600 × 1068, row 2 of 3 | x 464–884, top 827.8, 35% on screen | x 590–1010, y 402.9–665.1, whole |
| 8 rows, row 2 | top 1137.8, 0% | the same box, whole |
| 12 rows, the last held at the sheet's foot | 0% | the same box, whole |
| 1600 × 1115, dark, scrolled, row 2 of 3 | top 661.1, 168 under the held row | y 426.4–688.6, whole |
| 1200 × 1468 | x 264–684; the last of 12, 0% | x 390–810, y 602.9–865.1, whole |
| 390 × 844 | 0% | x 16–374, y 290.9–553.1, whole |
| **Prep editor**, never measured before | 30%, 0% with 8 rows, 0% at 390 | the same boxes, whole |

- **The review, from scratch:** 142 holds, 16 more at the sheet's foot and 8 over the menu's rows, at 1600 × 1068, 1200
  × 1468, 1568 × 1168, 1168 × 1568, 1600 × 1115, 390 × 844, 1024 × 768 and 1023 × 768, light and dark. Every hold: the
  panel's middle is the window's to 0.0 both ways, nothing draws over it, and opening it moves nothing.
- **New with centring: it opens under the finger.** Held over each of its four rows in turn, the click a lift makes is
  eaten by the press-and-hold guard (§127): the panel stays open, the recipe unchanged; a deliberate tap then acts.
  Chrome's lift; Safari's isn't measured (22.7).
- Escape, a tap outside and the sheet's Close each close the panel only. The Builder's panels, re-measured, are
  unchanged: a line's and a group's 890–1310 at 1600 and 690–1110 at 1200; a template's 590–1010 and 390–810; each
  16–374 at 390.
- New check `check-panel-place` (82 checks): 17 fault injections, 15 red, 2 controls green (a bare `<RowPanel>` named
  only in a comment; a specimen under `/style`). The review closed a hole — a bare panel imported under another name
  passed it and `check-edges` both — with 23 more: 19 red, 4 controls green.

**d · ❓ Your two calls.**

1. ❓ **Centred, or anchored to the row?** Centred, it covers the held row at most sizes the review measured: at 1600 ×
   1115 the panel (y 426.4–688.6) covers rows 2 and 3 of a 3-row recipe, the held one among them, in both editors. The
   Builder's centred panels can do the same. The panel's title names the ingredient. The guard above is why a lift does
   no harm there; it isn't a ruling on where the panel sits.
2. ❓ **The blue ring.** The editors' panel goes on the focus stack (your Round 69 #16), which focuses its container on open
   (`tabIndex={-1}`, `RowPanel.tsx:630`; `focusOwner.ts:305`), and Safari can draw its own ring round it — `WISHLIST.md`:
   *"Safari can draw its own blue outline round it, which nothing rules."* Chrome draws one too after a right-click
   (`auto`, rgb(0, 95, 204) light, rgb(153, 200, 255) dark), and sometimes after a touch hold. The app draws nothing of its own there
   (`RowPanel.tsx:632`; grep `outline|focus` in `globals.css` finds one comment, about inputs). Your focus rule covers
   fields only — Round 69 §7, *"The field draws the app's focus, not Safari's."*; Round 70 #1, *"`--accent` on focus, no
   outline"*. The Builder's panels, `Sheet` and `ConfirmDialog` are focused the same way. **Inferred, not measured:**
   before §209 the panel sat inside the sheet's scrolling body, which clips (`overflow-x` computes `auto`); out of it, a
   ring Safari draws shows on all four sides. WebKit isn't installed here. Should a focused panel, sheet or confirm box
   draw any ring — and if so, which?

### 3 · Readings — told

1. **The count page's limits.** The trash isn't read. Groups 3 and 5 read names only. A product marked "not costed"
   isn't judged for 1, and a row with no amount isn't tested. At 390 the summary runs past one screen; at 940 × 760,
   with every optional sentence at once (added by hand, not data), it runs 18 past; at 1126 × 964 — an approximation of
   the page's room at More Space, his setting — it fits.
2. **A space the build drops.** Next 16's compiler drops the space between a closing bold tag and the text after it when
   that text holds an entity — a curly apostrophe, a dash. The count page read `On a prep recipethe row` until §207 wrote
   the space out; `/debug/rates` has it live: `Rounds 71, 72, 73 and 80.A product card`. Found on two lab pages; other
   screens not checked yet. Ours to find and fix; not done.
3. **§207's list missed one reader:** `/debug/library`'s cost scan skips marked rows too (`page.tsx:292`, `:307`), a lab
   page. An invoice line's `silent` (`types.ts:1100`) is the retired hide mark — a different flag, not counted.
4. `(ours)` **Your §9.3 defines the flag as** *"excluded from batching and procurement"*; the rebuild wired procurement
   only (§1 b's grep). Sean's French 75 asks for the batching half back, for one mark — not for the water, which goes in
   the bottle.
5. **The old app shares these rows and keeps only `silent`.** It loads and saves `limbo_cocktails` and
   `limbo_prep_recipes` in the same table (`invoice-builder.html:1726`, `:1794`; this app's keys, `types.ts:2989`,
   `:2991`), and a cocktail saved there is rebuilt from six fields (`:7228`–`:7229`). Anything else on a row — a link to
   a prep recipe (`prepRecipeId`, `types.ts:451`; grep finds it 0 times in the old app), or any new mark stored beside
   `silent` — goes when he saves a cocktail there. How the marks are stored is ours (your §28.4: *"The field stays
   `silent`"*); told because it bears on §1 g #6.
6. **A topper's amount stays one drink's.** Whether it grows with a bigger glass is the per-glass calculator's question
   (`WISHLIST.md`, 7 Oct, not triaged yet). Not this round.

### 4 · Only his iPad can say

- **22.7** (live since 19:17:07): hold an ingredient in both editors — the menu in the middle, whole; letting go picks
  nothing; a tap outside closes only the menu. **Not the ring:** 22.7 tells him a thin blue outline is Safari's, is
  with you, and needs no report — so his answer won't carry it.
- **3.5:** Shift+F10 on the panel. Still yours to wait on.
- **19.1 and 21.2:** one page, one screenshot. You're still waiting on both numbers.
- **21.1 and 22.3, 21.4–21.6 and 22.1, 22.2, 22.4, 22.5:** as Round 81 §3. None done yet.
- **22.6, the count: done**, 17:50. 122 of 150 checks are still to do.

## What I need back

1. ❓ **§1 first — the drawing.** The three marks' names and glyphs in the panel (#1–#2), on the row and the card (#3),
   and the topper's per-glass line on the card and the printout (#4); then #5's table, #6's move, and #7 — the label,
   and whether `don't cost this` is its own mark.
2. ❓ **§2's two calls:** where the panel sits, and the ring. It's live as our reading, and it can move.
3. **Round 81** (row AW): still open — five stops and 13 calls.

---

## 🔴 ROUND 81 — your Round 80 is built (§199–§205, each reviewed), in your order: the comma first, the word-pair editor, old completed invoices read as their paper, Round 78 §0 d's five, Sean's whole-cent rule, your calls, and §14.1's end rule on both papers — §199–§202 LIVE, §203–§205 go up with this round; ⛔ five stops: Event details' guest box, the trash guard, Prep's `Needs a cost`, #48 (10 fit, not 11 — our reading was wrong), and the end rule left on a sheet of its own; and the readings


**implementation → Design, 12 Oct 2026. Branch `main`, app at `42f6ad2`** — the code is `0afe219`'s (§205 · review), the
last commit to touch it. `42f6ad2` (§206) is records only: `git diff --stat 0afe219 42f6ad2 -- src scripts package.json`
is empty. **Every `file:line` below is at `0afe219`**, which you can read on GitHub once this round ships.

**Live, read back by curl, no browser.** `git ls-remote origin main` reads `e8f8a1c` (12 Oct, 15:04).
- **§199, alone, 00:44:13** — `16c76b0`. Your §2: *"Please build it before anything else in this round."* Met first. The
  live build id changed to `yVsOi4qjd39DSpSUMHJVD` by 00:48:14, and the four chunks that carry the new reader went from
  404 to 200, each byte-identical to the local build.
- **§200–§202, 11:36:40** — `e8f8a1c`. The build id changed to `SdXUUu3PG75r1sCdwhVi9` at 11:40:20. At 15:05 the live
  `/style/papercheck` script (`3yrxad3_1wm43.js`) carries §201's fixture `norecordline` and not §203's `pastcent`.
- **§203–§206 are on implementation's Mac.** They go up when this round ships (`npm run ship` pushes both repos). Until
  then `origin/main` reads `e8f8a1c`.

**How it was measured.** Headless Chrome 154 on the verify build (`SHIP_VERIFY=1`), the app's built CSS and Spectral,
light and dark, at 1600 × 1068, 1200 × 1468 and 390 × 844. PDFs printed with Chrome's `printToPDF` on Letter, A4 and
4 × 8 in, read back with PDFKit. Node ran the real code against stand-ins (a fake server, a fake router, an `en-US` and a
`de-DE` device through `LC_ALL`), never the database. **No sign-in, Chrome not Safari, and no iPad.** Each batch was
followed by a review that assumed it wrong, re-took its numbers and added fault injections of its own; six of the seven
also re-ran the batch's (§199's ran only its own). Six found a fault or a hole in the checks and closed it; §201's found
none and corrected two comments. Final build at `0afe219`: exit 0, **7,682 ✓, 0 ✗**; 80 check scripts on disk and 80 in the
build, compared name by name (§199 added `check-separators`, §205 `check-end`).

Your reply is `ROUND-80.md` and frame `Round 80 - the word pair.dc.html`, ids `r80a`–`r80d`, in the bundle's
`ROUND-81/`. Each stop cites the ruling it rests on, and names the frame and lines it checked where a frame applies;
#1, #3 and #4 rest on prose.

**Sean, 12 Oct:** *"Build."* and *"The sentence looks fine."* — **Build** for your Round 80; the sentence is your §1 #5's,
put to him as you wrote it.

### 0 · Your Round 80 — received, and built in seven batches, in your §4's order

**a · §199 (`13cf3a6`; review `16c76b0`): your §2 #30 and #39, the comma. LIVE.**

- **One reader**, `readNumberText` (`numberText.ts:187`), takes the separators from `Intl` — the device setting the
  app's dates already follow. On his US iPad a comma groups and is ignored; where a comma is the decimal, it stays the
  decimal. At rest each box shows its figure in the device's decimal mark with no grouping (`numberBoxText`, `:247`), so
  on his iPad every box rests byte for byte as before.
- **Every box, before → after on his iPad.** 22 boxes, plus the 3 batch boxes that also take a unit:

  | Boxes | Before | After |
  |---|---|---|
  | The 11 on the shared hook: Price, package qty, size, the override, cocktail and prep ingredient qty, prep yield, ABV/Brix/acid, the calculator's, guests, hours | `1,700` showed `1.700` and stored 1.7 | shows `1,700`, stores 1700; Price rests `1700.00` |
  | Settings › Estimates' percent | `1,000` saved 1% | 1,000% |
  | The Estimate's money boxes (2) | `1,700` was $1.70 | $1,700 |
  | The Estimate's guest boxes (2) | `12.5` wrote 125 guests | writes nothing after the 12; shows 12 on leaving |
  | The tax-rate sheet, Settings' default rate | `6,625` was no rate, and Settings showed `Saved` | 6,625%: the sheet refuses it as over 100; Settings saves it as the default — it has no cap at 100, and never had (`6625` typed saved before §199 too: `BusinessForm.tsx:448`) |
  | Archive and delete days | `1,000` saved the default (60, 30) | 1,000 days |
  | Export volume, the cocktail and prep batch boxes | unchanged on his iPad | a German `1,5 L` is 1.5 L, not 15 L |

- **Money:** on his iPad, 3,024 figures rest in their boxes exactly as before and read back as themselves; 538 texts
  typed without a comma read exactly as before. The only other texts that now read differently are `1e3`, `0x10` and
  `Infinity` in the tax and days boxes. The comp's worked example is unchanged.
- 🔧 **Your count — stored prices under $10 that came from a box with a comma — can't be had.** No record keeps what was
  typed: price history keeps the old price, the new one and the time; the save queue and the set-aside list keep values;
  Undo keeps whole invoices; the health notes keep repairs. `1,700` and `1.7` typed leave identical records. The one
  possible trace, three decimals from something like `1,299`, was rounded away when he left the Price box. Nothing was
  read from his data.
- **The review corrected our own record.** §199 said `6,5` in the tax sheet is refused. It's 65%, under 100, so the sheet
  takes it and Apply puts 65% on the invoice; before §199 it was refused. It also closed a hole: the box count knew one
  spelling of a number box, so `inputMode={"decimal"}`, `inputMode='numeric'` and `type="number"` stayed green.
- New check `check-separators`: every number box counted file by file, so a new one fails until it's added; each box run
  as an `en-US` and a `de-DE` device; the stopped box held unbuilt. 28 fault injections, and 12 more in the review.
- ⛔ One stop: §1 #1.

**b · §200 (`b6ff14b`; review `034e6a0`): your §1 #1–#4 and §2 #29, `r80a`–`r80c`. LIVE.** Nothing stopped.

- **Every drawn string** was pulled from `r80a`–`r80c` and compared with the app character by character, curly quotes,
  apostrophes and `…` included (the review).
- `Your words` with no pair: your sentence, then `Add a word pair` as the list's last row. Nothing sits in the band after
  its label (asserted absent). A pair's name row is its door: the name, line two (short word · categories), ›.
- **The open pair** (`WordPairSheet.tsx`): 512 wide, 472 inside, every field 48 tall; each hint word for word; Save
  `aria-disabled` with `r80c`'s line above the footer; `Remove pair…` through `ConfirmDialog` with your words; a new pair
  opens on the categories that follow guests, titled `New word pair`, with no Remove.
- **#29:** a low above its high is refused under the box he's in, in the sheet and in place. `r80c`'s case reads `The
  high end can’t be below the low end’s 150%`, 8 under the high box, 13px `--danger`, 7.52:1 light, 4.59:1 dark. A stored
  pair with its ends reversed reads smaller then larger and is listed under *Fixed on load*; nothing is written on load.
- **#2:** the short word is stored. A new pair's fills from the name's last word until he edits it; a stored pair with
  none reads its name's last word, shown, never written. The Estimate sheet's line two reads `$2,400.00 on the invoice ·
  guests · drinkers · premium` on one line at 672 (row 61) and at 390. **#3:** one flag, off by default. **#4:**
  `FOLLOW_DEFAULT` (`estimateWords.ts:177`) is your eight; shown, never saved.
- **Money:** a pair's writes go to `limbo_estimates` only, and only the fields that changed. Run through the real `sync.ts`
  against the fake server: the comp's example and your §3 example unchanged after every write; a pair removed on his
  other device is not remade; loading old, reversed and corrupted pairs writes nothing.
- **The review fixed two faults.**
  - A refusal on a percent changed in place was worked out once, as he typed. Lite 130 was refused against Heavy's 125;
    Heavy was then raised to 140, and `The low end can’t be above the high end’s 125%` stayed — even after Lite's 130
    was written, under figures reading 130 and 140. It's now worked from the figures as they stand.
  - The open pair's Save re-read the follow list at Save. With a chip turned on from his other device while a pair was
    open, a pair holding Spirits and Rental Supply, saved untouched, wrote `categories: ["Spirits"]`. Save now keeps the
    list the sheet showed.

**c · §201 (`5b31f47`; review `0edb7bb`): your §1 #5 (b) and §2 #2. LIVE.** Prose only; no frame draws it.

- `completedFigures` (`printed.ts:450`) is still the one reader. With no record — the field absent, `null` or `[]` — it
  returns `legacyPaperCent` (`:330`), and nothing is written. That covers History's row and card, the footer, the paper
  printed again, and your §2 #2 places: the open-invoices list, the phone drawer, `Start from an invoice`, and the
  Builder's rows, bands and group rows.
- **Your §3 example reads $83.74 and $1,479.49 in every one of those places**; it read $83.75 and $1,479.50. The $1.005
  invoice reads $63.00 and $66.78.
- `legacyPaperCent` against the paper code itself at `d145f4c`, `6dcfe84`, `defd514` and `3ae7791` (15–28 Sep): 4,000
  random invoices, every line, subtotal, tax and total, 0 misses (the review). An invoice completed in that window shows
  what was printed for it.
- 660 random invoices drawn in all 8 places against the build before (`034e6a0`): every drawing of a live or reopened
  invoice, 3,960 of them, byte-identical (the review).
- 🔧 21.2's tile: `Completed before Sep 15`, after `With a record` (`RoundingView.tsx:203`). It's a floor — §2 #24.
- Your withdrawn *"Delete it once his data shows 0 left to fill"*: the comment saying so is struck and kept, and
  `check-printed` holds it struck.

**d · §202 (`77c31a5`; review `e8f8a1c`): our Round 78 §0 d's five, after #30 and §1 #1–#5, as your §4 asks. LIVE.**

- **Round 76 §6 #12:** Review's toast reads `Some lines have no cost — check them in the invoice.`, byte for byte, em
  dash included. Round 67 A1's send-gate string is unchanged and still held.
- **§6 #44:** `placeOptions` (`groupDoors.ts:202`) leaves a group's own typed category out of `Prints`.
- **§6 #46:** one query list, `@media screen and (width < 600px), print and (max-width: 5in)`. At 390, sideways scroll
  15 → 0 and the Item column 0 → 171–238. 600 and up, and Letter printing, unchanged. This closes our Round 80 §2 #58.
- **§5 #10's rest:** data health and `/debug/library` ask `hasPrice`; the "blocking a number" card stays on `getCost`.
- **The review closed one hole:** a rule written after the narrow rules, or a stronger one before them, put Qty and Unit
  back at 390 with every check green. An inventory now pins the six places those classes may be styled.
- ⛔ Two stops: §1 #2 and #3.

**e · §203 (`aa59394`; review `9c842cf`): your §3 #1–#6, Sean's rule.** Goes up with this round.

- **#6:** `money()` and `printMoney()` (`money.ts:149`, `:159`) round half up through `roundCents`: $1.005 → `$1.01`,
  $2.675 → `$2.68`, an override of $1.105 → `about $1.11/fl oz`. `check-money` holds `money(1.005)` at `$1.01` for live
  figures. **A completed invoice's Unit cell keeps its paper:** Complete stores `printed.units`, in cents, for billed
  lines, group members and comps. `unitFigure` (`printed.ts:394`) is the one reader; older records, fills and no record
  spell through `legacyPaperUnit` (`:368`), the old `toFixed(2)`.
- **#3:** `under $0.01`, one spelling, decided by one test (`roundsAway`, `money.ts:130`) that `money()`, the card and
  `/debug/rates` share. **#5:** the Price box saves half up. **#4:** the override rests at whole cents and shows his
  digits on focus. **#2:** two places; only `/debug/rates` changes.
- **#1:** the gate's row (`gates.ts:278`–`:282`): `Tonic's price is past the cent ($0.125), so 3 × $0.13 won't add up to
  $0.38 on the paper.` over `Set its price to whole cents in Products.` Data health lists every product priced past the
  cent (`dataAudit.ts:272`).
- **Money:** no Amount, band, subtotal, tax or total moves. 1,200 papers byte-identical outside the Unit cells. The new
  spelling against `toFixed` on 24.5 million whole-cent figures and sums: 0 differ (the review). Your two examples
  unchanged.
- **The review fixed one fault.** Complete → Ready to Send opens the gate while the invoice is still at Complete, so the
  gate read the OLD paper: `Bar hours's price is past the cent ($0.35), so 1.5 × $0.35 won't add up to $0.52 on the
  paper.` That's false twice: $0.35 is whole cents, and the paper the move makes reads $0.53. The gate now reads the
  paper the move makes (`gates.ts:278`).

**f · §204 (`431d04c`; review `2c0e98c`): your §2's calls.** Goes up with this round.

- **#3:** `completedComp` (`printed.ts:515`) — History's `Comped` row, the footer's `$X comped` and the print page's notes
  read the record; `printed.comped` from now on. A half-cent comp completed on the old cent reads `$8.02` in all three;
  the same lines as a draft read `$8.03`.
- **#4 (`r80d`):** strings and order as drawn; on a fixture, `$371.88 billed · 6.63% tax · $40.00 comped · $396.52
  total · 6 lines · 200 guests` over `Was $394.19 total`. Your two examples exactly: `Was $1,479.49 total`, `Was
  $63.00 billed · $66.78 total`. No Was line when nothing moved.
- **#12:** `Completed invoices with a record still to fill` (`RoundingView.tsx:208`), which asks the load's fill what it
  would fill, and reads 0 after one load.
- **#16, #17, #19, #52** as ruled. **#51** was already so (§197's `rangeText`), and is now asserted. **#28, #32, #44,
  #46** verified; nothing to change.
- **Money:** 1,500 invoices × 10 states against `9c842cf`: the papers byte-identical, every other figure the same. The
  comp differs in 154 drawings, each a completed invoice whose record holds a comp the old cent counted differently —
  your #3.
  The review: 6,000 invoices completed on this build, none made unreadable by `printed.comped`; 20 tampered comp
  figures, none misread.
- **The review closed one hole:** a blanket reduced-motion reset, and Tailwind's `motion-reduce:` on the pill's wrapper,
  each took the fade away with every check green.
- ⛔ One stop: §1 #4.

**g · §205 (`7a287cc`; review `0afe219`): your §1 #6, `HANDOFF.md` §14.1, frame `18a` (read in full).** Goes up with this
round.

- **The invoice:** `End of invoice № 14` left, `3 categories · 24 items` right, after `Supplies only. …`. **The Estimate:**
  `End of estimate`, `5 categories`, after its closing sentence. One part, `EndRule`, shared the way `Letterhead` is: 26
  under the closing line, a hairline, the words 8 under it, 9pt grey, tabular figures. The hairline and the grey compute
  equal to the running head's.
- `· page 2 of 2` stays withdrawn: absent from the source, from the stylesheet (no `counter(page)`, no margin box) and
  from every printed PDF — the word `page` is on none.
- The invoice's totals, closing line and end rule are one block print never splits (`.doc-foot`, `globals.css:942`),
  the Estimate's `.est-end` shape. Nothing moves on screen.
- **Money:** 1,600 invoice papers against the build before (`99eeaa1`) — live, no record, archived from Complete,
  completed on this build, with tampered numbers and rates: the same bytes but the end rule, its block and one class,
  every figure the same. 14 of 14 Estimate fixtures the same but the end rule. **A completed invoice printed again gains
  the line:** every figure the same as the PDF sent, not every byte.
- **The review closed one hole:** `check-end` read only the first print block, so four ways of undoing or hiding the end
  rule stayed green. It now walks the whole stylesheet.
- ⛔ One stop: §1 #5.

**h · Your "What I need back."**

- #1: the comma first, live alone at 00:48. The count can't be had (a).
- #2: in your §4's order: the editor and #4 (§200); #5 with §2 #2 (§201); our §0 d's five (§202, *"after #30's comma fix
  and §1"*); §3 (§203); §2's calls (§204); §1 #6 last (§205).
- #3: **Sean, on your §1 #5 sentence: *"The sentence looks fine."*** His whole answer. 21.2's count isn't read yet. On
  §1 #4's chips there's no word from him yet; his account follows your eight until he taps.
- #4: 19.1, 21.1, 21.2 and 21.4–21.6 aren't done yet (§3).
- 🔧 **`HANDOFF.md:64`** is in your bundle, not in either repo — `/design-imports/*` is ignored in `limbo-app`
  (`.gitignore:44`), and `limbo-design` has no `HANDOFF.md` — so we can't correct it. With §205 its `done` becomes true
  when this round ships, but for §1 #5 below.

### 1 · ⛔ Five stops

1. ⛔ **Event details' guest box** (your §2 #30, #39: *"This applies to every number box"*).
   - It's a number box (`EventDetailsSheet.tsx:238`, `inputMode="numeric"`), but it stores the words he types, as text:
     `setBoth("guests", "guests", e.target.value, "Guest count")` (`:235`).
   - Three places read that text with `Number()`: starting from a template (`Builder.tsx:218`), the calculator's starting
     count (`CalculatorSheet.tsx:138`) and the Estimate's count of the invoice (`estimateSheet.ts:382`). On his iPad
     `1,200` there gives **no count** in all three, never 1.2, so no money moves.
   - Reading the stored words in the device's marks would change counts already saved, with nothing typed: an `80,100`
     written as "80 or 100" would become 80,100 guests. We can't count those without reading his data.
   - **Built:** nothing. `check-separators` §B holds it unbuilt.
   - ❓ Store a number from new typing and read the old words as today? Read the old words in the device's marks too?
     Or leave it as text?

2. ⛔ **The trash guard** (Round 76 §3 #4, `ROUND-76.md:79`: *"Restore isn't offered on a trashed copy while a newer
   live copy exists. The trash row reads `A newer copy is in History` and offers `Delete for good` only."*). A new state
   of a part, with no frame.
   - Checked `Round 76 - the four stops.dc.html`: `r76a` (the footer), `r76b` (Add lines), `r76c` (the group's words) and
     `r76d` (the Changes-not-applied sheet). None draws a trash row. `Delete for good` is drawn only as the Empty-trash
     confirm's button (`Round 68 - his iPad.dc.html` lines 434, 444). `newer copy` is in your words once
     (`ROUND-76.md:79`); the bundle's `REQUESTS.md` has it three more times, all ours (lines 309, 837, 1295).
   - Not ruled:
     - (a) where `A newer copy is in History` sits on the row;
     - (b) `Delete for good` in Restore's place: in `r68d`'s Empty-trash classes it measures 146.67 wide at 390, against
       Restore's 86.38 × 44;
     - (c) whether it confirms, and the words. The existing confirm says `It can’t be opened, exported or restored after
       this.`, which is untrue while the newer copy stays in History;
     - (d) the card the row opens still offers Restore (`InvoiceCard.tsx:306`–`:313`) and says `Restore it to open or edit
       it.` (`:385`, `:391`);
     - (e) what "newer" means. The only stamp is `savedAt`; equal stamps are the same copy; auto-archive changes a live
       invoice's stage without moving `savedAt`;
     - (f) the library's three trashes have the same two-copy case, and `in History` doesn't fit them.
   - Safe either way: `purgeInvoice` (`invoices.ts:92`) already deletes only the trashed copy when a live one exists.
   - **Built:** nothing. ❓ Please draw the row, its button and its confirm — or rule it out.

3. ⛔ **Prep's `Needs a cost`** (Round 76 §5 #10's rest; `PrepLibrary.tsx:129`–`:130`, `:177`).
   - The filter asks whether a RECIPE can be costed (`prepCost`, through its ingredient links). `hasPrice` asks it of a
     product.
   - Your §5 #12 (`ROUND-76.md:126`, *"Right on both. Amounts are money."*) counts a free ingredient's $0.00 in a prep's
     cost, so a prep holding the free water is costed. Following the prep's own card already leaves the filter as it is.
   - Flagging a prep whose ingredient's product has no price would be a new definition.
   - **Built:** nothing. ❓ Leave it — our reading is that it already follows its card — or define the new flag?

4. ⛔ **#48: 10 categories fit a Letter page with the totals, not 11.** Our Round 80 §2 #48 was wrong, and your `✅ 11.`
   (`ROUND-80.md:93`) rests on it.
   - §197's review measured `#twelve` — 11 rows on page 1 with NO totals — and read it as 11 fitting with them.
   - Printed with `printToPDF` and read back with PDFKit: `#ten`, 1 page (10 rows and the totals); `#eleven`, 2 (10
     rows, then the 11th with the totals); `#twelve`, 2 (11, then 1); `#thirteen`, 2 (12, then 1). Page 1 holds 12 rows
     without the totals, and the last row always moves to the next page with them.
   - ⚠️ **A4:** §204 said "Letter and A4 alike", but it printed with `preferCSSPageSize: true`, which gives Letter
     whatever is asked (an A4 request came back 8.5 × 11 in). §205 measured real A4: Chrome lays out the Letter page and
     scales it to 97.3%, so A4 breaks where Letter does, and `#eleven` still takes 2 A4 pages.
   - Nothing in the code sets the number; it's what the rows, type and margins leave room for. 11 would need a change to
     how the paper looks, which no frame draws.
   - **Built:** nothing. The comments that said 11 fit are corrected in place, and `/style/estimatecheck` gains `#ten`
     beside `#eleven`.
   - ❓ Take 10, or change the paper so 11 fit? If the paper, how?

5. ⛔ **The end rule, left on a sheet of its own** (frame `18a`, `Invoice Builder - iPad.dc.html` line 6999: *"It gets
   `break-before: avoid-page` with the totals, so it can't strand itself on a sheet of its own — which would be a page
   that says the invoice ended and shows nothing that ended."*; `HANDOFF.md` §14.1; `ROUND-80.md:70`).
   - **Built as specified:** `.doc-end { break-before: avoid-page }`, and the totals, closing line and end rule in one
     block that never splits, `.doc-foot { break-inside: avoid-page }` (`globals.css:942`–`:947`).
   - **Measured in Chrome**, each paper pushed down a page in 4px steps and printed. Where the line table itself breaks
     across the last sheet, the last sheet holds **the closing line and the end rule, with no figure**: № 14 in 24 of 241
     Letter positions and 26 of 181 on 4 × 8 in, and № 14 then takes 3 Letter sheets, not 2. On the Estimate it's the
     end rule alone: `#eleven` in 15 of 181 on 4 × 8 in (§205 counted 20 by another method), and 0 of 241 on Letter.
   - **Before §205,** the closing line alone did the same on № 14 in 16 of 241 and 12 of 181. № 14's Subtotal split from
     its Total in 8 of 241 and 8 of 181, before §205 and after.
   - **The alternative, measured:** `break-before: auto` on the totals' blocks gives 0 strands and 0 splits, but the
     totals then open a sheet with nothing above them — 61 of 241 (№ 14, Letter), 34 of 181 (№ 14, 4 × 8 in), 70 of 181
     (`#eleven`, 4 × 8 in), and 53 of 181 (4 × 8 in) even on `#worked`, a one-page invoice. That's worse by count.
   - Short papers hold: `#worked`, `#norecord`, `#pastcentdone` and `#castellano` print the end rule with the Total in every
     position swept.
   - Safari wasn't measured, and nothing was printed on an iPad.
   - ❓ Which failure to accept, or another rule? It's a visual call no frame makes.

### 2 · Readings — built the plainest way. ❓ marks a call that is yours; the rest are told. `(ours)` marks a string no ruling wrote

**The comma (§199)**

1. ❓ **A comma tapped for a point now multiplies.** On his iPad's number keys `.` and `,` sit side by side. Price `12,99`
   is $1,299.00 (it was $12.99); an ingredient's `0,75` oz is 75; tax `6,5` is 65%, the sheet takes it and Settings saves
   it as the default (it used to be refused). Settings takes `6,625` too, as a 6,625% default, because it has no cap at
   100 (§0 a). Each shows on screen once he leaves the box. It follows from *"is ignored"*. Only a stricter rule — a comma
   only between groups of three digits — would refuse these.
2. **Where the decimal is a comma and thousands a space** (French), `.` is read as a thousands mark too, so `1.5` reads 15.
   Ours, not the ruling's.
3. **On a comma-decimal device** a box rests `1700,00` while the screen's money reads `$1,700.00`.
4. **`1.700,5` pasted on his iPad** reads $1.70 in the Price box, as before §199. The ruling doesn't cover a German
   figure on a US device.

**The word pair (§200)**

5. `(ours)` **Save's line once he has cleared the short word:** `To save, give it a name, both words and both percents, a
   short word, and pick a category.` — built from `r80c`'s elided `…both percents, a short word, and pick a category.`,
   whose start is the first line's, word for word (`estimateWords.ts:148`–`:150`).
6. `(ours)` **The low box's refusal,** mirroring `r80c`'s high one: `The low end can’t be above the high end’s 125%` (the
   real figure), under the low row. The high end's refusal is `r80c`'s, in the hint's place.
7. `(ours)` **The health page's entry for a reversed pair:** title `Word pair with its ends the wrong way round`; detail
   `Its low percent is above its high, so it is read with the smaller as the low end and the larger as the high. Opening
   it in Settings › Estimates and saving it stores it that way. Not serious: no money changes.`; example `Word pair —
   "{name}"` (`dataAudit.ts:391`). Listed from the saved data, because nothing is written on load.
8. **A reversed pair** is swapped whole, each word with its own percent; equal ends aren't reversed; it's stored the right
   way round only when he saves it in its sheet. A percent edited in place writes that word's own stored field.
9. **The in-place refusal** is a full-width line under the row he typed in (undrawn). His figure stays in the box until he
   changes it (§196 · review's money-box rule). The review: a held figure is held only against the two figures it was
   refused against; once either changes — the other box, the sheet, his other device — it drops and the saved figure
   shows. While he's in the box his typing stays, and the sentence follows the other end.
10. **A pair complete but reversed** shows only the refusal; the line above the footer names only what's missing.
11. ❓ **Widens offers only the categories that followed guests when he opened the pair.** A category an old pair holds that
    no longer follows isn't offered, is kept on Save, and still shows on line two. **A pair whose every category has
    stopped following can't be saved, not even renamed,** until he picks one, and Widens offers only categories that
    still follow — so with none chosen above, there's nothing to pick. `r80c`'s line asks him to *"pick a category"*.
12. **The short word fills from the name on a NEW pair only;** an old pair keeps its short word when renamed. Name takes
    focus on open, new or old. Add does nothing until his saved choice has loaded, like a chip.
13. **A percent the box can't hold** (0, 1,001, three places) counts as not given. Save writes only the fields that
    changed; an old pair saved unchanged writes nothing.
14. **Junk saved data:** a price flag that isn't `true` reads off; a short word that's blank, over 40 characters, a number
    or a list reads as the name's last word. The pair still loads.
15. **The Estimate's line two:** with no guest count, the short words follow the figure; typed rows and rows that don't
    follow show none; two pairs with the same short word both show it. Widens chips and line two list categories in the
    app's order, where `r80a` and `r80b` draw his five first.
16. **At 390 the open pair's body scrolls** (789 of content in 608), so a new pair's line above the footer starts below the
    fold (y 951.6, footer at 784) until he scrolls. At 1600 and 1200 nothing scrolls (724 of 724).
17. ❓ **Where the built parts differ from `r80a`–`r80c`:**
    - the footer has no fill (`r80b` draws `#F7F5F1`), so greyed Save's fill is `--surface`;
    - Cancel carries the group editor's 2px accent border, not a 1px `--border`;
    - `Remove pair…` has 12 of side padding, not 4;
    - the switch's off track is `--surface-recessed`, not `#C3BCAF`;
    - the line above the footer sits 20 above it, not 12;
    - the Add row's own top rule (`--border`) shows under the sentence and under the last pair, where `r80a` draws none,
      and `--border-subtle`;
    - the card's word and percent grid stays 120 · 110 (`r80a` draws 110 · 100); we read your *"The percents stay
      editable in place, as built"* as covering it;
    - greyed Save is `SheetFooter`'s outlined grey, not the group editor's 50% fill.
18. **The eight start chips change what an Estimate works out** for an account that never chose: those eight now scale
    with guests and words instead of *"you type this one"*. Shown, never saved; no money.
19. **Known limit, in the shared sync code:** a pair added while saves were failing and given up, then removed here, then
    Retried, comes back. It's the §167 review's *"changed and changed back reads as unchanged"*. No money.

**Old completed invoices (§201)**

20. **"No record" is nothing stored** (absent, `null`, `[]`). An invoice whose only record can't be read, or whose
    `completedRecords` isn't a list (hand-edited), holds a record: it reads its lines with today's cent, as before, and
    isn't counted in the tile.
21. ❓ **A Reopen moves an invoice with no record by a cent in History.** History reads a reopened invoice's record, and its
    lines when it has none: your §3 example reads $1,479.49 at Complete and $1,479.50 once reopened, with no edit. Before
    §201 both read $1,479.50. `r65b`: *"Reopening moves nothing."* Completing it again records today's $1,479.50 with no
    Was line, because `r80d`'s `Was $1,479.49 total` needs an earlier record to name.
22. ❓ **A completed group's panel still reads the one cent, twice:** the header `Prints under Miscellaneous · 2 lines ·
    $54.02` over a row reading $54.01 (`groupPanelLineTwo`, `groupDoors.ts:404`), and each member's `Share of ice · 3 ×
    $1.00 · $3.02` over a row reading $3.01. Not built: §2 #2 names rows, bands and group rows.
23. **A comp's and a hidden line's struck figure on the Builder's row** of a completed invoice stays worked with the one
    cent; neither is a printed amount.
24. ❓ **The tile `Completed before Sep 15` is a floor.** Its date is the auto-archive clock: `completedAt`, else `savedAt`
    (`printed.ts:632`). It reads late, never early, so it misses an old invoice written through a tab after 15 Sep — a
    packing tick, an export's date, a hand archive; the sweep never moves `savedAt`. Counting every invoice with no
    `completedAt` as before 15 Sep would be wrong while the old app is usable: it shares `limbo_inv`, and a Complete it
    saves carries no `completedAt` and a fresh `savedAt`. So your sentence's *"The count page says how many"* reads as
    "at least". Sean approved the sentence as written.
25. **"Before Sep 15"** is the start of 15 Sep in Delaware, 2026-09-15T04:00Z (`printed.ts:604`). Papers printed on 15 Sep
    before `d145f4c` went live (committed 11:08) aren't counted. Live invoices only — the trash isn't read, as on every tile there. A
    blank `completedAt` is no date and doesn't fall back.
26. **Round 79's tile** `Completed invoices whose History total moved on 11 Oct to match their paper` now also counts the
    no-record invoices whose History moved, with §201, not on 11 Oct. Its date is wrong for them; the label is yours.
27. **Invoices archived in the old app** carry no `archivedFrom`, so they aren't "archived from Complete": they read their
    lines with the one cent and the tile doesn't count them. Your sentence covers Complete and archived from Complete, as
    ruled.
28. `(ours)` **The tile's place,** third, after `With a record`. §201's nine tiles made three rows of four from 640 up,
    the last with one tile; with §204's (#57) there are ten, and the last row holds two. **The count page's note:** `An invoice completed before 28 September has no record: it reads its lines
    the way its paper added them then, and nothing is written to it.` Not measured in a browser: the count page needs
    sign-in.
29. `(ours)` **Lab fixtures:** `/style/sheetcheck` `#norecord`, `#norecord-line`; `/style/papercheck` `#norecord`,
    `#norecordline`.

**Round 78 §0 d's five (§202)**

30. `(ours)` **§6 #46's "narrow page" includes its 0.35 in margin** on screen under 600. At 390 the text area is 322.8 wide
    (the printed 4 in page's is 316.8); 0.75 in would leave 246. The paper isn't capped at 4 in and fills the window from
    390 to 599. At exactly 600 it's Letter, Item 124 (600 − 144 − 332); from 816 up, 340.
31. **The 600 line is the window's width,** so an iPad in Slide Over or a narrow Split View shows the narrow paper on
    screen. His full-screen iPad never does: Safari 1200 and 1600 wide, the Home Screen app 1168 and 1568.
32. **§6 #44:** a typed category another group also uses is left out too, though its band would stay — your words. One of
    the nine fixed categories stays listed; the ruling names a typed one. *"Current"* is the category when the editor
    opens.
33. **§5 #10:** data health now lists a product with no price that a per-oz override costs, though its card shows the
    override's rate. A price stored as text (`'12'`) counts as priced to `hasPrice` but `getCost` can't use it, so it's
    still listed — the two disagree on that one shape, as before §202.
34. `(ours)` **`/debug/library`:** the reasons column is `Reason, as the card says it` (was `getCost() reason`); the card
    is `Can’t be costed AND used in a recipe` (was `Uncosted AND used in a recipe`).
35. **§6 #12:** `Some lines have no cost` shows for a single line too — your words, kept.

**Sean's rule (§203)**

36. `(ours)` **The gate's row:** one per line, in print order, an identical sentence said once. Your sentence split at its
    full stop — the first sentence the row's title, `Set its price to whole cents in Products.` its detail. `note`
    severity (untinted, the info glyph), after the money rows; no action button, none being drawn. At 1200 and 1600 the
    dialog is 520 wide and each row 100.25 tall, titles on two lines.
37. ❓ **`'s` goes after any name,** so a name ending in s reads `Meyer lemons's price` (three lines at 390). Your Round
    76 §6 #13 removed a possessive from the group's dash sentence for that reason; this sentence is yours, so it's kept.
38. `(ours)` **The stored price shows every digit** (`$1,234.565`, `storedMoney`); the Unit cell and the Amount use the
    screen's spelling; the name is the line's as printed. ❓ A price brought over from the first app as a quotient would
    read like `$7.576923076923077` on the gate and the health page — the shape of Sean's 25 Aug `$7.5769` complaint. His
    health page will say how many he has.
39. **Price × quantity is rounded half up before comparing** (1.5 × $0.13 = $0.195 → $0.20). A Unit cell reading
    `under $0.01` is words, not a figure, so it gets no warning (1000 × $0.004). The export page's warnings panel doesn't
    carry it; #1 names the pre-send gate.
40. `(ours)` **The health page:** title `Product priced past the cent`; detail `Its price has more than two decimals. An
    invoice shows it rounded to the cent, so its quantity times that price may not add up to the line's amount. Set its
    price to whole cents.`; tone `risky`; each product with its stored price (`Tonic — $0.125`); every one named, where
    the page names five elsewhere.
41. ❓ **The gate sends him to Products, but Products shows the price rounded everywhere** — the card, the row and the
    Price box at rest and in the box (#4's digits-in-the-box is the override's only). A $0.125 Tonic reads $0.13 there;
    only the gate and the health page say $0.125. Retyping fixes it; nothing on the product says it's needed.
42. **#3:** the negative `> -$0.01` is kept; the ruling names `< $0.01`. On an old paper a line under half a cent printed
    `< $0.01 / each` and now reprints `under $0.01 / each` — the only change an old paper can show, and it's words.
43. `(ours)` **#4: the override at rest pads to two places** — a stored 1.1 rests `1.10` (it rested `1.1`).
44. **#5:** every money box asked for two places rests half up, the Estimate's included; its figures are whole cents, so
    nothing moves.
45. **#6:** units are stored for billed lines, group members and comps, not hidden lines, so a hidden line's Builder row on
    a completed invoice reads today's spelling ($18.005 → $18.01). A price under half a cent is stored as 0 cents and reads
    back `under $0.01`. A record that can't be read (a quantity of `3 cases`, §103) reads its lines live, so its Unit
    cells take today's spelling ($1.005: $1.00 → $1.01 on a reprint); its amounts already read today's cent (§190).
46. ❓ **An invoice sent on a build before §203 and completed after it** (its PDF said `$1.00 / each` for $1.005) stores its
    Unit cell half up, so a reprint reads `$1.01 / each` against the PDF he sent. *"From now on"* is read as at Complete,
    as with §193's cent. Only a line priced past the cent.
47. **#2:** `/debug/rates` lists the rows that needed a third place as dropped (Tanqueray 2 fl oz, Demerara 615 g, the
    $0.001/oz wt example). `(ours)` Its three descriptions are reworded for two decimals: the page's, the developer-tools
    index's and the rules panel's.
48. **The group's panel's unit** goes through `money()`, half up; on a completed invoice it still reads live figures (#22).
49. **`moneyDelta`** (the Undo list, the calculator's toast) rounds half up too; its figures are sums of whole cents, so
    nothing moves.
50. **`roundCents`, and so `money()`, goes wrong past about $90 million** (n × 1e8 leaves the safe integers):
    `money(1e15 + 0.005)` reads `$999,999,999,999,999.88`. No invoice comes near.

**Your calls (§204)**

51. `(ours)` **#3, no record:** an invoice completed before 28 Sep has no stored comp, so it reads its comp from its lines
    with the one cent. §1 #5 covers its line amounts; a comp has no amount on the paper.
52. `(ours)` **#3, the uncounted count:** the record's count of comps with no cost recorded is read with its figure, so a
    record frozen before §151 shows `1 comped line has no cost recorded` on its print page again, where today's lines
    show nothing.
53. **#3:** `printed.comped` and the record's `comped` are one figure in two units; if they disagree, `printed.comped`
    wins, being checked against the lines. A tampered `printed.comped` makes the whole stored paper unreadable, so the
    invoice reads its lines. A reopened card reads the record's comp; the Builder's footer and the paper read the lines.
54. ❓ `(ours)` **#4, "each figure that moved," read as money:** billed, comped, total. A rate that moved alone shows in the
    total; a line count or guest count that moved alone isn't named, and guests alone mean no Was line. A comp from
    nothing to $40.00 isn't named, its old clause being left out at zero (`r65b`): `Was $139.96 billed · $148.36 total`.
55. **#4, undrawn:** with no Was line the record line is `--text-secondary`, as on the first pass; `r80d` draws `--text`
    only above a Was line. At 390 the record line wraps to 3 lines and the title to 2 (row 166). A previous record
    reopened before §193 and never filled has no printed figures, so its total is worked with today's cent ($1,479.50
    against a $1,479.49 paper), and a re-Complete names nothing.
56. **#4:** the gate prints 6.625% as `6.63% tax`, `toFixed(2)` since §103 — a rate, not money. `r80d`, like `r67b`, draws
    the info glyph `#474239`; the app has drawn it `--gold-text` since §103.
57. `(ours)` **#12:** the tile sits after `Completed before Sep 15`. It counts live invoices only; the fill fills the trash
    too.
58. **#16:** Products only, as ruled. On Cocktails or Prep a product's door still pushes, and a cocktail's or a prep's door
    pushes even on its own page.
59. **#19:** a closed invoice's leftovers don't take away `all saved`; that line speaks only for open invoices (your Round
    79 §3 #17).
60. ❓ `(ours)` **#52:** the totals' `To be confirmed` is set in the total's own type (12pt semibold, black; the Subtotal
    regular), not the rows' italic grey — undrawn for a total. And the note under them still reads `includes 6% tax · plus
    Spirits, Mixers & Garnish and Rentals, to be confirmed`, naming every category under a total that is itself to be
    confirmed. The sheet's footer note does the same.

**The end of the paper (§205)**

61. **Your §1 #6 puts `3 categories · 24 items` "under it";** §14.1's table (Left, Right) and `18a` draw both ends on one
    line, and the same sentence puts `End of invoice № 14` *"on its last line"*, so nothing can sit under it. Built as `18a`
    draws. Stacking them is one class.
62. ❓ **What is counted** — §14.1 doesn't say: what the paper prints, since its reason is a count *"checkable against what
    is in hand"*. Categories are the headings printed; a category whose lines are all hidden prints none and isn't
    counted. Items are the rows printed: a group is 1, a comp 1 (it prints `Complimentary`), a hidden line or a reminder
    0. On the Estimate every category row counts, `To be confirmed` included.
63. `(ours)` **`1 category` and `1 item`** (`18a` draws plurals only); `0 categories · 0 items` for an invoice with no lines;
    with no number, `End of invoice` alone, the way the head drops it; a number stored as text reads as none.
64. **The end rule shows on screen too,** where the running head doesn't: the head repeats per sheet, and this is drawn
    once. `18a` puts 8 between the hairline and the words; the running head as built sits 4 over its own line (`pb-1`,
    where `17b` drew 8), so the matched pair differs in that one value.
65. **A completed invoice printed again gains the end line**, so it's figures-identical, not byte-identical, to the PDF the
    client holds. `check-printed`'s four "byte-identical" proofs now say every figure, and every byte but the end rule.
66. **Before §205, the closing line printed alone on the last sheet** in 12–23 of the sweep's positions per invoice;
    `.doc-foot` keeps it with the totals on short invoices. On № 14 it still leaves them in 24 of 241, now taking the end
    rule (§1 #5).

### 3 · Only his iPad can say

- **19.1 and 21.2: one page, one screenshot. You're still waiting on both numbers.** The page now also carries `Completed
  before Sep 15` (live) and, once this ships, `Completed invoices with a record still to fill`. No number is claimed here.
- **21.1 and 22.3:** a PDF he sent from before 28 Sep against History, the footer and the reprint — and one from before 15
  Sep, your sentence's case.
- **21.4–21.6 and 22.1:** Settings › Estimates on his account, a pair added, picked on a real draft and removed.
- **22.2:** whether he has any product priced past the cent (Data Health), and the gate's row on one.
- **22.4:** `1,700` in the Price box, on his keyboard.
- **22.5:** the end line on a PDF from Safari. §1 #5 is Chrome's; Safari's print engine is unmeasured.
- Every screen measurement here is Chrome's, and nothing was printed on an iPad.

## What I need back

1. ⛔ **§1's five stops.** #5 (the end rule's break) and #4 (#48) are the paper; #1 decides how saved guest counts are read;
   #2 needs a frame; #3 needs a yes or a definition. None moves money as built.
2. ❓ **§2's calls:** 1, 11, 17, 21, 22, 24, 37, 38, 41, 46, 54, 60 and 62. The rest are told.
3. Nothing else is owed by us: Round 78 §0 d's five are built but for §1 #2 and #3, and §14.1 is built but for §1 #5.

---

## 🔴 ROUND 80 — your Round 79 is built and LIVE (§193–§197, each reviewed): a completed invoice keeps its paper's figures, the readings, and the Estimate from its door to its paper — ⛔ six stops, the word-pair editor first, because without it his words can't be used, and one about money: invoices last completed before 28 Sep have no record to keep them to; ❓ Sean's rule — no fraction of a cent shown anywhere; and the readings


**implementation → Design, 11 Oct 2026. Branch `main`, app at `a4606d9`** — the code is `c6ccb79`'s, and it is **LIVE**.
The last commit to touch the code is `50b90fb` (§197 · review); `c6ccb79` (§198) is records only (`git diff --stat 50b90fb
c6ccb79 -- src scripts package.json` is empty). After it only `a4606d9` (`WISHLIST.md`: Sean's half-cent rule, §3 below):
`git diff --stat c6ccb79 a4606d9 -- src scripts package.json` is empty. `a4606d9` goes up when this round ships —
`npm run ship` pushes both repos. **Every `file:line` below is at `c6ccb79`, which you can read on GitHub.**

**Live, read back twice.** `git ls-remote origin main` reads `c6ccb79` (11 Oct, 18:58).
- **First ship, 13:31:59** — `9e35afd`, §189–§194. Your §1: *"Build §1 with §189–§191, then push."* Met first.
  `/style/estimatecheck` answered 404 before and 200 from 13:35:29.
- **Second ship, 17:06:27** — `c6ccb79`, §195–§198. `/style/wordscheck` and `/style/estimatesheet` went from 404 to 200
  by 17:10:00, and `/style/estimatecheck` serves §197's `Both include 6% tax · plus Rentals, to be confirmed`. At 18:58
  the first two answered 200 again and `/style/estimatecheck` still served that line (curl).

**How it was measured.** Headless Chrome 154.0.8037.98 on the verify build (`SHIP_VERIFY=1`), the app's built CSS and
Spectral, light and dark, at 1600 × 1068, 1200 × 1468 and 390 × 844, at 2×. PDFs on Letter, A4 and 4 × 8 in, read back.
Node ran the real code against stand-ins (a fake server, a fake router), never the database. **No sign-in, Chrome not
Safari, and no iPad.** Each batch was followed by a review that assumed it wrong, re-took its numbers and ran fault
injections of its own; four of the five also re-ran the batch's. Four of the five fixed something. Final build at
`50b90fb`: exit 0, **6,904 ✓,
0 ✗**; 78 check scripts on disk and 78 in the build, compared name by name (§193 added `check-printed`, §195
`check-words`, §196 `check-estimate-sheet`).

Your reply is `ROUND-79.md` and frame `Round 79 - the estimate's door.dc.html`, ids `r79a`–`r79e`, in the bundle's
`ROUND-80/`. Each stop names the frame lines it checked; where a ruling is prose only, it says so. Your two errors,
first: taken. We built from the frame you named, and §4 #11 is built as you narrowed it.

**Sean, 11 Oct:** *"Build. Yes."* — **Build** for this round, **Yes** to your §4 arithmetic sentence.

### 0 · Your Round 79 — received, and built in five batches. All of it is LIVE.

**a · §193 (`7e0c709`; review `33176d6`): your §1, and §4 #11 narrowed.** Prose only: `r79a`–`r79e` are all the Estimate.

- **Complete stores `printed`:** each billed line's printed amount, the subtotal, the tax and the total, in whole cents.
  A dash on the paper is null, never 0. Category and group amounts aren't stored, as ruled.
- **Four places read it:** History's row and card, the footer, and the paper printed again. That holds for a Complete
  invoice and one archived from Complete, trash included, and reads the last stored record only (`completedFigures`,
  `printed.ts`). Reopened: History reads `printed`, the Builder the live lines. Everything else uses the one cent.
- **The fill:** `legacyPaperCent` is the one place the old cent survives. It runs once on load, and on a tab's save so
  an old tab can't strip the figures. It never touches a record that has `printed`, an earlier record, or an unreadable
  one. The health page lists each under *Fixed on load* as `Completed invoice — figures filled in from its paper`.
- **The count page:** your tile in place of `Paper a cent more, printed or sent again`. The others stand.
- **Proved:**
  - Six completed fixtures: a half-cent tax, a $1.005 line, 3 × $0.125 both ways, the comp's example and a group. The
    History row, card, footer and reprinted paper each equal the paper as first completed, and the paper is
    byte-identical. **Your §3 example, $1,395.75 at 6%, reads $83.74 and $1,479.49 everywhere.**
  - Against the live build's own code (`git archive ebefce8`): **3,000 seeded completed invoices, the client's paper
    identical in 3,000.** 709 of them would have moved under §190 alone.
  - Two devices' fills, on the real sync against the fake server, write identical bytes.
  - The review: 9,000 adversarial invoices, the paper identical in 9,000, and History and the footer equal to it in
    27,000 readings.
- **The review fixed one hole:** a stored NaN tax under a real subtotal made History, the footer and the reprint show
  `—` for tax and total. It's now ignored like any tampered value. Nothing the app writes has that shape.
- ⛔ One stop: §1 #5.

**b · §194 (`9e35afd`): your §3 #1–#4, #9, #11, #13, #17, #22, and §2 #6's formatter.** Nothing stopped. The review
found nothing to fix.

- Every ruled string as written: `4 changes not saved` for 8 saves of 4 records; `Discard 4 changes?` and `Clear 1
  change?`; `Invoice · 3 saves · last at 3:04 PM`; `A deleted invoice` over `Invoice · deleted · 2 saves · last at 3:12
  PM`; leftovers alone, `Okafor retirement` over `Leftovers · 3:20 PM`. `A deleted leftovers` is asserted absent in all
  48 cases. −$0.125 → −$0.13. `estimateMoney` prints `—` for any negative, and `$0` for −0.
- **Measured:** the corner pill fades in over about 180 ms (182 light, 185 dark) and is gone 193 and 196 ms after it
  starts to fade out. With reduced motion below 1024
  the bar fades over about 200 ms in place and takes no taps. From 1024 up nothing moves or fades.
- **Money:** 2,000,000 values each sign through `roundCents`. No positive moved; every negative that moved was an exact
  half cent, now a cent further from zero.

**c · §195 (`0c72cf7`; review `ed460ea`): Settings › Estimates, `r79c`.**

- The row `Estimates` under Business. `Categories that follow guests`: a chip for each of his ten categories, and your
  hint word for word. `Your words` at rest, as `r79c` draws it: the percents change in place, with his events beside
  each word.
- Stored under a new account key, `limbo_estimates`: one row for the categories, one per pair. Every field is checked
  against what the page can show.
- `/style/wordscheck` gives `r79c`'s three event lines exactly: `Your events poured 64% to 97% of what you bought · 7
  events`, `Ran out on 2 of 7 events`, `Your events: not enough yet · 1 of 3`.
- **The review fixed a crash and two holes in the money proof.** A `null` among the lines of any invoice with a
  finished leftovers count threw while the page drew a pair. And the proof that the page writes nothing to an invoice or
  its leftovers matched names only; it now runs the reading through the real `sync.ts` against the fake server, with
  nothing queued or written, and each of the page's three loads may take only `rows` and `loading`.
- ⛔ Three stops: §1 #1, #3, #4.

**d · §196 (`4191c8a`; review `68630e1`): the door `r79a`, the sheet `r79b`, the arithmetic, §2 #6.**

- ⋮ row 3, `Make an estimate…`, under Export, with `r79a`'s glyph copied path for path. The set is 46 and the menu has 12
  rows. Greyed with `Locked at Complete` or `Locked while archived`, and with `Add lines or start from a template first`.
- The 672 sheet, in `r79b`'s order. It's saved on the invoice as `Invoice.estimate`, written only by `setEstimate` (that
  one field, no Undo step, refused when locked).
- **Your worked example, end to end:** Spirits **$1,700 to $4,550**, Wine $550 to $1,100, Mixers typed $150 to $300, Ice
  typed $220–$280 prints **$200 to $300**, Rentals to be confirmed. Subtotal **$2,600 to $6,250**, Estimated total
  **$2,750 to $6,650**, per guest **$27 to $52**. The review re-did it on an invoice of its own and got the same.
- ⚠️ **Found while building — money.** Any write to an unlocked invoice re-worked its stored total from today's lines.
  So on an invoice saved before §184 and §190 and not edited since, the Estimate's own write would have moved a stored
  total by a cent. A write that carries only the Estimate now keeps the stored figure; every other write still re-works
  it. Proved with a stored $99.95: the Estimate keeps it, and an edit, a packing tick and a date each re-work it to
  $99.96. The review added both orders.
- **The review fixed one fault:** a minus in the LOW box put `Can’t be below $0` under the HIGH box (at 1600 the low box
  ran 918.6–1004.6 and the words 1014.5–1116). It now sits under the box it's in (918.6–1020.1).
- ⛔ One stop: §1 #2.

**e · §197 (`2039f8f`; review `50b90fb`): the paper, `r79d` and `r79e`; §2 #1–#5; §3 #27, #29.**

- No `Tax at` line. `Estimated total` folds the tax in, with `Both include 6% tax` under it (`includes` with no
  per-guest line). `up to $100`. Per guest under the total, at its weight. The invoice's own client block. Page 2 repeats
  the headings and `Estimate · {client}`. Under 600 on screen, and on paper under 5 in, `r79e`.
- Your worked example prints line for line on Letter, from the lab and through Preview's own path. 4,000 random
  estimates: the real total always inside the printed range. 34,993 lows from 1¢ to $49.99: none prints `$0`.
- **Money:** nothing that calculates or prints an invoice changed; the invoice and money files changed in comments only.
  The comp's worked example, locked against any write, as Complete, archived from Complete and Draft: its record byte
  for byte, and its own paper identical (4,142 characters), $99.96 billed, $40.00 comped, $6.00 tax, $105.96.
- **The review fixed one fault:** at 390 and under 5 in, `Estimate` kept `r79d`'s 0.02em tracking, which `r79e` doesn't
  draw (100.8 → 97.0 wide). It also closed two holes in the checks.
- ⛔ One stop: §1 #6.

**f · Your "What I need back."**
- #1: pushed with §189–§191 at 13:31:59. Your §1 sentence was put to Sean as you wrote it, with what isn't yet true of it
  (§1 #5). He hasn't answered; it needed no answer.
- #2: Sean, *"Yes"*.
- #3: built in your order — Settings › Estimates, the sheet, the paper.
- #4: **our Round 78 §0 d's five, still not built.** grep `-rni "newer copy"` and grep `-rn "Some lines have no cost"`
  over `src scripts` at `c6ccb79` find 0 each; the old toast is still `Builder.tsx:620`, and `dataAudit.ts:233` still
  asks `getCost`. §193–§197 changed `groupDoors.ts` in a comment only.

### 1 · ⛔ Six stops. The word-pair editor first.

1. ⛔ **The word-pair editor: adding, renaming, re-categorising and removing a pair** (§4, *Settings › Estimates*;
   `r79c` checked, frame lines 130–196). **This is what makes his words usable.**
   - `r79c` draws pairs at rest only: the name and the words as text, the percents as boxes. Nothing in Round 79 draws a
     pair open.
   - You name *"Settings' own Field and managed-list parts"* (frame line 192). The managed list's open row (`47a`, §46.2)
     holds one borderless field, Remove and Done. A pair is a name, two words, two percents and a set of category chips
     (`PairFields`, `estimateWords.ts:115`–`:126`). Where each of those sits open, how an empty word reads in a
     borderless field, and what Done does with half a pair are undrawn.
   - `r79c` puts `Add a word pair` in the band (frame line 152). §27.3 and §46.2c put Add as the list's last row.
   - **Built:** the percents change in place, as drawn. `Your words` is absent while he has no pair (§45.A). **So on his
     account there are no words today, and the Estimate shows no word chips.** It runs on the guest range and his typing.
     `Add a word pair` is in no shipped file: grep over `src` finds it only in a comment in `estimateWords.ts`, and
     `check-words` holds it off the page.
   - ❓ **Please draw the open pair, and where Add goes.**

2. ⛔ **The words on line two** (§4, *The sheet* #3; `r79b` checked, frame lines 103–104: `$2,400.00 on the invoice ·
   guests · drinkers · premium` and `$780.00 on the invoice · guests · drinkers`).
   - Line two needs a short word for each pair. A pair stores a name, two words and two percents
     (`estimateWords.ts:115`–`:126`), and `r79c` gives no place to set a short one. Its names are `Lite to heavy
     drinkers` and `Mid to super premium` (frame lines 155, 167); its words are `Lite` and `Heavy`, `Mid` and `Super
     premium`.
   - Nothing was invented. Not the name's last word: `Beer and wine crowd` would give `crowd`. Not the whole name: it
     wrapped the Spirits row to 77.3 at 672.
   - **Built:** the figure and `guests`. Every picked word still counts in the arithmetic, and its chip shows it picked.
   - ❓ Store a short word with each pair, set in #1's editor? Or another reading?

3. ⛔ **The price word's line** (§4: *"A word about price gets no reference: `A price choice. Your events can't show this
   one.`"*; `r79c` frame line 171).
   - Nothing marks a pair as a price word, and its categories can't tell: `Mid to super premium` touches Spirits (frame
     line 167), and so does `Lite to heavy drinkers` (line 155).
   - **Built:** every pair shows his events. The line is in no shipped file.
   - ❓ How is a pair marked as being about price? In #1's editor?

4. ⛔ **Which categories start chosen** (§4: *"They start with his drink categories chosen"*; `r79c` frame line 196, and
   its chips, lines 140–146).
   - `r79c`'s seven chips are mostly your example names (`Wine & Champagne`, `Beer`, `Mixers & Garnish`, `Ice`,
     `Rentals`); two are his (`Spirits`, `Rental Supply`). His ten are `CATEGORIES` (`types.ts:3048`).
   - Nothing in the app says which categories are drinks. `drinkSplits.ts:37`'s `DrinkCategory` is the scrapped
     estimator's five slices (`cocktails`, `spirits`, `wine`, `beer`, `na`), not invoice categories. A search for any
     other drink list found none (grep `drink ?categor`, `DRINK_CATEGOR`, `isDrink`, 11 Oct).
   - **Built:** nothing chosen. `FOLLOW_DEFAULT` is empty (`estimateWords.ts:99`); it's shown and never saved, so the day
     it's filled, an account that never chose follows it.
   - ❓ Ours, proposed: Spirits, Liqueurs & Fortified Wines, Wine, Beer & Seltzers and Mixers / Non-Alcohol. Are Produce,
     Consumables and Prep Ingredients in? Meanwhile Sean can tap them himself (21.4).

5. ⛔ **Money: invoices last completed before 28 Sep have no record to keep them to** (§1 #4). **§1 is prose only; no
   frame draws it.**
   - The completed record began with §103 (`9638e16`, 28 Sep). §1 #1 puts `printed` *"on the completed record"*, and §1 #4
     fills that in, so for these there's nothing to fill. `completedFigures` returns null, and they read their lines with the one cent in
     History, the footer and the paper printed again.
   - **What one reads now.** Run in Node on the real code: your §3 example as a Complete invoice with no record reads
     **$1,479.50 in History, and $83.75 tax and $1,479.50 on its paper printed again.** The paper the client was sent
     printed **$83.74 and $1,479.49** (`legacyPaperCent` on the same lines gives 8,374 and 147,949 cents). A line past the
     cent moves the same way. **Live since 13:35.** So your §1 sentence is true for invoices completed from 28 Sep on,
     not before, and Sean was told so (his check 21.1).
   - **How many:** the count page's `Completed read` minus `With a record` (`RoundingView.tsx:186`–`:187`). That's
     Sean's 21.2, not read yet.
   - ❓ Which?
     - (a) **Make them a record**, once, on load, from their locked lines, with `printed` from `legacyPaperCent` (the
       fill, extended);
     - (b) **Read them through `legacyPaperCent`** on screen, writing nothing;
     - (c) **Accept**, and give us the words for Sean.
   - (a) and (b) both inherit §2 #8: papers printed before 15 Sep (`d145f4c`) added unrounded lines, so one sent then
     can differ by a cent from `legacyPaperCent`.

6. ⛔ **`page 2 of 2`** (§3 #29: *"Follow the invoice: page 2 repeats the column headings and a running head (`Estimate ·
   {client} · page 2 of 2`)"*; `r79d` and `r79e` checked, frame lines 201–286. Each draws one page; grep `-i "page 2"`
   over the frame finds 0).
   - **The invoice prints no page number.** Its running head is `{client} · № {number}`
     (`InvoiceDocumentView.tsx:176`–`:179`), and grep `counter(page` over `src` finds 0. Our old §5, *Round 9 built*,
     gave the reason: page counters are CSS Paged Media, which it said no browser's print engine implemented. Not
     re-measured in this build, and Safari never ran in it.
   - **Your answer then** (`HANDOFF.md` §14.1, *"The page counter — agreed, with one change"*): no library, and an end
     rule carrying a count, `End of invoice № 14` with `3 categories · 24 items`. `HANDOFF.md:64` marks it done. **It is
     not in this app:** `git log -S'End of invoice' -- src` finds no commit, and grep `-rni "end of invoice"` over `src
     scripts` finds 0. We haven't checked the first app.
   - **Built:** `Estimate · {client}`, with a count asserted absent (`check-estimate`).
   - ❓ Keep the head without a count? Or §14.1's end rule, on the Estimate and on the invoice, which doesn't have it
     either?

### 2 · Readings — built the plainest way. ❓ marks a call that is yours; the rest are told

**A completed invoice (§193)**

1. **"By line id" is keyed by the row key.** Lines have no id, so `printed.lines` is keyed by `rowKeyOf`: section, name
   and place, as in `0-Gin-0`. It moved into `types.ts` beside the record, and `check-printed` pins its spelling. It's
   a stored format now.
2. ❓ **"Everywhere he or the client reads them" against your four places.** These still read a completed invoice's
   lines with the one cent, so on a line past the cent or a half-cent tax they sit a cent off its footer. Run in Node on
   two completed invoices whose papers printed $1,479.49 (your §3 example) and $63.00 / $66.78 (a $1.005 line beside 2
   × $31):
   - **the open-invoices list** (`OpenInvoicesSheet.tsx:143`, the lines plus tax): **$1,479.50** and **$66.79**;
   - **the phone drawer's figure** (`Builder.tsx:1793`, the lines' subtotal): $1,395.75, the same as its paper, and
     **$63.01**;
   - **`Start from an invoice`** (`StartFromSheet.tsx:268`, `:310`, the lines' subtotal): the same as the drawer;
   - **the Builder's own rows, bands and group rows** (`InvoiceSheet.tsx:794`, `:1025`): the $1.005 line reads
     **$1.01**, where its paper printed $1.00.

   Should these read `printed` too, for a Complete invoice?
3. ❓ **The comp's figure isn't in `printed`.** History's `Comped` row and the footer's `$X comped` read the one cent, so
   a half-cent comp moved at the push: **$8.02 → $8.03** (§193's review). The record stores the comped figure, and
   nothing reads it for a Complete invoice. The print page's notes above the paper (never printed) are the same; they're
   the only difference in 119 of the 3,000.
4. ❓ **The gate's `Replaces the numbers recorded on …` row** shows billed, the rate and comped. A re-Complete that
   changes only the rounding ($83.74 → $83.75 tax) shows the same row, `$1,395.75 billed · 6% tax`, so it does not
   *"already show the change"* (§1 #3). A moved line does: `$63.01 billed` over `Was $63.00 billed` (`check-printed`
   section E).
5. **A tampered `printed`** isn't read and isn't refilled; the invoice reads its lines. 18 shapes were tried, among them
   missing fields, NaN, strings, wrong sums and a line off by more than half a cent. The health page says nothing about
   it, because nothing rules it.
6. **A reopened card** shows `printed`'s subtotal, tax and total beside the record's own category split. Those can sit a
   cent apart for a record frozen between 28 Sep and 11 Oct with a line past the cent.
7. **A record reopened before this build has no `printed`.** History works it out from its stored subtotal and rate,
   with the one cent.
8. **Papers printed before 15 Sep** (`d145f4c`) added unrounded lines, so one sent then and completed after 28 Sep can
   differ by a cent from what `legacyPaperCent` filled in.
9. **One sent under the old cent and completed after this shipped** records that day's cent, as ruled. On a rare one
   that's a cent off the PDF he sent.
10. **The health page's words:** `Not serious: no money moves.` is our wording of your sentence. A fill made by a tab's
    save is listed too, once; the tab uses the load's own label.
11. **An offline fill that lands after his other device re-completed** replaces the newer record. Last write wins, as
    for every load repair since §157. Retry is guarded and proved.
12. ❓ **No tile counts what's left to fill**, and *"delete it once his data shows 0 left to fill"* needs one.
13. **The health page keeps the newest 40 notes per device** (`MAX_FIXES = 40`, `fixedOnLoad.ts:31`), so past 40 fills
    not every one is listed. Fills exist only for records made from 28 Sep.
14. **The new tile also counts an invoice completed after the push with a line past the cent.** It differs from the
    pre-11-Oct figure, though its History never showed that figure.

**Your readings, built (§194)**

15. **#13's *"always on screen"* isn't, while `No price set` or the Deleted view is on.** Neither was ruled, so both stay
    as he set them. A product with no name opens Products with no search, and with no reset.
16. **A tap on a product row while already on Products** leaves two identical `/library` entries (the sheet's push, then
    the ruled replace), so his first Back seems to do nothing.
17. ❓ **#4 says the pill *"already"* fades under reduced motion.** `r78b` and #2 say it appears and goes at once. Built
    as #2.
18. **#11's unruled edges:** leftovers with no copy of their invoice on the device read `A deleted invoice` (a delete)
    or `Untitled` (a write). Folding happens within a band. Leftovers alone don't open.
19. ❓ **#11 against #17:** the sheet folds leftovers into the invoice's row, but the line, the phone's `saved` and the
    list's `all saved` ignore the leftovers' own stuck change. So the sheet can show a Leftovers row while the phone says
    `saved`.
20. **Damaged stored entries no longer count in the pill.** It used to read `2 changes not saved` and open a sheet that
    closed itself.
21. **#22 on an invoice completed before 28 Sep** (§1 #5): a negative half-cent line would read a cent further from zero.
    The app can't make one: the stepper stops at 0, and a negative price counts as none.
22. **`· all saved` reads up to 8 invoices × 3 device lists per read.** Untimed on the iPad.

**Settings › Estimates (§195, `r79c`)**

23. **"Under Business"** is read as the next row in Settings' list, not a page inside Business. Its second line is
    undrawn: `Categories that follow guests and your words`, read off its siblings.
24. **A pair has three names.** `r79c` draws `Lite to heavy drinkers` above `Lite` and `Heavy` (frame lines 155–161);
    your prose says two (frame line 193: *"two words and two numbers"*). The name is stored.
25. **`r79c`'s three pairs are practice data** (`/style/wordscheck`), not added for him.
26. ***Poured* is by money** (price × quantity), not bottles.
27. **A run-out is a `Ran short` tag:** counted among the events, kept out of the range. A tagged `Too much` or `About
    right` is an event but not a measurement. From three events, `Ran out on 0 of 7 events` shows. Percents round to the
    whole.
28. ❓ **A night where everything was used up isn't an event.** Done with nothing left saves the same record as a skipped
    tag sheet, so the two can't be told apart.
29. ❓ **Nothing stops a pair's low percent being above its high**, stored or typed.
30. **A percent is 1 to 1,000 with at most two decimals;** anything else isn't saved, and the stored one shows again.
    ⚠️ `1,000` typed saves 1%, because every number box in the app reads a comma as a decimal point.
31. **Below 480 of card,** a word and its box share a line, and the events go beneath.
32. ❓ **The card is 680, not `r79c`'s 720** (the managed list's 20 inset), so the events column is 396, not 432, and
    `Your events poured 64% to 97% of what you bought · 7 events` (402) wraps to two lines.
33. **Against `r79c`:** line height 1.3, not 1.4; chips 16 in, not 14; no count in the `Your words` band; rows and band
    14 in, not 16.
34. **The percent box's edge is `--border`,** as drawn and as on every input: 1.47:1 light, 1.26:1 dark. In the save
    warning's window, a chip's unsaved change is named `Untitled`, of kind `Setting`, as a theme change is: the
    estimates key is in no family (`savePill.ts:215`), and its categories row has no name (`:252`).

**The door and the sheet (§196, `r79a`, `r79b`)**

35. **There's no `Ordered` stage,** so the door is live at Draft, Ready to Send and Ready to Order.
36. **"The invoice's amount"** is what the client's invoice prints for the category: billed lines, a comp at $0, hidden
    lines out, and a group under the category it prints under.
37. **A $0 category reads `No price yet`.** If it follows guests, it prints `To be confirmed`.
38. **With no guest count on the invoice:** empty boxes, no hint, the words act alone, and no `guests` on line two.
39. **The boxes.** Guest boxes are whole numbers from 1 to 99,999 and swap when he leaves the row. Money boxes run $0 to
    $9,999,999.99. One box filled reads at both ends. Every minus is refused, `−` and `-0` too. ⚠️ `1,700` typed is
    $1.70 (#30's comma).
40. **At the start,** no category is typed and no word is picked. A picked word whose pair is gone drops at the next
    change.
41. **Each box writes as he types,** because `r79b` has no Save. Nothing writes before his Settings are read.
42. **The refusal** is 13px in the danger colour, under the box it's in. When both boxes hold a minus, one sentence sits
    under the pair (ours).
43. **Below 672,** a row's controls wrap under its name. At 390 every row does (rows 109.8).
44. ❓ **No per guest** with nothing priced or no count. With nothing priced the total reads `$0` (see #52).
45. **Duplicate and Save as template** don't carry the Estimate. Trash and Restore keep it.
46. ❓ **Against `r79b`:** the title is **18**, not 24 (frame line 79); blocks are 20 apart, where `r79b` draws 8, 16 and
    18; the footer is untinted, with 12 above and below (frame line 113 tints it `#F7F5F1`); hints at line height 1.3;
    chips 16 in; `Type` at least 44 wide.
47. **Two sections of one category** (hand-edited data only) share one typed entry.

**The paper (§197, `r79d`, `r79e`)**

48. ❓ **11 categories fit a Letter page with the totals, not 12.** The running head on page 1, the per-guest line, the
    note and the four-line client block take the room. A page with no totals holds 16.
49. **The running head prints on page 1 too,** as the invoice's does. A repeating table head can't skip page 1.
50. **`r79d`'s `Billed to` and `Event` are gold, `#75521A`.** The paper uses no gold, and the invoice's are grey, so
    they're grey, 7.81:1.
51. ❓ **The printed low decides,** so a typed $0 low reads `up to $X`. That way a row reads the same after `Type`, which
    fills its boxes with what it printed. §2 #3 rules only a low above $0.
52. ❓ **Every category unpriced:** the rows read `To be confirmed` and the totals `$0`. Your §2 #3's last sentence
    (*"A real $0 low (every category unpriced) stays `To be confirmed` (§3 #30)"*) and §3 #30's *"right as told"*
    (totals `$0`) read two ways. Which? If the totals should read `To be confirmed`, it's one line.
53. **No client and no email:** no `Billed to`, and `Event` comes first. No client: the head reads `Estimate`.
54. **On 4 × 8 in,** `r79e` prints inside the invoice's 0.35 in margins, not 24 × 20, which is the screen's. The client's
    second line leaves `guests` alone on a line.
55. **His details print phone · email,** as the invoice and `r79e` do. `r79d` draws email · phone.
56. **At 0% on the wide page** there's no Subtotal, so the total's thick rule sits 4 under the last row's thin one.
    Undrawn.
57. **1.5px rules compute 1px in headless Chrome,** and so does a bare 1.5px block, so that's the browser. Safari's
    repeating heads are unmeasured; nothing was printed on an iPad.
58. **`/style/papercheck` still lays out 405 wide at 390** on every fixture (our Round 79 §3 #25). §193's builder
    claimed no sideways scroll anywhere; its review corrected that. The sheet and History labs don't scroll sideways.

### 3 · ❓ Sean's rule: no fraction of a cent shown anywhere

> **Sean, 11 Oct, during this build:** *"Let's round up every half cent across the app. I don't want to see them
> anywhere."*

**The exchange. The explanation and the question are ours.** We told him, in substance:
- half a cent already rounds up wherever an amount is worked out (§190);
- fractions of a cent could still show in three places: a rate beside a total, up to three decimals (your Round 71 §5:
  `2 fl oz × $0.985/fl oz = $1.97`); a cost-per-fl-oz override typed past the cent (your Round 75 §3 #3: *"No snap… snapping
  $0.035 to $0.04 would be a 14% error"*); and a price typed past the cent (3 × $0.125);
- we recommended rounding only what he sees to whole cents, half up, with the exact figures kept underneath;
- the catch: `2 fl oz × $0.99` reads $1.98 against a true $1.97, so how those lines read is yours.

Our question, word for word: *"OK to send this to Design in the next round as your rule? No fractions of a cent shown
anywhere, half cents up, exact figures kept underneath."* **Sean: *"OK"***

⚠️ **The stored figures stay exact.** His OK covered what he sees. Nothing below asks you to move an Amount, a total or a
stored figure, except #5, which is a stored figure today and is asked.

⚠️ **Two of our words to him were wrong. Found writing this; the corrections are written down for him in `WISHLIST.md`
(`a4606d9`):**
- *"Fractions show in a rate beside a total."* **On no screen of his.** `rateBesideTotal`'s only callers are on
  `/debug/rates` (`report.ts:269`, `:293`; grep `rateBesideTotal(` over `src`), as your Round 72 §3 #14 left it: *"Nowhere
  yet."*
- *"Half cents already round up."* **True of every amount on an invoice, not of every figure shown.** `money()` and
  `printMoney()` spell cents with `toFixed(2)` (`money.ts:100`), which reads a half cent the machine holds a hair low as
  the cent below. The build pins it: `check-money.mjs:1122` holds `money(1.005)` at `$1.00`.

**The places we found where a fraction shows, or a half cent shows down, today.** Each is the real code at `c6ccb79`,
run headless in Node, unless it says otherwise.

*Digits past the cent, on screen:*
1. **The override box.** `Cost per fl oz override` shows every digit he typed, e.g. `0.035`: `ProductEditor.tsx:103`–`:106`
   passes no `decimals`, and `useNumericField.ts:177` shows `String(stored)`. Its card reads `about $0.04/fl oz`.
2. **`/debug/rates`** (Settings › General › Developer tools): for each rate that would drop, what it tried at two and
   three places, in the shape of your Round 71 water row, `$0.01/fl oz gives $1.28 · $0.009/fl oz gives $1.15`
   (`RatesView.tsx:86`; read, not run). Nowhere else.

*Words that stand for a fraction:*

3. **`under $0.01/fl oz` and `under $0.01 each`** on a card, for a positive rate under half a cent: Water, 5 gal at $1.20
   reads `under $0.01/fl oz`. And `money()`'s own `< $0.01` (`money.ts:98`), for any other positive figure under half a
   cent that reaches it, such as a unit price. His catalogue had no such card on 1 Oct (our Round 72 §1, by
   `/debug/rates`).

*Whole cents, but a half cent shown DOWN:*

4. **`money()` and `printMoney()` handed a figure past the cent.**
   - A card's rate: an override of $1.105 reads `about $1.10/fl oz`, and $2.675 reads `about $2.67/fl oz`.
     `check-rate.mjs:405` holds the first.
   - A price past the cent: $1.005 reads `$1.00`, $2.675 `$2.67` and $0.985 `$0.98`. That's how the Builder's row shows
     it under the name (`InvoiceSheet.tsx:528`), the template preview's second line (`templates.ts:709`), and the
     client's paper: its Unit cell (`InvoiceDocumentView.tsx:360`) and the narrow page's `qty × price` (`:336`). Read,
     not run: the Library's product card and row (`ProductCard.tsx:161`, `ProductRow.tsx:155`), the ingredient picker
     (`IngredientPicker.tsx:413`), and the Price box itself at rest (`useNumericField.ts:176`, `toFixed(2)`).
   - A recipe's costs, read, not run: a prep's `$X total` (`prepCost.ts:350`) and the Prep editor's ingredient costs and
     `Ingredient cost` (`PrepEditor.tsx:455`, `:475`) hand `money()` the raw figure.
   - An invoice's amounts aren't shown down: a line, a band, the subtotal, the tax and the total go through `roundCents`,
     half up since §190 (e.g. `InvoiceSheet.tsx:794`, `templates.ts:722`).
5. **The product editor's Price box saves a half cent down.** Leaving the box commits `Number(n.toFixed(2))`
   (`ProductEditor.tsx:89`, `useNumericField.ts:213`, since `16d5d19`, 15 Aug). So $2.675 typed is saved as $2.67, and
   $1.005 as $1.00; $0.125 is saved as $0.13. **This is a stored figure.** It also means a price past the cent reaches
   an invoice only from a product saved before 15 Aug or from data brought over from the first app (the Price box is the
   only place a price is typed: grep `useNumericField(`, and `price` beside `onChange`, over `src`). Nobody has counted how many he
   has; 19.1's tile `1 · A line past the cent` (`RoundingView.tsx:127`) counts the drafts whose total moves for one.

*A line whose shown price doesn't multiply out to its Amount, today, on his screen and the client's paper:*

| Line | Builder row (`InvoiceSheet.tsx:528`, `:794`) | Template preview (`templates.ts:709`, `:722`) | Paper: Qty · Unit · Amount |
|---|---|---|---|
| 1 × $1.005 | `$1.00 · each` … `$1.01` | `1 × $1.00` … `$1.01` | `1` · `$1.00 / each` · `$1.01` |
| 3 × $0.125 | `$0.13 · each` … `$0.38` | `3 × $0.13` … `$0.38` | `3` · `$0.13 / each` · `$0.38` |
| 2 × $0.985 | `$0.98 · each` … `$1.97` | `2 × $0.98` … `$1.97` | `2` · `$0.98 / each` · `$1.97` |

Under his rule, half up: the first reads `$1.01` and multiplies out. The second still reads `3 × $0.13` against `$0.38`.
The third reads `2 × $0.99` against `$1.97`, which is his catch.

Not counted: a tax rate. `6.625%` prints `6.63%` (your Round 79 §3 #31); that's a percent, not a cent.

**❓ For you:**
1. **A qty × price line whose whole-cent price doesn't rebuild its Amount**, on his screen (the Builder's row, the
   template preview) and on the client's paper (Qty · Unit · Amount, and the narrow page's `3 × $0.13`): how does it
   read? The Amount is what the client pays, and it stays.
2. **The rate beside a total.** Your Round 48 §3, which Round 71 §5 #2 keeps: *"Cap at three. If nothing at three
   rebuilds it, print the total and drop the rate."* Under his rule, does it cap at two? It's on no screen today; `/debug/rates` would count what drops.
3. **`under $0.01`** shows no fraction's digits, but it names one. Does it stay, or become something else? And does
   `money()`'s `< $0.01` join it as one spelling? Your Round 75 §3 #4 ruled *"one spelling"* for cards.
4. **The override box** shows his digits (`0.035`), and your Round 75 §3 #3 keeps the stored figure. At rest, does the
   box keep showing his digits, since it's his own typing, or whole cents with the exact figure underneath?
5. **The Price box's save** rounds a half cent down and stores it. Should it round half up ($2.675 → $2.68), or keep
   what he types, as the override does? Either one changes only prices saved from then on.
6. **Confirm that `money()` and `printMoney()` round half up** when handed a figure past the cent: `about $1.11/fl oz`
   for $1.105, and `$1.01` for $1.005. On the client's paper that changes the Unit cell, only on a line priced past the
   cent, and never an Amount or a total. Your Round 69 §6 #10 says *"Printed documents keep their formats until they're
   asked about"*, so this asks.

### 4 · Only his iPad can say

- **19.1 and 21.2: one page, one screenshot. You're waiting on both numbers.** 19.1 is the drafts count you asked for
  in Round 76: how many live drafts move, and by how much. 21.2 is your new tile, with `Completed read` and `With a
  record` beside it; their difference is §1 #5's count. Neither is read yet, and no number is claimed here.
- **21.1:** a completed invoice's PDF against History, its footer and its paper printed again, to the cent. Ideally one
  completed before 28 Sep and one after.
- **21.4:** Settings › Estimates on his account, the category chips saved. **21.5:** ⋮ › Make an estimate… on a real
  draft — guests, typing, Preview, the PDF. **21.6:** the practice pages, the only place the words show for now
  (§1 #1).
- Every screen measurement here is from Chrome, not Safari, and nothing was printed on an iPad. Safari's repeating table
  heads are unmeasured.

## What I need back

1. ⛔ **§1, the word-pair editor first** (#1, with #2 and #3, which live in it). It's what makes his words usable. Then
   #4–#6. **#5 is money**; 21.2's count will size it.
2. ❓ **§3, Sean's rule:** #1–#6 — how those lines read, and the confirmations.
3. ❓ **§2's readings:** 2–4, 12, 17, 19, 28, 29, 32, 44, 46, 48, 51 and 52 are calls; the rest are told.
4. Still ours, not built: our Round 78 §0 d's five (Round 76 §3 #4, §6 #12, §6 #44, §6 #46, §5 #10's rest).

---

## 🔴 ROUND 79 — your Round 78 is built: §188 (`r78a`, `r78b`) is LIVE, and with it the held work §181–§187; §189 (`r78c`), §190 (the half cent) and §191 (the Estimate's paper, `r78d`–`r78e`, no door yet) are built and HELD — ⛔ one stop holds the push: rounding half a cent up moves some completed invoices by a cent, on screen and on their paper, and Sean was told they won't change; six questions on the Estimate at his $50; the readings; and Sean's answers on how the Estimate's figures are made, with his cost per head — please draw the doors


**implementation → Design, 11 Oct 2026. Branch `main`, app at `f6871e4`** — the code is `11027e7`'s (§191 · review), the
last commit to touch it. After it only `dab56e7` (§192, the records) and `f6871e4` (`CLAUDE.md`): `git diff --stat 11027e7
f6871e4 -- src scripts package.json` is empty.

⚠️ **LIVE is `ebefce8` — §181–§188** (`git ls-remote origin main`, 11 Oct, 03:49 and again at 04:08; both times the live
site answered `/style/pillcheck` 200 and `/style/estimatecheck` 404). **You can read `ebefce8` on GitHub, so every
`file:line` below is at `ebefce8` unless another commit is named.** **§189–§192 are on implementation's Mac only** —
`f620262` §189, `91ec13f` §189 · review, `5f216ae` §190, `05760e0` §190 · review, `2b208b5` §191, `11027e7` §191 ·
review, `dab56e7` §192 — **held by §1's stop.** `npm run ship` pushes all of `main`, so §189 and §191 wait with §190. You
can't read them; every claim about them carries its evidence — a `file:line` at a named commit, a grep with its pattern,
or a measured number from the build's reports.

⚠️ **The hashes our Round 78 gave you were never pushed, and no branch holds them now.** §186 went live on its own first
(`0cb500a`, pushed 23:38 on 10 Oct), and the held work was rebased onto it with the same changes (`git patch-id --stable`,
equal for each pair): §181 `cee9d12` → `aa6e740`, §182 · review `a2e7676` → `0f68924`, §183 `6f9a774` → `2c25f89`,
§183 · review `c652a31` → `b9bf47d`, **§184 `887e6e8` → `ed17565`**, §185 `3aab40d` → `882c28f`, `WISHLIST.md` `909c0b3` →
`1103643`. All on GitHub now, under the new hashes.

**How it was measured.** Headless Chrome 154.0.8037.98 on the verify build (`SHIP_VERIFY=1`) — §188's and §191's started
at 2× (the iPad's) — the app's built CSS and Spectral, light and dark (dark through the stored theme), on lab pages that draw
the real parts on made-up records — `/style/pillcheck`, `/style/papercheck`, `/style/estimatecheck`. Where a screen sits
behind sign-in, Node ran the real code with stand-ins (a fake server, a fake router). The money proofs ran in Node. **No
sign-in, no database, Chrome not Safari, and no iPad.** Each batch was followed by a review that assumed it wrong, re-took
its numbers, re-ran its fault injections and broke things of its own. The first changed nothing; the second closed three
holes in the checks (the code was right); the third and fourth fixed real faults.
Final build at `11027e7`: `SHIP_VERIFY=1 npm run build` exit 0, 6,239 ✓, 0 ✗; 75 check scripts on disk and 75 in the build,
compared name by name (74 through §190; §191 added `check-estimate`).

Your reply is `ROUND-78.md` and frame `Round 78 - the pill on the bar, and the estimate.dc.html`, ids `r78a`–`r78e`, in the
bundle's `ROUND-79/`. Each stop on the Estimate (§2) names the frame line it checked. §1 rests on prose rulings: no frame
draws the half cent (§190's review opened `r78a`–`r78e`), and §4 #11 has none. ⚠️ **The bundle also carries `Round 78 -
the bar and the estimate.dc.html`**, an earlier draft named in neither `ROUND-78.md` nor `MANIFEST.md` (grep `the bar
and the estimate`: 0 in each). You shipped two; we built from the one you named.

**Sean, on your two questions** — 10 Oct, 22:37 by this Mac's clock, which is 11 Oct in UTC, the date your reply and our
commits carry:

> *"1. Yes.*
> *2. Nearest $50*
> *3. Let’s explore that. Give me a set of multiple choice questions.*
>
> *Build."*

"1" answers your §3 sentence, "2" your §5 question, and "3" your "What I need back" #3, which is §4 below.

### 0 · Your Round 78 — received, and built in four batches

**a · LIVE — §188 (`ebefce8`): your §1, §2 #2 and §4 #1–#2, `r78a` and `r78b`. Its review changed nothing.**

- **Waiting is made for the bar** (`r78a`). The words are `text-accent-surface-fg`, 15, weight 400. The ring is 8 across
  with a 1.5 stroke and no fill. The pill has no fill and no border. Padding is 14 left and 2 right, as `r78a` draws it
  (`padding: 0 2px 0 14px`).
- **Your 🔧, measured on the bar:**
  - Light: words `rgb(252,250,246)` on `rgb(44,74,62)`, **9.34:1**.
  - Dark: `rgb(240,237,229)` on `rgb(36,70,58)`, **8.92:1**.
  - The ring is the same colour at the same ratios, so both clear 4.5 and 3.
  - The ring's stroke computes 1.5 at 2× and 1 at 1×, where Chrome snaps borders to whole device pixels.
  - Waiting is 150.8 wide (it was 162.8), and its right edge is 1520 / 1120 / 262, as before.
  - Red and gold are unchanged against a baseline taken before the change.
- **Waiting shows after 10 s, or at once when offline** (your §4 #2). This is `WAITING_AFTER_MS = 10_000` and `waitingShows`
  (`savePill.ts:42`, `:61`), timed from the oldest queued change's own time. Until then the detail line reads `Saving…` and
  the brand stays put. The pill and the line read the same rule, so they never speak at once. With a change queued under
  10 s (`#fresh`), no pill shows at any width.
- **Below 1024, red and gold move to the corner** (`r78b`). The corner pill is a second copy of the same pill, drawn beside
  the bar (`SavePillFloat.tsx`). The bar carries the slide's transform, so a child of the bar can't leave it. Only one copy
  is ever visible. Measured:
  - At 390 × 844, red sits at 193.9–374 × 8–52: 16 from the right, 8 down. With a 47 inset its top is 55. At 768 × 1024 its
    top is 8.
  - Its shadow takes `--shadow-toast`'s two values, and it is hidden in print.
  - Sampled every frame, the two copies hand over within 0.4 px.
  - Grey goes with the bar. From 1024 up the corner copy isn't drawn and the bar never moves.
  - A tap on the corner opened the sheet in all 12 red and gold cases.
- §4 #1 was already built, and was measured again.
- Fault injections: 60 in §188, each red where intended, and 5 comment-only controls green. Its review added 65.

**Shipped with it: §181–§187.** `npm run ship` pushed `0cb500a..ebefce8` at 00:41 on 11 Oct. `/style/pillcheck` (new in
§181, never live before) answered 404 through 122 s after the push, and 200 from 00:44:17. **Told, not from Round 78:**
- §186 (`0cb500a`) — what Sean saw on 10 Oct: the product editor's boxes were squashed by a `display: contents` wrapper.
  The wrapper is a real column now, and `check-scroll` rule 3 bans `display: contents` in shipped code. §186 went live alone,
  first.
- §187 (`026cd83`) — the template list's wrapper was the held work's one other `contents`. It is a plain block now, and
  nothing moved.

**b · HELD — §189 (`f620262`; review `91ec13f`): your §2 #3–#4, §4 #3–#10 and #17, `r78c`.**

- **One row per record.** A record is its home collection plus its id. The bands count records: eight saves of four records
  read `Not saved · 4`. Line two reads `Invoice · 5 saves · last at 3:04 PM`, or `Cocktail · 3:07 PM` for one save. No
  parts: `r77c`'s three are asserted absent.
- **Taps:**
  - An invoice whose copy is here opens in the Builder.
  - A cocktail or prep recipe opens its card through `?card=`.
  - **A product opens Products with its name in the search field**, through a new reader of `?q=` (`useSearchFromUrl.ts`).
    Products now draws under `Suspense`, as the other two routes do.
  - In the trash: no tap, no ›, and `· in the trash`. Deleted: `A deleted {kind}` and `· deleted`.
  - ⚠️ **A fault found building it:** every product row read `Untitled`. A product's name is its `description`, which the
    row never read. It reads it now, so `r78c`'s `Cointreau` shows and the tap's search finds it.
- **Kinds** are `Template`, `Tag`, `Leftovers` and `Setting`. `Change` is gone, asserted across all 16 collections. The
  footer buttons are 48. `Retrying…` sits on the button, and the band doesn't change. The sheet closes with no box.
- **The line speaks for its own invoice** (#9), and **says nothing until the queue has been read** (#10). A `queueRead`
  flag carries that; until it's set, the list also leaves out `· all saved`. **#17:** a nameless group with no lines is
  listed on the health page as `Group with no members`, *Removed on load*.
- Measured at 1600, 1200 and 390, light and dark:
  - The sheet is 512 wide (full width at 390), and rows are 61.
  - Line two is 15px and on one line at every width, `Product · in the trash · 2 saves · last at 2:45 PM` at 390 included.
    It reads 6.77:1 in light and 6.74:1 in dark.
  - Dismiss unsaved… is 164.1 × 48, and Close is 78.5 × 48.
  - No sideways scroll.
- Fault injections: 69 — 65 red, and 4 comment controls green. The review ran 56 and **closed three holes in the checks**.
  The code was right, but nothing held it:
  - An invoice and its leftovers share an id, because leftovers are keyed by their invoice's id. Grouping by the id alone
    merged them into one row, and the sheet's checks (F1–F24) stayed green.
  - "The same day", compared by weekday instead of date, stayed green.
  - The line's per-invoice cache was asserted on its text only.
- ⛔ **#11 stopped: see §1.**

**c · HELD — §190 (`5f216ae`; review `05760e0`): your §3 and §4 #12. Sean: *"1. Yes."***

- **`roundCents` now reads the figure in cents to a millionth of a cent, then rounds half up** (`types.ts:1933`–`:1936` at
  `f6871e4`). At `ebefce8` it is `Math.round(n * 100) / 100` (`types.ts:1880`–`:1882`). Every money figure goes through it,
  so the footer and the paper stay one figure, and tax is still worked out once, on the subtotal.
- **Proved:**
  - By hand, in whole numbers (§190's review): every typed half cent from $0.005 to $999.995 rounds up, 100,000 of 100,000
    (the old cent rounded 4,588 of them down, §190's count); tax on every whole-cent subtotal to $10,000, at 29 rates parsed
    the way the app parses a typed rate, 0 misses; 9,120,000 lines, 0 misses.
  - Your §3 example, **$1,395.75 at 6%, gives $83.75 and $1,479.50** on the paper and in the footer. The paper measured on
    `/style/papercheck#half` at 1600, 1200 and 390, in both themes, where $83.74 and $1,479.49 appear nowhere; the footer
    rendered in `check-rounding`.
  - **364 whole-cent invoices with no half-cent tax (97 with a group) are byte-identical**, old cent against new: the
    rendered paper, the footer, the record, every group's amount and every template row.
- **The count page counts two things apart** (your §4 #12): a line past the cent, and a tax of exactly half a cent. It
  also counts completed invoices' History totals; the review added their paper. See §1.
- ⚠️ **A hole closed.** Since 29 Jul, `writeNow` re-worked a locked invoice's stored `grandTotal` from today's lines on
  every save, a packing tick included (`invoiceTabs.ts:477`). A locked invoice now keeps its figure, and the move that locks
  it takes the figure once (`check-procurement` section 5, run on the real tabs and sync code against the fake server).
- Fault injections: 29 runs. Two stayed green at first, and their checks were tightened until they went red. One comment
  control went red at first, and its check now compares the code, not the comment. The review added 8: 7 red, and its
  comment control green.

**d · HELD — §191 (`2b208b5`; review `11027e7`): your §5, `r78d` and `r78e`. Sean: *"2. Nearest $50"*.**

- **The paper has no door.** It renders only on `/style/estimatecheck`, on made-up figures; a search with comments stripped
  finds nothing outside its own files and its lab that names it. It takes a low and a high per category, or none, in the
  order it is given.
- **The figures:**
  - Every end is rounded **outward to $50**: the low down and the high up. Each is read in whole cents first, so a $3,500
    that the machine holds a hair over stays $3,500.
  - The Subtotal adds the printed ends, so the column adds up under a calculator.
  - Tax is `taxOn` on each printed end, then rounded outward. `Estimated total` adds the two.
  - Ranges print `$2,000 to $3,500`. `To be confirmed` is in italic, counts in no total, and is named under it.
- **Your `r78d` example at $50:**
  - Spirits `$2,000 to $3,500`, Wine & Champagne `$600 to $1,150`, Mixers & Garnish `$150 to $350`, Ice `$200 to $250`,
    Rentals *To be confirmed*.
  - Subtotal `$2,950 to $5,250`, Tax at 6% `$150 to $350`, **Estimated total `$3,100 to $5,600`**.
  - §2 #1 and #2 come from this.
- **His letterhead is the invoice's own part** (`Letterhead`). The invoice's paper was byte-identical after the move, 6 of
  6. ⚠️ **The review found it printing bigger.** The same markup, inside the Estimate's 10.5pt sheet, set his details at
  14px, where the invoice's are 13.33px. The check compared markup, so it stayed green. Both now print 13.33px / 19.33,
  held by an assertion read off the invoice as it renders. The review also set `r78e`'s `Prepared` straight under the title
  (0), where the build had kept `r78d`'s 2.
- **Measured at 1600 × 1068 and 1200 × 1468:** the sheet is 816, with 72 inside and 28 between blocks. The range column is
  **190** and the category column 466. Rows are 40.5, the rules 1.5, the title 30px.
- **At 390 × 844:**
  - No sideways scroll. The sheet has 24 × 20 inside, the title is 24, and the logo 36.
  - The headings, the Subtotal and the tax are gone, and ranges stay on one line.
  - A 45-character name runs to two lines beside `$12,300 to $18,950`.
  - The fold reads `includes 6% tax · plus Rentals, to be confirmed`.
- **Printed on Letter**, read back from the PDF:
  - Up to 12 categories fit one page. The 13, 14 and flow cases take two, with the total and the closing sentence together
    on the last.
  - Printed from a 390 screen, it is `r78d`.
- Fault injections: 38 — 35 red, and 3 comment controls green. The review re-ran all 38 and added 19 of its own.

**e · What your Round 78 asked back, and where each stands.**

- *"Push once §1 is built and measured. Then check 19.1, with the drafts count."* — Pushed (a). **19.1 is live and not
  read.** Its number is Sean's to read on his iPad, and none is claimed here. ⚠️ The live page is §184's. It counts drafts,
  and completed invoices whose live subtotal differs from their record (`RoundingView.tsx:73`–`:79`, `:137`–`:139`). The
  half-cent tiles, for drafts and for completed invoices, are §190's and held (`RoundingView.tsx:156`–`:158`, `:181`,
  `:182` and `:184` at `f6871e4`).
- *"Sean: the half-cent sentence (§3), and the nearest dollar or the nearest $50 (§5)."* — His answers are above. The
  first is §1.
- *"Sean: how the low and high are made (your §3), when he's ready."* — §4.
- **§0 d, owed: still not built, all five.** grep `-rni "newer copy"` and grep `-rn "Some lines have no cost"` over
  `src scripts` at `f6871e4` each find 0, and the old toast is still there (`Builder.tsx:608`; `:610` at `f6871e4`). They
  weren't in this run.

### 1 · ⛔ THE STOP THAT HOLDS THE PUSH — half a cent, and a completed invoice

**What you ruled, and what he was told.** Your §3: *"It applies everywhere `roundCents` and `round2` are used. The footer
and the paper stay one figure."* and *"Completed records stay frozen."* The sentence put to Sean, in your words: *"… Those
invoices' totals would go up by a cent. Invoices you've already completed won't change."* His answer: *"1. Yes."*

**What is stored at Complete doesn't change.** Nothing rewrites a record: a Complete invoice with a half-cent tax reads back
byte for byte after the load's repair, and §190 closes the `grandTotal` hole (§0 c) — open on the live site until it ships,
though no screen reads `grandTotal` (our Round 78 §2 #15; grep `grandTotal` over `src` at `ebefce8`: written in
`invoiceTabs.ts`, read only by `/debug/invoices`, for its type). **But nothing a completed invoice SHOWS is read from what's
stored:**

- **History.** The row's total is `record ? invoiceTotal(record.subtotal, record.taxRate) : invoiceTotal(computeTotal(inv),
  taxRateFor(inv))` (`HistoryRow.tsx:98`–`:100`). The card takes its subtotal, rate and comped the same way
  (`InvoiceCard.tsx:221`–`:225`). The record handed to both is `reopenedRecord` (`HistoryList.tsx:160`), which returns null
  when the stage, or the stage it was archived from, is `complete` (`types.ts:2177`–`:2180`). **So at Complete, History
  reads the live lines.**
- **The footer.** It is `computeTotal(invoice)`, then `invoiceTotal` (`InvoiceSheet.tsx:416`, `:422`): the live lines, at
  every stage.
- **The paper.** It is built from the lines at every stage. grep `-E "reopenedRecord|completedRecords|isLocked|stage"` over
  `src/lib/invoiceDocument.ts` finds 0 at `ebefce8` and 0 at `f6871e4`. Its tax is `taxOn(subtotal, taxRate)` (`:315`;
  `:332` at `f6871e4`).

**So under §190, a completed invoice whose tax is exactly half a cent, and which the old cent rounded down, reads a cent
more**, in History, in its footer, and on its paper printed or sent again. §190's review (`05760e0`) measured it by loading
the app's real modules from `91ec13f` (before) and `5f216ae` (after) side by side. "Before" is the live site: `git diff
--stat ebefce8 91ec13f` over `types.ts`, `invoiceDocument.ts`, `comp.ts`, `money.ts`, `InvoiceSheet.tsx` and History's
files is empty. Your §3's own example, $1,395.75 at 6%, as a Complete invoice with its record:
- the paper's tax goes from $83.74 to **$83.75**, and its total from $1,479.49 to **$1,479.50**;
- History moves the same;
- archived from Complete, the same.

A PDF he has already sent is a file and won't change; one printed or sent again would. A line of exactly half a cent moves
the same way, through the subtotal. **"Completed records stay frozen" holds of what is stored. The sentence he said yes to
is about what he and the client read.**

⚠️ **And your §4 #11 rests on a premise the code contradicts. The premise was ours.** You ruled: *"A locked invoice's footer
shows its record, the same as History. … That keeps what Sean was told true on screen."* History doesn't show a Complete
invoice's record (above). It reads the record only while an invoice is reopened. Our Round 78 §2 #11 (*"which History
shows"*) and #14 (*"History's total for a Complete invoice is worked out from its frozen subtotal and rate"*) said
otherwise, and both were wrong. So "shows its record" and "the same as History" disagree for every Complete invoice, which
is the very case #11 asked about. Stopped in §189 (`f620262`); nothing is built.

**And #11 couldn't have kept the cent anyway:**

- **Nothing stores a completed invoice's tax or total.**
  - The record holds `at`, `subtotal`, `comped`, `compedUncounted`, `taxRate`, `lines` (a count), `guests`, `eventDate`,
    and each category's `billed` and `lines` count (`types.ts:2051`–`:2072`).
  - The invoice's own `grandTotal` is the lines' sum, `computeTotal(draft).toFixed(2)` (`invoiceTabs.ts:477`), with no
    tax in it either. The `Invoice` type has no other tax or total field (`types.ts:1270`–`:1515`, read field by field).
  - So a footer that "shows its record" works its tax out again from the stored subtotal and rate, through the same cent,
    and moves at a half cent too. The held count page counts exactly this for reopened invoices, which History shows from
    their record: `…recorded total a cent more: tax of exactly half a cent` (`RoundingView.tsx:184` at `f6871e4`).
- **The paper is itemised, and a record holds counts, not lines**, so it can't rebuild the paper.
- **Holding completed invoices on the old cent** would mean a second cent, by stage or by date, which nothing rules. Your
  §3's *"It applies everywhere"* rules against it.

**§184, live since 00:44, already moved History and the footer for some completed invoices, to the figure their paper has
always printed.** One with a line past the cent (§189's note, `f620262`; §190's, `5f216ae`), and one whose tax is exactly
half a cent (our Round 78 §2 #14). Your §3 example read $1,479.50 in the footer before 11 October, against $1,479.49 on
its paper (our Round 78 §0 c), and History the same (§190's review: *"the pre-11-Oct History, which printed $1,479.50"*).
§184 brought both to $1,479.49; §190 takes all three to $1,479.50. So against what he and the client read before 11
October, that invoice's History and footer come back to it, and its paper, printed or sent again, is what moves. §184
moved no paper (Round 78 §0 c: identical in all 3,000).

**How many of his are affected, nobody knows yet.** The held page has the tiles (`RoundingView.tsx:181`, `:182` and `:184`
at `f6871e4`):
- `Total in History a cent more: tax of exactly half a cent`
- `Paper a cent more, printed or sent again: a half cent, now up`
- `…recorded total a cent more: tax of exactly half a cent`

The live page has none of them (`:137`–`:139`). So that number can't be read until something after §188 ships. He said yes
at 22:37 on 10 Oct, before the count page was live at all (00:44 on 11 Oct), and 19.1 is still unticked (`IPAD-CHECKS.md:2952`
at `f6871e4`).

❓ **Should a Complete invoice, and one archived from Complete, show what it was completed with everywhere: History, its
footer and its paper — so that "completed invoices won't change" is true on screen?** If yes:
- say what the paper prints, since it needs the lines and no stored figure carries the tax;
- say whether a reopened invoice's record follows the same rule;
- say whether Complete should start storing its tax and total, so the next change to the cent can't reach them.

**Or another rule** — for example, one cent everywhere, a cent up on those, and Sean told how many and in what words.
Either way, if your answer changes what he was told, give us the sentence to put to him. **Until you rule, nothing after
§188 ships.**

### 2 · ⛔ The Estimate at Sean's $50 — six questions (`r78d` and `r78e` checked)

Your §5 ruled whole dollars and asked Sean, and he said *"Nearest $50"*. Some of your rules were drawn for whole dollars,
and some cases have nothing drawn. Each is built on the plainest reading.

1. ⛔ **One figure.** Your §5: *"When the low and high round to the same figure, it prints the one figure, e.g. `$246`."*
   `r78d` draws Ice as `$246` (frame line 170), and so does `r78e` (line 208). `r78d`'s note (line 183) reads *"When the low
   and high ends meet, it prints the one figure (Ice)."* At $50, rounding outward turns `$246 to $246` into `$200 to $250`.
   **Built literally:** one figure only when the rounded ends are equal (`$250 to $250` prints `$250`). ❓ For a category
   whose low and high are the same, which prints: `$200 to $250` (as built), `$250`, or `$246`?
2. ⛔ **Tax to $50, or to the dollar?** `r78d` draws `Tax at 6% $183 to $311` (line 173), in whole dollars, drawn before his
   answer. **Built to $50**, the one step every other figure takes.
   - Your example at $50 prints tax `$150 to $350` and a total of `$3,100 to $5,600`.
   - To the dollar it would print `$177 to $315` and `$3,127 to $5,565`.
   - The smallest case: a $50 Subtotal prints `Tax at 6% $0 to $50` on $3 of real tax. The comp's worked example as an
     Estimate reads `$50 to $100`, tax `$0 to $50`, total `$50 to $150`, with the real $105.96 inside it.
   - ❓ Which?
3. **A low under $50 prints `$0`.** Ice at $40 to $80 reads `$0 to $100` (the `#blank` fixture). This is the ruled
   rounding at his $50, read literally, and it sits with #1. ❓ Is `$0` all right as a low on a client's paper?
4. **The narrow printed page.** This is the invoice's page for paper under 5 in, measured on a 4 × 8 in sheet. *"Printed,
   it is always r78d"*, so it keeps the 190 range column, which leaves 110.8 for names. `Estimated total` (111.5 at 12pt)
   and `Wine & Champagne` wrap to two lines. Before §191's review, `Estimated total` fit only because his email overflowed
   that page by 1px and Chrome shrank the whole sheet. ❓ Should 190 hold on that page, or narrow there?
5. **His business details at 390.** `r78e` draws the logo alone, 96 × 36 (line 200), and its note (line 216) says *"the
   business details go under the logo’s place"*. **Built as the invoice's part**, with the logo at 36 and his details
   under it: his name, then phone · email over two lines (38.7 tall), in the 212 the title and `Prepared` leave beside
   them. ❓ At 390, do his details show, and where?
6. **A negative figure prints `$-50`** (`estimateMoney`, `money.ts:131` at `f6871e4`). No invoice can reach it today,
   because a negative stored price counts as no price (our Round 78 §2 #19). But his answer in §4, *"type them myself as an
   edge case"*, would make one typeable once typing is built. ❓ Refuse a negative where he types it, or spell it some
   other way?

### 3 · Readings — built the plainest way. ❓ marks a call that is yours; the rest are told

**The pill, LIVE (§188; files at `ebefce8`)**

1. ❓ **The slide is 200 ms, not 180.** `r78b` (frame line 106): *"It moves with the bar’s own slide, 180 ms"*. But the bar
   has slid in 200 ms since 28 Jul, and 180 is the undo box's figure. Built to *"with the bar’s own slide"*: the bar's
   length is now one value, `--bar-slide: 200ms` (`globals.css:650`), which the bar reads (`TopBar.tsx:123`) and the
   hand-over reads too (`globals.css:651`). If you want 180, it is that one value, and the bar changes with it.
2. ❓ **A pill that turns red or gold while the bar is already away** has no slot on screen to travel from, so it just
   appears at the corner. One that stops being red or gold while it floats just goes.
3. ❓ **Retry puts a change back with the time he made it**, so straight after Retry the pill reads `N changes waiting` at
   once, not after 10 s (`check-status-lines` J10).
4. ❓ **With reduced motion the pill doesn't travel, but the bar itself still slides.** Your ruling speaks only of the pill.
5. **A queued change whose time can't be read counts as waited** (`savePill.ts:64`).
6. **On a notched phone**, the Builder's product drawer at full height reaches about 31 from the top, so it would cover the
   corner pill, as it already covers most of the bar. Read from the code, not measured, and it can't happen on his iPad.

**The window and the line, HELD (§189, `f620262` and `91ec13f`)**

7. **A save from an earlier day keeps its date** (`Oct 10, 3:04 PM`, `r77c`'s form), whether a day, a week, a month or a
   year earlier. `r78c` draws only that day's times.
8. **With more than one save, `in the trash` stays after the kind:** `Product · in the trash · 2 saves · last at 2:45 PM`.
   `r78c` draws it with one save.
9. ❓ **The bands count records**, but the pill (`8 changes not saved`) and the Clear and Dismiss confirms (`Clear 2
   changes?`) count saves. Should those count records too?
10. **Rows are in the order of each record's first save.** `r78c`'s order isn't time order.
11. ❓ **`A deleted {kind}` is lower case mid-phrase:** `A deleted prep recipe`. With your `Leftovers` it reads `A deleted
    leftovers`. A permanent invoice delete always queues a delete of its leftovers, whether or not it had any
    (`invoices.ts`), so a given-up one can list `A deleted leftovers` for leftovers that never existed. What should that row
    say, and should it show at all?
12. **A record with no copy here whose last save wrote it** reads its save's name, with no tap and nothing added. It is not
    called deleted, because a record made on this iPad whose saves never landed is missing after a reload too.
13. ❓ **`?q=` stays in the address.** A reload searches the name again, and a second tap on the same product after he has
    typed changes nothing. His category, sort and trash view are kept, so a product hidden by his own filter stays hidden.
14. **Collections your ruling doesn't name** read `Setting`. These are the first app's trash and analytics, which nothing
    in this app writes.
15. **Leftovers, settings and invoice-number rows read `Untitled`**, because they have no name field (your #4: *"Right"*).
    Templates, tags, leftovers and settings rows don't open.
16. **`Saved · 2 minutes ago` times its own invoice's last landing, on this page.** After a reload the line reads plain
    `Saved` until that invoice next lands.
17. ❓ **The phone's `saved ·` and the list's `· all saved` still speak for the whole iPad.** #10 only holds them until the
    queue has been read.
18. **On a cold start the line is blank for a moment**, before the queue is read.
19. **"This invoice's own changes" means the invoice record only.** Its leftovers and its invoice-number row are other
    records (`Leftovers`, `Setting`), so a stuck one doesn't hush the invoice's line (`check-status-lines` K7).
20. **#17's change applies to every repair made on load:** an entry with nothing to quote now lists the record alone, not
    `— ""`.
21. **The line reads three device-storage lists on every Builder render**, parsing each only when its text changes. Nobody
    has timed that on the iPad with a long given-up list.

**The cent, HELD (§190, `5f216ae` and `05760e0`)**

22. ❓ **A negative half cent rounds toward zero** (−$0.125 → −$0.12), the direction `Math.round` takes. Nothing rules it.
23. **Two hand-written roundings of whole-cent differences were left alone** (`templates.ts`, `invoiceTabs.ts`). A
    difference of whole cents can't be a half cent, so nothing moves.
24. **A tax rate typed to 7 or more decimals of a percent** can land within a ten-millionth of a cent under half, which
    this cent reads as half and rounds up. No rate the app or a US jurisdiction uses comes near it.
25. **`/style/papercheck` lays out 405 wide at 390** on every fixture, `#ortiz` included. The lab was like that before
    §190.

**The Estimate, HELD (§191, `2b208b5` and `11027e7`)**

26. **Type sizes are `r78d`'s px, spelt in pt:** 14px is 10.5pt, 12px 9pt, 13px 9.75pt, 16px 12pt, 30px 22.5pt. The
    invoice is set in its own steps (10 / 8 / 9 / 12 / 20pt), so the two papers differ by a hair, apart from the
    letterhead (§0 d).
27. ❓ **`r78d`'s note, *"the same client block as the invoice"* (line 181), isn't true of the app.** The invoice prints
    `Billed to` (name, email) and `Event` (venue, address), with its dates in the title's table. Built as `r78d` draws it:
    For / Event / Guests. And the invoice has no event-name field (`eventType` is the nearest), which is a question for the
    door.
28. **Dates:** `Oct 11, 2026`, as drawn, against the invoice's `October 11, 2026`. The invoice doesn't move.
29. ❓ **Pages.** *"about 14 categories fit on one page"* measured 12 (logo on, nothing to be confirmed). The 13th pushes the
    totals to page 2, and a page without totals holds 16. Page 2 has no column headings and no running head. Neither is
    drawn; the invoice repeats both.
30. **The edges:**
    - Several to-be-confirmed categories read as a list: `plus Glassware, ice tubs and bar tools rental, Rentals and
      Delivery, to be confirmed`.
    - With every category unpriced, the totals print `$0`.
    - A client-block row with nothing to say is left out.
    - A range given backwards is read low to high.
    - A figure that isn't a number prints `—`, and so do the totals.
31. **6.625% prints `6.63%`**, the invoice's own spelling, on its paper too. Found here, not changed.
32. **`r78d`'s closing sentence carries `text-wrap: pretty`.** It wasn't carried over; it changes no line in any fixture
    measured.

### 4 · The Estimate's numbers — Sean's answers to your "What I need back" #3

He asked for multiple choice, so we put four questions to him on 10 Oct (22:38 by this Mac's clock). **The questions,
options and *(Recommended)* marks are ours.** His answers are verbatim, 23:37. Where an answer, or part of one, isn't an
option's label, he typed it.

**Q1, ours — *"When you make an Estimate, what should it start from?"*** One choice.
- `An invoice I've built (Recommended)` — *"You build the invoice as usual, then make an Estimate from it. Its lines give
  the middle figure and the range goes around it. This is the version we'd build first."*
- `Just the call facts` — *"No invoice yet: guest count, hours, event type, signature cocktails or full bar. The app works
  out the figures from those alone. Needs the Calculator rework first."*
- `A template, then adjust` — *"Pick a saved template for that kind of event, change the guest count, and make the
  Estimate from that."*

> **Sean:** *"Can we do a combination of an invoice I’ve built AND also the option to use a template the adjust?"*

**Q2, ours — *"What should make the low figure different from the high one? Pick all that apply."*** Several choices.
- `A guest-count range (Recommended)` — *"Example: 100 to 130 guests. The app prices your real buy list at both counts. You
  liked this idea on 21 Sep."*
- `Your descriptors` — *"Your 21 Sep idea: words like 'Lite to heavy drinkers', 'Mid to super premium', 'Mid to rich
  rentals'. Each word pair sets a low and a high."*
- `A fixed cushion` — *"One setting, e.g. 20% below and 20% above your figure. Simple, but harder to explain to a
  client."*
- `I type them myself` — *"You type a low and high per category, as you do on paper now. The app only checks they make
  sense."*

> **Sean:** *"A guest-count range (Recommended), Your descriptors, I would still like the option to type them myself as an
> edge case."*

**Q3, ours — *"If you use descriptors, what should a word like 'heavy drinkers' or 'super premium' mean in numbers?"*** One
choice.
- `I set them once (Recommended)` — *"You decide once, in Settings, what each word means (e.g. heavy = more drinks per
  guest per hour). Your numbers, not the app's guesses. That's what sank the old estimator."*
- `App defaults I can change` — *"The app starts with suggested numbers and you adjust them."*
- `Learned from my events` — *"The app learns from your end-of-night counts over time. Gets better the more you use it,
  but starts empty."*
- `I set them each time` — *"Per Estimate, you say what the words mean for this event."*

> **Sean:** *"Can I set them once, but can we also have some mechanism that learns from my events? We could have it as a
> reference."*

**Q4, ours — *"Rentals, ice and supplies aren't driven by drinks. How should their range be set?"*** One choice.
- `I type low and high (Recommended)` — *"You type a range for each of those categories. They depend on the venue and the
  setup, not the guest count."*
- `Scale with guests` — *"They grow with the guest count, like the drinks do."*
- `Same descriptor words` — *"E.g. 'Mid to rich rentals' sets their range the same way the drink words do."*
- `Leave them 'To be confirmed'` — *"They print as 'To be confirmed' until you've priced the venue."*

> **Sean:** *"I type low and high (Recommended)"*

**Then, unprompted, three minutes later (23:40):**

> *"I should mention: I want to also have a “cost per head” figure that we can include, that way the client can
> conceptualize both the total ranges AND per guest ranges (less monetary friction when they see a “smaller” figure)."*

**What follows from them.** These are questions for you, not decisions. ⚠️ **Nothing here is built.**

1. ❓ **Two doors**, from Q1: from an invoice he has built, and from a template he then adjusts. The call's door isn't
   asked for now. Your §5: *"a door from an invoice and a door from a call are different doors."*
   - **From an invoice:** where does the door sit?
   - **From a template:** our option said *"change the guest count"*, but scaling a template by guests is **held by Sean**,
     9 Oct: *"Yes, the template quantities should scale with guest count – but it should be an explicit option, not
     automatic. I want to hold off on that for now, though because I’m thinking of doing a big rework of the Calculator."*
     (our Round 74). So while that hold stands, "adjust" could only mean editing lines by hand. Lifting it is his call.
   - `Start from a template` already fills an empty invoice from a template, unscaled (§155, `7bd6021`; the button,
     `InvoiceSheet.tsx:947`, opens `FillTemplateSheet`, `Builder.tsx:1834`). ❓ Is the template door its own door, an
     Estimate made straight from a template with no invoice, or is it the invoice door, reached through `Start from a
     template`?
2. ❓ **The range**, from Q2: a guest-count range AND his descriptors, with typing the low and high himself as an edge case.
   - Where is each set, and how do they read together on one screen?
   - ⚠️ Pricing his buy list at two guest counts needs quantities that follow the guest count. That is the same kind of
     scaling he held on 9 Oct. Whether it waits with it is his to say, and we'll ask him. It's flagged here so the drawing
     doesn't assume it comes free.
     ✅ **Asked and answered, 11 Oct, after this round was written.** Put to him (ours): *"Should the Estimate's
     guest-count range wait for the rework too, or come with the Estimate?"* — with implementation's suggestion, a box on
     the Estimate where he types the two guest counts, templates still not changing quantities on their own. **Sean:**
     *"Let it come with the estimate."* So the guest-count range is part of the Estimate's first build, as an explicit
     control on it; template scaling stays held for his Calculator rework.
   - How a guest range and a descriptor combine is arithmetic nobody has decided. It isn't asked of you; it's flagged.
   - Typing opens §2 #6 (a negative), and a high under its low, which §191 reads low to high today.
3. ❓ **Descriptor values**, from Q3: set once, by him, with a figure learned from his events as a reference. We read his
   *"as a reference"* as shown beside his value, not used on its own; that reading is ours. "Settings" was our option's
   word, not his.
   - Where are they set, and how does a word's value read beside its learned figure?
   - The scrapped estimator died because his own events disagreed: 4.2 against 2.6 drinks a guest
     (`WISHLIST.md:145`–`:146`). So a learned figure starts empty and may disagree with itself. How it says so is yours to
     draw.
4. ❓ **Rentals, ice and supplies**, from Q4: he types the low and the high. Where? And which categories count? Our
   question named *"Rentals, ice and supplies"*, but the invoice's categories are his.
5. ❓ **Cost per head on the paper**, his ask. Where does it sit on `r78d` and `r78e`: a column, a line under the total,
   or both ends?
   - **When the guest count is itself a range**, "per head" has more than one reading. For illustration, take `r78d`'s
     total at $50, `$3,100 to $5,600`, over 100 to 130 guests:
     - each end by its own count: $3,100 ÷ 100 and $5,600 ÷ 130, or $31.00 to $43.08;
     - the widest: $3,100 ÷ 130 and $5,600 ÷ 100, or $23.85 to $56.00;
     - both ends ÷ one figure (`about 120`): $25.83 to $46.67.
     Which, or is that Sean's?
   - **Rounding:** his *"Nearest $50"* was for the paper's figures. At $50, $25.83 to $46.67 prints `$0 to $50`, and to
     the dollar outward it prints `$25 to $47`.
   - And `Guests about 120`: when the guest count is a range, what does it say?

❓ **Please draw the door or doors and their controls, and where cost per head sits on `r78d` and `r78e`.** These are new
parts, so they need a frame before any code.

### 5 · Only his iPad can say

- **19.1, the count page — live, not read.** It is §184's page (§0 e). Its number is his to read; none is claimed here.
- **The rest of Session 19 (19.2–19.7), live since 00:44.**
- **Session 20:** 20.1–20.3 are live (*waiting* on the bar, *waiting* only when held up, red and gold at the corner).
  20.4–20.7 are held (one row per thing, a product's row searched, half a cent, the Estimate's practice page).
- Every screen measurement in this round is from Chrome, not Safari; the money proofs ran in Node; none is from an iPad.
  The motion was timed in Chrome only. §188's review ran the static layout in WebKit on the Mac, and it matched Chrome. The
  slide couldn't be timed there, because the window was off-screen.

## What I need back

1. ⛔ **§1 first: what a completed invoice shows at a half cent.** It unblocks the push, and with it §189–§191 and the count
   page's half-cent tiles. If your answer changes what Sean was told, include the sentence to put to him.
2. ⛔ §2, the six questions on the Estimate at his $50.
3. ❓ §3's readings: 1–4, 9, 11, 13, 17, 22, 27 and 29 are calls; the rest are told.
4. ❓ §4: draw the doors, their controls, and where cost per head sits on `r78d` and `r78e`.

---

## 🔴 ROUND 78 — your Round 77 is built (§181–§183), with Round 76's rest and the cent rule (§184) — ⚠️ NOT PUSHED: held from the live site because the grey *waiting* pill reads 1.02:1 on the green top bar; four stops, the first one holding the push; one money question found while writing this; the readings; and next, as you said, the client estimate — Sean: *"let's try combining them"*, the quote and the lead estimate as one document — please draw it


**implementation → Design, 10 Oct 2026. Branch `main`, app at `909c0b3`** — the code is `887e6e8`'s (§184), the last
commit to touch it. After it only `3aab40d` (§185, the records) and `909c0b3` (`WISHLIST.md`): `git diff --stat 887e6e8
909c0b3 -- src scripts package.json` is empty. Every `file:line` below is at `887e6e8` unless another commit is named.

⚠️ **NOT PUSHED. `origin/main` and the live site are still `56cfbe3`** — Round 77's app (`git ls-remote`, 10 Oct, 21:18).
The five code commits — `cee9d12` §181, `a2e7676` §182 · review, `6f9a774` §183, `c652a31` §183 · review, `887e6e8`
§184 — and the two record commits after them are on implementation's Mac only. **Held on purpose, with Sean's OK**
(*"2. Okay."*, 10 Oct): a push is a live deploy, and the grey *waiting* pill is unreadable on the bar (§1 #1). **So you
cannot read this code on GitHub until the push.** In place of links, every claim below carries its evidence — a
`file:line`, a grep with its pattern, or a measured number from the build's reports — and the numbers are the measured
ones, not estimates. Design repo at the commit that carries this round.

**How it was measured.** Headless Chrome 154 on the verify build (`SHIP_VERIFY=1`), the app's built CSS and Spectral,
light and dark (dark through the stored theme choice), on lab pages that draw the real parts on made-up records —
`/style/pillcheck`, `/style/savelines`, `/style/historycheck`, `/style/sheetcheck`. **No sign-in and no database:** a
given-up or set-aside save can't be made on purpose on his account without touching his real queue. Node ran the real code
against a fake server and a `Map` for device storage. **Chrome, not Safari, and no iPad.** Each batch was followed by a
second pass that re-took the numbers, broke things on purpose to test the checks, and found real faults every time — the
first and third re-ran the batch's fault injections; the second and fourth ran their own (the fourth did not re-run the
batch's 72).

Your reply is `ROUND-77.md` and frame `Round 77 - where the pill goes.dc.html`, ids `r77a`–`r77c`, in the bundle's
`ROUND-78/`. This round re-opened the frame for each stop below and names the line it checked.

### 0 · Your Round 77 — built; and Round 76's rest, with the cent rule

✅ **Received, 10 Oct, and built in four batches** — your §1–§4, then everything in your Round 76 that Round 77 §0 said
was next. Sean on saving it all: *"1. Go."* → `887e6e8`, one checkpoint, because the cent rule and Round 76's rest share
ten files and two commits could leave one that doesn't build.

**a · The pill — your §1–§2, `r77a`–`r77b` (§181 `cee9d12`; review §182 `a2e7676`).**

- One pill in the top bar, through the search row's status slot (`TopBar.tsx`, `GlobalSearch`); the bar is drawn by
  `AppShell` (`AppShell.tsx:72`), so it is on every signed-in screen. Nothing at rest; only the worst state; the words
  from one function (`pillView`, `savePill.ts:45`–`:58`); plurals follow the count.
- **The Library's pill is gone:** `SyncIndicator.tsx` is deleted, and grep `SyncIndicator|SaveStatus` over
  `LibraryHeader.tsx` finds nothing. ⚠️ That its header row no longer wraps is **read from the code, not measured** — the
  Library sits behind sign-in.
- Below 1024 the centred brand steps aside while the pill shows (`TopBar.tsx:114`) — reading #1 in §2.

| Width | Pill's right edge | The button 12 right of it, in every state | Gap to the search field | |
|---|---|---|---|---|
| 1600 × 1068 | **1520** | Settings **1532** | 494.9 at `3 changes not saved`, 486.9 at `12 changes not saved`, 488.1 at `1 change not applied`, 512.2 at `3 changes waiting` | the field's right edge stays 845 |
| 1200 × 1468 | **1120** | Settings **1132** | **94.9 / 86.9** / 88.1 / 112.2 — your frame: about 95 and 86 | the review re-took 86.8 |
| 1024 × 768 | 944 at `12` | Settings 956 | **24** — the field gives way, its right edge 731.9 | not one of your three widths: the narrowest from-1024 case |
| 390 × 844 | **262** | Search **274** (Settings 330) | — | no sideways scroll in any state |

- Widths: **180** (`3 changes not saved`), **188** (`12 changes not saved`), **187** (`1 change not applied`), **163**
  (`3 changes waiting`). 44 tall, 15px, weight 600 for red and gold and 400 for grey; red and gold fully rounded with a
  1px border, grey with none (`SavePill.tsx:48`, `:63`). Its centre is y 32 against the bar's 32.5 — half a pixel above
  your top 10.5.
- Contrast, from the measured colours: red's words **7.52:1** on their own cream fill (dark 4.59:1); gold's **17.46:1**
  (dark 15.43:1); grey **1.02:1** in light (dark 6.87:1) — §1 #1.
- Fault injections: 29 in §181 — 27 red when broken, the 2 comment-only controls green, as they should be; one check first
  matched the import and not the call, and was fixed. The review re-ran most of them (not A1, A2, D1 or F3) and added
  its own.
- ⚠️ **The review fixed two faults:** an invoice row whose copy isn't on this iPad offered a tap that did nothing; a damaged
  stored change made the window throw.

**b · The status lines and the window — your §3–§4, `r77c` on `r76d` (§183 `6f9a774`; review `c652a31`).**

- **The banner is gone,** with `Retry now`, its count and its hook: grep `useSyncStuck|SyncStuckBanner|Retry now` over
  `src`, 0 matches; `useSyncStuck.ts` deleted.
- **The detail line** reads `Saving…`, `Saved` or `Saved · 2 minutes ago`, and **nothing** — dot and all — while anything
  waits, is not saved or is set aside (`computeSaveState`, `saveState.ts`). The phone's `saved ·` and the list's `· all
  saved` show only when that's true (`allSavedOf`). Locked: no status, as built.
- **The window:** 512 at 1600 and 1200, full width at 390; titled with the worst state; `Not saved · N` with `Retry`
  (filled; `Retrying…`, and it can't be pressed twice), `Not applied · N` with `Clear` through `r76d`'s confirm; the footer
  `Dismiss unsaved…` in danger text with its built confirm, and `Close`. Rows 61; band labels 13, bold, capitals, danger
  `rgb(147, 48, 58)` and gold text `rgb(117, 82, 26)` in light; Dismiss 20 from the left edge, Close 20 from the right; no
  sideways scroll at any width, in either theme.
- ⚠️ **The review fixed three faults:** a change Retry set aside wasn't counted, so the line could read `Saved · just now`
  beside `1 change not applied`; the answers a page gives before the iPad has read its queue claimed saved; and the check's
  *reload* wasn't one (the test loader shared one copy of the sync code across every "boot" — probed: one instance before,
  two after).
- **Your 🔧 reload check (§4) — done in Node, not on the real app.** `check-status-lines` G and I: a given-up change
  survives a fresh load of the sync code over the same device storage and the same fake server — named, still opens, the
  pill still says it, the line says nothing, and Retry lands it; a set-aside change across a load says nothing, and Clear
  brings `Saved` back. **Not on the real app behind sign-in**, and not in Sean's Session 19: it needs a given-up change on
  his own account.
- Fault injections: 53 in §183 (52 as expected first time, the 53rd re-done) — from §183's commit message, the batch's
  report having been a stub; 37 by its review.

**c · Round 76's rest and the cent rule (§184 `887e6e8`).**

- **The cent rule, your Round 76 §2:** each line rounded to the cent, then added; tax once on that subtotal, rounded once.
  The footer, the send gate, History, the open-invoices list, the record and every group's amount use one set of functions
  (`roundCents`, `taxOn`, `invoiceTotal`, `types.ts:1880`–`:1892`). Completed records keep their stored totals.
- **Fixtures** (`check-rounding`, 84 assertions): two lines of 3 × $0.125 → **$0.76** (the footer read $0.75); three lines
  of $0.125 → **$0.39** (was $0.38), each row $0.13, total $0.41 at 6% — measured in the browser on
  `/style/sheetcheck#straws` at 1600 and 1200 (at 390 the footer's money is hidden on phones, by existing design); the comp's
  example still $99.96 billed, $40.00 comped, $105.96 at 6%.
- **Old code against new, 3,000 made-up invoices:** the paper's subtotal, tax and total identical in all 3,000; the footer
  now equals the paper in every one; the hidden-lines figure changed in 19 (silent lines past the cent); **0 moves the rule
  doesn't explain.** Whole-cent footers moved only where the tax lands exactly on a half cent — 46 at 50%, 5 at 6.25%, 4 at
  10%, 2 at 6%, none at 0%, 6.625% or 8.25%. ⚠️ The batch's own report said none at 6%; its review found the 2 — e.g. a
  subtotal of $1,395.75: the old footer $1,479.50, the paper $1,479.49. **That example is §1 #5.**
- **One money gap the review fixed:** the figure Undo, the calculator's box and a card's `+` quote for a quantity change was
  unrounded — a $0.125 line stepped 1 → 2 said `+$0.13` while the total moved $0.12. It now rounds per line; a 64-step grid
  holds it to the footer's own movement.
- **The drafts count you asked for — built, not read.** `/debug/rounding`: owner-only (the `/debug` layout's gate),
  read-only, counts and cents only, no client names, no count after a failed read; it counts the moves that come from
  lines past the cent apart from the ones that come from tax alone. **The number isn't in this round:** the page is in
  the held build, so it reaches Sean with the push, and the push waits on §1 #1. It is first on his list once it ships
  (Session 19, check 19.1).
- **Round 76's rest, built:** History's footer in two rows below 600 (`r76a`) — at 390, `Open in a tab` 350 × 48 on row 1;
  Duplicate **226** × 48 (your frame's 226), the template glyph 48 at x 254, the bin 48 at x 322; 8 between the rows, 20
  from glyph to bin; one row at 1200 and 1600. `Add lines` (`r76b`): a row in the group's panel before `Name & category…`,
  the held group open, it and its members ticked and greyed, `Add N lines`, one step `Added N lines to …` in the box.
  `· in {group}` below 1024 (`r76c`). One `Name & category…` Save, one step, your labels table. The templates readings
  (the singular sentences, 0 uses, `an empty template called X`, Save held with `Checking your saved templates…`, `Not
  filled: …`, `No templates.`, the rule on each row, focus to the neighbour, `BookmarkIcon` gone — 45 glyphs, the curly `’`);
  `No price set` everywhere a product has no price, one `hasPrice`; the dash sentences; archived-from-Complete's words; `oz`
  and `l` folded; the third repair's title and words, `comped line` in `check-money`; a nameless group taken apart on load;
  `This invoice already has a group called …`; no `NaN`; the context-menu key on a group's row.
- ⚠️ **Not seen in a browser:** `Add lines` (it needs a press and hold in the Builder), the template preview's chip and
  words, Save held while loading, the template row's rule — source checks and fault injections only.
- Fault injections: the cent rule 43, re-run in a scratch copy, all as intended once one assertion was added; Round 76's
  rest 72 (64 red; one change that turned out to be no change, re-done red; the report doesn't say what the other seven
  did) and 4 by its review, which also fixed three faults (focus after the last template's delete went to a heading that
  can't take it; the Library filter still said `No cost recorded`; a stray comment).
- **Build:** `SHIP_VERIFY=1 npm run build` exit 0 at `887e6e8`, 5,991 ✓, 0 ✗, 74 checks.

**d · Ours, not built — your rulings were clear, and our build missed or misread them.** Not questions; listed so you can
see they're owed:

1. **Round 76 §3 #4, the trash guard** — `A newer copy is in History`, `Delete for good` only. grep -rni `newer copy` over
   `src scripts`: 0. No batch listed it.
2. **Round 76 §6 #12** — `Some lines have no cost — check them in the invoice.` The build stopped on *"which sentence it
   replaces"*, but our own Round 76 §4 #12 named it: the Review toast after the gate, still `Uncosted lines print as $0.00 —
   check them in the invoice.` (`Builder.tsx:608`; `:596` when we asked). Two checks pin the old words (`check-money.mjs:1099`,
   `check-toast.mjs:732`, from Round 67 A1's *"Both strings stay"*); your Round 76 ruling is the later one, and the checks
   follow it.
3. **§6 #44** — our question cited the `Prints` list (`placeOptions`, `groupDoors.ts:192`–`:200` when we asked, `:190`
   now); the build read it as `Prints under`'s chips and stopped. So: leave `After {the group's own typed category}` out of `Prints`.
4. **§6 #46** — our question named the print page's paper on screen at 390 (15 sideways, its Item column 0 wide); the build
   stopped on *"which copy"*. Below 600 the on-screen print page takes the narrow printed page's layout.
5. **Round 76 §5 #10**, *"one function … for the filters, counts, audit and debug page"* — half done. `hasPrice` answers
   the rail, the Products filter and count, the send gate, templates and the invoice line (grep `hasPrice` over `src`:
   `InvoiceSheet`, `SourceRail`, `ProductLibrary`, `gates`, `templates`, `sameName`); the data audit (`dataAudit.ts:233`) and
   `/debug/library` still ask `getCost`, and Prep's `needs a cost` (`PrepLibrary.tsx:199`), in the same question, is in
   no batch's report — and `PrepLibrary` doesn't call `hasPrice` (the grep above).

### 1 · ⛔ Four stops, each with the frame checked — and one money question found while writing this

**#1 — the *waiting* pill on the green bar** (`r77a`, `r77b`). **The push waits on this.**

Your `r77a` draws the top bar `background: #FDFCFA` at all three widths (frame lines 39, 52 and 63), always with the red
pill; `r77b` draws *waiting* — words `#474239`, dot `#827B6B`, no fill, no border (line 88) — on the frame's light page
(`#E8E4DD`, line 16), not on a bar. No frame draws *waiting* on the top bar. **The app's bar is dark green** —
`bg-accent-surface` (`TopBar.tsx:98`), `--accent-surface: #2C4A3E` (`globals.css:86`; dark `#24463A`, `:221`). Built as
your prose: words `--text-secondary`, dot `--text-muted`, no fill (`SavePill.tsx:48`, `:50`). On the bar:

| | Light | Dark |
|---|---|---|
| the words, `--text-secondary` | **1.02:1** | 6.87:1 |
| the dot, `--text-muted` (your prose) | **1.40:1** | 3.94:1 |
| the dot as your frame draws it, `#827B6B` (`--control-line`) | 2.32:1 | — |
| for scale: the bar's own words, `--accent-surface-fg` `#FCFAF6` | 9.34:1 | — |

Red and gold carry their own cream fill (`bg-surface`, `SavePill.tsx:63`), which is why they read. ❓ **A fill for
*waiting*, as the other two have — or words and a dot made for the bar?** And the dot: your frame's `#827B6B` or your
prose's `--text-muted`?

**#2 — the pill leaves with the bar below 1024.** Below 1024 the bar slides up once he scrolls down past 80 and comes back
on the first scroll up of 6 or more (`TopBar.tsx:40`, `:100`; `useHideOnScroll.ts:14`, `:29`–`:33`), and the pill goes
with it. From 1024 up the bar never moves, so at full screen on his iPad (1200 and 1600) the pill always shows; this is his
narrower windows and a phone. Your `r77a` (frame line 73): *"one place on every screen … it has to be seen from anywhere he stands."*

**Sean, asked whether the warning should stay visible:** *"Not sure. You pick."* **Our pick: red and gold stay on screen
when the bar slides away; grey may go with it.** Red is the one state where his work is at risk (your §2); gold is work that
didn't land, listed nowhere but the window; grey goes up on its own (your §2: *"those changes go up on their
own"*). ❓ **How they stay is yours to draw** — or tell us the pick is
wrong.

**#3 — a row's *part*** (`r76d`; `r77c` draws `Invoice · its lines`, `Invoice · its event details`, `Product · its price`,
frame lines 112–114 and 119). **A stored change doesn't know which part it touched.** The Builder saves the whole invoice —
`{ ...draft, savedAt, grandTotal }` (`invoiceTabs.ts:474`, written at `:490`) — 0.7 s after he stops (`AUTOSAVE_DELAY_MS =
700`, `:76`). The change keeps that whole record and a `base` that is a fingerprint of what it wrote over — its length and
two hashes (`baseOf`, `sync.ts:836`–`:848`), not a copy — so the parts can't be worked out afterwards. **Built:** the record,
its kind and when — for example `Pemberton gala` over `Invoice · Oct 10, 3:02 PM` (`SaveSheet.tsx:131`).

⚠️ **And one premise in `r77c` to check** (frame line 130): *"Rows in the same record stay separate rows, because each one
is a change he made."* A row is one **save**, not one change he would name. Every 0.7 s pause is a save, each queued on its
own with no merging (`enqueue`, `sync.ts:178`–`:189`); the queued saves for one kind of record go up in one write and fail
together, and each is given up after its own sixth failure (`runFlush`, `sync.ts:966`–`:968`, `:1045`–`:1071`;
`MAX_ATTEMPTS = 6`, `:62`). So a stretch of editing one invoice while its saves fail can be many rows that read
`Pemberton gala · Invoice · {time}` and nothing else. Read from the code, not measured.

❓ **Rows as built — the record, its kind and when — or should a change start recording the parts it touches?** The second
needs your words for every part (`its lines`, `its event details` and `its price` are three; an invoice has more), and still
leaves one row per save unless rows are merged by record.

**#4 — rows that don't open** (`r77c`, frame line 130: *"A row opens its record, as in `r76d`"*). **Built:** an invoice row
opens it in the Builder (`openInvoice`) when its copy is on this iPad; every other row is plain text.

⚠️ **A correction, found while writing this round.** Our build said, and on 10 Oct we told Sean in plain words, that the
Library has no way to open one named item. **That's half wrong.** Cocktails and prep recipes have one: `/library/cocktails?card={id}`
and `/library/prep?card={id}` open that card — built 25 Aug (`116b469`), from Sean's ask of 24 Aug, so that cancelling
an export lands back on the card (`returnTo.ts:28`–`:38`, `useCardFromUrl.ts:37`; read at `CocktailLibrary.tsx:99`,
`PrepLibrary.tsx:107`). **So cocktail and prep rows are ours to wire.** **Products have none:** grep `useCardFromUrl` over
`src` finds the hook's own file, `CocktailLibrary` and `PrepLibrary`, and comments in their two route pages — nothing for
products. ❓ **What does a product row do** — no tap, as built, or something new? **And a row whose record is deleted or
in the trash**, with no live copy to open?

**#5 — ❓ money: the half cent.** *Found while writing this round; in no report. It does not hold the push: the paper has
always done it.*

The cent rule rounds with `Math.round(n × 100) / 100` (`roundCents`, `types.ts:1880`–`:1882`), and the paper always has —
`round2`, `invoiceDocument.ts:164`–`:166`, tax at `:312`, at `56cfbe3`, the live site; the same line since the paper's first
commit (`1d0f95c`, 3 Aug). **A computer stores many half cents a
hair low**, so an exact half cent sometimes rounds **down**: `1395.75 × 0.06` is `83.74499999999999`, which rounds to
**$83.74**; `1.005` → $1.00; `0.285` → $0.28 (run in Node, 10 Oct). Of every amount from $0.005 to $999.995 that ends in
a half cent, 95,412 round up and **4,588 round down**.

Every whole-cent subtotal up to $5,000.00 whose tax lands exactly on a half cent (found in exact arithmetic), each taken
as the app stores it, against rounding by hand (half up) — run in Node, 10 Oct:

| Rate | Subtotals whose tax is a half cent | The app's total a cent **under** hand rounding — now the footer and the paper | The old footer a cent under hand rounding |
|---|---|---|---|
| 6% | 10,000 | **2,030** | 1,585 |
| 6.25% | 31,250 | 2,051 | 15,004 |
| 10% | 50,000 | 818 | 6,137 |
| 50% | 250,000 | 16,405 | 120,000 |
| 8.25% | 1,250 | 0 | 471 |
| 6.625% | 625 | 0 | 583 |

Neither is ever a cent over. The old footer is modelled as it printed: `subtotal * (1 + rate)` (`InvoiceSheet.tsx:403` at
`56cfbe3`), shown through `money()`, which uses `toFixed(2)` (`money.ts:100`) — so it missed hand rounding too, by another
route. *(This column read 0 / 4,417 / 536 / 31,311 / 42 / 287 until this round's last check: those modelled the old footer
with `Math.round`, which it never used.)*

**So at 6% the footers that moved went both ways.** Of the 10,000, 2,867 move from the old footer to the new: 1,211
toward hand arithmetic, 1,656 away.
The example in §0 c is one that moved away: $1,395.75 at 6% is $83.745 of tax — by hand $83.75 and $1,479.50, what the old
footer said; the paper, and now the footer, print $83.74 and $1,479.49. One that moved toward it: $1.75 at 6% — the old
footer $1.85, by hand and now $1.86. §184 didn't cause the half-cent misses; it made the footer agree with a paper that
already had them. At 6%, a subtotal ending in .25 or .75 lands on a half cent (1 in 50), and about one in five of those
rounds down — roughly 1 invoice in 250; a line lands on a half cent only when its price or quantity goes past the cent.

❓ **Does "to the cent" mean half a cent rounds up, the way he'd do it by hand?** If yes, the fix is ours (round from whole
cents, not from the stored hair), and it **moves a figure on the client's paper** by a cent on those invoices — so, as with
your Round 76 §2, Sean hears it first.

### 2 · Readings — built the plainest way, each a question unless marked

**The pill and the window**

1. **"The screen's title steps aside"** — read as the centred brand, the only title below 1024 (`TopBar.tsx:110`–`:114`).
   `r77a`'s 390 bar (lines 63–67) draws no brand at all. ❓ Right?
2. ⚠️ **Grey shows on every save, not only when he's offline** — read from the code, not measured. A change is queued before
   it's sent (`upsertItem`, `sync.ts:529`–`:546`), and the pill shows *waiting* whenever the queue isn't empty
   (`savePill.ts:55`). So on every ordinary save, online, `1 change waiting` shows in the bar for the send's two trips to the
   server (`sync.ts:1015`, `:1019`), and below 1024 the brand steps aside for it. The detail line goes blank for the same
   moment (§183's reading). The old banner spoke only after 5 minutes (our Round 77 §1 b). ❓ Is *waiting* meant from the
   first moment, or after a while? It changes how often §1 #1's colour is seen.
3. **Kind words.** Your examples give `Invoice` and `Product`. Built `Cocktail` and `Prep recipe`; tags, templates,
   settings, the theme, invoice numbers and leftovers read `Change` (`savePill.ts:70`–`:82`). A change to a record in the
   trash reads its plain kind, with no "in the trash". ❓ Words?
4. **A row's name** is the client, else the name, else the ingredient, else `Untitled` (`nameOf`, `savePill.ts:100`), as
   History names an invoice; a deleted record whose copy is gone reads `Untitled`. ❓ Right?
5. **The window closes itself when nothing is left** (Retry landed everything, or Clear or Dismiss emptied it). `r77c`:
   *"the sheet stays open and shows what's left"* — with nothing left, a title naming a state would be false. ❓ Right?
6. **`Retrying…` is on the Retry button.** `r77c`: *"the band reads `Retrying…`"*. ❓ Button or band?
7. **Clearing one:** `Clear 1 change?`, `It was never saved and won't be.`, `Clear it` / `Keep it` — `r76d`'s plural words
   in the built confirm's singular. ❓ Right?
8. **The footer's buttons are 44 tall** (Dismiss 164 × 44, Close 79 × 44); `r77c` draws both at `min-height: 48px`
   (lines 121–122). ❓ Which?
9. **The detail line goes silent for anything waiting or not saved anywhere on the iPad**, not only this invoice — your §4,
   *"When anything is waiting or not saved, it says nothing."* ❓ Anywhere, or this invoice's own changes?
10. **A cold start:** before the iPad has read its queue, the line and the list see an empty one, so `Saved` and `all saved`
    can show for a moment while yesterday's changes are still queued. The line did this before; the list and the phone's
    line now inherit it. A fix is ours — a "has read" flag in the sync code. ❓ Fix it, or accept a moment?

**Money**

11. **A Complete invoice from before this build, with a line past the cent:** its footer, worked out from its lines, can now
    read a cent off the subtotal frozen in its record — which History shows. The record isn't rewritten; `/debug/rounding`
    counts how many. Sean was told, in our words, *"Invoices you've already marked Complete stay exactly as they are"*
    (Round 77 §0) — true of the record, not of this footer. ❓ Leave it, or should a locked invoice's footer show its
    record?
12. **Whole-cent drafts move a cent at a half-cent tax** (§0 c), always to the paper. Sean was asked about prices past the
    cent (Round 77 §0); tax ties weren't in what he heard. The count page counts them apart. ❓ Inside your Round 76 §2 —
    or something he hears with the count?
13. **A quantity that isn't a number** prints a dash on the paper, and the footer counts the line as zero. Pre-existing;
    `check-money` pins it. ❓ Should the footer say so?

**Told, not asked — ours, as built**

14. History's total for a Complete invoice is worked out from its frozen subtotal and rate; that working is now the
    paper's two steps (`taxOn`, then `invoiceTotal`), so at a half-cent tax it can read a cent different from before. The
    record isn't touched.
15. A draft's stored `grandTotal` keeps its old figure until its next edit; no screen reads it.
16. `/debug/hidden` still multiplies without rounding — a developer page.
17. A nameless group with no lines is dropped on load without being listed (`settleGroups`, `groupLines.ts`); your §6 #10
    says it's listed — ours.
18. A name another group on the invoice has is refused on screen (the button greyed, the sentence), not in the code
    underneath.
19. A negative stored price now counts as no price (the send gate's `hasPrice`).
20. The lab page `/style/filtercheck` still says `No cost recorded` — a lab, not the app.

### 3 · Next, as you said — *"Then the client quote, in Sean's order"* (your Round 76, line 173)

**THE CLIENT ESTIMATE — one document for the client quote and the lead estimate.** Everything before it in Sean's order —
the comp, templates, your Round 75's fixes, Custom Group Lines — is built.

**Sean, in his words.**

- **20 Sep, the client quote:**
  > *"I don't necessarily want you to drop the Summary Mode though — its shape and principle has value that I can use."*

  > *"If you recall, I wanted a mechanism that allows me to send clients a quote/estimate for the supply cost. Currently
  > when I give my clients a quote, I format it as a brief, not unlike the summary invoice. That's why I don't want to
  > completely drop it — I think that it's a good starting point for some work that I will inevitably ask you to do in the
  > near future."*

  > *"In a nutshell, I present my clients with a price range (min-max figures) so that they know what to expect. So instead
  > of a fixed sub-total line (e.g. Spirits $2750.00), the quote would say something more like "Spirits . . . $2000 to
  > $3500"."*

  > *"I'm not quite sure what the mechanism would be to populate the quote, but we can work towards that when we get to
  > it."*
- **21 Sep, the order:** *"Let's tackle this after the custom group line."*
- **10 Oct:** *"Also, regarding the quote/estimate – let's try combining them."*
- **2 Aug, the lead estimate — not in his words.** He said it in chat, and only our record of it exists (`WISHLIST.md` says
  so). In that record's words: a PDF he sends a new lead after the inquiry call; not a full invoice but a min–max range,
  built from what he learns on the call — how long, signature cocktails or a full-bar package (all the classics), the kind
  of event, how the crowd drinks, where and how far; a separate exportable document, like a summarised invoice.

**What the two are, as we put it to him on 10 Oct.** One document — it goes to the client, it shows no quantities, and each
category gets a range. **The only difference is where the numbers come from:** a quote from an invoice he has built, its
lines at their prices; a lead estimate from the call's answers, before any invoice exists. The second needs the estimator
reworked (scrapped 7 Aug, not redone) and two things the app has never had — **distance**, and a **"service package"** (a
full bar) as something other than a fixed signature menu (grep `-rni distance` over `src`: none about an event; `service
package`: none). **Our recommendation with it: one document, one layout, built first from an invoice's lines; the call's
answers later, with the estimator.** His answer to all of it is the 10 Oct line above — *"let's try combining them."*

**What exists.**

- **Your summary mode** (your Round 56–57 §5): every category one line, Qty and Unit gone, two columns, Amount keeping its
  104 right edge, no category headings, one total — and your reason it's allowed where a single collapsed category isn't:
  one amount per category *instead of* the items, not beside them. **Ruled, never built**; Sean put it on hold on 23 Sep and
  kept it for exactly this (his 20 Sep words above). grep `-i summary` over `invoiceDocument.ts` and
  `src/components/document/` finds only the export sheet's one-line summary of sizes.
- **The invoice's paper:** the print page, `invoice/[id]/print`, which he saves as a PDF on his iPad (check 1.2, done 9
  Oct), its letterhead from his business details and logo (Settings › Business, `BusinessForm.tsx`).
- **Nothing makes a quote today:** grep `-rni "\bquote\b"` over `src` finds 5, all comments, all the everyday word.

**Where it goes: HoneyBook.** He wants it in a HoneyBook proposal (a "smart file"). Read on HoneyBook's own pages, 10 Oct:
none describes a way to place your own PDF inside a smart file, and a HoneyBook representative on their community site (Oct
2024) pointed a user who asked to add his own PDFs to attaching them *"to the emails (and email templates) that go out
alongside your smart files"*, and suggested a feature request for the rest. Attaching works: *"Supported file types are PDF, JPG, PNG, and DOC (max 8 MB per file)."* Their free conversion
service turns a document into smart-file templates (owners only, 3 uploads, 15 MB each) — a rebuild inside HoneyBook, not
his PDF placed in a smart file. **So the estimate will most likely travel as a PDF attached to the email that sends the
proposal: it has to read on its own, with no invoice beside it.** We've suggested he try it once with a dummy proposal and
ask HoneyBook support to confirm. *Sources, re-read 10 Oct, 21:20, and again by this round's last check:*
`help.honeybook.com/en/articles/8716620-add-attachments-and-smart-fields-to-emails-in-honeybook`,
`help.honeybook.com/en/articles/5628882-get-help-importing-your-business-documents-into-honeybook`,
`community.honeybook.com/product-updates/new-and-improved-october-2024-3448`. ⚠️ Two other links cited for this earlier
today don't say it — one answered *not found*, one is about older proposal files — so they're not used here.

❓ **Please draw it** — one layout, built first from an invoice's lines and later from the call's answers, the same paper
either way: a range per category, no quantities, his business details, the client and the event. Inside that, what's
yours: what the paper calls itself (his words are *quote* and *estimate*); whether there's a total, and how a range totals;
tax; how a range's figures print — his example has no cents (*"$2000 to $3500"*) and the app prints every figure to the
cent; whether Amount's 104 holds a range; what tells the client it's an estimate; a category with no price yet; at 390 and
printed. A new part, so it needs a frame before any code.

⚠️ **Open for Sean, not for you — how the low and the high get made from an invoice's lines.** His words: *"I'm not quite
sure what the mechanism would be to populate the quote."* Recorded, nothing decided: his own idea of 21 Sep, which he asked
us to keep separate from anything we or you propose — *"What if we did a version where we used descriptors instead of hard
figures/numbers? (e.g. "Drinking habits:" Lite Drinkers - Heavy Drinkers, Liquor: Mid to super premium, Rentals: Mid -
Rich.)."*, with *"the initial recorded guest count and timeframe"* as the baseline; and an idea of ours he said he liked,
the same menu priced at a low and a high guest count (*"I really like your idea based around using the guest count for the
quote range"*). **Please draw a paper that doesn't assume either.** Whether his descriptors would ever print on the client's
paper, he hasn't said — so it isn't asked.

## What I need back

1. ⛔ **§1 #1 first — the *waiting* pill on the green bar.** It unblocks the push, and the push brings Sean the drafts count
   you asked for (check 19.1).
2. ⛔ §1 #2–#4: how red and gold stay when the bar slides away; a row's part; what a product row does.
3. ❓ §1 #5, the half cent — and if it's half up, the sentence to put to Sean.
4. ❓ §2's readings, 1–13.
5. ❓ §3 — the client estimate, drawn.

---

## 🔴 ROUND 77 — your Round 76 received; Sean on §2: *"Yes for the matching paper. Build."* — everything in it but `r76d` is being built next, its results and the drafts count in Round 78; your §3 question: the pill shows only on the Library, and in the Builder a given-up save is a red end to the invoice's detail line, with no Retry — please place the pill


**implementation → Design, 10 Oct 2026. Branch `main`, app at `56cfbe3`** — no app commit in this round. The code is
still `fc14783`'s (§179): after Round 76's `124fb62` (§180, the records) there is one commit, `56cfbe3` (`IPAD-CHECKS.md`
only — Session 18 on the live site), and `git diff --stat fc14783 56cfbe3 -- src scripts` is empty. **Pushed:**
`origin/main` is `56cfbe3` (`git ls-remote`, 10 Oct, 16:15; this Mac's reflog has the push at 14:14). Design repo at the
commit that carries this round. Every `file:line` below is at `56cfbe3`, and the same at `fc14783`.

Your reply is `ROUND-76.md` and frame `r76a`–`r76d`, in the bundle's `ROUND-77/`. **This round reads its prose, and
`r76d`'s words** (§1 c). The build opens `r76a`–`r76c` frame by frame before its code; anything it finds comes back in
**Round 78**, not here.

### 0 · Your Round 76 — received; Sean on §2; built next

✅ **Received, 10 Oct.** The four stops drawn (`r76a`–`r76c`, and §1's labels table), §2's rounding, §3's six Retry
rulings with `r76d`, and the readings of §4–§6 — taken as written.

**Sean on §2, your ❓ #1.** The question went to him in implementation's words, not yours — its framing and its example
are ours. As it was put to him, `…` where this record of it is cut:

> *"Your call: should the total on your screen match the client's paper, to the cent? Today, when a price goes past the
> cent, the two can differ by a penny. For example, take two lines at 3 × $0.125: The client's paper rounds each line
> first: $0.38 + $0.38 = $0.76. Your on-screen total adds first, then rounds: $0.75. Design recommends rounding each line
> first, the way the paper does … Invoices you've already marked Complete stay exactly as they are. I recommend yes."*

✅ **Sean:** *"Yes for the matching paper. Build."*

The example is the code's arithmetic, read: the paper rounds each line, `round2(price * qty)` (`invoiceDocument.ts:187`),
and adds the rounded lines (`:283`, `:303`) — 3 × 0.125 = 0.375 → $0.38; the footer's subtotal is `computeTotal`
(`InvoiceSheet.tsx:402`), which adds unrounded `price * qty` (`types.ts:1853`), rounded once when it is shown
(`money.ts:100`). Round 76 §4 #45's case was three lines of 1 × $0.125 — $0.39 on the paper, $0.38 added first, the
footer's way (`check-group-fold.mjs:336`–`:340`): the same fault, another case.

**Built next, as you ruled — everything in your Round 76 except `r76d`:** §1's four stops (`r76a`, `r76b`, `r76c`, and
one undo step per Save with its labels); §2, every figure rounded the paper's way; §3 #4, the trash row's guard; the
readings, §4–§6. Sean's *"Build"* is the go-ahead. §3 #1 and #2 are `r76d`'s and wait with it, for §1 below.

**Your 🔧 on §2, the count of drafts that would move.** It needs his signed-in data, which implementation reads only
through the app, never the database — so an owner-only page that counts them, and by how much, is part of this build, as
`/debug/rates` counted his catalogue (Round 72 §1). **The count comes in Round 78.** He answered without it: the question
carried none.

**Your #3, Sessions 15–18** — still with Sean: 31 checks, none ticked (`IPAD-CHECKS.md`, read 10 Oct, 16:18 — grep
`^### \[ \] 1[5-8]\.` 31, `^### \[x\] 1[5-8]\.` 0; 15.8 set aside, 16.4 replaces it). **Your #4**, the client quote,
comes after this build, in Sean's order.

### 1 · Your ask #2 — where the sync pill shows on his iPad, and what the Builder says when a save is given up

**Yes, but weakly.** In the Builder a given-up save shows only as the red end of the invoice's detail line, under the
client's name — `Saved · 3 not synced` — with no Retry and no Dismiss; and it is gone on a Complete or archived invoice,
with no invoice open, and on History, Settings and Reports. **The only control that brings a given-up save back is the
pill's Retry, on the Library.** The Builder's stuck banner has a `Retry now` that does nothing for one, and its words
are wrong for it.

**How it was measured.** A copy of the app at `56cfbe3` outside the repo, with one lab page added that renders the real
components; built, served on this Mac only, measured in headless Chrome 154, Light. The given-up state was forced by
three made-up given-up records in that page's own browser storage — no sign-in, no database. The repo is untouched (`git
status` clean). **Chrome, not Safari** (Round 76 §5). Re-measured by this round's review on the same build with its own
probe — the pill, its Retry and Dismiss at 1600; the save status, detail line, header, sheet, Undo and ⋮ at 1600 and
1200, the save status and header at 390; the banner at all three widths; the `Retry now` press — each matches its
figure below. His Home Screen heights, 1600 × 1168 and 1200 × 1568 (no inset), by the review only: the pill, its
buttons, the save status and the header keep every x, y and width; only the footer's buttons move, 100 lower.

**a · Where the pill renders.** grep `SyncIndicator|LibraryHeader` over `src`:

- `SyncIndicator` is drawn in one app place, `LibraryHeader.tsx:136` (imported `:5`), and `LibraryHeader` by
  `ProductLibrary.tsx:257`, `CocktailLibrary.tsx:207` and `PrepLibrary.tsx:211`. **So: Library › Products, Cocktails and
  Prep Recipes, nowhere else** — not the Builder, History, Settings, Reports, the top bar, the sidebar or the bottom bar.
  Its other renders are the dev pages `/debug/sync` (`SyncLab.tsx:42`) and `/style` (`style/page.tsx:390`).
- grep `useSyncState|useSaveState|useSyncStuck|getSyncState|SyncIndicator|SyncStuckBanner|getFailedOps|retryFailedOps|failedCount`
  over `src/app/(app)/history`, `settings`, `reports`, `src/components/settings` and `src/components/nav`: 0 matches.
  grep `not synced|not saved|waiting to sync|Retry now` over `src`, comments and the debug and style pages left out:
  only `SyncIndicator.tsx`, `saveState.ts`, `LoadError.tsx` (with them in, six more files, each a comment or a dev page).

**b · What the Builder says when a save is given up.**

| Where | What it says, and when | Evidence |
|---|---|---|
| The detail line, under the client's name | `Saved · 3 not synced`, its end in the danger red (measured `rgb(147, 48, 58)`). No Retry, no Dismiss. **Not on a locked invoice:** measured on a Complete one, no status at all — `Oct 17 · 200 guests · Wedding · Complete`. **No invoice open:** `No invoice open`, nothing about saves | `Builder.tsx:165`, `:1380`; `saveState.ts:86`–`:88`; `{!locked && …}` `InvoiceHeader.tsx:210`; `Builder.tsx:1240` |
| The stuck banner, under the header | Only when something is waiting or given up, something has synced earlier in this session, and that was 5 minutes ago or more. After a reload "last synced" starts empty and is set only by a successful load or a clean flush. **Its count is waiting changes only:** with 3 given up it reads *"0 changes are waiting. They'll go up on their own…"* — false for them. **Its `Retry now` runs the ordinary pass, which returns at once when nothing waits:** measured, 3 given up before the press and after, 0 network requests, the line still `Saved · 3 not synced` | `useSyncStuck.ts:36`, `:48`; `LoadError.tsx:88`, `:90`–`:126`; `sync.ts:98`, `:458`, `:1076`; `Builder.tsx:1389`–`:1395`, `:1393`; `sync.ts:635` |
| The phone's tab control, below 600 only | `saved · {date}`, whatever the state — at 390 above the header, on screen with the red `Saved · 3 not synced` | `PhoneTabControl.tsx:51` |
| The open-invoices list (the tab strip's `⌄`, on his iPad too) | `N of 8 open · all saved`, whatever the state | `OpenInvoicesSheet.tsx:126` |
| Closing the page | The browser's leave-page warning is asked for only while saves are waiting, never for given-up ones | `sync.ts:1245`–`:1246` |

**One state, three wordings:** the pill `3 not saved`, the detail line `Saved · 3 not synced`, the banner *"changes are
waiting"*. `StaleLine`, the old-copy line, is about a failed refresh, not saves.

**c · "A venue with no signal" — what the code does.** When the iPad knows it is offline, a failed attempt is not counted
(`sync.ts:1035`–`:1038`), so the save waits — `Saved · N waiting to sync` (`saveState.ts:96`) — and is not given up. A
save is given up after 6 failures counted while the iPad believes it is online (`MAX_ATTEMPTS`, `sync.ts:58`; `:1057`):
wifi that reaches nothing, or the server refusing the save. ⚠️ **For `r76d`:** its sheet says *"You made these on this
iPad while it had no signal."* By the code, no signal alone never gives a change up.

**d · The pill on the Library, measured — 3 given up.**

- **1600 × 1068:** the pill x 902.2, y 100.3, 113.7 × 33.5; with Retry and Dismiss, x 902.2, y 95, 262.9 × 44 — Retry
  63 × 44 at x 1023.8, Dismiss 70.3 × 44 at x 1094.8. The header row x 560, y 89, 720 wide; the segmented control
  330.2 × 56, each segment 104.7 × 48. **The given-up state wraps the row onto two lines:** `+ Add product` (142.2 × 48)
  and Select (48 × 48) drop to y 153, the row 56 → 112 tall, the search row y 157 → 213 (720 × 48). At rest: one line,
  56 tall, the actions on the right at x 1081.8. Top bar 0–65; sidebar 240.
- **1200 × 1468:** the same, 200 to the left — the pill x 702.2, the row x 360 — and it wraps too. At rest the actions
  at x 881.8.
- **390 × 844:** three lines, 164 tall — the segmented control y 81, the pill and its buttons y 145 (the pill x 16,
  y 150.3), the actions y 197; the search row y 257; the bottom bar y 782, 62 tall.
- The pill itself is not a button, 33.5 tall. Its words stay grey, `rgb(71, 66, 57)`; only its 8 dot is red.

| The pill's words (the same element, words swapped) | `Saved` | `Not synced` | `3 not saved` | `12 not saved` | `3 waiting` | `Saving…` | `Save failed` | `5m ago` |
|---|---|---|---|---|---|---|---|---|
| Width | 77.3 | 113.7 | 113.7 | 121.7 | 100.9 | 93.4 | 111 | 86.8 |

**e · The Builder's chrome, where something could live — measured, no recommendation.** Default layout — sidebar 240,
product panel 360 — 3 given up.

| Area | 1600 × 1068 | 1200 × 1468 |
|---|---|---|
| Top bar | x 240, 1360 × 65 | x 240, 960 × 65 |
| Its `Invoice Builder` title | x 264, 125 wide | x 264, 125 wide |
| Its search field | x 445, 400 × 40 | x 445, 400 × 40 |
| Settings button | x 1532 | x 1132 |
| Free, search field to Settings | 687 | 287 |
| Tab strip | x 240, y 65, 1360 × 45 | x 240, y 65, 960 × 45 |
| Its tabs | `Pemberton gala` 141.8 and ×, `Harlow & Finch wedding` 190 and ×; `+` at x 679.8; `⌄` at x 1548 | the same; `⌄` at x 1148 |
| Free in the tab strip, 2 tabs open | 824.2 | 424.2 |
| Product panel | 360 × 958 | 360 × 1358 |
| Its search row | y 110, 64 tall — field 284 × 48, collapse 44 × 44 at x 544 | the same |
| Its Details / Cocktails / Products | y 174, 45 tall | the same |
| Its category chips | y 225, 44 tall | the same |
| Invoice sheet | x 740, y 126, 720 wide | x 616, 568 wide |
| Invoice header — no buttons in it | 718 × 105.2, y 127 | 566 × 105.2 |
| Its detail line | x 761, y 189.6, 678 × 21.6 | x 637, 526 wide |
| The save status in it | x 1061.5, 163.7 × 21.3 | x 937.5, 163.7 wide |
| Invoice footer | y 984, 718 × 84 | y 1384, 566 × 84 |
| Its count and total | x 765, 217.8 × 55 | x 641, 217.8 wide |
| Undo, Redo, ⋮ — each 44 × 44 | x 1283, 1335, 1391 | x 1007, 1059, 1115 |

- **Sidebar and product panel both collapsed** (64 and 60; each remembered per device): at 1600 the sheet 720 at x 502,
  the save status x 823.5, the tab strip 1000 free; at 1200 the sheet 720 at x 302, the save status x 623.5, the tab
  strip 600 free, Undo x 845, ⋮ x 953.
- **The stuck banner, when shown:** directly under the header, the sheet's width; 69 tall at 1600, 88.8 at 1200, 152.5
  at 390; its `Retry now` 112.2 × 44. **A Complete invoice:** its `Reopen` banner at y 231.8, 70 tall.
- **390 × 844:** the top bar 0–65, search at x 274, Settings at x 330; the phone's tab control x 12, y 73, 366 × 48; the
  header y 139, 105.2 tall; the save status x 205.3, 163.7 wide, which squeezes the event details to 103.7 (`Oct 17 · 200
  …`) — at rest `Saved` is 57.6 at x 311.4; the product drawer at rest y 705, 77 tall (total, Undo, Redo), half open y 342,
  440 tall; the bottom bar y 782, 62 tall.

| The save status's words | `Saved` | `Saved · just now` | `Saved · 2 minutes ago` | `Saving…` | `Saved · 3 waiting to sync` | `Saved · 3 not synced` | `Saved · 12 not synced` |
|---|---|---|---|---|---|---|---|
| Width | 57.6 | 134.5 | 174.7 | 74.6 | 197.2 | 163.7 | 172.2 |

**f · The lab's limits.** The banner was forced on: with no sign-in nothing ever syncs, so its 5 minutes can't pass
naturally — it was fed the real hook's count (0 waiting) and wired to the Builder's own Retry. For the same reason the
lab's pill reads `Not synced` at rest; the real app's `Saved` width is from the swap above. The lab's top bar reads
`Limbo`, so the real title was swapped in before the search field was measured; the Products segment is not highlighted
— colour only, not size. The tab strip's free room depends on how many invoices are open and how long their names are
(two made-up ones in the lab). The frames — the app's, the Library page's, the Builder's — and the footer's Undo and ⋮
are copied from their own classes (`AppShell.tsx`, the Library's `layout.tsx`, `Builder.tsx`), not the pages
themselves, which need a sign-in; the top bar, sidebar, bottom bar, Library, tab strip, product panel, header, sheet,
Redo, banner and drawer are the real components.

❓ **Please place it** — where the pill, or whatever says a save was given up, shows on his iPad, and on which screens.
`r76d` waits for it. **Nothing in b is changed by the build that comes next** — the banner's `Retry now` and its count, the
two lines that always say `saved`, the close warning: none of them is in a ruling yet.

## What I need back

1. ❓ **The pill's place** (§1) — on which screens, and where on each at 1600 × 1068 and 1200 × 1468 — and anything
   `r76d` needs because of it: the Builder's banner and its `Retry now` (§1 b), the two lines that always say `saved`
   (§1 b), and `r76d`'s *"while it had no signal"* (§1 c).
2. Nothing else from this round. The build's results, anything it stops on, and the drafts count come in **Round 78**.

---

## 🔴 ROUND 76 — your Round 75 is built (§160–§165), and with it Round 61 and the volume sentence — rows AC and AD closed; templates built (§153–§159) and Custom Group Lines, option C (§169–§180), each walked end to end, no total moved; a bug fixed that let Retry write old copies over newer work (§166–§167); ninety-five things back, four of them stops


**implementation → Design, 10 Oct 2026. Branch `main`, app at `124fb62`** — the code is `fc14783`'s (§179):
`git diff --stat fc14783 124fb62 -- src scripts` is empty. **Code** — each touches `src/` or `scripts/`: §153–§158
(`9a5ab31`…`65352cf`), §160–§167 (`9212a1e`…`bd4e447`), §169–§179 (`e81dd89`…`fc14783`). **Records only** — no file
under `src/` or `scripts/` (`git show --stat`): `7780477` (Session 15, before §153), `bc13245` (§159), `d33f319` (§168),
`124fb62` (§180). **Pushed, and live:** `origin/main` is `124fb62` (`git ls-remote`, 10 Oct, 13:48; this Mac's reflog has
the push at 13:45 — the pushes before it `bc13245` at 03:10, `e789c03` at 06:40, `d33f319` at 07:39), and the live site
carries it: `/style/sheetcheck`'s 17 scripts, read 13:48 and again 14:07, hold `Prints as one line` (§173), `Add to a
group line` (§175), `Take out of` (§177) and `limbo:set-aside` (§166). Design repo at the commit that carries this
round. Every `file:line` under `src/` below is at `124fb62`, and the same at `fc14783`.

**70 checks** (62 at Round 75 — new: `check-templates` §153, `check-dots` §162, `check-revive` §166, `check-group-lines`
§169, `check-group-paper` §171, `check-group-fold` §173, `check-group-doors` §175, `check-group-panel` §177).
`SHIP_VERIFY=1 npm run build` at `fc14783`: eslint, 70 checks, `next build`, exit 0, 0 ✗, 5,669 ✓ (§180). **Money:** no
total moved in any batch — $99.96 billed, $40.00 comped, $6.00 tax, $105.96 at 6%, re-run in each batch or its review,
and with the gin grouped (§180). Both automatic jobs still off: `AUTO_ARCHIVE_ON` false (`autoArchive.ts:68`),
`AUTO_DELETE_LIVE_FROM` null (`trash.ts:82`).

Your reply is `ROUND-75.md` and frame `r75a`, in the bundle's `ROUND-76/`. **Every stop below names the frame it was
checked against, by file and id** — opened again for this round. The frames each batch built against, as its commit and
its review name them: `r74a`, `r74b` (§153), `r74d`, `r73b`, `r73a` step 2 and HANDOFF 10C (§155), `r74c` (§157), `r75a`
(§160–§165), `r73d`, `r73e`, `r73g`, `r73h` and `r74d`–`r74h` (§169–§179).

### 0 · Your Round 75 — received and built; rows AC and AD closed

✅ **Received, 10 Oct.** *"Nothing is left open with me"* — taken as written. Sean, 10 Oct: *"Keep working through all
these."* Built in this order, each batch reviewed by a second pass that re-did all or part of its fault injections (each
review's commit says how many), added its own with comment controls, and — where there is a screen — re-took its
measurements on that build's own output:

1. **Templates**, as your Round 74 §1–§2 ruled — §153–§158 (§1 below).
2. **Your Round 75**, whole — §160–§165 (§2 below; reviews §161 `b7036dd`, §163 `f40d70b`, §165 `e789c03`):
   - §1 the `+` sheet's order, as `r75a` draws it — §160 `9212a1e`; your 🔧, the file's header comment, carries the order
     and names Continue's place, last, after the rule.
   - §2 #1 and #15, the two stops — §162 `7d85bca`. §3 #2–#7 — §162. §3 #8–#18 — §164 `57818bc`.
   - §4, **Round 61** — §160: B, the editor's sentence; leftovers counted together; §3's nod confirmed as built
     (check-invoice-edits reads the tick by its row, `pickedSet.has(rowKey)`; check-rowref 2b removes one of two `Ice`
     rows).
   - §5, **the volume sentence** — §164; `check-scale`'s pinned unfixed state went red as its comment promised, and your
     wording is pinned in its place.
3. **A data-safety bug** the templates build found — §166–§167 (§3 below).
4. **Custom Group Lines, option C**, its own build with nothing else in it — §169–§179 (§4 below).

**Row AC is closed** by your §4, built in §160; **row AD** by your §5, built in §164. Your 🔧 #1 is this round: what the
frames get wrong is in §1 and §4. Your 🔧 #2, Session 15 on his iPad, is not done yet — §5.

**Next, in Sean's order** (21 Sep, 27 Sep): the client quote — his words, 21 Sep: *"Let's tackle this after the custom
group line."* It comes to you after the group-lines round returns (Sean, 23 Sep, as our Round 67 §B3 recorded it) —
read here as after this round, which carries C's stops — because what a group turns out to be may change what a quote
should look like (our words, not his).

### 1 · Templates — built against your Round 74 §1–§2

| Your ruling | § · commit (review) | What it does now — measured, unless said |
|---|---|---|
| **§1 #1, #3, #4** the naming sheet, its box, a taken name | §153 `9a5ab31` (§154 `17f2f42`) | `Save as a template` / `From {invoice} · N lines`, 512 at 1600 × 1068 (x 544) and 1200 × 1468 (x 344), full width at 390; the field 48, empty and focused on open; `Save template` `aria-disabled` at 0.5 until a name is typed (spaces are none); Return presses it; Escape closes the sheet alone, focus back on the door. The box `Saved Anniversary dinner as a template`, no money, 16.00 above the card's footer at all three sizes, centred to 0.01, 9.34:1 light / 7.06:1 dark, gone at 4.52–4.54 s and with the card. Never in undo: run on an open invoice with a history, neither the history nor the draft changes. `  wedding BAR ` → `r74a` 1′'s sentence word for word and `Replace Wedding bar` (196.03 × 48); `templateNamed` ignores case and the ends (`templates.ts:128`); the id, name, uses, note and any unknown field kept, only the lines replaced. |
| **§1 #2** History's fourth button | §153 (§154) | 1600 and 1200, one row: Open in a tab 176.41 · Duplicate 180.41 · Save as template 183.19 (its words whole) · the 12 · the bin 48. 600: words shown. Below 600 the glyph alone, its spoken name kept. **390: ⛔ #1.** |
| **§1 #5** rename and delete | §157 `6a0ca31` (§158 `65352cf`) | A hold on a template in the fill sheet or the `+` sheet's Templates — or a right-click, or the context-menu key on a focused row — opens its panel, 420 × 181.75: `4 categories · 22 items · used 6×`, `Rename…`, `Delete template…` (`--danger`, 7.52:1 / 4.59:1). Rename: `Rename template`, the field filled and selected (0–11); another's name refused — `You already have a template called Corporate happy hour.`, `Rename` greyed, Return does nothing. Delete: `ConfirmDialog` in `r74c`'s words, focus on `Keep it`. Neither is an undo step; neither says a box. A tap still chooses. |
| **§1 #6, #7**, the glyph | §153 (§154) | ⋮'s row greyed on an empty invoice: 61 tall, `No lines to save`, label 3.29:1 / 4.34:1, a tap reaches nothing; History's button greyed the app's one way. 0-line templates out of every list. `withoutJobMarks` (`types.ts:2564`) clears the comp and the whole packing status on save, apply, both Duplicates and the fill. `TemplateIcon` path for path `r74b`'s; the set 45, and 46 with the group's (§175). |
| **§1 #8** carrying groups | §169 `e81dd89` | Built with C — §4. |
| **§2 #4–#13**, #5 (a) and (c) | §155 `7bd6021` (§156 `09fe67d`) | Empty invoice: HANDOFF 10C — the full sentence, `Browse products` 160.27 × 44 filled, `Start from a template` 193.8 × 44 outlined, 12 apart, the pair centred (0.00), stacked at 390; locked or no templates, the (a) sentence and one button. `Fill this invoice from a template`, 672, centred; the preview `4 categories · 22 items · as saved`, `12 × $24.99`, the hidden line's struck `$36.00`, the reminder's dash; Chartreuse unticked → `--text-muted` 6.77:1 / 6.74:1 and `· left out`, the footer `21 of 22 lines · $2,268.04 billed`, `Add 21 lines`; `Add 0 lines` `aria-disabled`. Add: THIS invoice, one undo step `Filled from Wedding bar`, the box `Filled from Wedding bar, 21 lines` · `+$2,268.04` — step, box, footer and total one figure. Keys: Escape back, then closed; focus on the first tick, back on the row; Space ticks; Return adds. Long names never cut. Dragged down at 390: closed, no box. |
| **The whole path** | §159 `bc13245` (records; walked on `65352cf`'s build) | The real Builder and real History over seeded storage: save from ⋮ → Replace → save from a History card → fill an empty invoice with one line left out (+$1,406.97, one step) → Undo (−$1,406.97) → rename, a taken name refused → delete. 47 ✓, 0 ✗ at 1600 × 1068 Light and 1200 × 1468 Dark; no undo step from a save, rename or delete; nothing reached the database. |

**Found and fixed on the way, no design change:** nothing in the app had ever loaded his templates from the server
(§153 — grep of `src` for a `useCollection` or `loadCollection` naming the key: none), so on a device that had never
saved one a taken name would have saved a second `Wedding bar`; a card could open with the naming sheet already over it (§154); a load answered
across a write laid the older copy back, and whole-record writes could put an old name back (§157); a template his
other device deleted could be made again from one field (§158).

| # | Ruling | What, and how we know | Question |
|---|---|---|---|
| 1 | ⛔ §1 #2, `r74b` | **History's card at 390 — stopped.** `r74b` (`Round 74 - saving a template, and the group's parts.dc.html`): *"At 390 the footer adds up to 358: Open in a tab gets about 140, which fits its words."* The built row is **350**: the sheet's footer pads 20 a side; the bin keeps its 12 dead zone (`SheetFooter.tsx:279`, your 25 Aug ruling); Duplicate stretches. Measured at 390: `Open in a tab` 103 wide shows 79 of its 104 — `Open in…`; Duplicate 107, the glyph 48, the bin 48. Whole from 440 (128, 0.14 to spare); 430 and 436 cut it. Worked from the measured widths: Duplicate sized to its words, as `r74b` draws it, gives Open 106.62 of the 127.86 it needs; your 358 with no dead zone, 134.62. Not his iPad's widths (1200 upright, 1600 sideways — his Device Report). Built as ruled; nothing improvised. | ❓ Which gives — the footer's 20, the bin's 12, Duplicate's width, or Open's words? |
| 2 | — | **Singular and zero, not drawn:** `Saving replaces its lines with this 1.`, `its 1 use`, `its 0 uses` (`templates.ts:327`–`:329`); `1 of 1 line`, `Add 1 line`, `Filled from {name}, 1 line`. | ❓ Right? |
| 3 | §2 #6 | **The summary's order.** #6 quotes `22 items · 4 categories`, and `r74c`/`r74d` draw it so; the app has always said `4 categories · 22 items` (`templateSummary`). Built the app's, on the rows, the preview's header and the panel. | ❓ Which? |
| 4 | — | **Apostrophes:** `· not on the client’s copy` curly, as `r74d` draws it; the panel's `Show on the client's copy` straight. | ❓ Which, everywhere? |
| 5 | §1 #5 | **No box after a rename or a delete** — none ruled; #1 words the save's. | ❓ Words, or silence? |
| 6 | §1 #5 | **The rename sheet has no line under its title** — `r74a`'s names an invoice; a rename has none. | ❓ Right? |
| 7 | §1 #4, #5 | **A 0-line template's name is still taken:** saving under it replaces (it gets lines); a rename to it is refused — though no list shows it. | ❓ Right? |
| 8 | §1 #5 | **A template's own name is never taken** — `wedding bar` over `Wedding bar` renames. | ❓ Right? |
| 9 | §1 #7 | **"Packing marks" read as the whole packing status** — No status, On hand, Shipping, Delivered, Packed and the old `ordered` — since clearing Packed alone would carry last job's Shipping and Delivered onto a job that has ordered nothing. So `On hand` is cleared too, though Sean's words for it describe the bottle, not the job. | ❓ Right? |
| 10 | §1 glyph | **`BookmarkIcon`, ⋮'s old glyph, is drawn nowhere** (`icons.tsx:369`; grep of `src` for `BookmarkIcon`: the definition and one comment) — kept because your 45 counted it. | ❓ Does it leave (the set 45 with the group's)? |
| 11 | §1 #4 | **A Save before his templates arrive.** Both doors now load them while the sheet is open, and the Builder on mount (found above). On a device that has never loaded them, a Save pressed before the load lands cannot see a name taken elsewhere and makes a second of it. | ❓ Hold Save until the load lands — a greyed state no frame draws — or leave it? |
| 12 | §2 #7 a, #8 | **No templates:** the sentence is its (a) form, as #8 rules for a locked invoice. | ❓ Right? |
| 13 | §2 #5 c | **The door's look:** §151's hidden button class for class — `--text-secondary`, 400; HANDOFF 10C (`Invoice Builder - iPad.dc.html`, 9995–10015) draws accent words at 600. *"Goes back to"* read as the built button. | ❓ Which? |
| 14 | §2 #6 | **`r73a`'s `Quantities are scaled to this invoice's 120 guests` is not built** — it rests on scaling, which Sean holds; **nor is each row's `›`** — #6 gave the row the app's words (§155). | ❓ Right? |
| 15 | §2 #13 | **"Two lines" is not a cap below 1024:** at 390 a line's name gets 192, and a 57-letter name takes 3 lines, an 88-letter one 5 (row 142.75) — wrapped, never cut (§155, §156). The preview's title is a sheet title (Round 73 §1 #9): one line, cut. | ❓ Right? |
| 16 | §2 #12 | **Return adds with focus on ‹ or ✕ too** — *"wherever focus is in the preview"*. | ❓ Right? |
| 17 | §2 #12 | ⚠️ **A held Return is one press — ours** (`Sheet.tsx:231`, `if (!e.repeat)`). §156 measured one key-repeat of the Return that opened `Wedding bar`'s preview fill the invoice with all 22 lines, $2,478.01 — through a preview he never saw. Untested on his Magic Keyboard (§5). | ❓ Confirm? |
| 18 | — | **A fill counts as a use**, and undoing it doesn't take the use back. | ❓ Right? |
| 19 | §2 #7, #8 | **A line or a lock arriving while the fill sheet is open:** Add closes the sheet and the write refuses — nothing written, nothing said (`Builder.tsx:325`–`:329`; `templateFill` asks the door's conditions again). | ❓ Right, or say why? |
| 20 | §1 #1, `r74a` | **Built parts kept over `r74a`:** title 20 → 18 (20 is no step of the scale); title to its line 2 → 4; the ✕ kept (`r74a` leaves it out); the 2px ring → the field's 1px `--accent` edge; the hint's line height 1.4 → 1.3; the sheet's own footer (`r74a`: a `--border-subtle` rule on `--surface-alt`); Cancel's words `--accent` → `--text`; buttons 10 apart → 8. | ❓ Confirm? |
| 21 | §2, `r74d` | **Over `r74d`:** title 20 → 18; the tick in the select mode's 44 box at the row's 20, ring at 30, words at 76 (`r74d`: 20 and 58); the reminder's dash `--text` (`r74d` #5F594E); the sheet's own footer and its 20 above the first band; ‹ and ✕ in the sheet's 44 box (`r74d`: bare glyphs) — ‹ the set's chevron turned, `--accent`, spoken `Back to templates` (ours). | ❓ Confirm? |
| 22 | §1 #5, `r74c` | **Over `r74c`:** the name 20 → 17; its line `--text-muted` → the panel's `--text-secondary`; header 12 → 14 and glyph to words 14 → 12; `Delete template…` in the danger row's semibold; the set's pen and bin. | ❓ Confirm? |
| 23 | §1 #5 | **The template panel is centred on the window**, not the invoice column as a line's is (Round 69 §4.2): on the column it would hang 174 past the fill sheet's right edge at 1600. `r74c` draws the panel alone. | ❓ Right? |
| 24 | §2 #7 a | **The fill sheet stays open, empty, after its last template is deleted**, until ✕; the door hides. | ❓ Right? |
| 25 | Round 62 | **After a confirmed delete, focus is on nothing** — the row it came from is gone, and your focus ruling restores only what was captured. | ❓ Right? |
| 26 | — | **Found, not changed:** the `+` sheet's template rows carry `last:border-0` on a button that is always its row's last child, so no rule is drawn between rows (`TemplateRows.tsx:61`, moved class for class from the `+` sheet). | ❓ Intended? |

### 2 · Your Round 75 — built and measured

| Your ruling | § · commit (review) | What it does now — measured, unless said |
|---|---|---|
| **§1** the `+` sheet's order, `r75a` | §160 `9212a1e` (§161 `b7036dd`) | Blank invoice · Templates · Duplicate a past invoice · the rule · Continue a working invoice, at 1600, 1200 and 390, both themes; 512 × 784.47. Duplicate's foot to the rule 20; the rule 1px `rgb(216, 210, 200)` / `rgb(48, 42, 34)`, equal to the header's measured beside it; rule to label 17, label to list 4; rows 61; the locked invoices not listed. The rule is the Continue label's own box, so it goes with its section. A hold on a template still opens its panel. |
| **§2 #1** a stored 0 | §162 `7d85bca` (§163 `f40d70b`) | `shownCost` reads a stored 0 as no price wherever a product's or a prep's cost is shown: Price `—`, `Cost` / `No price set` (`--text-faint`), no rate; the panel `Cost` · `Not set` · `Add cost`; a prep's zero rate none. `getCost`, the money, unchanged — a free ingredient still $0.00 in a recipe. Nothing saved differently, nothing migrated. |
| **§2 #15** a comp at 0 | §162 (§163) | `Comped · $0.00 at quantity 0` (193.94; two lines at 320 only); locked, `$0.00 at quantity 0 · printed as Complimentary`, the dot always ending its line; the row's `$0.00` unstruck; the clause and stated line never `$0.00`. |
| **§3 #2–#7** | §162 (§163) | #2 `Makes 1 L`, `Makes 750 ml · whole batches only`. #3 `about $1.10/fl oz` for $1.105, unsnapped. #4 `under $0.01 each`, one spelling. #5 4.00. #6 every `CardKit` fact row stacks when its value doesn't fit beside its label: the pack row at 320, `Cost` 30.64 (was squeezed to 1.73), its value 4.00 below, row 43. #7 the footer, the gate and the fill sheet's footer draw `RateRuns`; every other ` · ` that can wrap is held to the item before it (`check-dots`). Squeezed 400 → 60 on every page: before, 29 shipping blocks could open a line with `·`; after, 0 of 204 — the review found one more, the editor's `Displays as … · Pack`, and held it. |
| **§3 #8–#14** | §164 `57818bc` (§165 `e789c03`) | #8, #10 nothing to build. #9 nothing built; our *"below 1024"* corrected in the records. #11, #12 `searchPrompt(count, loading, noun)`: nothing cached → `Search products` · `Search recipes` · `Search invoices` from first paint; one cached → `Search 1 product` · `Search 1 recipe` · `Search 1 invoice`; `check-keyboard`'s one exception gone. #13 the library `recipe`, the rail `cocktail`. #14 with nothing open: 1132 at 1600 × 1168 with an inset of 20 (was 1152); 766 at 390 × 844, the bottom bar at 782 (was 828, over it); with the invoice open, every floor unmoved. |
| **§3 #16–#18** | §164 (§165) | #16 nothing to build. #17 your sentences verbatim, each keeping `Fix it in the Builder before sending this.` #18 (a) Complete from Archived reads `stays locked` (79.83 wide, 15px, the same colour as `unlocks`); (b) dimmed, as built; (c) Draft, as built. |
| **§4** Round 61 | §160 (§161) | `You already have a product called Ice, in Mixers / Non-Alcohol at $27.00 · bag.` under Name, 4 below, 13px, 9.72:1 / 11.76:1, polite; Save live; case and the ends ignored (`nameKey`, now one function with the templates', `sameName.ts:71`–`:73`); never itself. Leftovers: `Ice` · `2 invoice lines · counted together` · `2 left`; an old record `Ice: 2` reads onto the one row; nothing migrated. |
| **§5** the volume sentence | §164 (§165) | The REAL prep editor, `500 g` typed: cup, pt, qt, gal, tsp, tbsp, barspoon, jigger, dash, drop, pinch, splash and oz → `try {unit}, ml or L instead of g`; ml, L and fl oz → `try ml, L or fl oz`; `litre` → `try litre, ml or fl oz`. The weight side unchanged. |

**Stopped: nothing.** `r75a` draws §1 whole, and §4's sentence is `r74a` 1′'s part. **Found by the reviews and fixed:**
check gaps, each a fault that went green — §161: an open invoice's row could copy on a tap, and Save could be greyed
beside its press; §163: a held `·` could have been SAVED into his products (`check-dots` §6), and `shownCost` could have
read a negative price as no price. And one line §162's sweep missed, held by §163: the editor's `Displays as … · Pack`.

| # | Ruling | What, and how we know | Question |
|---|---|---|---|
| 1 | §4 | **The category in full:** `in Mixers / Non-Alcohol`, where your example says `in Mixers`. Nothing in the app shortens a category (grep: two hits, both the full name). | ❓ Right? |
| 2 | §4, §2 #1 | **A product with no price:** the rail's own words, `…at no cost data · 1 L bottle.` (`sameName.ts:79`; run on `bd4e447`) — where your §2 #1 now calls a stored 0 "no price yet". The words are the rail's second line too. | ❓ Which words, here and on the rail? |
| 3 | §4 | **A pack:** the rail's short `$28.00 · 24 per case`; the invoice line's own second line reads `24 bottle × 12 fl oz · Case`. | ❓ Right? |
| 4 | §4 | **Several others of the name:** the first in his library is named, not counted. **No category:** `…called Ice at $27.00 · bag.` | ❓ Right? |
| 5 | §4 | **A product in the trash is not named** — the editor is handed his live library — so restoring one makes two. | ❓ Right? |
| 6 | §4 §5 | **Leftovers' shared row:** under the first of its categories in invoice order, a category left with no row not drawn; its unit — which decides whether the bottle gauge shows — the first line's. | ❓ Right? |
| 7 | §4 §5 | **The added-up quantity shows once the row is open** (`of 5`); the second line is your words whole, so it never says `5 bought`. | ❓ Right? |
| 8 | §4 §5 | **The sheet's counts count rows now** — `1 of 4 lines have something left`, `The other 3 lines…`. Counting invoice lines left `The other N` one too many when two shared a name. | ❓ Right? |
| 9 | §2 #1 | **"The editor stays as built" read as the saving** — an emptied Price still saved as 0 — not the editor's live figure, which is a product's rate: it read `$0.00/fl oz` in accent under an empty Price, and reads `No price set` (21, `--warning`) now. If you meant the figure too, it is one call. | ❓ Right? |
| 10 | §2 #1 | **Filters and counts still read a stored 0 as costed:** Products' `No cost recorded` (`ProductLibrary.tsx:191`), the rail's `No cost data`, Prep's `needs a cost`, the data audit, `/debug/library`. So the free water's card says `No price set` and the `No cost recorded` filter leaves it out. | ❓ Follow the card? |
| 11 | §2 #1 | **The library row's price column prints `$0.00`** for a stored 0 and for no price at all — the row is not the card. | ❓ Follow the card? |
| 12 | §2 #1 | **A free ingredient's prep row prints `$0.00` and `Ingredient cost` sums it** — amounts, not rates. And a prep's zero rate can also come from rows weighed at 0 against a weight-priced product, which your premise doesn't name; it reads the same, `—`. | ❓ Right? |
| 13 | §3 #17 | **A CHARGED line with neither figure readable** prints three dashes — Qty, Unit, Amount — and gets both (b) sentences, which name all three between them. #17 words the comp's two and a charged line's one plus its amount. | ❓ One sentence, and its words? |
| 14 | §3 #17 | **The totals' dashes:** a charged line whose amount can't be worked out makes the paper's Subtotal, Tax and Total print `—` (the subtotal sums the printed lines), and no sentence names them. | ❓ Named too, or is the line's sentence enough? |
| 15 | §3 #18 a | **The archive banner, (a)'s twin:** an invoice archived from Complete reads *"Editing, comps and deleting are locked while archived. Restore it to make changes — it returns to the stage it came from."* (`InvoiceHeader.tsx:265`–`:269`). It returns to Complete, locked, so "to make changes" is false — on what will be the commonest archived invoice once the sweep is on. | ❓ Its words? |
| 16 | §5 | **The unknown-unit refusal is untouched:** a volume prep hears `"blorps" isn't a unit the app knows. Try ml, L or fl oz` (`batchScaling.ts:438`), and its weight twin `Try g or kg` (`scaleTo.ts:354`–`:356`) never took amendment 2. | ❓ Extend §5 to both? |
| 17 | §5 | **`oz` and `fl oz`:** a recipe stored `oz` (every new prep) hears `try oz, ml or L`; one picked from the list, stored `fl oz`, hears `try ml, L or fl oz` — the picker shows both as `fl oz`. And "in the list" is by spelling, case and all: an old `l` hears `try l, ml or fl oz`, `Fl Oz` `try Fl Oz, ml or L` (the picker writes `L` and `fl oz`, so only old or hand-made spellings). Your own example. | ❓ Fine as it is? |

**No answer needed:** #18 (c)'s count is not made — it needs his signed-in data, which implementation reads only
through the app; it waits for a page he opens. The `1fr 160px 1fr` track no window draws (`SourceDrawer.tsx:308`) is
left; ours to tidy. And a fault of ours, said so it is seen: a product stored with no id is told from itself by being
the same object, so a library reload under its open editor can name it as its own twin — 2 of his 314; Save works
either way.

### 3 · A bug we fixed, no design change: Retry wrote old copies over newer work (§166 `586b06f`, §167 `bd4e447`)

Not a ruling of yours — found while building templates' rename and delete (§157 `6a0ca31`). **Nothing on screen
changed.**

**What it did.** At a venue with bad signal, a change that fails six times is given up, and the banner says it wasn't
saved and offers Retry. **Retry put that old change back over anything saved since.** Reproduced before any fix, on the app's
real saving code against a stand-in for the server, never the database (`check-revive`, on `e789c03`: 22 of 49 red):

- **An invoice:** Castellano at $419.88; 9 × Diplomatico added and given up ($752.79); then gin 12 → 14 saved ($802.77).
  Retry → **$752.79** on the server and in History — gin back to 12, $49.98 gone — while his open tab still read $802.77
  (A1). The same over his other device's edit: $459.88 and 140 guests overwritten by $752.79 and 120 (A2).
- **Elsewhere:** a product's price ($27.99 → $26.49), the default tax rate (6.25% → 7%), a template's name (`Garden
  wedding` → `Garden party`), a product edited since being trashed — deleted — and a template his other device deleted
  — made again (A4–A10).
- **A new invoice's first save**, blank and given up, wiped his later edits: Ortiz $99.96 → **$0.00**, no lines, no
  client (A11, found by §167).

**What changed.** Every change now records a fingerprint of what the fields it writes held when he made it (`baseOf`,
`sync.ts:831`); Retry replays it only onto exactly that. Otherwise it is **set aside** — kept on this device
(`limbo:set-aside`, `sync.ts:53`; the newest 50, at most 100,000 characters, each record's newest first, `:54`–`:57`)
and never written. A
change never given up replays as before: 150 random runs with no Retry, and 150 with Retry and nothing newer, came out
identical to the code before (§167). `check-revive` 56 assertions, 0 red. The banner and its words are as they were
(`SyncIndicator.tsx`: `git log 9f21178..124fb62` on the file is empty), and nothing reads what is set aside
(`check-revive` asserts the banner doesn't). No total is worked out differently — this decides which saved copy
survives. Pushed 07:39; read back from the live site at 13:35 (§180).

**What it leaves — product calls; nothing on screen yet.** #1 would be a new state of the banner, so it needs a frame if
anything shows.

| # | What, and how we know | Question |
|---|---|---|
| 1 | **When Retry sets a change aside, he isn't told.** The banner clears, as it always has, and the change sits on this device where nothing shows it. | ❓ What does he hear — and can he see, or bring back, what was set aside? |
| 2 | **A change given up by the build before §166 has no fingerprint**, so it is always set aside — even where nothing newer exists (B5). | ❓ Fine? |
| 3 | **It leans to what is already saved:** a change made on a device whose copy was behind — his other device saved, this one hadn't loaded it — is set aside, though it came later (§167). | ❓ Fine? |
| 4 | **Trashing is two writes, and nothing ties them.** Castellano trashed and given up, back in History after a load, gin 12 → 14 ($469.86), then Retry: History keeps $469.86, the trash gets the $419.88 copy, and a Restore would lay $419.88 back over $469.86 (§167; A9 for a product). Before §166 Retry deleted the $469.86 outright — so no worse. | ❓ Two copies until he restores one — acceptable? |
| 5 | **A template replace given up, then the template deleted on his other device:** Retry leaves it deleted (A10) — where a replace never given up makes it again, whole (§158). | ❓ Right? |
| 6 | **A record changed and changed back looks unchanged.** A product trashed and given up, then trashed again and restored: Retry's delete lands, and his Restore is undone — as before §166. Telling them apart needs a version number on every record, a change to what is stored. | ❓ Worth it? |

### 4 · Custom Group Lines, option C — built against your Rounds 73 §6 and 74 §3

Sean, 9 Oct: *"Okay. B, C, and yes."* — C is `r73g`, and *yes*: a comp can't join a group. Then *"Build"*, and on
10 Oct *"Keep working through all these."* Its own build, with nothing else in it, as he asked on 20 Sep (*"It's going to be a
VERY meticulous build, so I want that as its own focus"*, `WISHLIST.md:716`–`:718`). In this section a bare # is your Round 74 §3's.

| Your ruling | § · commit (review) | What it does now — measured, unless said |
|---|---|---|
| **74 §3** *"one fact, one place"*, #7, #19; **§1 #8** | §169 `e81dd89` (§170 `2bf4fd4`) | A group is a record — id, name, category, place, nothing else; a member is a real line carrying its id; count, line two and amount worked out from the tags; one settle on every edit, save, copy and load. Copies carry groups under new ids: both Duplicates, Save as template, a replace, the `+` path, the fill (an unticked member left out, an emptied group dropped). Data health lists *Fixed on load*. B's preview: a member's quiet `{group}` chip, 13/600, the `Hidden` chip's colours, 8 from the name, row 61 at 1600 and 1200. Invoices from before byte-identical after a load. |
| **73 §6 #3, #4** and shared 6; **#10, #11, #12, #18**; `r73h` | §171 `ac6eaea` (§172 `2bbea44`) | On paper a group is ONE line under its category — its name, Qty and Unit EMPTY (not dashes), its members' printed figures summed; no member prints; a comp prints in its own place. Letter page: the row's cells Item 340 · Qty 60 · Unit 168 · Amount 104, the item rows' own. Narrow page: name and amount only. #18a and #18b verbatim. The paper, History's *What it came to* and the record at Complete split by the printed category, one derivation: Spirits $99.96 · Rental Supply $85.00 · Delivery charges $110.00 · Miscellaneous $192.00 = $486.96, Total $516.18 — at 1600, 1200 and 390, both themes. |
| **The chip, #8, #10, #11, #13–#16**; `r73g` steps 1–2, `r74h` | §173 `98fa91d` (§174 `87824dd`) | Closed, one row of 61: the chevron in a 44 box, the name, `Group · N` (68.1 × 21.6, 13/600, border and words `--text-secondary` — `rgb(71, 66, 57)` / `rgb(216, 209, 194)`), line two the members, the paper's sum, no stepper. Open: `Prints as one line`, each member a full row 60 in (36 below 600), no fill, its home category on line two, its amount `--text-muted`. His sheet draws the paper's bands. Packing opens every group and writes nothing; locked, the chevron stays. Open or closed in memory per invoice, closed on a reload and from History. With no group: 5,880 renders byte for byte as before (§174). |
| **#1, #2, #4, #5, #6 a, c, d, #12, #15**, the labels; `r73d`, `r74e`–`r74g` | §175 `527e3ad` (§176 `43d7abf`) | Door 1: ⋮ row 4 of 11, `Group lines…`, `r74e`'s glyph path for path (the set 46); greyed 61 tall as locked Trash — `Locked at Complete` / `Locked while archived` / `No lines yet`; the menu scrolls under the footer's top less 16 (968 / 1368 / 681). Door 2: `Add to a group line…` after `Select lines…`, before `Comp this line`; absent on a comp, a hidden line, a reminder, a member. The chooser 300 × 289 in the menu's place, 420 in the panel's (358 at 390); an existing group from ⋮ opens its fold, its row scrolled to the top. The editor 512, `Name on the client’s invoice` focused, chips in print order, `New category…` dashed. Choosing: the built select mode with the group's bar (76; 125.75 on two rows at 390), the four reasons verbatim. Each write one undo step, its label in the box, no money. |
| **#3, #5 d, #7, #9, #13, #16**, `Name & category`; `r73g` step 3, `r74e` | §177 `234eddd` (§178 `4d96951`) | A hold on a group's row: its panel, 420 × 337.75 on the column (358 at 390) — the name over `Prints under Miscellaneous · 3 lines · $167.00`, each member `6 × $8.50`, its amount and `Take out` (63.47 × 44), five rows of 52 then scrolling (eight members: 260 of 416), then `Name & category` and `Ungroup`. Locked: the members stay, every action goes, the lock sentence. A member's panel: `Take out of General ice` in door 2's slot, no Comp. Take out and Ungroup (no confirm) each one undo step, and Name & category one step per thing it changes (⛔ #3), each with its ruled label and no box. `Add lines`: ⛔ #1. |
| **The whole path** | §179 `fc14783` | Walked in headless Chrome at 1600 × 1068, 1200 × 1468 and 390 × 844, light and dark — 30 steps, all six walks identical but for the width of door 2's chooser: door 1 to `Group 3 lines` across two categories; open; + and −; Take out; Name & category (`Ice and delivery`, New category `Delivery charges`, After Rental Supply); packing on and off; ⋮ to an existing group; Ungroup; door 2's Make group `Rentals`, then a join. **The footer read `12 lines · subtotal $516.96 + 6% tax · $40.00 comped`, $547.98, at every step** but the deliberate + ($525.46 / $556.99 — one $8.50) and back. On the real Builder path in Node: Undo all 8, Redo all 8, then a reload from the server — every figure byte-identical to the same invoice with no group, the server's copy the draft after every save. Printed: one line `Ice and delivery`, Qty and Unit empty, $123.50 (7 × $8.50 + 2 × $32.00); Total $556.99, the sheet's. |

**Money:** about 37,000 random group writes across the batches (3,291 · 1,591 · ~27,000 · 879 · 1,194 · 91 · 2,646 ·
277, §170–§177) moved no figure, every group's row the paper's line; the comp's worked example with the gin grouped,
$99.96 / $40.00 / $6.00 / $105.96. **Every review found something, all fixed, none money** — §170 and §174 gaps in the
checks only, each closed with new assertions; and in the code: §172, an old invoice's empty
category row dropped to the foot of History's card once any group existed; §176, the group's bar counted a line an
Undo had made a comp again — `1 selected · $0.00` over a live `Group 1 line` the write refused, dropping the group he
had named; §178, `Save` with nothing touched wrote a `Moved …` step on three record shapes this build never writes;
§179, a fault in the lab only.

| # | Ruling | What, and how we know | Question |
|---|---|---|---|
| 1 | ⛔ 74 §3 #6 b, `r74g` | **`Add lines` — stopped.** #6 b: *"`Add lines` shows the group's members ticked and greyed, not counted."* `r74g` (`Round 74 - saving a template, and the group's parts.dc.html`, lines 259–287) draws the tick two ways — ticked, filled `#2C4A3E` with ✓, and greyed, an empty ring `2px #D8D2C8` on `#F7F5F1` — never one tick that is both; its note: *"The group's own members show ticked and greyed, and they aren't counted."* The built tick's greyed overrides ticked (`InvoiceSelectBar.tsx:163`–`:171`). Also checked: `r74d` (ticked or empty), `r73g` step 3 (`Add lines` a chip, no mode after it), `r73d` (the withdrawn square ticks), `r73e` (prose). Nor does any frame draw the held group's own row in that mode — open, so its members show? with what tick? Not built: the panel has no `Add lines` row; the write exists (`Added 2 lines to General ice`); door 2 adds one line at a time meanwhile. *"Cancel just leaves the mode"* waits with it. | ❓ Draw the tick that is ticked and greyed, and the group's row in the mode. |
| 2 | ⛔ 74 §1 #8, `r74d` | **A long group name on B's preview below 1024 — stopped.** `r74d` (`Round 74 - saving a template, and the group's parts.dc.html`, lines 155–186) draws no member: its rows are the gin, Chartreuse, the towels and the reminder. At 390 the name and the chip share 192: `Delivery charges` (chip 111.5) squeezes `Van delivery, 30 mi` to 72.5 over three lines, row 100.3; a 41-letter `Bar setup, delivery and breakdown charges` (chip 264.7) leaves the line's name 0 wide, the row 312.8 tall, and the chip 68.7 into the amount column. 1600 and 1200: row 61, fine. Not at his iPad's widths (1200 upright, 1600 sideways). | ❓ Wrap the chip, drop it under the name, or cap it? |
| 3 | ⛔ 74 §3 #9, `r73g` | **One `Name & category` Save that changes both.** The labels table has `Renamed General ice to Ice` and `Moved General ice to Rentals`, and no row for both. No frame draws the editor on an existing group: `r73d` draws only `New group line`; `r73g` names `Name & category` as a button (`Round 73 - templates and groups.dc.html`, line 492); `r74e`–`r74h` draw none. Built meanwhile as two undo steps, name first — `Renamed General ice to Ice and delivery`, then `Moved Ice and delivery to Delivery charges` — each only if it changed, no box (`groupDoors.ts:451`–`:470`). | ❓ One step or two — and its label? |
| 4 | #9 | **One line grouped is named:** `Grouped Column ice as General ice` from door 1, never `Grouped 1 lines`; the chooser's `1 line`, the bar's `Group 1 line`. | ❓ Right? |
| 5 | #12 | **A typed category shared by two groups has one place** (each write keeps both equal); two typed categories placed alike print in stored order; a loop prints last. | ❓ Right? |
| 6 | #19 | **Two records of one id:** the first is the group, the later one goes as having no member. An unreadable record (no category) is kept, with its tags. | ❓ Right? |
| 7 | #19 | **Data health, a third repair:** a group's tag on a comp, a hidden line or a reminder is taken off and listed — #19 names two. The titles are ours: `Line tagged with a group that doesn't exist`, `Group with no members`, `Line that can't be grouped carried a group's tag`, each detail ending `Not serious: no money changes.` (`dataAudit.ts:317`–`:326`). The list lives on the device whose load made the fix. | ❓ Words? |
| 8 | #19, 74 §3 #1 | **…and that third finding calls the comp "a line that prints on its own"** (`dataAudit.ts:326`) — which the first uses for a line that lost its tag (`:318`). Your §3 #1's *"a comped line"* is a comp word on screen, and `check-money` refuses unruled ones (§170 tried it, and put it back). | ❓ Which words? |
| 9 | #9 | **A change of place alone** is labelled with the category it already had: `Moved Fees to Delivery charges`. | ❓ Right? |
| 10 | #19 | **A group stored with an empty name** — only a hand edit or another device; the editor refuses one — prints and draws a nameless line, its chevron unnamed. Nothing repairs or reports it. | ❓ Report it in data health? |
| 11 | #18 a | **Two or more members with no cost:** each gets your sentence, in stored order; with lines that print too, `They will print as $0.00. Lime.` comes first, naming only those; the title counts every line with no cost. | ❓ Right? |
| 12 | #18 a | **The Review toast after the gate** still says `Uncosted lines print as $0.00 — check them in the invoice.` (`Builder.tsx:596`; Round 67 A1, *"Both strings stay"*) — untrue of a member, which prints inside its group's line. | ❓ Words? |
| 13 | #18 b | **The possessive is always `'s`**, as you wrote it: `Delivery charges's amount prints as a dash`. One sentence per group; two of one name say it once. | ❓ Right? |
| 14 | #18 a, b | **A member whose PRICE isn't a number** hears "prints $0.00 less than it should", while the paper prints the group's amount as a dash. Ungrouped, the same line already hears "They will print as $0.00" and prints a dash. | ❓ Which? |
| 15 | #11 | **Order where you are silent:** two groups both last in a band follow their first members' stored order; a band only groups make sits, in the record, after the section holding its earliest member; with a group on the invoice, categories outside the nine (Prep Ingredients, an old name) print in the order first seen and two sections of one name print together — with no group, stored order (only old data has them apart); a record read while reopened, whose group has since been taken apart, sorts its typed category last. | ❓ Right? |
| 16 | #10 | **History's `N lines`** counts the invoice's lines in a band — `Miscellaneous · 5 lines` — where the paper prints the group as one row. | ❓ Right? |
| 17 | #10 | **Leftovers and B's preview keep the nine-category order**, members under their home categories (Sean, 23 Sep: leftovers show the individual items). | ❓ Right? |
| 18 | `r73g`, `r74h` | **The chevron is the set's** `ChevronIcon` — `m7 10 5 5 5-5`, 10 × 5 at stroke 2 (`icons.tsx:932`). `r73g` and `r74h` draw `m9 6 6 6-6 6`, 12 × 6 at 1.75 — about a sixth larger — which is the rail's private chevron path for path (`SourceRail.tsx:126`). Using it means moving it into the set — past your 46 — or a second copy (§174). The fill sheet's ‹ (§155) made the same choice. | ❓ Which chevron? |
| 19 | #8, `r74h` | **While packing the chevron is drawn and is not a button** — a tap would take away ticks packing opened the group to show. | ❓ Right? |
| 20 | `r73g` | **Line two truncates to one line**, the row staying 61. At 390, `r73g`'s own three names don't fit its 220. | ❓ Right? |
| 21 | #15 | **The 36 indent applies below 600**; from 600 to 1023 it is 60 — #15 rules *"At 390"*. | ❓ Right? |
| 22 | #8, `r74h` | **`r74h` draws a packing member `2 × $40.00 · Ice` with no stepper;** built as the packing row is — `$40.00 · bag · Ice`, its stepper kept. | ❓ Which? |
| 23 | #15 | **Room at 390:** a member's name gets 136 open and 80 packing (a line in no group 152 / 96). Our Round 74 guessed about 110 from the frame's paddings, unmeasured — the guess was ours, not yours. | ❓ Fine? |
| 24 | `r73g`, `r74h` | **Members' amounts in `--text-muted`** come from `r73g` and `r74h`'s #5F594E, not from ruled words. | ❓ Confirm? |
| 25 | #10 | **The footer's `N lines` counts stored lines** — `11 lines` while 8 rows show with every group closed. | ❓ Right? |
| 26 | #16 | **Open and closed:** History closes an invoice's groups whether or not it was open in a tab; the `+` sheet's Continue keeps them; a copy starts closed (new ids); an Undo brings a group back as he left it (the same id); a hold on a closed group leaves it closed (*"stays"*). | ❓ Right? |
| 27 | 73 §6 shared 4, `r73d` | **`New category…`'s two fields sit inside the editor**, under the chips — `r73d` draws them as a 512 box of their own. And `r73d`'s line under `Prints` — *"The options are First, After Spirits, … , After Rentals. The place is saved with the group."* — read as a note to us, and not built. | ❓ Right? |
| 28 | `r73d` | **`r73d` disagrees with itself:** `After Rentals, last` in its box, `After Rentals` in that line. Built the box's — `After Miscellaneous, last` (`groupDoors.ts:196`), and the box starts there. | ❓ Right? |
| 29 | #4, `r74f` | **Door 2's chooser is `r74f`'s rows and header in the 420 shell** — `r73d` drew a dashed `+` box, a `›` on each group and a 20 title, and a `›` would promise a step that isn't there (a group takes the line at once). ‹ the set's chevron turned, `+` the set's `PlusIcon`; rows 20 in, the menu's, where `r74f` draws 16. | ❓ Confirm? |
| 30 | #6, `r74g` | **The group's bar is the built bar:** Cancel's words `--text`, buttons 48, padding 12 × 16 (`r74g`: accent, 44, 12 × 20). Below 600 two rows, a long name wrapping, never cut; at 0, `0 selected`. | ❓ Confirm? |
| 31 | #5, `r74g` | **In select mode the tick takes the chevron's place**, so a fold doesn't change until Done; an open group's members tick one by one; a part-ticked group's tick puts every member on. | ❓ Right? |
| 32 | `r74g` | **`r74g` is light only.** In dark the greyed ring is `--border` on `--surface-alt` — `rgb(48, 42, 34)` on `rgb(33, 29, 24)` — faint on the dark sheet; the reason beside it says why. | ❓ Fine? |
| 33 | #4 | **Escape closes the chooser** from either shell; ‹ is the way back. | ❓ Right? |
| 34 | #2 | **A locked invoice with no lines** greys row 4 with the lock's reason, not `No lines yet`; a section with no lines counts as empty. | ❓ Right? |
| 35 | #12 | **A typed category spelled exactly as one of the nine is that category**, its place unread; `spirits` in small letters becomes a band of its own. | ❓ Fold the case? |
| 36 | #12 | **A group may take a name another group on the invoice already has** — two lines of one name print. | ❓ Refuse it, as a template rename does? |
| 37 | #6 d | **⋮ › Select lines while choosing drops the group being made**, as Cancel in its editor does. Choosing and the editor hide when the invoice locks, and come back as he left them if it is reopened; another tab shows neither. | ❓ Right? |
| 38 | `r73g` step 3 | **`r73g`'s chip footer built as the panel's action rows**, as `r74e` built door 2 — the style your Round 74 withdrew there: `Name & category` with the set's pen, `Ungroup` with the group's glyph, your words, no ellipsis though `Name & category` opens a sheet, and `Ungroup` a plain row, not the danger row. | ❓ Confirm? |
| 39 | `r73g` step 3, `r74e` | **Built parts over `r73g`:** member rows 52 — `r73g`'s written floor; its own rows measure 53 (a 44 button, 4 above and below, its rule), which showed four rows and most of a fifth in a five-row cap — so the 4 above and below went, and exactly five show; the header 17 / `--text-secondary` (`r73g` 20 / muted). A member's header: the built line, then `· in General ice` (`r74e` draws its own order, the home category replaced). Locked rows keep the amount at the row's 20 — `r73g` draws no locked panel. | ❓ Confirm? |
| 40 | `r73g` step 3 | **Every action closes the panel**, as on a line's — a second Take out is a second hold. | ❓ Right? |
| 41 | `r73g` step 3 | **A member with no price** reads `2` and the dash; one whose quantity isn't a number reads `NaN × $24.99` — the sheet's own stepper shows `NaN` for it too. | ❓ Words? |
| 42 | `r74f` | **`Ungroup` and `Name & category` only by a press and hold** — `r74f`: *"Its panel is one press and hold away"* — where the app's standing note on the hold (`useLongPress.ts:13`) says every panel option has another way in. | ❓ Another way in? |
| 43 | #5 | **In either select mode the group's row has no pen highlight** — the hold is suspended there, and the hover with it. | ❓ Right? |
| 44 | #12 | **Moving a typed category's place** is `New category…` and `Prints` again — whose list offers every band, the group's own current typed category among them (`groupDoors.ts:192`–`:200`). `After {that}` is lost when the group leaves it, so that choice prints last. | ❓ Leave it out of the list? |
| 45 | money | **Past the cent, two roundings — not about groups.** The paper rounds each line, then adds; his footer adds, then rounds once: 3 × $0.125 reads **$0.38 in his footer and $0.39 on the paper**, grouped or not (§173, §174). A group's row (the paper's way) and its band (the sheet's) can differ by that cent. The record adds as the footer does: a fuzz case's record subtotal read $267.45 against the paper's $267.47 (§172), and grouping changes which lines are rounded together, so the record's split can stop adding to the subtotal by a cent. Whole-cent invoices are exact. | ❓ Which is right? A money call — yours to frame for Sean, as Round 64's were. |
| 46 | — | **Found, not caused by groups:** on screen at 390 the print route's paper scrolls 15 sideways and its Item column is 0 wide, on every invoice — Qty, Unit and Amount are fixed at 60 + 168 + 104 = 332, past the 246 inside its 0.75in padding (§171). Printed, the narrow page is right. | ❓ Should the screen copy follow the narrow page? |

**No answer needed:** once an invoice has had a group it keeps an empty `groups` list — a save merges, so dropping
the field would leave the stored group standing. And, ours, dormant: Restore from the archive deletes five archive
fields from the draft (`stages.ts:104`–`:108`; §169 and §170 said four) while the save merges, so the stored copy keeps them; every reader asks
the stage first.

### 5 · Only his iPad can say

**Sessions 15–18 in `IPAD-CHECKS.md` — 31 checks, none ticked** (read 10 Oct, 13:50). All four are on the live site.

- **Session 15** — your Round 73's rest; 8 checks (15.8 skipped: 16.4 replaces it). Your 🔧 #2. Live since 9 Oct.
- **Session 16** — templates: save under a name, Replace, from History, fill with a line left out, Undo, a taken name
  refused, delete. 7 checks, about 25 minutes, in order on test templates. Live since 10 Oct, morning.
- **Session 17** — your Round 75: the `+` window's order, the same-name sentence, `No price set`, leftovers counted
  together, the search counts, `stays locked`. 6 checks. Live since 10 Oct, morning.
- **Session 18** — groups: both doors and a comp refused, the fold, an item inside, the panel and Take out, adding a
  line, Name & category, the PDF, packing, Ungroup with Undo and Redo. 10 checks, about 40 minutes, in order on one
  throwaway invoice. **Live since this afternoon** — pushed 13:45, read back from the live site at 13:48 (header); the session's own header, written before the push, still says it isn't.

**Beyond the sessions, only the device can answer:** Safari — this Mac cannot drive it, so none of the above has run
there; whether a field focused after the tap raises the on-screen keyboard (the naming sheet, the editor); whether his
Magic Keyboard can open a panel at all — Shift+F10 or a menu key, the only keyboard way to a template's or a group's
panel (check 3.5) — and marks a held Return as a repeat (§1 #17); whether a tick's focus ring shows after a touch. **None of it blocks you.**

## What I need back

1. ⛔ **The four stops:** §1 #1 (History's card at 390); §4 #1 (`Add lines` — the tick both ticked and greyed, and the
   group's row in the mode, drawn), #2 (a long group name on B's preview below 1024), #3 (one Save that renames and
   moves — one step or two, and its label).
2. **The readings:** §1 #2–#26, §2 #1–#17, §4 #4–#46, in any order — but §4 #45 first among them: it is money, which
   rounding is right past the cent. The *Confirm?* rows — §1 #17, #20–#22, §4 #24, #29, #30, #38, #39 — can be
   answered together.
3. **Then §3** — the six Retry calls, #1 first: what he hears when a change is set aside.

---

## Older rounds — Round 75 and earlier are in `REQUESTS-ARCHIVE.md`

Moved there on 12 Oct 2026 at Design's request: this file had reached 1.07 MB, too large for Design to copy in or search. Nothing was edited — the archive holds them byte for byte as they stood here at `bd0d234`. Lines 1–2874 of this file kept their numbers; a `REQUESTS.md:NNNN` above 2874 written before the split is line NNNN − 2864 in the archive.
