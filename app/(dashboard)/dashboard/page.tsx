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
  const nextLesson = trackLessons.find(
    (lesson) => !completedLessons.includes(lesson.slug),
  );
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
          {track ? (
            <div className="mt-6 max-w-xl">
              <ProgressBar value={trackProgress} />
            </div>
          ) : null}
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

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(160deg,#fffdfa_0%,#f5ece0_100%)] p-6 shadow-[0_20px_48px_rgba(62,49,38,0.05)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Today&apos;s focus</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--ink)]">
                Learn, save, and systemize
              </h2>
            </div>
            <Badge>{user?.role ?? "Learner"}</Badge>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            {roleGuidance}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] bg-white px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Resume
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {nextLesson ? nextLesson.title : "Choose your first lesson"}
              </p>
            </div>
            <div className="rounded-[22px] bg-white px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Quiz average
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {quizResults.length > 0 ? `${averageQuizScore}%` : "No scores yet"}
              </p>
            </div>
            <div className="rounded-[22px] bg-white px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Current track
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {track ? track.title : "Not selected"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Learner snapshot</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--ink)]">
                Your dashboard at a glance
              </h2>
            </div>
            <Badge>{trackLessons.length} lessons in focus</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Completed inside track
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
                ? "Complete your first lesson to unlock momentum."
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
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Recommended next steps</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
                Keep the workflow moving
              </h2>
            </div>
            {track ? <Badge>{track.title}</Badge> : null}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
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
                  ? `Reuse ${savedPromptSamples[0].title}`
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
              No saved workflow submissions yet. Final projects and custom build requests will start showing up here once you submit them.
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
                  Related track: {tracks.find((trackItem) => trackItem.slug === quiz.relatedTrack)?.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
          <p className="text-sm font-medium text-white/70">Assessment signal</p>
          <h2 className="mt-2 text-2xl font-semibold">
            {quizResults.length > 0 ? "You already have measurable feedback" : "No quiz data yet"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            {quizResults.length > 0
              ? `Your current local average is ${averageQuizScore}%. Use that signal to decide whether to keep studying a concept or move on to workflow implementation.`
              : "One completed quiz gives the dashboard a much stronger signal about where the learner needs reinforcement versus action."}
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

      <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
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
      </section>

      <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[var(--ink-muted)]">Action shelves</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
              Fast access to the next important surfaces
            </h2>
          </div>
          <Badge>Workspace links</Badge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              href: "/tracks",
              title: "Track Library",
              description: "Choose a path based on the business problem you want to improve.",
            },
            {
              href: "/resources",
              title: "Resource Vault",
              description: "Open the worksheets, guides, and checklists tied to your lessons.",
            },
            {
              href: "/final-project",
              title: "Implementation Project",
              description: "Turn one useful prompt into a workflow someone could really run.",
            },
            {
              href: "/custom-build-request",
              title: "Done-With-You Request",
              description: "Use the service layer when you want a workflow built out for you.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-semibold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
