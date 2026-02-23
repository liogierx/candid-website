"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StudyUpdate() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-white to-[#f8f9ff] px-6 md:px-20 py-28 transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-5xl mx-auto relative">
        {/* BACK BUTTON */}
        <Link
          href="/"
          className="absolute -top-16 left-0 text-sm text-gray-500 hover:text-[#532cf9] transition-colors duration-300"
        >
          ← Back to home
        </Link>

        {/* TITLE */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
          Study update
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-gray-500">
          Latest milestones and publications of the CANDID study
        </p>

        {/* TIMELINE */}
        <div className="mt-16 relative border-l border-[#532cf930] pl-12 space-y-20">
          <TimelineItem
            date="January 2026"
            content={
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>
                  • 90% of the participants achieved the 2-year study visit.
                </li>
                <li>• First participant finished the study.</li>
                <li>
                  • Baseline data analyses published in Epilepsia –{" "}
                  <a
                    href="https://onlinelibrary.wiley.com/doi/10.1002/epi.70095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#532cf9] transition-colors duration-300"
                    >
                    Liogier et al. 2026
                  </a>.
                </li>
              </ul>
            }
          />

          <TimelineItem
            date="January 2025"
            content={
              <p className="text-gray-600 text-sm leading-relaxed">
                Enrollment was achieved in approximately 1 year, with 112
                participants. Demographics, baseline characteristics, and
                baseline scale results were presented at the {" "}
                  <a
                    href="https://aesnet.org/abstractslisting/preliminary-baseline-results-from-the-candid-study---an-observational-study-in-patients-with-cdkl5-deficiency-disorder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#532cf9] transition-colors duration-300"
                    >
                    2024 AES congress
                  </a>.                              
              </p>
            }
          />
        </div>
      </div>
    </main>
  );
}

/* ---------- Timeline Item Component ---------- */

function TimelineItem({
  date,
  content,
}: {
  date: string;
  content: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* DOT */}
      <div className="absolute -left-[30px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] shadow-md" />

      {/* DATE */}
      <h3 className="text-lg font-semibold text-gray-800">{date}</h3>

      {/* CARD */}
      <div className="mt-5 bg-white rounded-2xl shadow-sm border border-[#532cf920] p-7 transition hover:shadow-md duration-300">
        {content}
      </div>
    </div>
  );
}
