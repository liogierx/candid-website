"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = [
  "KEY POINTS",
  "DEMOGRAPHICS",
  "EPILEPSY",
  "MEDICAL HISTORY",
  "ADAPTIVE BEHAVIOR",
];

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState("KEY POINTS");

  const isModal =
    activeTab === "DEMOGRAPHICS" ||
    activeTab === "EPILEPSY" ||
    activeTab === "ADAPTIVE BEHAVIOR";

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModal]);

  return (
    <section
      id="results"
      className="px-6 md:px-20 py-24 bg-[#f8f9ff] scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
            Study Results
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Clinical outcomes and participant characteristics
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center mb-14">
          <div className="flex md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* NORMAL SECTIONS */}
        {(activeTab === "KEY POINTS" || activeTab === "MEDICAL HISTORY") && (
          <div className="bg-white rounded-2xl font-grey font-bold shadow-md border border-gray-200 px-8 md:px-12 py-8 md:py-12 max-w-4xl mx-auto transition-all duration-300">
            {activeTab === "KEY POINTS" && (
              <div className="space-y-8">
                {[
                  "Despite the use of 1–6 antiseizure medications, daily seizure frequency ranged from 1 to 5.",
                  "Age-related skill development was observed in language, interpersonal relationships, and motor functions, as evaluated by a measure called Vineland-3. ",
                  "Most of the tested measures effectively captured disease-related deficits and the differences between the participants across different ages.",
                ].map((point, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb]" />
                      <div className="w-2 h-2 rounded-full bg-[#532cf9]" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "MEDICAL HISTORY" && (
              <div className="space-y-7">
                <Progress
  icon="/nm.png"
  label="Neuromuscular disorders"
  value={100}
/>

<Progress
  icon="/cvi.png"
  label="Cortical visual impairment (CVI)"
  value={91}
/>

<Progress
  icon="/gi.png"
  label="Gastrointestinal disorders"
  value={86}
/>

<Progress
  icon="/sleep.png"
  label="Sleep / behavior disorders"
  value={75}
/>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {isModal && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setActiveTab("KEY POINTS")}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-[fadeIn_0.3s_ease-out]"
          />

          {/* Modal wrapper ajusté */}
          <div className="fixed inset-0 z-50 flex items-start justify-center px-4 md:px-8 pt-20 md:pt-28 pb-6 md:pb-12">
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-[modalIn_0.35s_cubic-bezier(0.16,1,0.3,1)]">
            <button
  onClick={() => setActiveTab("KEY POINTS")}
  className="absolute top-4 right-4 md:top-6 md:right-6 
             z-[999] 
             w-10 h-10 
             flex items-center justify-center 
             rounded-full 
             bg-white shadow-md 
             text-gray-500 hover:text-black 
             transition"
>
  ✕
</button>

              <div className="grid lg:grid-cols-[1.35fr_0.65fr] h-full">
                {/* IMAGE SIDE */}
                <div className="relative bg-gray-50 flex items-center justify-center px-6 py-6">
                  {activeTab === "DEMOGRAPHICS" && (
                    <img
                      src="age-distribution.png"
                      alt="Age distribution"
                      className="max-h-[90%] max-w-full object-contain"
                    />
                  )}

{activeTab === "EPILEPSY" && (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full h-full px-4 md:px-6 py-6">
    <Image
      src="/epilepsy-bubble.png"
      alt="Epilepsy types"
      width={450}
      height={450}
      className="object-contain"
    />

    <Image
      src="/asm.png"
      alt="Anti-seizure medications"
      width={300}
      height={300}
      className="object-contain"
    />
  </div>
)}

{activeTab === "ADAPTIVE BEHAVIOR" && (
  <Image
    src="/vineland-growthV2.png"
    alt="Vineland growth"
    width={900}
    height={900}
    className="w-[110%] h-auto object-contain animate-[modalImageZoom_0.5s_cubic-bezier(0.16,1,0.3,1)]"
  />
)}
                </div>

                {/* TEXT SIDE */}
                <div className="px-6 md:px-14 py-8 md:py-14 overflow-y-auto flex items-start md:items-center">
                  <div className="w-full space-y-6">
                    {activeTab === "DEMOGRAPHICS" && (
                      <ContentBlock
                        title="Demographics"
                        items={[
                          { h: "93%", t: "females" },
                          { h: "First seizure onset", t: "within the first 2 months" },
                          { h: "16%", t: "on ketogenic diet" },
                          { h: "From 1–6", t: "anti-seizure medications, for those with seizures" },
                        ]}
                      />
                      
                    )}

                    {activeTab === "EPILEPSY" && (
                      <ContentBlock
                        title="Epilepsy"
                        items={[
                          {
                            h: "6",
                            t: "participants seizure-free at enrollment.",
                          },
                          { h: "33%", t: "Major motor seizures, epileptic spasms (28%), and focal seizures (10%)." },
                          { h: "Seizure patterns varied by age", t: " with infantile spasms predominant in younger children." },
                        ]}
                      />
                    )}

                    {activeTab === "ADAPTIVE BEHAVIOR" && (
                      <ContentBlock
                        title="Adaptive behavior"
                        items={[
                          { h: "Severe", t: "language delays" },
                          { h: "Motor function", t: "impairments" },
                          { h: "Some level of skills acquisition", t: "over time in language and motor function" },
                        ]}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/* ---------- TEXT BLOCK ---------- */
function ContentBlock({
  title,
  items,
}: {
  title: string;
  items: { h: string; t: string }[];
}) {
  return (
    <div className="space-y-4">
      {/* Pill Title */}
      <PillTitle>{title}</PillTitle>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl 
            bg-gradient-to-r from-[#f95bf605] via-[#532cf905] to-[#03f7eb05] 
            border border-[#532cf920]"
          >
            <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb]" />
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-[#532cf9]">{item.h}</span>{" "}
              {item.t}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PillTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div
        className="
          inline-block
          px-4 md:px-6 py-2.5
          rounded-[20px]
          border-[4px] md:border-[6px]
          border-[#6B3CC9]
          bg-[#B7D431]
          text-white
          text-3xl md:text-3xl
          font-bold
          tracking-[0.15em]
          uppercase
          text-center
        "
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- PROGRESS BAR ---------- */
function Progress({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: string;
}) {
  return (
    <div className="flex items-start gap-4">
      {/* ICON */}
      <div className="flex-shrink-0 mt-1">
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>{label}</span>
          <span className="text-[#532cf9]">{value}%</span>
        </div>

        <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb]"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}
