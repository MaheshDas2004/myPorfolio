import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "Projects", "About", "Contacts"];

  return (
    <nav className="sticky top-0 z-50 bg-black/10 backdrop-blur-md text-white">
      <div className="flex items-center justify-between px-8 py-4">
        
        {/* Left: Portfolio + Nav Links */}
          <div className="text-purple-400 font-semibold text-lg">
            Portfolio
          </div>
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === link
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
