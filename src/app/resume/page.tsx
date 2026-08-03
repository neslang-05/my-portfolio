"use client";

import { useSiteData } from "@/context/SiteDataContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award,
  Globe,
  Loader2,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumePage() {
  const { data, loading } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  const resumeHref = '/resume.pdf';

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Header with Download & Profile Details */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8 border-b border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-white animate-pulse" />
              <span className="text-xs font-sans text-zinc-300 uppercase tracking-wider">DevOps & Full Stack Engineer</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 uppercase font-sans">{data.personal.name}</h1>
            <p className="text-zinc-400 text-sm md:text-base font-sans">{data.personal.title}</p>
          </div>

          <div className="flex flex-wrap gap-3 font-sans text-xs font-bold">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 border border-zinc-700 text-zinc-200 px-4 py-2.5 hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              VIEW PDF
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={resumeHref}
              download="Nilambar_Elangbam_Resume.pdf"
              className="bg-white text-black px-5 py-2.5 hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              DOWNLOAD PDF
            </motion.a>
          </div>
        </motion.header>

        {/* Contact Information Bar */}
        <section className="p-5 bg-zinc-950 border border-zinc-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
          <a
            href={`mailto:${data.personal.email}`}
            className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-zinc-400 flex-shrink-0" />
            <span className="truncate">{data.personal.email}</span>
          </a>
          <a
            href={`tel:${data.personal.phone}`}
            className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-zinc-400 flex-shrink-0" />
            <span>{data.personal.phone}</span>
          </a>
          <div className="flex items-center gap-2.5 text-zinc-400">
            <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0" />
            <span className="truncate">{data.personal.location}</span>
          </div>
          <div className="flex items-center gap-3 justify-start sm:justify-end">
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-zinc-400" />
            </a>
            <a
              href="https://nilambar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="Portfolio Website"
            >
              <Globe className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </section>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-4 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-zinc-400" />
            Professional Summary
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
            {data.personal.summary || data.personal.bio}
          </p>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-4 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-zinc-400" />
            Experience
          </h2>

          <div className="space-y-8">
            {data.experience.map((exp) => (
              <div key={exp.id} className="relative pl-6 border-l-2 border-zinc-800 hover:border-zinc-500 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-bold text-white text-base md:text-lg">{exp.company}</h3>
                    <p className="text-zinc-300 text-xs font-sans font-semibold">{exp.title}</p>
                  </div>
                  <div className="text-left sm:text-right font-sans">
                    <span className="text-xs text-zinc-400 flex items-center gap-1 sm:justify-end">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="text-[11px] text-zinc-500">{exp.location}</span>
                  </div>
                </div>

                <ul className="mt-3 space-y-2 text-xs md:text-sm text-zinc-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-zinc-500 font-bold mt-0.5">&gt;</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-sans bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Highlighted Resume Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-4 border-b border-zinc-800"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-zinc-400" />
              Featured Projects
            </h2>
            <Link href="/projects" className="text-xs font-sans text-zinc-400 hover:text-white hover:underline uppercase">
              VIEW ALL 118 REPOS →
            </Link>
          </div>

          <div className="space-y-4">
            {data.projects.filter(p => p.featured).slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="bg-zinc-950 border border-zinc-800 p-5 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-white text-base font-sans">{project.title}</h3>
                  {project.updatedAt && (
                    <span className="text-[11px] font-sans text-zinc-500 flex-shrink-0 uppercase">
                      UPDATED {project.updatedAt}
                    </span>
                  )}
                </div>
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-sans bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-4 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-zinc-400" />
            Education
          </h2>

          <div className="space-y-6">
            {data.education.map((edu) => (
              <div key={edu.id} className="relative pl-6 border-l-2 border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-white text-base">{edu.institution}</h3>
                    <p className="text-zinc-300 text-xs font-sans">{edu.degree}</p>
                    {edu.gpa && (
                      <p className="text-xs font-sans text-zinc-400 mt-1 font-semibold">
                        GPA: <span className="text-white">{edu.gpa}</span>
                      </p>
                    )}
                  </div>
                  <div className="text-left sm:text-right font-sans">
                    <span className="text-xs text-zinc-400 flex items-center gap-1 sm:justify-end">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      {edu.year}
                    </span>
                    <span className="text-[11px] text-zinc-500">{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-4 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-zinc-400" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-zinc-950 border border-zinc-800 p-4">
                <h3 className="text-xs font-sans text-zinc-400 uppercase tracking-wider mb-2.5">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-sans bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Achievements & Positions of Responsibility */}
        {data.achievements && data.achievements.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="py-4 border-b border-zinc-800"
          >
            <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 text-zinc-400" />
              Achievements & Positions of Responsibility
            </h2>

            <div className="space-y-4">
              {data.achievements.map((ach) => (
                <div key={ach.id} className="bg-zinc-950 border border-zinc-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white text-sm font-sans">{ach.role}</h3>
                    <p className="text-xs font-sans text-zinc-400 mt-0.5">{ach.organization}</p>
                    {ach.description && <p className="text-xs text-zinc-500 mt-1">{ach.description}</p>}
                  </div>
                  <span className="text-xs font-sans text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 w-fit flex-shrink-0">
                    {ach.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* PDF Embedded View / Download CTA */}
        <section className="py-8 text-center space-y-4">
          <div className="bg-zinc-950 border border-zinc-800 p-8 max-w-xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-white font-sans uppercase">DOWNLOAD PRINTABLE RESUME</h3>
            <p className="text-xs text-zinc-400 font-sans">
              Get an official PDF copy of Nilambar Elangbam&apos;s resume detailing DevOps, Cloud, and IoT engineering qualifications.
            </p>
            <div className="flex justify-center gap-3 pt-2 font-sans text-xs font-bold">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 border border-zinc-700 text-zinc-200 px-5 py-2.5 hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                OPEN PDF
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={resumeHref}
                download="Nilambar_Elangbam_Resume.pdf"
                className="bg-white text-black px-5 py-2.5 hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                DOWNLOAD PDF
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
