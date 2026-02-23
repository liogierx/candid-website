"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-[9999]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* LEFT — CANDID LOGO */}
        <Link href="#top" className="flex items-center gap-3 group">
          <Image
            src="/logos/WhatsApp Image 2026-02-20 at 17.15.37.jpeg"
            alt="CANDID Study"
            width={350}
            height={260}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
          <a href="#what" className="hover:text-[#532cf9] transition">
            What is CANDID?
          </a>
          <a href="#partners" className="hover:text-[#532cf9] transition">
            Partners
          </a>
          <a href="#location" className="hover:text-[#532cf9] transition">
            Location
          </a>
          <a href="#objectives" className="hover:text-[#532cf9] transition">
            Objectives
          </a>
          <a href="#results" className="hover:text-[#532cf9] transition">
            Results
          </a>
          <a href="#contact" className="hover:text-[#532cf9] transition">
            Contact
          </a>
        </div>

        {/* RIGHT — LOULOU LOGO */}
        <a
          href="https://www.louloufoundation.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center group"
        >
          <Image
            src="/logos/loulou-logo.jpg"
            alt="Loulou Foundation"
            width={160}
            height={90}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div>
    </nav>
  );
}
