'use client';

import { useAuth } from '@/context/AuthContext';
import { getSiteData } from '@/lib/data';
import { FolderKanban, FileText, Eye, Code, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user } = useAuth();
  const siteData = getSiteData();

  const stats = [
    { label: 'Projects', value: siteData.projects.length, icon: FolderKanban, href: '/admin/projects' },
    { label: 'Skills', value: siteData.skills.reduce((acc, s) => acc + s.items.length, 0), icon: Code, href: '/admin/skills' },
    { label: 'Experience', value: siteData.experience.length, icon: Briefcase, href: '/admin/experience' },
    { label: 'Education', value: siteData.education.length, icon: GraduationCap, href: '/admin/education' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-zinc-500 mt-1 font-mono text-sm">
          Welcome back, {user?.email}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="border border-zinc-800 p-6 hover:border-zinc-600 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              <span className="text-3xl font-bold">{stat.value}</span>
            </div>
            <p className="text-zinc-400 text-sm font-mono">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="border border-zinc-800 p-6 mb-8">
        <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/projects"
            className="bg-white text-black px-4 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors"
          >
            Add Project
          </Link>
          <Link
            href="/admin/blog"
            className="bg-zinc-800 text-white px-4 py-2 text-sm font-bold hover:bg-zinc-700 transition-colors"
          >
            New Blog Post
          </Link>
          <Link
            href="/"
            target="_blank"
            className="bg-zinc-800 text-white px-4 py-2 text-sm font-bold hover:bg-zinc-700 transition-colors flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Site
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="border border-zinc-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Featured Projects</h2>
          <Link href="/admin/projects" className="text-sm text-zinc-400 hover:text-white">
            View All →
          </Link>
        </div>
        <div className="space-y-3">
          {siteData.projects.filter(p => p.featured).slice(0, 5).map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0"
            >
              <div>
                <p className="font-medium">{project.title}</p>
                <p className="text-zinc-500 text-sm font-mono">{project.category}</p>
              </div>
              <div className="flex gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs bg-zinc-800 px-2 py-1 text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
