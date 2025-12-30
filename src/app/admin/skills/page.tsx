'use client';

import { useState } from 'react';
import { getSiteData } from '@/lib/data';
import { Save, Plus, Trash2, Edit2, X } from 'lucide-react';

export default function AdminSkillsPage() {
  const data = getSiteData();
  const [skills, setSkills] = useState(data.skills);
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newSkills, setNewSkills] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory && newSkills) {
      setSkills([
        ...skills,
        {
          category: newCategory,
          items: newSkills.split(',').map(s => s.trim()),
        }
      ]);
      setNewCategory('');
      setNewSkills('');
      setIsAdding(false);
    }
  };

  const handleDeleteCategory = (category: string) => {
    if (confirm('Are you sure you want to delete this skill category?')) {
      setSkills(skills.filter(s => s.category !== category));
    }
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
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Add Category Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Skill Category</h2>
            <button
              onClick={() => setIsAdding(false)}
              className="text-zinc-500 hover:text-white"
            >
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
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
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
      <div className="space-y-4">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="border border-zinc-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">{skillGroup.category}</h2>
              <div className="flex gap-2">
                <button className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors">
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
                  className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-400 flex items-center gap-2 group"
                >
                  {skill}
                  <button className="text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button className="text-xs font-mono border border-dashed border-zinc-700 px-3 py-2 text-zinc-600 hover:text-white hover:border-zinc-500 transition-colors">
                + Add Skill
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
