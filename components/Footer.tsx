import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07060d] px-5 py-14 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="relative h-16 w-40">
              <Image
                src="/logo.jpeg"
                alt="The Bookkeeping Corporation"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              Reliable accounting, bookkeeping and financial support for
              businesses and individuals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-white">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/services"
                className="text-sm text-white/45 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/about"
                className="text-sm text-white/45 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-sm text-white/45 transition hover:text-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-medium text-white">
              Legal
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/terms"
                className="text-sm text-white/45 transition hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy"
                className="text-sm text-white/45 transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-white">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:info@thebookkeepingcorporation.com"
                className="break-all text-sm text-white/45 transition hover:text-white"
              >
                info@thebookkeepingcorporation.com
              </a>

              
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 The Bookkeeping Corporation. All rights reserved.
          </p>

          <p>
            Accounting support built around your business.
          </p>
        </div>

      </div>
    </footer>
  );
}