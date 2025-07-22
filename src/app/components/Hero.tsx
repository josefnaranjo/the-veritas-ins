"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="bg-[#E6F0FB]">
      {/* LEFT: Main section */}
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-12 md:text-left md:py-24 sm:py-20 max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* LEFT: Hero Image (main) */}
        <div className="md:w-1/2 md:mt-4 flex justify-center md:justify-start">
          <Image
            src="/Students.jpg"
            alt="College students learning"
            width={700}
            height={500}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* RIGHT: Hero Text */}
        <div className="md:w-1/2 md:mt-2 flex flex-col justify-center items-center md:items-start">
          <h1 className="font-extrabold text-4xl mt-6 md:text-5xl md:mt-0 text-blue-900 drop-shadow-md leading-tight">
            Empowering Education
            <br />
            With Responsible AI
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-xl text-gray-700 font-semibold">
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
      {/* Subsections */}
      {/* Subsection 1: Trusted Partners */}
      <div className="bg-white py-10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Trusted by leading institutions
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "/ASU.png",
              "/Caltech.png",
              "/Carnegie Mellon.png",
              "/Christian Medical College Vellore.png",
              "/Stanford.png",
              "/UC Berkeley.png",
              "/UC Davis.png",
              "/UC Irvine.png",
              "/UC San Diego.png",
              "/UC Santa Cruz.png",
            ].map((src, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-110 hover:shadow-xl p-2 rounded-lg bg-white"
              >
                <Image
                  src={src}
                  alt={`Partner ${index}`}
                  width={120}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subsection 2: Quick Links */}
      <div className="bg-[#F9FAFB] py-10">
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
            ].map((text, index) => (
              <button
                key={index}
                className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-full 
                     hover:bg-blue-700 hover:text-white transition-colors duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subsection 3: Details */}
      <div className="bg-white py-8">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-900">100+</h3>
            <p className="text-sm text-gray-600">Courses Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">Expert</h3>
            <p className="text-sm text-gray-600">Instructors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">Flexible</h3>
            <p className="text-sm text-gray-600">Learning Paths</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
