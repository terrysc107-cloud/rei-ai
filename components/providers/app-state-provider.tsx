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
>;

const initialState: PersistedState = {
  user: null,
  selectedTrack: null,
  completedLessons: [],
  favoritePromptIds: [],
  savedQuizResults: {},
  workflowSubmissions: [],
};

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
        setState((current) => ({ ...current, user: payload }));
      },
      logout() {
        setState((current) => ({ ...current, user: null }));
      },
      selectTrack(trackSlug) {
        setState((current) => ({ ...current, selectedTrack: trackSlug }));
      },
      toggleLessonComplete(lessonSlug) {
        setState((current) => {
          const isComplete = current.completedLessons.includes(lessonSlug);

          return {
            ...current,
            completedLessons: isComplete
              ? current.completedLessons.filter((slug) => slug !== lessonSlug)
              : [...current.completedLessons, lessonSlug],
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
