import { PublicLayoutShell } from "@/components/layout/public-layout";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicLayoutShell>{children}</PublicLayoutShell>;
}
