# CareerConnect — Team Dashboard

A lightweight **Sprint 3 command center** for SOEN 341 Team 01, managed separately from the CareerConnect application.

**Source project (private):** [EdishAdventure/SOEN341-2026-Team01](https://github.com/EdishAdventure/SOEN341-2026-Team01)  
**Dashboard repository:** [EdishAdventure/CareerConnect-Team-Dashboard](https://github.com/EdishAdventure/CareerConnect-Team-Dashboard)  
**Sprint deadline:** November 16, 2026; internal release November 15.

## Features

- Four official Sprint 3 outcomes on the Overview, with expandable detail
- Daily roadmap (November 3–16) with clickable tasks and milestones
- A **My Work** view for Jiaju, Chloe, Brandon, Maria, Kayla and Annik
- Team responsibilities and expandable collaboration handoffs
- Schedule health comparing planned vs. closed and verified work
- Workstreams, issue deep links, PR/CI health, and acceptance-test evidence
- Read-only GitHub sync via Cloudflare Worker; manual sync and 10-minute polling

## Files

```text
public/
  index.html       Dashboard shell
  styles.css       Responsive styles
  snapshot.js      November 3 issue snapshot (public by owner choice)
  app.js           Dashboard interactions and schedule model
  favicon.svg      Site icon
worker.js          GitHub integration API with verified Access JWT
wrangler.toml      Cloudflare Workers deployment configuration
SYNC_SETUP.md      Deploy, authenticate, and connect live sync
```

## Quick start

```bash
npm run check
npx wrangler deploy
```

For automated GitHub-to-Cloudflare deployment, connect this repository's `main` branch in the Cloudflare dashboard. Follow **[SYNC_SETUP.md](SYNC_SETUP.md)** to protect the dashboard with Cloudflare Access and add the read-only GitHub token.

**The website is not live merely because these files are in GitHub.** Cloudflare must be connected and Access configured. Until then, open `public/index.html` locally as a November 3 snapshot.

## Privacy and security

This repository is **public, as authorized by its owner**, and therefore the historical assignment data in `public/snapshot.js` is public. The original CareerConnect repository remains private. Live private data is returned only by a Worker endpoint requiring a valid Cloudflare Access JWT, and its GitHub token belongs in a Worker secret, never in source.

## Team workflow

GitHub is the source of truth. Everyone updates issues and PRs in the CareerConnect repository. The dashboard provides a read-only view of what is due, assigned, verified, and blocked. Completed acceptance tests require recorded evidence; closing a task alone is not equivalent to a passed acceptance test.
