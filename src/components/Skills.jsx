const Skills = () => {
    return (
      <section
        id="skills"
        className="w-full min-h-screen bg-gray-100 dark:bg-[#1a1a1a] py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">My Skills</p>
            <h2 className="text-3xl font-bold mb-4">What Am I Capable Of?</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I can develop simple, interactive, and responsive user interfaces, which help users to interact comfortably with the web page.
              Below are the tools and skills I am proficient in:
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button className="toggle-btn active">Skills</button>
              <button className="toggle-btn">Tools</button>
            </div>
          </div>
  
          <div className="skills-box">
            <ul className="flex flex-wrap gap-6 justify-center">
              <li>
                <div className="relative group w-24 h-24 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                  <div className="absolute -top-6 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    HTML5
                  </div>
                  <img src="/assets/html5.png" alt="HTML5" className="w-12 h-12" />
                </div>
              </li>
              {/* Add more skill icons here */}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  