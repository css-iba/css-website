"use client"

import * as React from "react"
import Image from "next/image"

const itineraryImages = [
  {
    title: "Day 1",
    image: "/ProBattle/Day1.png", // Replace with your actual image path
    alt: "Itinerary for Day 1"
  },
  {
    title: "Day 2",
    image: "/ProBattle/Day2.png", // Replace with your actual image path
    alt: "Itinerary for Day 2"
  }
]

const ItineraryShowcase: React.FC = () => {
  return (
    <div className="colour-bg min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="relative isolate overflow-hidden bg-[#061a19] px-6 pt-10 pb-16 shadow-2xl sm:rounded-3xl sm:px-12">
          {/* SVG Gradient */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[48rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#itinerary-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="itinerary-gradient">
                <stop stopColor="#19c8aa" />
                <stop offset={1} stopColor="#19675b" />
              </radialGradient>
            </defs>
          </svg>

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#19c8aa]">Event Itinerary</h1>
          </div>

          {/* Itinerary Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {itineraryImages.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-white font-heading mb-4">{item.title}</h2>
                <div className="rounded-xl overflow-hidden border-2 border-[#19c8aa] bg-[#0a3631]/40 shadow-lg">
                  <Image src={item.image} alt={item.alt} width={420} height={600} className="object-contain w-full h-auto max-h-[600px] bg-black/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItineraryShowcase
