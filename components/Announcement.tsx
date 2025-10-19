'use client'

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-[#fdf6fb] via-[#f3f7fd] to-[#e9f3fc] px-6 py-2.5 sm:px-3.5 sm:before:flex-1 shadow-md">
      {/* Decorative blurred backgrounds */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      {/* Announcement content */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm md:text-md text-gray-900 font-text">
          <strong className="font-semibold">IBA CSS Announcement</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-2 fill-gray-900">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Introducing <strong>Hello World</strong>, CSS&apos;s launch event! Happening on October 29<sup>th</sup>, 2025.
        </p>
        <Link
          href="/#launch"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Go to Forms <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setVisible(false)}
          className="p-2"
        >
          <span className="sr-only">Dismiss</span>
          <X aria-hidden="true" className="size-5 text-gray-900" />
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
