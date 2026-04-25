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
    </div>
  );
}
