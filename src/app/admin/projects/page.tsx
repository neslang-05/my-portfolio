'use client';

import { useState } from 'react';
import { getSiteData, type Project } from '@/lib/data';
import { Save, Plus, Trash2, Edit2, X, Check } from 'lucide-react';

export default function AdminProjectsPage() {
  const data = getSiteData();
  const [projects, setProjects] = useState<Project[]>(data.projects);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const categories = ['web', 'iot', 'ai', 'data', 'tools', 'other'] as const;

  const startEdit = (project: Project) => {
    setIsEditing(project.id);
    setEditProject({ ...project, technologies: [...project.technologies] });
  };

  const handleEditChange = (field: keyof Project, value: string | boolean | string[]) => {
    setEditProject((prev) => (prev ? { ...prev, [field]: value as any } : prev));
  };

  const handleEditSave = () => {
    if (!editProject) return;

    const cleanedTech = editProject.technologies
      .map((t) => t.trim())
      .filter(Boolean);

    setProjects((prev) =>
      prev.map((p) =>
        p.id === editProject.id
          ? { ...editProject, technologies: cleanedTech }
          : p
      )
    );
    setIsEditing(null);
    setEditProject(null);
  };

  const handleEditCancel = () => {
    setIsEditing(null);
    setEditProject(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">
            Manage your portfolio projects
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {/* Add Project Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Project</h2>
            <button
              onClick={() => setIsAdding(false)}
              className="text-zinc-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Project title"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Category</label>
                <select className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Description</label>
              <textarea
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-24"
                placeholder="Project description"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">GitHub URL</label>
              <input
                type="url"
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Technologies (comma separated)</label>
              <input
                type="text"
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="React, TypeScript, Node.js"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input type="checkbox" className="bg-black border border-zinc-800" />
                Featured
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Project
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="border border-zinc-800 px-4 py-2 hover:bg-zinc-900 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="border border-zinc-800">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-800 text-xs font-mono text-zinc-500 uppercase">
          <div className="col-span-4">Title</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-3">Technologies</div>
          <div className="col-span-1">Featured</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        
        {projects.map((project) => (
          <div key={project.id} className="border-b border-zinc-900">
            {isEditing === project.id && editProject ? (
              <div className="px-6 py-5 space-y-4 bg-zinc-950">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Title</label>
                    <input
                      value={editProject.title}
                      onChange={(e) => handleEditChange('title', e.target.value)}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Category</label>
                    <select
                      value={editProject.category}
                      onChange={(e) => handleEditChange('category', e.target.value)}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-2">Description</label>
                  <textarea
                    value={editProject.description}
                    onChange={(e) => handleEditChange('description', e.target.value)}
                    className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600 h-20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">GitHub URL</label>
                    <input
                      value={editProject.github}
                      onChange={(e) => handleEditChange('github', e.target.value)}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Technologies (comma separated)</label>
                    <input
                      value={editProject.technologies.join(', ')}
                      onChange={(e) => handleEditChange('technologies', e.target.value.split(','))}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm text-zinc-400">
                  <input
                    type="checkbox"
                    checked={editProject.featured}
                    onChange={(e) => handleEditChange('featured', e.target.checked)}
                    className="bg-black border border-zinc-800"
                  />
                  Featured
                </label>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleEditSave}
                    className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleEditCancel}
                    className="border border-zinc-800 px-4 py-2 hover:bg-zinc-900 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-zinc-950 items-center">
                <div className="col-span-4">
                  <p className="font-medium">{project.title}</p>
                  <p className="text-zinc-500 text-sm truncate">{project.description}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-400 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="col-span-3 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-zinc-500">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="col-span-1">
                  {project.featured && (
                    <span className="text-emerald-500 text-sm">★</span>
                  )}
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <button
                    onClick={() => startEdit(project)}
                    className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 text-zinc-500 hover:text-red-500 hover:bg-zinc-800 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="border border-zinc-800 p-12 text-center">
          <p className="text-zinc-500">No projects yet. Add your first project!</p>
        </div>
      )}
    </div>
  );
}
