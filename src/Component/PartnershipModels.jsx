// import React from "react";

const PartnershipModels = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 lg:px-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          Partnership Models
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          We offer collaboration that is tailored to your needs. We provide
          everything you need, whether you need a single developer or a
          full-fledged project team. Our three partnership models were specially
          developed to meet the particular needs of businesses and increase
          client revenues.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Fixed Price Project
          </h3>
          <p className="text-gray-700">
            We offer skilled resources and time estimates to collaborate with
            you on your project at a fixed price.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Hosted Team Extension
          </h3>
          <p className="text-gray-700">
            We provide knowledgeable experts who can collaborate remotely with
            your team on your project, which is one method to boost its
            effectiveness.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Dedicated Team Model
          </h3>
          <p className="text-gray-700">
            We provide you with a specialized team of designers, developers,
            project managers, and quality assurance specialists who will
            collaborate for at least three months to complete your project.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Let’s Discuss
        </button>
      </div>
    </section>
  );
};

export default PartnershipModels;
