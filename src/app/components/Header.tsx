"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#E6F0FB] border-b border-gray-300 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-12 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="THE VERITAS INSTITUTE"
            width={75}
            height={75}
            className="mr-2"
          />

          <div className="flex flex-col space-y-1.5 leading-tight text-blue-900 uppercase">
            <span className="text-lg tracking-wider font-semibold ml-0">
              THE
            </span>
            <span className="text-lg tracking-wider font-semibold ml-2">
              VERITAS
            </span>
            <span className="text-lg tracking-wider font-semibold ml-4">
              INSTITUTE
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-800 font-semibold">
          <ScrollLink
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            Contact
          </ScrollLink>
          <a
            href="#"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E6F0FB] px-6 pb-4 space-y-4 text-gray-800 font-semibold">
          <ScrollLink
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer hover:text-blue-700 transition-colors"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer hover:text-blue-700 transition-colors"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer hover:text-blue-700 transition-colors"
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </header>
  );
};

export default Header;
