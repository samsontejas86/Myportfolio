import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-[#111] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">Samson Tejas.</div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex ml-auto items-center">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />

          {/* Dark/Light Mode Toggle */}
          <div className="flex items-center ml-4">
            <label htmlFor="dark-mode-toggle" className="flex items-center cursor-pointer space-x-2">
              <span className="text-sm text-gray-900 dark:text-white">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>

              <div className="relative w-16 h-7 bg-gray-300 dark:bg-gray-600 rounded-full">
                <input
                  id="dark-mode-toggle"
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="sr-only"
                />
                <div
                  className={`absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
                    darkMode ? "translate-x-8" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </label>

            {/* Dark/Light Mode Icons */}
            <div className="ml-2 text-xl text-gray-900 dark:text-white">
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-4">
          <button onClick={toggleMenu} className="text-2xl text-gray-900 dark:text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-[#111] shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink href="#home" label="Home" closeMenu={toggleMenu} />
            <NavLink href="#about" label="About" closeMenu={toggleMenu} />
            <NavLink href="#skills" label="Skills" closeMenu={toggleMenu} />
            <NavLink href="#projects" label="Projects" closeMenu={toggleMenu} />
            <NavLink href="#contact" label="Contact" closeMenu={toggleMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, closeMenu }) => (
  <Link
    to={href.slice(1)}
    smooth={true}
    duration={500}
    onClick={closeMenu} // Close the menu when a link is clicked
    className="relative group text-base font-medium text-gray-900 dark:text-gray-100 transition duration-300 cursor-pointer"
  >
    {label}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Navbar;
