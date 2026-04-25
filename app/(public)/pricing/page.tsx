import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { pricingComparison, pricingNarrative } from "@/lib/data/course-data";

const tiers = [
  {
    name: "Starter",
    price: "Free MVP",
    description: "Explore the local testing build, sample tracks, prompts, quizzes, and workflow submissions.",
    items: ["Browser-saved progress", "Prompt library", "Quizzes and final project", "Custom workflow request form"],
  },
  {
    name: "Guided",
    price: "Planned",
    description: "Future version with real authentication, saved accounts, and production data persistence.",
    items: ["Supabase auth", "Persistent dashboards", "Production project submissions", "Role-based content access"],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 py-16 lg:px-10">
      <PageIntro
        eyebrow="Pricing"
        title="Start with the MVP locally, then grow into production."
        description="This build is intentionally focused on testing the full learning flow before backend services are connected."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {tiers.map((tier) => (
          <section key={tier.name} className="rounded-[28px] border border-[var(--border)] bg-white p-8 shadow-[0_24px_60px_rgba(62,49,38,0.06)]">
            <Badge>{tier.name}</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--ink)]">{tier.price}</h2>
            <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{tier.description}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--ink-muted)]">
              {tier.items.map((item) => (
                <li key={item} className="rounded-2xl bg-[var(--panel)] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-8 text-white">
          <Badge className="border-white/20 bg-white/10 text-white/80">Why the pricing looks like this</Badge>
          <h2 className="mt-5 text-3xl font-semibold">{pricingNarrative.headline}</h2>
          <div className="mt-6 space-y-4">
            {pricingNarrative.bullets.map((item) => (
              <div key={item} className="rounded-[22px] bg-white/8 p-4 text-sm leading-7 text-white/82">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[var(--border)] bg-white p-8">
          <h2 className="text-3xl font-semibold text-[var(--ink)]">Comparison snapshot</h2>
          <div className="mt-6 space-y-3">
            {pricingComparison.map((row) => (
              <div key={row.feature} className="grid gap-3 rounded-[22px] bg-[var(--panel)] p-4 lg:grid-cols-[0.95fr_0.7fr_0.8fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">Feature</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{row.feature}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">Starter</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{row.starter}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">Guided</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{row.guided}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        <ButtonLink href="/signup">Create a local learner account</ButtonLink>
        <ButtonLink href="/custom-builds" variant="secondary">
          Explore custom builds
        </ButtonLink>
      </div>
    </div>
  );
}
