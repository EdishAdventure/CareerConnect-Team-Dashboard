/* CareerConnect Sprint 4 Plan v3 baseline, Nov 17–30, 2026. Historical Sprint 3 dashboard preserved at /sprint3/index.html. Live GitHub API remains authoritative. */
window.SPRINT_CONFIG = {
  "repo": "EdishAdventure/SOEN341-2026-Team01",
  "projectUrl": "https://github.com/users/EdishAdventure/projects/1",
  "deadline": "2026-11-30",
  "freeze": "2026-11-25",
  "release": "2026-11-29",
  "syncedAt": "2026-11-17T00:00:00-05:00",
  "baselineSP": {
    "EdishAdventure": 12,
    "ElSnoozer": 12,
    "mzllo": 11,
    "bthorng": 11,
    "mariaacelena": 12,
    "KaylaKOUM": 10
  },
  "taskSP": {
    "221": 2,
    "222": 5,
    "223": 5,
    "224": 5,
    "225": 2,
    "226": 2,
    "227": 5,
    "228": 8,
    "229": 5,
    "230": 3,
    "231": 3,
    "232": 3,
    "233": 3,
    "234": 3,
    "235": 3,
    "236": 3,
    "237": 3,
    "238": 2,
    "239": 1,
    "240": 2
  },
  "people": [
    {
      "login": "EdishAdventure",
      "name": "Jiaju",
      "full": "Jiaju Shi",
      "role": "AI feature lead · Final integration & release",
      "color": "#5865dd",
      "initials": "JS"
    },
    {
      "login": "mzllo",
      "name": "Chloe",
      "full": "Chloe Fokom",
      "role": "Regression · Posting tests · AI validation & logs",
      "color": "#d67956",
      "initials": "CH"
    },
    {
      "login": "bthorng",
      "name": "Brandon",
      "full": "Brandon Thorng",
      "role": "Secure matching backend · AI tests · Static fixes",
      "color": "#258f8b",
      "initials": "BR"
    },
    {
      "login": "mariaacelena",
      "name": "Maria",
      "full": "Maria Celena Said",
      "role": "AI matching UI · CI & quality · Posting acceptance",
      "color": "#a272c9",
      "initials": "MA"
    },
    {
      "login": "KaylaKOUM",
      "name": "Kayla",
      "full": "Kayla Koumfieg",
      "role": "Posting UI · AI matching acceptance · Demo",
      "color": "#d18a29",
      "initials": "KA"
    },
    {
      "login": "ElSnoozer",
      "name": "Annik",
      "full": "Annik Liu",
      "role": "Posting v2 backend lead · Qualification DB & APIs",
      "color": "#3d84b7",
      "initials": "AN"
    }
  ],
  "groups": [
    {
      "key": "posting",
      "story": 219,
      "id": "JP-v2",
      "name": "Job Posting v2 · optional qualifications",
      "short": "Posting qualifications",
      "category": "Recruiter experience",
      "owner": "ElSnoozer",
      "tasks": [
        221,
        222,
        223,
        224,
        225,
        239
      ],
      "due": "Nov 26",
      "color": "#8c7af2",
      "note": "Enhance completed US-06/US-07; optional typed qualifications, additive migration, recruiter/editor and public read. Keep old postings valid."
    },
    {
      "key": "matching",
      "story": 220,
      "id": "US-25",
      "name": "Explainable AI job matching",
      "short": "AI Job Matching",
      "category": "Generative AI",
      "owner": "EdishAdventure",
      "tasks": [
        226,
        227,
        228,
        229,
        230,
        240
      ],
      "due": "Nov 27",
      "color": "#6686e9",
      "note": "Second required GenAI feature: user-selected owned resume, explicit consent, preferences, eligible real postings, grounded explanations."
    },
    {
      "key": "verification",
      "story": 218,
      "leadTask": 231,
      "id": "REGRESSION",
      "name": "Existing feature and AI validation",
      "short": "Regression & AI QA",
      "category": "Quality & validation",
      "owner": "mzllo",
      "tasks": [
        231,
        232
      ],
      "due": "Nov 27",
      "color": "#43a5ac",
      "note": "Preserve Sprint 1–3 workflows; independently revalidate existing US-20 resume feedback with truthful evidence."
    },
    {
      "key": "quality",
      "story": 218,
      "leadTask": 233,
      "id": "QUALITY",
      "name": "CI, static analysis and review assurance",
      "short": "Engineering quality",
      "category": "Maintainability",
      "owner": "mariaacelena",
      "tasks": [
        233,
        234,
        235
      ],
      "due": "Nov 28",
      "color": "#ba81de",
      "note": "Extend existing CI with backend Ruff, triage findings, audit unit tests and independent GitHub PR reviews."
    },
    {
      "key": "delivery",
      "story": 218,
      "leadTask": 238,
      "id": "RELEASE",
      "name": "Sprint coordination and final delivery",
      "short": "Logs, report & demo",
      "category": "Release readiness",
      "owner": "EdishAdventure",
      "tasks": [
        236,
        237,
        238
      ],
      "due": "Nov 30",
      "color": "#66768b",
      "note": "Meeting minutes, six accurate individual AI PDF logs and contributions, reproducible demo and final report."
    }
  ],
  "phases": [
    {
      "id": "audit",
      "name": "Contracts & scope",
      "start": 17,
      "end": 18
    },
    {
      "id": "architecture",
      "name": "Database / CI foundation",
      "start": 19,
      "end": 21
    },
    {
      "id": "development",
      "name": "Parallel feature builds",
      "start": 19,
      "end": 24
    },
    {
      "id": "integration",
      "name": "Integration & PR review",
      "start": 23,
      "end": 25
    },
    {
      "id": "testing",
      "name": "Acceptance & regression",
      "start": 25,
      "end": 28
    },
    {
      "id": "reports",
      "name": "Reports & final demo",
      "start": 26,
      "end": 30
    }
  ],
  "dailyPlan": {
    "17": {
      "focus": "Sprint kickoff & scope baseline",
      "goals": [
        "Share all 23 Sprint 4 issues with six owners and reviewers",
        "Confirm 68 provisional SP, personal capacity and hard November 30 deadline",
        "Review feature freeze, dependencies and privacy/test requirements"
      ]
    },
    "18": {
      "focus": "Freeze qualification & AI contracts",
      "goals": [
        "Chloe #221: optional qualification schema, DBML and posting API",
        "Jiaju #226: matching request/response, prompts, limits and validation",
        "Kayla/Maria agree UI mock payloads; record decisions"
      ]
    },
    "19": {
      "focus": "Start parallel implementation",
      "goals": [
        "Annik #222 migration and test seed parity; Chloe #223 posting API",
        "Brandon #227 candidate retrieval; Maria #233 backend CI static analysis",
        "Kayla #224 posting form; open small PRs and unit-test scaffolds"
      ]
    },
    "20": {
      "focus": "Database & backend quality gate",
      "goals": [
        "Annik #222: additive JobQualification migration, seed SQL and schema parity",
        "Maria #233: Ruff static analysis executes in existing GitHub Actions",
        "Review posting contract and API compatibility before Monday integration"
      ]
    },
    "21": {
      "focus": "Secure matching input handoff",
      "goals": [
        "Brandon #227: owned PDF, consent and eligible bounded jobs to Jiaju",
        "Frontend owners check loading/error states using mock responses",
        "Weekend tasks only if personally available; flag Monday handoff risks"
      ]
    },
    "22": {
      "focus": "Contingency / integration buffer",
      "goals": [
        "Optional asynchronous review of schema, matching inputs and mocks",
        "Reconcile open PR feedback and new blocking defects",
        "No assumption of mandatory weekend team availability"
      ]
    },
    "23": {
      "focus": "Posting v2 integration gate",
      "goals": [
        "Chloe #223 recruiter/public APIs; Kayla #224 editor and detail UI",
        "Run legacy posting/search/apply smoke checks and independent PR reviews",
        "Start #231 regression, #228 matching integration and #234 static-analysis triage"
      ]
    },
    "24": {
      "focus": "AI matching integration gate",
      "goals": [
        "Jiaju #228: bounded GenAI matching and evidence validation",
        "Maria #229: AI Matches UI, opt-in flow and job navigation",
        "Demonstrate synthetic end-to-end match, safe failure modes and review queue"
      ]
    },
    "25": {
      "focus": "FEATURE FREEZE",
      "goals": [
        "Chloe #225: posting automated coverage; Brandon #230: AI mock/provider tests",
        "All committed feature PRs reviewed and merged; backend/frontend CI green",
        "Block optional feature additions; assign all remaining P0 defects"
      ]
    },
    "26": {
      "focus": "Posting acceptance + US-20 AI validation",
      "goals": [
        "Brandon #239 executes independent posting acceptance test",
        "Annik #232 validates existing AI resume feedback and privacy/failure handling",
        "Record real test results, tester/commit/environment and defects"
      ]
    },
    "27": {
      "focus": "AI acceptance + full regression",
      "goals": [
        "Chloe #240 executes AI job-matching acceptance with synthetic data",
        "Kayla #231 validates complete existing recruiter/seeker workflow",
        "Brandon #234 records static-analysis findings/fixes; no unaddressed P0 issues"
      ]
    },
    "28": {
      "focus": "Quality & review evidence audit",
      "goals": [
        "Maria #235 audits independent GitHub PR reviews, CI and test coverage",
        "Verify report links, code standards and static-analysis dispositions",
        "Use async weekend availability; no new product features"
      ]
    },
    "29": {
      "focus": "Documentation & demo readiness",
      "goals": [
        "Annik #236 coordinates six members' own AI-use PDFs and contributions",
        "Kayla #237 completes synthetic demo, startup guide and rehearsal",
        "Jiaju #238 completes summary, final repository audit and release gate"
      ]
    },
    "30": {
      "focus": "FINAL SUBMISSION / EVALUATION",
      "goals": [
        "Verify main CI, static analysis, PR reviews and acceptance evidence",
        "Confirm two GenAI validations, six individual logs, meeting minutes and demo",
        "Submit by Moodle/TA actual cut-off and perform final demonstration"
      ]
    }
  },
  "officialGoals": [
    {
      "id": "posting",
      "num": "01",
      "title": "Posting v2 qualifications",
      "subtitle": "Flexible optional requirements across job types",
      "groups": [
        "posting"
      ],
      "lead": "ElSnoozer",
      "leadStories": [
        219
      ]
    },
    {
      "id": "matching",
      "num": "02",
      "title": "AI Job Matching (US-25)",
      "subtitle": "Second GenAI feature with consent and grounded recommendations",
      "groups": [
        "matching"
      ],
      "lead": "EdishAdventure",
      "leadStories": [
        220
      ]
    },
    {
      "id": "verification",
      "num": "03",
      "title": "Regression & AI validation",
      "subtitle": "Protect previous features and validate AI feedback",
      "groups": [
        "verification"
      ],
      "lead": "mzllo",
      "leadTasks": [
        231
      ]
    },
    {
      "id": "quality",
      "num": "04",
      "title": "Quality, maintenance & delivery",
      "subtitle": "Static analysis, reviews, logs, final report and demo",
      "groups": [
        "quality",
        "delivery"
      ],
      "lead": "mariaacelena",
      "leadTasks": [
        233,
        238
      ]
    }
  ],
  "collaboration": [
    {
      "id": "posting",
      "feature": "Job Posting v2",
      "steps": [
        {
          "task": 221,
          "label": "Contract (#221)"
        },
        {
          "task": 222,
          "label": "DB migration (#222)"
        },
        {
          "task": 223,
          "label": "Posting APIs (#223)"
        },
        {
          "task": 224,
          "label": "Editor + details (#224)"
        }
      ],
      "handoff": "Annik owns qualification contract, migration and posting APIs (#221–#223); Kayla builds the editor/details (#224); Chloe tests (#225); Maria independently executes #239 acceptance.",
      "target": "Nov 23"
    },
    {
      "id": "matching",
      "feature": "Explainable AI matching",
      "steps": [
        {
          "task": 226,
          "label": "Matching contract (#226)"
        },
        {
          "task": 227,
          "label": "Owned resume + jobs (#227)"
        },
        {
          "task": 228,
          "label": "AI service (#228)"
        },
        {
          "task": 229,
          "label": "Matching UI (#229)"
        }
      ],
      "handoff": "Jiaju AI design (#226) → Brandon secure candidate inputs (#227) → Jiaju matching model (#228) + Maria AI frontend (#229); Brandon writes tests (#230), Kayla independently executes #240.",
      "target": "Nov 24"
    },
    {
      "id": "quality",
      "feature": "Static-analysis/review gate",
      "steps": [
        {
          "task": 233,
          "label": "Ruff CI (#233)"
        },
        {
          "task": 234,
          "label": "Maintenance (#234)"
        },
        {
          "task": 235,
          "label": "PR/test audit (#235)"
        }
      ],
      "handoff": "Maria CI gate → Brandon maintenance and triage → Maria audit of independent reviews/tests.",
      "target": "Nov 28"
    },
    {
      "id": "release",
      "feature": "Regression and release",
      "steps": [
        {
          "task": 231,
          "label": "Regression (#231)"
        },
        {
          "task": 232,
          "label": "US-20 validation (#232)"
        },
        {
          "task": 237,
          "label": "Demo (#237)"
        },
        {
          "task": 238,
          "label": "Final release (#238)"
        }
      ],
      "handoff": "Chloe owns regression (#231) and US-20 validation (#232); Kayla demo (#237); Jiaju owns final integration and submission (#238). Chloe also coordinates member-provided logs (#236).",
      "target": "Nov 29"
    }
  ],
  "deferred": [
    8,
    10,
    11,
    19,
    24,
    25,
    65
  ],
  "milestones": [
    {
      "date": "Nov 18",
      "iso": "2026-11-18",
      "title": "G1 · Contracts locked",
      "tag": "Planning"
    },
    {
      "date": "Nov 20",
      "iso": "2026-11-20",
      "title": "G2 · Database & CI",
      "tag": "Foundation"
    },
    {
      "date": "Nov 21",
      "iso": "2026-11-21",
      "title": "Secure-input handoff",
      "tag": "Development"
    },
    {
      "date": "Nov 23",
      "iso": "2026-11-23",
      "title": "G3 · Posting v2 integrated",
      "tag": "Integration"
    },
    {
      "date": "Nov 24",
      "iso": "2026-11-24",
      "title": "G4 · AI matching integrated",
      "tag": "Integration"
    },
    {
      "date": "Nov 25",
      "iso": "2026-11-25",
      "title": "G5 · Feature freeze",
      "tag": "Release gate"
    },
    {
      "date": "Nov 27",
      "iso": "2026-11-27",
      "title": "G6 · Acceptance & regression",
      "tag": "Quality"
    },
    {
      "date": "Nov 29",
      "iso": "2026-11-29",
      "title": "G7 · Final rehearsal & reports",
      "tag": "Delivery"
    },
    {
      "date": "Nov 30",
      "iso": "2026-11-30",
      "title": "Hard submission deadline",
      "tag": "Deadline"
    }
  ]
};
window.SPRINT_SNAPSHOT = {
  "capturedAt": "2026-11-17T00:00:00-05:00",
  "source": "snapshot",
  "items": [
    {
      "number": 219,
      "title": "Job Posting v2 — Optional Qualifications (US-06/US-07 enhancement)",
      "owner": "ElSnoozer",
      "kind": "story",
      "group": "posting",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/219",
      "labels": [
        "user-story",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 220,
      "title": "[US-25] AI Job Matching Suggestions",
      "owner": "EdishAdventure",
      "kind": "story",
      "group": "matching",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/220",
      "labels": [
        "user-story",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 218,
      "title": "Sprint 4 — Canonical Backlog & Release Tracker",
      "owner": "EdishAdventure",
      "kind": "tracker",
      "group": "delivery",
      "due": "Nov 30",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/218",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 221,
      "title": "[TASK-83] Finalize qualification model, API contract and DBML design",
      "owner": "ElSnoozer",
      "kind": "task",
      "group": "posting",
      "due": "Nov 18",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/221",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 222,
      "title": "[TASK-84] Implement JobQualification model, additive migration and seed parity",
      "owner": "ElSnoozer",
      "kind": "task",
      "group": "posting",
      "due": "Nov 20",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/222",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 223,
      "title": "[TASK-85] Extend recruiter posting APIs and public qualification responses",
      "owner": "ElSnoozer",
      "kind": "task",
      "group": "posting",
      "due": "Nov 23",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/223",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 224,
      "title": "[TASK-86] Build optional qualification editor and public job display",
      "owner": "KaylaKOUM",
      "kind": "task",
      "group": "posting",
      "due": "Nov 23",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/224",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 225,
      "title": "[TASK-87] Automated qualification tests and posting backward compatibility",
      "owner": "mzllo",
      "kind": "task",
      "group": "posting",
      "due": "Nov 25",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/225",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 239,
      "title": "[AT-JPV2-01] Optional qualifications across posting creation, edits and public job details",
      "owner": "mariaacelena",
      "kind": "acceptance",
      "group": "posting",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/239",
      "labels": [
        "acceptance-test",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 226,
      "title": "[TASK-88] Finalize AI matching architecture, prompt and response contract",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 18",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/226",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 227,
      "title": "[TASK-89] Secure resume inputs and eligible job candidate retrieval",
      "owner": "bthorng",
      "kind": "task",
      "group": "matching",
      "due": "Nov 21",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/227",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 228,
      "title": "[TASK-90] Implement Generative AI matching service with grounding validation",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 24",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/228",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 229,
      "title": "[TASK-91] Build AI Matches seeker UI and API client",
      "owner": "mariaacelena",
      "kind": "task",
      "group": "matching",
      "due": "Nov 24",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/229",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 230,
      "title": "[TASK-92] Automated AI matching tests and provider-failure mocks",
      "owner": "bthorng",
      "kind": "task",
      "group": "matching",
      "due": "Nov 25",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/230",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 240,
      "title": "[AT-US25-01] Explainable AI resume-to-job matching succeeds and fails safely",
      "owner": "KaylaKOUM",
      "kind": "acceptance",
      "group": "matching",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/240",
      "labels": [
        "acceptance-test",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 231,
      "title": "[TASK-93] Execute Sprint 4 cross-feature regression and record defects",
      "owner": "mzllo",
      "kind": "task",
      "group": "verification",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/231",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 232,
      "title": "[TASK-94] Validate US-20 AI resume feedback for Sprint 4 evaluation",
      "owner": "mzllo",
      "kind": "task",
      "group": "verification",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/232",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 233,
      "title": "[TASK-95] Integrate backend static analysis into existing GitHub Actions CI",
      "owner": "mariaacelena",
      "kind": "task",
      "group": "quality",
      "due": "Nov 20",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/233",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 234,
      "title": "[TASK-96] Triage static-analysis findings and document maintenance fixes",
      "owner": "bthorng",
      "kind": "task",
      "group": "quality",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/234",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 235,
      "title": "[TASK-97] Audit CI tests, coding standards and independent PR reviews",
      "owner": "mariaacelena",
      "kind": "task",
      "group": "quality",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/235",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 236,
      "title": "[TASK-98] Maintain Sprint 4 minutes, contribution and AI usage evidence",
      "owner": "mzllo",
      "kind": "task",
      "group": "delivery",
      "due": "Nov 29",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/236",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 237,
      "title": "[TASK-99] Prepare synthetic demo data, startup guide and final rehearsal",
      "owner": "KaylaKOUM",
      "kind": "task",
      "group": "delivery",
      "due": "Nov 29",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/237",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    },
    {
      "number": 238,
      "title": "[TASK-100] Finalize Sprint 4 report, GitHub evidence and submission readiness",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "delivery",
      "due": "Nov 29",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/238",
      "labels": [
        "task",
        "sprint-4",
        "priority:p0"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T00:00:00-05:00"
    }
  ],
  "prs": [],
  "ci": null,
  "boardAvailable": false,
  "carryoverTests": [],
  "note": "Sprint 4 Plan v3 planning baseline. 68 unique child SP; actual states and assignees pulled from GitHub live API. Historical Sprint 3 is available separately."
};
