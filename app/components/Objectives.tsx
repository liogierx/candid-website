import Image from "next/image";

export default function Objectives() {
  return (
    <section
      id="objectives"
      className="px-6 md:px-20 py-16 md:py-28 bg-gradient-to-r from-[#f95bf605] via-[#532cf905] to-[#03f7eb05] scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
              Study objectives
            </h2>

            <p className="mt-2 text-gray-500">
              What this study aims to identify for future trials?
            </p>

            <div className="mt-6 p-8 rounded-2xl border border-[#532cf950] bg-white">
              <p className="text-gray-600 leading-relaxed">
                The purpose of this study is to identify the best motor,
                cognitive and behavioral clinic measures in assessing their
                suitability (e.g., feasibility, floor/ceiling effects) with CDD
                patients, and their adaptability across a variety of countries
                and languages for future international clinical trials.
              </p>
            </div>

            {/* IMAGE */}
            <div className="mt-8">
              <Image
                src="/outcome_measures.png"
                alt="Outcome measures diagram"
                width={800}
                height={500}
                className="w-[90%] max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
              Outcome measures
            </h2>

            <p className="mt-2 text-gray-500">
              Selection principles and what the measures assess
            </p>

            <div className="mt-6 p-8 rounded-2xl border border-[#532cf950] bg-white space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We prioritized the use of already known scales and measures with
                regulatory precedent in similar contexts as this may allow
                future sponsors to expedite drug development in CDD.
              </p>

              <p className="text-gray-600 leading-relaxed">
                These selected measures will be administered on a number of
                occasions and will assess a wide range of skills including
                cognitive performance, behavior, global functioning, as well as
                the parent's perception of their child's independence and
                quality of life.
              </p>

              <p className="text-gray-600 leading-relaxed">
                This type of study will help de-risk a broader assessment
                selection for early and late phase clinical trials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
