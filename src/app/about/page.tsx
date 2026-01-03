"use client";

import { useSiteData } from "@/context/SiteDataContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Github, Linkedin, Instagram, Mail, MapPin, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { data, loading } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="py-8 border-b border-zinc-800">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
          <p className="text-zinc-400">{data.personal.title}</p>
        </header>

        {/* Bio */}
        <section className="py-12 border-b border-zinc-800">
          <div className="text-zinc-300 leading-relaxed space-y-4 max-w-3xl">
            {data.personal.bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Contact</h2>
          
          <div className="space-y-4">
            <a 
              href={`mailto:${data.personal.email}`}
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono">{data.personal.email}</span>
              <span className="text-zinc-600 text-sm">— Email is my preferred communication method</span>
            </a>
            
            <div className="flex items-center gap-3 text-zinc-400">
              <MapPin className="w-5 h-5" />
              <span className="font-mono">{data.personal.location}</span>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-12 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Connect</h2>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-800 px-4 py-3 hover:border-zinc-600 hover:bg-zinc-950 transition-colors group"
            >
              <Github className="w-5 h-5" />
              <span className="font-mono text-sm">GitHub</span>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-800 px-4 py-3 hover:border-zinc-600 hover:bg-zinc-950 transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-mono text-sm">LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href={data.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-800 px-4 py-3 hover:border-zinc-600 hover:bg-zinc-950 transition-colors group"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-mono text-sm">Instagram</span>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </section>

        {/* About This Site */}
        <section className="py-12 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">About This Site</h2>
          
          <div className="text-zinc-400 space-y-4">
            <p>
              This portfolio website is built using modern web technologies. It features a clean, 
              minimalist design inspired by simplicity and functionality.
            </p>
            <div className="border border-zinc-800 p-6 mt-6">
              <h3 className="font-medium mb-4">Built with</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Firebase", "Vercel"].map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/projects"
              className="border border-zinc-800 p-4 hover:border-zinc-600 hover:bg-zinc-950 transition-colors"
            >
              <h3 className="font-medium mb-1">Projects</h3>
              <p className="text-zinc-500 text-sm">View my work</p>
            </Link>
            <Link 
              href="/resume"
              className="border border-zinc-800 p-4 hover:border-zinc-600 hover:bg-zinc-950 transition-colors"
            >
              <h3 className="font-medium mb-1">Resume</h3>
              <p className="text-zinc-500 text-sm">My experience</p>
            </Link>
            <Link 
              href="/blog"
              className="border border-zinc-800 p-4 hover:border-zinc-600 hover:bg-zinc-950 transition-colors"
            >
              <h3 className="font-medium mb-1">Blog</h3>
              <p className="text-zinc-500 text-sm">Read my writings</p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

