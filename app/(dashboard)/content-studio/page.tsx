import { Badge } from "@/components/ui/badge";
import { PageIntro } from "@/components/ui/page-intro";
import {
  modules,
  promptPacks,
  prompts,
  quizzes,
  resourceCollections,
  resources,
  tracks,
} from "@/lib/data/course-data";

export default function ContentStudioPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Content Studio"
        title="A local content operations surface for shaping the curriculum."
        description="This is a lightweight file-backed editorial workspace so the product can keep evolving before database-backed admin exists."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Tracks", value: tracks.length },
          { label: "Modules", value: modules.length },
          { label: "Prompts", value: prompts.length },
          { label: "Resources", value: resources.length },
        ].map((item) => (
          <section key={item.label} className="rounded-[26px] border border-[var(--border)] bg-[var(--panel)] p-5">
            <p className="text-sm text-[var(--ink-muted)]">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-[var(--ink)]">{item.value}</p>
          </section>
        ))}
      </div>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Curriculum map</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">Track and module inventory</h2>
            </div>
            <Badge>{tracks.length} track lines</Badge>
          </div>
          <div className="mt-6 space-y-4">
            {tracks.map((track) => {
              const relatedModules = modules.filter((module) => module.trackSlug === track.slug);
              return (
                <div key={track.slug} className="rounded-[24px] bg-[var(--panel)] p-5">
                  <h3 className="text-xl font-semibold text-[var(--ink)]">{track.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{track.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {relatedModules.map((module) => (
                      <Badge key={module.slug}>{module.title}</Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Library architecture</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">Prompt and resource packaging</h2>
            </div>
            <Badge>{promptPacks.length + resourceCollections.length} collections</Badge>
          </div>
          <div className="mt-6 grid gap-4">
            {[
              ...promptPacks.map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                kind: "Prompt pack",
              })),
              ...resourceCollections.map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                kind: "Resource collection",
              })),
            ].map((item) => (
              <div key={item.id} className="rounded-[24px] bg-[var(--panel)] p-5">
                <p className="text-sm font-medium text-[var(--ink-muted)]">{item.kind}</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
          <p className="text-sm font-medium text-white/70">Editorial priorities</p>
          <div className="mt-5 space-y-3">
            {[
              "Expand the richest track first instead of spreading detail thinly across all surfaces.",
              "Keep prompts tied to real workflow outcomes so the product never drifts into generic AI content.",
              "Use the final project and custom build funnel to learn what users actually want help implementing.",
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white/8 px-4 py-4 text-sm leading-7 text-white/82">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Assessment inventory</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">Current quiz coverage</h2>
            </div>
            <Badge>{quizzes.length} quizzes</Badge>
          </div>
          <div className="mt-6 space-y-4">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="rounded-[24px] bg-[var(--panel)] p-5">
                <h3 className="text-xl font-semibold text-[var(--ink)]">{quiz.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                  {quiz.questions.length} questions / related track {quiz.relatedTrack}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
