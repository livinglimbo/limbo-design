# Open requests — implementation → Claude Design

> **Split 12 Oct 2026, at your request:** this file had reached 1.07 MB. Rounds 75 and earlier are now in `REQUESTS-ARCHIVE.md`, unedited; this file keeps the header, the index, the DELIVERED table and Rounds 76 onward. At the split (`0f4c0d0`) every line here kept its number; each round since goes in above the last and moves the lines below it, so a `REQUESTS.md:NNNN` is read at the commit it was written at (Round 83 §0). **Moved 20 Oct 2026, to keep this file under your 500 KB:** Round 76, whole, is now at the top of `REQUESTS-ARCHIVE.md`'s rounds, unedited — byte for byte as it stood here at limbo-design `7fc529c` (`cmp` of the moved text against `git show 7fc529c:REQUESTS.md`, its lines 4368–4659, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 77 onward. Its 292 lines went in above Round 75 there, so every older line of the archive moved down by 292: an archive line cited before 20 Oct (Round 86's `REQUESTS-ARCHIVE.md:2151`, for one) was that number plus 292 from then until Round 88 (Round 87, its opening). **Moved again at Round 88, the same day, for the same reason:** Rounds 78 and 77, whole, are now at the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 76, unedited — byte for byte as they stood here at limbo-design `4c60bce` (`cmp` of the moved text against `git show 4c60bce:REQUESTS.md`, its lines 4354–4917, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 79 onward. Their 564 lines went in above Round 76 there, so an archive line cited at `4c60bce` or before was that number plus 564 from then until Round 89: Round 86's `REQUESTS-ARCHIVE.md:2151`, line 2443 at Round 87, was line 3007 (Round 88, its opening). **Moved again at Round 89, 23 Oct, for the same reason:** Rounds 82, 81, 80 and 79, whole, are now at the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 78, unedited — byte for byte as they stood here at limbo-design `05cbb50` (the same as at `9e45f20`; `cmp` of the moved text against `git show 05cbb50:REQUESTS.md`, its lines 2952–4777, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 83 onward. Their 1826 lines went in above Round 78 there, so an archive line cited from Round 88 to `05cbb50` is that number plus 1826 now — one cited from 20 Oct to `4c60bce`, plus 2390, and one cited before 20 Oct, plus 2682: Round 86's `REQUESTS-ARCHIVE.md:2151`, line 2443 at Round 87 and 3007 at Round 88, is line 4833 (Round 89, its opening). **Moved again at Round 90, 25 Oct, for the same reason:** Rounds 86, 85, 84 and 83, whole, are now at the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 82, unedited — byte for byte as they stood here at limbo-design `f714fde` (`cmp` of the moved text against `git show f714fde:REQUESTS.md`, its lines 2475–4244, finds no difference) — so this file keeps the header, the index, the DELIVERED table and Rounds 87 onward. Their 1770 lines went in above Round 82 there, so an archive line cited from Round 89 to `f714fde` is that number plus 1770 now — one cited from Round 88 to `05cbb50`, plus 3596; one cited from 20 Oct to `4c60bce`, plus 4160; and one cited before 20 Oct, plus 4452: Round 86's `REQUESTS-ARCHIVE.md:2151`, line 4833 at Round 89, is line 6603 (Round 90, its opening). **Reflects `limbo-app` at `main` @ `ad8c680`** (`ad8c6802854c75cea5c1ebbf3e0cbc1331e291fa`) — the one records commit (§393–§407 written up), on `main`; its code is `d2b10f0`'s (§407 · review: `git diff --stat d2b10f0 ad8c680 -- src scripts package.json` is empty). `origin/main` is level with it: `git ls-remote origin main` reads `ad8c680` (25 Oct, about 07:54 UTC); it went up at 07:48:13 UTC (`origin/main`'s reflog) with `SHIP_NO_DEV=1 npm run ship`, exit 0. **LIVE is `d2b10f0`'s build, `UcNXylj9_zu4Xv6NAauqZ`** — your Round 89, both parts, built in full (§360–§407) — read by curl at 07:53:48 UTC on 25 Oct over `/login` and `/style/sheetcheck`; its scripts carry `heldSplit`, which `git log -S` finds first in `8f4cea4` (§406). `ad8c680` changes nothing `netlify.toml`'s `ignore` watches, so it built nothing (read from the rule, not seen). Netlify's deploy list was not read. Design read Round 89 at `REQUESTS.md` @ `f714fde` against `limbo-app` @ `d7430b9` (part 1, its `ROUND-89.md:3–4`) and @ `2f0ec17` (part 2, its `ROUND-89-PART-2.md:3–5`). *Until Round 90 this line read `d7430b9` — your Round 88 §3 b #15 and #16 (§350 `995c154`, §351 · review `cc65bf2`) with words only over them, on the guest count (§320–§324), with LIVE at `ab4c4f5`'s build `Wp9Kw2tkGtL6yviAgprUH` and GitHub's `main` at `ab4c4f5`; `d7430b9` went up with Round 89 at 05:24:51 UTC on 23 Oct, and its build `zk2dbbuULrkL-bZQ9gow_` was live by 05:33:38.* *Until Round 89 this line read `c4e2011` — records only (§261, `67691d9`, and §262, its review) — the code `5f9c5e7`'s (§260 · review), with LIVE at `5f9c5e7`'s build `jwMwkotyJmbuyNSizNHVp` and `git ls-remote` at `5f9c5e7`; `67691d9` and `c4e2011` went up with Round 88, 20 Oct.* *Until Round 88 this line read `751b1ce`, the code `1eb0841`'s (§243 · review), with LIVE at `72c3bc7`'s build `NVGtN5nE6jP81lrvxd2au` and `git ls-remote` at `8b00634`; `751b1ce` went up with Round 87, at 02:04:54 on 20 Oct.* *Until Round 87 this line read `72c3bc7`, the same code, with LIVE at `d1e7dbe`'s build `5agCBiRrKMy0jW6xLyECl` and `git ls-remote` at `d1e7dbe`; `72c3bc7` went up with Round 86, at 13:53:41 on 18 Oct.* *Until Round 86 this line read `d1e7dbe`, the code `88443e0`'s (§234 · review), with LIVE at `6129dbd`'s build `W8wq1IMtvDRHl3daq4VZQ`; `d1e7dbe` went up with Round 85.* *Until Round 85 this line read `6129dbd`, the code `deb5973`'s (§220 · review), with LIVE at `cf720ec`'s build `0_kUXfw5OLAq4ngBws4KX`; `6129dbd` went up with Round 84.* *Until Round 84 this line read `a4544b0`, the code `1bf91a7`'s (§209 · review), LIVE on build `537ayQEoB6ro_4-42seob`; `4533923` and `a4544b0` went up with Round 83.* *Until Round 83 this line read `a7fb009`, the same code, with `git ls-remote` reading `1a9d18d` at 19:24; before the split it said nothing of line numbers.* *Until Round 82 this line read `42f6ad2`, the code `0afe219`'s, with LIVE at `e8f8a1c` and §203–§206 to go up with Round 81 — they went up at 15:41:56 and were live at 15:45:53; §207–§208 followed as `39efefe`, live by 16:49:51.* *Until Round 81 this line read `a4606d9`, the code `c6ccb79`'s, LIVE; `a4606d9` went up with Round 80 at 19:05:17 on 11 Oct.* *Until Round 80 this line read `f6871e4`, the code `11027e7`'s, with LIVE at `ebefce8` and §189–§192 held on implementation's Mac by Round 79 §1 — all pushed since, as `9e35afd` (13:31:59) and `c6ccb79` (17:06:27, 11 Oct).* *Until Round 79 this line read `909c0b3`, the code `887e6e8`'s — both rebased onto §186 at 23:38 on 10 Oct with the same changes, and pushed as `1103643` and `ed17565` (Round 79's header lists every pair). Until Round 78 it read `56cfbe3`, the code `fc14783`'s (§153–§158 templates, §160–§167 your Round 75 and the Retry fix, §169–§179 Custom Group Lines), pushed. Until Round 77 it read `124fb62`, the same code. Until Round 76 it read `9f21178`, the code `31a78b4`'s (§149–§151, built from your Round 73). Until Round 75 it read `19b81ab`, the code `1401325`'s (§145–§147, built from your Round 72; after it, `07d9687`, `f7e737f`, `b48e5aa`, `0a03c7b`, `d7ad633` and `19b81ab` changed only notes and records). Earlier on 9 Oct it read `0a03c7b`; on 8 Oct, `f7e737f`; until 8 Oct, `139e265`, the code `c476989`'s. Round 73's draft read `f7e737f` and called `34ca8b0` the last app commit you could read — stale as soon as you could read the draft: `f7e737f` and the draft were pushed together on 8 Oct.* ⚠️ **READ `main` — there
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
| BE | ~~**Round 87 §2 — the pie, Sean's big Calculator rework.** ❓ May your 28B (*"no beer estimator, no invented split across products"*, `HANDOFF.md:3825–3827`) be reversed, and Round 31 §4's Settings block (`ROUND-31.md:361–378`) come back? Then frames, as a sequence of taps: the calculator's shares and items, the empty kind, on hand, the cocktail or poured-on-its-own split on the calculator's list and the Builder's line, the mark, Settings' crowd styles and pours, a product's pour. The data exists and nothing reads it (`drinkSplits.ts`; a search of `src` and `scripts` for its name and exports finds one comment that names it, `lib/estimateWords.ts:45`)~~ | **20 Oct** | ✅ **ANSWERED — your §2 and `r87i`–`r87l`: 28B reversed, Round 31 §4's Settings block back, one rule (a typed share is pinned), the words tap by tap, the edge states, the worked figures.** **The pie is plan 015, BUILT and LIVE in six batches on your Round 89, parts 1 and 2 — A §370–§372 (23 Oct, by 14:03 UTC), B–D §380–§384 (24 Oct, by 06:46), E §391–§392 (read live 17:49), F §393–§395 (by 21:34); the tuned line is your Round 88 §1 c's, kept by your part 2 #28 (rows BK, BL); what it leaves is Round 90 §2 b, e and f.** *(Until Round 90: "The pie is plan 015, written and reviewed (`b716180`, `ab78525`), NOT built; the tuned line's words are your Round 88 §1 c, `Tuned from your own events`; its 36 items are Round 89 §1 (rows BK, BL)".)* *(Until Round 89: "The pie is a plan of its own, last in Sean's order (Round 88 §4); the tuned line's words are Round 88 §1 c (row BH)".)* |
| BF | ~~**Round 87 §3 — the estimate.** ❓ Frames for `View estimate` in ⋮, `Mark as sent?` after `Print or save as PDF`, every sent copy with its date, `Estimate sent Oct 19 · $…` under the title and on History's row, *changed since you sent it* — nothing records a send today (a search of `src` for `sentAt`, `markedSent`, `Mark as sent`, `Estimate sent`, `View estimate`: none); per guest smaller first (`perGuest`, `estimateDocument.ts:441–451`); `Included` for a comp-only category (`To be confirmed` today, `estimateSheet.ts:450`, `:507`); the calculator's count as the base (Event details' today: `invoiceGuests`, `estimateSheet.ts:489–490`) and `Also set Event details to N guests?` at Update~~ | **20 Oct** | ✅ **ANSWERED — your §3 a–d and `r87m`–`r87o`.** **§3 a–c BUILT and LIVE — §300–§302 (`d2c296b`, `7af8688`, `4ff9b97`), sent 22 Oct at 05:55 UTC, live by 06:03, build `tjcASscDcUmefjVyffzCt`; Round 89 §8 (row BP). §3 d with §4 c #4's box (its first half) BUILT and LIVE — §320–§324 (`892f166`, `a6fa33f`, `79b0a30`, `2983a98`), with Sean's 22 Oct answer, the newer number wins — sent 23 Oct at 02:29 UTC, build `Wp9Kw2tkGtL6yviAgprUH` by 02:37; Round 89 §0 G1–G18 (row BS). His 23 Oct answer reversed the newer number wins: your Round 89 part 1 §0 a, BUILT §374–§375, live 23 Oct by 21:05 UTC (row BS).** *(Until Round 89: "§3 a–c are one plan, ninth in line; §3 d with §4 c #4's box, tenth".)* |
| BG | ~~**Round 87 — the rest.** §1 b, any objection to plans 009, 010 and 014 before Sean's Build (nothing new drawn); §4 a, the hand-set row — your §23.6 and `27b` rule it (`HANDOFF.md:4051`, `:4060–4061`), never built (`calcQty` is read nowhere: a search of `src`), and `28a`'s band has no tick (`CalculatorSheet.tsx:440` is the sheet's only checkbox); §4 c, the hours' words and Sean's two *"ask to update the other"* boxes; §4 d, a red Calculate after an untick (`ROUND-33.md:88–103` rules it for swaps); §5, `Bring its cocktail menu too?` — a template holds no menu (`templates.ts:204–215`); §7, the knobs on a locked invoice (`lockStage` only at `CalculatorSheet.tsx:126`, `:142`, `:234`, `:261`, `:350`)~~ | **20 Oct** | ✅ **ANSWERED — your §1 b (no objection), §4 a (`r87q`), §4 c (`r87p`, `r87o` 2), §4 d (`r87r`), §5 (`r87s`, `r87v`), §7 (`r87t`) and §8 (`r87u`).** 014 BUILT §246–§247 before your answer came, and LIVE (sent at 07:53), so §4 d's red button is a step of its own; **009 with §7 (§263–§265), 010 with §4 c (§266–§267), §8 (§268–§269), §4 d (§270–§271), §5 (§290–§294) and §4 a (§310–§313) all BUILT and LIVE, 20–22 Oct — and §4 c #4's first half (typed hours asked about at Update), which §266 left for §3 d's box (`83e0925`: *"NOT BUILT HERE"*), BUILT with §3 d where the guests differ too — hours on their own ask too since §374, your Round 89 part 1 G1 (`r89b`, row BS); their notes are Round 89 §3–§5, §9 and §10 (rows BN, BQ), and §0 G1–G18 (row BS).** *(Until Round 89: "009 with §7 is next, then 010 with §4 c — Sean flipped §4 c #4 (Round 88 §1 b, row BH); the rest in Round 88 §4's order".)* *(Until Round 90: "…hours on their own ask nothing yet, Round 89 §0 G1 (row BF, §320–§324, live 23 Oct)…".)* |
| BH | ~~**Round 88 §1 — Sean's decisions that need your words.** (b) Your §4 c #4 flipped by Sean: the calculator follows changed bar times — the in-place note's words (ours: `The calculator now uses 5 hours, from the bar times. You'd typed 6.` · `Keep 6`) and when it goes; (c) the tuned crowd style's line with no client's name (ours: `Tuned from your own events`); (d) the bar opening and closing at once — Sean: *"Warn me with a prompt, but allow me to bypass."* — your gold line, or a box that lets him say 24 hours (please draw it)~~ | **20 Oct** | ✅ **ANSWERED — your Round 88 §1 b (`r88a` 1–2), §1 c and §1 d (`r88a` 3–5), received 22 Oct by upload to the cloud session.** **§1 b and §1 d BUILT and LIVE — §360–§361 (`abf7c2b`, `9f1dba2`), sent 23 Oct at 07:59 UTC, build `TVMNNM8axMK-3bZkLSttU` by 08:08; your Round 89 part 1 §0 a then turned §1 b's note round (§374, row BS). §1 c BUILT with the pie's F (§393, row BL).** *(Until Round 90: "§1 b and §1 d build after the guest count (§3 d), which changes the same Event details code; §1 c goes into plan 015 (the pie)".)* |
| BI | ~~**Round 88 §3 a — the way back, as built.** The card and its editor don't share `r86k`'s line (✕ moves 8 right and 4 up, the title 24 → 22); B2–B4's *"footer's button"* doesn't exist (`setGate("send")` once, `Builder.tsx:652`; the stage list opens only from ⋮ › `Stage…`, :1738); `r86b` 3 against §0 on what asks; long trails squeeze steps behind under 44 wide (22.4 at 390); the trail's knob in dark; the switch's knob under Reduce Motion; choosing lines for a new group holds no history step; B17's name; ticking is two undo steps~~ | **20 Oct** | ✅ **ANSWERED — your Round 88 §3 a #1–#10 (`r88b`, `r88c` 1–4, `r88d`), received 22 Oct.** #3 and #6 as built; **#1, #2, #4, #5, #7–#10 BUILT and LIVE — §330–§332 (`49d3165`, `2f68d26`, `e1c700e`), sent 22 Oct at 21:19 UTC, build `v2CdGFfbuSl04eU6tt0td` by 21:27; what they leave open is Round 89 §0 W1–W14 (row BR).** *(Until Round 89: "#1, #2, #4, #5, #7, #8, #9 and #10 build as one batch, now".)* |
| BJ | ~~**Round 88 §3 b — the rest.** Reopen's box cuts its words (298 of the 643 H4's pair needs); S5 across the page's two lists; the search words and the quiet reload; five figure columns on 4 × 8 in, and the prep's Letter; an older calculator fault — a readable pour and an unreadable one on one product (`calculator.ts:940–946`); the `To make` note after Update (`CocktailPicker.tsx:967–968`)~~ | **20 Oct** | ✅ **ANSWERED — your Round 88 §3 b #11–#16 (`r88e`, `r88f` 1–2, `r88g` 1–2), received 22 Oct.** **#11–#14 BUILT and LIVE — §340–§341 (`5072c08`, `3d27f4e`), build `YgTMdtU4KHAPowmpQReGq`, sent 22 Oct at 15:12 UTC — and #14's Separate-row case BUILT since §404 on your Round 89 part 2 #37 (row BM); #15 and #16 BUILT and LIVE — §350–§351 (`995c154`, `cc65bf2`), sent with Round 89 (`d7430b9`) on 23 Oct at 05:24 UTC, build `zk2dbbuULrkL-bZQ9gow_` by 05:33; what they left open was Round 89 §0 U1–U10 (row BT).** *(Until Round 90: "— except #14's Separate-row case, held for Round 89 §2 (row BM); #15 and #16 BUILT — §350–§351 (`995c154`, `cc65bf2`), on `main` with Round 89 (`d7430b9`), not live when it was written".)* *(Until Round 89: "#11–#14 build now, beside §3 a; #15 (a money row) and #16 after the guest count, with §1 b and §1 d".)* |
| BK | ~~**Round 89 §1 a–b — the pie's Batches C and D, the Drink calculator and Event details, which go live together; plan 015 stops on them.** Drawings first: ⛔ #10 a kind he pins and lets go (every old invoice opens with Cocktails pinned); ⛔ #17 Crowd style's place beside your Round 88 strip and the Cocktail hour row (`EventDetailsSheet.tsx:500–535`, `:615–655`). Then ⛔ #1 Undo of shares and of a crowd style's kept figures (009's settings are never an Undo step but for §266's Keep: `keepStageAndTicks`, `invoiceTabs.ts:1451–1475`); #2 the zero guard and the foot with the pie (`Set drink mix` targets the Drink mix knob the pie removes, `CalculatorSheet.tsx:514–517`; where `1 on hand · not ordered` sits, `calculator.ts:2411–2420`); #3 a Duplicate's pins and kept styles — two readings, both run (313.5 vs 291.6 cocktail drinks); #4 a keg, a pack or a can recorded by volume, a mixer on its own (`Keg`, `types.ts:4196`); #5 your Round 88 #15's floor in a merged row; #6 a pinned kind and an empty one, all pinned under 100 (+$543.80 if they grow); #7 `Split evenly`, `Just added`, made room (C's checks assert it, plan:1257–1258); #8 the edges no frame draws; #9 a product whose only line is a comp — a beer with the pie, any bottle at Update today (`productLineIn`, `types.ts:154–168`; asked once, for §7 #89 too); #11 a beer filed under Wine (`migrations.ts:266–295`); #12 a line with no Library product (91% of real lines carry no product id and are matched by name, `types.ts:60–61`); #13 cocktails only = every drink a cocktail (648 vs 291.6); #14 before the Settings pages (`drinkSplits.ts:95–100`, `:113–120`); #15 the share boxes 40 or 48 (`FormField.tsx`). ❓ #16 his typed beer counts — the words, in case Sean keeps them *(Code lines at `e540b42`.)*~~ | **23 Oct** | ✅ **ANSWERED — your `ROUND-89.md` §1 a–b (part 1, 23 Oct) and frames `r89d`–`r89f`. BUILT and LIVE — the pie's B, C and D, §380–§384 (`e5ffab0`, `5d9f9b0`, `ad5c38a`, `ee85523`, `a781966`), with your #9 built in §384 before the send; sent 24 Oct at 06:36 UTC, build `26xGYKNcts8bHCqxvQGWe` by 06:46.** #16 waits on Sean (plan 015's For Sean #2); #2's floor clause built with U2 (§387); #10 (c)'s name per your part 2 #27 (§391). The arithmetic under it, §370–§372, live since 23 Oct, 14:03 UTC. What it leaves is Round 90 §2 b (row BV) |
| BL | ~~**Round 89 §1 c–e — the pie's Batches E and F, and what the plan builds provisionally.** ⛔ E: #18 two firsts in the press-and-hold panel (one answer with §10 #143; `RowPanel.tsx:970`); #19 the switch on a copy and a template (`withoutJobMarks`, `types.ts:3642–3660`); #20 the switch on a locked invoice (please draw); #21 the Builder's split; #22 unticking, swapping and the switch (`applyCalculation.ts:225–232`); #23 words and icons for each kind, the names; #24 your own words disagree — a mixer's switch line (`ROUND-87.md:126–127` vs `:158–159`). ⛔ F (no longer waiting on Round 88 §1 c): #25 The calculator on the Settings list (please draw; your Round 31 Ask A §2, *"Sub-sections: NO"*, `ROUND-31.md:317–327`); #26 renaming or deleting a built-in style; #27 our Round 88 §1 c premise was wrong — a second account would read `Tuned` (`drinkSplits.ts:96`, `tuned: true`; nothing writes `tuned`, a search of `src`); #28 what makes a style tuned, and a style he adds; #29 a product's pour help line. ❓ Not ⛔, the plan's provisionals until answered: #30–#36 (`5 glasses a bottle`, ⋮'s row name, Topo Chico drawn `New`, the working sentences, the red button, on hand on its own, a waiting swap's old bottle) *(Code lines at `e540b42`.)*~~ | **23 Oct** | ✅ **ANSWERED — your `ROUND-89-PART-2.md` §6 (24 Oct) and frames `r89q`, `r89r`. BUILT and LIVE — E §391–§392 (`6e00e3f`, `977d8b6`), read live 24 Oct at 17:49 UTC (`nxbKvKCraeHvOC8_lT5yb`); F §393–§395 (`81dad9d`, `4b1b591`, `f98e9aa`), by 21:34 (`4OIbDLuRb434KDHCVACnC`); #30's rule §389, #31 §387, #35's on-hand words §394.** What it leaves is Round 90 §2 e and f (rows BW, BX) |
| BM | ~~**Round 89 §2 — your Round 88 §3 b as built (§340–§341, LIVE).** ⛔ #37 the Separate block once it follows the last table — held at one table (`RecipeSheet.tsx:248–249`); while his French 75 is in a printout every recipe in it prints at 13.61pt (90.7%) at five columns, about two-thirds at eight. ❓ #38 our #14 premise corrected (five and six columns fitted unshrunk, 249.81 in 249.8) — does four-a-table hold for every recipe, since the split can add a sheet; and the phone row's `one recipe per page` (`ExportSizeSheet.tsx:106`); #39 may a split table break across sheets (his Mai Tai); #40 History's and the rail's filters across the quiet reload (`libraryView.ts:234`); #41 a tap refused below the window (please draw; `ManagedList.tsx:117–123`, `:160`); #42 the recipe sheet's Letter foot reads `prep sheet` (`RecipeSheet.tsx:565`) *(Code lines at `e540b42`.)*~~ | **23 Oct** | ✅ **ANSWERED — your part 2 §7 and frame `r89s`. BUILT and LIVE — #40, #41 §398–§399 (`4cae0dd`, `0998c15`), live by 25 Oct, 01:56 UTC at the latest (`IbcxYfClSFngAjjE4KBn_`); #37–#39, #42 §404–§405 (`8550d8a`, `c744813`), live by 06:41 at the latest (`dXGQPOLRcyuGIQbeI2OXp`) — the hold lifted.** 11 of 71 phone printouts still print a little small, and the champagne can take two tables on two sheets: Round 90 §2 k (row CA) |
| BN | ~~**Round 89 §3–§6 — your Round 87 as built: the hours, the cocktail hour, the red button, nothing to count (§263–§273, LIVE).** ❓ New states, live with no frame — accept or draw: #47 whole packages on a locked invoice, #77 on hand under the guard. ❓ #49 a pre-§263 invoice's locked defaults (`calcSettings.ts:129–131`); #50–#52 the note's Undo labels, Undo of Keep after a calculator write, a typed 0 (`calcSettings.ts:324–327`); #58 the five lengths below 414 (please draw; −0.80 at 390, overlap at 320); #59 dark 1.05:1; #61 the whole row a target; #62, #64; #65 `r87r`'s unticked drink leaves the list (`CocktailPicker.tsx:325`); #67 the red at 15 or 17 (`CocktailPicker.tsx:904`); #68 guests not one number (`calcSettings.ts:237`); #71 `Update 0 lines` greyed (`CalculatorSheet.tsx:626`, `:639`); #72 the guard's measures; #74 locked with nothing to count; #76 an empty `Proposed` band (please draw; `CalculatorSheet.tsx:883–892`) *(Code lines at `e540b42`.)*~~ | **23 Oct** | ✅ **ANSWERED — your part 2 §8 and §9 §3–§6, frames `r89p` 3–4 and `r89t`.** #47, #77 accepted; **#49, #52, #57, #71, #72, #74, #76 BUILT and LIVE — §387, §390 (`dd8b5d2`, `91a0344`), 24 Oct, 14:43 UTC (`KZAa3EQLH1tATbwm0ou8u`)**; #50, #51 as built, asserted §389; #58, #59, #61, #62 §397, §399 (live by 25 Oct, 01:56 at the latest); #67 §398; #64, #65, #68 as built. What it leaves is Round 90 §2 a and c (rows BY, BZ) |
| BO | ~~**Round 89 §7 — the swap's money (§274–§281, LIVE on client invoices).** ❓ Confirm Sean's answers: #80 free stays free, #81 3 free 2 charged, #82 swaps applied before the step, #83 a comp before any Update, #84 a bottle the calculator can't count. Please draw: #85 the `Proposed` row beside a free line (`= 4.4` beside `2 → 2`; live by Sean's **Ship it, ask Design**); #86 bottle ↔ prep swaps; #87 a swap to a bottle already billed (+$76); #88 after Update, changed or undone (+$140); #90 two old bottles to one (+$72); #92 a closed group. ❓ #91 `recalculate to apply` on a locked invoice; #93 a Don't buy swap to a bottle with no size; #94 the row's alignment; #95 a gift comped before the swap ($231.96 vs $196.96); #96 a charged line at 0 prints `0 × $35.00`; #97 a bottle added as its own line (six for five); #98 + lands on the free line ($138.97 → $103.97); #99 pre-step invoices comped (+$105/+$64/+$99); #100's three new states, live with no frame — accept or draw. (#89, a lone comp, is asked at §1 #9, row BK)~~ | **23 Oct** | ✅ **ANSWERED — your part 2 §2 and frames `r89i`–`r89n`.** #80–#84 confirmed; **#85–#88, #90–#94, #96–#98 BUILT and LIVE — §385–§386 (`3ae5cc3`, `5526d2e`), sent 24 Oct at 11:35 UTC, build `O8gIGqiyERNVgg9ZU3PIV` by 11:45**; #89 as part 1 #9 (§384); #95, #99, #100 as built. Money moves at Update by your rules (Round 90 §0 c). What it leaves is Round 90 §2 d (row BU) |
| BP | ~~**Round 89 §8 — the estimate's sends, per guest, `Included` (§300–§302, LIVE).** ❓ #107 an all-comped row that doesn't follow guests (`estimateSheet.ts:173`); #108 one that does; #109 `Included` beside only `To be confirmed`; #111 a sent copy shows today's logo (`estimateSent.ts:285`); #113 the sent line at 390 (please draw; `SentLineText.tsx:37–43`); #116 the tax rate moving reads not changed (`estimateSent.ts:303–321`); #117 a sent copy in History's trash (please draw); #118 two sends on one day *(Code lines at `e540b42`.)*~~ | **23 Oct** | ✅ **ANSWERED — your part 2 §9 §8 and frames `r89u`, `r89v`. #107, #108, #113, #116–#118 BUILT and LIVE — §400, §403 (`efff14c`, `bd93808`), and #111 §401 (`77c095d`) — sent 25 Oct at 01:55 UTC, build `zxzxODcFZMQ2Hpo8Me4MI` by 02:07**; #109 as built. What it leaves is Round 90 §2 i (row CA) |
| BQ | ~~**Round 89 §9–§10 — templates' menu and a number set by hand (§290–§294, §310–§313, LIVE).** Told: Sean's *"Keep it."* (#122) and **Use the calculator** (#139). ❓ #123 your `ROUND-87.md:368` now holds for a new save only; #124 the taken-name sentence says nothing of the menu (`templates.ts:443`, `:472–474`; the toast `:481`); #125 the switch open on; #126 taking a menu off a template (please draw); #127 swaps past four drinks; #128 his drinks not loaded, or a failed read (please draw); #140 the foot's second clause — `6 unchanged`, `stay as they are` or `stay as it is` (`calculator.ts:2413–2414`; one answer with §1 #2); #143 where `Use the calculator’s number` sits (`RowPanel.tsx:970`; one answer with §1 #18); #144 the panel offers `calcQty`, the number last WRITTEN (`InvoiceSheet.tsx:1578`; +$119.96); #145; #147 a §280 row held for one line of his ($232.99 vs $92.99, `calculator.ts:2371`); #148 a locked sheet's held row, a new state, live with no frame — accept or draw *(Code lines at `e540b42`.)*~~ | **23 Oct** | ✅ **ANSWERED — your part 2 §9 §9–§10 and frame `r89w`.** **#124, #126, #128 BUILT and LIVE — §402–§403 (`a7efcbe`, `bd93808`), 25 Oct, 02:07 UTC**; #123, #125, #127 as built; #140 with part 1 #2 (§381); #143 with #18 (§391); #144 §389–§390; #145 as built; **#147 BUILT and LIVE, its own money step — §406–§407 (`8f4cea4`, `d2b10f0`), sent 25 Oct at 06:45 UTC, build `UcNXylj9_zu4Xv6NAauqZ` by 06:58**; #148 accepted. What it leaves is Round 90 §2 d and j (rows BU, CA) |
| BR | ~~**Round 89 §0 W1–W14 — your Round 88 §3 a as built (§330–§332, LIVE).** ❓ W13 the window moves up the screen at Edit — keep its top edge, or stay centred (`Sheet.tsx:389` at `e1c700e`, `lg:items-center`; a prep card 37.2 up at 1600 × 1068, 185.1 at 1200 × 1468, a cocktail's 0; if it moves, please draw it, extends `r88b`); W14 one Back that seems to do nothing after leaving by the side menu while choosing lines — leave it, or stop the link (every page's links would change; if it stops, please draw the sequence, extends `r74g`) — and with it W8: leaving that way, the group's name and category he typed go, with nothing asked; W12 the app's confirm got your #10 — confirm, or it comes out (your Round 88 `README.md:44`); W10 a folded step still a keyboard Tab stop; W11 a press begun on the dim and let go inside closes a Sheet and the app's confirm, not a gate. Told: W1–W3, our Round 88 premises corrected (the tax sheet 672 on his iPad; 383, not 381; your widths on the app's Spectral); W4–W9, ours~~ | **23 Oct** | ✅ **ANSWERED — your part 2 §4 and frame `r89x`.** **W13, W11, W10 BUILT and LIVE — §396, §399 (`4d8028e`, `0998c15`), live by 25 Oct, 01:56 UTC at the latest**; W12 confirmed; W14 left, and W8 stands. What it leaves is Round 90 §2 g (row CA) |
| BS | ~~**Round 89 §0 G1–G18 — the guest count as built (your Round 87 §3 d with §4 c #4's first half; §320–§324, LIVE).** ❓ G1 first: hours alone differing — no box as built, or the Bar times row alone (your Round 87 §4 c #4; if it asks, please draw that box, extends `r87o` 2). Told: G2, Sean decided the newer number wins, with our four readings of it, (a)–(d) — and two questions: keeping his own count when the lines already match it (one answer with G5's second and #71), and a note like your Round 88 §1 b's (`r88a` 1–2) for the guests (a new part; please draw, if yes — with G1 it decides what is built soonest). Please draw: G3 the path with no count in Event details (the box, the hint, line two); G4 the Bar times row on two lines (`Keep 9 PM–1 AM`, `Keep 7:30–11:30 PM`). ❓ G5 the estimate's boxes when the lines' count isn't Event details' (120 → 121 moves no line; if Update is offered for the count alone, its words, and its foot drawn if it changes, extends `r87h`); G6 two spellings of one count (`1200` / `1,200`); G7 a count with a decimal (if whole counts only, please draw the refusal, extends `r87o` 3). Told: G8–G18, among them G12, a copy starting with no count (money)~~ | **23 Oct** | ✅ **ANSWERED — your part 1 §0 G1, G2 (2), §0 a and §0 b (`r89b`, `r89c`, `r89g`, `r89h`), and part 2 §3 (`r89o`, `r89p` 1–2).** **G1, G2 (2) and §0 a BUILT and LIVE — §374–§375 (`411ba56`, `7f37481`), 23 Oct, 21:05 UTC (`swi-V5LMmgXou5P9l04DN`); §0 b §376–§377 (`2e59101`, `6da61cd`), by 23:12 (`aA8UfUXgvnY6ShJ2GMlBN`); G3–G7 §388, §390 (`0bc1f52`, `91a0344`), 24 Oct, 14:43.** §0 a reverses Sean's **Newer number wins**, and settles G2 (1). What it leaves is Round 90 §2 a (row BY) |
| BT | ~~**Round 89 §0 U1–U10 — your Round 88 §3 b #15 and #16 as built (§350–§351, on `main` with Round 89, not live when it was written).** ⛔ U1 first: one sentence for two or more drinks the app can't count — please give it, or draw it (extends `r88g` 1); the stand-in that goes up meanwhile — our call, not a design, live until you rule — runs each drink's sentence on in one gold block, in the order he ticked them, which your *"The order never matters"* forbids (6 lines at 390). ❓ U2 the foot — `1 has no product to change` for every floor and blank size, where your #15 and `r88g` 1 say `1 line needs a number from you` (our Round 88 #15 quoted a foot nothing shows; marked wrong there); U3 `Give it in oz or ml` for a product counted or weighed (a lime `wedge`); U4 a pour with no amount, `asks for 0 top`, in two sentences; U5 a swap's band on a floor reads `Needs a bottle size` (`swapsToApply.ts:826–827` at `eeddf7d`); U6 §81's older floors, the working then the refusal too?; U7 the floor with its line on — `stays at 1`, the sentence, `Needs at least 39 bottles` — accept or draw; U10 an older row the order still decides — the same in every order, or as built until §81's merge is ruled on. Told: U8 the app kept over `r88g` (the working's words and colour, 1.4, no 3px gaps, the name's colour); U9 ours~~ | **23 Oct** | ✅ **ANSWERED — your part 1 §0 U1 (`r89a`) and part 2 §5.** **U1 BUILT and LIVE — §378–§379 (`34b4c68`, `c687f6d`), 24 Oct, 00:20 UTC (`AsWo5ZFgJKz9Yxw6dmguh`), in place of our stand-in; U2–U7 and U10 §387, §390 (24 Oct, 14:43); U8, U9 accepted.** §350–§351 LIVE since 23 Oct, 05:33 UTC (`zk2dbbuULrkL-bZQ9gow_`). What it leaves is Round 90 §2 c (row BZ) |
| BU | 🔴 **Round 90 §2 d — the calculator's Proposed rows: a swap's money, and his number on a swap's split (§385–§386, §389–§390, §406–§407, LIVE).** ⛔ Money first: 268, `0 × $35.00` on the client's copy, three ways (your #96 against #145); 272, his row and the bottle's row don't add up (`2 → 3` beside `says 3`); then 267, 273, 269, 270; 119, his own old-bottle line billed for no drink; 136, #95 against #9; 130. Please draw 265 (his held row, extends `r87q`, `r87g`); accept or draw 121 (`4 → —`), 122, 123. ❓ 129 (`billed as Bacardi Superior`), 131, 134, 137–142 (the frames against the built parts), 144–147, 169 | **25 Oct** | 🔴 **OPEN** |
| BV | 🔴 **Round 90 §2 b — the pie at Update and on screen (§370–§384, LIVE).** ⛔ 30, every drink in a kind at 0, live on our provisional; 29, grow, to confirm; then money — 85, a converted pin against made room; 87, `Just added` with no Update; 83, made room after Undo; 18, an old 0% invoice; 80, a Duplicate's crowd style; 111, a hidden line; 112, on hand beside bought; 20, a service line as a drink. Please draw 86 (a served kind left at 0%, extends `r89d` 3–4) and 109 (phone width, extends `r87i` 2–5). ❓ 19, 21–24, 26, 27, 81, 88, 91, 93, 95, 96, 98, 99, 101, 105–107 | **25 Oct** | 🔴 **OPEN** |
| BW | 🔴 **Round 90 §2 e — the Builder's line and the press-and-hold panel (the pie's E, §391–§392, §394, LIVE).** ⛔ 182: packing mode keeps Procurement first (`HANDOFF.md:4643–4644`) — does #18 reach it? Please draw 202 (the switch moving two rows, extends `r89q`) and 199 (a swap row's parts, or say none, extends `r89k`); accept or draw 186 (a swapped bottle's switch). ❓ 180 (#18's other actions), 187, 190, 191 (`calcParts` on templates, against `ROUND-87.md:360`), 198, 200, 201, 203, 228 | **25 Oct** | 🔴 **OPEN** |
| BX | 🔴 **Round 90 §2 f — Settings › The calculator and a product's pour (the pie's F, §393–§395, LIVE).** Please draw 207 (phone width, extends `r89r`, `r87k` 10). ❓ Money: 219, no bounds on a pour; 223, a can with no size ignores its pour. ❓ 205 (`Built in` and `· built in`), 206 (Remove, where #26 says Delete), 215 (his Cocktail-forward after he saves), 217 (our #27 premise corrected — the August form stored `tuned: true`), 222 (#29's help, built only where blank really counts), 226 | **25 Oct** | 🔴 **OPEN** |
| BY | 🔴 **Round 90 §2 a — Event details, and the calculator's hours and guests (§360–§361, §374–§377, §382, §388, §390, §397, LIVE).** Please draw 159 with 172 (the two-row box with no count, extends `r89o`, `r87o` 2). ❓ 4, 10–12 (the same-time strip), 35, 45–49, 51 (the Guests row's no-break space), 56–59, 62, 68, 69 (two blocks), 102–104 (Crowd style's place), 171, 173, 174, 176, 177, 232, 235, 236 | **25 Oct** | 🔴 **OPEN** |
| BZ | 🔴 **Round 90 §2 c — the calculator's words, floors and foot (§378–§379, §387, §390, LIVE).** ❓ 73 (U1 at 390 takes 5 lines; `r89a` 2 draws 4), 76, 78, 79 with 96 (`the The …`), 153 (the empty 73 bar), 170 (two refusals' order), 175 (the foot at phone width), 179 (`198 Punchs`) | **25 Oct** | 🔴 **OPEN** |
| CA | 🔴 **Round 90 §2 g–k — windows, the lists, the estimate, templates and the paper (§396–§405, LIVE).** Please draw 256 (the Separate table's head, extends `r88f` 1); accept or draw 244 (the sent line at 320–430, extends `r89v`). ❓ 229 (W13 at the cap), 240 (#41's box), 241 (#67 at 320), 243, 248 (the pictures: a trade for you and Sean), 251, 254, 255, 257 (11 of 71 still small), 260–264 | **25 Oct** | 🔴 **OPEN** |
| CB | 🔴 **Round 90 — every told (129), the eleven off the list, and §3's departures from your words.** Told: every item marked so in §2. None was in Round 89, so your part 2's acceptance (`ROUND-89-PART-2.md:11–13`) doesn't reach them — object to any. Off the list: 2, 9, 15, 17, 25, 50, 53, 75, 114, 178, 194 — say if one isn't settled. Departures (§3): 222, 241, 205, 206, 129, 251, 240, 229 — say which way | **25 Oct** | 🔴 **OPEN** |

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
| **Your Round 88 §3 a built and live, and your trail widths on the app's own Spectral (§330–§332)** — Menu 57.78, Change stage 108.45, Ready to send 111.91, Group lines 97.41, Tax rate 108.22, New group line 162.69 (your lab's 57.8 … 162.7); the tax sheet 672 at 1024 and up, its four steps whole; a card's window moving up the screen at Edit, 37.2 and 185.1 on a prep card, 0 on a cocktail's | **Round 89 §0 W1–W14** | `limbo-app` `e1c700e` | ⚠️ **The window's move is your W13 now:** since §396 a card's editor keeps the card's top at 1024 and up — a prep at 1200 × 1468 rises 82.15, where it rose 185.1 (Round 90 §0 c). The widths stand |
| **Sean's answers, 20–22 Oct** — *"Keep building…"*; free stays free; 3 free, 2 charged; *"…Yes."* for swaps applied before the step; **Ship it, ask Design**; *"Keep it."*; **Use the calculator (Recommended)**; **Newer number wins (Recommended)** on the guest count — every question and button's words ours | **Round 89, opening; §0 G2** | `limbo-app` `eeddf7d` | ⚠️ **Newer number wins was reversed** by his 23 Oct answer — your part 1 §0 a, built §374–§375 (Round 90 §1 a). The rest stand |
| **The phone paper's columns, measured (§341):** five and six figure columns fitted unshrunk without a Separate row (249.81 in 249.8, 15pt); eight ran 22pt into the sheet's own margin, unshrunk; the split adds a sheet to the Paloma (5–6) and Margarita (8); with the French 75 in a printout every recipe prints at 13.61pt (90.7%) at five columns, about two-thirds at eight | **Round 89 §2 #37–#39** | `limbo-app` `3d27f4e` | ⚠️ **Superseded** — your #37–#39 built (§404–§405); Round 90 §2 k has the paper now |
| **Your Round 88 §3 b #15 and #16 built, measured (§350–§351)** — the floor `at least 39 bottles` in gold, its sentence under the working, 2 lines at 1200 and 1600, 3 at 390; with the line on at 1, `stays at 1`, the sentence, `Needs at least 39 bottles`; two drinks it can't count, 6 lines at 390; the note inside the rail (360) and the drawer; Update byte for byte on 4,000 and then 23,000 seeded invoices | **Round 89 §0 U1–U10** | `limbo-app` `d7430b9` | ⚠️ **The two drinks' 6 lines were our stand-in's** — your U1 since §378 takes 5 at 390 (Round 90 item 73), and U7's order since §387. The rest stand |
| **Your Round 89, both parts, built and live, step by step** — §360–§407, each step gone over by three reviewers before it went up; fifteen sends, from Round 89's own on, read back by curl (Round 90's header lists each build id), the last `UcNXylj9_zu4Xv6NAauqZ`, read again on 25 Oct at 07:53:48 UTC | **Round 90 §0** | `limbo-app` `ad8c680` | ✅ Yes |
| **What the reviews found by doing, with its money** — the blockers, each fixed before its send: your #9 not built ($32.99 → $428.87 given away); swap marks only ever added ($384.95 and red, where one Update gives $209.95); a floor's figure offered by `Use the calculator’s number` (+$719.64); a Save on a device that hadn't loaded his settings (−$106.10); 45 typed then `ml` stored as 45 oz (+$5,608.13); his number on a swap's split written down a few Updates later (−$70.00) | **Round 90 §0 b–c** | `limbo-app` `ad8c680` | ✅ Yes |
| **The money sweeps, each against the build live before it** — §384 (#9): 20,544 runs, every differing row a comped product's; §385: 6,000 swap sequences, 5,043 the same / 842 lower / 115 higher; §386: 3,000, the 2,659 with a swap 719 / 1,940 / 0, the 341 without all the same; §406–§407 (#147): 6,000, 5,249 / 597 / 154 | **Round 90 §0 b–c, §2 d** | `limbo-app` `d2b10f0` | ✅ Yes |
| **Sean's 23 Oct answers, word for word** — the hours and guests (*"the events details hours are a starting point…"*, five buttons, and *"these should let you know the state…"*) and two blocks of bar time; his words to build on, 20–24 Oct | **Round 90 §1** | `limbo-app` `ad8c680` | ✅ Yes |
| **The phone paper after #37–#39, printed and read back** — his French 75 at five columns, 1 sheet at 13.61pt → 2 sheets at 15pt; 11 of 71 phone printouts still at 93.77%–98.86% (they were at 66.67%), every one a four-column Separate part; 14 of 71 fixtures differ between a screen and 4 × 8 | **Round 90 §2 k** | `limbo-app` `c744813` | ✅ Yes |

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

## 🔴 ROUND 90 — your answer to Round 89 is BUILT and LIVE, both parts. Part 1 (23 Oct) went up in four sends: Sean's 23 Oct answers (a number he types holds; two blocks of bar time), U1's one sentence, and the pie's B, C and D with your #9 (§374–§384). Part 2 (24 Oct) went up in eight: the swap's money, the calculator's words, the guest count with no count, the pie's E and F, the small rulings, the estimate and templates, the paper, and #147 (§385–§407). Before part 1 came, your Round 88 §1 b and §1 d (§360–§361) and the pie's arithmetic (§370–§372) went up too. ⛔ Money first: his number on a swap's split can print `0 × $35.00` on the client's copy (268, your #96 against #145), his row and the bottle's row don't add up (272), and two of the pie's readings are live on our provisional (29, 30). ❓ Please draw: the Separate table's head (256), his held row on a swap's split (265), the switch moving two rows (202), the pie and Settings › The calculator at phone width (109, 207), a served kind left at 0% (86), the two-row box with no count (159), and a swap row's parts, or say none (199). ⛔ And one that isn't money stands on a reading: packing mode's order (182). In all, 275 items by surface: every (ours), FOR DESIGN and what the reviews left


**implementation → Design, 25 Oct 2026. Branch `main`, app at `ad8c680`** (`ad8c6802854c75cea5c1ebbf3e0cbc1331e291fa`).
This is the one records commit. It is on `main`, and `origin/main` is level with it (`git ls-remote origin main` read
`ad8c6802854c75cea5c1ebbf3e0cbc1331e291fa refs/heads/main` on 25 Oct, about 07:54 UTC). Its code is `d2b10f0`'s (§407 ·
review). `git diff --stat d2b10f0 ad8c680 -- src scripts package.json` is empty, and `git show --stat ad8c680` lists
`CLAUDE.md`, `IPAD-CHECKS.md`, `PROGRESS.md`, `README.md`, `WISHLIST.md` and `plans/README.md` only. Every piece of code
since Round 89 is on `main`, and every piece is live (below). Nothing is held, on this Mac or on a branch.

**Commit:** `ad8c680` (*"Records — the rest of Design's answer to Round 89, part 2, built and LIVE in five sends, read
by curl: …"*) sits on `d2b10f0`. It went up with `SHIP_NO_DEV=1 npm run ship "Records — §393–§407 written up, all live;
Round 90's list 205–275; Session 31; 114 checks; the Netlify line corrected"`, which exited 0. Its output: *"limbo-app —
nothing to commit, 1 commit(s) unpushed"*, `d2b10f0..ad8c680  main -> main`, *"✓ Shipped — 1 repo(s) pushed."*, and
`limbo-design` skipped. Its build had 13,360 lines with ✓, none with ✗ or ✘, and *"all 114 checks are wired into the
build"*. The log is `rec407/ship.log` in implementation's scratch folder. `origin/main`'s reflog has the push at
07:48:13 UTC (03:48:13 EDT). Since Round 89 (`d7430b9`), thirty-nine § commits and their records have gone up from two
places: §360–§361, §370–§372 and §374–§407. §360–§372 went up from the cloud session on 23 Oct, and §374–§407 from the
Mac, 23–25 Oct. Every step was built by an agent and gone over by three reviewers (design, data and render). Each
finding was re-checked on the commit under review before anything changed. Then each step was fixed in a review commit,
gated with `SHIP_VERIFY=1 npm run build` (exit 0, no ✗), sent, and read back live by curl.

**Every `file:line` below is at `ad8c680`** unless it names another commit. A file is named bare, as you name them
(`calcSettings.ts` is `src/lib/calcSettings.ts`). A frame line is a line of the frame's HTML source in `limbo-app`'s
`docs/design/` (private). `ROUND-89.md:NNN` is your part 1 and `ROUND-89-PART-2.md:NNN` is your part 2, both in
`docs/design/`. A bare `:NNN` is part 2's, except in §2 b (the pie), where it is part 1's. **`#n` is Round 89's item
n**, as both parts of your answer use it. **A bare number, 1 to 275, is this round's own item** (§2). Those numbers are
the ones the commits and the code already carry (`Round 90's 114`, `§371 FOR DESIGN 3`), so they run in the order the
work was done, not the order of this round. `(ours)` is a choice no ruling or frame makes, built as the nearest thing
already ruled. Your part 2 accepted every (ours) in Round 89's items 2–11 as built (`ROUND-89-PART-2.md:11–13`). None of
this round's 275 was in Round 89, so none of them is accepted yet.

**What is LIVE, read back by curl (no browser):**
- **`d2b10f0`'s build, `UcNXylj9_zu4Xv6NAauqZ`: everything through §407.** Read again for this round on 25 Oct at
  07:53:48 UTC, over `/login` and `/style/sheetcheck` (both 200, the same id). Their 26 scripts were fetched by
  07:54:05.
- **How we know it is §406–§407's build:** two of those scripts, `0jx57wo1b26q9.js` and `0tw-32ykz0tea.js`, carry
  `heldSplit`, and `git log -S heldSplit --reverse -- src` finds it first in `8f4cea4` (§406). It is the same id that
  the poll after `d2b10f0`'s send found at 06:58:26 UTC (`dXGQPOLRcyuGIQbeI2OXp` until 06:57:26). §406 and §407 went up
  in one send, and this is the build that came up after it. The records read it at 07:04:09–07:04:37 UTC over twenty-one
  pages and their 65 files, and found each step from §393 to §406 in it by a name that step added (`limbo-app`'s
  `PROGRESS.md`, *Right Now — 25 Oct*, *Status*). §407 adds no word of its own.
- **`ad8c680` built nothing.** It changes no file that `netlify.toml`'s `ignore` watches (`git diff --quiet d2b10f0
  ad8c680 -- src public package.json package-lock.json next.config.ts postcss.config.mjs tsconfig.json netlify.toml`
  exits 0). That is read from the rule, not seen. `/style/sheetcheck`'s `age` header read 3366 at 07:53:48, so this copy
  has been served since about 06:57:42 (inferred).
- **GitHub's `main` is `ad8c680`** (`git ls-remote`, above), pushed at 07:48:13 UTC. Netlify's own deploy list was not
  read.
- **Each send since Round 89** (UTC). Each was read by curl; `limbo-app`'s `PROGRESS.md` names the poll or the copy
  that read each build id:
  - 23 Oct: §350–§351 went up with Round 89 (`d7430b9`, 05:24:51), `zk2dbbuULrkL-bZQ9gow_` by 05:33:38.
  - 23 Oct: §360–§361 (`31d750d`, 07:59:33), `TVMNNM8axMK-3bZkLSttU` by 08:08:25.
  - 23 Oct: §370–§372 (`564fe1c`), `cWahASRlM60MLocJlcK_L` by 14:03:00.
  - 23 Oct: §374–§375 (20:57:44), `swi-V5LMmgXou5P9l04DN` by 21:05:06.
  - 23 Oct: §376–§377 (23:02:40), `aA8UfUXgvnY6ShJ2GMlBN` by 23:12:29.
  - 24 Oct: §378–§379 (00:10:52), `AsWo5ZFgJKz9Yxw6dmguh` by 00:20:36.
  - 24 Oct: §380–§384 (06:36:13), `26xGYKNcts8bHCqxvQGWe` by 06:46:33.
  - 24 Oct: §385–§386 (11:35:03), `O8gIGqiyERNVgg9ZU3PIV` by 11:45:51.
  - 24 Oct: §387–§390 (14:32:18), `KZAa3EQLH1tATbwm0ou8u` by 14:43:37.
  - 24 Oct: §391–§392 (17:35:04), `nxbKvKCraeHvOC8_lT5yb` read at 17:49:14.
  - 24 Oct: §393–§395 (21:22:04), `4OIbDLuRb434KDHCVACnC` by 21:34:27.
  - 24 Oct: §396–§399 (23:31:14), `IbcxYfClSFngAjjE4KBn_` by 01:56:02 on 25 Oct at the latest. Its minute was not
    polled.
  - 25 Oct: §400–§403 (01:55:26), `zxzxODcFZMQ2Hpo8Me4MI` by 02:07:09.
  - 25 Oct: §404–§405 (04:12:06), `dXGQPOLRcyuGIQbeI2OXp` by 06:41:25 at the latest. Its minute was not polled.
  - 25 Oct: §406–§407 (06:45:46), `UcNXylj9_zu4Xv6NAauqZ` by 06:58:26.
  Times in this round are UTC. The commits carry the Mac's EDT (`-0400`), so §393's 15:40:30 is 19:40:30 UTC.

**How it was measured:** this round measured nothing new but the live read above. Every figure in it comes from the
commit named beside it, and each of those says how it was measured:
- Screens were measured in headless Chrome or Chromium only, each run with its own throwaway profile, stopped after.
- They ran on the verify build or on `next dev` at `127.0.0.1`, with every other host refused. Temporary `/style` pages
  mounted the real screens over made-up data, or `file://` pages drew the real parts with the build's own stylesheet.
  Each temporary page was deleted before the gate.
- The paper was printed by Chrome's own `printToPDF` and read back from the PDF.
- Node ran the real code against stand-ins (a fake table, React as plain calls), never the database.
- Money was compared by sweeps against each build that was live before it, run on its own modules. Every price in this
  round is a made-up invoice's, a check's fixture's or a frame's. None was read from his account: implementation has no
  database access.

**Not covered:** Safari, his iPad, his account and real invoices, and a real printer. Nothing opened on Sean's screen.

**114 checks at `ad8c680`.** That is 114 on disk, 114 in the build line and 114 in the tree (`ls scripts/check-*.mjs`,
`git ls-tree`, the build line, compared by name). `check-checks` says *"all 114 checks are wired into the build"*
(`ad8c680`'s ship log). Since Round 89's 105, nine checks were added:
- `check-pie` (§370)
- `check-typed-holds` (§374)
- `check-two-blocks` (§376)
- `check-pie-screens` (§381)
- `check-swap-money` (§385)
- `check-calc-words` (§387)
- `check-guest-words` (§388)
- `check-hand-now` (§389)
- `check-hold-his` (§406)

**This file with this round:** with Rounds 86, 85, 84 and 83 still here, it would have been about 595,276 bytes — this
file plus the 145,293 bytes moved. That is over the 480 KB this file keeps under (your limit is 500 KB). So Rounds 86,
85, 84 and 83, the oldest rounds here, moved to the top of `REQUESTS-ARCHIVE.md`'s rounds, above Round 82, whole and
unedited. `cmp` finds no difference between the moved text and `git show f714fde:REQUESTS.md`'s lines 2475–4244, and a
`diff` of the rest of the archive against `f714fde` finds none either, each line 1770 lower. Round 86 went with the
other three: had it stayed, this file would be about 496,341 bytes (this file plus Round 86's 46,358), over the 480 KB.
This file is now 449,983 bytes (`wc -c`), under 480 KB.

**So an archive line cited from Round 89 to `f714fde` is that number plus 1770.** One cited from Round 88 to `05cbb50`
is plus 3596, one from 20 Oct to `4c60bce` plus 4160, and one from before 20 Oct plus 4452. Round 86's
`REQUESTS-ARCHIVE.md:2151`, line 4833 at Round 89, is line 6603 now. The header and the archive's own header say so. The
archive is now 1,165,886 bytes; if it has grown too large for you to search, say so and it splits again.

**What Sean sent, 23–25 Oct, his own words** (in full in §1). **Bold** is a button he tapped, and its words are ours. On
23 Oct, on the Mac, he answered the hours and the guests, and asked for two blocks of bar time. You ruled both in part 1
§0 a and §0 b, before anything was built. To build on, he said *"Keep going."* (23 Oct) and *"Handoff"* (24 Oct, relayed
by the lead), standing on his 20 Oct *"…build it all unless you need me for something."* with **Send each step as it
passes**. Nothing else from him since Round 89 is a design decision.

### 0 · Received, built and live

**a · Before part 1 came — three steps Round 89 said were next**

- **Your Round 88 §3 b #15 and #16 (§350–§351) are LIVE.** They went up with Round 89 at 05:24:51 UTC on 23 Oct. The
  live site had build `zk2dbbuULrkL-bZQ9gow_` by 05:33:38. Its `/style/workingcheck` holds `data-floor-sentence`, a name
  only §350 added (`git log -S` on `src`: `995c154` alone). The stand-in for U1 was live from then until §378.
- **Your Round 88 §1 b and §1 d are BUILT and LIVE (§360–§361).**
  - §360 is `abf7c2b`: the note under Bar closes turns round (`r88a` 1–2), and the same time twice gets `Use 24 hours`
    (`r88a` 3–5).
  - §361 · review is `9f1dba2`, with one blocking fault, found by two reviewers. With his 6 standing, the strip said
    `The calculator uses 24 hours, from 6 PM to 6 PM.` · `Use 4`. Now that strip shows only while the calculator is on
    24.
  - They went up at 07:59:33 UTC. `TVMNNM8axMK-3bZkLSttU` was live by 08:08:25.
  - (ours) The bypass is stored as the time it was chosen for (`barAllDay: "18:00"`).
  - **Money:** nothing billed moves but through Update. Every invoice saved before §360 reads the same hours (88,199
    pairs of bar times against `main`'s `barHours`).
  - Your part 1 §0 a then turned the strip round (§374, below). Round 88's checks for these are his 27.46 (marked skip
    since §374) and 27.47.
  - What §360–§361 left for you is items 1–14 (§2 a).
- **The pie's batch A, the arithmetic (§370–§372), is LIVE.** Nothing is on screen.
  - §370 is `9fcc2bd`: the engine, `drinkMix.ts`, which nothing imported yet. Your Round 87 worked event reproduces end
    to end: 648 drinks, boxes 45 · 15 · 7 · 31 · 2, Tito's `1 → 8`, `Update 5 lines`.
  - §371 · review is `c787f7c`, with 20 findings. The blocking one, found by all three reviews: made room follows `r87l`
    b as worded, whatever the pins add up to (plan 015 had narrowed it to 100). One fix is money for Batch C: a bottle a
    ticked cocktail uses is an ingredient whether its line is bought or on hand.
  - §372 · review, second round, is `008d3c8`, with one finding. Two readings had been labelled as yours, and are ours
    (29, 30).
  - They went up with `564fe1c`. `cWahASRlM60MLocJlcK_L` was live by 14:03:00 UTC on 23 Oct.
  - **Money:** none moved then. 45,720 runs against `d7430b9`'s own modules, with no counts passed, gave 0 differences.
  - ⛔ **One part was held, §370's STOP: the foot's `1 on hand · not ordered`.** It holds Round 82 #7's withdrawn label,
    which `check-marks` G keeps out of shipping source. Your part 1 #2 (b) settled it with a comma, and §381 built it.
    `check-marks` G now admits exactly that clause (item 15).
  - What §370–§372 left for you is items 15–30 (§2 b).

**b · Your answer to Round 89, part 1 — received 23 Oct, built 23–24 Oct**

**How it came.** It reached the Mac's `design-imports/` as a zip named **`CLAUDE.md`**, a zip with the wrong name. It
was renamed `Round 89 answer - Design.zip` (44,472 bytes, saved 17:53:38 UTC by `stat`), and unpacked at 17:57:47 UTC to
`_extracted/ROUND-90/design_handoff_round_89/`. Sean, on the Mac: *"You’re not updated. Keep going. Also, Round 89 is
in."* We read it whole. Every panel of `r89a`–`r89h` was opened, and each frame was drawn headless. It is filed in
`limbo-app`'s `docs/design/` as `ROUND-89.md` and its frame, compared byte for byte with the bundle. You read Round 89
at `f714fde` against `d7430b9` (`ROUND-89.md:3–4`): right, that was the one we named.

**Each of your part 1 rulings, and where it stands:**

| Your ruling | State | How known |
|---|---|---|
| §0 U1 (`r89a`) | **BUILT and LIVE** — §378 `34b4c68`, §379 · review `c687f6d`; sent 24 Oct 00:10:52, `AsWo5ZFgJKz9Yxw6dmguh` by 00:20:36. Your sentence replaced §350's stand-in. Its tail follows U3 since §387 | chunk `3xg6xo9dnkjcm.js` holds the sentence's template and §379's `${n.via?"prep":"drink"} ${e.drink}` key (`git log -S`: `c687f6d` alone) |
| §0 G1 (`r89b`) | **BUILT and LIVE** — §374 `411ba56`, §375 · review `7f37481`; sent 23 Oct 20:57:44, `swi-V5LMmgXou5P9l04DN` by 21:05:06. The box is `Also move the bar times?` with the Bar times row alone | chunk `3hdqbxtngn3wv.js` holds `title:"Also move the bar times?"` and `guestsTyped` |
| §0 G2 (2) and §0 a (`r89c`, `r89g`) | **BUILT and LIVE with G1** (§374–§375). A figure he typed holds when Event details changes. While the two differ, Event details, the calculator and the rail say so. `guestsTyped` is new, and §323's `guestsFor` rule and G2's readings (a)–(d) go, as you ruled (`ROUND-89.md:59–60`) | `check-typed-holds`, 115 assertions at §374 |
| §0 b (`r89h`) | **BUILT and LIVE** — §376 `2e59101`, §377 · review `6da61cd`; sent 23 Oct 23:02:40, `aA8UfUXgvnY6ShJ2GMlBN` by 23:12:29. `form.open2` / `form.close2` are new | `check-two-blocks` |
| §1 a #1–#8, #10–#15 (`r89d`, `r89f`) | **BUILT and LIVE** — §380 `e5ffab0` (Batch B, the stored shapes), §381 `5d9f9b0` (Batch C, the Drink calculator), §383 · review `ee85523`, §384 · review, second round `a781966`; sent 24 Oct 06:36:13, `26xGYKNcts8bHCqxvQGWe` by 06:46:33 | `/style/sheetcheck`'s chunk `40b8mrl8__-7_.js` holds `Follow the crowd style`, `Drink calculator`, `Put pins back` (§384's poll); `check-pie`, `check-pie-screens` |
| §1 a #9 | **BUILT in §384, before the send**, because §383's data review held B–D for it (below) | `check-pie` C9, 13 assertions |
| §1 a #16 | **Not built.** It applies only if Sean keeps his own typed counts (plan 015's For Sean #2), and he hasn't said (§1) | — |
| §1 b #17 (`r89e`) | **BUILT and LIVE** — §382 `ad5c38a`, with B and C | `Fills the drink mix in the calculator.` in the same chunk |
| #2's floor clause, after U2 | **BUILT in §387** (part 2) | — |
| #10 (c)'s `(typical Limbo)` | **Gone since §391**, by your part 2 #27 | — |
| *For implementation* 3, Sean hears #9, #11, #13 and #14 | **Not in the record.** Whether the send notes told him is not written down | `PROGRESS.md`, *Waiting on Sean* |
| *For implementation* 4, four iPad checks | **In his sessions, none ticked yet:** 28.1 (a typed 6 holds, with `Use 5`), 28.6 (two blocks, 8 hours), 29.1 (`Follow the crowd style`) and 29.2 (Crowd style under the bar times) | `IPAD-CHECKS.md` at `ad8c680` |

**Step by step, and what each review found by doing:**

- **§374, typed holds** (`411ba56`). This is your §0 a, G1 and G2 (2).
  - The rule is in the writes, not the reading (ours, item 31). So an invoice saved by the live build opens as it left
    it, and the live build reads this build's writes as the same figure.
  - The live build, run through its own modules, gave 0 differences: 24,192 readings, 61,488 writes, and 270 fixtures ×
    4 of the estimate.
  - Measured headless at 1200 × 1468, 1600 × 1068 and 390 × 844, light and dark: the guests' strip 442 × 64, `Use 200`
    85.86 × 44, G1's box 440 × 248.23.
  - 97 faults were injected, each alone, and every one went red (one was dropped as equivalent).
- **§375 · review** (`7f37481`), 18 findings, none rejected. Two faults, found by doing:
  - The Guests box emptied, then the sheet closed with Escape, Back or ✕, let nothing go. React runs no blur for an
    input it removes. This was measured with the app's own react 19.2.4.
  - Any calculator write copied the live typed hours into every Undo copy, so Undo of a held Bar closes let his 6 go
    with nothing on screen.
  - Its leftovers for you are items 31–53.
- **§376, two blocks** (`2e59101`). One block counts exactly as before: 52,224 events and 77,976 bar-time records were
  compared against `7f37481`. Two blocks move lines only through Update.
- **§377 · review** (`6da61cd`), 25 findings. Found:
  - A second time added to a blank first one counted for nothing.
  - On his `Use 24 hours` bar, it dropped the 24 to the guessed 4 in one tap.
  - Overlapping blocks rushed once, where you rule each block's first hour.
  - A figure he typed after a bar-time change stopped counting when that change was undone. This came from the live
    build.
  - Its leftovers are items 54–72.
- **§378, U1** (`34b4c68`). Measured against `r89a`: 3 lines at 560 as you measured, but 5 at 390 where `r89a` 2 draws
  4 (item 73). Money: `calculationWrite` is byte for byte on 8,000 of 8,000 runs.
- **§379 · review** (`c687f6d`), 21 findings. Found:
  - A cocktail and a prep that share a name counted as one name, and ran two Round 88 sentences on in tick order.
  - Figures now sort by the number, so `2 top` comes before `10 top`.
  - Its leftovers are items 73–79.
- **§380–§382, the pie's B, C and D.**
  - B stores one kept copy of a crowd style. Your #1 rules no copy per style, so plan 015's `mix.styles` was not built.
  - C puts the Drink calculator on screen, with five glyphs lifted path for path from Round 87's key; the set is 56.
  - D puts Crowd style under the bar times: 360 × 48, exactly Bar opens to Bar closes.
  - Money, on its made-up event (100 guests, 5 hours, three cocktails): beer, wine and spirits on their own are counted
    (+$321.94). A new cocktails-only invoice counts every drink as a cocktail (+$741.74, #13). An old invoice's
    cocktails are unchanged (#10).
- **§383 · review** (`ee85523`), 35 findings, one rejected (item 81). **The blocker, found by doing (data B1):** your #9
  was not built, so a gift case of beer comped alone became 13 free cases ($32.99 → $428.87 given away). The review held
  the send until #9 was built.
- **§384 · review, second round** (`a781966`), 24 findings, with your **#9 built**.
  - A sweep of 20,544 runs against `ee85523`: every one of the 25,368 rows that differed was a comped product's, and
    each followed the rule.
  - It also corrected two of §381's and §383's own claims (item 85, and the cocktail-forward figures).
  - Its leftovers, with §380–§383's, are items 80–114.

**c · Your answer to Round 89, part 2 — received 24 Oct, built 24–25 Oct**

**How it came.** Your whole bundle, `Limbo Invoice Builder Design.zip`, reached the Mac's `design-imports/` (90,134,295
bytes, saved 08:00:27 UTC). It was unpacked to `_extracted/ROUND-91/`. Part 2 is in `design_handoff_round_89_part_2/`:
`ROUND-89-PART-2.md`, `README.md` (the exact strings), the frame and `support.js`. Each frame, `r89i`–`r89x`, was drawn
headless before the first build. You read Round 89 at `f714fde` against `2f0ec17`, with part 1 built (`:3–5`). It is
filed in `docs/design/` beside part 1. Sean, relayed by the lead: *"Handoff"*.

**Each of your part 2 rulings, and where it stands** (your section, then what was built):

| Your ruling | State | How known |
|---|---|---|
| §2 #80–#84 | **As built, now confirmed** (§385 asserts them; #83 is §281's `compSwapMarksOf`) | `check-swap-money` |
| §2 #85 (`r89i`), #86 (`r89j`), #87 (`r89k`), #88 (`r89l`), #90 (`r89m`), #91, #92 (`r89n`), #93, #94, #96, #97, #98 | **BUILT and LIVE** — §385 `3ae5cc3`, §386 · review `5526d2e`; sent 24 Oct 11:35:03, `O8gIGqiyERNVgg9ZU3PIV` by 11:45:51 | the chunk holds `n.hisCount?f&&(0,t.jsx)(` |
| §2 #89 | **As part 1 #9** (§384) | — |
| §2 #95, #99, #100 | **As built** | — |
| §3 G2 (1) | **Settled by part 1 §0 a**, nothing to build | — |
| §3 G3 (`r89o`), G4 (`r89p` 1–2), G5, G6, G7 | **BUILT and LIVE** — §388 `0bc1f52`, §390 · review `91a0344`; sent 24 Oct 14:32:18, `KZAa3EQLH1tATbwm0ou8u` by 14:43:37 | `check-guest-words` |
| §4 W13 (`r89x`), W11, W10 | **BUILT and LIVE** — §396 `4d8028e`, §399 · review `0998c15`; sent 24 Oct 23:31:14, `IbcxYfClSFngAjjE4KBn_` by 01:56:02 on 25 Oct at the latest | `fromCard` and the fold's `setAttribute("tabindex","-1")` in `0z6u_71spi7lx.js` |
| §4 W12, W14, W8 | **As built** | — |
| §5 U2–U7, U10 | **BUILT and LIVE** — §387 `dd8b5d2`, §390; live with §388 (above) | `check-calc-words` |
| §6 c #18 + §10 #143, #19–#24 (`r89q`), #27 | **BUILT and LIVE** — §391 `6e00e3f`, §392 · review `977d8b6`; sent 24 Oct 17:35:04, `nxbKvKCraeHvOC8_lT5yb` read at 17:49:14 | `Also served on its own`, `Serve on its own` in `3_d9pv9cquqve.js` |
| §6 d #25–#29 (`r89r`) | **BUILT and LIVE** — §393 `81dad9d`, §395 · review `f98e9aa`; sent 24 Oct 21:22:04, `4OIbDLuRb434KDHCVACnC` by 21:34:27 | `Add a crowd style`, `Tuned from your own events`, `Pour per drink`, `No longer in Settings` |
| §6 e #30 | **BUILT** — the rule in §389 (`glassesWords`), the Pours page in §393 | — |
| §6 e #31 | **BUILT in §387** — the ⋮ row is `Drink calculator…` | — |
| §6 e #32–#36 | **As built.** #35's on-hand words were built in §394 `4b1b591`, with §393 | `onHandAbout` in `0jx57wo1b26q9.js` |
| §7 #37, #38, #39, #42 | **BUILT and LIVE** — §404 `8550d8a`, §405 · review `c744813`; sent 25 Oct 04:12:06, `dXGQPOLRcyuGIQbeI2OXp` by 06:41:25 at the latest | `data-fit`, `data-split-table`, `recipe sheet` in `3i425ki-153i5.js` |
| §7 #40, #41 (`r89s`) | **BUILT and LIVE** — §398 `4cae0dd`, §399 | — |
| §8 #47, #77, #100's three, #148, U7 | **Accepted as built**, nothing to build | — |
| §9 §3 #49, #52, #57 | **BUILT** — §387, §390 | — |
| §9 §3 #50, #51 | **As built**, now asserted (§389) | `check-hand-now` |
| §9 §4 #58 (`r89p` 3–4), #59, #61, #62 | **BUILT and LIVE** — §397 `e481858`, §399 | `choice-short` in `3ju8czoeqzguc.css` |
| §9 §4 #64; §5 #65, #68 | **As built** | — |
| §9 §5 #67 | **BUILT** — §398 | — |
| §9 §6 #71 + G5, #72, #74, #76 (`r89t`) | **BUILT** — §387, §390 | — |
| §9 §8 #107, #108, #113 (`r89u`), #116, #117 (`r89v`), #118 | **BUILT and LIVE** — §400 `efff14c`, §403 · review `bd93808`; sent 25 Oct 01:55:26, `zxzxODcFZMQ2Hpo8Me4MI` by 02:07:09 | `anotherCopyTail` in `1qoju-84p43dl.js` |
| §9 §8 #111 | **BUILT** — §401 `77c095d`. A new `user_state` row key, `limbo_pictures`, and `logo` on a sent copy | `pictures:"limbo_pictures"` in `2hw08gq8ph11s.js` |
| §9 §8 #109; §9 #123, #125, #127 | **As built** | — |
| §9 §9 #124, #126 (`r89w` 1–2), #128 (`r89w` 3–4) | **BUILT and LIVE** — §402 `a7efcbe`, §403 | `Took the menu off`, `Your drinks didn’t load` |
| §9 §10 #144 | **BUILT** — §389 `fc1637a`, §390 | — |
| §9 §10 #145 | **As built**, now asserted (§389). §407 rests on it | — |
| §9 §10 #147 | **BUILT and LIVE** — §406 `8f4cea4`, its own money step; §407 · review `d2b10f0`; sent 25 Oct 06:45:46, `UcNXylj9_zu4Xv6NAauqZ` by 06:58:26 | `heldSplit` (above); `check-hold-his`, 75 assertions |
| *For implementation* 6, Sean hears #95 and #88 | **Not in the record** | §1 |

**Step by step, and what each review found by doing:**

- **§385, the swap's money** (`3ae5cc3`). Your one new idea, *"a row can take a line off"* (`:38–40`), is used in four
  places.
  - A swap to a bottle already billed now WAITS, where it read applied at once before (#87).
  - Every swap row's `in all` is now the engine's (`swapInAll`).
  - It also caught a row reading `0 → 0 · comes off` over a line he set by hand.
  - **Money**, against the live build, with two Updates each. With no swap, 2,430 of 2,430 were the same. With a swap,
    of 6,000 sequences, 5,043 were the same, 842 lower ($19–$420, old bottles billed for no drink) and 115 higher
    ($19–$350, where the live build let a swap's comp take the whole count).
  - A stored shape: a swap mark may carry `more` (#90).
- **§386 · review** (`5526d2e`), 34 findings. **The blocker, found by doing (data B1):** marks were only ever added, so
  after some taps one Update left an old bottle billed for no drink, and the button red. Three taps gave $384.95 and
  red, where the live build gives $209.95 in one Update. Also found:
  - A swap's row could take off or write over a line he set by hand (data F2). §385's (ours) 5 is withdrawn (item 119).
  - `Use 0` beside free bottles wrote `0 × $35.00` (design F2).
  - **Money against the live build**, with an Update after every tap: of 3,000 sequences, the 2,659 with a swap were
    719 the same, 1,940 lower and 0 higher, and the 341 with none were all the same.
- **§387, the calculator's words** (`dd8b5d2`): U2–U7, U10, #49, #52, #57, #71, #72, #74, #76 and #31. Update's write is
  byte for byte on 20,000 seeded menus. The rows' words changed in 4,235 and the foot in 7,497.
- **§388, the guest count, part 2** (`0bc1f52`): G3–G7. A stored shape: `keptGuests` may hold his words.
- **§389, the calculator's number now** (`fc1637a`): #144. `Use` writes the figure it names: `r87q`'s rye at 40 guests
  goes 3 → 9 (+$179.94), where it wrote 3 → 7. #147 was held for its own step.
- **§390 · review** (`91a0344`), 28 findings. **The blocker, found by doing (data B1):** `Use the calculator’s number`
  named a floor's figure. On the Champagne he set to 3, `Use … 39` gave 3 → 39 (+$719.64), a figure the calculator
  itself refuses to write. Also found:
  - G5's follow decided before the Library had loaded.
  - Three lines of a choice made 74.75, where `r89p` 2 draws 62.25. Now a floor: 48 for one line, 56 for two, 62.25 for
    three.
- **§391, the pie's E** (`6e00e3f`): the switch (`ServedRow`) and the Builder's split (`calcParts`).
  - Money at the next Update, on §391's event: Tito's 22 → 27 (+$114.95) and Buffalo Trace 11 → 6 (−$149.95).
  - Stored shapes: `onItsOwn` is written for the first time, and `calcParts` is new.
- **§392 · review** (`977d8b6`), 30 findings. Found by doing:
  - With Spirits at 0% and a switched, swapped bottle, the Mule's vodka was billed twice: +$620.73 ($3,049.16). It is
    now $2,237.45, with the swap waiting as the guard's rows do (data F2).
  - The switch is the bottle's, not the line's (data F1). A comp beside a switched Tito's came off at an untick.
  - Packing mode had put two item actions above Procurement (design F2, item 182).
- **§393, the pie's F** (`81dad9d`) and **§394, the on-hand words** (`4b1b591`). Four stored shapes:
  - the `drinkSplits` row, written for the first time;
  - `pours`;
  - a product's `pourPerDrink` and `pourUnit`;
  - `calcParams.mix.style.name`.
- **§395 · review** (`f98e9aa`), 33 findings. Two money faults found by doing, both fixed before the send:
  - A Save, Add or Remove on a device that hadn't loaded his settings put the seeds back over his styles (−$106.10).
  - 45 typed in oz and then switched to ml was stored as 45 oz (Buffalo Trace 7 → 194, +$5,608.13).
  - Also: the August form's `tuned: true` was read as tuned (item 217).
- **§396–§398, the small rulings** (`4d8028e`, `e481858`, `4cae0dd`).
  - A prep at 1200 × 1468 now rises 82.15, your `r89x`'s 82, where it rose 185.1.
  - **And a bug of ours, found on the way:** opening Event details wrote an `Event notes` change with nothing typed.
    Tiptap's `setEditable` sends an update by default. That is fixed.
- **§399 · review** (`0998c15`), 20 findings. #41's sentence was under the whole list: 631 below the held row, and off
  the screen with his 14 glasses. Now it is inside the row, as `r89s` 2 draws it.
- **§400–§402, the estimate and templates** (`efff14c`, `77c095d`, `a7efcbe`). Nothing billed or printed with a price
  moves.
- **§403 · review** (`bd93808`), 25 findings. Found by doing:
  - #107's `Type` could never be taken back.
  - A second send that day with a changed venue wrote nothing (item 246).
  - An account with no prep recipes never brought a template's menu.
- **§404, the paper** (`8550d8a`). His French 75 at five columns: 1 sheet at 13.61pt → 2 sheets at 15pt.
- **§405 · review** (`c744813`), 25 findings. The fit was tested at the text's edge, not at the sheet's edge where
  Chrome starts to shrink. Measured: 276.0 wide printed at 100%, 276.5 at 99.97%. **And §404's "nothing shrinks any
  more" was false:** 11 of 71 phone printouts still print a little small (item 257).
- **§406, #147** (`8f4cea4`). His line is held on a row of its own. **Money** against `c744813`: of 6,000 sequences,
  5,251 the same, 597 lower and 152 higher, every one through a §280 row with a line of his.
- **§407 · review** (`d2b10f0`), 29 findings. **The blocker, found by doing (design B1):** with his line listed first,
  or on the line the calculator writes, one held Update made the next remainder his own figure. His 4 then read as
  agreeing, was made calculated, and was written down to 1 a few Updates later (−$70.00). 29 of 132 held lines lapsed in
  the sweep, and 0 of 130 do now. The calculator's own line takes the remainder (#145).
  - Against `c744813`: 5,249 the same, 597 lower, 154 higher.
  - Its leftovers, with §406's, are items 265–274.

**d · Found by the reviews, and not yours** (each is its own task, not in this round's asks)

- A second Update can still move money after a swap's mark is pruned from a §280 line in the same Update that splits by
  it (§407 data F2). That was 99 and 112 per 6,000 sequences on the build live before §406, and is 98 and 108 now.
- A stored cocktail whose ingredients hold a null crashes the recipe printout (§405, older than §404).
- Packing mode's selected `No status` radio can't be read in light mode (§392 render M6, from Round 15).
- A device still on an older build: no code can fix it. Sean is told to reload every device.

### 1 · Sean's decisions since Round 89

**a · 23 Oct, on the Mac — the answers you ruled from.** You have them in part 1 §0 a and §0 b (`ROUND-89.md:49–54`,
`:84–86`). They are here word for word from `limbo-app`'s `WISHLIST.md` (its 19 Oct entry, *23 Oct*), so this file keeps
them:
- *"the events details hours are a starting point that informs the calculators default hours settings. If I manually
  change/update hours in the calculator, that is when the prompt should pop up."*
- Then, by button: **When you tap Update, in the same box as the guest count** · **Stay at 6. Event details only sets
  the starting hours** · **Show a note under the times… with a Use 5 button** · **The calculator follows Event details
  until you type hours in it** · **Yes** (guests work the same way).
- And: *"these should let you know the state so your aware that the event details and calculator details differ."*
- Then: *"we need a feature that let's me place multiple timeframes on the event details hours (e.g. 8am-1pm (hit a plus
  button) AND 4pm - 7pm (equals 8 hours total, which the calculator should read by default.)"*, and by button **Two** at
  most, with the rush **At the start of each block**.

As you said, the first set reverses his 20 Oct **The new bar times, 5** and his 22 Oct **Newer number wins**
(`ROUND-89.md:59–60`). Both are built your way (§374–§377). Nothing of Round 89 §0 G2 (a)–(d) stands.

**b · To build on, in his words.**
- 20 Oct: *"Okay. I’d like you to work through and build it all unless you need me for something. If there’s anything
  you need me to answer now, now’s the time."*, and asked whether each step goes live as it passes, **Send each step as
  it passes**.
- 23 Oct, on the Mac: *"Keep going."* and *"You’re not updated. Keep going. Also, Round 89 is in."*
- 24 Oct, relayed by the lead: *"Handoff"*.

The rest he sent was about where and when the work happens, not what it is:
- 23 Oct, to the cloud session: *"Let's move back to the MacBook. Get us ready."*
- About 07:30 UTC: *"Watch the usage limit."* (the lead's record)
- About 12:09 UTC: *"Keeping going"* (the lead's record)

**c · His "better title" for the tuned crowd style's line — you answered it, twice.** Round 88 §1 c carried his words to
you: *"Come up with a better title that “from a real event and your rule”."* We read that as better *than*. Your Round
88 §1 c confirmed ours, `Tuned from your own events` (`ROUND-88.md:32–33`). Your part 2 keeps it: *"`Tuned from your own
events` is kept for what the events tune, which is later"* (#28, `ROUND-89-PART-2.md:205`). Part 2 also adds `Your own
figures` for a style he has set (#28 (a)–(b)), and `Starting guess` for a second account (#27, `:199–201`). All three
are built (§393). What is left of it is ours to ask:
- does his Cocktail-forward keep `Tuned from your own events` once he saves new figures for it (215)?
- the August form's own `tuned: true` (217).

**d · Still with Sean — not answered as far as the records show**
- **Your #11's question for him:** are his beers filed under **Beer & Seltzers**? (`ROUND-89.md:220–221`, *"Ask Sean, as
  you planned."*) Carried, not answered.
- **Plan 015's For Sean #2:** keep his own typed beer, wine and spirit counts, or let the calculator set them? Your #16
  rules the words if he keeps them (`ROUND-89.md:236–238`). Not built until he answers.
- **Your words for him** (part 1 #9, #13 and #14; part 2 #95 and #88). Whether the send notes told him is not written
  down.
- **Two things only his account can say.** Implementation has no database access. Does his account hold an August
  `drinkSplits` row? If it does, Cocktail-forward invoices with no kept copy move at their next Update (+$11.96 on the
  made-up event). And does the live site know the account is his (`LIMBO_OWNER_ID`)? If not, Cocktail-forward reads
  **Starting guess** there. His check 31.1 shows both.

### 2 · Everything the work since Round 89 leaves for you — 275 items, by surface

Every item below comes from a commit's own list: its (ours), its FOR DESIGN or OPEN, and what its reviews left. Each
appears once, with the number the commit and the code gave it, so the commits can be read beside this. Where two labels
name one thing, they share a number. The numbers run in the order the work was done (1–14 §360–§361, 15–30 §370–§372,
31–79 §374–§379, 80–114 §380–§384, 115–147 §385–§386, 148–179 §387–§390, 180–204 §391–§392, 205–274 §393–§407, 275 the
records). Below they are grouped by the screen they are on, so a group can skip numbers.

Each item is marked one of these ways:
- **told** — as built; object if you would. Every **told** is a choice no ruling makes. Where a frame draws it
  otherwise, the item names that frame. Your part 2's acceptance reached Round 89's items only.
- **❓** — a question.
- **please draw** — a new part, a new state of a part, or a new path across parts. Each one names the frame it extends.
- **⛔** — a build that stands on a reading you are asked to confirm.

**Off the list — answered by your part 1 or part 2, read here item by item against both:** 2 and 9 (by 41, your §0 a);
15 (your #2 (b), built §381); 17 (your #4: a keg or a pack recorded by volume is counted by its pour, and with none it
reads `Holds more than one drink. Set its pour in the Library to count it.` or `A keg needs a size and a pour in the
Library to be counted.`, `ROUND-89.md:149–153`, built §381); 25 (your #33, `× 1` then the product's own unit,
`:214–215`); 50 (your G4, `:103–104`, built §388: `Keep` on line one, the times whole on line two; part 1 G1 says G4's
row applies to that box too, `ROUND-89.md:43`); 53 (your #52, `:250`: *"A typed 0 isn't a typed figure for the note."*,
built §387 and, for the rail, §390); 75 (your U7, `:155–156`, built §387: the figure first, `Needs at least …`, then the
sentence); 114 (Batch F is live, so the Library has the pour box your #4's two sentences point at: §393, item 275); 178
(#59's 1px `--border` edge, built §397); 194 (Round 87 §2 #7's on-hand words, built §394 on your #35; its open half is
228). Each still has its line below, so its evidence stays with its number.

**Where an answer bears on an item but doesn't settle it, the item says so.**

**a · Event details, and the calculator's hours and guests**

*The bar-times strip and `Use 24 hours` — your Round 88 §1 b and §1 d (§360–§361).* These were asked of §360's order,
before your part 1 §0 a turned the strip round (§374). Nothing here was run again since.

1. told (ours) — the 24-hour choice is stored as the time it was chosen for (`barAllDay: "18:00"`), not `true`. So a
   same time set later on a device not yet reloaded can't come back as 24 hours. It protects only in part (14).
2. *Off the list* — superseded by 41. Its question was *"§1 b's note can follow it"*: after `Use 24 hours` with a typed
   figure that differs, the strip offered his figure in place of `r88a` 4's `Use 4`.
3. told (ours) — the same-time strip names the figure the calculator uses. A figure typed against no bar times reads
   `…uses 6 hours.` `r88a` 4's button follows it too (`Use 24` after 24 typed against none). Since §361 the strip is not
   gold then (10).
4. ❓ (ours) — a locked invoice shows the same-time strip faded in its disabled group, with its button refused. Or should
   it be hidden?
5. told (ours) — `Use 5` puts his figure back against the times it stood against before, so the times put back still
   make it stand.
6. told (ours) — 24 typed against 6–11 PM still gets no Bar times row in the box at Update, because the box doesn't
   offer the bypass. With the bypass in place it asks `Keep 6–6 PM` | `6–11 PM` | `1–6 PM`.
7. told (ours) — the Undo steps carry the buttons' words: `Keep 6`, `Use 5`, `Use 24 hours`, `Use 4`. Your part 1 later
   ruled the same for the strips (`ROUND-89.md:69`).
8. told (§360, a measurement) — at 390 the same-time words take 3 lines (4 at `6:30 PM`), and the button is 120 wide.
   The Hours row's new line two takes 2 lines, as the row beside it does.
9. *Off the list* — superseded by 41. Its question: his figure typed against the 24-hour choice itself, then `Use 24
   hours`, shows no strip. Should §1 b's second form show?
10. ❓ — with his own figure standing, the same-time strip is not gold (ours, §361). Its words, `so the calculator uses 6
    hours`, read as if 6 PM twice made the 6. Which words?
11. ❓ (§361) — 24 typed against no bar times, then 6 PM twice: `…uses 24 hours.` · `Use 24 hours`, then `…from 6 PM to 6
    PM.` · `Use 24`. That is two taps that move nothing. Should either strip show?
12. ❓ (§361; §360's OURS 6) — after `Keep 6` against 6–10 PM, Bar closes moved to 9 PM and back (by Undo or by hand)
    takes the second form away while the two figures still differ. Or should it go only when the times are back to the
    ones the 6 was first typed against? Your part 1 §0 a reversed which form comes first, and this was not re-run under
    it.
13. told (§361; §360's OURS 8) — there is a no-break space inside `6 PM` in the strip, so its strings differ from your
    README's by that one character.
14. told (§361; 1, corrected) — storing the time protects only in part. An older device that moves a time away and back
    to the same time brings the 24-hour choice back here. Reloading every device closes it.

*A number he typed holds — your part 1 §0 a, G1 and G2 (2) (§374–§375).*

31. told (§374 OURS 1) — the rule is in the writes, not the reading. An invoice saved by the live build opens as it left
    it, and the live build reads this build's writes as the same figure. But a change made in Event details on a device
    still on an older build lets his figure go there.
32. told (OURS 2) — a `Set to 150` written before §374 carries no mark, so it reads as an Update at Event details' own
    count: not his.
33. told (OURS 3) — the mark is the count itself (`guestsTyped` equal to `guests`), read only while the two agree. An
    older build carries it untouched through its own Update. ⚠️ Known, not fixed (§375, data M4): if that older build's
    Update lands on the mark's own count, this build calls Event details' count "the 150 guests you typed". Only a
    device not yet reloaded can write it, and the strip offers `Use N`.
34. told (OURS 4) — `Use 200` keeps `guests` (the count the lines were worked for, which the estimate scales from) and
    points `guestsFor` at it, dropping the Keep's `keptGuests`. `Keep 150` puts them back.
35. ❓ (OURS 5, with §375) — the calculator's Guests box lets go only when he leaves it empty: on a blur, or (§375) when
    the sheet closes with it empty (Escape, Back, ✕). It doesn't let go while he empties it on the way to another
    figure. There is no Undo step, and every history copy changes. Or should a clear store at once, as `r89c` 2 might
    read?
36. told (OURS 6, with G3) — a 0 in Event details is a figure to offer (`Use 0`), as the box at Update asks about 0.
    Your G3 keeps 0 *"as built"* (`ROUND-89-PART-2.md:96`).
37. told (OURS 7, with G3; render O5) — no strip, pen or rail line when Event details holds no count (blank or words).
    Your G3 confirms the strip's half (`:101–102`). Its other half, the calculator's line two reading `On the
    invitation` beside a count he typed, is answered by G3's line two (`:99–100`), built in §388 (158).
38. told (OURS 8) — two equal figures show no strip; `1 guest`, as `1 hour`.
39. told (OURS 9) — on a locked invoice the guests' strip is faded inside the disabled fieldset, and its tap writes
    nothing, as §360's hours strip does.
40. told (OURS 10) — after `Use 24 hours`, `r88a` 4's `The calculator uses 24 hours, from 6 PM to 6 PM.` · `Use 4` shows
    only while the 24 is the bypass's, not his own typed 24. This replaces §361's `hours === 24` guard.
41. told (OURS 11) — with the bypass on and his figure standing, the strip shows §1 b's first form: `The calculator uses
    the 6 hours you typed, not the 24 from the bar times.` · `Use 24`. This supersedes 2 (§360 OURS 2) and 9 (§361 OURS
    1), which read his old rule.
42. told (OURS 12) — after `Use 200`, a further change to the guest box in the same sheet: the second form names the new
    count while it differs from his.
43. told (OURS 13) — the rail's second line sits inside the value's span (the row's baseline, as built), `font-normal`.
44. told (OURS 14) — Undo leaves two different typed figures as the live one's. §375 made it the step's rule on the real
    path (52).
45. ❓ (§375, design O2 = render O2) — with his figure standing and the same time twice, `Use 24 hours` keeps his 6. So
    the strip turns to `…the 6 hours you typed, not the 24 from the bar times.` · `Use 24`, and the 24 takes a second
    tap. The button's words no longer hold. Should `Use 24 hours` let his figure go? (Marked at `tapStrip`.)
46. ❓ (design O3) — his figure can agree with Event details: after `Set to 150`, after `6–11 PM` in G1's box, or with
    typed hours equal to the bar times. Line two then reads `On the invitation` / `From the bar times, 6–11 PM`, with no
    pen, though his figure now holds through the next change. Keep the words, or show the pen? (Marked in `guestsLine`
    and `hoursLine`.)
47. ❓ (design O4) — the invoice header's `200 guests` says nothing while the calculator uses 150. Is the header one of
    *"every place that shows the figure"* (`ROUND-89.md:63`), or only the four you named?
48. ❓ (design M5) — the guests' strip comes and goes while he types in Event details' Guests box (`Use 1`, `Use 15`),
    and the page moves 64–78 px each time. Should it wait until he leaves the box?
49. ❓ (render O4) — at 390 Event type wraps to its own row, so the guests' strip sits two rows below Guests. Should it
    follow Guests directly at phone width?
50. *Off the list* — your G4 (render O6). At 390 G1's box broke `Keep 6–` / `10 PM`, as the two-row box did. Since §388,
    `Keep` stays on line one and the times go whole on line two.
51. ❓ (render M3) — at 390 line two's figure can sit alone on its second line (`…Event details says` / `200`). Your #57
    settled the Hours row: `say ` at `calcSettings.ts:767`. The Guests row keeps a plain space before its figure (``
    `You typed this · Event details says ${paper(details)}` ``, `guestsAtUpdate.ts:397`). Should it take #57's no-break
    space too?
52. told (§375, ours) — Undo puts typed hours back only where the step itself moved them and nothing has since (`other`,
    the side of the step being left; for Undo to, the newest step's). A calculator write that moves no hours carries the
    knobs alone into the Undo copies. Closing the sheet counts as leaving the Guests box.
53. *Off the list* — your #52 (data M5). A stored `hours: 0` from an older build's emptied box read as a typed 0 (`The
    calculator uses the 0 hours you typed…` · `Use 5`). Under the guard, line two still says `the bar times say 5` at a
    typed 0 (176).

*Two blocks of bar time — your part 1 §0 b (§376–§377).*

54. told (§376 ours 1; design O8) — with one block, `Add a second time` sits under the strip when one shows. §1 b's
    strip keeps its place right under the times. (With Crowd style, see 104.)
55. told (ours 2) — the ✕ is held beside `Closes again` when the row wraps, never alone on a line.
56. ❓ (ours 3; design O6) — `Set when the bar closes again to count it.` shows only with `Opens again` set and `Closes
    again` blank. With both blank, `Closes again` alone, or a time that can't be read, no words are ruled, so there is
    no strip. Words for those?
57. ❓ (ours 4; design O9) — the same-time and overlap strips are in the strip's `--text`, not gold. Gold is ruled for
    the missing time alone (`ROUND-89.md:94–95`). Right?
58. ❓ (ours 5; design O4 = render O2) — one strip at a time. Built order: the first block's same time twice, then the
    second block's missing close or same time twice, then §0 a's note, then the overlap. Which order?
59. ❓ (ours 6; design O7) — the first block the same time twice beside a second block: `r88a` 3's gold words, no `Use 24
    hours`, no total. And (§377: design O7, data M7, render F1's tail) the first time cleared or made the same AFTER a
    second is added still shows the disagreement, with the rail showing a lone second block. No words are ruled.
60. told (ours 7, with §377) — `Add a second time` is offered only while the first block holds two different times that
    read (`secondBlockOffered`). So there is no second time on a blank, half-set, unreadable or same-time first block,
    nor on a 24-hour bar. Your *"`Use 24 hours` (Round 88 §1 d) applies to one block only."* (`ROUND-89.md:99`).
61. told (ours 8) — a second block that adds nothing keeps the first block's key, so the key moves exactly when the
    figure's source does.
62. ❓ (ours 9, as §377 changed it) — two blocks that count rush twice, overlapping or not: *"The opening rush applies to
    each block's first hour"* (`ROUND-89.md:102`). §376 had an overlap rush once. Or are overlapping or touching blocks
    one stretch?
63. told (ours 10; design O10) — with hours he typed and two blocks, the rush still comes twice (never more rushed hours
    than hours).
64. told (ours 11; design O10, data O5) — `1 hour in all` and `counts 1 hour.`, as `1 hour` is built.
65. told (ours 12; design O5 = render O6) — the box at Update with two blocks:
    - only `Open at` offered: it starts there;
    - neither offered: no Bar times row (so no box from the hours alone, though they differ);
    - 24 typed: never asked;
    - a half-filled second block: one block's box.
66. told (ours 13) — adding the second block drops his bypass. That is moot since §377, which offers no `Add a second
    time` on a same-time first block. Removing the second block deletes both keys rather than blanking them.
67. told (ours 14) — the rail shows the second block as stored, by the first block's rule (`8 AM–1 PM, 4 PM`). Junk
    stored is no second block anywhere.
68. ❓ (§377, data M3) — the overlap reads the second block on the day before the first too: 8 AM–1 PM then 10 PM–9 AM
    counts 15, with the overlap strip, where in order it is 16. Which day is `Opens again` on? In order, two blocks can
    pass 24 hours, which nothing here is built or measured for.
69. ❓ (§377, design M11) — from 430 to 480 wide the first block's boxes sit side by side, but the second block wraps
    (`Opens again` alone, then `Closes again` and its ✕). It is one line from 490. At 390 each box is on its own line.
    `r89h` 2 draws it unwrapped.
70. told (§377, ours) — from the keyboard alone, `Add a second time` hands the keys to `Opens again`, and the ✕ hands
    them back. A tap or a click moves nothing, so no time box opens its picker on the iPad.
71. told (§377, ours) — Undo after typing: each Undo copy gets his figure stamped against that copy's own bar times,
    while it stands against the live ones (`typedHoursInCopy`). So a figure typed after a bar-time change keeps counting
    when the change is undone (data F2, inherited from the live build).
72. told (§377, ours) — in the three strings that name two blocks (the rail's Bar row, line two, the box's sub-line),
    each span holds together: a no-break space before its `AM`/`PM`, and a word joiner after its en dash. Your words are
    kept exactly.

*The guest count with no count in Event details, and the box at Update — your part 2 G3–G7 (§388, §390).*

158. told (§388 ours 1) — G3: line two names Event details' words whenever the box holds a count and Event details none,
     before the Update too. At 0 with nothing typed it reads `On the invitation`, as built.
159. ❓ **please draw** (§388 ours 2; extends `r89o` and `r87o` 2) — the two-row box with no count, which no frame draws.
     The Guests row's line reads `Event details has no count.` or `Event details says “80–100”.`, and its first choice
     `Leave it blank` or `Keep “80–100”`. With 172.
160. told (§388 ours 3) — G3: the hint is your two sentences whole, with no third (`Categories that follow guests scale
     to each end.`), as `r89o` 3 draws it; `1 guest`.
161. told (§388 ours 4) — G3: an invoice the live build updated with Event details blank or in words asks once, at its
     next Update. It was never asked.
162. told (§388 ours 5, as §390 design F1 = render O2 changed it) — G4: three lines of a choice make `r89p` 2's 62.25 (a
     floor of 48 for one line and 56 for two, three outgrowing it), not §388's 74.75. The Guests row's `Keep 120` /
     `Keep “80–100”` keep `Keep` on line one too, with no dash rule.
163. told (§388 ours 6, with §390 data F1) — G5: the follow is no Undo step and in no history copy. It happens only on
     opening, and since §390 only once the calculator's data has loaded.
164. told (§388 ours 7) — G6: Event details' strip (`The calculator uses the 1,300 guests you typed, not the 1,200…` ·
     `Use 1,200`) and the rail's line (`The calculator uses 1,300`) spell it the same way.
165. told (§388 ours 8) — G7: a count read from Event details (120.5 typed there) opens as it is. An Update tapped while
     he is still in the box uses the whole count.
*What §390's review left with them:*

171. ❓ (§390 design O1) — #71 with G3: lines that already match at 90 with Event details blank show `Every line matches
     the calculator.` and no Update, so G3's question never comes. Only the estimate's hint says so.
172. ❓ (§390 data O1) — the two-row box with Event details blank or in words starts its Guests row on `90`. One tap of
     Update writes over “80–100” (Undo is one step). Undrawn — with 159.
173. ❓ (§390 render O1) — at 390 `Keep 9 PM–1 AM` takes three lines: each choice has 78.7 of room, against `r89p`'s
     unpadded 86.7. `r87u`'s 6 at the sides below 414?
174. ❓ (§390 render O2's other half) — two lines: the track is 56 (the prose's *"the track grows to 56"*, `:104`),
     against `r89p` 1's fill 56 and track 62. Which?
*And two more from §390 — the guard's line two, and the box's long words:*

176. ❓ (§390, design M2's other half) — under the guard, line two still says `You typed this · the bar times say 5` at a
     typed 0. Your #52 rules the note and §390 the rail; does the calculator's own line two follow?
177. ❓ (§390 render M3) — G3 with long words in Event details: a two-line 17px label in the 48 button, with 2.75 clear,
     because ConfirmDialog's choices have no padding. A shared dialog's look, left as it is.

*Event details: The bar and Recorded for later — your part 1 #17 (§382–§383).*

102. ❓ (§382) — at 390 the `—` help breaks inside the style's name: `…counts it as Cocktail-` / `forward.` (measured
     headless). Keep the name on one line?
103. ❓ (§382) — Bar type at 240 cuts `Full open bar (spirits, beer & wine)`. `r89e` draws `Full bar`, a name the app's
     list doesn't have.
104. ❓ (§383 design O12) — the strip and `Add a second time` together above Crowd style. `r89e` 2 draws Crowd style
     straight after the strip with no button. `r89h` 1 draws the button, then Crowd style. No frame draws both. Is the
     button not offered while the strip shows?

*Event details' small rulings — your part 2 #58, #59, #61, #62 (§397, §399).*

232. ❓ (§397 ours; §399 OPEN) — #59 is built on the lengths alone (`r89p` 1–2 draw the confirm's chosen `Keep …` with no
     edge). It is drawn as an inside outline, so no height moves. In dark the edge is 1.33:1 on the track. Enough?
233. told (§397 ours) — #62 is the colour alone, with the 13 / 17 semibold kept, on both strings (the sheet's and the
     rail's).
234. told (§397 ours) — `r89p` 4 draws the chosen fill at 320 without its shadow. We read that as shorthand and kept the
     shadow.
235. ❓ (§399 OPEN) — #58: from 414 to about 458, `1½ hours`' words sit 1.59 from the fill's edge (0.59 inside the new
     edge). The real track at 320 is 250, where `r89p` 4 draws 290. Accept as built, or say where the short lengths
     start.
236. ❓ (§399 render M5, older) — at 1024 and up the Cocktail hour row moves under his finger when he switches it off,
     because the body's scroll clamps. Beside Round 89 #17.

*And one item of §390's, built since by §397:*

178. *Off the list* — built (§397). In dark, the chosen choice read about 1.06:1 on its track until #59's edge (§390
     render M4).

**b · The Drink calculator — the pie**

*The arithmetic — the pie's batch A (§370–§372).* The code labels these "(provisional — Round 89 Qn)". Those are plan
015's question numbers, not Round 89's items: Q2 = #2, Q12 = #4, Q16 = #6, Q18 = #8, Q23 = #11, Q24 = #12, Q29 = #36.
Each was read here against your part 1.

15. *Off the list* — the foot's `1 on hand · not ordered` (`r87i` 6) held Round 82 #7's withdrawn label `Not ordered`,
    which `check-marks` G keeps out of shipping source. Your #2 (b) gave it a comma, `1 on hand, not ordered`
    (`ROUND-89.md:137–138`). It is built (§381), and `check-marks` G admits exactly that clause.
16. told (§370's 2, ours) — a bottle served on its own takes its own name where the app's existing sentences name a
    drink: `The Modelo Especial asks for 5 oz and this is sold in each. …`.
17. *Off the list* — your #4. A row the app can't count (a keg, or a pack recorded by volume) had no sentence.
18. ❓ (§370's 4; money) — an old invoice whose drink mix he set to 0%. Before the pie, Update counted nothing (the
    guard). With the pie, your #10 opens it with Cocktails pinned at 0, so its beer, wine and spirits take every drink
    (Round 87 §4 b). Live since Batch C, at its first Update. Is that what you mean for such an invoice?
19. ❓ (§370's 5) — nothing served and a 0% mix: the guard reads `menu`, not `mix`. Beside your #2 (a), which rules every
    served kind at 0%.
20. ❓ (§370's 6) — your #12 confirms a line with no Library product. This item asks the wider case. With a line's kind
    from its section, anything filed under Spirits, Wine or Beer & Seltzers with no product, such as a service line or a
    glass, is a drink and takes a share. Is it?
21. ❓ (§371's 1) — made room is built as `r87l` b's words, whatever the pins add up to (plan 015 had narrowed it to
    100). (ours) Every drink pinned at 0, then one ticked: a third each. Confirm both.
22. ❓ (§371's 2) — a row still counted for another kind keeps a cocktail at 0 drinks. Tito's with cocktails at 0% reads
    `0 Moscow Mules × 2 oz`, `+101.3 × 1.5 oz on its own`, and parts `0 for the Moscow Mule` · `7 on its own`. Keep the
    0 term and part, or leave the 0% drink off that row? One answer with 93 and 200. Your #8 (a), *"A bottle shared with
    another drink counts that drink's part"* (`ROUND-89.md:181`), bears on it.
23. ❓ (§371's 3) — an empty kind that is pinned, and a pin typed beside it. Only served kinds count against a typed pin,
    so cocktails 60 + an empty wine at 50 + beer 40 is accepted, and the boxes total 150 where `r87i` 2 reads `Total
    100%`. Refuse against every pin, or let the empty kind's give way? Your #8 (d) (*"Still pinned, and its share goes
    to the others"*, `:187`) rules its row, not the refusal.
24. ❓ (§371's 4) — a bottle served on its own that can't join its cocktail's unit reads §81's floor: the cocktail's own
    sentence, else `at least 535` with `+162 × 1.5 oz on its own = ?`. Your #5 rules the floor and the words for a
    bottle that holds more than one drink (`:159–161`). Your U2 rules the foot (`1 needs a number from you`). For a part
    that can't join for another reason, what words?
25. *Off the list* — your #33. Your own Modelo, 24 `each` in a Case, read `108 drinks × 1 each` where `r87i` 6 draws `×
    1 can`. Built as your provisional: the product's own unit after `× 1`.
26. ❓ (§371's 6, ours) — a row fed by two kinds both at 0% reads `Not counted`, naming no kind. Which kind does `r87l`
    d's `Not counted · … is at 0%` name, or both?
27. ❓ (§371's 7) — a bottle served on its own and counted as a recipe: a Vodka Martini's 2 oz of a mini bottle sold by
    the each, also served on its own, reads `Two recipes ask for this by volume, and it is sold in each.` Which words?
28. told (§371's 8, ours) — a bottle a ticked cocktail uses is an ingredient whether its line is bought or on hand
    (Round 87 §2 e's "uses one"). So a leftover line of it in the other state is not served on its own.
29. ⛔ (§372's 1; money) — he types a share on the last unpinned drink, and the pins come to under 100: the Margarita 50,
    then 40 on the Mule. Built, they grow, 55.6 / 44.4 (on your event, Espolòn 11 → 12, Tito's 17 → 16). We read your
    #6's last line, *"r87l c's growing stays inside a kind's drinks, where a share left over means nothing"* (`:168`),
    as *grow*. Live on that reading since Batch C. Confirm.
30. ⛔ ❓ (§372's 2; money) — every drink in a kind typed at 0. Built, they split evenly, as with no pins, so his second 0
    switches both back on. Counted evenly, or every row `Not counted`, as a kind at 0% is (`r87l` d)? Your #8 (a) rules
    one drink at 0% (`Pinned at 0% · not counted`); all of them is not ruled. **Live on our provisional since Batch C.**
    Plan 015 said C would not ship on it, and C shipped on your part 1, which doesn't settle it. On your event, with the
    Margarita and the Mule ticked: split evenly, Espolòn 11 and Tito's 17; every row `Not counted`, Espolòn `Not
    counted` and Tito's 4 (§372).

*The Drink calculator on screen — the pie's B, C and D (§380–§384).*

80. ❓ (§380 FOR DESIGN 1; §384 design F2 = data O; money) — a Duplicate carries no Event details, but it does carry its
    source's kept crowd style (your #3). So Event details reads `—` and `None chosen. The calculator counts it as
    Cocktail-forward.`, while the calculator's Crowd style row shows the source's style (`Beer-heavy crowd`) beside
    `None chosen in Event details`, and counts it. Should a Duplicate carry the crowd style itself (`form.crowd`; a copy
    carries no Event details since §263), or should a kept style count only while Event details names it? Since Batch F
    a style he edits in Settings can differ from the copy kept on the source.
81. ❓ (§380 FOR DESIGN 2; §383 data F3, rejected as a fault under your #1, *"Every other Undo keeps the live pie"*) —
    Undo of the Builder's Duplicate leaves the emptied tab with its source's pins. A source from before the pie leaves a
    tab that reads as from before the pie, with cocktails pinned at the source's share. A Margarita event counts Espolòn
    1 → 13 there, where a fresh blank counts 1 → 43. Acceptable, or should the blank's stamp come back, as plan 015 B
    proposed?
82. told (§380 FOR DESIGN 3) — a crowd style picked on an invoice saved before the pie stores no copy of its figures.
    The first write of the pie keeps a copy of whatever style is chosen then.
83. ❓ (§383 data O6; money) — a made-room shrink outlives Undo of the line that made it. Cocktails 60 and Beer 40, a
    Prosecco line (55.8 / 37.2 / 7), Update, then Undo of `Added Prosecco`. The pins stay 55.8 and 37.2, the band reads
    `Total 93% · 7% not counted`, and Espolòn is 24 where it was 26. Your #1 (*"Every other Undo keeps the live pie"*)
    and #7 (d) (*"From then on, the shrunk figures are the pins"*) read this way. Confirm, or should the Undo give the
    room back?
84. told (§383 fix 1, ours) — Undo of an untick takes the untick's note back with the tick, so a drink Undo brings back
    reads `Even split`. Your #7 (b) says only that the pin stays off. With no line the calculator wrote left after the
    untick, nothing is noted, so a drink ticked again reads `Even split`.
85. ❓ (§381 ours; §383 fix 7 as §384 corrected it; money) — `mix.served`, the kinds served when a kind's pin was last
    set, tells a kind just served (#8 (c)) from one served all along. Since §383 it is written only beside a pin he
    sets, so the conversion's pin alone never makes room. But once he types another kind's share, a kind added after it
    shrinks the converted cocktails: Margarita and Paloma at 45 with Modelo, Beer & seltzer typed 55, then a Prosecco
    line gives cocktails 41.85, Espolòn 19 → 18. Your #10 (*"his old invoices' cocktails stay exactly as they are until
    he lets them go"*, `:213`) against #8 (c) for a converted pin: which wins?
86. ❓ **please draw** (§383 design F2, with design O and render O9; §384 not fixed; extends `r89d` 3–4 and `r87l` d) — a
    served kind left at 0% because the kinds' pins reach 100 (Cocktails 60 and Beer 40, with Spirits served). Built: a
    plain `0` box, `0 drinks`, a chevron. The empty kinds read `None on the invoice · its 0% goes to the others`, and
    its bottles `Not counted · Spirits is at 0%`, which are `r87l` d's words for a kind he set to 0. Also undrawn: the
    empty kinds' figures after made room, and with every served kind at 0 (77.8 and 22.2). No words were invented.
87. ❓ (§383 data O7; §381 ours, *"`Just added` needs an Update to be since"*; money) — with no Update on record, a drink
    ticked beside drinks pinned to 100 gets 0%, and the bottles only it uses get no Proposed row. With an Update on
    record it is `Just added`, 33.3. Count a drink ticked since the pins were last written as just added? Your #7 (c)
    rules *"Since the last Update, `menuAtUpdate`"* (`:175`), which has no answer when there is no Update.
88. ❓ (§383 data M12) — after made room is written, a served unpinned kind's box changes from its crowd-style figure (7)
    to its share of what the free kinds have (2), though its drinks don't move. Which figure does the box show?
89. told (§381 ours) — three or more kinds refused: `Only 10% is left. Three kinds are pinned at 90%.`, in the drinks'
    form. You wrote one and two kinds (#8 (e), `:189–191`).
90. told (§381 ours) — a pinned empty kind with nowhere to give its share: `Pinned · none on the invoice, so its 45%
    isn’t counted`. That is #8 (d)'s form with #6's ending (`:166`, `:187`).
91. ❓ (§381 ours; §384 render O) — kind figures are at one decimal (`10.9`, `22.5`), as `r87i` 3–5 spell shares, where
    `r89d` 1 draws whole numbers. Drink counts are each rounded on their own (your Round 87 🔧, `ROUND-87.md:198`), so
    `r89f` 3's four 78.5s read 79 · 79 · 79 · 79, where the frame draws 79 · 79 · 78 · 78. And a kind's band and its
    rows can disagree by one (`389 drinks`, three rows of 130). Which?
92. told (§381 ours) — a refused kind keeps its `N drinks`; a refused drink shows none (`r89f` 2).
93. ❓ (§383 render O8) — a drink pinned at 0 is still named where it adds nothing. It is named in another drink's
    refusal (`Only 40% is left. The Margarita and the Paloma are pinned at 60%.`, the Paloma at 0) and in a shared
    bottle's working (`+ 0 Palomas × 2 oz`). One answer with 22 and 200.
94. told (§381 ours) — a drink at 0% is named when one kind and one drink feed the row. A bottle served on its own at 0%
    names itself (`Not counted · the Prosecco is at 0%`).
95. ❓ (§383 design M7) — a kind's step wears the row's label (`Drink calculator › Spirits (neat, highball)`, `Spirits
    (neat, highball) · 107 drinks`), not the name the sentences use, `Spirits`. Which?
96. ❓ (§383 design M10, with 79) — `the The …` in three more strings: `Not counted · the …`, `Nothing left · the …`,
    `The … and the …`. One answer with 79.
97. told (§383 fix 2, ours; §384) — `1 drink`, the singular of your word, wherever a count of drinks is spelled: the
    rows, the band, the subtitle, and (§384) the working.
98. ❓ (§383 design M11) — the subtitle `648 drinks` is at 17 `--text-secondary` (the app's sheet subtitle), where `r87i`
    2, `r87t` and `r89d` draw 14 `--text-muted`. Which?
99. ❓ (§381 ours) — the rail's choosing bar still reads `Calculator › Choose cocktails` (Round 86 B10's words) now that
    the sheet is `Drink calculator`. Its ⋮ half is answered by your #31 (`Drink calculator…`, §387). The rail's half was
    not re-read since (204). Should it follow?
100. told (§384 ours) — the share boxes' spoken labels: `Cocktails — share of the drinks, %` and `Margarita — share of
     its kind, %`.
101. ❓ (§383 design M8) — with none chosen in Event details, the calculator's Crowd style row already shows the style
     it counts as (`Cocktail-forward` since #27), so choosing it there does nothing, and Event details stays `—`. The
     row has no `—`. Accept, or give the row a `—`?
*The kinds' boxes, the step, and what the counts take in (§381–§384):*

105. ❓ (§381 ours; §383 render O7) — the empty kind's dashed box is on `--control-line`: 4.10:1 light, 3.62:1 dark. It
     is not `r87i` 2's `--border-strong` (1.84:1, under the 3:1 a control's edge needs, Round 16). That makes it the
     boldest edge in the group: the live boxes are 1.47:1 light and 1.26:1 dark, a pinned one 9.50:1. Back to
     `--border-strong`, with `check-contrast` exempting a box for a kind not served, or stronger live boxes? His check
     29.8 asks his eye.
106. ❓ (§383 render M6) — a pinned box looks the same with and without focus (2px `--accent` both). That includes the
     box the zero guard's `Set drink mix` jumps to.
107. ❓ (§383 fix 9, ours; §384 render M, not fixed) — going into a kind's step, focus is left where it falls: on the
     page's body, outside the dialog. The step's first control is a share box, and focusing it would raise the iPad's
     keyboard (§93). Which target?
108. told (§384 render O) — the window changes size going into a kind's step, because the step is much shorter than the
     calculator.
109. ❓ **please draw** (§381 ours; §383 fix 4; §384 render M; extends `r87i` 2–5 and `r89d`) — phone width is undrawn.
     Below a card 30rem wide:
     - a pinned kind's drinks are not drawn after its words;
     - unpinned kind rows' drinks are cut to about nine characters, and the rows run 61–96 tall;
     - an empty kind's sentence wraps rather than being cut.
110. told (§381 ours) — in a kind's step the sheet's footer stays (`Update N lines`). Kind rows measure 61: your 60 and
     their 1px rule.
111. ❓ (§383 data M8; §384; money) — a line he hid (not billed, not printed) of a beer, wine or spirit no cocktail uses
     is counted, and Update writes the calculator's figure onto it. Your #9 rules a line marked free, and a hidden line
     isn't one (as built). Should a hidden line keep its number, as a free one does?
112. ❓ (§383 data M9; money) — an on-hand line and a bought line of one bottle served on its own become one bought
     drink. The bought line takes the whole count, and the on-hand stock is neither subtracted nor named in the foot.
113. told (§381 ours) — a wine counted in its own units with a size per unit is poured as a share of one unit. A spirit
     with no size keeps today's unit sentence. A product with no readable unit counts as one a drink.
114. *Off the list* — your #4's `Holds more than one drink. Set its pour in the Library to count it.` and `A keg needs a
     size and a pour in the Library to be counted.` went live with Batch C, before the Library had a pour box. It has
     one since §393 (275).

**c · The Drink calculator — its words, floors and foot**

*One sentence for two or more drinks the app can't count — your part 1 U1 (§378–§379).*

73. ❓ (§379 FOR DESIGN 1) — at 390 U1 takes 5 lines, where `r89a` 2 draws 4 and your prose says 4 (`ROUND-89.md:29–30`).
    The app's card is 348 wide with its words at x 35, and the quantity keeps `bottles` (`at least 26 bottles`). The
    words' column is 188.23 as built, 243.64 without `bottles`, and 230.23 in a 390-wide card. Which did `r89a` mean? It
    is 3 lines at 560 and 2 in the 672 sheet, as measured.
74. told (§379 FOR DESIGN 2) — at 560 `r89a` 1 centres the quantity with 10 / 20 padding. The app keeps it at the top
    with 12 / 14, as built.
75. *Off the list* — your U7. With the Champagne on at 1 (a tick's), U1's sentence ran straight into `Needs at least 26
    bottles`, both 13 semibold gold, one paragraph to the eye. Since §387 the figure comes first, then the sentence.
76. ❓ (§379 FOR DESIGN 4) — a row with nothing it can count and a refused share shows the refusal, then U1's sentence,
    as plain weight-400 text with no block of its own. Should it get its own 13 semibold block there too? Your U6
    (*"the working, then its refusal"*, `ROUND-89-PART-2.md:154`) rules a §81 floor with a working; this row has none.
77. told (§379 FOR DESIGN 5, ours):
    - the count past nine in figures (`10 recipes`);
    - `’s` after a name ending in s;
    - `recipes` when every one is a prep (your Round 85 #34 says `prep recipes`, `ROUND-85.md:101`);
    - the device's own A to Z;
    - a cocktail and a prep of one name both named (`the Bellini’s 1 float and the Bellini’s 1 top`);
    - two cocktails of one name read as one.
78. ❓ (§379 FOR DESIGN 6) — one recipe that pours this twice. The name once, with both figures (`the Kir Royale’s 1
    float and 1 top`)? Or as built: beside another drink, the name once per figure; alone, Round 88's sentence for each?
79. ❓ (§379 FOR DESIGN 7) — `the The Last Word’s 1 float`, and Round 88's `The The Last Word asks for…`, live since
    §350. Should the app's (ours) rule elsewhere, that a name opening with `The` keeps its own, reach these? One answer
    with 96.

*The calculator's words — your part 2 U2–U7, U10, #49, #71, #72, #74, #76 (§387, §390).*

148. told (§387 ours 1) — U2: every other blocked row with a product counts in `needs a number from you`. That covers a
     share refused against its prep, a bottle on its own with no pour (#4), and a swap's bottle with no size.
149. told (§387 ours 2) — U3: a product with no size the app can read takes the kind of the pours the row counts in.
     With neither, it takes a volume (Round 88's sentence).
150. told (§387 ours 3) — U4: with no unit, U1's list reads `the Kir Royale, with no amount`. The as-built sentence with
     no unit is your no-unit form, `The Kir Royale gives no amount for this.`, then its remedy, so it no longer says
     `this is sold in ml`. A prep's row reads by its own figure the same way.
151. told (§387 ours 4) — U5: a row every share of which was refused reads its refusal in the swap band too, not `Needs
     a bottle size`.
152. told (§387 ours 5) — U10: the working's terms are the Punch-first floor's in every order. The row's `forDrinks`
     stays in tick order, as on every row with two drinks.
153. ❓ (§387 ours 6, with §390 design O2) — #71:
     - a row that waits on a number from him, or on two units, keeps the foot's own clauses with no button;
     - a row with no product doesn't stop the words;
     - with no row counted at all (every row `Not counted`, a kind at 0%), there are no words: an empty 73 bar;
     - the words keep Update's 48;
     - `2 lines set by hand · …`.
     Is the empty bar right?
154. told (§387 ours 7) — #72: the stacked button keeps its own width, at the foot's end. The break is below 360 (`width
     < 360`).
155. told (§387 ours 8) — #74: a pace or a drink mix of 0, locked, reads `Not counted` as built.
156. told (§387 ours 9) — #76: words only for guests and bar hours (none for a pace or a mix), on a locked invoice too.
157. told (§387 ours 10, as §390 design M3 = render M1 changed it) — #49 shows only at Complete, or archived from
     Complete (the two whose lock sentence says Complete), on an invoice with a line the calculator wrote. It doesn't
     show where the figures don't.
*Two refusals on one row (§390):*

170. ❓ (§390 ours, design F3) — U10: two refusals on one row read A to Z (`localeCompare`), in `floorWords` and §258's
     `refusalsOf`. Round 86 #36 (a) asked for two sentences and never ruled their order.
*The foot at phone width (§390):*

175. ❓ (§390 render O3) — U2's whole foot at phone widths takes 6 lines at 390 and 8 at 320, with counts breaking from
     their words. Does #72's stack reach the Update foot?
*A drink's plural in the working (§390):*

179. ❓ (§390 render M5) — `198 Punchs` in the working (`${drink}s`, older than §387). `check-calc-words` pins today's
     form. The plural of a drink's name?

**d · The calculator's Proposed rows: a swap's money, and a number set by hand**

Money here is measured on made-up invoices shaped like `r87g` and your `r89i`–`r89n`, by the real code in Node, against
the build that was live before each step.

*The swap's money — your part 2 §2 (§385–§386).*

115. told (§385 ours 1) — #86: when another drink still pours the old bottle, a bottle-for-prep swap has no row, because
     nothing comes off. Line two and the red stay while the prep's bottles are missing, and the bottle is recounted in
     Proposed, as §45.3's Mojito case is.
116. told (§385 ours 2) — #86: a prep for a bottle has no line two, because the prep has no line of its own to ride. The
     rail still turns red.
117. told (§385 ours 3) — #86: a prep swap undone after its Update is not #88's swap back. A mark records a bottle, and
     a prep has no product id, so it reads as the drink's swaps as stored, as before.
118. told (§385 ours 4) — #87: a comp of the old bottle, a line he hid, or an on-hand line bills nothing, so it stays.
     Only billed lines come off, all of them in one Update.
119. ❓ (§385 ours 5, WITHDRAWN by §386; money) — should an old bottle's line he set by hand ever come off when the swap
     leaves no drink pouring it? Since §386 it never does. That rests on Sean's 22 Oct *"Your hand-set numbers stay
     protected on the invoice where you set them"* (his option's words, ours) and your #96, *"A line he set by hand
     never comes off."* (`ROUND-89-PART-2.md:77`). So the old bottle stays billed for no drink until he takes it off.
120. told (§385 ours 6) — #88: a swap back onto the recipe's own bottle is no swap. The line goes back unmarked.
121. ❓ (§385 ours 7; §386 design M5; accept or draw, extends `r87g` 3) — #93: the blank swap row reads `4 → —`, and no
     frame draws it. Since §385 it also shows the uncounted on-hand words above `Replaces …` (`On hand · not billed ·
     how much can’t be worked out`).
122. ❓ (§385 ours 8; accept or draw, extends `r89i`) — #85: a free line holding the count alone, with no charged line,
     reads `0 bottles`, with nothing struck. No frame draws it.
123. ❓ (§385 ours 9; accept or draw, extends `r89k`) — a comp the row's count goes on, beside a billed line that comes
     off, reads `Still comped`, with its money alone. No frame draws the pair.
124. told (§385 ours 10) — #97: his row has no `Use 0`, because it is not the line the calculator writes.
125. told (§385 ours 11) — #98: every product alike, swap or not. A gift listed first keeps its 1.
126. told (§385 ours 12) — #91: a locked invoice's untick red (§270) stays as built. Only the swap's red goes.
127. told (§385 ours 13; §386 data F4, rejected) — the pie: a bottle a swap on this menu took a drink away from (waiting
     or applied, and a prep swap's old bottle) is never read as served on its own. That is #36 (*"A waiting swap's old
     bottle is the swap's"*, confirmed) widened from a waiting swap to an applied one, with #87's comp sentence and #22
     (c). Since §391–§392 such a bottle reads `Serve on its own` · `Counts toward Spirits when on.` once its swap is
     applied (186).
128. told (§385 ours 14) — #85's working line is in hundredths when he doesn't order in whole packages.
129. ❓ (§385 ours 15) — #91: `billed as Bacardi Superior`, the line's full name. Your prose writes `billed as
     Bacardi` (`:66–67`) and the README `billed as {Bacardi}`, and the app has no shorter name for a product. The full
     name, as built?
130. ❓ (§385 FOR DESIGN; money) — #95 beside a moving swap: a gift comp of the new bottle that another drink already
     pours counts nothing for the swap's row, while the lone path (#89) counts it. Which?
131. ❓ (§385 FOR DESIGN) — at 390 the Builder's line two still wraps to six lines in its narrow column, as it has since
     §274.
132. told (§385 FOR DESIGN; fixed by §386 render M4, for the record) — #90's money line broke between `−$5.00` and `in
     all` at 390, and every swap row's total with it. Each total is now held whole on one line (`whitespace-nowrap`).
133. told (§386 ours) — `hisCount`: a swap to a bottle whose billed line he set by hand. The row has no count of its own
     and shows its money alone (`−$76.00 in all`). His line keeps its row in Proposed, held by §310: `stays at 6` · `You
     set 6 by hand · the calculator says 4` · `Use 4`.
134. ❓ (§386 ours) — a re-swap that also takes the recipe's own bottle off names the drink twice: `Replaces Diplomatico
     Reserva in the Daiquiri and Bacardi Superior in the Daiquiri`. Words for one drink with two old bottles?
135. told (§386 ours) — a template started `Lines only` brings no swap marks (`linesAsBrought`). `Bring the menu` keeps
     them with its swaps. This replaces §290's (ours), which kept them switch on or off.
136. ❓ (§386 ours; money) — a comp of the recipe's own bottle, made while a swap back waits, is a gift at that Update
     (#95) and a line he marked free at the next (§384, your #9). So the next Update takes the billed bottles beside it
     off, and it settles in two Updates. That is #95 against #9. Which holds?
137. ❓ (§386 NOT FIXED: design M1, render M6) — the taken-off line. Its name is at 15, where `r89j`–`r89m` draw 14. Its
     arrow is in `--text-faint` (kept for placeholders and disabled text), where they draw #474239. Its struck figure is
     BuyQuantity's, and the figure's gap is 8 against the frames' 6. The frames, or the app's parts?
138. ❓ (§386 NOT FIXED: design M2) — `r89j` 2's `New` is the app's label (13 semibold, capitals, `--accent`, as #100
     accepted on a swap row), where the frame draws plain 15 #474239.
139. ❓ (§386 NOT FIXED: design M3) — `Replaces …` with three or more parts, or a part with two drinks, runs on:
     `Replaces Bacardi Superior in the Daiquiri and the Mojito and Havana Club 3 Años in the Old Cuban`. A comma between
     the parts?
140. ❓ (§386 NOT FIXED: design M4, render M1) — `r89n` draws the closed group row with `1 swap to apply` top-aligned.
     The built row stays centred, its amount and chevron about 8.5 below the name line's centre.
141. ❓ (§386 NOT FIXED: design M8) — `comes off` sits after the figure with its dot, as the prose writes it (`· comes
     off`), where `r89i` 2 draws it on its own line with no dot. And `You batch it · its ingredients are below` comes
     from frame `r89j` 1 alone, not the README's exact strings. Keep both?
142. ❓ (§386 NOT FIXED: render M5) — at 390 HandRow's `You set 1 by hand · the calculator says` / `0` leaves the figure
     alone on its line. Those are §310's words, held by `check-hand-set` and `check-dots`. A no-break space before the
     figure, as your #57?
143. told (§386 NOT FIXED: data M6, with design M6 = data M2 = render M7) — the frames' arithmetic:
     - `r89m` 2 and `r89n`'s `Tito’s Handmade Vodka 7 · $167.93` is 7 × $23.99. At the fixtures' $22.99 it is $160.93.
     - `r89i` 1's `128 Daiquiris × 2 oz × 1.1 cushion ÷ 25.36 oz = 4.4` computes 11.10, and `r89i` 2's `= 1.1` computes
       2.78.
     - `r89k` 2's `2 → 6`, `+$64.00` (*"$35.00 × 4 more"*): the app pools the two drinks' rum and rounds once, `2 → 5`,
       `+$29.00`.
     Built from the rule, not the figures.
144. ❓ (§386 design O1) — half of a #90 swap undone after its Update gives the Builder's line two (`Daiquiri now uses
     Bacardi Superior · recalculate to apply`) and the red, but no `Swaps to apply` row. The change shows only in
     Proposed. `r89l` 2: *"Now the Builder’s line and the calculator both say what will change."* Should it have a row?
145. ❓ (§386 design O2 = render O1) — the locked or Complete calculator still shows `Swaps to apply` with its money
     (`+$64.00 in all`) beside `Editing, comps and deleting are locked at Complete.`, as it has since §274. #91 ruled
     line two only. Hide it when locked?
146. ❓ (§386 design O3) — a charged line he set by hand beside free bottles gets none of #85's words, so `the calculator
     says 0` gives no reason.
147. ❓ (§386 design O4) — #92's count against one #90 row: a closed group reads `2 swaps to apply` (one per line two),
     where the calculator shows one row and `Update N lines` counts it once. Is a two-into-one swap 1 swap or 2?

*`Use the calculator’s number` as it is now — your part 2 #144, #145 (§389, §390).*

166. told (§389 ours 1, as §390 data B1 and design F2 changed it) — #144: no figure (the row hidden) when no row writes
     his line alone (a mixer with its drink unticked, nothing counted under the guard, a swap's row), or when the row is
     blocked (since §390, every floor). A line §280 splits a swap's
     figure over named its `calcQty`, as built, until #147. Since §406 the panel names his row's figure (275).
167. told (§389 ours 2) — #144: `Use` makes the line the calculator's again at once (`calcQty` beside its figure). The
     step reads `Rittenhouse Rye back to the calculator’s 9`.
168. told (§389 ours 3) — #30: `1 glass a bottle` in the singular. None for a pour that fills no glass, or isn't one.
169. ❓ (§389, with §390 design O3) — we read #145 as answering only the case with nothing written. Round 87 §4 a's
     agreeing pass at Update (*"If the calculator comes to agree with his figure, Update sets `calcQty` to it"*,
     `ROUND-87.md:316`) is unchanged. Confirm.

*His number on a swap's split — your part 2 #147, "Hold only his line." (§406–§407).* Money against `c744813`, the build
live before §406: of 6,000 seeded tap sequences, 5,249 the same, 597 lower and 154 higher (−$350.00 to +$315.00). None
of them is without a §280 row with a line of his (§407).

265. ❓ **please draw** (§406 ours 1; §407 OPEN, a new state; extends `r87q`'s held row and `r87g`'s swap row) — his line
     is a row of its own under the bottle's (#97's pattern, `r87q`'s held row). So two or three rows carry one bottle's
     name, and nothing says which line each is.
266. told (§406 ours 2–3, as §407's fix made them) — what the calculator says for his line counts it at the figure the
     calculator last wrote (`calcQty`). The calculator's own line, the first that is not his, takes the remainder. So
     the same lines read the same in either order.
267. ❓ (§406 ours 4–5; §407 OPEN; money) — while one line of his holds, every line of his stays and none is made
     calculated. `Use` chooses the bottle: every held line of it at once, with `Update N lines` counting the lines that
     change (`Update 3 lines` where §405's one row said 2). It moves the bottle's row and its other held row, unspoken.
     Right?
268. ⛔ ❓ (§406 ours 6; §407 OPEN, data; render minor; money, on the client's paper) — `0 × $35.00` on the client's copy,
     three ways:
     - a line his number covers;
     - `Use 0` on a line listed first;
     - the #87 swap's `2 → 0`. A Duplicate or a template carries it. And the panel's `Use the calculator’s number`
       writes 0 beside a free line, where the sheet's `Use 0` takes the line off (#144's path as built). Your #96 (*"A
       charged line that Update takes to 0 because the free line covers the count comes off"*, `:75–77`) against #145
       (*"The line stays his until he taps Use"*, `:302`): should a line at 0 ever print?
269. ❓ (§406 ours 7–8, as §407's fix made them, design F4 = render F3) — beside his held line, the bottle's row has no
     working, no #85 last line and no parts. That follows your Round 87 §4 b (`r87h`; `ROUND-87.md:97–98`): *"There's no
     working sentence, so no `= 0` shows (Round 36)."* Its line two, `3 free on the invoice · the rest is charged`, is
     kept. Words for his share where the working was?
270. ❓ (§406 ours 9; §407 OPEN) — a #87 swap's row holds his line too. His row is in `Proposed` while its bottle's row
     is in `Swaps to apply`, and the swap's new bottle is at 0 because of it.
271. told (§406 ours 10–12; §407 design minor) — with the pie, the bottle's row keeps its parts and his row has none.
     Every line his is held whole at the row's figure, one row and one foot count, as §310. A line of his the calculator
     agrees with has no row of its own, and Update makes it calculated (🔧 Round 87 §4 a).
272. ⛔ ❓ (§407 NOT FIXED; money) — the bottle's row shows the held split and his row the full split, so the two figures
     on screen need not add to the count: `2 → 3` beside `says 3` at 32 guests, 6 of 7. Which split does each row show?
273. ❓ (§407 data F3, rejected as a fault) — his 0 that the split agrees with, beside free bottles that cover the count.
     It is made calculated at the first Update (🔧 Round 87 §4 a) and taken off at the second (#96). Those are the two
     steps the live build takes for the same line on a one-line row. #96's *"A line he set by hand never comes off"* and
     #145, against the 🔧: do they agree?
274. told (§407 render minor) — the held row at 320 is 151.95 tall, with the name on two lines: HandRow as built. No
     ruling names 320.

**e · The Builder's line and the press-and-hold panel — the pie's E, and the on-hand words**

*Also served on its own, and the split — your part 2 §6 c (§391–§392).*

180. ❓ (§391 ours 1; §392 OPEN 1) — #18's other actions (Select lines…, Add to a group line…, Comp, Show, Remove) stay
     below the info rows, destructive last, so the info rows sit between two groups of actions. Readings:
     - (a) as built: only the two you named move up;
     - (b) every action above the info rows, destructive last;
     - (c) the two first, the rest after them, then the info rows.
     `r89q`'s caption reads *"Open: actions first, then the info rows (#18, #143)."* Which?
181. told (§391 ours 2) — #21's order read as precedence. One of the swap's words, on hand, the split and the price line
     takes line two. Our #21 asked which wins, and `r87j` 7 draws the split with no price line.
182. ⛔ ❓ (§392 OPEN 2, design F2) — packing mode and #18. Built to `HANDOFF.md:4643–4644`: *"The panel gains a
     Procurement block ABOVE the item actions … First, because in this mode it is why he opened the panel."* So
     Procurement comes first, then the two at the top of the `Item` band. §391 had put them above Procurement, and §392
     put it back. Does #18's one order reach packing mode?
183. told (§391 ours 3) — locked: a wine, beer or spirit no cocktail uses keeps `r87j` 9's statement. A liqueur or mixer
     no cocktail uses, switched on, states `Served on its own` · `No cocktail on the menu uses it.`
184. told (§391 ours 4) — a liqueur or mixer no cocktail uses, switched on (live), reads `Serve on its own` with the
     switch on and the same line two. `r87j` 9 draws it off.
185. told (§391 ours 6) — the switch keeps the panel open and shows its new state, as the mark switches do (§215).
186. ❓ (§391 ours 5, as §392 design F1 changed it; accept or draw, extends `r89q`) — the bottle a swap took a drink
     from.
     - While the swap waits, its switch names the swap's drinks (#36).
     - Once applied, it names none and reads `Serve on its own` · `Counts toward Spirits when on.`, the switch kept.
     - Locked: `Served on its own` · `No cocktail on the menu uses it.`
     - A prep swap's drinks are never named, because nothing records when its Update is done.
     No frame draws a swapped bottle's switch.
187. ❓ (§391 ours 7; §392 render M1) — the switch's row is §215's: 64, 20 at the sides, 10 above and below, 12 between.
     The glyph is 22 in `--text-secondary`, line two 13 in `--text-muted`, and the word 17, where `r87j` and `r89q`
     draw 15. `r89q`'s own example, `Counts toward Spirits as well as the Moscow Mule.`, is 292.8 wide in the 288
     column. So it wraps (`text-pretty`: `…as well as the` / `Moscow Mule.`), and the row is 77, where `r89q` draws
     one line in 68. Which?
188. told (§391 ours 8) — after `Use 27`, the held row (now a change) shows its parts under the name, as every Proposed
     row does (`r87i` 6). `r89q` draws the held state only.
189. told (§391 ours 9) — a figure §280 splits over a swap's charged lines takes no split. An on-hand line keeps its
     split, which never shows (on hand goes first).
190. ❓ (§391 ours 10; §392 OPEN 3) — the split between Updates, built literally as *"the split of the last Update"*
     (#21).
     - Switched off, the line keeps `22 for the Moscow Mule · 5 on its own` until the next Update.
     - With the Mule unticked (Tito's stays, #22 (a)), line two still names the Mule, while the panel says `No cocktail
       on the menu uses it.` Should it go when it stops being true?
191. ❓ (§391 ours 11; §392 OPEN 4) — a copy or a template keeps a line's split with its figure. So a template saved
     without its menu starts an invoice whose Tito's reads `22 for the Moscow Mule`, with no Mule on it. Against
     `ROUND-87.md:360`: *"The pie's shares and the calculator's settings never travel (009)."* Drop `calcParts` from
     templates?
192. told (§391 ours 12; §392 OPEN 11):
     - the split's row takes 10 above and below (§275's), so wrapped at 390 its words clear the rules;
     - the stepper stays centred (#94 rules the swap's row alone);
     - the parts' glyphs keep to their first line;
     - Proposed's name, parts and working are 0 apart, where `r87i` 6 draws 2;
     - a split row's name sits 1.3 lower than its neighbours'.
193. told (§391 FRAME AND PROSE; §392 OPEN 12, design M12) — where `r89q` differs, the prose and the built parts are
     kept:
     - `r89q` 1's pen line under the panel's header;
     - `r89q` 2's subtitle `8 · 5 for the Moscow Mule · 3 on its own` (the panel's `Spirits · 750 ml · $22.99`, as
       built);
     - `Use the calculator’s number` in `--accent` semibold with no glyph (`KeypadIcon` and `--text` as built), its 8 in
       `--text-secondary` (built `--text-muted`);
     - the info rows' two-column schematic (InfoRow as built);
     - `r89q` 2's missing Price history (built: shown).
194. *Built since §394* — Round 87 §2 #7's on-hand words on the Builder's line, `On hand · not billed · about 4 bottles`
     (`r87j` 7). Its open half is 228.
195. told (§392 ours, data F1) — the switch is the bottle's. The panel reads on when any line of it is on, and the
     switch sets or clears every line of it in one Undo step. Round 87 §2 #8's *"it's stored on the invoice line, not
     the product"* (`ROUND-87.md:155–156`) is kept: the flag is on the lines.
196. told (§392 ours, data F2) — with Spirits at 0%, a switched, swapped bottle holds its swap, as the guard's rows do.
     That is Sean's **Do nothing, say why** (19 Oct, a button; its words ours). The new bottle's row is `Not counted`
     with the old bottle's reason, and it is not listed when it has no line (Round 87 §4 b: *"No row is added at 0"*,
     `ROUND-87.md:98`).
197. told (§392 ours, design F4 = data M5 = render F1; design M5) — a group member's line two keeps its home category
     (Round 74 §3 #10), and a line with no price keeps `No price set`. There is no split on either: #21 doesn't speak of
     them.
198. ❓ (§392 OPEN 5, design M8) — an invoice with no stored menu (from before 7 Aug 2026) gets the pie's words: every
     wine, beer and spirit `Served on its own · No cocktail on the menu uses it.`, and a liqueur's switch. On a locked
     one the sentence speaks of a menu never recorded.
199. ❓ **please draw, or say none** (§392 OPEN 6, design M10; extends `r89k`) — a swap row's parts. `Swaps to apply`
     draws none, while Update writes them (`r89k` onto a switched, billed bottle). Draw them under the swap row's name,
     or write none?
200. ❓ (§392 OPEN 7, design M11) — a part of 0 (`0 on its own`, `0 for the Moscow Mule`). §371's provisional (§371 FOR
     DESIGN 2) now reaches the Builder's line and the held row's pen line. One answer with 22 and 93.
201. ❓ (§392 OPEN 8, design M13 = render M3) — two menus with one name: `Actions for Tito’s Handmade Vodka` twice in one
     panel. That is an accessible name, so the words are yours.
202. ❓ **please draw** (§392 OPEN 9, render M2; a new path across two rows; extends `r89q`) — flipping the switch moves
     `Use the calculator’s number` (its figure changes, or it goes), and the switch moves 26 under the finger. The
     second tap still lands on it (measured).
203. ❓ (§392 OPEN 10) — the switch is reachable only by press and hold. useLongPress's rule, *"Every option the panel
     offers is also reachable another way"*, is retired for it, as for Comp. Or should it have a second place?
204. told (these records, read against part 2) — 25 (`× 1 each` where `r87i` 6 draws `× 1 can`) is answered by your #33,
     and §389 marked it confirmed, the code unchanged. 99's ⋮ row is answered by #31 (`Drink calculator…`, §387); its
     rail half was not re-read. 101's style loses `(typical Limbo)` by #27 (§391); its question stands.

*The on-hand words — Round 87 §2 #7, your Round 89 #35 confirmed (§394, §395).*

227. told (§394 ours 1) — where the line was stored with no quantity, `about 6 bottles` takes the place of `how much
     can’t be worked out`, because the figure is how much.
228. ❓ (§394 ours 2–3; §395 render O9 = design O10, with 194) — the quantity cell keeps the line's own quantity. So one
     row reads `2 bottles` beside `about 3 bottles` (measured), where `r87j` 7 draws `—`. And `about` is worked live on
     every stage, so on a Complete or archived invoice it follows today's Settings. Item 194 asked about the cell; this
     adds the measured pair and the locked case.

**f · Settings › The calculator, and a product's pour — the pie's F (§393, §395)**

Money: at Update only. An invoice with no kept copy of a crowd style counts the style as Settings has it now (part 1
#14, *"until F"*). On the made-up event (100 guests, 6–11 PM, a Moscow Mule, Mixed / balanced edited to 30 · 15 · 20 ·
30 · 5), that took Tito's 26 → 18 and Prosecco 11 → 30, $1,291.57 → $1,373.65 (+$82.08). An invoice already filled from
the style keeps its copy ($1,291.57 before and after, `r87k` 11). A Pours change moves every invoice's neat-pour counts
at its next Update (`r87k` 12: Spirits 1.5 → 2 oz gives Buffalo Trace 7 → 9, +$59.98). A product's own pour moves that
product's (`r87k` 13). Cocktails never move.

205. ❓ (§393 ours 1; §395 design M6, kept) — `Built in` appears twice: the list's line two `… · built in` (`r89r` 2,
     lower case after the dot), and the style's page, in the foot where Remove sits (#26's *"in place of Delete"*,
     `ROUND-89-PART-2.md:197`). The prose spells `Built in`, the frame `· built in`. Which, and where?
206. ❓ (§393 ours 2) — Remove uses the managed list's confirm (`Remove Corporate happy hour?` · `This can’t be
     undone.` · `Keep` / `Remove`, Round 86 S5), where #26 says Delete (`ROUND-89-PART-2.md:197`). It is on the
     style's page, not the list row. Removed, or gone on his other device, the page steps back to The calculator.
     Remove, or Delete?
207. ❓ **please draw** (§393 ours 3; §395 render O8 = design M5; §395 fix 7, ours; extends `r89r` and `r87k` 10) — the
     phone width, undrawn. Below 640:
     - the five share columns are 26 wide and 4 apart (`r87k` 10: 28 and 12, from 640), and the name column is 114
       (`Cocktail-` / `forward`);
     - rows run 92–110 tall with whole numbers;
     - the band's `CROWD STYLES` sits on two lines (33.78 tall);
     - Pours' Spirits row is 131, with `can or bottle` wrapped;
     - since §395, when any figure has places, every column is 36, and below 640 the figures and the chevron go on their
       own line under the name.
     `r89r` draws no columns at all.
208. told (§393 ours 4; §395 render M10) — heights on the app's scale. The list's and Pours' rows are 61 (62 with the
     row's rule), where `r87k` 10 draws 64 and `r87k` 12 draws 56. Share rows are 52 (53). Every box is 44, where `r87k`
     11–12 draw 40.
209. told (§393 ours 5; §395 design M9) — `Add a crowd style` is CardGroup's flush add row with its dashed `+`, where
     `r87k` 10 names `PlusIcon` and draws a bordered button. Tapped, it opens the managed list's naming row (`Done`, a
     blank name discards, `“…” is already in the list.`). A new style starts with Cocktail-forward's figures as they are
     then. Its naming row is a hand-written copy of the managed list's, so #41's reveal (`r89s`) is not on it (plan 015
     notes it).
210. told (§393 ours 6) — no reorder for crowd styles. Nothing draws it, though Round 31's control #4 lists it.
211. told (§393 ours 7) — over 100, the total line reads `Total 104%` alone. The second clause is ruled for under 100.
212. told (§393 ours 8; §395 fix 8, ours):
     - a blank share box counts as 0;
     - a box the comma rule refuses holds Save, and focus moves to it;
     - the line and Save decide on the total as printed, to two places, so 33.333 three times saves;
     - off the line it never reads `100%`, nor the gap `0%` (0.01 at least).
213. told (§393 ours 9; §395 design M9, rejected) — Save stays on the page and says `Saved` (Settings › Business's
     pattern; `r87k` 11 draws nothing after a Save). It does so after a Save that changed nothing too. Leaving with
     something typed asks `Discard your changes?`, with `Your changes to Mixed / balanced haven’t been saved.`
214. told (§393 ours 10) — a blank name keeps the stored one. A name another style has gets `“…” is already in the
     list.`, and Save writes nothing.
215. ❓ (§393 ours 11) — changed figures make any style his own and not tuned. His Cocktail-forward reads `Your own
     figures` once he saves new figures for it. Should it keep `Tuned from your own events`? Your #28 keeps that line
     *"for what the events tune, which is later"* (`:205`); his events don't tune anything yet.
216. told (§393 ours 12; §395 fix 6 = data M6 = design M7) — where `tuned` lives. It is read as tuned on Sean's account
     (`LIMBO_OWNER_ID`) until stored, and stored `true` at his first Save of any style. A Save never writes a `false` it
     only read, nor a built-in he never touched (absent reads as the seed). Your #27: *"Store `tuned` on Sean's account,
     as you propose."* (`:200–201`).
217. ❓ (§395 fix 5 = data F5, ours; a premise correction) — our Round 89 #27 said *"nothing writes `tuned`"*. That was
     wrong. The August Settings form (3 Aug–13 Sep, `7e22f70^:src/components/settings/DrinkSplitForm.tsx`, its lines
     85–86) stored `tuned: true` on any style he edited: *"Editing a row marks it tuned — that's what tuning IS."* So
     you ruled #27 and #28 on an incomplete premise. Built: a stored `tuned: true` on any style but Cocktail-forward
     reads `Your own figures`, and Cocktail-forward keeps its stored tuned. Confirm.
218. told (§393 ours 13) — his own figures are in `--text`. `r87k` 10 rules `--text` for tuned and `--text-muted` for a
     guess.
219. ❓ (§393 ours 14; §395 data O10; money) — Pours: a blank, 0 or junk box puts the stored figure back with no words.
     There are no bounds on a pour, so 0.01 ml, or 15 typed for 1.5, is stored, and every neat-pour count moves at the
     next Update. Limits, or a confirming line?
220. told (§393 ours 15, as §395 fix 2 = data F2 replaced it; money, stopped before it went up) — the product's pour box
     shows only for a category served on its own (Spirits, Wine, Beer & Seltzers, a liqueur, a mixer). It is a free
     field with no band. Its unit select keeps the number in the box and stores it in the unit picked, as the size
     select beside it does: 45 then `ml` is 45 ml. §393 converted it to 45 oz, which was +$5,608.13 on the made-up event
     and never sent. A unit picked with no pour stays on screen only.
221. told (§395 fix 9 = design F4 = render F4, and design M8, ours) — #29's help is 13 `--text-muted` under the box and
     outside its label, as `r87k` 13 draws it. §393 had used the field's 15 `--text-faint`, 3.29:1. The box is 140 wide
     with its figure on the left, where `r87k` 13 draws 92, right-aligned.
222. ❓ (§393 ours 16; §395 fix 10 = design F3, ours; OPEN) — #29's figures: wine `5 oz`, beer and non-alcoholic `1 can
     or bottle`. The help shows only where blank really counts by the kind's pour. It shows none on a keg, a 1 L tonic
     or a wine with no bottle size, which part 1 #4 counts otherwise. Your #29 rules it *"shown filled or blank, the
     same for every product"* (`:206–207`). It would be untrue on those three, so we left it off them (§3). And the
     grammar at a beer or soft-drink pour other than 1: `Blank uses the Beer & seltzer pour, 2 can or bottle.` Which
     words?
223. ❓ (§395 data M9, left; money) — a can or bottle with no size takes a pour the count ignores (`ownAmount` uses a
     pour only with a size). Hide the box, add a line, or count the pour against a default size? (Part 1 #4.)
224. told (§393 ours 17) — `No longer in Settings` also shows under Event details' select, in the help's place. In the
     calculator's Crowd style row it comes before `None chosen in Event details`.
225. told (§395 fixes 3–4 = data F3, F4, ours; money) — Remove keeps the style's name on the settings row (`removed`),
     so a kept copy that an older build rewrote without its name is still named. And an invoice saved before the pie,
     whose Event details named a style since removed, keeps none chosen (`—`, counted as Cocktail-forward), not a
     made-up copy.
226. ❓ (§395 render M6, left) — a junk added style with no name shows its key on the list (`style-x`). No build writes
     one, and dropping it would delete it at the next Save. Words for a style with no name?

**g · Windows and the way back — your part 2 W13, W11, W10 (§396, §399)**

229. ❓ (§396 ours; §399 OPEN) — W13: we read *"A window already at the 86dvh cap stays centred"* (`:121–122`) as the
     card at the cap. An editor that reaches the cap from a shorter card keeps the 24 at the foot, and is not
     re-centred:
     - a prep at 1200 × 1468 grown to the cap: top 181.53, where centred is 102.77;
     - at 1600 × 1068 it opens at the card's top, 111.97, where centred is 74.77, 37.56 at the foot;
     - at 1024 × 1366: 167.25 and 24;
     - a product at 1200 × 1468: 450.05 → 400.69; at 1600 × 1068: 250.05 → 125.53.
     Which?
230. told (§396 ours) — W13: the pin is read once, as the editor opens. Turned round, the spacer keeps the card's top.
     Back to the card centres the card again (✕ 82 back down at 1200 × 1468). Only the three editors with a card behind
     them.
231. told (§396 ours) — W11: a click with no press before it (assistive tech's) still closes, as built in §330.

**h · The lists and the red — your part 2 #40, #41, #67 (§398, §399)**

237. told (§398 ours; §399 data F1, ours) — #40, the rail:
     - a kept record holding both chips reads `No price set` alone;
     - below 600, with no chips drawn, no kept filter applies: the list is All, and the choice is kept;
     - since §399 the lit chip is scrolled into view inside its row as the row is drawn. L8 keeps *"search, filter, sort
       and scroll"*.
238. told (§398 ours) — #40, History: with no card named, the kept words and filters apply. H2's `?card=` view still
     wins.
239. told (§398 ours; §399 fixes, ours) — #41:
     - Done and Return reveal too;
     - the row wins when the row and its sentence can't both fit;
     - since §399 the sentence is inside the held row, 6 under the box, 13 semibold `--gold-text` (`r89s` 2);
     - the row takes §238's 8 above and below. `r89s` 2's 10 and 14 were read as the frame's drawing.
240. ❓ (§399 OPEN) — #41 / `r89s`: the box's 2px `--accent` edge is not built. Your rename ruling
     (`ROUND-32.md:148–149`, which the code cites as §46.2b) says *"No box appears — the row is already a box."*
     `r89s`'s row has no Remove or Done. Settings › The calculator's crowd styles still put the clash under their list
     (209). Which rules?
241. ❓ (§398 ours; §399 OPEN) — #67 at 320 (252 for the words): the red wraps to two lines rather than run out of the
     button. Your #67 says *"15, on one line, every red"* (`:263`). Which gives way?

**i · The estimate — your part 2 §9 §8 (§400, §401, §403)**

242. told (§400 ours, as §403's fix made it) — #107: no `Undo typing` on Ice's opened boxes. Since §403, leaving the row
     from one of its boxes with both empty takes the entry off, and it reads `Included` · `Type` again. `Type` puts
     focus in the low box it opened (a following row's press becomes `Undo typing` in place, focus kept).
243. ❓ (§400 ours) — #117: the trash's line has no total and no `changed since`. The built line two and `Delete…` are
     kept. `r89v` draws `Deleted Oct 22 · $13,200`, which no trash row has, and Restore. Until History's list has loaded
     it reads `Sent Oct 19` alone. As built?
244. ❓ (§403 design M, left; accept or draw, extends `r89v`) — `r89u` and `r89v` draw the sent line 13 `--text-muted`
     with a send glyph. It is built 15 `--text-secondary` with `EstimateIcon`, as Round 87 §3 a #5's prose says. And
     `r89v`'s *"three lines, not four"* is four at 320–430: the trash line wraps after `Sent Oct 19 ·`, and the row is
     97.09. It is one line from 768.
245. told (§400 ours; §403 design minor) — #118:
     - a second unchanged send that day says `Marked as sent`, with no `Undo`;
     - on the hour it reads `3 PM`;
     - the time is held whole (a no-break space before AM / PM);
     - a bare day never carries a time;
     - times are on the page's list only;
     - `Sent Oct 19, 2025, 12:45 PM` has two commas.
246. told (§403 fix = data F1, ours) — #118's *"nothing changed"* is read as the whole paper as it would be stored, and
     the picture it names, not the figures alone. `changed since` (your Round 87 §3 a #4, `ROUND-87.md:239–241`) still
     reads the figures alone.
247. told (§401 ours; §403 design minor) — #111:
     - a copy sent before §401 draws today's logo;
     - a copy whose picture hasn't reached this device draws none until it does (unless today's logo is that picture);
     - Undo takes the copy off, not the picture;
     - a junk `logo` hides the copy;
     - the backup page's label reads `Pictures your sent estimates were sent with`.
248. ❓ (§403 left, all three reviews) — a trade for Sean and you. Print isn't held while the saved pictures are on their
     first read. So a copy whose picture hasn't arrived prints with no logo, and offline, with none kept, every reprint
     does. And the pictures live in the device's own storage, one more copy of his logo per logo sent with (up to 400 KB
     each). A full store drops queued changes silently.

**j · Templates — your part 2 §9 §9 (§402, §403)**

249. told (§402 ours) — #124 over a template with no menu: the sentence as built, switch on or off.
250. told (§402 ours; §403 fix, ours) — #126:
     - the row's line two is the menu's own sentence, its swaps named, with a full stop (`r89w` 1 draws the drinks
       alone, with no stop);
     - it is hidden while his drinks can't be named;
     - focus goes to the first line's tick;
     - Undo writes nothing over a menu saved there since;
     - the toast is in the fill sheet's own box, and since §403 it carries on in the Builder's box for the rest of its
       4.5 s if he closes the sheet.
251. ❓ (§403 left) — #126's *"one Undo step"* (`:293–294`) is read as the toast's Undo. It is on no Undo list. Should it
     be?
252. told (§402 ours; §403 fixes):
     - #128's "his drinks" are the drinks, products and prep recipes a menu reads;
     - a kept list with nothing in it counts as loaded (§403, data F2);
     - `its 1 cocktail`;
     - failed again after `Try again`, the same box;
     - the disabled switch's track is at 50%;
     - the built label `Include the cocktail menu` and its coupe are kept, where `r89w` 4 labels it `Save its cocktail
       menu too`, with no glyph;
     - a second tap keeps the first tap's 2-second end.
     *(For the record: since §403 the box's title is `r89w` 3's `Start from Wedding bar?`. §402 had kept `r87v` 3's
     `Bring its cocktail menu too?`.)*
253. told (§402 ours) — `r89w` 1's summary order: kept as built (`r87v`).
254. ❓ (§403 left, minor):
     - "has a menu" reads two ways when every drink on it is deleted: saving says `…keeps its cocktail menu`, which is
       true, and the preview shows no row;
     - the row and `· 4 cocktails` appear above the lines when a first read lands mid-preview;
     - `Try again` while it reads shows no change, then closes and reopens;
     - there is no busy state while the tap waits.

**k · The paper — your part 2 §7 #37–#39, #42 (§404, §405).** No price moves. What moves is where tables split, how many
sheets, and the type's size. His French 75 at five columns went from 1 sheet at 13.61pt to 2 sheets at 15pt. A Margarita
at Per drink and six sizes went from 2 sheets to 1. Measured by printing with Chrome's `printToPDF` at 4 × 8 and Letter
and reading the PDF back: 142 fixtures at §405.

255. ❓ (§404 ours 1; §405 design F3, open) — the fit is tested where the paper is drawn. On a 390 screen or an iPad, his
     French 75 at five columns shows one table, and prints split on 4 × 8. After §405, 14 of 71 phone fixtures differ
     between the screen (390 and 1024) and 4 × 8, 2 of them at 320. No ruling rules the fit on a screen.
256. ❓ **please draw** (§404 ours 2; §405 OPEN; a new state of a part; extends `r88f` 1) — the Separate table's head:
     `Separate · each drink`, where the bottle tables say `Ingredient`, with no second header row. It breaks over 2
     lines at five and six columns and 3 at seven and eight (`SEPARATE · / EACH / DRINK`), at different places in two
     parts. `Per drink` breaks over two.
257. ❓ (§404 ours 3 and b; §405 corrected = design F2 = render F2) — a Separate table that won't fit splits like the
     bottle's (3 + 2 … 4 + 4), with Per drink in the first part. **§404's "nothing shrinks" is false:** 11 of 71 phone
     printouts still print a little small, every one a Separate part of four columns past the sheet's edge.
     - His French 75 at Per drink and seven sizes: 98.86%, its title 14.83pt.
     - The G&T's `Mediterranean tonic` at Per drink and seven, or at seven or eight sizes: 93.77%, 14.07pt.
     - At 320 that part runs 10.61 past the sheet.
     Should a four-column Separate table split further?
258. told (§404 ours 4–6) — the Separate table sits 14 under the last table. #39 applies to its tables too. A Separate
     row's `· 3 oz a glass` follows the sheet's Per drink column, so in a split the second part's names stand alone.
259. told (§404 ours 7–8; §405 ours 9) — "taller than a sheet" is the 4 × 8 sheet's 7.3 in at its 2.6 in, wherever it
     prints. The split shows until the sheet has measured. And *"won't fit unshrunk at 15pt"* is read as the sheet's
     edge, the text box plus the sheet's own 0.35 in, where §404 read the text's edge.
260. ❓ (§404 a; §405 OPEN) — `each recipe starts a page` is not always true. Very short recipes share a 4 × 8 sheet:
     three Tequila shots at Per drink alone print on 2 sheets. And the prep export's chooser shares the row, so it reads
     the same words.
261. ❓ (§404 c; §405 OPEN) — neighbouring cells nearly touch at the fit's edge, more often now: 0.16 and 0.08 apart.
     On a 390 screen the French 75's `INGREDIENT` meets `PER DRINK`. The five- and six-column one tables' heads break as
     `500 / ML` and `PER / DRINK`, where the split printed them on one line.
262. ❓ (§404 d; §405 OPEN) — the export button counts a sheet a recipe. His French 75 at Per drink and four sizes reads
     `Export 1 page` and now prints 2 (it printed 1, shrunk, before §404). Margarita + French 75 read `Export 2 pages`,
     and print 3. §404's "older than this" is not true for the French 75.
263. ❓ (§405 render F1, open) — a recipe's title alone on a sheet. A 16-row punch at Per drink and eight sizes prints
     sheet 1 with its title and method line only, its first table moved whole to sheet 2, which is #39 as ruled. Count
     the title in the test, or never move the first table? Round 81 #5's strand count is the precedent.
264. ❓ (§405 render) — his French 75 at Per drink and four sizes prints the champagne in two Separate tables on two
     sheets, with `3 oz` on sheet 1 only. Your #37 says *"a table of its own"* (`:224`).

**l · These records**

275. told (these records, read against what §393–§407 built) — four of 80–204 are built or answered by it:
     - 114: the Library has its pour box (§393), so #4's two sentences now point at a box that exists;
     - 178: #59's edge is built (§397);
     - 194: the on-hand words are built (§394), and their open half is 228;
     - 166's *"until #147"*: the panel now names his row's figure (§406).
     The rest of 1–204 was not re-read against that run. For this round, each of 1–114 was read here against both parts
     of your answer, and the off-list items at the head of §2 are the result. 115–274 came from building part 2, after
     it.

### 3 · What is not built from part 1 or part 2, and where a build departs from your words

**Not built:**
- **Part 1 #16** (his typed counts read as set by hand, with `r87q`'s row). It waits for Sean's answer to plan 015's For
  Sean #2 (§1 d). Nothing in your answer is waiting on us.
- **Part 1 *For implementation* 3 and part 2 *For implementation* 6.** These are your words for Sean: #9, #11, #13, #14,
  #95 and #88. They are in `limbo-app`'s *Waiting on Sean*, but whether a send note told him is not written down. Your
  #11's question for him is carried, not asked yet as far as the records show.

**Built otherwise than your words.** Each was found while building, written into the commit, and is asked in §2. Say
which way, and it changes.
- **#29, the pour's help** (`ROUND-89-PART-2.md:206–207`, *"shown filled or blank, the same for every product"*). It is
  built only where blank really counts by the kind's pour. There is none on a keg, a 1 L tonic or a wine with no bottle
  size, where part 1 #4 counts otherwise and the sentence would be false (§395 fix 10, design F3). Item 222.
- **#67, `15, on one line, every red`** (`:263`). At 320 the red wraps to two lines rather than run out of its button.
  Item 241.
- **#26, `Built in` in place of Delete** (`:197`). It shows in the list's line two (`· built in`, as `r89r` 2 draws it)
  and in the style page's foot. Item 205. And the style's own control is the managed list's `Remove`, not Delete.
  Item 206.
- **#91, `billed as Bacardi`** (`:66–67`; the README's `billed as {Bacardi}`). It shows the line's full name, `billed as Bacardi Superior`, because the
  app has no shorter name. Item 129.
- **#126's *"one Undo step"*** (`:293–294`). It is the toast's Undo, and not on the Undo list. Item 251.
- **#41's frame** (`r89s`). The held row's 2px `--accent` box is not built, because your rename ruling says *"No box
  appears — the row is already a box."* (`ROUND-32.md:148–149`, cited in the code as §46.2b). Item 240.
- **W13's *"already at the 86dvh cap"*** (`:121–122`). Read as the card at the cap, not the editor. Item 229.
- **#18 in packing mode.** Procurement stays first, as `HANDOFF.md:4643–4644` rules. ⛔ Item 182.
- **#37 and #38 as ruled still leave cases.** 11 of 71 phone printouts still print a little small (93.77%–98.86%; they
  were at 66.67%), and the French 75's champagne can print in two Separate tables on two sheets. Items 257 and 264.

**Where a frame and the prose differ, the prose was built** (your README: *"Where a frame and the prose differ, the
prose wins."*):
- `r89u`/`r89v`'s sent line at 13 `--text-muted` (prose 15, item 244);
- `r89q`'s pen line, subtitle, `Use the calculator’s number`'s look, the info rows and Price history (item 193);
- `r89i`–`r89k`'s arithmetic (item 143);
- `r89j`'s plain `New` (item 138);
- the taken-off line's 14 and #474239 (item 137);
- `r89r`'s crowd-style names other than Cocktail-forward, which are drawing shorthand — #27 drops only *(typical
  Limbo)*.

Two frame details were kept as already built (`r87v`): `r89w` 4's switch label `Save its cocktail menu too`, where the
built label is `Include the cocktail menu` (item 252), and `r89w` 1's summary order (item 253).

### 4 · What his iPad still owes

- **Your checks, none ticked yet** (`IPAD-CHECKS.md` at `ad8c680`):
  - Round 88's 27.30 (card to editor and back), 27.31 (a long trail on the phone) and 27.47 (the same time twice, with
    `Use 24 hours`). 27.46, the note turning round, is marked skip since your §0 a turned it the other way.
  - Part 1's 28.1 (a typed 6 holds, with `Use 5`), 28.6 (two blocks, 8 hours), 29.1 (`Follow the crowd style`) and
    29.2 (Crowd style under the bar times).
  - Part 2 asks for none.
- **Sessions 27–31** come to 116 checks (27 has 48, 28 has 9, 29 has 10, 30 has 23, 31 has 26). The file holds **267 to
  do, out of 303**: 266 open, 1 partly, 18 done, 18 skipped (`grep -E '^### \['`). The last one ticked is still 23.3.
  His first check after the reload is 31.1, Settings › The calculator. It also shows the two things only his account can
  say (§1 d).
- **Sessions 23–27**, promised in Round 88 and Round 89, still haven't come back.
- Every screen measurement here is Chrome's or Chromium's. Nothing was printed on an iPad or on a real printer.

## What I need back

0. ⛔ **Money, live now — his number on a swap's split (§2 d).**
   - 268: `0 × $35.00` on the client's copy, three ways. That is your #96 against #145, and it is on his paper.
   - 272: the bottle's row and his row show splits that need not add to the count.
   - Then 267 (`Use` chooses the whole bottle), 273 (#96 and #145 against Round 87 §4 a's 🔧), 269 and 270.
1. ⛔ **Money, live now — the pie at Update (§2 b).**
   - 30: every drink in a kind at 0, live on our provisional; Batch C shipped on your part 1, which doesn't settle it.
   - 29: grow, our reading of your #6, to confirm.
   - Then 85 (a converted pin against made room), 87 (`Just added` with no Update on record), 83 (made room after Undo),
     18 (an old 0% invoice), 80 (a Duplicate's crowd style), 111 (a hidden line), 112 (on hand beside bought) and 20 (a
     service line as a drink).
2. ❓ **Money, live now — the swap and the pours** (§2 d, §2 f): 119 (his own old-bottle line stays billed for no drink),
   136 (#95 against #9), 130 (#95 beside a moving swap), 219 (no bounds on a pour) and 223 (a can with no size ignores
   its pour).
3. ⛔ **182, packing mode's order.** Procurement stays first by `HANDOFF.md:4643–4644`. Does #18 reach it?
4. ❓ **Please draw: new parts, states and paths, each naming the frame it extends.**
   - 256: the Separate table's head (`r88f` 1).
   - 265: his held row on a swap's split (`r87q`, `r87g`).
   - 202: the switch moving two rows under his finger (`r89q`).
   - 109: the pie at phone width (`r87i` 2–5, `r89d`).
   - 207: Settings › The calculator at phone width (`r89r`, `r87k` 10).
   - 86: a served kind left at 0% (`r89d` 3–4, `r87l` d).
   - 159 with 172: the two-row box with no count (`r89o`, `r87o` 2).
   - 199: a swap row's parts, or say none (`r89k`).
   **Accept as built, or draw:** 121 (`4 → —`), 122 (a free line alone), 123 (`Still comped` beside a line coming off),
   186 (a swapped bottle's switch) and 244 (the sent line at 320–430).
5. ❓ **§3's departures from your words — say which way:** 222 (#29's help), 241 (#67 at 320), 205 (#26's `Built in`),
   206 (#26's Delete, built as Remove), 129 (#91's name), 251 (#126's Undo), 240 (#41's box) and 229 (W13's cap). Two
   printouts are left by #37–#38 as ruled: 257 and 264.
6. ❓ **The rest, by surface:**
   - Event details and the calculator's hours and guests: 4, 10, 11, 12, 35, 45–49, 51, 56–59, 62, 68, 69, 102–104, 171,
     173, 174, 176, 177, 232, 235 and 236.
   - The pie: 19, 21–24, 26, 27, 81, 88, 91, 93 (with 22 and 200), 95, 96 (with 79), 98, 99, 101 and 105–107.
   - The calculator's words: 73, 76, 78, 79, 153, 170, 175 and 179.
   - The swap's rows: 131, 134, 137–142, 144–147 and 169.
   - The Builder's line and the panel: 180, 187, 190, 191, 198, 200, 201, 203 and 228.
   - Settings: 215, 217 and 226.
   - The estimate: 243 and 248 (a trade for you and Sean).
   - Templates: 254.
   - The paper: 255 and 260–263.
7. **Every told** — 129 of them, each marked in §2. Object to any. Your part 2's blanket acceptance (`:11–13`) reached
   Round 89's items, not these.
8. **Off the list:** 2, 9, 15, 17, 25, 50, 53, 75, 114, 178 and 194, each with the answer that settled it at the head of
   §2. Say if any isn't settled.
9. **His Sessions 23–31** come back in a later round. Your checks among them are §4's.

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

## Older rounds — Round 86 and earlier are in `REQUESTS-ARCHIVE.md`

Moved there on 12 Oct 2026 at Design's request: this file had reached 1.07 MB, too large for Design to copy in or search. Nothing was edited — the archive holds them byte for byte as they stood here at `bd0d234`. Lines 1–2874 of this file kept their numbers at the split (`0f4c0d0`); each round written since goes in above the last and moves the lines below it, so a `REQUESTS.md:NNNN` is read at the commit it was written at. A `REQUESTS.md:NNNN` above 2874 written before the split is line NNNN − 2864 in the archive. **Round 76 followed on 20 Oct 2026**, to keep this file under 500 KB — whole and unedited, at the top of the archive's rounds, above Round 75. Its 292 lines moved the archive's down, so from then that pre-split line was NNNN − 2572 there, and an archive line cited before 20 Oct was that number + 292. **Rounds 78 and 77 followed at Round 88, the same day**, for the same reason — whole and unedited, at the top of the archive's rounds, above Round 76. Their 564 lines moved the archive's down again, so from Round 88 until Round 89 that pre-split line was NNNN − 2008 there, and an archive line cited at limbo-design `4c60bce` or before was that number + 564 (+ 856 if it was cited before 20 Oct). **Rounds 82, 81, 80 and 79 followed at Round 89, 23 Oct**, for the same reason — whole and unedited, at the top of the archive's rounds, above Round 78. Their 1826 lines moved the archive's down again, so from Round 89 until Round 90 that pre-split line was NNNN − 182 there, and an archive line cited from Round 88 to limbo-design `05cbb50` was that number + 1826 (+ 2390 if it was cited from 20 Oct to `4c60bce`, + 2682 if before 20 Oct). **Rounds 86, 85, 84 and 83 followed at Round 90, 25 Oct**, for the same reason — whole and unedited, at the top of the archive's rounds, above Round 82. Their 1770 lines moved the archive's down again, so since Round 90 that pre-split line is NNNN + 1588 there, and an archive line cited from Round 89 to limbo-design `f714fde` is that number + 1770 (+ 3596 if it was cited from Round 88 to `05cbb50`, + 4160 if from 20 Oct to `4c60bce`, + 4452 if before 20 Oct). *(This heading read "Round 75 and earlier" until 20 Oct, "Round 76 and earlier" from Round 87 until Round 88, "Round 78 and earlier" from Round 88 until Round 89, and "Round 82 and earlier" from Round 89 until Round 90.)*
