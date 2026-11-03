/* GitHub issue snapshot captured 2026-11-03. Actual work status is inferred ONLY from open/closed state.
   Live Cloudflare Worker sync replaces these records with GitHub API data. */
window.SPRINT_CONFIG = {
  repo: 'EdishAdventure/SOEN341-2026-Team01',
  projectUrl: 'https://github.com/users/EdishAdventure/projects/1',
  deadline: '2026-11-16',
  freeze: '2026-11-12',
  release: '2026-11-15',
  syncedAt: '2026-11-03T12:10:00-05:00',
  people: [
    {login:'EdishAdventure', name:'Jiaju', full:'Jiaju Shi', role:'Integration · QA · delivery', color:'#5865dd', initials:'JS'},
    {login:'mzllo', name:'Chloe', full:'Chloe', role:'Recruiter & saved jobs', color:'#d67956', initials:'CH'},
    {login:'bthorng', name:'Brandon', full:'Brandon', role:'Notifications & reminders', color:'#258f8b', initials:'BR'},
    {login:'mariaacelena', name:'Maria', full:'Maria', role:'Analytics & trends', color:'#a272c9', initials:'MA'},
    {login:'KaylaKOUM', name:'Kayla', full:'Kayla', role:'Frontend & acceptance', color:'#d18a29', initials:'KA'},
    {login:'ElSnoozer', name:'Annik', full:'Annik', role:'GenAI resume feedback', color:'#3d84b7', initials:'AN'}
  ],
  groups: [
    {key:'recruiter',story:13,id:'US-04',name:'Recruiter / company profile',short:'Profile carryover',category:'Recruiter experience',owner:'mzllo',tasks:[66,67,169],due:'Nov 12',color:'#8c7af2',note:'Finish profile UI and authorization evidence; shared-company membership remains deferred.'},
    {key:'recruiter-plus',story:9,id:'US-15',name:'Recruiter dashboard enhancements',short:'Recruiter enhancements',category:'Recruiter experience',owner:'mzllo',tasks:[155,156,173],due:'Nov 12',color:'#8c7af2',note:'Sprint 2 story remains closed; only new posting counts and date filters are in scope.'},
    {key:'saved',story:16,id:'US-09',name:'Saved jobs MVP',short:'Saved jobs',category:'Seeker experience',owner:'mzllo',tasks:[163,164,177],due:'Nov 12',color:'#ef9a60',note:'Required foundation for deadline reminders.'},
    {key:'status-notifs',story:23,id:'US-17',name:'Seeker status-change notifications',short:'Status notifications',category:'Notifications',owner:'bthorng',tasks:[159,160,161,175],due:'Nov 12',color:'#43a5ac',note:'Shared inbox and recruiter status-change triggers.'},
    {key:'ai',story:26,id:'US-20',name:'AI-powered resume feedback',short:'AI resume feedback',category:'AI feature',owner:'ElSnoozer',tasks:[166,167,168,179],due:'Nov 12',color:'#6686e9',note:'Secure PDF extraction, real provider adapter, consent and validation.'},
    {key:'analytics',story:151,id:'US-22',name:'Application analytics & trends',short:'Analytics & trends',category:'Seeker experience',owner:'mariaacelena',tasks:[157,158,174],due:'Nov 12',color:'#ba81de',note:'Extend existing seeker overview and history without duplicate dashboards.'},
    {key:'recruiter-notifs',story:152,id:'US-23',name:'Recruiter new-application alerts',short:'Recruiter alerts',category:'Notifications',owner:'bthorng',tasks:[162,176],due:'Nov 12',color:'#43a5ac',note:'Reuses US-17 notification infrastructure; one alert per valid submission.'},
    {key:'deadline',story:153,id:'US-24',name:'Saved-job deadline reminders',short:'Deadline reminders',category:'Notifications',owner:'bthorng',tasks:[165,178],due:'Nov 12',color:'#43a5ac',note:'In-app only; US-12 email delivery is outside Sprint 3.'},
    {key:'delivery',story:154,id:'TRACKER',name:'Quality & release readiness',short:'QA & release',category:'Release readiness',owner:'EdishAdventure',tasks:[170,171,172],due:'Nov 15',color:'#66768b',note:'CI, test fixtures, meeting minutes, individual PDFs, summary and final demo.'}
  ],

  // Proposed phase windows and daily delivery focus (Nov 3–16). Milestones are
  // planning targets; outcomes always come from real GitHub issues / evidence.
  phases: [
    {id:'audit',name:'Audit & planning',start:3,end:4},
    {id:'architecture',name:'Architecture & tests',start:4,end:6},
    {id:'development',name:'Development',start:5,end:11},
    {id:'integration',name:'Integration & review',start:9,end:13},
    {id:'testing',name:'Testing & stabilization',start:12,end:14},
    {id:'reports',name:'Reports & demo',start:14,end:16}
  ],
  dailyPlan: {
    3:{focus:'Kickoff & ownership',goals:['Confirm Sprint 3 committed scope and feature boundaries','Confirm six owners, reviewers and team availability','Review Sprint 2 carryover and current QA gaps']},
    4:{focus:'Contracts & acceptance plan',goals:['Agree API interfaces and dependency order','Validate story and sub-issue acceptance criteria','Check GitHub Project statuses and baseline CI']},
    5:{focus:'Parallel development begins',goals:['Start implementation branches for all core workstreams','Connect feature owners with frontend partners','Create early unit-test scaffolding']},
    6:{focus:'First vertical slices',goals:['Review early backend/API changes and open first PRs','Unblock saved-jobs, notification and AI dependencies','Keep automated checks running on every PR']},
    7:{focus:'Integration checkpoint',goals:['Review first merged feature PRs','Confirm notification and saved-jobs foundational APIs','Review current blockers with all six members']},
    8:{focus:'Data & extraction checkpoint',goals:['Complete first analytics aggregation and PDF extraction slices','Run focused unit tests against boundary and authorization cases','Check dependencies before UI integration']},
    9:{focus:'Frontend/API integration',goals:['Integrate recruiter filters, notification inbox and saved-job UI','Validate notification triggers and ownership checks','Record any integration defects as GitHub issues']},
    10:{focus:'Core flows operational',goals:['Demonstrate analytics and recruiter improvements end to end','Validate AI provider adapter and error paths','Review completion against the Nov 12 freeze']},
    11:{focus:'Final implementation handoff',goals:['Finish AI resume feedback UI and deadline eligibility','Run cross-feature regression and code reviews','Raise any outstanding P0 blockers immediately']},
    12:{focus:'Feature freeze',goals:['Merge planned feature PRs after passing CI and review','Execute recruiter profile carryover acceptance tests','Switch focus from features to bug fixes and verification']},
    13:{focus:'Acceptance evidence',goals:['Run scenarios using known synthetic test fixtures','Record tester, environment, actual result and evidence links','Retest resolved defects and confirm CI status']},
    14:{focus:'Quality / release candidate',goals:['Complete acceptance tests and end-to-end walkthrough','Confirm all release-critical results and fixes','Finalize documented evidence and repeatable demo fixtures']},
    15:{focus:'Internal release & rehearsal',goals:['Collect each member’s AI and contribution logs and Sprint 3 PDF','Finalize one-page report and meeting minutes','Conduct full-team demo rehearsal and final regression']},
    16:{focus:'Submission & TA evaluation',goals:['Verify submission package and repository permissions','Demonstrate working implementation and supporting evidence','Submit / attend evaluation according to the assigned lab schedule']}
  },
  officialGoals: [
    {id:'recruiter',num:'01',title:'Recruiter dashboard & postings',subtitle:'Review candidates, manage postings and update status',groups:['recruiter','recruiter-plus'],lead:'mzllo'},
    {id:'analytics',num:'02',title:'Application analytics & history',subtitle:'Five-status breakdown, accurate weekly activity',groups:['analytics'],lead:'mariaacelena'},
    {id:'notices',num:'03',title:'Notifications & reminders',subtitle:'Status, recruiter and saved-job deadline alerts',groups:['status-notifs','recruiter-notifs','deadline','saved'],lead:'bthorng'},
    {id:'ai',num:'04',title:'Generative AI feature',subtitle:'Consent-based resume feedback with a real AI provider',groups:['ai'],lead:'ElSnoozer'}
  ],
  collaboration: [
    {id:'rec',feature:'Recruiter experience',from:['mzllo'],to:['EdishAdventure'],handoff:'Recruiter profile → acceptance evidence & integration',target:'Nov 12'},
    {id:'analytics',feature:'Analytics & status updates',from:['mariaacelena'],to:['bthorng'],handoff:'Confirm status semantics and data consistency',target:'Nov 10'},
    {id:'notify',feature:'Notification inbox',from:['bthorng'],to:['KaylaKOUM'],handoff:'Notification APIs → shared inbox and read/unread UI',target:'Nov 09'},
    {id:'saved',feature:'Saved jobs & reminders',from:['mzllo'],to:['bthorng','KaylaKOUM'],handoff:'Saved-job API → deadline rules and job navigation',target:'Nov 11'},
    {id:'ai',feature:'AI resume feedback',from:['ElSnoozer'],to:['KaylaKOUM'],handoff:'PDF/AI API + consent contract → feedback UI',target:'Nov 11'}
  ],
  deferred: [8,10,11,19,24,25,65],
  milestones: [
    {date:'Nov 04',iso:'2026-11-04',title:'Plan & contracts locked',tag:'Planning'},
    {date:'Nov 07',iso:'2026-11-07',title:'First integration checkpoint',tag:'Development'},
    {date:'Nov 10',iso:'2026-11-10',title:'Essential flows integrated',tag:'Development'},
    {date:'Nov 12',iso:'2026-11-12',title:'Feature freeze',tag:'Release gate'},
    {date:'Nov 14',iso:'2026-11-14',title:'Acceptance evidence ready',tag:'Quality'},
    {date:'Nov 15',iso:'2026-11-15',title:'Release & rehearsal',tag:'Delivery'},
    {date:'Nov 16',iso:'2026-11-16',title:'Final submission',tag:'Deadline'}
  ]
};
const createItem=(number,title,owner,kind,group,due,closed=false,priority='P0')=>({
  number,title,owner,kind,group,due,priority,state:closed?'closed':'open',
  url:`https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/${number}`,
  labels:[kind==='story'?'user-story':kind==='acceptance'?'acceptance-test':'task','sprint-3',`priority:${priority.toLowerCase()}`],
  boardStatus:null, closedAt:closed?'2026-10-27T12:00:00-04:00':null, updatedAt:'2026-11-03T12:10:00-05:00',
  execution:kind==='acceptance'?'NOT RUN':null
});
window.SPRINT_SNAPSHOT = {
  capturedAt:'2026-11-03T12:10:00-05:00',
  source:'snapshot',
  items:[
    createItem(13,'[US-04] Recruiter / Company Profile','mzllo','story','recruiter','Nov 16'),
    createItem(66,'[TASK-31] Build and integrate recruiter/company profile UI','mzllo','task','recruiter','Nov 10'),
    createItem(67,'[TASK-32] Test recruiter-owned company data and access rules','mzllo','task','recruiter','Nov 11'),
    createItem(169,'[TASK-79] Execute and record US-04 carryover acceptance tests','EdishAdventure','task','recruiter','Nov 12'),
    createItem(9,'[US-15] Recruiter Application Dashboard','mzllo','story','recruiter-plus','Sprint 2',true,'P1'),
    createItem(155,'[TASK-65] Extend US-15 with per-posting counts and application date filters','mzllo','task','recruiter-plus','Nov 09',false,'P1'),
    createItem(156,'[TASK-66] Test new US-15 posting counts and date-filter boundaries','mzllo','task','recruiter-plus','Nov 10',false,'P1'),
    createItem(173,'[AT-US15-03] Per-posting application counts and date-range filtering','mzllo','acceptance','recruiter-plus','Nov 14',false,'P1'),
    createItem(16,'[US-09] Maintain a Saved-Job List','mzllo','story','saved','Nov 16'),
    createItem(163,'[TASK-73] Saved jobs MVP: persistence and protected APIs','mzllo','task','saved','Nov 07'),
    createItem(164,'[TASK-74] Saved jobs UI and job detail navigation','KaylaKOUM','task','saved','Nov 09'),
    createItem(177,'[AT-US09-01] Save, reopen and remove jobs securely','mzllo','acceptance','saved','Nov 14'),
    createItem(23,'[US-17] Application Status-Change Notification','bthorng','story','status-notifs','Nov 16'),
    createItem(159,'[TASK-69] Notification persistence, secure retrieval and read/unread API','bthorng','task','status-notifs','Nov 07'),
    createItem(160,'[TASK-70] In-app notification inbox UI with read/unread','KaylaKOUM','task','status-notifs','Nov 09'),
    createItem(161,'[TASK-71] Trigger seeker status-change alerts only on actual changes','bthorng','task','status-notifs','Nov 09'),
    createItem(175,'[AT-US17-01] Seeker receives only legitimate application status alerts','bthorng','acceptance','status-notifs','Nov 14'),
    createItem(26,'[US-20] Request AI-Assisted Resume Feedback','ElSnoozer','story','ai','Nov 16'),
    createItem(166,'[TASK-76] Resume feedback: authorized PDF text extraction endpoint','ElSnoozer','task','ai','Nov 08'),
    createItem(167,'[TASK-77] Resume feedback: GenAI adapter, consent, validation and tests','ElSnoozer','task','ai','Nov 10'),
    createItem(168,'[TASK-78] Resume feedback UI: select resume and display suggestions','KaylaKOUM','task','ai','Nov 11'),
    createItem(179,'[AT-US20-01] AI resume feedback succeeds and fails safely','ElSnoozer','acceptance','ai','Nov 14'),
    createItem(151,'[US-22] Application Analytics and Trends Dashboard','mariaacelena','story','analytics','Nov 16'),
    createItem(157,'[TASK-67] Derive and test US-22 analytics from existing application history','mariaacelena','task','analytics','Nov 08'),
    createItem(158,'[TASK-68] Extend seeker overview with US-22 status breakdown and trend chart','mariaacelena','task','analytics','Nov 10'),
    createItem(174,'[AT-US22-01] Application status breakdown and activity trends','mariaacelena','acceptance','analytics','Nov 14'),
    createItem(152,'[US-23] Recruiter New-Application Notifications','bthorng','story','recruiter-notifs','Nov 16'),
    createItem(162,'[TASK-72] Trigger recruiter new-application alerts and cover edge cases','bthorng','task','recruiter-notifs','Nov 09'),
    createItem(176,'[AT-US23-01] Recruiter new-application notification','bthorng','acceptance','recruiter-notifs','Nov 14'),
    createItem(153,'[US-24] In-App Saved-Job Deadline Reminders','bthorng','story','deadline','Nov 16'),
    createItem(165,'[TASK-75] In-app deadline reminder eligibility and deduplication','bthorng','task','deadline','Nov 11'),
    createItem(178,'[AT-US24-01] In-app saved-job deadline reminder eligibility','KaylaKOUM','acceptance','deadline','Nov 14'),
    createItem(154,'Sprint plan, QA gates, and submission tracker','EdishAdventure','tracker','delivery','Nov 15'),
    createItem(170,'[TASK-80] CI, automated tests and PR regression gate','EdishAdventure','task','delivery','Nov 12'),
    createItem(171,'[TASK-81] Repeatable demo fixtures and end-to-end QA walkthrough','EdishAdventure','task','delivery','Nov 14'),
    createItem(172,'[TASK-82] Finalize logs, report, minutes and demo','EdishAdventure','task','delivery','Nov 15')
  ],
  prs:[], ci:null, boardAvailable:false, carryoverTests:[{number:107,state:'open',execution:'NOT RUN'},{number:108,state:'open',execution:'NOT RUN'}],
  note:'Assignments and issue states are sourced from GitHub on Nov 3. Board statuses were not independently verified.'
};