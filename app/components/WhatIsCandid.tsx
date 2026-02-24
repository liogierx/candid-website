import Image from "next/image";

export default function WhatIsCandid() {
  return (
    <section id="what" className="px-6 md:px-20 py-16 md:py-28 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
          What is CANDID?
        </h2>

        <p className="mt-3 text-gray-500 text-lg">
          How does the CANDID study work?
        </p>

        {/* TEXT BOX */}
        <div className="mt-10 p-8 rounded-2xl border border-[#532cf950] bg-white shadow-sm">
          <p className="text-gray-600 leading-relaxed">
            As an{" "}
            <span className="font-semibold text-gray-800">
              observational study
            </span>{" "}
            (and not interventional), participants are followed over several
            months during which they continue to receive their{" "}
            <span className="font-semibold text-gray-800">
              usual medications and specific care
            </span>
            .
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Participants with{" "}
            <span className="font-semibold text-gray-800">
              CDD
            </span>{" "}
            and their parents complete an initial clinic visit at their
            preferred site, referred to as the{" "}
            <span className="font-semibold text-gray-800">baseline visit</span>.
            All subsequent study visits are conducted either{" "}
            <span className="font-semibold text-gray-800">
              on-site in the clinic
            </span>{" "}
            or{" "}
            <span className="font-semibold text-gray-800">
              remotely by phone
            </span>
            .
          </p>

          
          <div className="mt-6 border-t border-[#f95bf650] pt-4 text-sm text-gray-500">
            The study is ongoing and planned for{" "}
            <span className="font-semibold text-gray-800">3 years, as shown below</span>.
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-16">
         {/* IMAGE */}
          <div className="mt-8">
              <Image
                src="/Timelines.png"
                alt="Timelines"
                width={800}
                height={500}
                className="w-[90%] max-w-[500px] h-auto"
              />
            </div>

         </div>
      </div>
    </section>
  );
}
