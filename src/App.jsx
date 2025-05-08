// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";  // Import Skills component
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="font-sans overflow-x-hidden dark:bg-[#111] bg-white text-gray-900 dark:text-gray-100 transition-all duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />  {/* Add Skills section */}
      <Projects />
      <Contact />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
