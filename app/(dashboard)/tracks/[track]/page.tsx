import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PageIntro } from "@/components/ui/page-intro";
import { getLessonsForModule, getModulesForTrack, getTrackBySlug } from "@/lib/data/course-data";

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

  return (
    <div className="space-y-10">
      <PageIntro eyebrow="Track Detail" title={track.title} description={track.outcome} />

      <div className="flex flex-wrap gap-2">
        {track.audience.map((audience) => (
          <Badge key={audience}>{audience}</Badge>
        ))}
      </div>

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
