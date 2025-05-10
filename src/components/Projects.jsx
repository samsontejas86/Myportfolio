"use client";
import { useState } from "react";

const projectData = [
  {
    title: "EvaSafe — Women Safety App",
    img: "/images/evasafe.png",
    description: `
EvaSafe is a comprehensive women's safety application developed by my team for Smart India Hackathon 2024, where we secured first prize in the internal assessment round. The app integrates wearable technology and smart monitoring to ensure real-time protection.

Key features include:
• Real-time tracking of motion, heart rate, blood pressure, and voice patterns.
• Automatic alert system that notifies the nearest police station upon detection of suspicious activity.
• Wearable smart watch equipped with sensors, using Bluetooth Low Energy (BLE) for seamless communication with the mobile app.
• CCTV integration with AI-powered fight detection, distress detection, and gender recognition (male/female).
• Custom-trained machine learning models for activity detection and monitoring.

Resources:
• YouTube video explaining the project idea [link coming soon]
• PPT presentation detailing the solution approach [link coming soon]
`,
  },
  {
    title: "AR Science Lab — Interactive AR Learning App",
    img: "/images/AR.png",
    description: `
AR Science Lab is an interactive Augmented Reality (AR) learning platform designed to make science education immersive, engaging, and effective. Our team secured 1st place and won a ₹7,000 cash prize in the 24-hour Brainovision Hackathon with this innovation.

Key features include:
• Virtual science laboratories: Physics lab, Biology lab, Chemistry lab, and Astronomy lab — all built using 3D models.
• Interactive experiments where students can manipulate and explore 3D models to understand scientific concepts hands-on.
• Video explanations and AI-generated descriptions for each experiment to enhance conceptual clarity.
• AI-powered chatbot to answer student queries about the experiments in real-time.
• Coding competition platform where students can solve AI-generated problems, compete with friends, and place bets on challenges.
• Multi-language code evaluation based on factors like time complexity, space complexity, and algorithm efficiency.

Technology Stack:
• Unity 3D for AR development
• C# for app functionalities
• Generative AI models for content generation and chatbot assistance
`,
  },
  {
    title: "CashCurve — Expense & Financial Management App",
    img: "/images/cashcurve.jpg",
    description: `
CashCurve is an expense management and financial recommendation app developed as part of my individual project. It aims to help users track their daily expenses and make smart financial decisions with AI-driven insights.

Key features include:
• Daily expense tracking: Log your spending to understand and control your budget.
• AI-based financial recommendations: Receive personalized suggestions to optimize savings and spending.
• Smart budgeting: AI-generated weekly/monthly budgets to guide your financial planning.
• Loan tracking: Manage your borrowings and lendings with automatic reminders and interest recommendations.
• Creditworthiness assessments: AI evaluates borrower profiles to provide a risk score and loan advice.

Technology Stack:
• React for the front-end
• Node.js for back-end services
• MongoDB for the database
• Python for AI/ML-powered features
`,
  },
  {
    title: "Smart Power Outage & Voltage Monitoring System",
    img: "/images/iotproject.jpeg",
    description: `
An IoT-based system that automatically detects power outages and abnormal voltage fluctuations, sending real-time SMS and call alerts to predefined contacts and authorities.

Key features:
• Automatic SMS & voice call alerts during power outages.
• Voltage monitoring and real-time current sensing.
• Location-based alert message (without using GPS).
• LCD display of voltage/current status.
• Automatic alert cancellation and restoration message when power returns.

Technology Stack:
• NodeMCU (ESP8266), SIM800L GSM Module, ACS712 Current Sensor, LCD Display, Relay Module
`,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="w-full bg-gray-200 dark:bg-[#222] py-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-100">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        {projectData.map((proj, index) => (
          <div
            key={index}
            onClick={() => openModal(proj)}
            className="relative bg-white dark:bg-[#333] rounded-lg shadow hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group flex flex-col h-full"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 sm:h-56 md:h-40 lg:h-48 object-contain transition-transform duration-300 group-hover:scale-105 bg-white dark:bg-[#222]"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {proj.title}
              </h3>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-base md:text-lg font-medium">
                Tap to see more
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-[#333] rounded-lg shadow-lg max-w-lg w-full sm:max-w-2xl p-6 relative text-left transition-all duration-300 overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl leading-none"
            >
              &times;
            </button>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-40 sm:h-56 object-contain rounded mb-4 bg-white dark:bg-[#222]"
            />
            <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
              {selectedProject.description}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
