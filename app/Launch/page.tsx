'use client';

import React from "react";
import { RegistrationForm } from "@/components/Home/Launch/RegistrationForm";
import { useForm, FormProvider } from "react-hook-form";

// Define the shape of the form data
interface RegistrationFormData {
  participant1Name: string;
  participant2Name: string;
  teamLeadEmail: string;
  studentYear: 'freshman' | 'sophomore' | 'junior' | 'senior' | '';
  difficulty: 'easy' | 'hard';
}

const RegistrationPage: React.FC = () => {
  const methods = useForm<RegistrationFormData>({
    // Set default values for controlled inputs
    defaultValues: {
      participant1Name: "",
      participant2Name: "",
      teamLeadEmail: "",
      studentYear: "", // Empty string or null is fine if no option is pre-selected
      difficulty: "easy", // Default the difficulty to 'easy'
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-12 md:p-24 colour-bg">
      <div className="w-full max-w-2xl bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-gray-900">
          🚀 Event Registration
        </h1>
        <p className="text-center text-sm text-gray-600 mb-8 p-2 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 italic">
          Note: This is a dummy note for the event. Please fill out the form
          below to register your team. All fields are currently saved in local
          state upon submission.
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
