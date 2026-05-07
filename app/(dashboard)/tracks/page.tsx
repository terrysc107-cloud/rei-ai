"use client";

import { useAppState } from "@/components/providers/app-state-provider";
import { TrackCard } from "@/components/course/track-card";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { getLessonsForTrack, tracks } from "@/lib/data/course-data";

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
        <section className="rounded-[32px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-white/60">Current track</p>
              <p className="text-2xl font-semibold">
                {tracks.find((track) => track.slug === selectedTrack)?.title}
              </p>
              {(() => {
                const firstLesson = getLessonsForTrack(selectedTrack)[0];
                return firstLesson ? (
                  <p className="text-sm text-white/70">First lesson: {firstLesson.title}</p>
                ) : null;
              })()}
            </div>
            <div className="flex flex-wrap gap-3">
              {(() => {
                const firstLesson = getLessonsForTrack(selectedTrack)[0];
                return firstLesson ? (
                  <ButtonLink
                    href={`/lessons/${firstLesson.slug}`}
                    className="border-white/20 bg-white text-[var(--ink)] hover:bg-white/90"
                  >
                    Start first lesson
                  </ButtonLink>
                ) : null;
              })()}
              <ButtonLink
                href={`/tracks/${selectedTrack}`}
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white/18"
              >
                View track
              </ButtonLink>
            </div>
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
