"use client";

import React, { useState } from "react";
import { useStories } from "../providers/StoriesProvider";

export default function StoriesPage() {
  const { stories } = useStories();
  const perPage = 5;
  const pageCount = Math.ceil(stories.length / perPage);

  const [page, setPage] = useState(1);
  const start = (page - 1) * perPage;
  const current = stories.slice(start, start + perPage);

  return (
    <div className="bg-[#E6F0FB] min-h-screen flex flex-col items-center pt-32 pb-16">
      {/* heading */}
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        All Stories
      </h1>

      {/* story cards */}
      <div className="w-full max-w-screen-xl px-6 lg:px-12 flex flex-col items-center space-y-8">
        {current.map((story) => (
          <div
            key={story.id}
            className="w-full bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <p className="italic text-gray-800 mb-2">“{story.snippet}”</p>
            <p className="text-gray-700">{story.fullText}</p>
          </div>
        ))}
      </div>

      {/* pagination */}
      {pageCount > 1 && (
        <div className="mt-10 flex items-center space-x-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-800">
            Page {page} of {pageCount}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, pageCount))}
            disabled={page === pageCount}
            className="px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
