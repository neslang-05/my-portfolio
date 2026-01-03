'use client';

import { useEffect, useState } from 'react';
import { getSiteData, type BlogPost } from '@/lib/data';
import { fetchSiteData, updateSiteData } from '@/lib/siteData';
import { useAuth } from '@/context/AuthContext';
import { Save, Plus, Trash2, Edit2, X, Eye, EyeOff, Check, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminBlogPage() {
  const { user } = useAuth();
  const fallback = getSiteData();
  const [posts, setPosts] = useState<BlogPost[]>(fallback.blogPosts);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  const [isAdding, setIsAdding] = useState(false);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    date: '',
    tags: [],
    published: false,
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPost, setEditPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    let active = true;
    fetchSiteData()
      .then((data) => {
        if (!active) return;
        setPosts(data.blogPosts);
      })
      .catch((err) => {
        console.error('Failed to load blog posts', err);
        setError('Could not load from Firestore. Showing defaults.');
      })
      .finally(() => setLoading(false));
    return () => { active = false; };
  }, []);

  const savePosts = async (updated: BlogPost[]) => {
    setSaving(true);
    setStatus('idle');
    setError('');
    try {
      await updateSiteData({ blogPosts: updated }, user?.email);
      setPosts(updated);
      setStatus('saved');
    } catch (err) {
      console.error('Failed to save blog posts', err);
      setError('Failed to save. Please try again.');
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.excerpt) return;
    const post: BlogPost = {
      id: String(Date.now()),
      title: newPost.title || '',
      slug: newPost.slug || newPost.title?.toLowerCase().replace(/\s+/g, '-') || '',
      excerpt: newPost.excerpt || '',
      content: newPost.content || '',
      date: newPost.date || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      tags: newPost.tags || [],
      published: newPost.published || false,
    };
    const updated = [...posts, post];
    await savePosts(updated);
    setIsAdding(false);
    setNewPost({ title: '', slug: '', excerpt: '', content: '', date: '', tags: [], published: false });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updated = posts.filter((p) => p.id !== id);
      await savePosts(updated);
    }
  };

  const togglePublish = async (id: string) => {
    const updated = posts.map((p) => (p.id === id ? { ...p, published: !p.published } : p));
    await savePosts(updated);
  };

  const startEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setEditPost({ ...post, tags: [...post.tags] });
  };

  const handleEditSave = async () => {
    if (!editPost) return;
    const updated = posts.map((p) => (p.id === editPost.id ? editPost : p));
    await savePosts(updated);
    setEditingId(null);
    setEditPost(null);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditPost(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">Manage your blog content</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          disabled={loading}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
        >
          <Plus className="w-4 h-4" />
          New Post
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
          Blog posts saved to Firestore.
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
        </div>
      )}

      {/* Add Post Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Blog Post</h2>
            <button onClick={() => setIsAdding(false)} className="text-zinc-500 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Title</label>
              <input
                type="text"
                value={newPost.title || ''}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="Post title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Slug</label>
              <input
                type="text"
                value={newPost.slug || ''}
                onChange={(e) => setNewPost({ ...newPost, slug: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="post-url-slug"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Excerpt</label>
              <textarea
                value={newPost.excerpt || ''}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-20"
                placeholder="Brief description of the post"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Content (Markdown)</label>
              <textarea
                value={newPost.content || ''}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-64 font-mono text-sm"
                placeholder="# Your markdown content here..."
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Tags (comma separated)</label>
              <input
                type="text"
                value={(newPost.tags || []).join(', ')}
                onChange={(e) => setNewPost({ ...newPost, tags: e.target.value.split(',').map((t) => t.trim()) })}
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="IoT, Web Dev, Tutorial"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  checked={newPost.published || false}
                  onChange={(e) => setNewPost({ ...newPost, published: e.target.checked })}
                  className="bg-black border border-zinc-800"
                />
                Publish immediately
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={saving}
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Post
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

      {/* Posts List */}
      {!loading && (
        <div className="border border-zinc-800">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-800 text-xs font-mono text-zinc-500 uppercase">
            <div className="col-span-5">Title</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Tags</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="border-b border-zinc-900">
              {editingId === post.id && editPost ? (
                <div className="px-6 py-5 space-y-4 bg-zinc-950">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Title</label>
                    <input
                      value={editPost.title}
                      onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Slug</label>
                    <input
                      value={editPost.slug}
                      onChange={(e) => setEditPost({ ...editPost, slug: e.target.value })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Excerpt</label>
                    <textarea
                      value={editPost.excerpt}
                      onChange={(e) => setEditPost({ ...editPost, excerpt: e.target.value })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600 h-20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Content (Markdown)</label>
                    <textarea
                      value={editPost.content}
                      onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
                      className="w-full bg-black border border-zinc-800 px-3 py-2 text-white focus:outline-none focus:border-zinc-600 h-64 font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2">Tags (comma separated)</label>
                    <input
                      value={editPost.tags.join(', ')}
                      onChange={(e) => setEditPost({ ...editPost, tags: e.target.value.split(',').map((t) => t.trim()) })}
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
                <div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-zinc-950 items-center">
                  <div className="col-span-5">
                    <p className="font-medium">{post.title}</p>
                    <p className="text-zinc-500 text-sm truncate">{post.excerpt}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-zinc-500 text-sm font-mono">{post.date}</span>
                  </div>
                  <div className="col-span-2 flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-1">
                    {post.published ? (
                      <span className="text-emerald-500 text-xs font-mono">Published</span>
                    ) : (
                      <span className="text-zinc-600 text-xs font-mono">Draft</span>
                    )}
                  </div>
                  <div className="col-span-2 flex justify-end gap-2">
                    <button
                      onClick={() => togglePublish(post.id)}
                      disabled={saving}
                      className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                      title={post.published ? 'Unpublish' : 'Publish'}
                    >
                      {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => startEdit(post)}
                      className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
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

      {!loading && posts.length === 0 && (
        <div className="border border-zinc-800 p-12 text-center">
          <p className="text-zinc-500">No blog posts yet. Create your first post!</p>
        </div>
      )}
    </div>
  );
}
