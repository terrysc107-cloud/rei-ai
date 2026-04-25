import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PageIntro } from "@/components/ui/page-intro";
import {
  getLessonsForModule,
  getModuleBySlug,
  getModuleDetail,
  getTrackBySlug,
} from "@/lib/data/course-data";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleSlug: string }>;
}) {
  const { moduleSlug } = await params;
  const courseModule = getModuleBySlug(moduleSlug);

  if (!courseModule) {
    notFound();
  }

  const track = getTrackBySlug(courseModule.trackSlug);
  const moduleLessons = getLessonsForModule(courseModule.slug);
  const detail = getModuleDetail(courseModule.slug);

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Module"
        title={courseModule.title}
        description={courseModule.description}
      />

      {track ? <Badge>{track.title}</Badge> : null}

      {detail ? (
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Module promise</h2>
            <p className="mt-4 text-base leading-7 text-[var(--ink-muted)]">{detail.promise}</p>
          </div>

          <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
            <p className="text-sm font-medium text-white/70">What you will leave with</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {detail.buildAssets.map((asset) => (
                <div key={asset} className="rounded-[22px] bg-white/8 px-4 py-4 text-sm leading-6 text-white/80">
                  {asset}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {detail ? (
        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Key outcomes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {detail.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-[22px] bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                {outcome}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="grid gap-5">
        {moduleLessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            className="rounded-[28px] border border-[var(--border)] bg-white p-6 transition hover:-translate-y-0.5"
          >
            <p className="text-sm font-medium text-[var(--ink-muted)]">
              {lesson.level} / {lesson.duration}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">{lesson.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ink-muted)]">{lesson.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
