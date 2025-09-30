'use client';

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { resources } from "@/app/Codex/constants";
import { motion } from "framer-motion";
import * as React from "react";

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

export default function Resources() {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper to get initials from name
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="colour-box-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            custom={isMobile}
            variants={textVariants}
            className="text-5xl font-semibold tracking-tight text-pretty font-heading text-gray-900 sm:text-6xl"
          >
            Resources
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            custom={isMobile}
            variants={textVariants}
            className="mt-2 text-lg sm:text-xl text-gray-600 font-text"
          >
            Curated resources built over time by students individually or collectively to help you learn, build, and grow.
          </motion.p>
        </div>

        <Separator className="bg-gray-400 my-10 md:my-16" />

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.id} className="flex max-w-xl flex-col items-start justify-between">

              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold font-heading text-gray-900 group-hover:text-gray-600">
                  {resource.title}
                </h3>
                <p className="mt-5 line-clamp-5 md:line-clamp-4 text-sm/6 text-gray-600 font-text text-justify">{resource.description}</p>
                <Link href={resource.href} className="font-text mt-4 inline-block text-blue-600 font-medium hover:underline">Visit Resource</Link>
              </div>

              <div className="relative mt-4 flex items-center gap-x-4 justify-self-end">
                {resource.author.imageUrl ? (
                  <Image alt="" src={resource.author.imageUrl} width={40} height={40} className="size-10 rounded-full bg-gray-50" />
                ) : (
                  <div className="size-10 rounded-full bg-white flex items-center justify-center text-gray-700 font-bold font-text">
                    {getInitials(resource.author.name)}
                  </div>
                )}
                <div className="text-sm/6">
                  <p className="font-semibold font-text text-gray-900">
                    {resource.author.name}
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
