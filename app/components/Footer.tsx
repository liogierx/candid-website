"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-16 grid md:grid-cols-3 gap-16">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <Image
              src="/logos/candid-logo.png"
              alt="CANDID logo"
              width={260}
              height={80}
              className="object-contain"
            />
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            International observational study in CDKL5 Deficiency Disorder
            (CDD), designed to support future international clinical trials.
          </p>

          <p className="text-gray-400 text-sm">
            ClinicalTrials.gov Identifier:{" "}
             <a
              href="https://clinicaltrials.gov/study/NCT05373719"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-[#532cf9] hover:underline transition"
            >
              NCT05373719
            </a>
          </p>
        </div>

        {/* PAGES */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-6 tracking-tight">
            Pages
          </h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>
              <Link href="#what" className="hover:text-[#532cf9] transition">
                What is CANDID?
              </Link>
            </li>
            <li>
              <Link
                href="#objectives"
                className="hover:text-[#532cf9] transition"
              >
                Objectives
              </Link>
            </li>
            <li>
              <Link
                href="#location"
                className="hover:text-[#532cf9] transition"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link href="#results" className="hover:text-[#532cf9] transition">
                Results
              </Link>
            </li>
            <li>
              <Link
                href="#partners"
                className="hover:text-[#532cf9] transition"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#532cf9] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-6 tracking-tight">
            Contact
          </h4>

          <a
            href="mailto:xliogier@louloufoundation.org"
            className="text-gray-500 text-sm hover:text-[#532cf9] transition"
          >
            xliogier@louloufoundation.org
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
        © 2026 CANDID Study — All rights reserved
      </div>
    </footer>
  );
}
