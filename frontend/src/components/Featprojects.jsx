import { Code, Database, Smartphone, Palette, ExternalLink, Github, X, Play } from "lucide-react"
import { useEffect, useState } from "react"
import UseFetch from "../hooks/UseFetch"
import { useNavigate } from "react-router-dom"

export default function Featprojects() {
  const {data, loading ,error}=UseFetch("http://localhost:8000/api/v1/project/");
  const Navigate=useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ✅ agar error aaya to
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  const handleprojectroute=()=>{
    Navigate("/allprojects")
  }

  const handleVideoPlay = (videoId) => {
    setSelectedVideo(videoId);
    setIsVideoOpen(true);
  }

  const closeVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  }

  return (
    <div id="projects" className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-20 py-11">
        <div className="">
          {/* Projects Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">Featured</span> Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise across various technologies and domains.
            </p>
          </div>

          {/* View All Projects Button */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={handleprojectroute}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium cursor-pointer border border-purple-400 hover:border-purple-300 px-4 py-2 rounded-md"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {data.filter((pro)=>pro.is_featured).map((pro, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={pro.project_image}
                    alt={pro.title}
                    width={400}
                    height={300}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {pro.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {pro.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pro.technologies.map((tech) => (
                      <span key={tech.id} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium">
                        {tech.skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href={pro.github_link} className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-purple-400 hover:text-purple-400 transition-colors duration-300">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <button 
                      onClick={() => handleVideoPlay(pro.demo_id)} // Use pro.video_id when available from API
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Video Modal */}
          {isVideoOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 rounded-lg max-w-4xl w-full mx-4 overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-white">Project Demo</h3>
                  <button 
                    onClick={closeVideo}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}