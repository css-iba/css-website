"use client";
import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

const WelcomeAnimation = dynamic(() => import("@/components/Home/welcomeAnimation"), { ssr: false });


const TitleSection: React.FC = () => {
    const { scrollY } = useScroll();
    // Fade out and move down as user scrolls 0-200px
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);
    const y = useTransform(scrollY, [0, 200], [0, 60]);

    return (
        <section className="relative flex md:min-h-screen flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 gap-8 overflow-visible">
            
            {/* Background pattern */}
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]
                    bg-[size:55px_55px]
                    [mask-image:linear-gradient(to_bottom_left,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.7)_15%,rgba(255,255,255,0.3)_60%,transparent_100%),linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.8)_20%,rgba(255,255,255,1)_40%)]
                    [mask-composite:intersect]
                    [-webkit-mask-composite:destination-in]
                    [mask-repeat:no-repeat]
                    [mask-size:100%_100%]
                    animate-gridGlow
                "
            />


            {/* Lottie animation top left on desktop */}
            <div className="absolute z-20 -top-16 -left-24 md:-top-16 md:-left-0 w-40 h-40 md:w-70 md:h-70 pointer-events-none select-none hidden md:block">
                <WelcomeAnimation />
            </div>

            {/* Lottie animation top left on mobile */}
            <div className="absolute z-20 -top-2 right-0 w-36 h-36 pointer-events-none select-none md:hidden">
                <WelcomeAnimation />
            </div>

            <div className="z-21 flex-1 flex flex-col items-center md:items-start -translate-y-10">
                <motion.h1
                    style={{ opacity, y, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    className="z-21 font-title text-5xl text-center md:text-left md:text-8xl mb-4 md:ml-12 bg-gradient-to-r from-[var(--colour-text)] via-[var(--colour-accent)] to-[var(--colour-text)] bg-clip-text text-transparent"
                >
                    IBA <br /> Computer Science Society
                </motion.h1>
                <motion.p
                    style={{ opacity, y, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    className="font-heading text-base text-center md:text-left md:text-2xl md:ml-12 bg-gradient-to-r from-[var(--colour-text)] via-[var(--colour-accent)] to-[var(--colour-text)] bg-clip-text text-transparent"
                >
                    Innovate . Collaborate . Excel .
                </motion.p>
            </div>

            <div className="hidden md:flex flex-1 justify-center items-center -translate-y-10">
                <Image
                    src="/icon.png"
                    alt="CSS Logo"
                    width={320}
                    height={320}
                    className="w-48 h-48 md:w-120 md:h-120"
                    priority
                />
            </div>

        </section>
    );
};

export default TitleSection;
