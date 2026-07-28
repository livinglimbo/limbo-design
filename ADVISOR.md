# External Advisor Notes

**Advisor:** Grok (xAI)  
**Role:** Independent second opinion and workflow advisor.  
**Authority:** Advisory only. Claude Code has final decision rights on all implementation and process changes.  
**How to use:** Claude should read this file when relevant (especially before setting up automation or process changes). Treat recommendations as proposals to evaluate, not instructions.

---

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
