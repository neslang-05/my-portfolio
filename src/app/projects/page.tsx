"use client";

import { useSiteData } from "@/context/SiteDataContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const { data, loading } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  const projects = data.projects;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="py-8 border-b border-zinc-800">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
          <p className="text-zinc-400 max-w-2xl">
            A collection of projects I&apos;ve worked on, ranging from IoT systems and web applications 
            to data science and AI experiments.
          </p>
        </header>

        {/* Featured Projects */}
        <section className="py-12 border-b border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Featured</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.filter(p => p.featured).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="border border-zinc-800 p-6 hover:border-zinc-600 hover:bg-zinc-950 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold group-hover:text-white transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-900">
                  <span className="text-xs font-mono text-zinc-600 uppercase">{project.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section className="py-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">All Projects</h2>
          
          {/* Project List */}
          <div className="space-y-1">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="flex items-start justify-between py-4 border-b border-zinc-900 hover:bg-zinc-950 -mx-4 px-4 transition-colors group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium group-hover:text-white transition-colors">{project.title}</h3>
                    {project.featured && (
                      <span className="text-xs font-mono text-emerald-500">★</span>
                    )}
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-zinc-500 text-sm mt-1 max-w-lg">{project.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2 ml-4 flex-shrink-0">
                  <span className="text-xs font-mono text-zinc-600 uppercase">{project.category}</span>
                  <div className="flex gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="py-12 border-t border-zinc-800">
          <div className="text-center">
            <p className="text-zinc-400 mb-4">Want to see more?</p>
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold hover:bg-zinc-200 transition-colors"
            >
              View GitHub Profile
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
