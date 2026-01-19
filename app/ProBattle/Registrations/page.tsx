'use client';

import React from "react";
import ParticipantForm from './ParticipantForm'
import AttendeeForm from './AttendeeForm'
import Link from "next/link";
import { House, Users, User, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function ProBattle2026Page() {
  const attendeeRegistrationClosed: boolean = false; // Set to true to close attendee registration
  const participantRegistrationClosed: boolean = false; // Set to true to close participant registration

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

        {/* Important Note */}
        <div
          className="my-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3"
        >
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-500 font-heading text-[17px]">Important Note (Read this)</p>

            <p className="text-[15.5px] text-red-500/90 font-text mt-1">
              Do not forget to fill the form after completing the payment. Incomplete Submissions won&apos;t be entertained.
            </p>
          </div>
        </div>

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

          <TabsContent value="participant" className="mt-0 relative">
            <ParticipantForm />
            {participantRegistrationClosed && (
              <div className="absolute inset-0 z-50 flex items-center justify-center rounded-xl overflow-hidden">
                {/* translucent blurred backdrop that respects parent's rounded corners */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <Card className="z-60 max-w-md mx-auto bg-[var(--colour-bg)]/80 border border-white/20 rounded-xl">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold colour-text font-heading mb-2">Registrations are closed</h3>
                    <p className="text-md md:text-lg colour-text font-text">Thank you for your interest — registrations are now closed.</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="attendee" className="mt-0 relative">
            <AttendeeForm />
            {attendeeRegistrationClosed && (
              <div className="absolute inset-0 z-50 flex items-center justify-center rounded-xl overflow-hidden">
                {/* translucent blurred backdrop that respects parent's rounded corners */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <Card className="z-60 max-w-md mx-auto bg-[var(--colour-bg)]/80 border border-white/20 rounded-xl">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold colour-text font-heading mb-2">Registrations are closed</h3>
                    <p className="text-md md:text-lg colour-text font-text">Thank you for your interest — attendee registrations are now closed.</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}



