import { Badge } from "@/components/ui/badge";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          {description}
        </p>
      </div>
    </div>
  );
}
