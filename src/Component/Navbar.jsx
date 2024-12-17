import React from "react";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center w-full fixed z-10  ">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="text-2xl font-bold tracking-wide text-orange-500">
          {/* Placeholder Logo: Replace with Image */}
          <span className="text-white">N</span>
          <span className="text-orange-500">B</span>
        </div>
        <span className="ml-2 font-semibold text-sm text-gray-400">
          KUCHORIYA
        </span>
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 text-sm">
        {[
          "Company",
          "Services",
          "Technologies",
          "Hire Developers",
          "Portfolio",
          "Blogs",
        ].map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-orange-500 transition-colors"
            >
              {item}
            </a>
            {/* Underline Animation */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all ease-out duration-400"></span>
          </li>
        ))}
      </ul>

      {/* CTA Section */}
      <div className="flex items-center space-x-4">
        {/* Call Icon */}
        <button className="bg-orange-500 hover:text-orange-600 px-1 py-1 rounded-full transition">
          {<IoCallOutline />}
        </button>

        {/* Request A Quote */}
        <a
          href="#quote"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1 rounded-full transition"
        >
          Request A Quote
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="text-orange-500 text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
