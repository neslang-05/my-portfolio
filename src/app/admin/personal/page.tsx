'use client';

import { useEffect, useState } from 'react';
import { Save, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { getSiteData } from '@/lib/data';
import { fetchSiteData, updateSiteData } from '@/lib/siteData';

export default function AdminPersonalPage() {
  const { user } = useAuth();
  const fallback = getSiteData();
  const [formData, setFormData] = useState({
    name: fallback.personal.name,
    title: fallback.personal.title,
    email: fallback.personal.email,
    phone: fallback.personal.phone,
    location: fallback.personal.location,
    bio: fallback.personal.bio,
    github: fallback.social.github,
    linkedin: fallback.social.linkedin,
    instagram: fallback.social.instagram,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    fetchSiteData()
      .then((data) => {
        if (!active) return;
        setFormData({
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
      })
      .catch((err) => {
        console.error('Failed to load site data', err);
        setError('Could not load data from Firestore. Showing defaults.');
      })
      .finally(() => setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatus('idle');
    setError('');

    try {
      await updateSiteData(
        {
          personal: {
            name: formData.name,
            title: formData.title,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            bio: formData.bio,
          },
          social: {
            github: formData.github,
            linkedin: formData.linkedin,
            instagram: formData.instagram,
          },
        },
        user?.email
      );
      setStatus('saved');
    } catch (err) {
      console.error('Failed to save site data', err);
      setError('Failed to save to Firestore. Please try again.');
      setStatus('error');
    } finally {
      setSaving(false);
    }
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

      {error && (
        <div className="mb-4 flex items-center gap-2 rounded border border-red-900/50 bg-red-950/40 px-4 py-3 text-sm text-red-200">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {status === 'saved' && !error && (
        <div className="mb-4 flex items-center gap-2 rounded border border-emerald-900/50 bg-emerald-950/40 px-4 py-3 text-sm text-emerald-200">
          <CheckCircle2 className="h-4 w-4" />
          Changes saved to Firestore.
        </div>
      )}

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
                disabled={loading}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Title / Role</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                disabled={loading}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                disabled={loading}
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
                disabled={loading}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={loading}
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
              disabled={loading}
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
                disabled={loading}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">LinkedIn</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                disabled={loading}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Instagram</label>
              <input
                type="url"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                disabled={loading}
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={saving || loading}
          className="bg-white text-black px-6 py-3 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
