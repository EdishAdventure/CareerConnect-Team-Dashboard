import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const root = new URL('../', import.meta.url);
const runtime = {window:{}};
const load = path => runInNewContext(readFileSync(new URL(path,root),'utf8'),runtime,{filename:path});
load('public/snapshot.js');
load('public/ownership.js');
const own = runtime.window.CareerConnectOwnership;
const config=runtime.window.SPRINT_CONFIG;
const snapshot=runtime.window.SPRINT_SNAPSHOT;

test('Sprint 3 goals declare the GitHub stories that own their leadership',()=>{
  const ai=config.officialGoals.find(x=>x.id==='ai');
  const analytics=config.officialGoals.find(x=>x.id==='analytics');
  const recruiter=config.officialGoals.find(x=>x.id==='recruiter');
  assert.deepEqual(Array.from(ai.leadStories),[26]);
  assert.deepEqual(Array.from(analytics.leadStories),[151]);
  assert.deepEqual(Array.from(recruiter.leadStories),[9,13]);
});

test('feature leadership follows current parent issues after live transfer',()=>{
  const input=[
    {number:9,owner:'mzllo'},
    {number:13,owner:'ElSnoozer'},
    {number:26,owner:'EdishAdventure'},
    {number:151,owner:'ElSnoozer'}
  ];
  assert.deepEqual(Array.from(own.resolveLeads(input,[9,13],'mzllo')),['mzllo','ElSnoozer']);
  assert.deepEqual(Array.from(own.resolveLeads(input,[26],'ElSnoozer')),['EdishAdventure']);
  assert.equal(own.resolveLead(input,151,'mariaacelena'),'ElSnoozer');
});

test('reassigned task and story owners override the local snapshot',()=>{
  const payload={capturedAt:'2026-11-03T20:50:00Z',items:[
    {number:26,assignees:['EdishAdventure'],state:'open'},
    {number:151,assignees:['ElSnoozer'],state:'open'},
    {number:157,assignees:['ElSnoozer'],state:'open'},
    {number:170,assignees:['mariaacelena'],state:'open'}
  ]};
  const merged=own.mergeSnapshot(snapshot,payload);
  assert.equal(merged.items.find(x=>x.number===26).owner,'EdishAdventure');
  assert.equal(merged.items.find(x=>x.number===151).owner,'ElSnoozer');
  assert.equal(merged.items.find(x=>x.number===157).owner,'ElSnoozer');
  assert.equal(merged.items.find(x=>x.number===170).owner,'mariaacelena');
  assert.equal(merged.source,'live');
  assert.equal(merged.capturedAt,payload.capturedAt);
});

test('unassigned issue stays unassigned instead of restoring an outdated owner',()=>{
  const merged=own.mergeSnapshot(snapshot,{items:[{number:26,assignees:[],state:'open'}]});
  assert.equal(merged.items.find(x=>x.number===26).owner,null);
  assert.equal(own.resolveLead(merged.items,26,'ElSnoozer'),null);
  assert.deepEqual(Array.from(own.resolveLeads(merged.items,[26],'ElSnoozer')),[]);
});

test('other assignments and statuses remain unchanged when a sync payload omits an issue',()=>{
  const before=snapshot.items.find(x=>x.number===159);
  const merged=own.mergeSnapshot(snapshot,{items:[{number:26,assignees:['EdishAdventure'],state:'open'}]});
  const after=merged.items.find(x=>x.number===159);
  assert.equal(after.owner,before.owner);
  assert.equal(after.state,before.state);
});

test('HTML imports ownership helpers before main app',()=>{
  const html=readFileSync(new URL('public/index.html',root),'utf8');
  assert.ok(html.indexOf('src="ownership.js"')>0);
  assert.ok(html.indexOf('src="ownership.js"')<html.indexOf('src="app.js"'));
  assert.match(html,/data-view="insights"/);
  assert.doesNotMatch(html,/density-compact/);
  assert.doesNotMatch(html,/id="density-toggle"/);
});
