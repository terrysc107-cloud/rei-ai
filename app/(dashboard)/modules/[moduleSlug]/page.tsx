import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PageIntro } from "@/components/ui/page-intro";
import { getLessonsForModule, getModuleBySlug, getTrackBySlug } from "@/lib/data/course-data";

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

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Module"
        title={courseModule.title}
        description={courseModule.description}
      />

      {track ? <Badge>{track.title}</Badge> : null}

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
