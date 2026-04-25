"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { storageKeys } from "@/lib/utils";

type SavedQuizResult = {
  score: number;
  total: number;
};

type ActivityEvent = {
  id: string;
  type:
    | "login"
    | "track"
    | "lesson"
    | "prompt"
    | "quiz"
    | "submission";
  title: string;
  description: string;
  at: string;
  href?: string;
};

type WorkflowSubmission = {
  requestType: "custom-build" | "final-project";
  title: string;
  details: string;
  submittedAt: string;
};

type DemoUser = {
  name: string;
  email: string;
  role: string;
};

type AppStateValue = {
  isHydrated: boolean;
  user: DemoUser | null;
  selectedTrack: string | null;
  completedLessons: string[];
  favoritePromptIds: string[];
  savedQuizResults: Record<string, SavedQuizResult>;
  workflowSubmissions: WorkflowSubmission[];
  activityLog: ActivityEvent[];
  login: (payload: DemoUser) => void;
  logout: () => void;
  selectTrack: (trackSlug: string) => void;
  toggleLessonComplete: (lessonSlug: string) => void;
  toggleFavoritePrompt: (promptId: string) => void;
  saveQuizResult: (quizId: string, score: number, total: number) => void;
  submitWorkflow: (payload: Omit<WorkflowSubmission, "submittedAt">) => void;
};

const AppStateContext = createContext<AppStateValue | undefined>(undefined);

type PersistedState = Pick<
  AppStateValue,
  | "user"
  | "selectedTrack"
  | "completedLessons"
  | "favoritePromptIds"
  | "savedQuizResults"
  | "workflowSubmissions"
  | "activityLog"
>;

const initialState: PersistedState = {
  user: null,
  selectedTrack: null,
  completedLessons: [],
  favoritePromptIds: [],
  savedQuizResults: {},
  workflowSubmissions: [],
  activityLog: [],
};

function buildEvent(event: Omit<ActivityEvent, "id" | "at">): ActivityEvent {
  return {
    ...event,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    at: new Date().toISOString(),
  };
}

function prependActivity(
  current: PersistedState,
  event: Omit<ActivityEvent, "id" | "at">,
) {
  return [buildEvent(event), ...current.activityLog].slice(0, 24);
}

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PersistedState>(() => {
    if (typeof window === "undefined") {
      return initialState;
    }

    const raw = window.localStorage.getItem(storageKeys.appState);

    if (!raw) {
      return initialState;
    }

    try {
      return { ...initialState, ...JSON.parse(raw) };
    } catch {
      return initialState;
    }
  });

  const isHydrated = true;

  if (typeof window !== "undefined") {
    window.localStorage.setItem(storageKeys.appState, JSON.stringify(state));
  }

  const value = useMemo<AppStateValue>(
    () => ({
      ...state,
      isHydrated,
      login(payload) {
        setState((current) => ({
          ...current,
          user: payload,
          activityLog: prependActivity(current, {
            type: "login",
            title: "Signed into local workspace",
            description: `Started a local session as ${payload.role}.`,
            href: "/dashboard",
          }),
        }));
      },
      logout() {
        setState((current) => ({ ...current, user: null }));
      },
      selectTrack(trackSlug) {
        setState((current) => ({
          ...current,
          selectedTrack: trackSlug,
          activityLog: prependActivity(current, {
            type: "track",
            title: "Selected a track",
            description: `Set ${trackSlug} as the current learning direction.`,
            href: `/tracks/${trackSlug}`,
          }),
        }));
      },
      toggleLessonComplete(lessonSlug) {
        setState((current) => {
          const isComplete = current.completedLessons.includes(lessonSlug);

          return {
            ...current,
            completedLessons: isComplete
              ? current.completedLessons.filter((slug) => slug !== lessonSlug)
              : [...current.completedLessons, lessonSlug],
            activityLog: prependActivity(current, {
              type: "lesson",
              title: isComplete ? "Reopened a lesson" : "Completed a lesson",
              description: isComplete
                ? `Marked ${lessonSlug} as incomplete for another pass.`
                : `Marked ${lessonSlug} complete in the lesson path.`,
              href: `/lessons/${lessonSlug}`,
            }),
          };
        });
      },
      toggleFavoritePrompt(promptId) {
        setState((current) => {
          const isFavorite = current.favoritePromptIds.includes(promptId);

          return {
            ...current,
            favoritePromptIds: isFavorite
              ? current.favoritePromptIds.filter((id) => id !== promptId)
              : [...current.favoritePromptIds, promptId],
            activityLog: prependActivity(current, {
              type: "prompt",
              title: isFavorite ? "Removed a saved prompt" : "Saved a prompt",
              description: isFavorite
                ? `Removed ${promptId} from the workflow library.`
                : `Saved ${promptId} to the personal prompt library.`,
              href: "/prompts",
            }),
          };
        });
      },
      saveQuizResult(quizId, score, total) {
        setState((current) => ({
          ...current,
          savedQuizResults: {
            ...current.savedQuizResults,
            [quizId]: { score, total },
          },
          activityLog: prependActivity(current, {
            type: "quiz",
            title: "Finished a quiz checkpoint",
            description: `Saved a local score of ${score}/${total} for ${quizId}.`,
            href: `/quizzes/${quizId}`,
          }),
        }));
      },
      submitWorkflow(payload) {
        setState((current) => ({
          ...current,
          workflowSubmissions: [
            {
              ...payload,
              submittedAt: new Date().toISOString(),
            },
            ...current.workflowSubmissions,
          ],
          activityLog: prependActivity(current, {
            type: "submission",
            title:
              payload.requestType === "final-project"
                ? "Submitted a final project draft"
                : "Submitted a custom workflow request",
            description: payload.title,
            href:
              payload.requestType === "final-project"
                ? "/final-project"
                : "/custom-build-request",
          }),
        }));
      },
    }),
    [isHydrated, state],
  );

  return (
    <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }

  return context;
}
