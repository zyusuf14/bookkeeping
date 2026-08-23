export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#090714] text-white">
      
      {/* Background glow */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-2 lg:px-10 lg:pb-20 lg:pt-32">

        {/* Text */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-purple-300">
            The Bookkeeping Corporation
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Accounting Infastructure
            <span className="block bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              built around your business.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Reliable accounting, bookkeeping and financial support for
            businesses and individuals — helping you stay organised,
            compliant and ready to grow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Get in Touch
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Financial dashboard visual */}
        <div className="relative mx-auto w-full max-w-xl">
          
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-md sm:p-6">

            {/* Fake dashboard header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="h-3 w-24 rounded-full bg-white/20" />
                <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
              </div>

              <div className="h-8 w-8 rounded-full bg-white/10" />
            </div>

            {/* Dashboard cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[0.07] p-4">
                <p className="text-xs text-white/40">Revenue</p>
                <p className="mt-2 text-xl font-semibold">£24,850</p>
                <p className="mt-1 text-xs text-purple-300">+12.4%</p>
              </div>

              <div className="rounded-2xl bg-white/[0.07] p-4">
                <p className="text-xs text-white/40">Expenses</p>
                <p className="mt-2 text-xl font-semibold">£8,420</p>
                <p className="mt-1 text-xs text-blue-300">-4.2%</p>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-3 rounded-2xl bg-white/[0.07] p-4">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs text-white/40">Financial overview</p>
                <p className="text-xs text-white/30">2026</p>
              </div>

              <div className="flex h-36 items-end gap-2 sm:h-44">
                {[35, 50, 42, 68, 55, 76, 88, 70, 95, 82, 100, 92].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-purple-500/30 to-blue-300/70"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-3 flex gap-3">
              <div className="h-16 flex-1 rounded-2xl bg-white/[0.07]" />
              <div className="h-16 w-1/3 rounded-2xl bg-white/[0.07]" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}