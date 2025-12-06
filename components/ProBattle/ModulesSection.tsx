'use client';

import * as React from "react";
import { ModuleCard, ModuleCardProps } from './ModuleCard';
import { motion } from "framer-motion";
import { modulesData } from "@/app/ProBattle/constants";


// Variants for text blocks (heading, paragraphs, socials)
const textVariants = {
  hidden: (isMobile: boolean) => ({
    opacity: 0,
    x: isMobile ? 0 : -50,
    y: isMobile ? -50 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

// Variants for cards
const cardsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

export default function ModulesSection() {
    const [isMobile, setIsMobile] = React.useState(false);
        
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="w-full pt-12 pb-20 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mt-12 mb-16">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        custom={isMobile}
                        variants={textVariants}className="text-4xl md:text-6xl font-bold font-heading colour-text mb-2">
                        ProBattle Modules
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        custom={isMobile}
                        variants={textVariants} className="font-heading colour-text text-md md:text-lg">
                        Explore ProBattle's diverse modules designed to enhance your skills - Choose your path!
                    </motion.p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modulesData.map((module) => (
                        <motion.div
                            key={module.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={cardsVariants}
                        >
                            <ModuleCard {...module} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}