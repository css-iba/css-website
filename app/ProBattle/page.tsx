'use client';

import * as React from "react";
import About from "@/components/ProBattle/About";
import Sponsors from "@/components/ProBattle/Sponsors";
import ModulesSection from "@/components/ProBattle/ModulesSection";
import Contact from "@/components/ProBattle/Contact";
import RegisterCTA from "@/components/ProBattle/RegisterCTA"
import FAQs from "@/components/ProBattle/FAQs";

const ProBattle: React.FC = () => {
  return (
    <main className="min-h-screen colour-bg">
      <About />
      <ModulesSection />
      <RegisterCTA />
      <Contact />
      <FAQs />
      <Sponsors />
    </main>
  );
};

export default ProBattle;
