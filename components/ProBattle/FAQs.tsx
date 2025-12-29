
import * as React from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How to Register for ProBattle?",
    answer: "To register for ProBattle, visit our registration page, fill out the required information, and submit the form."
  },
  {
    question: "What are the event dates?",
    answer: "ProBattle will take place from January 24th to January 25th, 2026."
  },
  {
    question: "Can I participate in more than one module?",
    answer: "Yes, participants are allowed to register for multiple modules based on their interests and eligibility. Please check the module tier levels before registering."
  },
  {
    question: "Do we have to bring our own devices?",
    answer: "These details vary from module to module. Please refer to the specific module guides in the links provided in the modules section."
  }
]

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-4">
        {/* Dark teal container with radial gradient */}
        <div className="relative bg-[#061a19] rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Radial gradient background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="faqRadialGradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#19675b" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#061a19" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#faqRadialGradient)" />
          </svg>

          {/* Content */}
          <div className="relative z-10">
            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#19c8aa]/20 rounded-lg">
                <HelpCircle className="w-6 h-6 text-[#19c8aa]" />
              </div>
              <span className="text-[#19c8aa] font-medium text-sm uppercase tracking-wider">FAQ</span>
            </div>

            <h2 className="font-heading text-white text-3xl md:text-5xl mb-10">Frequently Asked Questions</h2>

            {/* FAQ items */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0a3631]/50 border border-[#19675b]/30 rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 focus:outline-none cursor-pointer hover:bg-[#19675b]/10 transition-colors"
                    onClick={() => handleToggle(idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <span className="font-heading text-base md:text-lg text-[#19c8aa] text-left">{faq.question}</span>
                    <span className="transition-all duration-200 flex-shrink-0 ml-4">
                      {openIdx === idx ? (
                        <Minus className="w-5 h-5 text-[#19c8aa]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#19c8aa]" />
                      )}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96' : 'max-h-0'}`} 
                    aria-hidden={openIdx !== idx}
                  >
                    <div className="px-5 pb-4 border-t border-[#19675b]/30">
                      <p className="font-text text-[15px] md:text-base text-gray-300 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
