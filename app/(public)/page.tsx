import { TrackCard } from "@/components/course/track-card";
import { HeroVisual } from "@/components/ui/hero-visual";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import {
  dashboardHighlights,
  landingCurriculumPillars,
  landingFaqs,
  landingOutcomeStages,
  landingPersonas,
  landingSurfaceCards,
  landingTestimonials,
  landingWorkflowExamples,
  tracks,
} from "@/lib/data/course-data";

export default function LandingPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-24">
        <div className="space-y-8 self-center">
          <Badge>Structured learning, prompts, and workflow systems</Badge>
          <div className="space-y-6">
            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[var(--ink)] sm:text-6xl">
              Learn real estate with AI, then turn that knowledge into repeatable operating systems.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">
              Real Estate AI Learning Lab is a guided education platform for beginners, agents, wholesalers, landlords, investors, and operators who want to study smarter, prompt better, and build workflows they can reuse across the business.
            </p>
          </div>
          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-[var(--border)] bg-white/78 p-4">
              <p className="text-sm font-medium text-[var(--ink-muted)]">Built for</p>
              <p className="mt-2 text-xl font-semibold text-[var(--ink)]">Learning + execution</p>
            </div>
            <div className="rounded-[24px] border border-[var(--border)] bg-white/78 p-4">
              <p className="text-sm font-medium text-[var(--ink-muted)]">Focus</p>
              <p className="mt-2 text-xl font-semibold text-[var(--ink)]">Prompts + systems</p>
            </div>
            <div className="rounded-[24px] border border-[var(--border)] bg-white/78 p-4">
              <p className="text-sm font-medium text-[var(--ink-muted)]">Avoids</p>
              <p className="mt-2 text-xl font-semibold text-[var(--ink)]">AI tool overload</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/signup">Start the local MVP</ButtonLink>
            <ButtonLink href="/tracks" variant="secondary">
              Explore tracks
            </ButtonLink>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 grid gap-4 lg:grid-cols-3">
          {dashboardHighlights.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_48px_rgba(62,49,38,0.06)]">
              <h2 className="text-lg font-semibold text-[var(--ink)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="rounded-[38px] border border-[var(--border)] bg-white/80 p-6 shadow-[0_24px_60px_rgba(62,49,38,0.06)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <Badge>Transformation path</Badge>
              <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
                The product is designed to change how the user thinks and works.
              </h2>
              <p className="text-base leading-7 text-[var(--ink-muted)]">
                This makes the landing page feel less like a generic feature list and more like a clear before-to-after journey.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {landingOutcomeStages.map((stage, index) => (
                <section
                  key={stage.title}
                  className="rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,253,250,0.95)_0%,rgba(243,235,225,0.9)_100%)] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[var(--ink)]">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{stage.description}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge>Who this is for</Badge>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
              Built for people who want AI to make the work clearer, not noisier.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            The product positioning is intentionally practical. It is not trying to be a chatbot, a CRM, or an abstract training portal.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {landingPersonas.map((persona) => (
            <section key={persona.title} className="rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-6">
              <h3 className="text-2xl font-semibold text-[var(--ink)]">{persona.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{persona.description}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge>Learning tracks</Badge>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
              Choose the part of real estate where AI can help you right now.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            Each track combines education, prompts, and workflow thinking so you can learn concepts and put them to work in the same place.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge>What users build</Badge>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
              The outcome is a working library of repeatable real estate workflows.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            This is the section Claude can later trim, sharpen, or reframe, but the hard part is already here: concrete use cases tied to product value.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {landingWorkflowExamples.map((example) => (
            <section key={example.title} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
              <h3 className="text-2xl font-semibold text-[var(--ink)]">{example.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{example.description}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge>Product surfaces</Badge>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
              More than a course, cleaner than an overbuilt tool stack.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            The UI should signal that this is a practical system for learning, saving, and implementing workflows, not just consuming lessons.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {landingSurfaceCards.map((card) => (
            <section key={card.title} className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_48px_rgba(62,49,38,0.06)]">
              <h3 className="text-2xl font-semibold text-[var(--ink)]">{card.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{card.description}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="rounded-[36px] bg-[#221712] px-6 py-10 text-white shadow-[0_32px_90px_rgba(34,22,17,0.22)] lg:px-10">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <Badge className="border-white/15 bg-white/10 text-white/80">How the curriculum works</Badge>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
                The app teaches a pattern, gives a prompt, and turns that prompt into a system.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/74">
              That sequence matters because users do not just need better outputs. They need repeatability, confidence, and operational clarity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {landingCurriculumPillars.map((pillar, index) => (
              <section key={pillar.title} className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/74">{pillar.description}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {landingTestimonials.map((testimonial) => (
            <section key={testimonial.quote} className="rounded-[30px] border border-[var(--border)] bg-white p-6">
              <p className="font-serif text-2xl leading-10 text-[var(--ink)]">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-semibold text-[var(--ink)]">{testimonial.author}</p>
                <p className="text-sm text-[var(--ink-muted)]">{testimonial.role}</p>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Badge>FAQ</Badge>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
              Positioning questions already answered.
            </h2>
            <p className="text-base leading-7 text-[var(--ink-muted)]">
              This copy gives Claude a strong base for polishing differentiation and objections later.
            </p>
          </div>
          <div className="space-y-4">
            {landingFaqs.map((item) => (
              <section key={item.question} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
                <h3 className="text-xl font-semibold text-[var(--ink)]">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{item.answer}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="rounded-[36px] border border-[var(--border)] bg-[linear-gradient(135deg,#fff6ea_0%,#f2e7d7_100%)] px-6 py-10 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <Badge>Call to action</Badge>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--ink)]">
                Start with the local MVP now, then refine the positioning and production stack in the next phase.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
                The structure is here. The messaging base is here. The next iteration can focus on refinement instead of starting from zero.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/signup">Create local account</ButtonLink>
              <ButtonLink href="/custom-builds" variant="secondary">
                Review workflow offer
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
