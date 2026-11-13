# CareerConnect — Team Dashboard

A lightweight **Sprint 3 command center** for SOEN 341 Team 01, managed separately from the CareerConnect application.

**Source project (private):** [EdishAdventure/SOEN341-2026-Team01](https://github.com/EdishAdventure/SOEN341-2026-Team01)  
**Dashboard repository:** [EdishAdventure/CareerConnect-Team-Dashboard](https://github.com/EdishAdventure/CareerConnect-Team-Dashboard)  
**Sprint deadline:** November 16, 2026; internal release November 15.

## Features

- Four official Sprint 3 outcomes on the Overview, with expandable detail
- Daily roadmap (November 3–16) with planned focus bullets and direct links to update due tasks on GitHub
- A **My Work** view for Jiaju, Chloe, Brandon, Maria, Kayla and Annik, with visible **Update in GitHub** links
- Team responsibility cards with **only up-to-date remaining story points**, calculated from live task assignments and issue closure (no historical comparisons or transfer notices)
- Explicit AI and recruiter-profile handoff sequences, with task-owner links to GitHub
- Dedicated **Insights** page for detailed metrics, workstreams, release gates, and GitHub PR activity
- Team responsibilities and expandable collaboration handoffs
- Schedule health comparing planned vs. closed GitHub issues
- Workstreams, issue deep links, PR/CI health, and acceptance-test issue status
- Read-only GitHub sync via Cloudflare Worker; manual sync and 10-minute polling
- Optional Project V2 board status support via `GITHUB_PROJECTS_TOKEN` with `read:project`

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

## Live ownership and information density

**GitHub Issue assignees are authoritative** for all Sprint 3 tasks and parent stories. The dashboard derives the feature leads, workstream owners, and personal assignments from those records on every successful sync. The local November 3 snapshot is only a fallback when live sync is unavailable. Empty assignee lists display **Unassigned** rather than reviving a former owner.

The dashboard uses the original comfortable typography, sidebar and content widths. Overview is organized into two side-by-side rows (four official outcomes alongside the next release gate; team-wide delivery pace alongside the next team priorities). Detailed workstream/PR/CI metrics are now in **Insights** rather than an oversized Overview disclosure.

## Team workflow

GitHub is the source of truth. Everyone updates issues and PRs in the CareerConnect repository. The dashboard provides a read-only view of what is due, assigned, closed, and blocked. **Any closed GitHub issue counts as completed in the dashboard, including acceptance-test issues.** GitHub Project status remains a separate workflow field. The dashboard does not require screenshot links, an execution result token, or other evidence metadata to recognize completion.

## Updating progress

1. Open **My Work**, select your name, then click **Update** on the assigned task. This opens its actual GitHub issue.
2. Set the GitHub Project column to Ready / In Progress / In Review, create the PR and link it to the issue. Close the issue after the team accepts the deliverable.
3. For acceptance-test issues, prepare and run the required tests, then close the issue when the team considers that work complete. The dashboard counts this closure without requiring a separate `PASS` value or evidence attachment. This does not waive course-required acceptance tests or AI usage documentation.
4. Return to the dashboard and click **Sync now**. Issue closures sync with the existing read-only repository token; intermediate Project columns require optional Projects permissions.

The daily focus bullets are **proposed milestones, not clickable completion checkboxes**. Statuses are not editable from the dashboard, by design.
