import React, { useState } from "react";
import {Routes,Route,Link, useLocation, useNavigate} from "react-router-dom"
import { ArrowLeft } from "lucide-react";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const Navigate=useNavigate();
  const makeactive=(name)=>{
    setActive(name)
  }
  const location=useLocation();

  return (
    <header className="sticky top-0 z-50 bg-black/10 backdrop-blur-md text-white">
      <div className="flex items-center justify-between px-8 py-4">
        
        {/* Left: Portfolio + Nav Links */}
          <div className="text-purple-400 font-semibold text-lg">
            Portfolio
          </div>
          {location.pathname==="/"?(
        <div className="flex items-center space-x-6">
            <a onClick={()=>makeactive("Home")} href="#/" className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "Home"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}>Home</a>
            <a onClick={()=>makeactive("Projects")} href="#projects" className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "Projects"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}>Projects</a>
            <a onClick={()=>makeactive("About")} href="#about" className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "About"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}>About</a>
            <a onClick={()=>makeactive("Contact")} href="#contact" className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "Contact"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}>Contact</a>
        </div>
          ):
          (<div className="flex items-center space-x-6">
  <button
    onClick={() => Navigate("/")}
    className={`cursor-pointer flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
      active === "home"
        ? "bg-purple-600 text-white"
        : "text-gray-300 hover:text-white"
    }`}
  >
    <ArrowLeft className="w-5 h-5" />
    Back to Home 
  </button>
</div>
)}
      </div>
    </header>
  );
};

export default Navbar;
