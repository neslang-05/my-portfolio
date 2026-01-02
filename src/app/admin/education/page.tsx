'use client';

import { useEffect, useState } from 'react';
import { getSiteData, type Education } from '@/lib/data';
import { fetchSiteData, updateSiteData } from '@/lib/siteData';
import { useAuth } from '@/context/AuthContext';
import { Save, Plus, Trash2, Edit2, X, Check, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminEducationPage() {
  const { user } = useAuth();
  const fallback = getSiteData();
  const [education, setEducation] = useState<Education[]>(fallback.education);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  const [isAdding, setIsAdding] = useState(false);
  const [newEdu, setNewEdu] = useState<Partial<Education>>({
    degree: '',
    institution: '',
    location: '',
    year: '',
    description: '',
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editEdu, setEditEdu] = useState<Education | null>(null);

  useEffect(() => {
    let active = true;
    fetchSiteData()
      .then((data) => {
        if (!active) return;
        setEducation(data.education);
      })
      .catch((err) => {
        console.error('Failed to load education', err);
        setError('Could not load from Firestore. Showing defaults.');
      })
      .finally(() => setLoading(false));
    return () => { active = false; };
  }, []);

  const saveEducation = async (updated: Education[]) => {
    setSaving(true);
    setStatus('idle');
    setError('');
    try {
      await updateSiteData({ education: updated }, user?.email);
      setEducation(updated);
      setStatus('saved');
    } catch (err) {
      console.error('Failed to save education', err);
      setError('Failed to save. Please try again.');
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEdu.degree || !newEdu.institution) return;
    const edu: Education = {
      id: String(Date.now()),
      degree: newEdu.degree || '',
      institution: newEdu.institution || '',
      location: newEdu.location || '',
      year: newEdu.year || '',
      description: newEdu.description,
    };
    const updated = [...education, edu];
    await saveEducation(updated);
    setIsAdding(false);
    setNewEdu({ degree: '', institution: '', location: '', year: '', description: '' });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this education entry?')) {
      const updated = education.filter((e) => e.id !== id);
      await saveEducation(updated);
    }
  };

  const startEdit = (edu: Education) => {
    setEditingId(edu.id);
    setEditEdu({ ...edu });
  };

  const handleEditSave = async () => {
    if (!editEdu) return;
    const updated = education.map((e) => (e.id === editEdu.id ? editEdu : e));
    await saveEducation(updated);
    setEditingId(null);
    setEditEdu(null);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditEdu(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Education</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">Manage your educational background</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          disabled={loading}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
        >
          <Plus className="w-4 h-4" />
          Add Education
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
          Education saved to Firestore.
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
            <h2 className="text-lg font-bold">New Education Entry</h2>
            <button onClick={() => setIsAdding(false)} className="text-zinc-500 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Degree / Certificate</label>
              <input
                type="text"
                value={newEdu.degree || ''}
                onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="Bachelor of Technology in Computer Science"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Institution</label>
                <input
                  type="text"
                  value={newEdu.institution || ''}
                  onChange={(e) => setNewEdu({ ...newEdu, institution: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="University Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Location</label>
                <input
                  type="text"
                  value={newEdu.location || ''}
                  onChange={(e) => setNewEdu({ ...newEdu, location: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="City, State"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Year</label>
              <input
                type="text"
                value={newEdu.year || ''}
                onChange={(e) => setNewEdu({ ...newEdu, year: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="2024 or Expected 2026"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Description (optional)</label>
              <textarea
                value={newEdu.description || ''}
                onChange={(e) => setNewEdu({ ...newEdu, description: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-20"
                placeholder="Additional details about your education"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={saving}
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Education
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

      {/* Education List */}
      {!loading && (
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="border border-zinc-800 p-6">
              {editingId === edu.id && editEdu ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Degree / Certificate</label>
                    <input
                      value={editEdu.degree}
                      onChange={(e) => setEditEdu({ ...editEdu, degree: e.target.value })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-2">Institution</label>
                      <input
                        value={editEdu.institution}
                        onChange={(e) => setEditEdu({ ...editEdu, institution: e.target.value })}
                        className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 mb-2">Location</label>
                      <input
                        value={editEdu.location}
                        onChange={(e) => setEditEdu({ ...editEdu, location: e.target.value })}
                        className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Year</label>
                    <input
                      value={editEdu.year}
                      onChange={(e) => setEditEdu({ ...editEdu, year: e.target.value })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Description (optional)</label>
                    <textarea
                      value={editEdu.description || ''}
                      onChange={(e) => setEditEdu({ ...editEdu, description: e.target.value })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600 h-20"
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
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold">{edu.degree}</h2>
                    <p className="text-zinc-400">{edu.institution}</p>
                    <p className="text-zinc-600 text-sm">{edu.location}</p>
                    {edu.description && <p className="text-zinc-500 text-sm mt-2">{edu.description}</p>}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-zinc-500">{edu.year}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(edu)}
                        className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(edu.id)}
                        className="p-2 text-zinc-500 hover:text-red-500 hover:bg-zinc-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
