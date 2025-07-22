import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact" // 👈 this is important for react-scroll
      className="bg-[#E6F0FB] border-t border-gray-300 mt-16"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 lg:px-12 py-6">
        {/* Left: Copyright */}
        <p className="text-sm text-gray-700 mb-4 md:mb-0">
          © {new Date().getFullYear()} Veritas Institute
        </p>

        {/* Right: Socials */}
        <div className="flex space-x-6 text-2xl text-gray-800">
          <Link
            href="https://www.instagram.com/veritas_institute/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
