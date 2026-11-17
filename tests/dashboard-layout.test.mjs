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

test('Sprint 4 baseline has six owners with 68 unique child story points',()=>{
  assert.equal(config.deadline,'2026-11-30');
  assert.equal(config.freeze,'2026-11-25');
  assert.equal(Object.keys(config.baselineSP).length,6);
  assert.equal(Object.values(config.baselineSP).reduce((a,b)=>a+b,0),68);
  assert.deepEqual(Object.entries(config.baselineSP).sort(([a],[b])=>a.localeCompare(b)),
    Object.entries({EdishAdventure:12,ElSnoozer:12,bthorng:11,mzllo:11,mariaacelena:12,KaylaKOUM:10}).sort(([a],[b])=>a.localeCompare(b)));
});

test('all and only 20 Sprint 4 child issues have estimates and correct one-parent grouping',()=>{
  const ids=Array.from(config.groups).flatMap(group=>Array.from(group.tasks));
  assert.equal(config.groups.length,5);
  assert.equal(ids.length,20);
  assert.equal(new Set(ids).size,20);
  assert.deepEqual(Object.keys(config.taskSP).map(Number).sort((a,b)=>a-b),ids.sort((a,b)=>a-b));
  assert.equal(Object.values(config.taskSP).reduce((a,b)=>a+b,0),68);
  assert.equal(snapshot.items.length,23);
  assert.deepEqual(Array.from(snapshot.items.filter(i=>i.kind==='acceptance'),i=>i.number).sort((a,b)=>a-b),[239,240]);
  assert.deepEqual(Array.from(snapshot.items.filter(i=>i.kind==='tracker'||i.kind==='story'),i=>i.number).sort((a,b)=>a-b),[218,219,220]);
  assert.ok(snapshot.items.every(i=>i.state==='open'));
});

test('Sprint 4 task points match individual planned ownership exactly',()=>{
  for(const [login,estimate] of Object.entries(config.baselineSP)){
    const mine=snapshot.items.filter(i=>i.owner===login && Object.hasOwn(config.taskSP,i.number));
    assert.equal(mine.reduce((sum,i)=>sum+config.taskSP[i.number],0),estimate,
      'planned assignment mismatch: '+login);
  }
});

test('active dashboard shows Sprint 4 dates and historical Sprint 3 switcher',()=>{
  assert.deepEqual(Object.keys(config.dailyPlan).map(Number),Array.from({length:14},(_,i)=>i+17));
  assert.equal(config.milestones.at(-1).iso,'2026-11-30');
  assert.ok(config.milestones.some(x=>x.iso==='2026-11-25' && /freeze/i.test(x.title)));
  assert.match(html,/Sprint 04/);
  assert.match(html,/sprint3\/index\.html/);
  assert.match(html,/Sprint 03 · History/);
  assert.match(html,/SPRINT 4/);
  assert.match(app,/NOVEMBER 17–30/);
  assert.match(app,/Feature freeze Nov 25/);
  assert.doesNotMatch(html,/Sprint 3 evaluation deadline|<strong>Sprint 03<\/strong>|sidebar-notice-big">Nov 16/);
  assert.doesNotMatch(app,/Sprint 3|Nov 3–16|NOVEMBER 3–16|Nov 16/);
});

test('posting, matching, static and release handoffs resolve to assigned owners',()=>{
  const flows=Object.fromEntries(config.collaboration.map(x=>[x.id,x]));
  const who=step=>step.task?snapshot.items.find(i=>i.number===step.task)?.owner:step.login;
  assert.deepEqual(Array.from(flows.posting.steps,who),['ElSnoozer','ElSnoozer','ElSnoozer','KaylaKOUM']);
  assert.deepEqual(Array.from(flows.matching.steps,who),['EdishAdventure','bthorng','EdishAdventure','mariaacelena']);
  assert.deepEqual(Array.from(flows.quality.steps,who),['mariaacelena','bthorng','mariaacelena']);
});

test('quality view contains new acceptance tests, backend CI and six-member documentation',()=>{
  const q=app.slice(app.indexOf('function renderQuality()'),app.indexOf('function renderTimeline()'));
  assert.match(q,/239/);
  assert.match(q,/240/);
  assert.match(q,/233/);
  assert.match(q,/236/);
  assert.match(q,/Closure is not proof of PASS/);
  for(const n of [231,232,233,234,235,236,237,238]) assert.match(q,new RegExp('num:'+n+'\\b'));
  assert.match(q,/quality-hub section/);
  assert.match(q,/quality-at-list/);
  assert.match(q,/quality-activities-grid/);
  assert.match(q,/Verification/);
  assert.match(q,/Engineering quality/);
  assert.match(q,/Release readiness/);
  assert.doesNotMatch(q,/at-grid section|release-list|release-row/);
  assert.doesNotMatch(q,/US-04 carryover|#107 and #108/);
});

test('sprint selector is anchored to the top-left dropdown, not separate buttons',()=>{
  assert.match(html,/<details class="sprint-picker">/);
  assert.match(html,/<summary class="workspace-select"/);
  assert.match(html,/<nav class="sprint-picker-menu" aria-label="Sprint selection">/);
  assert.match(html,/src="sprint-picker.js"/);
  assert.doesNotMatch(html,/class="sprint-switch"/);
  assert.match(css,/\.sprint-picker-menu\{/);
  assert.match(css,/\.sprint-picker > summary\.workspace-select:focus-visible/);
  assert.doesNotMatch(css,/\.sprint-switch\{/);
});

test('regression and release activities use a readable full-width responsive layout',()=>{
  const q=app.slice(app.indexOf('function renderQuality()'),app.indexOf('function renderTimeline()'));
  assert.match(q,/quality-panel/);
  assert.match(q,/quality-group-count/);
  assert.match(q,/quality-task-bottom/);
  assert.match(css,/\.quality-hub\{display:grid;grid-template-columns:minmax\(0,1fr\)/);
  assert.match(css,/\.quality-activities-grid\{display:grid;grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
  assert.match(css,/@media\(max-width:860px\)\{\.quality-activities-grid\{grid-template-columns:1fr\}/);
});

test('insights is separate, overview uncluttered and layout unchanged',()=>{
  assert.match(html,/data-view="insights"/);
  assert.match(app,/function renderInsights\(\)/);
  assert.match(app,/insights:renderInsights/);
  assert.match(app,/function renderOverview\(\)/);
  assert.match(app,/overview-top-grid/);
  assert.match(app,/overview-middle-grid/);
  assert.doesNotMatch(html,/density-compact|density-toggle/);
  assert.doesNotMatch(css,/\.density-compact/);
});

test('Team shows remaining assigned SP rather than historical baseline',()=>{
  const section=app.slice(app.indexOf('function renderTeam()'),app.indexOf('function renderQuality()'));
  assert.match(section,/remainingTotal/);
  assert.match(section,/remaining.*SP/);
  assert.doesNotMatch(section,/baselineTotal|currentAllocation|team-reassignment-note|baselineSP/);
});
