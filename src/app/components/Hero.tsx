"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StoryCarousel from "./StoryCarousel";
import StoryFormModal from "./StoryFormModal";
import { useStories } from "../providers/StoriesProvider";

const Hero: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const { addStory } = useStories();

  const handleStorySubmit = (fullText: string) => {
    addStory(fullText);
    setShowForm(false);
  };

  return (
    <section id="home" className="bg-[#E6F0FB]">
      {/* ─── Main Hero ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col text-center items-center justify-center my-10 pt-28 pb-16 md:flex-row md:space-x-12 md:text-left max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/Students.jpg"
            alt="College students learning"
            width={700}
            height={500}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h1 className="font-extrabold text-4xl md:text-5xl text-blue-900 drop-shadow-md leading-tight">
            Empowering Education
            <br />
            With Responsible AI
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-semibold mt-4 mb-6">
            Learn. Grow. Innovate.
          </p>
          <Link
            href="#"
            className="text-white font-semibold px-6 py-3 bg-blue-700 rounded shadow hover:bg-blue-800 transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>

      {/* ─── Tagline & Mission ─────────────────────────────────────────────── */}
      <div id="about" className="bg-white py-12">
        <div className="max-w-screen-md mx-auto px-6 text-center space-y-4">
          {/* Tagline */}
          <p className="text-sm uppercase text-gray-500 tracking-wider">
            The Veritas Institute is a nonprofit initiative dedicated to
            restoring and safeguarding academic honesty.
          </p>

          <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>

          <p className="text-lg text-gray-700">
            We support educators, institutions, and students by developing
            integrity-first guidelines, facilitating AI-awareness trainings, and
            advocating for policy reform that protects the value of independent
            thought.
          </p>

          <p className="text-lg text-gray-700">
            Founded in 2025, the Veritas Institute promotes responsible AI use
            while preserving the foundational values of academia: originality,
            evidence, and truth.
          </p>
        </div>
      </div>

      {/* ─── Stories Carousel ──────────────────────────────────────────────── */}
      <div className="bg-white py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Real Stories from the Research Community
          </h2>
          <StoryCarousel />
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded shadow hover:bg-yellow-600 transition-colors"
            >
              Tell Your Story
            </button>
            <Link
              href="/stories"
              className="text-blue-700 border border-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-700 hover:text-white transition-colors"
            >
              See All Stories
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Quick Links ───────────────────────────────────────────────────── */}
      <div className="bg-white py-10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            What brings you here today?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Start my career",
              "Grow my skills",
              "Explore AI",
              "Get certified",
            ].map((text, i) => (
              <button
                key={i}
                className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Newsletter ────────────────────────────────────────────────────── */}
      <div className="bg-white py-16">
        <div className="max-w-screen-md mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-700 mb-6">
            Join our newsletter to get the latest courses, insights, and
            updates—straight to your inbox.
          </p>
          <form className="flex flex-col text-gray-500 sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md border border-gray-300 w-full sm:w-auto flex-grow"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ─── Story Form Modal ─────────────────────────────────────────────── */}
      <StoryFormModal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleStorySubmit}
      />
    </section>
  );
};

export default Hero;
