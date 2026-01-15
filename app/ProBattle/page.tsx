'use client';

import * as React from "react";
import About from "@/components/ProBattle/About";
import Sponsors from "@/components/ProBattle/Sponsors";
import ModulesSection from "@/components/ProBattle/ModulesSection";
import Contact from "@/components/ProBattle/Contact";
import RegisterCTA from "@/components/ProBattle/RegisterCTA"
import FAQs from "@/components/ProBattle/FAQs";
import Details from "@/components/ProBattle/Details";
import WorkshopNotification from "@/components/ProBattle/WorkshopNotification";

const ProBattle: React.FC = () => {
  return (
    <main className="min-h-screen colour-bg">
      <About />
      <Details />
      <ModulesSection />
      <RegisterCTA />
      <WorkshopNotification />
      <Contact />
      <FAQs />
      <Sponsors />
    </main>
  );
};

export default ProBattle;
