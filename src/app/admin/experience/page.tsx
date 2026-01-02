'use client';

import { useEffect, useState } from 'react';
import { getSiteData, type Experience } from '@/lib/data';
import { fetchSiteData, updateSiteData } from '@/lib/siteData';
import { useAuth } from '@/context/AuthContext';
import { Save, Plus, Trash2, Edit2, X, Check, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminExperiencePage() {
  const { user } = useAuth();
  const fallback = getSiteData();
  const [experiences, setExperiences] = useState<Experience[]>(fallback.experience);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  const [isAdding, setIsAdding] = useState(false);
  const [newExp, setNewExp] = useState<Partial<Experience>>({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: [],
    technologies: [],
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editExp, setEditExp] = useState<Experience | null>(null);

  useEffect(() => {
    let active = true;
    fetchSiteData()
      .then((data) => {
        if (!active) return;
        setExperiences(data.experience);
      })
      .catch((err) => {
        console.error('Failed to load experience', err);
        setError('Could not load from Firestore. Showing defaults.');
      })
      .finally(() => setLoading(false));
    return () => { active = false; };
  }, []);

  const saveExperiences = async (updated: Experience[]) => {
    setSaving(true);
    setStatus('idle');
    setError('');
    try {
      await updateSiteData({ experience: updated }, user?.email);
      setExperiences(updated);
      setStatus('saved');
    } catch (err) {
      console.error('Failed to save experience', err);
      setError('Failed to save. Please try again.');
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExp.title || !newExp.company) return;
    const exp: Experience = {
      id: String(Date.now()),
      title: newExp.title || '',
      company: newExp.company || '',
      location: newExp.location || '',
      startDate: newExp.startDate || '',
      endDate: newExp.endDate || '',
      description: newExp.description || [],
      technologies: newExp.technologies || [],
    };
    const updated = [...experiences, exp];
    await saveExperiences(updated);
    setIsAdding(false);
    setNewExp({ title: '', company: '', location: '', startDate: '', endDate: '', description: [], technologies: [] });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this experience?')) {
      const updated = experiences.filter((e) => e.id !== id);
      await saveExperiences(updated);
    }
  };

  const startEdit = (exp: Experience) => {
    setEditingId(exp.id);
    setEditExp({ ...exp, description: [...exp.description], technologies: [...exp.technologies] });
  };

  const handleEditSave = async () => {
    if (!editExp) return;
    const updated = experiences.map((e) => (e.id === editExp.id ? editExp : e));
    await saveExperiences(updated);
    setEditingId(null);
    setEditExp(null);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditExp(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">Manage your work experience</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          disabled={loading}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
        >
          <Plus className="w-4 h-4" />
          Add Experience
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
          Experience saved to Firestore.
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
        </div>
      )}

      {/* Add Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Experience</h2>
            <button onClick={() => setIsAdding(false)} className="text-zinc-500 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Job Title</label>
                <input
                  type="text"
                  value={newExp.title || ''}
                  onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Software Engineer"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Company</label>
                <input
                  type="text"
                  value={newExp.company || ''}
                  onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Company Name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Location</label>
                <input
                  type="text"
                  value={newExp.location || ''}
                  onChange={(e) => setNewExp({ ...newExp, location: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="City, Country"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Start Date</label>
                <input
                  type="text"
                  value={newExp.startDate || ''}
                  onChange={(e) => setNewExp({ ...newExp, startDate: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Jan 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">End Date</label>
                <input
                  type="text"
                  value={newExp.endDate || ''}
                  onChange={(e) => setNewExp({ ...newExp, endDate: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Present"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Description (one per line)</label>
              <textarea
                value={(newExp.description || []).join('\n')}
                onChange={(e) => setNewExp({ ...newExp, description: e.target.value.split('\n') })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-32"
                placeholder="- Developed new features&#10;- Improved performance"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Technologies (comma separated)</label>
              <input
                type="text"
                value={(newExp.technologies || []).join(', ')}
                onChange={(e) => setNewExp({ ...newExp, technologies: e.target.value.split(',').map((t) => t.trim()) })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="React, TypeScript, Node.js"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={saving}
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Experience
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

      {/* Experience List */}
      {!loading && (
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="border border-zinc-800 p-6">
              {editingId === exp.id && editExp ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-2">Job Title</label>
                      <input
                        value={editExp.title}
                        onChange={(e) => setEditExp({ ...editExp, title: e.target.value })}
                        className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-2">Company</label>
                      <input
                        value={editExp.company}
                        onChange={(e) => setEditExp({ ...editExp, company: e.target.value })}
                        className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-2">Location</label>
                      <input
                        value={editExp.location}
                        onChange={(e) => setEditExp({ ...editExp, location: e.target.value })}
                        className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-2">Start Date</label>
                      <input
                        value={editExp.startDate}
                        onChange={(e) => setEditExp({ ...editExp, startDate: e.target.value })}
                        className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-2">End Date</label>
                      <input
                        value={editExp.endDate}
                        onChange={(e) => setEditExp({ ...editExp, endDate: e.target.value })}
                        className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Description (one per line)</label>
                    <textarea
                      value={editExp.description.join('\n')}
                      onChange={(e) => setEditExp({ ...editExp, description: e.target.value.split('\n') })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600 h-32"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Technologies (comma separated)</label>
                    <input
                      value={editExp.technologies.join(', ')}
                      onChange={(e) => setEditExp({ ...editExp, technologies: e.target.value.split(',').map((t) => t.trim()) })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
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
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold">{exp.title}</h2>
                      <p className="text-zinc-400">{exp.company}</p>
                      <p className="text-zinc-600 text-sm">{exp.location} • {exp.startDate} — {exp.endDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(exp)}
                        className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(exp.id)}
                        className="p-2 text-zinc-500 hover:text-red-500 hover:bg-zinc-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <ul className="text-zinc-400 text-sm space-y-1 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="before:content-['—'] before:mr-2 before:text-zinc-700">{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
