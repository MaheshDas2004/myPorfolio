import { Code, Database, Smartphone, Palette, ExternalLink, Github } from "lucide-react"

export default function Featprojects() {

  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Frontend Development",
      description: "Modern web applications using React, Next.js, and TypeScript",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Backend Development",
      description: "Scalable APIs and databases with Node.js, Python, and cloud services",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "UI/UX Design",
      description: "User-centered design with modern tools and methodologies",
    },
  ]

  const projects = [
    {
      title: "Project Management Dashboard",
      description: "A comprehensive project management tool with real-time collaboration features.",
      image: "/purple-project-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      image: "/mobile-banking-app-purple.png",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with admin dashboard and payment integration.",
      image: "/ecommerce-product-catalog.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-6xl mx-auto px-6 py-2">
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium">
                        {tech}
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
