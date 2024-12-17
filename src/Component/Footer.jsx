import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Component --> */}
      <footer class="bg-black text-white py-10">
        <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Company Description --> */}
          <div>
            <h2 class="text-2xl font-bold text-orange-500 mb-4">
              KUCHORIYA Tech Soft
            </h2>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">
              Kuchoriya is an ISO 9001:2015 Certified Company with its physical
              presence in the US, India and Australia and serving its clients
              across the globe.
            </p>
            <button class="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600">
              Request a Quote
            </button>
            <div class="flex items-center mt-4">
              <span class="text-yellow-400 text-lg font-bold mr-2">5 / 5</span>
              <div class="flex text-yellow-400 space-x-1">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm mt-2">
              Rated 5/5 based on 300+ clients
            </p>
          </div>

          {/* <!-- Our Services --> */}
          <div>
            <h3 class="text-lg font-bold text-orange-500 mb-4">Our Services</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="hover:text-orange-500 cursor-pointer">
                Mobile App Development
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Web Development
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Game Development
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Blockchain Development
              </li>
              <li class="hover:text-orange-500 cursor-pointer">OutStaffing</li>
              <li class="hover:text-orange-500 cursor-pointer">
                UI/UX Design Research
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Quality Analysis
              </li>
              <li class="hover:text-orange-500 cursor-pointer">CTO Services</li>
              <li class="hover:text-orange-500 cursor-pointer">
                Referral Partner Program
              </li>
            </ul>
          </div>

          {/* <!-- Solutions --> */}
          <div>
            <h3 class="text-lg font-bold text-orange-500 mb-4">Solutions</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="hover:text-orange-500 cursor-pointer">
                E-commerce Solutions
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Real-estate Solutions
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                E-learning Solutions
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Fleet Management
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Insurance Solutions
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Healthcare Solutions
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Dating Applications
              </li>
            </ul>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h3 class="text-lg font-bold text-orange-500 mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="hover:text-orange-500 cursor-pointer">About Us</li>
              <li class="hover:text-orange-500 cursor-pointer">Portfolio</li>
              <li class="hover:text-orange-500 cursor-pointer">Blogs</li>
              <li class="hover:text-orange-500 cursor-pointer">Contact Us</li>
              <li class="hover:text-orange-500 cursor-pointer">
                We are Hiring
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Privacy Policy
              </li>
              <li class="hover:text-orange-500 cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Newsletter and Social Icons --> */}
        <div class="container mx-auto mt-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          {/* <!-- Newsletter --> */}
          <div class="mb-4 md:mb-0">
            <h4 class="font-semibold text-white mb-2">
              Sign up for the <span class="font-bold">Newsletters</span>
            </h4>
            <div class="flex">
              <input
                type="email"
                placeholder="Enter your email..."
                class="w-full md:w-auto px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button class="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600">
                ➤
              </button>
            </div>
          </div>

          {/* <!-- Social Icons --> */}
          <div class="flex space-x-4 text-xl">
            <a href="#" class="text-red-600 hover:text-white">
              📺
            </a>
            <a href="#" class="text-blue-600 hover:text-white">
              💼
            </a>
            <a href="#" class="text-blue-400 hover:text-white">
              🐦
            </a>
            <a href="#" class="text-blue-700 hover:text-white">
              💬
            </a>
          </div>
        </div>

        {/* Footer Bottom  */}
        <div class="text-center text-gray-400 text-xs py-4 mt-6 border-t border-gray-700">
          &copy; Kuchoriya Softwares All Rights Reserved 2024
        </div>
      </footer>
    </div>
  );
};

export default Footer;
