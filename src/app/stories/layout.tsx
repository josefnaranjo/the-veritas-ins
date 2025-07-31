"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function StoriesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#E6F0FB] pb-16">
      <div className="max-w-screen-xl mx-auto pt-8 px-6 lg:px-12">
        {/* ← this lives only in the layout */}
        <Link
          href="/"
          className="inline-block mb-6 text-blue-700 hover:underline"
        >
          ← Back to Home
        </Link>

        {children}
      </div>
    </div>
  );
}
