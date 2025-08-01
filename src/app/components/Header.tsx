"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname() || "";
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Hide header on /stories, but only after mount to avoid SSR/CSR mismatch.
  useEffect(() => {
    if (pathname.replace(/\/+$/, "").startsWith("/stories")) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [pathname]);

  // Outside click closes mobile menu
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  if (!visible) return null;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#E6F0FB] border-b border-gray-300 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:py-4 lg:px-12 lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="THE VERITAS INSTITUTE"
            width={55}
            height={55}
            className="mr-2"
          />
          <div className="flex flex-col space-y-0.5 leading-tight text-blue-900 uppercase">
            <span className="text-sm md:text-base tracking-wider font-semibold">
              THE
            </span>
            <span className="text-sm md:text-base tracking-wider font-semibold ml-2">
              VERITAS
            </span>
            <span className="text-sm md:text-base tracking-wider font-semibold ml-4">
              INSTITUTE
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4 md:space-x-6 text-gray-800 font-medium text-sm md:text-base">
          <ScrollLink
            to="home"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            Contact
          </ScrollLink>
          <a
            href="#"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors text-sm md:text-base"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded focus-visible:outline-2 focus-visible:outline-blue-500"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <IoMdClose size={26} className="text-blue-900" />
          ) : (
            <IoMdMenu size={26} className="text-blue-900" />
          )}
        </button>
      </div>

      {/* Mobile menu with transition */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#E6F0FB] px-4 pb-4 space-y-3 text-gray-800 font-medium overflow-hidden transition-all duration-200 ease-out"
        >
          <ScrollLink
            to="home"
            smooth
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer hover:text-blue-700 transition-colors py-2"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer hover:text-blue-700 transition-colors py-2"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer hover:text-blue-700 transition-colors py-2"
          >
            Contact
          </ScrollLink>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors mt-2 text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
