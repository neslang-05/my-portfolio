'use client';

import { useState } from 'react';
import { getSiteData } from '@/lib/data';
import { Save, Plus, Trash2, Edit2, X } from 'lucide-react';

export default function AdminExperiencePage() {
  const data = getSiteData();
  const [experiences, setExperiences] = useState(data.experience);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this experience?')) {
      setExperiences(experiences.filter(e => e.id !== id));
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">
            Manage your work experience
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>

      {/* Add Experience Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Experience</h2>
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
                <label className="block text-sm font-mono text-zinc-400 mb-2">Job Title</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="City, Country"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Start Date</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Jan 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">End Date</label>
                <input
                  type="text"
                  className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                  placeholder="Present"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Description (one per line)</label>
              <textarea
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-32"
                placeholder="- Developed new features&#10;- Improved performance&#10;- Led a team of 3 developers"
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
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
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
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="border border-zinc-800 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold">{exp.title}</h2>
                <p className="text-zinc-400">{exp.company}</p>
                <p className="text-zinc-600 text-sm">{exp.location} • {exp.startDate} — {exp.endDate}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors">
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
          </div>
        ))}
      </div>
    </div>
  );
}
