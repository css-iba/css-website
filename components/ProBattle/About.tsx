"use client"

import * as React from "react"
import Image from "next/image"
import { User, GraduationCap, Users, Layers, Presentation, Mic, Workflow } from "lucide-react"

const About: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden colour-bg px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 font-text colour-text">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[800px] w-[1600px] -translate-x-1/2 
          mask-[radial-gradient(64rem_64rem_at_top,rgba(255,255,255,0.5),transparent)] 
          stroke-[rgba(255,255,255,0.25)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="pattern-bg"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          {/* Background faint shapes */}
          <svg x="50%" y={-1} className="overflow-visible fill-[rgba(255,255,255,0.08)]">
            <path
              d="M-100.5 0h201v201h-201Z 
                 M699.5 0h201v201h-201Z 
                 M499.5 400h201v201h-201Z 
                 M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>

          {/* Pattern lines */}
          <rect fill="url(#pattern-bg)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      {/* Main Grid */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

        {/* Heading + Intro */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

          <div className="lg:pr-4">
            <div className="lg:max-w-lg">

              <p className="text-base font-heading font-semibold">Introducing ProBattle `26</p>

              <h1 className="mt-2 text-4xl font-semibold tracking-tight colour-secondary sm:text-5xl font-heading">
                Bigger and better
              </h1>

              <p className="mt-6 text-lg text-justify">
                Our initiative has expanded significantly—reaching more students, offering more modules, 
                and delivering deeper hands-on learning. Whether you&apos;re in A Levels or an undergraduate program, 
                our redesigned experience offers something meaningful for everyone.
              </p>

            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-center lg:block">
            <Image alt="Program Overview" src="/ProBattle/about.jpg" width={1600} height={1600} className="
                w-[300px]        /* mobile width */
                sm:w-[300px]      /* small screens */
                lg:w-[800px]      /* large screens */
                3xl:w-[1000px]     /* extra large screens */
                max-w-none 
                rounded-xl 
                bg-black/40 
                shadow-xl 
                ring-1 ring-white/20 
                object-cover
                "
            />
        </div>


        {/* Details + Features */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

          <div className="lg:pr-4">
            <div className="max-w-xl text-base lg:max-w-lg">

              {/* Age Groups */}
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Users className="colour-secondary" /> Expanded Age Groups
              </h2>

              <p className="mt-4 text-justify">
                Our modules cater to a broader audience, ensuring tailored learning tracks that match your expectations.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-x-3">
                  <User className="mt-1 size-5" />
                  <span className="font-medium">A Levels</span>
                </li>

                <li className="flex gap-x-3">
                  <GraduationCap className="mt-1 size-5" />
                  <span className="font-medium">Undergraduates</span>
                </li>
              </ul>

              {/* Modules */}
              <h2 className="mt-12 text-2xl font-bold tracking-tight flex items-center gap-2">
                <Layers /> Increased Number of Modules
              </h2>

              <p className="mt-4 text-justify">
                We now offer <strong>15+ diverse modules</strong>—covering everything from foundational 
                topics to advanced interdisciplinary subjects.
              </p>

              {/* Mentorship & Talks */}
              <h2 className="mt-12 text-2xl font-bold tracking-tight flex items-center gap-2">
                <Mic /> Mentorship Sessions &amp; Tech Talks
              </h2>

              <ul className="mt-6 space-y-6">

                <li className="flex gap-x-3">
                  <Presentation className="mt-1 size-5" />
                  <span>
                    <strong>Speaker Sessions:</strong> Hear from industry professionals, innovators, 
                    and domain experts across multiple fields.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <Workflow className="mt-1 size-5" />
                  <span>
                    <strong>Hands-on Workshops:</strong> Practical, immersive sessions designed 
                    to strengthen real-world technical capability.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <Users className="mt-1 size-5" />
                  <span>
                    <strong>Panel Interviews:</strong> Interactive discussions offering guidance 
                    on careers, projects, and future pathways.
                  </span>
                </li>

              </ul>

              <p className="mt-10">
                With these enhancements, ProBattle `26 is set to provide an even more enriching and comprehensive learning experience.
                Keep an eye out for registration details coming soon!
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;
