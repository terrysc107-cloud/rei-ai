"use client";

import Link from "next/link";
import { useAppState } from "@/components/providers/app-state-provider";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { getTrackBySlug, prompts } from "@/lib/data/course-data";

export default function AccountPage() {
  const {
    user,
    selectedTrack,
    completedLessons,
    favoritePromptIds,
    workflowSubmissions,
    savedQuizResults,
    activityLog,
  } = useAppState();

  const track = selectedTrack ? getTrackBySlug(selectedTrack) : undefined;
  const savedPromptSamples = prompts.filter((prompt) =>
    favoritePromptIds.includes(prompt.id),
  );
  const quizEntries = Object.entries(savedQuizResults);
  const averageQuizScore =
    quizEntries.length > 0
      ? Math.round(
          (quizEntries.reduce((sum, [, result]) => sum + result.score / result.total, 0) /
            quizEntries.length) *
            100,
        )
      : 0;

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Account"
        title={user ? `${user.name}'s local account` : "No local account yet"}
        description={
          user
            ? `Testing as ${user.email}. This page will later connect to Supabase auth and account persistence.`
            : "Create a local account to save progress and make the dashboard feel personalized during MVP testing."
        }
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Profile</h2>
            {track ? <Badge>{track.title}</Badge> : null}
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Name
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">{user?.name ?? "Not set"}</p>
            </div>
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Role
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">{user?.role ?? "Not set"}</p>
            </div>
            <div className="rounded-[24px] bg-[var(--panel)] p-5 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Email
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">{user?.email ?? "Not set"}</p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Progress memory</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Lessons complete
              </p>
              <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">{completedLessons.length}</p>
            </div>
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Quiz average
              </p>
              <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">
                {quizEntries.length > 0 ? `${averageQuizScore}%` : "--"}
              </p>
            </div>
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Saved prompts
              </p>
              <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">{favoritePromptIds.length}</p>
            </div>
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Workflow submissions
              </p>
              <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">{workflowSubmissions.length}</p>
            </div>
          </div>
          {!user ? (
            <div className="mt-6">
              <ButtonLink href="/signup">Create local account</ButtonLink>
            </div>
          ) : null}
        </section>
      </div>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Saved library</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">Prompts you are keeping</h2>
            </div>
            <Badge>{favoritePromptIds.length} saved</Badge>
          </div>
          <div className="mt-6 grid gap-4">
            {(savedPromptSamples.length > 0 ? savedPromptSamples : prompts.slice(0, 3)).map(
              (prompt) => (
                <Link
                  key={prompt.id}
                  href="/prompts"
                  className="rounded-[24px] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5"
                >
                  <p className="text-sm font-medium text-[var(--ink-muted)]">{prompt.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{prompt.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{prompt.description}</p>
                </Link>
              ),
            )}
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Local activity log</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">Recent learner history</h2>
            </div>
            <Badge>{activityLog.length} events</Badge>
          </div>
          <div className="mt-6 space-y-4">
            {activityLog.length > 0 ? (
              activityLog.map((event) => (
                <Link
                  key={event.id}
                  href={event.href ?? "/dashboard"}
                  className="block rounded-[24px] border border-[var(--border)] px-5 py-4 transition hover:bg-[var(--panel)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                    {event.type}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{event.description}</p>
                  <p className="mt-3 text-xs text-[var(--ink-muted)]">
                    {new Date(event.at).toLocaleString()}
                  </p>
                </Link>
              ))
            ) : (
              <div className="rounded-[24px] bg-[var(--panel)] p-5 text-sm leading-7 text-[var(--ink-muted)]">
                Activity will start showing up here as the learner selects tracks, completes lessons, saves prompts, takes quizzes, and submits projects.
              </div>
            )}
          </div>
        </section>
      </section>
    </div>
  );
}
