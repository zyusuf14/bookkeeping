"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0d0b16] px-5 py-24 text-white sm:px-6 sm:py-32 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-purple-300 sm:text-sm"
        >
          About Us
        </motion.p>

        {/* Main layout */}
        <div className="mt-8 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Modern accounting.
              <span className="block text-white/40">
                Personal support.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Founded in 2021, The Bookkeeping Corporation is a modern
              accounting firm providing reliable and efficient financial
              services to businesses and individuals.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/45">
              We combine personalised client care with modern accounting
              technology to help our clients maintain accurate financial
              records, navigate complex tax requirements and make informed
              financial decisions.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end"
          >
            {/* Founded card */}
            <div className="border-t border-white/10 py-7">
              <p className="text-5xl font-semibold tracking-tight sm:text-6xl">
                2021
              </p>

              <p className="mt-2 text-sm text-white/40">
                The year our journey began.
              </p>
            </div>

            {/* Businesses */}
            <div className="border-t border-white/10 py-7">
              <p className="text-xl font-medium">
                Businesses & Individuals
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                Tailored financial support designed around the needs of each
                client.
              </p>
            </div>

            {/* Values */}
            <div className="border-y border-white/10 py-7">
              <p className="text-xl font-medium">
                Integrity. Professionalism. Compliance.
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                Clear, reliable support with a commitment to helping our
                clients succeed.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 border-t border-white/10 pt-10 sm:mt-32"
        >
          <p className="max-w-4xl text-2xl leading-relaxed text-white/75 sm:text-3xl lg:text-4xl lg:leading-[1.4]">
            Whether you&apos;re a startup, a growing business or an individual
            seeking financial clarity, we provide{" "}
            <span className="text-purple-300">
              tailored solutions built around you.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}