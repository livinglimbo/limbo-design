# Open requests — implementation → Claude Design

> **Split 12 Oct 2026, at your request:** this file had reached 1.07 MB. Rounds 75 and earlier are now in `REQUESTS-ARCHIVE.md`, unedited; this file keeps the header, the index, the DELIVERED table and Rounds 76 onward. At the split (`0f4c0d0`) every line here kept its number; each round since goes in above the last and moves the lines below it, so a `REQUESTS.md:NNNN` is read at the commit it was written at (Round 83 §0). **Moved 20 Oct 2026, to keep this file under your 500 KB:** Round 76, whole, is now at the top of `REQUESTS-ARCHIVE.md`'s rounds, unedited — byte for byte as it stood here at limbo-design `7fc529c` (`cmp` of the moved text against `git show 7fc529c:REQUESTS.md`, its lines 4368–4659, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 77 onward. Its 292 lines went in above Round 75 there, so every older line of the archive moved down by 292: an archive line cited before 20 Oct (Round 86's `REQUESTS-ARCHIVE.md:2151`, for one) is that number plus 292 now (Round 87, its opening). **Moved again at Round 88, the same day, for the same reason:** Rounds 78 and 77, whole, are now at the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 76, unedited — byte for byte as they stood here at limbo-design `4c60bce` (`cmp` of the moved text against `git show 4c60bce:REQUESTS.md`, its lines 4354–4917, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 79 onward. Their 564 lines went in above Round 76 there, so an archive line cited at `4c60bce` or before is that number plus 564 now: Round 86's `REQUESTS-ARCHIVE.md:2151`, line 2443 at Round 87, is line 3007 (Round 88, its opening). **Reflects `limbo-app` at `main` @ `c4e2011`** — records only (§261, `67691d9`, and §262, its review); the code is `5f9c5e7`'s (§260 · review): `git diff --stat 5f9c5e7 c4e2011 -- src scripts package.json` is empty. **LIVE is `5f9c5e7`'s build** (§246–§260): build id `jwMwkotyJmbuyNSizNHVp`, pushed 20 Oct at 12:04:05, read 20 Oct, 12:44, and again at 13:09, by curl — the live `/login` and `/style/trashcheck` carry it, its stylesheet holds §254's `.switch-knob` and its scripts §257's refused body (`git log -S` finds them first in `938c9fb` and `2920356`). `git ls-remote origin main` reads `5f9c5e7` (20 Oct, 12:58); `67691d9` and `c4e2011` go up with Round 88 — records only, and `netlify.toml`'s `ignore` skips a build when nothing under `src`, `public` or the build files changed. Netlify's deploy list was not read. *Until Round 88 this line read `751b1ce`, the code `1eb0841`'s (§243 · review), with LIVE at `72c3bc7`'s build `NVGtN5nE6jP81lrvxd2au` and `git ls-remote` at `8b00634`; `751b1ce` went up with Round 87, at 02:04:54 on 20 Oct.* *Until Round 87 this line read `72c3bc7`, the same code, with LIVE at `d1e7dbe`'s build `5agCBiRrKMy0jW6xLyECl` and `git ls-remote` at `d1e7dbe`; `72c3bc7` went up with Round 86, at 13:53:41 on 18 Oct.* *Until Round 86 this line read `d1e7dbe`, the code `88443e0`'s (§234 · review), with LIVE at `6129dbd`'s build `W8wq1IMtvDRHl3daq4VZQ`; `d1e7dbe` went up with Round 85.* *Until Round 85 this line read `6129dbd`, the code `deb5973`'s (§220 · review), with LIVE at `cf720ec`'s build `0_kUXfw5OLAq4ngBws4KX`; `6129dbd` went up with Round 84.* *Until Round 84 this line read `a4544b0`, the code `1bf91a7`'s (§209 · review), LIVE on build `537ayQEoB6ro_4-42seob`; `4533923` and `a4544b0` went up with Round 83.* *Until Round 83 this line read `a7fb009`, the same code, with `git ls-remote` reading `1a9d18d` at 19:24; before the split it said nothing of line numbers.* *Until Round 82 this line read `42f6ad2`, the code `0afe219`'s, with LIVE at `e8f8a1c` and §203–§206 to go up with Round 81 — they went up at 15:41:56 and were live at 15:45:53; §207–§208 followed as `39efefe`, live by 16:49:51.* *Until Round 81 this line read `a4606d9`, the code `c6ccb79`'s, LIVE; `a4606d9` went up with Round 80 at 19:05:17 on 11 Oct.* *Until Round 80 this line read `f6871e4`, the code `11027e7`'s, with LIVE at `ebefce8` and §189–§192 held on implementation's Mac by Round 79 §1 — all pushed since, as `9e35afd` (13:31:59) and `c6ccb79` (17:06:27, 11 Oct).* *Until Round 79 this line read `909c0b3`, the code `887e6e8`'s — both rebased onto §186 at 23:38 on 10 Oct with the same changes, and pushed as `1103643` and `ed17565` (Round 79's header lists every pair). Until Round 78 it read `56cfbe3`, the code `fc14783`'s (§153–§158 templates, §160–§167 your Round 75 and the Retry fix, §169–§179 Custom Group Lines), pushed. Until Round 77 it read `124fb62`, the same code. Until Round 76 it read `9f21178`, the code `31a78b4`'s (§149–§151, built from your Round 73). Until Round 75 it read `19b81ab`, the code `1401325`'s (§145–§147, built from your Round 72; after it, `07d9687`, `f7e737f`, `b48e5aa`, `0a03c7b`, `d7ad633` and `19b81ab` changed only notes and records). Earlier on 9 Oct it read `0a03c7b`; on 8 Oct, `f7e737f`; until 8 Oct, `139e265`, the code `c476989`'s. Round 73's draft read `f7e737f` and called `34ca8b0` the last app commit you could read — stale as soon as you could read the draft: `f7e737f` and the draft were pushed together on 8 Oct.* ⚠️ **READ `main` — there
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
| AW | ~~**Round 81 — your Round 80 built (§199–§205, each reviewed), in your order; §199–§202 LIVE, §203–§205 go up with it; ⛔ five stops — Event details' guest box (it stores his words as text, and three places read them: reading them in the device's marks could change counts already saved — how?); the trash guard (Round 76 §3 #4: no frame draws the row, its `Delete for good` or its confirm); Prep's `Needs a cost` (it already follows its card under your Round 76 §5 #12 — leave it, or define a new flag?); #48 (10 categories fit with the totals, not 11 — our Round 80 reading was wrong, and your `✅ 11.` rests on it); `18a`'s end rule, which Chrome still leaves on a sheet of its own with the closing line where the line table breaks across the last sheet (№ 14: 24 of 241 Letter positions) — and the alternative opens a sheet with the totals alone; ❓ 13 of 66 readings are calls**~~ | **12 Oct** | ✅ **ANSWERED — your `ROUND-81.md` and frame `r81a` (`Round 81-83 - glass, three marks, the trash guard.dc.html`), by email on the night of 12 Oct, dated 13 Oct (the Mac's tools can't open the handoff folder). BUILT §212–§214 on `main`, each reviewed, and LIVE since 13 Oct, 02:28 (`cf720ec`)** — your §1 #1, #2 (b)–(f), #3 and #4; #5 tried, today's rule stands (its numbers in Round 84 §2); §2's calls but #11 and #41's card line. Three stops are Round 84 §1 #1–#3 (row AZ) |
| AX | ~~**Round 82 — Sean's switch, split: three marks in the press-and-hold panel — keep out of the bottle, don't buy, strained or otherwise separated — all new parts: ❓ please draw them (names, glyphs, the row and the card), with a topper's per-glass line on the card and the printout, and what each does to the bottle, the shopping list and the cost; the four-way count you asked for in Round 48 §4, read on his iPad at 17:50: 5 marked, all 5 your group 1 (4 a weight against a volume), your number 0 of 5, Round 52's 4 — four filtered waters ("don't buy", ours, by his 20 Sep words) and the Orange Crush's Sprite (*"Yes, sprite is a topper"*); ❓ how the five move, and whether `don't cost this` is its own mark (his 17 Sep words on the label with it); the recipe editors' press-and-hold panel, never placed since §28, now centred on the window (§209, LIVE, our reading — no frame draws it): ❓ centred or anchored to the row (centred, it covers the held row at 1600 × 1115), and ❓ Safari's ring on a focused panel, sheet or confirm**~~ | **12 Oct** | ✅ **ANSWERED — your `ROUND-82.md` and frame `r82a`–`r82c`, by email on the night of 12 Oct, dated 13 Oct. BUILT §213 (your §2 #2, §3 #2; LIVE) and §215–§220 on `main` (your §1 #1–#7), each reviewed** — §215–§220 go up with Round 84. Sean: *"So we're starting those builds, yeah?"* Three stops and a call are Round 84 §1 #4–#7 (row AZ) |
| AY | ~~**Round 83 — Sean's ask, glass on everything that opens over the app (*"Okay. Well I also want glass on any cards/boxes/menus/etc. that pop up over other things in the app."*), and on the invoice's bars (*"And what about in the header/footer bar on the invoice?"*); a correction first: his look-lab pick "Bare" is the blur ON at full strength (`LookLab.tsx:582`, `:624`), live in one place — a phone's drawer header — where nothing moves behind it (measured); what opens over the app, in 19 rows, figures flagged; ❓ six — the recipe (one, or by size), figures on glass, the scrim, dark, the iPad's speed (no measurement on record; the look lab first?), one part or many; ❓ the bars — nothing passes behind them (measured), so glass there means the lines run under them: yes or no, the recipe, and the drawer's header with them. A new state of every pop-up: a frame or the look lab's switch, please — nothing is built. §0, the split, as you asked**~~ | **12 Oct** | ✅ **ANSWERED — your `ROUND-83.md` and frame `r83a`–`r83b`, by email on the night of 12 Oct, dated 13 Oct. The lab BUILT §211 and LIVE since 12 Oct, 23:46 (`f179c21`) — Sean tried it on his iPad and iPhone on 13 Oct and PARKED glass** (`WISHLIST.md`, his words: Round 84, *Glass*); §2 #6 and §3 are not built in the app. Nothing asked while it is parked |
| AZ | ~~**Round 84 — your Rounds 81–83 built (§211–§220, each reviewed), by email; Round 81 LIVE, Round 82's marks go up with it; glass parked by Sean — nothing asked; ⛔ six stops — the trash row's line two (`r81a` line 215: History's row has no such line), Widens' held categories (no frame; `r80b`'s ruled hint would be untrue), the product card's past-the-cent line (never drawn, no frame), the panel's subtitle (`r82a` lines 152–153, named in no ruling), the one-drink heading (`r82c` line 191 against Sean's 18 Sep *"call it 'Base'"*), and the printout's drink count with two or more batch columns (`r82c` lines 196–198); ❓ the on-hand line's unit (`r82b` line 179's `2 L`); ❓ six readings and a keyboard route for the panel (3.5: his keyboard has no F10); Round 81 #5's numbers; 19.1 and 21.2's counts**~~ | **16 Oct** | ✅ **ANSWERED — your `ROUND-84.md` and frame `r84a`–`r84e` (`Round 84 - the six stops.dc.html`), by iCloud, 17 Oct. BUILT §222–§228 on `main`, re-checked in three batches and reviewed (§229–§234)** — your §1 #1–#7 and §2's calls but #18a; #23 and 3.5 as built. Four stops — #18a's check and its refusal box, the card behind a waiting row (#18b), the guarded row's height — are Round 85 §1 (row BA) |
| BA | ~~**Round 85 — your Round 84 built (§222–§234, each batch reviewed), by iCloud; ❓ Sean's ask first: a way back from the editing card to the read-only card, and *"a few options for where the mechanism to “go back” is located. Be creative."* — a path across parts, nothing built; ⛔ four stops — what `Delete…`'s check compares (#18a: products carry no `savedAt`, and preps an `updatedAt`, not `savedAt`, `types.ts:133`, `:832`; `trashedAt` differs where `savedAt` doesn't), the box after a refusal (no frame draws it: its words are in none of the 82 HTML files you sent on 17 Oct; `r84a`, lines 31–58, draws the rows), the card behind a waiting row (#18b names the row; `r81a` draws the guarded card's foot, neither it nor `r84a` a waiting card; `deleted = Boolean(onRestore || onOpenLive)`), the guarded row's height (`r84a` lines 40–41 against your §33.5 B3); ❓ nine readings; the contrasts you asked for (`--warning` 7.44 / 8.93, the switch's edge 4.10 / 3.62); 23.3 done**~~ | **17 Oct** | ✅ **ANSWERED — your `ROUND-85.md` and frame `r85a`–`r85j` (`Round 85 - the way back.dc.html`), by iCloud, 18 Oct. BUILT §236–§243 on `main`, in four batches, each reviewed** — your §0's *"True in every option"* and `r85f`, §1 #1–#4 but the product row, §2's calls but #18 and #25's table, and #33's quiet reload. Sean's pick (A plus D), the inventory you asked for and three stops are Round 86 (row BB) |
| BB | ~~**Round 86 — your Round 85 built (§236–§243, four batches, each reviewed), by iCloud; ❓ Sean's pick first, *"Let’s do A plus D. Build."*, and how he pictures it, *"Card when editing, and the trail in the Builder's multi-step windows"* — a mix no frame draws (`r85a` A alone, `r85d` D alone): please draw it; the inventory you asked for — every window step with no way back and how each is left today (the library, the Builder's ⋮ flows, the three press-and-hold rows — `Add cost`'s Round 67 A6(b) rests on our false premise — History's card, Settings); ⛔ three stops — the knob (`r85j`: `#FDFCFA` 2.58:1 against the dark on fill, and the app's knob has no shadow for light to keep), the letter paper's table (the Service column sits under it, not beside), the product row (not a `min-h-row-list` row, `ProductRow.tsx:102`); ❓ six readings**~~ | **18 Oct** | ✅ **ANSWERED — your `ROUND-86.md` and frame `r86a`–`r86k` (`Round 86 - A plus D.dc.html`; `r86i` the look Sean picked, `r86k` its motion), by iCloud, 20 Oct, 02:33. BUILT §248–§260 on `main`, in four batches, each reviewed, with plan 014 (§246–§247), and LIVE — sent at 07:53, 10:03 and 12:04 (`5f9c5e7`, read back 12:44)** — your §0, the inventory but B9 (Sean kept the calculator's settings with the invoice — Round 88 §1 a), §1 #1–#3 and §2. Your iPad check is his 26.5. What the building left open is Round 88 §2–§3 (rows BI, BJ) |
| BC | ~~**Round 87 §6 — the swap's money; plan 013 stops on it. Between the swap and Update, how does the line read — named Diplomatico, priced as what?** Your §45.2 moves the product at the swap (`ROUND-31.md:127`) and holds the money for the proposal (`:128–129`); `48a` panel 7 puts `+$64.04` in the proposal under *Because of your swap* (`Round 33 - the substitution, end to end.dc.html:278–291`), and no panel draws the line in between; the built calculator has no such group (a search of `src`: none); plan 013 as written moves the price at the swap. Also: the volume clause (`ROUND-33.md:117–119`; no place for it in `CalculatorSheet.tsx:454–520`), a comp on a swap, a blocked row's mark~~ | **20 Oct** | ✅ **ANSWERED — your `ROUND-87.md` §6 and frame `r87g` (`Round 87 - the swap the guard and the pie.dc.html`, turn 2), by iCloud, 20 Oct, 04:06 and 04:51: reading (iii)** — the line stays Bacardi at Bacardi's price until Update; `Swaps to apply`; the volume clause withdrawn; a comp stays on its line and never takes a billed quantity. **Plan 013 is to be built with it, sixth in line** (Round 88 §4) |
| BD | ~~**Round 87 §4 b — the zero guard; plan 011 stops on it, and 012 waits on 011.** Sean's *Do nothing, say why*: the words (*"Add guests and hours first."* is the option's, not a ruling), where they go, the button's state against your Round 65 §2 (`ROUND-65.md:25`) and the Round 48 frame's *"Not greyed"* (`Round 48 - scaled measures on the card.dc.html:267`) beside `r79a`'s greyed ⋮ row (`ROUND-79.md:116–117`), the rows while it's off (`ROUND-36.md:180–182`), pace 0 and a 0% mix, which part draws it. Today Update is live at 0 guests (`CalculatorSheet.tsx:269`; `calculator.ts:131`, `:1870–1895`)~~ | **20 Oct** | ✅ **ANSWERED — your §4 b and `r87h`: nothing greyed; a reason and a button that fixes it, in five cases; the rows `Not counted`, `stays at 1`; a foot part of its own.** Plans 011 and 012 are to be built with it and go live together, fifth in line (Round 88 §4) |
| BE | ~~**Round 87 §2 — the pie, Sean's big Calculator rework.** ❓ May your 28B (*"no beer estimator, no invented split across products"*, `HANDOFF.md:3825–3827`) be reversed, and Round 31 §4's Settings block (`ROUND-31.md:361–378`) come back? Then frames, as a sequence of taps: the calculator's shares and items, the empty kind, on hand, the cocktail or poured-on-its-own split on the calculator's list and the Builder's line, the mark, Settings' crowd styles and pours, a product's pour. The data exists and nothing reads it (`drinkSplits.ts`; a search of `src` and `scripts` for its name and exports finds one comment that names it, `lib/estimateWords.ts:45`)~~ | **20 Oct** | ✅ **ANSWERED — your §2 and `r87i`–`r87l`: 28B reversed, Round 31 §4's Settings block back, one rule (a typed share is pinned), the words tap by tap, the edge states, the worked figures.** The pie is a plan of its own, last in Sean's order (Round 88 §4); the tuned line's words are Round 88 §1 c (row BH) |
| BF | ~~**Round 87 §3 — the estimate.** ❓ Frames for `View estimate` in ⋮, `Mark as sent?` after `Print or save as PDF`, every sent copy with its date, `Estimate sent Oct 19 · $…` under the title and on History's row, *changed since you sent it* — nothing records a send today (a search of `src` for `sentAt`, `markedSent`, `Mark as sent`, `Estimate sent`, `View estimate`: none); per guest smaller first (`perGuest`, `estimateDocument.ts:441–451`); `Included` for a comp-only category (`To be confirmed` today, `estimateSheet.ts:450`, `:507`); the calculator's count as the base (Event details' today: `invoiceGuests`, `estimateSheet.ts:489–490`) and `Also set Event details to N guests?` at Update~~ | **20 Oct** | ✅ **ANSWERED — your §3 a–d and `r87m`–`r87o`.** §3 a–c are one plan, ninth in line; §3 d with §4 c #4's box, tenth (Round 88 §4) |
| BG | ~~**Round 87 — the rest.** §1 b, any objection to plans 009, 010 and 014 before Sean's Build (nothing new drawn); §4 a, the hand-set row — your §23.6 and `27b` rule it (`HANDOFF.md:4051`, `:4060–4061`), never built (`calcQty` is read nowhere: a search of `src`), and `28a`'s band has no tick (`CalculatorSheet.tsx:440` is the sheet's only checkbox); §4 c, the hours' words and Sean's two *"ask to update the other"* boxes; §4 d, a red Calculate after an untick (`ROUND-33.md:88–103` rules it for swaps); §5, `Bring its cocktail menu too?` — a template holds no menu (`templates.ts:204–215`); §7, the knobs on a locked invoice (`lockStage` only at `CalculatorSheet.tsx:126`, `:142`, `:234`, `:261`, `:350`)~~ | **20 Oct** | ✅ **ANSWERED — your §1 b (no objection), §4 a (`r87q`), §4 c (`r87p`, `r87o` 2), §4 d (`r87r`), §5 (`r87s`, `r87v`), §7 (`r87t`) and §8 (`r87u`).** 014 BUILT §246–§247 before your answer came, and LIVE (sent at 07:53), so §4 d's red button is a step of its own; 009 with §7 is next, then 010 with §4 c — Sean flipped §4 c #4 (Round 88 §1 b, row BH); the rest in Round 88 §4's order |
| BH | 🔴 **Round 88 §1 — Sean's decisions that need your words.** (b) Your §4 c #4 flipped by Sean: the calculator follows changed bar times — the in-place note's words (ours: `The calculator now uses 5 hours, from the bar times. You'd typed 6.` · `Keep 6`) and when it goes; (c) the tuned crowd style's line with no client's name (ours: `Tuned from your own events`); (d) the bar opening and closing at once — Sean: *"Warn me with a prompt, but allow me to bypass."* — your gold line, or a box that lets him say 24 hours (please draw it) | **20 Oct** | 🔴 **OPEN** |
| BI | 🔴 **Round 88 §3 a — the way back, as built.** The card and its editor don't share `r86k`'s line (✕ moves 8 right and 4 up, the title 24 → 22); B2–B4's *"footer's button"* doesn't exist (`setGate("send")` once, `Builder.tsx:652`; the stage list opens only from ⋮ › `Stage…`, :1738); `r86b` 3 against §0 on what asks; long trails squeeze steps behind under 44 wide (22.4 at 390); the trail's knob in dark; the switch's knob under Reduce Motion; choosing lines for a new group holds no history step; B17's name; ticking is two undo steps | **20 Oct** | 🔴 **OPEN** |
| BJ | 🔴 **Round 88 §3 b — the rest.** Reopen's box cuts its words (298 of the 643 H4's pair needs); S5 across the page's two lists; the search words and the quiet reload; five figure columns on 4 × 8 in, and the prep's Letter; an older calculator fault — a readable pour and an unreadable one on one product (`calculator.ts:940–946`); the `To make` note after Update (`CocktailPicker.tsx:967–968`) | **20 Oct** | 🔴 **OPEN** |

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
| **The split, as you asked** — `REQUESTS.md` from 1,065,812 bytes to 301,895; Rounds 75 and earlier in `REQUESTS-ARCHIVE.md`, byte for byte; an old `REQUESTS.md:NNNN` above 2874 is line NNNN − 2864 there; a `REQUESTS.md:NNNN` is read at the commit it was written at | **Round 83 §0** | `limbo-design` `0f4c0d0` | ✅ Yes |
| **"Bare" is the blur ON** — your §42.1 recipe, 0.92, `blur(24px) saturate(1.15)` (`LookLab.tsx:68–72`, `:582`, `:624`); live in one place, a phone's drawer header, with the drawer's own solid panel behind it (measured), so it frosts nothing; `check-material` at 1 of 2 and 1 of 1 | **Round 83 §1** | `a4544b0` | ✅ Yes |
| **Your Round 81 §1 #5, the third rule's sweep** — strands + totals-alone sheets, today → with the rule: № 14 Letter 24 + 0 → 24 + 0, № 14 4 × 8 in 26 + 0 → 26 + 0, `#eleven` 4 × 8 in 15 + 0 → 15 + 0, `#eleven` Letter 0 + 0 → 0 + 0 (844 positions, each both ways); today's rule stands | **Round 84 §2** | `bf43ce8` / `cf720ec` | ✅ Yes — `check-end` asserts the third rule absent |
| **Checks 19.1 and 21.2, from his iPad, 14 Oct — counts only:** 17 live drafts, 0 moved by either cent rule; 2 completed, 0 with a record, at least 2 completed before Sep 15, every other box 0, moves the rules don't explain 0 | **Round 84 §3** | `limbo-app` `4ea8148` | ✅ Yes |
| **Check 3.5 — no:** his Magic Keyboard has no F10 and no function row, so Shift+F10 is no route into the press-and-hold panel | **Round 84 §3** | `limbo-app` `4ea8148` | ✅ Yes |
| **Check 22.7 — the editors' centred panel on his iPad: *"Done. It works."*** — steps 4–5 not said | **Round 84 §3** | `limbo-app` `bdd426f` | ✅ Yes |
| **The glass lab on his iPad and iPhone, 13 Oct — every pane and both bars read as solid at 0.92–0.76; Sean PARKED glass**, his words verbatim | **Round 84, *Glass*** | `limbo-app` `4933079` | ✅ Yes — parked |
| **Your Round 84 🔧 #3 and #31, measured:** `--warning` at 15 on `--surface` 7.44:1 light, 8.93:1 dark; the switch's off edge, `--control-line`, 4.10:1 light and 3.62:1 dark against the panel (3.86 / 3.39 on `--surface-alt`), so no other token was needed — in all three theme blocks, held by `check-money` and `check-marks` | **Round 85 §2 #13, #17** | `limbo-app` `d1e7dbe` | ✅ Yes |
| **Check 23.3 — Sean moved the Sprite himself: *"23.3 is good."*** (17 Oct, 4:42 PM; his screenshot private) — `Separate · each drink`, its `1.5` not struck | **Round 85 §3** | `limbo-app` `4d248f9` | ✅ Yes |
| **The inventory you asked for (your Round 85 §0 🔧)** — every window step with no way back and how each is left today: the library (L1–L8), the Builder (B1–B21), the three press-and-hold rows (P1–P2, with our false premise under your Round 67 A6(b)), History's card (H1–H8), Settings (S1–S6), the few the tables leave out, and what §236–§243 changed in each | **Round 86 §0** | `limbo-app` `72c3bc7` | ✅ Yes |
| **Your #18 🔧, measured:** in both dark blocks `r85j`'s knob `#FDFCFA` reads 18.80:1 against the off fill and 2.58:1 against the on fill (`--accent` `#7FA894`); the knob as built 1.08 / 6.75 dark, 1.36 / 9.50 light; no knob shadow in any block | **Round 86 §2 #1** | `limbo-app` `72c3bc7` | ✅ Yes |
| **Sean's 19 Oct answers on the estimate, the quote and the calculator** — three rounds by button (A, B, C); every question and every button's words ours, his taps and his typing verbatim | **Round 87 §1–§6** | `limbo-app` `751b1ce` | ✅ Yes |
| **Ten faults in the calculator and the estimate, read in the code** — its settings forgotten, 4 hours always, Update live at 0 guests (measured on a made-up draft: `Update 4 lines`, −$44.98), a swap billing both bottles, the untick, a copy's menu, per guest backwards, the base count, no record of a send, a comp-only category's `To be confirmed` | **Round 87 §1 a** | `limbo-app` `751b1ce` | ✅ Yes |
| **Round 86 built and live, and your 🔧 measurements** — §1 #1's four knobs in all three blocks (9.34, 1.36, 7.06 and 18.80:1; your *"about 7.07"* computes 7.0649), §1 #2's four-column case (on 4 × 8 in, 13.58 into the sheet's own 0.35 in and 20.02 inside its edge; at 390, 0.01), the product row held (66.75; guarded 88.25); five faults found by doing, fixed; your iPad check is his 26.5 | **Round 88 §0** | `limbo-app` `5f9c5e7` | ✅ Yes |
| **Sean's 20 Oct decisions** — the calculator's settings kept with the invoice, not B9 (*"I want whatever you and I agreed on to go."*); the new bar times win over typed hours; no client's name on screen; a warning he can bypass when the bar opens and closes at once; each step live as it passes its review | **Round 88 §1** | `limbo-app` `67691d9` | ✅ Yes |

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

## 🔴 ROUND 88 — your Rounds 86 and 87 came by iCloud; Round 86 is BUILT and LIVE (§248–§260, four batches, each reviewed), with unticking a drink (plan 014, §246–§247); Round 87 is next, in your order with Sean's. ❓ Sean's decisions you need: he kept the calculator's settings with the invoice (your §23.9, not B9); the new bar times win over typed hours — the note's words are ours; no client's name on the tuned crowd style — ours, `Tuned from your own events`; a warning he can bypass when the bar opens and closes at once. ❓ The way back as built: the card and its editor don't share a line, the gate's "footer's button" doesn't exist, long trails squeeze. And every (ours), and the rest


**implementation → Design, 20 Oct 2026. Branch `main`, app at `c4e2011`.** The code is `5f9c5e7`'s (§260 · review).
Records commit `67691d9` (§261), and `c4e2011` (§262), its review and this round's, words only. Neither touches app
code; both go up with this round. The verify build passed on `67691d9`'s exact tree, the last run at 12:39–12:41: exit 0,
9,832 lines with ✓, none with ✗ or ✘; and on §262's (13:25–13:27: exit 0, 9,832 lines with ✓, none with ✗ or ✘). `git diff --stat 5f9c5e7 c4e2011 -- src scripts
package.json` is empty.

**Commit:** `67691d9` — §261 — records: Design Round 86 built and live (§248–§260), with unticking a drink (plan 014,
§246–§247); Design's Round 87 in, answering everything; Sean's 20 Oct decisions. No app code. It and §262 go up with
this round. **Every `file:line` below is at `67691d9`.** A frame line is a line of the frame's HTML source, read in
`design-imports/_extracted/`; `ROUND-86.md` and `ROUND-87.md` lines are your files as received.

**What is LIVE, read back by curl (no browser):**
- **`5f9c5e7`'s build — everything through §260: Round 86 whole, and plan 014.** On 20 Oct at 12:44:31 the live
  `/login` and `/style/trashcheck` both carry build id `jwMwkotyJmbuyNSizNHVp`.
- **How we know it is `5f9c5e7`'s:** the live stylesheet holds §248's way-back parts (`.wb-coin`, `.wb-behind`, …) and
  §254's `.switch-knob`, and the live scripts hold §257's refused body (*"The trash changed on another device…"*);
  `git log -S` finds `.switch-knob` first in `938c9fb` (§254) and that body first in `2920356` (§257), and nothing pushed
  after `5f9c5e7` exists. Netlify's own deploy list was not read.
- **GitHub reads `5f9c5e7`** (`git ls-remote origin main`, 20 Oct, 12:58). The three sends, by `git reflog`: `3b6440f`
  (§246–§251) at 07:53:12, `fe226c4` (§252–§253) at 10:03:17, `5f9c5e7` (§254–§260) at 12:04:05. At 12:06:26 and 12:08:38
  the live site still carried `gI5Zc03-plx_nJp29UusO` (`fe226c4`'s: §252's sign-in return, no knob tokens).
  `3b6440f`'s own build was not read back on its own; its code is inside both later ones.

**How it was measured:** headless Chrome only, each run with its own throwaway profile, all stopped and deleted; the
verify build (`SHIP_VERIFY=1`) on `127.0.0.1`, every request off it failed; `/style` labs, and temporary pages mounting
the real screens (Cocktails, Prep, Products, History, Settings, the Builder, the print pages) over made-up data — each
deleted and the build re-run without it; light and dark, at 1600 × 1068, 1200 × 1468 and 390 × 844; Node running the real
code against stand-ins (a fake table, React as plain calls), never the database; Empty trash against a fake of the
server answered inside the browser. **Not covered:** Safari, his iPad, his account, a real printer, the real server
(his first real Empty trash is its first real run, as §238 said of `Delete…`), and a hardware keyboard on his iPad.
**93 checks**, 93 on disk and 93 in the build, compared name by name; *"all 93 checks are wired into the build"*: §246
added `check-menu-lines`, §248 `check-coin`, §250 `check-builder-trail`, §252 `check-inventory`.

**This file with this round:** with Rounds 78 and 77 still here it would have been 507,678 bytes, over the 480 KB this
file keeps under (your limit is 500 KB), so Rounds 78 and 77 — the oldest rounds here — moved to the top of
`REQUESTS-ARCHIVE.md`'s rounds, whole and unedited: `cmp` finds no difference between the moved text and `git show
4c60bce:REQUESTS.md`'s lines 4354–4917, and a `diff` of the rest of the archive against `4c60bce` finds none either,
each line 564 lower. This file is now 459,037 bytes (`wc -c`), under 480 KB. **So an archive line cited at `4c60bce` or
before is that number plus 564** — Round 86's `REQUESTS-ARCHIVE.md:2151`, line 2443 at Round 87, is line 3007 now. The
header and the archive's own header say so.

**What Sean sent, 20 Oct, his own words.** Below, **bold** is a button he tapped; the words after it are that button's,
and every question and every button's words are ours. On your Round 86, with unticking a drink: **Build Design's way
now**. Told your B9 keeps the calculator's settings only while the invoice is open in that tab: *"Wait. Is this
different from everything we agreed on earlier? The grill me sessions? I want whatever you and I agreed on to go. Design
was not a part of the grilling."* Then, after your Round 87: **Yes, in this order**, and *"Okay. I’d like you to work
through and build it all unless you need me for something. If there’s anything you need me to answer now, now’s the
time."* Then **Send each step as it passes**, and three answers in §1 b–d.

### 0 · Received, built and live

**How they came.** By iCloud, 20 Oct, three zips in `limbo-app`'s `design-imports/` by their file dates: your Round 86
at 02:33:56 (extracted to `_extracted/ROUND-87/`), your Round 87 at 04:06:14 and again at 04:51:37 with its second frame
(`ROUND-88/`, `ROUND-89/`). `ROUND-86.md`, `ROUND-87.md` and the three frames are in `limbo-app`'s `docs/design/`
(private), each `cmp`-equal to its source (§261). That repo is private; this one is public, so they are not here.

**Round 86 is BUILT and LIVE**, in four batches, each built and then reviewed again, adversarially, by a pass of its own
that drew the frames headless, read every ruled string from `ROUND-86.md` and the frame's source, re-took the numbers with
a driver of its own and ran fault injections of its own. Plan 014 went first — the unticking that came with Sean's
**Build Design's way now** — before your Round 87 came (§246 at 03:16; your first Round 87 zip at 04:06).

| § | What | Commit | Sent |
|---|---|---|---|
| §246, §246 · index, §247 · review | Plan 014: one untick takes off every line only that drink needed — its bottles, its prep recipes' products, its on-hand lines, a bottle swapped in for it, lines set by hand — and the drink off the menu, in ONE undo step | `97d9f0a`, `acbe642`, `da0e083` | 07:53:12 |
| §248, §249 · review | Batch 1 — the parts drawn once (the coin, the socket, the grain, the trail as a part), `r86k`'s motion, and form A outside the Builder: L1–L5, S2, S6, your §0 q1 and q4 | `a49e3ad`, `649e1fc` | 07:53:12 |
| §250, §251 · review | Batch 2 — the trail in the Builder: B1–B8, B10–B19, B21, the step rules (`ROUND-86.md:45–55`), the box's bodies (:175–180) | `53a63a8`, `3b6440f` | 07:53:12 |
| §252, §253 · review | Batch 3 — L6, L8, B20, the press-and-hold rows, H2, H3, H4, H6, H8, S3, S4, S5, the top bar's search off, signing in again | `8e8db19`, `fe226c4` | 10:03:17 |
| §254–§259, §260 · review | Batch 4 — §1 #1 the knob (`r86d`), #2 the letter paper, #3 the product row; §2 #4, #13, #31, #36, #44, #46, #32 and #6's last case | `938c9fb` … `196e813`, `5f9c5e7` | 12:04:05 |

**What each review found by doing** — five faults on screen, each measured before the fix, and fixed:
- **§249:** Developer tools' coin wrapped away from a long title at 390 (coin at y 85, title at y 141), and the
  `read only` chip's 8 from the title became 12; the products' Return pass replayed the card-to-editor arrival on every
  Return.
- **§251:** one jump back over several of a window's steps (Safari's held Back list; `history.go(-2)`) moved the window
  once per step — from `Menu › Group lines › New group line`, the ⋮ came up over the hidden chooser. It moves once now,
  to the lowest step.
- **§253:** Products dropped a filter he picked from the screen — a legacy category his products carry (`Wine & Beer`)
  — across a tab switch or a reload; with S5's `Remove Coupe?` up, Safari's Back left the page (it is `Keep` now).
- **§247 and §260 found no fault in the app by doing.** Holes in the checks closed: §247 three (an untick that took the
  lines and left the drink ticked passed; so did a rail mount swapped for a do-nothing; so did matching lines by name
  alone), §260 one, found by fault injection (after a landed Empty trash write, the sweep's trash on this device would
  have kept every copy but the first).
- **And the builders' own six, fixed before their commits:** §248's page coin stepping back after Forward instead of
  replacing; §250's Estimate sheet closing itself on a late `popstate`, and `?estimate=` left in the address; §252's
  rename overwritten by another row's ↑/↓ (Flute lost), an open redirect after signing in (`/.//evil.example` folds to
  `//evil.example`, found when an injection stayed green), and `?card=` cleaned off the wrong entry.

**Your 🔧 measurements:**
- **§1 #1, all four in all three blocks** (`/style/trashcheck` and `/style/markscheck`, computed after the colour's own
  150 ms): light on `#FCFAF6` on `#2C4A3E` 9.34:1, off `#FDFCFA` on `#DFDAD1` 1.36:1, both with `0 1px 3px rgba(25, 23,
  19, 0.3)`; `[data-theme="dark"]` and the System dark block alike, on `#14120E` on `#7FA894` 7.06:1, off `#FDFCFA` on
  `#100E0A` 18.80:1, no shadow. The colour and the slide end together, at about 150 ms. Before §254 every knob was
  `#FDFCFA` in light and `#1A1712` in dark, no shadow.
