"use client"

import * as React from "react"
import Image from "next/image"
import { User, GraduationCap, Users, Layers, Presentation, Mic, Workflow, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

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

              <p 
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" , textShadow: "0 0 10px #ff00ff" }}
                className="text-base font-heading font-semibold bg-gradient-to-r from-[var(--colour-text)] via-[var(--colour-accent)] to-[var(--colour-text)] bg-clip-text text-transparent"
              >
                Introducing ProBattle &apos;26
              </p>

              <h1 
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" , textShadow: "0 0 10px #ff00ff" }}
                className="mt-2 pb-2 text-4xl sm:text-5xl font-bold tracking-tight colour-secondary font-heading bg-gradient-to-r from-[var(--colour-text)] via-[var(--colour-accent)] to-[var(--colour-text)] bg-clip-text text-transparent"
              >
                Bigger and Better
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-justify">
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
                brightness-90
                contrast-100
                "
            />
        </div>


        {/* Details + Features */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

          <div className="lg:pr-4">
            <div className="max-w-xl lg:max-w-lg space-y-6">

              {/* Age Groups Box */}
              <div className="p-5 rounded-2xl bg-[#061a19] border border-[#19675b]/30 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-3 font-heading text-white">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0a3631]">
                    <Users className="size-5 text-[#19c8aa]" />
                  </div>
                  Expanded Age Groups
                </h2>

                <p className="mt-3 text-base leading-relaxed text-gray-300 text-justify">
                  Our modules cater to a broader audience, ensuring tailored learning tracks that match your expectations.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="flex gap-x-3 items-center p-3 rounded-xl bg-[#0a3631]/80 border border-[#19675b]/40">
                    <User className="size-5 text-[#19c8aa]" />
                    <span className="font-semibold text-base text-white">A Levels</span>
                  </div>

                  <div className="flex gap-x-3 items-center p-3 rounded-xl bg-[#0a3631]/80 border border-[#19675b]/40">
                    <GraduationCap className="size-5 text-[#19c8aa]" />
                    <span className="font-semibold text-base text-white">Undergraduates</span>
                  </div>
                </div>
              </div>

              {/* Modules Box */}
              <div className="p-5 rounded-2xl bg-[#061a19] border border-[#19675b]/30 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-3 font-heading text-white">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0a3631]">
                    <Layers className="size-5 text-[#19c8aa]" />
                  </div>
                  Increased Number of Modules
                </h2>

                <p className="mt-3 text-base leading-relaxed text-gray-300 text-justify">
                  We now offer <strong className="text-[#19c8aa]">15+ diverse modules</strong>—covering everything from foundational 
                  topics to advanced interdisciplinary subjects.
                </p>
              </div>

              {/* Mentorship & Talks Box */}
              <div className="p-5 rounded-2xl bg-[#061a19] border border-[#19675b]/30 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-3 font-heading text-white">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0a3631]">
                    <Mic className="size-5 text-[#19c8aa]" />
                  </div>
                  Mentorship &amp; Tech Talks
                </h2>

                <ul className="mt-5 space-y-3">
                  <li className="flex gap-x-3 p-3 rounded-xl bg-[#0a3631]/80 border border-[#19675b]/40">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#19675b]/30 shrink-0">
                      <Presentation className="size-4 text-[#19c8aa]" />
                    </div>
                    <div>
                      <span className="font-bold text-base block text-white">Speaker Sessions</span>
                      <span className="text-sm text-gray-300">Hear from industry professionals, innovators, and domain experts.</span>
                    </div>
                  </li>

                  <li className="flex gap-x-3 p-3 rounded-xl bg-[#0a3631]/80 border border-[#19675b]/40">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#19675b]/30 shrink-0">
                      <Workflow className="size-4 text-[#19c8aa]" />
                    </div>
                    <div>
                      <span className="font-bold text-base block text-white">Hands-on Workshops</span>
                      <span className="text-sm text-gray-300">Practical sessions to strengthen real-world technical capability.</span>
                    </div>
                  </li>

                  <li className="flex gap-x-3 p-3 rounded-xl bg-[#0a3631]/80 border border-[#19675b]/40">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#19675b]/30 shrink-0">
                      <Users className="size-4 text-[#19c8aa]" />
                    </div>
                    <div>
                      <span className="font-bold text-base block text-white">Panel Interviews</span>
                      <span className="text-sm text-gray-300">Interactive discussions on careers, projects, and future pathways.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed">
                With these enhancements, ProBattle &apos;26 is set to provide an even more enriching and comprehensive learning experience.
                Keep an eye out for registration details coming soon!
              </p>

              {/* Register Now Button */}
              <Link href="/ProBattle/Registrations">
                <Button className="mt-4 group relative inline-flex items-center gap-3 px-8 py-6 text-lg font-semibold font-heading text-white bg-gradient-to-r from-[#0a3631] via-[#19675b] to-[#19c8aa] hover:from-[#061a19] hover:via-[#005d50] hover:to-[#19675b] rounded-xl shadow-lg hover:shadow-[#19c8aa]/25 transition-all duration-300 border border-[#19c8aa]/30">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;
