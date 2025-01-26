import Link from "next/link"
import { Rss, Github, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">© Copyright 2025 — Nilambar Elangbam</p>
        <div className="flex items-center space-x-4">
          <Link href="/rss" className="text-gray-500 hover:text-gray-900">
            <Rss className="h-5 w-5" />
            <span className="sr-only">RSS feed</span>
          </Link>
          <Link href="https://github.com" className="text-gray-500 hover:text-gray-900">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://discord.com" className="text-gray-500 hover:text-gray-900">
            <Discord className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer