import type {
  FinalProjectPrompt,
  Lesson,
  Module,
  PromptTemplate,
  Quiz,
  ResourceItem,
  Track,
  WorkflowOffer,
} from "@/types/course";

export const tracks: Track[] = [
  {
    slug: "ai-real-estate-basics",
    title: "AI Real Estate Basics",
    audience: ["Beginner", "Agent"],
    tagline: "Learn how to think with AI before you try to automate everything.",
    outcome:
      "Understand prompts, role framing, context stacking, and how to turn messy real estate questions into repeatable AI workflows.",
    featuredPrompt: "prompt-licensing-study-coach",
    moduleSlugs: ["ai-foundations", "licensing-with-ai"],
  },
  {
    slug: "lead-to-close-systems",
    title: "Lead to Close Systems",
    audience: ["Agent", "Wholesaler", "Team Leader"],
    tagline: "Build repeatable lead follow-up, qualification, and pipeline systems.",
    outcome:
      "Turn lead intake, follow-up scripts, offer preparation, and CRM hygiene into reusable AI-assisted SOPs.",
    featuredPrompt: "prompt-lead-follow-up-sequence",
    moduleSlugs: ["lead-workflows", "marketing-systems"],
  },
  {
    slug: "landlord-ops-automation",
    title: "Landlord Ops Automation",
    audience: ["Landlord", "Investor"],
    tagline: "Organize leases, tenants, maintenance, and rehab communication with AI.",
    outcome:
      "Create operating systems for tenant communication, vendor coordination, and property reviews without adding new software first.",
    featuredPrompt: "prompt-tenant-comms-manager",
    moduleSlugs: ["tenant-systems", "rehab-ops"],
  },
];

export const modules: Module[] = [
  {
    slug: "ai-foundations",
    trackSlug: "ai-real-estate-basics",
    title: "AI Foundations For Real Estate",
    description:
      "Start with the core thinking patterns that make AI useful in a real estate business.",
    lessonSlugs: ["prompting-like-an-operator", "turning-chaos-into-checklists"],
  },
  {
    slug: "licensing-with-ai",
    trackSlug: "ai-real-estate-basics",
    title: "Licensing Study With AI",
    description:
      "Use AI as a study partner for vocabulary, practice questions, and concept retention.",
    lessonSlugs: ["licensing-study-coach", "practice-question-remix"],
  },
  {
    slug: "lead-workflows",
    trackSlug: "lead-to-close-systems",
    title: "Lead Workflows",
    description:
      "Create workflows that move inbound leads toward qualified conversations.",
    lessonSlugs: ["lead-triage-system", "follow-up-that-doesnt-sound-robotic"],
  },
  {
    slug: "marketing-systems",
    trackSlug: "lead-to-close-systems",
    title: "Marketing Systems",
    description:
      "Generate consistent listing, brand, and nurture content from simple inputs.",
    lessonSlugs: ["listing-content-engine", "weekly-content-factory"],
  },
  {
    slug: "tenant-systems",
    trackSlug: "landlord-ops-automation",
    title: "Tenant Systems",
    description:
      "Use prompts and templates to standardize tenant communication and screening.",
    lessonSlugs: ["tenant-message-matrix", "screening-and-response-workflow"],
  },
  {
    slug: "rehab-ops",
    trackSlug: "landlord-ops-automation",
    title: "Rehab Operations",
    description:
      "Coordinate scopes, updates, and vendor accountability with AI-assisted workflows.",
    lessonSlugs: ["rehab-scope-generator", "vendor-update-briefs"],
  },
];