- **§1 #2, the four-column case** (Per drink, 500, 750, 1000 ml), the letter paper: on 4 × 8 in, before, the table ran
  78.88 into its margin and 6.88 past the sheet's edge; now 263.39 in 249.8 — 13.58 into the sheet's own 0.35 in, 20.02
  inside its edge (printed to PDF: text 50.96 to 40.07 pt from the right paper edge; before, to 25.04, inside the 25.2 pt
  margin). At 390: 5.88 into the margin before, 0.01 now (316.81 in 316.8). Every after figure is the phone paper's own,
  to the hundredth; at 600 and up, and on Letter, the letter paper is as before.
- **§1 #3, held:** the product row 66.75 (67.75 with its rule) at 1600 and 1200, 90.25 at 390; guarded 88.25, and 131.25
  at 390.

**Money:** nothing moved but what an untick takes off, which is the feature. The money checks give the same figures
(`check-money`, `check-comp`, `check-onhand`, `check-separate`, `check-group-paper`, `check-group-lines`,
`check-printed`; §253, §260), and `check-onhand`'s 4,602 figures are byte for byte. §258 is words only: the three
shopping lists `check-separate` holds keep every line, quantity, state and unit, their foot's apostrophe aside.
Measured on the real Builder, over made-up data (§247): unticking a Tom Collins took its 11 gin and 47 limes off,
$1,786.06 → $1,494.72; one Undo, `Undid Removed Tom Collins +$291.34`.

**Not built of Round 86:** B9 — Sean, §1 a. L7 and H7 are new doors, *"not in this round"*. Your iPad check
(`ROUND-86.md:226–227`, `r86b`) is in his session as 26.5 (§5).

**Round 87: received, every row answered, nothing of it built yet** — 014 was built before it came, so §4 d's red
button, ruled to go in with 014, goes in as a step of its own (§4).

### 1 · ❓ Sean's decisions you need

**a · B9 — the calculator keeps its settings with the invoice, as your §23.9 rules.** Told.
- Your B9 (`ROUND-86.md:119`): *"It remembers. Reopened on the same invoice in the same tab… Nothing is stored, and it
  doesn't hold the quiet reload."* It answered our inventory's B9 cell, *Ruled: not*, which was ours and wrong (Round 87
  §1 d): your §23.9 (`HANDOFF.md:4138–4140`) stores the parameters.
- We told Sean (ours): *"Design's new ruling: it remembers your hours, drink mix and guests while that invoice stays
  open in that browser tab. Reload, or open it on your phone, and they're back to the standard settings."* His answer is
  quoted above: *"I want whatever you and I agreed on to go."* What he and we agreed, 19 Oct: **Per invoice** — "Each
  event keeps its own settings. Design already ruled this."
- **So B9 is not built.** Plan 009 is next (§4), as your Round 87 §1 b has it: *"Build them on Sean's word."*
- (read as) **B9's guests clause** — *"If Event details' guests changed since, guests shows the new count"* — is
  replaced by your §3 d (`ROUND-87.md:281–283`, :297–298): the Guests box opens at the last Update's count, with `Event
  details says 120` when they differ. Until §3 d is built, 009 seeds guests from Event details, as today.

**b · ❓ Your §4 c #4, flipped by Sean: the calculator follows changed bar times.** The note's words, and when it goes.
- **Your ruling** (`ROUND-87.md:339–342`; `r87p` 2, frame line 150): bar times changed while the calculator holds typed
  hours → in place under Bar closes, `The calculator uses 6 hours, which you typed.` and a secondary `Use 5 instead`;
  leaving it keeps 6; it shows only while the two differ.
- **We asked** *"You typed 6 hours in the calculator. Later you change the bar times to 6–11 PM (5 hours). What should
  the calculator use?"* — **The new bar times, 5** — "Your answer was 'the newer one wins'. The bar times are newest, so
  the calculator follows them, and a note under the bar times offers 'Keep 6' if you still want your typed number." The
  other button was yours: "My typed 6, until I say". His 19 Oct words, his double space kept:
  *"The newer one, but ask to update the other  (event details or calculator)"*.
- **To be built with 010 (ours):** your part — `r87p` 2's band, in its place — with its default flipped: `The
  calculator now uses 5 hours, from the bar times. You'd typed 6.` and a secondary `Keep 6`, one undo step.
- ❓ **Its words:** confirm, or reword.
- ❓ **When it goes.** *"It shows only while the two differ"* can't hold: once the calculator follows, the two agree.
  Ours: it shows from the change until Event details closes. After `Keep 6`, ours would be your own band — `The
  calculator uses 6 hours, which you typed.` · `Use 5 instead` — the way §4 a's `Use 7` turns into `Keep 3`
  (`ROUND-87.md:306–307`). Or it goes. Which?
- Typed hours that are newer than the bar times are asked about at Update, in §3 d's box, as you ruled; nothing there
  changes.

**c · ❓ The tuned crowd style's line — no client's name.** Confirm, or reword ours.
- Your §2 #10 (`ROUND-87.md:160–161`, `r87k` 10) gives Cocktail-forward `CheckSmallIcon` and a line that names the
  wedding's client, and *"your rule"*. We asked Sean whether to keep a client's name on screen; one button offered
  `From a real event and your rule`, the other kept the name. He typed: *"Come up with a better title that “from a real
  event and your rule”."* — read as better *than*.
- **Ours: `Tuned from your own events`.** The other three keep `Starting guess`. The name stays out of the app and out
  of this file.
- (ours) It stays provenance (your §12.4, 16D: every preset carries a line, only the words differ); the preset's
  `source` stays data. A second account — the app is built as though other bartenders could use it — starts from the
  same seed with no events of its own, so its Cocktail-forward would read `Starting guess`. Nothing of this is built:
  the pie is last (§4).

**d · ❓ The bar opens and closes at the same time.** Is your gold line his prompt, or does he need a box?
- **We asked** *"If the bar opens and closes at the same time in Event details (say 6 PM to 6 PM, usually a slip), what
  should the calculator use?"* — `Treat it as blank: 4 hours` / `24 hours`. He tapped neither and typed: *"Warn me with
  a prompt, but allow me to bypass."*
- **To be built with 010, as you ruled:** the Hours row's line two, `The bar opens and closes at 6 PM · using 4`, 13 semibold
  `--gold-text` (`ROUND-87.md:328`; `r87p` 1, frame line 149). He can carry on past it.
- ❓ **Is that his prompt, or does he need a box** — a new part — that lets him say *yes, 24 hours*? If a box: where it
  asks (Event details as the second time is set, the calculator, or at Update), its words, and what bypassing gives —
  the times as typed (24) or the guess (4). Please draw it if so. Until then, 4 and your gold line.

**e · Each step goes live as it passes its review.** Told. Asked (ours) whether to send each step or hold everything,
Sean tapped **Send each step as it passes** — "You can check each piece on your iPad as it lands, and if something's
wrong it's caught early. Each send gets the full build check first. Pieces that would leave something half-working (e.g.
duplicates before the zero-guest fix) are held until their partner is done." So between rounds the live site will run
ahead of this file's header line: read `main`'s log, where each commit names its ruling by file and line. 011 and 012 go
up together.

### 2 · Every (ours), and where prose and frame differ — told, unless §3 asks

`(ours)` is a choice no ruling or frame makes, built as the nearest thing already ruled. `(read as)` is how a ruling was
read. Where a frame and your prose differ, the prose was built, and `r86i`/`r86k` over `r86a`–`r86c`. Line numbers
without a file are `ROUND-86.md`'s.

**a · The way back's parts and form A (§248–§249)**
1. **›'s colour:** `--text-muted` (prose, :33) over `r86k`'s drawn `#9F978A`, in `r86k`'s shape.
2. **The socket:** `--surface-sunken`, `#E8E4DD`, for `r86i`'s `#E9E4DA` — 0.0041 apart in OKLab, 1.236:1 on the paper
   either way — as :62 allows.
3. **"One line, 68 tall"** measures 69 — `r86i`'s min-height 68 and its 1px rule — in the frame and the app alike.
4. **The editor's title is 22** (`r86i`), down from 24, the card kit's — see §3 #1.
5. **✕** keeps the app's radius-8 `CloseIcon` (:68, *"✕ keeps its border"*), not `r86i`'s radius-10 box with a typed ✕;
   it gains only the 0.97 press.
6. **`r86i`'s own motion** (260, 320) is superseded by `r86k`'s, which is built.
7. (read as) **Reduce Motion:** :90's *"nothing slides. The knob and the body change in place."* over your Round 79 §3
   #4's fade. Every arrival is `none` under it (measured).
8. (ours) **Dark beyond the coin:** shadows black at `r86i`'s alphas; the white rims and the knob's lit edge dropped. The
   coin's dark top and foot by :63's steps from `#7FA894`: `#9ACBB4` and `#739584`; its arrow 10.31, 7.06 and 5.67:1.
9. (ours) **A step behind tints on hover** only under `(hover: hover) and (pointer: fine)`, with the arrow's lean;
   `r86k` gates the lean alone.
10. (ours) **The grain** is on every window's paper; the shared confirm's box has none.
11. (ours) **The press** is a window-level rule: every footer button presses, drawn by `SheetFooter` or not; a disabled
    one doesn't.
