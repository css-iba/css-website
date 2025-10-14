'use client';

import * as React from "react";
import { HomeCarousel } from "@/components/Home/Carousel";
import TitleSection from "@/components/Home/TitleSection";
import DescriptionSection from "@/components/Home/DescriptionSection";
// import Launch from "@/components/Home/Launch";
import CodeX from "@/components/Home/CodeX";
import ProBattle from "@/components/Home/ProBattle";
import TeamSection from "@/components/Home/TeamSection";
import FAQ  from "@/components/Home/FAQ";

const Home: React.FC = () => {

  return (
    <div className="colour-bg min-h-screen">
        <TitleSection />
        <HomeCarousel />
        <DescriptionSection />
        {/* <Launch /> */}
        <CodeX />
        <ProBattle />
        <TeamSection />
        <FAQ />
    </div>
  );
};

export default Home;