export const prompts: PromptTemplate[] = [
  {
    id: "prompt-licensing-study-coach",
    title: "Licensing Study Coach",
    category: "Study Support",
    description:
      "Turn confusing exam topics into plain-English explanations, flashcards, and practice scenarios.",
    useCase: "Use before or after a chapter review.",
    body: `You are my real estate licensing study coach.

Teach this topic in plain English:
{{topic}}

My current understanding:
{{what_i_think_it_means}}

Please respond with:
1. A simple explanation
2. Key definitions I need to memorize
3. One realistic real estate example
4. Three practice questions
5. One memory trick`,
  },
  {
    id: "prompt-lead-follow-up-sequence",
    title: "Lead Follow-Up Sequence Builder",
    category: "Lead Generation",
    description:
      "Generate a multi-step follow-up plan that feels human and tailored to the lead source.",
    useCase: "Use after a new lead comes in from a form, sign call, or referral.",
    body: `Act like a real estate ISA and follow-up strategist.

Create a 5-touch follow-up sequence for this lead:
- Lead source: {{lead_source}}
- Situation: {{lead_situation}}
- Goal: {{desired_outcome}}
- Tone: {{tone}}

For each touch, include:
- Channel
- Message
- CTA
- What to log in the CRM`,
  },
  {
    id: "prompt-tenant-comms-manager",
    title: "Tenant Communication Manager",
    category: "Tenant Management",
    description:
      "Draft clear tenant messages that are firm, professional, and easy to understand.",
    useCase: "Use for maintenance updates, reminders, or move-in/move-out communication.",
    body: `You are helping me communicate with a tenant professionally.

Scenario:
{{scenario}}

Please write:
1. A text message version
2. An email version
3. A notes-to-file summary
4. A next-step checklist for me`,
  },
  {
    id: "prompt-listing-story-builder",
    title: "Listing Story Builder",
    category: "Marketing",
    description:
      "Create listing copy that goes beyond room counts and tells a compelling story.",
    useCase: "Use after collecting property notes and neighborhood highlights.",
    body: `You are a real estate marketing writer.

Build listing copy from:
- Property facts: {{facts}}
- Best features: {{features}}
- Buyer profile: {{buyer_profile}}
- Neighborhood context: {{neighborhood}}

Deliver:
1. Headline
2. MLS remarks
3. Instagram caption
4. Email teaser`,
  },
  {
    id: "prompt-rehab-scope-planner",
    title: "Rehab Scope Planner",
    category: "Operations",
    description:
      "Convert rough rehab notes into a structured scope of work and sequencing plan.",
    useCase: "Use after walkthroughs or contractor calls.",
    body: `You are a rehab project coordinator.

Turn these rough notes into a scope of work:
{{notes}}

Include:
1. Work categories
2. Priority order
3. Questions for vendors
4. Risks or missing info
5. Suggested owner update summary`,
  },
  {
    id: "prompt-deal-analyzer",
    title: "Deal Analyzer Assistant",
    category: "Analysis",
    description:
      "Stress-test an investment opportunity and surface the assumptions that matter.",
    useCase: "Use before deciding whether a deal deserves deeper underwriting.",
    body: `Act like a conservative real estate investment analyst.

Review this deal snapshot:
{{deal_snapshot}}

Respond with:
1. What looks promising
2. What assumptions need verification
3. Biggest risk factors
4. Questions I should ask next
5. A go / maybe / pass recommendation with reasoning`,
  },
];

export const resources: ResourceItem[] = [
  {
    id: "resource-prompt-framework",
    title: "Prompt Framework Worksheet",
    type: "Worksheet",
    description:
      "A simple worksheet for role, context, output format, examples, and constraints.",
    downloadLabel: "Open worksheet",
  },
  {
    id: "resource-crm-audit",
    title: "CRM Cleanup Checklist",
    type: "Checklist",
    description:
      "A weekly cleanup list for tags, notes, follow-ups, and dead leads.",
    downloadLabel: "Open checklist",
  },
  {
    id: "resource-tenant-templates",
    title: "Tenant Message Template Pack",
    type: "Template",
    description:
      "Pre-built messages for move-in, reminders, maintenance, and renewals.",
    downloadLabel: "Open templates",
  },
  {
    id: "resource-rehab-board",
    title: "Rehab Update Board",
    type: "Guide",
    description:
      "A guide for running rehab communication through one repeating update structure.",
    downloadLabel: "Open guide",
  },
];

