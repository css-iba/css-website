"use client";

import React, { useState } from "react";
import { Mail, Phone, Users } from "lucide-react";
import { contacts } from '@/app/ProBattle/constants';

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";

// Variants for text blocks (heading, paragraphs, socials)
const textVariants = {
  hidden: (isMobile: boolean) => ({
    opacity: 0,
    y: isMobile ? 0 : -40,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

// Variants for cards
const cardsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

const Contact: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
      
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyToClipboard = async (text: string, index: number) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      window.setTimeout(() => setCopiedIndex(null), 2000);
    } catch (e) {
      // fallback for older browsers
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand('copy');
        setCopiedIndex(index);
        window.setTimeout(() => setCopiedIndex(null), 2000);
      } catch {}
      document.body.removeChild(el);
    }
  };

  const handleEmail = (email?: string) => {
    if (!email) return;
    // open default mail client
    window.location.href = `mailto:${email}`;
  };

  const initials = (name = '') =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('');

  return (
    <section className="colour-bg py-14 sm:py-12 lg:py-30">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#061a19] px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:px-24">
          
          {/* Background SVG Gradient */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#contact-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="contact-gradient">
                <stop stopColor="#19c8aa" />
                <stop offset={1} stopColor="#19675b" />
              </radialGradient>
            </defs>
          </svg>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            custom={isMobile}
            variants={textVariants}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-[#19c8aa]" />
              <span className="text-[#19c8aa] font-semibold font-heading tracking-wide uppercase text-sm">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading">
              Contact Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-300 font-text max-w-2xl mx-auto">
              Have questions about ProBattle? Our team is here to help you.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {contacts.map((c, idx) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardsVariants}
                key={idx}
                className="rounded-2xl bg-[#0f4a42] border border-[#19c8aa]/40 overflow-hidden shadow-lg"
              >
                <div className="flex items-start justify-between px-5 pt-5">
                  <div className="pr-4">
                    <h3 className="text-lg font-semibold text-white font-heading flex items-center gap-2">
                      {c.name}
                    </h3>
                    <Badge className="mt-1 text-sm bg-[#19675b] text-[#19c8aa] border-none">{c.title}</Badge>
                  </div>

                  <Avatar className="w-12 h-12 border-2 border-[#19675b]">
                    {c.avatarUrl ? (
                      <AvatarImage src={c.avatarUrl} alt={c.name} />
                    ) : (
                      <AvatarFallback className="bg-[#19675b] text-[#19c8aa] font-semibold">
                        {initials(c.name)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>

                <Separator className="mt-4 bg-[#19675b]/30" />

                <div className="flex">
                  <div className="group flex-1 p-2 hover:bg-[#19675b]/20 transition-colors rounded-bl-2xl">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full flex items-center justify-center gap-3 px-5 py-4 text-sm font-medium text-gray-300 hover:text-[#19c8aa] hover:bg-transparent transition-colors"
                      onClick={() => handleEmail(c.email)}
                      aria-label={`Email ${c.name}`}
                    >
                      <Mail className="w-5 h-5 text-[#19c8aa]" />
                      Email
                    </Button>
                  </div>

                  <div className="flex items-center">
                    <Separator orientation="vertical" className="w-px h-8 bg-[#19675b]/30" />
                  </div>

                  <div className="group flex-1 p-2 hover:bg-[#19675b]/20 transition-colors rounded-br-2xl">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full flex items-center justify-center gap-3 px-5 py-4 text-sm font-medium text-gray-300 hover:text-[#19c8aa] hover:bg-transparent transition-colors"
                      onClick={() => copyToClipboard(c.phone ?? '', idx)}
                      aria-label={`Copy phone number for ${c.name}`}
                      disabled={!c.phone}
                    >
                      <Phone className="w-5 h-5 text-[#19c8aa]" />
                      {copiedIndex === idx ? 'Copied!' : 'Contact'}
                    </Button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

