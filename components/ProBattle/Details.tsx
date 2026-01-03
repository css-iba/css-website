"use client"

import * as React from "react"
import { CalendarDays, MapPin, Clock, AlarmClock } from "lucide-react"

const eventDetails = [
  {
    icon: <CalendarDays className="w-6 h-6 text-[#19c8aa]" />,
    label: "Event Dates",
    value: "January 24 and 25, 2026"
  },
  {
    icon: <Clock className="w-6 h-6 text-[#19c8aa]" />,
    label: "Time",
    value: "9:00 AM - 7:00 PM"
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#19c8aa]" />,
    label: "Venue",
    value: "IBA Main Campus, Karachi"
  },
  {
    icon: <AlarmClock className="w-6 h-6 text-[#19c8aa]" />,
    label: "Registration Deadline",
    value: "January 22, 2026"
  },
  {
    icon: <AlarmClock className="w-6 h-6 text-[#19c8aa]" />,
    label: "Early Bird Deadline",
    value: "January 18, 2026"
  }
]

const Details: React.FC = () => {
  return (
    <div className="colour-bg">
      <div className="mx-auto max-w-[85rem] py-16 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#061a19] px-6 pt-12 pb-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:pb-0">
          {/* Background SVG Gradient */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#details-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="details-gradient">
                <stop stopColor="#19c8aa" />
                <stop offset={1} stopColor="#19675b" />
              </radialGradient>
            </defs>
          </svg>

          {/* Content */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading mb-8">
              Event Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {eventDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-[#0a3631]/50 backdrop-blur-sm border border-[#19675b]/30">
                  {detail.icon}
                  <div>
                    <p className="text-lg font-semibold text-[#19c8aa] font-heading">{detail.label}</p>
                    <p className="text-base text-gray-300 font-text mt-1">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
