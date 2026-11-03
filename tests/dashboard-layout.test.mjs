import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const base=new URL('../',import.meta.url);
const context={window:{}};
runInNewContext(readFileSync(new URL('public/snapshot.js',base),'utf8'),context);
const config=context.window.SPRINT_CONFIG;
const snapshot=context.window.SPRINT_SNAPSHOT;
const app=readFileSync(new URL('public/app.js',base),'utf8');
const html=readFileSync(new URL('public/index.html',base),'utf8');
const css=readFileSync(new URL('public/styles.css',base),'utf8');

test('approved baseline contains six members with exactly 89 story points',()=>{
  assert.equal(Object.keys(config.baselineSP).length,6);
  assert.equal(Object.values(config.baselineSP).reduce((a,b)=>a+b,0),89);
  assert.deepEqual(Object.entries(config.baselineSP).sort(([a],[b])=>a.localeCompare(b)),
    Object.entries({EdishAdventure:19,ElSnoozer:17,bthorng:17,mzllo:13,mariaacelena:10,KaylaKOUM:13}).sort(([a],[b])=>a.localeCompare(b)));
});

test('all and only 27 approved remaining child tasks have a story-point estimate',()=>{
  const allTaskIds=config.groups.flatMap(group=>Array.from(group.tasks));
  assert.equal(allTaskIds.length,27);
  assert.equal(new Set(allTaskIds).size,27);
  assert.deepEqual(Object.keys(config.taskSP).map(Number).sort((a,b)=>a-b),allTaskIds.sort((a,b)=>a-b));
  assert.equal(Object.values(config.taskSP).reduce((a,b)=>a+b,0),89);
});

test('task SP match the six initial allocation totals',()=>{
  for(const [login,estimate] of Object.entries(config.baselineSP)){
    const assigned=snapshot.items.filter(i=>i.owner===login && Object.hasOwn(config.taskSP,i.number));
    assert.equal(assigned.reduce((sum,i)=>sum+config.taskSP[i.number],0),estimate,
      'planned allocation mismatch for '+login);
  }
});

test('correct AI and recruiter handoff chains are linked to their real owners',()=>{
  const flows=Object.fromEntries(config.collaboration.map(x=>[x.id,x]));
  const loginForStep=step=>step.task?snapshot.items.find(i=>i.number===step.task)?.owner:step.login;
  assert.deepEqual(Array.from(flows.ai.steps,loginForStep),['ElSnoozer','EdishAdventure','KaylaKOUM']);
  assert.deepEqual(Array.from(flows.rec.steps,loginForStep),['mzllo','ElSnoozer','EdishAdventure']);
  assert.equal(flows.ai.steps[1].task,167);
  assert.equal(flows.rec.steps[2].task,169);
});

test('insights is a separate navigation view while overview stays focused',()=>{
  assert.match(html,/data-view="insights"/);
  assert.match(app,/function renderInsights\(\)/);
  assert.match(app,/insights:renderInsights/);
  assert.match(app,/function renderOverview\(\)/);
  assert.match(app,/overview-top-grid/);
  assert.match(app,/overview-middle-grid/);
  assert.match(app,/function focusPanel\(\)/);
});

test('comfortable width restored and compact density overrides removed',()=>{
  assert.doesNotMatch(html,/density-compact/);
  assert.doesNotMatch(html,/density-toggle/);
  assert.doesNotMatch(css,/\.density-compact/);
  assert.match(css,/\.overview-top-grid/);
  assert.match(css,/\.overview-middle-grid/);
});
