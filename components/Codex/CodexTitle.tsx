"use client"

import * as React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const BackgroundAnimation = dynamic(() => import("@/components/Codex/BackgroundAnimation"), { ssr: false });

// variants for text: from top (hidden) to its position (visible)
const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const },
    },
};

const CodexTitle: React.FC = () => (
    <div className="relative flex flex-col h-140 md:min-h-screen items-center py-10 px-4 md:px-12 overflow-hidden">
      
        {/* Background pattern */}
        <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]
              bg-[size:55px_55px]
              [mask-image:linear-gradient(to_bottom_left,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.3)_15%,rgba(255,255,255,0.15)_60%,transparent_100%),linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.8)_20%,rgba(255,255,255,1)_40%)]
              [mask-composite:intersect]
              [-webkit-mask-composite:destination-in]
              [mask-repeat:no-repeat]
              [mask-size:100%_100%]
              animate-gridGlow
            "
        />

        {/* Wave Animation - behind all content */}
        <div className="
            absolute
            left-2/3 top-[70%]
            -translate-x-1/2 -translate-y-1/2
            md:left-[33%] md:-top-95 md:-translate-x-1/3 md:-translate-y-0
            rotate-7
            w-[150vw] h-[100vh]
            md:w-[100vw] md:h-[70vh]
            lg:w-[120vw] lg:h-[80vh]
            xl:w-[140vw] xl:h-[80vh]
            2xl:w-[160vw] 2xl:h-[80vh]
            z-1 pointer-events-none select-none opacity-35
        ">
            <BackgroundAnimation />
        </div>

        {/* Main Content */}
        <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1.0 }}
            variants={textVariants}
            className="font-title text-7xl md:text-9xl colour-text mt-8 mb-10 md:mb-14 text-center relative z-10"
        >
            What is CodeX?
        </motion.h1>
        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1.0 }}
            variants={textVariants}
            className="font-text text-lg md:text-3xl colour-accent text-center tracking-wider mx-4 md:mx-0 max-w-2xl relative z-10"
        >
            Codex is the flagship initiative of the IBA Computer Science Society, designed to foster learning, collaboration, and innovation among students passionate about coding and technology.
        </motion.p>
    
    </div>
);

export default CodexTitle;
