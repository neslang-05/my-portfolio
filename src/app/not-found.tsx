import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg text-center space-y-6">
          <p className="text-sm font-mono text-zinc-500">Error 404</p>
          <h1 className="text-4xl font-bold">Page not found</h1>
          <p className="text-zinc-400">
            The page you’re looking for doesn’t exist. Check the URL or head back to a safe place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/"
              className="bg-white text-black px-5 py-3 font-bold hover:bg-zinc-200 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="border border-zinc-800 px-5 py-3 font-bold text-white hover:bg-zinc-900 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
