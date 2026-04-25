import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonStyles = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)] shadow-[0_14px_30px_rgba(184,88,58,0.2)]",
  secondary:
    "border border-[var(--border-strong)] bg-white/80 text-[var(--ink)] hover:bg-[var(--panel)]",
  ghost: "text-[var(--ink-muted)] hover:bg-white/70 hover:text-[var(--ink)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function buttonClassName(variant: keyof typeof buttonStyles = "primary") {
  return cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
    buttonStyles[variant],
  );
}
