"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "2.99",
    description:
      "A simple starting point for individuals and smaller businesses looking for reliable financial support.",
    features: [
      "Essential bookkeeping support",
      "Basic financial record organisation",
      "General accounting guidance",
    ],
  },
  {
    name: "Standard",
    price: "4.99",
    popular: true,
    description:
      "Designed for growing businesses that need more regular accounting and bookkeeping support.",
    features: [
      "Ongoing bookkeeping support",
      "Payroll and HMRC assistance",
      "Financial record management",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    price: "12.99",
    description:
      "Tailored support for larger businesses with more complex financial and accounting requirements.",
    features: [
      "Comprehensive bookkeeping support",
      "Tax planning and HMRC support",
      "Payroll assistance",
      "Cloud accounting guidance",
      "Priority client support",
    ],
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#080711] px-5 pb-28 pt-16 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            Get in Touch
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Choose the level of support
            <span className="block text-white/40">
              that works for you.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Explore our current monthly plans and get in touch with our team
            to find the right option for your needs.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden rounded-[30px] border p-7 sm:p-8 ${
                plan.popular
                  ? "border-purple-400/40 bg-white/[0.08]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-purple-300 px-3 py-1 text-xs font-medium text-black">
                  Popular
                </div>
              )}

              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                {plan.name}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-2xl text-white/50">£</span>

                <span className="text-6xl font-semibold tracking-tight">
                  {plan.price}
                </span>

                <span className="pb-2 text-sm text-white/35">
                  / month
                </span>
              </div>

              <p className="mt-6 min-h-[72px] text-sm leading-6 text-white/50">
                {plan.description}
              </p>

              <Link
              href={`/checkout?plan=${plan.name.toLowerCase()}`}
                className={`mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-white text-black hover:scale-[1.02]"
                    : "border border-white/20 text-white hover:bg-white hover:text-black"
                }`}
              >
                Choose Plan
              </Link>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-sm font-medium text-white/70">
                  Includes
                </p>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/45"
                    >
                      <span className="mt-[2px] text-purple-300">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enquiry section */}
        <motion.div
          id="enquiry"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24 rounded-[32px] border border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:p-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            Contact Us
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Not sure which plan is right for you?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
            Speak to our team and we&apos;ll help you choose the level of
            support that best suits your business or individual requirements.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:info@thebookkeepingcorporation.com"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Email Us
            </a>

            <a
              href="/services"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm text-white transition hover:bg-white hover:text-black"
            >
              View Services
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}