"use client";

import { useState, useMemo } from "react";
import { useSiteData } from "@/context/SiteDataContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Search, Lock, Globe, Star, Loader2, FolderGit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  const { data, loading } = useSiteData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrivacy, setSelectedPrivacy] = useState<string>("all");

  const projects = data.projects || [];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory === "featured" && !project.featured) return false;
      if (
        selectedCategory !== "all" &&
        selectedCategory !== "featured" &&
        project.category !== selectedCategory
      ) {
        return false;
      }

      // Privacy filter
      if (selectedPrivacy === "public" && project.isPrivate) return false;
      if (selectedPrivacy === "private" && !project.isPrivate) return false;

      // Search filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = project.title.toLowerCase().includes(q);
        const matchDesc = project.description.toLowerCase().includes(q);
        const matchTech = project.technologies.some((t) =>
          t.toLowerCase().includes(q)
        );
        const matchLang = project.language?.toLowerCase().includes(q);

        return matchTitle || matchDesc || matchTech || matchLang;
      }

      return true;
    });
  }, [projects, searchQuery, selectedCategory, selectedPrivacy]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  const publicCount = projects.filter((p) => !p.isPrivate).length;
  const privateCount = projects.filter((p) => p.isPrivate).length;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8 border-b border-zinc-800 space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-sans text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1 w-fit">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>COMPLETE GITHUB REPOSITORY INDEX ({projects.length} TOTAL)</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight font-sans uppercase">
            Repository Showcase
          </h1>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Full catalog of public open-source software, IoT hardware telemetry, university admission platforms, AI models, and client projects from GitHub (@neslang-05).
          </p>
        </motion.header>

        {/* Filter & Search Bar */}
        <section className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 118 repos by name, tech stack (TypeScript, Python, Docker...), or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-400 text-sm text-zinc-200 placeholder-zinc-500 pl-11 pr-4 py-3 outline-none transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-sans text-zinc-500 hover:text-zinc-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between border-b border-zinc-800 pb-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              {[
                { id: "all", label: `ALL (${projects.length})` },
                { id: "featured", label: "FEATURED" },
                { id: "web", label: "WEB APPS" },
                { id: "iot", label: "IOT & HARDWARE" },
                { id: "ai", label: "AI & ML" },
                { id: "data", label: "DATA SCIENCE" },
                { id: "academic", label: "ACADEMIC / TEX" },
                { id: "tools", label: "TOOLS & UTILITIES" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 border transition-all ${
                    selectedCategory === tab.id
                      ? "bg-white text-black border-white font-bold"
                      : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Privacy Toggle */}
            <div className="flex gap-1.5 text-xs font-sans bg-zinc-950 border border-zinc-800 p-1 w-fit">
              <button
                onClick={() => setSelectedPrivacy("all")}
                className={`px-2.5 py-1 ${
                  selectedPrivacy === "all" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setSelectedPrivacy("public")}
                className={`px-2.5 py-1 flex items-center gap-1 ${
                  selectedPrivacy === "public" ? "bg-zinc-800 text-white font-bold border border-zinc-700" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Globe className="w-3 h-3" /> PUBLIC ({publicCount})
              </button>
              <button
                onClick={() => setSelectedPrivacy("private")}
                className={`px-2.5 py-1 flex items-center gap-1 ${
                  selectedPrivacy === "private" ? "bg-zinc-800 text-white font-bold border border-zinc-700" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Lock className="w-3 h-3" /> PRIVATE ({privateCount})
              </button>
            </div>
          </div>
        </section>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-sans text-zinc-500">
          <span>SHOWING {filteredProjects.length} OF {projects.length} REPOSITORIES</span>
          {(searchQuery || selectedCategory !== "all" || selectedPrivacy !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedPrivacy("all");
              }}
              className="text-zinc-300 hover:underline uppercase"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Repositories Grid */}
        <motion.section layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-zinc-950 border border-zinc-800 p-5 hover:border-zinc-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white group-hover:text-zinc-200 transition-colors text-base font-sans">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] font-sans bg-zinc-900 border border-zinc-700 text-zinc-300 px-1.5 py-0.5" title="Featured">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
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
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-sans bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer metadata */}
                  <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-sans text-zinc-500">
                    <div className="flex items-center gap-3">
                      <span className="uppercase text-[10px] bg-zinc-900 px-2 py-0.5 text-zinc-400 border border-zinc-800">
                        {project.category}
                      </span>
                      {project.updatedAt && (
                        <span className="text-[11px]">UPDATED {project.updatedAt}</span>
                      )}
                    </div>

                    {project.github && !project.isPrivate ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
                      >
                        GitHub <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                      </a>
                    ) : (
                      <span className="text-zinc-600 text-[11px]">INTERNAL CODE</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-zinc-950 border border-zinc-900 space-y-3">
            <p className="text-zinc-400 font-sans text-sm">NO REPOSITORIES MATCHING SEARCH CRITERIA.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedPrivacy("all");
              }}
              className="text-xs font-sans bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors uppercase"
            >
              Clear Search & Filters
            </button>
          </div>
        )}

        {/* GitHub Footer CTA */}
        <section className="py-12 border-t border-zinc-800 text-center">
          <div className="bg-zinc-950 border border-zinc-800 p-8 max-w-xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-white font-sans uppercase">EXPLORE ON GITHUB</h3>
            <p className="text-xs text-zinc-400 font-sans">
              View commit logs, pull requests, issue trackers, and release branches on my public profile.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold text-xs hover:bg-zinc-200 transition-colors font-sans"
            >
              @neslang-05 ON GITHUB
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
