"use client";

import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
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
    <section className="colour-bg py-14 sm:py-12 lg:py-30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          custom={isMobile}
          variants={textVariants}
          className="text-4xl md:text-6xl font-extrabold colour-text font-heading mb-20 text-center"
        >
          Contact Our Team
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardsVariants}
              key={idx}
              className="bg-slate-50 rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="flex items-start justify-between px-5 pt-5">
                <div className="pr-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {c.name}
                  </h3>
                  <Badge className="mt-1 text-sm bg-[var(--colour-accent)]" variant="secondary">{c.title}</Badge>
                </div>

                <Avatar className="w-12 h-12">
                  {c.avatarUrl ? (
                    <AvatarImage src={c.avatarUrl} alt={c.name} />
                  ) : (
                    <AvatarFallback className="bg-gray-200 text-gray-600">
                      {initials(c.name)}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>

              <Separator className="mt-4" />

              <div className="-mx-4 flex">
                <div className="group flex-1 p-2 hover:bg-gray-100 transition-colors rounded-l-lg">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full flex items-center justify-center gap-4 px-5 py-4 text-sm font-medium text-gray-700 group-hover:bg-transparent"
                    onClick={() => handleEmail(c.email)}
                    aria-label={`Email ${c.name}`}
                  >
                    <Mail className="w-5 h-5 text-gray-500" />
                    Email
                  </Button>
                </div>

                <div className="flex items-center">
                  <Separator orientation="vertical" className="w-px h-8 bg-gray-200" />
                </div>


                <div className="group flex-1 p-2 hover:bg-gray-100 transition-colors rounded-r-lg">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full flex items-center justify-center gap-4 px-5 py-4 text-sm font-medium text-gray-700 group-hover:bg-transparent"
                    onClick={() => copyToClipboard(c.phone ?? '', idx)}
                    aria-label={`Copy phone number for ${c.name}`}
                    disabled={!c.phone}
                  >
                    <Phone className="w-5 h-5 text-gray-500" />
                    {copiedIndex === idx ? 'Copied!' : 'Contact'}
                  </Button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

