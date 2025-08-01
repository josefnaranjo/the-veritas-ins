"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname() || "";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const prevPathRef = useRef<string>(pathname);

  // close mobile menu if clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuOpen]);

  // close menu on route change
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      setMenuOpen(false);
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  // hide header on /stories and /about
  if (pathname.startsWith("/stories") || pathname.startsWith("/about")) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-[#E6F0FB] border-b border-gray-300 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:py-4 lg:px-12 lg:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/Logo.png"
                alt="THE VERITAS INSTITUTE"
                width={55}
                height={55}
                priority
              />
              <div className="flex flex-col ml-2 space-y-0.5 leading-tight text-blue-900 uppercase">
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
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-800 font-medium text-sm md:text-base">
          <ScrollLink
            to="home"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            Home
          </ScrollLink>
          <Link href="/about" className="hover:text-blue-700 transition-colors">
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-700 transition-colors"
          >
            Contact
          </Link>
          <a
            href="#"
            className="bg-blue-700 text-white px-3 py-1.5 rounded hover:bg-blue-800 transition-colors text-sm md:text-base"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="md:hidden relative p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 hover:bg-blue-100 transition"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-blue-900 rounded transform transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-blue-900 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-blue-900 rounded transform transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={(el) => {
            if (el) menuRef.current = el;
          }}
          className="md:hidden bg-[#E6F0FB] px-4 pb-4 space-y-3 text-gray-800 font-medium animate-fade-in"
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 rounded hover:bg-blue-100 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 rounded hover:bg-blue-100 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 rounded hover:bg-blue-100 transition"
          >
            Contact
          </Link>
          <a
            href="#"
            className="block py-2 mt-1 bg-blue-700 text-white text-center rounded hover:bg-blue-800 transition"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
