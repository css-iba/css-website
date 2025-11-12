
import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/app/constants";

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-4">
        <h2 className="font-heading colour-text text-4xl md:text-6xl mb-4">Frequently asked questions</h2>
        <p className="mb-8 font-text text-md md:text-xl colour-text">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our team at{" "}
          <Link href="mailto:ComputerSciencesSociety@khi.iba.edu.pk" className="text-amber-500 font-medium hover:underline">ComputerSciencesSociety@khi.iba.edu.pk</Link>
        </p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full flex items-center justify-between pr-4 gap-1 py-4 focus:outline-none cursor-pointer"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="font-heading text-lg md:text-2xl colour-accent text-left">{faq.question}</span>
                <span className="transition-all duration-200">
                  {openIdx === idx ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-amber-500" />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 pr-4 ${openIdx === idx ? 'max-h-50 py-2' : 'max-h-0 py-0'}`} aria-hidden={openIdx !== idx}>
                <p className="font-text text-[15px] text-justify md:text-[16.5px] colour-text leading-relaxed">{faq.answer}</p>
              </div>
              <Separator className={`my-1 ${idx < faqs.length - 1 ? '' : 'hidden'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
