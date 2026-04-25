import { notFound } from "next/navigation";
import { LessonCompleteToggle } from "@/components/course/lesson-complete-toggle";
import { PromptActions } from "@/components/prompts/prompt-actions";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import {
  getLessonBySlug,
  getLessonDetail,
  getPromptById,
  getQuizById,
  getResourceById,
  getTrackBySlug,
} from "@/lib/data/course-data";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    notFound();
  }

  const track = getTrackBySlug(lesson.trackSlug);
  const promptTemplates = lesson.promptIds
    .map((promptId) => getPromptById(promptId))
    .filter(Boolean);
  const lessonResources = lesson.resourceIds
    .map((resourceId) => getResourceById(resourceId))
    .filter(Boolean);
  const quiz = lesson.quizId ? getQuizById(lesson.quizId) : undefined;
  const detail = getLessonDetail(lesson.slug);

  return (
    <div className="space-y-10">
      <PageIntro eyebrow="Lesson" title={lesson.title} description={lesson.summary} />

      <div className="flex flex-wrap gap-3">
        {track ? <Badge>{track.title}</Badge> : null}
        <Badge>{lesson.level}</Badge>
        <Badge>{lesson.duration}</Badge>
      </div>

      <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Lesson objectives</h2>
            <div className="space-y-3">
              {lesson.objectives.map((objective) => (
                <div key={objective} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                  {objective}
                </div>
              ))}
            </div>
          </div>
          <LessonCompleteToggle lessonSlug={lesson.slug} />
        </div>
      </section>

      {detail ? (
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Why this matters</h2>
            <p className="mt-4 text-base leading-7 text-[var(--ink-muted)]">
              {detail.whyItMatters}
            </p>

            <div className="mt-6 rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-sm font-medium text-[var(--ink-muted)]">Field scenario</p>
              <p className="mt-3 text-sm leading-7 text-[var(--ink)]">{detail.fieldScenario}</p>
            </div>
          </div>

          <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
            <p className="text-sm font-medium text-white/70">Workflow blueprint</p>
            <div className="mt-5 space-y-4">
              {detail.workflowBlueprint.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-[22px] bg-white/8 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-white/82">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--ink)]">Prompts used in this lesson</h2>
        {promptTemplates.map((prompt) =>
          prompt ? (
            <article key={prompt.id} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{prompt.category}</Badge>
                  <p className="text-sm text-[var(--ink-muted)]">{prompt.useCase}</p>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--ink)]">{prompt.title}</h3>
                <p className="text-base leading-7 text-[var(--ink-muted)]">{prompt.description}</p>
                <pre className="rounded-[24px] bg-[var(--panel)] p-5 text-sm leading-7 text-[var(--ink)]">
                  {prompt.body}
                </pre>
                <PromptActions promptId={prompt.id} promptBody={prompt.body} />
              </div>
            </article>
          ) : null,
        )}
      </section>

      {detail ? (
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Common mistakes</h2>
            <div className="mt-5 space-y-3">
              {detail.commonMistakes.map((mistake) => (
                <div key={mistake} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                  {mistake}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Do this today</h2>
            <div className="mt-5 space-y-3">
              {detail.doThisToday.map((action) => (
                <div key={action} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                  {action}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {detail?.practiceExercise || detail?.reflectionQuestions || detail?.implementationDeliverable ? (
        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Practice lab</h2>
            {detail.practiceExercise ? (
              <div className="mt-5 rounded-[24px] bg-[var(--panel)] p-5">
                <p className="text-sm font-medium text-[var(--ink-muted)]">Try this exercise</p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink)]">{detail.practiceExercise}</p>
              </div>
            ) : null}

            {detail.implementationDeliverable ? (
              <div className="mt-5 rounded-[24px] border border-[var(--border)] px-5 py-5">
                <p className="text-sm font-medium text-[var(--ink-muted)]">Implementation deliverable</p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                  {detail.implementationDeliverable}
                </p>
              </div>
            ) : null}
          </div>

          <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
            <p className="text-sm font-medium text-white/70">Reflection prompts</p>
            <div className="mt-5 space-y-3">
              {(detail.reflectionQuestions ?? []).map((question) => (
                <div key={question} className="rounded-[22px] bg-white/8 px-4 py-4 text-sm leading-7 text-white/82">
                  {question}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Related resources</h2>
          <div className="mt-5 space-y-4">
            {lessonResources.map((resource) =>
              resource ? (
                <div key={resource.id} className="rounded-[24px] bg-[var(--panel)] p-5">
                  <p className="text-sm font-medium text-[var(--ink-muted)]">{resource.type}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{resource.description}</p>
                </div>
              ) : null,
            )}
          </div>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
          <p className="text-sm font-medium text-white/70">Keep going</p>
          <h2 className="mt-3 text-2xl font-semibold">
            {quiz ? "Finish with the related quiz" : "Browse more prompts and resources"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            {quiz
              ? "Reinforce the concepts while they're still fresh and save your score locally."
              : "This lesson does not have a quiz yet, so the best next step is to keep building your workflow toolkit."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {quiz ? (
              <ButtonLink
                href={`/quizzes/${quiz.id}`}
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white/18"
              >
                Take quiz
              </ButtonLink>
            ) : (
              <ButtonLink
                href="/prompts"
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white/18"
              >
                Open prompt library
              </ButtonLink>
            )}
            <ButtonLink
              href="/resources"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white/18"
            >
              View resources
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
