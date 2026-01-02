'use client';

import { useEffect, useState } from 'react';
import { getSiteData, type Project } from '@/lib/data';
import { fetchSiteData, updateSiteData } from '@/lib/siteData';
import { useAuth } from '@/context/AuthContext';
import { Save, Plus, Trash2, Edit2, X, Check, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminProjectsPage() {
  const { user } = useAuth();
  const fallback = getSiteData();
  const [projects, setProjects] = useState<Project[]>(fallback.projects);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    slug: '',
    description: '',
    github: '',
    technologies: [],
    category: 'web',
    featured: false,
  });

  const categories = ['web', 'iot', 'ai', 'data', 'tools', 'other'] as const;

  useEffect(() => {
    let active = true;
    fetchSiteData()
      .then((data) => {
        if (!active) return;
        setProjects(data.projects);
      })
      .catch((err) => {
        console.error('Failed to load projects', err);
        setError('Could not load from Firestore. Showing defaults.');
      })
      .finally(() => setLoading(false));
    return () => { active = false; };
  }, []);

  const saveProjects = async (updated: Project[]) => {
    setSaving(true);
    setStatus('idle');
    setError('');
    try {
      await updateSiteData({ projects: updated }, user?.email);
      setProjects(updated);
      setStatus('saved');
    } catch (err) {
      console.error('Failed to save projects', err);
      setError('Failed to save. Please try again.');
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (project: Project) => {
    setIsEditing(project.id);
    setEditProject({ ...project, technologies: [...project.technologies] });
  };

  const handleEditChange = (field: keyof Project, value: string | boolean | string[]) => {
    setEditProject((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleEditSave = async () => {
    if (!editProject) return;
    const cleanedTech = editProject.technologies.map((t) => t.trim()).filter(Boolean);
    const updated = projects.map((p) =>
      p.id === editProject.id ? { ...editProject, technologies: cleanedTech } : p
    );
    await saveProjects(updated);
    setIsEditing(null);
    setEditProject(null);
  };

  const handleEditCancel = () => {
    setIsEditing(null);
    setEditProject(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updated = projects.filter((p) => p.id !== id);
      await saveProjects(updated);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) return;

    const project: Project = {
      id: String(Date.now()),
      slug: newProject.slug || newProject.title?.toLowerCase().replace(/\s+/g, '-') || '',
      title: newProject.title || '',
      description: newProject.description || '',
      github: newProject.github || '',
      technologies: newProject.technologies || [],
      category: newProject.category as Project['category'] || 'web',
      featured: newProject.featured || false,
    };
    const updated = [...projects, project];
    await saveProjects(updated);
    setIsAdding(false);
    setNewProject({
      title: '',
      slug: '',
      description: '',
      github: '',
      technologies: [],
      category: 'web',
      featured: false,
    });
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
          disabled={loading}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {error && (
        <div className="mb-4 flex items-center gap-2 rounded border border-red-900/50 bg-red-950/40 px-4 py-3 text-sm text-red-200">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {status === 'saved' && !error && (
        <div className="mb-4 flex items-center gap-2 rounded border border-emerald-900/50 bg-emerald-950/40 px-4 py-3 text-sm text-emerald-200">
          <CheckCircle2 className="h-4 w-4" />
          Projects saved to Firestore.
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
        </div>
      )}

      {/* Add Project Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Project</h2>
            <button onClick={() => setIsAdding(false)} className="text-zinc-500 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleAddProject} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Title</label>
                <input
                  type="text"
                  value={newProject.title || ''}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Project title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Category</label>
                <select
                  value={newProject.category || 'web'}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value as Project['category'] })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Description</label>
              <textarea
                value={newProject.description || ''}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-24"
                placeholder="Project description"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">GitHub URL</label>
              <input
                type="url"
                value={newProject.github || ''}
                onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Technologies (comma separated)</label>
              <input
                type="text"
                value={(newProject.technologies || []).join(', ')}
                onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value.split(',').map((t) => t.trim()) })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="React, TypeScript, Node.js"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  checked={newProject.featured || false}
                  onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                  className="bg-black border border-zinc-800"
                />
                Featured
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={saving}
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
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
      {!loading && (
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
                      disabled={saving}
                      className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
                    >
                      {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
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
                    {project.featured && <span className="text-emerald-500 text-sm">★</span>}
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
      )}

      {!loading && projects.length === 0 && (
        <div className="border border-zinc-800 p-12 text-center">
          <p className="text-zinc-500">No projects yet. Add your first project!</p>
        </div>
      )}
    </div>
  );
}
