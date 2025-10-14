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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import Confirmation from "./Confirmation";

import { insertRegistration } from "@/app/Launch/Supabase/api";

// Define options for Select inputs
const studentYearOptions = [
  { value: 'freshman', label: 'Freshman (Year 1)' },
  { value: 'sophomore', label: 'Sophomore (Year 2)' },
  { value: 'junior', label: 'Junior (Year 3)' },
  { value: 'senior', label: 'Senior (Year 4)' },
];

const difficultyOptions = [
  { value: 'easy', label: 'Easy' },
  { value: 'hard', label: 'Hard' },
];

interface RegistrationFormData {
  participant1Name: string;
  participant2Name: string;
  teamLeadEmail: string;
  studentYear: 'freshman' | 'sophomore' | 'junior' | 'senior' | '';
  difficulty: 'easy' | 'hard' | '';
}

export function RegistrationForm() {
  const form = useFormContext<RegistrationFormData>();
  const [submissionData, setSubmissionData] = useState<RegistrationFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // This function is called when the form is valid and submitted
  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);

    // Save data to local state (as requested)
    setSubmissionData(data);

    // Log data to console for verification
    console.log("✅ Form Data Saved to State:", data);

    // Simulate an API delay for the spinner effect
    const {error} = await insertRegistration(submissionData || data);
    if (error) {
      console.error("❌ Supabase Insertion Error:", error);
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

          {/* Participant 1 Name Field */}
          <FormField
            control={form.control}
            name="participant1Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Participant 1 Name</FormLabel>
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

          {/* Participant 2 Name Field */}
          <FormField
            control={form.control}
            name="participant2Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Participant 2 Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g., Zainab Irfan"
                    {...field}
                    disabled={isSubmitting}
                    className="border-gray-300 focus:border-blue-500 transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Team Lead Email Field */}
          <FormField
            control={form.control}
            name="teamLeadEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Lead Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="E.g., teamLead@gmail.com"
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

        <div className="space-y-6 p-4 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
          <h3 className="text-xl font-semibold font-heading text-gray-800 border-b pb-2 mb-4">Difficulty & Year</h3>

          {/* Grid for responsiveness on smaller screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Student Year (Select) */}
            <FormField
              control={form.control}
              name="studentYear"
              render={({ field }) => ( // `field` is passed directly now
                <FormItem>
                  <FormLabel>Student University Year</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Student Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Academic Year</SelectLabel>
                        {studentYearOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Difficulty (Select) */}
            <FormField
              control={form.control}
              name="difficulty"
              render={({ field }) => ( // `field` is passed directly now
                <FormItem>
                  <FormLabel>Choose Difficulty</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Challenge Level</SelectLabel>
                        {difficultyOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
