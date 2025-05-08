const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1a] px-4 z-50">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        <img
          src="/images/about.jpg"
          alt="About"
          className="w-60 h-80 object-cover rounded-md shadow-lg"
        />
        <div className="h-64 w-[2px] bg-gray-400 dark:bg-gray-600 hidden md:block" />
        <div className="text-left max-w-xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-800 dark:text-gray-300">
          Hi! I’m Pandrinki Samson Tejas, a Computer Science student passionate about building smart and impactful tech solutions. I specialize in frontend development, AI integration, and AR experiences using tools like React, Python, and Unity.

From creating women safety systems to AR science labs, I enjoy solving real-world problems through technology. I’ve also earned recognition in multiple hackathons and am always eager to learn, build, and collaborate on innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
