import Link from "next/link";

export function RecommendationCard({
  label,
  title,
  description,
  href,
}: {
  label: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-[24px] border border-[var(--border)] bg-white p-5 transition hover:-translate-y-0.5"
    >
      <p className="text-sm font-medium text-[var(--ink-muted)]">{label}</p>
      <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{description}</p>
    </Link>
  );
}
