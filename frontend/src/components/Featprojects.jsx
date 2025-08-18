import { Code, Database, Smartphone, Palette, ExternalLink, Github } from "lucide-react"
import { useEffect, useState } from "react"
import UseFetch from "../hooks/UseFetch"

export default function Featprojects() {
  const {data, loading ,error}=UseFetch("http://localhost:8000/api/v1/project/");
  if (loading) return <p>Loading...</p>;

  // ✅ agar error aaya to
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {data.map((pro, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pro.project_image}
                    alt={pro.title}
                    width={400}
                    height={300}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {pro.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
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
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-purple-400 hover:text-purple-400 transition-colors duration-300">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="text-center">
            <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
