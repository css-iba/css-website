import React from "react";
import { Form, FormStatus } from "@/app/Forms/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FormItemProps {
  form: Form;
}

const statusColor: Record<FormStatus, "secondary" | "destructive" | "default"> = {
  Open: "secondary",
  Closed: "destructive",
  "Coming Soon": "default",
};

export const FormItem: React.FC<FormItemProps> = ({ form }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 px-3 md:px-4 rounded-lg colour-box-primary shadow mb-4">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-heading text-lg colour-text">{form.title}</span>
        <Badge className="font-text text-sm" variant={statusColor[form.status]}>{form.status}</Badge>
      </div>
      <span className="font-text text-[14px] md:text-[15px] text-white text-base">{form.description}</span>
    </div>
    {form.status === "Closed" || form.status === "Coming Soon" ? (
      <Button variant="default" className="mt-4 ml-0 md:ml-1 md:mt-0 font-text colour-text" disabled>
        Open Form
      </Button>
    ) : (
      <Button asChild variant="default" className="mt-4 ml-0 md:ml-1 md:mt-0 font-text colour-text">
        <Link href={form.link} target="_blank" rel="noopener noreferrer">Open Form</Link>
      </Button>
    )}
  </div>
);
