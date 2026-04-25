"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppState } from "@/components/providers/app-state-provider";
import { buttonClassName } from "@/components/ui/button";

export function DemoAuthForm({
  mode,
}: {
  mode: "login" | "signup" | "reset";
}) {
  const router = useRouter();
  const { login } = useAppState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Agent");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "reset") {
      setSubmitted(true);
      return;
    }

    login({
      name: name || "Local Learner",
      email,
      role,
    });
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_24px_60px_rgba(62,49,38,0.08)]">
      {mode !== "reset" ? (
        <>
          {mode === "signup" ? (
            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--ink-muted)]">Name</span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--border-strong)]"
                placeholder="Taylor Investor"
              />
            </label>
          ) : null}

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--ink-muted)]">Email</span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--border-strong)]"
              placeholder="you@example.com"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--ink-muted)]">Role</span>
            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--border-strong)]"
            >
              <option>Beginner</option>
              <option>Agent</option>
              <option>Wholesaler</option>
              <option>Landlord</option>
              <option>Investor</option>
              <option>Team Leader</option>
            </select>
          </label>

          <button type="submit" className={`${buttonClassName("primary")} w-full`}>
            {mode === "signup" ? "Create local account" : "Log in locally"}
          </button>
        </>
      ) : (
        <>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-[var(--ink-muted)]">Email</span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--border-strong)]"
              placeholder="you@example.com"
            />
          </label>

          <button type="submit" className={`${buttonClassName("primary")} w-full`}>
            Send local reset instructions
          </button>

          {submitted ? (
            <p className="rounded-2xl bg-[var(--panel)] px-4 py-3 text-sm text-[var(--ink-muted)]">
              Local MVP note: password reset is simulated. In the Supabase phase, this becomes a real email reset flow.
            </p>
          ) : null}
        </>
      )}
    </form>
  );
}
