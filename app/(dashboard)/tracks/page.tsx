"use client";

import { useAppState } from "@/components/providers/app-state-provider";
import { TrackCard } from "@/components/course/track-card";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { tracks } from "@/lib/data/course-data";

export default function TracksPage() {
  const { selectedTrack, selectTrack } = useAppState();

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Tracks"
        title="Choose your learning track."
        description="Tracks organize modules, lessons, prompts, and outcomes around the kind of real estate work you want to improve."
      />

      {selectedTrack ? (
        <section className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-[var(--ink-muted)]">Current saved track</p>
              <p className="text-xl font-semibold text-[var(--ink)]">
                {tracks.find((track) => track.slug === selectedTrack)?.title}
              </p>
            </div>
            <ButtonLink href={`/tracks/${selectedTrack}`} variant="secondary">
              Continue track
            </ButtonLink>
          </div>
        </section>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-3">
        {tracks.map((track) => (
          <div key={track.slug} className="space-y-3">
            <TrackCard track={track} />
            <button
              type="button"
              onClick={() => selectTrack(track.slug)}
              className="w-full rounded-full border border-[var(--border-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ink-muted)] transition hover:bg-[var(--panel)]"
            >
              {selectedTrack === track.slug ? "Selected track" : "Set as my current track"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
