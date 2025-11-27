'use client';

import { useFormContext } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Confirmation from "../../Home/Launch/Confirmation";

import { insertRegistration } from "@/app/CodeClash2/api";

interface RegistrationFormData {
    participantName: string;
    email: string;
    phoneNumber: string;
}

export function RegistrationForm() {
  const form = useFormContext<RegistrationFormData>();
  const [submissionData, setSubmissionData] = useState<RegistrationFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // This function is called when the form is valid and submitted
  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);

    // Save data to local state (for display/history) but use the fresh `data` when calling the API
    setSubmissionData(data);

    // Log data to console for verification
    console.log("✅ Form Data Saved to State:", data);

    // Call insert with the current `data` (don't rely on submissionData which updates asynchronously)
    const { error } = await insertRegistration(data);
    if (error) {
      // console.error("❌ Supabase Insertion Error:", error);
      setIsSubmitting(false);
      alert("There was an error submitting your registration. Please try again.");
      return;
    }

    setIsSubmitting(false);
    // Show confirmation dialog (toggle state so the component renders)
    setShowConfirm(true);

    // Reset the form after submission
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-text">
        
        <div className="space-y-6 p-4 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
          <h3 className="text-xl font-semibold font-heading text-gray-800 border-b pb-2 mb-4">Team Details</h3>

          {/* Participant Name Field */}
          <FormField
            control={form.control}
            name="participantName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Participant Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g., Abdullah Tariq"
                    {...field}
                    disabled={isSubmitting}
                    className="border-gray-300 focus:border-blue-500 transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="E.g., firstName.secondName.12345@khi.iba.edu.pk"
                    {...field}
                    disabled={isSubmitting}
                    className="border-gray-300 focus:border-blue-500 transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Advisory note about entrance of email format */}
          <p className="text-sm text-gray-500 italic -translate-y-2">
            Note: email must be in the format firstname.lastname.12345@khi.iba.edu.pk
          </p>

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                <Input
                    type="tel"
                    placeholder="E.g., +1234567890"
                    {...field}
                    disabled={isSubmitting}
                    className="border-gray-300 focus:border-blue-500 transition"
                />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
          />
          
        </div>

        {/* Submit Button with Spinner */}
        <Button
          type="submit"
          className="w-full py-6 transition font-heading duration-200 colour-box-primary disabled:opacity-80 disabled:cursor-not-allowed text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              {/* Assuming Spinner is a component that renders a spinning icon */}
              <Spinner className="w-5 h-5 mr-3 animate-spin" />
              Processing Registration...
            </>
          ) : (
            "Submit Registration"
          )}
        </Button>
      </form>

      {/* Display the saved state data */}
      {/* {submissionData && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            State Data (Last Submission)
          </h3>
          <pre className="whitespace-pre-wrap text-sm text-green-800 bg-green-100 p-3 rounded-lg">
            {JSON.stringify(submissionData, null, 2)}
          </pre>
        </div>
      )} */}

      {/* Confirmation dialog controlled by component state */}
      <Confirmation isOpen={showConfirm} onClose={() => setShowConfirm(false)} />
    </Form>
  );
}
