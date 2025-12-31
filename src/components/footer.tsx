import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Rss } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black hidden md:block">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-zinc-500 text-sm font-mono">
              © {currentYear} Nilambar Elangbam
            </p>
            <p className="text-zinc-700 text-xs font-mono mt-1">
              Built with Next.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/neslang-05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nilambar-elangbam-524617247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/nilambar_e/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:neslang.in@gmail.com"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <Link
              href="/rss"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="RSS Feed"
            >
              <Rss className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-wrap justify-center gap-6 text-xs font-mono">
          <Link href="/" className="text-zinc-600 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-zinc-600 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/resume" className="text-zinc-600 hover:text-white transition-colors">
            Resume
          </Link>
          <Link href="/blog" className="text-zinc-600 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-zinc-600 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
