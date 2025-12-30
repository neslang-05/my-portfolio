'use client';

import { useState } from 'react';
import { Save, Plus, Trash2, Edit2, X, Eye, EyeOff } from 'lucide-react';

// Sample blog posts
const samplePosts = [
  {
    id: "1",
    title: "Building an ALPR System with Raspberry Pi",
    excerpt: "A deep dive into creating an Automatic License Plate Recognition system using Raspberry Pi and Google Cloud Vision API.",
    content: "",
    date: "Dec 2024",
    tags: ["IoT", "Raspberry Pi", "Cloud"],
    slug: "alpr-raspberry-pi",
    published: true,
  },
  {
    id: "2",
    title: "Getting Started with LoRa for IoT Projects",
    excerpt: "An introduction to LoRa technology and how to use it for long-range IoT communication.",
    content: "",
    date: "Nov 2024",
    tags: ["IoT", "LoRa", "Hardware"],
    slug: "lora-iot-getting-started",
    published: true,
  },
];

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(samplePosts);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const togglePublish = (id: string) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, published: !p.published } : p
    ));
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-zinc-500 mt-1 font-mono text-sm">
            Manage your blog content
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Post
        </button>
      </div>

      {/* Add Post Form */}
      {isAdding && (
        <div className="border border-zinc-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">New Blog Post</h2>
            <button
              onClick={() => setIsAdding(false)}
              className="text-zinc-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Title</label>
              <input
                type="text"
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="Post title"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Slug</label>
              <input
                type="text"
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="post-url-slug"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Excerpt</label>
              <textarea
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-20"
                placeholder="Brief description of the post"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Content (Markdown)</label>
              <textarea
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600 h-64 font-mono text-sm"
                placeholder="# Your markdown content here..."
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Tags (comma separated)</label>
              <input
                type="text"
                className="w-full bg-black border border-zinc-800 px-4 py-2 text-white focus:outline-none focus:border-zinc-600"
                placeholder="IoT, Web Dev, Tutorial"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input type="checkbox" className="bg-black border border-zinc-800" />
                Publish immediately
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
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
      <div className="border border-zinc-800">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-800 text-xs font-mono text-zinc-500 uppercase">
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Tags</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        
        {posts.map((post) => (
          <div
            key={post.id}
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-zinc-900 hover:bg-zinc-950 items-center"
          >
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
                className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                title={post.published ? 'Unpublish' : 'Publish'}
              >
                {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              <button
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
        ))}
      </div>

      {posts.length === 0 && (
        <div className="border border-zinc-800 p-12 text-center">
          <p className="text-zinc-500">No blog posts yet. Create your first post!</p>
        </div>
      )}
    </div>
  );
}
