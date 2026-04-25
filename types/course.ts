export type Audience =
  | "Beginner"
  | "Agent"
  | "Wholesaler"
  | "Landlord"
  | "Investor"
  | "Team Leader";

export type PromptCategory =
  | "Lead Generation"
  | "Marketing"
  | "Operations"
  | "Tenant Management"
  | "Analysis"
  | "Study Support";

export type ResourceType = "Template" | "Checklist" | "Guide" | "Worksheet";

export interface Lesson {
  slug: string;
  title: string;
  moduleSlug: string;
  trackSlug: string;
  duration: string;
  level: "Starter" | "Core" | "Advanced";
  summary: string;
  objectives: string[];
  promptIds: string[];
  resourceIds: string[];
  quizId?: string;
}

export interface LessonDetail {
  lessonSlug: string;
  whyItMatters: string;
  fieldScenario: string;
  workflowBlueprint: string[];
  commonMistakes: string[];
  doThisToday: string[];
}

export interface Module {
  slug: string;
  trackSlug: string;
  title: string;
  description: string;
  lessonSlugs: string[];
}

export interface ModuleDetail {
  moduleSlug: string;
  promise: string;
  outcomes: string[];
  buildAssets: string[];
}

export interface Track {
  slug: string;
  title: string;
  audience: Audience[];
  tagline: string;
  outcome: string;
  featuredPrompt: string;
  moduleSlugs: string[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: PromptCategory;
  description: string;
  useCase: string;
  body: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: ResourceType;
  description: string;
  downloadLabel: string;
}

export interface PromptPack {
  id: string;
  title: string;
  description: string;
  promptIds: string[];
}

export interface ResourceCollection {
  id: string;
  title: string;
  description: string;
  resourceIds: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  relatedTrack: string;
  questions: QuizQuestion[];
}

export interface FinalProjectPrompt {
  title: string;
  description: string;
  deliverables: string[];
}

export interface WorkflowOffer {
  title: string;
  description: string;
  deliverables: string[];
}
