import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";
import UseFetch from "../hooks/UseFetch";

const Contact = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const { data: info, loading, error } = UseFetch(`${baseURL}/contact/`);

  // --- Single State for Form ---
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const url = import.meta.env.VITE_WEBHOOK_URL;
  const key = import.meta.env.VITE_SECRET_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent multiple submissions
    
    setIsSubmitting(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
      <p className="text-lg">Loading...</p>
    </div>
  );
  if (error) return (
    <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
      <p className="text-red-400 text-lg">Error: {error}</p>
    </div>
  );

  return (
    <div id="contact" className="min-h-screen bg-black text-white font-mono">
      {info && info.map((item, idx) => (
        <div key={idx} className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-10 md:py-12">
          {/* Contact Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              <span className="text-purple-400">Get</span> In Touch
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              {item.heading ||
                "Have a project in mind? Let's discuss how we can work together to bring your ideas to life."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Left Column */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Talk</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {item.description ||
                  "I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you."}
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 bg-gray-900/50 rounded-lg p-3 sm:p-4 hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="text-purple-400 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium text-sm sm:text-base break-all">{item.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 bg-gray-900/50 rounded-lg p-3 sm:p-4 hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="text-purple-400 flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium text-sm sm:text-base">+91 {item.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 bg-gray-900/50 rounded-lg p-3 sm:p-4 hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="text-purple-400 flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium text-sm sm:text-base">{item.location}</p>
                  </div>
                </div>
              </div>

              {/* Follow Me */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <a
                    href="https://github.com/MaheshDas2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maheshii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/d_mahesh18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Message</h3>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base sm:rows-6"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300 font-medium text-sm sm:text-base cursor-pointer ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;