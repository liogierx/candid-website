import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <section
      id="partners"
      className="px-20 py-28 bg-gradient-to-r from-[#f95bf608] via-[#532cf908] to-[#03f7eb08] scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
          CANDID study partners
        </h2>

        <p className="mt-3 text-gray-500 text-lg">
          Consortium and governance information
        </p>

        {/* TEXT BOX */}
        <div className="mt-10 p-8 rounded-2xl border border-[#532cf930] bg-white shadow-sm">
          <p className="text-gray-600 leading-relaxed">
            End of 2021, the Loulou Foundation, announced that seven
            biopharmaceutical industry partners, together with the Loulou
            Foundation, had formed a pre-competitive consortium to direct a key
            clinical study for the development of disease-modifying therapeutics
            for CDD. The seven companies are <span className="font-semibold text-gray-800">
            Amicus Therapeutics; Biogen Inc.; Elaaj Bio; Immedica Pharma AB 
            </span>{" "}
            (formerly Marinus Pharmaceuticals Inc.)
            <span className="font-semibold text-gray-800">; PTC Therapeutics;
            Ultragenyx Pharmaceuticals Inc. and UCB </span> (formerly Zogenix Inc.). The
            seven partners share the funding and governance of a 3-year
            observational study with CDD patients, called CANDID.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            The <span className="font-semibold text-gray-800">Loulou Foundation</span> serves as the 
            study coordinator.
          </p>
        </div>

        {/* LOGOS */}
        <div className="mt-16">
          <h3 className="text-gray-600 font-medium mb-6">
            Patients groups and families
          </h3>

          <div className="flex gap-12 items-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

        {/* CDKL5 Alliance LOGO */}
        <a
          href="https://cdkl5alliance.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center group"
        >
          <Image
            src="/logos/Alliance.png"
            alt="CDKL5 Alliance"
            width={80}
            height={45}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
         </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              
              {/* IFCR LOGO */}
        <a
          href="https://www.cdkl5.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center group"
        >
          <Image
            src="/logos/IFCR.png"
            alt="IFCR"
            width={140}
            height={70}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
         </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
