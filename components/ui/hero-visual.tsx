export function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[linear-gradient(160deg,#fffdfa_0%,#f4ebdd_46%,#ead9c7_100%)] p-6 shadow-[0_32px_90px_rgba(62,49,38,0.14)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,88,58,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(33,22,17,0.08),transparent_34%)]" />

      <div className="relative space-y-5">
        <div className="flex items-center justify-between rounded-[26px] border border-[var(--border)] bg-white/90 px-4 py-3 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              Learning Workspace
            </p>
            <p className="mt-1 text-lg font-semibold text-[var(--ink)]">
              From concept to workflow
            </p>
          </div>
          <div className="rounded-full bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--ink-muted)]">
            Browser-saved MVP
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 rounded-[28px] bg-[#221712] p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Current track</p>
                <h3 className="mt-2 text-2xl font-semibold">Lead to Close Systems</h3>
              </div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 text-xs text-white/70">
                Week 2
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[22px] bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Lessons</p>
                <p className="mt-2 text-3xl font-semibold">12</p>
              </div>
              <div className="rounded-[22px] bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Prompts</p>
                <p className="mt-2 text-3xl font-semibold">24</p>
              </div>
              <div className="rounded-[22px] bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Systems</p>
                <p className="mt-2 text-3xl font-semibold">6</p>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
              <p className="text-sm font-medium text-white/68">Sample build flow</p>
              <div className="mt-4 space-y-3">
                {[
                  "Collect lead source, timing, and motivation",
                  "Generate a 5-touch follow-up plan",
                  "Save the best prompt for reuse",
                  "Turn the process into a team SOP",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[28px] border border-[var(--border)] bg-white/88 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                Prompt Snapshot
              </p>
              <div className="mt-4 rounded-[22px] bg-[var(--panel)] p-4 text-sm leading-6 text-[var(--ink)]">
                &ldquo;Create a follow-up sequence for a seller lead who called off a sign, is curious about timeline, and responds best to low-pressure language.&rdquo;
              </div>
              <div className="mt-4 flex gap-2 text-xs text-[var(--ink-muted)]">
                <span className="rounded-full border border-[var(--border)] px-3 py-1">Lead generation</span>
                <span className="rounded-full border border-[var(--border)] px-3 py-1">Copy prompt</span>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-white/88 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                Visual Roadmap
              </p>
              <svg
                viewBox="0 0 320 160"
                className="mt-4 h-40 w-full rounded-[22px] bg-[var(--panel)] p-3"
                role="img"
                aria-label="Workflow roadmap illustration"
              >
                <rect x="14" y="24" width="90" height="40" rx="16" fill="#fffdfa" stroke="rgba(69,45,31,0.12)" />
                <rect x="116" y="60" width="90" height="40" rx="16" fill="#fffdfa" stroke="rgba(69,45,31,0.12)" />
                <rect x="218" y="96" width="88" height="40" rx="16" fill="#fffdfa" stroke="rgba(69,45,31,0.12)" />
                <path d="M104 44C132 44 104 80 116 80" stroke="#b8583a" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M206 80C234 80 206 116 218 116" stroke="#b8583a" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="58" cy="44" r="7" fill="#b8583a" />
                <circle cx="160" cy="80" r="7" fill="#8f412a" />
                <circle cx="262" cy="116" r="7" fill="#221712" />
                <text x="28" y="48" fontSize="12" fill="#201612">Learn</text>
                <text x="130" y="84" fontSize="12" fill="#201612">Prompt</text>
                <text x="233" y="120" fontSize="12" fill="#201612">Systemize</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