export const lessons: Lesson[] = [
  {
    slug: "prompting-like-an-operator",
    title: "Prompting Like An Operator",
    moduleSlug: "ai-foundations",
    trackSlug: "ai-real-estate-basics",
    duration: "18 min",
    level: "Starter",
    summary:
      "Learn the difference between casual prompting and operational prompting so AI gives you usable work product.",
    objectives: [
      "Write prompts with role, context, and desired output",
      "Avoid vague asks that produce generic answers",
      "Adapt one prompt across multiple real estate scenarios",
    ],
    promptIds: ["prompt-licensing-study-coach", "prompt-listing-story-builder"],
    resourceIds: ["resource-prompt-framework"],
    quizId: "quiz-ai-foundations",
  },
  {
    slug: "turning-chaos-into-checklists",
    title: "Turning Chaos Into Checklists",
    moduleSlug: "ai-foundations",
    trackSlug: "ai-real-estate-basics",
    duration: "15 min",
    level: "Core",
    summary:
      "Use AI to transform notes, calls, and random ideas into repeatable workflows.",
    objectives: [
      "Extract action steps from brain dumps",
      "Turn recurring tasks into SOP drafts",
      "Identify inputs, outputs, and owners in a workflow",
    ],
    promptIds: ["prompt-rehab-scope-planner"],
    resourceIds: ["resource-prompt-framework", "resource-rehab-board"],
  },
  {
    slug: "licensing-study-coach",
    title: "Build A Licensing Study Coach",
    moduleSlug: "licensing-with-ai",
    trackSlug: "ai-real-estate-basics",
    duration: "20 min",
    level: "Starter",
    summary:
      "Create a reusable study prompt that helps you review chapters, definitions, and likely exam traps.",
    objectives: [
      "Use AI to explain licensing concepts in plain English",
      "Generate custom study drills from your weak spots",
      "Create a study routine you can repeat daily",
    ],
    promptIds: ["prompt-licensing-study-coach"],
    resourceIds: ["resource-prompt-framework"],
  },
  {
    slug: "practice-question-remix",
    title: "Practice Question Remix",
    moduleSlug: "licensing-with-ai",
    trackSlug: "ai-real-estate-basics",
    duration: "12 min",
    level: "Core",
    summary:
      "Take one missed question and turn it into several variations so the concept actually sticks.",
    objectives: [
      "Break down wrong answers to find knowledge gaps",
      "Create variations around the same concept",
      "Build retention through explanation and repetition",
    ],
    promptIds: ["prompt-licensing-study-coach"],
    resourceIds: ["resource-prompt-framework"],
  },
  {
    slug: "lead-triage-system",
    title: "Lead Triage System",
    moduleSlug: "lead-workflows",
    trackSlug: "lead-to-close-systems",
    duration: "16 min",
    level: "Core",
    summary:
      "Sort leads by urgency, motivation, and next action so your follow-up feels intentional.",
    objectives: [
      "Create an intake prompt for new leads",
      "Define simple lead priority bands",
      "Generate immediate next-step recommendations",
    ],
    promptIds: ["prompt-lead-follow-up-sequence"],
    resourceIds: ["resource-crm-audit"],
    quizId: "quiz-lead-systems",
  },
  {
    slug: "follow-up-that-doesnt-sound-robotic",
    title: "Follow-Up That Doesn't Sound Robotic",
    moduleSlug: "lead-workflows",
    trackSlug: "lead-to-close-systems",
    duration: "19 min",
    level: "Advanced",
    summary:
      "Prompt AI for short, contextual follow-up messages that feel like a real person wrote them.",
    objectives: [
      "Match tone to lead source and situation",
      "Create variations for text, email, and voicemail",
      "Preserve personal voice while saving time",
    ],
    promptIds: ["prompt-lead-follow-up-sequence"],
    resourceIds: ["resource-crm-audit"],
  },
  {
    slug: "listing-content-engine",
    title: "Listing Content Engine",
    moduleSlug: "marketing-systems",
    trackSlug: "lead-to-close-systems",
    duration: "17 min",
    level: "Core",
    summary:
      "Turn listing facts into polished content for MLS, email, and social in one workflow.",
    objectives: [
      "Capture the right source notes once",
      "Generate copy across multiple channels",
      "Keep messaging aligned with buyer intent",
    ],
    promptIds: ["prompt-listing-story-builder"],
    resourceIds: ["resource-prompt-framework"],
  },
  {
    slug: "weekly-content-factory",
    title: "Weekly Content Factory",
    moduleSlug: "marketing-systems",
    trackSlug: "lead-to-close-systems",
    duration: "13 min",
    level: "Advanced",
    summary:
      "Create a repeatable weekly system for educational, local, and lead-converting content.",
    objectives: [
      "Batch content themes in one session",
      "Repurpose long ideas into short posts",
      "Avoid sounding repetitive across platforms",
    ],
    promptIds: ["prompt-listing-story-builder"],
    resourceIds: ["resource-prompt-framework"],
  },
  {
    slug: "tenant-message-matrix",
    title: "Tenant Message Matrix",
    moduleSlug: "tenant-systems",
    trackSlug: "landlord-ops-automation",
    duration: "14 min",
    level: "Starter",
    summary:
      "Build a message library that handles common tenant communication faster and more consistently.",
    objectives: [
      "Standardize common tenant messages",
      "Separate text, email, and internal note formats",
      "Protect clarity during tense conversations",
    ],
    promptIds: ["prompt-tenant-comms-manager"],
    resourceIds: ["resource-tenant-templates"],
    quizId: "quiz-landlord-ops",
  },
  {
    slug: "screening-and-response-workflow",
    title: "Screening And Response Workflow",
    moduleSlug: "tenant-systems",
    trackSlug: "landlord-ops-automation",
    duration: "16 min",
    level: "Core",
    summary:
      "Use AI to organize inquiry responses, screening questions, and follow-up notes.",
    objectives: [
      "Create a repeatable inquiry flow",
      "Clarify what you need before scheduling a showing",
      "Document applicant communication cleanly",
    ],
    promptIds: ["prompt-tenant-comms-manager"],
    resourceIds: ["resource-tenant-templates", "resource-crm-audit"],
  },
  {
    slug: "rehab-scope-generator",
    title: "Rehab Scope Generator",
    moduleSlug: "rehab-ops",
    trackSlug: "landlord-ops-automation",
    duration: "22 min",
    level: "Advanced",
    summary:
      "Translate walkthrough notes into scope categories, sequencing, and vendor questions.",
    objectives: [
      "Separate cosmetic, safety, and systems work",
      "Clarify job sequencing before bids",
      "Generate cleaner owner and contractor updates",
    ],
    promptIds: ["prompt-rehab-scope-planner"],
    resourceIds: ["resource-rehab-board"],
  },
  {
    slug: "vendor-update-briefs",
    title: "Vendor Update Briefs",
    moduleSlug: "rehab-ops",
    trackSlug: "landlord-ops-automation",
    duration: "11 min",
    level: "Core",
    summary:
      "Condense scattered texts and photos into clear vendor or owner update summaries.",
    objectives: [
      "Summarize updates with the right level of detail",
      "Surface blockers instead of burying them",
      "Create a reusable weekly reporting format",
    ],
    promptIds: ["prompt-rehab-scope-planner"],
    resourceIds: ["resource-rehab-board"],
  },
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-ai-foundations",
    title: "AI Foundations Checkpoint",
    relatedTrack: "ai-real-estate-basics",
    questions: [
      {
        id: "q1",
        question: "What usually improves AI output the most?",
        options: [
          "Adding random buzzwords",
          "Giving role, context, and desired format",
          "Keeping prompts as short as possible",
          "Using all caps for emphasis",
        ],
        answer: "Giving role, context, and desired format",
        explanation:
          "Operational prompts work best when the model knows who it is, what situation it is solving, and what output to return.",
      },
      {
        id: "q2",
        question: "What is the best use of AI in this MVP?",
        options: [
          "Replacing every step in the business immediately",
          "Creating repeatable support for learning and workflows",
          "Running a live CRM and dialer integration",
          "Sending legal advice directly to clients",
        ],
        answer: "Creating repeatable support for learning and workflows",
        explanation:
          "The MVP is focused on education, prompts, and systems thinking rather than live software automation.",
      },
    ],
  },
  {
    id: "quiz-lead-systems",
    title: "Lead Systems Checkpoint",
    relatedTrack: "lead-to-close-systems",
    questions: [
      {
        id: "q1",
        question: "What makes a lead follow-up prompt more useful?",
        options: [
          "Specifying source, situation, and desired tone",
          "Asking for one generic script",
          "Skipping the call to action",
          "Avoiding any CRM notes",
        ],
        answer: "Specifying source, situation, and desired tone",
        explanation:
          "Lead follow-up quality improves when the prompt includes context that shapes the response.",
      },
      {
        id: "q2",
        question: "Why include CRM logging in a follow-up workflow?",
        options: [
          "To make the process slower",
          "To hide what happened from the team",
          "To preserve next steps and relationship history",
          "Because AI cannot write messages without it",
        ],
        answer: "To preserve next steps and relationship history",
        explanation:
          "The message is only part of the system. The note and next action keep the workflow reliable.",
      },
    ],
  },
  {
    id: "quiz-landlord-ops",
    title: "Landlord Ops Checkpoint",
    relatedTrack: "landlord-ops-automation",
    questions: [
      {
        id: "q1",
        question: "What is the main advantage of a tenant message matrix?",
        options: [
          "It makes every message sound identical",
          "It helps standardize recurring communication scenarios",
          "It removes the need to review messages",
          "It replaces all property management software",
        ],
        answer: "It helps standardize recurring communication scenarios",
        explanation:
          "The matrix gives you a reusable starting point while still letting you tailor the final message.",
      },
      {
        id: "q2",
        question: "Why turn rehab notes into a scope of work?",
        options: [
          "To create more confusion",
          "To avoid defining priorities",
          "To organize tasks, questions, and sequencing",
          "To replace all contractors",
        ],
        answer: "To organize tasks, questions, and sequencing",
        explanation:
          "A structured scope makes coordination and accountability much easier during a rehab.",
      },
    ],
  },
];

