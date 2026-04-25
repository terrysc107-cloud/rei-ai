"use client";

import Link from "next/link";
import { useAppState } from "@/components/providers/app-state-provider";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { getTrackBySlug, quizzes, tracks } from "@/lib/data/course-data";

export default function DashboardPage() {
  const {
    user,
    selectedTrack,
    completedLessons,
    favoritePromptIds,
    savedQuizResults,
    workflowSubmissions,
  } = useAppState();

  const track = selectedTrack ? getTrackBySlug(selectedTrack) : undefined;

  const stats = [
    { label: "Completed lessons", value: completedLessons.length.toString() },
    { label: "Saved prompts", value: favoritePromptIds.length.toString() },
    { label: "Quiz attempts", value: Object.keys(savedQuizResults).length.toString() },
    { label: "Workflow submissions", value: workflowSubmissions.length.toString() },
  ];

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Dashboard"
        title={user ? `Welcome back, ${user.name}.` : "Your local learning dashboard."}
        description={
          user
            ? `You're testing the MVP as a ${user.role.toLowerCase()}. Pick up where you left off or choose a new track.`
            : "Create a local account to personalize the dashboard, then move through tracks, prompts, quizzes, and project submissions."
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <section key={stat.label} className="rounded-[26px] border border-[var(--border)] bg-[var(--panel)] p-5">
            <p className="text-sm text-[var(--ink-muted)]">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-[var(--ink)]">{stat.value}</p>
          </section>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Current focus</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
                {track ? track.title : "Choose your first track"}
              </h2>
            </div>
            <ButtonLink href="/tracks" variant="secondary">
              Browse tracks
            </ButtonLink>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            {track
              ? track.outcome
              : "Tracks bundle guided lessons, prompts, and workflow systems for different parts of the real estate business."}
          </p>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
          <Badge className="border-white/20 bg-white/10 text-white/80">Next action</Badge>
          <div className="mt-4 space-y-4">
            <p className="text-2xl font-semibold">
              {completedLessons.length === 0 ? "Start your first lesson" : "Keep momentum going"}
            </p>
            <p className="text-sm leading-7 text-white/80">
              {completedLessons.length === 0
                ? "Begin with a track, complete a lesson, and save a prompt you actually want to reuse."
                : "Take a quiz, submit your final project, or request a custom workflow build to pressure-test your learning."}
            </p>
            <ButtonLink href={completedLessons.length === 0 ? "/start" : "/final-project"} variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/18">
              {completedLessons.length === 0 ? "Open onboarding path" : "Open final project"}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[var(--ink-muted)]">Quiz checkpoints</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">Test what you&apos;re learning</h2>
          </div>
          <Badge>{quizzes.length} available</Badge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quizzes.map((quiz) => (
            <Link key={quiz.id} href={`/quizzes/${quiz.id}`} className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold text-[var(--ink)]">{quiz.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                Related track: {tracks.find((trackItem) => trackItem.slug === quiz.relatedTrack)?.title}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
