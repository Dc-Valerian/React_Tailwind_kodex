import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false); // ✅ For sticky + shrink effect

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["Home", "About", "Portfolio", "Resume", "Contact"];

  // Handle scroll-based highlighting + sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      );

      const scrollPos = window.scrollY + window.innerHeight / 3;

      // ✅ Sticky + shrink on scroll
      setScrolled(window.scrollY > 50);

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(navLinks[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dbpcptmco/image/upload/v1761906878/nano-banana-2025-10-30T15-17-01_obsg9r.png)",
      }}
    >
      <div className="absolute bg-black/50 inset-0"></div>

      {/* ✅ Sticky Navbar with Shrink Effect */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-10 transition-all duration-300 z-30 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div
          className={`text-white border border-white font-semibold transition-all duration-300 ${
            scrolled ? "text-lg px-2 py-0.5" : "text-xl px-3 py-1"
          }`}
        >
          VA
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`cursor-pointer hover:text-green-400 transition-colors duration-200 ${
                activeLink === link ? "text-green-400 font-semibold" : ""
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden z-40"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center text-white text-lg space-y-8 transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`list-none cursor-pointer transition-colors duration-200 ${
                activeLink === link
                  ? "text-green-400 font-semibold"
                  : "hover:text-green-400"
              }`}
            >
              {link}
            </li>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <Slide direction="down" duration={1000} delay={200}>
          <h1 className="text-5xl font-bold mb-4">I'm Valerian Adimike</h1>
        </Slide>
        <Slide direction="up">
          <h2 className="text-4xl font-bold mb-6">A Front-end Developer</h2>
        </Slide>
        <Fade>
          <p className="text-lg">
            A passionate front-end developer with experience in building
            responsive and user-friendly web applications using modern
            technologies like React, JavaScript, HTML, and CSS.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
