"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSiteData } from "@/context/SiteDataContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Github, Tag, Loader2 } from "lucide-react";
import { useEffect } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const { data, loading } = useSiteData();
  const project = data.projects.find((p) => p.slug === slug || p.id === slug);

  useEffect(() => {
    if (!loading && !project) {
      router.push("https://github.com/neslang-05");
    }
  }, [loading, project, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <header className="space-y-3 border-b border-zinc-800 pb-6">
          <p className="text-xs font-mono text-zinc-500 uppercase flex items-center gap-2">
            <Tag className="w-4 h-4" />
            {project.category}
          </p>
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-zinc-400 max-w-3xl">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </header>

        <section className="space-y-3 text-zinc-300 leading-relaxed">
          <p>
            This project page is generated from your portfolio data. You can expand it with problem, approach,
            architecture, and results for this specific project.
          </p>
        </section>

        <div className="pt-6 border-t border-zinc-800 flex items-center justify-between text-sm text-zinc-500">
          <Link href="/projects" className="hover:text-white transition-colors">
            ← Back to projects
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
