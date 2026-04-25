"use client";

import { useAppState } from "@/components/providers/app-state-provider";
import { buttonClassName } from "@/components/ui/button";

export function LessonCompleteToggle({ lessonSlug }: { lessonSlug: string }) {
  const { completedLessons, toggleLessonComplete } = useAppState();
  const completed = completedLessons.includes(lessonSlug);

  return (
    <button
      type="button"
      onClick={() => toggleLessonComplete(lessonSlug)}
      className={buttonClassName(completed ? "secondary" : "primary")}
    >
      {completed ? "Mark as incomplete" : "Mark lesson complete"}
    </button>
  );
}
