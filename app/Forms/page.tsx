
import React from "react";
import { forms } from "@/app/Forms/constants";
import { FormList } from "@/components/Forms/FormList";

const FormsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen font-title colour-bg pt-24 pb-8">
      <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-px bg-white" />
        <span className="px-4 font-heading text-3xl md:text-4xl colour-text">
          Available Forms
        </span>
        <div className="flex-grow h-px bg-white" />
      </div>
      <FormList forms={forms} />
    </div>
  );
};

export default FormsPage;
