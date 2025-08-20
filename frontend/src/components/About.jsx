import * as icon from "lucide-react";
import UseFetch from "../hooks/UseFetch";

export default function About() {
  const baseURL = import.meta.env.VITE_API_URL;
  const {
    data: aboutme,
    loading,
    error,
  } = UseFetch(`${baseURL}/aboutme/`);

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
    <div id="about" className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        {aboutme.map((info, idx) => (
          <div key={idx}>
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="text-purple-400">About</span> Me
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                {info.title}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Profile Info */}
              <div>
                {/* Profile Image */}
                <div className="mb-8">
                  <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                    <img
                      src={info.profile_img}
                      alt={info.name || "Profile"}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Name and Bio */}
                <div className="mb-8 text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">{info.name}</h2>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {info.bio ||
                      "I'm a passionate full-stack developer dedicated to creating innovative web solutions."}
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {info.technologies.map((skills, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
                      >
                        {skills.skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - What I Do */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center lg:text-left">What I Do</h2>
                <div className="space-y-6">
                  {info.whatido.map((service, index) => {
                    const IconComponent = icon[service.icon_name];
                    return (
                      <div
                        key={index}
                        className="bg-gray-800/50 rounded-lg p-5 hover:bg-gray-700/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                            {IconComponent && (
                              <IconComponent className="w-5 h-5" />
                            )}
                          </div>
                          <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}