export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-[var(--ink-muted)] lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>Real Estate AI Learning Lab is a guided learning platform for practical AI workflows.</p>
        <p>Local MVP mode: progress, favorites, and quiz scores are saved in your browser.</p>
      </div>
    </footer>
  );
}