12. (ours) **The page coin** (Settings' sections, Developer tools): the title keeps its 24, 12 + 8 from the coin. On
    Developer tools the coin sits on the title's line, in a row that never wraps (§249).
13. (ours) **`Back to General`** on Developer tools' own coin, from S6's `Back to {the page before}`.
14. (ours) **Nothing plays when a window first opens.** `r86k` fades the body on open; the prose is silent.
15. (ours) **A step taken by the browser's history moves nothing** — Safari's Back button as well as the swipe, which the
    page can't tell apart (:91 names the swipe).
16. (ours) **A step squeezed narrower than its own 9 + 9** is clipped by its own button (see §3 #4).
17. (ours) **Without the Navigation API**, a page coin that can't tell what is under it replaces the entry — never a push.
18. (ours, §249) **Products' Return pass:** the next product's editor appears in place, with no arrival.

**b · The trail in the Builder (§250–§251)**
19. **The chooser's header is 68** (69 with its rule), the prose's (:39), not `r86b` 1's and `r86c`'s 52 (`r86b`, frame
    line 478).
20. **A step behind is cut at 140 and shrinks, on one line** (:40), not `r86c`'s cut at 180 with the trail wrapping
    under itself — §3 #4.
21. **`r86i`'s groove, coin and 17 semibold knob**, not `r86a`–`r86c`'s plain words and their 18/1.45 title.
22. **B16's summary** sits under the 68 line, 20 in and 12 below the groove, 15/19.5 `#5F594E`; `r86c` draws it directly
    under the trail, 15/1.3 `#5F594E`.
23. (ours) **The 68 line on the ⋮'s popovers** — the stage list (400) and the chooser (300) — with no ✕; `r86b` 1 and
    `r86c` draw none.
24. (ours) **The `+` sheet from the list:** the trail takes its whole header, so its `New invoice` label goes; no ✕ added.
25. (ours) **Tax rate from the ⋮, the fill list and the leftovers' count** wear a first step's 68 line, the title alone
    at 22; at 390 the fill list's long title is cut.
26. (ours) **B10's choosing bar** sits at the rail panel's foot, in `Calculate quantities…`'s place while he chooses; it
    ends when he leaves Cocktails or switches invoice.
27. (ours) **Door 1's editor**, back from choosing lines, keeps `Menu › Group lines`.
28. (ours) **"Something typed" in the group editor** is measured from the door's own start — door 2's chosen category
    isn't typing; a chip change counts.
29. (ours) **Tax "changed"** is the rate as Apply reads it (6 and 6.0 alike); `Also make this my default` alone doesn't
    ask, because the body would be untrue.
30. (ours) **Swap's search words** are not asked about; no body is ruled for Swap.
31. (ours) **Back from Swap to the rail's card** plays the card's own return (A's 56), not `r86k`'s 48, which is for a
    first step's title.
32. (ours) **A window returned to across windows** by the trail (the gate, a panel, the ⋮) plays no arrival.
33. (ours) **Every Builder window is a history step** — the ⋮, the panels, the Undo list, the trash confirm, Event
    details, the save pill's window.
34. (ours, §251) **One jump back over several steps** moves the window once, to the lowest.
35. (ours, §251) **`Your changes to this group line haven’t been saved.`** for a group with no name, shaped on :180's
    `…to this word pair…`. No screen reaches it today: a blank group name is refused.

**c · The inventory's rest (§252–§253)**
36. (read as) **L8's *"the way Products' `?q=` does"*** (:105): `?q=` is used up as it is read (§194; your Round 79's
    #13, `ROUND-79.md:93`, *"A reload doesn't search again"*), so it keeps nothing across a reload. The outcome is built
    — each library tab's search, filter, sort and scroll, kept in the browser tab's own session store — not that
    mechanism.
37. (ours) **L8:** leaving with Deleted on forgets the scroll too (it was the trash's). A kept category is read against
    what the filter offers — every category his products carry (§253's fix).
38. (ours) **L6:** the select bar keeps its first row's 44, so it is still 69 with nothing picked.
39. (ours) **B20 on his own ✕:** `{name} closed. All work is saved.` — the ruled words without *"to make room"*, which
    would be untrue.
40. (ours) **Reopen** is the Library strip's Undo (2px `--accent-fg` edge, semibold, 44), in the box's 17 — the box takes
    the strip's fill *"so the app's two pop-ups look alike"* (`ROUND-71.md:49–50`); the canvas's *8-tab cap* toast is
    drawn in the box's look before your Round 72 #4 (`ROUND-72.md:30`). Measured 102.19 × 44; 9.34:1 light, 7.06:1
    dark. See §3 #11.
41. (ours) **Add cost's editor** has no bin — its door is a price — and Return saves, as Products' Return pass ends in a
    Save.
42. (ours) **H3's line** stands in the card's note look where `What it came to` and `Total` stood; the card keeps the copy
    it showed, since the open fails exactly when this device's copy has lost the record.
43. (ours) **H4:** History's own notice box is gone; its three messages moved to the Builder's.
44. (ours) **S5:** Add, and another row's ↑/↓, count as *"another row"*; a new row's Remove only closes it.
45. (ours, §253) **S5's `Remove Coupe?` is a history step:** Safari's Back answers `Keep`.
46. (ours) **Signing in again** returns him only to a path on this site, never another site and never `/login` itself;
    anything else lands on `/`, as before (§252 closed an open redirect it found this way).

**d · Your §1 and §2 (§254–§260)**
47. **`r86d` is drawn at 2×** (track 88 × 52, knob 40, shadow `0 2px 6px`); at 1× that is the app's 44 × 26 and 20 and
    the prose's `0 1px 3px`, and its four fills and both edges are the app's, value for value. Your *"about 7.07:1"*
    computes 7.0649 by WCAG's sums: 7.06.
48. **§1 #2's *"the way the invoice does"*** is the invoice's own list, `screen and (width < 600px), print and
    (max-width: 5in)`. In the table only the name cell's padding changes (the phone paper's).
49. (ours, §257) **A copy he was shown that has left the trash** — restored on his other device — refuses the whole
    Empty trash: all or nothing.
50. (ours, §257) **A copy his other device trashed while the confirm was up** — never shown, never counted — stays; the
    rest go.
51. (ours, §257) **While the write is in the air,** Empty trash does nothing more: one tap, one write.
52. (ours, §257) **An invoice's number is let go once the delete lands**, from the copy he saw — `Delete…`'s order
    since §238.
53. (ours, §257) **An Empty trash tapped offline on an older build** is still sent by id from that device's queue — the
    one send this can't reach.
54. (ours, §258) **#36 (a)'s two sentences** stand one after the other in the row's one reason; two drinks through one
    prep, each refused, are two sentences; the same sentence twice is said once; the cushion's line counts among *"the
    calculator's"* apostrophes.
55. **Our commits cite your §2 one line out** — §256's #4, §257's #13, §258's #31, #36 and #32, §259's #6's last case,
    and every row §260 names (§256's #44 and #46 are right): #4 is :212, #13 :213, #31 :214, #36 :215, #44 :216, #46
    :217, #6's last case :220, #32 :221.

**e · Plan 014 (§246–§247)** — the plan's choices, not yours:
56. (ours) **An on-hand line only the unticked drink needed** comes off with it; it bills nothing (the plan read your
    Round 82 §1 #3).
57. (ours) **A category already empty before the untick** (a template's) survives it; one the untick empties goes.
58. **Every remaining figure stays as it was** after an untick; your §4 d's red button says so, next (§4).

### 3 · ❓ Open for you

**a · The way back, as built**
1. ❓ **The card and its editor don't share a line** (L1, :99; `r86k`, frame lines 52–53 and 88; :84–85, *"In A, the
   title slides 56 over to make room for it, so nothing jumps"*). `r86k` draws one header for both. L1's *"The rest
   stays as built"* kept the card's own. Measured (§249, 1600): the card's ✕ 20 from the window's right and 16 from its top,
   its title 24 at 20 in; the editor's ✕ 12 and 12, its title 22 at 76. So from card to editor ✕ moves 8 right and 4
   up, and the title 24 → 22. ❓ Does the card take A's 68 line — title 22 at 20 in, ✕ at 12 and 12, no coin — as
   `r86k` draws it, or stay as built?
2. ❓ **"The footer's button" doesn't exist** (B2, B3, B4, :112–114; `r86b`, frame lines 506 and 558). Read and searched
   at `67691d9`: `setGate("send")` has one call (`Builder.tsx:652`), inside `requestStage` (:598); `requestStage(` is
   called by the stage list's rows and its Archive row (:1697, :1701) and the ⋮'s Archive (:1834); the stage list opens
   in one place, ⋮ › `Stage…` — a search of `src` for `setStageMapOpen` finds one `true`, `Builder.tsx:1738`, besides
   the `/style` lab's. The footer's forward button (`Mark ready to send`, labelled by `nextStageAction`,
   `types.ts:1022–1029`) went on 10 Aug in `566444b`, *"One gated door to a stage change"*, and a search of `src` for
   `nextStageAction` finds no caller now, only `Builder.tsx:398`'s comment that the button is gone. So the gate has one
   door, and after B3's Apply-to-the-invoice or B4's Review the way back to it is ⋮ › `Stage…` ›
   `Ready to Send`. Built as ruled otherwise. ❓ Is a door in the footer wanted — a new part, so please draw it — or,
   with one door, does the gate take a trail, `Menu › Change stage › Ready to send`?
3. ❓ **`r86b` 3 against §0** (frame lines 533–534: *"Ready to send, Cancel and Escape go back to the gate"*, and only ✕
   and a tap beside ask; :54–55, *"A Cancel button never asks… Every other way out asks when something typed would be
   lost"*, and q4, :28–29). The prose was built: the step behind, the coin, Escape and Safari's Back ask when the rate
   changed; Cancel never. ❓ Confirm.
4. ❓ **Long trails squeeze their steps behind under 44 wide, and cut a short step first.** :40 cuts a step at 140 and
   lets it shrink; :36 makes each one's target the groove's full 44 — tall. Built: `max-width: 140px; flex-shrink: 1`
   (`globals.css:1062–1063`), so every step behind shrinks alike. Measured: at 390, B19's `What's left over?` 22.4 wide,
   reading `W›`; door 1's `Menu` 26.2 and `Group lines` 44.1; door 2's 49.5 and 20.8; B16's `Templates` 80.9; the lab's
   long trail 7.67, 18.77 and 13.92. At 1600, in the 512 editor, door 2's `Group lines` 56.9 (`Gro…`) beside `Pierre
   Ferrand…` at 135.4. The knob is whole and the coin 44 × 44 every time. ❓ A floor width (44?), which step gives way
   first (the oldest, the longest?), or `r86c`'s wrap?
5. ❓ **The trail's knob in dark.** :34: *"the same part as the switches' knob"*. The switches' knob is now §254's
   (`--switch-knob-on`, `--switch-knob-off`, `globals.css:122–123`); the trail's is `--surface` (`globals.css:1017`): in
   dark `#1A1712`, its words `--text` at 15.43:1, in a groove `#14110D` that reads 1.05:1 against the paper — the groove
   shows by its words alone. ❓ Does the trail's knob follow the switch's off knob (`#FDFCFA`, whose words would then need
   a light theme's ink), stay, or neither — and the groove in dark?
6. ❓ **The switch's knob still slides with Reduce Motion on** (§260), as it always has: no reduced-motion rule names
   `.switch-knob`. :90's *"nothing slides"* was read as the way back's knob and body; §1 #1 asks only for the colour over
   *"the slide's own time"*. ❓ Does it cover the switches?
7. ❓ **Choosing lines for a new group holds no history step** (door 1, after `Choose lines`; §251, walked): Safari's
   Back there leaves the Builder and loses the typed name and category without asking. It isn't in the inventory, and
   §250 didn't change it; B7 keeps `Add lines` a mode (:117). ❓ A step of its own (with which trail), or a mode that
   asks first?
8. ❓ **B17 names the product being swapped** (`Bacardi Superior › Swap`, :127, `r86c`), though its step goes back to the
   cocktail's card. Built as ruled. ❓ Confirm.
9. ❓ **Ticking a drink is still two undo steps** (§246 left it; the untick is one): one Undo after a tick takes its
   products off and leaves it ticked. ❓ One step, like the untick?
10. **Told — a fault older than §248, ours to fix unless you say otherwise:** pressing inside any window and letting go
    over the dim around it closes the window — the browser sends the click to the dim (`Sheet`'s scrim). A mouse or
    trackpad only; a finger that moves sends no click (§249). We'd make a press that began inside the window not close
    it.

**b · The rest**

11. ❓ **Reopen's box cuts its words** (B20; your Round 71, `ROUND-71.md:27–28`, *"truncating"*). With Reopen the box is
    72 tall (its 14/16 kept), and its words get 298 of 448 at 1600: `Riverside wedding closed. All work is …`. With H4's
    pair they get 298 of the 643 they need — `Duplicated Harbor party. Pemberton …` — so it hides that a tab was closed at
    all. ❓ Do the words wrap when the box carries an action?
12. ❓ **S5 across the page's two lists** (§253): a Method row being renamed stays open when he taps a Glassware row, so
    two rows are open at once; nothing is lost — Return or Done still saves it. ❓ Is a row in the other list *"another
    row"*?
13. ❓ **The search words hold the quiet reload** (§242's rule for typing), though L8 now keeps them across one. ❓
    Release them?
14. ❓ **Five figure columns on 4 × 8 in** (§1 #2, :198, *"The phone paper exists for that width"*). True for four. For
    Per drink and four batch columns — the chooser allows them, and your Round 85 #20 (`ROUND-85.md:95`) says *"The same
    rule holds for five or more columns"* — the phone paper's own table runs 65.88 into its margin and 32.28 past the
    sheet's edge (1.32 inside the paper's), and Chrome's PDF shrinks the page to about 91% (§255). ❓ What gives way there? And PrepSheet's Letter on 4 × 8 in runs its heading line 61.13
    into the margin: ❓ does the prep's Letter follow its page too? (Only the recipe sheet's was ruled, and built.)
15. ❓ **An older calculator fault** (§260; `calculator.ts:940–946`, the merge's `!bothReal` branch — the same at
    `fe226c4`). A product poured by one drink in a unit the app reads and by another in one it can't — a French 75's
    `3 oz` of Champagne and a Kir Royale's `1 top`, in made-up data: with the French 75 ticked first, 16 bottles worked
    from the readable pour alone, the working naming the French 75 only, no `at least` and no sentence (the foot: `1
    line needs a number from you`); ticked the other way, #36 (b)'s sentence and no quantity. `top`, `rinse` and `float`
    are units the app can't read. ❓ How should it read — and should the order matter?
16. ❓ **The picker's `To make` note after Update** (§247, seen in passing): *"Prep you batch yourself. Their ingredients
    aren’t on the invoice yet — check each recipe for what to buy."* (`CocktailPicker.tsx:967–968`) still shows once the
    calculator's Update has put the sugar, limes and lemon juice on. ❓ Its words once they are on.

### 4 · What's next, in order — told

Sean's order, 20 Oct (question and options ours): *"Build the rest now, in this order? (1 finish Round 86 + calculator
settings + bar-times hours; 2 zero-guest fix, duplicates' menu, the swap; 3 write the pie's plan, check it, build it in
batches — each reviewed…)"* — **Yes, in this order**. Each step goes live once built and its review passes (§1 e).
1. **009, with §7** — the calculator's settings kept with the invoice; on a locked invoice its figures read-only
   (`r87t`).
2. **010, with §4 c's words** — hours from the bar times; line two's states (`r87p` 1), the rail's 12-hour times, the
   flipped in-place note (§1 b), the same-times gold line (§1 d).
3. **§8** — the cocktail hour's switch (`r87u`).
4. **§4 d** — the red button after an untick (`r87r`).
5. **011 + 012, shipped together** — the zero guard as `r87h`, its own foot part; a duplicate with its menu and swaps.
6. **013, with §6** — `Swaps to apply`, line two, `SwapIcon`; Update writing to a product's billed line (§6 #2 b).
7. **§4 a** — the hand-set row (`r87q`).
8. **§5** — templates and the menu (`r87s`, `r87v`).
9. **§3 a–c** — sends, per guest smaller first, `Included`: one plan, with `ViewIcon`.
10. **§3 d, with §4 c #4's box** — the calculator's guest count and the box at Update, after 009 and 010.
11. **The pie** — a plan of its own, after 009, with its five icons.

**One difference from your For implementation #2** (`ROUND-87.md:420–421`): it puts the pie *"before §3 d's guest
count"*; Sean's order puts the pie's plan last, so §3 d is built first, its count stored with 009's settings, and the
pie's plan takes it as it finds it.

### 5 · What his iPad still owes

- **Session 26 — new, nineteen checks, on his iPad since the three sends** (26.1–26.10 sent at 07:53, 26.11–26.17 at
  10:03, 26.18–26.19 at 12:04; all of it read back live at 12:44, §0): unticking and one Undo (26.1–26.2), the coin (26.3–26.4), **your check, 26.5** —
  ⋮ › `Stage…` › `Ready to Send`, `Set rate`, Apply, back on the gate (`r86b`) — the trail (26.6), Safari's Back
  (26.7), Escape (26.8), the box and Cancel (26.9–26.10), Add cost (26.11), Reopen (26.12), History (26.13–26.14),
  Business, a rename and Remove (26.15–26.17), Empty trash offline (26.18), the knob in dark (26.19).
- **Sessions 23–25, still open:** 23.1, 23.2, 23.4–23.6; 24.1–24.5; 25.1–25.6 — 25.7 is replaced by 26.19, now that
  §1 #1 is built. **22.1–22.5** too. Your *"His Sessions 23–25"* waits on these.
- Every screen measurement here is Chrome's. Nothing was printed on an iPad, and Safari's Back and swipe were never run.

## What I need back

1. ❓ **§1 b — the flipped note:** its words, and when it goes. 010 is second in line, so it is built with ours unless
   you answer first.
2. ❓ **§1 d — the same times:** your gold line, or a box that lets him say yes to 24 hours — drawn, if a box.
3. ❓ **§3 a — the way back:** #1 (the card and its editor) and #2 (the footer's button) first; then #3–#9.
4. ❓ **§3 b — the rest:** #11–#16.
5. ❓ **§1 c — the tuned line's words.** The pie is last, so this can wait for its frames.
6. **His Sessions 23–26** come back in a later round.

---

## 🔴 ROUND 87 — Sean went over the estimate, the quote and the calculator (*"easier to operate. And accurate."*), by buttons. Round 86 is still open and comes first; this round changes nothing in it. Three fixes to be built with nothing new drawn — the calculator keeps its settings per invoice (your §23.9), its hours from the bar times, unticking takes off what only that drink needed — object if you would. ⛔ Two stops: the swap's money between the swap and Update, and the zero guard's words and button. ❓ The pie, Sean's big Calculator rework — it reverses your 28B, so please confirm, then draw it. ❓ The estimate: sent copies, per guest, `Included`, the calculator's guest count. And the smaller asks


**implementation → Design, 20 Oct 2026. Branch `main`, app at `751b1ce`.** The code is `1eb0841`'s (§243 · review).
`72c3bc7` (§244, records), `8b00634` (design skills installed in the project, not part of the app) and `751b1ce` (§245,
records: Sean's answers and six build plans, `plans/009`–`014`) change no code: `git diff --stat 1eb0841 751b1ce -- src
scripts package.json` is empty. **Every `file:line` below is at `751b1ce`.** A `docs/design/` file is yours, as copied
into `limbo-app` (private); a frame named is read from its HTML source there — none was drawn for this round. **Nothing in
this round is built.**

⚠️ **Round 86 is still open, and it comes first.** No answer to it has come: no zip in `limbo-app`'s `design-imports/`
is newer than your Round 85's of 18 Oct, 01:55, and nothing there is newer than its extraction at 02:03 (`ls -t`), and
the iCloud handoff folder holds no zip (`ls`). **Round
87 replaces nothing in Round 86 and reorders nothing in it.** Answer 86 first or both together — your choice. We
recommend 86 first, because Sean's *"Let’s do A plus D. Build."* is waiting on it. One correction of ours to Round 86's
inventory is in §1 d; it changes no question there.

**What is LIVE, read back by curl (no browser):**
- **`72c3bc7`'s build — §236–§244, your Round 85 as built.** Pushed 18 Oct at 13:53:41, with Round 86 (`limbo-design`
  `7fc529c`, 13:53:42) (`git reflog`). On 20 Oct at 00:06 the live `/login` and `/style/trashcheck` both carry build id
  `NVGtN5nE6jP81lrvxd2au` — not `d1e7dbe`'s `5agCBiRrKMy0jW6xLyECl` — and `/style/trashcheck` carries `The boxes · r85g`,
  §238's section (`git log -S` finds it first in `8dc8481`), and still `Another copy is in History`.
- **How we know it is `72c3bc7`'s:** it is the only push since `d1e7dbe` that changed the app. The other, `8b00634` (19
  Oct, 13:17:55), changes none of the paths `netlify.toml`'s ignore rule builds from (`git diff --stat 72c3bc7 8b00634 --
  src public package.json package-lock.json next.config.ts postcss.config.mjs tsconfig.json netlify.toml` is empty), so
  its push built nothing. Netlify's own deploy list was not read. The code is the same either way.
- So Round 86's *"None of this round's build is live yet"* is overtaken. **GitHub reads `8b00634`** (`git ls-remote`, 20
  Oct). `751b1ce` goes up with this round.

**How it was found:** an audit of the code (the improve advisor), then six plans written against `8b00634` (whose code is
this one), each read cold by a second pass that applied it to a scratch copy and ran its checks there — `tsc`, `eslint` on
the files it touched, the build's checks and its own new one, in Node against stand-ins, never the database, no browser,
no `next build`. Figures marked *measured* below come from those runs, on the plans' own made-up invoices. **Not
covered:** Safari, his iPad, and his account.

**This file with this round:** with Round 76 still here it would have been 516,096 bytes, over your 500 KB, so Round
76 — the oldest round here — moved to the top of `REQUESTS-ARCHIVE.md`'s rounds, whole and unedited: `cmp` finds no
difference between the moved text and `git show 7fc529c:REQUESTS.md`'s lines 4368–4659, and a `diff` of the rest of the
archive against `7fc529c` finds none either, each line 292 lower. This file is now 464,780 bytes (`wc -c`), under 480 KB,
so the next round has room. **So an archive line cited before 20 Oct is that number plus 292** — Round 86's
`REQUESTS-ARCHIVE.md:2151` is line 2443 now. The header and the archive's own header say so.

**What Sean sent, 19 Oct, his own words:** starting it, *"and see how we can improve the estimator, estimate, and quote
features to be easier to operate. And accurate."* Then *"Okay. Let's do a grill me first with multiple choice questions
(use plain language and examples where needed)."* and *"Can't you just make these buttons I can press?"* So every
question came as buttons, in three rounds (A, B, C). Below, **the questions and every button's words are ours**: a
**bold label** is the button he tapped, and the words after it are that button's; what he typed is in italics and said
to be his, his spelling kept — any other italic quote is a question of ours or a file of yours. On the split — our
question *"Most of these need no new screens (calculator memory, hours, the zero guard, the swap). Others need Design to
draw them (the warnings, "changed since you sent it", the template question). OK to build the first group now and send
the rest to Design?"* — he tapped **Yes, split them** — "Build what's already ruled now; Design draws the rest in one
round." This is that round. Two of the four our question said need no new screens — the zero guard and the swap — turned
out to need you (§4 b, §6).

### 1 · What the audit found, and three fixes to be built with nothing new drawn

**a · The faults, read in the code** (read, not run, unless *measured*):
1. **The calculator forgets its settings** each time it closes. It seeds from `invoice.calcParams`
   (`CalculatorSheet.tsx:150–153`), and a search of `src` for `calcParams` finds that read and one comment
   (`calculator.ts:1632`, *"read in one place and written in none"*): nothing writes it. The sheet is mounted only while
   open (`Builder.tsx:2005`).
2. **It assumes 4 hours**, for any bar: `useState(4)` (`CalculatorSheet.tsx:162`). Bar opens and Bar closes
   (`EventDetailsSheet.tsx:368`, `:376`) are read by Event details alone — a search of `src` for `form.open` and
   `form.close` finds `EventDetails.tsx:75–76` and the sheet's own boxes (`:371`, `:379`).
3. **At 0 guests it offers to set every line to 0.** `drinkTotals` gives 0 drinks when guests, hours or pace is 0
   (`calculator.ts:131`); `proposals()` still counts each line whose figure differs as a change (`:1870–1895`), and the
   button is live whenever that count is above 0 (`CalculatorSheet.tsx:269`). A blank guest count reads as 0 (`:159–161`)
   — every new invoice and every copy (`blankInvoice()`, `invoiceTabs.ts:219`). *Measured* (plan 011, and again by its
   reviewer), on a made-up draft with rye and vermouth at 1 bottle each, opened at 0 guests: `Update 4 lines`; tapped, rye
   0, vermouth 0, limes and an on-hand line added at 0, and the billed total down $44.98.
4. **A swap leaves both bottles billed.** A swap writes the event's swaps and nothing else (`CocktailPicker.tsx:740–775`
   → `Builder.tsx:722–728`). Update then adds the new bottle, and the old line — which no drink as served needs — stays,
   billed. Your §45.2–§45.3 (`ROUND-31.md:111–163`) ruled the fix on 13 Sep; it was never built.
5. **Unticking leaves lines.** The untick (`CocktailPicker.tsx:373–428`) reads the library recipe, not the drink as
   served (`:402`), and takes off directly linked bottles only (`:407`). So what its prep recipes put on (the limes), its
   on-hand lines and a bottle swapped in for it stay. And it is two undo steps (`:420`, `:425`), the menu first and the
   lines second, so one Undo brings its lines back and leaves the drink off the menu.
6. **A duplicate has no menu.** Both copies — ⋮'s and the `+` tab's (`startFromDuplicate`, `Builder.tsx:238–271`) and
   History's (`duplicateInvoice`, `invoiceTabs.ts:309–344`) — copy no `menuCocktailIds` and no `substitutions`: a search
   of `invoiceTabs.ts` and `templates.ts` for either finds none, and `Builder.tsx`'s (`:710`, `:725`, `:2010–2011`) are
   outside the copy. So the calculator on a copy starts with nothing ticked.
7. **Per guest can print backwards.** `perGuest` divides each end by its own count (`estimateDocument.ts:441–451`; your
   r79 rule, quoted at `:426–427`: *"Each end is divided by its own count… Each end is one scenario."*), and `rangeText`
   prints the low end first with nothing ordering them (`:250–255`). With a fixed part — Rentals typed at both ends — the
   fewer-guests scenario can cost more a head: our question's example was `$46 to $38`.
8. **The estimate scales from Event details' count, not the calculator's.** Its base is `invoiceGuests`
   (`estimateSheet.ts:489–490`, read at `:382–391`: Event details' stored count, or its words). The calculator keeps no
   count — it seeds from Event details (`CalculatorSheet.tsx:159–161`) and stores nothing. Our question's example: Event
   details 120, the calculator run for 150, so the quote comes out about 25% off (150 ÷ 120).
9. **A sent estimate's figures change with the invoice.** The invoice stores only the estimate's guest counts, word pairs
   and typed figures (`InvoiceEstimate`, `types.ts:1655–1664`); every figure is worked from the live invoice each time
   the sheet or the page draws (`workEstimate`, `estimateSheet.ts:487–496`). Nothing records a send: a search of `src`
   for `sentAt`, `markedSent`, `Mark as sent`, `Estimate sent` and `View estimate` finds none. Only his PDF remembers.
10. **A category where everything is comped reads `To be confirmed`.** Its amount is what the client's paper prints —
    billed lines only, a comp at $0 — so it is $0 (`estimateSheet.ts:496`, `:507`). A category that follows guests then
    has no range (`workedRange`, `:450`), and one that doesn't has none until he types (`:521`); no range prints `To be
    confirmed` (`ESTIMATE_TO_BE_CONFIRMED`, `estimateDocument.ts:260`), with `No price yet` on the sheet's line two
    (`NO_PRICE`, `estimateSheet.ts:169`, used at `:507`).

**b · Three fixes, planned and not built — they wait for Sean's "Build"**, in this order (`plans/README.md`): 009 → 010 →
014. Each uses parts already on screen and adds no words. **What each changes on screen, so you can object first:**

- **009 — the calculator keeps its settings, per invoice.** Your §23.9 (`HANDOFF.md:4138–4140`): *"store the PARAMETERS
  this invoice used, not just the results. A second run must start from what he set last time"*. Sean: **Per invoice** —
  "Each event keeps its own settings. Design already ruled this."
  - **On screen:** the calculator opens with this invoice's last pace, opening rush, drink mix, cushion and whole
    packages, and the hours if he typed them (010 below). An invoice never calculated opens at today's defaults. Opening
    writes nothing; each knob change and each Update keeps them. Undo of `Applied the calculator` leaves them.
  - **A copy carries the five knobs, not the hours.** Sean, Round C: our question *"When you duplicate an invoice, should
    the calculator's settings come too (pace, opening rush, drink mix, cushion, whole packages)?"* — **Yes** — "A copy
    keeps how you set the calculator. Guest count and hours still come from the copy's own Event details. Duplicates
    already carry the tax rate the same way." A template never carries them.
  - **Not built: §23.9's first paragraph, "Seed a copy onto the invoice at creation"** (`HANDOFF.md:4128`). There is no
    Settings default to seed from — a search of `src` for `openingRush` and `cocktailShare` finds `CalculatorSheet.tsx`
    and `calculator.ts` only — so the first knob change or Update stores all five. The pie's Settings (§2) would be where
    a default comes from.
  - The guests box still seeds from Event details, as your band table has it (*"Guests · Hours the bar is open | from
    Event Details"*, `HANDOFF.md:3915`). §3 d asks about that. A locked invoice: §7.
- **010 — hours from the bar times.** Your band table again (`HANDOFF.md:3915`). Sean: **Bar times** — "Read from Event
  details (6–11 PM = 5 hours). You can still change it in the calculator."
  - **On screen:** `Hours the bar is open` opens at Bar opens → Bar closes: 6–11 PM reads 5; past midnight is counted
    (9 PM–1 AM reads 4 — our example); odd minutes to two places (6:00–10:20 PM reads 4.33 — ours). Blank, unreadable or
    the same time twice reads 4, as today, and nothing says why (§4 c). The row's words are unchanged.
  - **Cocktail hour is inside the bar times, not added** — resolved from the old app, not asked: it counted Bar opens →
    Bar closes and took the cocktail hour out of that span at its own rate (`totalHrs`, `recepHrs`, the old app's
    `invoice-builder.html:4181–4182`, in neither repo), which is today's opening rush.
  - **A number he types.** Sean, Round C — our question *"You type 6 hours into the calculator, but Event details says the
    bar runs 6–11 PM (5 hours). Which number wins next time you open it?"* — he typed: *"The newer one, but ask to update
    the other  (event details or calculator)"*. **Planned: the newer one wins** — a typed 6 (our example) stays until
    he changes the bar times, and then they win. The asking is two new boxes, yours (§4 c); until you draw them it wins
    without asking.
  - **Two things he will see:** an invoice he already Updated at the old 4 hours, whose bar times say otherwise, opens
    with changes proposed — `Update N lines` where it read `Update 0 lines` — and nothing moves until he taps. And an
    invoice from the old app probably carries its default bar times, 17:00–22:00 (`invoice-builder.html:3274–3275`;
    inferred from its code, not from his data), so it opens at 5.
- **014 — unticking takes off what only that drink needed.** Sean: our question *"You untick a cocktail (say the
  Daiquiri). What happens to ingredients only it needed, like its limes? On Aug 10 you said: "If I uncheck it, the
  ingredients should disappear.""* — **Disappear, Undo-able** — "Removed automatically; one Undo brings them back." And,
  Round C, our question *"You untick the Daiquiri. Its limes were a number you'd set by hand (say 3 bags instead of 2).
  Should they come off too?"* — **Yes, with Undo** — "Anything only the Daiquiri needed comes off, whoever set the number.
  One Undo brings them all back, your 3 bags included."
  - **On screen:** one untick takes off, in one undo step, every line no other ticked drink needs — its bottles, as
    today, and now the products its prep recipes put on, its on-hand lines, a bottle swapped in for it, and lines only it
    needed that he set by hand, comped, grouped or hid (a comp bills $0, so the total doesn't move by it). A group it
    empties dissolves in the same step (your Round 74 §3 #7); a category it empties goes, and one already empty stays.
  - **A line another ticked drink needs is left exactly as it is**, not reduced: the even split moves every remaining
    figure, some up (§4 d).
  - **The words are today's, one step instead of two:** `Removed Tom Collins` when lines come off, `Tom Collins off the
    menu` when none do; one Undo brings the drink and all its lines back (`Undid Removed Tom Collins`, the toast as
    built). *Measured* on the plan's made-up menu: the Tom Collins off takes its gin and its limes (through its lime-juice
    prep) — two lines, one step.

**c · FYI, not an ask — a duplicate, once the zero guard is in.** Sean: *"Duplicates yes. But ask first for templates."*
Plan 012 makes a copy, from all three doors, arrive with its cocktail menu and its swaps — and plan 009 with the five
knobs. The Builder's Duplicate stays one undo step, `Duplicated invoice`, and its Undo takes the menu away with the lines
(012 makes the stored copy follow); comps and packing marks are still cleared (`r64e`; your Round 74 §1 #7). Swaps travel with the menu because, *measured*, a copy with the menu and not its swap proposes a
new Bacardi line of 25 beside the copied Diplomatico at 13 — two rums billed; with the swap, Diplomatico 13 → 25. **012
waits for the zero guard** (§4 b): a copy opens with no guest count (`invoiceTabs.ts:219`), so with its menu ticked,
Update would offer to set every copied line to 0. Nothing new is drawn, but an existing path shows more.

**d · A correction of ours to Round 86** — it changes no question there. The inventory's row B9 (the calculator) says
*Ruled: not* of its settings resetting. Your §23.9 ruled them kept, in August (`HANDOFF.md:4138–4140`). That cell was
ours, and wrong; plan 009 builds §23.9.

### 2 · ❓ The pie — Sean's big Calculator rework. It reverses your 28B: please confirm, then draw it

**Sean, 9 Oct** (`limbo-app` `WISHLIST.md`, answering whether a template's quantities should change with the guest
count): *"Yes, the template quantities should scale with guest count – but it should be an explicit option, not
automatic. I want to hold off on that for now, though because I'm thinking of doing a big rework of the Calculator."*

**And, 19 Oct, typed, when we went over the calculator keeping its settings:** *"For "build now" #1: I want to clarify
that the calculator treats the items that it affects like a "pie". Everything should add up to 100%, which means that the
more cocktails or stand alone items (e.g. beer, wine, spirits, etc.) that I add, the smaller their respective percentages
would have to get. Or at least that's how I imagine it would work. Perhaps we should do a grilling on that so that we
understand each other."* So we did — Round B, below.

**a · Today's model, in numbers** (read, not run; the arithmetic is ours, by hand — we told him 648 and 292, about 97
each and about 73):
- drinks = guests × (min(1, hours) × pace × opening rush + max(0, hours − 1) × pace); cocktails = drinks × the drink mix
  (`drinkTotals`, `calculator.ts:126–143`; the defaults — pace 1.2, opening rush 1.4, drink mix 45%, cushion 10%, whole
  packages on — at `:104–110`). 100 guests for 5 hours: 100 × (1.68 + 4.8) = **648 drinks, 291.6 of them cocktails.**
- **The cocktails are split evenly** between the ticked drinks: `const each = totals.cocktails / cocktails.length;`
  (`calculator.ts:661`) — three ticked, 97.2 each; a fourth, 72.9 each. The file's own note calls it *"the assumption most
  likely to be wrong for a menu with one crowd-pleaser and two curiosities"* (`:646–647`).
- **The other 55% orders nothing.** It shows only when no cocktail is ticked, as one figure — *"drinks that aren’t
  cocktails — beer, wine and non-alcoholic, at your 45% mix"* and *"The calculator can’t split that across products; you
  know what you’re pouring."* (`CalculatorSheet.tsx:182–196`, drawn at `:367` and `:391`).
- **Your 28B** (frame `28b`, `Invoice Builder - iPad.dc.html:4369`, and `HANDOFF.md:3825–3827`): it *"names what the room
  will drink outside cocktails and then **stops** — no beer estimator, no invented split across products."*

**b · ❓ May 28B be reversed?** Sean was told the pie reverses it and that you would be asked — the words of the button
he tapped, ours. Our question *"Should the quick fixes go ahead now, with the pie going to Design as the big Calculator
rework?"* — **Yes — quick fixes now, pie to Design** — "…The pie is new screens,
so Design draws it first; it also reverses Design's 'no beer estimator' ruling, so it should be asked, not assumed."
Two more rulings of yours it reaches, and one note of ours:
- **Your Round 31 §4** (Ask A's §4, not the provenance §4 at `:165`; `ROUND-31.md:361–378`): *"Ruling: it comes out of Settings. The stored values stay exactly where
  they are."* — because *"A settings page is a place where changing something changes something."* The form came out in
  §45 (`7e22f70`, 13 Sep, *"the form goes and the record stays"*); the record is still there. With the pie, the crowd
  styles would change something, so by that sentence they would earn the page back (our reading).
- **Your §12.4, frame 16D** (`HANDOFF.md:5781–5803`): every preset carries a provenance line — ✓ and the event that
  corrected it, or 🌱 *"Starting guess — no event has corrected this yet"* — and untuned figures in `--text-secondary`.
- ⚠️ **The estimator scrapped on 7 Aug** — his own reference events disagreed, 4.2 against 2.6 drinks a guest
  (`CLAUDE.md`, *Do not resurrect*). As we read it the pie does not bring that back: how many drinks a guest has stays
  pace and hours; the pie only splits the drinks the calculator already counts among the kinds he serves. But its data is
  that estimator's. Yours to weigh.

**c · What already exists, as data** — `src/lib/data/drinkSplits.ts`, 172 lines, *"THE MODEL: TWO INPUTS, ONE PIE"*
(`:22`):
- **Five kinds:** `DrinkCategory` = cocktails | spirits | wine | beer | na (`:37`), labelled `Cocktails`, `Spirits
  (neat, highball)`, `Wine`, `Beer & seltzer`, `Non-alcoholic` (`:39–45`).
- **Four crowd styles** — `Cocktail-forward (typical Limbo)`, `Mixed / balanced`, `Beer-heavy crowd`, `Wine-heavy crowd`
  (`CROWD_STYLES`, `types.ts:3382–3387`) — each a preset with a split and a `tuned` flag (`drinkSplits.ts:49–71`). **All four start
  from one seed, 45 · 15 · 7 · 31 · 2** — cocktails, spirits, wine, beer, non-alcoholic (`:87–93`) — and only
  Cocktail-forward is marked tuned (`:95–100`). The seed's note (`:73–86`): Sean's measured split, from a real wedding he
  worked and his own stated rule, is 55–65% spirits and cocktails, 30–35% beer and seltzer, 5–10% wine — *"the only row
  grounded in anything"*; the other three *"start as copies, flagged untuned"*.
- **`splitFor`** (`:131–168`) narrows a preset to a bar type and shares a removed kind across the rest in proportion.
- **Nothing reads any of it.** A search of `src` and `scripts` for the file's name and every export of `drinkSplits.ts`
  — `DrinkCategory`, `DRINK_CATEGORY_LABELS`, `Split`, `CrowdPreset`, `DEFAULT_PRESETS`, `BAR_TYPE_OFFERS`, `getPresets`,
  `setPresets`, `splitTotal`, `splitFor`, `CROWD_KEYS`, `BAR_TYPE_KEYS` — finds one comment (`lib/estimateWords.ts:45`,
  naming the file and `DrinkCategory`); `Split` otherwise matches only the English word, in three other comments.
- **Bar type and Crowd style** are two dropdowns in Event details' `Recorded for later` (`EventDetailsSheet.tsx:412–447`),
  under *"Nothing uses these yet. They’re being banked for when the estimator can read them."* (`:415–416`). `BAR_TYPES`
  and `CROWD_STYLES` are used outside `types.ts` and `drinkSplits.ts` only there (`:426`, `:440`).
- **The Settings editor is gone:** `DrinkSplitForm` came in `b861a9e` (3 Aug) and went in `7e22f70` (§45, your Round 31
  §4); `git ls-files src` has no such file.

**d · Sean's answers, Round B** — the questions and the button words ours:
1. **What's in the pie.** Our question *"What should be in the pie?"*, with three choices (everything — each cocktail,
   plus beer, wine, spirits and non-alcoholic as their own slices, a slice ordering only when that kind is on the
   invoice; cocktails plus one 'other' lump; cocktails, beer and wine only). He typed: *"Everything. I want to confirm with
   you: As I add more of a category type (e.g. 2 wines to 4 wines), they split the percentage between themselves."* We
   confirmed: yes, the items of one kind split that kind's share.
2. **Several cocktails.** *"When there are several cocktails, how should they share the cocktail slice?"* — **Even, but I
   can favour one** — "Starts equal. You can make the Margarita 50% and the other two split the rest. Add a fourth and it
   takes a share from the ones you haven't set." We told him the same rule works inside every kind.
3. **Where the shares come from.** *"Where should each kind's share come from?"* — **Crowd style fills, I adjust** —
   "Pick 'Cocktail-forward' in Event details and the shares fill in (e.g. 45% cocktails, 15% spirits, 8% wine, 30% beer,
   2% NA). Change any of them for this invoice; it's kept with the invoice." ⚠️ Those figures were our illustration, not
   the seed's (45 · 15 · 7 · 31 · 2).
4. **A kind with nothing on the invoice.** *"If there's nothing of a kind on the invoice (say, no wine at all), what
   happens to its share?"* — **Others grow to fill it** — "No wine on the invoice means nobody drinks wine there, so its
   8% is shared out among the kinds you are serving. The screen says so: 'No wine on this invoice — its share went to the
   rest.'"
5. **Pours.** *"How much does one drink use, for the kinds that aren't cocktails?"* — the choice offered: standard pours,
   one changeable for a product (beer 1 can or bottle; wine a 5 oz glass, 5 a bottle; spirits 1.5 oz; non-alcoholic 1
   can). He typed: *"Let's do standard pours, I can change. I'll need a place where I can see and edit the defaults. And
   the. i should be able to change as I please."*
6. **Ingredient or poured on its own.** *"How should the calculator tell a bottle you pour on its own from one that's only
   an ingredient? (Example: Tito's is in the Moscow Mule, and you also serve vodka sodas.)"* He typed: *"We need a way to
   delineate what the Cocktail uses as ingredients versus separate bottles. This could potentially present itself in two
   different scenarios. The first being, the same item, e.g. vodka, appearing both in a cocktail and as a standalone
   bottle. And then the second case being a different spirit entirely e.g. a Moscow mule with vodka and a bottle of
   whiskey that I have on hand for neat pours, etc.. We will need to make sure that it's easy to tell what's going into
   the Cocktail."*
7. **His second case.** *"A bottle no cocktail uses (the whiskey for neat pours). Should it count as poured on its own
   automatically?"* — **Yes, automatically** — "No ticked cocktail uses the whiskey, so it takes a part of the spirits
   share with nothing to mark. If you later tick a cocktail that uses it, it becomes an ingredient unless you've marked
   it."
8. **His first case.** *"The same vodka in the Mule and in vodka sodas. One line on the invoice, or two?"* — **One line,
   split shown** — "'Tito's · 4 bottles' is billed once. The calculator and Builder show '3 for the Moscow Mule · 1 poured
   on its own'. The client's paper shows one line, as it does now."
9. **On hand.** *"A bottle you already have on hand (the whiskey, marked Don't buy). Does it still take its part of the
   pie?"* — **Yes, and it orders nothing** — "Guests still drink it, so it keeps its part and the other spirits don't grow
   to cover it. It says how much it'll pour — 'about 2 bottles' — so you can check your shelf. Nothing is bought or
   billed."
10. **Where the split shows** (more than one allowed). *"Where should you be able to see what goes into a cocktail and
    what's poured on its own?"* — **The calculator's list** and **The Builder's lines** — not the client's paper.
11. **Bar type.** *"What's on the invoice already decides which kinds are served. What should Bar type do?"* — **Just
    describe the event** — "It stays in Event details as a note ('Beer & wine only') but doesn't change the pie — the
    lines do."
12. **A highball.** *"A spirit poured on its own is often a highball, like a vodka soda. What should it order?"* — **Spirit
    only** — "Each drink orders 1.5 oz of the spirit. You add soda, tonic and juice yourself, as today."
13. **Crowd styles in Settings.** *"In Settings, what can you do with crowd styles?"* — **Edit the four, add my own** —
    "Change Cocktail-forward, Mixed, Beer-heavy and Wine-heavy, and add more like 'Corporate happy hour'…"
14. **The order** — b above.

**Two assumptions of ours, which he confirmed** (in the summary he tapped **Confirmed** on): pace, the opening rush, the
cushion and whole packages work for every kind the way they do for cocktails today; and an invoice saved before the pie
keeps its cocktail share (its drink mix, 45% by default) and the rest follows its crowd style.

**e · How we read it, ours — correct any of it.**
- **The kinds served are decided by the invoice's lines**, not Bar type (his 11). A line's kind would come from its
  category (`CATEGORY_ORDER`, `types.ts:3279–3296`: `Wine`, `Beer & Seltzers`, `Spirits`, `Liqueurs & Fortified Wines`,
  `Mixers / Non-Alcohol`). ⚠️ But soda, tonic and juice live in `Mixers / Non-Alcohol` too, and his 12 says he adds them
  himself — so which lines are the non-alcoholic kind's is not settled; nor whether a liqueur is poured on its own.
- **An invoice with no crowd style** (`—`, the dropdown's empty choice, `EventDetailsSheet.tsx:439`) needs a default:
  Cocktail-forward, the one grounded preset, would be ours. Yours to say.
- **A worked example, by hand, not built:** 100 guests, 5 hours, Cocktail-forward's seed, every kind served — cocktails
  291.6, spirits 97.2, wine 45.4, beer 200.9, non-alcoholic 13.0 drinks. With the 10% cushion: wine 45.36 × 1.1 ÷ 5 =
  9.98, so 10 bottles; spirits 97.2 × 1.5 oz × 1.1 = 160.4 oz, ÷ 25.36 oz a 750 ml bottle = 6.3, so 7 bottles;
  beer 200.88 × 1.1 = 221 cans. With no wine on the invoice, its 7 shared in proportion (each ÷ 93): cocktails 48.4%, spirits 16.1%, beer
  33.3%, non-alcoholic 2.2%. If a frame of yours works its own figures, check ours against it.

**f · ❓ Please draw it — as a sequence of taps.** It is a new part, new states of existing ones, and a new path across
Event details, the calculator, Settings, a product and the Builder's lines:
1. **The calculator with the pie:** the shares per kind, filled from the crowd style and changed for this invoice —
   what takes the `Drink mix` knob's place, and 28B's empty state; the items inside a kind, starting equal, with one
   favoured (the option's Margarita at 50%) and a fourth added; the empty-kind sentence (the option's words, *"No wine on this
   invoice — its share went to the rest."* — his pick, not a ruling); an on-hand bottle's *"about 2 bottles"*, ordering
   and billing nothing; and the option's *"3 for the Moscow Mule · 1 poured on its own"* on the calculator's list.
2. **The Builder's line with the same split** — never the client's paper, which shows one line, as now.
3. **How a line is marked *also poured on its own*** (his first case), and how a bottle no ticked cocktail uses reads (his
   second: automatic, nothing to mark, an ingredient again once a ticked cocktail uses it unless marked).
4. **Settings — crowd styles:** edit the four, add his own, with §12.4's line or another.
5. **Settings — pours:** the four defaults, and a product's own pour (his *"a place where I can see and edit the
   defaults"*) — and where a product's pour lives.
6. **Event details:** Crowd style filling the shares; Bar type a note.
7. **Edge states, ours to name, yours to settle:** a kind's items set to more than 100% between them; every item set when
   one more is added; a set item taken off; a kind's share set to 0; and nothing of any kind (the zero guard, §4 b #6).

**Later, not asked:** the learned per-guest figure — our question *"Want a learned "your events, per guest" figure — e.g.
"Your tagged events ran $38–$52 per guest" — shown beside your estimate as a reference, never replacing your numbers?"* —
**Later, with rework** — "Needs more tagged events to be trustworthy; fold into the calculator rework." Related, still
untriaged, and not asked: his 7 Oct *The glass, the ice and the pour* (`WISHLIST.md:685`), and scaling a template by
guests (his 9 Oct words above).

### 3 · ❓ The estimate — sent copies, per guest, `Included`, and its guest count. Each is new on screen; please draw them

**a · Keeping what he sent.** Our question *"Should the app keep a copy of what an estimate said when you sent it? Today,
change the invoice and the estimate's numbers change too; only your PDF remembers."* — **Keep + flag changes** — "Saved
when you print or share; shows "changed since you sent it" if numbers move. You can still update it."
- **What counts as sent.** The two buttons were `Print or share` and `A "Mark as sent" button`; he tapped neither and
  typed: *"So I want to confirm with you that I can see the estimate on its own page in the app. (Much like I can see
  the live invoice) At that point, I want to hit print/share, it should ask "mark as sent?", and then be recorded and
  marked somewhere I can see."* It has its page today: ⋮ › `Make an estimate…` (`ESTIMATE_ROW`, `estimateSheet.ts:155`)
  → `Preview estimate` (`:174`) → `/invoice/{id}/estimate`, with `Print or save as PDF` (`EstimatePrintClient.tsx:95`).
- **Where he sees it.** *"After you mark an estimate as sent, where should you see that it was sent?"* — **Invoice +
  History** — "Under the invoice's title (e.g. "Estimate sent Oct 19 · $2,750–$6,650") and on its row in History."
- **A shortcut.** *"Getting to the estimate's page: today it's ⋮ › Make an estimate… › Preview. Want a shortcut once an
  estimate exists?"* — **Add "View estimate"** — "In the invoice's ⋮ menu once an estimate exists; "Make an estimate…"
  stays for changing it."
- **Sending again.** *"You sent an estimate, then the numbers changed and you print/share again. What should happen?"* —
  **Ask again, keep each** — "Asks "Mark as sent?" again; keeps every sent copy with its date, so you can see what each
  client version said."

❓ **Please draw:** `View estimate` in ⋮ (beside row 3, `Make an estimate…`, `InvoiceOptionsMenu.tsx:218`); the `Mark as
sent?` box after `Print or save as PDF`; the sent line under the invoice's title and on its History row; every sent copy
with its date, and where he opens one; and *changed since you sent it*. And:
1. **What "once an estimate exists" means** — a sent copy, stored settings (`InvoiceEstimate`, `types.ts:1655–1664`, every
   field optional), or any invoice whose ⋮ row is live (`estimateDoor`, `estimateSheet.ts:200–209`)?
2. ⚠️ **The page can't tell a printed or shared paper from a cancelled print dialog** — a browser reports only that the
   dialog closed (general knowledge, not tried on his iPad). So the box would follow every tap, and his answer is the
   record (ours).
3. **What a sent copy holds** — ours: what the paper printed — each category's range, the totals, per guest, the guest
   line — and the date.
4. **Which numbers moving count** for *changed since you sent it* — the printed figures only (ours), or any line? And
   where it shows: the sent line, the estimate's page, both?
5. **The sent line's spelling.** His example writes a range with a dash; the paper writes `$2,750 to $6,650` (`rangeText`,
   `estimateDocument.ts:250–255`). The date's form? With two sent, the latest only?
6. **A locked invoice.** `Make an estimate…` is greyed at Complete and while archived (`estimateSheet.ts:200–206`; your
   `r79a`, `ROUND-79.md:116`), and the estimate's own write refuses a locked invoice (`setEstimate`, `invoiceTabs.ts:962`).
   Does `View estimate` open there, read-only — and can a send be marked?
7. **A copy and a template** — ours: the sent record doesn't travel; a new job starts unsent, as it starts unpacked (your
   Round 74 §1 #7). Confirm.

**b · Per guest, smaller first.** Our question *""Per guest" can print backwards ("$46 to $38") when part of the cost is
fixed, like Rentals. What should the client see?"* — **Smaller first** — "Always "$38 to $46"." It changes your r79 rule
as quoted at `estimateDocument.ts:426–427` (*"Each end is one scenario"*) in order only: the smaller figure first, so with
a fixed part the first figure is the larger guest count's (ours). ❓ Confirm — and does the paper need to say anything?

**c · `Included`.** Our question *"A category where everything is comped (say the ice). What should the client's estimate
say? Today it says "To be confirmed"."* — **"Included"** — "Tells the client they're getting it." Today's `To be
confirmed`: §1 a #10. ❓ The sheet's line two for it (`No price yet` today); whether an `Included` row counts as $0 in
the totals and per guest (ours: yes); a category with comped lines and unpriced ones both; and `Included` on the estimate
beside `Complimentary` on the invoice's paper for the same comp (§101; `InvoiceDocumentView.tsx:435`) — two words for one fact.

**d · The guest count.** Our question *"Which guest count should the estimate scale from? Example: Event details says 120
but you ran the calculator for 150 — today the quote comes out about 25% off."* — **Calculator's count** — "The count the
calculator last used; Event details if you never ran it." Then *"You run the calculator for 150 guests but Event details
says 120. When you press Update, what happens to Event details?"* — **Ask to match** — ""Also set Event details to 150
guests?" Yes / No — so the invoice, estimate and paper agree."
- **It makes the calculator keep a count.** Today it keeps none (§1 a #8), and 009 doesn't add one, following your band
  table's *"from Event Details"* (`HANDOFF.md:3915`) — which this answer moves. "Last used" read as at the last Update
  (ours).
- **The estimate's words name the invoice's count:** *"The invoice is set for 120. Categories that follow guests scale to
  each end."* (`guestsHint`, `estimateSheet.ts:183–185`) and its subtitle's *"… at 120 guests"* (`:190–193`). ❓ Which
  count do they name?
- ❓ **The box at Update** — `Also set Event details to 150 guests?` Yes / No — new. With No, the invoice and its estimate
  disagree on purpose: does anything say so? And when the hours differ too (§4 c #4), one box or two?

### 4 · The calculator's smaller asks

**a · ❓ A quantity he set by hand — and this one may already be yours.** Our question *"You change a quantity by hand (rye
9 → 3 bottles), then press Update later. What happens? Today your 3 is overwritten."* — **Keep mine** — "Your number
stays; it says "1 line you set by hand was left alone."" Then *"You set a line by hand and the calculator leaves it
alone. Want a way to give it back to the calculator later?"* — **Yes, in its menu** — "Press and hold the line: "Use the
calculator's number"." Those are words he accepted, not rulings: the words are yours.
- **Your §23.5–§23.6 and frame `27b` already rule it** (`HANDOFF.md:4012–4067`): a hand-set row is *"⚠️ UNTICKED, and says
  why | `3 → 7`, recommendation greyed, pencil glyph"* (`:4051`); *"The foot names the exclusion — "1 hand-set line left
  alone" — and the button counts what will happen: Apply to 3 lines"* (`:4060–4061`); `27b` draws its tequila row *You
  set this to 3 by hand · 3 → 7* (`Invoice Builder - iPad.dc.html:4639`, `:4641`, its foot at `:4651–4652`). And on the invoice: a
  5px `--text-muted` dot before a calculated quantity, and in the press-and-hold panel *"Calculated 9 · 2.6 per guest,
  45% cocktails"* (`HANDOFF.md:4032–4037`).
- **None of it is built.** The provenance is stored — `calcQty` is written beside the quantity on every line the
  calculator writes (`applyCalculation.ts:44–53`, `:85`, `:197`, `:242`, `:261`, `:267`) — and read nowhere: a search of
  `src` for `calcQty` finds `applyCalculation.ts` only. Update counts every row whose figure differs (`calculator.ts:1890`,
  `:1893–1895`) and writes it (`applyCalculation.ts:145–149`), so the 3 goes back to the calculator's figure.
- **Why we ask rather than build it:** `28a` *"Supersedes 27A's foot and button"* (`Invoice Builder - iPad.dc.html:4275`),
  and the turn's note says *"take the proposal band from 28A"* (`:4453`); the built rows have no tick — the sheet's only
  checkbox is whole packages (`CalculatorSheet.tsx:440`) — so `27b`'s *unticked* has no tick to take.
- ❓ **How does a hand-set row read on `28a`'s band** — `stays at 3` with the calculator's 7 beside it? The foot's words —
  §23.6's *"1 hand-set line left alone"* or the option's *"1 line you set by hand was left alone."*? Is the dot still
  wanted? And **`Use the calculator's number` in the line's press-and-hold panel** — the panel that holds Round 86's P1
  rows, which do nothing today (`Set quantity…`, `Add a note`), so read this with your answer there.
- A line he added himself has no `calcQty`: by §23.5's table it is *never calculated*, so Update may write it (ours).

**b · ⛔ The zero guard — plan 011 is BLOCKED on you, and 012 waits on it.** Our question *"What should Update do when
guests or hours are 0? Today it offers to set every line to 0."* — **Do nothing, say why** — "Update stays off and reads
"Add guests and hours first."" Taking the option's words is not a ruling.

Plan 011 builds the *do nothing* half only. With nothing to count — guests, hours or pace at 0, a 0% drink mix, or a
figure that isn't a number — every row is marked and none counted, so the button reaches its existing disabled `Update 0
lines` (`CalculatorSheet.tsx:268–274`, `disabled:opacity-50` at `:271`), and Update writes nothing. It adds no words. It
is not built until you answer, because:
1. **The words that say why, and where they go.** In place of `Update N lines` — your Round 67 C2's precedent: on a locked
   invoice *"Apply is replaced by the stage's lock sentence"* (`ROUND-67.md:85`; built `CalculatorSheet.tsx:255–262`);
   in the foot's slot left of the button (where the foot sits, `:266`); or elsewhere.
2. **The button's state.** Your Round 65 §2: *"No disabled `Charge for this line`. That would be the dead control §96
   removed."* (`ROUND-65.md:25`); the Round 48 frame: *"Not greyed: a disabled row of sizes with a reason under it is a
   control he cannot act on"* (`Round 48 - scaled measures on the card.dc.html:267`). Against them, your `r79a` greys ⋮'s
   `Make an estimate…` with its reason as line two (`ROUND-79.md:116–117`; built `InvoiceOptionsMenu.tsx:227–239`). So: a
   greyed button with a sentence, the sentence in the button's place, or another?
3. **The Proposed rows while it's off.** Today they read as changes — `1 → 0 bottles`, and a working sentence ending in
   `= 0`. Keep them, or the blocked form `stays at 1` — and then what is their line two? Your Round 36: a row that
   *"asserts the arithmetic it refused and never says why"* is the fault (`ROUND-36.md:180–182`). Plan 011's interim
   would show change rows beside a button that counts none — a screen never drawn, so it waits.
4. **Where the option's words are wrong:** pace set to 0 with guests and hours filled in; a 0% drink mix. The same slot?
5. **Which part draws the sentence.** `KnobRefusal` (`CalculatorSheet.tsx:111`, drawing `RefusalLine`,
   `RefusalLine.tsx:36`) is the line under a refused typed number (your Round 81 §2 #1). A count of 0 isn't a refused
   number, so using it here would be a new state of that part.
6. **With the pie,** *nothing to count* means no drinks of any served kind; 011 tests cocktails only (ours to revisit
   then).

**c · ❓ Hours** (plan 010's questions, and Sean's Round C):
1. **Blank, unreadable or the same time twice reads 4, and nothing says why.** Should the Hours row say so — the words,
   where (in place of `Doors to last call`, `CalculatorSheet.tsx:328`, or a line under the row), the style? He took the
   behaviour, not words.
2. **Naming the source** when it came from the bar times — e.g. `6–11 PM`? The rail prints them raw and 24-hour, `18:00 –
   23:00` (`EventDetails.tsx:75–77`).
3. **A typed figure that differs from the bar times** — a visible state of the row?
4. **His *"ask to update the other"* — two new boxes.** Typing hours in the calculator asks whether Event details' bar
   times change — and which end moves, Bar opens or Bar closes; changing the bar times while the calculator holds a typed
   figure asks whether the calculator follows. Until you draw them, the newer one wins without asking (§1 b, 010).

**d · ❓ After an untick** (plan 014's one question, not blocking it). Every remaining drink's figure is out of date,
because the even split hands each the gone drink's share. *Measured* on the plan's made-up menu: the Tom Collins off, the
Whiskey Sour's bourbon goes 8 → 16 and the shared lemon juice 6 → 7 — up. 014 leaves those lines as they are. Should the
rail's button turn red — `Quantities are out of date — recalculate` (`CocktailPicker.tsx:849`) — which your Round 33 gap
4 rules *"whenever an unapplied swap exists"* (`ROUND-33.md:88–103`), for swaps only? A new trigger for an existing state.

### 5 · ❓ Templates — "Bring its cocktail menu too?"

Sean: *"Duplicates yes. But ask first for templates."* Then our question *"Templates and the cocktail menu: you said "ask
first". When should the app ask?"* — **When starting from one** — "Starting an invoice from a template asks: "Bring its
cocktail menu too?" Yes / No."
- ⚠️ **A template holds no menu today.** `templateFromInvoice` (`templates.ts:185–216`) keeps the lines — without comps,
  packing marks or on-hand lines — and the groups; the record it makes (`:204–215`) has no `menuCocktailIds` or
  `substitutions` (a search of `templates.ts` for either: none). So the question needs saving a template to record the
  menu first. ❓ Does saving record it — always, or asked there too (both doors, `r74a`: ⋮'s `Save as template…` and
  History's card)? And its swaps with it?
- ❓ **The box** — where on the fill sheet's path (`r73b`, `r74d`: the list, then the preview), and its words. A template
  with no menu — every template saved so far — shows no box (ours).

### 6 · ⛔ The swap's money — plan 013 is BLOCKED on you

Sean: our question *"You swap Bacardi for Diplomatico in a cocktail. What happens to the Bacardi line on the invoice?
Today it stays and both get billed."* — **Moves to the new one** — "The line becomes Diplomatico, quantity worked out
again." Then, Round C, *"You swap Bacardi for Diplomatico. You said the line 'becomes Diplomatico, quantity worked out
again.' When is the number worked out?"* — **When I press Update** — "Design's ruling: the swap changes the bottle, and
the calculator's Update shows the new number and price before anything is billed. Nothing about the money changes until
you've seen it." (That button's words are ours, written from your §45.2.)

**Ruled, and never built:** §45.2 (`ROUND-31.md:111–137`) — *"the new line inherits the old line's `qty` and its
`calcQty`, and the swap marks the line as needing recalculation"*; *"the product changes the moment he chooses it,
because he chose it"* (`:127`) and *"Nothing about this line's money changes without him seeing the proposal"*
(`:128–129`); §45.3 (`:139–163`), a swap is a menu recomputation; Round 33 gap 4 — *"A swap changes the product
immediately and the quantity not at all"* (`ROUND-33.md:91–92`) — and the red button (`:95–97`); frame `48a` (`Round 33 - the
substitution, end to end.dc.html`), the whole path in eight panels.

⛔ **The question: between the swap and Update, how does the invoice line read — named Diplomatico, priced as what?**
- **Frame `48a` puts the money in the proposal.** Panel 7 (lines 270–302): *Because of your swap* (`:278`), *Diplomatico
  Reserva replaces Bacardi Superior* (`:281–282`), `4 → 4` (`:284`), `Invoice total` (`:288`), `+$64.04` (`:291`),
  `Leave it` / `Apply` (`:295–296`). Panel 8, after Apply, draws the moved line (`:319`). **No panel draws the invoice
  between panel 5 (the swap) and panel 7.**
- **Plan 013 as written moves the line's product and its price at the swap**, in the swap's own undo step (+$40.00 in its
  scenario S18, a made-up invoice). That is `:127`'s half, against `:128–129`, panel 7, and the button Sean tapped. So 013
  stops at its money step.
- **The readings we see, ours:** (i) named Diplomatico at its own price — the total moves at the swap, before any
  proposal; (ii) named Diplomatico, priced as Bacardi was until Update — a line naming one bottle at another's price, and
  the client's paper would print it so if he printed in between; (iii) the line stays Bacardi until Update, and Update's
  proposal carries panel 7's *Because of your swap* — then the product does not change *"the moment he chooses it"*.
  The words of the button he tapped (ours) fit (ii) or (iii). Which — or another?
- **The built calculator has no *Because of your swap* group** (a search of `src` for it: none). If it is wanted,
  please draw it on `28a`'s band.

**And the rest of plan 013's questions:**
1. **The volume clause.** Your Round 33 §2: the proposal's swap row states *"`4 → 4 · 3 L → 3 L` where the volume is
   unchanged, and `4 → 3 · 3 L → 3 L` where the bottle size moved"* (`ROUND-33.md:117–119`). The built row
   (`CalculatorSheet.tsx:454–520`, with `BuyQuantity.tsx:95–117`) has no place for it, and no frame draws it there.
2. **Comps.** (a) A comped or hidden Bacardi line: 013 leaves it as it is and puts Diplomatico on at 1 beside it — should
   a comp travel with the line? (b) If Diplomatico's only line is a comp, the billed Bacardi line comes off, and Update
   then writes the drink's quantity onto the comp — free on the client's paper (Update writes onto a comped first line
   today too). Should the moved quantity stay billed?
3. **A blocked row's mark.** Swapped to a product the calculator can't count (no package size, or units that won't add),
   the line is marked, Update writes nothing for a blocked row, and the button stays red until the swap is undone — as
   today. Should a blocked row's mark count?
4. **Told, not asked — as planned:** the red button's witness of *an unapplied swap* becomes the moved line's mark, counted only for
   drinks on the menu — so a swap on an unticked drink no longer turns it red; for a bottle → prep swap it is *a product
   this swap made necessary with no line*. Gap 4's words are unchanged.
5. **Told:** *"quantity worked out again"* is planned as §45.2's *through the calculator* — the line keeps its count and
   the button stays red until Update. His Round C answer reads that way to us; if he meant the swap itself rewrites the
   number, that would reverse §45.2.
6. **Told, a small one in `48a`:** panel 4's price for the new bottle (`:180`) times 4 is four cents short of panel 8's
   line (`:319`), and `+$64.04` is worked from panel 8's; from panel 4's it would be `+$64.00`. If your next frame works its
   own figures, the line's price and the proposal's money should agree.

### 7 · ❓ A locked invoice's calculator (plan 009's question)

Your Round 67 C2 (`ROUND-67.md:84–85`): *"Calculator: its figures show. Apply is replaced by the stage's lock sentence."*
As built, with cocktails ticked only the footer changes — a search of `CalculatorSheet.tsx` for `lockStage` finds `:126`,
`:142`, `:234`, `:261` and `:350` (the last is the empty state's own sentence, where no knob shows) — so the knobs and boxes still take a change on a locked invoice, and the rows follow it. Under 009 the stored
settings show there and nothing he moves is kept (009's write refuses a locked invoice). ❓ Leave the knobs as a what-if, or
make them read-only there? Read-only would be a new state of the knob rows — and your Round 65 §2's dead control bears on
it.

## What I need back

1. **Round 86 first** — Sean's A plus D, the three press-and-hold rows, its three stops and six calls. Nothing here changes
   it.
2. ⛔ **§6 — the swap's money:** how the line reads between the swap and Update, and #1–#3. It unblocks plan 013.
3. ⛔ **§4 b — the zero guard:** the words, where they go, the button's state, the rows while it's off, pace 0 and 0%, the
   part. It unblocks plan 011, and with it 012.
4. ❓ **§2 — the pie:** may 28B be reversed, and Round 31 §4's Settings block come back? Then frames, as a sequence of
   taps (§2 f).
5. ❓ **§3 — the estimate:** frames for `View estimate`, `Mark as sent?`, the sent copies, the sent line under the title
   and on History's row, *changed since you sent it*; per guest smaller first; `Included`; the calculator's count and the
   box at Update.
6. ❓ **The rest:** §4 a (the hand-set row — does §23.6 stand on `28a`?), §4 c (hours, and Sean's two boxes), §4 d (after an
   untick), §5 (templates), §7 (locked); and any objection to §1 b's three fixes before Sean says Build.

---

## 🔴 ROUND 86 — your Round 85 is built (§236–§243, four batches, each reviewed); it came by iCloud. ❓ Sean's pick first: *"Let’s do A plus D. Build."* — a mix you haven't drawn; please draw it. Then the inventory you asked for. ⛔ Three stops: the switch's knob (#18), the letter paper's table (#25), the product row (#4). Also the readings and what his iPad still owes


**implementation → Design, 18 Oct 2026. Branch `main`, app at `72c3bc7`.** The code is `1eb0841`'s (§243 · review).
`72c3bc7` (§244) is records only: `git diff --stat 1eb0841 72c3bc7 -- src scripts package.json` is empty. **Every
`file:line` below is at `72c3bc7`.** A frame line is a line of `Round 85 - the way back.dc.html` (274 lines); `r85a`, `r85d`,
`r85i` and `r85j` were drawn headless again and re-read for this round. **None of this round's build is live yet: it goes up with this round's send.**

**What is LIVE, read back by curl (no browser):**
- **`d1e7dbe`, §222–§235 and our Round 85** — pushed 18 Oct at 01:12:39 (`git reflog`). On 18 Oct at 12:32 the live
  `/style/trashcheck` carries build id `5agCBiRrKMy0jW6xLyECl` and says `Another copy is in History` (§222's line).
- **GitHub reads `d1e7dbe`** (`git ls-remote`, 18 Oct).

**How it was measured:** headless Chrome only, each run with its own throwaway profile, all stopped and deleted; the
verify build (`SHIP_VERIFY=1`) on `127.0.0.1`, the network to Supabase blocked; `/style` lab pages, and temporary pages
mounting the real screens (Cocktails, Prep, Products, History, Settings, the Builder, the export pages) over a seeded
cache — each deleted and the build re-run without it; light and dark, at 1600 × 1068, 1200 × 1468 and 390 × 844; Node
running the real code against stand-ins (a fake table, react as plain calls), never the database. **Not covered:**
Safari, his iPad, and his account. **Final build on these records** (18 Oct, done 12:49, and again after their review, 13:14): exit 0, 9,306 lines with ✓
and none with ✗; *"all 89 checks are wired into the build"*. 89 on disk and 89 in the build, compared name by name: §236
added `check-wayback`, §242 `check-reload`.

**What Sean sent, 18 Oct, his own words:** *"Let’s do A plus D. Build."* — for your Round 85. "Build" covers what you
ruled. Where a ruling stops, so did the build (§2).

### 0 · ❓ Sean's pick, first — A plus D, a mix you have not drawn

**His words, 18 Oct:** *"Let’s do A plus D. Build."*

**And, asked how he pictures it, his words** (`limbo-app` `WISHLIST.md`, the way back): *"Card when editing, and the
trail in the Builder's multi-step windows"*.

- **Read as (ours, not his):** your A, `‹ Card`, in the editors — cocktail, prep, product; and your D, the trail, in the
  Builder's windows that take several steps. Which windows those are is yours to say; the inventory below lists the
  Builder's steps (B1–B21).
- **What is drawn:** `r85a` (lines 43–72) draws A alone and `r85d` (lines 121–143) D alone, both on the Orange Crush's
  editor. `r85a` says A *"shows only in the editor"*; `r85d` puts D *"in every window that has steps"*, the read card
  too (`Cocktails › Orange Crush`), and names one Builder flow in words — `Invoice › Add from a template › Pemberton
  gala`, the fill sheet, which already has its ‹ (B16). No frame draws the two together, or D on a Builder window.
- **What is built of A or D: nothing.** A search of `src` for `‹ Card`, `› Editing` and `breadcrumb` finds one comment
  (`RecipeEditor.tsx:360`, saying it isn't here).
- Your §0: *"If he picks A, it becomes the rule for the whole app: the way back is top-left, and it names where it goes.
  Settings' ← becomes `‹ Settings`."* His words place A in editing; whether the rule reaches further is question 3.

❓ **Please draw how A and D sit together, and on which windows.** In particular:
1. The editor with `‹ Card` — and does a trail show there too, or only in the Builder?
2. One Builder flow with its trail, end to end — say ⋮ › `Stage…` → the gate → `Set rate` (B1–B3), today three surfaces
   that each close the last.
3. Does your top-left rule still hold for the rest of the app (Settings' `←`, History's card), or only where he named?
4. With `‹`, what does Escape do in an editor — the way back, or all the way out as now (§3 #4)?

#### The inventory you asked for — every window step with no way back, and how each is left today

From a map of every transition, read from the code on 17 Oct (four areas, a synthesis, then a critic's pass that
corrected fourteen of its claims — applied here), re-read at `72c3bc7` where §236–§243 changed the file. For each
Builder file cited but two, `git diff 18c33fa 72c3bc7` is empty, so the map's lines stand; `InvoiceSheet.tsx` (changed
by §228) and `SourceRail.tsx` (by §242) did change, and their lines below are read at `72c3bc7`. Those spot-read again
for this round are marked ·. Marks: ✅ a way back · ⚠️ the only exit drops him further out · ⛔ no way back, or typing
dropped without a word · ✗ a door that doesn't exist. **Built** is what §236–§243 changed in it (Save, Back, the discard
box; the quiet reload's hold); — is nothing. The tables leave out a few of the map's steps; they are listed after them.

**The library — the only place this build changed the way back**

| # | Step | How it's left today | Typing | Ruled | Built |
|---|---|---|---|---|---|
| L1 | Card → `Edit recipe` → editor (his screenshot) | ✅ Save → the card; Back and the swipe → the card; ✕, a tap beside, Escape, the drag → the list | asks (`r85f`) | your §0 | §236 — no `‹ Card` (§0) |
| L2 | List → new recipe, prep or product | ✅ Save → its new card; Back → the list | asks | your §0 | §236 |
| L3 | Product card → `Edit product` | ✅ one window; Back → the card; Save → the card | asks | your §0 | §236 |
| L4 | Escape in a plain box (Name, Glass, an ingredient's) | ⚠️ all the way out, asking first | asks | Round 62 §3 rules rich fields only | §236 (the box) — §3 #4 |
| L5 | Card → Export → print page | ✅ `Back to Cocktails` reopens the card (`returnTo.ts`); Safari's ‹ afterwards goes back into the print page, its chooser open (inferred) | — | Sean, 24 Aug | — |
| L6 | Products › Select › `Export N` | ✗ leaves the mode; nothing exported, the selection gone (`ProductLibrary.tsx:525`, `onExport={() => sel.exit()}`) | — | product export parked by Sean, 9 Aug | — |
| L7 | A card's ingredient → its card; `Used in` → the cocktail | ✗ no door; `Used in` chips are plain text (`CardKit.tsx:797–809`) | — | not | — |
| L8 | Leaving a library tab, or a quiet reload | ⚠️ search (but Products' `?q=`), filter, sort, Deleted and scroll reset | — | ruled for the rail only (`ROUND-71.md:64`) | — |

**The Builder — its ⋮ flows and its other steps**

| # | Step | How it's left today | Typing | Ruled | Built |
|---|---|---|---|---|---|
| B1 | ⋮ › `Stage…`, in the menu's place | ⚠️ no ‹; Escape and a tap outside close all (`StageMenu.tsx:101–113` ·) | — | "in place"; back not | — |
| B2 | Stage → the gate (Ready to send, Complete) | ⚠️ Cancel, Escape, the dim → the invoice, not the stage list (`GateDialog.tsx:106–122` ·) | — | `HANDOFF.md:1100` rules the stage | — |
| B3 | Gate → `Set rate` → tax sheet | ⚠️ the gate closes first (`Builder.tsx:640–643` ·); Apply, Cancel, ✕ → the invoice; he starts the stage change again | — | not | — |
| B4 | Gate → Review (lines with no cost) | ⚠️ no way back to the gate | — | words: Round 76 §6 #12; path not | — |
| B5 | ⋮ › `Group lines…` | ✅ ‹ → the menu (`GroupChooser.tsx:65`, `r74f`); Escape closes (`ROUND-76.md:156`) | — | ✅ | — |
| B6 | Chooser (⋮ or a line's panel) → `New group line` → group editor | ⛔ Cancel, ✕, Escape, a tap outside → the invoice; neither chooser nor panel comes back (`GroupDoors.tsx:197–200`, `:288` ·) | name and category | *"Cancel there drops the new group"* (`ROUND-74.md:63`); where he lands, not | — |
| B7 | Group's panel → `Name & category…`, `Add lines…` | ⚠️ the panel closes first (`InvoiceSheet.tsx:1563–1580`); Cancel → the invoice, not the panel (`GroupDoors.tsx:218`, `:288` ·) | Cancel drops | the panel closing (`ROUND-76.md:160–161`); `Add lines`' Cancel *"just leaves the mode"* (`ROUND-74.md:63`) | — |
| B8 | ⋮ › `Tax rate…` | ⛔ ✕, Cancel, a tap outside, Escape, the drag → the invoice (`TaxRateSheet.tsx:104–135` ·) | the rate, *also make default* | Round 67 C2 rules the locked state only | — |
| B9 | ⋮ or the rail → Calculator | ⛔ every exit closes; guests typed in it (it re-seeds from Event details), hours (always 4) and the mix reset, even after Update (`CalculatorSheet.tsx:150–162` ·) | dropped | not | — |
| B10 | Calculator → `Choose cocktails` → the rail | ⛔ a way back only once a cocktail is ticked | the calculator's | *"a route, not a requirement"* (28B) | — |
| B11 | ⋮ › `Save as template` | ⛔ (small) Cancel, ✕, a tap outside, Escape → the invoice (`SaveTemplateSheet.tsx:255–270`) | the name | `r74a`; back not | — |
| B12 | ⋮ › `Make an estimate…` → Preview → its page | ⚠️ `Back to the Builder` (`EstimatePrintClient.tsx:97–102` ·) → the bare invoice; the Estimate sheet doesn't reopen (`Builder.tsx:1872–1880` ·) | saved as typed | Round 79 rules the toolbar; Sean, 24 Aug: *"if I begin an export and I cancel, it should return me back to the state I was in"* (`ROUND-34.md:73–74`) | — |
| B13 | ⋮ › Export → print page | ✅ `Back to the Builder`; Safari's ‹ afterwards probably back into the print page (inferred) | — | Sean, 24 Aug | — |
| B14 | Open invoices → `+ New` → Start from | ⚠️ the list closes as Start from opens (`OpenInvoicesSheet.tsx:219–221` ·); Cancel → the invoice | — | not | — |
| B15 | Template list → hold → `Rename…`, `Delete template…` | ⚠️ the panel closes first (`TemplateList.tsx:141–148` ·); Cancel or Keep → the list | the new name | `r74c`; where Cancel lands, not | — |
| B16 | Fill sheet: template list → preview | ✅ the model: ‹ or Escape → the list, his place kept; ✕ closes (`FillTemplateSheet.tsx:239`) | — | `r73b`, `r74d` | — |
| B17 | Rail card → Swap, in the card's place | ✅ `Back` → the card; Escape, ✕, a tap outside shut the whole card | the search words | Round 33 gap 2 | — |
| B18 | Save pill → its window → a row | ⚠️ the window doesn't come back | — | Round 78 §2 #4 | — |
| B19 | Leftovers: count → tag | ⚠️ no step back in the sheet (`LeftoversSheet.tsx:276` ·); ✕ and reopening gives count (`:106` ·) | counts saved | not | — |
| B20 | A tab closed to make room | ✗ the ruled `Reopen` (`HANDOFF.md:510–511`) never built; the toasts carry no action (`Builder.tsx:204`, `:287` ·) | — | ruled | — |
| B21 | Safari's Back, anywhere in the Builder | ⚠️ leaves the page; no window is a step | an open window's | your §0 names the library editors | — (`historySteps.ts` is used by the library alone — a search of `src`) |

**The three press-and-hold rows that do nothing**

| # | Step | Today | Ruled |
|---|---|---|---|
| P1 | A line's panel → `Set quantity…`, `Add a note` | ✗ each only closes the panel (`InvoiceSheet.tsx:1473`, `:1474`: `() => setPanelKey(null)`) | kept by you as present: *"Set quantity, note, Select lines and Remove stay."* (`ROUND-74.md:60`) |
| P2 | A line's panel → `Add cost`; the rail's too | ✗ only closes the panel (`InvoiceSheet.tsx:1495`; `SourceRail.tsx:764`) | `HANDOFF.md:6106–6111`, *"the fix is one tap"*; your Round 67 A6(b) — on a false premise, below |

⚠️ **A false premise of ours, under one of your rulings.** Your Round 67 A6(b), *"✅ Leave `Add cost`."*
(`ROUND-67.md:64`), answered our Round 67 A6 b (`REQUESTS-ARCHIVE.md:2151`), which said of the locked panel's `Add cost`:
*"Correct — it writes to the library, not the invoice."* It writes nothing: the button only closes the panel (`P2`).
That claim was ours and it was wrong. ❓ **For all three: build them, or take them off?**

**History's card**

| # | Step | How it's left today | Ruled | Built |
|---|---|---|---|---|
| H1 | List → card | ✅ ✕, a tap outside, Escape → the list, search, filters and scroll kept | §12.1 | — |
| H2 | Card → `Open in a tab` → the Builder | ⚠️ no way back to the card; Safari's ‹ → History with the card shut, and search, stage filter, Archived and Deleted reset | opening §12.1; back not | — |
| H3 | `Open in a tab` when it fails to load | ⚠️ the notice is set and the open returns (`HistoryList.tsx:270–278`), then the card closes anyway (`:475–478`) — against `HANDOFF.md:5723–5725`, *"keeps the peek open and says so… No navigation, nothing lost"* | ruled; the code goes against it | — |
| H4 | Card → `Duplicate` → the Builder | ⚠️ the `Duplicated…` notice is History's own (`:121`, set `:302`) and `router.push` (`:307`) leaves History, so it's never seen; `Open in a tab`'s eviction notice the same (`:291–295`) | Sean, 8 Sep | — |
| H5 | Card → `Save as template`, over the card | ✅ Cancel, ✕, Escape, a tap outside → the card | `r74a`, `r74b` | — |
| H6 | Deleted card → Restore; older copy → `Open it` | ⚠️ Restore closes the card and turns Deleted off; `Open it` is one-way | §34.2; `r81a` (d) | §238: a waiting row's card opens trashed, `Restore waits until the live list has loaded.` |
| H7 | The card has no Export and no Reopen | ✗ to print: `Open in a tab` (one of 8), ⋮ › Export → `Back to the Builder`, never History | not | — |
| H8 | Safari's Back from the card | ⚠️ leaves History; the card is no step | your §0 names the library | — |

**Settings**

| # | Step | How it's left today | Typing | Ruled | Built |
|---|---|---|---|---|---|
| S1 | Anywhere → Settings (the gear) | ⚠️ no back control; Safari's ‹ works | — | Round 31 §2, destinations | — |
| S2 | Settings → a section | ✅ `←` to Settings (`SettingsHeader.tsx:8–14`) — a link forward, so Safari's ‹ afterwards walks back into the section | — | the row: Round 31 #6; the `←` never drawn | — |
| S3 | Business, typed → leaving (`←`, the menu, the gear, Safari's ‹) | ⛔ nothing asks: a search of `BusinessForm.tsx` for `Discard`, `dirty`, `unsaved` and `beforeunload` finds none | dropped, a newly picked logo too | not | §242: it holds the quiet reload (`BusinessForm.tsx:246`), nothing more |
| S4 | Estimates → a word pair's sheet | ⛔ ✕, Cancel, a tap outside, the drag, Escape all close (`WordPairSheet.tsx:205`, `:246`) | dropped | Round 80 rules Cancel | — |
| S5 | Method & Glassware → an open row | ⛔ Remove deletes at once, no question, no Undo (`ManagedList.tsx:110–115`); tapping another row drops the rename (`:180–184`); no Cancel, no Escape | the rename | Round 32 §2b | §242: a row being named holds the reload (`:56`) |
| S6 | General → Developer tools → a tool | ⚠️ `← Developer tools`; nothing back to Settings (owner only) | — | not | — |

**Left out of the tables, from the same map** (with these, every step the map marked ⚠️, ⛔ or ✗, as its critic corrected it, is here): Products' Return
pass (save and next), with no way back to the product before (§3 #3); closing an invoice
tab — immediate, as ruled (`HANDOFF.md:498`, *"Closing is immediate"*), and the only way back is History → its card →
`Open in a tab`; ⋮ › `Select lines…` while choosing lines for a new group drops the group (`Builder.tsx:1666–1667`, ruled
✅ at `ROUND-76.md:159`); Cocktails' and Prep's Select › Export, which ends the mode as §18D rules, so the selection is
gone after it (`CocktailLibrary.tsx:499–509`); the library's trashed older copy's `Open it`, one-way as History's (H6;
from the map, not re-read); the top bar's search, not wired up (`GlobalSearch.tsx:48`, ✗); a print page's *not found*,
always `Back to History` (`PrintClient.tsx:56–60`); signing in again, which always lands on the Builder
(`login/actions.ts:37` → `/` → `/builder`), the page he was on not remembered (`supabase/proxy.ts:149–152`); and the Style Guide, owner only, outside
the app's frame (from the map, not re-read).

**The map's corrections, applied above** (the critic's, each re-read): there is no ⋮ › Edit on a product row — every
product edit is card → `Edit product` (`ProductRow.tsx:27–28`), so §17.3's second direct door doesn't exist; a tap on
the side menu while a window is open only closes the window (the scrim covers the menu, `Sheet.tsx:277–278`), so it isn't a separate way to
lose typing; the chooser's Escape *is* ruled (`ROUND-76.md:156`, *"33–34 ✅ Right."*) — so your rulings give Escape two
meanings, back on the fill preview (`ROUND-74.md:43`) and close on the chooser; Leftovers does return to count, on ✕ and
reopen; the calculator re-seeds guests from Event details.

**Also from the map, told:** "back" has five looks today — the bordered ‹ (the fill preview), the borderless ‹ (the
chooser), the word `Back` (Swap), Settings' `←`, the print pages' `Back to …`. The App Store build is planned in Capacitor
(`PHASE-9-APPSTORE.md:20`, `:82`) — a web view without Safari's toolbar, which is general knowledge, not checked in the
repo; whether the edge swipe works there is not checked either.

### 1 · Your Round 85: received by iCloud, built in four batches, each reviewed

**How it came.** The zip is in `limbo-app`'s `design-imports/` at 01:55:03 on 18 Oct (its files dated 01:55:00),
extracted at 02:03:46. `ROUND-85.md`, the frame, `MANIFEST.md`, `STATE.md` and `github.md` are copied into `limbo-app`'s
`docs/design/`, byte for byte (`9874aa2`). `HANDOFF.md`, the main canvas and `support.js` are byte for byte the 17 Oct
source, so the redacted copies there stand. That repo is private; this one is public, so they are not here.
**This file with this round:** 457,220 bytes (`wc -c`), under your 500 KB, so no round moves to the archive.

**How it was built.** Four batches, each built and then reviewed again, adversarially, by a pass of its own that drew
the frame headless, read every ruled string from `ROUND-85.md` and the frame's source, re-took the numbers with a driver
of its own and ran fault injections of its own. Nothing built past a ruling: no `‹ Card`, no trail.

**a · Batch 1 — the way back, as far as every option agrees (your §0, `r85f`).** §236 (`970c605`); review §237
(`53119fd`).
- **Save returns to the card** in the cocktail, prep and product editors; a new record's Save lands on its new card,
  with its bin.
- **✕ closes** from either state. **Safari's Back and the swipe take one step** — editor → card, card → closed, he stays
  on the list — through `src/lib/historySteps.ts`, the only code that touches the browser's history; its entries carry
  no address. A card reopened from the address (`?card=`, after Export) adds a step only for its editor.
- **`Edit product`** draws the editor in the card's window instead of closing the card.
- **Unsaved typing asks** on every way out, `r85f`'s four strings byte for byte in the shared `ConfirmDialog`, only when
  a value changed against what the window opened with (`src/lib/unsavedChanges.ts`). Discard after Back goes to the card;
  after any other way out, all the way. Asking writes nothing.
- **The review (§237): five faults found by doing, each measured before the fix, and fixed** — a new product saved in
  the trash view landed on a card drawn as a deleted copy; a price stored as a string (`"21.99"`) read as none, so a 0
  typed over it was dropped without the box; step ids restarted on every load, so after a reload Back did nothing
  visible; Back with the editor's bin asking left `Move to the trash?` over the card; the product card's the same over
  the list. **Three holes in the checks closed.**

**b · Batch 2 — the trash's last four stops (your §1 #1–#4; `r85g`, `r85h`, `r85i`).** §238 (`8dc8481`); review §239
(`84f0e23`).
- **#1:** `Delete…` compares `trashedAt` on all four kinds; both missing is equal, one missing is different.
- **#2:** a permanent delete is never queued. At the tap it reads the list and its `updated_at` from the server, checks
  the copy he saw, and writes the list without it by an update the database applies only if `updated_at` hasn't moved
  (three tries) — §3 #15. Offline, or with this device's own trash write waiting, nothing is sent. Your three boxes, word
  for word, one `OK` (`DELETE_BOX`, `trash.ts:551–564`).
- **#3:** the card behind a waiting row opens trashed and read-only, its foot `Restore waits until the live list has
  loaded.`; Restore or `Open it` arrive with the list. The product card too.
- **#4:** History's, Cocktails' and Prep's rows take `py-2` beside `min-h-row-list` (`HistoryRow.tsx:192`,
  `CocktailLibrary.tsx:358`, `PrepLibrary.tsx:346`); §33.5 B3's sentence is in `globals.css`. ⛔ Not the product row
  (§2 #3).
- **The review (§239): one fault found by doing, and fixed** — a box whose answer came back after he had left the trash
  view was kept, and popped up over the next trash he opened. **Four holes in the checks closed.**

**c · Batch 3 — your calls (your §2 #6, #11, #16, #18, #20, #24, #25, #27, #32, #34; `r85j`).** §240 (`60cccdb`);
review §241 (`ce59765`).
- **#16:** the on-hand cell shows the figure alone when its word would come from the name; the list's plural takes the
  s on the word before ` of `, none on a word ending in s.
- **#25:** the letter paper's Service column gives way (`RecipeSheet.tsx:392`, `shrink-0` off). ⛔ The table itself:
  §2 #2.
- **#27:** with the unit missing or unknown, nothing after the name — one test, `unitKnown` (`separate.ts`).
- **#32:** your two sentences byte for byte, by direction. **#34:** `Two prep recipes ask for this by weight, and it is
  sold in L.`, then the remedy.
- **#11, #24:** as built, now held by checks. **#6, #20:** unchanged, proved render by render against `84f0e23` (of 171
  renders, 132 byte for byte; 36 differ only in the Service column's class, the three shopping lists only in the water
  row's remedy).
- ⛔ **#18:** §2 #1.
- **The review (§241): one fault found by doing, and fixed** — with two or more spaces before ` of `, the s landed after
  the spaces (`bag  s of ice`), on the list, its blank-size sentence and the Separate block's line two.

**d · Batch 4 — the quiet reload (your §2 #33).** §242 (`91e3210`); review §243 (`1eb0841`).
- When the app comes back to the front it asks the server which build is live (`/build-id`, new — behind the sign-in,
  never cached; `src/app/build-id/route.ts`) and reloads itself to a newer one — only with nothing waiting, no window
  open and nothing typed (§3 #44–#47). Otherwise it waits for the next return. Never on open, never while he's looking,
  at most once per build in a tab. Nothing is drawn, so there are no strings.
- **The review (§243): one fault found by doing, and fixed** — on the recipe and prep export pages his chosen paper and
  volumes live only in the page, so a reload threw the printout away and reopened the chooser over nothing (measured);
  a printout on screen now holds the reload, as typing does. **Two holes closed**, one in its own new assertion.

**Money, the first rule.** No stored figure moves, and no completed invoice's either.
- The build's own checks hold, on every build: the comp's worked example (4 × gin at $24.99 + a $40.00 bag of ice, ice
  comped → $99.96 billed, $40.00 comped, $105.96 at 6%) and yours ($1,395.75 at 6% → $83.74 tax, $1,479.49 on its
  paper) — and on the live invoices behind every guarded copy a `Delete…` takes (`check-trash`).
- No code an invoice figure is made from changed. The delete-now writes only the trash list; the reload adds a read-only
  `autosavePending` and happens only with the queue, the given-up pile and the set-aside list empty.
- **No stored shape changes:** Save writes the records it wrote before; the boxes write nothing; `trashedAt` was already
  stamped by every trash; the one new key is the tab's own `limbo:reloaded-for`, in its session store. So no old-version
  warning goes with this send (your #33's last sentence) — only one reload by hand, because the live build has no guard
  yet (§3 #51).

**Fault injections** (each new or changed assertion broken on purpose, and tried against a comment):

| § | Cases | Red | Controls green |
|---|---|---|---|
| §236 | 56 | 52 | 4 |
| §237 · review | 24, and §236's 56 re-run | 21 | 3 |
| §238 | 56 | 53 | 3 |
| §239 · review | 46 | 37 | 2, and 7 green that should have been red: the four holes, red since |
| §240 | 33 | 30 | 3 |
| §241 · review | the fix's, and 15 of §240's re-run | each as expected | — |
| §242 | 73 | 70 | 3 (one more first went green with no case for it; the case was added, red) |
| §243 · review | 102 | 95 | 7 |

### 2 · ⛔ The stops — three, each a question

1. ⛔ **The switch's knob** (your §2 #18, `ROUND-85.md` line 94; `r85j`, lines 260–266).
   - **What the ruling says:** the knob is the light theme's `--surface` in both themes; *"Light keeps its shadow"*;
     *"The edge and fill stay as built"*; 🔧 measure ≥ 3:1 against the off fill and the on fill, in both dark blocks.
   - **Measured** (verify build, `/style/trashcheck`, rendered), in `[data-theme="dark"]` and the System dark block alike:
     the off fill `#100E0A`, the on fill `--accent` `#7FA894`. `#FDFCFA` reads **18.80:1** against the off fill and
     **2.58:1** against the on fill — under your 3:1. `r85j`'s drawn on fill `#5E8C77` would give 3.73, but *"The dark
     fills are approximate, and the tokens rule"* (line 265).
   - **A premise the code doesn't hold:** the app's knob has no shadow for light to keep — its class carries none
     (`BusinessForm.tsx:128`, `h-5 w-5 rounded-full bg-surface`), `r68e` draws none, and the computed `box-shadow` is
     `none` in all three blocks. `r85j` draws `0 1px 3px rgba(25, 23, 19, 0.3)` on the light **off** knob only (line 260).
   - **What is built:** nothing. The knob stays `--surface`, no shadow: in dark `#1A1712`, 6.75:1 on the on fill and
     1.08:1 inside an off switch.
   - ❓ **What does the knob read against the dark on fill — another knob colour, or another on fill? And does light gain
     `r85j`'s shadow: on the off knob only, or both?**
2. ⛔ **The letter paper's table** (your §2 #25, `ROUND-85.md` line 97; `r84d`, lines 111–143, draws the table and no
   Service column).
   - **What the ruling says:** *"The letter paper never prints past its margin. The Service column gives way, wrapping
     its words, until the table fits."*
   - **What the code has:** the Service column is not beside the ingredient table. It sits under it, beside
     Instructions (`RecipeSheet.tsx:327`, `:392`), so its giving way can't make the table fit. Built as far as it
     reaches: Service gives way (§1 c); measured in §3 #41.
   - **Measured, the table:** a letter sheet on 4 × 8 in paper with Per drink and three batch columns runs 35.80 into
     its margin; with four, 78.88 — 6.89 past the sheet's edge (printed to PDF headless: 25.04pt from the paper's edge,
     under the page's 25.2pt margin). At a 390 window the four-column table runs 5.88 into its margin, inside the sheet's
     edge.
   - ❓ **What gives way in the table: the figure columns, the name column wrapping, the type, or the letter paper not
     offered on 4 × 8 in?**
3. ⛔ **The product row** (your §1 #4, `ROUND-85.md` line 82; `r85i` line 247: *"It also covers the product row's two
   lines at 390"*, and line 246: *"Every other row keeps its 61, centred, as built"*).
   - **What the code has:** the product row is not a `min-h-row-list` row. It has its own `py-3`, 12 above and 12 below
     (`ProductRow.tsx:102`).
   - **Measured** (verify build, `/style/trashcheck`): ordinary product rows 66.75–67.75 tall at 1600 and 1200, and
     90.25–91.25 at 390, where line two wraps. The guarded one 88.25, and 131.25 at 390 (its `Another copy is in
     Products` takes two lines, 39).
   - **So "every other row stays 61, as built" is not true of it,** and the one rule would shorten every product row in
     the library — live ones too — to 61 (83.25 at 390).
   - **What is built:** nothing; the row is held as built, by an assertion.
   - ❓ **Does the product row come under the one rule — every product row shorter — or keep its own 12 and 12?**

None of them moves money as built.

### 3 · Readings

`(ours)` marks a string or a placement no ruling or frame gives; each is the plainest form, built and listed here.
`(read as)` marks how a ruling was read. ❓ marks a reading that wants your call. The rest are told.

**The way back (§236–§237)**

1. `(ours)` **The nouns:** `Your changes to this prep recipe haven’t been saved.` and `Your changes to this product
   haven’t been saved.` — *"with their own nouns"*; the kinds each sheet is titled with.
2. `(ours/read as)` **The name in the box is the record's as opened or last saved**, not his typing: renaming the Orange
   Crush still reads `Your changes to Orange Crush…`. A new record reads `…to this recipe…` until it is saved.
3. `(ours)` **Products' Return pass** (save and next, §69): the card under the editor follows the product on screen, so
   Back from the next product's editor lands on its card. The pass's last Return counts as a Save and lands on that
   product's card; it closed the window before.
4. ❓ **Escape in an editor goes all the way out, asking first, as ✕ does** — not a step back. Your rulings give Escape
   two meanings: back on the fill preview (`ROUND-74.md:43`), close on the chooser (`ROUND-76.md:156`). Which for the
   editors? And with A's ‹, does Escape follow ‹ or ✕? (§0 question 4.)
5. **The drag down below 1024 asks too** — it is the same close as ✕. `r85f`'s list doesn't name it.
6. **Three changes nobody sees still ask**, in the safe direction: the instructions split and merged back (a copy stays
   in the hidden batch field); a prep's already-lit scaled-unit chip tapped where none was stored; an old ingredient row
   (`oz`, no unit) whose amount is typed and put back. The last is an older fault in the row's own rewrite: it turns
   `oz` into `qty` and the unit is lost (it reads `fl oz` after). Not fixed here.
7. **The edge swipe was measured only as the browser's Back** (headless Chrome), never as Safari's swipe. Safari may skip
   history entries added without a tap; ours are added right after his tap, except the one put back while the box holds
   a Back. His check is IPAD-CHECKS 25.3.
8. **A reload with a window open leaves one Back per open step that does nothing visible** — a card and its editor leave
   two (§237 corrected §236's "one"). Forward after a Back reopens nothing.
9. **A long-press on Safari's Back from an editor on a card reopened from the address** (`?card=`), jumping two entries
   to the list's plain address, reads as leaving the page: the typing goes without the box. A single Back and the swipe
   ask. No ruling covers the long-press list.
10. **A new record saved in the trash view lands on its live card**, over the trash view's list, on all three screens.
11. **On a test page with no app shell, the Cocktails header at 390 reached 546 wide** with rows listed (tabs, `New
    recipe` and `Select` on one line). Not touched by this build, and not checked in the app.
12. **The box, measured** (the shared `ConfirmDialog` — §238 gave it a one-button form for your boxes; its two-button
    form draws as before): 384 wide and centred at 1600 × 1068 and 1200 × 1468,
    350 at 390; title 18, body 17 on two lines, both buttons 48; `Discard changes` outlined on the left, `Keep editing`
    filled on the right, with the focus. Light: title 17.46:1, body 9.72, Discard 7.52, Keep editing 9.34 on its fill.
    Dark: 15.43, 11.76, 4.59, 7.06.

**The trash (§238–§239)**

13. ❓ **Empty trash and the automatic sweep still delete by id through the queue.** *"A permanent delete is never
    queued"* and `r85g` name the `Delete…` confirm. Do they cover Empty trash too?
14. **A `Delete…` tapped offline on the live build** (before §238) waits in the queue as a delete by id, and is still sent
    by id after the upgrade — the one send the rule can't reach. Rare, and the same as Empty trash.
15. **How "the server deletes only on a match" is done, with no server code:** the list is read from the server at the
    tap with its `updated_at`; the list without the copy is written by an update filtered on that `updated_at`, which
    the database applies in one statement or not at all (three tries). A database function would mean changing the
    database, which this work never does. **Never run against the real database** (no access here): the fake table
    models the filtered update, so his first real `Delete…` is its first real run. `updated_at` is the writing device's
    clock, to the millisecond.
16. `(ours)` **While a delete is in the air, `Delete…` does nothing** — one tap, one delete. No frame draws that moment.
17. `(ours)` **A failed read or update while online** (a signed-out session too) shows the offline box; nothing is
    deleted. A copy already gone from the server shows no box; the row goes when the trash reloads. A list still moving
    after three reads shows the refused box.
18. `(ours, §239)` **A box whose trash view has left the screen is dropped**, not shown later. Edge: a refusal's reload
    that hides the row from a search he has typed unmounts the band, so that `Nothing was deleted` is dropped too.
    Nothing is deleted either way.
19. **Where the box lives:** drawn by the trash view's band, not by the row's button — the refusal's reload makes the row
    Restore's and unmounts the button (found by doing).
20. **The boxes use the shared confirm's type** (title 18, body 17), where `r85g` draws a 20 title — your Round 84 §2
    #14's one confirm. `this iPad` shows on the Mac too.
21. **`r85h`'s note reads `Deleted. 27 days left in the trash.`;** the card keeps its built note, `Deleted. Kept until you
    empty the trash.`, while the 30-day delete is switched off.
22. **#3 reaches the product card too.** Its waiting row opened `Edit product`, and saving from there would have written
    the old trashed copy over the live product.
23. `(read as)` **#4's "fits" is read as fits with 8 to spare** — lines up to 45 of the 61. A literal "fits in 61"
    would differ only for lines between 45 and 61 tall, and no row measured differs: History's rows' lines are 41.09, and the guarded
    row's 60.59 overflow the 60 inside its rule, so it grows either way. Cocktails' and Prep's rows were read from their classes, not measured (no lab draws them); their rows
    whose chips wrap at 390 take 8 and 8 now too.
24. **Deleting the last copy in a trash leaves the trash view on, with no rows** — as before (§213's `Delete…` and
    Restore do the same).
25. **Measured:** the guarded History row 77.59 (`r85i`'s "about 77"), its lines 8 above and 9 below (8 and its rule);
    every other row 61, lines 9.45 above and 10.45 below as before; History's 14 lab rows 61, lines 41.09. The waiting
    card's foot 73 (its row 48) and 73 when `Open it` arrives, its top unmoved; its line 15, 9.72:1 light, 11.76:1 dark.
    Each box: one `OK`, 66.33 × 48, 21 from the box's right edge (20 and its border), 20 under the body, focused; `OK`
    9.34:1 light, 7.06:1 dark.

**Your calls (§240–§241)**

26. `(read as)` **#16: your example keeps `, 20 lb`** (`2 bags of ice, 20 lb`). The list's word is still the name's head
    before its comma (27C: "Lime, whole" is bought as limes), so it reads `2 bags of ice`. The `, 20 lb` was our own
    made-up width test in our reading 16.
27. **#16, told:** a packaging word ending in s reads itself for many — `Glass` → `glass` (it read `glasses`), `Cases` →
    `cases` (it read `caseses`).
28. `(ours)` **#16: the blank-size sentence takes the stored singular:** `This is sold in bags of ice and the bag of ice
    size is blank.`; `the box size` (it read `the boxe size`). Without it, #16 would have made it `the bags of ice size`.
29. `(ours, §241)` **Spaces before ` of ` stay as he typed them**, and the s goes on the word (`bags  of ice`).
30. `(read as)` **#16: a product counted in units with no name** shows the figure alone (the name's branch).
31. ❓ **#32: the pour against a prep's yield keeps Round 52's one-way sentence** — `The Sazerac asks for 0.25 oz and
    Demerara yields 1 kg. A weight can't become a volume here — change the row's unit, or add a weight to the product.`
    Its other side is a prep, and #32 names a product. Should it follow the direction too?
32. **Your sentences use curly apostrophes** (`can’t`, `row’s`), the calculator's older ones straight (`can't`,
    `other's`), so both show in one list.
33. `(ours)` **#34 beyond your one example:** `Three prep recipes` (words to nine, then figures: `10 prep recipes`); `Two
    recipes` when a drink pouring it directly is among them, or only drinks feed it; `by volume` and `by count` beside
    `by weight`, from the row's unit; no `by …` for a unit the registry can't read.
34. `(read as)` **#34: a merge clash between two recipes still names both sides** (§51.5); #34 is read as the row against
    its product.
35. **#34 counts records by name:** two prep recipes with the same name feeding one row are one record, named, with the
    figure of whichever was ticked first. The app never makes a same-named prep; he would have to type it.
36. ❓ **Two tick-order namings left, the same before §240:** two preps each refused against their own yield, feeding one
    sugar row, name the first-ticked drink (`The Sazerac asks for 0.25 oz…` or `The Toddy asks for 0.5 oz…`) — the
    naming #34 rules out, in a sentence no ruling words for two; and two drinks pouring one product in a unit the
    registry can't read are never merged (§51.5), so the row names the first ticked (`The Ranch asks for 30 glug…`).
37. **#27 rules after the name only:** the card's right-hand amount on a batch (`1 a glass`) and the paper's Per drink
    column (`1`, `2 top`) are unchanged.
38. **#24, measured:** the phone paper on 4 × 8 in and at a 390 window takes at most three lines (`about / 1½ /
    bottles`, `8.5 / 8–9 / drinks`); the letter paper on Letter at most two. Of 960 cells (both papers, six column sets,
    three recipes), none clamped, cut or clipped.
39. **#11:** a $0.001 price's card figure reads `under $0.01`, with the line under it naming $0.001.
40. **The `/style/separatecheck` lab itself still scrolls to 489 at 390.** It sizes each sheet to its content (a flex
    column), so the 2.2 in still counts there. The print route lays the sheet out as a block, where the fix holds
    (measured that way, #41).
41. **#25, measured as the print route lays the sheet:** on Letter, every letter sheet 672 wide with 528 of content and
    nothing past the margin, before and after (PDF: text 108.1–108.3pt from each paper edge); at a 390 window Service ran
    82.92 past the content (the page 401 wide) and now fits (128.27 wide, the page 390); on 4 × 8 in, 155.92 past and now
    0 (55.27). 1600 and 1200 unchanged; light and dark identical.
42. **#16, measured** (`/style/sheetcheck` `#onhand-words`, a seeded library): the ice reads `12` alone, its figure's
    centre at the steppers' figure x — 1301, 1025, 231 (locked rows 1327, 1051, 257) — like every other on-hand row's;
    the `—` keeps its right edge (1439, 1163, 369); the cell 158 / 132, one line, no sideways scroll; light and dark.
43. **The lab gains a bag of ice row** in `#onhand-words`. On any real browser the lab's figures stand alone: its words
    are read from a library the headless run seeds.

**The quiet reload (§242–§243)** — nothing drawn, no `(ours)` strings.

44. ❓ `(read as)` **"Nothing waiting" also takes in the given-up pile and the set-aside list**, not only the queue you
    named: each is a change of his not on the server yet. So a device holding one stays on its old build until Retry,
    Dismiss or Clear.
45. `(read as)` **"Nothing typed" also takes in:** words in any of the seven search boxes (a reload would empty them;
    Products' come back from `?q=`, the others' don't); Settings › Business's unsaved boxes and two switches; a Settings
    list row being named; an Estimates figure kept in its box; and any box he is in, typed or not. Words held in the
    rail's search while the rail is folded hold it unseen.
46. ❓ `(read as, §243)` **A printout set up on the recipe or prep export page counts as typed** and holds the reload
    until he leaves the page. Before the fix a reload threw it away and reopened the chooser over nothing (measured).
47. `(read as)` **"No window open":** anything drawn as a dialog, a confirm or a menu, `aria-modal`, an open `<dialog>`,
    or a surface on the focus stack — so the ⋮, the stage map and the Undo list count.
48. **What a quiet reload still resets, and no ruling names:** an open group in the Builder (as a reload does today);
    Select mode and its ticks; the bulk-trash Undo strip (4.5 s); the scroll; the Library's filters, sort and Deleted
    only (so he can be moved from the trash view to the live list); History's stage filter, Archived and Deleted; the
    rail's segment. Redo is never kept across a reload, and an invoice keeps only the Undo steps that fit its 300 KB.
49. **Read, not run:** between the reload starting and the new page arriving, the old page still answers taps. A change
    made then is kept; a window opened then is closed by the reload.
50. **A stored queue this build can't read** (damaged) holds the reload on that device until his next change lands. The
    save pill reads it as empty, so nothing on screen says why.
51. **This send's upgrade:** the live build has no guard, so each device needs one last reload by hand (IPAD-CHECKS, 18
    Oct); after it, each later code push reaches a device the next time it comes to the front with nothing waiting. A
    server rolled back to a build before this one answers 404 to `/build-id`, so a rollback doesn't reach devices on its
    own. The path and its `{ build }` answer are a promise to every build already loaded (`route.ts` says so).
52. **Your *"The reload warning stays for sends that change a stored shape"*** is a records practice, not code. This send
    changes none (read, not run), so his checks carry no old-version warning — only the one reload.
53. **Not seen on his iPad:** whether Safari keeps a box's focus across an app switch (if it drops it, the box's change
    is queued and holds the reload until it lands); and a page Safari restores from its back-forward cache fires
    `pageshow`, which nothing listens to.
54. **Measured:** `/build-id` signed out answers 307 to `/login` (curl), read by the guard as no answer; the build's
    server chunk and its page chunk carry the same id; at 1600 × 1068, 1200 × 1468 and 390 × 844, light and dark, every
    screen with nothing open holds nothing, and the ⋮ open holds it. No console errors; no request left the machine.

**Contrast, measured** (headless Chrome, rendered, on `--surface` unless named; dark is the same in both dark blocks):

| What | Light | Dark |
|---|---|---|
| The discard box: title / body | 17.46 / 9.72 | 15.43 / 11.76 |
| `Discard changes` / `Keep editing` on its fill | 7.52 / 9.34 | 4.59 / 7.06 |
| A trash box's `OK` on its fill | 9.34 | 7.06 |
| `Restore waits until the live list has loaded.`, `--text-secondary` at 15 | 9.72 | 11.76 |
| The knob as built, against the off fill / the on fill | 1.36 / 9.50 | 1.08 / 6.75 |
| `r85j`'s knob `#FDFCFA`, against the off fill / the on fill | — | 18.80 / **2.58** |

### 4 · What his iPad still owes

- **Session 24 — on his iPad since the 01:12 send on 18 Oct** (your Round 84's build; read back live at 11:02 and 12:32), five checks, none done yet: the guarded row's
  line (24.1), `0,125` (24.2), a French 75 printout with two batch sizes (24.3), `2 bottles` (24.4), the switch's edge
  in dark (24.5). Four carry an 18 Oct note for what this send changes, so a right answer doesn't read as broken.
- **Session 23 — still open:** 23.1, 23.2, 23.4, 23.5, 23.6 (23.3 done 17 Oct). Your *"His Sessions 23 and 24"* waits on
  these.
- **Session 25 — new, seven checks, after this send:** Save lands on the card (25.1); a product's Edit in one window, and
  Back to its card (25.2); the iPad's Back from an editor (25.3); a letter typed in Name and a tap beside the window →
  `Discard your changes?`, `Keep editing` keeping it, the letter deleted asking nothing (25.4); your three boxes and the
  waiting card on `/style/trashcheck` (25.5); `2 bags of ice`, if he has such a product (25.6); the knob in dark,
  unchanged — what his eye says (25.7).
- **22.1–22.5** are in progress; he was part-way through 22.1 on 15 Oct.
- Every screen measurement in this round is Chrome's. Nothing was printed on an iPad, and Safari's Back and swipe were
  never run.

## What I need back

1. ❓ **Sean's A plus D, drawn:** how `‹ Card` (A) and the trail (D) sit together, and on which windows — his words,
   *"Card when editing, and the trail in the Builder's multi-step windows"* (§0's four questions). Then rule the
   inventory against it.
2. ❓ **The three press-and-hold rows** (P1, P2): build them, or take them off — `Add cost`'s ruling rested on our false
   premise.
3. ⛔ **§2's three stops**, each a question: the knob against the dark on fill, and light's shadow; what gives way in the
   letter paper's table; the product row under the one rule, or not.
4. ❓ **§3's calls:** 4, 13, 31, 36, 44 and 46. The rest are told.
5. **His Sessions 23–25** come back in a later round.

---

## 🔴 ROUND 85 — your Round 84 is built (§222–§234, each batch reviewed); it came by iCloud. ❓ Sean's ask first: a few options for where "go back" lives — *"Be creative."* ⛔ Four stops: what `Delete…`'s check compares (#18a), the box after a refusal, the card behind a waiting row (#18b), and the guarded row's height. Also the readings, the contrasts you asked for, and what his iPad still owes


**implementation → Design, 17 Oct 2026. Branch `main`, app at `d1e7dbe`.** The code is `88443e0`'s (§234 · review).
`d1e7dbe` (§235) is records only: `git diff --stat 88443e0 d1e7dbe -- src scripts package.json` is empty. **Every
`file:line` below is at `d1e7dbe`.** A frame line is a line of `Round 84 - the six stops.dc.html` (178 lines), re-read
for this round. **None of this round's build is live yet: it goes up with this round's send.**

**What is LIVE, read back by curl (no browser):**
- **`6129dbd`, §215–§221 and our Round 84** — pushed 16 Oct at 16:13:32 (`git reflog`). On 17 Oct at 19:52, and again
  at 20:25:
  - the live `/style/trashcheck` carries build id `W8wq1IMtvDRHl3daq4VZQ`, and does not say `Another copy is in`
    (§222's line, not live);
  - `/style/markscheck` and `/style/separatecheck` answer 200 (404 on 16 Oct).
- **GitHub reads `6129dbd`** (`git ls-remote`, 17 Oct).
- **His iPad has it:** he did check 23.3 on it at 4:42 PM on 17 Oct (§3).

**How it was measured:**
- **Browser:** headless Chrome only, each run with its own throwaway profile, all stopped and deleted.
- **Servers:** the verify build (`SHIP_VERIFY=1`) on `127.0.0.1`, stopped afterwards.
- **Pages:** `/style` lab pages that carry the real parts on stand-ins. No sign-in and none of his data.
- **Themes and sizes:** light and dark, at 1600 × 1068, 1200 × 1468 and 390 × 844.
- **Code:** Node ran the real code against stand-ins (a fake server, and for #18b the four real screens with the real
  sync layer), never the database.
- **Not covered:** Chrome, not Safari, and no iPad.
- **Final build on these records** (17 Oct, done 20:35, after a review of the records corrected their words; no code
  changed): exit 0, 8,711 lines with ✓ and none with ✗; *"all 87 checks are wired into the build"*. 87 check scripts
  on disk and 87 in the build, compared name by name; this round added none.

**What Sean sent, 17 Oct, his own words:** *"Build."* — for your Round 84. "Build" covers what you ruled. Where a
ruling stops, so did the build (§1).

### 0 · Your Round 84: received by iCloud, built, then re-checked in three batches

**How it came.** By the iCloud handoff folder again.
- The zip reached it at 15:58 on 17 Oct (its time in `design-imports/`). The Mac's tools could read the folder and move
  the zip out of it — closed to them from about 10 Oct, which is why Rounds 81–83 came by email.
- Extracted at 16:00. `ROUND-84.md`, the frame, `MANIFEST.md`, `STATE.md` and `github.md` are copied into `limbo-app`'s
  `docs/design/`, byte for byte (`27759f3`; `cmp`, 17 Oct). That repo is private; this one is public, so they are not
  here.
- `HANDOFF.md` and the main canvas are byte for byte the 12 Oct source, so the redacted copies there stand: frame
  `20A`'s real invoice, with its client's name and every price removed (`docs/design/README.md` says so). A grep for
  the client's name and for that invoice's figures finds nothing in `docs/design/`.
- **This file with this round:** 408,714 bytes (`wc -c`), under your 500 KB, so no round moves to the archive.

**How it was built.** §222–§228 were built first and committed between 16:33 and 17:23. Then three batches
re-checked them against the code and your files — not the records — and each batch was reviewed again by a pass of its
own (batches 2 and 3 adversarially) that opened the frame, read it whole, drew it headless, re-took the numbers with a
driver of its own and ran fault injections of its own.

**a · Batch 1 — the trash row, `Delete…`'s safety, the comma (your §1 #1, #4, #5; §2 #7, #14, #18a, #18b).** §222
(`758a0b7`), §225 (`456c56b`), §229 (`d5b21c3`); review §230 (`6e52bc3`).
- **#1 (`r84a`):** `Another copy is in History` (`in Cocktails`, `in Prep`, `in Products`) is a line of its own under
  the row's line two, 15, `--text-secondary`, on a guarded row only (`anotherCopyLine`, `trash.ts`). `Trashed Oct 9 ·`
  is written nowhere. The days-left chip stays.
- **#18b:** until the screen's live list has loaded, a trash row shows neither Restore nor `Delete…`, nor the line.
  - **§229 found a hole and closed it, within your words:** `loading` also ends when the read fails. With nothing
    cached and the live read refused, every trashed copy was offered Restore. Run before the fix on the real sync
    layer, Restore wrote `Paper Plane (older)` over the live `Paper Plane` on the stand-in server. Each screen now waits on
    `!loading && !error`.
  - Run on the four real screens (Cocktails, Prep, Products, History), the live read answered late: no button until
    it lands, nothing written, the live copy byte for byte.
- **#14:** `Delete…`'s confirm is the shared `ConfirmDialog`, handed only its own props (held by an assertion).
- **#4 and #5:** as built, now held absent: neither editor hands the panel a subtitle; `One drink` is drawn nowhere.
- **§2 #7:** `0,125`, `0,750`, `00,125` and `01,000` are refused, read as no number, with `Did you mean 0.125? A comma
  only separates thousands.` (`00.125?`, `01.000?`). `0`, `0.125`, `10,125` and `1,000` are unchanged; a device whose
  decimal is a comma is untouched.
- **#18a: not built** — §1 #1 and #2.
- **The review (§230):** no fault in the app. **One hole closed:** `Trashed Oct 9 ·` written as JSX text beside the
  chip passed `check-trash`.

**b · Batch 2 — Widens' held chips, the card's line, the on-hand word, the switch's edge (your §1 #2, #3, #7; §2 #23,
#31).** §223 (`476f77e`), §224 (`3c9e7b2`), §226 (`e4a4558`), §228 (`fc06c42`); re-checked §231 (`f4803e2`), reviewed
§232 (`1ecdf89`).
- **#2 (`r84b`):** a held chip sits last — dashed 1.5 edge in `--control-line`, no fill, `--text-secondary`, a trailing
  ✕, spoken `Rentals, no longer follows guests, remove`. A tap takes it off, Save drops it, Cancel brings it back, and
  a category that follows again returns as an ordinary chosen chip. The hint names it, word for word as ruled. The
  per-chip line is written in no shipped file.
- **#3 (`r84c`):** under the card's Price row, inside the Cost group, the group's full width: `Priced past the cent:
  $0.125. Retype it to whole cents.`, 15, `--warning`, no glyph, 4 under Price. It shows while the stored price is past
  the cent and goes when a whole-cent price is saved.
- **#7 (`r84e`):** `2 bottles`, `1 bottle`, `12 cans`, `10 packs` — the shopping list's word. The figure stays at the
  steppers' figure x and the word follows it, never wrapping; blank with no count.
- **#31 (`r84e`):** `SwitchTrack` has a 1px edge, `--control-line` off and its own `--accent` on. The padding gives up
  the pixel (3 → 2), so the track stays 44 × 26 and the knob where it was. The fill stays.
- **#23:** the alias, as built.
- **The reviews:** no fault in the app; **five holes closed** — the per-chip line in lower case passed; a ✕ drawn before
  the word passed; a switch drawn on its own with no edge passed (§231); and your two 🔧 floors, the switch edge's 3:1
  and `--warning`'s 4.5:1, were not held in the dark block an iPad on System uses — `--warning`'s was held nowhere
  (§232). Both are held in all three theme blocks now.

**c · Batch 3 — the printout, and the told items (your §1 #6; §2 #37, #45, #47, #44, and #60, #61, which you call
ours).** §227 (`18c33fa`), §233 (`9e2605b`); review §234 (`88443e0`).
- **#6 (`r84d`):** today's header stays; each batch column's Yields cell gets its drinks under it; the Separate block is
  rows of the same table under a full-width heading. His French 75 on sample amounts (1 oz gin, ½ lemon, ½ simple, 3 oz
  champagne Separate), run on the real sheet:

  | Row | Per drink | 750 ml | 1000 ml | 1750 ml (your `r84d`) |
  |---|---|---|---|---|
  | Gin / Lemon / Simple | 1 oz / 0.5 oz / 0.5 oz | 375 / 187 / 187 | 500 / 250 / 250 | 875 / 437 / 437 |
  | Yields | 1 drink | 12.7 over `12–13 drinks` | 16.9 over `16–17 drinks` | 29.6 over `29–30 drinks` |
  | `Separate · each drink`, then Champagne | 3 oz | about 1½ bottles | about 2 bottles | about 3½ bottles |

  With no Per drink column: `Champagne · 3 oz a glass`. The `for 12–13 drinks` clause and `Each glass` are gone from
  the paper; the card keeps its line.
- **#37:** no line two, and no printout cell, when a Separate row's unit is missing or one the registry can't read.
- **#45:** the strength line leaves Strained rows out and keeps Separate rows in — gin, ice Strained and champagne read
  23.2% ABV, where the ice unmarked dilutes it to 16.6%; the Service line stops listing a Separate row; the footnote is
  unchanged.
- **#47:** a group with only Separate rows draws no rule above the block.
- **#60 (ours):** run before the fix on his recipe's shape (the syrup's water 615 g, Don't buy, against a litre), the
  row read *"The Whiskey Sour asks for 0.75 g and this is sold in L. Say how much each one holds and this can be
  counted."* It now reads *"The Simple Syrup 1:1 asks for 615 g and this is sold in L. A weight can't become a volume
  here — change the row's unit, or add a weight to the product."* The remedy is your Round 52 §6 #2 sentence. **Found
  beside it and fixed:** a merge clash named the cocktail beside the prep's figure (`The Daiquiri asks for 12 each`,
  where 12 limes is the lime juice's).
- **#44:** nothing works out a cocktail's cost per drink (a scan of 230 app files, names and words, comments stripped:
  0). A check now goes red the day one is written, so whoever writes it has to hold Sean's rule on it.
- **#61:** nothing to build without a new part — §2 #33.
- **The review (§234): one fault on the paper, fixed.** On the phone paper the Separate rows' words ran together —
  `3 ozabout 1` (Per drink and four batch columns, 0.7 apart), `about 41about 55` (four, no Per drink, 0.5); the app's
  paper for your `r84d` sheet (Per drink, 750, 1750) was 1.1 apart. Those cells now carry `r84d`'s 12 gap
  (`column-gap: 12px`, frame lines 119–131) as left padding, on those rows only. After it, every gap is 12 or more at 1600 and 1200, and no cell took another line.
  **Three holes closed:** the drinks line worked from the rounded figure passed (768 ml is 12.98 drinks — `13` to one
  decimal — and must read `12–13 drinks`); the #44 check missed six spellings (`Pour cost`, `Drink cost`, …) and files
  not yet committed.

**Your 3.5:** received — no keyboard route built.

**Money, the first rule.** No stored figure moves, and no completed invoice's either.
- The build's own checks hold, on every build: the comp's worked example (4 × gin at $24.99 + a $40.00 bag of ice, ice
  comped → $99.96 billed, $40.00 comped, $105.96 at 6%) and yours ($1,395.75 at 6% → $83.74 tax, $1,479.49 on its
  paper).
- `check-onhand`'s 4,602 figures, papers and renders across 270 invoices are byte for byte as before.
- §234 compared 896 printouts and 140 cards against the code before §227: every recipe without a Separate row is byte for
  byte. The calculator differs from the code before §233 only in the water row's sentence, at 10, 40, 100, 250 and
  1,000 guests, both rounding modes. Nothing here is stored.

**Fault injections** (each new or changed assertion broken on purpose, and tried against a comment):

| § | Cases | Red | Controls green |
|---|---|---|---|
| §222 | 21 | 18 | 3 (one first run mis-aimed, fixed and re-run) |
| §223 | 13 | 12 | 1 |
| §224 | 7 | 6 | 1 |
| §225 | 4 | 4 | — |
| §226 | 5 | 5 | — |
| §227 | 22 | 21 | 1 |
| §228 | 14 | 14 | — |
| §229 | 19 | 16 | 3 |
| §230 · review | 29 | 23 | 5, and 1 green that should have been red: the hole, red since |
| §231 | 32 | 29 | 3 |
| §232 · review | 69 | 62 | 7 |
| §233 | 12 | 10 | 2 |
| §234 · review | 37 | 33 | 4 |

### ❓ Sean's ask, first — a way back, and a few options for where it lives

**His words, 17 Oct**, with a screenshot of the Orange Crush's editor (kept private; he circled the editor's top-left
corner and wrote *"NEED A PATH BACK TO THE READ ONLY CARD"*): *"Just a note. I want a way to go back from the editing
card to the read-only card. In fact, there are quite a few places where navigating back and forth between
cards/actions is unavailable. We should fix that. Investigate. Start with this screenshot as a reference."*

**And, later the same day:** *"Add this to the request for round 85 in design: I want a few options for where the
mechanism to “go back” is located. Be creative."*

**What the app does today** — read from the code on 17 Oct, nothing run:
- **A cocktail's card and its editor are one window.** `Edit recipe` unlocks it (`RecipeEditor.tsx:345`). `Save` saves
  and then closes the window (`:441–448`), so he lands on the list, not the card.
- **Every other way out also closes it, and nothing asks first.** ✕, a tap beside the window and Escape close it
  (`Sheet.tsx:209`, `:278`). A search of `RecipeEditor.tsx` for `dirty`, `Discard` and `unsaved` finds only the batch
  instructions' own question (`:813`), so typed changes are dropped without a word.
- **A product's card closes the moment `Edit product` is tapped** (`ProductLibrary.tsx:264–268`), and closing the editor
  leaves him on the list (`:573`).
- **Where a way back does exist:** two ‹ inside windows, both yours — the template preview's (`r74d`, `Back to
  templates`, `FillTemplateSheet.tsx:236–243`) and the group chooser's (`r74f`, `GroupChooser.tsx:59–75`) — and a ← on
  each Settings section's page, back to the Settings list (`SettingsHeader.tsx`). Found by searching for
  `aria-label="Back` and for a left-turned chevron; that is two spellings, so it may not be every one.
- **Not re-checked here,** from another session's map of the same day (read from the code, nothing run): the Builder's
  ⋮ flows, History's card and Settings behave the same way; three press-and-hold rows do nothing; the iPad's Back
  closes too. That map also said the template preview's ‹ was the only one — the list above corrects it.

**Ours, a recommendation, not a request:** one rule for going back across the whole app, not one per window.

❓ **Please draw a few options for where the way back sits — Sean: *"Be creative."*** Start where he did: the cocktail
editor back to its read-only card. It is a path across parts (card → editor → card), so it needs a frame. Nothing is
built.
- ❓ And what does going back do to something typed and not yet saved — keep it, ask, or drop it?

### 1 · ⛔ The stops — four, each a question

Each stop names the ruling it rests on and what was checked: the frame and its lines, or the files.

1. ⛔ **What `Delete…`'s check compares** (your §2 #18a).
   - **What the ruling says:** `Delete…` checks the trashed copy's `savedAt` against the stored one at that id.
   - **What the frames draw:** no refusal. `r84a` (lines 31–58) draws the rows only, and a grep of all 82 HTML files you
     sent on 17 Oct (every frame and lab page) for `another device`, `changed on another` and `Nothing was deleted`
     finds 0.
   - **What the code has:** of the four kinds in the trash, only invoices and cocktails carry `savedAt`. A product
     (`LibraryItem`, `types.ts:133`) carries no save time — its one date, `lastUsed` (`:230`), is never moved by a
     save — and a prep recipe (`:753`) an optional `updatedAt` (`:832`). Trashing a cocktail spreads the recipe and
     stamps `trashedAt` (`cocktails.ts:34–40`), so a trashed copy keeps the `savedAt` of the copy it came from.
   - **Measured** on the real sync layer, in the case our Round 84 #18 raised — his other device trashes the live copy
     before this one syncs — with this device's two copies begun by the trash's two writes, the second given up:
     - a recipe's `savedAt`, shown and stored: `2026-10-09T14:00` and `2026-10-09T14:00` — equal;
     - a product's: none and none;
     - `trashedAt`: `2026-10-09T15:00` shown, `2026-10-17T09:00` stored — different.
     - `Delete…` as built then leaves the live list and the trash both empty: the recipe is gone.
   - **What is built:** nothing of #18a. `Delete…` still deletes by id, as it has since §213 (live since 13 Oct).
   - ❓ **May the check compare `trashedAt` (on all four kinds, new on every trash), instead of `savedAt` or as well?**
2. ⛔ **The box after a refusal** (#18a, its second half).
   - **What the ruling says:** the box says `This copy changed on another device. Nothing was deleted.`
   - **What the frame draws:** nothing — see #1.
   - **The problem:** `Delete` can't stay in that box. After the reload the row may no longer be guarded, and `Delete`
     would then take the only copy.
   - **What the check needs, told:**
     - "The stored one" has to be read from the server when he taps. A device with its own trash write still queued
       reads its own cache back (`loadCollection`).
     - An offline tap can't check at all.
     - The delete is sent again, by id, when the queue sends it, so the check would have to travel with it.
   - ❓ **The box's title and buttons? And what happens when the check can't be made — offline, or with this device's
     own write still waiting?**
3. ⛔ **The card behind a waiting row** (#18b).
   - **What the ruling says:** the row shows no button until the live list has loaded. It names the row only.
   - **What the code does:** a waiting row still opens its card, and the card offers Restore from the stale cache
     (driven: `onRestore` was handed to `RecipeEditor` while the live read was in the air).
   - **Why it can't simply be withheld:** each card counts as deleted only when it is handed Restore or `Open it` —
     `const deleted = Boolean(onRestore || onOpenLive)` (`InvoiceCard.tsx:177`, `RecipeEditor.tsx:168`,
     `PrepEditor.tsx:876`). Handed neither, a trashed copy's card reads as live and editable.
   - ❓ **Does the card wait too, and what does its foot show while it waits?** No frame draws it: `r81a` draws the
     guarded card's foot (`Open it`) and `r84a` the rows; neither draws a card whose row is still waiting.
4. ⛔ **The guarded row's height** — two rulings meet.
   - **What the frame draws:** `r84a` lines 40–41 draw both History rows, Restore's and the guarded one, `min-height:
     68px` with `padding: 8px 16px` (the Cocktails rows at lines 47–48 the same, at 20 a side); the guarded row's three
     lines sit 2 apart. Its prose: *"It shows only on a guarded row, so every other row keeps its height."* The app's
     trash rows are 61, their text centred.
   - **What an older ruling says:** your §33.5 B3, *"A row may carry NOTHING. `min-h-row-list` carries its height."* —
     so the list row has no padding of its own.
   - **Measured** (verify build, `/style/trashcheck`, all three sizes, both themes): the guarded History row is 61.59
     tall. Its text sits 0 below the row's top and 1 (the row's rule) above its bottom, against 9.45 and 10.45 on every
     other trash row. Cocktails' and Prep's rows are built the same way (read from their classes, 21.25 + 19.5 + 19.5
     in 61; not measured). The product row has padding of its own and keeps it.
   - ❓ **Does the guarded row grow, so its three lines keep `r84a`'s 8 above and 8 below, or stay in its 61?**

None of them moves money as built.

### 2 · Readings

`(ours)` marks a string or a placement no ruling or frame gives; each is the plainest form, built and listed here.
❓ marks a reading that wants your call. The rest are told.

**The trash (§1 #1, §2 #18b)**

1. **Sizes, measured:** the line 15px, 9.72:1 light and 11.76:1 dark on `--surface`; directly under line two (0 on
   History's row, 2 on the product row's); one line on History's row at every size, two on the product row's at 390.
   `Delete…` 86.03 × 44.
2. `(read as)` **A live read that FAILED with nothing cached has not loaded,** so its trash rows wait as for a slow
   load (§229, above).
3. **What the wait cannot tell apart,** told. A failed read WITH a cache shows the cached list, and the guard reads that
   cache, which may be stale. The wait counts only a failed read with an EMPTY list:
   - a list cached empty (everything trashed) waits too after a failed read;
   - a failed read followed by a record made on this device ends the wait with only that record in the list;
   - `loading` also ends with the cache standing in when this device holds a queued write to the live list, or a write
     lands while the read is in the air (`sync.ts`, `loadOnce`).
4. **With nothing cached, all four screens show `Loading recipes…` (`Loading invoices…`, …) and no rows** until the live
   list arrives. So our Round 84 #18's "nothing cached" edge is really a stale-cache edge.

**The comma (§2 #7)**

5. `(read as)` **`0,`, `0,1`, `0,75`, `-0,125`, `0,125.5` and `0,000` are refused too,** at once, never "incomplete":
   none can become whole groups. So the line shows while he types — `Did you mean 0?`, `0.1?`, `0.12?`, `0.125?` — as
   `1,7000`'s does. `12,99` still waits until he leaves the box.
6. ❓ **Guest words typed `0,500` between 13 Oct and this send** were stored with the count 500. They now read as no
   count, so the Builder and the Estimate fall back to reading the words, which gives none. Not checked against his
   data (no database access). Your premise is that nobody types it. Leave it?

**Widens (§1 #2)**

7. `(read as)` **Your Round 81 §2 #11 — *"Save needs any one chosen, so an old pair can always be saved"* — is not
   withdrawn,** so a held chip still on the row counts as the one: a pair whose only category no longer follows still
   saves.
8. `(ours)` **After a held chip is taken off, focus is on the page, not the sheet** (keyboard, headless Chrome): the next
   Tab carries on from the chip's place, and Escape still closes the sheet.
9. **Sizes, measured:** held chips 44 tall, 16 left and 12 right (the frame's chips are 14, the app's tap chip 16);
   the edge 4.10:1 light and 3.62:1 dark against the sheet; words 9.72:1 and 11.76:1; the hint 6 under, 13
   `--text-muted`, 6.77:1 and 6.74:1. The 1.5 edge computes 1px in headless Chrome, as Round 84 #48.

**The product card's line (§1 #3)**

10. `(ours)` **After a cut figure the full stop is left off:** `Priced past the cent: $7.5769… Retype it to whole
    cents.`
11. ❓ **The card's Price is a figure, not a box.** `r84c` line 97 draws Price as a 160-wide box reading `$0.125`, and
    the ruling says the line shows "with or without focus". On the card Price is a read-only `$0.13`, with no box and
    no focus; it is kept as built. The editor's Price box (§212) shows every digit while it has focus. Does the card's
    Price change?
12. **Colour: frame and prose differ.** `r84c` line 98 draws the line in `#75521A` (the light `--gold-text`, Don't
    buy's colour); the ruling names `--warning` (`#7A4800`). Built as the named token. Both pass 4.5:1.
13. 🔧 **`--warning` at 15 on `--surface`: 7.44:1 light, 8.93:1 dark** (in both dark blocks — `[data-theme="dark"]`
    and the one an iPad on System uses). No token changed. One line at 1600 and 1200, two at 390.

**The on-hand word (§1 #7)**

14. `(ours)` **An on-hand line whose product has been deleted shows the figure alone.**
15. **At 390, measured:** each figure's centre at the steppers' figure x, 231 (1301 at 1600, 1025 at 1200; 257, 1051
    and 1327 in the locked rows); each word starting where its figure ends, on one line, 17px, 16.74:1 light and 14.95:1
    dark on the fill. `2 bottles` ends 61 short of the `—`, whose right edge stays at 369.
16. ❓ **Your #7's two halves can't both hold for a long word.** A product counted `each` with no packaging takes the
    head of its name as the list's word, which can be long. Made up in the page at 390, `12 bags of ice, 20 lb` widened
    the cell to 194 and moved the figure 36 left, on one line, with no sideways scroll. As built, the width wins. And
    the list's quirks come with the word: `Bags of ice, 20 lb` counted `each` reads `2 bags of ices`, as the list does.

**The switch (§2 #31)**

17. 🔧 **The off edge, `--control-line`, against the panel (`--surface`): 4.10:1 light, 3.62:1 dark**, in both dark
    blocks; against `--surface-alt` 3.86 and 3.39. The token passes, so no other was needed. The off fill alone reads
    1.36 / 1.08; on, the edge is the fill, 9.50 / 6.75.
18. ❓ **A correction of ours, and the knob.** Our Round 84 #31 said an off switch in dark showed "only the knob". That
    was wrong. The knob is `--surface`: 1.00:1 against the panel and 1.08:1 against the off fill. So before §226
    nothing of an off switch showed in dark, and as built it is an outline with no knob to be seen. `r84e` line 163
    draws the dark knob `#EDE8DF`, plainly visible; the ruling names the edge and the fill, not the knob. Does the knob
    change?
19. **`r84e`'s specimen is not the app's switch:** 51 × 31 with a 27 knob (the app's `r68e` switch is 44 × 26 with 20);
    a light off fill of `#E6E1D9` (`--border-subtle`, not `--surface-recessed` `#DFDAD1`); in dark `#2A251D` with a
    `#8A8273` edge (neither is a token; `--control-line` dark is `#7A6F5C`); a shadowed knob in light. Built to the
    prose.

**The printout (§1 #6, §2 #37, #45, #47)**

20. ❓ `(ours/read as)` **The Yields drinks line prints only on a recipe with Separate rows.** A recipe without them
    prints byte for byte as before. Your #6 says *"One rule for every sheet"*. Every sheet, or only those?
21. `(read as)` **`r84d`'s drawing with no Per drink column repeats `750 ML` at the heading's right.** The full-width
    heading your prose names is built.
22. `(ours)` **With no Per drink column, a Separate row with no amount has nothing after its name.**
23. `(ours)` **The 12 gap on the Separate rows' cells** — §234's fix, above — follows `r84d`'s `column-gap: 12px`. The
    bottle's rows and Yields keep today's cells.
24. ❓ **"A cell may wrap to two lines."** On the phone paper with Per drink and four batch columns, a Separate cell takes
    three (`about / 1½ / bottles`); with three batch columns the Yields cell does (`8.5 / 8–9 / drinks`). Before the gap
    and after.
25. **At a 390 window** the phone paper is narrower than 4 in, and the gap costs a line there (four batch columns: 3 to
    4; Per drink and three: 2 to 3). The letter paper with Per drink and four batch columns now reaches 14 past its
    sheet's edge (it reached 41 into its margin before); the window already scrolled to 489 for that paper's 2.2 in
    Service column, before and after.
26. **When the one-decimal figure is whole, the cell reads `13` over `12–13 drinks`** (768 ml of the French 75 is 12.98
    drinks), as our Round 84 #38 has it.
27. ❓ **#37 rules line two only.** With no Per drink column, a row with no unit or `top` keeps its amount after the
    name: `Egg white · 1 a glass`, `Top · 2 top a glass`.
28. **Five or more batch columns are possible** — the export takes any number of typed sizes. Your ruling covers one to
    four.
29. **Today's header and cells, kept as you keep them, against `r84d`:** `1750 ml` where it draws `1.75 L`; `0.5 oz`
    where `½ oz`; a bare `375` where `375 ml`; and the last Separate row has the faint rule every row has, where `r84d`
    draws none.
30. **#45:** Pure alcohol and Acid also leave Strained rows out, being worked out from the same rows as Strength.

**The shopping list (#60 and #61, ours)**

31. `(ours)` **#60's sentence names the prep recipe** — `The Simple Syrup 1:1 asks for 615 g …` — since no ruling words
    it for a prep, and the plainest true form is the record whose figure it quotes. Measured: 13px `--gold-text`,
    6.88:1 light and 8.68:1 dark; 5 lines in the 350 box, 2 in the 632 and 728 boxes.
32. ❓ **The weight remedy reads one way only.** On the water row, "add a weight to the product" means giving the water
    its size as a weight instead of its litre (changing the syrup's water row to ml also fixes it). But sugar sold in lb
    against a syrup row in cups is told to *"add a weight to the product"* — and it has one.
33. ❓ **#61 needs a new part, so nothing is built.** The fault lives in code already loaded on an old device. This send
    adds no stored shape the live build would misread (read, not run: since `6129dbd` the only changed write is Widens'
    Save dropping held categories — the same list, shorter), so there is no reload warning this time. A guard against a
    stale build — a "new version" line, or reloading on its own — would be a new state of the app. Do you want one?
34. **Ours, not fixed:** a water row fed by two syrups names whichever drink was ticked first's syrup (`Simple Syrup 1:1
    asks for 615 g` or `Rich Syrup 2:1 asks for 410 g`) — the tick-order wording your §51.4 rules out. Before §233 it
    named the first drink instead. A merge clash still lists its two sides in the order the drinks arrive (old).

**Smaller, told**

35. **#4:** the Builder's own row panels (`InvoiceSheet`, `SourceRail`, `TemplateList`) keep the subtitles they were
    ruled with. Your withdrawal covers the recipe and prep editors' panel, and neither passes one.
36. **#5:** `batchScaling`'s `label: "One drink"` is a data field nothing that draws reads. Left alone.

**Contrast, measured** (headless Chrome, rendered, on `--surface` unless named; dark is the same in both dark blocks):

| What | Light | Dark |
|---|---|---|
| The card's line, `--warning` at 15 | 7.44 | 8.93 |
| The switch's off edge, `--control-line`, against the panel | 4.10 (3.86 on `--surface-alt`) | 3.62 (3.39) |
| The off fill alone | 1.36 | 1.08 |
| The knob, against the panel / the off fill | 1.00 / 1.36 | 1.00 / 1.08 |
| The on track (its edge is its fill) | 9.50 | 6.75 |
| A held chip's dashed edge, against the sheet | 4.10 | 3.62 |
| A held chip's words, `--text-secondary` | 9.72 | 11.76 |
| The Widens hint, `--text-muted` at 13 | 6.77 | 6.74 |
| `Another copy is in History`, `--text-secondary` | 9.72 | 11.76 |
| `Delete…`, `--danger` | 7.52 | 4.59 |
| The on-hand word, on the on-hand fill | 16.74 | 14.95 |
| #60's sentence, `--gold-text` at 13 | 6.88 | 8.68 |
| Don't buy, `--mark-dontbuy` = `--gold-text` (#23) | `#75521A` | `#D9AE68` |

### 3 · What his iPad still owes

- **23.3 — done, 17 Oct, 4:42 PM:** *"23.3 is good."* His screenshot (private) shows the Orange Crush's editor with the
  Sprite reading `Separate · each drink` in green and its `1.5` not struck. He moved the Sprite himself, as your Round
  82 asked.
- **Still open from Session 23:** 23.1 (a deleted copy of an invoice he still has), 23.2 (`12,99`), 23.4 (a batched
  French 75), 23.5 (a Whiskey Sour with egg white) and 23.6 (a Don't buy water on a real draft). Your *"His Session 23,
  when it's done"* waits on these. Five of them carry a 17 Oct note for what this send changes, so a right answer
  doesn't read as broken.
- **Session 24 — new, five checks, after this send:** the guarded row's line (24.1), `0,125` in a price box (24.2), a
  French 75 printout with two batch sizes (24.3), an on-hand line reading `2 bottles` (24.4), and the switch's edge in
  dark (24.5).
- **22.1–22.5** are in progress; he was part-way through 22.1 on 15 Oct.
- **No glass check:** glass is parked.
- Every screen measurement in this round is Chrome's. Nothing was printed on an iPad.

## What I need back

1. ❓ **Sean's ask:** a few options for where the way back sits — *"Be creative."* — starting from the cocktail editor
   back to its card, and what going back does to unsaved typing.
2. ⛔ **§1's four stops**, each a question:
   1. what `Delete…`'s check compares;
   2. the box after a refusal, and when the check can't be made;
   3. the card behind a waiting row;
   4. the guarded row's height.
3. ❓ **§2's calls:** 6, 11, 16, 18, 20, 24, 27, 32 and 33. The rest are told.
4. **His Sessions 23 and 24** come back in a later round.

---

## 🔴 ROUND 84 — your Rounds 81–83 are built (§211–§220, each reviewed); they came by email. The glass lab is LIVE, and Sean has PARKED glass, so nothing about glass is asked. Round 81 is LIVE since 13 Oct. Round 82's three marks go up with this round. ⛔ Six stops: the trash row's line two, Widens' held categories, the product card's past-the-cent line, the panel's subtitle, the one-drink heading, and the printout's drink count with two or more batch columns. ❓ The on-hand line's unit. Also the readings, Round 81 #5's numbers, and what his iPad said


**implementation → Design, 16 Oct 2026. Branch `main`, app at `6129dbd`.** The code is `deb5973`'s (§220 · review).
`6129dbd` (§221) is records only: `git diff --stat deb5973 6129dbd -- src scripts package.json` is empty. **Every
`file:line` below is at `6129dbd`.** A frame line is a line of `Round 81-83 - glass, three marks, the trash
guard.dc.html` (245 lines), re-read for this round.

**What is LIVE, read back by curl (no browser):**
- **§211, the glass lab** — `f179c21`, pushed 12 Oct by 23:42:05. It went live at 23:46:16: the build id changed to
  `UsStOumzVoRfHD1S_X7q3`, and `/style/glass` went from 404 to 200.
- **§212–§214, Round 81** — `cf720ec`, pushed 13 Oct by 02:23:53. It went live between 02:27:58 and 02:28:21, on build id
  `0_kUXfw5OLAq4ngBws4KX`.
- **Read again on 16 Oct at 15:31 and 16:01:**
  - The live `/style/trashcheck` carries that same build id and §213's fixture `Castellano anniversary`.
  - `/style/markscheck` (§215's page) and `/style/separatecheck` (§217's page) answer 404.
- **GitHub reads `11d2efa`** (`git ls-remote`, 16 Oct). There are nine commits after `cf720ec`. They hold the
  start-up GitHub check, ship, one check script, notes, and your files in `docs/design/`. None of them touches app code:
  `git diff --stat cf720ec 11d2efa -- src package.json` is empty. None of them reached the live site: the build id is
  unchanged.
- **§215–§221 are on implementation's Mac and go up with this round** (`npm run ship` pushes both repos). They were held
  on purpose. §215's switch rows describe behaviour that only §217–§220 build: *"not mixed into the batch"* and *"It
  shows on the invoice as on hand"*.

**How it was measured:**
- **Browser:** headless Chrome only, each run with its own throwaway profile.
- **Servers:** the verify build (`SHIP_VERIFY=1`) and dev servers on this Mac, all stopped afterwards.
- **Pages:** `/style` lab pages that carry the real parts on stand-ins. No sign-in and none of his data.
- **Themes and sizes:** light and dark, at 1600 × 1068, 1200 × 1468 and 390 × 844.
- **Code:** Node ran the real code against stand-ins (a fake server), never the database.
- **Not covered:** Chrome, not Safari, and no iPad.
- **Reviews:** after each batch, a review assumed the batch was wrong. It re-took the numbers with a driver of its own
  and ran fault injections of its own.
  - Every review found something and fixed it.
  - Five closed holes in the checks (§211's, §214's, §216's, §218's and §220's), and three fixed faults (§211's one in
    the lab, §212's three and §218's two). §220's found no fault in the app. The details are in §0 below.
- **Final build at `6129dbd`** (16 Oct, 16:09): exit 0, 8,525 lines with ✓ and none with ✗. It reports *"all 87 checks are wired into
  the build"*. 87 check scripts are on disk and 87 are in the build, compared name by name.

**What Sean sent:**
- **On the night of 12 Oct, at 21:57, he pasted your hand-off,** whose own last line is *"Implement: `Round 81-83 -
  glass, three marks, the trash guard.dc.html`"*.
- **On 16 Oct, his own words:** *"So we're starting those builds, yeah?"*

"Build" covers what you ruled. Where a ruling stops, so did the build (§1).

### 0 · Your Rounds 81–83: received by email, built in six batches

**How they came.** Your answer came by email, not as a zip in the handoff folder.
- Since about 10 Oct the Mac's tools can't open Sean's iCloud handoff folder (a macOS privacy setting).
- Sean was on his iPad over Remote Control. He unpacked your zip in the Files app and emailed five files to himself at
  22:08 EDT on 12 Oct: your three `ROUND-8x.md`, the frame and `TO-IMPLEMENTATION.md`.
- They were decoded from that message byte for byte (`limbo-app` `docs/design/NOTE-ROUND-81-83-by-email.md`). Your
  files are dated 13 Oct.
- On 16 Oct your rounds 28–83 and their drawings were copied into `limbo-app`'s `docs/design/` (`7c8616c`), so a cloud
  session can read them. That repo is private; this one is public, so they are not here.
- One frame is redacted in that copy: `20A`, which redrew a real client's invoice. `docs/design/README.md` says what is
  there and what was left out.
- **This file with this round:** 374,114 bytes (`wc -c`), under your 500 KB, so no round moves to the archive.

**Between the batches.** None of this changed app code.
- On 13 Oct a Claude update reset the Mac's privacy permissions.
- On 13 Oct at 03:57 the build run stopped after §216. The Mac lost its connection: the next step's log reads *"Can't
  reach the API server — check your internet or DNS (ENOTFOUND)"*. §217–§220 were built on 16 Oct.
- On 14 and 16 Oct Sean worked from cloud sessions. They built the start-up GitHub check (`85b90b3`; its review and fixes
  are `11d2efa`) and recorded his iPad checks (§3).

**a · §211 (`98cd39c`; review `f179c21`): your Round 83 §2 #5 and §3, the lab. LIVE.** It is under *Glass*, below.

**b · §212 (`dadfa80`; review `57513f2`): your Round 81 §1 #1 and §2 #1, #21, #22, #24, #37, #38, #41 (the Price box),
#54 and #60. LIVE.**
- **The stricter comma rule (§2 #1), in every number box.**
  - The rule is `commaReading` (`numberText.ts`). `readNumberText` reads no number from a refused text.
  - The line is one shared part, `RefusalLine.tsx`, in `--danger` at 13.
  - It covers the 11 boxes on the shared hook, Settings › Estimates' percent, the word pair's two boxes, the Estimate's
    money and guest boxes, the tax sheet, Settings' rate and days, and the 3 batch boxes.
  - A refused text stays in its box, and the figure stored when he started typing is written back.
  - Settings' default rate now refuses what the sheet refuses.
  - **Corpus:** 2,151 whole-group texts read exactly as §199 read them. 2,222 texts are refused, each with a broken group
    and read as no number.
- **Event details' guest box (§1 #1).** A save also stores a count, `guestCount`, but only when the whole text is one
  number in the device's marks.
  - The three readers use the count while it still matches the words. Otherwise each keeps its old `Number()`.
  - Nothing but the box writes the count, and nothing saved changes.
- **#21 to #60.**
  - #21: a reopened invoice with no record reads its paper until its first edit, and its Complete gate treats that paper
    as the earlier record. Your example reads `Replaces the numbers recorded on Sep 12` over `Was $1,479.49 total`.
  - #22: a completed group's panel reads the record.
  - #24: `at least N`.
  - #37: your sentence, with the curly `won’t`.
  - #38: `$7.5769…`.
  - #41: the Price box shows every stored digit while it has focus.
  - #54: `no comp` on the Was line.
  - #60: `To be confirmed` in italic, with its note gone.
- **Money.** The build was run beside the previous one on 3,000 seeded invoices. Figures, documents, gate rows and the
  Estimate's guest count were identical, and no reader wrote. Of 313 invoices completed with no record and then
  reopened, 0 moved on reopen; under the build before, 140 would have moved.
- **The review fixed three faults:**
  1. The kept paper stayed on the server's copy after Complete. It was removed with `delete`, but a save merges with the
     stored copy. It is now written as `null`.
  2. The group chooser read the lines (`$54.02`) where its panel read the paper (`$54.01`).
  3. At 390 the ingredient row's comma line stood on end, ten lines tall.

**c · §213 (`bf43ce8`; review `cf720ec`, "§214 · review"): your Round 81 §1 #2 (b)–(f), #3, #4 and #5, §2 #17, #46 and
#62, and Round 82 §2 #2 and §3 #2. LIVE.**
- **The trash guard (`r81a`).**
  - A trashed copy whose id is still live offers `Delete…` in Restore's place, with the confirm and the card's foot in
    your words.
  - Before this, Restore on such a copy wrote the old copy over the live invoice, recipe, prep or product.
  - The libraries name their own list.
- **Two faults found on the way, both fixed:**
  - A live card whose id was also in the trash opened as deleted, with Restore.
  - Purging a recipe or prep removed the live copy's lit batch chip.
- **No ring on a container (Round 82 §2 #2).** `Sheet`, `ConfirmDialog`, `RowPanel` and `GroupChooser` carry
  `outline-none`. Their controls are unchanged.
- **The dropped space (Round 82 §3 #2)** is reading 21, below. `check-spaces` holds it.
- **#5:** the third rule was tried and not kept; the numbers are in §2.
- **#3, #4, #17, #46 and #62:** already as you ruled them; recorded in comments only; nothing moved.
- **The review closed two holes in `check-trash`:**
  - It did not say which trash History's `Delete…` deletes from, or by which id.
  - It did not say that the purge must read a live id the way the guard does.

**d · §215 (`8f1cca7`; review `f4ee579`): your Round 82 §1 #1, #2, #6 and #7, the marks (`r82a`, `r82b`).** These were
built on 13 Oct as `495794f` / `9f21896` and rebased since, with the same changes.
- **The panel.** `Don't order this ↔ Order this` is now three switch rows: `Separate from Cocktail/Batch` (cocktails),
  `Don’t buy` (both) and `Strained out` (both).
  - Each row is at least 64 tall (83.3 measured, with the line under its word; reading 26), and a tap anywhere on it
    flips the switch.
  - The switch is the word pair's, lifted out as `SwitchTrack`.
- **The data.**
  - `silent` keeps its meaning, now Don't buy. Nothing is migrated (#6).
  - `separate` (cocktail rows only) and `strained` read as on only when stored as a real `true`.
  - One owner, `marks.ts:68` (`marksOf`), reads both against `MARKS_OFFERED` (`:62`).
- **Glyphs and colours.** Two new glyphs, so the set is 48. Three colour tokens.
- **The rows.** Line two on all four ingredient rows, through one part, `MarkLine`. Only Don't buy strikes, in grey.
- **#7.** The withdrawn words appear nowhere outside `/style`.
- **The review closed three holes in the checks:**
  1. The withdrawn words passed in lower case or as a code escape.
  2. The printout's batch scaling was outside the no-figure-moves promise.
  3. A strike in gold passed for one in grey.

**e · §217 (`13440ba`; review `031195b`): your Round 82 §1 #4 and #5 (`r82c`).**
- **The bottle.** Separate is out of the bottle and the rest fill it. Strained scales with the batch but isn't counted in
  the bottle's volume. Don't buy stays in.
- **His French 75, on sample amounts** (1 oz gin, ½ lemon, ½ simple, 3 oz champagne):
  - 375 / 187.5 / 187.5 ml in 750 ml, 12.68 drinks.
  - The champagne reads `3 oz a glass` with `About 1½ bottles for 12–13 drinks`.
  - Before, it was 150 / 75 / 75 with 450 ml of champagne in the bottle.
- **The by-weight stop at `calculator.ts:568` is gone.** A Don't buy row counts in a syrup's measure, a Strained row
  leaves it, and a typed yield still wins.
- **The card and the printout** are as #4 has them, with the stops in §1 (#5 and #6).
- **Nothing else moves.** A recipe with neither mark is byte for byte what §216 drew and made: 171 fixtures, plus the
  review's own 366 renders on 34 recipes. The shopping list for a marked French 75 is line for line the unmarked list.
- **The review fixed two faults:**
  1. A batch typed in quarts read whole figures as ranges (reading 38).
  2. A Separate row with no amount read `— a glass` (reading 36).
- **It closed one hole:** the check's money absence followed direct imports only. The invoice's paper reaches `scaleTo`
  three files away, through `data/migrations.ts`. The check now walks the whole import graph. The only route it finds
  runs through four prep-batch helpers, which §217 did not change.

**f · §219 (`399caf0`; review `deb5973`): your Round 82 §1 #3 (`r82b`).**
- **The shopping list.** A Don't buy row linked to a product stays on the shopping list, marked `On hand · not billed`,
  with the quantity the same row would get if it were bought. It gets none for the four waters' shape (615 g against a
  litre bottle).
- **The invoice line.** Update writes it as an on-hand line at the end of its product's category, so no line moves. It
  carries three things:
  - price 0;
  - the existing hide mark (`silent`), which every money path already reads;
  - `onHand: true` beside the hide mark, never in its place (`isOnHandRow`, `types.ts:2827`; `onHandLine`,
    `applyCalculation.ts:79`).
- **In the Builder, as `r82b` draws it:**
  - `--mark-dontbuy-fill`, `#FBF7EE`;
  - the quantity as text;
  - a muted `—`;
  - `On hand · not billed`, plus `· how much can’t be worked out` when the list couldn't count it.
- **Never billed or counted** in a total, tax, the footer's line count, the paper and its end rule, comps, groups, the
  record, History, the Estimate or templates. **Never printed.**
- **The review found no fault in the app.** It closed two holes in the checks, each a comment read as code:
  - `check-onhand` read `globals.css` with its comments in.
  - `check-rowref` stripped only a `//` comment that began its line.

**Money, the first rule.** No stored figure moves, and no completed invoice's figures either.
- Every batch held it. The build's own checks hold the comp's worked example and yours on every build, and §212, §217
  and §219 also compared their figures against the build before them:
  - 4 × gin at $24.99 + a $40.00 bag of ice, ice comped → $99.96 billed, $40.00 comped, $105.96 at 6%.
  - $1,395.75 at 6% → $83.74 tax, $1,479.49 on its paper.
- §219's proof, the last:
  - No invoice he has today holds an on-hand line.
  - 4,602 figures, papers and renders across 270 invoices (a seeded sample plus named shapes) match §218's byte for byte.
    The snapshot was written from §218's tree before any source changed. The review regenerated it from git and it was
    identical.
  - Adding 813 on-hand lines to the same 270 invoices changes no money figure, count, paper, record, group, Estimate or
    template.
  - Tampered lines fail safe. `onHand` written onto every billed line of 192 invoices changes nothing. A line that loses
    `onHand` still bills and prints nothing. One that loses the hide mark bills its price, which is 0.

**Fault injections:**

| Batch | Builder: red / controls green | Review: red / controls green |
|---|---|---|
| §211 | 48: 45 red, 3 comment controls green | 26 of them re-run and 1 of its own, each as reported; for its fix, 6 red, 2 comment controls green |
| §212 | 69 red, 1 green by design | 65 red, 2 green (the sentence only in a comment) |
| §213 | 46: 41 red, 5 controls green | all 46 re-run as reported; the two holes above, red, with comment controls green |
| §215 | 80: 76 red, 4 controls green | 65 of 67 re-run red, 2 controls green; 15 new, all red, 6 controls green |
| §217 | 67 red, 2 controls green | 54 red, 8 controls green, 2 mis-aimed and re-done |
| §219 | 68 red, 1 control green | 16 plain, all red. Of 6 with the right code quoted in a comment, 3 passed (the two holes) and all 6 go red after the fix |

### Glass — your Round 83: the lab is built, and Sean has parked glass

**Built (§211): `/style/glass`.** It is live since 12 Oct at 23:46 and needs no sign-in.
- **Four specimens, in your order,** each the real part on stand-ins in the app's own frame:
  1. the product card over the Library's list, scrolled;
  2. the ⋮ menu over an invoice;
  3. the press-and-hold panel with price history;
  4. `r83b`'s invoice with 120 lines, both bars sticky inside one scroller.
- **One switch,** `0.92 · 0.84 · 0.76`, with 0.92 as the default and nothing below 0.76. Every number you ruled is the
  lab's, read back as computed styles.
- **Nothing in the app changed.**
- **The review closed one hole and fixed one fault:**
  - Nothing held the lab to never writing the app's Light/Dark choice.
  - Below 1024 wide, three specimens opened scrolled.

**What Sean saw.** He tried the lab on his iPad and his iPhone at about 02:00 on 13 Oct. His screenshots are private.
- **Every pane and both invoice bars read as solid, at 0.92, 0.84 and 0.76.** Over a cream page with thin text, a
  24-px blur at 24% leaves almost nothing to see.
- A flash he saw on his iPhone was Safari's own frosted address bar, not the app's.
- He judged no speed; he parked glass first.

**His words, verbatim** (`WISHLIST.md`, `4933079`, 13 Oct, 02:08): *"I don’t need to read the items behind the glass, so
I don’t care if there’s a blur. I just want to actually see what the hell it would look like. Park it in the wishlist
for now. Design clearly wasn’t listening to what I wanted."*

**So glass is parked.** No pop-up and neither of the invoice's bars has it in the app: §2 #6 and §3 are not built there
(§3's bars are only in the lab's fourth specimen), and the lab stays live. **Nothing about
glass is asked while it is parked.**

**What the lab's builders recorded, for when it is unparked.** These are told, not asked:
- **"Sliding up" (§2 #5 item 1, and its fade) was not built.** No sheet in the app animates open. `Sheet.tsx` moves its box only
  while a phone drags its grip, and `grep -rn -- '--duration' src` finds only the lab's own note on this stop
  (`GlassLab.tsx:50–51`). The lab opens the card at once.
- **The footer's tint.** `r83b` tints the footer `--surface-alt`, but your §2 #1 says `--surface-rgb`. It is built to the
  ruling.
- **The edges.** `r83b`'s rule is drawn at 0.9 of `--border`, and `r83a`'s dark confirm border is `rgba(72, 64, 52,
  0.8)`, which is no token. Both are built at 70% of each part's own border.
- **Padding.** Sticky bars inside the scroller already hold their own height. So §3 #1's padding equal to the bars
  would double that space and move the lines at rest, which the same ruling forbids. The lab has no extra padding.
  The §211 review calls this two rulings that disagree, to settle before the bars are built.
- **The footer's height.** At 1200 upright with a comp clause, the footer is 103.5 tall, not 84.
- **Muted money.** The footer's money line is `--text-muted` today, and your §2 #2 says money is never muted.
- **Red money in dark.** The panel's `Remove line −$61.98` is `--danger`. Rendered in dark at 0.76 at 390 it measures
  4.53:1. By arithmetic over the pressed green it is 2.81:1.
- **The product card.** Its figures sit on solid inner sections, so the glass barely shows there.
- **The old cent.** `r83b`'s drawn $1,479.49 is the old cent; a draft reads $1,479.50 today.
- **The phone drawer's header** is not on the switch.

### 1 · ⛔ The stops — six, each a question

Each stop names the ruling it rests on and what was checked: the frame and its lines, or the files.

1. ⛔ **The trash row's line two** (Round 81 §1 #2 (a)).
   - **What the ruling says:** `Trashed Oct 9 · Another copy is in History`, *"in place of the days left"*.
   - **What the frame draws:** `r81a` line 215 draws that line, and line 214 draws the ordinary row as `Trashed Oct 3 ·
     27 days left`.
   - **What the code does:** no trash row in the app has that line.
     - History's row shows the event's date, guests and lines there (measured: `Oct 18 · 120 guests · 1 line`).
     - A library row shows its own summary.
     - No row shows the day it was trashed, and `trashedAt` can be missing.
     - The days left are a chip beside the name, on the three library rows only, never on an invoice. No chip shows
       while the purge is off (`AUTO_DELETE_LIVE_FROM` null, `trash.ts:83`).
   - **What is built:** everything else in the guard. `check-trash` holds `Another copy is in …` absent.
   - ❓ **Where do the words go?** On History's row, as a third line, or in place of what? On a library row, beside the
     chip or instead of it?
2. ⛔ **Widens' held categories** (Round 81 §2 #11).
   - **What the ruling says:** a held category gets `No longer follows guests`.
   - **What the frame draws:** no frame draws a hint on one chip. `r80b` (`Round 80 - the word pair.dc.html`) draws the
     label at line 91, the chips, and one hint under them at line 102. `grep -l 'No longer follows guests'` across
     `docs/design/` finds `ROUND-81.md` only, in no drawing.
   - **The conflict:** that hint is your ruled `Only the categories that follow guests. Change those above.`
     (`WIDENS_HINT`, `estimateWords.ts:134`), and it would be untrue beside a held chip.
   - **What is built:** none of #11. Today's reading stands: held categories are kept on Save and not offered.
   - ❓ **Where does a held chip's hint sit, and what does the group's hint say when one shows?**
3. ⛔ **The product card's past-the-cent line** (Round 81 §2 #41, its second half).
   - **What the ruling says:** `Priced past the cent: $0.125. Retype it to whole cents.` in `--warning`.
   - **What the code and the frames have:** the card has never drawn a warning line (`grep -c warning` on
     `ProductCard.tsx` and `ProductCardSheet.tsx`: 0 and 0; only the editor, `ProductEditor.tsx`, draws one). No
     drawing in `docs/design/` holds the words (`grep -c 'Priced past the cent' *.html`: 0 in every file).
   - **What is built:** the Price box half.
   - ❓ **Under `Price`, in the Cost group? At 13 or at 15? With a glyph or without?**
4. ⛔ **The panel's subtitle** (`r82a`).
   - **What the frame draws:** lines 152–153 draw a line under the title, `3 oz · Veuve Clicquot Brut, 750 ml` and
     `40 g · Rose hip tea, loose, 100 g`.
   - **What the ruling says:** `ROUND-82.md` names no such line (`grep -ci 'veuve\|subtitle\|under the title'`: 0).
     The frame draws only a row linked to a product that has a size.
   - **What is built:** the panel shows its title alone, as before.
   - ❓ **Is it ruled?** If so, what does it read for an unlinked row, a prep row, a product with no size and a broken
     link?
5. ⛔ **The heading over one drink** (`r82c` line 191, the Whiskey Sour card).
   - **What the frame draws:** the group headed `One drink`.
   - **What the ruling says:** #4 names only the Separate block's heading for one drink, `Separate`; `one drink` appears
     in `ROUND-82.md` only in the drinks formula (line 71).
   - **The conflict:** Sean struck that word from this card on 18 Sep, as he typed it: *"One the Cocktail Cards I don't
     like '1 Drink' – call it 'Base'."* (our Round 50, `REQUESTS-ARCHIVE.md:4457`). Two rulings disagree.
   - **What is built:** the group keeps `Ingredients` (`RecipeCard.tsx:879`; the stop is written at `:868–875`).
   - ❓ **`One drink`, `Base`, or `Ingredients`?**
6. ⛔ **The printout's drink count with two or more batch columns** (`r82c` lines 196–198).
   - **What the frame draws:** a printout with one batch and no `Per drink`. The bottle's table is headed `In the bottle
     · 750 ml · 12–13 drinks` over `Amount`, and the Separate row reads `Champagne · about 1½ bottles for 12–13 drinks`.
   - **What the code allows:** the sheet carries `Per drink` plus up to four batches, each its own bottle with its own
     drinks.
   - **What is built:**
     - The bottle's table keeps today's header and `Yields` row on every sheet.
     - The `about …` clause prints only with exactly one batch column (`RecipeSheet.tsx:120`; the stop is written at
       `:65–74`). The default export, `Per drink` + 750, is that case.
     - The Separate block itself is built on every sheet: `Separate · each drink` / `Separate`, `Each glass`.
   - **The review's note:** this also leaves `r82c`'s own one-column sheet without its `In the bottle · 750 ml · 12–13
     drinks` head. One answer unblocks both.
   - ❓ **With two or more batch columns, and with `Per drink`, where does each batch's drink count go, and the bottles
     on a Separate row?**

And one call, not a stop:

7. ❓ **The on-hand line's unit** (`r82b` line 179).
   - **What the frame draws:** `Water, Filtered · On hand · not billed · 2 L · —`.
   - **What the code does:** a Builder quantity is a bare number, and its unit sits on line two. On an on-hand line,
     line two holds the on-hand words, so the row reads `2`.
   - ❓ **Should the cell carry a unit? If so, the list's word (`2 bottles`) or the product's?**

### 2 · Readings

`(ours)` marks a string or a placement no ruling or frame gives; each is the plainest form, built and listed here.
❓ marks a reading that wants your call. The rest are told.

**Round 81, §212**

1. `(ours)` **Incomplete versus refused.**
   - A text on its way to whole groups (`1,`, `1,7`, `12,99`) shows no line while he is in the box, and is refused when
     he leaves.
   - A text that can never be whole (`1,7000`) shows the line at once.
   - The tax sheet and Settings' rate show the line as he types, because no rate under 100 has a whole group.
2. `(ours)` **The figure in `Did you mean X?`**
   - The last comma becomes the point and any others stay: `1,234,56` → `1,234.56`.
   - A point at the end drops: `12,` → `12`.
   - A text that already has a point gets the second sentence alone.
   - A doubled comma gives a figure that is not a number: `1,,000` → `Did you mean 1,.000? …`. Indian grouping does
     the same: `1,00,000` → `Did you mean 1,00.000? …`.
3. `(ours)` **A refused text stays in the box, and the figure from before the edit is written back.** Typing `12,99`
   had already written $1 and $12 on the way. An Estimate guest box that had no count keeps the count from his first
   digits, because it has no way to write "none".
4. `(ours)` **Where the line sits:**
   - under the box, for a form field;
   - full width under a grid of boxes;
   - in an ingredient row, under the name from 640 up and under the row below 640 (reading 27);
   - in a band of its own on the calculator's settings;
   - for the Estimate's boxes, where their own refusals already sit. The Estimate money box's line is 327 wide and
     starts 129.67 left of the low box.
5. `(ours)` **Settings' Save greys while any box is refused.** The page has one Save, and it would otherwise say
   `Saved` over a rate it didn't save. A default already stored at 100 or more shows the line when the page opens, and
   nothing is written until he changes it.
6. `(ours)` **Event details' guest box draws no line, because its text is his words.**
   - A refused text stores no count. `80,100` is a whole group and stores 80,100, as ruled.
   - A count typed on a device whose decimal is a comma is no count here.
   - A batch box's line names the number without its unit: `1,5 L` → `Did you mean 1.5? …`.
7. ❓ **`0,125`, `0,750`, `00,125` and `01,000` pass, because the first group may start with 0.** So `0,125` typed in
   the Price box is $125.00, as before §212. Should a first group that starts with 0 be refused?
8. `(ours)` **#21's details:**
   - The kept paper's date is the auto-archive clock (`completedAt`, otherwise `savedAt`), shown in the existing
     `Replaces the numbers recorded on …`.
   - The "first edit" is any write through `updateDraft`, including a date typed on a draft. A packing tick, the
     Estimate, a stage move, or Export filling a blank date are not.
   - Undo back past the first edit reads the paper again.
   - The kept comp is the one-cent figure it showed.
   - An older build on his other device that changes a line makes the paper stop matching.
9. **#21, as ruled, told.** An unedited reopened invoice with no record, completed again, records today's cent. Your
   example then reads $1,479.50 in History and on a reprint, against the $1,479.49 the client holds. The gate's
   `Was $1,479.49 total` is the only notice.
10. **#22:** each member's `3 × $1.00` reads the unit figure, as the row does.
11. **#24, #37, #38, #54 and #60:**
    - `(ours)` #24 with none: `at least 0`.
    - #37: `won’t` is curly, as yours is; §203's was straight.
    - `(ours)` #38: cut, not rounded, so `$7.57695` reads `$7.5769…`.
    - #54: when only the comp moved from zero, the line reads `Was no comp`.
    - #60: the Subtotal's `To be confirmed` is italic too, at regular weight.
12. **#41's Price box:** tapping in and out writes nothing; retyping snaps half up.

**Round 81, §213**

13. **Sizes.**
    - `Delete…` measures 86.03 wide (17px Spectral 600 with `r81a`'s 12 sides), not "about 70". Restore measures
      86.38.
    - Both are 44 tall and sit inside the list at 1600, 1200 and 390, light and dark, with no sideways scroll.
    - `--danger` on `--surface` is 7.52:1 light and 4.59:1 dark.
14. ❓ **The confirm's buttons.** The confirm is the shared `ConfirmDialog`: `Delete` outlined on the left, `Cancel`
    filled on the right, with focus on Cancel. `r81a` draws Cancel outlined on the left and Delete filled red on the
    right. The part's own rule (the safe answer names what survives) gave way to your word `Cancel`, but not to your
    layout. Which layout?
15. **`Open it`** is the footer's outlined button, 86.28 × 48, where `r81a` draws 44.
16. `(ours)` **Words on a guarded copy:**
    - The card's deleted note drops `Restore it to open or edit it.` and reads `Deleted. Kept until you empty the
      trash.` A reopened invoice's reads `Deleted, and kept until you empty the trash. The figures are the ones recorded
      at Complete on …`.
    - The libraries' sentences put the list's name in History's place: `The copy in Cocktails stays as it is. …`, `The
      one in Prep is the one you work on.`
    - `Delete…`'s spoken name is `Delete this copy of <name>`.
17. **The foot says `older copy`, as `r81a` writes it,** though (e) guards whichever copy was saved later.
18. ❓ **Two edges of the guard:**
    - `Delete…` deletes by id, as Empty trash does. If his other device trashes the live copy before this one syncs,
      `Delete…` here takes that newer copy, which is by then the only one (sync's last write wins).
    - On a device with nothing cached, the trash can load before the live list, so Restore shows on a copy that is about
      to be guarded until the list arrives. His iPad reads both from its cache.
19. **Faults found while building, fixed:** see §0 c.
20. **Your Round 82 §2 #2 says the controls keep "the app's `--accent` focus", but no button in the app has an
    `--accent` focus.**
    - Fields draw an `--accent` border on `:focus`; buttons draw the browser's own ring. Both are unchanged.
    - Measured: without `outline-none`, Chrome draws `auto rgb(0, 95, 204)` light / `rgb(153, 200, 255)` dark round the
      focused sheet. With it, none.
    - The first control after Tab keeps its ring.
    - Safari was not measured.
21. **The dropped space (your §3 #2) is Next 16.2.12's compiler (SWC).**
    - It drops the first space of JSX text that starts with a space, runs over more than one line and holds an HTML
      entity. This happens after a tag or after an expression: `{n} guests &mdash;` became `12guests`.
    - There were ten places, all on developer or lab pages, none on an app screen or paper.
    - The review compiled all 946 non-blank texts in `src` both ways: 10 differ before §213 and 0 after.
22. **#3, #4, #17, #46 and #62:** already as you ruled them; recorded in comments only; nothing moved.

**Your Round 81 §1 #5 — the third rule, swept as you asked.** Strands and totals-alone sheets are counted together,
today's rule against the third rule:

| Paper | Today | With the third rule | Positions | Positions it changes | Sheets, both ways |
|---|---|---|---|---|---|
| № 14, Letter | 24 + 0 | 24 + 0 | 241 | 29 | 615 |
| № 14, 4 × 8 in | 26 + 0 | 26 + 0 | 181 | 34 | 715 |
| `#eleven`, 4 × 8 in | 15 + 0 | 15 + 0 | 181 | 74 | 444 |
| `#eleven`, Letter | 0 + 0 | 0 + 0 | 241 | 74 | 510 |

- The rule moves rows by carrying one more onto the totals' sheet, but no strand clears.
- It is not lower anywhere, so **today's rule stands**, as you said. `check-end` asserts the third rule is absent.
- The review re-swept with its own driver and classifier and got the same counts. That is 1,688 prints in all.

**Round 82, §215**

23. ❓ **Don't buy's dark colour.** Your #1 table gives `#C9A25E`, but your prose and `r82a`'s caption say it aliases
    `--gold-text`, which is `#D9AE68` in dark. It is built as the alias, at 8.68 / 8.14; `#C9A25E` would be 7.50 /
    7.03. Both pass. Which?
24. **The mark rows sit in the old row's slot:** first, above Move up and Move down, with Remove ingredient last
    (§5.2). `r82a` draws them under `… the panel's other rows, as built`; a recipe row's panel has no rows above them.
25. **Spacing and behaviour of the panel rows.**
    - `r82a`'s 14 between glyph, words and switch is built as the panel rows' 12, as `r74c`'s was (§157).
    - `(ours)` A flip keeps the panel open, because a switch shows its new state and any combination may be on.
    - The rows are `menuitemcheckbox`, as items of the panel's menu.
26. **The panel is taller.**
    - A cocktail row's panel goes from 262.3 to 460 at 1600 × 1068 (the mark rows are 83.3 each), and is 499 at 390.
    - A prep row's is 376.8, and 415.8 at 390.
    - It is whole on screen and centred to 0.0 at every size measured.
27. `(ours)` **Below 640 the editors' ingredient name box is 0 wide.** This was already true before §215: a name can't
    be seen in an editor on a phone. It is a fault of ours and is not fixed here. So below 640 the mark line sits under
    the row, as the comma line does; from 640 up it sits under the name.
28. **The joining `·`** rides at the end of the words before it, behind a no-break space (about 4), not `r82b`'s 6 gap.
    That way no line opens with `·` (Round 75 §3 #7).
29. **The strike.** The struck amount keeps `--text` with §28.4's `--text-muted` line, as the ruling cites; `r82b`
    draws the struck text muted too. The prep card now strikes a Don't buy amount, base and target; it never did
    before.
30. **The unlinked Don't buy sentence** needs 455 wide. It is whole in the real 672 card at 1600 and 1200, and cut at
    390 (281 shown), as any one-span line is cut (§146). `Don’t buy` uses the curly apostrophe, as `r82a` draws it.
31. ❓ **The word pair's switch, when off.** Its `--surface-recessed` track reads 1.36:1 against the panel in light and
    1.08:1 in dark, so in dark only the knob shows. It is `r68e`'s switch as Settings draws it; `r82a` draws its own off
    track, `#E6E1D9` on `#FDFCFA`. Not changed.
32. `(ours)` **The count page's new words.** `/debug/dont-order` now reads `Don’t buy — how you use the mark`, `Every
    ingredient marked “Don’t buy”…` and `Marked “Don’t buy”`.
33. **`design-tokens.json`, here in `limbo-design`, lists no `--mark-strained`,** so `check-tokens` prints its non-fatal
    drift line. The file is your mirror; it was not touched.

**Round 82, §217**

34. `(ours)` **Words the ruling implies:**
    - `1 drink`, singular.
    - A whole figure reads `12`, not `12–12`.
    - A figure below one reads `0–1`.
35. `(ours)` **A linked product whose size can't take the row's unit reads the total,** as no size does. For example,
    1.5 oz of Sprite against a pack counted in cans: `About 19 oz for 12–13 drinks`.
36. `(ours)` **Rounding the total, and rows with no amount.**
    - The no-size total rounds to the nearest whole for a measure (12.68 × 3 = 38.04 → 38, as your #4 has it) and up to
      the whole for a counted unit.
    - A Separate row with no amount has no line two.
    - On a batch such a row reads `—` alone (the review's fix). It used to read `— a glass`, which on a bar card reads as
      "a dash a glass".
37. ❓ `(ours)` **A unit-less row against a counted product.** A Separate row with no unit, linked to a product counted
    each (`r82c` draws the egg as `1`), reads `About 13 for 12–13 drinks`, with no noun. An unknown unit reads `About 13
    top for 12–13 drinks`. The shopping list calls the first a unit clash. Left as built.
38. **Bottles and rounding.**
    - A product sold by volume or weight rounds up to the half; one counted in units (`each`, a carton of 12) rounds up
      to the whole.
    - The package word is the shopping list's own.
    - Line two works from the exact drinks, 12.68. From the one-decimal 12.7 the champagne would round up to 2; from
      12.68 it is exactly 1½, your figure.
    - Every round-up allows a margin of 0.001%, set by the review: the unit registry's quart is 0.0001% off 32 of its
      ounces, so a quart of a 2 oz drink read `16–17 drinks`.
39. **The Base column stays.** `r82c` draws the bottle's rows with one amount column. The Base column stays (Round 48
    option C), because #4 rules the heading, not the columns (`RecipeCard.tsx:873–875`).
40. **Spacing.** The rule, the heading and the first row sit 12 apart, the group's own rhythm (`check-spacing` lets no
    part own edge space). `r82c` draws 16 under the rule.
41. **What sits under the name.** Line two (`About …`) sits directly under the name; another mark's words, or the
    product's own line, follow it. `r82c` draws no row with more. Rows in the block drop their own `Separate · each
    drink`, because the heading says it; `r82b` draws the row with those words outside the block.
42. **Strikes and units in the block.**
    - Separate + Don't buy strikes only the amount (`4 oz`), not `a glass` (§28.4).
    - `(ours)` A counted unit reads `1 each a glass` on a batch; `r82c` draws the egg only on one drink.
    - `(ours)` The one-drink printout heads its column `Each glass` too.
43. **The card says 187.5 ml; the printout prints whole millilitres, 187,** as it always has, where `r82c`'s printout
    draws `187.5 ml` (frame line 196).
44. **No cocktail cost per drink exists.** `git grep -nE 'costPerDrink|drinkCost|cocktailCost|perServing' src` finds
    nothing, so #5's cost column has nothing to act on for a cocktail. Sean's *"A topper should count in the drink's
    cost"* (his 13 Oct words, as your §0 relays them) holds wherever one is built.
45. **Parts #5 doesn't name:**
    - The card's strength line (before dilution) still counts a Strained row's volume.
    - The printout's Service line still lists a counted Separate row (the egg white) as garnish too.
    - The printout's footnote, `Volumes are the spirit and modifiers; anything dashed goes on top.`, sits under the
      Separate block and doesn't mention it.
46. **By your #5, ice marked Don't buy where Strained was meant now counts in a by-weight syrup and buys less sugar.**
    Marked Strained, the order holds exactly.
47. **A recipe whose only measured rows are Separate** draws the block's rule at the top of the group, with nothing
    above it. No frame draws this: `r82c` draws the French 75 and the Whiskey Sour only, each with mixed rows above the
    block (lines 189 and 191).
48. **The 1.5 rule computes 1px** in headless Chrome at screen scales 1, 2 and 3; an inline `1.5px` border does the
    same. His iPad may draw 1.5; Safari can't be measured here.

**Round 82, §219**

49. `(ours)` **The shopping list's on-hand row** reuses the Builder's line two: the glyph and `On hand · not billed`
    under the name, with no fill. No frame draws the list's row: `r82b` draws the editors' and cards' rows and the
    Builder's (lines 163–179), not the shopping list. Its uncounted row reads `New —` with its reason
    sentence, and has no `· how much can’t be worked out`.
50. `(ours)` **The dark fill, `#1F1A10`,** mirrors the light fill's step off `--surface` in OKLab. It measures 1.033:1
    against dark `--surface`; the light `#FBF7EE` measures 1.043:1.
51. `(ours)` **The quantity is text, never a stepper,** and Update sets it. It is blank, never 0, when uncounted. Its
    figure sits under the steppers' figures, measured at the same x: 1301 at 1600, 1025 at 1200 and 231 at 390.
52. `(ours)` **Don't buy rows that stay off the list:** rows that are unlinked, point at a deleted product, or pour a
    prep. They have no category to sit in, and a Don't buy syrup isn't its sugar on hand.
53. `(ours)` **Templates.** A template never records an on-hand line, and applying or filling one drops any it holds. A
    Duplicate carries them, as it carries the hide mark.
54. `(ours)` **An invoice holding only on-hand lines:**
    - the footer reads `No lines`, $0.00;
    - the Estimate's door reads `Add lines first`;
    - the group door reads `No lines yet`;
    - no template-fill door shows, because the sheet isn't empty.

    An empty category that receives an on-hand line drops out of the record and History, which had listed it as
    `0 lines · $0.00`; the paper never printed it.
55. `(ours)` **While choosing lines for a group,** an on-hand line reads `On hand · can’t be grouped`, by `r74g`'s
    grammar.
56. **Packing, Leftovers and the Estimate.**
    - Packing counts on-hand lines in `N of M packed`.
    - Their procurement chip can read `On hand` beside `On hand · not billed`.
    - Leftovers lists them as `N bought`. A product both billed and on hand is one row there, `2 invoice lines · counted
      together`, with the two quantities added. The Estimate's reading of past events weighs that row by its billed part
      only.
    - If a product already sits on the invoice as a line he hid himself, Update adds an on-hand line beside it.
57. **Update and the list after it.**
    - `Update N lines` counts the on-hand lines it writes.
    - A Don't buy row with a floor (`at least …`) is written blank.
    - Opened again after Update, the list blocks the blank on-hand rows and its foot counts them: `7 stay as it is · 3
      use two units that can't be added`. On his data the four waters will add `4 use two units…` each time. Words
      only.
58. **Wrapping.** At 1200 upright the uncounted line two wraps with `out` alone on its second line. At 390 it takes
    three lines, four in packing. `(ours)` When it wraps, the glyph stays level with the first line. No frame draws a
    wrapped line: `r82b`'s one on-hand row (line 179) reads `On hand · not billed` on one line.
59. **The tick.** Ticking a drink no longer puts its Don't buy rows on the bill at 1. It did before, which broke "never
    billed". A draft where the Orange Crush was ticked before keeps a billed Sprite at 1, and unticking no longer takes
    it.
60. ⚠️ **Now visible on his data — ours to fix, not yours.** The Simple Syrup 1:1 water's on-hand row says *"The Whiskey
    Sour asks for 0.75 g and this is sold in L. Say how much each one holds…"*. It pairs the cocktail's pour with the
    prep's unit, and gives a count remedy for a weight against a volume. The fault is old (bought rows have it too);
    Don't buy kept it hidden.
61. ⚠️ **His other device, until it reloads, bills less on an invoice holding on-hand lines.**
    - Run with the live build's own code, its Update wrote the 185 cans being bought onto the price-0 on-hand line:
      $231.25 of tonic unbilled.
    - Its tick and its rail `+` land on that line too (read from its code, not run).
    - It also counts on-hand lines in the footer and labels them Hidden.
    - Sean is told to reload every device after this ship, before he edits (`IPAD-CHECKS.md`, 16 Oct).
62. **Words left unchanged:** the picker's `Buy separately` foot still lists an unlinked Don't buy row, and its `To make`
    list still names a Don't buy syrup.

**Contrast, measured** (headless Chrome, rendered, on `--surface` / `--surface-alt` unless named):

| What | Light | Dark |
|---|---|---|
| Separate, `--mark-separate` | 9.50 / 8.94 | 6.75 / 6.33 |
| Don't buy, `--mark-dontbuy` (the alias) | 6.88 / 6.48 | 8.68 / 8.14 |
| Strained, `--mark-strained` | 7.96 / 7.49 | 7.83 / 7.34 |
| The Separate block's head, on the card | 9.50 | 6.75 |
| Its full rule, in `--text` | 17.46 | 15.43 |
| `12–13 drinks`, `--text-secondary` | 9.16 | 11.02 |
| Line two, `About 1½ bottles for 12–13 drinks` | 9.72 | 11.76 |
| The on-hand fill against `--surface` | 1.043 | 1.033 |
| `On hand · not billed`, on the fill | 6.59 (`#75521A`) | 8.41 (`#D9AE68`) |
| The on-hand line's name, on the fill | 16.74 | 14.95 |
| Its `—`, on the fill | 6.49 (`#5F594E`) | 6.53 (`#A79E8D`) |
| `--danger`: `Delete…` and the comma line | 7.52 | 4.59 |
| The switch's off track, against the panel | 1.36 | 1.08 |

### 3 · What his iPad said, and what is still open

All of these were done from his iPad through a cloud session on 14 Oct (`limbo-app` `4ea8148`, `bdd426f`;
`IPAD-CHECKS.md`). Counts only.
- **19.1, the count page's drafts, read as one PDF from Safari:**
  - 17 live drafts: 15 Draft, 1 Ready to Send, 1 Ready to Order.
  - **1 · A line past the cent:** total on screen would change 0; net +$0.00; largest $0.00.
  - **2 · Tax of exactly half a cent:** a cent more on the paper 0; on screen 0; a line of exactly half a cent 0.
  - The grey box: *"Every move is a rule's: 0 drafts for a line past the cent and 0 moves up a cent for a half cent, of
    17 drafts; none moves more than the rules can explain."*
- **21.2, from the same PDF:**
  - Completed read 2, With a record 0, and whose History total moved on 11 Oct 0.
  - *Paper a cent more* appears nowhere.
  - Completed before Sep 15: at least 2. With a record still to fill 0.
  - Live subtotal differs from its record 0.
  - History would change: a line past the cent 0, a half cent 0.
  - Reopened, shown from their record 0, and a cent more 0.
  - Moves the rules do not explain 0.
  - No red box and no names.
- **3.5 — no.** His Magic Keyboard has no F10 and no function row: *"How can I do F10 on the apple magic keyboard?
  There's no dedicated function keys."* So Shift+F10 is no route into the press-and-hold panel, and neither is the Menu
  key. ❓ If the panel gets a keyboard route, it needs a key his keyboard has. Does it get one?
- **22.7 — done:** *"Done. It works."* This is the editors' centred panel, on the live site. He didn't say whether he
  also tried steps 4–5 (the bottom of a long recipe, and a prep).

**Still open on his iPad:**
- **22.1–22.5** are in progress; he was part-way through 22.1 on 15 Oct.
- **Session 23 is new** and goes up with this round:
  - 23.1: a deleted copy of an invoice he still has.
  - 23.2: `12,99` in a price box.
  - Then your §1 #6 and *"What I need back"* #2:
    - 23.3: the Sprite moved by his own hand, done first;
    - 23.4: a batched French 75;
    - 23.5: a Whiskey Sour with egg white;
    - 23.6: a Don't buy water on a real draft, on hand, and not on its PDF.
- **No glass check:** glass is parked.
- Every screen measurement in this round is Chrome's. Nothing was printed on an iPad.

## What I need back

1. ⛔ **§1's six stops**, each a question:
   1. the trash row's line two;
   2. Widens' held categories;
   3. the product card's line;
   4. the panel's subtitle;
   5. the one-drink heading;
   6. the printout's drink count.

   None of them moves money as built.
2. ❓ **§1 #7**, the on-hand line's unit.
3. ❓ **§2's calls:** 7, 14, 18, 23, 31 and 37, and §3's keyboard route. The rest are told.
4. **Glass:** nothing, while Sean has it parked.
5. **His Session 23 results** come back in a later round.

---

## 🔴 ROUND 83 — Sean wants glass on everything that opens over the app, and on the invoice's header and footer bars — ❓ please draw it, or put it on the look lab's switch first; nothing is built. A correction first: his look-lab pick "Bare" is the blur ON, and the one place it is live today has nothing moving behind it. And the split you asked for is done


**implementation → Design, 12 Oct 2026. Branch `main`, app at `a4544b0`** — the code is `1bf91a7`'s (§209 · review),
unchanged since: `git diff --stat 1bf91a7 a4544b0 -- src scripts package.json` is empty. After §210 came notes only:
`a7fb009` (`CLAUDE.md`, the split) and `4533923`, `a4544b0` (`WISHLIST.md`, Sean's two asks in §2 and §3). GitHub reads
`a7fb009` (`git ls-remote`, 12 Oct, 21:02); `4533923` and `a4544b0` go up with this round. **Every `file:line` below is at
`a4544b0`**; under `src/` they are the same at `1bf91a7`.

**The code is LIVE, read back by curl, no browser:** at 20:58 the live `/style/panelcheck` answers 200 with its heading on
build `537ayQEoB6ro_4-42seob`, the build since 19:17:07; the live look lab, `/style/look`, answers 200 (20:59).

**Rounds 81 and 82, just below, are still open (rows AW, AX).** Sean was handed a paste for them at `0f4c0d0`; whether it
has reached you isn't known here. Nothing in this round changes either.

**How it was measured.** Headless Chrome with its own throwaway profile, against a dev server on this Mac, on `/style` lab
pages only — no sign-in, none of his data; both stopped afterwards. Sizes are CSS px at 1600 × 1068 and 390 × 844, light
and dark. Chrome, not Safari; no iPad. A `HANDOFF.md:NNNN` or `ROUND-28.md:NNNN` is your file as it came in your Round 81
handoff.

### 0 · The split, as you asked — nothing to answer

- **Before:** `REQUESTS.md` at `bd0d234` was 1,065,812 bytes, 14,898 lines.
- **After (`0f4c0d0`):** `REQUESTS.md` keeps the header, the open index, the DELIVERED table and Rounds 76–82 — 301,895
  bytes, 2,877 lines, ending with a pointer to the archive. With this round it is 323,093 bytes (`wc -c`), under your
  500 KB.
- **The archive:** `REQUESTS-ARCHIVE.md`, Rounds 75 and earlier — 765,366 bytes at `0f4c0d0` (765,496 with this round:
  its header's note on line numbers is longer): a ten-line header, then `bd0d234`'s lines 2875–14898, byte for byte (the
  two runs hash the same, `shasum`, re-checked with this round). `README.md:24` lists it in the read order.
- **Line numbers.** At the split, lines 1–2874 kept their numbers (`bd0d234`'s lines 4–2874 and `0f4c0d0`'s hash the
  same; line 3, the header line, changed). An old `REQUESTS.md:NNNN` above 2874 is line NNNN − 2864 in the archive.
  ⚠️ **This round moves them:** row AY and this round go in above Round 82, so from line 113 down the live file's lines
  shift. A `REQUESTS.md:NNNN` is read at the commit it was written at — an old one at `bd0d234`, which GitHub keeps. Both
  files' notes now say so.
- **From now on** each round checks the size after it is written; one that would take the file past 500 KB moves the
  oldest rounds to the archive the same way.

### 1 · A correction: "Bare" is the blur ON

Sean relayed your answer from your chat — it is in no file we can read: that you read his look-lab pick "Bare" as no
blur, and that the app's code would settle it. It does: **"Bare" is the glass at full strength — your §42.1 recipe.**

- The lab's four blur modes are `off | bare | plate | graded` (`LookLab.tsx:74`). Only `off` is solid — its note: *"The
  bar is opaque"* (`:81`). `bare`, `plate` and `graded` all count as glass (`:582`), and glass is `blur(24px)
  saturate(1.15)` on `rgba(var(--surface-rgb), 0.92)` (`:68–72`, applied at `:624`). On screen the lab names it *"Blur ·
  Bare"* (`:763`), with Bare's note: *"The violation as asked for. 0.92 alpha, 24px blur, saturate 1.15 — the row
  underneath stops being a row."* (`:88–89`).
- **The pick** is recorded by the commit that built it, `6509002` (12 Sep): *"Sean picked from the Look Lab on the
  device"* … *"THE BLUR — bare, on the drawer header, with the total on it"*. In the app that is `chrome-translucent-num`
  (`globals.css:1527–1531`), with its solid fallback where the filter isn't supported (`:1539–1544`).

**Where glass is live today** — two call sites (grep `chrome-translucent` over `src`, outside `/style` and `/debug`):

| Where | Recipe | Shown | What moves behind it (measured) |
|---|---|---|---|
| The Library's selection bar (your "mode bar") | §39.2's: 0.82, `blur(14px)` — `chrome-translucent`, `SelectionBar.tsx:121` | every width | **rows** — 3 behind it at scroll 600 (`/style/footcheck#library`, 1600 and 390) |
| The top of the products drawer | **Bare's**: 0.92, `blur(24px) saturate(1.15)` — `chrome-translucent-num`, `SourceDrawer.tsx:258` | **below 600 only**: it is in the phone branch that opens at `:240`; the 600–1023 header (`:404–406`) is solid | **nothing.** It sits inside the drawer's own solid panel (`:238`, `bg-surface-alt`) — measured at 390: the panel 390 × 440 at y 342, `rgb(247, 245, 241)`, opaque (dark: `rgb(33, 29, 24)`); the header 390 × 77 at y 343, inside it. The list is the panel's next child, below the header, clipped (`:441`) |

⚠️ **So the one place Bare is live frosts the drawer's own flat fill** — what §39.2 called *"blurring a flat fill — which is
a no-op"* (`HANDOFF.md:1318`). The look lab's specimen is the opposite: its bar is sticky inside the scrolling list, so
rows pass under it (`LookLab.tsx:621–628`). `(ours — from the measured colours; not looked at on his phone)` On the drawer
it shows as 92% `--surface` over `--surface-alt`: a flat strip a shade lighter than the panel. **Bare frosts rows only in
the look lab.**

**The count.** `check-material` allows at most 2 call sites of the plain recipe and 1 of Bare's
(`scripts/check-material.mjs:198–217`), and fails the build on a blur typed by hand (`:147–157`). Run at `a4544b0`:
*"plain translucency at 1 of 2 allowed call sites"*, *"the figure exception at 1 of 1 allowed call site"*. So **a second
use of Bare's recipe fails the build today, and so would a third of the plain one, as you asked**: *"A rule that is now an
exception should still be a rule with a number attached."* (`ROUND-28.md:641–642`). The check counts class names, not
figures: a figure on a second plain-recipe surface would pass it (1 → 2 of 2). *(The check's own failure line, "A second is a new decision, not a
detail" (`:214`), is ours, not yours.)*

### 2 · ❓ Glass on everything that opens over the app

**Sean, 12 Oct** (recorded in `WISHLIST.md` at 20:35, `4533923`): *"Okay. Well I also want glass on any
cards/boxes/menus/etc. that pop up over other things in the app."*

**What opens over the app today — all of it solid but the drawer's header on a phone (§1, row 19).** Fills, measured in both themes: `bg-surface` `#FDFCFA` light /
`#1A1712` dark; `bg-surface-alt` `#F7F5F1` / `#211D18`; `bg-accent` `#2C4A3E` / `#7FA894`. Every scrim is black, at the
same strength in both themes. **💲 = carries money.**

| # | What Sean sees | Part · `file:line` | Behind it | Fill today | Figures | 1600 × 1068 · 390 × 844 |
|---|---|---|---|---|---|---|
| 1 | **Every sheet** | `Sheet`: scrim `Sheet.tsx:277`, box `:336`. 21 call sites in 17 files | the whole window; black **0.40**, z-60 | `bg-surface`, `shadow-modal` | 💲 the Estimate (`EstimateSheet.tsx:189`); Fill from a template (`FillTemplateSheet.tsx:200`); History's invoice card (`InvoiceCard.tsx:295`); the product card and editor (`ProductCardSheet.tsx:74`, `ProductEditor.tsx:219`); the cocktail and prep cards (`RecipeEditor.tsx:299`, `:370`; `PrepEditor.tsx:875`, `:955`; `CocktailPicker.tsx:658`). Counts or numbers, no money: the save window, export size, calculator, tax rate (a %), leftovers, event details. Words only: word pair, group editor | from 1024 up, centred, 672 wide — 512 when `narrow` (the save window, word pair, event details, group editor, save as template); below 1024, full width from the foot, up to 92dvh tall. The Estimate: 672 × 755 · 390 × 776 |
| 2 | Save as template, over History's card | `SaveTemplateSheet.tsx:255` | **two scrims**, 0.40 over 0.40 | as 1 | a count | 512 × 285 · 390 × 320 |
| 3 | Filter and sort — the 3 libraries and History | `FilterSheet.tsx:174–192`, built by hand; used 4× | black **0.25**, z-50 | `bg-surface` | counts | 512 × 854 · 390 × 675 |
| 4 | Start from (the `+` sheet) | `StartFromSheet.tsx:170–181`, by hand | **0.25**, z-50; pinned to the top | `bg-surface` | 💲 subtotals (`:268`, `:310`) | 512 × 606 · 358 × 606 |
| 5 | Open invoices (⌄, or the phone's tab control) | `OpenInvoicesSheet.tsx:112–120`, by hand | **0.25**, z-50; at the foot, every width | `bg-surface` | 💲 each tab's total | 512 × 274 · 390 × 274 |
| 6 | The Send and Complete gates | `GateDialog.tsx:118–130` | **0.35**, z-50 | `bg-surface`; money rows `bg-warning-bg` | 💲 the findings, was and now | 520 × 244 (368 with two findings) · 390 × 265 (392) |
| 7 | Every confirm | `ConfirmDialog.tsx:80`, `:102`. 14 call sites in 10 files | **0.50**, z-80 — the top layer | `bg-surface` | counts in titles (*"Clear 3 changes?"*), no money | 384 × 170 · 350 × 170 |
| 8 | The press-and-hold panel | `RowPanel.tsx:632` in `RowPanelOverlay` (`:173`); 6 mounts | **no scrim.** In the Builder the invoice's lines and prices are behind it; in the editors, the card sheet's 0.40 | `bg-surface` | 💲 cost per unit, price history, a group's members (`2 × $40.00`) | 420 × 262 · 358 × 262 |
| 9 | The group chooser, in the panel's place | `GroupChooser.tsx:207` | no scrim | `bg-surface` | 💲 each group's sum | 420 wide (read) |
| 10 | ⋮ Invoice options | `InvoiceOptionsMenu.tsx:188` | no scrim; a tap outside closes it | `bg-surface` | the stage word only | 300 × 644, both |
| 11 | Change stage | `StageMenu.tsx:135` | no scrim | `bg-surface` | none | 400 × 308 · 358 × 308 |
| 12 | The group chooser, from the ⋮ | `GroupChooser.tsx:157` | no scrim | `bg-surface` | 💲 each group's sum | 300 wide |
| 13 | The "Undo to" list | `UndoStack.tsx:298` | dims the window: black **0.45**, z-40 (`Builder.tsx:2070`) | `bg-surface` | 💲 each step's change | 340 × 307, both |
| 14 | The Undo box | `SheetToast.tsx:419`; a second copy in History's card | no scrim; 16 above the footer, over the invoice's lines | **`bg-accent`**, solid | 💲 `−$69.99` | 288 × 49 · 358 × 49 |
| 15 | The Library's Undo strip, after a bulk action | `SelectionBar.tsx:264` | sticky at the foot | **`bg-accent`**, solid | counts | read |
| 16 | Search results | `GlobalSearch.tsx:45` | no scrim | `bg-surface` | none | read |
| 17 | The floating save pill (below 1024, when the top bar slides away) | `SavePillFloat.tsx:249`; the pill `SavePill.tsx:97` | over the page, z-30 | `bg-surface`, `shadow-toast` | a count | 180 × 44, at 390 |
| 18 | The formatting bar above the keyboard | `FormatToolbar.tsx:580` | over the sheet, z-70 | `bg-surface-alt` | controls only | not measured — it needs a keyboard |
| 19 | The products drawer, below 1024 | `SourceDrawer.tsx:193`, panel `:238` | **no scrim** — your *"No scrim. The invoice is never dimmed or disabled."* (`HANDOFF.md:737`) | `bg-surface-alt`; its header glass below 600 (§1) | 💲 the total, on the header | 390 × 440 at half |

**Stacking, highest first:** confirm 80 › formatting bar 70 › sheets 60 › the hand-built boxes, panel, menus, Undo box and
search 50 › the phone's bottom bar and the Undo list's dim 40 › top bar, drawer, selection bars, floating pill 30.

**Not on the list, and why:** ingredient suggestions sit in the page and push the rows down (rendered in the row at
`IngredientRow.tsx:426–437`; no `absolute` or `fixed` on the list, `IngredientPicker.tsx:350`); Technique, Glass and every dropdown are Safari's own lists (`RecipeEditor.tsx:560`, `:576`;
`FormField.tsx:94`), which the app's styling can't reach; expanding rows open in place; a phone has no side menu
(`Sidebar.tsx:65`, measured 0 tall at 390); there is no tag sheet (`grep -rniE 'TagSheet|tag sheet' src`: nothing).
**Not asked, for completeness:** the green top bar (`TopBar.tsx:124`) and the phone's bottom bar (`BottomNav.tsx:32`) are
solid, and on the Library's lab copy (`/style/footcheck#library`) 2 rows sit behind each at scroll 600.

`(ours)` Every box above but four (rows 14, 15, 18 and 19's panel) is `bg-surface`, which every card on every page shares — so glass
would come from a utility of its own, not from changing the colour.

❓ **For you:**

1. **The recipe** for a surface that opens over the app — blur, alpha, saturate, its edge, its shadow, and the fallback
   where the filter isn't supported (today's: solid `--surface`, `globals.css:1539–1544`). One recipe, or by size — a
   300-wide menu against a 672 sheet, or a sheet that covers the whole window below 1024?
2. **Figures on glass.** §39.2: never *"behind a **NUMBER**"* (`HANDOFF.md:1332`); §42.1 took one exception and gave it
   24px (`:6242–6247`, frame `44a`). The 💲 rows: five kinds of sheet in row 1, and rows 4, 5, 6, 8, 9, 12, 13, 14 and
   19. What do they get — Bare's 24px, the lab's `plate` (*"The bar is glass; the figure is not"*, `LookLab.tsx:96`) or
   `graded` (*"opaque under the figure"*, `:103`), or solid?
3. **The scrim.** Under a scrim, glass frosts a dimmed page. Does the scrim stay, lighten, or go? Today there are five
   strengths (0.25, 0.35, 0.40, 0.45, 0.50) and none under the panel, the menus, the Undo box or the drawer — over those,
   glass would frost the invoice's own lines and prices. And glass over glass: Save as template over History's card
   (row 2), a confirm over any sheet.
4. **Dark.** The tint follows `--surface-rgb` — `26, 23, 18` in dark (`globals.css:258`, `:341`), which `check-material`
   holds to `--surface`; the scrims are black in both themes. Dark glass over a dimmed dark page — what shows, and is the
   recipe the same?
5. **The iPad's speed.** Your §36.6, objection 3: *"`backdrop-filter` on a scrolling 314-row list is the one real
   performance risk in this app"* (`HANDOFF.md:1852–1853`); objection 2: behind a sheet is *"a list of 300 near-identical
   rows. Blurred, that is a grey rectangle"* (`:1849–1850`). The drawer's body is solid (`SourceDrawer.tsx:238`), and its
   comment gives that risk as the reason (`:218–223`). **No measurement of it is on record, on any device:** `git grep
   -niP 'backdrop.{0,80}(fps|frame|jank|perf|slow|measur)' a4544b0` finds nothing in the app repo (your Round 81
   `HANDOFF.md`, which is not in it, matches at `:1347` and `:1852` — claims, not measurements), and none of the four commits `git log -i
   --grep=backdrop` lists measures it. `(ours)` A 672 sheet over the Library's list looks like the case to try. In the
   look lab first, on his iPad, as §42 did? The lab has one specimen today, a bar over a list (`LookLab.tsx:614–628`); a box over a page
   would be a new one.
6. **One part or many.** `Sheet` reaches 21 call sites (17 files), `ConfirmDialog` 14 (10 files), `RowPanelOverlay` 7
   mounts. Built by hand, each its own change: `FilterSheet` (used 4×), `StartFromSheet`, `OpenInvoicesSheet`,
   `GateDialog` (2 gates), the 4 menus (rows 10–13), the Undo box (2 mounts), the formatting bar. All at once, or some
   first? And `check-material` will need your new number.

⚠️ **This is a new state of every pop-up, so it needs a frame — or the look lab's switch — before anything is built.
Nothing is built.**

### 3 · ❓ The invoice's header and footer bars

**Sean, 12 Oct, minutes later** (recorded at 20:37, `a4544b0`): *"And what about in the header/footer bar on the
invoice?"* `(ours)` Read as: glass there too. **We told him** both bars are solid today and the invoice's lines never
pass under them, so a glass bar would have nothing behind it to frost and would look as it does now — and that changing
that is a layout change, and yours.

| Bar | Part · `file:line` | Fill today | Figures | 1600 × 1068 · 390 × 844 |
|---|---|---|---|---|
| Header | `InvoiceHeader.tsx:111`, `shrink-0` | none of its own — the card's `bg-surface` (`Builder.tsx:1412`) | invoice №, date, guests; no money | 718 × 105 · 388 × 105 |
| Footer | `InvoiceSheet.tsx:1163`, `shrink-0` | `bg-surface-alt`, solid | 💲 from 600 up: the line count, subtotal, tax %, the comp clause and the total (`:1204–1238`). Below 600 they're hidden (`:1168`) and the drawer's header carries the total | 718 × 84 · 388 × 73 |
| Select bar, in select mode, above the footer | `InvoiceSelectBar.tsx:79`, sticky | `bg-surface`, solid | `N selected` and a 💲 `−$` total | 718 × 76 · 388 × 76 |

**The catch, measured.** The lines are their own scroller (`InvoiceSheet.tsx:912`, `min-h-0 flex-1 overflow-y-auto`), and
the bars sit outside it, above and below — y, in px:

| | Header | Lines | Footer |
|---|---|---|---|
| 1600 × 1068 | 127–232 | 232–984 | 984–1068 |
| 390 × 844 | 119–224 | 224–697 | 697–770 |

In select mode the lines end at the select bar's top (908 · 621). **Nothing passes behind any of the three.** Glass on
them as they stand would frost a flat fill — the drawer header's case in §1.

❓ **For you:**

1. **Glass there, with the lines running under the bars — or not?** It is a layout change, and your own rulings say what
   comes with it:
   - *"A fixed bar over a list REQUIRES bottom padding on the list"* … *"Equal to the bar's height — 60px here. Without
     it the bar covers the last row permanently"* (`HANDOFF.md:1335–1338`) — `(ours)` and the same at the top. So at rest the lines would
     still start below the header (105) and end above the footer (84; 73 at 390), and look as they do now until they
     move.
   - The total over moving lines is §39.2's own case: *"the blurred row under `$477.17` reads as a grey smudge competing
     with a figure that has to be read exactly"* (`HANDOFF.md:1320–1321`) — which is why *"the totals bar is OPAQUE"*
     (`:1323`).
2. **If yes, the recipe:** §42.1's 24px for the footer, which carries the total — and for the header, which carries no
   money, §39.2's 14px?
3. **The drawer's header, on a phone** (§1): the same catch — Bare there frosts nothing. The list under it, as in the look
   lab, or leave it as it is?

## What I need back

1. ❓ **§2 — the recipe and the six**, and whether a frame or the look lab's switch comes first (if the lab, what it should
   hold). Nothing is built until then.
2. ❓ **§3 — the bars:** the lines under them or not, the recipe if so, and the drawer's header with them.
3. **Rounds 82 and 81** (rows AX, AW): still open; nothing here changes them.

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

## Older rounds — Round 78 and earlier are in `REQUESTS-ARCHIVE.md`

Moved there on 12 Oct 2026 at Design's request: this file had reached 1.07 MB, too large for Design to copy in or search. Nothing was edited — the archive holds them byte for byte as they stood here at `bd0d234`. Lines 1–2874 of this file kept their numbers at the split (`0f4c0d0`); each round written since goes in above the last and moves the lines below it, so a `REQUESTS.md:NNNN` is read at the commit it was written at. A `REQUESTS.md:NNNN` above 2874 written before the split is line NNNN − 2864 in the archive. **Round 76 followed on 20 Oct 2026**, to keep this file under 500 KB — whole and unedited, at the top of the archive's rounds, above Round 75. Its 292 lines moved the archive's down, so from then that pre-split line was NNNN − 2572 there, and an archive line cited before 20 Oct was that number + 292. **Rounds 78 and 77 followed at Round 88, the same day**, for the same reason — whole and unedited, at the top of the archive's rounds, above Round 76. Their 564 lines moved the archive's down again, so since Round 88 that pre-split line is NNNN − 2008 there, and an archive line cited at limbo-design `4c60bce` or before is that number + 564 (+ 856 if it was cited before 20 Oct). *(This heading read "Round 75 and earlier" until 20 Oct, and "Round 76 and earlier" from Round 87 until Round 88.)*
