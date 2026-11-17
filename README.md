# CareerConnect — Team Dashboard

A lightweight **Sprint 4 command center** for SOEN 341 Team 01, managed separately from the CareerConnect application.

**Source project (private):** [EdishAdventure/SOEN341-2026-Team01](https://github.com/EdishAdventure/SOEN341-2026-Team01)  
**Dashboard repository:** [EdishAdventure/CareerConnect-Team-Dashboard](https://github.com/EdishAdventure/CareerConnect-Team-Dashboard)  
**Sprint deadline:** **Monday, November 170, 2026**; internal feature freeze **November 25**.

## Sprint 4 scope and dashboard features

- **Deadline:** Monday, November 30, 2026; **feature freeze:** Wednesday, November 25.
- **Five workstreams:** Job Posting v2 (#219), AI Job Matching US-25 (#220), existing-feature regression/US-20 validation, CI/static analysis/PR review, documentation and demo/release.
- **23 canonical Sprint 4 issues:** three parents (#218–#220) and 20 child tasks/acceptance issues (#221–#240).
- **68 unique child SP:** Jiaju 12, Annik 11, Chloe 11, Kayla 11, Maria 11, Brandon 12. Parent issues are roll-ups, not extra points.
- Four overview priorities with live lead/owner mapping, planned dates, remaining effort, and issue deep links.
- A 14-day **November 17–30** roadmap: Nov 18 contracts, Nov 20–21 foundations, Nov 23 posting integration, Nov 24 matching integration, Nov 25 freeze, Nov 26–27 QA, Nov 28–29 audit/rehearsal, Nov 30 deadline.
- My Work, team capacity, workstream, quality/acceptance, timeline and Insights views.
- Issue/PR/CI synchronization through a protected Cloudflare Worker, 10-minute polling and manual refresh.
- Correct Sprint 4 acceptance test issues #239 (posting) and #240 (AI) displayed without falsely claiming PASS.
- Optional GitHub Projects V2 status via a separate read-only Project token.

**Canonical schedule:** [Sprint 4 execution schedule PR #241](https://github.com/EdishAdventure/SOEN341-2026-Team01/pull/241). The dashboard is read-only; source GitHub issues/PRs/CI and executed QA evidence are authoritative. Closed issue = progress tracking completion, **not independently verified acceptance PASS**.

## Files

```text
public/
  index.html       Dashboard shell
  styles.css       Responsive styles
  snapshot.js      November 17 Sprint 4 planning snapshot (public by owner choice)
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

**The website is not live merely because these files are in GitHub.** Cloudflare must be connected and Access configured. Until then, open `public/index.html` locally as a November 17 snapshot.

## Privacy and security

This repository is **public, as authorized by its owner**, and therefore the historical assignment data in `public/snapshot.js` is public. The original CareerConnect repository remains private. Live private data is returned only by a Worker endpoint requiring a valid Cloudflare Access JWT, and its GitHub token belongs in a Worker secret, never in source.

## Live ownership and information density

**GitHub Issue assignees are authoritative** for all Sprint 4 tasks and parent stories. The dashboard derives the feature leads, workstream owners, and personal assignments from those records on every successful sync. The local November 17 snapshot is only a fallback when live sync is unavailable. Empty assignee lists display **Unassigned** rather than reviving a former owner.

The dashboard uses the original comfortable typography, sidebar and content widths. Overview is organized into two side-by-side rows (four official outcomes alongside the next release gate; team-wide delivery pace alongside the next team priorities). Detailed workstream/PR/CI metrics are now in **Insights** rather than an oversized Overview disclosure.

## Team workflow

GitHub is the source of truth. Everyone updates issues and PRs in the CareerConnect repository. The dashboard provides a read-only view of what is due, assigned, closed, and blocked. **Any closed GitHub issue counts as completed in the dashboard, including acceptance-test issues.** GitHub Project status remains a separate workflow field. The dashboard does not require screenshot links, an execution result token, or other evidence metadata to recognize completion.

## Updating progress

1. Open **My Work**, select your name, then click **Update** on the assigned task. This opens its actual GitHub issue.
2. Set the GitHub Project column to Ready / In Progress / In Review, create the PR and link it to the issue. Close the issue after the team accepts the deliverable.
3. For acceptance-test issues, prepare and run the required tests, then close the issue when the team considers that work complete. The dashboard counts this closure without requiring a separate `PASS` value or evidence attachment. This does not waive course-required acceptance tests or AI usage documentation.
4. Return to the dashboard and click **Sync now**. Issue closures sync with the existing read-only repository token; intermediate Project columns require optional Projects permissions.

The daily focus bullets are **proposed milestones, not clickable completion checkboxes**. Statuses are not editable from the dashboard, by design.
