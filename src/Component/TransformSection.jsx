import React from "react";

const TransformSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Transforming Businesses With <br />
          <span className="text-orange-500">Top-Ranked Web and Mobile App Development Company</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-6">
          We've worked with hundreds of startups, small-medium enterprises, and top brands, empowering them with our digital intelligence and expertise. We deliver the right business outcomes 5X faster than our competitors.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default TransformSection;
