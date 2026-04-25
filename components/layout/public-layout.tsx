import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/custom-builds", label: "Custom Builds" },
  { href: "/tracks", label: "Tracks" },
];

export function PublicLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[rgba(252,248,241,0.88)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-semibold text-white">
              RE
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                Real Estate AI
              </p>
              <p className="text-base font-semibold">Learning Lab</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[var(--ink-muted)] md:flex">
            {publicLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink href="/login" variant="ghost" className="hidden sm:inline-flex">
              Log in
            </ButtonLink>
            <ButtonLink href="/signup">Start learning</ButtonLink>
          </div>
        </div>
      </header>

      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
