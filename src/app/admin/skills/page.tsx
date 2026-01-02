'use client';

import { useEffect, useState } from 'react';
import { getSiteData, type Skill } from '@/lib/data';
import { fetchSiteData, updateSiteData } from '@/lib/siteData';
import { useAuth } from '@/context/AuthContext';
import { Save, Plus, Trash2, Edit2, X, Check, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminSkillsPage() {
  const { user } = useAuth();
  const fallback = getSiteData();
  const [skills, setSkills] = useState<Skill[]>(fallback.skills);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newSkills, setNewSkills] = useState('');

  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editItems, setEditItems] = useState<string[]>([]);

  useEffect(() => {
    let active = true;
    fetchSiteData()
      .then((data) => {
        if (!active) return;
        setSkills(data.skills);
      })
      .catch((err) => {
        console.error('Failed to load skills', err);
        setError('Could not load from Firestore. Showing defaults.');
      })
      .finally(() => setLoading(false));
    return () => { active = false; };
  }, []);

  const saveSkills = async (updated: Skill[]) => {
    setSaving(true);
    setStatus('idle');
    setError('');
    try {
      await updateSiteData({ skills: updated }, user?.email);
      setSkills(updated);
      setStatus('saved');
    } catch (err) {
      console.error('Failed to save skills', err);
      setError('Failed to save. Please try again.');
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory || !newSkills) return;
    const updated = [
      ...skills,
      { category: newCategory, items: newSkills.split(',').map((s) => s.trim()).filter(Boolean) },
    ];
    await saveSkills(updated);
    setNewCategory('');
    setNewSkills('');
    setIsAdding(false);
  };

  const handleDeleteCategory = async (category: string) => {
    if (confirm('Are you sure you want to delete this skill category?')) {
      const updated = skills.filter((s) => s.category !== category);
      await saveSkills(updated);
    }
  };

  const startEditCategory = (skill: Skill) => {
    setEditingCategory(skill.category);
    setEditItems([...skill.items]);
  };

  const handleEditSave = async () => {
    if (!editingCategory) return;
    const updated = skills.map((s) =>
      s.category === editingCategory ? { ...s, items: editItems.map((i) => i.trim()).filter(Boolean) } : s
    );
    await saveSkills(updated);
    setEditingCategory(null);
    setEditItems([]);
  };

  const handleEditCancel = () => {
    setEditingCategory(null);
    setEditItems([]);
  };

  const handleRemoveSkillItem = (index: number) => {
    setEditItems(editItems.filter((_, i) => i !== index));
  };

  const handleAddSkillItem = () => {
    setEditItems([...editItems, '']);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">
            Manage your skill categories and technologies
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          disabled={loading}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
        >
          <Plus className="w-4 h-4" />
          Add Category
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
          Skills saved to Firestore.
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
        </div>
      )}

      {/* Add Category Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Skill Category</h2>
            <button onClick={() => setIsAdding(false)} className="text-zinc-500 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleAddCategory} className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Category Name</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="e.g., Programming Languages"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Skills (comma separated)</label>
              <input
                type="text"
                value={newSkills}
                onChange={(e) => setNewSkills(e.target.value)}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="JavaScript, Python, TypeScript"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={saving}
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Category
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

      {/* Skills List */}
      {!loading && (
        <div className="space-y-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="border border-zinc-800 p-6">
              {editingCategory === skillGroup.category ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-medium">{skillGroup.category}</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={handleEditSave}
                        disabled={saving}
                        className="p-2 text-emerald-500 hover:bg-zinc-800 transition-colors"
                      >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={handleEditCancel}
                        className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {editItems.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-400 flex items-center gap-2"
                      >
                        <input
                          value={item}
                          onChange={(e) => {
                            const updated = [...editItems];
                            updated[idx] = e.target.value;
                            setEditItems(updated);
                          }}
                          className="bg-transparent border-none outline-none w-24"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveSkillItem(idx)}
                          className="text-zinc-600 hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddSkillItem}
                      className="text-xs font-mono border border-dashed border-zinc-700 px-3 py-2 text-zinc-600 hover:text-white hover:border-zinc-500 transition-colors"
                    >
                      + Add Skill
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">{skillGroup.category}</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditCategory(skillGroup)}
                        className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(skillGroup.category)}
                        className="p-2 text-zinc-500 hover:text-red-500 hover:bg-zinc-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-400"
                      >
                        {skill}
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
