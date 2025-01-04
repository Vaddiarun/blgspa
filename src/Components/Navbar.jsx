import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".menu-container") &&
        !e.target.closest(".menu-btn")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-extrabold text-gray-800">MassagePro</h1>
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="lg:hidden menu-btn focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-8 h-0.5 bg-gray-800 mb-2 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-gray-800 mb-2 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Menu Links (Desktop and Mobile) */}
        <ul
          className={`lg:flex lg:space-x-6 items-center   font-semibold transform transition-transform duration-500 ${
            isMenuOpen
              ? "absolute left-0 top-0 bg-gradient-to-r from-gray-300 to-gray-100 w-2/3 h-screen p-8 flex flex-col items-start z-50 ease-in-out"
              : "hidden lg:flex"
          }`}
        >
          <li className="my-4 lg:my-0">
            <Link
              to="/"
              className="hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="my-4 lg:my-0">
            <Link
              to="/about"
              className="hover:text-gray-600 transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li className="my-4 lg:my-0">
            <Link
              to="/contact"
              className="hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay Effect with Smooth Fade */}
      <div
        className={`lg:hidden fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
