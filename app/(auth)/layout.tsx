export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[var(--canvas)] px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_minmax(0,540px)]">
        <section className="rounded-[32px] bg-[linear-gradient(135deg,#211611_0%,#7a412f_100%)] p-8 text-white shadow-[0_30px_80px_rgba(34,22,17,0.28)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Real Estate AI Learning Lab
          </p>
          <h1 className="mt-6 max-w-xl font-serif text-5xl leading-tight">
            Learn real estate and build AI workflows without starting from scratch.
          </h1>
          <div className="mt-8 space-y-4 text-base leading-7 text-white/78">
            <p>Local MVP mode lets you test the full experience before backend auth is added.</p>
            <p>Your demo account, lesson progress, prompt favorites, and quiz results are saved in browser storage.</p>
          </div>
        </section>
        <div className="flex items-center">{children}</div>
      </div>
    </div>
  );
}
