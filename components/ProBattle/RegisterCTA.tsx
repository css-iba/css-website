"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Rocket } from "lucide-react"

const RegisterCTA: React.FC = () => {
  return (
    <div className="colour-bg">
      <div className="mx-auto max-w-[85rem] py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#061a19] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
          {/* Background SVG Gradient */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#probattle-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="probattle-gradient">
                <stop stopColor="#19c8aa" />
                <stop offset={1} stopColor="#19675b" />
              </radialGradient>
            </defs>
          </svg>

          {/* Content */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Rocket className="w-6 h-6 text-[#19c8aa]" />
              <span className="text-[#19c8aa] font-semibold font-heading tracking-wide uppercase text-sm">
                Registrations Open
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl font-heading">
              Ready to compete at ProBattle &apos;26?
            </h2>
            
            <p className="mt-6 text-lg text-pretty text-gray-300 font-text">
              Join hundreds of students from across the city. Challenge yourself, learn new skills, 
              and compete for amazing prizes. Whether you&apos;re a participant or an attendee, there&apos;s a place for you.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/ProBattle/Registrations"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#19c8aa] px-6 py-4 text-base font-semibold text-[#061a19] shadow-lg hover:bg-[#19675b] hover:text-white transition-all duration-300 hover:scale-[1.02] font-heading"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="#modules" 
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("modules");
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                className="group text-base font-semibold text-white hover:text-[#19c8aa] transition-colors duration-300 flex items-center gap-1"
              >
                View Modules
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Stats Section (instead of image) */}
          <div className="relative mt-16 lg:mt-8 lg:flex lg:items-center">
            <div className="grid grid-cols-2 gap-6 py-10 lg:py-32">
              <div className="text-center p-6 rounded-2xl bg-[#0a3631]/50 backdrop-blur-sm border border-[#19675b]/30">
                <p className="text-4xl font-bold text-[#19c8aa] font-heading">15+</p>
                <p className="mt-2 text-sm text-gray-300 font-text">Modules</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-[#0a3631]/50 backdrop-blur-sm border border-[#19675b]/30">
                <p className="text-4xl font-bold text-[#19c8aa] font-heading">1000+</p>
                <p className="mt-2 text-sm text-gray-300 font-text">Participants</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-[#0a3631]/50 backdrop-blur-sm border border-[#19675b]/30">
                <p className="text-4xl font-bold text-[#19c8aa] font-heading">10+</p>
                <p className="mt-2 text-sm text-gray-300 font-text">Universities</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-[#0a3631]/50 backdrop-blur-sm border border-[#19675b]/30">
                <p className="text-4xl font-bold text-[#19c8aa] font-heading">TBD</p>
                <p className="mt-2 text-sm text-gray-300 font-text">Prize Pool</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RegisterCTA
