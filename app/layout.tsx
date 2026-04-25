import type { Metadata } from "next";
import { AppStateProvider } from "@/components/providers/app-state-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate AI Learning Lab",
  description:
    "A guided learning and workflow-building platform for using AI in real estate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  );
}
