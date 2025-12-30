import Link from "next/link";
import { getSiteData } from "@/lib/data";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, MapPin, Download, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  const data = getSiteData();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <header className="py-16 border-b border-zinc-800">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, my name is {data.personal.name.split(' ')[0]}.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {data.personal.title}. I build IoT systems, web applications, and solutions 
            that bridge hardware with cloud technologies.
          </p>

          {/* Contact Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href={`mailto:${data.personal.email}`}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-sm">{data.personal.email}</span>
            </a>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-sm">{data.personal.location}</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            <a 
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a 
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a 
              href={data.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-mono text-sm">Instagram</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <Link 
              href="/resume"
              className="bg-white text-black px-6 py-3 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </Link>
            <Link 
              href="/projects"
              className="border border-zinc-800 px-6 py-3 font-bold hover:border-zinc-600 hover:bg-zinc-950 transition-colors flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* About Section */}
        <section className="py-12 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">About</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4 max-w-3xl">
            {data.personal.bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12 border-b border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">Featured Projects</h2>
            <Link href="/projects" className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="space-y-1">
            {data.projects.filter(p => p.featured).slice(0, 5).map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between py-4 border-b border-zinc-900 hover:bg-zinc-950 -mx-4 px-4 transition-colors group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium group-hover:text-white transition-colors">{project.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-zinc-500 text-sm mt-1 max-w-lg">{project.description}</p>
                </div>
                <div className="flex gap-2 ml-4 flex-shrink-0">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-medium text-zinc-400 mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-12 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Experience</h2>
          
          <div className="space-y-8">
            {data.experience.map((exp) => (
              <div key={exp.id} className="group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium">{exp.title}</h3>
                    <p className="text-zinc-500 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-600">{exp.startDate} — {exp.endDate}</span>
                </div>
                <ul className="text-zinc-400 text-sm space-y-1 ml-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="before:content-['—'] before:mr-2 before:text-zinc-700">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="py-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Education</h2>
          
          <div className="space-y-6">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-zinc-500 text-sm">{edu.institution}, {edu.location}</p>
                  {edu.description && <p className="text-zinc-600 text-sm mt-1">{edu.description}</p>}
                </div>
                <span className="text-xs font-mono text-zinc-600">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}