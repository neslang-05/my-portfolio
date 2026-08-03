"use client";

import Link from "next/link";
import { useSiteData } from "@/context/SiteDataContext";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, MapPin, Download, ArrowRight, Loader2, Lock, Globe, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GithubStatsSection } from "@/components/github-stats";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Home() {
  const { data, loading } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  const featuredProjects = data.projects.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 border-b border-zinc-800"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-sans text-zinc-300 mb-6">
            <span className="w-2 h-2 bg-white animate-pulse" />
            <span>118 REPOSITORIES ACTIVE ON GITHUB</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase font-sans">
            NILAMBAR ELANGBAM
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {data.personal.title}. Experienced in CI/CD pipelines, Docker, Linux, Azure, IoT telemetry, and full-stack web platforms.
          </p>

          {/* Contact Details */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-sans">
            <a 
              href={`mailto:${data.personal.email}`}
              className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>{data.personal.email}</span>
            </a>
            <span className="text-zinc-700">/</span>
            <span className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span>{data.personal.location}</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-4 font-sans text-xs">
            <a 
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub (@neslang-05)</span>
            </a>
            <a 
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-zinc-400" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={data.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Instagram className="w-4 h-4 text-zinc-400" />
              <span>Instagram</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 font-sans text-xs font-bold">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/resume"
                className="bg-white text-black px-6 py-3.5 hover:bg-zinc-200 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD RESUME
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/projects"
                className="border border-zinc-800 bg-zinc-950 px-6 py-3.5 hover:border-zinc-700 hover:bg-zinc-900 transition-all flex items-center gap-2 text-white"
              >
                EXPLORE 118 PROJECTS
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </Link>
            </motion.div>
          </div>
        </motion.header>

        {/* GitHub Overview Stats Component */}
        {data.githubStats && (
          <section>
            <GithubStatsSection stats={data.githubStats} githubUrl={data.social.github} />
          </section>
        )}

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            Professional Summary & Background
          </h2>
          <div className="text-zinc-300 leading-relaxed space-y-4 max-w-3xl text-sm md:text-base">
            {data.personal.bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 border-b border-zinc-800"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-white" />
                Featured Systems & Repositories
              </h2>
              <p className="text-sm text-zinc-400">Key public open-source & private client/institutional projects</p>
            </div>
            <Link 
              href="/projects" 
              className="text-xs font-sans text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 border border-zinc-800 px-3 py-1.5 bg-zinc-950"
            >
              ALL 118 REPOS <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="bg-zinc-950 border border-zinc-800 p-5 hover:border-zinc-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-white group-hover:text-zinc-200 transition-colors text-base">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.isPrivate ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-sans bg-zinc-900 border border-zinc-700 text-zinc-300">
                          <Lock className="w-2.5 h-2.5" /> PRIVATE
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-sans bg-zinc-900 border border-zinc-700 text-zinc-300">
                          <Globe className="w-2.5 h-2.5" /> PUBLIC
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[11px] font-sans bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-sans">
                    <span className="text-zinc-500 uppercase">{project.category}</span>
                    {project.github && !project.isPrivate ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                      >
                        GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-zinc-600">CLIENT CODE</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            Skills & Technology Matrix
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-zinc-950 border border-zinc-900 p-4">
                <h3 className="text-xs font-sans text-zinc-400 uppercase tracking-wider mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs font-sans bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ x: 2 }}
                className="bg-zinc-950 border border-zinc-900 p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-bold text-white text-base">{exp.company}</h3>
                    <p className="text-zinc-300 text-xs font-sans font-semibold">{exp.title} — <span className="text-zinc-500">{exp.location}</span></p>
                  </div>
                  <span className="text-xs font-sans text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 w-fit">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <ul className="text-zinc-300 text-xs md:text-sm space-y-2 ml-4 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="list-disc text-zinc-400 leading-relaxed">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-sans bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Achievements */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            Education & Academic Standing
          </h2>
          
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-950 border border-zinc-900 gap-2">
                <div>
                  <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                  <p className="text-zinc-400 text-xs">{edu.institution}, {edu.location}</p>
                  {edu.gpa && (
                    <p className="text-xs font-sans text-zinc-300 mt-1 font-semibold">
                      GPA: <span className="text-white">{edu.gpa}</span>
                    </p>
                  )}
                </div>
                <span className="text-xs font-sans text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 w-fit">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}