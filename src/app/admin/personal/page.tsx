'use client';

import { useState } from 'react';
import { getSiteData } from '@/lib/data';
import { Save } from 'lucide-react';

export default function AdminPersonalPage() {
  const data = getSiteData();
  const [formData, setFormData] = useState({
    name: data.personal.name,
    title: data.personal.title,
    email: data.personal.email,
    phone: data.personal.phone,
    location: data.personal.location,
    bio: data.personal.bio,
    github: data.social.github,
    linkedin: data.social.linkedin,
    instagram: data.social.instagram,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would save to Firestore
    console.log('Saving:', formData);
    alert('Changes saved! (In production, this would update Firestore)');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Personal Information</h1>
        <p className="text-zinc-500 mt-1 font-mono text-sm">
          Update your personal details and social links
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
        {/* Basic Info */}
        <div className="border border-zinc-800 p-6">
          <h2 className="text-lg font-bold mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Title / Role</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border border-zinc-800 p-6">
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="border border-zinc-800 p-6">
          <h2 className="text-lg font-bold mb-4">Bio</h2>
          <div>
            <label className="block text-sm font-mono text-zinc-400 mb-2">About Me</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600 h-48"
              placeholder="Write about yourself..."
            />
            <p className="text-xs text-zinc-600 mt-2">Use double line breaks to separate paragraphs</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="border border-zinc-800 p-6">
          <h2 className="text-lg font-bold mb-4">Social Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">GitHub</label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">LinkedIn</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Instagram</label>
              <input
                type="url"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </form>
    </div>
  );
}
