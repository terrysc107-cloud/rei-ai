import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { onboardingPaths } from "@/lib/data/course-data";

const steps = [
  {
    title: "1. Pick a track",
    description: "Choose the area of real estate where you want AI to improve learning or workflow quality first.",
  },
  {
    title: "2. Complete a lesson",
    description: "Move through guided lessons that explain the thinking, not just the prompt text.",
  },
  {
    title: "3. Save a prompt",
    description: "Keep the templates that feel useful so your workflow library starts taking shape.",
  },
  {
    title: "4. Take a quiz and submit a project",
    description: "Use quizzes for retention and the final project to create one workflow you actually want to use.",
  },
];

export default function StartPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Start Here"
        title="A simple path through the MVP."
        description="This app is designed to move you from learning to reusable systems without overwhelming you."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <section key={step.title} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">{step.title}</h2>
            <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{step.description}</p>
          </section>
        ))}
      </div>

      <section className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-[var(--ink)]">Pick your starting path</h2>
          <p className="max-w-3xl text-base leading-7 text-[var(--ink-muted)]">
            If the user is unsure where to begin, the best move is to choose based on the business problem they want AI to help with first.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {onboardingPaths.map((path) => (
            <section key={path.title} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
              <h3 className="text-2xl font-semibold text-[var(--ink)]">{path.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{path.description}</p>
              <div className="mt-6">
                <ButtonLink href={path.href} variant="secondary">
                  Open path
                </ButtonLink>
              </div>
            </section>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        <ButtonLink href="/tracks">Choose a track</ButtonLink>
        <ButtonLink href="/prompts" variant="secondary">
          Browse prompts
        </ButtonLink>
      </div>
    </div>
  );
}
