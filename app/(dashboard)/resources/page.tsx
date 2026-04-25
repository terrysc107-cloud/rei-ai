import { Badge } from "@/components/ui/badge";
import { PageIntro } from "@/components/ui/page-intro";
import { resources } from "@/lib/data/course-data";

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Resources"
        title="Templates, worksheets, and checklists that support the lessons."
        description="These resources are lightweight on purpose so you can test the workflow without depending on uploads or external tools."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <section key={resource.id} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <Badge>{resource.type}</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--ink)]">{resource.title}</h2>
            <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{resource.description}</p>
            <div className="mt-6 rounded-2xl bg-[var(--panel)] px-4 py-3 text-sm font-medium text-[var(--ink-muted)]">
              {resource.downloadLabel}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
