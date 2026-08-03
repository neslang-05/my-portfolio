"use client";

import { useSiteData } from "@/context/SiteDataContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Github, Linkedin, Instagram, Mail, MapPin, ExternalLink, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const { data, loading } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8 border-b border-zinc-800"
        >
          <h1 className="text-4xl font-extrabold tracking-tight font-sans uppercase mb-2">ABOUT ME</h1>
          <p className="text-zinc-400 font-sans text-sm">{data.personal.title}</p>
        </motion.header>

        {/* Bio */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 border-b border-zinc-800"
        >
          <div className="text-zinc-300 leading-relaxed space-y-4 max-w-3xl text-sm md:text-base">
            {data.personal.bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6">CONTACT INFORMATION</h2>
          
          <div className="space-y-4 font-sans text-sm">
            <a 
              href={`mailto:${data.personal.email}`}
              className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
            >
              <Mail className="w-5 h-5 text-zinc-400" />
              <span>{data.personal.email}</span>
              <span className="text-zinc-600 text-xs font-sans">/ PREFERRED METHOD</span>
            </a>
            
            <div className="flex items-center gap-3 text-zinc-400">
              <MapPin className="w-5 h-5 text-zinc-400" />
              <span>{data.personal.location}</span>
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 border-b border-zinc-800"
        >
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6">CONNECT</h2>
          
          <div className="flex flex-wrap gap-4 font-sans text-xs">
            <a 
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-4 py-3 hover:border-zinc-700 hover:bg-zinc-900 transition-colors group"
            >
              <Github className="w-5 h-5 text-zinc-400" />
              <span>GitHub (@neslang-05)</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-4 py-3 hover:border-zinc-700 hover:bg-zinc-900 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-zinc-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href={data.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-4 py-3 hover:border-zinc-700 hover:bg-zinc-900 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-zinc-400" />
              <span>Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.section>

        {/* About This Site */}
        <section className="py-6 border-b border-zinc-800">
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6">ARCHITECTURE & TECH STACK</h2>
          
          <div className="text-zinc-400 space-y-4 text-sm">
            <p>
              Built using Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, and Firebase. Structured with zero rounded corners and high-contrast dark aesthetic.
            </p>
            <div className="border border-zinc-800 bg-zinc-950 p-6 mt-6">
              <h3 className="font-sans text-xs uppercase text-zinc-400 mb-4">TECHNOLOGY STACK</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase", "Vercel"].map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-sans bg-zinc-900 border border-zinc-800 px-3 py-1 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-6">
          <h2 className="text-xs font-sans uppercase tracking-wider text-zinc-500 mb-6">QUICK LINKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
            <Link 
              href="/projects"
              className="border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-700 transition-colors"
            >
              <h3 className="font-bold text-white mb-1 uppercase text-sm">PROJECTS</h3>
              <p className="text-zinc-500 text-xs">Explore 118 repos</p>
            </Link>
            <Link 
              href="/resume"
              className="border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-700 transition-colors"
            >
              <h3 className="font-bold text-white mb-1 uppercase text-sm">RESUME</h3>
              <p className="text-zinc-500 text-xs">View & download PDF</p>
            </Link>
            <Link 
              href="/blog"
              className="border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-700 transition-colors"
            >
              <h3 className="font-bold text-white mb-1 uppercase text-sm">BLOG</h3>
              <p className="text-zinc-500 text-xs">Articles & posts</p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
