"use client";

import Link from "next/link";
import { RecommendationCard } from "@/components/dashboard/recommendation-card";
import { useAppState } from "@/components/providers/app-state-provider";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  getLessonsForTrack,
  getTrackBySlug,
  prompts,
  quizzes,
  tracks,
} from "@/lib/data/course-data";

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
  const trackLessons = track ? getLessonsForTrack(track.slug) : [];
  const completedTrackLessons = trackLessons.filter((lesson) =>
    completedLessons.includes(lesson.slug),
  ).length;
  const trackProgress =
    trackLessons.length > 0 ? (completedTrackLessons / trackLessons.length) * 100 : 0;
  const firstLesson = trackLessons[0];
  const nextLesson = trackLessons.find(
    (lesson) => !completedLessons.includes(lesson.slug),
  );
  const trackComplete = track && trackLessons.length > 0 && completedTrackLessons === trackLessons.length;
  const recentSubmission = workflowSubmissions[0];
  const savedPromptSamples = prompts.filter((prompt) =>
    favoritePromptIds.includes(prompt.id),
  );
  const quizResults = Object.entries(savedQuizResults);
  const averageQuizScore =
    quizResults.length > 0
      ? Math.round(
          (quizResults.reduce((sum, [, result]) => sum + result.score / result.total, 0) /
            quizResults.length) *
            100,
        )
      : 0;
  const roleGuidance =
    user?.role === "Agent"
      ? "Focus on lead follow-up, listing content, and one repeatable weekly workflow."
      : user?.role === "Landlord"
        ? "Use the lab to standardize tenant communication and recurring property operations."
        : user?.role === "Investor"
          ? "Prioritize deal analysis, rehab planning, and clean update workflows."
          : "Start with one real problem and turn it into a repeatable operating system.";

  const primaryAction = !track
    ? {
        label: "First step",
        headline: "Choose your learning track",
        body: "Tracks bundle lessons, prompts, and workflow systems around one area of real estate. Pick the one that matches where you want to improve first.",
        cta: "Browse tracks",
        href: "/tracks",
      }
    : trackComplete
      ? {
          label: "Track complete",
          headline: "You've finished all lessons",
          body: `You've completed every lesson in ${track.title}. The next step is to build something real with what you've learned.`,
          cta: "Start your final project",
          href: "/final-project",
        }
      : completedLessons.length === 0
        ? {
            label: "Start here",
            headline: firstLesson ? `Start your first lesson` : "Open your track",
            body: firstLesson
              ? firstLesson.summary
              : `You've selected ${track.title}. Open the track to find your first lesson.`,
            cta: "Begin first lesson",
            href: firstLesson ? `/lessons/${firstLesson.slug}` : `/tracks/${track.slug}`,
          }
        : {
            label: "Continue",
            headline: nextLesson ? nextLesson.title : "Keep going",
            body: nextLesson
              ? nextLesson.summary
              : "You're making progress. Check your track for upcoming lessons.",
            cta: "Resume lesson",
            href: nextLesson ? `/lessons/${nextLesson.slug}` : `/tracks/${track?.slug}`,
          };

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
        title={user ? `Welcome back, ${user.name}.` : "Your learning dashboard."}
        description={
          user
            ? `Signed in as ${user.role.toLowerCase()}. Pick up where you left off.`
            : "Create a local account to personalize your dashboard and track progress across lessons, prompts, and projects."
        }
      />

      {/* Primary action — always dominant and always first */}
      <section className="rounded-[32px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-8 text-white lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <Badge className="border-white/20 bg-white/10 text-white/80">
              {primaryAction.label}
            </Badge>
            <h2 className="max-w-2xl text-3xl font-semibold lg:text-4xl">
              {primaryAction.headline}
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/80">{primaryAction.body}</p>
          </div>
          <ButtonLink
            href={primaryAction.href}
            variant="secondary"
            className="shrink-0 border-white/20 bg-white/10 text-white hover:bg-white/18"
          >
            {primaryAction.cta}
          </ButtonLink>
        </div>
        {track && !trackComplete && (
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-white/60">{track.title}</p>
              <p className="text-sm font-semibold text-white/80">
                {completedTrackLessons}/{trackLessons.length} lessons
              </p>
            </div>
            <div className="mt-3">
              <ProgressBar value={trackProgress} className="opacity-80" />
            </div>
          </div>
        )}
      </section>

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
              <p className="text-sm font-medium text-[var(--ink-muted)]">Current track</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
                {track ? track.title : "No track selected"}
              </h2>
            </div>
            <ButtonLink href="/tracks" variant="secondary">
              {track ? "Switch track" : "Browse tracks"}
            </ButtonLink>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            {track
              ? track.outcome
              : "Tracks bundle guided lessons, prompts, and workflow systems for different parts of the real estate business."}
          </p>
        </div>

        <div className="rounded-[28px] border border-[var(--border)] bg-[linear-gradient(160deg,#fffdfa_0%,#f5ece0_100%)] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Role guidance</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--ink)]">{user?.role ?? "Learner"}</h2>
            </div>
          </div>
          <p className="mt-4 text-base leading-7 text-[var(--ink-muted)]">{roleGuidance}</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[30px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Learner snapshot</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--ink)]">
                Your progress at a glance
              </h2>
            </div>
            <Badge>{trackLessons.length} lessons in track</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Track progress
              </p>
              <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">
                {track ? `${completedTrackLessons}/${trackLessons.length}` : "0/0"}
              </p>
            </div>
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Saved workflow assets
              </p>
              <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">
                {favoritePromptIds.length + workflowSubmissions.length}
              </p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              completedLessons.length === 0
                ? "Complete your first lesson to start building momentum."
                : "You already have progress in motion. Keep compounding it.",
              favoritePromptIds.length === 0
                ? "Save at least one prompt so your library starts becoming reusable."
                : "Your prompt library is beginning to look like a real operating asset.",
              workflowSubmissions.length === 0
                ? "Submit one project or request so the app starts reflecting implementation work."
                : "You have implementation activity saved, which is exactly where the product becomes sticky.",
            ].map((note) => (
              <div key={note} className="rounded-[20px] border border-[var(--border)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                {note}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[var(--border)] bg-white p-6">
          <p className="text-sm font-medium text-[var(--ink-muted)]">Recommended next steps</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--ink)]">
            Keep the workflow moving
          </h2>
          <div className="mt-6 grid gap-4">
            {nextLesson ? (
              <RecommendationCard
                label="Continue lesson path"
                title={nextLesson.title}
                description={nextLesson.summary}
                href={`/lessons/${nextLesson.slug}`}
              />
            ) : (
              <RecommendationCard
                label="Choose a track"
                title="Pick your first lesson path"
                description="Select the real estate workflow area you want to improve first."
                href="/tracks"
              />
            )}
            <RecommendationCard
              label="Prompt practice"
              title={
                savedPromptSamples[0]
                  ? `Reuse: ${savedPromptSamples[0].title}`
                  : "Save your first reusable prompt"
              }
              description={
                savedPromptSamples[0]
                  ? savedPromptSamples[0].description
                  : "Start building your own operating library by saving prompts you want to reuse."
              }
              href="/prompts"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
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
                  {tracks.find((trackItem) => trackItem.slug === quiz.relatedTrack)?.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
          <p className="text-sm font-medium text-white/70">Assessment signal</p>
          <h2 className="mt-2 text-2xl font-semibold">
            {quizResults.length > 0 ? "You have measurable feedback" : "No quiz data yet"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            {quizResults.length > 0
              ? `Your current average is ${averageQuizScore}%. Use that signal to decide whether to keep studying a concept or move on to workflow implementation.`
              : "One completed quiz gives the dashboard a much stronger signal about where to reinforce versus where to act."}
          </p>
          <div className="mt-6 grid gap-3">
            {quizResults.slice(0, 3).map(([quizId, result]) => (
              <div key={quizId} className="rounded-[20px] bg-white/8 px-4 py-4 text-sm text-white/82">
                {quizId}: {result.score}/{result.total}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Saved prompt momentum</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
                Build a personal workflow library
              </h2>
            </div>
            <Badge>{favoritePromptIds.length} saved</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {(savedPromptSamples.length > 0 ? savedPromptSamples : prompts.slice(0, 3)).map(
              (prompt) => (
                <Link
                  key={prompt.id}
                  href="/prompts"
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5"
                >
                  <p className="text-sm font-medium text-[var(--ink-muted)]">{prompt.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{prompt.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                    {prompt.description}
                  </p>
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <p className="text-sm font-medium text-[var(--ink-muted)]">Workflow activity</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
            What you have built so far
          </h2>
          {recentSubmission ? (
            <div className="mt-6 rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Latest submission
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">
                {recentSubmission.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                {recentSubmission.details}
              </p>
            </div>
          ) : (
            <div className="mt-6 rounded-[24px] bg-[var(--panel)] p-5 text-sm leading-7 text-[var(--ink-muted)]">
              No saved workflow submissions yet. Final projects and custom build requests will appear here once submitted.
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/final-project" variant="secondary">
              Final project
            </ButtonLink>
            <ButtonLink href="/custom-build-request" variant="secondary">
              Custom build request
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
