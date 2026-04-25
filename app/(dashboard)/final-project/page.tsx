import { WorkflowRequestForm } from "@/components/forms/workflow-request-form";
import { PageIntro } from "@/components/ui/page-intro";
import { finalProject } from "@/lib/data/course-data";

export default function FinalProjectPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Final Project"
        title={finalProject.title}
        description={finalProject.description}
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Required deliverables</h2>
          <div className="mt-5 space-y-4">
            {finalProject.deliverables.map((item) => (
              <div key={item} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <WorkflowRequestForm requestType="final-project" />
      </div>
    </div>
  );
}
