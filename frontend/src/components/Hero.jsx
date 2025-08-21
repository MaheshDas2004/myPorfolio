import { Github, Linkedin, Download } from "lucide-react";
import UseFetch from "../hooks/UseFetch";

export default function Hero() {
  const baseURL = import.meta.env.VITE_API_URL;
  const { data: infos, loading, error } = UseFetch(`${baseURL}/hero/`);
  const { data: links, loading: linkLoading, error: linkError} = UseFetch(`${baseURL}/link/`);

  // Combined loading state
  if (loading || linkLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // Handle errors separately
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <p className="text-red-400 text-center">Error fetching hero data: {error}</p>
      </div>
    );
  }
  if (linkError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <p className="text-red-400 text-center">Error fetching links: {linkError}</p>
      </div>
    );
  }

  const download = (mycv) => {
    const link = document.createElement("a");
    link.href = mycv;
    link.download = "Mahesh_Das_CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-[85vh] sm:min-h-[90vh] bg-gradient-to-b from-gray-900 to-black text-white flex items-center">
      {infos.map((info, idx) => (
        <div key={idx} className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              
              {/* Name and Tagline */}
              <div>
                <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-purple-400">{info.Firstname}</span>
                  <br />
                  <span className="text-white">{info.Lastname}</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-xl text-gray-400 mt-4">
                  {info.tagLine}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              {info.description}
            </p>

              {/* Action Buttons */}
              {links.map((link, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start lg:items-start gap-4 sm:gap-6">
                  
                  {/* Download CV Button */}
                  <button
                    onClick={() => download(info.mycv)}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg flex items-center gap-2 transition-all hover:scale-105 duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-purple-500/25"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Download CV</span>
                  </button>

                  {/* Social Links */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    <a
                      href={link.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-purple-500/10"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-sm sm:text-base font-medium hidden sm:inline">GitHub</span>
                    </a>

                    <a
                      href={link.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-purple-500/10"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-sm sm:text-base font-medium hidden sm:inline">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
              
              {/* Education Section */}
              <div className="pt-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-gray-700 pt-5">
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-400">Education</p>
                    <h3 className="text-lg font-bold text-white mt-1">
                      B.Tech - CSE
                    </h3>
                    <p className="text-sm text-gray-500">
                      Lovely Professional University
                    </p>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-400">Graduation Year</p>
                    <h3 className="text-lg font-bold text-white mt-1">
                      2023 – 2027
                    </h3>
                     <p className="text-sm text-gray-500">
                      Currently a Student
                    </p>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-400">Focus Areas</p>
                    <h3 className="text-lg font-bold text-white mt-1">
                      Web Dev, GenAI, OOPs
                    </h3>
                     <p className="text-sm text-gray-500">
                      Key Interests
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 px-4 sm:px-0">
              <div className="relative">
                <img
                  src={info.hero_img}
                  alt="/hero/jpg"
                  className="rounded-2xl w-full max-w-lg sm:max-w-md lg:max-xl object-cover shadow-2xl shadow-purple-900/30"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}