"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-[#0d0b16] px-5 pb-28 pt-16 text-white sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            About Us
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Modern accounting.
            <span className="block text-white/40">
              Personal support.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
            Founded in 2021, The Bookkeeping Corporation is a modern accounting
            firm dedicated to delivering reliable and efficient financial
            services to businesses and individuals.
          </p>
        </motion.div>

        {/* Story */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Financial support that feels personal.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/55">
              We combine personalised client care with modern accounting
              technology to provide clear, efficient and dependable support.
            </p>

            <p className="mt-5 text-base leading-8 text-white/45">
              Our team helps clients maintain accurate financial records,
              navigate complex tax regulations and improve their financial
              performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-0"
          >
            <div className="border-t border-white/10 py-7">
              <p className="text-5xl font-semibold tracking-tight">2021</p>

              <p className="mt-2 text-sm text-white/40">
                The year The Bookkeeping Corporation was founded.
              </p>
            </div>

            <div className="border-t border-white/10 py-7">
              <p className="text-xl font-medium">
                Businesses & Individuals
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                Tailored support designed around each client&apos;s specific
                financial needs.
              </p>
            </div>

            <div className="border-y border-white/10 py-7">
              <p className="text-xl font-medium">
                Modern Technology
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                Efficient accounting systems and technology help us provide
                clear and reliable financial support.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Who we help */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 rounded-[32px] border border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:p-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
            Who We Help
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Support for every stage of your financial journey.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/55">
            Whether you&apos;re a startup, a growing business or an individual
            seeking greater financial clarity, we provide tailored solutions
            built around your needs.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
              What We Stand For
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Built on trust.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Integrity",
                text: "Clear, honest and dependable financial support.",
              },
              {
                title: "Professionalism",
                text: "A consistent commitment to high standards and client care.",
              },
              {
                title: "Compliance",
                text: "Helping clients meet their financial and regulatory obligations.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7"
              >
                <p className="text-xl font-medium">{value.title}</p>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}