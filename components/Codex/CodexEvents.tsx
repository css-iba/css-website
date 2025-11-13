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
    link_icon: React.ReactNode;
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
      <div className="space-y-4">
        {events.map((event, idx) => (
          <Card
            key={`${event.name}-${idx}`}
            className="p-6 rounded-xl shadow-md max-w-5xl mx-auto overflow-hidden border-none hover:-translate-y-1 transition-transform duration-300"
            style={{
              backgroundImage: 'linear-gradient(90deg, #f7f6ff 0%, #e6e5ff 50%, var(--colour-box-primary) 100%)',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="min-w-0">
                <h3
                  className="text-lg md:text-2xl font-heading font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, var(--color-primary), #ff7e5f)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  {event.name}
                </h3>

                <Separator className="my-2 bg-gray-300" />
                
                <div className="mt-3 text-md leading-6 font-text">
                  {event.detail}
                </div>
              </div>

              <div className="flex-shrink-0 self-start sm:self-auto sm:ml-6">
                {event.link ? (
                  <Button asChild variant="outline" className="font-text font-semibold w-fit px-4 py-2">
                    <Link href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm colour-primary hover:underline">
                      {event.link_text} {event.link_icon}
                    </Link>
                  </Button>
                ) : (
                  <span className="text-sm text-gray-500"></span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    )}
  </section>
)

export default CodexEvents;
