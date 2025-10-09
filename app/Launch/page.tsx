'use client';

import React from "react";
import { RegistrationForm } from "@/components/Home/Launch/RegistrationForm";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the shape of the form data using a Zod schema
const registrationFormSchema = z.object({
  participant1Name: z.string().min(2, {
    message: "Participant 1 name must be at least 2 characters.",
  }).max(50, {
    message: "Participant 1 name cannot be more than 50 characters.",
  }),
  participant2Name: z.string().min(2, {
    message: "Participant 2 name must be at least 2 characters.",
  }).max(50, {
    message: "Participant 2 name cannot be more than 50 characters.",
  }),
  teamLeadEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  studentYear: z.enum(['freshman', 'sophomore', 'junior', 'senior', '']).refine(value => value !== '', {
    message: "Please select a student year.",
  }),
  difficulty: z.enum(['easy', 'hard', '']).refine(value => value !== '', {
    message: "Please select a difficulty level.",
  }),
});

// Infer the TypeScript type from the schema
type RegistrationFormData = z.infer<typeof registrationFormSchema>;

const RegistrationPage: React.FC = () => {
  const methods = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      participant1Name: "",
      participant2Name: "",
      teamLeadEmail: "",
      studentYear: "",
      difficulty: "",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-12 md:p-24 colour-bg">
      <div className="w-full max-w-2xl colour-box-secondary p-6 md:p-8 rounded-xl shadow-2xl border border-[var(--colour-secondary)]">
        <h1 className="text-xl md:text-4xl font-extrabold font-heading text-center mb-4 text-gray-900">
          Competitive Programming Registration
        </h1>
        <p className="text-center font-text text-sm text-gray-600 mb-8 p-2 rounded-lg bg-yellow-50 border-l-4 border-red-500 italic">
          Note: There are two difficulty levels available: "Easy" and "Hard". Choose the easy one if you&apos;re in freshman year otherwise choose hard.
          If you think you can do the hard one, go for it!
        </p>

        {/* Wrap the form component with FormProvider */}
        <FormProvider {...methods}>
          <RegistrationForm />
        </FormProvider>
      </div>
    </main>
  );
}

export default RegistrationPage;
