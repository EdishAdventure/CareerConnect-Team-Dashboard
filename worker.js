/**
 * CareerConnect Sprint dashboard — read-only GitHub sync endpoint.
 * IMPORTANT: A public source repository is okay, but credentials must live ONLY
 * in Cloudflare Worker secrets, and private API data requires verified Access JWT.
 */
const OWNER = 'EdishAdventure';
const REPO = 'SOEN341-2026-Team01';
const FULL = OWNER + '/' + REPO;
const NUMBERS = new Set([
  9,13,16,23,26,66,67,107,108,151,152,153,154,
  155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,
  170,171,172,173,174,175,176,177,178,179
]);

function apiHeaders(token) {
  return {
    Authorization: 'Bearer ' + token,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'CareerConnect-Team-Dashboard'
  };
}

function decodePart(encoded) {
  const normalized = encoded.replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '='));
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}

async function verifyCloudflareAccess(request, env) {
  const domain = String(env.ACCESS_TEAM_DOMAIN || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
  const expectedAud = String(env.ACCESS_AUD || '');
  if (!domain || !expectedAud || !/^[a-z0-9.-]+$/i.test(domain)) {
    return {ok:false, status:503, message:'Cloudflare Access verification is not configured'};
  }
  const jwt = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!jwt) return {ok:false, status:401, message:'Cloudflare Access login required'};
  try {
    const pieces = jwt.split('.');
    if (pieces.length !== 3) throw Error('Invalid token');
    const header = JSON.parse(new TextDecoder().decode(decodePart(pieces[0])));
    const payload = JSON.parse(new TextDecoder().decode(decodePart(pieces[1])));
    const now = Math.floor(Date.now() / 1000);
    if (header.alg !== 'RS256' || !header.kid || !payload.exp || now >= payload.exp ||
        (payload.nbf && now < payload.nbf) ||
        payload.iss !== 'https://' + domain ||
        !(Array.isArray(payload.aud) ? payload.aud.includes(expectedAud) : payload.aud === expectedAud)) {
      throw Error('Claims did not match');
    }
    const certResponse = await fetch('https://' + domain + '/cdn-cgi/access/certs');
    if (!certResponse.ok) throw Error('Access certificates unavailable');
    const certs = await certResponse.json();
    const jwk = (certs.keys || []).find(k => k.kid === header.kid && k.kty === 'RSA');
    if (!jwk) throw Error('Unknown signing key');
    const key = await crypto.subtle.importKey('jwk', jwk, {name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'}, false, ['verify']);
    const content = new TextEncoder().encode(pieces[0] + '.' + pieces[1]);
    const valid = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, decodePart(pieces[2]), content);
    if (!valid) throw Error('Invalid signature');
    return {ok:true};
  } catch (_) {
    return {ok:false, status:403, message:'Cloudflare Access token is invalid or expired'};
  }
}

async function githubJSON(path, token) {
  const response = await fetch('https://api.github.com' + path, {headers:apiHeaders(token)});
  if (!response.ok) throw Error('GitHub API request failed (' + response.status + ')');
  return response.json();
}

async function allIssues(token) {
  const result = [];
  for (let page = 1; page <= 6; page++) {
    const batch = await githubJSON('/repos/' + FULL + '/issues?state=all&per_page=100&page=' + page, token);
    result.push(...batch.filter(issue => !issue.pull_request && NUMBERS.has(issue.number)));
    if (batch.length < 100) break;
  }
  return result;
}

// User-owned GitHub Projects V2 is queried separately from repository Issues.
// GitHub documents read:project for GraphQL Projects queries. A fine-grained
// repository token may read Issues successfully but not the user's Project.
const projectQuery = `
query SprintProjectStatus($owner:String!, $number:Int!, $after:String) {
  user(login:$owner) {
    projectV2(number:$number) {
      items(first:100,after:$after) {
        pageInfo { hasNextPage endCursor }
        nodes {
          content { ... on Issue { number repository { nameWithOwner } } }
          fieldValues(first:20) {
            nodes {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
                field { ... on ProjectV2FieldCommon { name } }
              }
            }
          }
        }
      }
    }
  }
}`;

export function projectStatusFromNode(node, repository = FULL) {
  if (!node?.content || node.content.repository?.nameWithOwner !== repository) return null;
  const number = Number(node.content.number);
  if (!Number.isSafeInteger(number) || number <= 0) return null;
  const field = (node.fieldValues?.nodes || []).find(
    f => String(f?.field?.name || '').toLowerCase() === 'status' && typeof f?.name === 'string'
  );
  return {number, status:field?.name || null};
}

async function projectStatuses(token) {
  const statuses = new Map();
  let cursor = null;
  for (let page = 0; page < 7; page++) {
    const response = await fetch('https://api.github.com/graphql', {
      method:'POST',
      headers:{...apiHeaders(token), 'Content-Type':'application/json'},
      body:JSON.stringify({
        query:projectQuery,
        variables:{owner:OWNER,number:1,after:cursor}
      })
    });
    if (!response.ok) return {statuses:null,reason:'project_permission'};
    const result = await response.json();
    const items = result.data?.user?.projectV2?.items;
    if (result.errors?.length || !items) return {statuses:null,reason:'project_permission'};
    for (const node of items.nodes || []) {
      const entry = projectStatusFromNode(node);
      if (entry?.status) statuses.set(entry.number,entry.status);
    }
    if (!items.pageInfo?.hasNextPage || !items.pageInfo.endCursor) break;
    cursor = items.pageInfo.endCursor;
  }
  // A board may contain redacted issue nodes when the token has Projects
  // permission but cannot read the linked private repository.
  return statuses.size
    ? {statuses,reason:null}
    : {statuses:null,reason:'project_items_unavailable'};
}

function executionStatus(issue) {
  if (!(issue.labels || []).some(x => x.name === 'acceptance-test') && ![107,108].includes(issue.number)) return null;
  const body = issue.body || '';
  const section = body.split(/## Execution Record/i)[1]?.split(/\n## /)[0] || '';
  const matched = section.match(/(?:\*\*)?(?:Execution status|Status)(?:\*\*)?\s*:\s*(?:\*\*)?\s*(PASS|FAIL|BLOCKED|NOT RUN)\b/i);
  return matched?.[1]?.toUpperCase() || 'NOT RUN';
}

function dueDate(issue) {
  const match = (issue.body || '').match(/(?:Internal due|Target)(?: date)?\s*:?\s*(?:\*\*)?\s*(Nov(?:ember)?\s+\d{1,2})(?:,?\s*2026)?/i);
  if (!match) return null;
  const day = Number(match[1].match(/\d+/)[0]);
  return day >= 3 && day <= 16 ? 'Nov ' + String(day).padStart(2,'0') : null;
}

async function dashboard(token, projectsToken) {
  const [issues, board, prs, runs] = await Promise.all([
    allIssues(token),
    projectStatuses(projectsToken).catch(() => ({statuses:null,reason:'project_unavailable'})),
    githubJSON('/repos/' + FULL + '/pulls?state=open&per_page=35', token).catch(() => []),
    githubJSON('/repos/' + FULL + '/actions/runs?per_page=1', token).catch(() => ({workflow_runs:[]}))
  ]);
  return {
    source:'live',
    capturedAt:new Date().toISOString(),
    boardAvailable:board.statuses !== null,
    boardReason:board.reason,
    items:issues.filter(i => ![107,108].includes(i.number)).map(i => ({
      number:i.number, title:i.title, state:i.state, url:i.html_url,
      assignees:(i.assignees || []).map(u => u.login),
      labels:(i.labels || []).map(l => l.name).filter(Boolean),
      updatedAt:i.updated_at, closedAt:i.closed_at,
      boardStatus:board.statuses?.get(i.number) || null,
      execution:executionStatus(i), due:dueDate(i)
    })),
    carryoverTests:[107,108].map(number => {
      const i = issues.find(x => x.number === number);
      return {number, state:i?.state || 'unknown', execution:i ? executionStatus(i) : 'NOT RUN',
        url:i?.html_url || 'https://github.com/' + FULL + '/issues/' + number};
    }),
    prs:prs.slice(0, 15).map(p => ({number:p.number, title:p.title, url:p.html_url,
      draft:p.draft, createdAt:p.created_at, owner:p.user?.login || 'Unknown'})),
    ci:runs.workflow_runs?.[0] ? {
      name:runs.workflow_runs[0].name,
      status:runs.workflow_runs[0].status,
      conclusion:runs.workflow_runs[0].conclusion,
      updated_at:runs.workflow_runs[0].updated_at,
      url:runs.workflow_runs[0].html_url
    } : null
  };
}

function responseJSON(data, status = 200) {
  return Response.json(data, {status, headers:{
    'Cache-Control':'private, no-store',
    'X-Content-Type-Options':'nosniff',
    'Referrer-Policy':'no-referrer'
  }});
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      if (request.method !== 'GET') return responseJSON({error:'Method not allowed'}, 405);
      if (url.pathname === '/api/health') return responseJSON({status:'ok'}, 200);
      if (url.pathname !== '/api/overview') return responseJSON({error:'Not found'}, 404);
      const verified = await verifyCloudflareAccess(request, env);
      if (!verified.ok) return responseJSON({error:verified.message}, verified.status);
      if (!env.GITHUB_TOKEN) return responseJSON({error:'GitHub token is not configured'}, 503);
      try { return responseJSON(await dashboard(env.GITHUB_TOKEN, env.GITHUB_PROJECTS_TOKEN || env.GITHUB_TOKEN)); }
      catch (_) { return responseJSON({error:'GitHub sync failed. Check the token and repository permissions.'}, 502); }
    }
    return env.ASSETS.fetch(request);
  }
};