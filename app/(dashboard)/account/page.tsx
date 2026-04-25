"use client";

import { useAppState } from "@/components/providers/app-state-provider";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/page-intro";

export default function AccountPage() {
  const { user, workflowSubmissions, savedQuizResults } = useAppState();

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Account"
        title={user ? `${user.name}'s local account` : "No local account yet"}
        description={
          user
            ? `Testing as ${user.email}. This page will later connect to Supabase auth and account persistence.`
            : "Create a local account to save progress and make the dashboard feel personalized during MVP testing."
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Profile</h2>
          <div className="mt-5 space-y-3 text-sm leading-6 text-[var(--ink-muted)]">
            <p>Name: {user?.name ?? "Not set"}</p>
            <p>Email: {user?.email ?? "Not set"}</p>
            <p>Role: {user?.role ?? "Not set"}</p>
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Saved activity</h2>
          <div className="mt-5 space-y-3 text-sm leading-6 text-[var(--ink-muted)]">
            <p>Quiz results saved: {Object.keys(savedQuizResults).length}</p>
            <p>Workflow submissions saved: {workflowSubmissions.length}</p>
          </div>
          {!user ? (
            <div className="mt-6">
              <ButtonLink href="/signup">Create local account</ButtonLink>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
