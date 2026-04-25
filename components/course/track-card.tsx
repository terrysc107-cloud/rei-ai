import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import type { Track } from "@/types/course";

export function TrackCard({ track }: { track: Track }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_24px_60px_rgba(62,49,38,0.06)]">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {track.audience.map((audience) => (
            <Badge key={audience}>{audience}</Badge>
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[var(--ink)]">{track.title}</h3>
          <p className="text-base leading-7 text-[var(--ink-muted)]">{track.tagline}</p>
          <p className="text-sm leading-6 text-[var(--ink-muted)]">{track.outcome}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <Link href={`/tracks/${track.slug}`} className="text-sm font-semibold text-[var(--accent)]">
          Explore track
        </Link>
        <ButtonLink href={`/tracks/${track.slug}`} variant="secondary">
          Open
        </ButtonLink>
      </div>
    </article>
  );
}
