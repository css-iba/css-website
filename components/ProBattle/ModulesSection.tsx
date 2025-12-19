'use client';

import * as React from "react";
import { ModuleCard } from './ModuleCard';
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

// Variants for category section
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

type ModuleCategory = 'Technical' | 'Non-Technical' | 'High School' | 'Robotics';

const CATEGORY_ORDER: ModuleCategory[] = ['Technical', 'Non-Technical', 'High School', 'Robotics'];
const SUB_HEADING_ORDER: string[] = ['Recommended for university students', 'Recommended for all', 'Recommended for high school students', 'Recommended for robotics enthusiasts'];

function groupModulesByCategory(modules: typeof modulesData): Record<ModuleCategory, typeof modulesData> {
  const grouped: Record<ModuleCategory, typeof modulesData> = {
    Technical: [],
    'Non-Technical': [],
    'High School': [],
    Robotics: [],
  };

  modules.forEach((module) => {
    const category = (module.category || 'Technical') as ModuleCategory;
    if (grouped[category]) {
      grouped[category].push(module);
    }
  });

  return grouped;
}

export default function ModulesSection() {
  const [isMobile, setIsMobile] = React.useState(false);
  const groupedModules = groupModulesByCategory(modulesData);

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
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold font-heading colour-text mb-2"
          >
            ProBattle Modules
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            custom={isMobile}
            variants={textVariants}
            className="font-heading colour-text text-md md:text-lg"
          >
            Explore ProBattle&apos;s diverse modules designed to enhance your skills - Choose your path!
          </motion.p>
        </div>

        {/* Category Sections */}
        {CATEGORY_ORDER.map((category, i) => {
          const categoryModules = groupedModules[category];
          if (categoryModules.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="mb-16"
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-bold font-heading colour-text mb-2 pb-3 border-b-2 border-gray-200 w-[fit-content]">
                {category}
              </h3>

              {/* Subheading */}
              <p className="font-heading colour-text text-md md:text-lg mb-8">
                {SUB_HEADING_ORDER[i]}
              </p>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryModules.map((module) => (
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
