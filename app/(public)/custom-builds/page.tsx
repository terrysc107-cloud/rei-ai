import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";
import { workflowOffer } from "@/lib/data/course-data";

export default function CustomBuildsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 lg:px-10">
      <PageIntro
        eyebrow="Custom Builds"
        title={workflowOffer.title}
        description={workflowOffer.description}
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-[var(--border)] bg-white p-8">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">What a request should include</h2>
          <div className="mt-6 space-y-4">
            {workflowOffer.deliverables.map((item) => (
              <div key={item} className="rounded-2xl bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] bg-[linear-gradient(160deg,#211611_0%,#7a412f_100%)] p-8 text-white">
          <Badge className="border-white/20 bg-white/10 text-white/80">Best for</Badge>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-white/82">
            <li>Agents building lead follow-up and marketing systems</li>
            <li>Landlords organizing maintenance and tenant communication flows</li>
            <li>Investors documenting underwriting or rehab workflows</li>
          </ul>
          <div className="mt-8">
            <ButtonLink href="/custom-build-request" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/18">
              Submit request
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
