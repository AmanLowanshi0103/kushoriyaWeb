import React, { useState } from "react";

const Technologies = () => {
  const categories = [
    "Mobile",
    "Front End",
    "Database",
    "CMS",
    "Backend",
    "Infra & DevOps",
  ];
  const [activeCategory, setActiveCategory] = useState("Front End");

  const techIcons = {
    "Front End": [
      {
        name: "Angular Js",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },
      {
        name: "React Js",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Type Script",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
      {
        name: "Bootstrap",
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      },
      {
        name: "Vue",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "HTML",
        src: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      },
    ],
    Mobile: [
      {
        name: "iOS",
        src: "https://upload.wikimedia.org/wikipedia/commons/6/67/Apple_logo_black.svg",
      },
      {
        name: "Android",
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
      },
      {
        name: "Flutter",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      },
      {
        name: "Ionic",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
      },
      {
        name: "React Native",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Xamarin",
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Xamarin-logo.png",
      },
      {
        name: "Titanium",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Appcelerator-titanium-logo.png",
      },
      {
        name: "Swift",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
      },
      {
        name: "Objective-C",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Objective-C_logo.png",
      },
      {
        name: "Kotlin",
        src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      },
    ],
    Database: [
      {
        name: "MongoDB",
        src: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
      },
      {
        name: "MySQL",
        src: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      },
      {
        name: "Firebase",
        src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
      },
      {
        name: "AWS DynamoDB",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png",
      },
      {
        name: "Realm",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Realm_logo.png",
      },
      {
        name: "Oracle",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      },
      {
        name: "PostgreSQL",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      },
      {
        name: "Redis",
        src: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
      },
    ],
    CMS: [
      {
        name: "Drupal",
        src: "https://upload.wikimedia.org/wikipedia/en/8/81/Drupal-blue.png",
      },
      {
        name: "Joomla",
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Joomla_Logo.png",
      },
      {
        name: "WordPress",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
      },
      {
        name: "Magento",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Magento_Logo.svg",
      },
      {
        name: "Shopify",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Shopify_logo_2018.svg",
      },
      {
        name: "Mendix",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mendix_logo.png",
      },
    ],
    Backend: [
      {
        name: "PHP",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      },
      {
        name: "Java",
        src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      },
      {
        name: "asp.Net",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d2/ASP.NET_logo.png",
      },
      {
        name: "Node Js",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      {
        name: "Rails",
        src: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
      },
      {
        name: "Python",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
    ],
    "Infra & DevOps": [
      {
        name: "AWS Cloud",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "Google Cloud",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      },
      {
        name: "Gradle",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Gradle_logo.png",
      },
      {
        name: "Jenkins",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
      },
      {
        name: "Appium",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/54/Appium.png",
      },
      {
        name: "Selenium",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
      },
    ],
  };

  return (
    <section className="py-10 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Technologies <span className="text-orange-500">We work with</span>
        </h2>
        <p className="text-gray-500 mt-2">
          It's crucial to collaborate with specialists who are knowledgeable
          about the newest technologies in todays quickly increasing digital
          landscape.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center mb-5 space-x-8 border-b-2">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer pb-2 ${
              activeCategory === category
                ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Technologies */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 px-5">
        {techIcons[activeCategory].map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={tech.src}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
        {techIcons[activeCategory].length === 0 && (
          <div className="col-span-6 text-center text-gray-500">
            No technologies listed for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;
