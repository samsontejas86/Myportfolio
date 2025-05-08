const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 hero-outline hero-border transition-colors duration-300">
            Hi, I'm Samson Tejas
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-8 hero-outline hero-border transition-colors duration-300">
            Web Developer • Designer • Learner
          </p>
          <a
            href="#about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition"
          >
            Know More
          </a>
        </div>
      </div>

      {/* Social Icons - Tooltip appears on hover only */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-4 text-white text-xl">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-white hover:text-black transition"
        >
          <i className="fab fa-linkedin"></i>
          <div className="tooltip absolute left-12 -top-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white px-3 py-1 rounded-md shadow-lg">
            LinkedIn
          </div>
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-white hover:text-black transition"
        >
          <i className="fab fa-github"></i>
          <div className="tooltip absolute left-12 -top-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white px-3 py-1 rounded-md shadow-lg">
            GitHub
          </div>
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-white hover:text-black transition"
        >
          <i className="fab fa-instagram"></i>
          <div className="tooltip absolute left-12 -top-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white px-3 py-1 rounded-md shadow-lg">
            Instagram
          </div>
        </a>
        <a
          href="mailto:your.email@example.com"
          className="relative group text-white hover:text-black transition"
        >
          <i className="fas fa-envelope"></i>
          <div className="tooltip absolute left-12 -top-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white px-3 py-1 rounded-md shadow-lg">
            Gmail
          </div>
        </a>
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-white hover:text-black transition"
        >
          <i className="fab fa-facebook"></i>
          <div className="tooltip absolute left-12 -top-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white px-3 py-1 rounded-md shadow-lg">
            Facebook
          </div>
          </a>
      </div>
    </section>
  );
};

export default Hero;
