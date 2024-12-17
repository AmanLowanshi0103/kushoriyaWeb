// File: HeroSection.jsx

import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black bg-cover bg-center opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Innovative Software Solutions
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          For A Changing World
        </h2>
        <p className="text-lg md:text-xl mb-8">
          We design software solutions that accelerate progress and adapt to our
          world's ever-changing landscape.
        </p>
        <a
          href="#"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
        >
          Free Consulting
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
