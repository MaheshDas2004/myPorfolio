import React, { useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Navigate = useNavigate();
  const location = useLocation();

  const makeactive = (name) => {
    setActive(name);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/10 backdrop-blur-md text-white">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Left: Portfolio Logo */}
        <div className="text-purple-400 font-semibold text-base sm:text-lg md:text-xl flex-shrink-0">
          {'<Portfolio />'}
        </div>

        {/* Desktop Navigation */}
        {location.pathname === "/" ? (
          <>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a 
                onClick={() => makeactive("Home")} 
                href="#/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active === "Home"
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </a>
              <a 
                onClick={() => makeactive("Projects")} 
                href="#projects" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active === "Projects"
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Projects
              </a>
              <a 
                onClick={() => makeactive("About")} 
                href="#about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active === "About"
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                About
              </a>
              <a 
                onClick={() => makeactive("Contact")} 
                href="#contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active === "Contact"
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-600/20 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </>
        ) : (
          /* Back to Home Button */
          <div className="flex items-center space-x-6">
            <button
              onClick={() => Navigate("/")}
              className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "home"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {location.pathname === "/" && (
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-black/20 backdrop-blur-sm border-t border-purple-500/20">
            <a 
              onClick={() => makeactive("Home")} 
              href="#/" 
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "Home"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-purple-600/20"
              }`}
            >
              Home
            </a>
            <a 
              onClick={() => makeactive("Projects")} 
              href="#projects" 
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "Projects"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-purple-600/20"
              }`}
            >
              Projects
            </a>
            <a 
              onClick={() => makeactive("About")} 
              href="#about" 
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "About"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-purple-600/20"
              }`}
            >
              About
            </a>
            <a 
              onClick={() => makeactive("Contact")} 
              href="#contact" 
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "Contact"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-purple-600/20"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;