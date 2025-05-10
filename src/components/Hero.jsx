import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { href: "https://www.linkedin.com/in/samsontejas86/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/samsontejas86", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.instagram.com/sammmy.x._/", icon: <FaInstagram />, label: "Instagram" },
  { href: "mailto:samsontejas.p@gmail.com", icon: <FaEnvelope />, label: "Gmail" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="max-w-3xl w-full mx-auto break-words">
          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 hero-outline hero-border transition-colors duration-300 leading-tight animate__animated animate__fadeIn animate__delay-1s">
            Hi, I'm Samson Tejas
          </h1>

          {/* Hero Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 hero-outline hero-border transition-colors duration-300 leading-relaxed animate__animated animate__fadeIn animate__delay-1.5s">
            Web Developer • Designer • Learner
          </p>

          {/* Know More Button */}
          <a
            href="#about"
            className="inline-block bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full hover:bg-blue-500 transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
          >
            Know More
          </a>
        </div>
      </div>

      {/* Social Icons - Desktop */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex-col gap-4 text-white text-xl hidden sm:flex animate__animated animate__fadeIn animate__delay-2.5s">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="relative group text-white hover:text-black transition transform hover:scale-110"
          >
            {icon}
            <div className="tooltip absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-80 text-white text-xs sm:text-sm px-2 py-1 rounded shadow-md whitespace-nowrap max-w-[150px]">
              {label}
            </div>
          </a>
        ))}
      </div>

      {/* Social Icons - Mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-5 text-white text-2xl sm:hidden animate__animated animate__fadeIn animate__delay-3s">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-black transition transform hover:scale-110 p-2"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
