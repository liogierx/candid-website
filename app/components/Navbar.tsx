"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-[9999]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">

{/* LEFT — CANDID */}
<Link href="#top" className="flex items-center group">
  <Image
  src="/logos/candid-logo.png"
  alt="CANDID Study"
  width={300}
  height={200}
  className="object-contain w-[250px] md:w-[240px] lg:w-[360px]"
/>
</Link>

{/* CENTER — DESKTOP NAV */}
<div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
  <a href="#what" className="hover:text-[#532cf9] transition">What is CANDID?</a>
  <a href="#partners" className="hover:text-[#532cf9] transition">Partners</a>
  <a href="#location" className="hover:text-[#532cf9] transition">Location</a>
  <a href="#objectives" className="hover:text-[#532cf9] transition">Objectives</a>
  <a href="#results" className="hover:text-[#532cf9] transition">Results</a>
  <a href="#contact" className="hover:text-[#532cf9] transition">Contact</a>
</div>

{/* RIGHT SIDE */}
<div className="flex items-center gap-4">

  {/* LOULOU LOGO (always visible) */}
  <a
    href="https://www.louloufoundation.org"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center group"
  >
    <Image
      src="/logos/loulou-logo.png"
      alt="Loulou Foundation"
      width={80}
      height={50}
      className="object-contain w-[100px] md:w-[150px] lg:w-[140px]"
    />
  </a>

  {/* MOBILE MENU BUTTON */}
  <button
    className="md:hidden text-gray-700 text-2xl"
    onClick={() => setOpen(!open)}
  >
    {open ? "✕" : "☰"}
  </button>

</div>
</div>

      {/* MOBILE DROPDOWN */}
      {open && (
  <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 animate-[fadeIn_0.2s_ease-out]">
    <div className="flex flex-col divide-y divide-gray-200 text-gray-700 font-medium">
      
      <a
        href="#what"
        onClick={() => setOpen(false)}
        className="py-4 hover:text-[#532cf9] transition"
      >
        What is CANDID?
      </a>

      <a
        href="#partners"
        onClick={() => setOpen(false)}
        className="py-4 hover:text-[#532cf9] transition"
      >
        Partners
      </a>

      <a
        href="#location"
        onClick={() => setOpen(false)}
        className="py-4 hover:text-[#532cf9] transition"
      >
        Location
      </a>

      <a
        href="#objectives"
        onClick={() => setOpen(false)}
        className="py-4 hover:text-[#532cf9] transition"
      >
        Objectives
      </a>

      <a
        href="#results"
        onClick={() => setOpen(false)}
        className="py-4 hover:text-[#532cf9] transition"
      >
        Results
      </a>

      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="py-4 hover:text-[#532cf9] transition"
      >
        Contact
      </a>

      <div className="pt-6">
        <a
          href="https://www.louloufoundation.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center group"
        >
          <Image
            src="/logos/loulou-logo.jpg"
            alt="Loulou Foundation"
            width={120}
            height={70}
            className="object-contain"
          />
        </a>
      </div>

    </div>
  </div>
)}
    </nav>
  );
}