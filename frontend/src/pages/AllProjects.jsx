import React, { useState } from 'react';
import { ExternalLink, Github, X, Play } from 'lucide-react';
import UseFetch from '../hooks/UseFetch';

const AllProjects = () => {
    const {data:projects, loading ,error}=UseFetch("http://localhost:8000/api/v1/project/");
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handleVideoPlay = (videoId) => {
      setSelectedVideo(videoId);
      setIsVideoOpen(true);
    }

    const closeVideo = () => {
      setIsVideoOpen(false);
      setSelectedVideo(null);
    }

     if (loading) return <p>Loading...</p>;
     if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-20 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gray-400">/</span>projects
          </h1>
          <p className="text-gray-400 text-lg">List of my projects</p>
        </div>

        {/* Complete Apps Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-purple-400">#</span>complete-apps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter((project)=>project.is_major).map((project,index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.project_image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech.id} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium">
                        {tech.skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-purple-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <button
                      onClick={()=>handleVideoPlay(project.demo_id)}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
                    >
                      <Play className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-purple-400">#</span>small-projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.filter((project)=> !project.is_major).map((project,index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-800/60 transition-all duration-300 group border border-gray-800 hover:border-gray-700 flex flex-col h-full"
              >
                <h3 className="text-lg font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech.id} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium">
                      {tech.skill}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-purple-400 hover:text-purple-400 transition-colors duration-300 w-full justify-center mt-auto"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            ))}
          </div>
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
  );
};

export default AllProjects;