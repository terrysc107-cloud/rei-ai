import { TrackCard } from "@/components/course/track-card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { dashboardHighlights, tracks } from "@/lib/data/course-data";

export default function LandingPage() {
  return (
    <div className="space-y-24 pb-20">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
        <div className="space-y-8">
          <Badge>Structured learning, prompts, and workflow systems</Badge>
          <div className="space-y-6">
            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[var(--ink)] sm:text-6xl">
              Learn real estate with AI and turn what you learn into reusable business workflows.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">
              Real Estate AI Learning Lab helps beginners, agents, wholesalers, landlords, and investors use AI to study faster, work cleaner, and build repeatable systems without jumping straight into heavy automation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/signup">Start the local MVP</ButtonLink>
            <ButtonLink href="/tracks" variant="secondary">
              Explore tracks
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-[32px] border border-[var(--border)] bg-white p-6 shadow-[0_30px_80px_rgba(62,49,38,0.1)] lg:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-sm font-medium text-[var(--ink-muted)]">MVP Focus</p>
              <p className="mt-3 text-2xl font-semibold text-[var(--ink)]">Lessons, prompts, quizzes, systems</p>
            </div>
            <div className="rounded-[24px] bg-[var(--panel)] p-5">
              <p className="text-sm font-medium text-[var(--ink-muted)]">Not Yet Included</p>
              <p className="mt-3 text-2xl font-semibold text-[var(--ink)]">No chat, uploads, or CRM integrations</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {dashboardHighlights.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[var(--border)] p-5">
                <h2 className="text-lg font-semibold text-[var(--ink)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge>Learning tracks</Badge>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
              Choose the part of real estate where AI can help you right now.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            Each track combines education, prompts, and workflow thinking so you can learn concepts and put them to work in the same place.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
        </div>
      </section>
    </div>
  );
}
