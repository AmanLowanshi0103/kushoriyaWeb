// import React from "react";

const IndustryVerticals = () => {
  const industries = [
    { icon: "🍔", name: "Food & Restaurants" },
    { icon: "🎮", name: "Game Developments" },
    { icon: "🏀", name: "Sports Recreation" },
    { icon: "🛒", name: "Shopping E-commerce" },
    { icon: "🏋️", name: "Health Fitness" },
    { icon: "🎓", name: "Education E-learning" },
    { icon: "🎬", name: "Media Entertainment" },
    { icon: "🏢", name: "Real-Estate" },
    { icon: "🚕", name: "Tour & Travels" },
    { icon: "⚙️", name: "Utility" },
    { icon: "💰", name: "Finance & Banking" },
    { icon: "🔌", name: "On-Demand" },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 lg:px-24">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Best IT Consulting Company Across Different <br /> Industry Verticals
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          We have successfully connected countless businesses with great
          software developers for bespoke development thanks to our track record
          of delivering high-quality projects under expert supervision and
          within budget. Partner with us - the premier provider of custom
          software development - to hire programmers for numerous industry
          verticals. We have a vast reach and competence across multiple
          sectors.
        </p>
      </div>

      {/* Grid for Industry Items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <div className="text-5xl mb-4">{industry.icon}</div>
            <h3 className="text-lg font-semibold">{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryVerticals;
