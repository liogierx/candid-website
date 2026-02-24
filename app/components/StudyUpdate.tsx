"use client";

export default function StudyUpdate() {
  return (
    <section className="px-6 md:px-20 py-16 md:py-28 bg-gradient-to-b from-white to-[#f8f9ff]">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
          Study update
        </h2>

        {/* TIMELINE */}
        <div className="mt-14 relative border-l border-[#532cf930] pl-10 space-y-14">
          {/* ITEM 1 */}
          <div className="relative">
            <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb]"></div>

            <h3 className="text-lg font-semibold text-gray-800">
              January 2026
            </h3>

            <div className="mt-4 bg-white rounded-2xl shadow-sm border border-[#532cf920] p-6 transition hover:shadow-md">
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>
                  • 90% of the participants achieved the 2-year study visit.
                </li>
                <li>• First participant finished the study.</li>
                <li>
                  • Baseline data analyses published in Epilepsia –{" "}
                  <span className="underline cursor-pointer hover:text-[#532cf9]">
                    Liogier et al. 2026
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="relative">
            <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb]"></div>

            <h3 className="text-lg font-semibold text-gray-800">
              January 2025
            </h3>

            <div className="mt-4 bg-white rounded-2xl shadow-sm border border-[#532cf920] p-6 transition hover:shadow-md">
              <p className="text-gray-600 text-sm leading-relaxed">
                Enrollment was achieved in approximately 1 year, with 112
                participants. Demographics, baseline characteristics, and
                baseline scale results were presented at the 2024 AES congress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
