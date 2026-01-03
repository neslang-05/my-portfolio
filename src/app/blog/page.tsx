"use client";

import { useSiteData } from "@/context/SiteDataContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const { data, loading } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  const blogPosts = data.blogPosts || [];
  const publishedPosts = blogPosts.filter(post => post.published);

  // Get all unique tags
  const allTags = [...new Set(publishedPosts.flatMap(post => post.tags))];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="py-8 border-b border-zinc-800">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-zinc-400 max-w-2xl">
            Thoughts on technology, development, IoT, and everything else I find interesting.
          </p>
        </header>

        {/* Newsletter Subscribe */}
        <section className="py-8 border-b border-zinc-800">
          <div className="border border-zinc-800 p-6">
            <h2 className="text-lg font-bold mb-2">Subscribe to updates</h2>
            <p className="text-zinc-500 text-sm mb-4">
              Get notified when I publish something new. No spam, unsubscribe anytime.
            </p>
            <form className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-black border border-zinc-800 px-10 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 font-mono text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 font-bold hover:bg-zinc-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Recent Posts</h2>
          
          <div className="space-y-1">
            {publishedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="flex items-start justify-between py-6 border-b border-zinc-900 hover:bg-zinc-950 -mx-4 px-4 transition-colors group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-lg group-hover:text-white transition-colors">{post.title}</h3>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                  <p className="text-zinc-500 text-sm mt-2 max-w-xl">{post.excerpt}</p>
                  <div className="flex gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-600 ml-4 flex-shrink-0">{post.date}</span>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {publishedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Tags Section */}
        {allTags.length > 0 && (
          <section className="py-12 border-t border-zinc-800">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Topics</h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag.toLowerCase().replace(' ', '-')}`}
                  className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

