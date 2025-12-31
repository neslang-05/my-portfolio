import { getSiteData } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Download, Github, Linkedin, Instagram, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Code } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resume — Nilambar Elangbam",
  description: "Interactive resume of Nilambar Elangbam - Computer Science Engineering Student",
};

export default function ResumePage() {
  const data = getSiteData();

  const resumeHref = data.personal.resumeUrl || '/resume.pdf';

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header with Download */}
        <header className="py-8 border-b border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">{data.personal.name}</h1>
            <p className="text-zinc-400">{data.personal.title}</p>
          </div>
          <a
            href={resumeHref}
            download
            className="bg-white text-black px-6 py-3 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </header>

        {/* Contact Information */}
        <section className="py-8 border-b border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href={`mailto:${data.personal.email}`}
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-sm">{data.personal.email}</span>
            </a>
            <a 
              href={`tel:${data.personal.phone}`}
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono text-sm">{data.personal.phone}</span>
            </a>
            <span className="flex items-center gap-3 text-zinc-400">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-sm">{data.personal.location}</span>
            </span>
            <div className="flex items-center gap-4">
              <a 
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={data.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="py-8 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Professional Summary
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            {data.personal.bio.split('\n\n')[0]}
          </p>
        </section>

        {/* Experience */}
        <section className="py-8 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Experience
          </h2>
          
          <div className="space-y-8">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-zinc-800 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-zinc-400">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="text-xs text-zinc-600">{exp.location}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-zinc-600 mt-1">—</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="py-8 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education
          </h2>
          
          <div className="space-y-6">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-zinc-800 pl-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-zinc-400 text-sm">{edu.institution}</p>
                    <p className="text-zinc-600 text-sm">{edu.location}</p>
                    {edu.description && (
                      <p className="text-zinc-500 text-sm mt-2">{edu.description}</p>
                    )}
                  </div>
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
            <Code className="w-4 h-4" />
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-medium text-zinc-400 mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">Notable Projects</h2>
            <Link href="/projects" className="text-sm text-zinc-500 hover:text-white transition-colors">
              View all →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.filter(p => p.featured).slice(0, 4).map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-800 p-4 hover:border-zinc-600 hover:bg-zinc-950 transition-colors group"
              >
                <h3 className="font-medium group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-zinc-500 text-sm mt-1 line-clamp-2">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-12 border-t border-zinc-800">
          <div className="text-center">
            <p className="text-zinc-400 mb-4">Want a copy for offline viewing?</p>
            <a
              href="/Nilambar_Elangbam_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold hover:bg-zinc-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
