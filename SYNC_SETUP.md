# GitHub live sync & Cloudflare deployment

This project is a **read-only** Sprint 3 dashboard. The GitHub repository containing this code is public by owner choice. The **original CareerConnect repository and its issue details are private**, so live API access must be protected.

## 1. GitHub source (already added)

- Dashboard source: `public/index.html`, `public/styles.css`, `public/snapshot.js`, `public/app.js`
- Backend: `worker.js` — **read-only** GitHub REST + optional Projects GraphQL
- Cloudflare configuration: `wrangler.toml`
- No GitHub token or secret is included in source.

The static `snapshot.js` includes a November 3, 2026 snapshot of task titles, assignees, and planning details. **This is public once merged into this public repo**, as explicitly authorized. New private issue changes flow only through the authenticated API after deployment.

## 2. Connect to Cloudflare

1. In the Cloudflare dashboard, go to **Workers & Pages** → **Create / Import repository** (wording may vary).
2. Connect GitHub and select `EdishAdventure/CareerConnect-Team-Dashboard`.
3. Select `main`, root directory `/`, and Worker deployment command `npx wrangler deploy` if prompted.
4. Deploy and confirm the site loads. Future merges to `main` can trigger automatic deploys once the Git integration is active.

**Important:** Deploying the website does not automatically configure private GitHub sync or team access.

## 3. Protect the entire deployed website

Create a Cloudflare Zero Trust **Access application** for the dashboard hostname (and disable or protect any alternate `workers.dev` / preview URLs). Create an allow policy for the six authorized team members. Test from an incognito browser and confirm an unauthenticated user cannot access `/api/overview`.

In the Cloudflare Worker settings, add the following environment variables:

- `ACCESS_TEAM_DOMAIN`: your Access team domain such as `yourteam.cloudflareaccess.com` (no `https://`).
- `ACCESS_AUD`: the **Application Audience (AUD) tag** from the Access application.
- `GITHUB_TOKEN`: **secret**, with read-only access to `EdishAdventure/SOEN341-2026-Team01`.

The API validates the **Cloudflare Access JWT signature and audience** independently. With `ACCESS_TEAM_DOMAIN` or `ACCESS_AUD` unset, `/api/overview` intentionally refuses to serve private data.

To set the GitHub token via Wrangler:

```bash
npx wrangler secret put GITHUB_TOKEN
```

Alternatively, use **Settings → Variables and Secrets** in Cloudflare. Do not commit the token or put it in a browser-visible file.

### GitHub token scope

Use a fine-grained token restricted to the original private CareerConnect repository; give it read-only access to **Contents/Metadata, Issues, Pull requests, and Actions**. GitHub Projects V2 status is optional and may require additional GraphQL/Project permission. Without that permission, the dashboard still syncs issues and PRs, but Project Status fields will be unavailable.

## 4. Verify live syncing

1. Open the protected dashboard after signing in through Cloudflare Access.
2. Click **Sync now**.
3. Check that the source indicator changes from *GitHub snapshot* to *Live GitHub*, and observe the last sync time.
4. Update a test issue on GitHub and refresh. Use a non-sensitive issue or reversible status change when testing.
5. Verify the dashboard shows new issue status and accurate planned-vs-actual metrics.
6. Acceptance tests count as completed only with an explicitly recorded `PASS` in their execution record.

The site refreshes every 10 minutes while open. Sync is **read-only**: teammates still update GitHub Issues, Project status, PRs, and acceptance evidence in GitHub.

## Troubleshooting

- **401/403**: Cloudflare Access login/valid JWT required or audience/domain mismatch.
- **503**: GitHub secret or Access JWT verification settings missing.
- **502**: Token lacks access to private repository, GitHub API errors, or rate limit.
- **Project status missing**: optional GraphQL Project access is unavailable; issue and PR data still work.
- **Site says snapshot**: not deployed or the live API response did not succeed.

## Security reminders

A public GitHub repository **does not imply** public API access is safe. Never place secrets in `public/`. Protect every available deployment hostname, including preview routes, because otherwise a hostname may bypass Cloudflare Access. All GitHub API calls must be server-side.
