import { Code, Database, Smartphone, Palette, ExternalLink, Github, Mail, Phone, MapPin, Send } from "lucide-react"

import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black text-white font-mono">
        <div className="container mx-auto px-20 py-12">
          {/* Contact Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">Get</span> In Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Let's Talk */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. Whether you're a company looking
                to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.
              </p>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 bg-gray-900/50 rounded-lg p-4">
                  <div className="text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">john.doe@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-900/50 rounded-lg p-4">
                  <div className="text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-900/50 rounded-lg p-4">
                  <div className="text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Follow Me */}
              <div>
                <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">
                    GitHub
                  </button>
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">
                    LinkedIn
                  </button>
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">
                    Twitter
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Send Message Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact