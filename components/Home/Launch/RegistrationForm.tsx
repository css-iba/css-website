'use client';

import { useFormContext, Controller } from "react-hook-form";
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


// Define the type for the form data (must match the type used in page.tsx)
interface RegistrationFormData {
  participant1Name: string;
  participant2Name: string;
  teamLeadEmail: string;
  studentYear: 'freshman' | 'sophomore' | 'junior' | 'senior' | '';
  difficulty: 'easy' | 'hard';
}

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

export function RegistrationForm() {
  const form = useFormContext<RegistrationFormData>();
  const [submissionData, setSubmissionData] = useState<RegistrationFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // This function is called when the form is valid and submitted
  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    // Simulate an API delay for the spinner effect
    // In a real app, this would be your actual `fetch` or API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Save data to local state (as requested)
    setSubmissionData(data);
    
    // Log data to console for verification
    console.log("✅ Form Data Saved to State:", data);
    
    setIsSubmitting(false);

    // Optional: Reset form fields after submission
    form.reset(data); 
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Aesthetic FieldGroup container for Team Details */}
        <div className="space-y-6 p-4 border border-gray-200 rounded-xl bg-gray-50 transition duration-150 hover:shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Team Details</h3>

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
                    placeholder="E.g., Hello there" 
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
                    placeholder="E.g., teamlead@uni.edu" 
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
        
        {/* Aesthetic FieldGroup container for Event Configuration */}
        <div className="space-y-6 p-4 border border-gray-200 rounded-xl bg-gray-50 transition duration-150 hover:shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Event Configuration</h3>

          {/* Grid for responsiveness on smaller screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Student Year (Select) */}
            <FormField
              control={form.control}
              name="studentYear"
              render={() => (
                <FormItem>
                  <FormLabel>Student University Year</FormLabel>
                  <Controller
                      name="studentYear"
                      control={form.control}
                      render={({ field: selectField }) => (
                          <Select 
                            onValueChange={selectField.onChange} 
                            value={selectField.value}
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
                      )}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Difficulty (Select) */}
            <FormField
              control={form.control}
              name="difficulty"
              render={() => (
                <FormItem>
                  <FormLabel>Choose Difficulty</FormLabel>
                  <Controller
                      name="difficulty"
                      control={form.control}
                      render={({ field: selectField }) => (
                          <Select 
                            onValueChange={selectField.onChange} 
                            value={selectField.value}
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
                      )}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Submit Button with Spinner */}
        <Button 
          type="submit" 
          className="w-full py-6 transition duration-300 bg-blue-600 hover:bg-blue-700 disabled:opacity-80 disabled:cursor-not-allowed text-lg font-bold"
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
    </Form>
  );
}
