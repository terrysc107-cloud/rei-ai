import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import {
  getLessonsForModule,
  getModulesForTrack,
  getTrackBySlug,
  getTrackDetail,
} from "@/lib/data/course-data";

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track: trackSlug } = await params;
  const track = getTrackBySlug(trackSlug);

  if (!track) {
    notFound();
  }

  const trackModules = getModulesForTrack(track.slug);
  const detail = getTrackDetail(track.slug);

  return (
    <div className="space-y-10">
      <PageIntro eyebrow="Track Detail" title={track.title} description={track.outcome} />

      <div className="flex flex-wrap gap-2">
        {track.audience.map((audience) => (
          <Badge key={audience}>{audience}</Badge>
        ))}
      </div>

      {detail ? (
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Track transformation</h2>
            <p className="mt-4 text-base leading-7 text-[var(--ink-muted)]">
              {detail.transformation}
            </p>
            <div className="mt-6">
              <ButtonLink href={`/modules/${trackModules[0]?.slug ?? ""}`} variant="secondary">
                Start first module
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
            <p className="text-sm font-medium text-white/70">What you will build</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {detail.artifactsBuilt.map((artifact) => (
                <div key={artifact} className="rounded-[22px] bg-white/8 px-4 py-4 text-sm leading-6 text-white/82">
                  {artifact}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {detail ? (
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Best for</h2>
            <div className="mt-5 space-y-3">
              {detail.bestFor.map((item) => (
                <div key={item} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Suggested first moves</h2>
            <div className="mt-5 space-y-3">
              {detail.firstMoves.map((item) => (
                <div key={item} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div className="grid gap-6">
        {trackModules.map((module) => {
          const moduleLessons = getLessonsForModule(module.slug);
          return (
            <section key={module.slug} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-[var(--ink)]">{module.title}</h2>
                  <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">{module.description}</p>
                </div>
                <Link href={`/modules/${module.slug}`} className="text-sm font-semibold text-[var(--accent)]">
                  Open module
                </Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {moduleLessons.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={`/lessons/${lesson.slug}`}
                    className="rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5"
                  >
                    <p className="text-sm font-medium text-[var(--ink-muted)]">
                      {lesson.level} / {lesson.duration}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{lesson.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{lesson.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
