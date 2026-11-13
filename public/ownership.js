/* Dynamic ownership: GitHub issue assignees override the frozen planning snapshot. */
(function(root){
'use strict';
function resolveLead(items,storyNumber,fallback){
  const story=items.find(i=>Number(i.number)===Number(storyNumber));
  return story ? (story.owner || null) : (fallback ?? null);
}
function resolveLeads(items,storyNumbers,fallback){
  const matches=storyNumbers.map(id=>items.find(i=>Number(i.number)===Number(id))).filter(Boolean);
  if(!matches.length)return fallback?[fallback]:[];
  return [...new Set(matches.map(i=>i.owner).filter(Boolean))];
}
function isComplete(issue){return issue?.state==='closed';}
function mergeSnapshot(snapshot,payload){
  if(!payload || !Array.isArray(payload.items))throw new Error('Invalid live sync response');
  const next=JSON.parse(JSON.stringify(snapshot));
  const byId=new Map(payload.items.map(i=>[Number(i.number),i]));
  for(const issue of next.items){
    const current=byId.get(issue.number);
    if(!current)continue;
    issue.title=current.title??issue.title;
    issue.state=current.state??issue.state;
    // An empty assignee list is intentional: never silently restore a former owner.
    if(Array.isArray(current.assignees))issue.owner=current.assignees[0]||null;
    issue.labels=current.labels??issue.labels;
    issue.url=current.url??issue.url;
    issue.updatedAt=current.updatedAt??issue.updatedAt;
    issue.closedAt=current.closedAt??null;
    issue.boardStatus=current.boardStatus??null;
    if(current.due)issue.due=current.due;
  }
  next.carryoverTests=payload.carryoverTests??next.carryoverTests??[];
  next.capturedAt=payload.capturedAt??new Date().toISOString();
  next.prs=payload.prs??[];
  next.ci=payload.ci??null;
  next.boardAvailable=!!payload.boardAvailable;
  next.boardReason=payload.boardReason??null;
  next.source='live';
  return next;
}
root.CareerConnectOwnership=Object.freeze({resolveLead,resolveLeads,isComplete,mergeSnapshot});
})(typeof window!=='undefined'?window:globalThis);
