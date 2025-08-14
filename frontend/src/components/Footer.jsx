import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-start">
        
        {/* Left Section */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="text-xl font-bold text-purple-500">John Doe</h2>
          <p className="mt-2">
            Full Stack Developer passionate about creating innovative web
            solutions.
          </p>
        </div>

        {/* Middle Section */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-gray-200">Connect</h3>
          <div className="flex mt-2 space-x-4">
            <a href="#" className="hover:text-white"><Github size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2024 John Doe. All rights reserved.
      </div>
    </footer>
  );
}
