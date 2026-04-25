import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";

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

      <ButtonLink href="/signup">Create a local learner account</ButtonLink>
    </div>
  );
}
