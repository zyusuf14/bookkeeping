"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Annual Accounts",
    description:
      "We prepare accurate annual accounts for companies and charities, helping you meet your legal and reporting obligations while giving you a clear view of your financial position.",
  },
  {
    number: "02",
    title: "Payroll",
    description:
      "Our payroll services cover payslips, P60s, CIS returns, refunds, P11D reporting and pensions, helping you stay accurate and compliant with HMRC requirements.",
  },
  {
    number: "03",
    title: "HMRC Enquiries",
    description:
      "We provide professional support with HMRC enquiries relating to Self Assessment, VAT and company accounts, helping you manage correspondence and resolve issues efficiently.",
  },
  {
    number: "04",
    title: "Tax Advice & Planning",
    description:
      "We provide tailored tax advice and planning for individuals and businesses, helping you improve tax efficiency, meet your obligations and plan for long-term financial goals.",
  },
  {
    number: "05",
    title: "Bookkeeping",
    description:
      "Our onsite and offsite bookkeeping services help keep your financial records accurate, up to date and organised, including transaction recording and bank reconciliation.",
  },
  {
    number: "06",
    title: "Cloud Accounting",
    description:
      "We support system modernisation, cloud accounting setup, migration and system reviews to help make your financial processes more efficient and accessible.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-[#080711] px-5 pb-28 pt-16 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Page intro */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            Our Services
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Clear financial support,
            <span className="block text-white/40">
              tailored to your needs.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            From annual accounts and payroll to tax advice, bookkeeping and
            cloud accounting, we provide practical support for businesses and
            individuals.
          </p>
        </motion.div>

        {/* Service list */}
        <div className="mt-20 space-y-6">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: 80,
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
                duration: 0.75,
                delay: index * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:p-10"
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl transition duration-700 group-hover:bg-purple-500/20" />

              <div className="relative grid gap-6 lg:grid-cols-[120px_1fr] lg:gap-10">
                <div>
                  <span className="text-sm tracking-[0.2em] text-purple-300">
                    {service.number}
                  </span>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-5">
                    <h2 className="text-2xl font-semibold sm:text-3xl">
                      {service.title}
                    </h2>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                      ↗
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}