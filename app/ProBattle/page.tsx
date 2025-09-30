'use client';

import * as React from "react";
import Link from "next/link";

const ProBattle: React.FC = () => {
  return (
    <main className="min-h-screen items-center colour-bg px-6 pt-40">
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-6xl font-title tracking-tight text-balance colour-accent md:text-8xl">
          Coming Soon!
        </h1>
        <p className="mt-6 text-md font-text font-medium text-pretty colour-text md:text-xl/8">
          Sorry, this page is not available yet.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/"
            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-text font-semibold text-secondary-foreground shadow-xs hover:bg-secondary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProBattle;