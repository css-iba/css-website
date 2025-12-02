'use client';

import React from "react";
import { RegistrationForm } from "@/components/Codex/CodeClash2/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { House } from "lucide-react";

// Define the shape of the form data using a Zod schema
const registrationFormSchema = z.object({
  participantName: z
    .string()
    .min(2, { message: "Participant name must be at least 2 characters." })
    .max(50, { message: "Participant name cannot be more than 50 characters." }),
  email: z
    .email({ message: "Please enter a valid email address." })
    .refine(
      (val) =>
        /^[a-zA-Z]+\.[a-zA-Z]+\.\d{5}@khi\.iba\.edu\.pk$/i.test(val) ||
        /^\d{2}[A-Za-z]-[A-Za-z]{2}-\d{3}@students\.duet\.edu\.pk$/i.test(val),
      {
        message:
          "Email must be in the format firstname.lastname.12345@khi.iba.edu.pk or 24F-CS-123@students.duet.edu.pk",
      }
    ),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number cannot be more than 15 digits." }),
});

// Infer the TypeScript type from the schema
type RegistrationFormData = z.infer<typeof registrationFormSchema>;

const RegistrationPage: React.FC = () => {
  const closed: boolean = false; // Set to true to close registration

  const methods = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      participantName: "",
      email: "",
      phoneNumber: "",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-12 md:p-24 colour-bg">
      {/* left top corner button with icon to go back to home page */}
      <div className="self-start mb-4">
        <Link href="/Codex/#codeclash2" className="md:-translate-y-14 inline-flex font-text font-semibold items-center px-4 py-2 colour-box-secondary text-gray-900 rounded-lg hover:scale-[1.02] transition-transform duration-200 shadow">
          <House className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
      
      <div className="w-full max-w-2xl colour-box-secondary p-6 md:p-8 rounded-xl shadow-2xl border border-[var(--colour-secondary)] relative">
        <h1 className="text-xl md:text-4xl font-extrabold font-heading text-center mb-4 text-gray-900">
          Code Clash 2.0 Registration
        </h1>
        {/* <p className="text-center font-text text-sm text-gray-600 mb-8 p-2 rounded-lg bg-yellow-50 border-l-4 border-red-500 italic">
          Note: There are two difficulty levels available: &ldquo;Easy&rdquo; and &ldquo;Hard&rdquo;. Choose the easy one if you&apos;re in freshman year otherwise choose hard.
          If you think you can do the hard one, go for it!
          <br />
          <strong>Only freshman students are allowed to choose the easy difficulty level. If others do so, will be moved to hard.</strong>
        </p> */}

        {/* Wrap the form component with FormProvider */}
        <FormProvider {...methods}>
          <RegistrationForm />
        </FormProvider>

        {closed && (
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
      </div>
    </main>
  );
}

export default RegistrationPage;
