// import React from "react";

const steps = [
  {
    title: "Understand our Clients",
    description: "Call or Meeting NDA (Non-Disclosure)",
  },
  {
    title: "Project Estimates",
    description: "Gather Requirements & Perfect Proposal",
  },
  {
    title: "Strategic Partnership",
    description: "T&C Communicated Project Agreement",
  },
  { title: "Working Together", description: "Let's Start..." },
];

const CollaborationSection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Know How We{" "}
          <span className="text-orange-500">Collaborate with our Clients</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We are always excited to listen to new ideas from clients and as one
          of the largest mobile app and web development companies worldwide, we
          create value through client businesses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-50 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
