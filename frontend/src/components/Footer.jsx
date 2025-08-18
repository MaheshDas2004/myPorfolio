import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-25">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
        
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-purple-500">John Doe</h2>
          <p className="mt-2 text-gray-400">
            Full Stack Developer passionate about creating innovative web solutions.
          </p>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/3 text-center">
          <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
          <ul className="mt-3 space-y-1">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Projects</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-lg font-semibold text-gray-200">Connect</h3>
          <div className="flex justify-center md:justify-end mt-3 space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2024 John Doe. All rights reserved.
      </div>
    </footer>
  );
}
