import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 gap-12">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
        <div className="rounded-xl shadow-lg overflow-hidden relative">
          <img
            src="" // Replace with actual image
            alt="Kuchoriya Softwares"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">
          Kuchoriya Softwares
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Since our founding in <strong>2009</strong>, we have grown to become a
          recognized global brand by serving more than <strong>1000 clients</strong>, 
          and we are proud to offer full-range, end-to-end development and designing 
          solutions.
        </p>
        <a
          href="#read-more"
          className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm hover:bg-orange-600 transition-all duration-300"
        >
          Read More..
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
