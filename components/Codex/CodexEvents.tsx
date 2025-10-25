import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Events {
    name: string;
    detail: React.ReactNode;
    link: string;
    link_text: string;
}

interface CodexEventsProps {
    events: Events[];
}


const CodexEvents: React.FC<CodexEventsProps> = ({ events }) => (
  <section className="py-8 pb-40 px-4 md:px-12 min-h-screen">
    <h2 className="font-heading text-3xl md:text-5xl colour-text mt-20 mb-10 text-center">Events & Sessions</h2>
    {events.length === 0 ? (
      <div className="flex h-[200px] w-full items-center justify-center transition-colors duration-300">
        <div className="flex h-[200px] w-[350px] items-center justify-center rounded-md border border-dashed text-sm hover:border-gray-400">
          <p className="font-text text-2xl colour-text">No events for now</p>
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {events.map((event) => (
          <Card key={event.name} className="flex flex-col p-6 rounded-xl shadow-md colour-box-secondary max-w-xl">
            <h3 className="font-heading font-bold text-xl text-black">{event.name}</h3>

            <div className="w-full">
              <Separator className="bg-gray-400" />
            </div>
            <div className="font-text text-md text-black list-disc list-inside space-y-1">{event.detail}</div>
            {event.link && (
              <Button asChild variant="outline" className="mt-4 font-text font-semibold w-fit px-4 py-2">
                <Link href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-md colour-primary hover:underline">
                  {event.link_text} <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </Card>
        ))}
      </div>
    )}
  </section>
);

export default CodexEvents;
