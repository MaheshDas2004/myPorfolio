import { Github, Linkedin, Download } from "lucide-react";
import UseFetch from "../hooks/UseFetch";

export default function Hero() {
  const { data:infos, loading, error } = UseFetch(
    "http://localhost:8000/api/v1/hero/"
  );
  const {
    data: links,
    loading: linkLoading,
    error: linkError,
  } = UseFetch("http://localhost:8000/api/v1/link/");

  // Combined loading state
  if (loading || linkLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  // Handle errors separately
  if (error) {
    return <p style={{ color: "red" }}>Error fetching hero data: {error}</p>;
  }
  if (linkError) {
    return <p style={{ color: "red" }}>Error fetching links: {linkError}</p>;
  }

  const download = (mycv) => {
    const link = document.createElement("a");
    link.href = mycv; // mere githu ka raw url store
    link.download = "Mahesh_Das_CV.pdf"; // file name on download
    link.click();
  };

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-gray-900 to-black text-white flex items-center">
      {infos.map((info,idx)=>(

      <div key={idx} className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
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

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              {info.description}
            </p>

            {/* Action Buttons */}
            {links.map((link,i)=>(
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={()=>download(info.mycv)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg flex items-center gap-2 transition-transform hover:scale-105 duration-300 w-full sm:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>

              <div className="flex items-center gap-6">
                <a
                  href={link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-6 h-6" />
                  <span className="hidden sm:inline font-medium">GitHub</span>
                </a>

                <a
                  href={link.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="hidden sm:inline font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            ))}
            
            {/* --- Improved Education */}
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
                    Web Dev, AI, OOPs
                  </h3>
                   <p className="text-sm text-gray-500">
                    Key Interests
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <img
                src={info.hero_img}
                alt="/hero/jpg"
                className="rounded-2xl w-full max-w-lg sm:max-w-md lg:max-w-xl object-cover shadow-2xl shadow-purple-900/30 -ml-6"
              />
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}