export const finalProject: FinalProjectPrompt = {
  title: "Build Your Signature Real Estate AI Workflow",
  description:
    "Choose one workflow you actually need in your business and turn it into a repeatable system with prompts, steps, and templates.",
  deliverables: [
    "A workflow name and the real business problem it solves",
    "The inputs you gather before using AI",
    "Your best working prompt or prompt sequence",
    "A step-by-step SOP someone else could follow",
    "A short reflection on where human judgment is still required",
  ],
};

export const workflowOffer: WorkflowOffer = {
  title: "Custom Workflow Build Request",
  description:
    "When you know the business problem but do not want to architect the workflow alone, submit a request and outline your current process.",
  deliverables: [
    "Business context and desired outcome",
    "Current process pain points",
    "Data or documents already available",
    "Preferred output format such as SOP, prompt pack, or checklist",
  ],
};

export const dashboardHighlights = [
  {
    title: "Learn Real Estate With AI",
    description:
      "Study concepts, licensing topics, and deal logic with guided prompts and structured lessons.",
  },
  {
    title: "Build Reusable Workflows",
    description:
      "Turn lead follow-up, tenant communication, and rehab updates into repeatable systems.",
  },
  {
    title: "Stay Practical",
    description:
      "Every lesson is tied to a real-world task instead of abstract AI theory.",
  },
];

export function getTrackBySlug(trackSlug: string) {
  return tracks.find((track) => track.slug === trackSlug);
}

export function getModuleBySlug(moduleSlug: string) {
  return modules.find((module) => module.slug === moduleSlug);
}

export function getLessonBySlug(lessonSlug: string) {
  return lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getPromptById(promptId: string) {
  return prompts.find((prompt) => prompt.id === promptId);
}

export function getResourceById(resourceId: string) {
  return resources.find((resource) => resource.id === resourceId);
}

export function getQuizById(quizId: string) {
  return quizzes.find((quiz) => quiz.id === quizId);
}

export function getModulesForTrack(trackSlug: string) {
  return modules.filter((module) => module.trackSlug === trackSlug);
}

export function getLessonsForModule(moduleSlug: string) {
  return lessons.filter((lesson) => lesson.moduleSlug === moduleSlug);
}

export function getLessonsForTrack(trackSlug: string) {
  return lessons.filter((lesson) => lesson.trackSlug === trackSlug);
}
