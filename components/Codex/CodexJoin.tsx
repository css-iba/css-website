import * as React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const whatsappLink = "https://chat.whatsapp.com/LM8BwRVyqha33PXq1JJfmU?mode=ac_t";

const CodexJoin: React.FC = () => (
  <section className="flex flex-col items-center my-30 py-10 px-4 md:px-12 gap-4">
    <h2 className="font-heading text-2xl md:text-3xl colour-text mb-6 text-center tracking-tight">Ready to Join the Community?</h2>
    <Button
      asChild
      variant="default"
      className="flex items-center gap-2 font-text text-lg px-7 py-4 rounded-xl shadow-xl font-text colour-text hover:scale-[1.04] transition-transform duration-200"
    >
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-6 h-6 mr-2" />
        <span className="font-text">Join WhatsApp Community</span>
      </Link>
    </Button>

    <div className="flex items-center justify-center">
        <div className="flex-grow h-px bg-white" />
        <span className="px-4 font-text text-md md:text-lg colour-text">
          Or
        </span>
        <div className="flex-grow h-px bg-white" />
    </div>

    <div className="flex flex-col items-center">
      <Image src="/Codex/WhatsApp.png" alt="WhatsApp" width={250} height={250} className="object-contain pb-2" />
      <span className="font-text text-md md:text-lg colour-text">Scan QR code</span>
    </div>

  </section>
);

export default CodexJoin;
