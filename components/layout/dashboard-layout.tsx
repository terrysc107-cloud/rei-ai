"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppState } from "@/components/providers/app-state-provider";
import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const dashboardLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/start", label: "Start" },
  { href: "/tracks", label: "Tracks" },
  { href: "/prompts", label: "Prompts" },
  { href: "/resources", label: "Resources" },
  { href: "/final-project", label: "Final Project" },
  { href: "/custom-build-request", label: "Workflow Request" },
  { href: "/account", label: "Account" },
];

export function DashboardLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, completedLessons, favoritePromptIds, logout } = useAppState();

  return (
    <div className="min-h-screen bg-[var(--canvas)]">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10">
        <aside className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_24px_60px_rgba(62,49,38,0.08)]">
          <div className="space-y-5">
            <Link href="/" className="block">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                Real Estate AI
              </p>
              <h1 className="text-2xl font-semibold text-[var(--ink)]">Learning Lab</h1>
            </Link>

            <div className="rounded-3xl bg-white/70 p-4">
              <p className="text-sm font-medium text-[var(--ink-muted)]">
                {user ? `Welcome back, ${user.name}` : "Demo mode active"}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                {user
                  ? `${user.role} account saved locally in this browser.`
                  : "Sign up locally to save your progress, favorite prompts, and quiz results."}
              </p>
              <div className="mt-4 flex gap-3 text-xs text-[var(--ink-muted)]">
                <span>{completedLessons.length} lessons complete</span>
                <span>{favoritePromptIds.length} prompts saved</span>
              </div>
            </div>

            <nav className="space-y-1">
              {dashboardLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex rounded-2xl px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-[var(--ink)] text-white"
                        : "text-[var(--ink-muted)] hover:bg-white hover:text-[var(--ink)]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-3 rounded-3xl border border-dashed border-[var(--border-strong)] bg-white/60 p-4">
              <p className="text-sm font-semibold text-[var(--ink)]">Quick actions</p>
              <div className="flex flex-col gap-3">
                <Link href="/quizzes/quiz-ai-foundations" className={buttonClassName("secondary")}>
                  Take a quiz
                </Link>
                <Link href="/custom-build-request" className={buttonClassName("secondary")}>
                  Request a workflow
                </Link>
              </div>
              {user ? (
                <button
                  type="button"
                  onClick={logout}
                  className="w-full rounded-full border border-[var(--border-strong)] px-4 py-3 text-sm font-semibold text-[var(--ink-muted)] transition hover:bg-white"
                >
                  Log out
                </button>
              ) : null}
            </div>
          </div>
        </aside>

        <main className="space-y-6 rounded-[32px] border border-[var(--border)] bg-white/70 p-6 shadow-[0_30px_80px_rgba(62,49,38,0.08)] lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
