import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import worker, {projectStatusFromNode,dueDate} from '../worker.js';

const repository='EdishAdventure/SOEN341-2026-Team01';

test('extract live Project Status field for Sprint 4 issue',()=>{
  const node={
    content:{number:228,repository:{nameWithOwner:repository}},
    fieldValues:{nodes:[
      {name:'P0',field:{name:'Priority'}},
      {name:'In Progress',field:{name:'Status'}}
    ]}
  };
  assert.deepEqual(projectStatusFromNode(node),{number:228,status:'In Progress'});
});

test('ignore redacted/unrelated Project items',()=>{
  assert.equal(projectStatusFromNode({content:null}),null);
  assert.equal(projectStatusFromNode({
    content:{number:221,repository:{nameWithOwner:'somebody/else'}},
    fieldValues:{nodes:[{name:'Done',field:{name:'Status'}}]}
  }),null);
});

test('distinguish missing status from Done',()=>{
  assert.deepEqual(projectStatusFromNode({
    content:{number:239,repository:{nameWithOwner:repository}},
    fieldValues:{nodes:[{name:'High',field:{name:'Priority'}}]}
  }),{number:239,status:null});
});

test('parse Sprint 4 dates from the actual task issue body format',()=>{
  assert.equal(dueDate({body:'- Internal due: **November 20, 2026**.'}),'Nov 20');
  assert.equal(dueDate({body:'- Target: **Nov 29, 2026**.'}),'Nov 29');
  assert.equal(dueDate({body:'- Internal due: **November 30, 2026**.'}),'Nov 30');
  assert.equal(dueDate({body:'- Internal due: **November 16, 2026**.'}),null);
  assert.equal(dueDate({body:'No explicit target date.'}),null);
});

test('Worker is scoped to exactly Sprint 4 canonical issue IDs',()=>{
  const source=readFileSync(new URL('../worker.js',import.meta.url),'utf8');
  assert.match(source,/length:23/);
  assert.match(source,/218 \+ i/);
  assert.match(source,/sprint2-ci\.yml\/runs\?branch=main/);
  assert.doesNotMatch(source,/9,13,16,23,26,66,67,107,108/);
});

test('private progress API fails closed without Cloudflare Access config',async()=>{
  const response=await worker.fetch(
    new Request('https://dashboard.example/api/overview'),
    {GITHUB_TOKEN:'test-fake-value'}
  );
  assert.equal(response.status,503);
  const body=await response.json();
  assert.match(body.error,/Access verification is not configured/);
  assert.equal(body.items,undefined);
});

test('dashboard never infers test execution PASS from issue body',()=>{
  const source=readFileSync(new URL('../worker.js',import.meta.url),'utf8');
  assert.doesNotMatch(source,/function executionStatus\(/);
  assert.doesNotMatch(source,/execution:executionStatus\(/);
});
