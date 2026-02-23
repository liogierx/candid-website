"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-20 py-24 bg-white scroll-mt-28">
      <div className="max-w-3xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
            Contact us
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            For any questions regarding the CANDID study
          </p>
        </div>

        {/* FORM */}
        <form
          action="https://formspree.io/f/mvzbblzr"
          method="POST"
          className="space-y-6"
        >
          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className="w-full border-b border-gray-300 py-3 px-2 text-gray-700 
                         focus:border-[#532cf9] focus:outline-none transition-all"
            />
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border-b border-gray-300 py-3 px-2 text-gray-700 
                         focus:border-[#532cf9] focus:outline-none transition-all"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full border-b border-gray-300 py-3 px-2 text-gray-700 
                         focus:border-[#532cf9] focus:outline-none transition-all resize-none"
            />
          </div>

          {/* BUTTON */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="px-8 py-2.5 rounded-full text-sm font-medium
                         bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb]
                         text-white hover:opacity-90 transition-all duration-300"
            >
              Send message
            </button>
          </div>
        </form>

        {/* ================= CLINICAL TRIALS ================= */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Glow subtil */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                    from-[#f95bf6]/10 via-[#532cf9]/10 to-[#03f7eb]/10 
                    blur-xl"
            />

            {/* Card */}
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-sm px-10 py-8 text-center">
              {/* Label */}
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
                Official registration
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                ClinicalTrials.gov
              </h3>

              {/* NCT number */}
              <p className="mt-2 text-sm text-gray-500">Identifier</p>

              <p className="text-[#532cf9] font-medium text-sm mt-1">
                NCT05373719
              </p>

              {/* Button */}
              <a
                href="https://clinicaltrials.gov/study/NCT05373719"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-2.5 rounded-full text-sm font-medium
                   border border-[#532cf9] text-[#532cf9]
                   hover:bg-[#532cf9] hover:text-white
                   transition-all duration-300"
              >
                View study →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
