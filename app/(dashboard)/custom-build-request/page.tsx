import { WorkflowRequestForm } from "@/components/forms/workflow-request-form";
import { PageIntro } from "@/components/ui/page-intro";
import { workflowOffer } from "@/lib/data/course-data";

export default function CustomBuildRequestPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Workflow Request"
        title={workflowOffer.title}
        description={workflowOffer.description}
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">What to include</h2>
          <div className="mt-5 space-y-4">
            {workflowOffer.deliverables.map((item) => (
              <div key={item} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                {item}
              </div>
            ))}
          </div>
        </section>
        <WorkflowRequestForm requestType="custom-build" />
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-6 text-white">
          <p className="text-sm font-medium text-white/70">What happens next</p>
          <div className="mt-5 space-y-3">
            {workflowOffer.process.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-[22px] bg-white/8 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-white/82">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Strong request categories</h2>
          <div className="mt-5 space-y-3">
            {workflowOffer.idealFits.map((fit) => (
              <div key={fit} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                {fit}
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
        <h2 className="text-2xl font-semibold text-[var(--ink)]">Example request phrasing</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {workflowOffer.exampleRequests.map((request) => (
            <div key={request} className="rounded-[24px] bg-[var(--panel)] p-5 text-sm leading-6 text-[var(--ink-muted)]">
              {request}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
