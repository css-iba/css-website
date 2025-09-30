'use client';

import * as React from "react";
import { HomeCarousel } from "@/components/Home/Carousel";
import TitleSection from "@/components/Home/TitleSection";
import DescriptionSection from "@/components/Home/DescriptionSection";
import CodeX from "@/components/Home/CodeX";
import ProBattle from "@/components/Home/ProBattle";
import TeamSection from "@/components/Home/TeamSection";
import FAQ  from "@/components/Home/FAQ";
// import WelcomeScreen from "@/components/Home/WelcomeScreen";

const Home: React.FC = () => {
  // const [showWelcome, setShowWelcome] = React.useState(false);

  // React.useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const hasShown = sessionStorage.getItem("homeWelcomeShown");
  //     if (!hasShown) {
  //       setShowWelcome(true);
  //       const timer = setTimeout(() => {
  //         setShowWelcome(false);
  //         sessionStorage.setItem("homeWelcomeShown", "true");
  //       }, 2000);
  //       return () => clearTimeout(timer);
  //     }
  //   }
  // }, []);

  return (
    <div className="colour-bg min-h-screen">
      {/* <WelcomeScreen show={showWelcome} onFinish={() => setShowWelcome(false)} /> */}
        <TitleSection />
        <HomeCarousel />
        <DescriptionSection />
        <CodeX />
        <ProBattle />
        <TeamSection />
        <FAQ />
    </div>
  );
};

export default Home;