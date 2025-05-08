import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-[#111] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        <div className="text-2xl font-bold tracking-wide">Samson Tejas.</div>
        <div className="space-x-6 hidden md:flex ml-auto items-center">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white text-xl bg-blue-600 w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-500 transition"
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="relative group text-base font-medium text-gray-900 dark:text-gray-100 transition duration-300"
  >
    {label}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default Navbar;
