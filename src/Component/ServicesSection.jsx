import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons

const services = [
  {
    title: "Web Development",
    description:
      "Our customized web development services help your business craft interactive and engaging web experiences for customers.",
  },
  {
    title: "Mobile App Development",
    description:
      "Custom mobile app solutions for all platforms and devices can revolutionize your business.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our skilled UI/UX designers produce cutting-edge, responsive interfaces that improve the perception of your brand and simplify user interactions.",
  },
  {
    title: "Blockchain Development",
    description:
      "Our blockchain knowledge is unmatched, from developing Smart Contracts to creating decentralized apps.",
  },
  {
    title: "Quality Analysis",
    description:
      "Customized Hybrid testing solutions that are specifically tailored to fit your needs for the best outcomes.",
  },
  {
    title: "Product Development",
    description:
      "With our agile product development process and continuous integration, we specialize in reducing time-to-market from ideation to launch.",
  },
  {
    title: "Digital Marketing",
    description:
      "We provide comprehensive digital marketing services that help businesses increase online visibility, drive traffic, and generate leads and sales.",
  },
  {
    title: "CTO Services",
    description:
      "Customized Hybrid testing solutions that are specifically tailored to fit your needs for the best outcomes.",
  },
];

const ServicesSection = () => {
  const sliderRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 350;
  };

  // Function to scroll right
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 350;
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-12 lg:px-20">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>

      {/* Slider Buttons */}
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10"
          onClick={scrollLeft}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10"
          onClick={scrollRight}
        >
          <FiChevronRight size={24} />
        </button>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="relative overflow-x-auto scrollbar-hide"
        >
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          <div className="flex space-x-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group min-w-[300px] md:min-w-[350px] lg:min-w-[400px] p-6 bg-white shadow-lg rounded-lg h-[300px] flex flex-col justify-center items-center overflow-hidden"
              >
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out flex justify-center items-center">
                  <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    View More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
