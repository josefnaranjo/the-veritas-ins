"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { useStories } from "../providers/StoriesProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoryCarousel: React.FC = () => {
  const { stories } = useStories();
  const [selected, setSelected] = useState<(typeof stories)[0] | null>(null);

  // only show approved stories
  const approved = stories.filter((s) => !s.pending);

  // pick the last 3 (or fewer)
  const toShow = approved.slice(-3);

  const settings = {
    dots: true,
    infinite: approved.length > 3,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: approved.length > 1,
    autoplaySpeed: 7000,
    arrows: false,
  };

  return (
    <section className="bg-white py-12 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Slider {...settings}>
          {toShow.map((story) => (
            <div
              key={story.id}
              className="cursor-pointer px-4"
              onClick={() => setSelected(story)}
            >
              <div className="bg-[#f9f9f9] p-6 rounded-lg shadow hover:shadow-lg transition">
                <FaQuoteLeft className="text-blue-700 text-2xl mb-2" />
                <p className="text-gray-800 italic">{story.snippet}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-lg p-6 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-blue-900 mb-4">Full Story</h3>
            <p className="text-gray-800">{selected.fullText}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 text-blue-700 hover:text-blue-900 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StoryCarousel;
