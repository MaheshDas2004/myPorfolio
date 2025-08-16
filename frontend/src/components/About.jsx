import * as icon from "lucide-react";
import UseFetch from "../hooks/UseFetch";

export default function About() {
  const {
    data: aboutme,
    loading,
    error,
  } = UseFetch("http://localhost:8000/api/v1/aboutme/");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div id="about" className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        {aboutme.map((info, idx) => (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-purple-400">About</span> Me
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {info.title}
              </p>
            </div>

            <div key={idx} className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                {/* Profile Image */}
                <div className="mb-8">
                  <div className="relative w-full max-w-md mx-auto">
                    <img
                      src="../public/about.jpg"
                      alt={info.name || "Profile"}
                      width={400}
                      height={500}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Name and Bio */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">{info.name}</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {info.bio ||
                      "I'm a passionate full-stack developer dedicated to creating innovative web solutions."}
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {info.technologies.map((skills, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm font-medium"
                      >
                        {skills.skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-2xl font-bold mb-8">What I Do</h2>
                <div className="space-y-6">
                  {info.whatido.map((service, index) => {
                    const IconComponent = icon[service.icon_name];
                    return (
                      <div
                        key={index}
                        className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
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
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
