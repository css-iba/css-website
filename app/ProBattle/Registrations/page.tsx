'use client';

import React from "react";
import ParticipantForm from './ParticipantForm'
import AttendeeForm from './AttendeeForm'
import Link from "next/link";
import { House, Users, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProBattle2026Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-12 md:p-24 colour-bg">
      {/* Back button - top left */}
      <div className="self-start mb-4">
        <Link href="/ProBattle" className="md:-translate-y-14 inline-flex font-text font-semibold items-center px-4 py-2 colour-box-secondary text-gray-900 rounded-lg hover:scale-[1.02] transition-transform duration-200 shadow">
          <House className="w-5 h-5 mr-2" />
          Back to ProBattle
        </Link>
      </div>
      
      <div className="w-full max-w-2xl colour-box-secondary p-6 md:p-8 rounded-xl shadow-2xl border border-(--colour-secondary)">
        <h1 className="text-2xl md:text-4xl font-extrabold font-heading text-center mb-3 text-gray-900">
          ProBattle 2026 Registration
        </h1>
        
        <p className="text-center text-base md:text-lg text-gray-700 font-text mb-8">
          Choose your registration type and complete the form below.
        </p>

        {/* Shadcn Tabs */}
        <Tabs defaultValue="participant" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-12 bg-transparent border border-gray-300 rounded-lg">
            <TabsTrigger value="participant" className="text-base font-semibold flex items-center gap-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=inactive]:bg-transparent data-[state=inactive]:text-black rounded-lg transition-all">
              <Users className="w-5 h-5" />
              Participant
            </TabsTrigger>
            <TabsTrigger value="attendee" className="text-base font-semibold flex items-center gap-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=inactive]:bg-transparent data-[state=inactive]:text-black rounded-lg transition-all">
              <User className="w-5 h-5" />
              Attendee
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="participant" className="mt-0">
            <ParticipantForm />
          </TabsContent>
          
          <TabsContent value="attendee" className="mt-0">
            <AttendeeForm />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
