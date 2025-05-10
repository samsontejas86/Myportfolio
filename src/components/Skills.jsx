import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gray-100 dark:bg-[#1a1a1a] py-16 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* Left side: Description */}
          <div className="w-full lg:w-1/2 text-left">

            {/* MY SKILLS - medium left heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              MY SKILLS
            </h2>

            {/* What am I capable of - big left heading */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Am I Capable Of?
            </h3>

            {/* Center aligned paragraph */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify text-sm sm:text-base lg:text-lg">
              I specialize in frontend development and creating interactive, user-friendly web and mobile applications. My expertise includes HTML5, CSS3, JavaScript, React, Angular, Figma, and cross-platform mobile development with Flutter. I have hands-on experience with modern web frameworks and design tools. Whether it's building scalable web apps, designing prototypes, or crafting cross-platform mobile apps — I'm passionate about delivering interactive solutions.
            </p>

            {/* Toggle Buttons */}
            <div className="mt-6 flex gap-4 justify-center sm:justify-start">
              <button
                onClick={() => handleTabClick("skills")}
                className={`px-4 py-2 rounded transition ${
                  activeTab === "skills"
                    ? "font-bold text-black dark:text-white border-2 border-black dark:border-white"
                    : "text-gray-600 dark:text-gray-400 border-2 border-transparent"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => handleTabClick("tools")}
                className={`px-4 py-2 rounded transition ${
                  activeTab === "tools"
                    ? "font-bold text-black dark:text-white border-2 border-black dark:border-white"
                    : "text-gray-600 dark:text-gray-400 border-2 border-transparent"
                }`}
              >
                Tools
              </button>
            </div>
          </div>

          {/* Right side: Icons */}
          <div className="w-full lg:w-1/2">
            <ul className="flex flex-wrap gap-6 justify-center">
              {activeTab === "skills" && (
                <>
                  {[ 
                    { name: "HTML5", src: "/images/html.png" },
                    { name: "CSS3", src: "/images/css3.png" },
                    { name: "JavaScript", src: "/images/javascript.jpg" },
                    { name: "React", src: "/images/react.png" },
                    { name: "Angular", src: "/images/angular.png" },
                    { name: "Figma", src: "/images/figma.png" },
                    { name: "Flutter", src: "/images/flutter.png" },
                  ].map((item) => (
                    <li key={item.name} className="flex flex-col items-center w-24 sm:w-32 lg:w-40">
                      <div className="relative group w-full h-24 sm:h-32 lg:h-40 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <img src={item.src} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                        <div className="absolute -top-6 text-sm sm:text-base bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                          {item.name}
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}

              {activeTab === "tools" && (
                <>
                  {[ 
                    { name: "Tool1", src: "/assets/tool1.png" },
                    // Add more tool icons as needed here...
                  ].map((item) => (
                    <li key={item.name} className="flex flex-col items-center w-24 sm:w-32 lg:w-40">
                      <div className="relative group w-full h-24 sm:h-32 lg:h-40 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <img src={item.src} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                        <div className="absolute -top-6 text-sm sm:text-base bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                          {item.name}
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
