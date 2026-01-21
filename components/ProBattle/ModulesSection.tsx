'use client';

import * as React from "react";
import { ModuleCard } from './ModuleCard';
import { motion } from "framer-motion";
import { modulesData } from "@/app/ProBattle/constants";
import { AlertTriangle } from "lucide-react";

// Variants for text blocks (heading, paragraphs, socials)
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// Variants for cards
const cardsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// Variants for category section
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// Stagger children animation for grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
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
  const [hasMounted, setHasMounted] = React.useState(false);
  const groupedModules = groupModulesByCategory(modulesData);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  // Prevent hydration mismatch - render with initial state until mounted
  if (!hasMounted) {
    return (
      <section id="modules" className="w-full pt-12 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mt-12 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-heading colour-text mb-2">
              ProBattle Modules
            </h2>
            <p className="font-heading colour-text text-md md:text-lg">
              Explore ProBattle&apos;s diverse modules designed to enhance your skills - Choose your path!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="modules" className="w-full pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mt-12 mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold font-heading colour-text mb-2"
          >
            ProBattle Modules
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className="font-heading colour-text text-md md:text-lg"
          >
            Explore ProBattle&apos;s diverse modules designed to enhance your skills - Choose your path!
          </motion.p>

          {/* Important Note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardsVariants}
            className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3"
          >
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-500 font-heading text-[20px]">Important Note (Read this)</p>

              <p className="text-[16px] text-amber-400/90 font-text mt-1">
                Participants are recommended to not register in more than one module with the same tier level. 
                Please check the tier displayed on each module card before registering.
              </p>

              <p className="text-[16px] text-amber-400/90 font-text mt-3">
                &apos;High School&apos; modules are specifically designed for high school students and lower levels while the &apos;University&apos; modules are for university students and above. 
                For example, Competitive Programming is for university students while Competitive Programming (High School) is for high school students. 
                If you think you can handle university level modules, feel free to register for them even if you are in high school. 
              </p>

              {/* Module participant limit reached notice */}
              <div className="mt-5">
                <span className="font-semibold text-red-600 font-heading text-[20px]">Registrations closed</span>
                <span className="ml-2 font-bold text-red-500 text-[20px]">Only accepting robotics registrations</span>
              </div>

            </div>
          </motion.div>
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
              viewport={{ once: true, amount: 0.1 }}
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
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
              >
                {categoryModules.map((module) => (
                  <motion.div
                    key={module.name}
                    variants={cardsVariants}
                  >
                    <ModuleCard {...module} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
