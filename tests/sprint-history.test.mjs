import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const root = new URL('../',import.meta.url);
const read = path => readFileSync(new URL(path,root),'utf8');
const historicContext={window:{}};
runInNewContext(read('public/sprint3/snapshot.js'),historicContext);
const archive=historicContext.window.SPRINT_CONFIG;
const archiveSnapshot=historicContext.window.SPRINT_SNAPSHOT;
const activeContext={window:{}};
runInNewContext(read('public/snapshot.js'),activeContext);
const active=activeContext.window.SPRINT_CONFIG;
const archiveHTML=read('public/sprint3/index.html');
const activeHTML=read('public/index.html');
const oldApp=read('public/sprint3/app.js');
const worker=read('worker.js');

test('both Sprint 3 history and active Sprint 4 remain accessible',()=>{
  assert.match(activeHTML,/href="\/sprint3\/index\.html"/);
  assert.match(archiveHTML,/href="\/"/);
  assert.match(activeHTML,/<span>Sprint 04<\/span><small>Active/);
  assert.match(archiveHTML,/<span>Sprint 03<\/span><small>History/);
  assert.match(archiveHTML,/Sprint 3 deadline · historical/);
  assert.equal(archive.deadline,'2026-11-16');
  assert.equal(active.deadline,'2026-11-30');
  for(const page of [activeHTML,archiveHTML]){
    assert.match(page,/<details class="sprint-picker">/);
    assert.match(page,/<summary class="workspace-select"/);
    assert.match(page,/<nav class="sprint-picker-menu"/);
    assert.doesNotMatch(page,/class="sprint-switch"/);
  }
  assert.match(activeHTML,/src="sprint-picker.js"/);
  assert.match(archiveHTML,/src="\.\.\/sprint-picker.js"/);
});

test('historical Sprint 3 keeps its original roadmap and task baseline',()=>{
  assert.equal(archive.groups.length,9);
  assert.equal(Object.values(archive.baselineSP).reduce((sum,n)=>sum+n,0),89);
  assert.equal(Object.values(archive.taskSP).reduce((sum,n)=>sum+n,0),89);
  assert.equal(Array.from(archive.groups).flatMap(g=>Array.from(g.tasks)).length,27);
  assert.ok(Array.from(archiveSnapshot.items).some(i=>i.number===26));
  assert.ok(Array.from(archiveSnapshot.items).some(i=>i.number===154));
  assert.deepEqual(Object.keys(archive.dailyPlan).map(Number),Array.from({length:14},(_,i)=>i+3));
});

test('Sprint 3 page loads only historical configuration, not Sprint 4 static data',()=>{
  assert.match(archiveHTML,/src="snapshot\.js"/);
  assert.match(archiveHTML,/src="app\.js"/);
  assert.match(archiveHTML,/src="\.\.\/ownership\.js"/);
  assert.match(archiveHTML,/href="\.\.\/styles\.css"/);
  assert.match(archiveHTML,/href="\.\.\/favicon\.svg"/);
  assert.doesNotMatch(archiveHTML,/src="\.\.\/snapshot\.js"/);
  assert.match(oldApp,/fetch\('\/api\/overview\?sprint=3'/);
});

test('both history and live Sprint 4 sync remain Cloudflare Access protected',()=>{
  assert.match(worker,/verifyCloudflareAccess\(request, env\)/);
  assert.match(worker,/SPRINT3_NUMBERS/);
  assert.match(worker,/sprintParam === '3'/);
  assert.match(worker,/archived \? SPRINT3_NUMBERS : NUMBERS/);
  assert.match(worker,/reason:'historical_project_cards_archived'/);
  assert.match(worker,/boardStatus:archived \? 'Archived'/);
});

test('no historical Sprint 3 issue points contaminate current sprint estimates',()=>{
  assert.equal(active.groups.length,5);
  assert.equal(Object.values(active.taskSP).reduce((sum,n)=>sum+n,0),81);
  const nowIDs=new Set(Array.from(active.groups).flatMap(g=>Array.from(g.tasks)));
  const previousIDs=new Set(Array.from(archive.groups).flatMap(g=>Array.from(g.tasks)));
  for(const id of nowIDs) assert.equal(previousIDs.has(id),false,'Cross-sprint task '+id);
  assert.equal(activeContext.window.SPRINT_SNAPSHOT.items.length,27);
});
