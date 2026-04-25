import Link from "next/link";
import { DemoAuthForm } from "@/components/forms/demo-auth-form";

export default function LoginPage() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
          Local Login
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Continue your learning workflow.
        </h2>
      </div>
      <DemoAuthForm mode="login" />
      <p className="text-sm text-[var(--ink-muted)]">
        Need an account? <Link href="/signup" className="font-semibold text-[var(--accent)]">Create one here</Link>.
      </p>
    </div>
  );
}
