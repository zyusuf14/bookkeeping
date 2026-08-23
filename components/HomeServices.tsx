"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const services = [
  "Annual Accounts",
  "Payroll",
  "HMRC Enquiries",
  "Tax Advice & Planning",
  "Bookkeeping",
  "Cloud Accounting",
];

export default function HomeServices() {
  const sectionRef = useRef<HTMLElement>(null);

  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3, 6);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
    SCROLL DOWN:
    -110px → 0px
    cards separate

    SCROLL UP:
    0px → -110px
    cards overlap halfway
  */
  const bottomRowYRaw = useTransform(
    scrollYProgress,
    [0.2, 0.65],
    [-110, 0]
  );

  /*
    Makes the movement smooth rather than jerky,
    while still following your scroll.
  */
  const bottomRowY = useSpring(bottomRowYRaw, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080711] px-5 py-24 text-white sm:px-6 sm:py-32 lg:px-10"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Financial support
            <span className="block text-white/40">
              built around your business.
            </span>
          </h2>
        </div>

        {/* LAPTOP / DESKTOP */}
        <div className="mt-16 hidden md:block">

          {/* TOP THREE */}
          <div className="relative z-0 grid grid-cols-3 gap-5">
            {topRow.map((service, index) => (
              <div
                key={service}
                className="group relative h-[180px] overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-6"
              >
                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition duration-700 group-hover:bg-purple-500/20" />

                <div className="relative flex h-full flex-col justify-between">
                  <span className="text-xs tracking-[0.2em] text-purple-300">
                    0{index + 1}
                  </span>

                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-xl font-medium lg:text-2xl">
                      {service}
                    </h3>

                    <span className="text-xl text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-purple-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM THREE */}
          <motion.div
            style={{ y: bottomRowY }}
            className="relative z-10 mt-5 grid grid-cols-3 gap-5"
          >
            {bottomRow.map((service, index) => (
              <div
                key={service}
                className="group relative h-[180px] overflow-hidden rounded-[26px] border border-white/10 bg-[#12101d] p-6 shadow-2xl"
              >
                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-700 group-hover:bg-purple-500/20" />

                <div className="relative flex h-full flex-col justify-between">
                  <span className="text-xs tracking-[0.2em] text-purple-300">
                    0{index + 4}
                  </span>

                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-xl font-medium lg:text-2xl">
                      {service}
                    </h3>

                    <span className="text-xl text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-purple-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.55,
                delay: index * 0.04,
              }}
              className="h-[140px] rounded-[22px] border border-white/10 bg-white/[0.05] p-5"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-xs text-purple-300">
                  0{index + 1}
                </span>

                <h3 className="text-base font-medium leading-snug">
                  {service}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services link */}
        <div className="mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Explore All Services
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}