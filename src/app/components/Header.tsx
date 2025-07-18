import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#E6F0FB] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="THE VERITAS INSTITUTE"
            width={75}
            height={75}
            className="mr-2"
          />
          <div className="flex flex-col leading-tight text-blue-900 uppercase ml-2">
            <span className="text-lg tracking-wider font-semibold">THE</span>
            <span className="text-lg tracking-wider font-semibold leading-none ml-2 mt-1">
              VERITAS
            </span>
            <span className="text-lg tracking-wider font-semibold leading-none ml-4 mt-1">
              INSTITUTE
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-gray-800 font-semibold">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-700 transition-color#">
            About
          </Link>
          <Link href="/" className="hover:text-blue-700 transition-color#">
            Contact
          </Link>
          <Link
            href="#"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
