import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const config = readFileSync(new URL('../wrangler.toml',import.meta.url),'utf8');
function getVar(name) {
  const section = config.split(/^\[vars\]\s*$/m)[1]?.split(/^\[/m)[0]||'';
  return section.match(new RegExp('^'+name+'\\s*=\\s*"([^"]+)"','m'))?.[1]||null;
}

test('Cloudflare Access verifier settings persist across GitHub deployments',()=>{
  const domain=getVar('ACCESS_TEAM_DOMAIN');
  const aud=getVar('ACCESS_AUD');
  assert.match(domain||'',/^[a-z0-9-]+\.cloudflareaccess\.com$/);
  assert.match(aud||'',/^[a-f0-9]{64}$/);
});

test('public Wrangler config never embeds private GitHub credentials',()=>{
  assert.doesNotMatch(config,/^\s*(?:GITHUB_TOKEN|GITHUB_PROJECTS_TOKEN)\s*=/m);
  assert.doesNotMatch(config,/github_pat_[A-Za-z0-9_]+|ghp_[A-Za-z0-9]+/);
});

test('private Worker API still requires Cloudflare Access authentication',()=>{
  const worker = readFileSync(new URL('../worker.js',import.meta.url),'utf8');
  assert.match(worker,/verifyCloudflareAccess\(request, env\)/);
  assert.match(worker,/return responseJSON\(\{error:verified\.message\}, verified\.status\)/);
});
