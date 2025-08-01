"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { useStories } from "../providers/StoriesProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoryCarousel: React.FC = () => {
  const { stories } = useStories();
  const [selected, setSelected] = useState<(typeof stories)[number] | null>(
    null
  );

  // only show approved stories
  const approved = stories.filter((s) => !s.pending);
  const toShow = approved.slice(-3); // last three for freshness

  const settings = {
    dots: true,
    infinite: approved.length > 3,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: approved.length > 1,
    autoplaySpeed: 7000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="relative">
        {toShow.length === 0 && (
          <div className="py-10">
            <p className="text-gray-600">No stories published yet.</p>
          </div>
        )}
        {toShow.length > 0 && (
          <Slider {...settings}>
            {toShow.map((story) => (
              <div
                key={story.id}
                className="px-4"
                onClick={() => setSelected(story)}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="View full story"
                  className="bg-[#f9f9f9] p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                >
                  <FaQuoteLeft className="text-blue-700 text-2xl mb-2" />
                  <p className="text-gray-800 italic">{story.snippet}</p>
                  {story.title && (
                    <div className="mt-2 text-sm font-medium text-gray-600">
                      {story.title}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-xl p-6 rounded-lg shadow-xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-blue-900">Full Story</h3>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            {selected.title && (
              <p className="text-md font-semibold mb-2">{selected.title}</p>
            )}
            <p className="text-gray-800 italic mb-4">“{selected.snippet}”</p>
            <p className="text-gray-700">{selected.fullText}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoryCarousel;
