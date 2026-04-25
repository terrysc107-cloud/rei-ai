import Link from "next/link";
import { DemoAuthForm } from "@/components/forms/demo-auth-form";

export default function SignupPage() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
          Local Signup
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Create a browser-saved learner account.
        </h2>
      </div>
      <DemoAuthForm mode="signup" />
      <p className="text-sm text-[var(--ink-muted)]">
        Already testing the app? <Link href="/login" className="font-semibold text-[var(--accent)]">Log in</Link>.
      </p>
    </div>
  );
}
