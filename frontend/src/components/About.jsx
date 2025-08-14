
import { Code, Database, Smartphone, Palette } from "lucide-react"

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ]

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

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-purple-400">About</span> Me
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            {/* Profile Image */}
            <div className="mb-8">
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src=""
                  alt="John Doe - Developer"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Name and Bio */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">John Doe</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate full-stack developer based in San Francisco, dedicated to creating innovative web
                solutions. With expertise spanning frontend and backend technologies, I bring ideas to life through
                clean, efficient code.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-bold mb-8">What I Do</h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
