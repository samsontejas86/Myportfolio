"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1a] px-4 py-16"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl w-full px-4 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/images/about.jpg"
          alt="About"
          className="w-60 h-80 sm:w-64 sm:h-96 md:w-72 md:h-96 object-cover rounded-md transition-all duration-300
                     drop-shadow-[4px_4px_4px_rgba(0,0,0,0.6)] 
                     dark:drop-shadow-[4px_4px_4px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Divider for md and above */}
        <div className="h-[2px] w-20 md:h-64 md:w-[2px] bg-gray-400 dark:bg-gray-600" />

        {/* Text block */}
        <motion.div
          className="flex flex-col text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 mb-6 text-justify leading-relaxed">
            Hi! I’m Pandrinki Samson Tejas, a Computer Science student passionate about building smart and impactful tech solutions. I specialize in frontend development, AI integration, and AR experiences using tools like React, Python, and Unity.<br /><br />
            From creating women safety systems to AR science labs, I enjoy solving real-world problems through technology. I’ve also earned recognition in multiple hackathons and am always eager to learn, build, and collaborate on innovative projects.
          </p>

          {/* Resume button */}
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="/public/samson resume (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all dark:bg-white dark:text-black dark:hover:bg-gray-200"
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
