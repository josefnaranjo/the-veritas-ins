import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">Welcome to The Veritas Institute</h1>
      <p className="mt-4 max-w-lg text-center text-gray-600">We're building tools that support ethical use of AI in education.</p>
    </main>
  );
}
