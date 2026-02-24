import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 py-16 md:py-24 bg-gradient-to-r from-[#f95bf610] via-[#532cf910] to-[#03f7eb10]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <span className="inline-block px-4 py-2 bg-white rounded-full text-xs md:text-sm text-gray-600 shadow">
            Observational study • CDKL5 Deficiency Disorder (CDD)
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
            Introduction to the CANDID Study
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            CANDID is designed to identify the most appropriate motor, cognitive
            and behavioral clinical measures for future international clinical
            trials in CDD.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="#contact"
              className="text-center px-6 py-3 rounded-full border border-[#532cf9] text-[#532cf9] hover:bg-[#532cf9] hover:text-white transition-all duration-300"
            >
              Ask a question
            </Link>

            <Link
              href="#what"
              className="text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] text-white hover:opacity-90 transition-all duration-300"
            >
              Explore the study
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard
            title="Study duration"
            text="Planned for 3 years between the 1st and last visit"
          />
          <InfoCard title="Type" text="International, non-interventional" />
          <InfoCard title="Countries" text="7 countries involved" />
          <InfoCard title="Sites" text="22 clinical centers" />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, text }: any) {
  return (
    <div
      className="
      group relative overflow-hidden
      bg-white p-5 md:p-6 rounded-xl
      border border-[#532cf920]
      shadow-sm
      transition-all duration-300 ease-out
      hover:-translate-y-1.5
      hover:shadow-lg
      hover:border-[#532cf940]
      hover:scale-[1.02]
      "
    >
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        bg-gradient-to-r from-[#f95bf605] via-[#532cf905] to-[#03f7eb05]
        "
      />

      <div className="relative">
        <h3 className="font-semibold text-gray-700 text-sm md:text-base transition-colors duration-300 group-hover:text-[#532cf9]">
          {title}
        </h3>
        <p className="mt-2 text-gray-500 text-sm">{text}</p>
      </div>
    </div>
  );
}