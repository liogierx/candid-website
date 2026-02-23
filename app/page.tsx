"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsCandid from "./components/WhatIsCandid";
import Partners from "./components/Partners";
import MapSection from "./components/MapSection";
import Objectives from "./components/Objectives";
import ResultsSection from "./components/ResultsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    // Supprime le hash de l’URL au chargement
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIsCandid />
      <Partners />
      <MapSection />
      <Objectives />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
