import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#080711] px-6 py-32 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
          Payment Successful
        </p>

        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
          You&apos;re all set.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/55">
          Your subscription has been created successfully.
          A confirmation will be sent to the email used at checkout.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}