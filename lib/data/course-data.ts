import type {
  FinalProjectPrompt,
  Lesson,
  LessonDetail,
  Module,
  ModuleDetail,
  PromptTemplate,
  PromptPack,
  Quiz,
  ResourceCollection,
  ResourceItem,
  Track,
  TrackDetail,
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

export const trackDetails: TrackDetail[] = [
  {
    trackSlug: "ai-real-estate-basics",
    transformation:
      "Go from curious-but-unsure to someone who can study with AI, frame better prompts, and turn real estate confusion into clear learning systems.",
    bestFor: [
      "Beginners who want a better learning loop",
      "New agents studying terminology and process",
      "Anyone who understands AI loosely but not operationally",
    ],
    firstMoves: [
      "Start with AI Foundations For Real Estate",
      "Save one study prompt and one workflow prompt",
      "Use the first quiz to check whether concepts are actually sticking",
    ],
    artifactsBuilt: [
      "A personal study coach prompt",
      "A repeatable review routine",
      "A cleaner mental model for operational prompting",
    ],
  },
  {
    trackSlug: "lead-to-close-systems",
    transformation:
      "Go from scattered lead handling and inconsistent marketing to a repeatable operating rhythm for follow-up, content, and pipeline discipline.",
    bestFor: [
      "Agents who want more consistency in follow-up",
      "Wholesalers managing incoming lead volume",
      "Team leaders who need repeatable process before scale",
    ],
    firstMoves: [
      "Pick one lead source and build a triage rule for it",
      "Save a follow-up prompt you would genuinely reuse",
      "Turn one marketing task into a weekly workflow",
    ],
    artifactsBuilt: [
      "A lead triage checklist",
      "A reusable follow-up prompt sequence",
      "A weekly listing or content workflow",
    ],
  },
  {
    trackSlug: "landlord-ops-automation",
    transformation:
      "Go from reactive property operations to clearer tenant communication, cleaner rehab coordination, and better documented day-to-day workflows.",
    bestFor: [
      "Landlords who want less friction in tenant communication",
      "Investors managing rehabs or recurring vendor updates",
      "Operators who need systems before hiring more support",
    ],
    firstMoves: [
      "Map the tenant or rehab scenario that repeats most often",
      "Create one message template and one ops checklist",
      "Use the track to turn scattered notes into a repeatable structure",
    ],
    artifactsBuilt: [
      "A tenant communication matrix",
      "A rehab scope prompt and update format",
      "A reusable ops checklist for recurring property work",
    ],
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

export const moduleDetails: ModuleDetail[] = [
  {
    moduleSlug: "ai-foundations",
    promise:
      "Build the mental model that makes AI useful in a real estate business instead of treating it like a novelty generator.",
    outcomes: [
      "Understand how role, context, and output format change quality",
      "Turn messy notes into structured checklists and workflows",
      "Develop a habit of saving strong prompts instead of rewriting them",
    ],
    buildAssets: [
      "A reusable prompt framework",
      "A checklist-building workflow",
      "A better sense of what good AI output should look like",
    ],
  },
  {
    moduleSlug: "licensing-with-ai",
    promise:
      "Use AI like a study coach so licensing prep becomes more targeted, less repetitive, and easier to retain.",
    outcomes: [
      "Clarify confusing concepts in plain English",
      "Transform missed questions into concept drills",
      "Build a repeatable review process from weak spots",
    ],
    buildAssets: [
      "A study coach prompt",
      "A practice-question remix workflow",
      "A lightweight daily review loop",
    ],
  },
  {
    moduleSlug: "lead-workflows",
    promise:
      "Create a lead-handling system that improves speed and consistency without making follow-up feel robotic.",
    outcomes: [
      "Prioritize leads by urgency and motivation",
      "Generate better messages for different channels",
      "Capture next actions and CRM logging rules",
    ],
    buildAssets: [
      "A lead triage checklist",
      "A follow-up sequence prompt",
      "A notes and next-action structure for the pipeline",
    ],
  },
  {
    moduleSlug: "marketing-systems",
    promise:
      "Build a content engine that turns property notes and local knowledge into repeatable marketing assets.",
    outcomes: [
      "Translate listing facts into useful buyer-facing copy",
      "Batch content themes for weekly publishing",
      "Repurpose one idea into multiple formats quickly",
    ],
    buildAssets: [
      "A listing copy workflow",
      "A weekly content batching routine",
      "A reusable format for multi-channel marketing assets",
    ],
  },
  {
    moduleSlug: "tenant-systems",
    promise:
      "Reduce friction in tenant operations by standardizing messages and screening workflows before problems scale.",
    outcomes: [
      "Use clearer messaging across recurring tenant scenarios",
      "Organize inquiry screening and response logic",
      "Document communication with less stress and rework",
    ],
    buildAssets: [
      "A tenant message matrix",
      "A screening response workflow",
      "Internal note templates for property operations",
    ],
  },
  {
    moduleSlug: "rehab-ops",
    promise:
      "Bring more structure to rehab coordination so contractors, owners, and operators stay aligned.",
    outcomes: [
      "Turn walkthrough notes into scopes of work",
      "Sequence tasks and surface missing information earlier",
      "Send more useful update briefs to vendors and owners",
    ],
    buildAssets: [
      "A rehab scope generator prompt",
      "A vendor update briefing format",
      "A repeatable sequencing checklist for small projects",
    ],
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

export const promptPacks: PromptPack[] = [
  {
    id: "pack-study-and-skills",
    title: "Study And Skills Pack",
    description:
      "Prompts for clarifying concepts, fixing weak spots, and building a smarter learning loop.",
    promptIds: ["prompt-licensing-study-coach"],
  },
  {
    id: "pack-lead-and-marketing",
    title: "Lead And Marketing Pack",
    description:
      "Prompts for follow-up strategy, listing content, and converting notes into audience-ready messaging.",
    promptIds: ["prompt-lead-follow-up-sequence", "prompt-listing-story-builder"],
  },
  {
    id: "pack-operations-and-analysis",
    title: "Operations And Analysis Pack",
    description:
      "Prompts for tenant communication, rehab planning, and evaluating whether a deal deserves deeper attention.",
    promptIds: [
      "prompt-tenant-comms-manager",
      "prompt-rehab-scope-planner",
      "prompt-deal-analyzer",
    ],
  },
];

export const resourceCollections: ResourceCollection[] = [
  {
    id: "collection-foundation-kit",
    title: "Foundation Kit",
    description:
      "Worksheets and checklists that help users move from one-off prompts to reusable structures.",
    resourceIds: ["resource-prompt-framework", "resource-crm-audit"],
  },
  {
    id: "collection-operations-kit",
    title: "Operations Kit",
    description:
      "Templates and guides for the recurring communication and coordination work that tends to get messy.",
    resourceIds: ["resource-tenant-templates", "resource-rehab-board"],
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

export const lessonDetails: LessonDetail[] = [
  {
    lessonSlug: "prompting-like-an-operator",
    whyItMatters:
      "Most people get weak AI results because they ask for output before they define the situation. This lesson teaches users to give AI enough shape so the answer becomes usable, not just interesting.",
    fieldScenario:
      "A new agent asks AI to write follow-up copy and gets something generic. After adding the lead source, the seller's timing, the desired tone, and the call to action, the output becomes much closer to something they would actually send.",
    workflowBlueprint: [
      "Define the role AI should play in the task",
      "Add the situation and business context",
      "Specify the output format you want back",
      "Include tone, constraints, and examples if needed",
    ],
    commonMistakes: [
      "Asking for copy without describing the real situation",
      "Using one prompt for every audience and channel",
      "Treating a first draft like finished work",
    ],
    doThisToday: [
      "Rewrite one vague prompt you already use into a clearer operational prompt",
      "Save the version that gives the most usable output",
      "Document why the better version worked",
    ],
  },
  {
    lessonSlug: "turning-chaos-into-checklists",
    whyItMatters:
      "Real estate work often starts as messy notes, texts, or verbal updates. The ability to turn that mess into a checklist is what makes AI genuinely operational.",
    fieldScenario:
      "An investor leaves a property walkthrough with scattered rehab notes. Instead of manually sorting everything later, they use AI to break the notes into trades, priorities, and follow-up questions.",
    workflowBlueprint: [
      "Drop in the raw notes without over-cleaning them first",
      "Ask AI to categorize the work into logical buckets",
      "Have it sequence the work and flag missing information",
      "Turn the result into a repeatable SOP or checklist",
    ],
    commonMistakes: [
      "Trying to perfect the notes before using AI",
      "Skipping the step where missing information is surfaced",
      "Failing to convert the output into a reusable structure",
    ],
    doThisToday: [
      "Take one recent brain dump and turn it into a checklist",
      "Label which tasks belong to you versus a vendor or teammate",
      "Reuse the same structure on the next messy task",
    ],
  },
  {
    lessonSlug: "licensing-study-coach",
    whyItMatters:
      "Beginners often need the same concept explained several different ways before it clicks. AI becomes useful when it acts like a study coach instead of a trivia machine.",
    fieldScenario:
      "A learner keeps missing questions about agency relationships. They use AI to explain the concept in plain English, build flashcards, and generate practice questions around the exact weak spot.",
    workflowBlueprint: [
      "Name the concept that feels unclear",
      "Describe what you currently think it means",
      "Ask for a plain-English explanation and one realistic example",
      "Generate flashcards and practice questions from the response",
    ],
    commonMistakes: [
      "Using AI to skim instead of to reinforce weak spots",
      "Studying broad topics when the real issue is one concept",
      "Not saving the best study prompt for future chapters",
    ],
    doThisToday: [
      "Pick one licensing topic you are shaky on",
      "Use the study coach prompt to clarify it",
      "Create a mini review loop from the output",
    ],
  },
  {
    lessonSlug: "practice-question-remix",
    whyItMatters:
      "One missed question is not just a wrong answer. It is a chance to locate a pattern of confusion and practice the concept from multiple angles.",
    fieldScenario:
      "A student misses one fair housing question. AI remixes the scenario into three more variations so the learner understands the principle, not just the original wording.",
    workflowBlueprint: [
      "Paste the missed question and explain why you chose the wrong answer",
      "Ask AI to isolate the concept being tested",
      "Generate multiple variations of the question",
      "Review the explanations until the logic feels predictable",
    ],
    commonMistakes: [
      "Memorizing answer keys instead of concepts",
      "Moving on too fast after a wrong answer",
      "Not asking AI to explain why the distractors are wrong",
    ],
    doThisToday: [
      "Take your most recent missed question",
      "Create three new variations of it with AI",
      "Write one sentence about what the question is really testing",
    ],
  },
  {
    lessonSlug: "lead-triage-system",
    whyItMatters:
      "Not every lead deserves the same speed, tone, or follow-up sequence. A triage system helps teams stop treating all inquiries as equal.",
    fieldScenario:
      "An agent gets leads from Zillow, open houses, referrals, and sign calls. AI helps sort them by urgency, motivation, and next best action before anyone starts sending messages.",
    workflowBlueprint: [
      "Define the source and current context of the lead",
      "Ask AI to rank urgency and likely motivation",
      "Assign a response path and next action",
      "Document what should be logged in the CRM",
    ],
    commonMistakes: [
      "Treating every lead like the same script applies",
      "Skipping the step where urgency gets classified",
      "Leaving next actions vague after the first contact",
    ],
    doThisToday: [
      "Pick one active lead pipeline",
      "Create a simple high-medium-low triage structure",
      "Use it to process your next five leads consistently",
    ],
  },
  {
    lessonSlug: "follow-up-that-doesnt-sound-robotic",
    whyItMatters:
      "Poor AI follow-up sounds like bad copywriting, not good relationship-building. The goal is to preserve warmth and intent while saving time.",
    fieldScenario:
      "A wholesaler wants a seller follow-up that feels human, low-pressure, and grounded in the lead's timing. AI helps create several message variations without losing tone.",
    workflowBlueprint: [
      "Capture the lead source, situation, and desired tone",
      "Generate several channel-specific versions",
      "Edit the strongest version to match your voice",
      "Save the prompt structure for future follow-up",
    ],
    commonMistakes: [
      "Sending AI output without editing for tone",
      "Making follow-up sound pushy when the situation is early",
      "Ignoring the difference between text, email, and voicemail voice",
    ],
    doThisToday: [
      "Rewrite one robotic follow-up you have used before",
      "Create one softer version and one more direct version",
      "Save both as reusable templates",
    ],
  },
  {
    lessonSlug: "listing-content-engine",
    whyItMatters:
      "Listing copy often becomes repetitive because the source notes are weak or the workflow is inconsistent. AI helps when the inputs are strong and the output channels are defined.",
    fieldScenario:
      "An agent has listing facts, feature notes, and neighborhood context. AI helps turn that into MLS remarks, an email teaser, and a social caption in one pass.",
    workflowBlueprint: [
      "Gather the best factual notes and buyer-facing highlights",
      "Define the likely buyer profile",
      "Ask AI for channel-specific copy outputs",
      "Edit for accuracy, compliance, and local voice",
    ],
    commonMistakes: [
      "Starting with generic adjectives instead of property specifics",
      "Using the same copy across every channel",
      "Skipping an accuracy review after generation",
    ],
    doThisToday: [
      "Take one current or old listing",
      "Produce three channel outputs from one structured prompt",
      "Note which source details made the copy stronger",
    ],
  },
  {
    lessonSlug: "weekly-content-factory",
    whyItMatters:
      "Marketing gets easier when content comes from a repeatable engine instead of last-minute inspiration. AI is most helpful when it is fed a structure.",
    fieldScenario:
      "A solo agent wants one weekly session that creates educational posts, neighborhood content, and light lead nurture messaging without staring at a blank screen.",
    workflowBlueprint: [
      "Choose recurring content themes for the week",
      "Batch short source notes for each theme",
      "Generate platform-specific variations from the same core idea",
      "Store the winners in a reuse library",
    ],
    commonMistakes: [
      "Trying to generate content without defining themes",
      "Publishing copy that sounds detached from the local market",
      "Not tracking which angles actually resonate",
    ],
    doThisToday: [
      "Pick three weekly content themes",
      "Draft one batch prompt that supports all three",
      "Save the format as a recurring content ritual",
    ],
  },
  {
    lessonSlug: "tenant-message-matrix",
    whyItMatters:
      "Tenant communication improves when common situations already have a clear starting point. A matrix reduces stress and inconsistency across recurring scenarios.",
    fieldScenario:
      "A landlord juggles maintenance reminders, move-in communication, and late follow-up. Instead of rewriting everything from scratch, they keep message templates with room for context.",
    workflowBlueprint: [
      "List the recurring tenant communication scenarios",
      "Create a text, email, and internal note version for each",
      "Define the tone boundaries for each message type",
      "Save the templates where they can be reused quickly",
    ],
    commonMistakes: [
      "Using the same tone for every tenant situation",
      "Sending unclear instructions during time-sensitive issues",
      "Failing to document what was communicated",
    ],
    doThisToday: [
      "Build templates for three recurring tenant situations",
      "Create one matching internal note format",
      "Test whether the language feels clear and calm",
    ],
  },
  {
    lessonSlug: "screening-and-response-workflow",
    whyItMatters:
      "A screening workflow helps landlords stay organized, consistent, and efficient before showings or application reviews begin.",
    fieldScenario:
      "A property operator receives multiple inquiries and needs a repeatable way to respond, collect basic information, and identify who is ready for the next step.",
    workflowBlueprint: [
      "Define the key information you need before moving forward",
      "Build a first-response template that gathers it",
      "Create a note structure for inquiry status and follow-up",
      "Keep the process consistent across prospects",
    ],
    commonMistakes: [
      "Responding ad hoc instead of using a structure",
      "Requesting too much information too early",
      "Forgetting to log inquiry status after the reply",
    ],
    doThisToday: [
      "Map the first three steps of your screening flow",
      "Write one standard first-response prompt",
      "Create a notes format you can reuse for every inquiry",
    ],
  },
  {
    lessonSlug: "rehab-scope-generator",
    whyItMatters:
      "Rehab projects go sideways when notes stay vague. Turning rough walkthrough observations into a scope creates clearer communication and better sequencing.",
    fieldScenario:
      "After walking a property, an investor has fragmented notes about flooring, plumbing, paint, and safety repairs. AI helps turn that list into a structured scope of work.",
    workflowBlueprint: [
      "Gather raw walkthrough notes in one place",
      "Ask AI to group them by trade or work category",
      "Sequence the work and highlight dependencies",
      "Generate a contractor question list and owner summary",
    ],
    commonMistakes: [
      "Lumping cosmetic and safety issues together",
      "Not clarifying sequencing before requesting bids",
      "Forgetting to surface unknowns and site questions",
    ],
    doThisToday: [
      "Use one recent rehab note dump as a test case",
      "Turn it into categories and priority order",
      "Save the prompt so the next walkthrough is faster",
    ],
  },
  {
    lessonSlug: "vendor-update-briefs",
    whyItMatters:
      "Vendor and owner updates usually get messy because the information is scattered across texts, calls, and photos. A briefing format restores clarity.",
    fieldScenario:
      "A landlord has updates from a contractor, a photo thread, and a tenant complaint. AI helps condense those details into one clear status brief with blockers and next steps.",
    workflowBlueprint: [
      "Collect updates from the day or week into one source note",
      "Ask AI to summarize progress, blockers, and pending decisions",
      "Create one version for vendors and one for owners if needed",
      "Store the structure for repeating updates",
    ],
    commonMistakes: [
      "Sharing too much raw detail with no prioritization",
      "Failing to highlight blockers clearly",
      "Leaving the reader unsure what action is needed",
    ],
    doThisToday: [
      "Pull together one recent set of vendor updates",
      "Turn it into a short structured brief",
      "Reuse that format for your next project update",
    ],
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
  rubric: [
    "The workflow solves a real business problem instead of an abstract idea",
    "The prompt is specific enough to reproduce similar output later",
    "The SOP is clear enough that another person could follow it",
    "The student identifies where human review still matters",
  ],
  exampleProjects: [
    {
      title: "Seller Lead Follow-Up System",
      description:
        "A sequence that takes lead source, timing, and motivation and turns them into text, email, and notes-to-CRM outputs.",
    },
    {
      title: "Licensing Study Drill Workflow",
      description:
        "A study routine that converts missed questions into explanations, flashcards, and concept variations.",
    },
    {
      title: "Tenant Maintenance Communication Flow",
      description:
        "A system for intake, response drafting, internal notes, and follow-up messaging around recurring property issues.",
    },
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
  process: [
    "We clarify the business problem and the exact workflow outcome you want",
    "We identify what inputs, prompts, and steps the workflow needs",
    "We package it into something usable, such as a prompt pack, SOP, or checklist flow",
  ],
  idealFits: [
    "Lead follow-up and qualification",
    "Listing marketing and content repurposing",
    "Tenant communication and maintenance ops",
    "Rehab coordination and vendor updates",
    "Deal analysis and underwriting support",
  ],
  exampleRequests: [
    "Build me a workflow for new seller leads from sign calls",
    "Help me systemize my weekly listing marketing content",
    "Create a repeatable tenant maintenance response workflow",
    "Turn my rehab walkthrough notes into a reusable scope process",
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

export const landingPersonas = [
  {
    title: "New agent who wants structure",
    description:
      "Use AI to study faster, explain concepts in plain English, and build repeatable routines before the business gets chaotic.",
  },
  {
    title: "Working agent who needs systems",
    description:
      "Turn lead follow-up, listing copy, and CRM cleanup into workflows you can actually repeat every week.",
  },
  {
    title: "Landlord or investor running operations",
    description:
      "Organize tenant messages, rehab notes, vendor updates, and deal thinking without buying five more tools first.",
  },
];

export const landingWorkflowExamples = [
  {
    title: "Licensing Study Engine",
    description:
      "Take a chapter, generate plain-English explanations, remix missed questions, and build a daily review loop.",
  },
  {
    title: "Lead Follow-Up Factory",
    description:
      "Sort incoming leads by urgency, create human-sounding follow-ups, and convert the process into a team SOP.",
  },
  {
    title: "Listing Content System",
    description:
      "Turn facts, features, and neighborhood notes into MLS remarks, email teasers, and social captions.",
  },
  {
    title: "Tenant Communication Board",
    description:
      "Build message templates for maintenance, reminders, move-in logistics, and written notes for your own records.",
  },
  {
    title: "Rehab Scope Organizer",
    description:
      "Convert messy walkthrough notes into trade categories, sequencing, vendor questions, and owner updates.",
  },
  {
    title: "Deal Analysis Assistant",
    description:
      "Pressure-test a potential acquisition with better questions, clearer assumptions, and a conservative decision frame.",
  },
];

export const landingCurriculumPillars = [
  {
    title: "Learn the concept",
    description:
      "Every lesson starts with the reasoning behind the workflow so the user understands what good output looks like.",
  },
  {
    title: "Use a real prompt",
    description:
      "Prompt templates are tied to actual real estate tasks, not generic AI demos disconnected from the business.",
  },
  {
    title: "Save the good ones",
    description:
      "Users keep the prompts they want to reuse, which gradually turns learning into a working library.",
  },
  {
    title: "Turn it into a system",
    description:
      "The end goal is not one clever output. The end goal is a repeatable process someone can use again tomorrow.",
  },
];

export const landingTestimonials = [
  {
    quote:
      "This feels less like a course and more like finally having a structure for all the things I keep meaning to systemize.",
    author: "Sample learner profile",
    role: "Agent building a repeatable lead workflow",
  },
  {
    quote:
      "I did not need more AI hype. I needed a way to turn messy notes into tenant and rehab systems I could actually use.",
    author: "Sample learner profile",
    role: "Landlord and small portfolio operator",
  },
  {
    quote:
      "The value is that it teaches the thinking and gives you prompts, instead of pretending one magic tool does the whole job.",
    author: "Sample learner profile",
    role: "New investor learning deal analysis",
  },
];

export const landingFaqs = [
  {
    question: "Is this an AI chat product?",
    answer:
      "No. The MVP is a guided learning and workflow-building app. It teaches users how to use AI well rather than embedding a full chat product on day one.",
  },
  {
    question: "Is this a traditional real estate course?",
    answer:
      "Also no. The point is practical application. Lessons are built around prompts, systems, operating habits, and repeatable workflows.",
  },
  {
    question: "Who is this for first?",
    answer:
      "Beginners, agents, wholesalers, landlords, investors, and real estate professionals who want to use AI to think better and operate more consistently.",
  },
  {
    question: "What happens after the local MVP?",
    answer:
      "The next phase is swapping local browser state for Supabase auth and database persistence while keeping the same user-facing structure.",
  },
];

export const onboardingPaths = [
  {
    title: "I am brand new and need structure",
    description:
      "Start in AI Real Estate Basics, save one study prompt, and complete one lesson plus one quiz before doing anything else.",
    href: "/tracks/ai-real-estate-basics",
  },
  {
    title: "I already work leads and want systems",
    description:
      "Start in Lead to Close Systems and focus on one repeatable lead workflow before expanding into marketing.",
    href: "/tracks/lead-to-close-systems",
  },
  {
    title: "I manage properties or projects",
    description:
      "Start in Landlord Ops Automation and pick the one communication or rehab process that creates the most weekly friction.",
    href: "/tracks/landlord-ops-automation",
  },
];

export const pricingNarrative = {
  headline: "The local MVP is for validating demand, flow, and positioning before backend complexity.",
  bullets: [
    "Use the free local experience to test whether the education and workflow framing feels compelling.",
    "Move into the guided version once you want real accounts, persistent dashboards, and production submissions.",
    "Use custom workflow builds when you want a done-with-you operating system instead of only self-serve lessons.",
  ],
};

export const pricingComparison = [
  {
    feature: "Interactive lesson flow",
    starter: "Included in local MVP",
    guided: "Included with saved progress",
  },
  {
    feature: "Prompt library and favorites",
    starter: "Browser-saved only",
    guided: "Account-saved and organized",
  },
  {
    feature: "Quiz results",
    starter: "Saved locally",
    guided: "Persistent across devices",
  },
  {
    feature: "Final project submissions",
    starter: "Local testing mode",
    guided: "Database-backed submissions",
  },
  {
    feature: "Custom workflow requests",
    starter: "Form structure only",
    guided: "Production intake and delivery flow",
  },
];

export const customBuildProcess = [
  {
    title: "Audit the current process",
    description:
      "We start by understanding what the operator is doing today, where it breaks down, and which parts repeat often enough to deserve a system.",
  },
  {
    title: "Design the prompt and workflow logic",
    description:
      "Next comes the decision framework, prompt structure, templates, and SOP logic that make the workflow actually reusable.",
  },
  {
    title: "Package it for real use",
    description:
      "The final deliverable is not just a cool prompt. It is a practical operating asset someone can use inside the business.",
  },
];

export const customBuildExamples = [
  "Lead intake and follow-up workflow pack",
  "Listing content and nurture sequence system",
  "Tenant communication and maintenance response templates",
  "Rehab scope, update, and vendor coordination framework",
  "Deal analysis and acquisition review checklist flow",
];

export function getTrackBySlug(trackSlug: string) {
  return tracks.find((track) => track.slug === trackSlug);
}

export function getTrackDetail(trackSlug: string) {
  return trackDetails.find((detail) => detail.trackSlug === trackSlug);
}

export function getModuleBySlug(moduleSlug: string) {
  return modules.find((module) => module.slug === moduleSlug);
}

export function getModuleDetail(moduleSlug: string) {
  return moduleDetails.find((detail) => detail.moduleSlug === moduleSlug);
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

export function getLessonDetail(lessonSlug: string) {
  return lessonDetails.find((detail) => detail.lessonSlug === lessonSlug);
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
