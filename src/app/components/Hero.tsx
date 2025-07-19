import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#E6F0FB] py-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Students.jpg"
            alt="College students learning"
            width={700}
            height={500}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-900 leading-tight drop-shadow-md">
            Empowering Education
            <br />
            with Responsible AI
          </h1>
          <p className="text-lg text-gray-700 font-semibold mt-4">
            Learn. Grow. Innovate.
          </p>
          <div className="mt-6">
            <Link
              href="#"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors shadow-md"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
