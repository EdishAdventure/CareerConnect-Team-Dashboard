# GitHub live sync & Cloudflare deployment

This project is a **read-only two-sprint dashboard**: archived Sprint 3 (November 3–16) and active Sprint 4 (November 17–30, 2026). The GitHub repository containing this code is public by owner choice. The **original CareerConnect repository and its issue details are private**, so live API access must be protected.

## 1. GitHub source (already added)

- Dashboard source: `public/index.html`, `public/styles.css`, `public/snapshot.js`, `public/app.js`
- Backend: `worker.js` — **read-only** GitHub REST + optional Projects GraphQL
- Cloudflare configuration: `wrangler.toml`
- No GitHub token or secret is included in source.

The static `snapshot.js` includes a November 17, 2026 **Sprint 4 planning baseline** for the 23 new issues (#218–#240), including their six owners, provisional 68 unique child SP, and internal dates. **This is public once merged into this public repo**, as explicitly authorized. New private issue changes flow only through the authenticated API after deployment.

## 2. Connect to Cloudflare

1. In the Cloudflare dashboard, go to **Workers & Pages** → **Create / Import repository** (wording may vary).
2. Connect GitHub and select `EdishAdventure/CareerConnect-Team-Dashboard`.
3. Select `main`, root directory `/`, and Worker deployment command `npx wrangler deploy` if prompted.
4. Deploy and confirm the site loads. Future merges to `main` can trigger automatic deploys once the Git integration is active.

**Important:** Deploying the website does not automatically configure private GitHub sync or team access.

## 3. Protect the live private API

Keep the public dashboard root available if desired, but create a Cloudflare Zero Trust **Access application** protecting the **exact dashboard hostname with path `/api/*`** (and protect any alternate `workers.dev` / preview URLs that serve the same private API). Create an allow policy for the authorized teammates and TA. Test incognito and confirm an unauthenticated user cannot access `/api/overview`.

### Public Access configuration (persisted across deploys)

**Important:** The two nonsecret Access verification values are now declared in `wrangler.toml` under `[vars]`:

- `ACCESS_TEAM_DOMAIN`: your Zero Trust team domain (`.cloudflareaccess.com`).
- `ACCESS_AUD`: your application Audience (AUD) tag.

They match the Access application configured on November 3, 2026 and will be re-applied on every Cloudflare Git deployment. If you replace the Access application or team domain, update `wrangler.toml` in GitHub accordingly. **Do not rely on editing these two plain-text variables only in the Cloudflare dashboard**, since `wrangler deploy` overwrites ordinary dashboard variables not committed in Wrangler. The Access audience and team-domain identifiers are not credentials.

**Encrypted secrets remain configured only in the Cloudflare Worker dashboard:**

- `GITHUB_TOKEN`: **Secret**, with read-only access to `EdishAdventure/SOEN341-2026-Team01`.
- `GITHUB_PROJECTS_TOKEN`: optional **Secret** for the user-owned Project V2 board (see below).

Never commit the GitHub token values to `wrangler.toml`, frontend files, or GitHub Actions.

### Diagnose a sync regression after deployment

1. If the dashboard switches to **GitHub snapshot** and the API reports `Cloudflare Access verification is not configured`, check that the latest deployment includes both `[vars]` entries in `wrangler.toml`; redeploy `main` if needed.
2. A `Cloudflare Access login required` response means the Worker received the two values, but no valid Access JWT was provided. Authenticate through the protected `/api/overview` URL, or confirm Cloudflare Access is enforcing the intended `/api/*` route.
3. If `GitHub token is not configured` appears **after successful Access authentication**, check whether `GITHUB_TOKEN` still exists as a Cloudflare Worker **Secret**; do not send its value to anyone.
4. An authenticated JSON payload containing `items` and `source: "live"` means synchronization works. Refresh the dashboard page and click **Sync now**.

The API validates the **Cloudflare Access JWT signature and audience** independently. With `ACCESS_TEAM_DOMAIN` or `ACCESS_AUD` unset, `/api/overview` intentionally refuses to serve private data.

To set the GitHub token via Wrangler:

```bash
npx wrangler secret put GITHUB_TOKEN
```

Alternatively, use **Settings → Variables and Secrets** in Cloudflare. Do not commit the token or put it in a browser-visible file.

### GitHub token scope

Use a fine-grained token restricted to the original private CareerConnect repository; give it read-only access to **Contents/Metadata, Issues, Pull requests, and Actions**. Keep this token unchanged for issue/PR/CI syncing.

### Optional: show Ready / In Progress / In Review from GitHub Projects

The main repository token usually **cannot read the user-owned GitHub Project V2 board**. This is why you may see “Project Status unavailable” even while the issue sync is live. GitHub's Projects GraphQL documentation specifies a **classic personal access token with `read:project`** for user-owned project queries.

To enable this **optional** feature:

1. Sign in to GitHub as the owner of [CareerConnect Project 1](https://github.com/users/EdishAdventure/projects/1).
2. Go to [GitHub Settings → Developer settings → Personal access tokens (classic)](https://github.com/settings/tokens/new) and create a separate short-lived token. Select only `read:project` initially.
3. In Cloudflare Workers & Pages → `careerconnect-team-dashboard` → **Settings → Variables and Secrets**, add **Secret** `GITHUB_PROJECTS_TOKEN` with this value. Do not add it to `wrangler.toml` or any GitHub file.
4. Re-deploy if prompted, then sign in to the protected API and click **Sync now**. The green sync notice should say **GitHub Project statuses included**.
5. If the board returns *Project Status unavailable*, GitHub may be redacting linked private issue content from the project-only token. Keep the existing task sync operational; use **Open GitHub Project** to see statuses manually. Do not grant broad `repo` permissions just to remove the warning without a separate security review.

The Worker synchronizes **only Sprint 4 issues #218–#240** from the private repository. Earlier Project cards are archived but retained as historical GitHub issues. The Worker uses `GITHUB_PROJECTS_TOKEN` **only for the optional board query**; it continues to use `GITHUB_TOKEN` for private repository issues. GitHub Project status is metadata, not proof of feature completion. Sprint 4 acceptance issues #239 and #240 must contain actual execution outcomes and evidence; the dashboard never infers PASS from closing an issue. All closed GitHub issues, including acceptance-test issues, count toward completed progress. No separate evidence check is used. The board's Project Status remains distinct from GitHub issue open/closed state. A missing board status is displayed as unavailable, never guessed.


**Sprint 4 deployment verification:** After merging, confirm the site displays **Sprint 04**, feature freeze **Nov 25**, deadline **Nov 30**, five workstreams, 20 child issues / 68 SP, and that a signed-in team member can sync issue #220. Publishing the GitHub branch does not alone establish that the workers.dev hostname has been deployed.

## 3A. Sprint navigation and protected historical sync

The root path `/` displays the **active Sprint 4** dashboard by default. The sidebar sprint switcher links to `/sprint3/index.html`, the preserved Sprint 3 UI and original November 3 planning snapshot. The historical page includes a link back to the active sprint. Both pages reuse `public/styles.css` and `public/ownership.js`.

The protected GitHub API accepts two distinct GET routes:

- `/api/overview?sprint=4` (or `/api/overview`): exactly 23 current Sprint 4 issues (#218–#240) with optional current Project V2 Status and latest main CI.
- `/api/overview?sprint=3`: original historical Sprint 3 issue set including carryover acceptance records #107/#108. The former Project cards were intentionally archived and **are not restored to Project #1**. GitHub Issue open/closed state remains readable, while historical Project statuses are labeled **Archived**. The original Sprint 3 issue snapshot is a planning baseline, not a retroactive record of test PASS or completed story-point velocity.

Both API routes still require a **verified Cloudflare Access JWT** and private GitHub repository token; no separate frontend credential is needed. The historical page does not call the active Sprint 4 API.

**Sprint 4 Plan v3:** Jiaju 12 SP, Annik 12 SP, Maria 12 SP, Brandon 11 SP, Chloe 11 SP, Kayla 10 SP. The 68 child points are current-sprint only. The old Sprint 3 89-SP planning baseline is visible only in history.

To verify after Cloudflare deployment, navigate between the sidebar tabs and confirm:
1. Sprint 04 defaults to Nov 17–30, 68 SP, and issues #218–#240.
2. Sprint 03 History shows Nov 3–16, original nine workstreams, archived Project status, and historical issue IDs like #26/#154.
3. Each sprint's **Sync now** updates only its respective issue set; unauthorized requests to either protected API route are rejected.

## 4. Verify live syncing

1. Open the protected dashboard after signing in through Cloudflare Access.
2. Click **Sync now**.
3. Check that the source indicator changes from *GitHub snapshot* to *Live GitHub*, and observe the last sync time.
4. Update a test issue on GitHub and refresh. Use a non-sensitive issue or reversible status change when testing.
5. Verify the dashboard shows new issue status and accurate planned-vs-actual metrics.
6. Close an acceptance-test issue in GitHub and sync again. It counts as completed based on the issue's `closed` state; no `PASS` token or evidence link is parsed.

The site refreshes every 10 minutes while open. Sync is **read-only**: teammates still update GitHub Issues, Project status, and PRs in GitHub.

## Troubleshooting

- **401/403**: Cloudflare Access login/valid JWT required or audience/domain mismatch.
- **503**: GitHub secret or Access JWT verification settings missing.
- **502**: Token lacks access to private repository, GitHub API errors, or rate limit.
- **Project status missing**: the user-owned Project needs an additional scoped classic token with `read:project`. See the optional steps above; issue/PR syncing works without it.
- **Site says snapshot**: not deployed or the live API response did not succeed.

## Security reminders

A public GitHub repository **does not imply** public API access is safe. Never place secrets in `public/`. Protect every available deployment hostname, including preview routes, because otherwise a hostname may bypass Cloudflare Access. All GitHub API calls must be server-side.
