// import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b  from-gray-900 to-black text-white">
      <div className="container mx-auto px-20 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold leading-tight">
                <span className="text-purple-400">Mahesh</span>
                <br />
                <span className="text-white">Das</span>
              </h1>
              <p className="text-xl text-gray-400 mt-4">Full Stack Developer</p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient
              code.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-6">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </button>

              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">100+</div>
                <div className="text-gray-400">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="../public/hero.jpeg"
                alt="John Doe - Full Stack Developer"
                className="rounded-2xl w-full max-w-md lg:max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
