'use client';

import * as React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiInfoAlt } from "react-icons/tfi";
import { GrBug } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Codex", href: "/Codex" },
  { title: "ProBattle", href: "/ProBattle" },
  { title: "Forms", href: "/Forms" },
];

const contacts = [
  {
    name: "Zainab",
    role: "CEO",
    email: "z.ansari.29091@khi.iba.edu.pk"
  },
  {
    name: "Abdullah",
    role: "COO",
    email: "Abdullah.Tariq.29123@khi.iba.edu.pk"
  },
  {
    name: "Bisma",
    role: "CFO",
    email: "b.kasbati.28671@khi.iba.edu.pk"
  }
];

const socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/share/16zYAU4tV3/", label: "Facebook" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/iba-computer-science-society/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/css.iba", label: "Instagram" },
];

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  // Close on outside click (for mobile UX)
  React.useEffect(() => {
    if (!open) return;

    const handler = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (!e.target.closest("[data-hovercard-root]")) setOpen(false);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <footer className="font-text w-full border-t border-[#110119] bg-gradient-to-l from-[#2B3942] via-[#1c252b] to-[#0c0f11]">
      <div className="max-w-6xl md:mx-auto px-4 py-16 flex flex-col md:flex-row items-start md:items-stretch justify-between ml-3 gap-8 md:gap-20">

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-3xl mb-6 colour-accent relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-20">Quick Links</h3>
          <div className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Link key={link.title} href={link.href} className="colour-text hover:colour-primary transition-colors text-[19px] md:text-[17px] text-base">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-3xl mb-6 colour-accent relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-20">Contact Us</h3>
          <div className="flex flex-col gap-2 w-full">
            {contacts.map(({ name, role, email }) => (
              <span
                key={email}
                className="colour-text text-base text-[19px] md:text-[17px] flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2 w-full"
              >
                <span>{name}, {role},</span>
                <Link
                  href={`mailto:${email}`}
                  className="text-sm colour-secondary text-[19px] md:text-[17px] hover:underline hover:text-pink-500 transition-colors md:ml-2"
                >
                  {email}
                </Link>
              </span>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-heading text-3xl mb-6 colour-accent relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-20">Socials</h3>
          <div className="flex flex-row gap-6 mb-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group text-[17px]">
                <Icon size={28} className="text-[var(--colour-text)] hover:text-[var(--colour-accent)]" />
              </Link>
            ))}
          </div>
          <span className="colour-secondary text-[19px] md:text-[17px]">Institute Of Business Administration, Karachi</span>
        </div>

      </div>

      <Separator className="bg-[#232323]" />

      <div className="w-full flex items-center justify-between">
        <p className="colour-secondary text-[15px] ml-2 text-center py-4">&copy; 2025 IBA Computer Science Society. All rights reserved.</p>
        <div className="pr-4"data-hovercard-root>
          <HoverCard open={open} onOpenChange={setOpen}>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
                aria-label="Info"
                onClick={() => setOpen((v) => !v)}
              >
                <TfiInfoAlt className="w-6 h-6 text-[var(--colour-secondary)]" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72 colour-box-secondary md:mr-3 mr-2">
              <div className="flex items-start gap-4">
                <Avatar className="bg-muted">
                  <AvatarFallback>
                    <GrBug className="w-5 h-5 text-[var(--colour-primary)]" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Found an error or mistake?</h4>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Help us improve! If you spot an issue, please{" "}
                    <Link
                      href="https://github.com/css-iba/css-website/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      report it on GitHub
                    </Link>{" "}
                    or reach out to the team.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </footer>
  );
}
