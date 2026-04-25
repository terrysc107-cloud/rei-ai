import { PromptActions } from "@/components/prompts/prompt-actions";
import { Badge } from "@/components/ui/badge";
import { PageIntro } from "@/components/ui/page-intro";
import { prompts } from "@/lib/data/course-data";

export default function PromptsPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Prompt Library"
        title="Copy, save, and reuse the prompts that fit your workflow."
        description="The MVP prompt library is grouped around real estate outcomes instead of generic AI use cases."
      />

      <div className="grid gap-6">
        {prompts.map((prompt) => (
          <section key={prompt.id} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{prompt.category}</Badge>
                <p className="text-sm text-[var(--ink-muted)]">{prompt.useCase}</p>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--ink)]">{prompt.title}</h2>
              <p className="text-base leading-7 text-[var(--ink-muted)]">{prompt.description}</p>
              <pre className="rounded-[24px] bg-[var(--panel)] p-5 text-sm leading-7 text-[var(--ink)]">
                {prompt.body}
              </pre>
              <PromptActions promptId={prompt.id} promptBody={prompt.body} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
