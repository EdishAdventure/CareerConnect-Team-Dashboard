# CareerConnect — Team Dashboard

A separate, read-only progress dashboard for the SOEN 341 CareerConnect project.

> **Setup status (November 3, 2026):** This repository is initialized, but the Sprint 3 dashboard source has intentionally **not** been uploaded. This repository is currently **public**, while the Version 3 dashboard bundle contains assignment and task information obtained from a **private** CareerConnect repository. Do not upload that snapshot until this dashboard repository is private.

## Before importing the dashboard

1. In this repository, open **Settings → General → Danger Zone → Change repository visibility → Make private**.
2. Verify that GitHub displays **Private** by the repository name.
3. Import Version 3 into this repository via a feature branch and pull request. The source bundle contains `public/index.html`, `public/app.js`, `public/styles.css`, `public/snapshot.js`, `public/favicon.svg`, `worker.js`, `wrangler.toml`, `README.md`, and `SYNC_SETUP.md`.
4. In Cloudflare Workers & Pages, connect this repository to a Worker. Set the build root to the directory containing `wrangler.toml` and configure deployment from `main`.
5. Configure **Cloudflare Access** for the *entire deployed hostname*, including `/api/*`, before enabling the private GitHub API integration. Restrict access to the six team members, disable any unprotected alternative workers.dev hostnames, and test in an incognito browser.
6. Add a **read-only** GitHub token for `EdishAdventure/SOEN341-2026-Team01` as a **Cloudflare Worker secret** named `GITHUB_TOKEN`. Never commit a token to GitHub, browser JavaScript, or `.env`.
7. Use **Sync now** on the protected site to retrieve live issue status, task owners, acceptance test execution, PRs, and CI information.

## Intended workflow

- **GitHub is the source of truth.** Teammates update Issues, sub-issues, PRs, test evidence, and Project board status in the CareerConnect project repository.
- **The dashboard is read-only.** It displays the four official Sprint 3 outcomes, personal work queues, daily timeline, shared dependencies, and schedule health.
- **Automatic sync** is designed to refresh every 10 minutes while open. Closed tasks count as complete; acceptance tests additionally require explicit execution evidence.
- **Deployment is separate** from CareerConnect application CI/CD. Dashboard changes should follow a branch → PR → review → merge workflow.

## Security

A private source repository alone does *not* protect a deployed website or its API endpoints. Cloudflare Access must protect all reachable hostnames. Do not add the Worker GitHub token until that protection has been tested. The **main CareerConnect repository should not need code changes** for this dashboard.
