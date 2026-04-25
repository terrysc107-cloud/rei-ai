import { DashboardLayoutShell } from "@/components/layout/dashboard-layout";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayoutShell>{children}</DashboardLayoutShell>;
}
