"use client";

import * as React from "react";
import Image from "next/image";

const roboticsModules = [
  {
    name: "LFR Uni Round 1",
    image: "/ProBattle/robotics/R1_LFR_UNI.jpeg",
  },
];

const RoboticsModulesShowcase: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 colour-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center text-[#19c8aa] mb-12 drop-shadow-lg">
          Robotics Modules Tracks
        </h2>
        <div className="flex flex-col gap-10">
          {roboticsModules.map((module, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center bg-[#061a19] rounded-3xl shadow-2xl border border-[#19c8aa]/30 p-8 hover:scale-[1.025] transition-transform duration-300 group min-h-[220px]"
            >
              <div className="flex-shrink-0 w-[400px] h-[220px] flex items-center justify-center rounded-none overflow-hidden bg-[#0a3631]/60 border border-[#19c8aa]/20 group-hover:shadow-[0_0_32px_#19c8aa55]">
                <Image
                  src={module.image}
                  alt={module.name}
                  width={400}
                  height={220}
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
              </div>
              <div className="flex-1 pl-8 flex flex-col justify-center">
                <h3 className="text-2xl font-extrabold font-heading text-white mb-2 group-hover:text-[#19c8aa] transition-colors duration-200">
                  {module.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoboticsModulesShowcase;
