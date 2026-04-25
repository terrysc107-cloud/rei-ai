import { cn, formatPercent } from "@/lib/utils";

export function ProgressBar({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-xs font-medium text-[var(--ink-muted)]">
        <span>Progress</span>
        <span>{formatPercent(safeValue)}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-[var(--panel)]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent)_0%,#d48156_100%)] transition-all"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
