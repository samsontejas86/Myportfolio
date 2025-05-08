const Projects = () => {
  return (
    <section id="projects" className="w-full flex top-0 left-0 bg-gray-200 dark:bg-[#222] text-center z-50">
      <h2 className="max-w-7xl mx-auto px-4 py-3 text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-[#333] p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-700 dark:text-gray-300">Short description about your project goes here.</p>
        </div>
        <div className="bg-white dark:bg-[#333] p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-700 dark:text-gray-300">Short description about your project goes here.</p>
        </div>
        <div className="bg-white dark:bg-[#333] p-6 rounded-lg shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-700 dark:text-gray-300">You can add links or icons here too later.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
