const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1a] px-4 z-50"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full px-16">
        <img
          src="/images/about.jpg"
          alt="About"
          className="w-72 h-96 object-cover rounded-md transition-all duration-300
                     drop-shadow-[4px_4px_4px_rgba(0,0,0,0.6)] 
                     dark:drop-shadow-[4px_4px_4px_rgba(255,255,255,0.6)] 
                     mt-4"
        />
        <div className="h-64 w-[2px] bg-gray-400 dark:bg-gray-600 hidden md:block" />

        {/* Text block with padding-left */}
        <div className="text-left max-w-xl pl-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 text-justify">
            Hi! I’m Pandrinki Samson Tejas, a Computer Science student passionate about building smart and impactful tech solutions. I specialize in frontend development, AI integration, and AR experiences using tools like React, Python, and Unity.<br /><br />
            From creating women safety systems to AR science labs, I enjoy solving real-world problems through technology. I’ve also earned recognition in multiple hackathons and am always eager to learn, build, and collaborate on innovative projects.
          </p>

          {/* Resume button */}
          <a
            href="/public/samson resume (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
