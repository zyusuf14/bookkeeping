"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const plans = {
  basic: {
    name: "Basic",
    price: "2.99",
  },
  standard: {
    name: "Standard",
    price: "4.99",
  },
  premium: {
    name: "Premium",
    price: "12.99",
  },
};

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");

  const selectedPlan = searchParams.get("plan") || "basic";

  const plan =
    plans[selectedPlan as keyof typeof plans] || plans.basic;

  async function handlePayment() {
    if (!firstName || !lastName || !email || !businessName) {
      setError("Please complete all of your details first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
          firstName,
          lastName,
          email,
          businessName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (!data.url) {
        throw new Error("Stripe checkout URL was not returned");
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);

      setError(
        "We couldn't open the payment page. Please try again."
      );

      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080711] px-5 pb-20 pt-32 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <Link
          href="/contact"
          className="text-sm text-white/40 transition hover:text-white"
        >
          ← Back to plans
        </Link>

        {/* Heading */}
        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
            Checkout
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Complete your details.
          </h1>

          <p className="mt-4 text-white/45">
            You&apos;re signing up for the {plan.name} plan.
          </p>
        </div>

        {/* Checkout layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Customer details */}
          <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-xl font-medium">
              Your details
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              {/* First name */}
              <div>
                <label className="mb-2 block text-sm text-white/50">
                  First name
                </label>

                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-purple-400"
                />
              </div>

              {/* Last name */}
              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Last name
                </label>

                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-purple-400"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/50">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-purple-400"
                />
              </div>

              {/* Business name */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/50">
                  Business name
                </label>

                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-purple-400"
                />
              </div>

            </div>
          </section>

          {/* Order summary */}
          <aside className="h-fit rounded-[28px] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
              Order Summary
            </p>

            <div className="mt-7 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-medium">
                  {plan.name}
                </h2>

                <p className="mt-1 text-sm text-white/35">
                  Monthly subscription
                </p>
              </div>

              <p className="text-lg font-medium">
                £{plan.price}
              </p>
            </div>

            <div className="my-7 border-t border-white/10" />

            <div className="flex items-center justify-between">
              <p className="text-white/50">
                Total
              </p>

              <div className="text-right">
                <p className="text-2xl font-semibold">
                  £{plan.price}
                </p>

                <p className="text-xs text-white/30">
                  every month
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePayment}
              disabled={loading}
              className="mt-8 w-full rounded-full bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02] disabled:cursor-wait disabled:opacity-50"
            >
              {loading ? "Opening Stripe..." : "Continue to Payment"}
            </button>

            {error && (
              <p className="mt-4 text-center text-sm text-red-300">
                {error}
              </p>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-white/30">
              Secure checkout powered by Stripe.
            </p>
          </aside>

        </div>
      </div>
    </main>
  );
}