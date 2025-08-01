"use client";

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#E6F0FB] pb-16">
      <div className="max-w-screen-xl mx-auto pt-8 px-6 lg:px-12">
        {children}
      </div>
    </div>
  );
}
