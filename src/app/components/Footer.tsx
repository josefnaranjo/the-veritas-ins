import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#E6F0FB] border-t border-gray-300 mt-10 flex-shrink-0"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 md:py-4 lg:px-12 lg-py-6">
        {/* Left: Copyright */}
        <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-0">
          © {new Date().getFullYear()} Veritas Institute
        </p>

        {/* Right: Socials */}
        <div className="flex space-x-4 text-xl md:text-2xl text-gray-800">
          <Link
            href="https://www.instagram.com/veritas_institute/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/the-veritas-institute/"
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
