import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const root=new URL('../',import.meta.url);
const runtime={window:{}};
const load=path=>runInNewContext(readFileSync(new URL(path,root),'utf8'),runtime,{filename:path});
load('public/snapshot.js');
load('public/ownership.js');
const own=runtime.window.CareerConnectOwnership;
const config=runtime.window.SPRINT_CONFIG;
const snapshot=runtime.window.SPRINT_SNAPSHOT;

test('Sprint 4 goals resolve canonical parent leadership and QA leads',()=>{
  const posting=config.officialGoals.find(x=>x.id==='posting');
  const matching=config.officialGoals.find(x=>x.id==='matching');
  const verification=config.officialGoals.find(x=>x.id==='verification');
  assert.deepEqual(Array.from(posting.leadStories),[219]);
  assert.deepEqual(Array.from(matching.leadStories),[220]);
  assert.deepEqual(Array.from(verification.leadTasks),[231]);
});

test('feature owner changes are resolved dynamically from current parent issue data',()=>{
  const input=[{number:219,owner:'mzllo'},{number:220,owner:'EdishAdventure'},{number:231,owner:'KaylaKOUM'}];
  assert.deepEqual(Array.from(own.resolveLeads(input,[219],'ElSnoozer')),['mzllo']);
  assert.equal(own.resolveLead(input,220,'ElSnoozer'),'EdishAdventure');
  assert.deepEqual(Array.from(own.resolveLeads(input,[231],'mzllo')),['KaylaKOUM']);
});

test('GitHub live task owners, states and board statuses override static snapshot',()=>{
  const payload={capturedAt:'2026-11-18T20:50:00Z',items:[
    {number:220,assignees:['EdishAdventure'],state:'open',boardStatus:'Ready'},
    {number:221,assignees:['ElSnoozer'],state:'open',boardStatus:'In Progress'},
    {number:231,assignees:['KaylaKOUM'],state:'closed',boardStatus:'Done',closedAt:'2026-11-18T20:50:00Z'}
  ]};
  const merged=own.mergeSnapshot(snapshot,payload);
  assert.equal(merged.items.find(x=>x.number===221).owner,'ElSnoozer');
  assert.equal(merged.items.find(x=>x.number===221).boardStatus,'In Progress');
  assert.equal(merged.items.find(x=>x.number===231).state,'closed');
  assert.equal(merged.items.find(x=>x.number===231).boardStatus,'Done');
  assert.equal(merged.source,'live');
  assert.equal(merged.capturedAt,payload.capturedAt);
});

test('unassigned issue is not silently reassigned to snapshot owner',()=>{
  const merged=own.mergeSnapshot(snapshot,{items:[{number:220,assignees:[],state:'open'}]});
  assert.equal(merged.items.find(x=>x.number===220).owner,null);
  assert.equal(own.resolveLead(merged.items,220,'ElSnoozer'),null);
  assert.deepEqual(Array.from(own.resolveLeads(merged.items,[220],'ElSnoozer')),[]);
});

test('partial sync retains other issue assignments and states',()=>{
  const before=snapshot.items.find(x=>x.number===224);
  const merged=own.mergeSnapshot(snapshot,{items:[{number:220,assignees:['EdishAdventure'],state:'open'}]});
  const after=merged.items.find(x=>x.number===224);
  assert.equal(after.owner,before.owner);
  assert.equal(after.state,before.state);
});

test('HTML imports ownership helpers before main app',()=>{
  const html=readFileSync(new URL('public/index.html',root),'utf8');
  assert.ok(html.indexOf('src="ownership.js"')>0);
  assert.ok(html.indexOf('src="ownership.js"')<html.indexOf('src="app.js"'));
  assert.match(html,/data-view="insights"/);
  assert.doesNotMatch(html,/density-compact|id="density-toggle"/);
});

test('issue closure is progress, not acceptance PASS',()=>{
  assert.equal(own.isComplete({state:'closed',kind:'acceptance',execution:'NOT RUN'}),true);
  assert.equal(own.isComplete({state:'open',kind:'acceptance',execution:'PASS'}),false);
  assert.equal(own.isComplete({state:'open',boardStatus:'Done'}),false);
});

test('acceptance result remains unclaimed by dashboard after live closure',()=>{
  const merged=own.mergeSnapshot(snapshot,{
    items:[{number:239,state:'closed',closedAt:'2026-11-26T17:41:29Z',assignees:['bthorng']}]
  });
  assert.equal(merged.items.find(x=>x.number===239).state,'closed');
  assert.equal(own.isComplete(merged.items.find(x=>x.number===239)),true);
  assert.equal(merged.items.find(x=>x.number===239).execution,undefined);
});
