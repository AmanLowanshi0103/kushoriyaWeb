import React from "react";

const stats = [
  {
    icon: "📊", // Replace with an image path or icon
    number: "15+",
    label: "Years Experience",
  },
  {
    icon: "👥", // Replace with an image path or icon
    number: "230+",
    label: "Talented Squads",
  },
  {
    icon: "📱", // Replace with an image path or icon
    number: "400+",
    label: "Apps Developed",
  },
  {
    icon: "📄", // Replace with an image path or icon
    number: "700+",
    label: "Projects Delivered",
  },
  {
    icon: "🌍", // Replace with an image path or icon
    number: "50+",
    label: "Countries Served",
  },
  {
    icon: "👍", // Replace with an image path or icon
    number: "300+",
    label: "Client Satisfaction",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg shadow-inner w-30 lg:w-36"
              style={{
                boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-2xl font-bold text-orange-500">{item.number}</h3>
              <p className="text-gray-600 text-sm text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
