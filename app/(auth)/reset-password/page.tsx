import { DemoAuthForm } from "@/components/forms/demo-auth-form";

export default function ResetPasswordPage() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
          Reset Password
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Simulate the reset flow locally.
        </h2>
      </div>
      <DemoAuthForm mode="reset" />
    </div>
  );
}
