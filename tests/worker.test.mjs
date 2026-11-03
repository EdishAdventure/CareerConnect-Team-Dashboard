import test from 'node:test';
import assert from 'node:assert/strict';
import worker, {projectStatusFromNode} from '../worker.js';

const repository = 'EdishAdventure/SOEN341-2026-Team01';

test('extracts the live Status field for an issue in the correct repository', () => {
  const node = {
    content:{number:159,repository:{nameWithOwner:repository}},
    fieldValues:{nodes:[
      {name:'P0',field:{name:'Priority'}},
      {name:'In Progress',field:{name:'Status'}}
    ]}
  };
  assert.deepEqual(projectStatusFromNode(node),{number:159,status:'In Progress'});
});

test('ignores redacted or unrelated board items', () => {
  assert.equal(projectStatusFromNode({content:null}),null);
  assert.equal(projectStatusFromNode({
    content:{number:159,repository:{nameWithOwner:'somebody/else'}},
    fieldValues:{nodes:[{name:'Done',field:{name:'Status'}}]}
  }),null);
});

test('distinguishes an issue with no Status field from a completed issue', () => {
  assert.deepEqual(projectStatusFromNode({
    content:{number:160,repository:{nameWithOwner:repository}},
    fieldValues:{nodes:[{name:'High',field:{name:'Priority'}}]}
  }),{number:160,status:null});
});

test('private progress API fails closed when Access configuration is absent', async () => {
  const response = await worker.fetch(
    new Request('https://dashboard.example/api/overview'),
    {GITHUB_TOKEN:'test-fake-value'}
  );
  assert.equal(response.status,503);
  const body = await response.json();
  assert.match(body.error,/Access verification is not configured/);
  assert.equal(body.items,undefined);
});
