# limbo-design

Design system for **limbo-app**, which lives at `../limbo-app`.

Work is normally driven from that repo — **read `../limbo-app/CLAUDE.md`
first**. It holds the working conventions, the numbered-round protocol, and
current state. This repo is usually a write target rather than a working
directory: `REQUESTS.md` gets appended from the app side, and
`npm run ship` (run in `limbo-app`) commits and pushes both repos together.

Start with `README.md` here for the read order — `REQUESTS.md`, then
`DESIGN.md`, then `DECISIONS.md`.

---

## ⚠️ This repository is PUBLIC — on purpose

`limbo-app` is private; this one is not. It is public so **design tools can
read it cold**, without credentials or an access grant — that is what the
repo is for, and it is why `DESIGN.md` carries real class strings rather
than descriptions.

Being public is a managed decision, not an accident, and the boundaries are
already enforced in `.gitignore`:

- **No credentials of any kind.** `.env*` is excluded and must stay so.
- **No Eyesome font files.** Purchased typeface — `.otf/.ttf/.woff/.woff2`
  are excluded and must not be published. Rendering here falls back to a
  system serif, which is expected. See `fonts/FONTS.md`.
- **Nothing confidential from the business** — client names, supplier
  pricing, invoice totals, anything out of `wishlist-media/`.

`src/styles/globals.css` is copied verbatim from the app and must never be
hand-edited here. The app is the source of truth; `npm run check:tokens`
warns when the two disagree.
