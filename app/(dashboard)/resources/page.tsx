import { Badge } from "@/components/ui/badge";
import { PageIntro } from "@/components/ui/page-intro";
import {
  resourceCollections,
  resources,
} from "@/lib/data/course-data";

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Resources"
        title="Templates, worksheets, and checklists that support the lessons."
        description="These resources are lightweight on purpose so you can test the workflow without depending on uploads or external tools."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {resourceCollections.map((collection) => (
          <section key={collection.id} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">{collection.title}</h2>
            <p className="mt-3 text-base leading-7 text-[var(--ink-muted)]">{collection.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {collection.resourceIds.map((resourceId) => {
                const resource = resources.find((item) => item.id === resourceId);
                return resource ? <Badge key={resource.id}>{resource.title}</Badge> : null;
              })}
            </div>
          </section>
        ))}
      </section>

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
