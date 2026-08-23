"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080711]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="relative block h-12 w-32 sm:h-14 sm:w-40">
          <Image
            src="/logo.jpeg"
            alt="The Bookkeeping Corporation"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/services"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080711]/95 px-5 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Services
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-3 text-center font-medium text-black"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}