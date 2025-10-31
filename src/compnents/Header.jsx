import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-5 z-20">
        <div className="text-white border border-white px-3 py-1 font-semibold text-xl">
          VA
        </div>

        <ul className="md:flex space-x-8 text-white hidden ">
          <li className="hover:text-grey-300 cursor-pointer">Home</li>
          <li className="hover:text-grey-300 cursor-pointer">About</li>
          <li className="hover:text-grey-300 cursor-pointer">Services</li>
          <li className="hover:text-grey-300 cursor-pointer">Resume</li>
          <li className="hover:text-grey-300 cursor-pointer">Contact</li>
        </ul>

        <button
          onClick={toggleMenu}
          className="text-[white] text-2xl md:hidden z-40"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center text-white text-lg space-y-8 transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li
            className="cursor-pointer list-none hover:text-green-400"
            onClick={toggleMenu}
          >
            Home
          </li>
          <li
            className="cursor-pointer list-none hover:text-green-400"
            onClick={toggleMenu}
          >
            About
          </li>
          <li
            className="cursor-pointer list-none hover:text-green-400"
            onClick={toggleMenu}
          >
            Services
          </li>
          <li
            className="cursor-pointer list-none hover:text-green-400"
            onClick={toggleMenu}
          >
            Resume
          </li>
          <li
            className="cursor-pointer list-none hover:text-green-400"
            onClick={toggleMenu}
          >
            Contact
          </li>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full  text-center px-4">
        <Slide direction="down" duration={1000} delay={200}>
          <h1 className="text-5xl font-bold mb-4">I'm Valerian Adimike</h1>
        </Slide>
        <Slide direction="up">
          <h2 className="text-4xl font-bold mb-6">A Front-end Developer</h2>
        </Slide>
        <Fade>
          <p className="text-lg ">
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
