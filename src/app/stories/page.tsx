"use client";
import React, { useState, useEffect } from "react";
import { useStories } from "../providers/StoriesProvider";
import Link from "next/link";
import { IoChevronBackSharp, IoChevronUpSharp } from "react-icons/io5";

export default function StoriesPage() {
  const { stories } = useStories();
  const perPage = 5;
  const pageCount = Math.ceil(stories.length / perPage);

  const [page, setPage] = useState(1);
  const start = (page - 1) * perPage;
  const current = stories.slice(start, start + perPage);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show if user scrolled down some amount
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // initial check in case page loads scrolled
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-[#E6F0FB] min-h-screen flex flex-col items-center pt-32 pb-16">
      <div className="w-full max-w-screen-xl px-6 lg:px-12">
        {/* back + title row */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center mb-6">
          <div className="flex-shrink-0 mb-2 md:mb-0">
            <Link
              href="/"
              aria-label="Back to Home"
              className="inline-flex items-center justify-center p-2 rounded-full text-blue-700 hover:bg-blue-100 transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <IoChevronBackSharp size={24} />
            </Link>
          </div>
          <h1 className="flex-grow text-3xl font-bold text-blue-900 text-center md:text-left ml-0 md:ml-4">
            All Stories
          </h1>
        </div>

        {/* story cards */}
        <div className="flex flex-col items-center space-y-8">
          {current.map((story) => (
            <div
              key={story.id}
              className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {story.title && (
                <p className="font-semibold text-gray-800 mb-1">
                  {story.title}
                </p>
              )}
              <p className="italic text-gray-800 mb-2">“{story.snippet}”</p>
              <p className="text-gray-700">{story.fullText}</p>
              <div className="mt-2 text-xs text-gray-500 flex gap-2">
                {story.anonymous ? (
                  <span>Submitted anonymously</span>
                ) : (
                  story.email && <span>From: {story.email}</span>
                )}
                <span>• {new Date(story.createdAt).toLocaleDateString()}</span>
                {story.pending && (
                  <span className="italic">(Pending review)</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        {pageCount > 1 && (
          <div className="mt-10 flex justify-center">
            {/* mobile: buttons row + indicator below; desktop: all in one row */}
            <div className="w-full max-w-md">
              {/* mobile layout */}
              <div className="flex flex-col items-center gap-2 sm:hidden">
                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="flex-1 min-w-[100px] px-4 py-2 bg-blue-700 text-white font-semibold rounded disabled:opacity-50 transition"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(p + 1, pageCount))}
                    disabled={page === pageCount}
                    className="flex-1 min-w-[100px] px-4 py-2 bg-blue-700 text-white font-semibold rounded disabled:opacity-50 transition"
                  >
                    Next
                  </button>
                </div>
                <div className="text-gray-800 font-medium mt-1">
                  Page {page} of {pageCount}
                </div>
              </div>

              {/* desktop layout */}
              <div className="hidden sm:flex items-center justify-center gap-6">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="min-w-[100px] px-4 py-2 bg-blue-700 text-white font-semibold rounded disabled:opacity-50 transition"
                >
                  Previous
                </button>
                <span className="text-gray-800 font-medium whitespace-nowrap">
                  Page {page} of {pageCount}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, pageCount))}
                  disabled={page === pageCount}
                  className="min-w-[100px] px-4 py-2 bg-blue-700 text-white font-semibold rounded disabled:opacity-50 transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* go back to top */}
        {showTop && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-800 rounded shadow hover:bg-gray-200 transition"
              aria-label="Back to top"
            >
              ↑ Back to top
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
