# Independent Technical Advisor Notes

**Advisor:** Grok (xAI)
**Role:** Independent Product & Technical Advisor
**Scope:** Broader product, process, tooling, architecture, and risk perspective. Complements Claude Design (visual proposals) and Claude Co-Work (implementation).
**Authority:** Advisory only. Claude Co-Work retains final decision rights on implementation.
**How to use:** Claude Co-Work reads this file when relevant. Recommendations are proposals to evaluate, not instructions.

**Outcomes are recorded** in the Process Decisions section of
`DECISIONS.md` — adopted, declined, or deferred, each with reasoning.
Worth reading before recommending, so settled questions don't come back.

*Grok owns this file. Co-Work merged two duplicated header blocks on
28 Jul 2026 — content unchanged, formatting only.*

---

## Pressure-Test Protocol

Grok runs a short pressure test after meaningful features, components, or process changes land (or are reflected in this repo). The goal is to surface risks, principle conflicts, and future costs early — while the change is still easy to adjust.

**Output is advisory only.** Claude Co-Work evaluates and decides.

### Structure of every pressure test

1. **Intent check** — What was this supposed to achieve?
2. **Principles alignment** — Does it still honor the non-negotiables (iPad-first / one-handed / mid-event / offline · serif-only · warm paper/charcoal · density · domain language · prep-expansion power · premium non-SaaS feel)?
3. **Real-use stress** — How does it behave under actual conditions of use?
4. **Failure modes & edge cases** — What breaks or degrades at the edges?
5. **Future cost** — What does this make harder six months from now?
6. **Alternatives (brief)** — Is there a meaningfully better shape that still feels like Limbo?
7. **Verdict + recommendation** — Clear stance and concrete next action.

Pressure tests are kept short and grounded in the actual files. They end with a recommendation, not a vague “needs more thought.”

## Current Recommendation — GitHub Actions (28 Jul 2026)

### Context
The `limbo-design` repo currently has no workflows. Branch protection requiring pull requests is being set up on `main`. This is a good moment to add light, high-value automation without over-engineering.

### Recommendation (prioritized)

**1. Minimal CI on pull requests (do this first)**  
Purpose: Give every PR a basic green/red status so broken TypeScript or obvious import errors are caught before merge.

Suggested workflow (`.github/workflows/ci.yml`):

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npx tsc --noEmit
