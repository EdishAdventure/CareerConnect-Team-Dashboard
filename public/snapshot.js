/* Sprint 4 scope revision v2, Nov 26, 2026. Live GitHub remains authoritative. */
window.SPRINT_CONFIG = {
  "repo": "EdishAdventure/SOEN341-2026-Team01",
  "projectUrl": "https://github.com/users/EdishAdventure/projects/1",
  "deadline": "2026-11-30",
  "freeze": "2026-11-27",
  "release": "2026-11-29",
  "syncedAt": "2026-11-26T00:00:00-05:00",
  "baselineSP": {
    "EdishAdventure": 37,
    "mzllo": 11,
    "bthorng": 3,
    "mariaacelena": 7,
    "KaylaKOUM": 11,
    "ElSnoozer": 12
  },
  "taskSP": {
    "221": 2,
    "222": 5,
    "223": 5,
    "224": 5,
    "225": 2,
    "226": 3,
    "227": 5,
    "228": 8,
    "229": 5,
    "230": 5,
    "231": 3,
    "232": 3,
    "233": 3,
    "234": 3,
    "235": 3,
    "236": 3,
    "237": 3,
    "238": 2,
    "239": 1,
    "240": 2,
    "246": 3,
    "247": 3,
    "248": 3,
    "249": 1
  },
  "people": [
    {
      "login": "EdishAdventure",
      "name": "Jiaju",
      "full": "Jiaju Shi",
      "role": "Development & integration lead · AI Advisor · Release",
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
      "role": "Independent reviews · Static fixes",
      "color": "#258f8b",
      "initials": "BR"
    },
    {
      "login": "mariaacelena",
      "name": "Maria",
      "full": "Maria Celena Said",
      "role": "CI & quality · Posting acceptance",
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
      "due": "Nov 28",
      "color": "#8c7af2",
      "note": "Enhance completed US-06/US-07; optional typed qualifications, additive migration, recruiter/editor and public read. Keep old postings valid."
    },
    {
      "key": "matching",
      "story": 220,
      "id": "US-25",
      "name": "AI Career Fit Advisor",
      "short": "AI Career Fit Advisor",
      "category": "Generative AI",
      "owner": "EdishAdventure",
      "tasks": [
        226,
        227,
        228,
        246,
        229,
        230,
        248,
        240,
        247,
        249
      ],
      "due": "Nov 28",
      "color": "#6686e9",
      "note": "P0 discovery, grounded qualification analysis and deterministic ranking; P1 direct job fit after P0 is stable. Evaluation against keyword baseline."
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
      "due": "Nov 28",
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
      "end": 27
    },
    {
      "id": "integration",
      "name": "Integration & PR review",
      "start": 23,
      "end": 27
    },
    {
      "id": "testing",
      "name": "Acceptance & regression",
      "start": 27,
      "end": 29
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
      "focus": "Original plan · Sprint kickoff & scope baseline",
      "goals": [
        "Historical planning target, not verified completion.",
        "Share all 23 Sprint 4 issues with six owners and reviewers",
        "Confirm 68 provisional SP, personal capacity and hard November 30 deadline",
        "Review feature freeze, dependencies and privacy/test requirements"
      ]
    },
    "18": {
      "focus": "Original plan · Freeze qualification & AI contracts",
      "goals": [
        "Historical planning target, not verified completion.",
        "Annik #221: optional qualification schema, DBML and posting API",
        "Jiaju #226: matching request/response, prompts, limits and validation",
        "Kayla/Maria agree UI mock payloads; record decisions"
      ]
    },
    "19": {
      "focus": "Original plan · Start parallel implementation",
      "goals": [
        "Historical planning target, not verified completion.",
        "Annik #222 migration and test seed parity; Annik #223 posting API",
        "Brandon #227 candidate retrieval; Maria #233 backend CI static analysis",
        "Kayla #224 posting form; open small PRs and unit-test scaffolds"
      ]
    },
    "20": {
      "focus": "Original plan · Database & backend quality gate",
      "goals": [
        "Historical planning target, not verified completion.",
        "Annik #222: additive JobQualification migration, seed SQL and schema parity",
        "Maria #233: Ruff static analysis executes in existing GitHub Actions",
        "Review posting contract and API compatibility before Monday integration"
      ]
    },
    "21": {
      "focus": "Original plan · Secure matching input handoff",
      "goals": [
        "Historical planning target, not verified completion.",
        "Brandon #227: owned PDF, consent and eligible bounded jobs to Jiaju",
        "Frontend owners check loading/error states using mock responses",
        "Weekend tasks only if personally available; flag Monday handoff risks"
      ]
    },
    "22": {
      "focus": "Original plan · Contingency / integration buffer",
      "goals": [
        "Historical planning target, not verified completion.",
        "Optional asynchronous review of schema, matching inputs and mocks",
        "Reconcile open PR feedback and new blocking defects",
        "No assumption of mandatory weekend team availability"
      ]
    },
    "23": {
      "focus": "Original plan · Posting v2 integration gate",
      "goals": [
        "Historical planning target, not verified completion.",
        "Annik #223 recruiter/public APIs; Kayla #224 editor and detail UI",
        "Run legacy posting/search/apply smoke checks and independent PR reviews",
        "Start #231 regression, #228 matching integration and #234 static-analysis triage"
      ]
    },
    "24": {
      "focus": "Original plan · AI matching integration gate",
      "goals": [
        "Historical planning target, not verified completion.",
        "Jiaju #228: bounded GenAI matching and evidence validation",
        "Maria #229: AI Matches UI, opt-in flow and job navigation",
        "Demonstrate synthetic end-to-end match, safe failure modes and review queue"
      ]
    },
    "25": {
      "focus": "Original plan · FEATURE FREEZE",
      "goals": [
        "Historical planning target, not verified completion.",
        "Chloe #225: posting automated coverage; Brandon #230: AI mock/provider tests",
        "All committed feature PRs reviewed and merged; backend/frontend CI green",
        "Block optional feature additions; assign all remaining P0 defects"
      ]
    },
    "26": {
      "focus": "Reset plan & unblock posting / AI",
      "goals": [
        "Jiaju leads development; preserve teammate contributions and independent review.",
        "#221–225: finish posting compatibility, additive migration and regression; #226 freeze AI contract.",
        "#233: enable Ruff CI; #227 prepare secure inputs; request reviews."
      ]
    },
    "27": {
      "focus": "P0 integration cutoff",
      "goals": [
        "#227 → #228 → #246: secure retrieval, evidence analysis, deterministic ranking.",
        "#229: AI Matches and resume entry; #230 mocked tests; review PRs, green CI.",
        "Finish posting v2 and preserve existing workflows."
      ]
    },
    "28": {
      "focus": "Independent validation & defect fixes",
      "goals": [
        "Maria #239 posting AT; Kayla #240 discovery AT; Chloe #231/#232 regression and US-20 validation.",
        "#248: synthetic benchmark against keyword baseline; #234 static-analysis fixes.",
        "Record actual results, defects and review evidence."
      ]
    },
    "29": {
      "focus": "Release candidate · P1 only if ready",
      "goals": [
        "#247/#249 direct fit only if primary release safe and course approval requirement resolved.",
        "#235 review audit; #236 six individual PDF logs; #237 demo; #238 final report.",
        "No optional work at expense of required QA."
      ]
    },
    "30": {
      "focus": "FINAL SUBMISSION / EVALUATION",
      "goals": [
        "Verify main SHA, CI, two AI validation reports and actual acceptance evidence.",
        "Submit by actual Moodle/TA cutoff; demonstrate and document limitations."
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
      "title": "AI Career Fit Advisor (US-25)",
      "subtitle": "Discovery, evidence, ranking and controlled evaluation; P1 direct fit",
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
      "handoff": "Jiaju leads remaining integration; preserve existing Annik/Kayla/Chloe contributions. Maria independently executes #239.",
      "target": "Nov 27"
    },
    {
      "id": "matching",
      "feature": "AI Career Fit Advisor",
      "steps": [
        {
          "task": 226,
          "label": "Contract (#226)"
        },
        {
          "task": 227,
          "label": "Secure inputs (#227)"
        },
        {
          "task": 228,
          "label": "Evidence engine (#228)"
        },
        {
          "task": 246,
          "label": "Ranking (#246)"
        },
        {
          "task": 229,
          "label": "Matches UI (#229)"
        },
        {
          "task": 248,
          "label": "Evaluation (#248)"
        }
      ],
      "handoff": "Jiaju implements discovery and tests; independent reviewers remain; Kayla executes #240. Direct fit #247/#249 is P1, conditional on readiness and course approval requirement.",
      "target": "Nov 27"
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
      "date": "Nov 26",
      "iso": "2026-11-26",
      "title": "Revised contracts & posting fixes",
      "tag": "Planning"
    },
    {
      "date": "Nov 27",
      "iso": "2026-11-27",
      "title": "P0 integration cutoff",
      "tag": "Release gate"
    },
    {
      "date": "Nov 28",
      "iso": "2026-11-28",
      "title": "Acceptance, evaluation & regression",
      "tag": "Quality"
    },
    {
      "date": "Nov 29",
      "iso": "2026-11-29",
      "title": "Release candidate & rehearsal",
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
  "capturedAt": "2026-11-26T00:00:00-05:00",
  "source": "snapshot",
  "items": [
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
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:49Z"
    },
    {
      "number": 219,
      "title": "Job Posting v2 — Optional Qualifications (US-06/US-07 enhancement)",
      "owner": "ElSnoozer",
      "kind": "story",
      "group": "posting",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/219",
      "labels": [
        "task",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:36Z"
    },
    {
      "number": 220,
      "title": "[US-25] AI Career Fit Advisor — Explainable Job Matching and Fit Analysis",
      "owner": "EdishAdventure",
      "kind": "story",
      "group": "matching",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/220",
      "labels": [
        "user-story",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:34Z"
    },
    {
      "number": 221,
      "title": "[TASK-83] Finalize qualification model, API contract and DBML design",
      "owner": "ElSnoozer",
      "kind": "task",
      "group": "posting",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/221",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:38Z"
    },
    {
      "number": 222,
      "title": "[TASK-84] Implement JobQualification model, additive migration and seed parity",
      "owner": "ElSnoozer",
      "kind": "task",
      "group": "posting",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/222",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-25T22:48:50Z"
    },
    {
      "number": 223,
      "title": "[TASK-85] Extend recruiter posting APIs and public qualification responses",
      "owner": "ElSnoozer",
      "kind": "task",
      "group": "posting",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/223",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:40Z"
    },
    {
      "number": 224,
      "title": "[TASK-86] Build optional qualification editor and public job display",
      "owner": "KaylaKOUM",
      "kind": "task",
      "group": "posting",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/224",
      "labels": [
        "task",
        "frontend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T06:58:41Z"
    },
    {
      "number": 225,
      "title": "[TASK-87] Automated qualification tests and posting backward compatibility",
      "owner": "mzllo",
      "kind": "task",
      "group": "posting",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/225",
      "labels": [
        "task",
        "testing",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T06:58:43Z"
    },
    {
      "number": 226,
      "title": "[TASK-88] Define AI Career Fit Advisor architecture, matching contracts and evidence model",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/226",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:17:56Z"
    },
    {
      "number": 227,
      "title": "[TASK-89] Implement secure candidate inputs and hybrid job retrieval",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/227",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:00Z"
    },
    {
      "number": 228,
      "title": "[TASK-90] Implement reusable Generative AI qualification analysis and evidence validation engine",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/228",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:02Z"
    },
    {
      "number": 229,
      "title": "[TASK-91] Build AI Matches workspace and explainable recommendation UI",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/229",
      "labels": [
        "task",
        "frontend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:05Z"
    },
    {
      "number": 230,
      "title": "[TASK-92] Implement automated AI matching, ranking, grounding and security tests",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/230",
      "labels": [
        "task",
        "testing",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:08Z"
    },
    {
      "number": 231,
      "title": "[TASK-93] Execute Sprint 4 cross-feature regression and record defects",
      "owner": "mzllo",
      "kind": "task",
      "group": "verification",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/231",
      "labels": [
        "task",
        "testing",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:43Z"
    },
    {
      "number": 232,
      "title": "[TASK-94] Validate US-20 AI resume feedback for Sprint 4 evaluation",
      "owner": "mzllo",
      "kind": "task",
      "group": "verification",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/232",
      "labels": [
        "task",
        "testing",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T14:13:19Z"
    },
    {
      "number": 233,
      "title": "[TASK-95] Integrate backend static analysis into existing GitHub Actions CI",
      "owner": "mariaacelena",
      "kind": "task",
      "group": "quality",
      "due": "Nov 26",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/233",
      "labels": [
        "task",
        "priority:p0",
        "ci",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T06:59:36Z"
    },
    {
      "number": 234,
      "title": "[TASK-96] Triage static-analysis findings and document maintenance fixes",
      "owner": "bthorng",
      "kind": "task",
      "group": "quality",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/234",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T06:59:38Z"
    },
    {
      "number": 235,
      "title": "[TASK-97] Audit CI tests, coding standards and independent PR reviews",
      "owner": "mariaacelena",
      "kind": "task",
      "group": "quality",
      "due": "Nov 29",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/235",
      "labels": [
        "task",
        "testing",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T06:59:40Z"
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
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T14:58:05Z"
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
        "testing",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:45Z"
    },
    {
      "number": 238,
      "title": "[TASK-100] Finalize Sprint 4 report, GitHub evidence and submission readiness",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "delivery",
      "due": "Nov 30",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/238",
      "labels": [
        "task",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:47Z"
    },
    {
      "number": 239,
      "title": "[AT-JPV2-01] Optional qualifications across posting creation, edits and public job details",
      "owner": "mariaacelena",
      "kind": "acceptance",
      "group": "posting",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/239",
      "labels": [
        "testing",
        "acceptance-test",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-17T14:13:30Z"
    },
    {
      "number": 240,
      "title": "[AT-US25-01] Validate personalized AI job discovery, explainability and safe failure",
      "owner": "KaylaKOUM",
      "kind": "acceptance",
      "group": "matching",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/240",
      "labels": [
        "testing",
        "acceptance-test",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:18:09Z"
    },
    {
      "number": 246,
      "title": "[TASK-101] Implement deterministic job ranking and fit classification",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 27",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/246",
      "labels": [
        "task",
        "backend",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:17:27Z"
    },
    {
      "number": 247,
      "title": "[TASK-102] Implement contextual individual job fit analysis",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 29",
      "priority": "P1",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/247",
      "labels": [
        "task",
        "frontend",
        "backend",
        "priority:p1",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:17:29Z"
    },
    {
      "number": 248,
      "title": "[TASK-103] Conduct AI evaluation and prepare validation report",
      "owner": "EdishAdventure",
      "kind": "task",
      "group": "matching",
      "due": "Nov 28",
      "priority": "P0",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/248",
      "labels": [
        "task",
        "testing",
        "priority:p0",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:17:31Z"
    },
    {
      "number": 249,
      "title": "[AT-US25-02] Validate individual job fit analysis and safe failure",
      "owner": "KaylaKOUM",
      "kind": "acceptance",
      "group": "matching",
      "due": "Nov 29",
      "priority": "P1",
      "state": "open",
      "url": "https://github.com/EdishAdventure/SOEN341-2026-Team01/issues/249",
      "labels": [
        "testing",
        "acceptance-test",
        "priority:p1",
        "sprint-4"
      ],
      "boardStatus": null,
      "closedAt": null,
      "updatedAt": "2026-11-26T05:17:34Z"
    }
  ],
  "prs": [],
  "ci": null,
  "boardAvailable": false,
  "carryoverTests": [],
  "note": "Sprint 4 Plan v3 planning baseline. 68 unique child SP; actual states and assignees pulled from GitHub live API. Historical Sprint 3 is available separately."
};
