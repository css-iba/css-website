import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type SubmissionSuccessDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

export default function SubmissionSuccessDialog({
  isOpen = true,
  onClose = () => {},
  title = "Registration Complete!",
  message = "Your team registration has been successfully processed. You can now close this window.",
}: SubmissionSuccessDialogProps) {
  return (
    // Use 'open' and 'onOpenChange' to control the dialog programmatically
    <AlertDialog open={isOpen} onOpenChange={(open) => {
        // Only call onClose if the dialog is being closed (open becomes false)
        if (!open) {
            onClose(); 
        }
    }}>
      <AlertDialogContent className="w-11/12 max-w-md rounded-xl">
        <AlertDialogHeader>
          {/* Custom styling for a success title */}
          <AlertDialogTitle className="text-2xl font-bold text-green-600 flex items-center">
            {/* Inline SVG for a clean check circle icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="M9 11l3 3L22 4"/>
            </svg>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 mt-2">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* Only one action button is needed for simple confirmation */}
          <AlertDialogAction 
            onClick={onClose} 
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 rounded-lg shadow-md"
          >
            Great!
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
