import * as icon from "lucide-react";
import UseFetch from "../hooks/UseFetch";

const formatDegree = (degree) => {
  const degreeMap = {
    BTECH: "B.Tech",
    MTECH: "M.Tech",
    BSC: "B.Sc",
    MSC: "M.Sc",
    BCA: "BCA",
    MCA: "MCA",
    MBA: "MBA",
    PHD: "Ph.D",
    "10TH": "10th",
    "12TH": "12th",
    DIPLOMA: "Diploma",
    BE: "B.E",
    ME: "M.E",
  };
  const raw = degree?.toUpperCase().replace(/_/g, "");
  return degreeMap[raw] || degree.replace(/_/g, " ");
};

export default function About() {
  const baseURL = import.meta.env.VITE_API_URL;
  const { data: aboutme, loading, error } = UseFetch(`${baseURL}/aboutme/`);

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

        {aboutme.map((info, idx) => (
          <div key={idx}>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="text-purple-400">About</span> Me
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                {info.title}
              </p>
            </div>

            {/* ── 2-Column Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

              {/* ── LEFT COLUMN ── */}
              <div className="flex flex-col">

                <div className="mb-8">
                  <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                    <img
                      src={info.profile_img}
                      alt={info.name || "Profile"}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-2 text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">{info.name}</h2>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {info.bio || "I'm a passionate full-stack developer dedicated to creating innovative web solutions."}
                  </p>
                </div>

                <div className="flex-grow text-center lg:text-left mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Technical Skills</h3>
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
                <div className="flex-grow text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {info.softskills.map((skills, i) => (
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

              {/* ── RIGHT COLUMN ── */}
              <div className="flex flex-col">

                {/* What I Do */}
                <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center lg:text-left">What I Do</h2>
                <div className="space-y-6 mb-8">
                  {info.whatido.map((service, index) => {
                    const IconComponent = icon[service.icon_name];
                    return (
                      <div
                        key={index}
                        className="bg-gray-800/50 rounded-lg p-5 hover:bg-gray-700/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                            {IconComponent && <IconComponent className="w-5 h-5" />}
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

                {/* ── Education ── */}
                <div className="bg-gray-900/70 rounded-lg p-3 shadow-md">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 text-purple-400 text-center lg:text-left">Education</h2>
                  {info.education && info.education.length > 0 ? (
                    <ul className="space-y-3">
                      {info.education.map((edu, i) => (
                        <li key={i} className="border-l-4 border-purple-400 pl-2 py-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              {/* Degree — line 1 */}
                              <span className="font-semibold text-white text-base">
                                {formatDegree(edu.degree)}
                              </span>
                              {/* Field of study — line 2, only if exists */}
                              {edu.field_of_study && (
                                <div className="text-purple-300 text-xs mt-0.5">
                                  {edu.field_of_study}
                                </div>
                              )}
                              {/* Institution — line 3 */}
                              <div className="text-gray-300 text-xs mt-1">{edu.institution}</div>
                              {/* Percentage and CGPA — line 4, only if exists */}
                              {(edu.percentage || edu.cgpa) && (
                                <div className="text-gray-400 text-xs mt-1">
                                  {edu.percentage ? `Percentage: ${edu.percentage}` : ""}
                                  {edu.percentage && edu.cgpa ? " | " : ""}
                                  {edu.cgpa ? `CGPA: ${edu.cgpa}` : ""}
                                </div>
                              )}
                            </div>
                            <div className="text-gray-400 text-xs mt-2 sm:mt-0 sm:text-right">
                              {edu.start_year} - {edu.ongoing ? 'Present' : edu.end_year || 'N/A'}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-center">No education details found.</p>
                  )}
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}