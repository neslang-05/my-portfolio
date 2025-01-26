"use client";
import { SubscribeForm } from "@/components/ui/subscribe-form"
import { BlogPosts } from "@/components/ui/blog-post"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-2xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-2xl font-normal text-gray-900 mb-4">ashu.me - a blog by Nilambar Elangbam</h1>
          <p className="text-gray-600 mb-8">
            Bi-weekly updates about things that interest me, things I have built and things I have learned.
          </p>
          <SubscribeForm />
          <div className="mt-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Previous issues
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-normal text-gray-900 mb-8">
            Recent posts on SwiftUI, React, and everything else I write about
          </h2>
          <BlogPosts />
        </section>
      </main>
    </div>
  )
}

