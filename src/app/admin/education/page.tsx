'use client';

import { useState } from 'react';
import { getSiteData } from '@/lib/data';
import { Save, Plus, Trash2, Edit2, X } from 'lucide-react';

export default function AdminEducationPage() {
  const data = getSiteData();
  const [education, setEducation] = useState(data.education);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this education entry?')) {
      setEducation(education.filter(e => e.id !== id));
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Education</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">
            Manage your educational background
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Education
        </button>
      </div>

      {/* Add Education Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Education Entry</h2>
            <button
              onClick={() => setIsAdding(false)}
              className="text-zinc-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Degree / Certificate</label>
              <input
                type="text"
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="Bachelor of Technology in Computer Science"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Institution</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="University Name"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="City, State"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Year</label>
              <input
                type="text"
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="2024 or Expected 2026"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Description (optional)</label>
              <textarea
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-20"
                placeholder="Additional details about your education"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
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
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="border border-zinc-800 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold">{edu.degree}</h2>
                <p className="text-zinc-400">{edu.institution}</p>
                <p className="text-zinc-600 text-sm">{edu.location}</p>
                {edu.description && (
                  <p className="text-zinc-500 text-sm mt-2">{edu.description}</p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-zinc-500">{edu.year}</span>
                <div className="flex gap-2">
                  <button className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors">
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
          </div>
        ))}
      </div>
    </div>
  );
}
