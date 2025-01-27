"use client";
import { SubscribeForm } from "@/components/subscribe-form"
import { BlogPosts } from "@/components/blog-post"
import NavbarSet from "@/components/ui/navbar-set";
import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex flex-row justify-center py-4">
          <NavbarSet />
        </div>
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
      <Footer />
    </div>
  )
}

