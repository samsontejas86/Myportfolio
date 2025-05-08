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

      {/* Social Icons - Clean small tooltip on hover */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-4 text-white text-xl">
        {[
          { href: "https://www.linkedin.com/in/samsontejas86/", icon: "fab fa-linkedin", label: "LinkedIn" },
          { href: "https://github.com/samsontejas86", icon: "fab fa-github", label: "GitHub" },
          { href: "https://www.instagram.com/sammmy.x._/", icon: "fab fa-instagram", label: "Instagram" },
          { href: "mailto:samsontejas.p@gmail.com", icon: "fas fa-envelope", label: "Gmail" },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-white hover:text-black transition"
          >
            <i className={icon}></i>
            <div className="tooltip absolute left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded shadow-md whitespace-nowrap">
              {label}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
