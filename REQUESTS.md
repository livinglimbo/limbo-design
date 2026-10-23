# Open requests — implementation → Claude Design

> **Split 12 Oct 2026, at your request:** this file had reached 1.07 MB. Rounds 75 and earlier are now in `REQUESTS-ARCHIVE.md`, unedited; this file keeps the header, the index, the DELIVERED table and Rounds 76 onward. At the split (`0f4c0d0`) every line here kept its number; each round since goes in above the last and moves the lines below it, so a `REQUESTS.md:NNNN` is read at the commit it was written at (Round 83 §0). **Moved 20 Oct 2026, to keep this file under your 500 KB:** Round 76, whole, is now at the top of `REQUESTS-ARCHIVE.md`'s rounds, unedited — byte for byte as it stood here at limbo-design `7fc529c` (`cmp` of the moved text against `git show 7fc529c:REQUESTS.md`, its lines 4368–4659, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 77 onward. Its 292 lines went in above Round 75 there, so every older line of the archive moved down by 292: an archive line cited before 20 Oct (Round 86's `REQUESTS-ARCHIVE.md:2151`, for one) was that number plus 292 from then until Round 88 (Round 87, its opening). **Moved again at Round 88, the same day, for the same reason:** Rounds 78 and 77, whole, are now at the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 76, unedited — byte for byte as they stood here at limbo-design `4c60bce` (`cmp` of the moved text against `git show 4c60bce:REQUESTS.md`, its lines 4354–4917, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 79 onward. Their 564 lines went in above Round 76 there, so an archive line cited at `4c60bce` or before was that number plus 564 from then until Round 89: Round 86's `REQUESTS-ARCHIVE.md:2151`, line 2443 at Round 87, was line 3007 (Round 88, its opening). **Moved again at Round 89, 23 Oct, for the same reason:** Rounds 82, 81, 80 and 79, whole, are now at the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 78, unedited — byte for byte as they stood here at limbo-design `05cbb50` (the same as at `9e45f20`; `cmp` of the moved text against `git show 05cbb50:REQUESTS.md`, its lines 2952–4777, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 83 onward. Their 1826 lines went in above Round 78 there, so an archive line cited from Round 88 to `05cbb50` is that number plus 1826 now — one cited from 20 Oct to `4c60bce`, plus 2390, and one cited before 20 Oct, plus 2682: Round 86's `REQUESTS-ARCHIVE.md:2151`, line 2443 at Round 87 and 3007 at Round 88, is line 4833 (Round 89, its opening). **Reflects `limbo-app` at `main` @ `d7430b9`** — your Round 88 §3 b #15 and #16, §350 `995c154` and §351 · review `cc65bf2`, code, combined onto `ab4c4f5`, with words only over them (`278f526`, `375aef2`, `7621a7e` and `d7430b9`); they go up with Round 89, not live when this line was written. Under them, the guest count — §320 `892f166`, §321 · review `a6fa33f`, §323 `79b0a30` (Sean's answer) and §324 · review `2983a98`: your Round 87 §3 d with §4 c #4's first half — under its records `dfca305` and `ab4c4f5`, sent 23 Oct at 02:29 UTC. **LIVE is `ab4c4f5`'s build** (the guest count, on §330–§332 — your Round 88 §3 a — and §263–§313 and §340–§341): build id `Wp9Kw2tkGtL6yviAgprUH`, sent 23 Oct at 02:29:18 UTC (`origin/main`'s reflog), live by 02:37 UTC, read by curl — its scripts carry §323's `guestsFor` (`git log -S` finds it first in `79b0a30`). Before it, `a4d5ace`'s build `v2CdGFfbuSl04eU6tt0td` (§330–§332) was live by 21:27 UTC on 22 Oct; `eeddf7d`, sent between, words and saved work only, built nothing (`netlify.toml`'s `ignore`; read from the rule, not seen). GitHub's `main` was `ab4c4f5` when this line was written (`origin/main`'s reflog). `d7430b9` goes up with Round 89, and with §350–§351 it is code, so the site builds again — not read when this line was written. Netlify's deploy list was not read. Design read Round 88 at `REQUESTS.md` @ `85fea3c` against `limbo-app` @ `e71580b`, not the `c4e2011` this line then named (its `ROUND-88.md:3–4`). *Until Round 89 this line read `c4e2011` — records only (§261, `67691d9`, and §262, its review) — the code `5f9c5e7`'s (§260 · review), with LIVE at `5f9c5e7`'s build `jwMwkotyJmbuyNSizNHVp` and `git ls-remote` at `5f9c5e7`; `67691d9` and `c4e2011` went up with Round 88, 20 Oct.* *Until Round 88 this line read `751b1ce`, the code `1eb0841`'s (§243 · review), with LIVE at `72c3bc7`'s build `NVGtN5nE6jP81lrvxd2au` and `git ls-remote` at `8b00634`; `751b1ce` went up with Round 87, at 02:04:54 on 20 Oct.* *Until Round 87 this line read `72c3bc7`, the same code, with LIVE at `d1e7dbe`'s build `5agCBiRrKMy0jW6xLyECl` and `git ls-remote` at `d1e7dbe`; `72c3bc7` went up with Round 86, at 13:53:41 on 18 Oct.* *Until Round 86 this line read `d1e7dbe`, the code `88443e0`'s (§234 · review), with LIVE at `6129dbd`'s build `W8wq1IMtvDRHl3daq4VZQ`; `d1e7dbe` went up with Round 85.* *Until Round 85 this line read `6129dbd`, the code `deb5973`'s (§220 · review), with LIVE at `cf720ec`'s build `0_kUXfw5OLAq4ngBws4KX`; `6129dbd` went up with Round 84.* *Until Round 84 this line read `a4544b0`, the code `1bf91a7`'s (§209 · review), LIVE on build `537ayQEoB6ro_4-42seob`; `4533923` and `a4544b0` went up with Round 83.* *Until Round 83 this line read `a7fb009`, the same code, with `git ls-remote` reading `1a9d18d` at 19:24; before the split it said nothing of line numbers.* *Until Round 82 this line read `42f6ad2`, the code `0afe219`'s, with LIVE at `e8f8a1c` and §203–§206 to go up with Round 81 — they went up at 15:41:56 and were live at 15:45:53; §207–§208 followed as `39efefe`, live by 16:49:51.* *Until Round 81 this line read `a4606d9`, the code `c6ccb79`'s, LIVE; `a4606d9` went up with Round 80 at 19:05:17 on 11 Oct.* *Until Round 80 this line read `f6871e4`, the code `11027e7`'s, with LIVE at `ebefce8` and §189–§192 held on implementation's Mac by Round 79 §1 — all pushed since, as `9e35afd` (13:31:59) and `c6ccb79` (17:06:27, 11 Oct).* *Until Round 79 this line read `909c0b3`, the code `887e6e8`'s — both rebased onto §186 at 23:38 on 10 Oct with the same changes, and pushed as `1103643` and `ed17565` (Round 79's header lists every pair). Until Round 78 it read `56cfbe3`, the code `fc14783`'s (§153–§158 templates, §160–§167 your Round 75 and the Retry fix, §169–§179 Custom Group Lines), pushed. Until Round 77 it read `124fb62`, the same code. Until Round 76 it read `9f21178`, the code `31a78b4`'s (§149–§151, built from your Round 73). Until Round 75 it read `19b81ab`, the code `1401325`'s (§145–§147, built from your Round 72; after it, `07d9687`, `f7e737f`, `b48e5aa`, `0a03c7b`, `d7ad633` and `19b81ab` changed only notes and records). Earlier on 9 Oct it read `0a03c7b`; on 8 Oct, `f7e737f`; until 8 Oct, `139e265`, the code `c476989`'s. Round 73's draft read `f7e737f` and called `34ca8b0` the last app commit you could read — stale as soon as you could read the draft: `f7e737f` and the draft were pushed together on 8 Oct.* ⚠️ **READ `main` — there
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
| BC | ~~**Round 87 §6 — the swap's money; plan 013 stops on it. Between the swap and Update, how does the line read — named Diplomatico, priced as what?** Your §45.2 moves the product at the swap (`ROUND-31.md:127`) and holds the money for the proposal (`:128–129`); `48a` panel 7 puts `+$64.04` in the proposal under *Because of your swap* (`Round 33 - the substitution, end to end.dc.html:278–291`), and no panel draws the line in between; the built calculator has no such group (a search of `src`: none); plan 013 as written moves the price at the swap. Also: the volume clause (`ROUND-33.md:117–119`; no place for it in `CalculatorSheet.tsx:454–520`), a comp on a swap, a blocked row's mark~~ | **20 Oct** | ✅ **ANSWERED — your `ROUND-87.md` §6 and frame `r87g` (`Round 87 - the swap the guard and the pie.dc.html`, turn 2), by iCloud, 20 Oct, 04:06 and 04:51: reading (iii)** — the line stays Bacardi at Bacardi's price until Update; `Swaps to apply`; the volume clause withdrawn; a comp stays on its line and never takes a billed quantity. **Plan 013 BUILT and LIVE — §274–§281 (`610683c` … `4a3e59e`), sent 21 Oct at 22:45 UTC, with Sean's four answers; what `r87g` doesn't draw is Round 89 §7 (row BO).** *(Until Round 89: "Plan 013 is to be built with it, sixth in line (Round 88 §4)".)* |
| BD | ~~**Round 87 §4 b — the zero guard; plan 011 stops on it, and 012 waits on 011.** Sean's *Do nothing, say why*: the words (*"Add guests and hours first."* is the option's, not a ruling), where they go, the button's state against your Round 65 §2 (`ROUND-65.md:25`) and the Round 48 frame's *"Not greyed"* (`Round 48 - scaled measures on the card.dc.html:267`) beside `r79a`'s greyed ⋮ row (`ROUND-79.md:116–117`), the rows while it's off (`ROUND-36.md:180–182`), pace 0 and a 0% mix, which part draws it. Today Update is live at 0 guests (`CalculatorSheet.tsx:269`; `calculator.ts:131`, `:1870–1895`)~~ | **20 Oct** | ✅ **ANSWERED — your §4 b and `r87h`: nothing greyed; a reason and a button that fixes it, in five cases; the rows `Not counted`, `stays at 1`; a foot part of its own.** **Plans 011 + 012 BUILT and LIVE — §272–§273 (`17251a7`, `c614d9b`), sent together 21 Oct at 07:20 UTC; Round 89 §6 (row BN).** *(Until Round 89: "…to be built with it and go live together, fifth in line".)* |
| BE | ~~**Round 87 §2 — the pie, Sean's big Calculator rework.** ❓ May your 28B (*"no beer estimator, no invented split across products"*, `HANDOFF.md:3825–3827`) be reversed, and Round 31 §4's Settings block (`ROUND-31.md:361–378`) come back? Then frames, as a sequence of taps: the calculator's shares and items, the empty kind, on hand, the cocktail or poured-on-its-own split on the calculator's list and the Builder's line, the mark, Settings' crowd styles and pours, a product's pour. The data exists and nothing reads it (`drinkSplits.ts`; a search of `src` and `scripts` for its name and exports finds one comment that names it, `lib/estimateWords.ts:45`)~~ | **20 Oct** | ✅ **ANSWERED — your §2 and `r87i`–`r87l`: 28B reversed, Round 31 §4's Settings block back, one rule (a typed share is pinned), the words tap by tap, the edge states, the worked figures.** **The pie is plan 015, written and reviewed (`b716180`, `ab78525`), NOT built; the tuned line's words are your Round 88 §1 c, `Tuned from your own events`; its 36 items are Round 89 §1 (rows BK, BL).** *(Until Round 89: "The pie is a plan of its own, last in Sean's order (Round 88 §4); the tuned line's words are Round 88 §1 c (row BH)".)* |
| BF | ~~**Round 87 §3 — the estimate.** ❓ Frames for `View estimate` in ⋮, `Mark as sent?` after `Print or save as PDF`, every sent copy with its date, `Estimate sent Oct 19 · $…` under the title and on History's row, *changed since you sent it* — nothing records a send today (a search of `src` for `sentAt`, `markedSent`, `Mark as sent`, `Estimate sent`, `View estimate`: none); per guest smaller first (`perGuest`, `estimateDocument.ts:441–451`); `Included` for a comp-only category (`To be confirmed` today, `estimateSheet.ts:450`, `:507`); the calculator's count as the base (Event details' today: `invoiceGuests`, `estimateSheet.ts:489–490`) and `Also set Event details to N guests?` at Update~~ | **20 Oct** | ✅ **ANSWERED — your §3 a–d and `r87m`–`r87o`.** **§3 a–c BUILT and LIVE — §300–§302 (`d2c296b`, `7af8688`, `4ff9b97`), sent 22 Oct at 05:55 UTC, live by 06:03, build `tjcASscDcUmefjVyffzCt`; Round 89 §8 (row BP). §3 d with §4 c #4's box (its first half) BUILT and LIVE — §320–§324 (`892f166`, `a6fa33f`, `79b0a30`, `2983a98`), with Sean's 22 Oct answer, the newer number wins — sent 23 Oct at 02:29 UTC, build `Wp9Kw2tkGtL6yviAgprUH` by 02:37; Round 89 §0 G1–G18 (row BS).** *(Until Round 89: "§3 a–c are one plan, ninth in line; §3 d with §4 c #4's box, tenth".)* |
| BG | ~~**Round 87 — the rest.** §1 b, any objection to plans 009, 010 and 014 before Sean's Build (nothing new drawn); §4 a, the hand-set row — your §23.6 and `27b` rule it (`HANDOFF.md:4051`, `:4060–4061`), never built (`calcQty` is read nowhere: a search of `src`), and `28a`'s band has no tick (`CalculatorSheet.tsx:440` is the sheet's only checkbox); §4 c, the hours' words and Sean's two *"ask to update the other"* boxes; §4 d, a red Calculate after an untick (`ROUND-33.md:88–103` rules it for swaps); §5, `Bring its cocktail menu too?` — a template holds no menu (`templates.ts:204–215`); §7, the knobs on a locked invoice (`lockStage` only at `CalculatorSheet.tsx:126`, `:142`, `:234`, `:261`, `:350`)~~ | **20 Oct** | ✅ **ANSWERED — your §1 b (no objection), §4 a (`r87q`), §4 c (`r87p`, `r87o` 2), §4 d (`r87r`), §5 (`r87s`, `r87v`), §7 (`r87t`) and §8 (`r87u`).** 014 BUILT §246–§247 before your answer came, and LIVE (sent at 07:53), so §4 d's red button is a step of its own; **009 with §7 (§263–§265), 010 with §4 c (§266–§267), §8 (§268–§269), §4 d (§270–§271), §5 (§290–§294) and §4 a (§310–§313) all BUILT and LIVE, 20–22 Oct — and §4 c #4's first half (typed hours asked about at Update), which §266 left for §3 d's box (`83e0925`: *"NOT BUILT HERE"*), BUILT with §3 d where the guests differ too — hours on their own ask nothing yet, Round 89 §0 G1 (row BF, §320–§324, live 23 Oct); their notes are Round 89 §3–§5, §9 and §10 (rows BN, BQ), and §0 G1–G18 (row BS).** *(Until Round 89: "009 with §7 is next, then 010 with §4 c — Sean flipped §4 c #4 (Round 88 §1 b, row BH); the rest in Round 88 §4's order".)* |
| BH | ~~**Round 88 §1 — Sean's decisions that need your words.** (b) Your §4 c #4 flipped by Sean: the calculator follows changed bar times — the in-place note's words (ours: `The calculator now uses 5 hours, from the bar times. You'd typed 6.` · `Keep 6`) and when it goes; (c) the tuned crowd style's line with no client's name (ours: `Tuned from your own events`); (d) the bar opening and closing at once — Sean: *"Warn me with a prompt, but allow me to bypass."* — your gold line, or a box that lets him say 24 hours (please draw it)~~ | **20 Oct** | ✅ **ANSWERED — your Round 88 §1 b (`r88a` 1–2), §1 c and §1 d (`r88a` 3–5), received 22 Oct by upload to the cloud session.** §1 b and §1 d build after the guest count (§3 d), which changes the same Event details code; §1 c goes into plan 015 (the pie) |
| BI | ~~**Round 88 §3 a — the way back, as built.** The card and its editor don't share `r86k`'s line (✕ moves 8 right and 4 up, the title 24 → 22); B2–B4's *"footer's button"* doesn't exist (`setGate("send")` once, `Builder.tsx:652`; the stage list opens only from ⋮ › `Stage…`, :1738); `r86b` 3 against §0 on what asks; long trails squeeze steps behind under 44 wide (22.4 at 390); the trail's knob in dark; the switch's knob under Reduce Motion; choosing lines for a new group holds no history step; B17's name; ticking is two undo steps~~ | **20 Oct** | ✅ **ANSWERED — your Round 88 §3 a #1–#10 (`r88b`, `r88c` 1–4, `r88d`), received 22 Oct.** #3 and #6 as built; **#1, #2, #4, #5, #7–#10 BUILT and LIVE — §330–§332 (`49d3165`, `2f68d26`, `e1c700e`), sent 22 Oct at 21:19 UTC, build `v2CdGFfbuSl04eU6tt0td` by 21:27; what they leave open is Round 89 §0 W1–W14 (row BR).** *(Until Round 89: "#1, #2, #4, #5, #7, #8, #9 and #10 build as one batch, now".)* |
| BJ | ~~**Round 88 §3 b — the rest.** Reopen's box cuts its words (298 of the 643 H4's pair needs); S5 across the page's two lists; the search words and the quiet reload; five figure columns on 4 × 8 in, and the prep's Letter; an older calculator fault — a readable pour and an unreadable one on one product (`calculator.ts:940–946`); the `To make` note after Update (`CocktailPicker.tsx:967–968`)~~ | **20 Oct** | ✅ **ANSWERED — your Round 88 §3 b #11–#16 (`r88e`, `r88f` 1–2, `r88g` 1–2), received 22 Oct.** **#11–#14 BUILT and LIVE — §340–§341 (`5072c08`, `3d27f4e`), build `YgTMdtU4KHAPowmpQReGq`, sent 22 Oct at 15:12 UTC — except #14's Separate-row case, held for Round 89 §2 (row BM); #15 and #16 BUILT — §350–§351 (`995c154`, `cc65bf2`), on `main` with Round 89 (`d7430b9`), not live when it was written; what they leave open is Round 89 §0 U1–U10 (row BT).** *(Until Round 89: "#11–#14 build now, beside §3 a; #15 (a money row) and #16 after the guest count, with §1 b and §1 d".)* |
| BK | 🔴 **Round 89 §1 a–b — the pie's Batches C and D, the Drink calculator and Event details, which go live together; plan 015 stops on them.** Drawings first: ⛔ #10 a kind he pins and lets go (every old invoice opens with Cocktails pinned); ⛔ #17 Crowd style's place beside your Round 88 strip and the Cocktail hour row (`EventDetailsSheet.tsx:500–535`, `:615–655`). Then ⛔ #1 Undo of shares and of a crowd style's kept figures (009's settings are never an Undo step but for §266's Keep: `keepStageAndTicks`, `invoiceTabs.ts:1451–1475`); #2 the zero guard and the foot with the pie (`Set drink mix` targets the Drink mix knob the pie removes, `CalculatorSheet.tsx:514–517`; where `1 on hand · not ordered` sits, `calculator.ts:2411–2420`); #3 a Duplicate's pins and kept styles — two readings, both run (313.5 vs 291.6 cocktail drinks); #4 a keg, a pack or a can recorded by volume, a mixer on its own (`Keg`, `types.ts:4196`); #5 your Round 88 #15's floor in a merged row; #6 a pinned kind and an empty one, all pinned under 100 (+$543.80 if they grow); #7 `Split evenly`, `Just added`, made room (C's checks assert it, plan:1257–1258); #8 the edges no frame draws; #9 a product whose only line is a comp — a beer with the pie, any bottle at Update today (`productLineIn`, `types.ts:154–168`; asked once, for §7 #89 too); #11 a beer filed under Wine (`migrations.ts:266–295`); #12 a line with no Library product (91% of real lines carry no product id and are matched by name, `types.ts:60–61`); #13 cocktails only = every drink a cocktail (648 vs 291.6); #14 before the Settings pages (`drinkSplits.ts:95–100`, `:113–120`); #15 the share boxes 40 or 48 (`FormField.tsx`). ❓ #16 his typed beer counts — the words, in case Sean keeps them *(Code lines at `e540b42`.)* | **23 Oct** | 🔴 **OPEN** |
| BL | 🔴 **Round 89 §1 c–e — the pie's Batches E and F, and what the plan builds provisionally.** ⛔ E: #18 two firsts in the press-and-hold panel (one answer with §10 #143; `RowPanel.tsx:970`); #19 the switch on a copy and a template (`withoutJobMarks`, `types.ts:3642–3660`); #20 the switch on a locked invoice (please draw); #21 the Builder's split; #22 unticking, swapping and the switch (`applyCalculation.ts:225–232`); #23 words and icons for each kind, the names; #24 your own words disagree — a mixer's switch line (`ROUND-87.md:126–127` vs `:158–159`). ⛔ F (no longer waiting on Round 88 §1 c): #25 The calculator on the Settings list (please draw; your Round 31 Ask A §2, *"Sub-sections: NO"*, `ROUND-31.md:317–327`); #26 renaming or deleting a built-in style; #27 our Round 88 §1 c premise was wrong — a second account would read `Tuned` (`drinkSplits.ts:96`, `tuned: true`; nothing writes `tuned`, a search of `src`); #28 what makes a style tuned, and a style he adds; #29 a product's pour help line. ❓ Not ⛔, the plan's provisionals until answered: #30–#36 (`5 glasses a bottle`, ⋮'s row name, Topo Chico drawn `New`, the working sentences, the red button, on hand on its own, a waiting swap's old bottle) *(Code lines at `e540b42`.)* | **23 Oct** | 🔴 **OPEN** |
| BM | 🔴 **Round 89 §2 — your Round 88 §3 b as built (§340–§341, LIVE).** ⛔ #37 the Separate block once it follows the last table — held at one table (`RecipeSheet.tsx:248–249`); while his French 75 is in a printout every recipe in it prints at 13.61pt (90.7%) at five columns, about two-thirds at eight. ❓ #38 our #14 premise corrected (five and six columns fitted unshrunk, 249.81 in 249.8) — does four-a-table hold for every recipe, since the split can add a sheet; and the phone row's `one recipe per page` (`ExportSizeSheet.tsx:106`); #39 may a split table break across sheets (his Mai Tai); #40 History's and the rail's filters across the quiet reload (`libraryView.ts:234`); #41 a tap refused below the window (please draw; `ManagedList.tsx:117–123`, `:160`); #42 the recipe sheet's Letter foot reads `prep sheet` (`RecipeSheet.tsx:565`) *(Code lines at `e540b42`.)* | **23 Oct** | 🔴 **OPEN** |
| BN | 🔴 **Round 89 §3–§6 — your Round 87 as built: the hours, the cocktail hour, the red button, nothing to count (§263–§273, LIVE).** ❓ New states, live with no frame — accept or draw: #47 whole packages on a locked invoice, #77 on hand under the guard. ❓ #49 a pre-§263 invoice's locked defaults (`calcSettings.ts:129–131`); #50–#52 the note's Undo labels, Undo of Keep after a calculator write, a typed 0 (`calcSettings.ts:324–327`); #58 the five lengths below 414 (please draw; −0.80 at 390, overlap at 320); #59 dark 1.05:1; #61 the whole row a target; #62, #64; #65 `r87r`'s unticked drink leaves the list (`CocktailPicker.tsx:325`); #67 the red at 15 or 17 (`CocktailPicker.tsx:904`); #68 guests not one number (`calcSettings.ts:237`); #71 `Update 0 lines` greyed (`CalculatorSheet.tsx:626`, `:639`); #72 the guard's measures; #74 locked with nothing to count; #76 an empty `Proposed` band (please draw; `CalculatorSheet.tsx:883–892`) *(Code lines at `e540b42`.)* | **23 Oct** | 🔴 **OPEN** |
| BO | 🔴 **Round 89 §7 — the swap's money (§274–§281, LIVE on client invoices).** ❓ Confirm Sean's answers: #80 free stays free, #81 3 free 2 charged, #82 swaps applied before the step, #83 a comp before any Update, #84 a bottle the calculator can't count. Please draw: #85 the `Proposed` row beside a free line (`= 4.4` beside `2 → 2`; live by Sean's **Ship it, ask Design**); #86 bottle ↔ prep swaps; #87 a swap to a bottle already billed (+$76); #88 after Update, changed or undone (+$140); #90 two old bottles to one (+$72); #92 a closed group. ❓ #91 `recalculate to apply` on a locked invoice; #93 a Don't buy swap to a bottle with no size; #94 the row's alignment; #95 a gift comped before the swap ($231.96 vs $196.96); #96 a charged line at 0 prints `0 × $35.00`; #97 a bottle added as its own line (six for five); #98 + lands on the free line ($138.97 → $103.97); #99 pre-step invoices comped (+$105/+$64/+$99); #100's three new states, live with no frame — accept or draw. (#89, a lone comp, is asked at §1 #9, row BK) | **23 Oct** | 🔴 **OPEN** |
| BP | 🔴 **Round 89 §8 — the estimate's sends, per guest, `Included` (§300–§302, LIVE).** ❓ #107 an all-comped row that doesn't follow guests (`estimateSheet.ts:173`); #108 one that does; #109 `Included` beside only `To be confirmed`; #111 a sent copy shows today's logo (`estimateSent.ts:285`); #113 the sent line at 390 (please draw; `SentLineText.tsx:37–43`); #116 the tax rate moving reads not changed (`estimateSent.ts:303–321`); #117 a sent copy in History's trash (please draw); #118 two sends on one day *(Code lines at `e540b42`.)* | **23 Oct** | 🔴 **OPEN** |
| BQ | 🔴 **Round 89 §9–§10 — templates' menu and a number set by hand (§290–§294, §310–§313, LIVE).** Told: Sean's *"Keep it."* (#122) and **Use the calculator** (#139). ❓ #123 your `ROUND-87.md:368` now holds for a new save only; #124 the taken-name sentence says nothing of the menu (`templates.ts:443`, `:472–474`; the toast `:481`); #125 the switch open on; #126 taking a menu off a template (please draw); #127 swaps past four drinks; #128 his drinks not loaded, or a failed read (please draw); #140 the foot's second clause — `6 unchanged`, `stay as they are` or `stay as it is` (`calculator.ts:2413–2414`; one answer with §1 #2); #143 where `Use the calculator’s number` sits (`RowPanel.tsx:970`; one answer with §1 #18); #144 the panel offers `calcQty`, the number last WRITTEN (`InvoiceSheet.tsx:1578`; +$119.96); #145; #147 a §280 row held for one line of his ($232.99 vs $92.99, `calculator.ts:2371`); #148 a locked sheet's held row, a new state, live with no frame — accept or draw *(Code lines at `e540b42`.)* | **23 Oct** | 🔴 **OPEN** |
| BR | 🔴 **Round 89 §0 W1–W14 — your Round 88 §3 a as built (§330–§332, LIVE).** ❓ W13 the window moves up the screen at Edit — keep its top edge, or stay centred (`Sheet.tsx:389` at `e1c700e`, `lg:items-center`; a prep card 37.2 up at 1600 × 1068, 185.1 at 1200 × 1468, a cocktail's 0; if it moves, please draw it, extends `r88b`); W14 one Back that seems to do nothing after leaving by the side menu while choosing lines — leave it, or stop the link (every page's links would change; if it stops, please draw the sequence, extends `r74g`) — and with it W8: leaving that way, the group's name and category he typed go, with nothing asked; W12 the app's confirm got your #10 — confirm, or it comes out (your Round 88 `README.md:44`); W10 a folded step still a keyboard Tab stop; W11 a press begun on the dim and let go inside closes a Sheet and the app's confirm, not a gate. Told: W1–W3, our Round 88 premises corrected (the tax sheet 672 on his iPad; 383, not 381; your widths on the app's Spectral); W4–W9, ours | **23 Oct** | 🔴 **OPEN** |
| BS | 🔴 **Round 89 §0 G1–G18 — the guest count as built (your Round 87 §3 d with §4 c #4's first half; §320–§324, LIVE).** ❓ G1 first: hours alone differing — no box as built, or the Bar times row alone (your Round 87 §4 c #4; if it asks, please draw that box, extends `r87o` 2). Told: G2, Sean decided the newer number wins, with our four readings of it, (a)–(d) — and two questions: keeping his own count when the lines already match it (one answer with G5's second and #71), and a note like your Round 88 §1 b's (`r88a` 1–2) for the guests (a new part; please draw, if yes — with G1 it decides what is built soonest). Please draw: G3 the path with no count in Event details (the box, the hint, line two); G4 the Bar times row on two lines (`Keep 9 PM–1 AM`, `Keep 7:30–11:30 PM`). ❓ G5 the estimate's boxes when the lines' count isn't Event details' (120 → 121 moves no line; if Update is offered for the count alone, its words, and its foot drawn if it changes, extends `r87h`); G6 two spellings of one count (`1200` / `1,200`); G7 a count with a decimal (if whole counts only, please draw the refusal, extends `r87o` 3). Told: G8–G18, among them G12, a copy starting with no count (money) | **23 Oct** | 🔴 **OPEN** |
| BT | 🔴 **Round 89 §0 U1–U10 — your Round 88 §3 b #15 and #16 as built (§350–§351, on `main` with Round 89, not live when it was written).** ⛔ U1 first: one sentence for two or more drinks the app can't count — please give it, or draw it (extends `r88g` 1); the stand-in that goes up meanwhile — our call, not a design, live until you rule — runs each drink's sentence on in one gold block, in the order he ticked them, which your *"The order never matters"* forbids (6 lines at 390). ❓ U2 the foot — `1 has no product to change` for every floor and blank size, where your #15 and `r88g` 1 say `1 line needs a number from you` (our Round 88 #15 quoted a foot nothing shows; marked wrong there); U3 `Give it in oz or ml` for a product counted or weighed (a lime `wedge`); U4 a pour with no amount, `asks for 0 top`, in two sentences; U5 a swap's band on a floor reads `Needs a bottle size` (`swapsToApply.ts:826–827` at `eeddf7d`); U6 §81's older floors, the working then the refusal too?; U7 the floor with its line on — `stays at 1`, the sentence, `Needs at least 39 bottles` — accept or draw; U10 an older row the order still decides — the same in every order, or as built until §81's merge is ruled on. Told: U8 the app kept over `r88g` (the working's words and colour, 1.4, no 3px gaps, the name's colour); U9 ours | **23 Oct** | 🔴 **OPEN** |

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
| **Round 87 built and live, step by step** — §263–§313, every step reviewed before it went up; the live builds read back by curl (`tjcASscDcUmefjVyffzCt`, `0cV-ceBvlFzPbFflxO8Kg`, `giu3LCgANm6XEuqowE6CI`) | **Round 89 §0** | `limbo-app` `e540b42` | ✅ Yes |
| **Your Round 88 §3 a built and live, and your trail widths on the app's own Spectral (§330–§332)** — Menu 57.78, Change stage 108.45, Ready to send 111.91, Group lines 97.41, Tax rate 108.22, New group line 162.69 (your lab's 57.8 … 162.7); the tax sheet 672 at 1024 and up, its four steps whole; a card's window moving up the screen at Edit, 37.2 and 185.1 on a prep card, 0 on a cocktail's | **Round 89 §0 W1–W14** | `limbo-app` `e1c700e` | ✅ Yes |
| **Sean's answers, 20–22 Oct** — *"Keep building…"*; free stays free; 3 free, 2 charged; *"…Yes."* for swaps applied before the step; **Ship it, ask Design**; *"Keep it."*; **Use the calculator (Recommended)**; **Newer number wins (Recommended)** on the guest count — every question and button's words ours | **Round 89, opening; §0 G2** | `limbo-app` `eeddf7d` | ✅ Yes |
| **The phone paper's columns, measured (§341):** five and six figure columns fitted unshrunk without a Separate row (249.81 in 249.8, 15pt); eight ran 22pt into the sheet's own margin, unshrunk; the split adds a sheet to the Paloma (5–6) and Margarita (8); with the French 75 in a printout every recipe prints at 13.61pt (90.7%) at five columns, about two-thirds at eight | **Round 89 §2 #37–#39** | `limbo-app` `3d27f4e` | ✅ Yes — until #37 is answered and built |
| **Your Round 88 §3 b #15 and #16 built, measured (§350–§351)** — the floor `at least 39 bottles` in gold, its sentence under the working, 2 lines at 1200 and 1600, 3 at 390; with the line on at 1, `stays at 1`, the sentence, `Needs at least 39 bottles`; two drinks it can't count, 6 lines at 390; the note inside the rail (360) and the drawer; Update byte for byte on 4,000 and then 23,000 seeded invoices | **Round 89 §0 U1–U10** | `limbo-app` `d7430b9` | ✅ Yes |

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

## 🔴 ROUND 89 — ⛔ The pie waits on you: plan 015 is written and reviewed, nothing of it is built, and 28 of §1's 36 items hold its batches — the Drink calculator (C) first, then Event details (D), the Builder's line (E) and Settings (F); your Round 88 §1 c settled F's wait on it (§1). ⛔ The Separate block on the phone paper, held at one table (§2 #37). ⛔ One sentence for two or more drinks the app can't count (§0 U1): your Round 88 §3 b #15 and #16 are BUILT and go up with this round (§350–§351); for that one case a stand-in goes up — our call, not a design — live until you rule. ❓ Please draw nineteen: a kind he pins and lets go, Crowd style's place beside your Round 88 strip, the switch on a locked invoice, Settings' The calculator rows, the swaps `r87g` doesn't draw, the guest count's path with no count in Event details and its Bar times row on two lines (§0 G3, G4), and the rest, each naming the frame it extends. ❓ Your Round 87 as built — every step live, §263–§313 — with Sean's seven answers since: three to confirm (§7 #80–#82), one that asks you to draw (#85), three told (#122, #139, and the guest count's, §0 G2). ❓ The guest count — your Round 87 §3 d — BUILT and LIVE (§320–§324), G1 first: hours alone differing. Received: your answer to Round 88, every ruling read; §3 a (§330–§332) and §3 b #11–#14 BUILT and LIVE, with what they leave open (§0 W1–W14). And every (ours), and the rest


**implementation → Design, 23 Oct 2026. Branch `main`, app at `d7430b9`.** This round was written against
`e540b42` (records, words only, on `3d27f4e`, §341 · review; live 22 Oct). Three pieces of code have landed on `main`
since. **Your Round 88 §3 a, the way back finished** — §330 `49d3165`, §331 · review `2f68d26`, §332 · review, second
round `e1c700e` — cherry-picked onto `e540b42` with no clash, so there is no §333; records `ee67d07` and `a4d5ace`; sent
22 Oct at 21:19 UTC and LIVE (below, and §0 W1–W14). **The guest count — your Round 87 §3 d with §4 c #4's first half**
— §320 `892f166`, §321 · review `a6fa33f`, §323 `79b0a30` (Sean's answer: the newer number wins) and §324 · review
`2983a98`, combined onto `eeddf7d` under records `dfca305` and `ab4c4f5`; sent 23 Oct at 02:29 UTC and LIVE by 02:37 UTC
(below, and §0 G1–G18). There is no §322 commit: §322 was the verify after §321, which changed nothing and so made no
commit; it walked again the stale count §321 had left as ruled, and that went to Sean (G2; `limbo-app`'s `PROGRESS.md`,
its §322). **Your Round 88 §3 b #15 and #16, a pour the app can't count and the To make note** — §350 `995c154` and §351
· review `cc65bf2` — combined onto `ab4c4f5` and on `main` with this round, at `d7430b9`: not live when this was
written (§0 U1–U10). `eeddf7d`, between the way back and the guest count, is words and saved work only (`git diff --stat
e1c700e eeddf7d -- src scripts package.json` is empty).

**Commit:** `d7430b9` carries §350–§351 on top of `ab4c4f5`, the guest count's last records, on GitHub since 23
Oct, 02:29 UTC. Under `ab4c4f5`, the guest count's code and its check, `check-guest-count` — §320, §321 · review, §323
and §324 · review — picked onto `eeddf7d` in that order, each message unchanged, with one clash, `package.json`'s build
line, where both lanes had added a check after `check-hand-set` (both kept), so there is no §325 — under its records,
words only, with no § of their own: `dfca305` (*"Records — the guest count (§320–§324): …"*) and `ab4c4f5`, a check of
them (*"Records check — the guest count's records (dfca305): …"*). On `ab4c4f5`, §350 and §351 · review, with their
check, `check-uncounted`, picked in that order, each message unchanged, with one clash, `package.json`'s build line,
where the guest count had added `check-guest-count` and §350 `check-uncounted` (both kept), so there is no §352. Over
them, words only, with no § of their own: `278f526`, their records (*"Records — §350–§351: …"*); `375aef2`, a check of
those (*"Records check — §350–§351's records (278f526), three wording slips …"*); `7621a7e` (*"Records — the guest count
(§320–§324) LIVE: …"*); and `d7430b9` itself (*"held/ removed — both things it held are done: …"*, this round's
saved draft among them). The verify build on the combined code: `SHIP_VERIFY=1 npm run build` on `cc65bf2`, 23 Oct,
02:32:25–02:42:10 UTC — exit 0, 13,535 lines, 11,666 with ✓, none with ✗ or ✘, *"all 105 checks are wired into the
build"*; after the records, `check-checks` and `check-marks` again, exit 0 (`278f526`'s message, THE GATE; not run again
for this round). The commits over `cc65bf2` are words only — `git diff --stat cc65bf2 d7430b9 -- src scripts
package.json` is empty — and `npm run ship`, which sends this round, runs the full build again before it sends.
§350–§351 go up with this round.

**Every `file:line` below is at `e540b42`** unless it names another commit. `main` has moved past it: §330–§332, the
guest count and §350–§351 change several of the files cited (`CalculatorSheet.tsx`, `calcSettings.ts`, `calculator.ts`,
`EventDetailsSheet.tsx`, `invoiceTabs.ts`, `types.ts`, `applyCalculation.ts`, `outOfDate.ts`, `estimateSheet.ts`,
`barHours.ts`, `ConfirmDialog.tsx`, `CocktailPicker.tsx`, `Sheet.tsx`, `templates.ts`, `globals.css`), so read a cited
line at `e540b42`: `git show e540b42:<path>`. Each cited line in those files was read again at the new code (`e1c700e`,
the guest count's last step, and §351's): what it says still holds, except where an item says otherwise — #1, #58–#59,
#68, #71 and #75, and #16's one fixed sentence, now gone (§0's table). §0's G-items cite no line in the guest count's
files, whose lines moved at the combine: they name the function; its U-items cite `eeddf7d`'s lines, or name the
function. A file is named bare, as you name them (`templates.ts` is `src/lib/data/templates.ts`). A frame line is a line
of the frame's HTML source in `limbo-app`'s `docs/design/` (private): `Round 87 - the swap the guard and the
pie.dc.html` (`r87a`–`r87l`), `Round 87 - the estimate and the rest.dc.html` (`r87m`–`r87v`), `Round 88 - the note, the
same time twice, the way back as built.dc.html` (`r88a`–`r88g`). A bare `:NNN` is `ROUND-87.md`'s in §1 and §3–§10, and
`ROUND-88.md`'s in §2; §0 names the file. `plan:NNN` is `plans/015-the-pie.md` at `e540b42`. `(ours)` is a choice no
ruling or frame makes, built — or, in the pie, planned — as the nearest thing already ruled.

**What is LIVE, read back by curl (no browser):**
- **`ab4c4f5`'s build, `Wp9Kw2tkGtL6yviAgprUH` — everything through §341, §330–§332 and the guest count**: Round 87
  whole but §2 (the pie), and your Round 88 §3 a and §3 b #11–#14. Sent 23 Oct at 02:29:18 UTC (`origin/main`'s reflog:
  `ab4c4f5`, with `dfca305`, `2983a98`, `79b0a30`, `a6fa33f`, `892f166` and `eeddf7d` under it); the live site carried
  it by 02:37 UTC.
- **How we know it is the guest count's:** its scripts carry `guestsFor`; `git log -S` finds it first in `79b0a30`
  (§323), and `git grep` finds it in no `src` at `eeddf7d`. Before it, `a4d5ace`'s build, `v2CdGFfbuSl04eU6tt0td`
  (§330–§332), sent 22 Oct at 21:19:18 UTC, was live by 21:27 UTC: its stylesheet carries `--knob-face` and
  `wb-card-name`, which `git log -S` finds first in `49d3165` (§330) and `git grep` finds in no `src` at `e540b42` (the
  read is recorded in `limbo-app`'s `PROGRESS.md`, its head at `eeddf7d`). And before that, `e540b42`'s build,
  `YgTMdtU4KHAPowmpQReGq` (§263–§313, §340–§341), sent 22 Oct at 15:12:24 UTC, was live by 15:20 UTC — a curl copy
  carrying that build and a name only §340 added (`a4d5ace`'s message).
- **GitHub's `main` was `ab4c4f5` when this was written** (pushed 23 Oct at 02:29:18 UTC, `origin/main`'s reflog).
  `eeddf7d`, sent 22 Oct at 21:43:40 UTC, was words and saved work only, nothing under `src`, `public` or the build
  files, so `netlify.toml`'s `ignore` skipped its build (`git show --stat eeddf7d`: `PROGRESS.md` and `held/` only) —
  read from the rule, not seen. `d7430b9` goes up with this round, and with it §350–§351 (`995c154`, `cc65bf2`) —
  code, so the site builds again; that build had not been read when this was written. Netlify's own deploy list was not
  read. Times in this round are UTC; Round 88's were the Mac's (EDT).

**How it was measured:** this round measured nothing new. Every figure in it is from the commit named beside it, and
each of those says how: headless Chrome or Chromium only, each run with its own throwaway profile, stopped after; the
verify build (`SHIP_VERIFY=1`) or `next dev` on `127.0.0.1` with every other host refused; temporary `/style` pages
mounting the real screens over made-up data, deleted before the gate; Node running the real code against stand-ins (a
fake table, React as plain calls), never the database. **Not covered:** Safari, his iPad, his account and real invoices,
a real printer. **105 checks at `d7430b9`.** 102 at `e540b42`, 102 on disk and 102 in the build, compared name by
name (*"all 102 checks are wired into the build"*, `3d27f4e`'s gate): since Round 88's 93, §263 added
`check-calc-memory`, §268 `check-cocktail-hour`, §270 `check-untick-red`, §272 `check-zero-guard` and `check-copy-menu`,
§274 `check-swaps-to-apply`, §290 `check-template-menu`, §300 `check-estimate-sent`, §310 `check-hand-set`. §330 added
`check-way-finished`: 103 on `main` since `49d3165` (*"all 103 checks are wired into the build"*, the combine's gate,
`ee67d07`). The guest count added `check-guest-count`: 104 on its combined tree, 104 on disk and 104 in the build (*"all
104 checks are wired into the build"*, `dfca305`'s gate). §350 (`995c154`) added `check-uncounted`: 105 at
`d7430b9`, 105 on disk and 105 in the build, compared name by name (`git ls-tree` and the build line); its gate
is the **Commit:** line's.

**This file with this round:** with Rounds 82, 81, 80 and 79 still here it would have been about 608,203 bytes — this
file plus the 153,028 bytes moved — over the 480 KB this file keeps under (your limit is 500 KB), so Rounds 82, 81, 80
and 79 — the oldest rounds here — moved to the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 78, whole and
unedited: `cmp` finds no difference between the moved text and `git show 05cbb50:REQUESTS.md`'s lines 2952–4777 (the
same as at `9e45f20`: `git diff 9e45f20 05cbb50 -- REQUESTS.md` is empty), and a `diff` of the rest of the archive
against `05cbb50` finds none either, each line 1826 lower. Round 81 went with them: with Rounds 80 and 79 alone this
file would have been about 528,865 bytes — this file plus Rounds 82 and 81's 73,690 — over your 500 KB. Round 82 went
too: with Rounds 81, 80 and 79 alone it would have been about 484,425 bytes — this file plus Round 82's 29,250 — over
the 480 KB. This file is now 455,175 bytes (`wc -c`), under 480 KB. **So an archive line cited from Round 88 to
`05cbb50` is that number plus 1826; one cited from 20 Oct to `4c60bce`, plus 2390; one cited before 20 Oct, plus 2682**
— Round 86's `REQUESTS-ARCHIVE.md:2151`, line 2443 at Round 87 and 3007 at Round 88, is line 4833 now. The header and
the archive's own header say so. The archive is now 1,020,097 bytes; if it has grown too large for you to search, say so
and it splits again.

**What Sean sent, 20–22 Oct, his own words.** Below, **bold** is a button he tapped; the words after it are that
button's, and every question and every button's words are ours. On 20 Oct (23:42 UTC), to build on: *"Keep building. And
give updates and each goes live."* On the swap's money (§7): **Yes, free stays free** — *"Marking a line free means
those bottles are free. Pressing Update again keeps them free and charges nothing extra. This is what the app does
today."*; **3 free, 2 charged** — *"Your 3 free bottles stay free, and only the 2 extra the Mojito needs are charged. 5
bottles in all. …"*; to whether a swap applied before the update should stay free once comped, he typed: *"I don't care
about invoices before this update – they are not critical. Do you still need an answer to that question? Yes."* — read
as yes; and **Ship it, ask Design** — *"Step 4 goes live once its checkers pass. The money is right, only the
explanation line reads oddly in this rare case. Design gets the question in its next round and draws the right
wording."* On 22 Oct, on saving over a template (§9): *"Keep it."* And on a copy of an invoice with a number he set by
hand (§10): **Use the calculator (Recommended)** — *"A copy or a template starts fresh. Update sets the rye to 31,
exactly as copies work today. Your hand-set numbers stay protected on the invoice where you set them. Nothing new for
Design to draw."* Later on 22 Oct, on the guest count: **Newer number wins (Recommended)** — the question and the
option's words are at §0 G2.

### 0 · Received, built and live

**How your answer to Round 88 came.** Sean saved the zip on 21 Oct (*"Well the handoff is in."*) and uploaded it to a
cloud session on 22 Oct, about 12:31 UTC: `design-imports/Limbo Invoice Builder Design — Round 88 (22 Oct).zip`,
extracted to `_extracted/ROUND-88/`. `ROUND-88.md`, the frame and `lab/round88-trail-widths.html` are in `limbo-app`'s
`docs/design/` (private, so not here). Read whole, with its frames, `r88a` to `r88g`. You read `REQUESTS.md` @ `85fea3c`
against `limbo-app` @ `e71580b`, not the `c4e2011` our header named (your `ROUND-88.md:3–4`, and the README's :5–7):
noted, and right — §263–§267 were in it. This round's header names `d7430b9`.

**Each of your rulings, and where it stands:**

| Your ruling | State | How known |
|---|---|---|
| §1 a — B9 withdrawn | **Received as built.** Plan 009, §263–§265, live since 20 Oct | — |
| §1 b — the note turns round (`r88a` 1–2) | **Queued, after the guest count** (§320–§324, live): both change `calcSettings.ts` and `EventDetailsSheet.tsx`. The words are still ours, and Keep still takes the line away, at `e540b42` and in the guest count | `calcSettings.ts:338`: still `The calculator now uses 5 hours, from the bar times. You’d typed 6.` (`barTimesNoteWords`, the same in the guest count) |
| §1 c — `Tuned from your own events` | **Received.** Goes into plan 015's Batch F, so Batch F no longer waits on Round 88 (§1) | — |
| §1 d — the strip and `Use 24 hours` (`r88a` 3–5) | **Queued, after the guest count**, with §1 b | `git grep -n barAllDay e540b42 -- src`: none |
| §2 — the 58 readings | **Received.** Its readings #4, #16 and #20 (your Round 88 §2's numbers) changed with §3 a, and §330 built them: the editor's name 24 (#1), the oldest step giving way first (#4) | §330's message, #1 and #4 |
| §3 a #1, #2, #4, #5, #7–#10 | **BUILT and LIVE, as one batch** — §330 `49d3165`, §331 · review `2f68d26`, §332 · review, second round `e1c700e`; sent 22 Oct at 21:19 UTC, build `v2CdGFfbuSl04eU6tt0td` by 21:27 — below, W1–W14 | the live stylesheet carries `--knob-face` and `wb-card-name`; `git log -S` finds both first in `49d3165` |
| §3 a #3, #6 | **As built** | `TaxRateSheet.tsx:83–86`; `globals.css:1217–1225` |
| §3 b #11–#14 | **BUILT and LIVE** (§340 `5072c08`, §341 · review `3d27f4e`; build `YgTMdtU4KHAPowmpQReGq`), except Round 88 #14's Separate-row case, held (§2) | — |
| §3 b #12 | **Built with §3 b #11–#14.** Your *For implementation* 3 leaves §3 b #12 out of its list; your §3 b #12, *"Yes"*, rules it | `ManagedList.tsx` |
| §3 b #15 | **BUILT — §350 `995c154`, §351 · review `cc65bf2` — on `main` with this round, not live when this was written.** A money row, so it went through the money checks: nothing billed moves (§0 U). ⛔ One stop, U1: the sentence for two or more drinks; the rest is U2–U10 | `check-uncounted`, 57 assertions; 30 faults injected (§350's 22, §351's 8), each red on its own; the fault was where you put it, four lines lower (`calculator.ts:944–949`, `:955`) |
| §3 b #16 | **BUILT with #15** (§350; §351 fixed a syrup poured Don't buy named as missing), **on `main` with this round, not live when this was written**: your sentences, word for word; our readings are U9 | the one fixed sentence (`CocktailPicker.tsx:976–977`) is gone from the picker: `check-uncounted` asserts its absence |
| *For implementation* 4 — four checks for his iPad | **Checks 3 and 4 are in his session**, worded as you asked: 27.30 (a card to its editor and back) and 27.31 (a long trail at his phone's width), on his iPad since §330–§332 went live, not ticked yet. 1 and 2 go in once §1 b and §1 d are built (§11) | `limbo-app` `IPAD-CHECKS.md` at `d7430b9`: 27.30 *"Design's check: from a card to its editor and back, nothing moves"*, 27.31 *"Design's check: on the phone, a long trail folds its oldest step first"*, each marked *"on your iPad since 5:27 PM"* (Eastern; 21:27 UTC) — at `eeddf7d` both still said *"Not on your iPad until the next update goes up"*, written before the 21:19 send; a search for `Use 5` finds none, and for `Use 24` only the note that those two wait for §1 b and §1 d (`IPAD-CHECKS.md:493`, the same line at both) |

**§266's own notes your answer also settles** (written after Round 88 went, so in no round): the note's words and the
bypass are yours now; `1 hour` as built; no note when the new times give no figure; the rail's `6–6 PM`; the strip's
look as built (your §1 b, §1 d). Nothing of these is asked again.

**Not re-checked this round:** the leftovers of ours that closed index rows O, P, S, X, Y, AB, AD and AI still name
(each says *mine*). They stand as written there, not checked against `e540b42`.

**The way back, finished — your Round 88 §3 a #1, #2, #4, #5 and #7–#10: BUILT and LIVE.** §330 (`49d3165`); §331 ·
review (`2f68d26`: three reviews, 9 findings, all real); §332 · review, second round (`e1c700e`: 2 blocking, both real).
Lettered W, so they take none of this round's numbers. As ruled: the card and its editor on one line (`CardLine`,
`r88b`'s markup; the editor's name a record's, 24, `.wb-title.wb-record`); the gate takes the trail and loses its
eyebrow (`Menu › Change stage › Ready to send`; Cancel back to `Change stage`); a long trail gives way oldest first
(`fitTrail`, `trailFold.ts`); `--knob-face`; choosing lines a history step (Back and Escape do what Cancel does); B17
`Daiquiri › Swap Bacardi Superior`; a tick one Undo step, `Added Daiquiri`; a press begun inside a window no longer
closes it. Measured headless (Chromium; 1600 × 1068, 1200 × 1468, 768 × 1024 and 390 × 844; light and dark), each
commit's MEASURED. Not covered: Safari, VoiceOver, the iPad's edge swipe, the Builder driven end to end (it sits behind
a login). **Money:** nothing billed moves — a tick leaves the same menu, lines and total as the two steps it replaces
($121.37 both, +$18.40). Your two iPad checks are his 27.30 and 27.31 (§0's table).

*Premises of your Round 88 §3 a, corrected — told; they held at `e540b42` as much as now:*

- W1. **`Set rate` in the 512 sheet doesn't arise on his iPad** (your #4). TaxRateSheet is not `narrow`, so at 1024 and
  up it is 672 and the four steps stand whole (592 for the groove, measured); the first fold shows below 600 (at 390:
  `Ready to send › Tax rate`). In a 512 window it reads `Change stage › Ready to send › Tax rate`, as ruled. At
  `e540b42`: no `narrow` passed (`TaxRateSheet.tsx:160–166`), and the Sheet's default is 672 (`Sheet.tsx:89`,
  `:128–130`).
- W2. **Your 381 for the 512 sheet** includes `r88c`'s 1px border; the real Sheet has none (383). The same result in
  every case.
- W3. **Your trail widths reproduce on the app's own Spectral** — your lab, run headless on the app's fonts: Menu 57.8,
  Change stage 108.5, Ready to send 111.9, Group lines 97.4, Tax rate (knob) 108.2, New group line (knob) 162.7; the
  real Trail 57.78, 108.45, 111.91, 97.41, 108.22 and 162.69. B19's real knob, `How did it go, roughly?`, is 224.6
  against your stand-in's `Which ones are tagged?`, 227.6: it folds either way.

*(ours), told — object if you would:*

- W4. **Our `›` takes 14** (border-box 5 + margins 2 and 7); `r88c` draws it content-box, 15.5. The rule runs on what is
  drawn, so ours folds on our widths: door 1 at 390, `Group lines` 84.3 (your about 83).
- W5. **`r72c`'s 1.15 is withdrawn for the card's body too.** `CardTitle` is one component, card and body, so the
  record's name is 24 / 1.2 in both, as `r88b` and your README's Type say; 36 of the 171 stored renders `check-separate`
  compares moved (35 cards and the event card), nothing else.
- W6. **`fitTrail`'s exact give-way:** a step shrinks only as far as the line needs, never under its floor (64, or its
  own width), then folds with its `›`; a step wider than 140 is written at 140 by the measure, not by CSS; the knob is
  cut only once every step has folded, and the last `›` is never freed.
- W7. **Escape while choosing lines** acts only with no window over the page and the key not already taken; since §331
  it also steps aside for any menu open over it (`role="menu"`: the ⋮, the stage list, the Undo list): one Escape closes
  the ⋮ and leaves him choosing, his ticked lines kept; the next does what Cancel does (your Round 86 §0 q4: Escape does
  what the top-left does).
- W8. **Leaving the page by the side menu while choosing lines** goes where he tapped, choosing dropped, as leaving by
  Back did before §330 (§331: before it, the Builder came straight back and the group he was making was gone) — and the
  group's name and category he typed go with it, with nothing asked. The Builder holds them only while it is open
  (`GroupDoors.tsx`'s state, read at `e1c700e`, not run), and the app's ask-before-leaving (`useAskOnLeave`) is used by
  Settings' business form alone (`git grep useAskOnLeave e1c700e -- src`; the same with the guest count). Your Round 88
  #7's *"Nothing is lost, so nothing asks"* rules Back, the swipe and Escape, which now do what Cancel does — not a page
  tapped in the side menu or the phone's bottom bar. ❓ Asked with W14.
- W9. **The calculator keeps its `heading`** (it names no record); `CardLine` is a new shared part, drawn by the five
  read cards (a product's, a cocktail's locked card, a prep's, the Builder's recipe card, History's) and the labs; B4
  unchanged — Review closes the window, and the way back is ⋮ › Stage… › Ready to Send, which checks again.

*Asked:*

- W10. ❓ **A folded step is still a keyboard Tab stop, out of sight.** It is the visually-hidden pattern (absolute, 1 ×
  1, `clip-path: inset(50%)`, never `display: none`), so VoiceOver reads it, as ruled — and a keyboard's Tab lands on a
  button he can't see. His 27.31 says it is with you. Keep it a Tab stop, or take it out of the Tab order?
- W11. ❓ **A press begun on the dim and let go inside the window** still closes a Sheet (the click lands on the dim) but
  not a gate (it lands on their shared parent) — as before §330, untouched: your #10 rules a press begun inside. The
  app's confirm (W12) closes, as a Sheet does: its dim is the box's parent, so the click lands on the dim, which answers
  a press begun there (`ConfirmDialog.tsx:192`, `:193`, `:199`, `:227` at `e1c700e`; read from its code, not run).
  Should all three match, and which way? *(ours), told:* a press begun inside that ends in no click — a scroll — leaves
  the dim's note of where it began set until the next press, which sets it again; only a scripted click could see it
  (§331).
- W12. ❓ **The app's confirm got your #10 too** (§331). `ConfirmDialog` — the trash and `Delete…` boxes, `r85g`'s
  one-button boxes, the template's choice, Settings' and History's confirms — no longer closes on a press begun on its
  words and let go over the dim; a plain tap on the dim still cancels. Your Round 88 README's map (`README.md:44`) names
  *"`Sheet.tsx` scrim, `GateDialog.tsx` scrim"*; your ruling says *"A press that began inside a window doesn't close
  it"* (`ROUND-88.md:138`). Confirm, or say otherwise and it comes out.
- W13. ❓ **The window moves up the screen at Edit** (§332, measured; older than §330). Inside the window ✕ and the name
  keep their places from card to editor, as `r88b` rules (✕ 12 · 12 in both; the name 24 in both, 20 → 76). But at 1024
  and up a Sheet is centred (`lg:items-center`, `Sheet.tsx:389` at `e1c700e`; the same class at `e540b42`), so when Edit
  makes the window taller its top moves up the screen, ✕ and the name with it: a prep card 37.2 up at 1600 × 1068 (the
  card 844 tall, top 112; the editor 918.5 — the 86dvh cap — top 74.8) and 185.1 at 1200 × 1468; a product's about 175
  and 262 (estimated: no lab opens a product's editor from its card, §332); a cocktail's 0 (both windows at the cap).
  Should a card and its editor keep the window's top edge — windows held at the top on the iPad, or the editor opening
  where the card's top was — or stay centred? Nothing moved in code: either would build past your ruling. If it moves,
  please draw it (extends `r88b`): where the window sits at 1024 and up, for a card and for its editor. His 27.30 tells
  him it is with you.
- W14. ❓ **One Back that seems to do nothing** (§331's leftover, as §332 left it). After he leaves the Builder by the
  side menu while choosing lines — or while the calculator's `Choose cocktails` is held, as since §250 — that step's
  entry stays in the browser's history under the new page (no page can take an entry out from under another), so after
  Back to the Builder, one Back there does nothing (the old step's entry, then the page's own). Nothing closes wrong and
  nothing leaves the page wrong: §332 fixed the walk that did (Back there no longer left the next window open, and
  closing it no longer took him off the page). Closing the gap means a link stops while such a step is held, lets the
  step go, then goes — as the app's ask-before-leaving does — and that changes how every page's links behave: a path
  across parts, so it is yours. The same stop would decide W8: while he is choosing lines, a page link could let the
  group's name and category go, keep them, or ask. Leave it, or stop the link — and then what of W8's name and category?
  If the link stops, please draw the sequence (extends `r74g`, the group's bar while choosing lines): the tap, what he
  sees as the step lets go or asks, the new page.

**The guest count — your Round 87 §3 d, with §4 c #4's first half: BUILT and LIVE** (§320 `892f166`; §321 · review
`a6fa33f`: three reviews, 19 findings; §323 `79b0a30`, Sean's answer; §324 · review `2983a98`: three reviews, 12
findings, the one blocking fixed; sent 23 Oct at 02:29 UTC, live by 02:37). Lettered G. As ruled (`r87o` 1–3): the
calculator keeps the count its last Update used, and its Guests box opens at it — until Event details' count changes
(Sean's decision, G2); the estimate scales from that count and names it (`From Hartley wedding · 22 lines at 150
guests`; `The quantities are for 150 guests. Event details says 120. Categories that follow guests scale to each end.`);
when the calculator's count differs from Event details', Update asks — `Also set Event details to 150 guests?` · `It
says 120. The invoice’s paper prints that.` · `Keep 120` / `Set to 150` — both answers update the lines, `Set to 150` in
the same Undo step, Escape back to the calculator with nothing written; with hours typed too, one box, `Update Event
details too?`, a row each (`Keep 6–10 PM` | `6–11 PM` | `5–10 PM`); after a Keep it doesn't ask again until one of the
two figures changes. The box is the app's one confirm (`ConfirmDialog`'s choice, §290's) with `r87u`'s row
(`ChoiceRow.tsx`, lifted out of Event details as §268 asked). Five keys only an Update writes, in the calculator's
settings: `guests`, `keptGuests`, `keptBarTimes`, `keptHours` (§321), `guestsFor` (§323–§324). Measured headless
(Chromium; 1200 × 1468, 1600 × 1068 and 390 × 844; light and dark), and the real sheet driven against the real tabs.
**Money:** nothing billed moves but through Update's lines, as before; every invoice saved before it gives the same
estimate, byte for byte (1,080 sheets and papers against the app before it). What moves is the estimate's scale where an
Update kept a count Event details doesn't hold (150 to 180 typed reads ×1 to ×1.2 of the 150-guest lines, not ×1.25 to
×1.5), and what the calculator offers. A stored shape: every device needs reloading, now that it is live.
`check-guest-count`, 193 assertions. Not covered: Safari, his iPad, his account and real invoices.

*First — it decides what the guest count asks:*

- G1. ❓ **Hours alone differing, the guests agreeing** (your Round 87 §4 c #4: *"Hours typed in the calculator are asked
  about at Update, in §3 d's box"*). Built read literally from your §3 d — *"The box at Update shows only when the
  calculator's guests differ from Event details'"* — so no box: the typed figure stands against the bar times, as since
  §266, and `r87o` draws no box with the Bar times row alone. Or §4 c #4's *"asked about at Update"*, with the Bar times
  row alone? If it should ask, please draw that box (extends `r87o` 2, whose title, `Update Event details too?`, stands
  over both rows): its title and words with the Bar times row alone.

*Sean's decision, told — and what it leaves for you:*

- G2. **Told — Sean decided: once Event details' count changes after an Update, the newer number wins.** The case:
  §320's reviews found it and §321 left it as ruled (its #12, for you and Sean); §322, the verify after §321, walked it
  again — updated at 120, then Event details 200, the calculator opened at 120, `Event details says 200`, `Update 0
  lines`; and with anything else changed, Update asked `Also set Event details to 120 guests?` with `Set to 120` filled
  and focused, so Return put the old count back over the newer one. That is your *"Its Guests box opens at that count"*
  (`ROUND-87.md:281–282`) read alone. Our question to him, 22 Oct: *"Say you press Update at 120 guests, then the client
  says 200 and you change Event details to 200. As Design drew it, the calculator keeps using 120 and says "Update 0
  lines"… What should happen?"* He tapped **Newer number wins (Recommended)** — the option read: *"Change Event details
  after pressing Update, and the calculator starts from the new count, as it does today. A count you typed in the
  calculator holds only until then. It's the same rule you picked for hours on 19 Oct ("the newer one"). The rest of the
  guest count goes live now, and Design is told in Round 89."* **What it changes in your §3 d (§323–§324):** the
  calculator's count stands only while Event details' guest box reads as it did at that Update (a fifth Update key,
  `guestsFor` — its count, or his words when it holds none); once Event details' count changes, the calculator opens at
  Event details' count, as the app did before §320, so line two says `On the invitation`. *(ours), read from his option
  — object if you would:* (a) Event details' box is compared as it reads — a count as a count, anything else as his
  words, trimmed: other words, or cleared, are a change; the same words, or blank then and now, are not; (b) cleared or
  in words since, the calculator opens at 0, the zero guard, as before §320; (c) put back, the Update's count (and a
  Keep) stands again — as your Round 88 §1 b has the hours note go when *"the times [are] put back to the ones the 6 was
  typed against"* (`ROUND-88.md:25–27`); (d) no note that the calculator moved. Two effects to see: (i) cleared or in
  words since, the estimate keeps printing the Update's count (`From Hartley wedding · 3 lines at 120 guests`, boxes 120
  to 120) with no hint — Event details has no count to name — while the calculator asks for guests, and `r87r`'s red
  after an untick can't show, as before §320; (ii) when he types a count other than Event details', Update asks only if
  a line would move — typing back the count he kept, or the old count, the button reads `Update 0 lines`, greyed, and
  nothing is asked. ❓ (1) After Event details' count changes, how does he keep his own count when the lines already
  match it? Today he can't, short of moving a line. One answer with G5's second question and §6 #71. ❓ (2) Your Round 88
  §1 b note says when the calculator follows the bar times (`r88a` 1–2: `The calculator now uses 5 hours from the bar
  times, not the 6 you typed.` · `Keep 6`; then `The calculator uses the 6 hours you typed, not the 5 from the bar
  times.` · `Use 5`). The count moves with none, as before §320 — our (d). Should it have one, in `r88a`'s two forms —
  `The calculator now uses 200 guests from Event details, not the 120 you used.` · `Keep 120`, then `The calculator uses
  the 120 guests you used, not the 200 from Event details.` · `Use 200`? Not built: a new part. If yes, please draw it
  (extends `r88a` 1–2): where it sits — the hours note sits under Bar closes in Event details — and its two forms. It
  decides what is built soonest: your §1 b, queued after the guest count, changes the hours note.

*Asked:*

- G3. ❓ **Please draw: the path with no count in Event details** (extends `r87o`; a path across the zero guard, the
  calculator, Update and the estimate). `r87h`'s `Enter guests` puts the cursor in the calculator's Guests box; on a new
  invoice Event details is blank, so he types 90 there and taps Update. As built: (a) no box — Event details stays blank
  and the invoice's paper prints no count, while the estimate scales from 90; (b) the estimate's hint: none (§321;
  §320's was `r87o` 3's sentence without its middle, words you never wrote); (c) the calculator reopens at 90 with `On
  the invitation` while Event details stays blank, or holds the same words as at the Update; once it holds a count, at
  that count; other words, or cleared, at 0 (§323–§324). The same with Event details in words (`80–100`, `about 90`),
  and with `0` — where the box does ask, `It says 0. The invoice’s paper prints that.` · `Keep 0` / `Set to 90`, and
  after `Keep 0` line two says `Event details says 0` while the estimate treats 0 as no count. Sean wanted the box *"so
  the invoice, estimate and paper agree"* (his 19 Oct **Ask to match**; the option's words, ours). The box or none, and
  in what words; the hint; line two.
- G4. ❓ **Please draw: the Bar times row on two lines** (extends `r87o` 2, which draws `white-space: nowrap` and `Keep
  6–10 PM` only). Measured on the real box at 440: a choice 128.67 wide, 108.67 for its words — `Keep 6–10 PM` 94.97,
  one line; `Keep 9 PM–1 AM` 116.86, `Keep 10 PM–2 AM` and `Keep 8 PM–12 AM` 124.36, `Keep 7:30–11:30 PM` 132.47 and
  `Keep 11:30 AM–4 PM` 143.11, each two lines, the track 48 → 51.5; a moved time with minutes too (`11:30 AM–5 PM`
  109.95, `7:30 PM–12:30 AM` 129.95). At 390: 98.67 a choice, 78.67 for its words; `Keep 6–10 PM` and `Keep 7:30–11:30
  PM` two lines, the other four three (the track 70.25). For a mobile bar a 9 PM–1 AM close is normal, not an edge.
  Built: two lines, centred, each time held to its AM or PM by a no-break space; nothing clipped. Please draw the row
  for `Keep 9 PM–1 AM` and for `Keep 7:30–11:30 PM`. (The same part as §4 #58's row.)
- G5. ❓ **The estimate's guest boxes when the lines' count isn't Event details'.** After `Keep 120` at 150, with nothing
  typed, the client's estimate says `about 150 guests` while the invoice's paper says 120. On G2's path, after Event
  details goes 120 → 200 with no Update since, the estimate says `about 120 guests` (the lines' count) while the paper
  says 200; the hint says so, and the calculator offers `Update 3 lines` at 200. And when the new count moves no line
  (120 → 121): the calculator opens at 121, `On the invitation`, `Update 0 lines`, greyed — it says the two agree —
  while the estimate says `The quantities are for 120 guests. Event details says 121.`, and its boxes and its paper keep
  120 until he types 121 there. Start the boxes at the lines' count or Event details'? And when Event details has
  changed since and no line would change, should the stored count follow Event details (the estimate reading Event
  details' count), or Update be offered for the count alone — where the zero guard (§272, plan 011) has an Update that
  writes nothing keep nothing? One answer with G2 (1) and §6 #71. If Update is offered for the count alone, its words,
  and a frame if the foot changes (extends `r87h`).
- G6. ❓ **Two spellings of one count.** The box and line two spell it as the calculator's box does — `Keep 1200`, `Event
  details says 1200`; the estimate's hint as the paper does — `Event details says 1,200`. `Set to 1300` writes `1300`
  into Event details' words, which the paper prints as typed (`1,300` would read as 1.3 on a comma-decimal device,
  §212). `r87o` draws no count past 999 (§321, read from the frame). Which spelling in the box, and which does `Set to`
  write?
- G7. ❓ **A count with a decimal.** The calculator's Guests box takes `150.5`, as Event details' does; `Set to 150.5`
  writes it to Event details and the paper, and the estimate rounds it (151). Whole counts only in the box — a refusal,
  a new state of the box — or `Set to` the rounded count? If whole counts only, please draw the refusal (extends `r87o`
  3's Guests row).

*Told, as built — object if you would:*

- G8. (ours) **Line two names Event details' count whenever the two differ** — after a Keep that still holds, or while
  he types another count — not only after a Keep; `On the invitation` otherwise. Since §323 it no longer arises when
  Event details changed after the Update: the calculator opens at Event details' count (G2).
- G9. (ours, measured) **`r87o` 2 built at its 440, `r87o` 1 at the app's confirm, 384** (`max-w-sm`), as §290 and §300
  built `r87v` 3 and `r87m` 3: at 384 a Bar times choice would be 110 wide, its words 90, and `Keep 6–10 PM` (94.97)
  would run over by 5.
- G10. **The choices 48**, each its whole slice (the app's 44 floor), the fill 42, on `r87u`'s part as §268 built it —
  not `r87o` 2's 40 on a 46 track.
- G11. (ours) **Undo takes the count back with its Update** (the knobs never, §263): the count says what the lines were
  worked for, and the estimate scales from it. One Undo takes the lines and `Set to 150` together; Undo and Redo bring
  the count back and forth (#1's note).
- G12. ⚠️ (ours) **A copy starts with no count — and money.** A Duplicate carries the five knobs and not the count or
  what was kept; a template holds no settings (your Round 87 §5). Sean's only words for it are his 19 Oct **Yes**, whose
  option read *"…Guest count and hours still come from the copy's own Event details."* (ours; his 22 Oct answer was
  about a number set by hand). Its money: a copy keeps lines worked for the source's count, and its estimate scales them
  from the copy's own Event details until its first Update — the mismatch your §3 d set out to fix.
- G13. (ours) **`Keep 6–10 PM` is remembered as `Keep 120` is:** not asked again until the typed hours or the bar times
  change — the hours he kept are stored beside the bar times he kept (§321; before it, a different figure typed after
  the Keep never brought the row back).
- G14. (ours, from the frames) **`On the invitation` in `--text-muted`**, as `r87o` 3, `r87t` and `r87h` draw it; the
  built line was `--text-secondary`. Both of line two's states are `--text-muted` now.
- G15. (ours) **The step's label stays `Applied the calculator`** (your Round 71 #12), with `Set to 150` inside it.
- G16. (ours) **The smaller readings:** no Bar times row for hours no bar can be made of (24 or more, 0, or a figure no
  whole minute gives — 4.334; 4.33 is 4 h 20); `1 guest`, `1 hour`; focus lands on the filled answer, and a tap too soon
  after the Update tap answers nothing (the confirm's choice, §290–§291); with nothing typed, the estimate's boxes start
  at the count it scales from; `Set to 150` writes Event details' guest box as that box writes it (the words, and the
  count beside them, §212).
- G17. **Frame against build:** `r87o`'s title 20 and body 15 are the confirm's 18 and 17 (as §300 noted); `r87o` 2's
  Guests line ends with a full stop and `r87o` 3's line two doesn't — both as drawn; the buttons sit the confirm's 20
  below, not `r87o`'s 8 inside a 10 gap.
- G18. **How §4 c #4's two halves meet.** The in-place note (§266, as Sean flipped it, your Round 88 §1 b) answers a bar
  time changed in Event details; the box answers hours typed in the calculator, at Update. After `Keep 6` there, the
  next Update with the guests apart asks about the bar times in the box; setting the bar times from the box is no change
  in Event details, so its note doesn't show; the moved times are stamped against the typed hours inside the Update's
  own step, so Undo puts the bar times and the typed figure back together (§321) — with #51's limit: a knob turned after
  the Update carries the live stamp into every Undo copy, as it does for `Keep 6`. For your Round 88 §1 d, queued after
  the guest count: `Use 24 hours` expects the bar times to read 24, *"so `barTimesKey`, typed hours and §3 d's box all
  work as for any other times"* (`ROUND-88.md:47–50`); the box's moves refuse a span of a day or more today, and typed
  hours of 24 get no Bar times row — settled in that build.

**A pour the app can't count, and the To make note — your Round 88 §3 b #15 and #16: BUILT, on `main` with this round,
not live when this was written** (§350 `995c154`; §351 · review `cc65bf2`: three reviews, 16 findings — among its fixes:
the note had named a syrup poured Don't buy as missing after every Update). Lettered U: this round's F is the pie's
Batch F. As ruled (`r88g` 1–2): a pour in a unit the app can't read (`top`, `rinse`, `float`, a blank, or any unit the
app's unit list doesn't hold — U3), beside a pour of the same product it can count, reads as §81's floor whichever drink
was ticked first (U10 is an older row the order still decides) — `at least 39 bottles` in gold, the working counting
only the drink it could count, then your sentence, `The Kir Royale asks for 1 top, a measure the app can’t count. Give
it in oz or ml to count it.`, in 13 semibold `--gold-text`; it stays out of `Update N lines` and writes nothing. The
note: before Update as built; then `Prep you batch yourself. Their ingredients are on the invoice.`, or your one-name
and two-name sentences, word for word. Measured headless (Chromium; 1200 × 1468, 1600 × 1068 and 390 × 844; light and
dark): the sentence under the working's last line every time, 2 lines at 1200 and 1600, 3 at 390, the quantity never
over the words; the note inside the rail (360) and the drawer. **Money:** nothing billed moves — Update writes byte for
byte what it wrote before, on 4,000 seeded invoices (§350) and 23,000 more (§351); every row that changed was blocked,
or an on-hand row written blank, before and after. The red button after an untick is the same on all but one of the
23,000: there a `wedge` between a `2 barspoon` and a `3 g` of one product used to hide their clash, so an untick that
changes that row now turns it red, as it should. `check-uncounted`, 57 assertions. Not covered: Safari, his iPad, his
own recipes.

*First — the one stop:*

- U1. ⛔ **Two or more drinks the app can't count, on one product.** Your #15: *"With two or more drinks it can't count,
  it's one sentence that opens with the count, as #36 (b) rules."* #36 (b) (`ROUND-86.md:215`: *"It opens with the
  count, in #33's words, and keeps the rest"*) was built in §258 as `Two recipes ask for this, and it is sold in ml.`
  Here the rest doesn't survive the count: `Two recipes ask for this, a measure the app can’t count.` calls the product
  a measure, and the figure it would keep differs drink to drink (`1 top`, `2 rinse`). No frame draws it, so it was not
  guessed. **The stand-in — our call, not a design:** §351 left open whether this case goes up with a stand-in or is
  held, and we send it with this round — words only, no money, and a rare path, since only older recipes hold such units
  (U3). It stays ⛔ for you: live as a stand-in until you rule. The drinks' drawn sentences run on in one gold block, one
  after the other (#36 (a)'s form for two refusals), the same sentence said once — in the order he ticked them, which
  your *"The order never matters"* forbids. The quantity, the working and the row's state are the same in every order;
  only the sentences' order moves. Two drinks: `at least 26 bottles`, the block 3 lines at 1200 and 1600, 6 at 390
  (109.13 tall). ❓ Please give the sentence, or draw it (extends `r88g` 1).

*Asked:*

- U2. ⚠️ **The foot — and our own wrong report under your ruling.** Our Round 88 #15 said that with the French 75 ticked
  first the foot read `1 line needs a number from you`. It didn't: that is `footFor`'s foot, calculate()'s
  (`calculator.ts:985`, `:1800` at `eeddf7d`), which nothing renders: the sheet's foot is `proposals`'
  (`CalculatorSheet.tsx:487` at `eeddf7d`, rendered at its `:599–600` and `:623`), and `git grep '\.foot\b' eeddf7d --
  src` finds no other reader of calculate()'s (its one other hit, `SheetToast.tsx:339`, is a toast's own `g.foot`);
  `footFor`'s own comment, `:1803`, agrees. `proposals`' foot counts every blocked row that isn't a clash — every §81
  floor and every blank size — as `1 has no product to change` (`calculator.ts:2403`, `:2419` at `eeddf7d`). Our clause
  is marked wrong in place, in Round 88's #15 below. Your #15 has the floor count *"in the foot as one that needs a
  number from him"*, and `r88g` 1 draws `1 line needs a number from you` · `Update 1 line`; built, the floor counts as
  every floor row does, `1 has no product to change`. ❓ Should floors and blank sizes say `1 line needs a number from
  you` — words only, but on every invoice with a blank size — or the foot stay?
- U3. ❓ **`Give it in oz or ml` for a product counted or weighed.** Built word for word; your reason covers `top`,
  `rinse` and `float` (*"they have no fixed measure"*). It reaches a blank and any unit the app's unit list doesn't
  hold, beside a pour of the same product it can count. Measured, it refuses `top`, `rinse`, `float`, a blank,
  `sprig(s)`, `leaf`/`leaves`, `wedge(s)`, `wheel`, `twist`, `slice`, `peel`, `cube`, `scoop`, `part(s)`, `whole`,
  `egg`, `bunch`, `handful`, `to taste`, `spray` and `mist`, and reads `dash`, `splash`, `drop`, `barspoon`, `pinch`,
  `cup`, `tbsp`, `tsp`, `piece`, `each`, `oz`, `ml` and `g` among the rest (the real `parseUnit`). Only older recipes
  hold such units: the unit picker offers the list alone. The lime, measured: a Margarita's `1 wedge` of `Lime, whole`,
  sold by the each, beside its Lime juice prep (12 limes to 500 ml), reads `at least 464`; done as told — `0.25 oz` or
  `10 ml` — it becomes a clash with no number (`The Lime juice asks for 12 each and the Margarita asks for 0.25 oz. Fix
  one to the other’s kind of unit…`); `0.125 each` counts it, 546. ❓ Should the remedy follow the product's kind — oz or
  ml for a volume, each for a count, g for a weight?
- U4. ❓ **A pour with no amount, named in two sentences.** A recipe row with no figure reads `The Kir Royale asks for 0
  top, a measure the app can’t count…` (`asks for 0, a measure…` with no unit) — and the sentence the app already showed
  for that row with the Kir Royale alone, at `eeddf7d` and now, says the same: `The Kir Royale asks for 0 top and this
  is sold in ml…` (with no unit, two spaces after `asks for 0`). Both read the recipe row's own figure, 0 when it has
  none: the new sentence through `clashSideOf` (§233), the as-built one directly (`need.perDrink ?? need.qty`). So a
  stand-in in one would name one row two ways. ❓ How should a pour with no amount be named, in both?
- U5. ❓ **A swap's band on a floor** (`r87g` 3). Every blocked `no-package-size` row in `Swaps to apply` reads `Needs a
  bottle size. Add one in the Library.` (`swapBlockedWords`, `swapsToApply.ts:826–827` at `eeddf7d`), and a floor is
  one. A French 75 and a Kir Royale both swapped from Champagne to a Prosecco with its 750 ml read it — false — in
  either order; before §350 the Kir-Royale-first order read the clash's `Two recipes ask for this, and it is sold in ml.
  Say how much each one holds and this can be counted.` (the other order, and every §81 floor, already read the false
  one). Update writes the same in all four. `r87g` rules the band's words for a missing size and for a clash; a floor is
  neither. ❓ What does the band say on a floor — the floor's own sentence (the obvious candidate, not built) — and on
  §81's floors, which show none (their refusal is on the row, not on screen — U6)? If more than its words change, please
  draw it (extends `r87g` 3).
- U6. ❓ **§81's older floors.** A row whose prep share was refused still shows only its `?` term, its working gold, no
  sentence — kept byte for byte. Should it take `r88g` 1's form too: the working, then its refusal?
- U7. ❓ **The floor with its line on** — a new state with no frame, live once this round's build is up: accept as built,
  or draw. The tick puts the product on at 1, so in use the row reads `stays at 1`, your sentence, then `Needs at least
  39 bottles` (§88's `r59d` rule; the sentence 2 lines at 1200 and 1600, 3 at 390). `r88g` 1 draws the row with no line.
  ❓ That order of the two gold lines? If not, please draw it (extends `r88g` 1).

*Told, as built — object if you would:*

- U8. **Frame against the app, the app's kept:** the working's words are the app's (`297 French 75s × 3 oz × 1.1 cushion
  ÷ 750 ml (25.36 oz) per bottle = 38.65`), not the frame's shorthand; its colour `--text-secondary` (#474239), where
  `r88g` draws both rows' working #5F594E; the row's line height 1.4, not 1.35; no 3px gaps between name, working and
  sentence (the app's rows have none); and the name — `r88g` 1 draws `Champagne` in `--text`, the app draws a blocked
  row's name in `--text-secondary` — all but a `Not counted` row's, which keeps `--text` (`CalculatorSheet.tsx:912` at
  `eeddf7d`) — as before §350.
- U9. (ours) **#15:** a pour through a prep is named by the prep and its row's figure (`The Kir base asks for 1 top, a
  measure…`, §233's naming); a pour with no unit reads its figure alone (`asks for 1, a measure…`); a row with nothing
  it can count (every share refused) shows its refusals, then the sentence; the same sentence twice is said once (§258's
  rule). **#16:** *before Update* means no line on the invoice the calculator wrote — the red button's own test, so an
  invoice calculated before 21 Oct counts as calculated, and an Undo past the first Update is before it again; *on the
  invoice* means any line of the product that isn't on hand — billed, a comp, or one he hid; *would buy* means a prep's
  row linked to a Library product and not Don't buy — water with no product, or a product no longer in the Library,
  doesn't count against it, a prep with nothing to buy is on, and a syrup poured Don't buy is one he has, so its own
  ingredients aren't asked for (§351, the calculator's own skip); three or more names `A’s, B’s and C’s`, and a name
  ending in s takes `’s` too.

*Asked — an older row:*

- U10. ❓ **One older row the order still decides** (§351). A Punch whose share of a prep is refused (4 oz against a 1 kg
  yield), a French 75's `3 oz` and a Kir Royale's `top`, on one product: Punch first, a floor — the refusal, then the
  Kir Royale's sentence, the French 75's 3 oz unnamed; the French 75 or the Kir Royale first, a clash — `The French 75
  asks for 3 oz and the Sparkling base asks for 500 g…`. The Kir Royale's pour reads the same in every order; the rest
  is §81's older merge, between a refused share and a readable pour of another kind, not changed here. Your #15 calls
  tick order deciding a row §51.4's fault; whether that reaches this row is yours. ❓ Should this row read the same in
  every order — as the Punch-first floor (the refusal, then the Kir Royale's sentence) or as the clash — or stay as
  built until §81's merge is ruled on?

**Round 87 — every step but the pie is BUILT and LIVE**, in the order sent below — Sean's order (our Round 88 §4) had §4
a seventh, §5 eighth and §3 a–c ninth, and those three went up in reverse; §3 d, the guest count, tenth, went up last
(§0 G) — each reviewed again, adversarially, by checkers of its own before it went up:

| Your Round 87 | What | § | Sent (UTC) |
|---|---|---|---|
| §1 b, §7 (`r87t`) | Plan 009: the calculator keeps its settings with each invoice; a locked one's figures read-only | §263–§265 | 20 Oct, by 18:52 (from the Mac) |
| §4 c (`r87p`) | Plan 010: the hours from the bar times, line two's states, the rail's 12-hour times, the note (ours then) | §266–§267 | 20 Oct, 19:41 (the Mac) |
| §8 (`r87u`) | The cocktail-hour switch | §268–§269 | 21 Oct, 02:35 |
| §4 d (`r87r`) | The red button after an untick | §270–§271 | 21 Oct, 04:54 |
| §4 b (`r87h`); :372 | Plans 011 + 012: the zero guard; a duplicate with its menu and swaps | §272–§273 | 21 Oct, 07:20 |
| §6 (`r87g`) | Plan 013: `Swaps to apply`; Update moves the line; Sean's four answers | §274–§281 | 21 Oct, 22:45 |
| §3 a–c (`r87m`, `r87n`) | The estimate's sends, per guest smaller first, `Included` | §300–§302 | 22 Oct, 05:55; build `tjcASscDcUmefjVyffzCt` |
| §5 (`r87s`, `r87v`) | Templates and the cocktail menu; Sean's *"Keep it."* | §290–§294 | 22 Oct, 06:29; build `0cV-ceBvlFzPbFflxO8Kg`, read 06:37 |
| §4 a (`r87q`) | A number set by hand; Sean's **Use the calculator** | §310–§313 | 22 Oct, 12:34; build `giu3LCgANm6XEuqowE6CI`, read 12:43 |
| §3 d, §4 c #4's first half (`r87o`) | The guest count: the calculator keeps the count its last Update used; the box at Update; Sean's **Newer number wins** | §320–§324 | 23 Oct, 02:29; build `Wp9Kw2tkGtL6yviAgprUH`, read 02:37 |

Each cloud send's live build was read back by curl after it; the Mac's two were found in the first build read, 21 Oct at
04:55 (`limbo-app` `PROGRESS.md:100–101`, and its 20–22 Oct entry). **Money:** no stored figure moves on its own
anywhere in §263–§313 (each commit's MONEY; `check-onhand`'s renders byte for byte at every gate). What moves, on
purpose, is at Update: the hours from the bar times (§266), nothing written with nothing to count (§272), a swap billed
on its own line (§274–§281, with Sean's answers), a number set by hand left alone (§310). Against the app before the
swap's step (*live*, §7), the bill is higher: by Sean's answers, where live made bottles free that are now charged (#81,
+$13 in the test; #96, +$35 at 40 guests); by your Round 87 §6 #2 (b), read for a gift comped before the swap (#95,
+$64); and with nothing ruling it, in #87's last form (4 of 105,000 fuzzer runs, +$20 to +$57), #97 (six bottles for
five poured, +$13) and #99 (+$105 / +$64 / +$99). Each is asked below.

**Not built of Round 87:** §2, the pie — plan 015 is written, reviewed and waiting on §1 here. §3 d with §4 c #4's box
is BUILT and LIVE since 23 Oct (§320–§324, in the table above; G1–G18 above).

### 1 · ⛔ The pie — plan 015 waits on you

Plan 015 (`plans/015-the-pie.md`, `b716180`, reviewed by three checkers — design, data and code, 40 findings, all real,
three with a part that was not — and revised in `ab78525`) builds your §2 in six batches: **A**, the arithmetic, no
screen; **B + C + D**, the stored shapes, the Drink calculator and Event details, which go live together; **E**, the
Builder's line and the switch; **F**, Settings and a product's pour. **Nothing of it is built:** a search of `src` for
`onItsOwn`, `Also served on its own` and `Drink calculator` finds none. Batch A could start once step 5 was on `main`
(plan:88); in Sean's order (our Round 88 §4: the guest count tenth, the pie eleventh) it starts after the guest count,
on the provisional readings each item names, pinned in named fixtures. C waits for every ⛔ answer. Where A and B build a
provisional meanwhile (#3, #4, #6, #11, #12), an answer that differs changes those assertions before C, and C never
ships on one of them (plan:1784–1786). The items in §1 e are not ⛔: the plan builds their provisionals until you answer.

**Your Round 88 §1 c settled Batch F's wait on Round 88:** the tuned line is now your words, `Tuned from your own
events`, and the other three keep `Starting guess`. F now waits on #4 and #25–#29 below. The rest of your Round 88
changes the pie only where #2, #5 and #17 say (its frames hold nothing of the pie: a search of the frame's source for
`crowd`, `tuned` and `drink mix` finds none). Sean's order puts the guest count before the pie, as our Round 88 §4 told
you, and you received it (`ROUND-88.md:10`); the guest count is live since 23 Oct (§320–§324, §0), and plan
015's Batch B is read again against it before it is built.

Each item names what waits on it. **⛔ C** holds the Drink calculator, and with it D, since they go live together. Items
with no ⛔ will be built as the provisional until you answer.

**a · ⛔ Batch C — the Drink calculator.** Beer is counted with no switch (:124), so C reaches every invoice at its first
Update.

1. ⛔ **Undo of shares, and of a crowd style's kept figures** (plan Q1). :145 says `Split evenly` unpins every drink in
   the kind *"in one undo step"*, but the pie stores its shares with 009's settings (:420–421), and 009's settings are
   never an Undo step but for §266's `Keep 6`: `keepStageAndTicks` keeps the live settings on every Undo
   (`invoiceTabs.ts:1451–1475`, the Keep at :1463–1469; your :13 had no objection to 009). Picking a crowd style is an
   Undo step, `Crowd style` (`EventDetailsSheet.tsx:647`); the plan keeps one copy of each style's figures
   (`mix.styles`), so Undo of a pick finds that style's copy. ❓ (a) Is a share he types — a drink's or a kind's — its
   own Undo step, and what does its label say? (b) Is `Split evenly` one step? (c) Do the five knobs stay out of Undo,
   as 009 built them? (d) When he picks a style he already used on this invoice, does it re-read Settings (*"refills"*,
   :120) or bring back the figures it filled with then (*"changes no invoice already filled from it"*, :165)?
   Provisional: every Undo keeps the live pie; one kept copy per style. Note: the guest count (§320–§324, live) puts the
   five keys an Update writes on Update's own Undo step while the knobs stay out (§0 G11) — a second model inside 009's
   settings the answer can follow.
2. ⛔ ❓ **The zero guard and the foot, with the pie** (plan Q2; :102–103, `r87l` e, `r87i` 6). With the pie the guard
   fires only when no served kind has any drinks. (a) When every served kind is at 0%, which box does the foot's `Set
   drink mix` put him in? Today it is the Drink mix knob's (`CalculatorSheet.tsx:514–517`), which the pie removes.
   Provisional: the first served kind's. (b) Where does `1 on hand · not ordered` (`r87i` 6) sit among the foot's
   clauses? Today they run, in this order, `1 line set by hand · 6 stay as it is · 1 uses two units that can’t be added
   · 1 has no product to change` (`calculator.ts:2411–2420`). Your Round 88 #15's `1 line needs a number from you`
   (`r88g` 1) is not among them as built: a floor counts in `has no product to change`, as every floor did (§0 U2).
   Provisional (ours): after `set by hand`, before `stay as it is`. The same foot's second clause is #140; please
   answer them together.
3. ⛔ **What travels with a copy: the pie's pins and its kept crowd styles** (plan Q5, its first half; the line's switch
   is #19). Your :360 says the pie never travels with a template. For a Duplicate there are two readings, both run:
   **(a)** the copy keeps its source's pie, so no figure differs between source and copy — provisional, built in B;
   **(b)** every copy is a new invoice, nothing pinned, so a copy of an old cocktails-and-beer invoice with no wine
   counts 313.5 cocktail drinks where its source counts 291.6, and a copy of a cocktails-only invoice counts every drink
   a cocktail. Sean has answered both sides of this for other things: 19 Oct, a copy keeps the calculator's settings (he
   tapped **Yes**, *"A copy keeps how you set the calculator"*; our question named the drink mix); 22 Oct, a number he
   set by hand starts fresh on a copy (**Use the calculator**, §10 #139). A typed share is both a setting and a number
   he set. ❓ Which reading? If you rule it is Sean's, we ask him. Code: `carriedCalcSettings` carries the five knobs
   only (`calcSettings.ts:187–190`).
4. ⛔ **Beer and soft drinks that aren't one can or bottle; a mixer on its own; pours for counted kinds** (plan Q12; ⛔ C,
   E and F). *"One can or bottle a drink"*: for a product counted in `each`, `can` or `bottle` the plan reads `1 ÷` its
   pack size (a case of 24 → 1/24 of a case a drink). ❓ How is each of these counted: (a) **a keg** (`Keg` packaging,
   `types.ts:4196`; `keg` a count unit, `units.ts:179–180`) — read literally, 108 drinks × 1 keg × 1.1, about 119 kegs;
   (b) **a growler, or a pack recorded by volume** (a 12-pack as 144 fl oz: one pack a drink, 12 times too many); (c)
   **a single can recorded by volume** (the test data's Fever-Tree, `6.8 fl oz`: one a drink is right, and nothing tells
   it from a growler)? (d) A mixer switched on counts as Non-alcoholic at one can or bottle a drink — on a 1 L tonic, a
   bottle a drink: right? (e) `r87k` 13 draws a spirit's own pour in `oz`: for a beer or a mixer, in what unit?
   Provisional: only `each`/`can`/`bottle` products that are not a Keg are counted; every other beer or soft drink shows
   the existing can't-be-counted state (`AlertTriangleIcon`) and writes nothing.
5. ⛔ **Your Round 88 #15's floor, in a row the pie merges** (with #4). The pie puts a bottle's cocktail need and its own
   on-its-own need in one row. Ginger beer in the Moscow Mule, in oz, and also switched on as Non-alcoholic, recorded as
   `6.8 fl oz`: the Mule's part counts; the neat part is #4's case. ❓ Is that row Round 88 #15's floor — `at least N`,
   the Mule's working, then a gold sentence for the part it can't count (whose words?) — or blocked whole? The money is
   the same either way, nothing written; the words differ. (Round 88 #15 itself is BUILT with this round, §0 U1–U10.)
6. ⛔ **A pinned kind and an empty one; every served kind pinned** (plan Q16). (a) Does a pinned kind grow when another
   kind is empty? The plan reads no — needed so an invoice saved before the pie keeps its 45% (:204). Worked: cocktails
   pinned at 50, no wine → 324 drinks (50%), not 346.0 (50 ÷ 93.64, wine's 6.36 shared out). (b) When every served kind
   is pinned and they add to less than 100 — above all an old invoice with cocktails only, pinned at 45 — do they stay
   put, the other 55% not counted as today, or grow to 100% (`r87l` c's rule for drinks, applied to kinds)? Growing
   takes your event from Espolòn 10 → 22 and Tito's 7 → 15, +$543.80 at his next Update (run). (c) On a NEW invoice, do
   all-pinned kinds grow as `r87l` c's drinks do? Provisional: a pinned kind never grows, on any invoice; all pinned
   under 100 → the rest not counted. ❓ Confirm (a) and (b); rule (c).
7. ⛔ ❓ **`Split evenly`, unticked pins, `Just added`, made room** (plan Q17; C's own checks assert *"`Split evenly` as
   Q17's answer places it"*, plan:1257–1258). (a) When does `Split evenly` show? `r87i` 4 draws it; `r87i` 5, with a pin
   still on, doesn't. (b) A pinned drink unticked and ticked again: back at its old pin, or `Just added · even split`?
   (c) *Just added* since when — since the drinks the last Update counted (ours: `menuAtUpdate`, `outOfDate.ts:144`)?
   And for a beer added by hand, where nothing records the last Update's lines? (d) `Pinned · made room` shows until the
   sheet closes: are the shrunk figures then kept? Ours: kept at the next commit or Update; opening writes nothing.
8. ⛔ ❓ **The edges no frame draws** (plan Q18 a–f; C draws them, and the plan stops on any word or state not drawn,
   plan:1781). (a) A drink pinned at 0% inside a kind: do its bottles read `Not counted · the Paloma is at 0%`? (b) The
   Margarita at 100 with an unpinned drink at 0. (c) A kind becoming served while the served kinds are pinned to 100:
   does `r87l` b's 1 ÷ n apply to kinds? (d) An empty kind that is pinned (an old invoice's cocktails, none ticked):
   `None on the invoice · its 45% goes to the others`, still marked pinned? (e) The refusal with two or more drinks
   pinned — `r87l` a's words name one, `Only 40% is left. The Margarita is pinned at 60%.` — and for kinds, `… Cocktails
   is pinned at 60%`? (f) All five kinds pinned below 100: what `Total` reads (`Total 96%`?), in what colour, since it
   isn't refused. Please give the words; draw any that is more than words.
9. ⛔ ❓ **A product whose only line is free — a beer with the pie, any bottle at Update today** (plan Q18 g; plan 015's
   For Sean #2; §7 #89). (ours) A hidden or comped line counts as poured, and since the swap's step a product whose ONLY
   line is a comp takes the whole count at Update, still free (`productLineIn` returns the billed line, else falls back,
   `types.ts:154–168`). Live today: Tito's comped at 1 becomes 7 comped (§7 #89). With the pie: a gift case of beer
   typed as 1 and comped becomes 6 cases `Complimentary` on the client's copy at the next Update. Your Round 87 §6 #2
   (b), *"A comp never takes a billed quantity"* (:67–69), rules a comp beside a billed line, not a comp alone. Which:
   (a) as built — the lone comp takes the whole count, free; (b) the comp keeps its own figure and a billed line beside
   it carries the rest; (c) a billed line at the whole count beside the comp? One answer covers both; Sean hears it in
   plain words.
10. ⛔ ❓ **Please draw: a kind he pins, and letting it go** (plan Q22; extends `r87i` 2 and 4). Every invoice saved
    before the pie opens with Cocktails pinned (:204), but no frame draws a served kind pinned above 0% (`r87i` 2 and
    `r87t`, all unpinned; `r87l` d, a kind at 0%). (a) That kind's line two: `PinIcon` + `Pinned` as a drink's (`r87i`
    4), its drinks' names, or both? (b) How does he unpin a kind, so cocktails follow the crowd style again — the
    control, its words, its place? Not `Split evenly` (that unpins a kind's drinks, which split evenly; kinds split by
    the crowd style), and a new pick refills only kinds that aren't pinned (:120). (c) The calculator's Crowd style row
    when Event details has none — `—`, which counts as Cocktail-forward (:128): show `—` or `Cocktail-forward`? Today
    the field defaults to `—` under `Recorded for later` (`EventDetailsSheet.tsx:644–655`). Sean is told, meanwhile,
    that his old invoices' cocktails stay exactly as they are.
11. ⛔ **A beer filed under Wine** (plan Q23). On 9 Aug every `Wine & Beer` section and product moved to `Wine`
    (`migrations.ts:266–295`; `types.ts:4023`, *"everything moves to Wine, and he re-files"*), and a new line files
    under its product's Library category (`applyCalculation.ts:243`, `:362`). ❓ Which decides a line's kind: its invoice
    SECTION, or its product's Library category now (the section for a line with no product)? And what does a beer still
    under Wine show — counted as wine (5 oz glasses; a case of 24 meets `Say how much each one holds`; beer's 31% goes
    to the others), or a state that says so? Run on your event with the beers under Wine: cocktails 422.6 (not 313.5),
    spirits 140.9 (not 104.5); on an old invoice, Buffalo Trace about 16 (not 8). Provisional: the section decides, in a
    named fixture. Sean is asked whether his beers are re-filed.
12. ⛔ **A line with no Library product** (plan Q24). 91% of real lines carry no product id and are matched by name
    (`types.ts:60–61`: *"only 9% of real line items carry `libraryItemId`"*); a line typed by hand may match none. ❓
    Does it take a share of its kind as an on-hand bottle does — *"Guests still drink it"*, the option Sean tapped on 19
    Oct (words ours, `WISHLIST.md:779`; your :149–151 gives the on-hand row's words) — so its row can't be counted and
    its share is bought by nobody — or is it left out, so its kind's other drinks grow to cover it? Provisional: it
    takes its share; its row shows the existing no-product state and writes nothing.
13. ⛔ **Cocktails only = every drink a cocktail** (plan Q25). *"A kind with nothing on the invoice gives its share to
    the others"* (:119) gives cocktails 100% on any new invoice with nothing else on it yet, or where the client brings
    the beer and wine: 648 drinks against 291.6 today, Espolòn 10 → 22, Tito's 7 → 15, +$543.80 in the run. Your worked
    example covers no wine only. ❓ Intended for a menu still being built (tick the cocktails, Update, add the beer later
    — it buys 2.2× first), and for a client who supplies their own? Provisional: built as ruled, and Sean hears it
    first.
14. ⛔ **Before the Settings pages exist** (plan Q26). The four built-in crowd styles are one seed today
    (`drinkSplits.ts:95–100`; `r87k` 10 draws them equal), and the pages (Batch F) wait on #4 and #25–#29. Between C + D
    and F, picking `Beer-heavy crowd` fills exactly the same mix, under words that say it fills the drink mix. And if
    his account holds a crowd-style row from the old Settings block — Round 31 Ask A §4 kept those values *"exactly
    where they are"* (`ROUND-31.md:362–366`) — it would drive his splits with no page to see it (the reader spreads a
    stored row, `drinkSplits.ts:113–120`). Whether it does is not known: it is his data, readable only through the app
    signed in as him, and no record says he saved one. The provisional gives the same screen either way. ❓ Does C wait
    for F's crowd-style pages, or read only the built-in figures, ignoring a stored row, until F lets him see them?
    Provisional (ours): the second. Sean is told the four are the same until then.
15. ⛔ **The share boxes' height** (plan Q28). `r87i` 2 draws each share box 58 × 40 and the Crowd style dropdown 40 tall
    — under the 44 floor, and shorter than every box in the calculator today (`FIELD`, `h-12`, 48, `FormField.tsx`). The
    rows around them are 60. ❓ 40 as drawn, or the app's 48?
16. ❓ **Sean's own beer, wine and spirit counts on old invoices — asked of Sean; of you, what it reads if he keeps
    them** (plan 015's For Sean #2). As you drew it (`r87i` 6, Modelo `48 → 120 cans`, counted in `Update 5 lines`), the
    first Update after the pie offers to change counts he typed himself: a line he added has no `calcQty`, so Update
    writes it (:315), and step 5's *set by hand* doesn't cover it (`setByHand` needs a `calcQty`, `types.ts:3263–3268`).
    He is asked in plain words, *fine, or keep mine?* ❓ So either answer can be built: if he says keep, does a pie line
    he typed before the pie read as set by hand — `stays at 48`, `You set 48 by hand · the calculator says 144`, `Use
    144` — or otherwise? Until he answers, the plan builds it as drawn.

**b · ⛔ Batch D — Event details.**

17. ⛔ ❓ **Please draw: Crowd style's place, now beside your Round 88 strip** (plan Q3; extends `r88a` 1–4 and `r87i` 1).
    Three things claim the place under Bar opens / Bar closes: Crowd style (`r87i` 1, :132 — across both bar-time
    columns, 410 in a 440 card, with `Fills the drink mix in the calculator.`), the Cocktail hour row (`r87u`, :390 —
    built, `EventDetailsSheet.tsx:500–535`), and your Round 88 strip (`r88a` 1–4 draw the times, then the strip, then
    `Cocktail hour`, and no Crowd style). Today Crowd style sits under `Recorded for later`, 240 wide beside Bar type
    (`EventDetailsSheet.tsx:615–655`). ❓ The order of the three, and is Crowd style inside The bar group or a group of
    its own? Provisional: none — D waits.

**c · ⛔ Batch E — the Builder's line and the switch.**

18. ⛔ **Two firsts in the press-and-hold panel** (plan Q4; one answer with §10 #143). The pie's switch `Also served on
    its own` is *"at the top"* of the panel (:154, `r87j` 8); so is step 5's `Use the calculator’s number` (:309, `r87q`
    3). §310 built that as the first action row, under the info rows Cost, Price history and Used by
    (`RowPanel.tsx:970`), which is §10 #143's own question. ❓ When a line shows both — a Tito's he set by hand that is
    also an ingredient — which comes first? And a row held at his number (`stays at 3`) for a bottle that is both an
    ingredient and served on its own: does it still show its two parts (`5 for the Moscow Mule`, `3 on its own`)?
19. ⛔ **The line's switch on a copy and a template** (plan Q5, its second half). Lines keep their fields today
    (`withoutJobMarks` spreads each line, `types.ts:3642–3660` — and since §313 it also sets a hand-set line's `calcQty`
    to its own figure, :3653–3655; `templateFromInvoice`, `templates.ts:214`, on saving; `applyTemplate`, `:692–702`, on
    starting), so by default `Also served on its own` travels with a Duplicate and with a template. ❓ Should it?
20. ⛔ ❓ **Please draw: the switch on a locked invoice** (plan Q6; extends `r87j` 8, as `r65a` states a comp). Does a
    locked line's panel state that the bottle is served on its own, or show nothing of the switch? A locked line's panel
    has no actions today (`RowPanel.tsx`, §310's note). `r87t` draws the calculator only.
21. ⛔ **The split on the Builder's line** (plan Q7; `r87j` 7). `5 for the Moscow Mule · 3 on its own`: ❓ worked out live
    and divided to the line's own figure (ours), or the split of the last Update? On a line he set by hand (live since
    step 5), is his figure divided, or no split shown? And its place: in the price line's place (`$22.99 · 750 ml`), as
    §274's swap words took it — `r87j` 7 draws Espolòn with no price line at all — and which wins when a swap waits on
    the same line? Today line two is the swap's words, else on hand, else the price line.
22. ⛔ **Unticking, swapping and the switch** (plan Q8). (a) Tito's switched to also served on its own, then the Mule
    unticked: does Tito's line stay, since unticking takes off *"every line only that drink needed"*? Ours: it stays.
    (b) Buffalo Trace bought for neat pours, later used by a ticked Manhattan (switch off), then the Manhattan unticked:
    the untick takes it off, since it can't know the bottle was there first — acceptable? (c) Tito's switched on, the
    Mule's Tito's swapped for Ketel One, then Update: the swap copies the old line whole
    (`applyCalculation.ts:225–232`), so the line becomes Ketel One with the switch on, Tito's 52 neat pours become Ketel
    One's, and no Tito's is left. ❓ Does the neat pour follow the swap, stay with a new Tito's line, or turn off?
23. ⛔ ❓ **Words and icons for each kind; the names** (plan Q19; C draws the parts' icons and E the switch's words, so
    the plan's stop applies, plan:1781). (a) Two cocktails on one bottle: the part's words (`5 for the Moscow Mule and
    Mule Spritz`?) and the switch's line (`… as well as the Moscow Mule and …`?). (b) Undo labels for a liqueur's or a
    mixer's switch — you gave Tito's only (`Tito's served on its own`, `r87j` 8). (c) For Wine, Beer & seltzer and
    Non-alcoholic, `r87j` 8–9 drawing Spirits only, with `RocksIcon`: do the switch and the part in Proposed and on the
    Builder's line take each kind's own icon from your key (`WineIcon`, `CanIcon`, `StrawIcon`, :31, as :160's columns
    do), and does the switch's line read `Counts toward Wine as well as …`? (d) The frames write `Tito’s`, `Modelo ·
    Lagunitas`; the app has no short name for a product (`LibraryItem`'s only name is `description`, `types.ts:195–260`;
    a search of `src` for `shortName`, `nickname` or `displayName` finds none), so the plan uses the line's own
    description, as step 5 does: `Tito’s Handmade Vodka · Buffalo Trace`, cut to one line with the frame's ellipsis.
    Right, or a short name?
24. ⛔ **A correction to your own words: a mixer's switch line.** Your :158–159 gives *"a liqueur or a mixer"* the switch
    off, `Serve on its own`, with `Counts toward Spirits when on.`; your :126–127 says a switched-on mixer counts as
    **Non-alcoholic**. `r87j` 9 draws Cointreau (a liqueur) only. Read literally, a mixer's line would say Spirits while
    it counts as Non-alcoholic. ❓ Its words — `Counts toward Non-alcoholic when on.` (ours)? Batch E's check follows
    your answer (the plan's E check, not yet written, would assert :158–159's, plan:1330–1331).

**d · ⛔ Batch F — Settings and a product's pour.**

25. ⛔ ❓ **Please draw: The calculator on the Settings list** (plan Q9; extends `r87k` 10–13, which draw the two pages
    and the product editor only). `r87k`: *"Settings gets a section, The calculator, with two pages."* Your Round 31 Ask
    A §2 (`ROUND-31.md:317–327`, 13 Sep): *"Sub-sections: NO. A list, not a tree."* — *"One level of destination.
    `CardGroup` is the second level, and it already exists."* (recorded at `settings/page.tsx:29–32`; four destination
    rows today). ❓ One row opening a page that holds Crowd styles and Pours, or two rows under a heading — and each
    row's summary line?
26. ⛔ **Crowd styles: the built-ins, and a deleted one** (plan Q10). Round 31 Ask A §3's control #4 rules a managed list
    — list, add, rename, reorder, delete (`ROUND-31.md:344`; built as `ManagedList`, Settings › Cocktails). What is the
    crowd styles' own: ❓ may a BUILT-IN style be renamed or deleted — Cocktail-forward is what `—` counts as (:128)?
    What does an invoice whose style was deleted read? Ours: its stored copy, else Cocktail-forward.
27. ⛔ **A correction to our Round 88 §1 c: a second account would read `Tuned`, not `Starting guess`.** We told you a
    second account *"starts from the same seed with no events of its own, so its Cocktail-forward would read `Starting
    guess`"*. The code says the opposite: the one seed marks Cocktail-forward `tuned: true` for every account
    (`drinkSplits.ts:96`, `cocktail: { split: { ...LIMBO_MEASURED }, tuned: true }`), nothing writes `tuned` (a search
    of `src` for `tuned` finds the seed, its type and comments only; `setPresets` is called nowhere,
    `drinkSplits.ts:122` its only hit), and the plan reads the built-ins from the seed. So a second bartender would see
    `Tuned from your own events` under figures from Sean's events, under a name that reads `Cocktail-forward (typical
    Limbo)` (`types.ts:4095`). The app is built as though other bartenders could use it. ❓ What should a second
    bartender's Cocktail-forward read — `Starting guess`, as our Round 88 §1 c told you, or something else — and does it
    keep figures from Sean's events? Is *(typical Limbo)* a name every account gets? (Ours, to object to: `tuned` stored
    on Sean's account, not in the seed — nothing written on reading.)
28. ⛔ ❓ **What makes a crowd style tuned, and what a style he adds reads** (new; not in the plan). `r87k` 10: *"A check
    marks a style an event has tuned."* Nothing in the app tunes a style from an event — the learned figure is *"Later,
    with rework"* (plan:1832–1833) and nothing writes `tuned` (#27). (a) When Sean saves his own figures for `Mixed /
    balanced` (`r87k` 11), does its line turn from `Starting guess` to `Tuned from your own events`, or stay until
    something tunes it? (b) A style he adds (`r87k` 11's `Corporate happy hour`): `Starting guess`, no line, or a third?
    Your Round 88 §1 c ruled the four built-ins' words only.
29. ⛔ **A product's pour: which help line** (plan Q27; `r87k` 13). `Only used when it's served on its own.` shows *"on a
    bottle only cocktails use"* (:170–171), but the Library's product editor knows no invoice or menu. ❓ What decides it
    there — any recipe uses the product, or its category (a liqueur, a mixer)? And `r87k` 13 draws `Blank uses the
    Spirits pour, 1.5 oz.` under a box holding `2`: standing help, shown filled or blank? Provisional: the Spirits line,
    shown filled or blank; the cocktails-only line waits.

**e · What plan 015 builds provisionally until you answer** — nothing of it is built yet.

30. ❓ **`5 glasses a bottle`** on Pours (plan Q11; :166–168, `r87k` 12). Worked from 750 ml ÷ the wine pour (25.36 ÷ 5 =
    5.07 → 5)? Rounded how, and what at a 6 oz pour (4.2)? Plan 015's provisional (ours, plan:1537): 750 ml ÷ the pour,
    rounded down.
31. ❓ **⋮'s row name** (plan Q13; :135). The ⋮ row reads `Cocktail calculator…` (`InvoiceOptionsMenu.tsx:384`). With the
    sheet renamed `Drink calculator`, does the row become `Drink calculator…`? The plan keeps the row as built (live)
    meanwhile, and will build the sheet's subtitle `648 drinks` as drawn, two frames agreeing (plan:1557–1562).
32. **A correction to your drawing: Topo Chico drawn `New`** (plan Q14). `r87i` 6 draws `Topo Chico … New 24 bottles`,
    counted under Non-alcoholic. Your §2 e (:126–127) counts a mixer only when its INVOICE LINE is switched on, so a
    mixer always has a line and can never be `New`; with no Topo Chico line, Non-alcoholic is an empty kind giving its
    2% away. The plan builds it by the rule (its fixture is a Topo Chico line, switched on). ❓ Confirm the drawing is
    schematic, or say how Topo Chico comes to be served.
33. ❓ **The working sentences and the beer's unit** (plan Q15; `r87i` 6). (a) `r87i` 6 writes the working inline (`52
    Moscow Mules × 2 oz + 52 × 1.5 oz on its own, +10% ÷ 750 ml`); your Round 51 §3 rules the vertical sum the app
    draws. Keep the vertical sum, with `r87i` 6's term words (`52 × 1.5 oz on its own`, `108 drinks × 1 can`)? (b) The
    app counts a beer line in its package (`2 → 5 cases`) where `r87i` 6 draws `48 → 120 cans · cases of 24`: which? (c)
    The word after `× 1` — `can` for the beers, `bottle` for Topo Chico: the product's own unit, or Pours' `can or
    bottle`? Provisional in the plan: the vertical sum with `r87i` 6's words, the line counted in its package
    (plan:1566).
34. ❓ **The red button** (plan Q20; :346–350). Adding or removing a line served on its own changes its kind's other
    figures, as a tick does, and a tick doesn't turn the rail's button red (ours, §270: *"one ticked since had no share
    to hand on"*, `outOfDate.ts:172`). The same here — no red? The plan builds no red meanwhile.
35. (ours) **On hand, served on its own, is never written.** :150–151: it *"orders and bills nothing, and isn't
    counted"*. So its `about 4 bottles` on the Builder's line will be worked live and never stored — unlike §219's
    on-hand cocktail rows, which Update does write (`calculator.ts:2149`). It will get its own row state, in no foot
    clause but `N on hand · not ordered`. Confirm.
36. (ours) **A waiting swap's old bottle is the swap's** (plan Q29). Bacardi swapped to Diplomatico in the Daiquiri and
    waiting for Update: Bacardi counts as used by the ticked Daiquiri, not served on its own. Read plainly it would be
    served on its own; its row would then stop the swap moving the line (the swap moves only if no row has the old
    product, `calculator.ts:2168–2170`), and Update would bill Diplomatico `New` beside a Bacardi neat-pour count (run
    on a made-up wedding). Your :58 changes the product *"on the same line"*, and :50 keeps Bacardi only if another
    drink uses it. Confirm.

### 2 · ⛔ Your Round 88 §3 b, as built (§340–§341)

Built as ruled and live (§0). Measured by §340's and §341's own runs: headless Chromium, `page.pdf` at 4 × 8 in, the
PDFs read back with `pdftotext`/`pdfminer`; the screens at 390 × 844.

37. ⛔ **Round 88 #14 — the Separate block, once it follows the last table.** Its cells sit under the table's columns:
    Per drink, and each batch column's own `about 1½ bottles`. Under the last table alone, the first table's batch
    figures would print nowhere, and `r88f` 1 draws no Separate row. ❓ Which columns do its cells sit under? **Held at
    one table until you answer** (`RecipeSheet.tsx:248–249`: the split runs only when there is no Separate row).
    Measured: any printout that includes his French 75 still prints EVERY recipe in it smaller — the split Margarita
    beside it at 13.61pt (90.7%) on both sheets at five columns, against 15pt alone; about two-thirds at eight. This
    decides whether his usual menu printout changes at all.
38. ⚠️ **Round 88 #14 — our premise, corrected; does four-a-table hold for every recipe?** Our Round 88 #14 said the
    phone paper's table *"runs 65.88 into its margin … Chrome's PDF shrinks the page to about 91%"*. That was his French
    75 WITH its Separate row only. Without one, five and six columns fitted, unshrunk (249.81 in 249.8, 15pt), the
    figure columns squeezed to 27.5 and 23 wide; at eight the Margarita ran 22pt into the sheet's own 0.35 in, one
    sheet, 15pt, not shrunk, neighbouring figures touching (0 apart). The split can add a sheet: the Paloma 1 → 2 sheets
    at five and six columns, the Margarita 1 → 2 at eight, its foot line alone on the second. ❓ Does four-a-table stand
    for every recipe, or only when the one table would run past the sheet? Built as ruled (:159, *"holds four figure
    columns at most"*) until you say. And the export chooser's phone row reads `4 × 8in · one recipe per page`
    (`ExportSizeSheet.tsx:106`), untrue now for a recipe the split takes onto two sheets: keep, or new words?
39. ❓ **Round 88 #14 — may a split table break across sheets?** On a recipe already taller than one sheet, the second
    table starts at the foot of one sheet and finishes on the next, under its repeated header (his Mai Tai, at five to
    eight columns: the second table starts on sheet 1 and finishes on sheet 2; at five, sheet 1 ends with its header and
    first row). `r88f` 1 draws a recipe that fits one sheet. Break, or move whole to the next sheet (`break-inside:
    avoid` on each split table — a candidate, not built)?
40. ❓ **Round 88 #13 — History's and the rail's filters.** (ours) Only the search words are kept, in the tab
    (`libraryView.ts:234`), and the swap's search, in its window, keeps its hold (`CocktailPicker.tsx:205`). What
    follows: with search words AND a filter both set (History's stage, Archived or Deleted; the rail's category or `No
    price set`), the quiet reload used to wait and keep both; now it goes ahead, the words come back and the filter
    resets. ❓ Should those filters keep as L8's do? Told, too: the words now also come back when he leaves the screen
    and returns, not only after the reload — what *"the same keeping as L8's"* (:154) gives.
41. ❓ **Please draw: Round 88 #12 — a tap refused below the window** (a new state of S5's row, `ROUND-86.md:162`; no
    frame draws it: a search of every frame in `docs/design/` for `already in the list` finds none). A tap in one list
    can be refused because the other list's open row holds a name already in that list. At 390 × 844 nothing he can see
    happens: the held Glassware row (y 947) and its sentence `“Collins” is already in the list.` (1509–1530) are both
    below the window (`ManagedList.tsx:117–123`, `:160`). Bring the row and its sentence into view, or say the sentence
    where he tapped? The same is older within one list (the sentence at 962 in 844). Left as built until you answer;
    rare — it needs a duplicate name typed first.
42. ❓ **The recipe sheet's Letter foot reads `prep sheet`** — `{business} · prep sheet` (`RecipeSheet.tsx:565`), older
    than §340 (the same at `e4beee9`). Printed words: should it read `recipe sheet`?
43. (ours) **Round 88 #11 — what is an Undo step:** Undo's and Redo's own report, `Undid …` / `Redid …`, keeps one cut
    line (`SheetToast.tsx:481`). The group doors' labels and the calculator's and the fill's money messages are not, so
    they wrap; a short one still reads as one line.
44. (ours) **Round 88 #11 — a word with no space breaks anywhere** (`wrap-anywhere`, as `CardKit`'s wrapped title has
    it) rather than running under Reopen. Measured by §341's design review: 5 lines, 134.25 tall at 390, nothing cut.
45. (ours) **Round 88 #14 — past eight figure columns**, the same rule: never more than four a table, as few tables as
    that allows, as even as possible — 9 is 3 + 3 + 3, 10 is 4 + 3 + 3 (`RecipeSheet.tsx:184–191`).
46. **Frame against prose:** `r88e` draws `text-wrap: pretty`, where the prose says only that the truncate comes off —
    built as drawn. `r88f` 1's prose figure (*"13.58 into the sheet's own 0.35 in"*) is his French 75 with its Separate
    row (§255's); `r88f` 1's own Margarita at four columns is 249.81 in 249.8 (0.01). `r88f` 2's prep heading is built
    at the recipe sheet's 15pt, its subtitle unchanged.

### 3 · The calculator's settings and hours (§263–§267) — you read the code, our notes never reached you

Our Round 88 was written before §263, so §265–§267's notes for you went in no round. Your answer settled the ones in §0.
The rest:

47. ❓ (ours) **New state, live, no frame — whole packages on a locked invoice** (§264; `r87t`). Stated as the row's own
    words when on, no row when off (`CalculatorSheet.tsx:455`). The locked row is 63.14 tall against 69 open, so
    `Proposed` rises 5.86 on a locked invoice. `r87t` draws no How-you-buy group. Accept as built, or draw?
48. **Locked figures, against `r87t`** (§265). Each figure sits where its box was — the digits' right edge at 888, 875.5
    and 871.25 at 1200 — not on `r87t`'s one shared edge; rows 73 (`r87t` 61); the figure 17 where the open box draws 16
    (`globals.css`'s top-level input size, 16px); a transparent 1px border kept, so the digits end where the box's did
    (`r87t` draws none). `Figure` at `CalculatorSheet.tsx:107`.
49. ❓ **An invoice completed before §263** has no stored settings, so its locked calculator shows today's defaults — 1.2
    / ×1.4 / 45% / 10%, and the bar times' hours, else 4 — as plain fact (`readCalcSettings`, `calcSettings.ts:129–131`;
    the hours, `:213`). They may not be what he used that night. Say so, or as built?
50. ❓ **The note's Undo labels** (§266; your Round 88 §1 b: *"Each tap is one undo step"*). Built, ours: `Keep 6`, its
    toast `Undid Keep 6`. Your second tap, `Use 5`, isn't built; ours would be `Use 5`, `Undid Use 5`. Confirm, or
    reword.
51. ❓ **Undo of `Keep 6` after a later calculator write** (§267). A calculator write is carried into every Undo copy
    (§263's rule), so Undo of Keep then changes nothing and still says `Undid Keep 6`. Changing it needs a ruling on
    whether a calculator write is newer than Keep. With your §1 b the line stays on screen after Keep, so this will show
    more. Which is newer?
52. ❓ **Hours emptied to 0 in the calculator** are a typed 0 (§267), so your §1 b's line would read `…not the 0 you
    typed.` · `Keep 0` (`barTimesNote`, `calcSettings.ts:324–327`, has no test for 0). §272's guard covers the
    calculator's side (`Enter hours`). Should the note treat a typed 0 as no typed figure?
53. (ours) **A half-filled pair of bar times** reads `No bar times yet · using 4` (`calcSettings.ts:286`).
54. (ours) **Hours typed with no bar times to read** show the pen and `You typed this` alone; typed AND equal to the bar
    times, `From the bar times, …` (`calcSettings.ts:272–278`).
55. (ours) **The rail's Bar row:** one time alone reads `6 PM`; a bar past midnight into the same half of the day reads
    both halves, `11 PM–10 PM`; an unreadable time is shown as stored (`barTimesText`, `barHours.ts:174`).
56. **Frame against prose and build** (§266). `ROUND-87.md:327`'s straight `Can't` against `r87p`'s curly — built curly,
    `Can’t read the bar times · using 4` (`calcSettings.ts:285`); `r87p` 2's half-width time fields against the app's
    170 each (the strip spans the wrapping row, 442); `r87p` 1's line two at 1.35 and rows 61 against the app's 1.3 and
    73.
57. **At 390** the Hours row's typed line `You typed this · the bar times say 5` wraps and leaves `5` alone on its
    second line (the row 80.03 tall; §267, measured). For the record, unless you'd keep the number with its words.

### 4 · The cocktail hour (§268–§269)

Measured by §269: headless Chromium on `next dev` at `127.0.0.1`, a temporary page drawing the real `EventDetailsSheet`
and rail over made-up invoices, at 320, 360, 375, 390, 414, 768 and 1200, light and dark.

58. ❓ **Please draw: the five lengths below about 414 wide** (extends `r87u`, drawn at 520 only). With `1½ hours` chosen
    (62.02 wide, semibold), its distance inside its fill: 1200, 11.39 (fill 84.8); 414, 1.59; 390, −0.80 (fill 60.41);
    375, −2.30; 360, −3.80; at 320 the words overlap — `1 hour` / `1½ hours` by 2.83, `1½ hours` / `2 hours` by 6.08.
    Nothing scrolls sideways. Less padding, 13, `1½ hr`, two lines? His iPad, at 1200 and 1600, fits with room.
    (`EventDetailsSheet.tsx:577–598`.) Since the guest count the row is drawn through `ChoiceRow.tsx`, lifted out of
    Event details as §268 asked, its markup as it was; the guest count's box (`r87o` 2) uses it too, so #58 and #59
    answer for both (§0 G4, G10).
59. ❓ **Dark: the chosen length barely shows.** Its fill `rgb(26, 23, 18)` on the track `rgb(20, 17, 13)`, 1.05:1
    (light: 1.24:1). Only the semibold, `--text` against `--text-secondary`, and the 0.5 shadow mark it
    (`EventDetailsSheet.tsx:598`, `shadow-control`). Enough?
60. **Spacing inside The bar:** built 12 from Bar closes' box to the rule, the 60 row, 12 to `Starts` (its label 28.5
    under the 26 track), 12 from `Optional` to `How long`; `r87u` draws 16, 4 and 14 (18 under its 31 switch). Told,
    unless you'd have `r87u`'s. `r87u`'s `#E9E4DA` is read as `--surface-sunken` (`#E8E4DD`).
61. ❓ **Only the 44 switch is a target**, as in Settings. Should the whole row flip it, as the mark rows do
    (`EventDetailsSheet.tsx:529`)? `check-marks` (§231) would follow the answer.
62. ❓ **On a locked invoice**, `Length not set` and `Choose how long it runs.` stay gold, faded with the fieldset
    (`cocktailHour.ts:294`, `:276`). Keep them gold, quiet them to `--text-secondary`, or take them away?
63. (ours) **The old record's readings and §268's frame notes.** `ch` `"no"` is never on; other words in `ch` read as
    none, so, as with `ch` blank, on only with a length in `chdur`; `true` / `false` as yes / no; a number in `chdur` as
    its text (1 = 1 hour), and a bare number as the old app's hours; a start read in the box's `HH:MM`, or none; a
    length not one of the five reads as the old words, `You wrote “2hrs”. Choose how long it runs.`, curly quotes; other
    spellings (`1½ hours`, `2hrs`, `45m`) read as a length; the old words outlive the first write; tapping the chosen
    length again writes nothing (`r87u` draws no way back to none); each choice gets its whole 48 slice. Frame notes:
    the switch at the app's 44 × 26, not `r87u`'s 51 × 31; the chosen length's shadow the app's token, not `r87u`'s
    value; the whole of `5 PM · length not set` gold (`cocktailHour.ts:158–202`).
64. ❓ **A start typed in words in the old `ch`** (`5pm`) is shown nowhere. Acceptable, since neither app could write
    one?

### 5 · The red button after an untick (§270–§271)

65. ⚠️ **A premise under `r87r`: the unticked drink leaves the list.** `r87r` keeps the unticked Tom Collins in view, an
    empty circle beside the red. The built `On the menu` list holds ticked drinks only (§44.3a, §45.7;
    `CocktailPicker.tsx:325`), so the Collins leaves the list at the untick, and after a reload, or the next day, the
    red names nothing on screen. ❓ Should the red name the drink, or is it right as built?
66. **For the record:** `r87r`'s caption *"the bourbon would go from 8 to 16"* is plan 014's two-drink figure; on the
    three drinks `r87r` draws it is 11 → 16 (measured with an assumed Old Fashioned, 2 oz bourbon). The build follows
    the calculator.
67. ❓ **The red's size.** Round 87 draws it at 15 semibold three times (`r87a`, `r87g`, `r87r`), while :18 says *"as
    `CocktailPicker.tsx:844` builds it"*: 17, padding 16 (now `CocktailPicker.tsx:904`). In the 360 rail the red's words
    take two lines (305.77 in 292). 15, on one line — the swap's red too — or 17 as built?
68. ❓ **Guests that aren't one number.** When Event details' guests are blank, `80–100`, `about 90` or `120 guests`, the
    calculator opens at 0 guests (`calcSettings.ts:237` reads Event details only) and can't tell whether the untick
    moved a figure, so the red can't show. Stay normal, as built, or red on any untick of a counted drink there?
    Read again with the guest count (§320–§324): an invoice updated since opens at that Update's count while Event
    details reads as it did then, so there the red shows (`check-untick-red` B14); it still can't show on one with no
    Update since, or where Event details was cleared or its words changed since the Update — those open at 0, as
    before (§0 G2 (i)).
69. (ours) **What counts as an untick.** Update keeps the drinks it counted (`menuAtUpdate`, `types.ts:1933`), and an
    untick turns the button red only for one of them; the untick itself is the reason; on-hand lines count; a drink
    re-ticked or deleted since is no reason; the note is written only while a calculated line remains; red wins over a
    prep → prep swap's hedged `may be out of date`; on a locked invoice the red shows and its note stands until reopened
    (`outOfDate.ts:123`).

### 6 · Nothing to count, and a copy's menu (§272–§273)

70. (ours) **The empty calculator keeps 28B's words until the pie.** `r87l` e puts the guard's fifth case's words in
    28B's empty state with the pie's body line. Built: 28B's `Nothing to quantify yet` and its body stay until the pie
    (`CalculatorSheet.tsx:766`), with no foot there (`CalculatorFoot.tsx:57–69`). The pie brings `r87l` e (#2).
71. ❓ **`Update 0 lines`, greyed** — Round 65 §2's dead control, against your §4 b's *"Nothing is greyed out."* It shows
    in three cases: every line already matches the calculator (§273); one line set by hand with nothing else moving
    (§313's item 5); and, since the guest count, a count typed back that the lines already stand at (§0 G2 (ii), G5).
    The button is disabled at 0 and drawn at half strength (`CalculatorSheet.tsx:626`, `:639`). Does the foot give
    way to words, or the button stay?
72. ❓ **The guard's own measures, against `r87h`.** Its button 48 (`r87h` 44); the foot on `--surface` (`r87h`
    `--surface-alt`); rows 17 (`r87h` 15); its words 15 in `--accent` (as `r87h`), where Update is 17 in `--accent-fg`
    on `--accent` (`CalculatorSheet.tsx:639`) and `Choose cocktails` 17 in `--text` (`:779`), and Round 87's other frame
    draws `Lines only` and `Keep 120` at 17 `--text`. At 320 the drink-mix sentence takes three lines and the foot grows
    73 → 83.5 — stack it? (`CalculatorFoot.tsx:91`.)
73. (ours) **A row refused for its own reason** — no product, no size, two units — reads `Not counted` under the guard;
    its own reason comes back with a count.
74. ❓ **Locked, with nothing to count**, the rows read `Not counted` beside the lock sentence, and nothing says why.
    Your §7 keeps the lock sentence and §4 b rules the rows; turn 1's `r87b` put `Not counted · 0 guests`. Should the
    locked case say why, and where?
75. **For the record, until the guest count:** a calculated invoice with no guest count in Event details reopens on the
    guard, its counted lines `Not counted` / `stays at 25`, and `Enter guests` goes to a box forgotten when the sheet
    closes (`calcSettings.ts:237`). Read again with the guest count (§320–§324): an invoice updated since reopens at
    that Update's count while Event details still reads as it did (§0 G3 (c)); one updated before it, or whose Event
    details was cleared or its words changed since, still reopens on the guard, and a count typed there and not
    Updated is still forgotten when the sheet closes — only an Update stores the count.
76. ❓ **Please draw: an empty `Proposed` band** (extends `r87h`). A drink ticked with none of its lines on the invoice,
    at 0 guests: the `Proposed` label stands over nothing (`CalculatorSheet.tsx:883–892`). No frame draws it: each of
    the ten `Proposed` labels in the Round 87 and 88 frames stands over a row (read). Keep the band, hide it, or a line
    in it?
77. ❓ (ours) **New state, live, no frame — on hand under the guard:** an on-hand row shows two second lines, `On hand ·
    not billed` and then `Not counted`; an on-hand line held blank reads a bare `—`. `r87h` draws bought rows only.
    Accept as built, or draw?
78. (ours) **A copy brings the drinks its figures were counted for** (`menuAtUpdate`) and only its own menu's swaps —
    your template rule (:370–371) read for a duplicate (:372). Its second half, the original's red stuck after a swapped
    drink was unticked, was fixed by §274 (only drinks on the menu count).
79. (ours) **With the guard up, the foot's counts aren't shown** (`1 has no product to change`); the text holds the
    reason instead. On a locked invoice the counts say nothing either.

### 7 · The swap's money (§274–§281)

Numbers in brackets are §281's list, so the commits can be read beside this. Money is measured on made-up invoices
shaped like `r87g` (five rums), by the real code in Node, against what the live app charged before the swap's step
(*"live"*).

**a · Sean's answers — confirm they read as your §6 does**

80. ❓ **[13] A comp on the new bottle's line after the Update that applied the swap stays free** — Sean, **Yes, free
    stays free**. Built §278: the swap's line takes the count and stays free. Confirm nothing in `r87g` reads otherwise.
81. ❓ **[18] A second drink switched onto an earlier swap's free bottles** — Sean, **3 free, 2 charged**: the comp keeps
    its bottles and only the rest is charged; free plus charged equals poured. Built §279; §280 lowers the charged lines
    with the count. Confirm.
82. ❓ **[23] Invoices switched and updated before the swap's step, comped now** — Sean's *"…Yes."*, read as free stays
    free there too. Built §281: a comp he puts on the new bottle's billed line while the swap reads applied takes the
    swap's mark. Confirm nothing in `r87g` or your Round 87 §6 #2 (b) reads otherwise.
83. ❓ **[15] A comp made after the swap but before any Update** looks exactly like [23]'s lines, so it stays free too:
    $167.96, live's (as Round 87 §6 #2 (b)'s words read, $231.96). Round 87 §6 #2 (b) still holds for a gift comped
    BEFORE the swap (#95). May it be read this way?
84. ❓ **[17] A new bottle the calculator can't count, already billed, comped after Update:** not red; once it is sized,
    the count goes on the comp ($167.96, live's). Confirm against your Round 87 §6 #3.
85. ❓ **Please draw: [20] the `Proposed` row beside a free swap line** (extends `r87g`'s row). Live as built by Sean's
    **Ship it, ask Design**; the wording is yours. The working counts every bottle poured, the figure only the charged
    ones: `= 4.4` beside `2 → 2`; `= 5.5` / `2 → 3` at 40 guests; `= 1.1` / `2 → 0` at 8; `= 4.95` / `1 → 1` (an Old
    Cuban's form); `= 2.2` / `1 → 0` for a bottle he typed in. A working that can't produce the number beside it,
    against Round 36 (`ROUND-36.md:102`, `:182`, `:245–250`) and :97–98. How should the row show the bottles the free
    line already holds?

**b · What `r87g` doesn't draw** — each is pinned in `check-swaps-to-apply` as built, not fixed

86. ❓ **Please draw: [1] bottle → prep and prep → bottle swaps** (extends `r87g`). Built: no line two, no row; the old
    bottle (or the prep's limes) stays billed after Update; a bottle → prep swap's red stays while that bottle's line
    does. A row that takes a line off?
87. ❓ **Please draw: [2] a swap to a bottle already billed** (extends `r87g`) reads applied at once: no line two, no
    row, no red, and Update leaves the old bottle billed for no drink (+$76). One more form: with Sean's answer to [23],
    a comp keeps such a swap applied, so an old bottle left for no drink stays billed where §280 had turned it into the
    new one (4 of 105,000 fuzzer sequences, +$20 to +$57 against live). (A second, the Mojito's swap naming both drinks
    after a comped move, §276, was fixed in §279: line two names only the drinks still waiting,
    `swapsToApply.ts:182–183`.) Take the old line off, or turn it into the new bottle?
88. ❓ **Please draw: [3] after Update, the swap changed again** (extends `r87g`; +$140), **or undone** (both billed),
    **or undone and made again** (silent, $167.96 by the mark). Should the line move again as a swap row, and Undo after
    Update read as a swap back?
89. **[4] A product whose only line is a comp takes the whole count**, all free (Tito's comped at 1 → 7 comped) — asked
    once, at #9, with the pie's beer; one answer covers both.
90. ❓ **Please draw: [5] two old bottles swapped to one new bottle** (extends `r87g`). One row (*"One row for each
    swap"*, :52); the first line takes the whole count; the second old bottle is left billed after Update (+$72). Two
    rows splitting the count, or a row that takes the second line off?
91. ❓ **[8] On a locked or Complete invoice** a waiting swap's line two still reads `recalculate to apply`, where Update
    can never run (§276 took it off only where the mark reads applied). Keep, other words, or none?
92. ❓ **Please draw: [9] a closed group** (extends `r87g`'s line two to the group's row) whose member carries a waiting
    swap shows no word or mark. Groups come back closed, so the rail's red is the only sign. A mark on the group's row?
93. ❓ **[10] A Don't buy swap to a bottle with no size** is blocked — nothing written, red — where the same bottle
    unswapped is written as a blank on-hand line (§219). Write it blank?
94. ❓ **[11] The swap row's alignment.** Its text has `r87g`'s 10 above and below (that row only); the stepper and
    amount stay centred, where `r87g` aligns them to the top. Top?
95. ❓ **[19] A gift comped BEFORE the swap** — should it count as the swap's free bottles? As built, your Round 87 §6 #2
    (b): the swap's bottles go on charged beside it, $231.96 (live $167.96); with the Mojito $230.97 (live $125.97).
    Counting it: $196.96, and the calculator's row `2 → 7` reads `2 → 6`. Sean has been told it is yours.
96. ❓ **[21] More guests and fewer.** More go on the charged line and the free ones stay (+$35 at 40 guests against
    live). Fewer take the charged line to 0, never below; free lines are never lowered, so the free line alone can hold
    more than is poured (831–943 of 15,000 fuzzer sequences per seed). A line at 0 stays, and prints on the client's
    copy `Diplomatico Reserva 0 × $35.00 … $0.00`. Stay, go, or not print?
97. ❓ **[22] A bottle he adds as a line of its own:** beside a free line alone, Update writes it at the count less the
    free bottles, `1 → 0`; beside a free and a charged line it is left as typed — six for five, $173.97 (live $160.97).
    Right?
98. ❓ **[24] The + button lands on the bottle's first line.** In `r87g`'s order that is the free one, so the next Update
    lowers the charged line: a charged bottle made free, $138.97 → $103.97. Count the free bottles at their figure now,
    or at the figure the swap's Update wrote (`calcQty`; an option, not built)? Since step 5 the other order changed: +
    on the CHARGED line is now his own number, held, so Update keeps it ($173.97, where it was $138.97).
99. ❓ **[26] An invoice switched, updated AND comped before the swap's step** opens red, and its Update charges the new
    bottle again (+$105 / +$64 / +$99 against live). Sean is told the two taps that settle it — `Charge for this line`,
    then `Comp this line`. A rule reading any unmarked comp of the new bottle as the swap applied would reach it, but
    would also read Round 87 §6 #2 (b)'s gift that way (62 assertions red when tried), so it isn't built. Should it be?

**c · Told, as built — object if you would**

100. (ours) **[6] Against the ruling's words:** line two takes the price line's place, on a locked invoice too; one row
     for two drinks; `stays Bacardi Superior`, the line's full name, wrapping at up to 45%; `Proposed` not drawn when
     every row is a swap's; a bottle of another category moves the line (a category emptied goes); a line he hid moves
     like any other, with no money line; at Update the packing mark goes, since he packed the old bottle. ❓ **New
     states, live, no frame — accept as built, or draw:** two swaps from one line (the second goes `New`, line two
     stacks); an on-hand swap row (the mark, no money line); the guard's swap row.
101. **[7] Frame against build:** rows 17 (`r87g` 15); the CardGroup bar 44 (30); Update 48 on `--surface` (44 on
     `--surface-alt`); a blocked swap row counted in the foot as `1 has no product to change`. The foot's `10 stay as it
     is` against `r87g`'s `10 lines stay as they are` is §10 #140.
102. (ours) **[12] One size within 1%** (`25.4 fl oz` is 750 ml); a unit the app can't read (`cl`) compares by its
     words.
103. **[14] For the record:** Update leaves an unseen mark, `swapApplied`, on a line it applies a swap on — and on the
     New line, the billed line it finds, a lone comp, and a comp marked by [23]'s rule. The mark moves money: a charged
     line beside the swap's free one bills only the rest. This replaces §274's *"never stored"*.
104. (ours) **[16] Two comps of the new bottle:** the swap's takes the count; the gift stays as it is (`productLineIn`
     prefers the marked line).
105. (ours) **[25] A row beside the swap's charged lines speaks for them** (`5 → 2`) and lowers them last-listed first;
     one row may write two lines; `Update N lines` counts it once.
106. (ours) **§274's smaller readings:** `an` before a vowel; the size is the line's unit as he reads it against the
     product's (case and spacing aside), and a line with no unit says nothing of size; a new bottle gone from the
     Library is not a waiting swap (the card shows the broken link); a line or bottle gone since the sheet opened moves
     nothing.

### 8 · The estimate's sends, per guest, `Included` (§300–§302)

107. ❓ **An all-comped row that doesn't follow guests** (Ice) shows two empty boxes and `All comped on the invoice · you
     type this one` on the sheet, where `r87n` 2 draws `Included` and no boxes (`estimateSheet.ts:173`, `:539`, `:568`).
     Should the sheet show `Included` there, and how does he type a figure? Is `r87n` 2 schematic about boxes — it draws
     Rentals typed with none?
108. ❓ **An all-comped category that follows guests, his words picked:** built `All comped on the invoice · guests ·
     drinkers · premium`, or the first part alone, since a $0 row names a widening that never happens? No frame draws
     it: a search of the frames for `All comped on the invoice` finds only `r87n`'s, with nothing after it.
109. ❓ **`Included` beside only `To be confirmed` categories:** built as `To be confirmed` in total. The literal reading
     prints `$0 · plus Bar Tools, to be confirmed` (8 of 270 test invoices).
110. (ours) **A hidden line beside comps** leaves the category all comped; a comped line with no price is a comp.
111. ❓ **A sent copy keeps no logo picture** — up to 400 KB in every Undo step and the shared cache — so it shows
     today's logo, against your Round 87 §3 a #3's *"never changes"* (:234–237) (`estimateSent.ts:285`, `:296–297`).
     Option, not built: each picture stored once, by its fingerprint. Sean has been told it is for you and him; he
     hasn't answered.
112. **The list's radio and row, and the confirm's type:** `r87m` draws a 22 radio with a 10 dot, rows 56, and the
     confirm at 20 / 15; built the app's 24 radio with its 7px ring, rows 61, and 18 / 17 (`EstimateSends.tsx:29–32`,
     `:61`).
113. ❓ **Please draw: the sent line, narrow** (extends `r87m`, not drawn at 390). It wraps only after a dot; at 390,
     History's line takes three lines with a year and a wide total (the row 97 → 117), the glyph centred
     (`SentLineText.tsx:37–43`).
114. **When `Mark as sent?` comes up around the iPad's print sheet** — on `afterprint` or when `window.print()` returns,
     whichever comes first (`EstimatePrintClient.tsx:147–155`). Unseen on his iPad: his check 27.13 asks it. Told, until
     it is seen.
115. (ours) **The toast's Undo after the invoice is locked** does nothing: the write is refused
     (`EstimatePrintClient.tsx:166`).
116. ❓ **Only the tax rate moving** (6% → 6.5%, every printed figure the same) reads as not changed since the send
     (`estimateSent.ts:303–321` compares the printed figures, not the rate). Does the rate count?
117. ❓ **Please draw: a sent copy in History's trash** (extends `r87m`'s sent line). A trashed copy with a send shows
     `Another copy is in History` and then the sent line — four lines. No frame draws both: `Another copy is in History`
     is drawn only in the Round 81–83, 84 and 85 frames, before the sent line existed, and the sent line (`Sent Oct 19`)
     only in `Round 87 - the estimate and the rest`, which draws no trash (searches of `docs/design/`).
118. ❓ **Two sends on one day** with nothing changed list as two identical `Sent Oct 21` rows. Should a second Mark as
     sent add a row, or the row carry a time? Sean's 19 Oct **Ask again, keep each** says keep every copy, not how
     same-day copies read.
119. (ours) **An emptied invoice with a send** says no `changed since` anywhere — the page's rule, now the sent line's.
     Its list holds only the sends (`Make an estimate…` is greyed there); a locked or empty invoice with no send,
     reached by its address, shows the paper as built and asks nothing.
120. **Frame against prose** (§300): the confirm's two buttons as `r87m` 3 draws them — `Not now` outlined, left; `Mark
     as sent` filled, right, at the right edge — in the app's type; the toast the app's own, not `r87m` 4's dark one;
     the chosen send's line two, `The paper the client got. Printing it doesn’t ask.`, as `r87m` 6 draws it though the
     prose doesn't name it.
121. (ours) **§300's smaller readings:** `Type` on an `Included` row opens its boxes empty, and it reads `Included`
     until a figure is typed; `Changed` waits for Settings › Estimates in all three places; the copy kept is the paper
     on screen when he pressed Print, dated when the box came up, and written at once, not after the usual 700 ms; a
     stored copy this build can't read is kept untouched; at most 200 copies, 200 rows, 4,000 characters; opened from ⋮
     (`?view`), the way back reads `Back to the Builder`.

### 9 · Templates and the cocktail menu (§290–§294)

122. **Told — Sean decided: saving over a template keeps its menu.** With the switch off, or not shown, saving over a
     template keeps its menu and swaps; switched on, the invoice's replace them. His *"Keep it."*, built §293.
123. ❓ **So your :368 now holds for a new save only.** *"No menu, no box. That covers a template saved with the switch
     off"*: a template saved NEW with the switch off has no menu and no box; one saved OVER with it off keeps its menu,
     and its box. Confirm.
124. ❓ **The taken-name sentence says nothing of the menu.** `You already have a template called Wedding bar. Saving
     replaces its lines with these 2. It keeps its name.`, and the toast `Replaced Wedding bar` (`templates.ts:443`,
     `:472–474`, `:466`; the toast, `:481`). Say the menu is kept (switch off or not shown), or replaced (on)? Your
     words, if so.
125. ❓ **Should the switch open ON** when the typed name is a template with a menu? Off every time means a re-save keeps
     the old menu under new lines unless he turns it on.
126. ❓ **Please draw: taking a menu off a template** (extends `r87v` 1). The only way today is `Delete template…`, which
     is for good and takes its uses. Is a way wanted, and where? Sean has been told it waits for you.
127. ❓ **Past four drinks, are the swaps named?** Built as your :367 example: no — `Margarita, Moscow Mule, Paloma and 5
     more.` (`templates.ts:1085–1087`, `:1115`).
128. ❓ **Please draw: his drinks not loaded yet, or a failed read** (extends `r87v` 1 and 3). With no copy of his drinks
     on the device (first open, cleared data) or a read that failed, a template's tap starts with its lines alone and no
     question, and the naming sheet has no switch. A held or failed state of the row needs your words.
129. (ours) **The box's taps:** a pointer tap within 500 ms of the box opening answers nothing (the keyboard acts at
     once); focus starts on `Bring the menu`; a held Return answers nothing (`ConfirmDialog.tsx:95`, `:165`).
130. **`r87v` 1's row sits 14 above the foot;** built the sheet's 20.
131. **The preview's order:** built `4 categories · 22 items · 4 cocktails · as saved`, the app's summary since §155
     (`templates.ts:813–817`); `r87v` 2 draws `22 items · 4 categories · …`.
132. **The box in the shared confirm's measures:** 384 wide (350 at 390), padding 20, title 18, body 17, where `r87v` 3
     draws 440, 22 / 18 and 20, 15. Its answers are built 18, to the words.
133. (ours) **A swap whose new bottle is gone** stays with the template; its drink comes with its recipe's own bottle; a
     trashed drink isn't brought.
134. (ours) **On an invoice that already swaps the same drink's bottle,** the invoice's own swap stands, and the box's
     sentence leaves out a swap `Bring the menu` won't write; a template's second answer to one question is left out
     too.
135. (ours) **Nothing after a start or a fill says the menu came:** `Started from Wedding bar.`, `Filled from Wedding
     bar, 21 lines`.
136. (ours) **The `+` sheet's and the fill list's rows** don't say `· 4 cocktails` — only the preview, as ruled.
137. **Frame against build:** `r87v` 1's switch 51 × 31, built as the app's `Switch`, 44 × 26; line two 1.35 → 1.3; the
     sheet's hint and Cancel kept, which `r87v` 1 doesn't draw.
138. (ours) **Several swaps within four drinks:** `with Diplomatico and Demerara syrup in the Daiquiri`; `with Tito's in
     the Moscow Mule and Diplomatico in the Daiquiri`; a name opening `The` keeps its own; `1 cocktail`, singular;
     turning the switch with no name typed doesn't make the naming sheet ask before closing.

### 10 · A number set by hand (§310–§313)

139. **Told — Sean decided: a copy or a template starts as the calculator's.** A line set by hand arrives with its
     `calcQty` set to its own figure, so Update sets it as today's copies are set; his hand-set numbers stay protected
     on the invoice he set them on (`types.ts:3655`). His **Use the calculator (Recommended)** — *"Nothing new for
     Design to draw."*
140. ❓ **The foot's second clause.** Your :308 and `r87q` say `1 line set by hand · 6 unchanged`; `r87g` says `10 lines
     stay as they are`; built Round 31's `stays as it is` — `1 line set by hand · 6 stay as it is`
     (`calculator.ts:2413–2414`). Which, for every foot? (With #2's clause order.)
141. **The row, against `r87q`:** `r87q` draws 8 above and below, centred (61 tall), 20 at each side, a 2px gap, line
     two at 1.35; built 12, top-aligned (69), 14, no gap, 1.3.
142. **At 390:** the row 80 tall held, 101.3 after `Use 7`; a 57-character name 122.5 → 186.3. `r87q` is drawn at 580
     only.
143. ❓ **Where `Use the calculator’s number` sits in the panel:** under Cost, Price history and Used by, 181 below the
     panel's top (`RowPanel.tsx:970`); `r87q` 3 draws it under the header. Above them, or as built? With the pie's #18:
     one row order.
144. ⚠️ ❓ **The panel's figure is the one the calculator last WROTE** (`calcQty`, `InvoiceSheet.tsx:1578`), not what it
     says now — your :311 sets the line to `calcQty`, and :309 calls it *"the calculator's number"*. Two cases where
     they differ: (a) the sheet says 3, and the panel offers 2; (b) the calculator now agrees with him (3 → 3), and the
     panel offers 7 (+$119.96). Hide it when they agree, name the current figure, or keep it as ruled? Since §313 it
     shows only on the invoice he set it on; a copy arrives without it.
145. ❓ **When the calculator comes to agree** and nothing else changes, nothing makes the line calculated again: the
     agreeing pass runs only when an Update writes. Should it?
146. (ours) **A swap row whose old line he set by hand is the calculator's** (your Round 87 §6 #5): the swap moves it.
     Confirm.
147. ❓ **A §280 row held when any of its lines is his,** `You set 6 by hand` naming all of them. Sean's answer settled
     the copy case. It remains where he sets it himself: + on a copy's formerly free line, or after `Charge for this
     line` and a +, Update leaves 6 charged for 2 poured ($232.99 against $92.99 before step 5, at 8 guests; $278.97
     against $243.97 at 32) (`calculator.ts:2371`). Hold only his line, or not count a line changed while it was another
     kind?
148. ❓ (ours) **New state, live, no frame — a locked sheet's held row:** no button; the foot names it beside the lock
     sentence. Accept as built, or draw?
149. (ours) **The Undo step names the line:** `Rittenhouse Rye back to the calculator’s 7` (`r87q`: `Rye back to the
     calculator's 7`), the app's apostrophe (`invoiceRows.ts:277`).
150. (ours) **§310's smaller readings:** the button's spoken name adds the line's, `Use 7 for Rittenhouse Rye`; an
     on-hand row keeps its mark above the pen line, a prep's limes their `via`; no toast for `Use the calculator’s
     number`; `stays at 3` and `Use 7` centred on each other at the row's top; `r87q` 2 drops `· the calculator says 7`
     once `Use 7` is tapped — built as drawn, though the prose doesn't say.

### 11 · What his iPad still owes

- **Your Round 88 checks** (*For implementation* 4): a card to its editor and back, and one long trail at his phone's
  width, are his 27.30 and 27.31, on his iPad since §330–§332 went live (5:27 PM Eastern, 21:27 UTC; `IPAD-CHECKS.md` at
  `d7430b9` says so — at `eeddf7d` it still said they were not, written before the send) — 27.30 tells him the
  window's move is with you (W13), 27.31 the Tab stop (W10); the strip turning round and `Use 24 hours` go in once §1 b
  and §1 d are built. §341's three — a long recipe on the phone paper with Per drink and four sizes (count the sheets,
  see where the second table breaks), History's search words kept across the side menu, Reopen's message read whole —
  are 27.28, 27.27 and 27.25, among §340's 27.25–27.29, on his iPad since §340 went live. His 26.5 has a dated note
  since §330; 27.3 and 27.4 are rewritten as §1 d and §1 b land.
- **Session 27 — forty-five checks** (27.1–27.45, `IPAD-CHECKS.md` at `d7430b9`): 27.1–27.35 for what went up
  20–22 Oct; 27.36–27.42 for the guest count, on his iPad since it went live (02:37 UTC, 23 Oct), once he reloads every
  device — the file at `d7430b9` still says *"not on your iPad until the next update goes up"* of them, written
  before the 02:29 send; and 27.43–27.45 for §350–§351 (the To make note, a syrup marked Don't buy, a recipe that says
  `top`), for once they are live. None ticked yet. His first check is 27.13 — `Mark as sent?` around the iPad's print
  sheet (#114).
- **Sessions 23–26:** our Round 88 promised them back in a later round. None has come back: in Sessions 23–27 only 23.3
  is ticked, and it went to you in Round 85 §3 (a search of `IPAD-CHECKS.md` at `e540b42` for ticked headings).
- Every screen measurement here is Chrome's or Chromium's. Nothing was printed on an iPad.

## What I need back

0. ⛔ **§0 U1, G1 and G2 (2) first — they decide what is built soonest.** U1, the one sentence for two or more drinks the
   app can't count: a stand-in goes up with this round in its place — our call, not a design: words only, no money, a
   rare path — live until you rule, and your words replace it as soon as they come; please give them, or draw it. G1,
   hours alone differing (your Round 87 §4 c #4): the guest count, live since 23 Oct, asks nothing then; your answer
   decides whether it should, and if it should, please draw its box. G2 (2), a note when the calculator's guests follow
   Event details, in `r88a`'s forms (drawn, if yes): your Round 88 §1 b, queued after the guest count, changes the hours
   note, so the guests' would be built with it.
1. ⛔ **§1 a + b — the pie's C and D, which go live together:** #1–#15 and #17. First the two drawings they can't be
   built without, #10 and #17; then the money on every invoice's first Update after the pie — #4, #6, #9 (with §7 #89,
   live today), #11, #12, #13; then #1–#3, #5, #7, #8, #14, #15. #2 with §10 #140, one foot. #16: the words, in case
   Sean keeps his counts.
2. ❓ **§7 — the swap's money, live on client invoices now:** confirm #80–#84; then #85 (drawn — the row is live by
   Sean's **Ship it, ask Design**), #87, #88 and #90 (drawn — an old bottle left billed: +$76, +$140, +$72), #95, #96,
   #97, #98, #99; then #86 and #92 (drawn), #91, #93, #94.
3. ❓ **§0 — the guest count as built (§320–§324, live):** G2 (1) with G5's second question and §6 #71, one answer; G3
   and G4 (drawn); G5, G6, G7. Sean's decision (G2) is told, with our four readings of it, (a)–(d); G8–G18 are told.
4. ❓ **§0 — the way back as built (§330–§332, live):** W13 (the window's top edge) and W14 (the Back that does nothing,
   with W8's name and category) first, then W12, W10 and W11. W1–W9 are told; W14 carries W8's question.
5. ❓ **§0 — a pour the app can't count and the To make note, as built (§350–§351, on `main` with this round, not live
   when it was written):** U2 (the foot, under our own wrong report) and U5 (a swap's band on a floor) first; then U3,
   U4, U6, U7 (a new state with no frame, live once this round's build is up — accept or draw) and U10 (an older row the
   order still decides). U8 and U9 are told.
6. ⛔ **§1 c–d — the pie's E and F:** #18 with §10 #143, #19, #20 (drawn), #21–#24; #25 (drawn), #26–#29. Then §1 e,
   #30–#36: the plan builds their provisionals until you answer.
7. ⛔ **§2 #37 — the Separate block;** then #38–#42. #38 and #39 decide whether a recipe takes a second sheet.
8. ❓ **New states with no frame — accept as built, or draw:** #47, #77, #100's three and #148, live; and §0 U7, live
   once this round's build is up.
9. ❓ **The rest of §3–§10's ❓:** #49–#52; #58 (drawn), #59, #61, #62, #64; #65, #67, #68; #71, #72, #74, #76 (drawn);
   #107–#109, #111, #113 (drawn), #116, #117 (drawn), #118; #123–#125, #126 (drawn), #127, #128 (drawn); #144, #145,
   #147.
10. **The nineteen drawings, all in the items above** — an index, in the order the build needs them: #10, #17 (C and D);
    #85–#88, #90 (live money); G3, G4 (the guest count, live); #20, #25 (E and F); then #41, #58, #76, #92, #113, #117,
    #126, #128. Each says which frame it extends. **And nine more, only if your answer builds them:** U1's sentence, if
    words alone won't do (extends `r88g` 1), G1's box with the Bar times row alone (`r87o` 2), G2's note (`r88a` 1–2),
    G5's foot (`r87h`), G7's refusal (`r87o` 3), W13's window (`r88b`), W14's sequence (`r74g`), U5's band (`r87g` 3),
    U7's row (`r88g` 1).
11. **Every (ours), *For the record* and frame note** — told, as built: W1–W9, G2's (a)–(d), G8–G18, U8 and U9 among
    them. Object to any.
12. **His Sessions 23–27** come back in a later round.

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
    from the readable pour alone, the working naming the French 75 only, no `at least` and no sentence (the foot: ~~`1
    line needs a number from you`~~ *⚠️ wrong — corrected 23 Oct, Round 89 §0 U2: that is calculate()'s foot, which
    nothing on screen shows; at `eeddf7d` the foot on screen read `1 has no product to change`*); ticked the other way,
    #36 (b)'s sentence and no quantity. `top`, `rinse` and `float` are units the app can't read. ❓ How should it read —
    and should the order matter?
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

## Older rounds — Round 82 and earlier are in `REQUESTS-ARCHIVE.md`

Moved there on 12 Oct 2026 at Design's request: this file had reached 1.07 MB, too large for Design to copy in or search. Nothing was edited — the archive holds them byte for byte as they stood here at `bd0d234`. Lines 1–2874 of this file kept their numbers at the split (`0f4c0d0`); each round written since goes in above the last and moves the lines below it, so a `REQUESTS.md:NNNN` is read at the commit it was written at. A `REQUESTS.md:NNNN` above 2874 written before the split is line NNNN − 2864 in the archive. **Round 76 followed on 20 Oct 2026**, to keep this file under 500 KB — whole and unedited, at the top of the archive's rounds, above Round 75. Its 292 lines moved the archive's down, so from then that pre-split line was NNNN − 2572 there, and an archive line cited before 20 Oct was that number + 292. **Rounds 78 and 77 followed at Round 88, the same day**, for the same reason — whole and unedited, at the top of the archive's rounds, above Round 76. Their 564 lines moved the archive's down again, so from Round 88 until Round 89 that pre-split line was NNNN − 2008 there, and an archive line cited at limbo-design `4c60bce` or before was that number + 564 (+ 856 if it was cited before 20 Oct). **Rounds 82, 81, 80 and 79 followed at Round 89, 23 Oct**, for the same reason — whole and unedited, at the top of the archive's rounds, above Round 78. Their 1826 lines moved the archive's down again, so since Round 89 that pre-split line is NNNN − 182 there, and an archive line cited from Round 88 to limbo-design `05cbb50` is that number + 1826 (+ 2390 if it was cited from 20 Oct to `4c60bce`, + 2682 if before 20 Oct). *(This heading read "Round 75 and earlier" until 20 Oct, "Round 76 and earlier" from Round 87 until Round 88, and "Round 78 and earlier" from Round 88 until Round 89.)*
