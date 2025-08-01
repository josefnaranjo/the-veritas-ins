// app/about/page.tsx
"use client";
import Image from "next/image";
import React from "react";
import StoryCarousel from "../components/StoryCarousel";
import Link from "next/link";
import { IoChevronBackSharp } from "react-icons/io5";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  story: string;
  why?: string;
  pending?: boolean;
}

const team: TeamMember[] = [
  {
    name: "Kai Berger",
    role: "Founder & Director",
    photo: "/team/KB.jpeg",
    story:
      "Started Veritas to ensure AI in education enhances learning without compromising integrity.",
    why: `I founded the Veritas Institute to confront the growing ethical void in academia and research as AI reshapes how knowledge is created, evaluated, and trusted.`,
  },
  {
    name: "Sue Walton-Robertson",
    role: "Strategic HR & Org Development",
    photo: "/team/SWR.jpeg",
    story:
      "Integrating AI into HR policy without sacrificing human-centered values; supporting the mission through conflict resolution and ethical policy design.",
  },
  {
    name: "Sumnima Singh",
    role: "Pending",
    photo: "/team/SS.jpeg",
    story: "Profile pending review.",
    pending: true,
  },
];

const TeamCard: React.FC<TeamMember> = ({
  name,
  role,
  photo,
  story,
  why,
  pending,
}) => (
  <div className="bg-white rounded-lg shadow p-6 flex flex-col relative">
    {pending && (
      <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded">
        Pending
      </div>
    )}
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 relative rounded-full overflow-hidden border">
          <Image
            src={photo}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            sizes="64px"
            priority
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-blue-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    {why && (
      <p className="text-sm text-gray-700 italic mb-2">
        <strong>Why:</strong> {why}
      </p>
    )}
    <p className="text-gray-700 text-sm flex-grow">{story}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="pt-32 bg-[#E6F0FB] min-h-screen pb-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* back + title */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/"
            aria-label="Back to home"
            className="inline-flex items-center justify-center p-2 rounded-full text-blue-700 hover:bg-blue-100 transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            <IoChevronBackSharp size={20} />
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">About Us</h1>
        </div>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          The Veritas Institute is driven by a team of educators, researchers,
          and communicators who believe that academic integrity must evolve in
          step with AI. Meet the people shaping the future of ethics in
          education.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {team.map((m) => (
            <TeamCard
              key={`${m.name}-${m.role}`}
              name={m.name}
              role={m.role}
              photo={m.photo}
              story={m.story}
              why={m.why}
              pending={m.pending}
            />
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Our Stories
        </h2>
        <p className="text-gray-600 mb-6">
          Firsthand accounts from researchers and educators about integrity, AI,
          and the moments that made them care.
        </p>
        <div className="mb-10">
          <StoryCarousel />
        </div>
      </div>
    </div>
  );
}
