"use client"

import * as React from "react"
import Image from "next/image"
import { Megaphone, CalendarDays, MapPin } from "lucide-react"


const workshops = [
  {
    title: "The Prompt is Dead. Long Live the Context",
    date: "January 24, 2026",
    time: "2:00 PM Onwards",
    venue: "IBA Main Campus, Karachi",
    description: "The age of prompt-only AI is over. In this practical session, you'll learn how to move beyond brittle prompts and start building production-ready AI agents through Context Engineering. Using Google's Agent Development Kit, the session explores how to architect rich information systems that allow Gemini to solve complex real-world problems with accuracy and reliability.",
    image: "/ProBattle/Ahsan.png",
    guestSpeakers: [
      "Ahsan Ayaz - Google Developer Expert, AI & Angular",
    ]
  },
  {
    title: "Cybersecurity, AI & GRC Essentials: Threats, Risk, Compliance, and Career Pathways in a Digital World",
    date: "January 24, 2026",
    time: "2:00 PM Onwards",
    venue: "IBA Main Campus, Karachi",
    description: "As AI-driven systems reshape organizations, managing cyber threats, regulatory compliance, and enterprise risk has become critical. This session explores the intersection of Cybersecurity, AI, and GRC, covering modern threat landscapes, compliance frameworks, and career pathways in risk and AI governance.",
    image: "/ProBattle/Muzammil.png",
    guestSpeakers: [
      "Muzammil Hussain - Assistan vice President, NBP",
      "Umair Sani - Sr. Manager Service Delivery / Consulting, Afiniti"
    ]
  }
];

const WorkshopNotification: React.FC = () => {
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
            <circle r={512} cx={512} cy={512} fill="url(#workshop-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="workshop-gradient">
                <stop stopColor="#19c8aa" />
                <stop offset={1} stopColor="#19675b" />
              </radialGradient>
            </defs>
          </svg>

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Megaphone className="w-7 h-7 text-[#19c8aa]" />
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#19c8aa]">Workshop Announcement</h1>
          </div>

          {/* Announcement Posters & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {workshops.map((workshop, idx) => (
              <div key={idx}>
                <div className="rounded-xl overflow-hidden border-2 border-[#19c8aa] bg-[#0a3631]/40 shadow-lg mb-4">
                  <Image src={workshop.image} alt={`Workshop ${idx + 1} Poster`} width={420} height={600} className="object-cover w-full h-auto" />
                </div>

                <h2 className="text-lg font-bold text-white font-heading mb-2">{workshop.title}</h2>

                <p className="text-gray-300 font-text mb-4">{workshop.description}</p>

                <div className="flex flex-wrap gap-4 text-gray-300 font-text mb-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-[#19c8aa]" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Megaphone className="w-5 h-5 text-[#19c8aa]" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#19c8aa]" />
                    <span>{workshop.venue}</span>
                  </div>
                </div>

                {/* Guest Speakers for this workshop */}
                <div className="mt-4">
                  <h3 className="text-[#19c8aa] font-heading font-bold mb-1">Guest Speakers</h3>
                  <ul className="list-disc list-inside text-gray-300 font-text">
                    {workshop.guestSpeakers.map((speaker, i) => (
                      <li key={i}>{speaker}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopNotification
