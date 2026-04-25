"use client";

import { useState } from "react";
import { useAppState } from "@/components/providers/app-state-provider";
import { buttonClassName } from "@/components/ui/button";

export function WorkflowRequestForm({
  requestType,
}: {
  requestType: "custom-build" | "final-project";
}) {
  const { submitWorkflow } = useAppState();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitWorkflow({ requestType, title, details });
    setTitle("");
    setDetails("");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[28px] border border-[var(--border)] bg-white p-6">
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[var(--ink-muted)]">Title</span>
        <input
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--border-strong)]"
          placeholder={
            requestType === "custom-build"
              ? "Lead intake workflow for open house leads"
              : "Licensing study system with flashcards and drills"
          }
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-[var(--ink-muted)]">Details</span>
        <textarea
          required
          rows={6}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--border-strong)]"
          placeholder="Describe the workflow, your current process, and what success looks like."
        />
      </label>

      <button type="submit" className={buttonClassName("primary")}>
        {requestType === "custom-build" ? "Submit workflow request" : "Submit final project"}
      </button>

      {submitted ? (
        <p className="rounded-2xl bg-[var(--panel)] px-4 py-3 text-sm text-[var(--ink-muted)]">
          Saved locally for testing. In the backend phase, this will post to your project database.
        </p>
      ) : null}
    </form>
  );
}
